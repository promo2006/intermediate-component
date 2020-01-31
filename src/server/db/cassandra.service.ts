import * as IntegrationCassandraSql from './cassandra/integration.cassandra';

// Armo un objeto para exportar y junto todas las categorias importadas.
let CassandraSql: any = {};

Object.assign(
	CassandraSql,
	IntegrationCassandraSql
);

export { CassandraSql };