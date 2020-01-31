import * as express from 'express';
import * as log4js from 'log4js';
let sql = require('mssql');

// Importo modelos.
import { AvailableLicenseItem } from '../../models/license.model';

// Obtengo logger.
let logger = log4js.getLogger('Sql');

// Conexión a base de datos.
let sqlConn: any;

export function LicenseMSSql(app: express.Application) {
	// Obtengo conexión a base de datos.
	sqlConn = app.get('sqlConn');
}

//////////////////////////////////////////
// Funciones de acceso a base de datos. //
//////////////////////////////////////////
export function GetPlatformAvailableLicenses(
	platformHash : string,
    installationId : string
) : Promise<AvailableLicenseItem[]> {

	return new sql.Request(sqlConn)
		.input('PlatformHash', sql.VarChar(100), platformHash)
		.input('InstallationId', sql.VarChar(100), installationId)
		.execute('GetPlatformAvailableLicenses')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: AvailableLicenseItem[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Devuelvo resultado.
				return Promise.resolve(recordset);
			}
		).catch(
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