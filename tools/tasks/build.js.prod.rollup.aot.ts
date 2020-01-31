import { readdirSync, lstatSync } from 'fs';
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';

import { TMP_CLIENT_DIR, TOOLS_DIR, BOOTSTRAP_DIR, BOOTSTRAP_MAIN_AOT, TEMPLATE_CONFIG } from '../config';
import { makeTsProject, ngBuildOptimizer, TemplateLocalsBuilder } from '../utils';

const plugins = <any>gulpLoadPlugins();

/**
 * Executes the build process, transpiling the TypeScript files for the production environment.
 */
export = () => {

  const tsProject = makeTsProject(
    {
      target: 'es2015',
      module: 'es2015',
      moduleResolution: 'node'
    },
    TMP_CLIENT_DIR
  );

  const toIgnore = readdirSync(TMP_CLIENT_DIR)
    .filter((f: string) => lstatSync(join(TMP_CLIENT_DIR, f)).isDirectory() && f !== BOOTSTRAP_DIR)
    .map((f: string) => '!' + join(TMP_CLIENT_DIR, f, BOOTSTRAP_MAIN_AOT + '.ts'));

  const src = [
    join(TOOLS_DIR, '/manual_typings/**/*.d.ts'),
    join(TMP_CLIENT_DIR, '**/*.ts'),
    ...toIgnore
  ];

  const result = gulp
    .src(src)
    .pipe(plugins.plumber())
    .pipe(tsProject())
    .once('error', function(e: any) {
      this.once('finish', () => process.exit(1));
    });

  return result.js
    .pipe(plugins.template(new TemplateLocalsBuilder().withStringifiedSystemConfigDev().build(), TEMPLATE_CONFIG))
    .pipe(ngBuildOptimizer())
    .pipe(gulp.dest(TMP_CLIENT_DIR))
    .on('error', (e: any) => {
      console.log(e);
    });
};
