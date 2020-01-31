export const MSSQL_HOST = '192.168.2.199';
export const MSSQL_PORT = 1433;
export const MSSQL_USER = '';
export const MSSQL_PASSWORD = '';
export const MSSQL_DATABASE = 'Testing_Billing';
export const MSSQL_CONN_TIMEOUT = 30 * 1000;
export const MSSQL_REQ_TIMEOUT = 300 * 1000;
export const MSSQL_POOL_MIN = 0;
export const MSSQL_POOL_MAX = 50;
export const MSSQL_POOL_IDLE_TIMEOUT = 24 * 60 * 60 * 1000;
export const MSSQL_ENCRYPT = false;
export const MSSQL_USE_UTC = true;
export const MSSQL_CONFIG = {
	user: MSSQL_USER,
	password: MSSQL_PASSWORD,
	server: MSSQL_HOST,
	database: MSSQL_DATABASE,
	port: MSSQL_PORT,
	connectionTimeout: MSSQL_CONN_TIMEOUT,
	requestTimeout: MSSQL_REQ_TIMEOUT,
	pool: {
		max: MSSQL_POOL_MAX,
		min: MSSQL_POOL_MIN,
		idleTimeoutMillis: MSSQL_POOL_IDLE_TIMEOUT
	},
	options: {
		encrypt: MSSQL_ENCRYPT,
		useUTC: MSSQL_USE_UTC
	}
};
