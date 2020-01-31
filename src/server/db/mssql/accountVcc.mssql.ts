import * as express from 'express';
import * as log4js from 'log4js';
let sql = require('mssql');

// Importo modelos.
import { VCC, AzureSubscriptionKey } from '../../models/vcc.model';
import { AccountVcc } from '../../models/accountVcc.model';

// Obtengo logger.
let logger = log4js.getLogger('Sql');

// Conexión a base de datos.
let sqlConn: any;

export function AccountVccMSSql(app: express.Application) {

	// Obtengo conexión a base de datos.
	sqlConn = app.get('sqlConn');
}

//////////////////////////////////////////
// Funciones de acceso a base de datos. //
//////////////////////////////////////////
export function CreateAccountVCC(
    installationId : string,
    accountId : string,
    subAccountId : string,
	accountVcc : string, 
	transcriptionRatePerHour : string, 
	transcriptionRatePerSecond : string, 
	semanticAnalysisRatePerTransaction : string,  
	cognitiveAnalysisRatePerTransaction : string, 
    product : string
): Promise<boolean> {
    return new sql.Request(sqlConn)
        .input('InstallationId', sql.VarChar(100), installationId)
        .input('AccountId', sql.VarChar(50), accountId)
        .input('SubAccountId', sql.VarChar(50), subAccountId)
		.input('AccountVCC', sql.VarChar(50), accountVcc)
		.input('TranscriptionRatePerHour', sql.Decimal(18, 5), transcriptionRatePerHour)
		.input('TranscriptionRatePerSecond', sql.Decimal(18, 5), transcriptionRatePerSecond)
		.input('SemanticAnalysisRatePerTransaction', sql.Decimal(18, 5), semanticAnalysisRatePerTransaction)
		.input('CognitiveAnalysisRatePerTransaction', sql.Decimal(18, 5), cognitiveAnalysisRatePerTransaction)
		.input('Product', sql.VarChar(250), product)
		.execute('CreateAccountVCC')
		.then(
			(recordsets: any) => {
                // Registramos en el log los parámetros recibidos
                logger.info('[accountVCC.mssql::CreateAccountVCC] Result: ', recordsets);

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

export function GetAccountVCC(
    installationId : string,
    vcc : string
): Promise<boolean> {
    return new sql.Request(sqlConn)
        .input('InstallationId', sql.VarChar(100), installationId)
        .input('Vcc', sql.VarChar(50), vcc)
		.execute('GetAccountVCC')
		.then(
			(recordsets: any) => {
                // Registramos en el log los parámetros recibidos
                logger.info('[accountVCC.mssql::GetAccountVCC] Result: ', recordsets);

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Obtengo el elemento a devolver dentro del recordset.
				let output: any = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Devuelvo resultado.
				return Promise.resolve(output);
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

export function GetAccountVccByAccountVcc(
    installationId : string, 
    accountId : string,
    vcc : string): Promise<any[]> {
	return new sql.Request(sqlConn)
		.input('InstallationId', sql.VarChar(50), installationId)
        .input('AccountId', sql.VarChar(50), accountId)
        .input('Vcc', sql.VarChar(50), vcc)
		.execute('GetAccountVccByAccountVcc')
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

export function GetAccountVccByAccountSubAccountVcc(
    installationId : string, 
    accountId : string,
    subAccountId : string): Promise<any[]> {
	return new sql.Request(sqlConn)
		.input('InstallationId', sql.VarChar(50), installationId)
        .input('AccountId', sql.VarChar(50), accountId)
        .input('SubAccountId', sql.VarChar(50), subAccountId)
		.execute('GetAccountVccByAccountSubAccountVcc')
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

export function GetAccountVccRates(
	installationId : string, 
    vcc : string): Promise<any> {

	return new sql.Request(sqlConn)
		.input('InstallationId', sql.VarChar(50), installationId)
        .input('Vcc', sql.VarChar(50), vcc)
		.execute('GetAccountVccRates')
		.then(
			(recordsets: any) => {
				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
                let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

                // Obtengo el elemento a devolver dentro del recordset.
                let output: any = (recordset && recordset.length > 0 ? recordset[0] : null);

                // Devuelvo resultado.
                return Promise.resolve(output);
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

export function GetAccountVccProducts(
	installationId : string, 
    vcc : string): Promise<any> {

	return new sql.Request(sqlConn)
		.input('InstallationId', sql.VarChar(50), installationId)
        .input('Vcc', sql.VarChar(50), vcc)
		.execute('GetAccountVccProducts')
		.then(
			(recordsets: any) => {
				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
                let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

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
