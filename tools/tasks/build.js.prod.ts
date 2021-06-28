import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';

import { APP_CLIENT_SRC, TMP_CLIENT_DIR, TOOLS_DIR, BOOTSTRAP_MODULE_AOT, TEMPLATE_CONFIG } from '../config';
import { makeTsProject, TemplateLocalsBuilder } from '../utils';

const plugins = <any>gulpLoadPlugins();

const INLINE_OPTIONS = {
  base: TMP_CLIENT_DIR,
  useRelativePaths: true,
  removeLineBreaks: true
};

/**
 * Executes the build process, transpiling the TypeScript files for the production environment.
 */
export = () => {

  let tsProject = makeTsProject({}, APP_CLIENT_SRC);

  let src = [
    TOOLS_DIR + '/manual_typings/**/*.d.ts',
    join(TMP_CLIENT_DIR, '**/*.ts'),
    '!' + join(TMP_CLIENT_DIR, '/' + BOOTSTRAP_MODULE_AOT + '.ts'),
  ];

  let result = gulp.src(src, { base: TMP_CLIENT_DIR })
    .pipe(plugins.plumber())
    .pipe(plugins.inlineNg2Template(INLINE_OPTIONS))
    .pipe(tsProject())
    .once('error', function () {
      this.once('finish', () => process.exit(1));
    });

  return result.js
    .pipe(plugins.template(new TemplateLocalsBuilder().withStringifiedSystemConfigDev().build(), TEMPLATE_CONFIG))
    .pipe(gulp.dest(TMP_CLIENT_DIR));
};
