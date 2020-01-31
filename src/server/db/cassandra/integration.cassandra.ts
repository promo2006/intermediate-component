import * as express from 'express';
import * as log4js from 'log4js';

// Obtengo logger.
let logger = log4js.getLogger('Cassandra');

// Conexión a base de datos cassandra.
let cassandraConn: any;

export function IntegrationCassandraSql(app: express.Application) {

	// Obtengo conexión a base de datos cassandra.
	cassandraConn = app.get('cassandraConn');
}

/////////////////////////////////////////////////////
// Funciones de acceso a base de datos cassandra.  //
////////////////////////////////////////////////////

export function GetCassandraVCCs(): Promise<any> {

	return new Promise<any[]>((resolve, reject) => {

		cassandraConn.execute('SELECT * FROM VCCs', [], function (err, rows) {
			if (err) {
				// Obtengo mensaje de error.
				let errorMsg: string = (err && err.procName ? 'Error al ejecutar \'' + err.procName + '\': ' : 'Error al ejecutar consulta: ') + (err ? typeof err === 'string' ? err : err.message || err.description || '' : '');

				// Escribo el error en el log.
				logger.error(errorMsg);

				// Propago error.
				reject(err);
			} else {
				// Resuelvo promesa.
				resolve(rows);
			}
		});
	});
}

export function GetCassandraUsers(): Promise<any> {

	return new Promise<any[]>((resolve, reject) => {

		cassandraConn.execute('SELECT * FROM Users', [], function (err, rows) {
			if (err) {
				// Obtengo mensaje de error.
				let errorMsg: string = (err && err.procName ? 'Error al ejecutar \'' + err.procName + '\': ' : 'Error al ejecutar consulta: ') + (err ? typeof err === 'string' ? err : err.message || err.description || '' : '');

				// Escribo el error en el log.
				logger.error(errorMsg);

				// Propago error.
				reject(err);
			} else {
				// Resuelvo promesa.
				resolve(rows);
			}
		});
	});
}
