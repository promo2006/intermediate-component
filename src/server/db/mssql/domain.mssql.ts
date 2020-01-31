import * as express from 'express';
import * as log4js from 'log4js';
let sql = require('mssql');

// Importo modelos
import { Domain } from '../../models/domain.model';

// Obtengo logger
let logger = log4js.getLogger('Sql');

// Conexion a base de datos
let sqlConn: any;

export function DomainMSSql(app: express.Application) {

	// Obtengo conexion a base de datos
	sqlConn = app.get('sqlConn');
}

/////////////////////////////////////////
// Funciones de acceso a base de datos //
/////////////////////////////////////////

export function GetDomains(
	vcc: string, search_criteria: string, search_expression: string
): Promise<Domain[]> {

	return new sql.Request(sqlConn)
		.input('VCC', sql.VarChar(50), vcc)
		.input('SearchCriteria', sql.VarChar(50), search_criteria)
		.input('SearchExpression', sql.VarChar(50), search_expression)
		.execute('GetDomains')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets)
				let recordset: Domain[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Devuelvo resultado
				return Promise.resolve(recordset);
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

export function GetDomain(
	vcc: string, domain: string
): Promise<Domain> {

	return new sql.Request(sqlConn)
		.input('VCC', sql.VarChar(50), vcc)
		.input('Domain', sql.VarChar(50), domain)
		.execute('GetDomain')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets)
				let recordset: Domain[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Obtengo el elemento a devolver dentro del recordset
				let domain: Domain = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Devuelvo resultado
				return Promise.resolve(domain);
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

export function GetMainDomain(
	vcc: string
): Promise<Domain> {

	return new sql.Request(sqlConn)
		.input('VCC', sql.VarChar(50), vcc)
		.execute('GetMainDomain')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets)
				let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Obtengo el elemento a devolver dentro del recordset
				let domain: Domain = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Devuelvo resultado
				return Promise.resolve(domain);
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

export function GetInstanceByDomain(
	domain: string
): Promise<string> {

	return new sql.Request(sqlConn)
		.input('Domain', sql.VarChar(50), domain)
		.execute('GetInstanceByDomain')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets)
				let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Obtengo el elemento a devolver dentro del recordset
				let record: any = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Devuelvo resultado
				return Promise.resolve((record && record.vcc) || null);
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

export function SaveDomain(
	vcc: string, domain: string, description: string,
	client: string, hasHttps: boolean, contentPort: string,
	prefix: string, isMainDomain: boolean, isContentDomain: boolean,
	contentDefaultRedirect: string, isDistributedService: boolean, associatedDistributedService: string,
	customCode: string, createdDate: Date, createdByUserId: string,
	lastModifiedDate: Date, lastModifiedByUserId: string
): Promise<boolean> {

	return new sql.Request(sqlConn)
		.input('VCC', sql.VarChar(50), vcc)
		.input('Domain', sql.VarChar(50), domain)
		.input('Description', sql.VarChar(200), description)
		.input('Client', sql.VarChar(50), client)
		.input('HasHttps', sql.Bit, hasHttps)
		.input('ContentPort', sql.VarChar(50), contentPort)
		.input('Prefix', sql.VarChar(100), prefix)
		.input('IsMainDomain', sql.Bit, isMainDomain)
		.input('IsContentDomain', sql.Bit, isContentDomain)
		.input('ContentDefaultRedirect', sql.VarChar(50), contentDefaultRedirect)
		.input('IsDistributedService', sql.Bit, isDistributedService)
		.input('AssociatedDistributedService', sql.VarChar(50), associatedDistributedService)
		.input('CustomCode', sql.VarChar(sql.MAX), customCode)
		.input('CreatedDate', sql.DateTime, createdDate)
		.input('CreatedByUserId', sql.VarChar(50), createdByUserId)
		.input('LastModifiedDate', sql.DateTime, lastModifiedDate)
		.input('LastModifiedByUserId', sql.VarChar(50), lastModifiedByUserId)
		.execute('SaveDomain')
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

export function DeleteDomain(
	vcc: string, domain: string
): Promise<boolean> {

	return new sql.Request(sqlConn)
		.input('VCC', sql.VarChar(50), vcc)
		.input('Domain', sql.VarChar(50), domain)
		.execute('DeleteDomain')
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
