import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as merge from 'merge-stream';
import { join } from 'path';

import { APP_SERVER_DEST } from '../config';

const plugins = <any>gulpLoadPlugins();
const cleanCss = require('gulp-clean-css');

// Uso uglify-es para soportar ES6
var uglifyEs = require('uglify-es');
var composer = require('gulp-uglify/composer');
var minify = composer(uglifyEs, console);

// Minifica los archivos estaticos js y css del lado servidor
export = () => {

  function minifyStaticJs() {

    let src = [
      join(APP_SERVER_DEST, 'static/js/*.js'),
      '!' + join(APP_SERVER_DEST, 'static/js/*.min.js')
    ];

    return gulp.src(src)
      .pipe(minify({
        mangle: true
      }))
      .pipe(plugins.rename(function(path: any) {
          path.extname = '.min' + path.extname;
      }))
      .pipe(gulp.dest(join(APP_SERVER_DEST, 'static/js')));
  }

  function minifyStaticCss() {

    let src = [
      join(APP_SERVER_DEST, 'static/css/*.css'),
      '!' + join(APP_SERVER_DEST, 'static/css/*.min.css')
    ];

    return gulp.src(src)
      .pipe(cleanCss())
      .pipe(plugins.rename(function(path: any) {
          path.extname = '.min' + path.extname;
      }))
      .pipe(gulp.dest(join(APP_SERVER_DEST, 'static/css')));
  }

  return merge(minifyStaticJs(), minifyStaticCss());
};
