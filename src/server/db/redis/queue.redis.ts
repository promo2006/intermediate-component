import * as express from 'express';
import * as log4js from 'log4js';
// Importo configuracion de Redis
import { REDIS_DATA_PERSISTENCE } from '../../config/redis.config';

// Obtengo logger
let logger = log4js.getLogger('Redis');

// Conexion a Redis
let redisClient: any;

export function QueueRedis(app: express.Application) {
	// Obtengo conexion a Redis
	redisClient = app.get('redisClient');
}

//lectura de colas
export function LRange(source: string, from: number, to: number) {
	// Atómicamente devuelve y elimina el último elemento (cola) de la lista almacenada en el origen, y empuja el elemento en el primer elemento (encabezado) de la lista almacenada en el destino.
	return redisClient.lrangeAsync(source, from, to)
		.then(
			(result: any) => {
				// result una lista de elementos del rango especificado.
				return Promise.resolve(result);
			}
		)
		.catch(
			(err: any) => {
				logger.error('[InteractionRedis::LRange] getting err value:', err, 'with source:', source);
				return Promise.resolve(null);
			}
		);
}

//mover item entre colas
export function RPopLPush(source: string, destination: string) {
	// Atómicamente devuelve y elimina el último elemento (cola) de la lista almacenada en el origen, y empuja el elemento en el primer elemento (encabezado) de la lista almacenada en el destino.
	return redisClient.rpoplpushAsync(source, destination)
		.then(
			(result: any) => {
				// result contiene el elemento removido de la cola source y añadido en cola destination.
				return Promise.resolve(result);
			}
		)
		.catch(
			(err: any) => {
				logger.error('[InteractionRedis::RPopLPush] getting err value:', err, 'with source:', source, 'with destination:', destination);
				return Promise.resolve(null);
			}
		);
}

// Función para crear una cola con un nombre y un valor.
export function CreateQueueL(queueName: string, value: any): Promise<any> {
	// Inserta todos los valores especificados en la cabecera de la lista almacenada en la clave.
	return redisClient.lpushAsync(queueName, typeof value === 'object' ? JSON.stringify(value) : value)
		.then(
			(result: any) => {
				// result retorna la cantidad de elementos en la cola.
				return Promise.resolve(result);
			}
		)
		.catch(
			(err: any) => {
				logger.error('[InteractionRedis::CreateQueueL] getting err value:', err, 'with queueName:', queueName, 'with value:', value);
				return Promise.resolve(null);
			}
		);
}

// Por defecto utiliza rpushAsync para insertar valores siempre al final de la cola.
export function CreateQueueR(queueName: string, value: any): Promise<any> {
	// Inserte todos los valores especificados en la cola de la lista almacenada en la clave.
	return redisClient.rpushAsync(queueName, typeof value === 'object' ? JSON.stringify(value) : value) // Indica que va a insertar al principio (al lado izquierdo) de la cola.
		.then(
			(result: any) => {
				// result retorna la cantidad de elementos en la cola.
				return Promise.resolve(result);
			}
		)
		.catch(
			(err: any) => {
				logger.error('[InteractionRedis::CreateQueueR] getting err value:', err, 'with queueName:', queueName, 'with value:', value);
				return Promise.resolve(null);
			}
		);
}

//eliminamos item de la cola
export function DeleteQueue(queueName: string, value: any): Promise<any> {
	// Elimina un elemento en la cola de acuerdo al valor.
	return redisClient.lremAsync(queueName, 1, value)
		.then(
			(result: any) => {
				// result retorna el número de elementos removidos.
				return Promise.resolve(result);
			}
		)
		.catch(
			(err: any) => {
				logger.error('[InteractionRedis::DeleteQueue] getting err value:', err, 'with queueName:', queueName, 'with value:', value);
				return Promise.resolve(null);
			}
		);
}

//eliminamos item de la cola
export function InsertQueue(queueName: string, value: any, index: number): Promise<any> {
	// obtengo el valor en la posicion indicada.
	return redisClient.llenAsync(queueName)
		.then(result => {
			let total:number = 0;

			// Parseo valor almacenado en redis.
			try {
				total = (typeof result === 'string') ? <number>JSON.parse(result) : result;

			} catch (err) {
				// Si falla el parseo devuelvo como si no hubiera dato.
				total = 0;
			}

			//posicion
			let position = total > index ? index : total;

			//position a buscar
			logger.warn('[InsertQueue] position', 'with queueName:', queueName, 'with value:', position);

			//consulta posicion
			return redisClient.lindexAsync(queueName, position);
		}).then((result: any) => {
			// result retorna valor
			return redisClient.linsertAsync(queueName, 'BEFORE', (result || '') , value);
		}).then((result: any) => {
			let position = 0;
			// Parseo valor almacenado en redis.
			try {
				position = (typeof result === 'string') ? <number>JSON.parse(result) : result;

			} catch (err) {
				// Si falla el parseo devuelvo como si no hubiera dato.
				position = -1;
			}
			//si no tengo resultado lo envio al final
			if(position <= 0) {
				logger.warn('[InsertQueue] lpushAsync', 'with queueName:', queueName, 'with value:', value);

				//al final
				return redisClient.lpushAsync(queueName, typeof value === 'object' ? JSON.stringify(value) : value);
			}

			//completo sin problemas
			return position;
		}).then((result: any) => {
			// entrega la posicion.
			return Promise.resolve(result);
		}).catch((err: any) => {
			logger.error('[InsertQueue] getting err value:', err, 'with queueName:', queueName, 'with value:', value);
			return Promise.resolve(null);
		});
}

