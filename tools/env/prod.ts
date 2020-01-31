import { EnvConfig } from './env-config.interface';
import { PROD_API_BASE_URL } from '../config';

const ProdConfig: EnvConfig = {
  ENV: 'PROD',
  API: PROD_API_BASE_URL
};

export = ProdConfig;

