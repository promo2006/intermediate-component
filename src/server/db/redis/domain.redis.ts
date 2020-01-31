import * as express from 'express';
import * as log4js from 'log4js';

// Importo configuracion de Redis
import { REDIS_DATA_PERSISTENCE } from '../../config/redis.config';

// Importo modelos
import { Domain } from '../../models/domain.model';

// Obtengo logger
let logger = log4js.getLogger('Redis');

// Conexion a Redis
let redisClient: any;

export function DomainRedis(app: express.Application) {

    // Obtengo conexion a Redis
    redisClient = app.get('redisClient');
}

/////////////////////////////////////////
// Funciones de acceso a data en Redis //
/////////////////////////////////////////

export function SaveDomain (
    vcc: string, domain: Domain
    ): Promise<boolean> {

    // Valido que la clave del hash no sea nula
    if (!domain || !domain.domain) throw 'Se intento guardar un registro en una clave nula';

    // Actualizo dato de Domain
    return redisClient.hsetAsync(vcc + ':Domain', domain.domain, JSON.stringify(domain))
    .then(
        (result: any) => {
            // Actualizo el tiempo de expiracion del hash
            return redisClient.expireAsync(vcc + ':Domain', REDIS_DATA_PERSISTENCE);
        }
    ).then(
        (result: any) => {
            // Consulto el dato de dominio principal guardado en redis
            return redisClient.hgetAsync(vcc + ':MainDomain', vcc);
        }
    ).then(
        (result: any) => {
            // Parseo valor almacenado en redis
            try {
                // Dominio principal
                let mainDomain: Domain;
                // Parseo el dato obtenido
                mainDomain = JSON.parse(result);
                // Chequeo si el nombre coincide con el que estoy guardando o si el valor esta vacio
                if (mainDomain.domain === domain.domain || JSON.stringify(mainDomain) === JSON.stringify({})) {
                    // Borro el dato para forzar a que se vuelva a leer de BD
                    redisClient.hdel(vcc + ':MainDomain', vcc);
                }
            } catch (err) {
                // Si falla no hago nada
            }
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

export function DeleteDomain (
    vcc: string, domain: Domain
    ): Promise<boolean> {

    // Valido que la clave del hash no sea nula
    if (!domain || !domain.domain) throw 'Se intento eliminar un registro en una clave nula';

    // Borro el dato en Redis si existe
    return redisClient.hdelAsync(vcc + ':Domain', domain.domain)
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

export function GetDomain (
    vcc: string, domainDomain: string
    ): Promise<Domain> {

    // Valido que la clave del hash no sea nula
    if (!domainDomain) throw 'Se intento consultar un registro en una clave nula(DomainRedis)';

    // Consulto el dato en Redis
    return redisClient.hgetAsync(vcc + ':Domain', domainDomain)
    .then(
        (result: any) => {
            // Domain a devolver
            let domain: Domain;
            // Parseo valor almacenado en redis
            try {
                domain = JSON.parse(result);
            } catch (err) {
                // Si falla el parseo devuelvo como si no hubiera dato
                return Promise.resolve(null);
            }
            // Devuelvo resultado
            return Promise.resolve(domain);
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

export function SaveInstanceByDomain (
    domain: string, vcc: string
    ): Promise<boolean> {

    // Valido que la clave del hash no sea nula
    if (!domain) throw 'Se intento guardar un registro en una clave nula';

    // Actualizo dato de InstanceByDomain
    return redisClient.hsetAsync('InstanceByDomain', domain, vcc)
    .then(
        (result: any) => {
            // Actualizo el tiempo de expiracion del hash
            return redisClient.expireAsync('InstanceByDomain', REDIS_DATA_PERSISTENCE);
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

export function DeleteInstanceByDomain (
    domain: string
    ): Promise<boolean> {

    // Valido que la clave del hash no sea nula
    if (!domain) throw 'Se intento eliminar un registro en una clave nula';

    // Borro el dato en Redis si existe
    return redisClient.hdelAsync('InstanceByDomain', domain)
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

export function GetInstanceByDomain (
    domain: string
    ): Promise<string> {

    // Valido que la clave del hash no sea nula
    if (!domain) throw 'Se intento consultar un registro en una clave nula(InstanceByDomainRedis)';

    // Consulto el dato en Redis
    return redisClient.hgetAsync('InstanceByDomain', domain)
    .then(
        (vcc: any) => {
            // Devuelvo resultado
            return Promise.resolve(vcc);
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

export function SaveMainDomain (
    vcc: string, domain: Domain
    ): Promise<boolean> {

    // Valido que la clave del hash no sea nula
    if (!vcc) throw 'Se intento guardar un registro en una clave nula';

    // Actualizo dato de MainDomain
    return redisClient.hsetAsync(vcc + ':MainDomain', vcc, JSON.stringify(domain))
    .then(
        (result: any) => {
            // Actualizo el tiempo de expiracion del hash
            return redisClient.expireAsync(vcc + ':MainDomain', REDIS_DATA_PERSISTENCE);
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

export function DeleteMainDomain (
    vcc: string
    ): Promise<boolean> {

    // Valido que la clave del hash no sea nula
    if (!vcc) throw 'Se intento eliminar un registro en una clave nula';

    // Borro el dato en Redis si existe
    return redisClient.hdelAsync(vcc + ':MainDomain', vcc)
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

export function GetMainDomain (
    vcc: string
    ): Promise<Domain> {

    // Valido que la clave del hash no sea nula
    if (!vcc) throw 'Se intento consultar un registro en una clave nula(MainDomainRedis)';

    // Consulto el dato en Redis
    return redisClient.hgetAsync(vcc + ':MainDomain', vcc)
    .then(
        (result: any) => {
            // Domain a devolver
            let mainDomain: Domain;
            // Parseo valor almacenado en redis
            try {
                mainDomain = JSON.parse(result);
            } catch (err) {
                // Si falla el parseo devuelvo como si no hubiera dato
                return Promise.resolve(null);
            }
            // Devuelvo resultado
            return Promise.resolve(mainDomain);
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

export function GetMailingDomainByInstance ( vcc: string ): Promise<Domain> {

    // Consulto el dato en Redis
    return redisClient.hgetAsync(vcc + ':MailingDomainByInstance', vcc)
    .then(
        (result: any) => {
            // Domain a devolver
            let mailDomain: Domain;
            // Parseo valor almacenado en redis
            try {
                mailDomain = JSON.parse(result);
            } catch (err) {
                // Si falla el parseo devuelvo como si no hubiera dato
                return Promise.resolve(null);
            }
            // Devuelvo resultado
            return Promise.resolve(mailDomain);
        }
    ).catch(
        (err: any) => {
            // Fallo la ejecucion
            console.dir(err);
            return Promise.reject(err);
        }
    );
}

export function SaveMailingDomainByInstance ( vcc: string, domain: Domain ): Promise<boolean> {

    try {
        if (vcc && domain) {
            // Actualizo dato de MailDomain
            redisClient.hset(vcc + ':MailingDomainByInstance', vcc, JSON.stringify(domain));
            redisClient.expire(vcc + ':MailingDomainByInstance', REDIS_DATA_PERSISTENCE);
            return Promise.resolve(true);
        } else {
            return Promise.resolve(false);
        }
    } catch (err) {
        // Fallo la ejecucion
        console.dir(err);
        throw err;
    }
}

export function DeleteMailingDomainByInstance ( vcc: string ): Promise<boolean> {

    // Borro el dato en Redis si existe
    return redisClient.hdelAsync(vcc + ':MailingDomainByInstance', vcc)
    .then(
        (result: number) => {
            // Devuelvo resultado
            return Promise.resolve(true);
        }
    ).catch(
        (err: any) => {
            // Fallo la ejecucion
            console.dir(err);
            return Promise.reject(err);
        }
    );
}
