import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { resolve } from 'path';
import * as merge from 'merge-stream';


import { APP_NAME, APP_VERSION, DIST_DIR, APP_DATABASE_SRC } from '../config';

const plugins = <any>gulpLoadPlugins();

const scripts = {
  database:  resolve(APP_DATABASE_SRC, 'mssql', 'database.sql'),
  procedures:  resolve(APP_DATABASE_SRC, 'mssql', 'procedures', '**'),
  tables: [
    resolve(APP_DATABASE_SRC, 'mssql', 'tables', '**'),
    resolve(APP_DATABASE_SRC, 'mssql', 'functions', '**'),
    //resolve(APP_DATABASE_SRC, 'mssql', 'props.sql')
  ],
  data: [
    resolve(APP_DATABASE_SRC, 'mssql', 'data', '**')
  ]
};

function createDataBaseScript() {
  return gulp.src(scripts.database)
    .pipe(plugins.count('## sql files selected for bundle'))
    .pipe(plugins.concat(APP_NAME + '_' + APP_VERSION + '_testing_database.sql'))
    .pipe(gulp.dest(resolve(DIST_DIR)));
}

function createProceduresScript() {
  return gulp.src(scripts.procedures)
    .pipe(plugins.count('## sql files selected for bundle'))
    .pipe(plugins.concat(APP_NAME + '_' + APP_VERSION + '_testing_procedures.sql'))
    .pipe(gulp.dest(resolve(DIST_DIR)));
}

function createTablesScript() {
  return gulp.src(scripts.tables)
    .pipe(plugins.count('## sql files selected for bundle'))
    .pipe(plugins.concat(APP_NAME + '_' + APP_VERSION + '_testing_structure.sql'))
    .pipe(gulp.dest(resolve(DIST_DIR)));
}

function createDataScript() {
  return gulp.src(scripts.data)
    .pipe(plugins.count('## sql files selected for bundle'))
    .pipe(plugins.concat(APP_NAME + '_' + APP_VERSION + '_testing_data.sql'))
    .pipe(gulp.dest(resolve(DIST_DIR)));
}

export = () => merge(createDataBaseScript(), createTablesScript(), createDataScript(), createProceduresScript());
