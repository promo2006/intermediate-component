import * as log from 'fancy-log';
import { argv } from 'yargs';
import { join } from 'path';
import { Chalk } from 'chalk';

import * as Config from '../../config';

// Obtengo plugins de gulp
const chalk: Chalk = require('chalk');

/**
 * Builds an object consisting of the base configuration provided by confg/config.ts, the additional
 * project specific overrides as defined in config/project.config.ts and including the base environment config as defined in env/base.ts
 * and the environment specific overrides (for instance if env=dev then as defined in env/dev.ts).
 */
export class TemplateLocalsBuilder {
  private stringifySystemConfigDev = false;
  private stringifyEnvConfig = true;

  withStringifiedSystemConfigDev() {
    this.stringifySystemConfigDev = true;
    return this;
  }

  withoutStringifiedEnvConfig() {
    this.stringifyEnvConfig = false;
    return this;
  }

  build() {
    const configEnvName = argv['env-config'] || argv['config-env'] || 'dev';
    const configPath = Config.getPluginConfig('environment-config');
    const envOnlyConfig = this.getConfig(configPath, configEnvName);
    const baseConfig = this.getConfig(configPath, 'base');

    if (!envOnlyConfig) {
      throw new Error(configEnvName + ' is an invalid configuration name');
    }

    const envConfig = Object.assign({}, baseConfig, envOnlyConfig);

    let locals = Object.assign({},
      Config,
      { ENV_CONFIG: this.stringifyEnvConfig ? JSON.stringify(envConfig) : envConfig }
    );
    if (this.stringifySystemConfigDev) {
      Object.assign(locals, {SYSTEM_JS_CONFIG_DEV: JSON.stringify(Config.SYSTEM_JS_CONFIG_DEV)});
    }
    return locals;
  }

  private getConfig(path: string, env: string) {
    const configPath = join(path, env);
    let config: any;
    try {
      config = JSON.parse(JSON.stringify(require(configPath)));
    } catch (e) {
      config = null;
      log(chalk.red(e.message));
    }

    return config;
  }
}
