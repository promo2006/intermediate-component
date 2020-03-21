import * as express from 'express';
import * as log4js from 'log4js';

// Obtengo logger
let logger = log4js.getLogger('ServerScripts');

export function init(app: express.Application) {
	// Escribo log.
	logger.info('Incializando servicios');
}
