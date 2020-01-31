import * as express from 'express';
import * as log4js from 'log4js';

// Importo configuracion de Redis
import { REDIS_DATA_PERSISTENCE } from '../../config/redis.config';

// Importo modelos
import { Role } from '../../models/role.model';

// Obtengo logger
let logger = log4js.getLogger('Redis');

// Conexion a Redis
let redisClient: any;

export function RoleRedis(app: express.Application) {

    // Obtengo conexion a Redis
    redisClient = app.get('redisClient');
}

/////////////////////////////////////////
// Funciones de acceso a data en Redis //
/////////////////////////////////////////

export function SaveRole (
    role: Role
    ): Promise<boolean> {

    // Valido que la clave del hash no sea nula
    if (!role || !role.id) throw 'Se intento guardar un registro en una clave nula';

    // Actualizo dato de Role
    return redisClient.hsetAsync('Role', role.id, JSON.stringify(role))
    .then(
        (result : any ) => {
            // Actualizo el tiempo de expiracion del hash
            return redisClient.expireAsync('Role', REDIS_DATA_PERSISTENCE);
        }
    ).then(
        (result: any) => {
            // Obtengo coleccion de usuarios
            return redisClient.hgetallAsync('User');
        }
    ).then(
        (users: any) => {
            // Busco si algun usuario tiene el rol que estoy guardando
            for (var userId in users) {
                // Parseo valor almacenado
                try {
                    users[userId] = JSON.parse(users[userId]);
                } catch (err) {
                    users[userId] = {};
                }
                // Chequeo si el elemento coincide o si hay casos con el valor es vacio
                if (users[userId].role === role.id || JSON.stringify(users[userId]) === JSON.stringify({})) {
                    // Borro el dato para forzar a que se vuelva a leer de BD
                    redisClient.hdel('User', userId);
                }
            }
            // Resuelvo la promesa
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

export function DeleteRole (
    role: Role
    ): Promise<boolean> {

    // Valido que la clave del hash no sea nula
    if (!role || !role.id) throw 'Se intento eliminar un registro en una clave nula';

    // Borro el dato en Redis si existe
    return redisClient.hdelAsync('Role', role.id)
    .then(
        (result: number) => {
            // Obtengo coleccion de usuarios
            return redisClient.hgetallAsync('User');
        }
    ).then(
        (users: any) => {
            // Busco si algun usuario tiene el rol que estoy guardando
            for (var userId in users) {
                // Parseo valor almacenado
                try {
                    users[userId] = JSON.parse(users[userId]);
                } catch (err) {
                    users[userId] = {};
                }
                // Chequeo si el elemento coincide o si hay casos con el valor es vacio
                if (users[userId].role === role.id || JSON.stringify(users[userId]) === JSON.stringify({})) {
                    // Borro el dato para forzar a que se vuelva a leer de BD
                    redisClient.hdel('User', userId);
                }
            }
            // Resuelvo la promesa
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

export function GetRole (
    roleId: string
    ): Promise<Role> {

    // Valido que la clave del hash no sea nula
    if (!roleId) throw 'Se intento consultar un registro en una clave nula(RoleRedis)';

    // Consulto el dato en Redis
    return redisClient.hgetAsync('Role', roleId)
    .then(
        (result: any) => {
            // Role a devolver
            let role: Role;
            // Parseo valor almacenado en redis
            try {
                role = JSON.parse(result);
            } catch (err) {
                // Si falla el parseo devuelvo como si no hubiera dato
                return Promise.resolve(null);
            }
            // Devuelvo resultado
            return Promise.resolve(role);
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
