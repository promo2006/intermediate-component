import * as autoprefixer from 'autoprefixer';
import * as cssnano from 'cssnano';
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as merge from 'merge-stream';
import * as log from 'fancy-log';
import { Chalk } from 'chalk';
import { join } from 'path';
import { noop } from '../utils';

import {
  APP_CLIENT_DEST,
  APP_CLIENT_SRC,
  BROWSER_LIST,
  CSS_DEST,
  CSS_SRC,
  DEPENDENCIES,
  ENABLE_SCSS,
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

/**
 * Copies all HTML files in `src/client` over to the `dist/tmp` directory.
 */
function prepareTemplates() {
  return gulp.src(join(APP_CLIENT_SRC, '**', '*.html'))
    .pipe(gulp.dest(TMP_CLIENT_DIR));
}

/**
 * Execute the appropriate component-stylesheet processing method based on user stylesheet preference.
 */
function processComponentStylesheets() {
  return ENABLE_SCSS ? processComponentScss() : processComponentCss();
}

/**
 * Process scss files referenced from Angular component `styleUrls` metadata
 */
function processComponentScss() {
  return gulp.src(join(APP_CLIENT_SRC, '**', '*.scss'))
    .pipe(isProd ? plugins.cached('process-component-scss') : noop())
    .pipe(isProd ? plugins.progeny() : noop())
    .pipe(isProd ? noop() : plugins.sourcemaps.init())
    .pipe(plugins.sass(getPluginConfig('gulp-sass')).on('error', plugins.sass.logError))
    .pipe(plugins.postcss(processors))
    .on('error', reportPostCssError)
    .pipe(isProd ? noop() : plugins.sourcemaps.write(''))
    .pipe(gulp.dest(isProd ? TMP_CLIENT_DIR : APP_CLIENT_DEST));
}

/**
 * Processes the CSS files within `src/client` excluding those in `src/client/assets` using `postcss` with the
 * configured processors.
 */
function processComponentCss() {
  return gulp.src([
    join(APP_CLIENT_SRC, '**', '*.css'),
    '!' + join(APP_CLIENT_SRC, 'assets', '**', '*.css')
  ])
    .pipe(isProd ? plugins.cached('process-component-css') : noop())
    .pipe(plugins.postcss(processors))
    .on('error', reportPostCssError)
    .pipe(gulp.dest(isProd ? TMP_CLIENT_DIR : APP_CLIENT_DEST));
}

/**
 * Execute external-stylesheet processing method based on presence of --scss flag.
 */
function processExternalStylesheets() {
  return ENABLE_SCSS ? processAllExternalStylesheets() : processExternalCss();
}

/**
 * Process scss stylesheets located in `src/client/css` and any css dependencies specified in
 * the global project configuration.
 */
function processAllExternalStylesheets() {
  return merge(getExternalCssStream(), getExternalScssStream())
    .pipe(isProd ? plugins.concatCss(gulpConcatCssConfig.targetFile, gulpConcatCssConfig.options) : noop())
    .pipe(plugins.postcss(processors))
    .on('error', reportPostCssError)
    .pipe(isProd ? cleanCss() : noop())
    .pipe(gulp.dest(CSS_DEST));
}

/**
 * Get a stream of external css files for subsequent processing.
 */
function getExternalCssStream() {
  return gulp.src(getExternalCss())
    .pipe(isProd ? plugins.cached('process-external-css') : noop());
}

/**
 * Get an array of filenames referring to all external css stylesheets.
 */
function getExternalCss() {
  return DEPENDENCIES.filter(dep => /\.css$/.test(dep.src)).map(dep => dep.src);
}

/**
 * Get a stream of external scss files for subsequent processing.
 */
function getExternalScssStream() {
  return gulp.src(getExternalScss())
    .pipe(isProd ? plugins.cached('process-external-scss') : noop())
    .pipe(isProd ? plugins.progeny() : noop())
    .pipe(plugins.sass(getPluginConfig('gulp-sass')).on('error', plugins.sass.logError));
}

/**
 * Get an array of filenames referring to external scss stylesheets located in the global DEPENDENCIES
 * as well as in `src/css`.
 */
function getExternalScss() {
  return DEPENDENCIES.filter(dep => /\.scss$/.test(dep.src)).map(dep => dep.src)
    .concat([join(CSS_SRC, '**', '*.scss')]);
}

/**
 * Processes the external CSS files using `postcss` with the configured processors.
 */
function processExternalCss() {
  return getExternalCssStream()
    .pipe(plugins.postcss(processors))
    .pipe(isProd ? plugins.concatCss(gulpConcatCssConfig.targetFile, gulpConcatCssConfig.options) : noop())
    .on('error', reportPostCssError)
    .pipe(isProd ? cleanCss() : noop())
    .pipe(gulp.dest(CSS_DEST));
}

/**
 * Executes the build process, processing the HTML and CSS files.
 */
export = () => merge(processComponentStylesheets(), prepareTemplates(), processExternalStylesheets());
