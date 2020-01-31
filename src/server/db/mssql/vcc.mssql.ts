import * as express from 'express';
import * as log4js from 'log4js';
let sql = require('mssql');

// Importo modelos.
import { VCC, AzureSubscriptionKey } from '../../models/vcc.model';

// Obtengo logger.
let logger = log4js.getLogger('Sql');

// Conexión a base de datos.
let sqlConn: any;

export function VCCMSSql(app: express.Application) {

	// Obtengo conexión a base de datos.
	sqlConn = app.get('sqlConn');
}

//////////////////////////////////////////
// Funciones de acceso a base de datos. //
//////////////////////////////////////////

export function GetVCCs(
	vcc: string, search_criteria: string, search_expression: string
): Promise<VCC[]> {

	return new sql.Request(sqlConn)
		.input('VCC', sql.VarChar(50), vcc)
		.input('SearchCriteria', sql.VarChar(50), search_criteria)
		.input('SearchExpression', sql.VarChar(50), search_expression)
		.execute('GetVCCs')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: VCC[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

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

export function GetSubscriptionKeys(
	vcc: string
): Promise<AzureSubscriptionKey[]> {

	return new sql.Request(sqlConn)
		.input('VCC', sql.VarChar(50), vcc)
		.execute('GetSubscriptionKeys')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: AzureSubscriptionKey[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

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

export function GetSubscriptionKey(
	vcc: string
): Promise<AzureSubscriptionKey> {

	return new sql.Request(sqlConn)
		.input('VCC', sql.VarChar(50), vcc)
		.execute('GetSubscriptionKey')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: AzureSubscriptionKey[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);


				// Obtengo el elemento a devolver dentro del recordset
				let record: AzureSubscriptionKey = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Devuelvo resultado.
				return Promise.resolve(record);
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

export function GetVCC(
	id: string
): Promise<VCC> {

	return new sql.Request(sqlConn)
		.input('ID', sql.VarChar(50), id)
		.execute('GetVCC')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets)
				let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Obtengo el elemento a devolver dentro del recordset
				let record: VCC = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Devuelvo resultado.
				return Promise.resolve(record);
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

export function SaveVCC(
	vcc: string,
	id: string,
	description: string,
	country: string,
	language: string,
	timeZone: string,
	createdDate: Date,
	createdByUserId: string,
	lastModifiedDate: Date,
	lastModifiedByUserId: string
): Promise<boolean> {

	return new sql.Request(sqlConn)
		.input('VCC', sql.VarChar(50), vcc)
		.input('ID', sql.VarChar(50), id)
		.input('Description', sql.VarChar(50), description)
		.input('Country', sql.VarChar(50), country)
		.input('Language', sql.VarChar(50), language)
		.input('TimeZone', sql.VarChar(50), timeZone)
		.input('CreatedDate', sql.DateTime, createdDate)
		.input('CreatedByUserId', sql.VarChar(50), createdByUserId)
		.input('LastModifiedDate', sql.DateTime, lastModifiedDate)
		.input('LastModifiedByUserId', sql.VarChar(50), lastModifiedByUserId)
		.execute('SaveVCC')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Obtengo el elemento a devolver dentro del recordset.
				let output: any = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Devuelvo resultado.
				return Promise.resolve(output && output.result === 1);
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

export function DeleteVCC(
	vcc: string, id: string
): Promise<boolean> {

	return new sql.Request(sqlConn)
		.input('VCC', sql.VarChar(50), vcc)
		.input('ID', sql.VarChar(50), id)
		.execute('DeleteVCC')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Obtengo el elemento a devolver dentro del recordset.
				let output: any = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Devuelvo resultado.
				return Promise.resolve(output && output.result === 1);
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
