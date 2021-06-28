import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';

import { TMP_SERVER_DIR, TOOLS_DIR, APP_SERVER_SRC, APP_SERVER_DEST, TEMPLATE_CONFIG } from '../config';
import { makeTsProject, TemplateLocalsBuilder } from '../utils';

const plugins = <any>gulpLoadPlugins();

/**
 * Executes the build process, transpiling the TypeScript files for the production environment.
 */

export = () => {
  let tsProject = makeTsProject({}, APP_SERVER_SRC);
  let src = [
    TOOLS_DIR + '/manual_typings/**/*.d.ts',
    join(TMP_SERVER_DIR, '**/*.ts')
  ];
  let result = gulp.src(src, {base: TMP_SERVER_DIR})
    .pipe(plugins.plumber())
    .pipe(tsProject())
    .once('error', function () {
      this.once('finish', () => process.exit(1));
    });


  return result.js
    .pipe(plugins.template(new TemplateLocalsBuilder().withStringifiedSystemConfigDev().build(), TEMPLATE_CONFIG))
    .pipe(gulp.dest(APP_SERVER_DEST));
};
