import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { resolve, join } from 'path';

import { APP_NAME, APP_VERSION, DIST_DIR, DIST_PROD_DIR } from '../config';

const plugins = <any>gulpLoadPlugins();

export = () => {
  return gulp.src(join(DIST_PROD_DIR, '**'))
        .pipe(plugins.rename(function(path: any) {
            path.dirname = join('intermediate-component-sa', path.dirname);
        }))
        .pipe(plugins.tar(APP_NAME + '_' + APP_VERSION + '.tar'))
        .pipe(plugins.gzip())
        .pipe(gulp.dest(DIST_DIR));
};
