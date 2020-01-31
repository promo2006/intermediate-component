import * as express from 'express';
import * as log4js from 'log4js';
import * as moment from 'moment';

// Importo configuracion del Mail Server
import { MAILSERVER_CONFIG } from '../config/mail.config';
import { HTTP_ENABLED, HTTP_BINDING_PORT, HTTPS_ENABLED, HTTPS_BINDING_PORT } from '../config/server.config';

// Importo funciones para manejo de archivos
import { ReadFileContent, JoinPath } from '../shared/file-manager';

// Importo configuracion de template
import { TEMPLATE_MAIL_PATH } from '../config/templates.config';

// Importo modelos
import { Domain } from '../models/domain.model';

// Importo servicio con funciones para Redis
import { Redis } from '../db/redis.service';

// Importo servicio con funciones para MSSQL
import { MSSql } from '../db/mssql.service';

// Obtengo logger
let logger = log4js.getLogger('ServerScripts');

// Importo handelbars para email templates
let hbs = require('hbs');

//Declaro el server
let mailServer: any;

export function SmtpService(app: express.Application) {

    //Obtengo la conexion al mail server
    mailServer = app.get('mailserver');
}

export function PrepareEmailTemplate(instance:string, userName: string, description:string, title:string, template:string): Promise<any> {

    let assetsUrl:string;

    return GetMailAssetsDomain(instance)
    .then(
        (result : string)=> {
            assetsUrl = result;
            return ReadFileContent(JoinPath(TEMPLATE_MAIL_PATH, template + '.hbs' ), 'utf8');
        }
    ).then(
        content => {
            let theme = hbs.compile(content);
            let resultContent: string = '';

            switch (template) { // Resuelve la template de acuerdo a su tipo
                case  'notification':
                    resultContent = theme({
                                        'userName': userName,
                                        'description':description,
                                        'title':title,
                                        'assetsUrl': assetsUrl
                                    });
                break;
                default:
                    resultContent = '';
                break;
            }

            return resultContent;

    }).catch(
        err => {
            logger.error('PrepareEmailTemplate: '+ err);
    });
}

export function Send(receiver:string, subject:string, content: string): Promise<boolean> {

    // Configura el mail a enviar
    var mailOptions = {
        // sender address and name
        from: MAILSERVER_CONFIG.from,
        // receivers email address
        to: receiver, //TODO: verificar si el usuario abre el mail
        // Subject line
        subject: subject,
        // plaintext body
        text: content,
        // rich text html body
        html: content
    };

    return new Promise<boolean>((resolve, reject) => {
        // Realiza el envío
        mailServer.sendMail(mailOptions, function(error:any, info:any){
            if(error) {
                console.log('Error al intentar enviar por MailService: \'' + error + '\'');
                logger.error('Error al intentar enviar por MailService: \'' + error + '\'');
                reject(error);
            }else {
                logger.info('Mensaje enviado por MailService: \'' + info.response + '\'');
                resolve(true);
            }
        });
    });
}

export function SendAttach(receiver:string, subject:string, content: string, attachments:any): Promise<boolean> {

    // Configura el mail a enviar
    var mailOptions = {
        // sender address and name
        from: MAILSERVER_CONFIG.from,
        // receivers email address
        to: receiver, //TODO: verificar si el usuario abre el mail
        // Subject line
        subject: subject,
        //file
        attachments: attachments,
        // plaintext body
        text: content,
        // rich text html body
        html: content
    };

    return new Promise<boolean>((resolve, reject) => {
        // Realiza el envío
        mailServer.sendMail(mailOptions, function(error:any, info:any){
            if(error) {
                console.log('Error al intentar enviar por MailService: \'' + error + '\'');
                logger.error('Error al intentar enviar por MailService: \'' + error + '\'');
                reject(error);
            }else {
                logger.info('Mensaje enviado por MailService: \'' + info.response + '\'');
                resolve(true);
            }
        });
    });
}

