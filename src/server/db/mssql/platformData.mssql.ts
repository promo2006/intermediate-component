import * as express from 'express';
import * as log4js from 'log4js';
let sql = require('mssql');

// Importo modelos.
import { Platform } from '../../models/platform.model';

// Obtengo logger.
let logger = log4js.getLogger('Sql');

// Conexión a base de datos.
let sqlConn: any;

export function PlatformDataMSSql(app: express.Application) {
	// Obtengo conexión a base de datos.
	sqlConn = app.get('sqlConn');
}

//////////////////////////////////////////
// Funciones de acceso a base de datos. //
//////////////////////////////////////////
export function SavePlatformData (
	platformHash : string,
	clientName : string,
	clientContactName : string,
	clientContactEmail : string,
	transcriptionRatePerHour : number,
	transcriptionRatePerSecond : number,
	semanticAnalysisRatePerSecond : number,
	cognitiveAnalysisRatePerSecond : number,
	user : string
    ): Promise<any> {

	return new sql.Request(sqlConn)
	.input('PlatformHash', sql.VarChar(100), platformHash)
	.input('ClientName', sql.VarChar(100), clientName)
	.input('ClientContactName', sql.VarChar(100), clientContactName)
	.input('ClientContactEmail', sql.VarChar(100), clientContactEmail)
	.input('TranscriptionRatePerHour', sql.Decimal(18,5), transcriptionRatePerHour)
	.input('TranscriptionRatePerSecond', sql.Decimal(18,5), transcriptionRatePerSecond)
	.input('SemanticAnalysisRatePerTransaction', sql.Decimal(18,5), semanticAnalysisRatePerSecond)
	.input('CognitiveAnalysisRatePerTransaction', sql.Decimal(18,5), cognitiveAnalysisRatePerSecond)
	.input('User', sql.VarChar(50), user)
    .execute('SavePlatformData')
    .then(
        (recordsets: any)  => {
            // Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
            let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

            // Obtengo el elemento a devolver dentro del recordset.
            let output: any = (recordset && recordset.length > 0 ? recordset[0] : null);

            // Devuelvo resultado.
            return Promise.resolve(output && output.result === 1);
        }
	)
	.catch(
        (err: any) => {
            // Obtengo mensaje de error.
            let errorMsg: string = (err && err.procName ? 'Error al ejecutar \'' + err.procName + '\': ' : 'Error al ejecutar consulta: ') + (err ? typeof err === 'string' ? err : err.message || err.description || '' : '');

            // Escribo el error en el log.
            logger.error(errorMsg);

            // Hago reject y devuelvo el error.
            return Promise.reject(err);
        }
    );
}