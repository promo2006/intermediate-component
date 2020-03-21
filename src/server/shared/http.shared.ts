import * as express from 'express';
import * as url from 'url';
import * as jwt from 'jsonwebtoken';
import * as log4js from 'log4js';

// Importo configuracion de JWT
import { JWT_SECRET } from '../config/jwt.config';

// Obtengo logger
let logger = log4js.getLogger('ServerScripts');

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
