import * as express from 'express';
import * as log4js from 'log4js';
let sql = require('mssql');

// Importo modelos.
import { VCC, AzureSubscriptionKey } from '../../models/vcc.model';
import { AccountRate } from '../../models/account.model';
import { AccountBalance } from '../../models/accountBalance.model';

// Obtengo logger.
let logger = log4js.getLogger('Sql');

// Conexión a base de datos.
let sqlConn: any;

export function AccountBalanceMSSql(app: express.Application) {

	// Obtengo conexión a base de datos.
	sqlConn = app.get('sqlConn');
}

//////////////////////////////////////////
// Funciones de acceso a base de datos. //
//////////////////////////////////////////
export function CreateMainAccountBalance(
    plataformHash : string,
    accountId : string,
    balance : number,
    user : string
): Promise<boolean> {
    return new sql.Request(sqlConn)
        .input('PlatformHash', sql.VarChar(100), plataformHash)
        .input('AccountId', sql.VarChar(50), accountId)
        .input('Balance', sql.Decimal(18,5), balance)
        .input('User', sql.VarChar(250), user)
		.execute('CreateMainAccountBalance')
		.then(
			(recordsets: any) => {
                // Registramos en el log los parámetros recibidos
                logger.info('[AccountBalanceMSSql.mssql::CreateMainAccountBalance] Result: ', recordsets);

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

export function GetAccountSubAccountRate(
    installationId : string,
    accountId : string = null,
    subAccountId : number = null,
    searchType : string
): Promise<any[]> {
    return new sql.Request(sqlConn)
        .input('InstallationId', sql.VarChar(100), installationId)
        .input('AccountId', sql.VarChar(50), accountId)
        .input('SubAccountId', sql.VarChar(50), subAccountId)
        .input('SearchType', sql.VarChar(50), searchType)
		.execute('GetAccountSubAccountRate')
		.then(
			(recordsets: any) => {
				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: AccountRate[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

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

export function GetAccountSubAccountBalance(
    installationId : string,
    accountId : string = null,
    subAccountId : number = null,
    systemService : string = null,
    searchType : string
): Promise<any[]> {
    return new sql.Request(sqlConn)
        .input('InstallationId', sql.VarChar(100), installationId)
        .input('AccountId', sql.VarChar(50), accountId)
        .input('SubAccountId', sql.VarChar(50), subAccountId)
        .input('SystemService', sql.VarChar(50), systemService)
        .input('SearchType', sql.VarChar(50), searchType)
		.execute('GetAccountSubAccountBalance')
		.then(
			(recordsets: any) => {
				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: AccountBalance[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

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