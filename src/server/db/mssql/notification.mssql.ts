import * as express from 'express';
import * as log4js from 'log4js';
let sql = require('mssql');
let Promise = require('bluebird');

// Importo modelos
import { UserNotification } from '../../models/user.model';
// Obtengo logger
let logger = log4js.getLogger('Sql');
// Conexion a base de datos
let sqlConn: any;

export function NotificationMSSql(app: express.Application) {
    // Obtengo conexion a base de datos
    sqlConn = app.get('sqlConn');
}

export function GetNotifications (
    type: string
    ): Promise<UserNotification[]> {

    return new sql.Request(sqlConn)
    .input('Type', sql.VarChar(50), type)
    .execute('GetNotifications')
    .then((recordsets: any) => {
        // Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets)
        let recordset: UserNotification[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);
        // Devuelvo resultado
        return Promise.resolve(recordset);
    })
    .catch((err: any) => {
        // Obtengo mensaje de error
        let errorMsg: string = (err && err.procName ? 'Error al ejecutar \'' + err.procName + '\': ' : 'Error al ejecutar consulta: ') + (err ? typeof err === 'string' ? err : err.message || err.description || '' : '');

        // Escribo el error en el log
        logger.error(errorMsg);

        // Hago reject y devuelvo el error
        return Promise.reject(err);
    });
}

export function GetUserNotifications (
    instance: string
    ,userId: string
    ,type: string
    ): Promise<UserNotification[]> {

    return new sql.Request(sqlConn)
    .input('Instance', sql.VarChar(50), instance)
    .input('UserId', sql.VarChar(50), userId)
    .input('Type', sql.VarChar(50), type)
    .execute('GetUserNotifications')
    .then((recordsets: any) => {
        // Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets)
        let recordset: UserNotification[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);
        // Devuelvo resultado
        return Promise.resolve(recordset);
    })
    .catch((err: any) => {
        // Obtengo mensaje de error
        let errorMsg: string = (err && err.procName ? 'Error al ejecutar \'' + err.procName + '\': ' : 'Error al ejecutar consulta: ') + (err ? typeof err === 'string' ? err : err.message || err.description || '' : '');

        // Escribo el error en el log
        logger.error(errorMsg);

        // Hago reject y devuelvo el error
        return Promise.reject(err);
    });
}


export function SaveNotification (
    userIndicatorId: string,
    instance: string,
    indicatorId: string,
    userId: string,
    type: string,
    opened: boolean,
    sendDate: Date,
    title: string,
    description: string,
    createdDate: Date
    ): Promise<boolean> {

    return new sql.Request(sqlConn)
    .input('UserIndicatorId', sql.VarChar(50), userIndicatorId)
    .input('Instance', sql.VarChar(50), instance)
    .input('IndicatorId', sql.VarChar(50), indicatorId)
    .input('UserId', sql.VarChar(50), userId)
    .input('Opened', sql.Bit, opened)
    .input('Type', sql.VarChar(50), type)
    .input('SendDate', sql.DateTime, sendDate)
    .input('Title', sql.VarChar(150), title)
    .input('Description', sql.VarChar(500), description)
    .input('CreatedDate', sql.DateTime, createdDate)
    .execute('SaveUserNotification')
    .then(
        (recordsets: any)  => {

            // Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets)
            let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

            // Obtengo el elemento a devolver dentro del recordset
            let output: any = (recordset && recordset.length > 0 ? recordset[0] : null);

            // Devuelvo resultado
            return Promise.resolve(output && output.result === 1);
        }
    ).catch(
        (err: any) => {
            // Obtengo mensaje de error
            let errorMsg: string = (err && err.procName ? 'Error al ejecutar \'' + err.procName + '\': ' : 'Error al ejecutar consulta: ') + (err ? typeof err === 'string' ? err : err.message || err.description || '' : '');

            // Escribo el error en el log
            logger.error(errorMsg);

            // Hago reject y devuelvo el error
            return Promise.reject(err);
        }
    );
}
