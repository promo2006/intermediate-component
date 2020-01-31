import * as browserSync from 'browser-sync';

import { getPluginConfig } from '../../config';

// Timer para hacer el reload cuando hay cambios de codigo
let reloadTimer: NodeJS.Timer = null;

/**
 * Initialises BrowserSync with the configuration defined in config.ts.
 */
let runServer = () => {
  browserSync.init(getPluginConfig('browser-sync'));
};

/**
 * Runs BrowserSync as the listening process for the application.
 */
let listen = () => {
  runServer();
};

/**
 * Provides a flag to mark which files have changed and reloads BrowserSync accordingly.
 */
let changed = (files: any) => {

  if (!(files instanceof Array)) {
    files = [files];
  }

  // Si tengo un timer programado lo limpio
  if (reloadTimer) clearTimeout(reloadTimer);

  // Programo el reload para dentro de 1 segundo
  reloadTimer = setTimeout(() => browserSync.reload(files), 1000);
};

export { listen, changed };