export function MailDisconect(): Promise<boolean> {

    // Armo promesa para devolver
    return new Promise<boolean>((resolve, reject) => {

        if( mailServer) {
            // Escribo a log
            logger.info('Cerrando conexión a webmail \'' + MAILSERVER_CONFIG.server + '\'');
            // Logueo a consola
            console.log('Cerrando conexión a webmail \'' + MAILSERVER_CONFIG.server + '\'');
            mailServer.close();
        }
        resolve(true);
    });
}

// Devuelve la ruta a los assets de mail por instancia, consulta primero en Redis
function GetMailAssetsDomain ( instance: string ): Promise<string> {

    let mailAssetsUrl: string = (HTTPS_ENABLED ? 'https://' : 'http://') + '127.0.0.1' +
    (HTTPS_ENABLED && HTTPS_BINDING_PORT && HTTPS_BINDING_PORT !== 443 ? ':' + HTTPS_BINDING_PORT.toString() :
        (!HTTPS_ENABLED && HTTP_BINDING_PORT && HTTP_BINDING_PORT !== 80 ? ':' + HTTP_BINDING_PORT.toString() : '')
    ) + '/client/assets/img/';

    // Flag para indicar si el registro debe ser insertado en redis
    let cacheUpdateNeeded: boolean = false;

    return Redis.GetMailingDomainByInstance(instance)
    .then(
        (mailingDomain: Domain) => {
            // Chequeo si el dato estaba guardado en memoria
            if (mailingDomain || JSON.stringify(mailingDomain) === JSON.stringify({})) {
                // Devuelvo resultado obtenido
                return Promise.resolve(mailingDomain);
            } else {
                // No hay valor en redis, hay que consultar a BD
                logger.info('El dato de GetMailingDomainByInstance para \'' + instance + '\' no se encuentra en cache. se consultara a base de datos.');
                // Actualizo el flag para luego actualizar redis
                cacheUpdateNeeded = true;
                // Ejecuto consulta a BD
                return MSSql.GetDomains(instance, 'domain', '');
            }
        }
    ).then(
        (resultDomains: Domain[]) => {

            if(typeof resultDomains !== 'string') {

                // Si la consulta no devolvio nada uso inicializo a un array vacio
                resultDomains = resultDomains || [];

                // Busco el dominio principal si existe
                let selectedDomain: Domain = resultDomains.find(domain => domain.isMainDomain);

                // Si no tengo dominio principal, busco el primero que no sea de contenido
                if (!selectedDomain) selectedDomain = resultDomains.find(domain => !domain.isContentDomain);

                // Si se obtuvo un domino, armo la URL
                if (selectedDomain) {
                    // Obtengo protocolo, dominio y puerto
                    let protocol: string = (HTTPS_ENABLED ? 'https://' : 'http://');
                    let domain: string = selectedDomain.domain || '127.0.0.1';
                    let port: string = (((!HTTPS_ENABLED && selectedDomain.contentPort && selectedDomain.contentPort !== '80') || (HTTPS_ENABLED && selectedDomain.contentPort && selectedDomain.contentPort !== '443')) ? ':' + selectedDomain.contentPort : '');
                    // Armo la URL
                    mailAssetsUrl = protocol + domain + port + '/assets/img/';
                }
            }else {
                mailAssetsUrl = resultDomains;
            }
            // Escribo a log
            logger.info('Devuelve la ruta para assets de mailing de la instancia  \'' + instance + ' con valor \'' + mailAssetsUrl + '\'');

            // Si corresponde actualizo el dato en cache
             if (cacheUpdateNeeded) Redis.SaveMailingDomainByInstance(instance, mailAssetsUrl);
            // Chequeo si el dato estaba guardado en memoria
            if (mailAssetsUrl || JSON.stringify(mailAssetsUrl) === JSON.stringify({})) {
                // Devuelvo resultado obtenido
                return Promise.resolve(mailAssetsUrl);
            } else {
                // El dato no existia en base de datos
                throw 'Se consulto dato de GetMailAssetsDomain para \'' + instance + '\' que no se encuentra definido en base de datos.';
            }
        }
    ).catch(
        (err: any) => {
            // Obtengo el mensaje de error, que es lo que se va a enviar hacia atras
            let errMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'Error al ejecutar solicitud');
            // Escribo a log
            logger.error('Error al ejecutar GetMailAssetsDomain: ' + errMsg);
        }
    );
}