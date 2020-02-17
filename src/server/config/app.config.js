"use strict";
exports.__esModule = true;
// Habilitar prefijo en los ID de contacto
exports.ENABLE_CONTACT_ID_PREFIX = {
    /*intancia por cliente en una instancia
    default: {
        Amazon:'campaignClient'
    }
     */
    "default": '',
    instance1: 'campaignId',
    instance2: 'campaignClient',
    instance3: 'campaignCategory',
    instance4: 'sourceId'
};
// Prefijo de ventas
exports.CONTACT_SALE_ID_PREFIX = 'CS';
// Deshabilitar archivos minificados
exports.DISABLE_MINIFY = false;
// Flag para que el servidor levante en modo de servicio distribuido
exports.IS_DISTRIBUTED_SERVICE = false;
// Claves para subir contenido a cada instancia
exports.DISTRIBUTED_SERVICE_KEYS = {
    "default": 'bjFOyOXM6tOBJlkoKa6eGY4ZzovkEiBV01H7swK63elwkQEv',
    instance1: 'm49y5SEFzNjrt1c3SkDAn9ynBWlVsQ3L87fb12OyzNYsdhbu',
    instance2: 'eGk19JaQYDViax1Cll8CKI17OkswmSyVzVPemFQMCB9ReOS7',
    instance3: '3VQjm3IT4PzR0OPoeFsfFzZ3tkzGH38hcO8SnpWTDQot4GOl',
    instance4: 'qqYZfFRzfEp78YlkBzmvIzn9P6m209FFOaNJlezsW3nhVf4U'
};
// Lista de origenes validos para cada instancia
exports.DISTRIBUTED_SERVICE_ORIGINS = {
    "default": [
        'A.A.A.A',
        'B.B.B.B',
        'C.C.C.C'
    ],
    instance1: [
        'D.D.D.D',
        'E.E.E.E',
        'F.F.F.F'
    ],
    instance2: [
        'G.G.G.G',
        'H.H.H.H',
        'I.I.I.I'
    ],
    instance3: [
        'J.J.J.J',
        'K.K.K.K',
        'L.L.L.L'
    ],
    instance4: [
        'M.M.M.M',
        'N.N.N.N',
        'O.O.O.O'
    ]
};
// Limite de tamaño para upload de archivos genericos (20MB)
exports.FILE_UPLOAD_LIMIT = 20 * 1024 * 1024;
