import * as express from 'express';
import * as log4js from 'log4js';
let sql = require('mssql');

// Importo modelos.
import { VCC } from '../../models/vcc.model';
import { User, UserAPI } from '../../models/user.model';

// Obtengo logger.
let logger = log4js.getLogger('Sql');

// Conexión a base de datos.
let sqlConn: any;

export function IntegrationMSSql(app: express.Application) {

	// Obtengo conexión a base de datos.
	sqlConn = app.get('sqlConn');
}

//////////////////////////////////////////
// Funciones de acceso a base de datos. //
//////////////////////////////////////////

export function GetIntegrationVCCs(
	ip: string, type: number, ambiente: string
): Promise<VCC[]> {
	return new sql.Request(sqlConn)
		.input('Ip', sql.VarChar(50), ip)
		.input('Type', sql.Int, type)
		.input('Ambiente', sql.VarChar(50), ambiente)
		.execute('GetIntegrationVCCs')
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

export function GetIntegrationUsers(
	ip: string, type: number
): Promise<User[]> {

	return new sql.Request(sqlConn)
		.input('Ip', sql.VarChar(50), ip)
		.input('Type', sql.Int, type)
		.execute('GetIntegrationUsers')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: User[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

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

export function GetAPIUserOCC(
	vcc: string
): Promise<any> {

	return new sql.Request(sqlConn)
		.input('VCC', sql.VarChar(50), vcc)
		.execute('GetAPIUserOCC')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Obtengo el elemento a devolver dentro del recordset.
				let ApiUserOCC: any = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Devuelvo resultado.
				return Promise.resolve(ApiUserOCC);
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

export function GetAPIUsersOCC(
): Promise<any[]> {

	return new sql.Request(sqlConn)
		.execute('GetAPIUsersOCC')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: any[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

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

export function GetAPIUserAllegro(
	vcc: string
): Promise<any> {

	return new sql.Request(sqlConn)
		.input('VCC', sql.VarChar(50), vcc)
		.execute('GetAPIUserAllegro')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Obtengo el elemento a devolver dentro del recordset.
				let APIUserAllegro: any = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Devuelvo resultado.
				return Promise.resolve(APIUserAllegro);
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

export function GetAPIUsersAllegro(
): Promise<any[]> {

	return new sql.Request(sqlConn)
		.execute('GetAPIUsersAllegro')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: any[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

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


export function GetAllegroAgent(ip: string, vcc: string, userId: string, type: number): Promise<any> {
	return new sql.Request(sqlConn)
		.input('IP', sql.VarChar(50), ip)
		.input('VCC', sql.VarChar(50), vcc)
		.input('UserId', sql.VarChar(50), userId)
		.input('Type', sql.Int, type)
		.execute('GetAllegroAgent')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Obtengo el elemento a devolver dentro del recordset.
				let agent: any = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Devuelvo resultado
				return Promise.resolve(agent);
			}
		).catch(
			(err: any) => {
				// Obtengo mensaje de error.
				let errorMsg: string = (err && err.procName ? 'Error al ejecutar \'' + err.procName + '\': ' : 'Error al ejecutar consulta: ') + (err ? typeof err === 'string' ? err : err.message || err.description || '' : '');

				// Escribo el error en el log.
				logger.error('[IntegrationMSSql::GetAllegroAgent] Getting error:', errorMsg, 'vcc:', vcc, 'userId:', userId);

				// Hago reject y devuelvo el error.
				return Promise.resolve(false);
			}
		);
}

export function GetAllegroRole(ip: string, vcc: string, roleId: string, type: number): Promise<any> {
	return new sql.Request(sqlConn)
		.input('IP', sql.VarChar(50), ip)
		.input('VCC', sql.VarChar(50), vcc)
		.input('RoleId', sql.VarChar(50), roleId)
		.input('Type', sql.Int, type)
		.execute('GetAllegroRole')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets).
				let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Obtengo el elemento a devolver dentro del recordset.
				let agent: any = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Devuelvo resultado.
				return Promise.resolve(agent);
			}
		).catch(
			(err: any) => {
				// Obtengo mensaje de error.
				let errorMsg: string = (err && err.procName ? 'Error al ejecutar \'' + err.procName + '\': ' : 'Error al ejecutar consulta: ') + (err ? typeof err === 'string' ? err : err.message || err.description || '' : '');

				// Escribo el error en el log.
				logger.error('[IntegrationMSSql::GetAllegroRole] Getting error:', errorMsg, 'vcc:', vcc, 'roleId:', roleId);

				// Hago reject y devuelvo el error.
				return Promise.resolve(false);
			}
		);
}


export function SaveIntegratedUser(
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
		.execute('SaveIntegratedUser')
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

export function SaveAllegroUser(
	userGroup: string, validationOrigin: string, country: string,
	id: string, state: string, isSystemUser: string,
	name: string, languageId: string, timeZoneId: string,
	password: string, vcc: string, vccGroup: string,
	ip: string, type: number
): Promise<boolean> {

	return new sql.Request(sqlConn)
		.input('UserGroup', sql.VarChar(50), userGroup)
		.input('ValidationOrigin', sql.VarChar(50), validationOrigin)
		.input('Country', sql.VarChar(100), country)
		.input('Id', sql.VarChar(50), id)
		.input('State', sql.VarChar(20), state)
		.input('IsSystemUser', sql.VarChar(50), isSystemUser)
		.input('Name', sql.VarChar(100), name)
		.input('LanguageId', sql.VarChar(100), languageId)
		.input('TimeZoneId', sql.VarChar(50), timeZoneId)
		.input('Password', sql.VarChar(100), password)
		.input('VCC', sql.VarChar(50), vcc)
		.input('VccGroup', sql.VarChar(50), vccGroup)
		.input('Ip', sql.VarChar(50), ip)
		.input('Type', sql.Int, type)
		.execute('SaveAllegroUser')
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

				// Obtengo mensaje de validación para el caso de que no exista el rol en Allegro.
				let messageValidate: string = err.message.indexOf('FOREIGN KEY constraint "FK_UserGroup') > -1 ? 'ALLEGRO_ROLE_NOT_FOUND' : 'GENERIC_ALLEGRO_ERROR';

				// Escribo el error en el log.
				logger.error('[IntegrationMSSql::SaveAllegroUser] Getting error:', errorMsg, 'messageValidate:', messageValidate);

				// Hago reject y devuelvo el error
				return Promise.resolve({ status: false, messageValidate: messageValidate });
			}
		);
}

export function SaveAllegroGroup(
	vcc: string, id: string, isSystemGroup: string,
	description: string, ip: string, type: number
): Promise<boolean> {

	return new sql.Request(sqlConn)
		.input('VCC', sql.VarChar(50), vcc)
		.input('Id', sql.VarChar(50), id)
		.input('IsSystemGroup', sql.VarChar(50), isSystemGroup)
		.input('Description', sql.VarChar(100), description)
		.input('Ip', sql.VarChar(50), ip)
		.input('Type', sql.Int, type)
		.execute('SaveAllegroGroup')
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
