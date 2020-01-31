import * as DomainRedis from './redis/domain.redis';
import * as VccRedis from './redis/vcc.redis';
import * as RoleRedis from './redis/role.redis';
import * as SessionRedis from './redis/session.redis';
import * as UserRedis from './redis/user.redis';
import * as QueueRedis from './redis/queue.redis';

// Armo un objeto para exportar y junto todas las categorias importadas
let Redis: any = {};
Object.assign(
	Redis,
	DomainRedis,
	VccRedis,
	RoleRedis,
	SessionRedis,
	UserRedis,
	QueueRedis
);

export { Redis };
