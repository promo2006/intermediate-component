import * as autoprefixer from 'autoprefixer';
import * as cssnano from 'cssnano';
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as log from 'fancy-log';
import { Chalk } from 'chalk';
import { join } from 'path';

import {
  BROWSER_LIST,
  SKINS_SRC,
  CSS_DEST,
  ENV,
  getPluginConfig,
} from '../config';

// Obtengo plugins de gulp
const plugins = <any>gulpLoadPlugins();
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

export = () => {
  return gulp.src([
      join(SKINS_SRC, '**', '*.scss'),
      '!' + join(SKINS_SRC, '**', '_*.scss')
    ], {base: SKINS_SRC})
    .pipe(plugins.sass(getPluginConfig('gulp-sass')).on('error', plugins.sass.logError))
    .pipe(plugins.postcss(processors))
    .on('error', reportPostCssError)
    .pipe(gulp.dest(CSS_DEST));
};
