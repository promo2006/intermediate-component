import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join, sep, normalize } from 'path';
import * as slash from 'slash';

import {
  APP_CLIENT_BASE,
  APP_CLIENT_DEST,
  APP_CLIENT_SRC,
  CSS_DEST,
  JS_DEST,
  JS_PROD_APP_BUNDLE,
  JS_PROD_SHIMS_BUNDLE,
  TEMPLATE_CONFIG,
} from '../config';
import { TemplateLocalsBuilder } from '../utils';

const plugins = <any>gulpLoadPlugins();

/**
 * Executes the build process, injecting the JavaScript and CSS dependencies into the `index.html` for the production
 * environment.
 */
export = () => {
  return gulp.src(join(APP_CLIENT_SRC, 'index.html'))
    .pipe(injectJs())
    .pipe(injectCss())
    .pipe(plugins.template(new TemplateLocalsBuilder().withStringifiedSystemConfigDev().build(), TEMPLATE_CONFIG))
    .pipe(gulp.dest(APP_CLIENT_DEST));
};

/**
 * Injects the given file array and transforms the path of the files.
 * @param {Array<string>} files - The files to be injected.
 */
function inject(...files: Array<string>) {
    return plugins.inject(gulp.src(files, { read: false }), {
        files,
        transform: transformPath()
    });
}

/**
 * Injects the bundled JavaScript shims and application bundles for the production environment.
 */
function injectJs() {
  return inject(join(JS_DEST, JS_PROD_SHIMS_BUNDLE), join(JS_DEST, JS_PROD_APP_BUNDLE));
}

/**
 * Injects the bundled CSS files for the production environment.
 */
function injectCss() {
  return inject(
    join(CSS_DEST, '**', '*.css'),
    '!' + join(CSS_DEST, '**', 'skin-*.css')
  );
}

/**
 * Transform the path of a dependency to its location within the `dist` directory according to the applications
 * environment.
 */
function transformPath() {
  return function(filepath: string) {
    let path: Array<string> = normalize(filepath).split(sep);
    let slice_after = path.indexOf(APP_CLIENT_DEST);
    if (slice_after>-1) {
      slice_after++;
    } else {
      slice_after = 4;
    }
    arguments[0] = APP_CLIENT_BASE + path.slice(slice_after, path.length).join(sep) + `?${Date.now()}`;
    return slash(plugins.inject.transform.apply(plugins.inject.transform, arguments));
  };
}
