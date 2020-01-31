import * as express from 'express';
import * as url from 'url';
import * as path from 'path';
import * as jwt from 'jsonwebtoken';
import * as log4js from 'log4js';

// Importo configuracion de Redis
import { REDIS_SESSION_PERSISTENCE } from '../config/redis.config';

// Importo configuracion de JWT
import { JWT_SECRET } from '../config/jwt.config';

// Importo modelos
import { User } from '../models/user.model';
import { Role } from '../models/role.model';

// Importo servicio con funciones para MSSQL
import { MSSql } from '../db/mssql.service';

// Importo servicio con funciones para Redis
import { Redis } from '../db/redis.service';

// Importo funciones para manejo de request y sesiones
import { DummyPromise } from '../shared/promises.shared';

// Import funciones de otros servicios
import { GetUser } from '../services/user.service';
import { GetRole } from '../services/role.service';

// Obtengo logger
let logger = log4js.getLogger('ServerScripts');

export function ValidateUserSession(req: express.Request, res: express.Response, next: any) {

	// La validacion es solo para las URL de api y builder, cualquier otra cosa pasa
	if (!req.url.match('^\/(api|auth|builder)\/')) return next();

	// Instancia asociada a la URL en la que se recibio el request
	let vcc: string = res.locals.vcc;

	// Datos de la sesion obtenida del request
	let requestSession: string;
	let decodedRequestSession: any;
	let decodedStoredSession: any;
	let decodedUserId: string;

	// Es request del servicio de autenticacion
	let isLoginRequest: boolean = !!req.url.match('^\/auth\/login');
	let isLogoutRequest: boolean = !!req.url.match('^\/auth\/logout');
    let isPublicResource: boolean = !!req.url.match('^\/api\/public');

	// Si es un request de login o es publico no hace falta lo siguiente
    if (isLoginRequest || isPublicResource) return next();

	// Usuario y rol asociado a la sesion del request
	let userId: string;
	let user: User;
	let roleId: string;
	let role: Role;

	// Empiezo con promesa dummy para poder hacer throw y caer en el catch
	DummyPromise()
		.then(
			result => {
				// Obtengo el token de autenticacion
				if (req.url.match('^\/builder\/')) {
					// En el caso builder la obtengo de la cookie (es una web separada de la aplicación)
					requestSession = req.cookies['Session'];
				} else {
					// Cualquier otro caso (api) la obtengo del header de autenticacion
					requestSession = (req.headers['authorization'] || '').replace('bearer ', '');
				}

				// Verifico que se haya recibido token
				if (!requestSession) throw 'No se recibió token de autenticación.';

				// Guardo la sesion como variable local del request
				res.locals.session = requestSession;

				// Si tengo sesion pero la cookie no esta seteada la agrego
				if (res.locals.session && !req.cookies['Session'] && !isLogoutRequest) {
					// Agrego la sesion a las cookies para usar la autenticacion en webs fuera de angular
					res.cookie('Session', res.locals.session, { httpOnly: true });
				}

				// Obtengo el id de usuario a partir de la sesion (ya me viene pasado a minuscula)
				userId = GetUserIdFromSession(res.locals.session);

				// Verifico que se haya obtenido un userId
				if (!userId) throw 'No se pudo obtener usuario asociado a la sesión';

				// Guardo el usuario como variable local del request
				res.locals.userId = userId;

				// Obtendo los datos del usuario
				return GetUser(userId);
			}
		).then(
			resultUser => {
				// Valido que este todo lo necesario
				if (!resultUser) throw 'No se pudo obtener la información del usuario \'' + userId + '\'.';

				// Guardo el dato obtenido
				user = resultUser;
				roleId = user.role;

				// Guardo el objeto usuario como variable local del request
				res.locals.user = user;

				// Obtengo los datos del rol asociado al usuario
				return GetRole(roleId);
			}
		).then(
			resultRole => {
				// Valido que este todo lo necesario
				if (!resultRole) throw 'No se pudo obtener la información del rol \'' + roleId + '\' del usuario \'' + userId + '\'.';

				// Guardo el dato obtenido
				role = resultRole;

				// Guardo el objeto rol como variable local del request
				res.locals.userRole = resultRole;

				// Decodifico la sesion recibida a partir del token
				try {
					decodedRequestSession = jwt.verify(requestSession, JWT_SECRET);
				} catch (e) {
					decodedRequestSession = null;
				}

				// Si no obtuve sesion decodificada no sigo
				if (!decodedRequestSession) throw 'No se pudo decodificar el token recibido';

				// Obtengo el id de usuario a partir de la sesion decodificada
				decodedUserId = (decodedRequestSession.userId || '').toLowerCase();

				// Consulto la sesion almacenada en cache
				return Redis.GetSession( decodedUserId);
			}
		).then(
			storedSession => {
				// Si los token coinciden doy por valida la sesion
				if (storedSession === requestSession) return true;

				// Si el token es valido pero no tengo sesion almacenada, guardo la sesion recibida en redis y doy por valida la autenticacion
				if (!storedSession && decodedRequestSession) return Redis.SaveSession(vcc, decodedUserId, requestSession);
				
				// Decodifico la sesion guardada a partir del token
				try {
					decodedStoredSession = jwt.verify(storedSession, JWT_SECRET);
					
				} catch (e) {
					decodedStoredSession = null;
				}

				// Si las dos sesiones existe y no coinciden, pero la recibida es mas nueva que la almacenada, guardo la sesion recibida en redis y doy por valida la autenticacion
				if (decodedRequestSession && decodedStoredSession && decodedRequestSession.iat >= decodedStoredSession.iat) return Redis.SaveSession(vcc, decodedUserId, requestSession);

				// La sesión no es valida
				logger.warn('Sesión inválida: El token recibido no es válido.');

				// Si alguno de los pasos anteriores ya envio respuesta, no sigo
				if (res.headersSent) return;

				// Devuelvo respuesta de sesion invalida segun el caso
				if (req.url.match('^\/builder\/')) {
					// Devuelvo 401 hacia el cliente con texto
					res.status(401).type('txt').send('Invalid session');
				} else {
					// Devuelvo 401 hacia el cliente con json
					res.status(401).json({ description: 'Invalid session token', error: 'Invalid session' });
				}

				// Interrumpo la ejecucion
				return false;
			}
		).then(
			result => {
				// Si lo anterior devolvio true doy por valida la autenticacion
				if (result) return next();
			}
		).catch(
			(err: any) => {
				// Obtengo el mensaje de error, que es lo que se va a enviar hacia atras
				let errMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');

				// Escribo a log
				logger.error('Error al procesar \'' + req.path + '\': ' + errMsg);

				// Si alguno de los pasos anteriores ya envio respuesta, no sigo
				if (res.headersSent) return;

				// Devuelvo respuesta de sesion invalida segun el caso
				if (req.url.match('^\/builder\/')) {
					// Devuelvo 401 hacia el cliente con texto
					res.status(401).type('txt').send('Invalid session');
				} else {
					// Devuelvo 401 hacia el cliente con json
					res.status(401).json({ description: 'Invalid session token', error: 'Invalid session' });
				}
			}
		);
}

export function GetUserIdFromSession(session: string): string {

	try {
		// Si no hay sesion no sigo
		if (session) {
			// Decodifico el token usando la clave
			let decoded: any = jwt.verify(session, JWT_SECRET);
			// Si se obtiene userId asociado a la sesion lo devuelvo
			if (decoded.userId) return decoded.userId.toLowerCase();
		}
	} catch (err) {
		// Obtengo el mensaje de error
		let errMsg: string = (typeof err === 'string' ? err : err.message || err.description || '');
		// Escribo a log
		logger.error('Error el decodificar datos de la sesion: ' + errMsg);
	}
	// No se obtuvo usuario
	return null;
}