// Función para eliminar todo el contenido del hash Audios:{executionCode.}
export function Del(hash: string, executionCode: string): Promise<number> {

	// Si no recibo dato no sigo.
	if (!hash) return Promise.resolve(0);

	// Establece el campo en el hash almacenado en clave a valor.
	return redisClient.delAsync(hash)
		.then(
			(result: any) => {
				logger.info('[Del] executionCode:', executionCode, 'getting result:', result, 'after delAsync hash:', hash);
				// Devuelvo la cantidad de registros eliminados.
				return Promise.resolve(result);
			}
		)
		.catch(
			(err: any) => {
				logger.error('[InteractionRedis::SaveReadyInteractionProcess] getting error:', err, 'with hash:', hash);
				// Falló la ejecución.
				return Promise.resolve(null);
			}
		);
}

export function SaveTotalProgress(key:string, value:number): Promise<boolean> {

	let storage: string = 'TotalProgress';

	// Si no recibo dato no sigo.
	if (!key) return Promise.resolve(false);

	// Establece el campo en el hash almacenado en clave a valor.
	return redisClient.hsetAsync(storage, key, JSON.stringify(value))
		.then(
			(result: any) => {
				// Actualizo el tiempo de expiración del hash.
				return redisClient.expireAsync(storage, REDIS_DATA_PERSISTENCE);
			}
		)
		.then(
			(result: any) => {
				// Devuelvo resultado.
				return Promise.resolve(true);
			}
		)
		.catch(
			(err: any) => {
				logger.error('[SaveTotalProgress] getting error:', err);
				// Falló la ejecución.
				return Promise.resolve(false);
			}
		);
}

export function SaveProgress(key:string, value:number): Promise<boolean> {

	let storage: string = 'Progress';

	// Si no recibo dato no sigo.
	if (!key) return Promise.resolve(false);

	// Establece el campo en el hash almacenado en clave a valor.
	return redisClient.hsetAsync(storage, key, JSON.stringify(value))
		.then(
			(result: any) => {
				// Actualizo el tiempo de expiración del hash.
				return redisClient.expireAsync(storage, REDIS_DATA_PERSISTENCE);
			}
		)
		.then(
			(result: any) => {
				// Devuelvo resultado.
				return Promise.resolve(true);
			}
		)
		.catch(
			(err: any) => {
				logger.error('[SaveProgress] getting error:', err);
				// Falló la ejecución.
				return Promise.resolve(false);
			}
		);
}

export function SaveErrorProgress(key:string, value:number): Promise<boolean> {

	let storage: string = 'ErrorProgress';

	// Si no recibo dato no sigo.
	if (!key) return Promise.resolve(false);

	// Establece el campo en el hash almacenado en clave a valor.
	return redisClient.hsetAsync(storage, key, JSON.stringify(value))
		.then(
			(result: any) => {
				// Actualizo el tiempo de expiración del hash.
				return redisClient.expireAsync(storage, REDIS_DATA_PERSISTENCE);
			}
		)
		.then(
			(result: any) => {
				// Devuelvo resultado.
				return Promise.resolve(true);
			}
		)
		.catch(
			(err: any) => {
				logger.error('[SaveProgress] getting error:', err);
				// Falló la ejecución.
				return Promise.resolve(false);
			}
		);
}

export function SaveRetry(key:string, value:number): Promise<boolean> {

	let storage: string = 'Retry';

	// Si no recibo dato no sigo.
	if (!key) return Promise.resolve(false);

	// Establece el campo en el hash almacenado en clave a valor.
	return redisClient.hsetAsync(storage, key, JSON.stringify(value))
		.then(
			(result: any) => {
				// Actualizo el tiempo de expiración del hash.
				return redisClient.expireAsync(storage, REDIS_DATA_PERSISTENCE);
			}
		)
		.then(
			(result: any) => {
				// Devuelvo resultado.
				return Promise.resolve(true);
			}
		)
		.catch(
			(err: any) => {
				logger.error('[SaveRetry] getting error:', err);
				// Falló la ejecución.
				return Promise.resolve(false);
			}
		);
}

