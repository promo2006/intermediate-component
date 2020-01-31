import * as express from 'express';
import * as moment from 'moment';
import * as log4js from 'log4js';

// Importo modelos
import { Role, RolePermissionsGroup } from '../models/role.model';

// Importo servicio con funciones para MSSQL
import { MSSql } from '../db/mssql.service';

// Importo servicio con funciones para Redis
import { Redis } from '../db/redis.service';

// Importo funciones para manejo de request y sesiones
import { DummyPromise } from '../shared/promises.shared';

// Obtengo logger
let logger = log4js.getLogger('ServerScripts');

export function RoleService(app: express.Application) {

	app.get('/api/role/get_roles/:search_criteria/:search_expression?',
		(req: express.Request, res: express.Response, next: any) => {

			logger.info('Se recibio ' + req.method + ' para \'' + req.path + '\'');

			// Instancia asociada a la URL en la que se recibio el request
			let vcc: string = res.locals.vcc;

			// Datos recibidos en el request
			let search_criteria: string = req.params.search_criteria || '';
			let search_expression: string = req.params.search_expression || '';

			// Empiezo con promesa dummy para poder hacer throw y caer en el catch
			DummyPromise()
				.then(
					result => {
						// Ejecuto consulta a base de datos
						return MSSql.GetRoles(vcc, search_criteria, search_expression);
					}
				).then(
					resultRoles => {
						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;

						// Envio respuesta con el resultado recibido del ultimo paso
						res.json({ status: true, description: 'OK', data: resultRoles });
					}
				).catch(
					err => {
						// Obtengo mensajes de error
						let clientMsg: string = (typeof err === 'string' ? err : 'Cannot process request');
						let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');

						// Escribo el error en el log
						logger.error('Error al procesar \'' + req.path + '\': ' + errorMsg);

						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;
						// Devuelvo respuesta con el mensaje obtenido
						res.json({ status: false, description: clientMsg, error: errorMsg });
					}
				);
		});

	app.get('/api/role/get_role/:role_id',
		(req: express.Request, res: express.Response, next: any) => {

			logger.info('Se recibio ' + req.method + ' para \'' + req.path + '\'');

			// Instancia asociada a la URL en la que se recibio el request
			let vcc: string = res.locals.vcc;

			// Datos recibidos en el request
			let roleId: string = req.params.role_id;

			// Empiezo con promesa dummy para poder hacer throw y caer en el catch
			DummyPromise()
				.then(
					result => {
						// Valido que este todo lo necesario
						if (!roleId) throw 'Missing role input parameter';

						// Ejecuto consulta a base de datos
						return MSSql.GetRole(vcc, roleId);
					}
				).then(
					resultRole => {
						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;

						// Envio respuesta con el resultado recibido del ultimo paso
						res.json({ status: true, description: 'OK', data: resultRole });
					}
				).catch(
					err => {
						// Obtengo mensajes de error
						let clientMsg: string = (typeof err === 'string' ? err : 'Cannot process request');
						let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');

						// Escribo el error en el log
						logger.error('Error al procesar \'' + req.path + '\': ' + errorMsg);

						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;
						// Devuelvo respuesta con el mensaje obtenido
						res.json({ status: false, description: clientMsg, error: errorMsg });
					}
				);
		});

	app.post('/api/role/create_role',
		(req: express.Request, res: express.Response, next: any) => {

			logger.info('Se recibio ' + req.method + ' para \'' + req.path + '\'');

			// Instancia asociada a la URL en la que se recibio el request
			let vcc: string = res.locals.vcc;
			// Usuario asociado a la sesion que envio el request
			let userId: string = res.locals.userId;
			// Obtengo fecha y hora actual
			let nowUtc: Date = moment().utc().toDate();

			// Armo objeto con con la data recibida
			let newRole: Role = <Role>(req.body || {});

			// Acomodo datos de creacion y modificacion (null mantiene el dato original)
			newRole.createdDate = nowUtc;
			newRole.createdByUserId = userId;
			newRole.lastModifiedDate = nowUtc;
			newRole.lastModifiedByUserId = userId;

			// Empiezo con promesa dummy para poder hacer throw y caer en el catch
			DummyPromise()
				.then(
					result => {
						// Ejecuto cadena de promesas enganchadas para guardar cada elemento del modelo
						return MSSql.GetRole(vcc, newRole.id);
					}
				).then(
					resultRole => {
						// El id recibido ya esta en uso
						if (resultRole) throw 'Ya existe un rol con el identificador \'' + newRole.id + '\'';

						// Guardo el rol
						return SaveRole(vcc, newRole);
					}
				).then(
					resultSaveRole => {
						// Verifico que no fallo el query anterior
						if (!resultSaveRole) throw 'Se produjo un error al guardar el rol';

						// Borro el dato en cache (no lo guardo porque me falta la parte de permissions)
						return Redis.DeleteRole(vcc, newRole);
					}
				).then(
					resultSaveRole => {
						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;

						// Escribo a log
						logger.info('Rol \'' + newRole.id + '\' creado correctamente');

						// Envio respuesta con el resultado recibido del ultimo paso
						res.json({ status: resultSaveRole, description: (resultSaveRole ? 'OK' : 'Role save failed'), data: resultSaveRole });
					}
				).catch(
					err => {
						// Obtengo mensajes de error
						let clientMsg: string = (typeof err === 'string' ? err : 'Cannot process request');
						let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');

						// Escribo el error en el log
						logger.error('Error al procesar \'' + req.path + '\': ' + errorMsg);

						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;
						// Devuelvo respuesta con el mensaje obtenido
						res.json({ status: false, description: clientMsg, error: errorMsg });
					}
				);
		});

	app.post('/api/role/save_role',
		(req: express.Request, res: express.Response, next: any) => {

			logger.info('Se recibió ' + req.method + ' para \'' + req.path + '\'');

			// Instancia asociada a la URL en la que se recibio el request
			let vcc: string = res.locals.vcc;
			// Usuario asociado a la sesion que envio el request
			let userId: string = res.locals.userId;
			// Obtengo fecha y hora actual
			let nowUtc: Date = moment().utc().toDate();

			// Armo objeto con con la data recibida
			let newRole: Role = <Role>(req.body || {});

			// Acomodo datos de creacion y modificacion (null mantiene el dato original)
			newRole.createdDate = null;
			newRole.createdByUserId = null;
			newRole.lastModifiedDate = nowUtc;
			newRole.lastModifiedByUserId = userId;

			logger.info('[RoleService::/api/role/save_role] getting newRole:', newRole);

			// Empiezo con promesa dummy para poder hacer throw y caer en el catch
			DummyPromise()
				.then(
					result => {
						// Obtengo los datos del rol.
						return MSSql.GetRole(vcc, newRole.id);
					}
				).then(
					resultGetRole => {
						logger.info('[RoleService::/api/role/save_role] getting resultGetRole:', resultGetRole);

						// Verifico que no falló el query anterior.
						if (!resultGetRole) throw 'CANNOT_GET_ROLE_DATA';

						// Guardo el rol.
						return SaveRole(vcc, newRole);
					}
				).then(
					resultSaveRole => {
						// Verifico que no falló el query anterior.
						if (!resultSaveRole) throw 'ROLE_SAVE_FAILED';

						// Borro el dato en cache (no lo guardo porque me falta la parte de permissions).
						return Redis.DeleteRole(vcc, newRole);
					}
				).then(
					resultSaveRole => {
						logger.info('[UserService::/api/role/save_user] getting resultSaveRole:', resultSaveRole, 'after Redis.DeleteRole');

						// Si alguno de los pasos anteriores ya envio respuesta, no sigo.
						if (res.headersSent) return;

						// Escribo a log.
						logger.info('Rol \'' + newRole.id + '\' guardado correctamente');

						// Envío respuesta.
						res.json({ status: resultSaveRole, description: (resultSaveRole ? 'OK' : 'ROLE_SAVE_FAILED'), data: resultSaveRole });
					}
				).catch(
					err => {
						// Obtengo mensajes de error.
						let clientMsg: string = (typeof err === 'string' ? err : 'CANNOT_PROCESS_REQUEST');
						let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');

						// Escribo el error en el log.
						logger.error('Error al procesar \'' + req.path + '\': ' + errorMsg);

						// Si alguno de los pasos anteriores ya envió respuesta, no sigo.
						if (res.headersSent) return;
						// Devuelvo respuesta con el mensaje obtenido.
						res.json({ status: false, description: clientMsg, error: errorMsg });
					}
				);
		});

	app.post('/api/role/delete_role',
		(req: express.Request, res: express.Response, next: any) => {

			logger.info('Se recibio ' + req.method + ' para \'' + req.path + '\'');

			// Instancia asociada a la URL en la que se recibio el request
			let vcc: string = res.locals.vcc;

			// Datos recibidos en el request
			let role: Role = req.body.role;
			let roleId: string = role.id;

			// Empiezo con promesa dummy para poder hacer throw y caer en el catch
			DummyPromise()
				.then(
					result => {
						// Valido que este todo lo necesario
						if (!role) throw 'Missing role input parameter';

						// Ejecuto consulta a base de datos
						return MSSql.DeleteRole(vcc, roleId);
					}
				).then(
					resultDeleteRole => {
						// Verifico que no fallo el query anterior
						if (!resultDeleteRole) throw 'Se produjo un error al eliminar la campaña';

						// Borro dato en cache
						return Redis.DeleteRole(vcc, role);
					}
				).then(
					resultDeleteRole => {
						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;

						// Envio respuesta con el resultado recibido del ultimo paso
						res.json({ status: resultDeleteRole, description: (resultDeleteRole ? 'OK' : 'Role delete failed'), data: resultDeleteRole });
					}
				).catch(
					err => {
						// Obtengo mensajes de error
						let clientMsg: string = (typeof err === 'string' ? err : 'Cannot process request');
						let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');

						// Escribo el error en el log
						logger.error('Error al procesar \'' + req.path + '\': ' + errorMsg);

						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;
						// Devuelvo respuesta con el mensaje obtenido
						res.json({ status: false, description: clientMsg, error: errorMsg });
					}
				);
		});

	app.post('/api/role/delete_roles',
		(req: express.Request, res: express.Response, next: any) => {

			logger.info('Se recibio ' + req.method + ' para \'' + req.path + '\'');

			// Instancia asociada a la URL en la que se recibio el request
			let vcc: string = res.locals.vcc;

			// Datos recibidos en el request
			let roles: Role[] = req.body.roles || [];

			// Empiezo con promesa dummy para poder hacer throw y caer en el catch
			DummyPromise()
				.then(
					result => {
						// Valido que este todo lo necesario
						if (!roles) throw 'Missing roles input parameter';

						// Armo array de promesas con todas las ejecuciones a hacer
						let promiseArray: Promise<boolean>[] = [];

						// Agrego el delete de cada elemento recibido en el array
						roles.forEach(
							role => {
								promiseArray.push(
									MSSql.DeleteRole(
										vcc,
										role.id
									)
								);
							}
						);

						// Ejecuto todo junto y devuelvo un unico resultado
						return Promise.all(promiseArray);
					}
				).then(
					resultDeleteRoles => {
						// Resultado geneal del delete
						let result: boolean;

						// Verifico que se hayan borrado todos los elementos
						if (resultDeleteRoles.filter(result => { return (result !== true); }).length > 0) {
							// Si hay al menos un delete que fallo paso el resultado a false
							result = false;

							// Escribo a log
							logger.error('No se pudo eliminar todos los elementos solicitados.');
						} else {
							// Se elimino todo
							result = true;

							// Escribo a log
							logger.info('Roles eliminados correctamente');

							// Borro dato en cache
							roles.forEach(
								role => {
									Redis.DeleteRole(vcc, role);
								}
							);
						}

						// Siguo la ejecucion
						return result;
					}
				).then(
					resultDeleteRoles => {
						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;

						// Envio respuesta con el resultado recibido del ultimo paso
						res.json({ status: resultDeleteRoles, description: (resultDeleteRoles ? 'OK' : 'Roles delete failed'), data: resultDeleteRoles });
					}
				).catch(
					err => {
						// Obtengo mensajes de error
						let clientMsg: string = (typeof err === 'string' ? err : 'Cannot process request');
						let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');

						// Escribo el error en el log
						logger.error('Error al procesar \'' + req.path + '\': ' + errorMsg);

						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;
						// Devuelvo respuesta con el mensaje obtenido
						res.json({ status: false, description: clientMsg, error: errorMsg });
					}
				);
		});

	app.get('/api/role/get_roles_permission_groups',
		(req: express.Request, res: express.Response, next: any) => {

			logger.info('Se recibio ' + req.method + ' para \'' + req.path + '\'');

			// Instancia asociada a la URL en la que se recibio el request
			let vcc: string = res.locals.vcc;

			// Empiezo con promesa dummy para poder hacer throw y caer en el catch
			DummyPromise()
				.then(
					result => {
						// Ejecuto consulta a base de datos
						return MSSql.GetRolePermissionsGroups(vcc);
					}
				).then(
					resultPermissionGroups => {
						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;

						// Envio respuesta con el resultado recibido del ultimo paso
						res.json({ status: true, description: 'OK', data: resultPermissionGroups });
					}
				).catch(
					err => {
						// Obtengo mensajes de error
						let clientMsg: string = (typeof err === 'string' ? err : 'Cannot process request');
						let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');

						// Escribo el error en el log
						logger.error('Error al procesar \'' + req.path + '\': ' + errorMsg);

						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;
						// Devuelvo respuesta con el mensaje obtenido
						res.json({ status: false, description: clientMsg, error: errorMsg });
					}
				);
		});
}

