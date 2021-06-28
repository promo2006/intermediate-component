import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { resolve } from 'path';

import { APP_NAME, APP_VERSION, DIST_DIR, APP_DATABASE_SRC } from '../config';

const plugins = <any>gulpLoadPlugins();

const scripts = [
  resolve(APP_DATABASE_SRC, 'mssql', 'database.sql'),
  resolve(APP_DATABASE_SRC, 'mssql', 'props.sql'),
  resolve(APP_DATABASE_SRC, 'mssql', 'schemas.sql'),
  resolve(APP_DATABASE_SRC, 'mssql', 'users', '**'),
  resolve(APP_DATABASE_SRC, 'mssql', 'tables', '**'),
  resolve(APP_DATABASE_SRC, 'mssql', 'functions', '**'),
  resolve(APP_DATABASE_SRC, 'mssql', 'procedures', '**'),
  resolve(APP_DATABASE_SRC, 'mssql', 'data', '**'),
  resolve(APP_DATABASE_SRC, 'mssql', 'initial', '**')
];

export = () => {
  return gulp.src(scripts,{allowEmpty: true})
    .pipe(plugins.count('## sql files selected for bundle'))
    .pipe(plugins.concat(APP_NAME + '_' + APP_VERSION + '_database.sql'))
    .pipe(plugins.replace(/CREATE OR ALTER/g, 'CREATE'))
    .pipe(gulp.dest(resolve(DIST_DIR)));
};
