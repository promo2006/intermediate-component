import * as express from 'express';
import * as sql from 'mssql';
import * as path from 'path';
import * as log4js from 'log4js';

// Importo configuracion de MSSQL.
import { MSSQL_CONFIG } from '../config/mssql.config';

// Importo los servicios a inicializar.
import { AuthMSSql } from './mssql/auth.mssql';
import { DomainMSSql } from './mssql/domain.mssql';
import { AccountMSSql } from './mssql/account.mssql';
import { AccountBalanceMSSql } from './mssql/accountBalance.mssql';
import { AccountVccMSSql } from './mssql/accountVcc.mssql';
import { VCCMSSql } from './mssql/vcc.mssql';
import { HomeMSSql } from './mssql/home.mssql';
import { NotificationMSSql } from './mssql/notification.mssql';
import { RoleMSSql } from './mssql/role.mssql';
import { UserMSSql } from './mssql/user.mssql';
import { PlatformMSSql } from './mssql/platform.mssql';
import { PlatformDataMSSql } from './mssql/platformData.mssql';
import { PlatformLicenseMSSql } from './mssql/platformLicense.mssql';
import { IntegrationMSSql } from './mssql/integration.mssql';
import { LicenseMSSql } from './mssql/license.mssql';
import { ClientMSSql } from './mssql/client.mssql';

// Obtengo logger.
let logger = log4js.getLogger('Sql');

// Funcion para inicializar la conexión.
export function MsSqlInit(app: express.Application): Promise<boolean> {

	// Armo promesa para devolver.
	return new Promise<boolean>((resolve, reject) => {

		// Escribo a log.
		logger.info('Iniciando conexión a base de datos \'' + MSSQL_CONFIG.server + '\'');
		// Logueo a consola.
		console.log('Iniciando conexión a base de datos \'' + MSSQL_CONFIG.server + '\'');

		// Inicio conexión a base de datos.
		let sqlConn: sql.Connection = new sql.Connection(MSSQL_CONFIG, function (err) {
			if (err) {
				// Obtengo el mensaje de error, que es lo que se va a enviar hacia atrás.
				let errMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');

				// Escribo a log.
				logger.error('No se pudo establecer conexion a base de datos: ' + errMsg);
				// Logueo a consola.
				console.error('No se pudo establecer conexion a base de datos: ' + errMsg);

				// Propago error.
				reject(err);
			} else {
				// Escribo a log.
				logger.info('Conexión a base de datos establecida');
				// Logueo a consola.
				console.log('Conexión a base de datos establecida');

				// Resuelvo promesa.
				resolve(true);
			}
		});

		// Asocio la conexión al objeto para luego recuperarla.
		app.set('sqlConn', sqlConn);

		// Inicializo los servicios de acceso a base de datos.
		AccountMSSql(app);
		AccountBalanceMSSql(app);
		AccountVccMSSql(app);
		AuthMSSql(app);
		DomainMSSql(app);
		VCCMSSql(app);
		HomeMSSql(app);
		NotificationMSSql(app);
		RoleMSSql(app);
		UserMSSql(app);
		PlatformMSSql(app);
		PlatformDataMSSql(app);
		PlatformLicenseMSSql(app);
		LicenseMSSql(app);
		IntegrationMSSql(app);
		ClientMSSql(app);
	});
}
