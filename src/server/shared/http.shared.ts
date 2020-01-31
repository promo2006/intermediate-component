import * as express from 'express';
import * as url from 'url';
import * as jwt from 'jsonwebtoken';
import * as log4js from 'log4js';

// Importo configuracion de JWT
import { JWT_SECRET } from '../config/jwt.config';

// Importo modelos
import { Domain } from '../models/domain.model';

// Importo servicio con funciones para MSSQL
import { MSSql } from '../db/mssql.service';

// Importo servicio con funciones para Redis
import { Redis } from '../db/redis.service';

// Obtengo logger
let logger = log4js.getLogger('ServerScripts');

export function GetRequestData(req: express.Request, res: express.Response, next: any) {
	// Acomodo el host para que tenga forma de url
	let host: string = req.headers['host'] || '';
	if (host.match(/^http:\/\//)) host = host.substring(7);
	if (host.match(/^https:\/\//)) host = host.substring(8);
	if (host.match(/^www\./)) host = host.substring(4);
	if (!/http:/.test(host) && !/https:/.test(host)) host = 'http://' + host;

	// Capturo parametros del request
	res.locals.protocol = req.protocol;
	res.locals.host = req.headers['host'];
	res.locals.pageUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	res.locals.pageReferrer = req.headers['referer'];
	res.locals.origin = req.headers['origin'];

	// Obtengo el dominio asociado al request
	let requestDomain: string = url.parse(host).hostname;

	// Guardo el nombre del dominio como variable local del request
	res.locals.requestDomain = requestDomain;

	GetRequestInstance(host)
		.then(
			resultInstance => {
				// Guardo la instancia como variable local del request
				res.locals.vcc = resultInstance;
				res.locals.instance = resultInstance;

				// Si obtuve instancia hago la consulta de los datos del dominio
				if (resultInstance) {
					return GetDomain(resultInstance, requestDomain);
				} else {
					return null;
				}
			}
		).then(
			resultDomain => {
				// Guardo el objeto dominio como variable local del request
				res.locals.domain = resultDomain;

				// Continuo la ejecucion del request
				return next();
			}
		).catch(
			(err: any) => {
				// Obtengo el mensaje de error, que es lo que se va a enviar hacia atras
				let errMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');
				// Escribo a log
				logger.error('Error al procesar \'' + req.path + '\': ' + errMsg);
				// Si alguno de los pasos anteriores ya envio respuesta, no sigo
				if (res.headersSent) return;
				// Envio respuesta
				res.status(401).json({ description: 'Undefined domain (' + requestDomain + ')', error: 'VCC no válido' });
			}
		);
}

export function ValidateDomainRedirect(req: express.Request, res: express.Response, next: any) {

	// Obtengo el dominio del request
	let domain: Domain = res.locals.domain;
	// Verifico si el dominio es de contenido y tiene habilitado el redirect (y que la URL no sea de contenido estatico)
	if (domain && domain.isContentDomain && domain.contentDefaultRedirect && domain.contentDefaultRedirect !== req.url && !req.url.match('^\/(api|auth|public|internal|popup|builder|payments|distributed|static|template|assets|favicon)(.*)$')) {
		// En este caso solo se puede mostrar contenido (nunca dashboard). Cualquier URL que no matchee se redirige a la URL por defecto
		res.redirect(domain.contentDefaultRedirect);
	} else {
		// Cualquier otro caso sigo con la ejecucion
		next();
	}
}

export function GetDomainFromRequestHost(requestHost: string): string {

	// Acomodo el host para que tenga forma de url
	let host: string = requestHost || '';
	if (host.match(/^http:\/\//)) host = host.substring(7);
	if (host.match(/^https:\/\//)) host = host.substring(8);
	if (host.match(/^www\./)) host = host.substring(4);
	if (!/http:/.test(host) && !/https:/.test(host)) host = 'http://' + host;

	// Obtengo el dominio asociado al request
	let requestDomain: string = url.parse(host).hostname;

	// Devuelvo el dominio obtenido
	return requestDomain;
}

export function GetRequestInstance(requestHost: string): Promise<string> {

	// Acomodo el host para que tenga forma de url
	let host: string = requestHost || '';
	if (host.match(/^http:\/\//)) host = host.substring(7);
	if (host.match(/^https:\/\//)) host = host.substring(8);
	if (host.match(/^www\./)) host = host.substring(4);
	if (!/http:/.test(host) && !/https:/.test(host)) host = 'http://' + host;

	// Obtengo el dominio asociado al request
	let domain: string = url.parse(host).hostname;

	// Obtengo la instancia asociada al dominio
	return GetInstanceByDomain(domain)
		.then(
			(vcc: string) => {
				if (vcc) {
					// Devuelvo el valor almacenado en vcc
					return Promise.resolve(vcc);
				} else {
					// El dominio no esta definido
					logger.warn('El dominio \'' + domain + '\' no esta asociado a ninguna instancia. Se usara instancia por defecto.');
					// Devuelvo nombre de instancia por defecto
					return Promise.resolve('default');
				}
			}
		).catch(
			(err: any) => {
				// Obtengo el mensaje de error, que es lo que se va a enviar hacia atras
				let errMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');
				// Escribo a log
				logger.error('Error al obtener instancia asociada al request: ' + errMsg);
				// Devuelvo nombre de instancia por defecto
				return Promise.resolve('default');
			}
		);
}

export function GetRequestUser(authorizationHeader: string): string {

	// Verifico que el input no sea nulo
	let session: string = authorizationHeader || '';
	let userId: string;

	try {
		// Decodifico el token recibido
		session = session.replace(/^Bearer /i, '');
		// Si no hay sesion no sigo
		if (session) {
			let decoded: any = jwt.verify(session, JWT_SECRET);
			if (decoded.userId) userId = decoded.userId;
		}
	} catch (err) {
		// Obtengo el mensaje de error, que es lo que se va a enviar hacia atras
		let errMsg: string = (typeof err === 'string' ? err : err.message || err.description || '');
		logger.error('Error al decodificar datos de la sesion: ' + errMsg);
	}
	// Devuelvo el dato obtenido
	return userId;
}

/////////////////////////////////////////
// Funciones de acceso a cache y datos //
/////////////////////////////////////////

// Ejecuta la consulta GetInstanceByDomain, primero a Redis y si no esta alli a BD
function GetInstanceByDomain(
	domain: string
): Promise<string> {

	// Flag para indicar si el registro debe ser insertado en redis
	let cacheUpdateNeeded: boolean = false;

	return Redis.GetInstanceByDomain(domain)
		.then(
			(redisInstance: string) => {
				// Chequeo si el dato estaba guardado en memoria
				if (redisInstance || redisInstance === '') {
					// Devuelvo resultado obtenido
					return Promise.resolve(redisInstance);
				} else {
					// No hay valor en redis, hay que consultar a BD
					logger.info('El dato de GetInstanceByDomain para \'' + domain + '\' no se encuentra en cache. se consultara a base de datos.');
					// Actualizo el flag para luego actualizar redis
					cacheUpdateNeeded = true;
					// Ejecuto consulta a BD
					return MSSql.GetInstanceByDomain(domain);
				}
			}
		).then(
			(vcc: string) => {
				// Si corresponde actualizo el dato en cache
				if (cacheUpdateNeeded) Redis.SaveInstanceByDomain(domain, vcc || '');
				// Chequeo si el dato estaba guardado en memoria
				if (vcc || vcc === '') {
					// Devuelvo resultado obtenido
					return Promise.resolve(vcc);
				} else {
					// El dato no existia en base de datos
					throw 'Se consulto dato de GetInstanceByDomain para \'' + domain + '\' que no se encuentra definido en base de datos.';
				}
			}
		).catch(
			(err: any) => {
				// Obtengo el mensaje de error, que es lo que se va a enviar hacia atras
				let errMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');
				// Escribo a log
				logger.error('Error al ejecutar GetInstanceByDomain: ' + errMsg);
			}
		);
}

// Ejecuta la consulta GetDomain, primero a Redis y si no esta alli a BD
function GetDomain(
	vcc: string, domain: string
): Promise<Domain> {

	// Flag para indicar si el registro debe ser insertado en redis
	let cacheUpdateNeeded: boolean = false;

	// Dominio por defecto para guardar si no se encuentra en BD
	let defaultDomain: Domain = new Domain(domain, domain, null, false, '80', null, false, false, null, false, null, null, null, null, null, null);

	return Redis.GetDomain(vcc, domain)
		.then(
			(redisDomain: Domain) => {
				// Chequeo si el dato estaba guardado en memoria
				if (redisDomain || JSON.stringify(redisDomain) === JSON.stringify(defaultDomain)) {
					// Devuelvo resultado obtenido
					return Promise.resolve(redisDomain);
				} else {
					// No hay valor en redis, hay que consultar a BD
					logger.info('El dato de GetDomain para \'' + domain + '\' no se encuentra en cache. se consultara a base de datos.');
					// Actualizo el flag para luego actualizar redis
					cacheUpdateNeeded = true;
					// Ejecuto consulta a BD
					return MSSql.GetDomain(vcc, domain);
				}
			}
		).then(
			(resultDomain: Domain) => {
				// Si corresponde actualizo el dato en cache (siempre guardo ya que no existir camapaña es un caso "normal")
				if (cacheUpdateNeeded) Redis.SaveDomain(vcc, resultDomain || defaultDomain);
				// Chequeo si el dato estaba guardado en memoria
				if (resultDomain || JSON.stringify(resultDomain) === JSON.stringify(defaultDomain)) {
					// Devuelvo resultado obtenido
					return Promise.resolve(resultDomain);
				} else {
					// El dato no existia en base de datos
					throw 'Se consulto dato de GetDomain para \'' + domain + '\' que no se encuentra definido en base de datos.';
				}
			}
		).catch(
			(err: any) => {
				// Obtengo el mensaje de error, que es lo que se va a enviar hacia atras
				let errMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');
				// Escribo a log
				logger.error('Error al ejecutar GetDomain: ' + errMsg);
			}
		);
}


