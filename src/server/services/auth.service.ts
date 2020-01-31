import * as express from 'express';
import * as moment from 'moment';
import * as jwt from 'jsonwebtoken';
import * as log4js from 'log4js';

// Importo configuracion de JWT
import { JWT_SECRET, JWT_EXPIRATION_TIME } from '../config/jwt.config';

// Importo modelos
import { User } from '../models/user.model';

// Importo servicio con funciones para MSSQL
import { MSSql } from '../db/mssql.service';

// Importo servicio con funciones para Redis
import { Redis } from '../db/redis.service';

// Import funciones de otros servicios
import { GetUser } from './user.service';
import { GetRole } from './role.service';

// Importo funciones para manejo de request y sesiones
import { DummyPromise } from '../shared/promises.shared';
import { Role } from '../models/role.model';
import { InsertUserHistory } from '../db/mssql/auth.mssql';

// Obtengo logger
let logger = log4js.getLogger('ServerScripts');

export function AuthService(app: express.Application) {

	app.post('/auth/login',
		(req: express.Request, res: express.Response, next: any) => {

			logger.info('[AuthService::login] Received ' + req.method + ' method on \'' + req.path + '\'');

			// Obtengo fecha y hora actual
			let nowUtc: Date = moment().utc().toDate();
			// Parámetros capturados del contenido del post
			let credential: string = req.body.userId;
			let credentials: string[] = credential.split('@');
			let userId: string = credentials.length > 0 ? credentials[0] : '';
			let password: string = req.body.password;
			let vcc: string = res.locals.vcc;

			// Datos de la sesion
			let session: string;
			let user: User;
			let role: Role;

			// Empiezo con promesa dummy para poder hacer throw y caer en el catch
			DummyPromise()
				.then(
					result => {
						// Valido que este todo lo necesario
						if (!userId || !password) throw 'Missing userId and password input parameters';

						// Paso el usuario a minuscula
						userId = userId.toLowerCase();

						// Ejecuto consulta a base de datos
						return MSSql.ValidateUserLogin(userId, password);
					}
				).then(
					resultValidateUserLogin => {
						// Fallo la autentiacion
						if (!resultValidateUserLogin) throw 'El usuario ó contraseña no son correctos';

						// Genero un nuevo token para la sesion
						session = jwt.sign({ userId: userId }, JWT_SECRET, { expiresIn: JWT_EXPIRATION_TIME });


						// Registro la sesion en el cache en memoria
						return Redis.SaveSession(userId, session);
					}
				).then(
					resultSaveSession => {
						// Verifico que no fallo el query anterior
						if (!resultSaveSession) throw 'Cannot save session cache on Redis';

						// Obtengo info del usuario para devolver
						return GetUser(userId);
					}
				).then(
					resultUser => {
						// Verifico que no fallo el query anterior
						if (!resultUser) throw 'Cannot get user data';

						// Guardo el dato obtenido
						user = resultUser;

						// Mando a hacer el tracking de actividad
						return MSSql.InsertUserHistory(userId, user.role, 'Login', nowUtc, session);
					}
				).then(
					resultInsertUserHistory => {
						// Verifico que no fallo el query anterior
						if (!resultInsertUserHistory) throw 'Cannot save session login history on database';
						// Obtengo info del usuario para devolver
						return GetRole(user.role);
					}
				).then(
					resultRole => {
						// Verifico que no fallo el query anterior
						if (!resultRole) throw 'Cannot get user role data';

						// Guardo el dato obtenido
						role = resultRole;

						// Si me falta el usuario o la sesion y nada anterior tiro un error, mando uno generico
						if (!session || !user || !role) throw 'Se produjo un error al iniciar la sesión';

						// Armo objeto para repuesta
						let data: any = {
							session: session,
							loggedUser: user,
							loggedUserRole: role
						};

						// Agrego la sesion a las cookies para usar la autenticacion en webs fuera de angular
						res.cookie('Session', session, { httpOnly: true });

						// Escribo a log
						logger.info('[AuthService::/auth/login] Se inicio sesion ' + session + ' para el usuario ' + userId + '@');

						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;

						// Envio respuesta con el resultado recibido del ultimo paso
						res.json({ status: true, description: 'OK', data: data });
					}
				).catch(
					err => {
						// Obtengo mensajes de error
						let clientMsg: string = (typeof err === 'string' ? err : 'Login failed');
						let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');

						// Escribo el error en el log
						logger.error('[AuthService::/auth/login] Error logging for user ' + userId + ' : ' + errorMsg);

						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;
						// Devuelvo respuesta con el mensaje obtenido
						res.status(401).json({ status: false, description: clientMsg, error: errorMsg });
					}
				);
		});

	app.post('/auth/logout',
		(req: express.Request, res: express.Response, next: any) => {

			logger.info('Se recibio ' + req.method + ' para \'' + req.path + '\'');


			// Usuario asociado a la sesion que envio el request
			let userId: string = res.locals.userId;
			let user: User = res.locals.user;
			// Obtengo fecha y hora actual
			let nowUtc: Date = moment().utc().toDate();

			// Datos recibidos en el request
			let session: string = req.body.session || res.locals.session || '';

			// Empiezo con promesa dummy para poder hacer throw y caer en el catch
			DummyPromise()
				.then(
					result => {
						// Borro la sesion en el cache en memoria
						return Redis.DeleteSession(userId);
					}
				).then(
					result => {

						// Borro los permisos del cache
						return Redis.DeleteUserById(userId);
					}
				).then(
					result => {
						// Mando a hacer el tracking de actividad
						return MSSql.InsertUserHistory(userId, user.role, 'Logout', nowUtc, session);
					}
				).then(
					result => {
						// Borro la cookie de la sesión
						res.clearCookie('Session');

						// Escribo a log
						logger.info('Se finalizo sesion ' + session + ' para el usuario ' + userId);

						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;

						// Envio respuesta con el resultado recibido del ultimo paso
						res.json({ status: result, description: (result ? 'OK' : 'Logout failed'), data: result });
					}
				).catch(
					err => {
						// Obtengo mensajes de error
						let clientMsg: string = (typeof err === 'string' ? err : 'Logout failed');
						let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');

						// Escribo el error en el log
						logger.error('Error al finalizar sesion para el usuario ' + userId + ' : ' + errorMsg);

						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;
						// Devuelvo respuesta con el mensaje obtenido
						res.status(401).json({ status: false, description: clientMsg, error: errorMsg });
					}
				);
		});

	app.get('/auth/get_user_session_data',
		(req: express.Request, res: express.Response, next: any) => {

			logger.info('Se recibio ' + req.method + ' para \'' + req.path + '\'');


			// Usuario asociado a la sesion que envio el request
			let userId: string = res.locals.userId;


			// Paso el id de usuario a minuscula
			userId = (userId || '').toLowerCase();
			// Datos para el usuario
			let session: string;
			let user: User;
			let role: Role;

			// Empiezo con promesa dummy para poder hacer throw y caer en el catch
			DummyPromise()
				.then(
					result => {
						// Obtengo la sesion del usuario para devolver
						return Redis.GetSession(userId);
					}
				).then(
					resultSession => {
						// Verifico que no fallo el query anterior
						if (!resultSession) throw 'Cannot get user session';

						// Guardo el dato obtenido
						session = resultSession;

						// Obtengo info del usuario para devolver
						return GetUser(userId);
					}
				).then(
					resultUser => {
						// Verifico que no fallo el query anterior
						if (!resultUser) throw 'Cannot get user data';

						// Guardo el dato obtenido
						user = resultUser;

						// Obtengo info del usuario para devolver
						return GetRole(user.role);
					}
				).then(
					resultRole => {
						// Verifico que no fallo el query anterior
						if (!resultRole) throw 'Cannot get user role data';

						// Guardo el dato obtenido
						role = resultRole;

						// Si me falta el usuario o la sesion y nada anterior tiro un error, mando uno generico
						if (!session || !user || !role) throw 'Se produjo un error al iniciar la sesión';

						// Armo objeto para repuesta
						let data: any = {
							session: session,
							loggedUser: user,
							loggedUserRole: role
						};

						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;

						// Envio respuesta con el resultado recibido del ultimo paso
						res.json({ status: true, description: 'OK', data: data });
					}
				).catch(
					err => {
						// Obtengo mensajes de error
						let clientMsg: string = (typeof err === 'string' ? err : 'Cannot process request');
						let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');

						// Escribo el error en el log
						logger.error('Error al procesar \'' + req.path + '\': ' + errorMsg);

						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;
						// Devuelvo respuesta con el mensaje obtenido
						res.json({ status: false, description: clientMsg, error: errorMsg });
					}
				);
		});
}
