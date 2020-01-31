import * as http from 'http';
import * as express from 'express';
import * as log4js from 'log4js';

// Importo configuracion del Mail Server
import { MAILSERVER_CONFIG } from '../config/mail.config';

//Importa objetos a inicializar
import { SmtpService } from './smtp.mail';

// Obtengo logger
let logger = log4js.getLogger('ServerScripts');

// Funcion para inicializar la conexión a mail server
export function MailInit(app: express.Application): Promise<boolean> {

    // Armo promesa para devolver
    return new Promise<boolean>((resolve, reject) => {

        // Escribo a log
        logger.info('Iniciando conexión a webmail \'' + MAILSERVER_CONFIG.server + '\'');
        // Logueo a consola
        console.log('Iniciando conexión a webmail \'' + MAILSERVER_CONFIG.server + '\'');

            let nodemailer = require('nodemailer');
            let smtpTransport = nodemailer.createTransport({
                host: MAILSERVER_CONFIG.server,
                port: MAILSERVER_CONFIG.port,
                secure: MAILSERVER_CONFIG.secure,
                tls: {
                    rejectUnauthorized: false
                },
                auth: {
                    user: MAILSERVER_CONFIG.user,
                    pass: MAILSERVER_CONFIG.password
                }
            });

            // Verifica la conexión
            smtpTransport.verify( (err:any) => {
                if (err) {
                    // Obtengo el mensaje de error, que es lo que se va a enviar hacia atras
                    let errMsg: string = (typeof err.response === 'string' ? err.response : err);
                    // Escribo a log
                    logger.error('No se pudo establecer conexion al webmail: ' + errMsg);
                    // Logueo a consola
                    console.error('No se pudo establecer conexion al webmail');
                    // Propago error
                    reject(errMsg);
                } else {
                    // Escribo a log
                    logger.info('Conexión al webmail establecida');
                    // Logueo a consola
                    console.log('Conexión al webmail establecida');
                    // Resuelvo promesa
                    resolve(true);
                }
            });

            // Guardo la conexion web-mail para luego usarla
            app.set('mailserver', smtpTransport);
            SmtpService(app);
    });
}
