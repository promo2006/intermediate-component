import * as express from 'express';
import * as moment from 'moment';
import * as path from 'path';
import * as log4js from 'log4js';
import { Redis } from '../db/redis.service';

// Importo servicio con funciones para MSSQL.
import { MSSql } from '../db/mssql.service';
import { DummyPromise } from '../shared/promises.shared';
import { Platform, PlatformViewModel } from '../models/platform.model';
import { LICENSE_TEMP_PREFIX, LICENSE_TEMP_PATH } from '../config/config';
import { ExistInFileSystem, CreateFolder, UploadFileToServer, ReadFileContent, DeleteFile } from '../shared/file-manager';

// Obtengo logger.
let logger = log4js.getLogger('ServerScripts');

export function PlatformService(app: express.Application) {

	app.get('/api/platform/get_platforms/:search_criteria/:search_expression?', (req: express.Request, res: express.Response, next: any) => {

		logger.info('[PlatformService::get_platforms] Received ' + req.method + ' method on \'' + req.path + '\'');

		// Instancia asociada a la URL en la que se recibio el request.
		let vcc: string = res.locals.vcc;

		// Datos recibidos en el request.
		let search_criteria: string = req.params.search_criteria || '';
		let search_expression: string = req.params.search_expression || '';

		// Empiezo con promesa dummy para poder hacer throw y caer en el catch.
		DummyPromise()
			.then((result: boolean) => {
				// Ejecuto consulta a base de datos.
				return MSSql.GetPlatforms(search_criteria, search_expression);
			}).then((result: PlatformViewModel[]) => {
				// Si alguno de los pasos anteriores ya envió respuesta, no sigo.
				if (res.headersSent) return;

				// Envío respuesta con el resultado recibido del último paso.
				res.json({ status: true, description: 'OK', data: result });
			}).catch((err: any) => {
				// Obtenemos mensajes de error.
				let clientMsg: string = (typeof err === 'string' ? err : 'Cannot process request');
				let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'SERVER_ERROR_REQUESTING_ERROR');

				// Escribimos el error en el log.
				logger.error('[PlatformService::get_platforms] Error on \'' + req.path + '\': ' + errorMsg);

				// Si alguno de los pasos anteriores ya envio respuesta, no seguimos
				if (res.headersSent) return;

				// Devolvemos respuesta con el mensaje obtenido.
				res.json({ status: false, description: clientMsg, error: errorMsg });
			});
	});

	app.get('/api/platform/get_platform/:platform_hash?', (req: express.Request, res: express.Response, next: any) => {

		logger.info('Se recibio ' + req.method + ' para \'' + req.path + '\'');

		// Instancia asociada a la URL en la que se recibió el request.
		let vcc: string = res.locals.vcc;

		// Datos recibidos en el request
		let platform_hash: string = req.params.platform_hash || '';

		// Empiezo con promesa dummy para poder hacer throw y caer en el catch.
		DummyPromise()
			.then((result: boolean) => {

				return MSSql.GetPlatform(platform_hash);
			}).then((results: any) => {

				// Definimos objeto que contendrá la salida para la vista.
				let platformDomain: any = { platform: null, account: null, product: {} };

				if (results && results.length) {

					// Datos para la sección de plataforma.
					if (results[0] && results[0].length && results[0][0]) {
						platformDomain.platform = results[0][0];
					}

					// Datos para la sección de cuenta.
					if (results[1] && results[1].length && results[1][0]) {
						platformDomain.account = results[1][0];
					}

					// Datos para la sección de licencias.
					if (results[2] && results[2].length) {
						let tempLicenseItems: any = [];

						let product: any = null;
						let speech: string = 'speech';
						let quality: string = 'quality';

						tempLicenseItems = results[2];

						// Obtenemos los datos para SPEECH.
						product = tempLicenseItems.find((x: any) => {
							return x.product === speech.toUpperCase();
						});

						if (product) {
							platformDomain.product[speech] = product.totalLicense;
						}

						// Obtenemos los datos para QUALITY.
						product = tempLicenseItems.find((x: any) => {
							return x.product === quality.toUpperCase();
						});

						if (product) {
							platformDomain.product[quality] = product.totalLicense;
						}

						// Del product obtenemos el expirationDate.
						platformDomain.product['expirationDate'] = product.expirationDate;
					}
				}

				// Si alguno de los pasos anteriores ya envió respuesta, no sigo.
				if (res.headersSent) return;

				// Envío respuesta con el resultado recibido del último paso.
				res.json({ status: true, description: 'OK', data: platformDomain });
			}).catch((err: any) => {
				// Obtenemos mensajes de error.
				let clientMsg: string = (typeof err === 'string' ? err : 'Cannot process request');
				let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'SERVER_ERROR_REQUESTING_ERROR');

				// Escribimos el error en el log.
				logger.error('[PlatformService::/api/platform/get_platform/] Error on \'' + req.path + '\': ' + errorMsg, 'platform_hash:', platform_hash);

				// Si alguno de los pasos anteriores ya envió respuesta, no seguimos.
				if (res.headersSent) return;

				// Devolvemos respuesta con el mensaje obtenido.
				res.json({ status: false, description: clientMsg, error: errorMsg });
			});
	});

	app.post('/api/platform/upload_license_file?', (req: express.Request, res: express.Response, next: any) => {
		logger.info('Se recibió ' + req.method + ' para \'' + req.path + '\'');

		// Instancia asociada a la URL en la que se recibio el request.
		let vcc: string = res.locals.vcc;

		// Usuario asociado a la sesión que envió el request.
		let userId: string = res.locals.userId;

		// Obtengo fecha y hora actual.
		let nowUtc: Date = moment().utc().toDate();

		// Datos recibidos en el request.
		let uploadToFolder: any = req.params.upload_dest || '';

		// Paths asociados al template.
		let tempFolderName: string;
		let tempZipFileName: string;
		let tempUploadPath: string;

		// Resultado de la subida de archivo.
		let resultUpload: boolean = false;

		// Definimos variable que contendrá el platformHash del archivo .lic, para presentar hacia el cliente.
		let platformHashContent: string = '';

		// Obtengo ruta para el archivo subido.
		tempFolderName = (uploadToFolder ? uploadToFolder : (LICENSE_TEMP_PREFIX + '-' + vcc + '-' + userId).toLowerCase() + '-' + nowUtc.valueOf());
		tempZipFileName = tempFolderName + '.lic';
		tempUploadPath = (uploadToFolder ? uploadToFolder : LICENSE_TEMP_PATH);

		// Empiezo con promesa dummy para poder hacer throw y caer en el catch.
		DummyPromise()
			.then((result: boolean) => {
				logger.info('[PlatformService::/api/platform/upload_license_file/] Getting tempFolderName:', tempFolderName, 'with tempZipFileName:', tempZipFileName, 'with tempUploadPath:', tempUploadPath);

				// Validar que exista carpeta temp/license, si no existe la creamos.
				return ExistInFileSystem(tempUploadPath);
			}).then((result: boolean) => {
				if (result === false) {
					// Si no existe la ruta de carpetas, las creamos.
					return CreateFolder(tempUploadPath);
				} else {
					// Continuamos.
					return true;
				}
			}).then((result: boolean) => {
				if (result) {
					// Copio el archivo hacia el destino de upload. Posteriormente el archivo será eliminado.
					return UploadFileToServer(tempZipFileName, tempUploadPath, req, res, 'lic');
				} else {
					return false;
				}
			}).then((result: boolean) => {

				// Asigno el valor de la respuesta del método UploadFileToServer para notificar hacia el cliente.
				resultUpload = result;

				logger.info('[PlatformService::/api/platform/upload_license_file/] Getting resultUpload:', resultUpload, 'after UploadFileToServer');

				// Si alguno de los pasos anteriores ya envió respuesta, no sigo.
				if (!resultUpload) throw 'COULD_NOT_UPLOAD_FILE';

				// Debe recuperar el contenido del archivo .csv.
				let fileName: string = `${tempUploadPath}/${tempZipFileName}`;
				logger.info('[PlatformService::/api/platform/upload_license_file/] Getting fileName:', fileName);

				return ReadFileContent(fileName, 'utf-8');
			}).then((result: any) => {

				// Validamos el contenido del archivo.
				if (result && result.length > 0) {

					// Almacenamos el valor de archivo .lic en una variable.
					platformHashContent = result.replace(/^\uFEFF/, '');

					// Indicamos true para que se pueda eliminar el archivo de la carpeta temporal.
					return true;
				} else {

					// Indicamos que no hay contenido en el archivo.
					throw 'EMPTY_FILE';
				}
			}).then((result: boolean = false) => {

				// Si result es true, podemos eliminar el archivo.
				if (result) {

					// Enviar a eliminar el archivo temp del license.
					let tempLicenseFile: string = `${tempUploadPath}/${tempZipFileName}`;
					logger.info('[PlatformService::/api/platform/upload_license_file/] Getting tempLicenseFile:', tempLicenseFile);

					return DeleteFile(tempLicenseFile);
				}

				return false;
			}).then((result: boolean) => {

				// Verificamos si se pudo eliminar el archivo.
				logger.info('[PlatformService::/api/platform/upload_license_file/] Getting result:', result, 'after DeleteFile');

				// Si result es true, significa que ya se tiene en contenido del archivo, que éste se pudo eliminar.
				if (result) {

					// Retornamos contenido del archivo .lic, eliminado.
					return Promise.resolve(platformHashContent);
				}

				// Retornamos null porque no se tiene el contenido de archivo .lic.
				return Promise.resolve(null);
			}).then((result: any) => {

				// Si alguno de los pasos anteriores ya envió respuesta, no sigo.
				if (res.headersSent) return;

				// Envío respuesta con el resultado recibido del último paso.
				res.json({ status: resultUpload, description: (resultUpload ? 'FILE_STORED_SUCCESSFULLY' : 'FILE_UPLOAD_FAILED'), data: { tempFolderName: tempFolderName, platformHash: result } });
			}).catch((err: any) => {

				// Obtengo mensajes de error.
				let processMsg: string = (typeof err === 'string' ? err : 'CANNOT_PROCESS_REQUEST');
				let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');

				// Escribo el error en el log.
				logger.error('[PlatformService::/api/platform/upload_license_file/] Getting errorMsg:', errorMsg);

				// Si alguno de los pasos anteriores ya envió respuesta, no sigo.
				if (res.headersSent) return;

				// Devuelvo respuesta con el mensaje obtenido.
				res.json({ status: false, description: processMsg, error: errorMsg });
			});
	});

	// Este endpoint tiene por finalidad registrar una nueva plataforma
	app.post('/api/platform/create_platform',
		(req: express.Request, res: express.Response, next: any) => {
			let platform: any = req.body.platform || null;
			let account: any = req.body.account || null;
			let product: any = req.body.product || null;

			let myUser: string = '';

			logger.info('[PlatformService::create_platform] Received ' + req.method + ' method on \'' + req.path + '\'');

			// Empezamos con promesa dummy para poder hacer throw y caer en el catch.
			DummyPromise()
				.then(
					result => {
						if (platform && platform.platformHash && account && product) {
							// Ejecutamos consulta a base de datos.
							return MSSql.GetPlatformByHash(platform.platformHash);
						} else {
							// Registramos en el log los parámetros recibidos
							logger.info('[PlatformService::create_platform] Received params: ', platform, myUser, account, product);

							// Arrojamos un mensaje de error por parámetros faltantes
							throw 'SERVER_ERROR_MISSING_SEARCH_PARAMETERS';
						}
					}
				)
				.then(
					result => {
						// Si el resultado es nulo, el platformHash no existe en la BD
						if (result === null)
							// Ejecutamos el SP que inserta el platFormHash en la base de datos
							return MSSql.SavePlatformHash(platform.platformHash, myUser);

						// Si el resultado existe, el platformHash existe en la BD y no podemos continuar
						else
							// Retornamos mensaje de error que ya existe el hash
							throw 'SERVER_ERROR_PLATFORMHASH_ALREADY_EXISTS';
					}
				)
				.then(
					result => {
						// Si el resultado es nulo hubo un problema al registrar el platformHash
						if (result === null)
							throw 'SERVER_ERROR_PLATFORMHASH_SAVING_ERROR';

						// Si el resultado existe, evaluamos
						else
							return MSSql.SavePlatformData(platform.platformHash, platform.clientName, platform.clientContactName,
								platform.clientContactEmail, platform.transcriptionRatePerHour, (platform.transcriptionRatePerHour / 3600),
								platform.semanticAnalysisRatePerTransaction, platform.cognitiveAnalysisRatePerTransaction, myUser);
					}
				)
				.then(
					result => {
						// Si el resultado es nulo hubo un problema al registrar el platformData
						if (result === null)
							throw 'SERVER_ERROR_PLATFORMDATA_SAVING_ERROR';

						// Si el resultado existe, evaluamos
						else if (result) {
							return MSSql.CreateMainAccount(platform.platformHash, account.name, account.user,
								account.password, account.transcriptionRatePerHour, (platform.transcriptionRatePerHour / 3600),
								account.semanticAnalysisRatePerTransaction, account.cognitiveAnalysisRatePerTransaction, myUser);
						}
					}
				)
				.then(
					result => {
						// Si el resultado es nulo hubo un problema al registrar la cuenta principal
						if (result === null)
							throw 'SERVER_ERROR_MAINACCOUNT_SAVING_ERROR';
						// Si el resultado existe, evaluamos
						else (result)
							return MSSql.CreateMainAccountBalance(platform.platformHash, account.name, account.balance, 
																	myUser);
						}
				)
				.then(
					result => {
						// Si el resultado es nulo hubo un problema al registrar los saldos con producto para la cuenta principal
						if (result === null)
							throw 'SERVER_ERROR_MAINACCOUNT_BALANCE_SAVING_ERROR';

						// Si el resultado existe, evaluamos
						else (result)
						return MSSql.CreatePlatformLicense(platform.platformHash, product.quality, product.speech,
							product.expirationDate, myUser);
					}
				)
				.then(
					result => {
						// Si el resultado es nulo hubo un problema al registrar las licencias de la plataforma
						if (result === null)
							throw 'SERVER_ERROR_PLATFORM_LICENSES_SAVING_ERROR';

						// Si alguno de los pasos anteriores ya envio respuesta, no sigo.
						if (res.headersSent) return;

						// Envío respuesta con el resultado recibido del último paso.
						res.json({ status: true, description: 'OK', data: result });
					}
				)
				.catch(
					err => {
						// Obtenemos mensajes de error.
						let clientMsg: string = (typeof err === 'string' ? err : 'Cannot process request');
						let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'SERVER_ERROR_REQUESTING_ERROR');

						// Escribimos el error en el log.
						logger.error('[PlatformService::create_platform] Error on \'' + req.path + '\': ' + errorMsg);

						// Si alguno de los pasos anteriores ya envio respuesta, no seguimos
						if (res.headersSent) return;

						// Devolvemos respuesta con el mensaje obtenido.
						res.json({ status: false, description: clientMsg, error: errorMsg });
					}
				);
		});

	// Este endpoint tiene por finalidad de actualizar los datos de una plataforma.
	app.post('/api/platform/save_platform', (req: express.Request, res: express.Response, next: any) => {

		let platform: any = req.body.platform || null;

		let myUser: string = '';

		logger.info('[PlatformService::save_platform] Received ' + req.method + ' method on \'' + req.path + '\'');

		// Empezamos con promesa dummy para poder hacer throw y caer en el catch.
		DummyPromise()
			.then((result: boolean) => {
				if (platform && platform.platformHash) {

					// Enviamos parámetros para actualizar datos de la tabla Platform.
					return MSSql.SavePlatformData(platform.platformHash, platform.clientName, platform.clientContactName,
						platform.clientContactEmail, platform.transcriptionRatePerHour, (platform.transcriptionRatePerHour / 3600),
						platform.semanticAnalysisRatePerTransaction, platform.cognitiveAnalysisRatePerTransaction, myUser);
				} else {

					// Registramos en el log los parámetros recibidos.
					logger.info('[PlatformService::save_platform] Received params: ', platform);

					// Arrojamos un mensaje de error por parámetros faltantes.
					throw 'SERVER_ERROR_MISSING_SEARCH_PARAMETERS';
				}
			}).then((result: boolean) => {
				// Si el resultado es nulo, hubo un problema al registrar las licencias de la plataforma.
				if (result === null)
					throw 'SERVER_ERROR_PLATFORM_LICENSES_SAVING_ERROR';

				// Si alguno de los pasos anteriores ya envió respuesta, no sigo.
				if (res.headersSent) return;

				// Envío respuesta con el resultado recibido del último paso.
				res.json({ status: true, description: 'OK', data: result });
			}).catch((err: any) => {
				// Obtenemos mensajes de error.
				let clientMsg: string = (typeof err === 'string' ? err : 'Cannot process request');
				let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'SERVER_ERROR_REQUESTING_ERROR');

				// Escribimos el error en el log.
				logger.error('[PlatformService::save_platform] Error on \'' + req.path + '\': ' + errorMsg);

				// Si alguno de los pasos anteriores ya envio respuesta, no seguimos
				if (res.headersSent) return;

				// Devolvemos respuesta con el mensaje obtenido.
				res.json({ status: false, description: clientMsg, error: errorMsg });
			});
	});

	// Este endpoint tiene por finalidad retornar el estado actual de un ambiente
	app.post('/api/activation/get_platform_status',
		(req: express.Request, res: express.Response, next: any) => {
			// Declaramos la variables que usaremos para la búsqueda
			let platformHash : string = req.body.platformHash || null;
			let installationId : string = req.body.installationId || null;
			let macAddress : string = req.body.macAddress || null;
			let baseboardSerialNumber : string = req.body.baseboardSerialNumber || null;

			let serviceData: any[] = [];

			logger.info('[PlatformService::get_platform_status] Received ' + req.method + ' method on \'' + req.path + '\'');

			// Empiezamos con promesa dummy para poder hacer throw y caer en el catch.
			DummyPromise()
				.then(
					result => {
						if (installationId && macAddress && baseboardSerialNumber) 
							// Ejecutamos consulta a base de datos.
							return MSSql.GetPlatformByData(installationId, macAddress, baseboardSerialNumber);

						else {
							// Registramos en el log los parámetros recibidos
							logger.info('[PlatformService::get_platform_status] Received params: ', platformHash,  installationId, macAddress, baseboardSerialNumber);

							// Arrojamos un mensaje de error por parámetros faltantes
							throw 'SERVER_ERROR_MISSING_SEARCH_PARAMETERS';
						}
					}
				)
				/*
				.then(
					result => {
						if (platformHash && installationId && macAddress && baseboardSerialNumber) 
							// Ejecutamos consulta a base de datos.
							return MSSql.GetPlatformByHash(platformHash);
						else {
							// Registramos en el log los parámetros recibidos
							logger.info('[PlatformService::get_platform_status] Received params: ', platformHash,  installationId, macAddress, baseboardSerialNumber);

							// Arrojamos un mensaje de error por parámetros faltantes
							throw 'SERVER_ERROR_MISSING_SEARCH_PARAMETERS';
						}
					}
				)
				.then(
					result => {
						// Si el resultado es nulo la plataforma no está registrada
						if (result === null)
							throw 'SERVER_ERROR_NOT_FOUND_PLATFORM';

						// Si el resultado existe, evaluamos
						else if (result) {
							// ...si la plataforma ya está activada llamamos la data de la plataforma
							if (result.isActivated)
								// Ejecutamos consulta a base de datos.
								return MSSql.GetPlatformByData(installationId, macAddress, baseboardSerialNumber);

							// ...si la plataforma aún no está activa, llamamos al procedure que busca el usuario y token
							else
								throw 'SERVER_ERROR_NOT_ACTIVATED_PLATFORM';
						}
					}
				)
				*/
				.then(
					result => {
						// Si el resultado es nulo, no hay datos registrados de la plataforma
						if (result === null)
							throw 'SERVER_ERROR_NOT_FOUND_PLATFORM_DATA';

						// Retornamos los datos de la plataforma
						else {
							// ...si la plataforma ya está activada llamamos la data de la plataforma
							if (result.isActivated) {
								// Si alguno de los pasos anteriores ya envio respuesta, no sigo.
								if (res.headersSent) return;

								// Guardamos el resultado del estado en la variable de datos
								serviceData['platformStatus'] = result;

								// Ejecutamos consulta de cuentas a base de datos.
								return MSSql.GetPlatformAccounts(installationId);
							} else 
								throw 'SERVER_ERROR_NOT_ACTIVATED_PLATFORM';
						}
					}
				)
				.then(
					result => {
						// Si el resultado es nulo no existen cuentas relacionadas a la instalacion 
						if (result === null)
							throw 'SERVER_ERROR_NOT_FOUND_PLATFORM_ACCOUNTS';

						// Si el resultado existe se retorna
						else {
							// Si alguno de los pasos anteriores ya envio respuesta, no sigo.
							if (res.headersSent) return;

							// Guardamos el resultado del estado en la variable de datos
							serviceData['platformAccounts'] = result;

							// Ejecutamos consulta de cuentas a base de datos.
							return MSSql.GetRelatedAccounts(installationId);
						}
					}
				)
				.then(
					result => {
						// Si el resultado es nulo no existen cuentas relacionadas a la instalacion y cuenta
						if (result === null)
							throw 'SERVER_ERROR_NOT_FOUND_ACCOUNT';

						// Si el resultado existe se retorna
						else {
							// Si alguno de los pasos anteriores ya envio respuesta, no sigo.
							if (res.headersSent) return;

							// Guardamos el resultado del estado en la variable de datos
							serviceData['accountList'] = result;

							// Ejecutamos consulta de subcuentas a base de datos.
							return MSSql.GetRelatedSubAccounts(installationId);
						}
					}
				)
				.then(
					result => {
						// Si el resultado es nulo no existen cuentas relacionadas a la instalacion y cuenta
						if (result === null)
							throw 'SERVER_ERROR_NOT_FOUND_SUBACCOUNT';

						// Si el resultado existe se retorna
						else {
							// Si alguno de los pasos anteriores ya envio respuesta, no sigo.
							if (res.headersSent) return;

							// Guardamos el resultado del estado en la variable de datos
							serviceData['subAccountList'] = result;

							let resData: any = {
								platformStatus: serviceData['platformStatus'],
								platformAccounts: serviceData['platformAccounts'],
								accountList: serviceData['accountList'],
								subAccountList: serviceData['subAccountList'],
							}

							// Envío respuesta con el resultado recibido del último paso.
							res.json({ status: true, description: 'OK', data: resData });
						}
					}
				)
				.catch(
					err => {
						// Obtenemos mensajes de error.
						let clientMsg: string = (typeof err === 'string' ? err : 'Cannot process request');
						let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'SERVER_ERROR_REQUESTING_ERROR');

						// Escribimos el error en el log.
						logger.error('[PlatformService::get_platform_status] Error on \'' + req.path + '\': ' + errorMsg);

						// Si alguno de los pasos anteriores ya envio respuesta, no seguimos
						if (res.headersSent) return;

						// Devolvemos respuesta con el mensaje obtenido.
						res.json({ status: false, description: clientMsg, error: errorMsg });
					}
				)
		});

	// Este endpoint tiene por finalidad activar un ambiente con el user y token generados por inconcert
	app.post('/api/activation/activate_platform',
		(req: express.Request, res: express.Response, next: any) => {
			// Declaramos la variables que usaremos para la búsqueda
			let platformHash: string = req.body.platformHash || null;
			let user: string = req.body.user || null;
			let token: string = req.body.token || null;
			let installationId: string = req.body.data.installationId || null;
			let macAddress: string = req.body.data.macAddress || null;
			let baseboardSerialNumber: string = req.body.data.baseboardSerialNumber || null;

			logger.info('[PlatformService::activate_platform] Received ' + req.method + ' method on \'' + req.path + '\'');

			// Empiezamos con promesa dummy para poder hacer throw y caer en el catch.
			DummyPromise()
				.then(
					result => {
						if (platformHash && user && token && installationId && macAddress && baseboardSerialNumber) {
							// Ejecutamos consulta a base de datos.
							return MSSql.GetPlatformByHash(platformHash);
						} else {
							// Registramos en el log los parámetros recibidos
							logger.info('[PlatformService::activate_platform] Received params: ', platformHash, user, token, installationId, macAddress, baseboardSerialNumber);

							// Arrojamos un mensaje de error por parámetros faltantes
							throw 'SERVER_ERROR_MISSING_SEARCH_PARAMETERS';
						}
					}
				)
				.then(
					result => {
						// Si el resultado es nulo la plataforma no está registrada
						if (result === null)
							throw 'SERVER_ERROR_NOT_FOUND_PLATFORM';

						// Si el resultado existe, evaluamos
						else if (result) {
							// ...si la plataforma ya está activada se lanza el mensaje
							if (result.isActivated)
								throw 'SERVER_ERROR_PLATFORM_IS_ALREADY_ACTIVATED';
							// ...si la plataforma aún no está activa, llamamos al procedure que busca el usuario y token
							else
								return MSSql.GetAccountByHashUserToken(platformHash, user, token);
						}
					}
				)
				.then(
					result => {
						// Si el resultado es nulo no hay coincidencia con el usuario y token ingresados
						if (result === null)
							throw 'SERVER_ERROR_CREDENTIALS_ERROR';
						// Si el resultado existe, evaluamos
						else if (result) {
							// ...si la cuenta no es nivel 1, no es la cuenta de activación
							if (result.level && result.level !== 1)
								throw 'SERVER_ERROR_ACCOUNT_LEVEL_ERROR';
							// ...si la cuenta es nivel 1, procedemos a actualizar la plataforma
							else
								return MSSql.ActivatePlatform(platformHash, installationId, macAddress, baseboardSerialNumber, user, token);
						}
					}
				)
				.then(
					result => {
						// Si el resultado existe y el status es 0, la plataforma existe, pero ya expiró
						if (result && result.isActivated === false)
							throw 'SERVER_SUCCESS_PLATFORM_ACTIVATION_FAILED';

						// Si status = 1, la plataforma está activa
						else {
							// Si alguno de los pasos anteriores ya envio respuesta, no sigo.
							if (res.headersSent) return;

							// Envío respuesta con el resultado recibido del último paso.
							res.json({ status: true, description: (result ? 'SERVER_SUCCESS_PLATFORM_ACTIVATION_COMPLETED' : 'SERVER_ERROR_PLATFORM_ACTIVATION_FAILED'), data: result });
						}
					}
				)
				.catch(
					err => {
						// Obtenemos mensajes de error.
						let clientMsg: string = (typeof err === 'string' ? err : 'Cannot process request');
						let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'SEVER_ERROR_REQUESTING_ERROR');

						// Escribimos el error en el log.
						logger.error('[PlatformService::activate_platform] Error on \'' + req.path + '\': ' + errorMsg);

						// Si alguno de los pasos anteriores ya envio respuesta, no seguimos
						if (res.headersSent) return;

						// Devolvemos respuesta con el mensaje obtenido.
						res.json({ status: false, description: clientMsg, error: errorMsg });
					}
				)
		});

	// 
	app.post('/api/activation/get_platform_available_licenses',
		(req: express.Request, res: express.Response, next: any) => {
			// Declaramos la variables que usaremos para la búsqueda
			let platformHash: string = req.body.platformHash || null;

			// Creamos una variable para guardar información de la plataforma
			let platform: Platform = new Platform;

			logger.info('[PlatformService::get_platform_available_licenses] Received ' + req.method + ' method on \'' + req.path + '\'');

			// Empiezamos con promesa dummy para poder hacer throw y caer en el catch.
			DummyPromise()
				.then(
					result => {
						if (platformHash) {
							// Ejecutamos consulta a base de datos.
							return MSSql.GetPlatformByHash(platformHash);
						} else {
							// Registramos en el log los parámetros recibidos
							logger.info('[PlatformService::get_platform_available_licenses] Received params: ', platformHash);

							// Arrojamos un mensaje de error por parámetros faltantes
							throw 'SERVER_ERROR_MISSING_SEARCH_PARAMETERS';
						}
					}
				)
				.then(
					result => {
						// Si el resultado es nulo la plataforma no está registrada
						if (result === null)
							throw 'SERVER_ERROR_NOT_FOUND_PLATFORM';

						// Si el resultado existe y el status es 0, la plataforma existe, pero ya expiró
						else if (result && result.status === 0)
							throw 'SERVER_ERROR_NOT_ACTIVATED_PLATFORM';

						// Si status = 1, la plataforma está activa
						else {
							// Si alguno de los pasos anteriores ya envio respuesta, no sigo.
							if (res.headersSent) return;

							// Guardamos el resultado del estado en la variable de plataforma
							platform = result;

							// Ejecutamos consulta de cuentas a base de datos.
							return MSSql.GetPlatformAvailableLicenses(platformHash, platform.installationId);
						}
					}
				)
				.then(
					result => {
						// Si el resultado es nulo no existen cuentas relacionadas a la instalacion y cuenta
						if (result === null)
							throw 'SERVER_ERROR_NOT_FOUND_PLATFORM_AVAILABLE_LICENSES';

						// Si el resultado existe se retorna
						else {
							// Si alguno de los pasos anteriores ya envio respuesta, no sigo.
							if (res.headersSent) return;

							// Envío respuesta con el resultado recibido del último paso.
							res.json({ status: true, description: 'OK', data: result });
						}
					}
				)
				.catch(
					err => {
						// Obtenemos mensajes de error.
						let clientMsg: string = (typeof err === 'string' ? err : 'Cannot process request');
						let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'SERVER_ERROR_REQUESTING_ERROR');

						// Escribimos el error en el log.
						logger.error('[PlatformService::get_platform_available_licenses] Error on \'' + req.path + '\': ' + errorMsg);

						// Si alguno de los pasos anteriores ya envio respuesta, no seguimos
						if (res.headersSent) return;

						// Devolvemos respuesta con el mensaje obtenido.
						res.json({ status: false, description: clientMsg, error: errorMsg });
					}
				)
		});

}
