import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';
import ts = require('gulp-typescript/release/main');

import { APP_CLIENT_SRC, APP_NAME } from '../../config';

const plugins = <any>gulpLoadPlugins();

let tsProjects: any = {};

/**
 * Creates a TypeScript project with the given options using the gulp typescript plugin.
 * @param {Object} options - The additional options for the project configuration.
 */
export function makeTsProject(options: ts.Settings = {}, pathToTsConfig: string = APP_CLIENT_SRC, projectName = 'tsconfig.json') {
  let optionsHash = JSON.stringify(options);
  if (!tsProjects[optionsHash]) {
    let config = Object.assign({
      typescript: require('typescript')
    }, options);
    tsProjects[optionsHash] =
      plugins.typescript.createProject(join(pathToTsConfig, projectName), config);
  }
  return tsProjects[optionsHash];
}
