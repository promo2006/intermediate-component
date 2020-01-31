import * as express from 'express';
import * as moment from 'moment';
import * as path from 'path';
import * as log4js from 'log4js';
import { Redis } from '../db/redis.service';

// Importo servicio con funciones para MSSQL.
import { MSSql } from '../db/mssql.service';
import { DummyPromise } from '../shared/promises.shared';
import { Platform } from '../models/platform.model';
import { AccountVcc } from '../models/accountVcc.model';

// Obtengo logger.
let logger = log4js.getLogger('ServerScripts');

export function VCCService(app: express.Application) {

    // Este endpoint tiene por finalidad registrar un VCC que estará asociado a una cuenta o subcuenta
	app.post('/api/vcc/create_vcc',
        (req: express.Request, res: express.Response, next: any) => {
            // Declaramos la variables que usaremos para la búsqueda
            let platformHash : string = req.body.platformHash || null;
            let accountId : string = req.body.account || null;
			let subAccountId : string = req.body.subAccount || null;
			let vcc : string = req.body.vcc || null;
            let products : string[] = req.body.products || [];
            let accountVcc : AccountVcc = req.body.accountVcc || null;

            // Creamos una variable para guardar información de la plataforma
			let platform : Platform = new Platform;

            logger.info('[VCCService::create_vcc] Received ' + req.method + ' method on \'' + req.path + '\'');

			// Empiezamos con promesa dummy para poder hacer throw y caer en el catch.
			DummyPromise()
				.then(
					result => {
                        // Validamos que los datos obligatorios sean diferente de null(accountId puede ser null)
						if (platformHash && accountId && vcc && products && accountVcc) {
							// Ejecutamos consulta a base de datos.
							return MSSql.GetPlatformByHash(platformHash);
						} else {
							// Registramos en el log los parámetros recibidos
							logger.info('[VCCService::create_vcc] Received params: ', platformHash, accountId, subAccountId, vcc, JSON.stringify(products), JSON.stringify(accountVcc));

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

                            // Ejecutamos el procedure hace una busqueda en Account y SubAccount.
                            return MSSql.GetAccountSubAccountExists(platform.installationId, accountId, subAccountId);
                        }
                    }
                )
                .then(
                    result => {
                        // Si el resultado es nulo no existen cuenta y subcuenta
						if (result === null)
                            throw 'SERVER_ERROR_ACCOUNT_SUBACCOUNT_NOT_FOUND';
                        // Si el resultado es diferente de nulo, la cuenta y subcuenta existen
                        else {
                            // Si alguno de los pasos anteriores ya envio respuesta, no sigo.
                            if (res.headersSent) return;

                            // Ejecutamos el procedure hace una busqueda en AccountVCC para identificar si existe el VCC.
                            return MSSql.GetAccountVccByAccountVcc(platform.installationId, accountId, vcc);
                        }
                    }
                )
                .then(
					result => {
						// Si el resultado es diferente de nulo, la cuenta ya tiene un vcc con el nombre recibido
						if (result !== null)
							throw 'SERVER_ERROR_VCC_ALREADY_EXISTS';

						// Si status = 1, la plataforma está activa
						else {
							// Si alguno de los pasos anteriores ya envio respuesta, no sigo.
							if (res.headersSent) return;

							// Ejecutamos el stored procedure que crea el vcc 
                            return MSSql.GetAccountVccByAccountSubAccountVcc(platform.installationId, accountId, subAccountId);
						}
					}
                )
                .then(
                    result => {
                         // Si el resultado es diferente de nulo, la subcuenta ya tiene un VCC asociado y no puede tener otro
						if (result !== null)
                            throw 'SERVER_ERROR_SUBACCOUNT_ALREADY_HAVE_ASSOCIATED_VCC';

                        // Si el resultado es nulo procedemos a crear el nuevo VCC
                        else {
                            // Si alguno de los pasos anteriores ya envio respuesta, no sigo.
                            if (res.headersSent) return;

                            // Ejecutamos el procedure que registra VCC y sus productos en la base de datos.
                            return MSSql.CreateAccountVCC(platform.installationId, accountId, 
                                                            subAccountId, vcc, 
                                                            accountVcc.transcriptionRatePerHour, accountVcc.transcriptionRatePerSecond,
                                                            accountVcc.semanticAnalysisRatePerTransaction, accountVcc.cognitiveAnalysisRatePerTransaction,
                                                            products.toString());
                        }
                    }
                )
                .then(
					result => {
                        // Si el resultado es nulo no existen cuentas relacionadas a la instalacion y cuenta
						if (result === null)
							throw 'SERVER_ERROR_NOT_FOUND_ACCOUNT';

						// Si el resultado existe se procedemos a crear el nuevo VCC
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
						logger.error('[VCCService::create_vcc] Error on \'' + req.path + '\': ' + errorMsg);

						// Si alguno de los pasos anteriores ya envio respuesta, no seguimos
						if (res.headersSent) return;

						// Devolvemos respuesta con el mensaje obtenido.
						res.json({ status: false, description: clientMsg, error: errorMsg });
					}
				)
        }
    );

    // Este endpoint tiene por finalidad registrar un VCC que estará asociado a una cuenta o subcuenta
	app.post('/api/vcc/get_vcc_status',
        (req: express.Request, res: express.Response, next: any) => {
            // Declaramos la variables que usaremos para la búsqueda
            let platformHash : string = req.body.platformHash || null;
            let installationId : string = req.body.installationId || null;
            let vcc : string = req.body.vcc || null;

            logger.info('[VCCService::get_vcc_status] Received ' + req.method + ' method on \'' + req.path + '\'');

            // Creamos una variable para guardar información de la plataforma
            let platform : Platform = new Platform;

            // Declaramos el objeto que será la respuesta a retornar
            let resData: any = {
                vcc: null,
                products: null
            }
            
            // Empiezamos con promesa dummy para poder hacer throw y caer en el catch.
			DummyPromise()
            .then(
                result => {
                    // Validamos que los datos obligatorios sean diferente de null(accountId puede ser null)
                    if (platformHash && vcc) {
                        // Ejecutamos consulta a base de datos.
                        return MSSql.GetPlatformByHash(platformHash);
                    } else {
                        // Registramos en el log los parámetros recibidos
                        logger.info('[VCCService::get_vcc_status] Received params: ', platformHash, vcc);

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

                        // Ejecutamos el procedure hace una busqueda en AccountVcc.
                        return MSSql.GetAccountVCC(platform.installationId, vcc);
                    }
                }
            )
            .then(
                result => {
                    // Si el resultado es nulo no existen cuentas relacionadas a la instalacion y cuenta
                    if (result === null)
                        throw 'SERVER_ERROR_NOT_FOUND_ACCOUNT_VCC';

                    // Si el resultado existe se retorna
                    else {
                        // Guardamos los datos del VCC en el objeto de resultado
                        resData.vcc = result;

                        // Ejecutamos el procedure hace una busqueda en PlatformLicenseUsage.
                        return MSSql.GetAccountVccProducts(platform.installationId, vcc);
                    }
                }
            )
            .then(
                result => {
                    // Si el resultado es nulo no existen cuentas relacionadas a la instalacion y cuenta
                    if (result === null)
                        throw 'SERVER_ERROR_NOT_FOUND_ACCOUNT_VCC_PRODUCTS';

                    // Si el resultado existe se retorna
                    else {
                        // Guardamos los datos del VCC en el objeto de resultado
                        resData.products = result;

                        // Si alguno de los pasos anteriores ya envio respuesta, no sigo.
                        if (res.headersSent) return;

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
                    logger.error('[PlatformService::get_vcc_status] Error on \'' + req.path + '\': ' + errorMsg);

                    // Si alguno de los pasos anteriores ya envio respuesta, no seguimos
                    if (res.headersSent) return;

                    // Devolvemos respuesta con el mensaje obtenido.
                    res.json({ status: false, description: clientMsg, error: errorMsg });
                }
            )
        }
    );

    // Este endpoint tiene por finalidad retornar las tarifas de los servicios del sistema de un VCC
	app.post('/api/vcc/get_vcc_rates',
        (req: express.Request, res: express.Response, next: any) => {
            // Declaramos la variables que usaremos para la búsqueda
            let platformHash : string = req.body.platformHash || null;
            let installationId : string = req.body.installationId || null;
            let vcc : string = req.body.vcc || null;
            
            logger.info('[VCCService::get_vcc_rates] Received ' + req.method + ' method on \'' + req.path + '\'');

            // Creamos una variable para guardar información de la plataforma
            let platform : Platform = new Platform;
            
            // Empiezamos con promesa dummy para poder hacer throw y caer en el catch.
			DummyPromise()
            .then(
                result => {
                    // Validamos que los datos obligatorios sean diferente de null(accountId puede ser null)
                    if (platformHash && vcc) {
                        // Ejecutamos consulta a base de datos.
                        return MSSql.GetPlatformByHash(platformHash);
                    } else {
                        // Registramos en el log los parámetros recibidos
                        logger.info('[VCCService::get_vcc_rates] Received params: ', platformHash, vcc);

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

                        // Ejecutamos el procedure hace una busqueda en Account y SubAccount.
                        return MSSql.GetAccountVccRates(platform.installationId, vcc);
                    }
                }
            )
            .then(
                result => {
                    // Si el resultado es nulo no existen cuentas relacionadas a la instalacion y cuenta
                    if (result === null)
                        throw 'SERVER_ERROR_NOT_FOUND_ACCOUNT_VCC';

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
                    logger.error('[PlatformService::get_vcc_rates] Error on \'' + req.path + '\': ' + errorMsg);

                    // Si alguno de los pasos anteriores ya envio respuesta, no seguimos
                    if (res.headersSent) return;

                    // Devolvemos respuesta con el mensaje obtenido.
                    res.json({ status: false, description: clientMsg, error: errorMsg });
                }
            )
        }
    );

}