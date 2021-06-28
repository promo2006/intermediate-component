import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as merge from 'merge-stream';
import * as slash from 'slash';
import * as replace from 'gulp-replace';
import { join, sep, normalize } from 'path';

import { APP_CLIENT_BASE, APP_CLIENT_DEST, APP_CLIENT_SRC, CSS_DEST, JS_DEST, JS_PROD_APP_BUNDLE, JS_PROD_SHIMS_BUNDLE, TEMPLATE_CONFIG } from '../config';
import { TemplateLocalsBuilder } from '../utils';

// Obtengo plugins de gulp
const plugins = <any>gulpLoadPlugins();

// Función para inyectar dependencias js y css en index.html para caso ambiente de prodcción
function buildIndex() {
  return gulp.src(join(APP_CLIENT_SRC, 'index.html'), { base: APP_CLIENT_SRC })
    .pipe(injectJs())
    .pipe(injectCss())
    .pipe(plugins.template(new TemplateLocalsBuilder().withStringifiedSystemConfigDev().build(), TEMPLATE_CONFIG))
    .pipe(replace(/<!--.*-->/g, ''))
    .pipe(replace(/\s+(\r\n|\r|\n)/g, '\r\n'))
    .pipe(replace(/(\r\n|\r|\n){2,}/gm, '\r\n'))
    .pipe(gulp.dest(APP_CLIENT_DEST));
}

// Función para hacer inyección de un array de archivos
function inject(...files: Array<string>) {
    return plugins.inject(gulp.src(files, { read: false }), {
        files,
        transform: transformPath()
    });
}

// Inyecta los archivos JS de shims y app
function injectJs() {
  return inject(join(JS_DEST, JS_PROD_SHIMS_BUNDLE), join(JS_DEST, JS_PROD_APP_BUNDLE));
}

// Inyecta los archivos CSS existentes
function injectCss() {
  return inject(
    join(CSS_DEST, '**', '*.css'),
    '!' + join(CSS_DEST, 'main.css'),
    '!' + join(CSS_DEST, '**', 'skin-*.css')
  );
}

// Hace la transformación del path del archivo para inyectar
function transformPath() {
  return function(filepath: string) {
    let path: Array<string> = normalize(filepath).split(sep);
    let slice_after = path.indexOf(APP_CLIENT_DEST);
    if (slice_after>-1) {
      slice_after++;
    } else {
      slice_after = 4;
    }
    arguments[0] = APP_CLIENT_BASE + path.slice(slice_after, path.length).join(sep) + `?${Date.now()}`;
    return slash(plugins.inject.transform.apply(plugins.inject.transform, arguments));
  };
}

// Ejecuto todos los builds juntos
export = () => merge(buildIndex());