export function UpdateProgress(key: string): Promise<number> {
	// Configuramos el hash.
	let storage: string = 'Progress';

	return redisClient.hincrbyAsync(storage, key, -1)
		.then(
			(result: any) => {
				// UserAccessToken a devolver.
				let value: number;

				// Parseo valor almacenado en redis.
				try {
					value = (typeof result === 'string') ? <number>JSON.parse(result) : result;
				} catch (err) {
					// Si falla el parseo devuelvo como si no hubiera dato.
					return Promise.resolve(null);
				}
				// Retornamos userAcessToken.
				return value;
			}
		)
		.catch(
			(err: any) => {
				//registro error
				logger.error('[UpdateProgress] getting err value:', err, 'storage:', storage, 'key:', key);
				// Fallo la ejecucion
				return Promise.resolve(null);
			}
		);
}

export function UpdateErrorProgress(key: string): Promise<number> {
	// Configuramos el hash.
	let storage: string = 'ErrorProgress';

	return redisClient.hincrbyAsync(storage, key, 1)
		.then(
			(result: any) => {
				// UserAccessToken a devolver.
				let value: number;

				// Parseo valor almacenado en redis.
				try {
					value = (typeof result === 'string') ? <number>JSON.parse(result) : result;
				} catch (err) {
					// Si falla el parseo devuelvo como si no hubiera dato.
					return Promise.resolve(null);
				}
				// Retornamos userAcessToken.
				return value;
			}
		)
		.catch(
			(err: any) => {
				//registro error
				logger.error('[UpdateProgress] getting err value:', err, 'storage:', storage, 'key:', key);
				// Fallo la ejecucion
				return Promise.resolve(null);
			}
		);
}

export function UpdateRetry(key: string): Promise<number> {
	// Configuramos el hash.
	let storage: string = 'Retry';

	return redisClient.hincrbyAsync(storage, key, 1)
		.then(
			(result: any) => {
				// UserAccessToken a devolver.
				let value: number;

				// Parseo valor almacenado en redis.
				try {
					value = (typeof result === 'string') ? <number>JSON.parse(result) : result;
				} catch (err) {
					// Si falla el parseo devuelvo como si no hubiera dato.
					return Promise.resolve(null);
				}
				// Retornamos userAcessToken.
				return value;
			}
		)
		.catch(
			(err: any) => {
				//registro error
				logger.error('[UpdateProgress] getting err value:', err, 'storage:', storage, 'key:', key);
				// Fallo la ejecucion
				return Promise.resolve(null);
			}
		);
}

export function GetTotalProgress(): Promise<any[]> {
	let storage: string = 'TotalProgress';

	// Devuelve todos los campos y valores del hash almacenado en la clave.
	return redisClient.hgetallAsync(storage)
		.then(
			(result: any[]) => {
				// Retorna una lista de campos y sus valores almacenados en el hash, o una lista vacía cuando la clave no existe.
				let summary: any[] = [];
				// Parseo valor almacenado en Redis.
				try {
					let results = (typeof result === 'string') ? JSON.parse(result) : result;

					// Verificamos si existe.
					if (result && results) {
						for (let key in results) {
							let keys = key.split(':');
							let obj = {key:key, vcc: keys[0], processId: keys[1], type: keys[2] ? keys[2] : null, typeId: keys[3] ? keys[3] : null, value:results[key]};
							summary.push(obj);
						}
					}

				} catch (err) {
					logger.error('[GetTotalProgress] getting err value:', result);
					// Si falla el parseo devuelvo como si no hubiera dato.
					return Promise.resolve(null);
				}
				return summary;
			}
		)
		.catch(
			(err: any) => {
				logger.error('[GetTotalProgress] getting err value:', err);
				return Promise.resolve(null);
			}
		);
}

export function GetProgress(): Promise<any[]> {
	let storage: string = 'Progress';

	// Devuelve todos los campos y valores del hash almacenado en la clave.
	return redisClient.hgetallAsync(storage)
		.then(
			(result: any[]) => {
				// Retorna una lista de campos y sus valores almacenados en el hash, o una lista vacía cuando la clave no existe.
				let summary: any[] = [];
				// Parseo valor almacenado en Redis.
				try {
					let results = (typeof result === 'string') ? JSON.parse(result) : result;

					// Verificamos si existe.
					if (result && results) {
						for (let key in results) {
							let keys = key.split(':');
							let obj = {key:key, vcc: keys[0], processId: keys[1], type: keys[2] ? keys[2] : null, typeId: keys[3] ? keys[3] : null, value:results[key]};
							summary.push(obj);
						}
					}

				} catch (err) {
					logger.error('[GetProgress] getting err value:', result);
					// Si falla el parseo devuelvo como si no hubiera dato.
					return Promise.resolve(null);
				}
				return summary;
			}
		)
		.catch(
			(err: any) => {
				logger.error('[GetProgress] getting err value:', err);
				return Promise.resolve(null);
			}
		);
}

