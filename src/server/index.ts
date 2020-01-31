import * as http from 'http';
import * as https from 'https';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as path from 'path';
import * as fs from 'fs';
import * as log4js from 'log4js';

import * as services from './services';
import * as permissions from './shared/permission.shared';
import * as httpShared from './shared/http.shared';
import * as sessionShared from './shared/session.shared';
import * as securityShared from './shared/security.shared';

import { LOGGER_CONFIG } from './config/logger.config';
import { MsSqlInit } from './db/mssql.init';
import { RedisInit } from './db/redis.init';
import { DummyPromise } from './shared/promises.shared';

// Importo configuraciones de servidor
import { SERVER_MODE, HTTP_ENABLED, HTTP_BINDING_HOST, HTTP_BINDING_PORT, HTTPS_ENABLED, HTTPS_BINDING_HOST, HTTPS_BINDING_PORT, HTTPS_KEY, HTTPS_CERT } from './config/server.config';

// Importo configuraciones de la aplicación
import { IS_DISTRIBUTED_SERVICE } from './config/app.config';

// Importo configuracion de permisos
import { CHECK_API_PERMISSIONS } from './config/permissions.config';

// Obtengo aplicacion de Exress
let app: express.Express = express();

let httpServer: http.Server;
let httpsServer: https.Server;

