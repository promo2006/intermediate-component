import * as express from 'express';
import * as log4js from 'log4js';

// Importo configuracion de Redis
import { REDIS_SESSION_PERSISTENCE } from '../../config/redis.config';

// Obtengo logger
let logger = log4js.getLogger('Redis');

// Conexion a Redis
let redisClient: any;

export function SessionRedis(app: express.Application) {

	// Obtengo conexion a Redis
	redisClient = app.get('redisClient');
}

/////////////////////////////////////////
// Funciones de acceso a data en Redis //
/////////////////////////////////////////

export function SaveSession(
	userId: string, session: string
): Promise<boolean> {

	// Valido que la clave del hash no sea nula
	if (!userId) throw 'Se intento guardar un registro en una clave nula';

	// Actualizo dato de Session
	return redisClient.hsetAsync('Session', userId, session)
		.then(
			(result: any) => {
				// Actualizo el tiempo de expiracion del hash
				return redisClient.expireAsync('Session', REDIS_SESSION_PERSISTENCE);
			}
		).then(
			(result: any) => {
				// Devuelvo resultado
				return Promise.resolve(true);
			}
		).catch(
			(err: any) => {
				// Obtengo mensaje de error
				let errorMsg: string = 'Error al ejecutar consulta: ' + (err ? typeof err === 'string' ? err : err.message || err.description || '' : '');

				// Escribo el error en el log
				logger.error(errorMsg);

				// Hago reject y devuelvo el error
				return Promise.reject(err);
			}
		);
}

export function DeleteSession(
	userId: string
): Promise<boolean> {
	// Valido que la clave del hash no sea nula
	if (!userId) throw 'Se intento eliminar un registro en una clave nula';

	// Borro el dato en Redis si existe
	return redisClient.hdelAsync('Session', userId)
		.then(
			(result: number) => {
				// Devuelvo resultado
				return Promise.resolve(true);
			}
		).catch(
			(err: any) => {
				// Obtengo mensaje de error
				let errorMsg: string = 'Error al ejecutar consulta: ' + (err ? typeof err === 'string' ? err : err.message || err.description || '' : '');
				
				// Escribo el error en el log
				logger.error(errorMsg);

				// Hago reject y devuelvo el error
				return Promise.reject(err);
			}
		);
}

export function GetSession(
	userId: string
): Promise<string> {

	// Valido que la clave del hash no sea nula
	if (!userId) throw 'Se intento consultar un registro en una clave nula(SessionRedis)';

	// Consulto el dato en Redis
	return redisClient.hgetAsync( 'Session', userId)
		.then(
			(session: string) => {
				// Devuelvo resultado
				return Promise.resolve(session);
			}
		).catch(
			(err: any) => {
				// Obtengo mensaje de error
				let errorMsg: string = 'Error al ejecutar consulta: ' + (err ? typeof err === 'string' ? err : err.message || err.description || '' : '');

				// Escribo el error en el log
				logger.error(errorMsg);

				// Hago reject y devuelvo el error
				return Promise.reject(err);
			}
		);
}
