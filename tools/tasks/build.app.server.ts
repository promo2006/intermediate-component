import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as merge from 'merge-stream';
import * as log from 'fancy-log';
import { Chalk } from 'chalk';
import { join, resolve } from 'path';

import { APP_SERVER_SRC, APP_SERVER_DEST, TOOLS_DIR, TEMPLATE_CONFIG } from '../config';
import { makeTsProject, TemplateLocalsBuilder } from '../utils';

// Obtengo plugins de gulp
const chalk: Chalk = require('chalk');
const plugins = <any>gulpLoadPlugins();

// Flag de primera ejecución
let firstTime: boolean = true;

// Ejecuta transpile del app.server
export = () => {
  // Proyecto de compilación TS
  let tsProject: any;
  // Archivos de typings locales
  let typings = gulp.src([
    TOOLS_DIR + '/manual_typings/**/*.d.ts'
  ]);
  // Archivos a compilar
  let projectFiles = gulp.src([
    join(APP_SERVER_SRC, '../app.server.ts'),
  ]);

  // Solo uso los typings en la primer compilación
  if (firstTime) {
    // La primera vez ejecuto build usando los typings manuales
    tsProject = makeTsProject({}, APP_SERVER_SRC);
    projectFiles = merge(typings, projectFiles);
  } else {
    // Las siguientes los hago typeless para acelerar
    tsProject = makeTsProject({ /* isolatedModules: true */ }, APP_SERVER_SRC);
    projectFiles = projectFiles.pipe(plugins.cached());
    log('Fastbuild ' + chalk.cyan('Ejecutando compilación typeless.'));
  }

  // Actualizo flag
  firstTime = false;

  // Inicializo proyecto
  let result: any = projectFiles
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(tsProject());

  // Ejecuto la compilación y copio el resultado en carpeta destino
  return result.js
    .pipe(plugins.sourcemaps.write({ includeContent: false, sourceRoot: resolve('./src') }))
    .pipe(plugins.template(new TemplateLocalsBuilder().withStringifiedSystemConfigDev().build(), TEMPLATE_CONFIG))
    .pipe(gulp.dest(resolve(APP_SERVER_DEST, '..')));
};