/////////////////////////////////////////
// Funciones de acceso a cache y datos //
/////////////////////////////////////////

// Ejecuta la consulta GetRole, primero a Redis y si no esta alli a BD
export function GetRole(
	id: string
): Promise<Role> {

	// Flag para indicar si el registro debe ser insertado en redis
	let cacheUpdateNeeded: boolean = false;

	return Redis.GetRole(id)
		.then(
			(redisRole: Role) => {
				// Chequeo si el dato estaba guardado en memoria
				if (redisRole) {
					// Devuelvo resultado obtenido
					return Promise.resolve(redisRole);
				} else {
					// No hay valor en redis, hay que consultar a BD
					logger.info('El dato de GetRole para \'' + id + '\' no se encuentra en cache. se consultara a base de datos.');
					// Actualizo el flag para luego actualizar redis
					cacheUpdateNeeded = true;
					// Ejecuto consulta a BD
					return MSSql.GetRole(id);
				}
			}
		).then(
			(role: Role) => {
				// Chequeo si el dato estaba guardado en memoria
				if (role) {
					// Si corresponde actualizo el dato en cache
					if (cacheUpdateNeeded) Redis.SaveRole(role);
					// Devuelvo resultado obtenido
					return Promise.resolve(role);
				} else {
					// El dato no existia en base de datos
					throw 'Se consulto dato de GetRole para \'' + id + '\' que no se encuentra definido en base de datos.';
				}
			}
		).catch(
			(err: any) => {
				// Obtengo el mensaje de error, que es lo que se va a enviar hacia atras
				let errMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');
				// Escribo a log
				logger.error('Error al ejecutar GetRole: ' + errMsg);
			}
		);
}

