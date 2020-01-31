import * as express from 'express';
import * as fallback from 'express-history-api-fallback';
import * as openResource from 'open';
import { resolve } from 'path';
import * as serveStatic from 'serve-static';

import * as codeChangeTool from './code_change_tools';
import { APP_BASE, APP_CLIENT_BASE, APP_CLIENT_PORT, PROD_CLIENT_DEST } from '../../config';

/**
 * Serves the Single Page Application. More specifically, calls the `listen` method, which itself launches BrowserSync.
 */
export function serveSPA() {
  codeChangeTool.listen();
}

/**
 * This utility method is used to notify that a file change has happened and subsequently calls the `changed` method,
 * which itself initiates a BrowserSync reload.
 * @param {any} e - The file that has changed.
 */
export function notifyLiveReload(e:any) {
  let fileName = e.path;
  codeChangeTool.changed(fileName);
}

/**
 * Starts a new `express` server, serving the built files from `dist/prod`.
 */
export function serveProd() {
  let root = resolve(process.cwd(), PROD_CLIENT_DEST);
  let server = express();
  let compression = require('compression');
      server.use(compression());

  server.use(APP_CLIENT_BASE, serveStatic(root));

  server.use(fallback('index.html', { root }));

  server.listen(APP_CLIENT_PORT, () =>
    openResource('http://localhost:' + APP_CLIENT_PORT + APP_BASE)
  );
}
