import * as express from 'express';
import * as log4js from 'log4js';
let sql = require('mssql');

// Obtengo logger
let logger = log4js.getLogger('Sql');

// Conexion a base de datos
let sqlConn: any;

export function HomeMSSql(app: express.Application) {

    // Obtengo conexion a base de datos
    sqlConn = app.get('sqlConn');
}

/////////////////////////////////////////
// Funciones de acceso a base de datos //
/////////////////////////////////////////

export function GetHomeSummary (
    instance: string, startDate: Date, endDate: Date,
    clientOffset: number, userId: string
    ): Promise<any> {

    // Obtengo la info d la campaña acutal para determinar que guardo/borro y que no
    return new sql.Request(sqlConn)
    .input('Instance', sql.VarChar(50), instance)
    .input('StartDate', sql.DateTime, startDate)
    .input('EndDate', sql.DateTime, endDate)
    .input('ClientOffset', sql.Int, clientOffset)
    .input('UserId', sql.VarChar(50), userId)
    .execute('GetHomeSummary')
    .then(
        (recordsets: any)  => {

            // Devuelvo resultado (en este caso son varios recordsets lo que devuelve el SP)
            return Promise.resolve(recordsets);
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