/////////////////////////////////////////
// Funciones auxiliares                //
/////////////////////////////////////////

export function SaveRole(
	vcc: string, role: Role
): Promise<boolean> {

	// Armo array de promesas con todas las ejecuciones a hacer
	let promiseArray: Promise<boolean>[] = [];

	// Tabla Role
	promiseArray.push(
		MSSql.SaveRole(
			vcc,
			role.id,
			role.description,
			role.createdDate,
			role.createdByUserId,
			role.lastModifiedDate,
			role.lastModifiedByUserId
		)
	);

	// Tabla RolePermission
	if (role.permissions) {
		role.permissions.forEach(
			rolePermission => {
				promiseArray.push(
					MSSql.SaveRolePermission(
						vcc,
						rolePermission.roleId,
						rolePermission.groupId
					)
				);
			}
		);
	}

	// Ejecuto todo junto y devuelvo un unico resultado
	return Promise.all(promiseArray).then(
		results => {
			// Verifico que todas las respuestas del array sean true
			if (results.filter(result => { return (result !== true); }).length > 0) {
				return false;
			} else {
				return true;
			}
		}
	);
}


export function SaveRoles(
	vcc: string, role: Role[]
): Promise<boolean> {

	// Armo array de promesas con todas las ejecuciones a hacer.
	let promiseArray: Promise<boolean>[] = [];

	// Tabla Role.
	if (role) {
		role.forEach(
			roles => {
				promiseArray.push(
					MSSql.SaveRole(
						vcc,
						roles.id,
						roles.description,
						roles.createdDate,
						roles.createdByUserId,
						roles.lastModifiedDate,
						roles.lastModifiedByUserId
					)
				);
			}
		);
	}

	// Ejecuto todo junto y devuelvo un unico resultado.
	return Promise.all(promiseArray).then(
		results => {
			// Verifico que todas las respuestas del array sean true.
			if (results.filter(result => { return (result !== true); }).length > 0) {
				return false;
			} else {
				return true;
			}
		}
	);
}


