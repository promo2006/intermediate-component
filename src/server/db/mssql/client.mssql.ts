import * as express from 'express';
import * as log4js from 'log4js';
import { Client } from '../../models/client.model';

let sql = require('mssql');

// Importo modelos.

// Obtengo logger.
let logger = log4js.getLogger('Sql');

// Conexión a base de datos.
let sqlConn: any;

export function ClientMSSql(app: express.Application) {
	// Obtengo conexión a base de datos.
	sqlConn = app.get('sqlConn');
}

export function GetClients(search_criteria: string, search_expression: string): Promise<Client> {
	return new sql.Request(sqlConn)
		.input('SearchCriteria', sql.VarChar(50), search_criteria)
		.input('SearchExpression', sql.VarChar(50), search_expression)
		.execute('GetClients')
		.then((recordsets: any) => {
			// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
			let recordset: Client[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

			// Devuelvo resultado.
			return Promise.resolve(recordset);
		}).catch((err: any) => {
			// Obtengo mensaje de error.
			let errorMsg: string = (err && err.procName ? 'Error al ejecutar \'' + err.procName + '\': ' : 'Error al ejecutar consulta: ') + (err ? typeof err === 'string' ? err : err.message || err.description || '' : '');

			// Escribo el error en el log.
			logger.error(errorMsg);

			// Hago reject y devuelvo el error.
			return Promise.reject(err);
		});
}

