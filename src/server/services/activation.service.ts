import * as express from 'express';
import * as moment from 'moment';
import * as path from 'path';
import * as log4js from 'log4js';
import { Redis } from '../db/redis.service';

// Importo servicio con funciones para MSSQL.
import { MSSql } from '../db/mssql.service';

// Obtengo logger.
let logger = log4js.getLogger('ServerScripts');

export function ActivationService(app: express.Application) {

    app.post('/api/activation/register_license',
		(req: express.Request, res: express.Response, next: any) => {
            
        });
        
}