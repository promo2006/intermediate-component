import * as express from 'express';
import * as log4js from 'log4js';
let sql = require('mssql');

// Importo modelos.
import { AccountItem, AccountSelectItem, AccountViewModel } from '../../models/account.model';

// Obtengo logger.
let logger = log4js.getLogger('Sql');

// Conexión a base de datos.
let sqlConn: any;

export function AccountMSSql(app: express.Application) {
	// Obtengo conexión a base de datos.
	sqlConn = app.get('sqlConn');
}

//////////////////////////////////////////
// Funciones de acceso a base de datos. //
//////////////////////////////////////////
export function CreateMainAccount(
	platformHash : string,
	accountId : string,
	user : string,
	token : string,
	transcriptionRatePerHour : number,
	transcriptionRatePerSecond : number,
	semanticAnalysisRatePerSecond : number,
	cognitiveAnalysisRatePerSecond : number,
	createdByUserId : string
) : Promise<AccountItem[]> {

	return new sql.Request(sqlConn)
		.input('PlatformHash', sql.VarChar(100), platformHash)
		.input('AccountId', sql.VarChar(50), accountId)
		.input('User', sql.VarChar(50), user)
		.input('Token', sql.VarChar(50), token)
		.input('TranscriptionRatePerHour', sql.Decimal(18,5), transcriptionRatePerHour)
		.input('TranscriptionRatePerSecond', sql.Decimal(18,5), transcriptionRatePerSecond)
		.input('SemanticAnalysisRatePerTransaction', sql.Decimal(18,5), semanticAnalysisRatePerSecond)
		.input('CognitiveAnalysisRatePerTransaction', sql.Decimal(18,5), cognitiveAnalysisRatePerSecond)
		.input('CreatedByUserId', sql.VarChar(50), createdByUserId)
		.execute('CreateMainAccount')
		.then(
			(recordsets: any) => {
				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Obtengo el elemento a devolver dentro del recordset.
				let account : AccountItem = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Devuelvo resultado.
				return Promise.resolve(account);
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

// Esta función recupera todas las cuentas existentes en la base de datos
export function GetAccounts(search_criteria: string, search_expression: string): Promise<AccountViewModel[]> {

	return new sql.Request(sqlConn)
		.input('SearchCriteria', sql.VarChar(50), search_criteria)
		.input('SearchExpression', sql.VarChar(50), search_expression)
		.execute('GetAccounts')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: AccountViewModel[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

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

export function GetPlatformAccounts(
    installationId : string
) : Promise<AccountItem[]> {

	return new sql.Request(sqlConn)
		.input('InstallationId', sql.VarChar(100), installationId)
		.execute('GetPlatformAccounts')
		.then(
			(recordsets: any) => {
				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: AccountItem[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

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

export function GetRelatedAccounts(
    installationId : string
) : Promise<AccountSelectItem[]> {

	return new sql.Request(sqlConn)
		.input('InstallationId', sql.VarChar(100), installationId)
		.execute('GetRelatedAccounts')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: AccountSelectItem[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

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

export function GetRelatedSubAccounts(
    installationId : string
) : Promise<AccountSelectItem[]> {

	return new sql.Request(sqlConn)
		.input('InstallationId', sql.VarChar(100), installationId)
		.execute('GetRelatedSubAccounts')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: AccountSelectItem[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

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

export function GetAccountUser(
	installationId : string,
	accountId : string,
	subAccountId : string
) : Promise<AccountItem[]> {

	return new sql.Request(sqlConn)
		.input('InstallationId', sql.VarChar(100), installationId)
		.input('AccountId', sql.VarChar(50), accountId)
		.input('SubAccountId', sql.VarChar(50), subAccountId)
		.execute('GetAccountUser')
		.then(
			(recordsets: any) => {
				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Obtengo el elemento a devolver dentro del recordset.
				let account : AccountItem = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Devuelvo resultado.
				return Promise.resolve(account);
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

export function GetAccountByHashUserToken(
	platformHash : string,
	user : string,
	token : string
) : Promise<AccountItem[]> {

	return new sql.Request(sqlConn)
		.input('PlatformHash', sql.VarChar(100), platformHash)
		.input('User', sql.VarChar(50), user)
		.input('Token', sql.VarChar(50), token)
		.execute('GetAccountByHashUserToken')
		.then(
			(recordsets: any) => {
				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Obtengo el elemento a devolver dentro del recordset.
				let account : AccountItem = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Devuelvo resultado.
				return Promise.resolve(account);
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

export function GetAccountSubAccountExists(
	installationId : string,
	accountId : string,
	subAccountId : string
) : Promise<AccountItem[]> {

	return new sql.Request(sqlConn)
		.input('InstallationId', sql.VarChar(100), installationId)
		.input('AccountId', sql.VarChar(50), accountId)
		.input('SubAccountId', sql.VarChar(50), subAccountId)
		.execute('GetAccountSubAccountExists')
		.then(
			(recordsets: any) => {
				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Obtengo el elemento a devolver dentro del recordset.
				let account : AccountItem = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Devuelvo resultado.
				return Promise.resolve(account);
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