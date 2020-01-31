import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as merge from 'merge-stream';
import * as tslint from 'tslint';
import { join } from 'path';

import { APP_CLIENT_SRC, APP_SERVER_SRC, CODELYZER_RULES, TOOLS_DIR } from '../config';

const plugins = <any>gulpLoadPlugins();

// Ejecuta el chequeo de tslint para todos los archivos .ts y .js usando las validaciones nativas y algunas de codelyzer
export = () => {

  function lintClientSources() {

    let src = [
      join(APP_CLIENT_SRC, '**/*.ts'),
      '!' + join(APP_CLIENT_SRC, '**/*.d.ts')
    ];

    // Obtengo objeto programa ts para habilitar el type-checking en el tslint
    let program: any = tslint.Linter.createProgram('src/client/tsconfig.json');

    return gulp.src(src)
      .pipe(plugins.tslint({
        program: program,
        formatter: 'verbose',
        rulesDirectory: CODELYZER_RULES
      }))
      .pipe(plugins.tslint.report({
        emitError: require('is-ci'),
        sort: true,
        bell: true
      }));
  }

  function lintServerAndToolsSources() {

    let src = [
      join(APP_SERVER_SRC, '**/*.ts'),
      '!' + join(APP_SERVER_SRC, '**/*.d.ts'),
      join(APP_SERVER_SRC, 'static/js/*.js'),
      join(TOOLS_DIR, '**/*.ts'),
      '!' + join(TOOLS_DIR, '**/*.d.ts')
    ];

    // Obtengo objeto programa ts para habilitar el type-checking en el tslint
    let program: any = tslint.Linter.createProgram('tsconfig.json');

    return gulp.src(src)
      .pipe(plugins.tslint({
        //program: program,
        formatter: 'verbose',
        rulesDirectory: CODELYZER_RULES
      }))
      .pipe(plugins.tslint.report({
        emitError: require('is-ci'),
        sort: true,
        bell: true
      }));
  }

  return merge(lintClientSources(), lintServerAndToolsSources());
};
