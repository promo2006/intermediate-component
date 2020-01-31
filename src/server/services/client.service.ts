import * as express from 'express';
import * as moment from 'moment';
import * as path from 'path';
import * as log4js from 'log4js';

// Importo servicio con funciones para MSSQL.
import { MSSql } from '../db/mssql.service';
import { DummyPromise } from '../shared/promises.shared';
import { Client } from '../models/client.model';

// Obtengo logger.
let logger = log4js.getLogger('ServerScripts');

export function ClientService(app: express.Application) {

	app.get('/api/client/get_clients/:search_criteria/:search_expression?',
		(req: express.Request, res: express.Response, next: any) => {

			logger.info('Se recibió ' + req.method + ' para \'' + req.path + '\'');

			// Datos recibidos en el request.
			let search_criteria: string = req.params.search_criteria || '';
			let search_expression: string = req.params.search_expression || '';

			// Empiezo con promesa dummy para poder hacer throw y caer en el catch.
			DummyPromise()
				.then((result: boolean) => {
					// Ejecuto consulta a base de datos.
					return MSSql.GetClients(search_criteria, search_expression);
				}).then((clients: Client[]) => {
					// Si alguno de los pasos anteriores ya envio respuesta, no sigo.
					if (res.headersSent) return;

					// Envío respuesta con el resultado recibido del último paso.
					res.json({ status: true, description: 'OK', data: clients });
				}).catch((err: any) => {
					// Obtengo mensajes de error.
					let clientMsg: string = (typeof err === 'string' ? err : 'Cannot process request');
					let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');

					// Escribo el error en el log.
					logger.error('[ClientService::/api/client/get_clients/] Getting error:', errorMsg, 'search_criteria:', search_criteria, 'search_expression:', search_expression);

					// Si alguno de los pasos anteriores ya envío respuesta, no sigo.
					if (res.headersSent) return;
					// Devuelvo respuesta con el mensaje obtenido.
					res.json({ status: false, description: clientMsg, error: errorMsg });
				});
		});
}
