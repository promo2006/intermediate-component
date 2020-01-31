import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as merge from 'merge-stream';
import * as log from 'fancy-log';
import { Chalk } from 'chalk';
import { join } from 'path';

import { APP_CLIENT_DEST, APP_CLIENT_SRC, BOOTSTRAP_MODULE_AOT, TOOLS_DIR, TYPED_COMPILE_INTERVAL, TEMPLATE_CONFIG } from '../config';
import { makeTsProject, TemplateLocalsBuilder } from '../utils';

// Obtengo plugins de gulp
const chalk: Chalk = require('chalk');
const plugins = <any>gulpLoadPlugins();

// Flag de primera ejecución
let firstTime: boolean = true;

// Ejecuta transpile de los archivos typescript del cliente
export = () => {
  // Proyecto de compilación TS
  let tsProject: any;
  // Archivos de typings locales
  let typings = gulp.src([
    TOOLS_DIR + '/manual_typings/**/*.d.ts'
  ]);
  // Archivos a compilar
  let projectFiles = gulp.src([
    join(APP_CLIENT_SRC, '**/*.ts'),
    '!' + join(APP_CLIENT_SRC, '/' + BOOTSTRAP_MODULE_AOT + '.ts'),
    '!' + join(APP_CLIENT_SRC, '**/*.spec.ts'),
    '!' + join(APP_CLIENT_SRC, '**/*.e2e-spec.ts'),
  ]);

  // Solo uso los typings en la primer compilación
  if (firstTime) {
    // La primera vez ejecuto build usando los typings manuales
    tsProject = makeTsProject({}, APP_CLIENT_SRC);
    projectFiles = merge(typings, projectFiles);
  } else {
    // Las siguientes los hago typeless para acelerar
    tsProject = makeTsProject({ /* isolatedModules: true */ }, APP_CLIENT_SRC);
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

  return result.js
    .pipe(plugins.sourcemaps.write())
    // Use for debugging with Webstorm/IntelliJ
    // https://github.com/mgechev/angular-seed/issues/1220
    //    .pipe(plugins.sourcemaps.write('.', {
    //      includeContent: false,
    //      sourceRoot: (file: any) =>
    //        relative(file.path, Config.PROJECT_ROOT + '/' + Config.APP_SRC).replace(sep, '/') + '/' + Config.APP_SRC
    //    }))
    .pipe(plugins.template(new TemplateLocalsBuilder().withStringifiedSystemConfigDev().build(), TEMPLATE_CONFIG))
    .pipe(gulp.dest(APP_CLIENT_DEST));
};
