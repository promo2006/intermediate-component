import * as express from 'express';
import * as moment from 'moment';
import * as path from 'path';
import * as log4js from 'log4js';
import { Redis } from '../db/redis.service';

// Importo servicio con funciones para MSSQL.
import { MSSql } from '../db/mssql.service';
import { DummyPromise } from '../shared/promises.shared';
import { AccountViewModel } from '../models/account.model';

// Obtengo logger.
let logger = log4js.getLogger('ServerScripts');

export function AccountService(app: express.Application) {

    // Este retorna todas las cuentas y subcuentas guardadas en la BD para mostrarlas en la grilla del client
    app.get('/api/account/get_accounts/:search_criteria/:search_expression?', 
        (req: express.Request, res: express.Response, next: any) => {

		logger.info('[AccountService::get_accounts] Received ' + req.method + ' method on \'' + req.path + '\'');

		// Instancia asociada a la URL en la que se recibio el request.
		let vcc: string = res.locals.vcc;

		// Datos recibidos en el request.
		let search_criteria: string = req.params.search_criteria || '';
		let search_expression: string = req.params.search_expression || '';

		// Empiezo con promesa dummy para poder hacer throw y caer en el catch.
		DummyPromise()
        .then(
            (result: boolean) => {
                // Ejecuto consulta a base de datos.
                return MSSql.GetAccounts(search_criteria, search_expression);
            }
        )
        .then(
            (result: AccountViewModel[]) => {
                // Si alguno de los pasos anteriores ya envió respuesta, no sigo.
                if (res.headersSent) return;

                // Envío respuesta con el resultado recibido del último paso.
                res.json({ status: true, description: 'OK', data: result });
            }
        )
        .catch(
            (err: any) => {
                // Obtenemos mensajes de error.
                let clientMsg: string = (typeof err === 'string' ? err : 'Cannot process request');
                let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'SERVER_ERROR_REQUESTING_ERROR');

                // Escribimos el error en el log.
                logger.error('[AccountService::get_accounts] Error on \'' + req.path + '\': ' + errorMsg);

                // Si alguno de los pasos anteriores ya envio respuesta, no seguimos
                if (res.headersSent) return;

                // Devolvemos respuesta con el mensaje obtenido.
                res.json({ status: false, description: clientMsg, error: errorMsg });
            }
        );
	});

    // Este endpoint tiene por finalidad retornar las cuentas asociadas a la instalación y cuenta
	app.post('/api/account/get_accounts',
        (req: express.Request, res: express.Response, next: any) => {
            // Declaramos la variables que usaremos para la búsqueda
            let installationId: string = req.body.installationId || null;
            //let userId: string = req.body.userId || null;
            
            logger.info('[AccountService::get_accounts] Received ' + req.method + ' method on \'' + req.path + '\'');

            // Empiezamos con promesa dummy para poder hacer throw y caer en el catch.
            DummyPromise()
            .then(
                result => {
                    if (installationId) {
                        // Ejecutamos consulta a base de datos.
                        return MSSql.GetRelatedAccounts(installationId);
                    } else {
                        // Registramos en el log los parámetros recibidos
                        logger.info('[AccountService::get_accounts] Received params: ', installationId);

                        // Arrojamos un mensaje de error por parámetros faltantes
                        throw 'SERVER_ERROR_MISSING_SEARCH_PARAMETERS';
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
                    logger.error('[AccountService::get_accounts] Error on \'' + req.path + '\': ' + errorMsg);

                    // Si alguno de los pasos anteriores ya envio respuesta, no seguimos
                    if (res.headersSent) return;

                    // Devolvemos respuesta con el mensaje obtenido.
                    res.json({ status: false, description: clientMsg, error: errorMsg });
                }
            )
        });

    // Este endpoint tiene por finalidad retornar las subcuentas asociadas a la instalación y cuenta
	app.post('/api/account/get_subaccounts',
    (req: express.Request, res: express.Response, next: any) => {
        // Declaramos la variables que usaremos para la búsqueda
        let installationId: string = req.body.installationId || null;
        //let userId: string = req.body.userId || null;
        
        logger.info('[AccountService::get_subaccounts] Received ' + req.method + ' method on \'' + req.path + '\'');

        // Empiezamos con promesa dummy para poder hacer throw y caer en el catch.
        DummyPromise()
        .then(
            result => {
                if (installationId) {
                    // Ejecutamos consulta a base de datos.
                    return MSSql.GetRelatedSubAccounts(installationId);
                } else {
                    // Registramos en el log los parámetros recibidos
                    logger.info('[AccountService::get_subaccounts] Received params: ', installationId);

                    // Arrojamos un mensaje de error por parámetros faltantes
                    throw 'SERVER_ERROR_MISSING_SEARCH_PARAMETERS';
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
                logger.error('[AccountService::get_subaccounts] Error on \'' + req.path + '\': ' + errorMsg);

                // Si alguno de los pasos anteriores ya envio respuesta, no seguimos
                if (res.headersSent) return;

                // Devolvemos respuesta con el mensaje obtenido.
                res.json({ status: false, description: clientMsg, error: errorMsg });
            }
        )
    });

    // Este endpoint tiene por finalidad retornar una cuenta con sus saldos, tarifas y subcuentas también con saldos y tarifas
    app.post('/api/account/get_account_balance',
        (req: express.Request, res: express.Response, next: any) => {
            // Declaramos la variables que usaremos para la búsqueda
            let platformHash: string = req.body.platformHash || null;
            let installationId: string = req.body.installationId || null;
            let accountId: string = req.body.account || null;

            // Declaramos el objeto que será la respuesta a retornar
            let resData: any = {
                accountBalance: null,
                accountRate: null,
                subAccountsBalance: null,
                subAccountsRate: null
            }

            logger.info('[AccountService::get_account_balance] Received ' + req.method + ' method on \'' + req.path + '\'');

            // Empiezamos con promesa dummy para poder hacer throw y caer en el catch.
            DummyPromise()
            .then(
                result => {
                    // Validamos que los datos obligatorios sean diferente de null(accountId puede ser null)
                    if (installationId && accountId) {
                        // Ejecutamos el procedure para validad que existe la cuenta y setteamos null espacio para subcuent
                        return MSSql.GetAccountSubAccountExists(installationId, accountId, null);
                    } else {
                        // Registramos en el log los parámetros recibidos
                        logger.info('[AccountService::get_account_balance] Received params: ', installationId, accountId);

                        // Arrojamos un mensaje de error por parámetros faltantes
                        throw 'SERVER_ERROR_MISSING_SEARCH_PARAMETERS';
                    }
                }
            )
            .then(
                result => {
                    // Si el resultado es nulo no existe la cuenta
                    if (result === null)
                        throw 'SERVER_ERROR_ACCOUNT_NOT_FOUND';
                    // Si el resultado es diferente de nulo, la cuenta existe
                    else {
                        // Si alguno de los pasos anteriores ya envio respuesta, no sigo.
                        if (res.headersSent) return;

                        // Ejecutamos el procedure que hace una busqueda en Account para recuperar las tarifas de la cuenta
                        return MSSql.GetAccountSubAccountRate(installationId, accountId, null, 'CTA');
                    }
                }
            )
            .then(
                result => {
                    // Si el resultado es nulo no existe la cuenta
                    if (result === null)
                        throw 'SERVER_ERROR_NOT_FOUND_ACCOUNT_RATE';
                    // Si el resultado es diferente de nulo, la cuenta existe
                    else {
                        // Si alguno de los pasos anteriores ya envio respuesta, no sigo.
                        if (res.headersSent) return;

                        // Para accountRate tomamos el único item de la lista
                        resData.accountRate = result[0];

                        // Ejecutamos el procedure que hace una busqueda en AccountBalance para recuperar el saldo FREE de la cuenta
                        return MSSql.GetAccountSubAccountBalance(installationId, accountId, null, 'FREE', 'CTA');
                    }
                }
            )
            .then(
                result => {
                    // Si el resultado es nulo no se encontró saldos de la cuenta en la tabla AccountBalance
                    if (result === null)
                        throw 'SERVER_ERROR_NOT_FOUND_ACCOUNT_BALANCE';
                    // Si el resultado es diferente de nulo, la cuenta existe
                    else {
                        // Si alguno de los pasos anteriores ya envio respuesta, no sigo.
                        if (res.headersSent) return;

                        // Para accountBalance tomamos el único item de la lista
                        resData.accountBalance = result[0];

                        // Ejecutamos el procedure que hace una busqueda en Account para recuperar las tarifas de las subcuentas
                        return MSSql.GetAccountSubAccountRate(installationId, accountId, null, 'SCTA');
                    }
                }
            )
            .then(
                result => {
                    // Si el resultado es nulo no existe la cuenta
                    if (result === null)
                        throw 'SERVER_ERROR_NOT_FOUND_SUBACCOUNT_RATES';
                    // Si el resultado es diferente de nulo, la cuenta existe
                    else {
                        // Si alguno de los pasos anteriores ya envio respuesta, no sigo.
                        if (res.headersSent) return;

                        // Para accountRate tomamos el único item de la lista
                        resData.subAccountsRate = result;

                        // Ejecutamos el procedure que hace una busqueda en AccountBalance para recuperar el saldo FREE de la cuenta
                        return MSSql.GetAccountSubAccountBalance(installationId, accountId, null, 'FREE', 'SCTA');
                    }
                }
            )
            .then(
                result => {
                    // Si el resultado es nulo no se encontró saldos de la cuenta
                    if (result === null)
                        throw 'SERVER_ERROR_NOT_FOUND_SUBACCOUNT_BALANCES';

                    // Si el resultado existe se retorna
                    else {
                        // Si alguno de los pasos anteriores ya envio respuesta, no sigo.
                        if (res.headersSent) return;

                        // Para accountBalance tomamos el único item de la lista
                        resData.subAccountsBalance = result;

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
                    logger.error('[AccountService::get_account_balance] Error on \'' + req.path + '\': ' + errorMsg);

                    // Si alguno de los pasos anteriores ya envio respuesta, no seguimos
                    if (res.headersSent) return;

                    // Devolvemos respuesta con el mensaje obtenido.
                    res.json({ status: false, description: clientMsg, error: errorMsg });
                }
            )
        });
}