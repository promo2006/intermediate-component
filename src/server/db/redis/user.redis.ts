import * as express from 'express';
import * as log4js from 'log4js';

// Importo configuracion de Redis
import { REDIS_DATA_PERSISTENCE } from '../../config/redis.config';

// Importo modelos
import { User } from '../../models/user.model';

// Obtengo logger
let logger = log4js.getLogger('Redis');

// Conexion a Redis
let redisClient: any;

export function UserRedis(app: express.Application) {

    // Obtengo conexion a Redis
    redisClient = app.get('redisClient');
}

/////////////////////////////////////////
// Funciones de acceso a data en Redis //
/////////////////////////////////////////

export function SaveUser (
    user: User
    ): Promise<boolean> {

    // Valido que la clave del hash no sea nula
    if (!user || !user.id) throw 'Se intento guardar un registro en una clave nula';
    
    // Actualizo dato de User
    return redisClient.hsetAsync(user.id, user.id ,JSON.stringify(user))
    .then(
        (result : any ) => {
            // Actualizo el tiempo de expiracion del hash
            return redisClient.expireAsync('User', REDIS_DATA_PERSISTENCE);
        }
    ).then(
        (result: any) => {
            // Devuelvo resultado
            return Promise.resolve(true);
        }
    ).catch(
        (err: any) => {
            // Obtengo mensaje de error
            let errorMsg: string = 'Error al ejecutar consulta: ' + ( err ? typeof err === 'string' ? err : err.message || err.description || '' : '');

            // Escribo el error en el log
            logger.error(errorMsg);

            // Hago reject y devuelvo el error
            return Promise.reject(err);
        }
    );
}

export function DeleteUser (
    user: User
    ): Promise<boolean> {
       
    // Valido que la clave del hash no sea nula
    if (!user || !user.id) throw 'Se intento eliminar un registro en una clave nula';

    // Borro el dato en Redis si existe
    return redisClient.hdelAsync('User', user.id)
    .then(
        (result: number) => {
            // Devuelvo resultado
            return Promise.resolve(true);
        }
    ).catch(
        (err: any) => {
            // Obtengo mensaje de error
            let errorMsg: string = 'Error al ejecutar consulta: ' + ( err ? typeof err === 'string' ? err : err.message || err.description || '' : '');

            // Escribo el error en el log
            logger.error(errorMsg);

            // Hago reject y devuelvo el error
            return Promise.reject(err);
        }
    );
}

export function DeleteUserById (
     userId: string
    ): Promise<boolean> {
        
    // Valido que la clave del hash no sea nula
    if (!userId) throw 'Se intento eliminar un registro en una clave nula';

    // Borro el dato en Redis si existe
    return redisClient.hdelAsync('User', userId)
    .then(
        (result: number) => {
            // Devuelvo resultado
            return Promise.resolve(true);
        }
    ).catch(
        (err: any) => {
            // Obtengo mensaje de error
            let errorMsg: string = 'Error al ejecutar consulta: ' + ( err ? typeof err === 'string' ? err : err.message || err.description || '' : '');

            // Escribo el error en el log
            logger.error(errorMsg);

            // Hago reject y devuelvo el error
            return Promise.reject(err);
        }
    );
}

export function GetUser (
    userId: string
    ): Promise<User> {
       
    // Valido que la clave del hash no sea nula
    if (!userId) throw 'Se intento consultar un registro en una clave nula(UserRedis)';

    // Consulto el dato en Redis
    return redisClient.hgetAsync('User', userId)
    .then(
        (result: any) => {
            // User a devolver
            let user: User;
            // Parseo valor almacenado en redis
            try {
                user = JSON.parse(result);
            } catch (err) {
                // Si falla el parseo devuelvo como si no hubiera dato
                return Promise.resolve(null);
            }
            // Devuelvo resultado
            return Promise.resolve(user);
        }
    ).catch(
        (err: any) => {
            // Obtengo mensaje de error
            let errorMsg: string = 'Error al ejecutar consulta: ' + ( err ? typeof err === 'string' ? err : err.message || err.description || '' : '');

            // Escribo el error en el log
            logger.error(errorMsg);

            // Hago reject y devuelvo el error
            return Promise.reject(err);
        }
    );
}
