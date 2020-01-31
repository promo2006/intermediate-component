import * as express from 'express';
import * as log4js from 'log4js';
let sql = require('mssql');

// Obtengo logger
let logger = log4js.getLogger('Sql');

// Conexion a base de datos
let sqlConn: any;

export function AuthMSSql(app: express.Application) {

    // Obtengo conexion a base de datos
    sqlConn = app.get('sqlConn');
}

/////////////////////////////////////////
// Funciones de acceso a base de datos //
/////////////////////////////////////////

export function ValidateUserLogin (
    userId: string, password: string
    ): Promise<boolean> {

    return new sql.Request(sqlConn)
    .input('UserId', sql.VarChar(50), userId)
    .input('Password', sql.VarChar(50), password)
    .execute('ValidateUserLogin')
    .then(
        (recordsets: any) => {

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

export function InsertUserHistory(
    userId: string, 
    userRole: string,
    event: string, 
    eventDate: Date, 
    eventDetail: string,
    ): Promise<boolean> {

    return new sql.Request(sqlConn)
    .input('UserId', sql.VarChar(50), userId)
    .input('UserRole', sql.VarChar(50), userRole)
    .input('Event', sql.VarChar(50), event)
    .input('EventDate', sql.DateTime, eventDate)
    .input('EventDetail', sql.VarChar(200), eventDetail)
    .execute('InsertUserHistory')
    .then(
        (recordsets: any) => {
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
