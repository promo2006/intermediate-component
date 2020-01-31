import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { resolve } from 'path';

import { APP_SERVER_DEST } from '../config';

const plugins = <any>gulpLoadPlugins();

var jeditor = require('gulp-json-editor');

export = () => {
  return gulp.src('package.json')
    .pipe(jeditor(function(json: any) {
      json.scripts = undefined;
      json.devDependencies = undefined;
      return json;
    }))
    .pipe(gulp.dest(resolve(APP_SERVER_DEST, '..')));
};
