import * as express from 'express';
import * as log4js from 'log4js';

// Obtengo logger
let logger = log4js.getLogger('ServerScripts');

// Servicios
import { AccountService } from './account.service';
import { ActivationService } from './activation.service';
import { AuthService } from './auth.service';
import { PlatformService } from './platform.service';
import { VCCService } from './vcc.service';
import { ClientService } from './client.service';

export function init(app: express.Application) {
	// Escribo log.
	logger.info('Incializando servicios');
	// Inicializo servicios.
	AccountService(app);
	ActivationService(app);
	AuthService(app);
	PlatformService(app);
	VCCService(app);
	ClientService(app);
}
