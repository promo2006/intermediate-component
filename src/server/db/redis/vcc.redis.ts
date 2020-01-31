import * as express from 'express';
import * as log4js from 'log4js';

// Importo configuracion de Redis
import { REDIS_DATA_PERSISTENCE } from '../../config/redis.config';

// Importo modelos
import { VCC, RequestData } from '../../models/vcc.model';

// Obtengo logger
let logger = log4js.getLogger('Redis');

// Conexion a Redis
let redisClient: any;

export function VccRedis(app: express.Application) {

	// Obtengo conexion a Redis
	redisClient = app.get('redisClient');
}

/////////////////////////////////////////
// Funciones de acceso a data en Redis //
/////////////////////////////////////////

export function SaveVCC(
	vcc: string, objVCC: VCC
): Promise<boolean> {

	// Valido que la clave del hash no sea nula
	if (!objVCC || !objVCC.id) throw 'Se intento guardar un registro en una clave nula';

	// Actualizo dato de VCC
	return redisClient.hsetAsync(vcc + ':VCC', objVCC.id, JSON.stringify(objVCC))
		.then(
			(result: any) => {
				// Actualizo el tiempo de expiracion del hash
				return redisClient.expireAsync(vcc + ':VCC', REDIS_DATA_PERSISTENCE);
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

export function GetVCC(
	vcc: string, vccId: string
): Promise<VCC> {

	// Valido que la clave del hash no sea nula
	if (!vccId) throw 'Se intento consultar un registro en una clave nula vcc(VccRedis)';

	// Consulto el dato en Redis
	return redisClient.hgetAsync(vcc + ':VCC', vccId)
		.then(
			(result: any) => {
				// VCC a devolver
				let vcc: VCC;
				// Parseo valor almacenado en redis
				try {
					vcc = JSON.parse(result);
				} catch (err) {
					// Si falla el parseo devuelvo como si no hubiera dato
					return Promise.resolve(null);
				}
				// Devuelvo resultado
				return Promise.resolve(vcc);
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

export function SaveRequestData(vcc: string, objRequestData: RequestData) {
	// Valido que la clave del hash no sea nula
	if (!objRequestData) {
		logger.warn('[VccRedis::SaveRequestData] Received RequestData is null');
		throw 'Se intento guardar un registro en una clave null';
	} 

	logger.info('[VccRedis::SaveRequestData] Registering RequestData on redis');

	// Actualizo dato de VCC
	return redisClient.hsetAsync(vcc + ':RequestData', vcc, JSON.stringify(objRequestData))
		.then(
			(result: any) => {
				logger.info('[VccRedis::SaveRequestData] Setting the expire time');

				// Actualizo el tiempo de expiracion del hash
				return redisClient.expireAsync(vcc + ':RequestData', REDIS_DATA_PERSISTENCE);
			}
		).then(
			(result: any) => {
				// Devuelvo resultado
				return Promise.resolve(true);
			}
		).catch(
			(err: any) => {
				// Obtengo mensaje de error
				let errorMsg: string = 'Error on: ' + (err ? typeof err === 'string' ? err : err.message || err.description || '' : '');

				// Escribo el error en el log
				logger.error('[VccRedis::SaveRequestData] ' + errorMsg);

				// Hago reject y devuelvo el error
				return Promise.reject(err);
			}
		);
}

export function GetRequestData(
	vcc: string
): Promise<RequestData> {
	// Valido que la clave del hash no sea nula
	if (!vcc) {
		logger.warn('[VccRedis::GetRequestData] Received Vcc is null');
		throw 'Se intento consultar un registro en una clave nula vcc(RequesDataRedis)';
	}

	logger.info('[VccRedis::GetRequestData] Registering RequestData to redis');

	// Consulto el dato en Redis
	return redisClient.hgetAsync(vcc + ':RequestData', vcc)
		.then(
			(result: any) => {
				// VCC a devolver
				let requestData: RequestData;

				// Parseo valor almacenado en redis
				try {
					logger.info('[VccRedis::GetRequestData] Parsing received object from redis');
					requestData = JSON.parse(result);
				} catch (err) {
					logger.info('[VccRedis::GetRequestData] Cann\'t parse object from redis');
					// Si falla el parseo devuelvo como si no hubiera dato
					return Promise.resolve(null);
				}

				// Devuelvo resultado
				return Promise.resolve(requestData);
			}
		).catch(
			(err: any) => {
				// Obtengo mensaje de error
				let errorMsg: string = 'Requesting error: ' + (err ? typeof err === 'string' ? err : err.message || err.description || '' : '');

				// Escribo el error en el log
				logger.error('[VccRedis::GetRequestData] ' + errorMsg);

				// Hago reject y devuelvo el error
				return Promise.reject(err);
			}
		);
}
