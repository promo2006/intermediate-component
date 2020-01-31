import * as express from 'express';
import * as log4js from 'log4js';
let sql = require('mssql');

// Importo modelos
import { Role, RolePermission, RolePermissionsGroup } from '../../models/role.model';

// Obtengo logger
let logger = log4js.getLogger('Sql');

// Conexion a base de datos
let sqlConn: any;

export function RoleMSSql(app: express.Application) {

	// Obtengo conexion a base de datos
	sqlConn = app.get('sqlConn');
}

/////////////////////////////////////////
// Funciones de acceso a base de datos //
/////////////////////////////////////////

export function GetRoles(
	search_criteria: string, search_expression: string
): Promise<Role[]> {

	return new sql.Request(sqlConn)
		.input('SearchCriteria', sql.VarChar(50), search_criteria)
		.input('SearchExpression', sql.VarChar(50), search_expression)
		.execute('GetRoles')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets)
				let recordset: Role[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

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

export function GetRole(
	roleId: string
): Promise<Role> {

	// Obtengo la info del role y sus permisos
	return new sql.Request(sqlConn)
		.input('RoleId', sql.VarChar(50), roleId)
		.execute('GetRole')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets)
				let recordset: any = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

				// Obtengo el elemento a devolver dentro del recordset
				let role: Role = (recordset && recordset.length > 0 ? recordset[0] : null);

				// Si recibi rol, busco los siguientes recordsets
				if (role) {
					// Obtengo datos de RolePermission (en este caso el resultado es un array)
					recordset = (recordsets && recordsets.length > 1 ? recordsets[1] : null);
					role.permissions = (recordset ? recordset : null);
					// Obtengo datos de RoutePermission (en este caso el resultado es un array)
					recordset = (recordsets && recordsets.length > 2 ? recordsets[2] : null);
					role.routePermissions = (recordset ? recordset : null);
					// Obtengo datos de SinglePermission (en este caso el resultado es un array)
					recordset = (recordsets && recordsets.length > 3 ? recordsets[3] : null);
					role.singlePermissions = (recordset ? recordset : null);
				}

				// Devuelvo resultado
				return Promise.resolve(role);
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

export function SaveRole(
	id: string, description: string,
	createdDate: Date, createdByUserId: string, lastModifiedDate: Date,
	lastModifiedByUserId: string
): Promise<boolean> {

	return new sql.Request(sqlConn)
		.input('ID', sql.VarChar(50), id)
		.input('Description', sql.VarChar(50), description)
		.input('CreatedDate', sql.DateTime, createdDate)
		.input('CreatedByUserId', sql.VarChar(50), createdByUserId)
		.input('LastModifiedDate', sql.DateTime, lastModifiedDate)
		.input('LastModifiedByUserId', sql.VarChar(50), lastModifiedByUserId)
		.execute('SaveRole')
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

export function SaveRolePermission(
	roleId: string, groupId: string
): Promise<boolean> {

	return new sql.Request(sqlConn)
		.input('RoleId', sql.VarChar(50), roleId)
		.input('GroupId', sql.VarChar(50), groupId)
		.execute('SaveRolePermission')
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

export function SaveRolePermissionsGroup(
	groupId: string, category: string
): Promise<boolean> {

	return new sql.Request(sqlConn)
		.input('GroupId', sql.VarChar(200), groupId)
		.input('Category', sql.VarChar(50), category)
		.execute('SaveRolePermissionsGroup')
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

export function SaveRoutePermission(
	id: string, groupId: string, route: string, level: string
): Promise<boolean> {

	return new sql.Request(sqlConn)
		.input('ID', sql.VarChar(50), id)
		.input('GroupId', sql.VarChar(200), groupId)
		.input('Route', sql.VarChar(250), route)
		.input('Level', sql.VarChar(50), level)
		.execute('SaveRoutePermission')
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

export function DeleteRole(
	id: string
): Promise<boolean> {

	return new sql.Request(sqlConn)
		.input('ID', sql.VarChar(50), id)
		.execute('DeleteRole')
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

export function DeleteRolePermission(
	roleId: string
): Promise<boolean> {

	return new sql.Request(sqlConn)
		.input('RoleId', sql.VarChar(50), roleId)
		.execute('DeleteRolePermission')
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

export function GetRolePermissionsGroups(
	vcc: string
): Promise<RolePermissionsGroup[]> {

	return new sql.Request(sqlConn)
		.input('VCC', sql.VarChar(50), vcc)
		.execute('GetRolePermissionsGroups')
		.then(
			(recordsets: any) => {

				// Extraigo el resultado del SP recibido (el output de un SP es un array de recordsets)
				let recordset: RolePermissionsGroup[] = (recordsets && recordsets.length > 0 ? recordsets[0] : null);

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

export function SaveSinglePermission(
	vcc: string, type: string, element: string
): Promise<boolean> {

	return new sql.Request(sqlConn)
		.input('VCC', sql.VarChar(50), vcc)
		.input('Type', sql.VarChar(50), type)
		.input('Element', sql.VarChar(50), element)
		.execute('SaveSinglePermission')
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

export function DeleteSinglePermission(
	vcc: string, type: string, element: string
): Promise<boolean> {

	return new sql.Request(sqlConn)
		.input('VCC', sql.VarChar(50), vcc)
		.input('Type', sql.VarChar(50), type)
		.input('Element', sql.VarChar(50), element)
		.execute('DeleteSinglePermission')
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
