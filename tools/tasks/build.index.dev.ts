import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as merge from 'merge-stream';
import * as slash from 'slash';
import * as replace from 'gulp-replace';
import { join } from 'path';

import { APP_BASE, APP_CLIENT_DEST, APP_CLIENT_SRC, DEPENDENCIES, CSS_DEST, ASSETS_SRC, TEMPLATE_CONFIG } from '../config';
import { TemplateLocalsBuilder } from '../utils';

const plugins = <any>gulpLoadPlugins();


// Función para inyectar librerías y shims en index.html para caso ambiente de desarrollo
function buildIndex() {
  return gulp.src(join(APP_CLIENT_SRC, 'index.html'), { base: APP_CLIENT_SRC })
    .pipe(inject('shims'))
    .pipe(inject('libs'))
    .pipe(inject())
    .pipe(plugins.template(new TemplateLocalsBuilder().withStringifiedSystemConfigDev().build(), TEMPLATE_CONFIG))
    .pipe(gulp.dest(APP_CLIENT_DEST));
}

/**
 * Injects the file with the given name.
 * @param {string} name - The file to be injected.
 */
function inject(name?: string) {
  return plugins.inject(gulp.src(getInjectablesDependenciesRef(name), { read: false }), {
    name,
    transform: transformPath()
  });
}

/**
 * Returns the injectable dependency, mapping its filename to its path.
 * @param {string} name - The dependency to be mapped.
 */
function getInjectablesDependenciesRef(name?: string) {
  return DEPENDENCIES
    .filter(dep => dep['inject'] && dep['inject'] === (name || true))
    .map(mapPath);
}

/**
 * Maps the path of the given dependency to its path according to the applications environment.
 * @param {any} dep - The dependency to be mapped.
 */
function mapPath(dep: any) {
  let envPath = dep.src;
  if (envPath.startsWith(APP_CLIENT_SRC) && !envPath.endsWith('.scss')) {
    envPath = join(APP_CLIENT_DEST, envPath.replace(APP_CLIENT_SRC, ''));
  } else if (envPath.startsWith(APP_CLIENT_SRC) && envPath.endsWith('.scss')) {
    envPath = envPath.replace(ASSETS_SRC, CSS_DEST).replace('.scss', '.css');
  }
  return envPath;
}

/**
 * Transform the path of a dependency to its location within the `dist` directory according to the applications
 * environment.
 */
function transformPath() {
  return function (filepath: string) {
    arguments[0] = join(APP_BASE, filepath) + `?${Date.now()}`;
    return slash(plugins.inject.transform.apply(plugins.inject.transform, arguments));
  };
}
