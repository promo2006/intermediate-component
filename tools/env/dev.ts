import { EnvConfig } from './env-config.interface';
import { DEV_API_BASE_URL } from '../config';

const DevConfig: EnvConfig = {
  ENV: 'DEV',
  API: DEV_API_BASE_URL
};

export = DevConfig;