export function GetErrorProgress(): Promise<any[]> {
	let storage: string = 'ErrorProgress';

	// Devuelve todos los campos y valores del hash almacenado en la clave.
	return redisClient.hgetallAsync(storage)
		.then(
			(result: any[]) => {
				// Retorna una lista de campos y sus valores almacenados en el hash, o una lista vacía cuando la clave no existe.
				let summary: any[] = [];
				// Parseo valor almacenado en Redis.
				try {
					let results = (typeof result === 'string') ? JSON.parse(result) : result;

					// Verificamos si existe.
					if (result && results) {
						for (let key in results) {
							let keys = key.split(':');
							let obj = {key:key, vcc: keys[0], processId: keys[1], type: keys[2] ? keys[2] : null, typeId: keys[3] ? keys[3] : null, value:results[key]};
							summary.push(obj);
						}
					}

				} catch (err) {
					logger.error('[GetErrorProgress] getting err value:', result);
					// Si falla el parseo devuelvo como si no hubiera dato.
					return Promise.resolve(null);
				}
				return summary;
			}
		)
		.catch(
			(err: any) => {
				logger.error('[GetProgress] getting err value:', err);
				return Promise.resolve(null);
			}
		);
}

export function GetRetry(key: string): Promise<any[]> {
	let storage: string = 'Retry';

	// Devuelve todos los campos y valores del hash almacenado en la clave.
	return redisClient.hgetAsync(storage, key)
		.then(
			(result: any) => {
				// Domain a devolver.
				let retry: any;

				// Parseo valor almacenado en redis.
				try {
					let value = (typeof result === 'string') ? JSON.parse(result) : result;
					retry = {key:key,value:value};

				} catch (err) {
					// Si falla el parseo devuelvo como si no hubiera dato.
					return Promise.resolve(null);
				}

				return retry;
			}
		)
		.catch(
			(err: any) => {
				logger.error('[GetRetry] getting err value:', err);
				return Promise.resolve(null);
			}
		);
}

export function DeleteTotalProgress(key: string): Promise<boolean> {

	let storage: string = 'TotalProgress';

	// Si no recibo dato no sigo.
	if (!key) return Promise.resolve(false);

	// Establece el campo en el hash almacenado en clave a valor.
	return redisClient.hdelAsync(storage, key)
		.then(
			(result: any) => {
				// Devuelvo la cantidad de registros eliminados.
				return Promise.resolve(result ? true : false);
			}
		)
		.catch(
			(err: any) => {
				logger.error('[DeleteTotalProgress] getting error:', err, 'with key:', key);
				// Falló la ejecución.
				return Promise.resolve(null);
			}
		);
}

export function DeleteProgress(key: string): Promise<boolean> {
	let storage: string = 'Progress';

	// Si no recibo dato no sigo.
	if (!key) return Promise.resolve(false);

	// Establece el campo en el hash almacenado en clave a valor.
	return redisClient.hdelAsync(storage, key)
		.then(
			(result: any) => {
				// Devuelvo la cantidad de registros eliminados.
				return Promise.resolve(result ? true : false);
			}
		)
		.catch(
			(err: any) => {
				logger.error('[DeleteProgress] getting error:', err, 'with key:', key);
				// Falló la ejecución.
				return Promise.resolve(null);
			}
		);
}

export function DeleteErrorProgress(key: string): Promise<boolean> {
	let storage: string = 'ErrorProgress';

	// Si no recibo dato no sigo.
	if (!key) return Promise.resolve(false);

	// Establece el campo en el hash almacenado en clave a valor.
	return redisClient.hdelAsync(storage, key)
		.then(
			(result: any) => {
				// Devuelvo la cantidad de registros eliminados.
				return Promise.resolve(result ? true : false);
			}
		)
		.catch(
			(err: any) => {
				logger.error('[DeleteErrorProgress] getting error:', err, 'with key:', key);
				// Falló la ejecución.
				return Promise.resolve(null);
			}
		);
}

export function DeleteRetry(key: string): Promise<boolean> {
	let storage: string = 'Retry';

	// Si no recibo dato no sigo.
	if (!key) return Promise.resolve(false);

	// Establece el campo en el hash almacenado en clave a valor.
	return redisClient.hdelAsync(storage, key)
		.then(
			(result: any) => {
				// Devuelvo la cantidad de registros eliminados.
				return Promise.resolve(result ? true : false);
			}
		)
		.catch(
			(err: any) => {
				logger.error('[DeleteRetry] getting error:', err, 'with key:', key);
				// Falló la ejecución.
				return Promise.resolve(null);
			}
		);
}
