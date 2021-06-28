import * as autoprefixer from 'autoprefixer';
import * as cssnano from 'cssnano';
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as merge from 'merge-stream';
import * as log from 'fancy-log';
import { Chalk } from 'chalk';
import { join } from 'path';
import { noop, dummyStream } from '../utils';

import {
  APP_CLIENT_DEST,
  APP_CLIENT_SRC,
  BROWSER_LIST,
  CSS_DEST,
  CSS_SRC,
  DEPENDENCIES,
  ENV,
  TMP_CLIENT_DIR,
  getPluginConfig,
} from '../config';

// Obtengo plugins de gulp
const plugins = <any>gulpLoadPlugins();
const cleanCss = require('gulp-clean-css');
const gulpConcatCssConfig = getPluginConfig('gulp-concat-css');
const chalk: Chalk = require('chalk');

const processors = [
  autoprefixer({
    browsers: BROWSER_LIST
  })
];

const reportPostCssError = (e: any) => log(chalk.red(e.message));

// Obtengo lag de modo producción
const isProd = ENV === 'prod';

if (isProd) {
  processors.push(
    cssnano({
      discardComments: {removeAll: true},
      discardUnused: false, // unsafe, see http://goo.gl/RtrzwF
      zindex: false, // unsafe, see http://goo.gl/vZ4gbQ
      reduceIdents: false // unsafe, see http://goo.gl/tNOPv0
    })
  );
}

// Copia todos los archivos HTML a la carpeta tmp_client
function CopyHtmlFilesToTmp() {
  return gulp.src(join(APP_CLIENT_SRC, '**', '*.html'), { base: APP_CLIENT_SRC })
    .pipe(gulp.dest(TMP_CLIENT_DIR));
}

// Procesa y genera los archivos de estilos de componentes de la aplicación
function GenerateComponentsStylesheets() {
  return gulp.src(join(APP_CLIENT_SRC, '**', '*.scss'), { base: APP_CLIENT_SRC })
    .pipe(isProd ? plugins.cached('process-component-scss') : noop())
    .pipe(isProd ? plugins.progeny() : noop())
    .pipe(isProd ? noop() : plugins.sourcemaps.init())
    .pipe(plugins.sass(getPluginConfig('gulp-sass')).on('error', plugins.sass.logError))
    .pipe(plugins.postcss(processors))
    .on('error', reportPostCssError)
    .pipe(isProd ? noop() : plugins.sourcemaps.write('', {
      sourceMappingURL: function(file) {
          return '/dist/dev/client/' + file.relative.replace(/\\/g, '/') + '.map';
      }
  }))
  .pipe(gulp.dest(isProd ? TMP_CLIENT_DIR : APP_CLIENT_DEST));
}

// Procesa y genera los archivos de estilos main y de dependencias externas
function GenerateMainAndExternalStylesheets() {
  // Obtengo la combinación de streams para CSS y SCSS y los proceso
  return merge(GetMainScssStream(), GetExternalCssStream(), GetExternalScssStream())
    .pipe(isProd ? plugins.concatCss(gulpConcatCssConfig.targetFile, gulpConcatCssConfig.options) : noop())
    .pipe(plugins.postcss(processors))
    .on('error', reportPostCssError)
    .pipe(isProd ? cleanCss() : noop())
    .pipe(gulp.dest(CSS_DEST));
}

// Genera el stream de archivos SCSS para procesamiento de dependencias externas
function GetMainScssStream() {
  // Devuelvo el array de los archivos, pasados por un cache
  return gulp.src([
      join(CSS_SRC, '**', '*.scss'),
      '!' + join(CSS_SRC, '**', '_*.scss')
      ], { base: CSS_SRC })
    .pipe(isProd ? plugins.cached('process-external-scss') : noop())
    .pipe(isProd ? plugins.progeny() : noop())
    .pipe(plugins.sass(getPluginConfig('gulp-sass')).on('error', plugins.sass.logError));
}

// Genera el stream de archivos CSS para procesamiento de dependencias externas
function GetExternalCssStream() {
  // Armo el array de dependencias CSS a incluir
  let globArray: string[] = DEPENDENCIES.filter(dep => /\.css$/.test(dep.src)).map(dep => dep.src);
  // Si el array es vacío, no sigo (falla gulp)
  if (!globArray || !globArray.length) return dummyStream();
  // Devuelvo el array de los archivos, pasados por un cache
  return gulp.src(globArray,{allowEmpty: true})
    .pipe(isProd ? plugins.cached('process-external-css') : noop());
}

// Genera el stream de archivos SCSS para procesamiento de dependencias externas
function GetExternalScssStream() {
  // Armo el array de dependencias SCSS a incluir
  let globArray: string[] = DEPENDENCIES.filter(dep => /\.scss$/.test(dep.src)).map(dep => dep.src);
  // Si el array es vacío, no sigo (falla gulp)
  if (!globArray || !globArray.length) return dummyStream();
  // Devuelvo el array de los archivos, pasados por un cache
  return gulp.src(globArray,{allowEmpty: true})
    .pipe(isProd ? plugins.cached('process-external-scss') : noop())
    .pipe(isProd ? plugins.progeny() : noop())
    .pipe(plugins.sass(getPluginConfig('gulp-sass')).on('error', plugins.sass.logError));
}

// Ejecuta y combina todas las tareas en un stream mergeado
export = () => merge(
  CopyHtmlFilesToTmp(),
  GenerateComponentsStylesheets(),
  GenerateMainAndExternalStylesheets()
);