export function init() {

	// Ruta de la aplicación de cliente
	let clientPath: string = '../client';

	// Obtengo la ruta para la carpeta de logs
	let logsPath: string = path.resolve(__dirname, 'logs');

	// Si no existe la creo
	if (!fs.existsSync(logsPath)) fs.mkdirSync(logsPath);

	// Inicializo los logs
	log4js.configure(LOGGER_CONFIG);

	// Obtengo logger
	let logger: log4js.Logger = log4js.getLogger('ServerScripts');

	// Anuncio servicio inicializandose
	logger.info('********************************************************');
	logger.info('* Inicializando servicio                               *');
	logger.info('********************************************************');

	// Inicializo los middleware para manejo de los request
	app.use(log4js.connectLogger(log4js.getLogger('AccessLog'), { level: 'auto' }));
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json({ limit: '5mb' }));
	app.use(bodyParser.text({ limit: '5mb' }));
	app.use(bodyParser.raw({ limit: '5mb' }));
	app.use(cookieParser());
	app.use(compression());

	// Verifico si hubo error de parseo y lo capturo
	app.use(function (err: any, req: express.Request, res: express.Response, next: any) {
		// Error de parseo en el body tipo JSON
		if (err && err instanceof SyntaxError && (<any>err).status >= 400 && (<any>err).status < 500 && err.message.indexOf('JSON')) {
			// Logueo error
			logger.warn('No se pudo parsear contenido JSON de request ' + req.method + ' para \'' + req.path + '\'');
			// Devuelvo un not found
			res.status(400).json({ status: false, description: 'Invalid JSON', error: 'Invalid JSON' });
		}
	});

	// Inicializo handlers de seguridad
	securityShared.InitHeaders(app);

	// Logueo inicio y modo
	logger.info('Servicio ejecutando en modo \'' + SERVER_MODE + '\'');

	// Para recibir los datos de la solicitud original en caso de estar atras de un proxy
	app.enable('trust proxy');
	app.set('trust proxy', true);

	// Verifico si el dominio llego con www (para no tener que definir los dos dominios)
	app.use(function (req: express.Request, res: express.Response, next: any) {
		// Si la solicitud es https, seguimos
		if (req.headers.host.slice(0, 4) !== 'www.' && req.secure) {
			next();
		} else if (SERVER_MODE === 'prod') {
			// Si me llega una solicitud con www, la redirijos
			let newHost: string = req.headers.host.slice(0, 4) === 'www.' ? req.headers.host.slice(4) : req.headers.host;
			return res.redirect(301, 'https://' + newHost + req.originalUrl);
		} else {
			next();
		}
	});

	// Redireccion del contenido estatico del frontend segun modo
	if (SERVER_MODE === 'prod') {
		// Caso produccion
		//app.use('/client/assets', express.static(path.resolve(__dirname, clientPath + '/assets')));
		//app.use('/client/css', express.static(path.resolve(__dirname, clientPath + '/css')));
		//app.use('/client/flags', express.static(path.resolve(__dirname, clientPath + '/flags')));
		//app.use('/client/fonts', express.static(path.resolve(__dirname, clientPath + '/fonts')));
		//app.use('/client/js', express.static(path.resolve(__dirname, clientPath + '/js')));
	} else {
		// Casos dev y testing
		// app.use('/client/assets', express.static(path.resolve(__dirname, clientPath + '/assets')));
		// app.use('/client/css', express.static(path.resolve(__dirname, clientPath + '/css')));
		// app.use('/client/flags', express.static(path.resolve(__dirname, clientPath + '/flags')));
		// app.use('/client/fonts', express.static(path.resolve(__dirname, clientPath + '/fonts')));
		// app.use(express.static(path.resolve(process.cwd())));
		// app.use(express.static(path.resolve(process.cwd(), path.resolve(__dirname, clientPath + '/**/'))));
	}

	// Contenido estatico del backend
	app.use('/static', express.static(path.resolve(__dirname, 'static')));

	// Si no estoy en un servicio distribuido, inicializo todos los middleware
	if (!IS_DISTRIBUTED_SERVICE) {
		// Obtengo datos del request (instancia y dominio)
		app.use(httpShared.GetRequestData);

		// Aplico handler para header de HSTS (este va al final ya que necesito saber datos del dominio)
		app.use(securityShared.HstsGuard);

		// Validación de sesion de usuario
		//	app.use(sessionShared.ValidateUserSession);

		// Chequea los permisos del usuario
		// if (CHECK_API_PERMISSIONS) app.use(permissions.GrantAccess);

		// Deshabilito el header Etag para evitar cache web en los request (el contenido static lo sigue usando)
		app.disable('etag');

		// Registro servicios
		services.init(app);

		// Verifico que no haya que ejecutar un redirect en este dominio
		app.use(httpShared.ValidateDomainRedirect);

		// Por defecto se retorna el index.html de la aplicacion de angular
		app.get('/*', function (req: express.Request, res: express.Response, next: any) {
			// Controlo que no caigan request a assets que no existen
			if (req.url.match('^\/(api|auth|public|internal|popup|builder|payments|distributed|static|template|client|assets|favicon)(.*)$')) {
				// Devuelvo un not found
				res.status(404).type('txt').send('Page not found');
			} else {
				// Devuelvo el index.html
				res.sendFile(path.resolve(__dirname, clientPath + '/index.html'));
			}
		});
	} else {

		// Si la solicitud no cayo en un archivo estatico ni en ningun servicio, devuelvo not found
		app.get('/*', function (req: express.Request, res: express.Response, next: any) {
			// Devuelvo un not found
			res.status(404).type('txt').send('Page not found');
		});
	}

	// Inicializo engine de template
	return DummyPromise().then(
		result => {
			// Inicializo conexion a base de datos SQL Server
			return MsSqlInit(app);
		}
	).then(
		result => {
			// Inicializo conexion a Redis
			return RedisInit(app);
		}
	).then(
		result => {
			// Inicializo servicio HTTP
			return new Promise<boolean>((resolve, reject) => {

				// Si HTTP no esta habilitado no sigo
				if (!HTTP_ENABLED) return resolve(true);

				// Escribo a log
				logger.info('Iniciando servicio HTTP');
				// Logueo a consola
				console.log('Iniciando servicio HTTP');

				// Creo y obtengo el servidor HTTP
				httpServer = http.createServer(app);

				// Levanto servicio HTTP en el puerto configurado
				httpServer.listen(HTTP_BINDING_PORT, HTTP_BINDING_HOST)
					.on('listening', () => {
						// Escribo a log
						logger.info('Servicio HTTP escuchando en: ' + httpServer.address().address + ':' + HTTP_BINDING_PORT.toString());
						// Logueo a consola
						console.log('Servicio HTTP escuchando en: ' + httpServer.address().address + ':' + HTTP_BINDING_PORT.toString());
						// Resuelvo promesa
						resolve(true);
					});
			});
		}
	).then(
		result => {
			// Inicializo servicio HTTPS
			return new Promise<boolean>((resolve, reject) => {

				// Si HTTPS no esta habilitado no sigo
				if (!HTTPS_ENABLED) return resolve(true);

				// Escribo a log
				logger.info('Iniciando servicio HTTPS');
				// Logueo a consola
				console.log('Iniciando servicio HTTPS');

				// Creo y obtengo el servidor HTTPS
				httpsServer = https.createServer({
					key: fs.readFileSync(HTTPS_KEY),
					cert: fs.readFileSync(HTTPS_CERT)
				}, app);

				// Levanto servicio HTTP en el puerto configurado
				httpsServer.listen(HTTPS_BINDING_PORT, HTTP_BINDING_HOST)
					.on('listening', () => {
						// Escribo a log
						logger.info('Servicio HTTPS escuchando en: ' + httpsServer.address().address + ':' + HTTPS_BINDING_PORT.toString());
						// Logueo a consola
						console.log('Servicio HTTPS escuchando en: ' + httpsServer.address().address + ':' + HTTPS_BINDING_PORT.toString());
						// Resuelvo promesa
						resolve(true);
					});
			});
		}
	).then(
		result => {
			// Verifico si inicializó bien el servicio de mail
			if (!result) logger.error('No se pudo establecer conexión con el servicio de mail.');

			// Escribo a log
			logger.info('Servicio inicializado correctamente');
			// Logueo a consola
			console.log('Servicio inicializado correctamente');
		}
	).catch(
		err => {
			// Obtengo mensaje de error
			let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || '');

			// Escribo a log
			logger.info('Error al inicializar el servicio: ' + errorMsg);
			// Logueo a consola
			console.error('Error al inicializar el servicio: ' + errorMsg);
		}
	);
}
