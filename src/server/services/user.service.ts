import * as express from 'express';
import * as moment from 'moment';
import * as path from 'path';
import * as log4js from 'log4js';

// Importo modelos
import { User } from '../models/user.model';

// Importo configuracion de MSSQL.
import { MSSQL_CONFIG } from '../config/mssql.config';

// Importo servicio con funciones para MSSQL
import { MSSql } from '../db/mssql.service';

// Importo configuraciones.
import { Login, SaveUserByAPIi6 } from '../shared/http-request-occ';

// Importo servicio con funciones para Redis
import { Redis } from '../db/redis.service';

// Importo funciones para manejo de request y sesiones
import { DummyPromise } from '../shared/promises.shared';

// Importo variables con datos del ambiente.
import { TYPE, IP, PORT, DNS } from '../config/integration.config';
import { resolve } from 'bluebird';

// Obtengo logger
let logger = log4js.getLogger('ServerScripts');

export function UserService(app: express.Application) {

	app.get('/api/user/get_users/:search_criteria/:search_expression?',
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
						return MSSql.GetUsers(vcc, search_criteria, search_expression);
					}
				).then(
					users => {
						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;

						// Envio respuesta con el resultado recibido del ultimo paso
						res.json({ status: true, description: 'OK', data: users });
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

	app.get('/api/user/get_user/:user_id',
		(req: express.Request, res: express.Response, next: any) => {

			logger.info('Se recibio ' + req.method + ' para \'' + req.path + '\'');

			// Instancia asociada a la URL en la que se recibio el request
			let vcc: string = res.locals.vcc;

			// Datos recibidos en el request
			let userId: string = req.params.user_id;

			// Empiezo con promesa dummy para poder hacer throw y caer en el catch
			DummyPromise()
				.then(
					result => {
						// Valido que este todo lo necesario
						if (!userId) throw 'Missing user input parameter';

						// Ejecuto consulta a base de datos
						return MSSql.GetUser(vcc, userId);
					}
				).then(
					resultUser => {
						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;

						// Envio respuesta con el resultado recibido del ultimo paso
						res.json({ status: true, description: 'OK', data: resultUser });
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

	app.post('/api/user/create_user',
		(req: express.Request, res: express.Response, next: any) => {

			logger.info('Se recibio ' + req.method + ' para \'' + req.path + '\'');

			// Instancia asociada a la URL en la que se recibio el request
			let vcc: string = res.locals.vcc;
			// Usuario asociado a la sesion que envio el request
			let userId: string = res.locals.userId;
			// Obtengo fecha y hora actual
			let nowUtc: Date = moment().utc().toDate();

			// Armo objeto con con la data recibida
			let newUser: User = <User>(req.body || {});

			// Paso el id a minuscula
			newUser.id = (newUser.id || '').toLowerCase();

			// Acomodo datos internos
			newUser.isSystemUser = false;

			// Acomodo datos de creacion y modificacion (null mantiene el dato original)
			newUser.createdDate = nowUtc;
			newUser.createdByUserId = userId;
			newUser.lastModifiedDate = nowUtc;
			newUser.lastModifiedByUserId = userId;

			// Establecemos el flag de acuerdo a la configuración de la aplicación y la conexión a servidor de base de datos. La BD de SpeechAnalytics se encuentra en el mismo servidor de Allegro, si flag = 1.
			let flag: number = IP === MSSQL_CONFIG.server ? 1 : 0;

			// Empiezo con promesa dummy para poder hacer throw y caer en el catch
			DummyPromise()
				.then((result: boolean) => {
					return SaveUserIntegration(vcc, newUser, IP, flag, false);
				})
				.then(
					resultSaveUser => {
						// Si alguno de los pasos anteriores ya envió respuesta, no sigo.
						if (res.headersSent) return;

						// Envío respuesta con el resultado recibido del último paso.
						res.json({ status: resultSaveUser, description: (resultSaveUser ? 'OK' : resultSaveUser), data: resultSaveUser });
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

	app.post('/api/user/save_user',
		(req: express.Request, res: express.Response, next: any) => {

			logger.info('[UserService::save_user] Received ' + req.method + ' method on \'' + req.path + '\'');

			// Instancia asociada a la URL en la que se recibió el request.
			let vcc: string = res.locals.vcc;
			// Usuario asociado a la sesión que envió el request.
			let userId: string = res.locals.userId;
			// Obtengo fecha y hora actual.
			let nowUtc: Date = moment().utc().toDate();

			// Armo objeto con con la data recibida.
			let newUser: User = <User>(req.body || {});

			// Paso el id a minúscula.
			newUser.id = (newUser.id || '').toLowerCase();

			// Acomodo datos internos.
			newUser.isSystemUser = false;

			// Acomodo datos de creación y modificación (null mantiene el dato original).
			newUser.createdDate = null;
			newUser.createdByUserId = null;
			newUser.lastModifiedDate = nowUtc;
			newUser.lastModifiedByUserId = userId;

			// Establecemos el flag de acuerdo a la configuración de la aplicación y la conexión a servidor de base de datos. La BD de SpeechAnalytics se encuentra en el mismo servidor de Allegro, si flag = 1.
			let flag: number = IP === MSSQL_CONFIG.server ? 1 : 0;

			logger.info('[UserService::save_user] External database: ' + flag);

			// Empiezo con promesa dummy para poder hacer throw y caer en el catch.
			DummyPromise()
				.then(
					result => {
						// Valido que este todo lo necesario
						if (!userId) throw 'Missing user input parameter';

						// Ejecuto consulta a base de datos
						return MSSql.GetUser(vcc, newUser.id);
					}
				)
				.then(
					result => {
						// Si no se encontró el usuario, se emite una respuesta
						if (!result) throw 'ERROR_USER_NOT_FOUND';

						// Si se trata de un usuario de role 'quality_auditor', buscamos si tiene evaluaciones pendientes
						if (result.role === 'quality_auditor') {
							logger.info('[UserService::save_user] Checking interactions from Auditor');

							return MSSql.GetAuditorsInteractions(vcc, 'id', newUser.id);
						} else {
							// Caso contrario pasamos al siguiente bloque
							return resolve(true);
						}
					}
				)
				.then(
					result => {
						// Si se intenta cambiar el tipo de usuario y el usuario tipo auditor tiene tiempo de 
						//  evaluaciones pendiente lanzamos un mensaje de aviso
						if (newUser.role !== 'quality_auditor'
							&& result && result[0] && result[0].uncompleteInteractions && result[0].uncompleteInteractions > 0) {
							throw 'ERROR_USER_PENDING_EVALUATIONS';
						} 

						return SaveUserIntegration(vcc, newUser, IP, flag, true);
					}
				).then(
					resultSaveUser => {
						// Si alguno de los pasos anteriores ya envió respuesta, no sigo.
						if (res.headersSent) return;

						// Envío respuesta con el resultado recibido del último paso.
						res.json({ status: resultSaveUser, description: (resultSaveUser ? 'OK' : resultSaveUser), data: resultSaveUser });
					}
				).catch(
					err => {
						// Obtengo mensajes de error.
						let clientMsg: string = (typeof err === 'string' ? err : 'CANNOT_PROCESS_REQUEST');
						let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');

						// Escribo el error en el log.
						logger.error('Error al procesar \'' + req.path + '\': ' + errorMsg);
						logger.error('[UserService::save_user] getting errorMsg:', errorMsg);

						// Si alguno de los pasos anteriores ya envió respuesta, no sigo.
						if (res.headersSent) return;
						// Devuelvo respuesta con el mensaje obtenido.
						res.json({ status: false, description: clientMsg, error: errorMsg });
					}
				);
		});

	app.post('/api/user/delete_user',
		(req: express.Request, res: express.Response, next: any) => {

			logger.info('Se recibio ' + req.method + ' para \'' + req.path + '\'');

			// Instancia asociada a la URL en la que se recibio el request
			let vcc: string = res.locals.vcc;

			// Datos recibidos en el request
			let user: User = req.body.user;
			let userId: string = user.id;

			// Empiezo con promesa dummy para poder hacer throw y caer en el catch
			DummyPromise()
				.then(
					result => {
						// Valido que este todo lo necesario
						if (!userId) throw 'Missing user input parameter';

						// Ejecuto consulta a base de datos
						return DeleteUser(vcc, userId);
					}
				)
				.then(
					resultDeleteUser => {
						if (typeof resultDeleteUser === 'boolean' && resultDeleteUser === true) {

						}
						// Si alguno de los pasos anteriores ya envió respuesta, no sigo.
						if (res.headersSent) return;

						// Envio respuesta con el resultado recibido del ultimo paso
						res.json({ status: true, description: '', data: resultDeleteUser });
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

	app.post('/api/user/delete_users',
		(req: express.Request, res: express.Response, next: any) => {

			logger.info('Se recibio ' + req.method + ' para \'' + req.path + '\'');

			// Instancia asociada a la URL en la que se recibio el request.
			let vcc: string = res.locals.vcc;

			// Datos recibidos en el request.
			let users: User[] = req.body.users || [];

			// Empiezo con promesa dummy para poder hacer throw y caer en el catch.
			DummyPromise()
				.then(
					result => {
						// Valido que esté todo lo necesario.
						if (!users) throw 'MISSING_USERS_INPUT_PARAMETER';

						// Armo array de promesas con todas las ejecuciones a hacer.
						let promiseArray: Promise<boolean>[] = [];

						// Agrego el delete de cada elemento recibido en el array.
						users.forEach((user: User) => {
							promiseArray.push(
								DeleteUser(vcc, user.id)
							);
						});

						// Ejecuto todo junto y devuelvo un unico resultado
						return Promise.all(promiseArray);
					}
				).then(
					resultDeleteUsers => {

						// Si alguno de los pasos anteriores ya envió respuesta, no sigo.
						if (res.headersSent) return;

						// Envío respuesta con el resultado recibido del último paso.
						res.json({ status: true, description: '', data: resultDeleteUsers });
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

	app.get('/api/current_user/get_user',
		(req: express.Request, res: express.Response, next: any) => {

			logger.info('Se recibio ' + req.method + ' para \'' + req.path + '\'');

			// Instancia asociada a la URL en la que se recibio el request
			let vcc: string = res.locals.vcc;
			// Usuario asociado a la sesion que envio el request
			let userId: string = res.locals.userId;

			// Empiezo con promesa dummy para poder hacer throw y caer en el catch
			DummyPromise()
				.then(
					result => {
						// Valido que este todo lo necesario
						if (!userId) throw 'Missing user input parameter';

						// Ejecuto consulta a base de datos
						return MSSql.GetUser(vcc, userId);
					}
				).then(
					resultUser => {
						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;

						// Envio respuesta con el resultado recibido del ultimo paso
						res.json({ status: true, description: 'OK', data: resultUser });
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

	app.post('/api/current_user/save_user',
		(req: express.Request, res: express.Response, next: any) => {

			logger.info('Se recibio ' + req.method + ' para \'' + req.path + '\'');

			// Instancia asociada a la URL en la que se recibio el request
			let vcc: string = res.locals.vcc;
			// Usuario asociado a la sesion que envio el request
			let userId: string = res.locals.userId;
			// Obtengo fecha y hora actual
			let nowUtc: Date = moment().utc().toDate();

			// Armo objeto con con la data recibida
			let newUser: User = <User>(req.body || {});

			// Paso el id a minuscula
			newUser.id = (newUser.id || '').toLowerCase();

			// Acomodo datos internos
			newUser.isSystemUser = false;
			if (vcc === 'system') newUser.isSystemUser = true;

			// Acomodo datos de creacion y modificacion (null mantiene el dato original)
			newUser.createdDate = null;
			newUser.createdByUserId = null;
			newUser.lastModifiedDate = nowUtc;
			newUser.lastModifiedByUserId = userId;

			// Empiezo con promesa dummy para poder hacer throw y caer en el catch
			DummyPromise()
				.then(
					result => {
						// Obtengo los datos del usuario que envio el request
						return MSSql.GetUser(vcc, userId);
					}
				).then(
					resultCurrentUser => {
						// Verifico que no fallo el query anterior
						if (!resultCurrentUser) throw 'Cannot get current user data';

						// Verifico que me haya llegado un usuario que tenga el id del currentUser
						if (!newUser || resultCurrentUser.id !== newUser.id) throw 'User ID must match current user';

						// El rol no se puede cambiar en este caso
						newUser.role = resultCurrentUser.role;
						// El limitClients tampoco
						newUser.limitClients = resultCurrentUser.limitClients;

						// Borro el usuario actual
						// return MSSql.DeleteUser(vcc, newUser.id);
						return Promise.resolve(true);
					}
				).then(
					resultDeleteUser => {
						// Verifico que no fallo el query anterior
						if (!resultDeleteUser) throw 'Se produjo un error al guardar el usuario';

						// Guardo el usuario
						return SaveUser(vcc, newUser);
					}
				).then(
					resultSaveUser => {
						// Verifico que no fallo el query anterior
						if (!resultSaveUser) throw 'Se produjo un error al guardar el usuario';

						// Guardo el dato en cache
						return Redis.SaveUser(vcc, newUser);
					}
				).then(
					result => {
						// Si alguno de los pasos anteriores ya envio respuesta, no sigo
						if (res.headersSent) return;

						// Envio respuesta con el resultado recibido del ultimo paso
						res.json({ status: result, description: (result ? 'OK' : 'User save failed'), data: result });
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

// Ejecuta la consulta GetUser, primero a Redis y si no esta alli a BD
export function GetUser(
	id: string
): Promise<User> {

	// Paso el id a minuscula
	id = (id || '').toLowerCase();

	// Flag para indicar si el registro debe ser insertado en redis
	let cacheUpdateNeeded: boolean = false;

	return Redis.GetUser(id)
		.then(
			(redisUser: User) => {
				// Chequeo si el dato estaba guardado en memoria
				if (redisUser) {
					// Devuelvo resultado obtenido
					return Promise.resolve(redisUser);
				} else {
					// No hay valor en redis, hay que consultar a BD
					logger.info('El dato de GetUser para \'' + id + '\' no se encuentra en cache. se consultara a base de datos.');
					// Actualizo el flag para luego actualizar redis
					cacheUpdateNeeded = true;
					// Ejecuto consulta a BD
					return MSSql.GetUser(id);
				}
			}
		).then(
			(user: User) => {
				// Chequeo si el dato estaba guardado en memoria
				if (user) {
					// Paso el id a minuscula
					user.id = (user.id || '').toLowerCase();
					// Si corresponde actualizo el dato en cache
					if (cacheUpdateNeeded) Redis.SaveUser(user);
					// Devuelvo resultado obtenido
					return Promise.resolve(user);
				} else {
					// El dato no existia en base de datos
					throw 'Se consulto dato de GetUser para \'' + id + '\' que no se encuentra definido en base de datos.';
				}
			}
		).catch(
			(err: any) => {
				// Obtengo el mensaje de error, que es lo que se va a enviar hacia atras
				let errMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');
				// Escribo a log
				logger.error('Error al ejecutar GetUser: ' + errMsg);
			}
		);
}

/////////////////////////////////////////
// Funciones auxiliares                //
/////////////////////////////////////////

export function SaveUser(
	vcc: string, user: User
): Promise<boolean> {

	// Armo array de promesas con todas las ejecuciones a hacer
	let promiseArray: Promise<boolean>[] = [];

	// Tabla User
	promiseArray.push(
		MSSql.SaveUser(
			vcc,
			user.id,
			user.email,
			user.firstname,
			user.lastname,
			user.password,
			user.role,
			user.country,
			user.language,
			user.timeZone,
			user.preferences,
			user.isSystemUser,
			user.limitClients,
			user.createdDate,
			user.createdByUserId,
			user.lastModifiedDate,
			user.lastModifiedByUserId
		)
	);

	// Tabla UserClient
	if (user.userClients) {
		user.userClients.forEach(
			userClient => {
				promiseArray.push(
					MSSql.SaveUserClient(
						vcc,
						userClient.userId,
						userClient.clientId
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
	)
		.then(
			(result: any) => {
				// Enviar a guardar a la table Auditor si el rol seleccionado es Auditor o quality_auditor.
				if (user.role.toLowerCase() === 'auditor' || user.role.toLowerCase() === 'quality_auditor') {
					logger.info('SaveAuditor: ', user);
					// Guardar en tabla Auditor.
					return MSSql.SaveAuditor(
						vcc,
						user.id,
						'',
						user.createdDate,
						user.createdByUserId,
						user.lastModifiedDate,
						user.lastModifiedByUserId
					);
				} else {
					// Devolver true.
					return true;
				}
			}
		).catch((err: any) => {
			// Devolvemos false para indicar que sucedió error.
			return Promise.resolve(false);
		});
}

// Ejeecutamos método para guardar usuario por API i6.
function ExecuteSaveUserByAPIi6(
	vcc: string, user: User
): Promise<any> {

	return MSSql.GetAPIUserOCC(vcc)
		.then(
			resultUserAPI => {
				// Si no tenemos usuarios devolvemos null.
				if (!resultUserAPI) return Promise.resolve(null);

				return Login(resultUserAPI.user + '@' + resultUserAPI.vcc, resultUserAPI.password);
			}
		)
		.then(
			resultLogin => {
				// Si no tenemos accessToken devolvemos null.
				if (!resultLogin.accessToken) return Promise.resolve(null);

				// Declaramos objeto a guardar.
				let userToSave: any = <any>{};
				userToSave.Password = user.password;
				userToSave.isNew = true;
				userToSave.Id = user.id;
				userToSave.Name = user.firstname;
				userToSave.FirstSurname = user.lastname;
				userToSave.UserGroup = (user.role === 'quality_auditor' ? 'qualityauditor' : user.role);
				userToSave.TimeZoneId = 'UYT';
				userToSave.countryCode = '598';

				return SaveUserByAPIi6(resultLogin.accessToken, userToSave);
			}
		).then(
			resultSaveUserByAPIi6 => {
				return Promise.resolve(resultSaveUserByAPIi6);
			}
		).catch((err: any) => {
			// Guardamos error en el log.
			logger.error('ExecuteTask (inConcert): Error: ' + err.message);
			// En cualquier error devolver nulo.
			return Promise.resolve(null);
		});
}

function SaveUserIntegration(vcc: string, newUser: User, ip: string, flag: number, isEdit: boolean): Promise<any> {
	let agentExist: boolean = false;
	let roleExist: boolean = false;
	
	return DummyPromise()
		.then(
			result => {
				// Obtener el usuario de SpeechAnalytics.
				return MSSql.GetUser(vcc, newUser.id);
			}
		).then(
			resultUser => {
				// Si no es editar es nuevo usuario y debe validar en ese caso.
				if (!isEdit) {
					// Generar error porque el usuario existe.
					if (resultUser) throw 'USER_ID_ALREADY_EXISTS';
				}

				// En el caso de que sea editar usuario.
				if (isEdit) {
					// Si campo password es null se guarda el passowrd que ya tenía, caso contrario se guarda el nuevo.
					newUser.password = newUser.password === null ? resultUser.password !== undefined ? resultUser.password : '' : newUser.password;

					// Verifico que me haya llegado un usuario que tenga el id.
					if (!newUser || resultUser.id !== newUser.id) throw 'USER_NOT_MATCH';
				}

				logger.info('[UserService::SaveUserIntegration] Not password arrived, using: ' + newUser.password);
						
				// En caso de ser role agente o auditor replicamos usuario en allegro/OCC. 
				if ((newUser.role === 'quality_agent' || newUser.role === 'quality_auditor') && (TYPE === 'OCC' || TYPE === 'INTEGRATED')) {
					return ExecuteSaveUserByAPIi6(vcc, newUser);
				} else if (newUser.role === 'quality_agent' && TYPE === '5.5') {
					// Primero validamos si existe el agente en Allegro, enviando el vcc y el userId.
					return MSSql.GetAllegroAgent(IP, vcc, newUser.id, flag);
				} else if (newUser.role === 'quality_auditor' && TYPE === '5.5') {
					// Continuamos para que envíe a guardar el auditor.
					return true;
				} else {
					// Continuamos.
					return true;
				}
			}
		).then((result: any) => {
			if (newUser.role === 'quality_agent' && TYPE === '5.5') {
				// Validación si existe agente en Allegro.
				agentExist = result ? true : false;

				// Validamos si existe el rol en Allegro.
				return MSSql.GetAllegroRole(IP, vcc, newUser.role, flag);
			} else if (newUser.role === 'quality_auditor' && TYPE === '5.5') {
				// Continuamos para que envíe a guardar el auditor.
				return true;
			} else {
				// Continuamos.
				return true;
			}
		})
		.then((result: any) => {
			// Verificamos el role y el tipo de integración.
			if ((newUser.role === 'quality_agent' || newUser.role === 'quality_auditor') && TYPE === '5.5') {
				// Validación si existe el rol en Allegro.
				roleExist = result ? true : false;

				// Si existe el agente debe guardar en MMProDat.User o si es el usuario de rol quality_auditor.
				if (agentExist || result) {
					// Concatenamos nombre para enviarlo a Allegro.
					let name: string = newUser.firstname + (newUser.lastname ? ' ' + newUser.lastname : '');

					return MSSql.SaveAllegroUser(
						newUser.role === 'quality_auditor' ? 'qualityauditor' : newUser.role,
						0,
						'598',
						newUser.id,
						'ENABLED',
						'0',
						name,
						'es',
						'UYT',
						newUser.password,
						vcc,
						newUser.role === 'quality_auditor' ? 'system' : vcc,
						IP,
						flag
					);
				} else {
					throw 'ALLEGRO_AGENT_NOT_FOUND';
				}
			} else {
				// Continuamos.
				return true;
			}
		}).then((result: boolean) => {
			if (newUser.role === 'quality_agent' && TYPE === '5.5') {
				// Si existe el rol debe guardar en MMProDat.Agent.
				if (roleExist) {
					// Continuamos. Por ahora no se guarda en MMProDat.
					return true;
				}
				
				// Si existe el agente es true y debe guardar el usuario con el método SaveUser.
				return agentExist;
			} else if (newUser.role === 'quality_auditor' && TYPE === '5.5') {
				// Enviamos el result después de ejecutar MSSql.SaveAllegroUser para que envíe a guardar el auditor con el método SaveUser.
				return Promise.resolve(result);
			} else {
				// Continuamos.
				return Promise.resolve(true);
			}
		})
		.then((result: any) => {
			// Para el caso de quality_agent. Si existe el agente o si existe el role debe guardar en la tabla User en SpeechAnalytics.
			if (result) {
				// Guardo el usuario.
				return SaveUser(vcc, newUser);
			}
			// Enviamos false para indicar que no debe guardarse en la tabla User de SpeechAnalytics.
			return Promise.resolve(false);
		}).then(
			resultSaveUser => {
				// Si se está creando un usuario con el rol quality_agent o quality_auditor.
				if ((newUser.role === 'quality_agent' || newUser.role === 'quality_auditor') && TYPE === '5.5') {
					// En el caso de que el error fue producto de que no existe el agente, ni el rol en MMProDat.
					if (!resultSaveUser) throw 'USER_SAVE_FAILED_QUALITY';
				}

				// Verifico que no falló el query anterior.
				if (!resultSaveUser) throw 'USER_SAVE_FAILED';

				// Guardo el dato en cache.
				return Redis.SaveUser(vcc, newUser);
			}
		).catch((err: any) => {
			logger.error('[UserService::SaveUserIntegration] Getting error:', err, 'IP:', ip, 'flag:', flag, 'newUser:', newUser);

			// Enviamos mensaje de error.
			return Promise.reject(err);
		});
}

function SetError(userId: string, reason: string): Promise<boolean> {
	let details: any = null;

	if ((userId && userId.length) && (reason && reason.length)) {
		details = {};
		details.error = {
			userId: userId,
			reason: reason
		};
	}
	return Promise.resolve(details);
}

// Función para eliminar un usuario verificando si existe o no, y si existe, verificar si tiene el rol quality_auditor, verificar si tiene evaluaciones pendientes.
function DeleteUser(vcc: string, userId: string): Promise<any> {

	let user: User, reason: string = '';
	return DummyPromise()
		.then((result: boolean) => {
			// Valido que esté todo lo necesario.
			if (!userId) {
				reason = 'MISSING_USER_ID_PARAMETER';
				throw reason;
			}

			// Obtener el usuario de SpeechAnalytics.
			return MSSql.GetUser(vcc, userId);
		}).then(result => {
			// Asignamos el valor del user.
			user = result;

			// Si no se encontró el usuario, se emite una respuesta.
			if (!result) {
				reason = 'ERROR_USER_NOT_FOUND';
				throw reason;
			}

			// Si se trata de un usuario de role 'quality_auditor', buscamos si tiene evaluaciones pendientes.
			if (result.role === 'quality_auditor') {
				return MSSql.GetAuditorsInteractions(vcc, 'id', userId);
			} else {
				// Caso contrario pasamos al siguiente bloque.
				return true;
			}
		}).then(result => {
			// Si el usuario tipo auditor tiene evaluaciones pendientes lanzamos un mensaje de aviso.
			if (result && result[0] && result[0].uncompleteInteractions && result[0].uncompleteInteractions > 0) {
				reason = 'ERROR_USER_PENDING_EVALUATIONS_MSG';
				throw reason;
			}
			// Si la respuesta fue true es porque no era del rol quality_auditor, pero sí se puede eliminar.
			if (result) {
				// Intento eliminar el usuario.
				return MSSql.DeleteUser(vcc, userId);
			}

			// Continuamos.
			return true;
		}).then((result: any) => {
			// Si la eliminación del usuario fue correcta, entonces eliminar en Redis.
			if (!result) {
				reason = 'ERROR_DELETING_USER';
				throw reason;
			}

			// Intento eliminar el usuario en Redis.
			return Redis.DeleteUser(vcc, user);
		}).then((result: any) => {
			if (!result) {
				reason = 'ERROR_DELETING_USER_REDIS';
				throw reason;
			}
			return Promise.resolve(result);
		}).catch((error: any) => {
			return SetError(userId, error);
		});
}
