import * as express from 'express';
import * as sql from 'mssql';
import * as path from 'path';
import * as log4js from 'log4js';
let cassandra = require('cassandra-client').Connection;

// Importo los servicios a inicializar.
import { IntegrationCassandraSql } from './cassandra/integration.cassandra';

// Obtengo logger.
let logger = log4js.getLogger('Cassandra');

// Importo variable con la ubicacion del folder de proceso que aloja los audio y jsons.
import { TYPE, IP, PORT, DNS } from '../config/integration.config';


// Funcion para inicializar la conexión.
export function CassandralInit(app: express.Application): Promise<boolean> {

	// Armo promesa para devolver.
	return new Promise<boolean>((resolve, reject) => {

		// Escribo a log.
		logger.info('Iniciando conexión a base de datos cassandra \'' + IP + '\'');
		// Logueo a consola.
		console.log('Iniciando conexión a base de datos cassandra \'' + IP + '\'');

		// Inicio conexión a base de datos cassandra.
		let cassandraConn = new cassandra({ host: IP, port: PORT, keyspace: 'Agent', timeout: 14000 });
		cassandraConn.connect(function (err, con) {
			if (err) {
				// Obtengo el mensaje de error, que es lo que se va a enviar hacia atrás.
				let errMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');

				// Escribo a log.
				logger.error('No se pudo establecer conexion a base de datos cassandra: ' + errMsg);
				// Logueo a consola.
				console.error('No se pudo establecer conexion a base de datos cassandra: ' + errMsg);

				// Propago error.
				reject(err);
			} else {
				// Escribo a log.
				logger.info('Conexión a base de datos cassandra establecida');
				// Logueo a consola.
				console.log('Conexión a base de datos cassandra establecida');

				// Resuelvo promesa.
				resolve(true);
			}
		});

		// Asocio la conexión al objeto para luego recuperarla.
		app.set('cassandraConn', cassandraConn);

		// Inicializo los servicios de acceso a base de datos cassandra.
		IntegrationCassandraSql(app);
	});
}
