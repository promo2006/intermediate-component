import * as express from 'express';
import * as log4js from 'log4js';

// Importo modelos
import { Role } from '../models/role.model';

// Importo configuracion de Redis
import { REDIS_SESSION_PERSISTENCE } from '../config/redis.config';

// Importo funciones para manejo de request y sesiones
import { DummyPromise } from '../shared/promises.shared';

// Obtengo logger
let logger = log4js.getLogger('ServerScripts');

export function GrantAccess(req: express.Request, res: express.Response, next: any) {

    // La validacion es solo para las URL de api y builder, cualquier otra cosa pasa
    if (!req.url.match('^\/(api|builder)\/')) return next();

    // Instancia asociada a la URL en la que se recibio el request
    let vcc: string = res.locals.vcc;
    // Usuario asociado a la sesion que envio el request
    let userId: string = res.locals.userId;
    // Datos del rol de usuario asociado a la sesion que envio el request
    let role: Role = res.locals.userRole;

    // Datos recibidos en el request
    let urlPath: string = req.path;

    // Le quito la barra inicial a la URL si la tiene
    if (urlPath.startsWith('/')) urlPath = urlPath.slice(1);

    // Si es un request a la api publica
    if (urlPath.indexOf('api/public')>-1)
        return next();

    // Empiezo con promesa dummy para poder hacer throw y caer en el catch
    DummyPromise()
    .then(
        result => {
            // Verifico si la URL esta entre los permisos del rol
            if (HasPermissionForURL(role, urlPath)) {
                // Continuo procesando
                return next();
            } else {
                // El usuario no tiene permisos
                logger.warn('Intento de acceso sin permisos a la api: (instancia) ' + vcc + ' (user) ' + userId + ' (url) ' + urlPath);
                // Devuelvo un 403 Forbidden
                res.sendStatus(403);
            }
        }
    ).catch(
        (err: any) => {
            // Escribo el error en el log
            logger.error('Error al procesar validar permisos de acceso: ' + err);
        }
    );
}

function HasPermissionForURL(role: Role, url: string): boolean {

    // Busco si hay un permiso de api que matchee con la URL recibida
    let hasPermission: boolean = !!(role.routePermissions && role.routePermissions.find(
        routePermission => {
            return  (
                routePermission.level === 'api' && routePermission.route &&
                (routePermission.route === url || (routePermission.route.endsWith('/') && url.startsWith(routePermission.route)))
            );
        }
    ));

    // Devuelvo resultado
    return hasPermission;
}
