import * as path from 'path';
// Nombre de la carpeta final
export const TEMP_FOLDER = 'temp';
// Ruta completa de la carpeta de archivos
export const TEMP_PATH = path.resolve(__dirname, '..', TEMP_FOLDER);
// Nombre de la carpeta de templates
export const TEMPLATE_FOLDER: string = 'template';
// Nombre de la carpeta de views (dentro de la de templates)
export const VIEWS_FOLDER: string = 'views';
// Nombre de la carpeta para mailing templates usadas por el sistema
export const MAIL_FOLDER: string = 'mail';
// Ruta relativa (URI) de la carpeta de vistas de templates
export const TEMPLATE_VIEWS_URI: string = TEMPLATE_FOLDER + '/' + VIEWS_FOLDER;
// Ruta completa de la carpeta de templates
export const TEMPLATE_PATH: string = path.resolve(__dirname, '..', TEMPLATE_FOLDER);
// Ruta completa de la carpeta de vistas de templates
export const TEMPLATE_VIEWS_PATH: string = path.resolve(__dirname, '..', TEMPLATE_FOLDER, VIEWS_FOLDER);
// Ruta completa de la carpeta de templates para mailing
export const TEMPLATE_MAIL_PATH: string = path.resolve(__dirname, '..', TEMPLATE_FOLDER, MAIL_FOLDER);
// Tiempo a mantener los archivos o carpeta temporales
export const TEMPLATE_TEMP_PERSISTENCE: number = 24 * 60 * 60;
// Nombre de la carpeta temporal para las templates
export const TEMPLATE_TEMP_FOLDER: string = 'temp';
// Prefijo para nombrar las carpetas temporales de las templates
export const TEMPLATE_TEMP_PREFIX: string = 'temp';
// Prefijo para nombrar las carpetas temporales de las templates en modo edición
export const TEMPLATE_EDIT_PREFIX: string = 'edit';
// Prefijo para nombrar los temporales para descarga de las templates
export const TEMPLATE_DOWNLOAD_PREFIX: string = 'download';
// Prefijo para nombrar los temporales para upload de las templates
export const TEMPLATE_UPLOAD_PREFIX: string = 'upload';
// Extensión para la generación de snapshots de las templates
export const TEMPLATE_PREVIEW_EXT: string = '.jpg';
// Ruta hacia la carpeta temporal donde se alojan las templates
export const TEMPLATE_TEMP_PATH: string = path.resolve(TEMPLATE_PATH, TEMPLATE_TEMP_FOLDER);
// Ruta relativa (URI) de la carpeta de vistas de templates
export const TEMPLATE_TEMP_URI: string = TEMPLATE_FOLDER + '/' + TEMPLATE_TEMP_FOLDER;
// Ruta completa de la carpeta de archivos js estaticos
export const STATIC_JS_PATH: string = path.resolve(__dirname, '../static/js');
// Prefijo para los partiales de archivos js estaticos
export const STATIC_JS_PARTIALS_PREFIX: string = 'static/js/';
