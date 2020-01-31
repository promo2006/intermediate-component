import { join } from 'path';
import * as Builder from 'systemjs-builder';

import {
  BOOTSTRAP_MODULE,
  JS_PROD_APP_BUNDLE,
  JS_DEST,
  SYSTEM_JS_CONFIG_PROD,
  TMP_CLIENT_DIR,
  PRESERVE_SOURCE_MAPS,
} from '../config';

const BUNDLER_OPTIONS = {
  format: 'cjs',
  minify: true,
  mangle: false,
  sourceMaps: PRESERVE_SOURCE_MAPS,
};

/**
 * Executes the build process, bundling the JavaScript files using the SystemJS builder.
 */
export = (done: any) => {
  let builder = new Builder(SYSTEM_JS_CONFIG_PROD);
  builder
    .buildStatic(join(TMP_CLIENT_DIR, BOOTSTRAP_MODULE),
                 join(JS_DEST, JS_PROD_APP_BUNDLE),
                 BUNDLER_OPTIONS)
    .then(() => done())
    .catch((err: any) => done(err));
};
