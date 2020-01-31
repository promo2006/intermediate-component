import * as express from 'express';
import * as cors from 'cors';

export function InitHeaders(app: express.Application) {

    // Aplico los handelrs para setear los headers de seguridad
    app.use(FrameGuard);
    app.use(HidePoweredBy);
    app.use(XssFilter);
    app.use(IeNoOpen);

    // Configuración para CORS
    let corsOptions: cors.CorsOptions = {
        // Header Access-Control-Allow-Origin con el origen del request (sin esto no puedo setear cookies)
        origin: true,
        // Header Access-Control-Allow-Credentials
        credentials: true,
        // Header Access-Control-Allow-Methods
        methods: ['GET', 'POST']
    };

    // Activo CORS para las URL necesarias
    app.all('/api|auth|public|popup|builder|payments|distributed|static|template|assets|favicon/*', cors(corsOptions));
}

export function FrameGuard(req: express.Request, res: express.Response, next: any) {

    // El header se aplica solo para URLs que no sean embebibles
    if (req.url.match('^\/(builder|payments|popup)\/') || req.url.startsWith('/public/tracking/frame.html') || req.url.startsWith('/public/preview_template_edit/')) return next();

    // Aplico el X-Frame-Options para indicar que la página solo se puede meter dentro de un iframe en el mismo origen (evitar clickjacking)
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');

    // Sigo procesando
    return next();
}

export function HidePoweredBy(req: express.Request, res: express.Response, next: any) {

    // Escondo el X-Powered-By: Express para no dar información a atacantes
    res.removeHeader('X-Powered-By');

    // Sigo procesando
    return next();
}

export function XssFilter(req: express.Request, res: express.Response, next: any) {

    // Verifico si estoy en un browser IE viejo (el header no se usa en estos casos)
    let matches: RegExpExecArray = /msie\s*(\d+)/i.exec(req.headers['user-agent']);

    // Valor del header
    let value: string;

    // Segun el caso habilito el header o no el X-XSS-Protection
    if (!matches || (parseFloat(matches[1]) >= 9))
        value = '1; mode=block';
    else
        value = '0';

    // Agrego el X-XSS-Protection para vitar reflected XSS (ejecucion de scripts injectados en el querystring de la página)
    res.setHeader('X-XSS-Protection', value);

    // Sigo procesando
    return next();
}

export function IeNoOpen(req: express.Request, res: express.Response, next: any) {

    // Agrego el X-Download-Options para evitar descargas inseguras en explorer
    res.setHeader('X-Download-Options', 'noopen');

    // Sigo procesando
    return next();
}

export function HstsGuard(req: express.Request, res: express.Response, next: any) {

    // Por defecto empezo con maxage 0, lo cual deshabilita el HSTS
    let maxAge: string = '0';

    // Si estoy en un dominio que tiene habilitado HTTPS seteo un año de HSTS
    if (res.locals && res.locals.domain && res.locals.domain.hasHttps) maxAge = '31536000';

    // Aplico el X-Frame-Options para indicar que la página solo se puede meter dentro de un iframe en el mismo origen (evitar clickjacking)
    res.setHeader('Strict-Transport-Security', 'max-age=' + maxAge);

    // Sigo procesando
    return next();
}
