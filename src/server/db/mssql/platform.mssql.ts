import * as express from 'express';
import * as log4js from 'log4js';
let sql = require('mssql');

// Importo modelos.
import { Platform, PlatformViewModel } from '../../models/platform.model';

// Obtengo logger.
let logger = log4js.getLogger('Sql');

// Conexión a base de datos.
let sqlConn: any;

export function PlatformMSSql(app: express.Application) {
	// Obtengo conexión a base de datos.
	sqlConn = app.get('sqlConn');
}

//////////////////////////////////////////
// Funciones de acceso a base de datos. //
//////////////////////////////////////////

export function GetPlatforms(search_criteria: string, search_expression: string): Promise<PlatformViewModel[]> {

	return new sql.Request(sqlConn)
		.input('SearchCriteria', sql.VarChar(50), search_criteria)
		.input('SearchExpression', sql.VarChar(50), search_expression)
		.execute('GetPlatforms')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: PlatformViewModel[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

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

export function GetPlatform(platformHash: string): Promise<any> {
	return new sql.Request(sqlConn)
		.input('PlatformHash', sql.VarChar(100), platformHash)
		.execute('GetPlatform')
		.then((recordsets: any) => {

			// Devuelvo resultado.
			return Promise.resolve(recordsets);
		}).catch((err: any) => {
			// Obtengo mensaje de error.
			let errorMsg: string = (err && err.procName ? 'Error al ejecutar \'' + err.procName + '\': ' : 'Error al ejecutar consulta: ') + (err ? typeof err === 'string' ? err : err.message || err.description || '' : '');

			// Escribo el error en el log.
			logger.error(errorMsg);

			// Hago reject y devuelvo el error.
			return Promise.reject(err);
		});
}

export function GetPlatformByHash(
	platformHash: string
): Promise<Platform> {

	return new sql.Request(sqlConn)
		.input('PlatformHash', sql.VarChar(100), platformHash)
		.execute('GetPlatformByHash')
		.then(
			(recordsets: any) => {
				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Obtengo el elemento a devolver dentro del recordset.
				let platform: Platform = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Devuelvo resultado.
				return Promise.resolve(platform);
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

export function GetPlatformByData(
	installationId: string,
	macAddress: string,
	baseBoardSerialNumber: string
): Promise<Platform> {

	return new sql.Request(sqlConn)
		.input('InstallationId', sql.VarChar(50), installationId)
		.input('MacAddress', sql.VarChar(50), macAddress)
		.input('BaseBoardSerialNumber', sql.VarChar(50), baseBoardSerialNumber)
		.execute('GetPlatformByData')
		.then(
			(recordsets: any) => {
				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Obtengo el elemento a devolver dentro del recordset.
				let platform: Platform = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Devuelvo resultado.
				return Promise.resolve(platform);
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

export function SavePlatformHash(
	platformHash: string,
	user: string
): Promise<any> {

	return new sql.Request(sqlConn)
		.input('PlatformHash', sql.VarChar(100), platformHash)
		.input('User', sql.VarChar(50), user)
		.execute('SavePlatformHash')
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

export function SavePlatform(
	platformHash: string,
	installationId: string,
	macAddress: string,
	baseBoardSerialNumber: string
): Promise<any> {

	return new sql.Request(sqlConn)
		.input('PlatformHash', sql.VarChar(100), platformHash)
		.input('InstallationId', sql.VarChar(50), installationId)
		.input('MacAddress', sql.VarChar(50), macAddress)
		.input('BaseBoardSerialNumber', sql.VarChar(50), baseBoardSerialNumber)
		.execute('SavePlatform')
		.then(
			(recordsets: any) => {
				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Obtengo el elemento a devolver dentro del recordset.
				let platform: Platform = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Devuelvo resultado.
				return Promise.resolve(platform);
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

export function ActivatePlatform(
	platformHash: string,
	installationId: string,
	macAddress: string,
	baseBoardSerialNumber: string,
	user: string,
	token: string
): Promise<any> {

	return new sql.Request(sqlConn)
		.input('PlatformHash', sql.VarChar(100), platformHash)
		.input('InstallationId', sql.VarChar(50), installationId)
		.input('MacAddress', sql.VarChar(50), macAddress)
		.input('BaseBoardSerialNumber', sql.VarChar(50), baseBoardSerialNumber)
		.input('User', sql.VarChar(50), user)
		.input('Token', sql.VarChar(50), token)
		.execute('ActivatePlatform')
		.then(
			(recordsets: any) => {
				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Obtengo el elemento a devolver dentro del recordset.
				let platform: Platform = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Devuelvo resultado.
				return Promise.resolve(platform);
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

