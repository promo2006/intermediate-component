import { exec } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { Chalk } from 'chalk';

import { JS_DEST, JS_PROD_APP_BUNDLE, SME_DIR } from '../../config';

// Obtengo plugins de gulp
const chalk: Chalk = require('chalk');

const isWin = /^win/.test(process.platform);

const smeOutFormat: string = 'html';
/**
 * Creates a source-map-explorer report with the given task name.
 * @param {string} taskName - The name of the task.
 */
export function createSME(taskName: string) {
  return (): void => {
    let sme = './node_modules/.bin/source-map-explorer';

    if (isWin) {
      sme = '.\\node_modules\\.bin\\source-map-explorer.cmd';
    }

    const task = taskName.replace(/\./g, '_');
    const outFileName = `${task}_${now()}.${smeOutFormat}`;
    const out = join(SME_DIR, outFileName);

    const appBundle = join(JS_DEST, JS_PROD_APP_BUNDLE);
    const appBundleMap = `${appBundle}.map`;

    if (!existsSync(SME_DIR)) {
      mkdirSync(SME_DIR);
    }
    exec(`${sme} --${smeOutFormat} ${appBundle} ${appBundleMap} > ${out}`,
      (error: Error, stdout: string, stderr: string) => {
        if (error !== null) {
          console.error(chalk.red.bold('source-map-explorer error: ' + error + stderr));
          process.exit(1);
        }
      });
  };
}

function now(): string {
  const date = new Date();
  return new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
    .toISOString()
    .replace(/[:.]/g, '_');
}