export function SaveRolesRoutes(
	vcc: string, role: Role
): Promise<boolean> {

	// Armo array de promesas con todas las ejecuciones a hacer.
	let promiseArray: Promise<boolean>[] = [];

	// Tabla RolePermission.
	if (role.permissions) {
		role.permissions.forEach(
			rolePermission => {
				promiseArray.push(
					MSSql.SaveRolePermission(
						vcc,
						rolePermission.roleId,
						rolePermission.groupId
					)
				);
			}
		);
	}

	// Tabla RoutePermissions.
	if (role.routePermissions) {
		role.routePermissions.forEach(
			roleRoutePermissions => {
				promiseArray.push(
					MSSql.SaveRoutePermission(
						vcc,
						roleRoutePermissions.routeId,
						roleRoutePermissions.groupId,
						roleRoutePermissions.route,
						roleRoutePermissions.level
					)
				);
			}
		);
	}

	// Ejecuto todo junto y devuelvo un unico resultado.
	return Promise.all(promiseArray).then(
		results => {
			// Verifico que todas las respuestas del array sean true.
			if (results.filter(result => { return (result !== true); }).length > 0) {
				return false;
			} else {
				return true;
			}
		}
	);
}

export function SaveRolePermissionsGroup(
	vcc: string, permissionsGroup: RolePermissionsGroup[]
): Promise<boolean> {

	// Armo array de promesas con todas las ejecuciones a hacer.
	let promiseArray: Promise<boolean>[] = [];

	// Tabla RolePermissionsGroup.
	if (permissionsGroup) {
		permissionsGroup.forEach(
			rolePermissionsGroups => {
				promiseArray.push(
					MSSql.SaveRolePermissionsGroup(
						vcc,
						rolePermissionsGroups.groupId,
						rolePermissionsGroups.category
					)
				);
			}
		);
	}

	// Ejecuto todo junto y devuelvo un unico resultado.
	return Promise.all(promiseArray).then(
		results => {
			// Verifico que todas las respuestas del array sean true.
			if (results.filter(result => { return (result !== true); }).length > 0) {
				return false;
			} else {
				return true;
			}
		}
	);
}
