import * as gulp from 'gulp';
import * as log from 'fancy-log';
import { Chalk } from 'chalk';
import { join } from 'path';

import { APP_SERVER_SRC, APP_SERVER_DEST } from '../config';

// Obtengo plugins de gulp
const chalk: Chalk = require('chalk');

// Flag de primera ejecución
let firstTime: boolean = true;

// Copia los archivos de la carpeta del servidor hacia el destino
export = () => {

  // Armo la lista de carpeta origen
  let src = gulp.src([
    join(APP_SERVER_SRC, '**/*.*'),
    '!' + join(APP_SERVER_SRC, '**/*.ts'),
    '!' + join(APP_SERVER_SRC, 'static/libs/grapesjs/inconcert/**/*.js'),
    '!' + join(APP_SERVER_SRC, 'static/libs/grapesjs/inconcert/**/*.css'),
    '!' + join(APP_SERVER_SRC, 'static/libs/grapesjs/inconcert/**/*.scss'),
    '!' + join(APP_SERVER_SRC, 'static/libs/grapesjs/countdown/**/*.js'),
    '!' + join(APP_SERVER_SRC, 'static/libs/grapesjs/forms/**/*.js'),
    ...(firstTime ? [] : ['!' + join(APP_SERVER_SRC, 'template/views/**/*')]),
    '!' + join(APP_SERVER_SRC, 'tsconfig.json')
  ], {base: APP_SERVER_SRC});

  // Escribo a log
  if (!firstTime) log('Fastbuild ' + chalk.cyan('Excluyendo carpeta de templates.'));

  // Actualizo flag
  firstTime = false;

  // Copio los archivos a la carpeta destino
  return src.pipe(gulp.dest(APP_SERVER_DEST));
};
