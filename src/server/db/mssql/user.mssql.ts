import * as express from 'express';
import * as log4js from 'log4js';
let sql = require('mssql');

// Importo modelos
import { User, UserAPI } from '../../models/user.model';

// Obtengo logger
let logger = log4js.getLogger('Sql');

// Conexion a base de datos
let sqlConn: any;

export function UserMSSql(app: express.Application) {

	// Obtengo conexion a base de datos
	sqlConn = app.get('sqlConn');
}

/////////////////////////////////////////
// Funciones de acceso a base de datos //
/////////////////////////////////////////

export function GetUsers(
	search_criteria: string, search_expression: string
): Promise<User[]> {

	return new sql.Request(sqlConn)
		.input('SearchCriteria', sql.VarChar(50), search_criteria)
		.input('SearchExpression', sql.VarChar(50), search_expression)
		.execute('GetUsers')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets)
				let recordset: User[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

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

export function GetUser(
	userId: string
): Promise<User> {

	return new sql.Request(sqlConn)
		.input('UserId', sql.VarChar(50), userId)
		.execute('GetUser')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets)
				let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Obtengo el elemento a devolver dentro del recordset
				let user: User = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Si recibi campaña, busco los siguientes recordsets
				if (user) {
					// Obtengo datos de UserClient (en este caso el resultado es un array)
					recordset = (recordsets && recordsets.length > 1 ? recordsets[1] : null);
					user.userClients = (recordset ? recordset : null);
				}

				// Devuelvo resultado
				return Promise.resolve(user);
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

export function SaveUser(
	vcc: string, id: string, email: string,
	firstname: string, lastname: string, password: string,
	role: string, country: string, language: string,
	timeZone: string, preferences: string, isSystemUser: boolean,
	limitClients: boolean, createdDate: Date, createdByUserId: string,
	lastModifiedDate: Date, lastModifiedByUserId: string
): Promise<boolean> {

	return new sql.Request(sqlConn)
		.input('VCC', sql.VarChar(50), vcc)
		.input('ID', sql.VarChar(50), id)
		.input('Email', sql.VarChar(50), email)
		.input('Firstname', sql.VarChar(50), firstname)
		.input('Lastname', sql.VarChar(50), lastname)
		.input('Password', sql.VarChar(50), password)
		.input('Role', sql.VarChar(50), role)
		.input('Country', sql.VarChar(50), country)
		.input('Language', sql.VarChar(50), language)
		.input('TimeZone', sql.VarChar(50), timeZone)
		.input('Preferences', sql.VarChar(200), preferences)
		.input('IsSystemUser', sql.Bit, isSystemUser)
		.input('LimitClients', sql.Bit, limitClients)
		.input('CreatedDate', sql.DateTime, createdDate)
		.input('CreatedByUserId', sql.VarChar(50), createdByUserId)
		.input('LastModifiedDate', sql.DateTime, lastModifiedDate)
		.input('LastModifiedByUserId', sql.VarChar(50), lastModifiedByUserId)
		.execute('SaveUser')
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

export function SaveUserClient(
	vcc: string, userId: string, clientId: string
): Promise<boolean> {

	return new sql.Request(sqlConn)
		.input('VCC', sql.VarChar(50), vcc)
		.input('UserId', sql.VarChar(50), userId)
		.input('ClientId', sql.VarChar(50), clientId)
		.execute('SaveUserClient')
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

export function DeleteUser(
	vcc: string, id: string
): Promise<boolean> {

	return new sql.Request(sqlConn)
		.input('VCC', sql.VarChar(50), vcc)
		.input('ID', sql.VarChar(50), id)
		.execute('DeleteUser')
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

/////////////////////////
//funciones para tareas//
////////////////////////
export function GetUsersTask(): Promise<User[]> {

	return new sql.Request(sqlConn)
		.execute('GetUsersTask')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets)
				let recordset: User[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

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

export function GetUserAPI(vcc: string, ID: string): Promise<UserAPI[]> {
	// Obtengo la lista de UserAPI según los parámetros ingresados.
	return new sql.Request(sqlConn)
		.input('VCC', sql.VarChar(50), vcc)
		.input('ID', sql.VarChar(50), ID)
		.execute('GetUserAPI')
		.then((recordsets: any) => {
			// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
			let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);
		})
		.catch((err: any) => {
			// Obtengo mensaje de error.
			let errorMsg: string = (err && err.procName ? 'Error al ejecutar \'' + err.procName + '\': ' : 'Error al ejecutar consulta: ') + (err ? typeof err === 'string' ? err : err.message || err.description || '' : '');

			// Escribo el error en el log.
			logger.error(errorMsg);

			// Hago reject y devuelvo el error.
			return Promise.reject(err);
		});
}
