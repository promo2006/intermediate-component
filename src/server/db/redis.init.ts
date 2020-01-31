import * as express from 'express';
import * as redis from 'redis';
import * as bluebird from 'bluebird';
import * as log4js from 'log4js';

// Importo configuracion de Redis
import { REDIS_OPTIONS } from '../config/redis.config';

// Importo los servicios a inicializar
import { DomainRedis } from './redis/domain.redis';
import { VccRedis } from './redis/vcc.redis';
import { RoleRedis } from './redis/role.redis';
import { SessionRedis } from './redis/session.redis';
import { UserRedis } from './redis/user.redis';
import { QueueRedis } from './redis/queue.redis';

// Obtengo logger
let logger = log4js.getLogger('Redis');

// Funcion para inicializar la conexión
export function RedisInit(app: express.Application): Promise<boolean> {

	// Armo promesa para devolver
	return new Promise<boolean>((resolve, reject) => {

		// Escribo a log
		logger.info('Iniciando conexión a Redis');
		// Logueo a consola
		console.log('Iniciando conexión a Redis');

		// Inicio conexion a Redis
		let redisClient: redis.RedisClient = redis.createClient(REDIS_OPTIONS)
			.on('error', function (err: any) {
				// Obtengo el mensaje de error, que es lo que se va a enviar hacia atras
				let errMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');

				// Escribo a log
				logger.error('No se pudo inicializar cliente Redis: ' + errMsg);
				// Logueo a consola
				console.error('No se pudo inicializar cliente Redis: ' + errMsg);

				// Propago error
				reject(err);
			})
			.on('connect', function () {
				// Escribo a log
				logger.info('Conexión a Redis establecida');
				// Logueo a consola
				console.log('Conexión a Redis establecida');

				// Resuelvo promesa
				resolve(true);
			});

		// Convierto las funciones de redis a promesas
		bluebird.promisifyAll(redisClient);

		// Asocio la conexion al objeto para luego recuperarla
		app.set('redisClient', redisClient);

		// Inicializo los servicios de acceso a Redis
		DomainRedis(app);
		VccRedis(app);
		RoleRedis(app);
		SessionRedis(app);
		UserRedis(app);
		QueueRedis(app);
	});
}
