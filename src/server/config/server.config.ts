import * as path from 'path';

// Modo del servicio (dev, prod, test)
export const SERVER_MODE: string = <string>'<%= ENV %>';
// HTTP habilitado
export const HTTP_ENABLED: boolean = true;
// Host de listen para HTTP
export const HTTP_BINDING_HOST: string = '0.0.0.0';
// Puerto de listen para HTTP
export const HTTP_BINDING_PORT: number = <number>+('<%= APP_SERVER_PORT %>');
// HTTPS habilitado
export const HTTPS_ENABLED: boolean = false;
// Host de listen para HTTPS
export const HTTPS_BINDING_HOST: string = '0.0.0.0';
// Puerto de listen para HTTPS
export const HTTPS_BINDING_PORT: number = 443;
// Clave para HTTPS
export const HTTPS_KEY: string = path.resolve(__dirname, '../ssl/star_inconcertcc_com.key');
// Certificado para HTTPS
export const HTTPS_CERT: string = path.resolve(__dirname, '../ssl/star_inconcertcc_com.pem');
