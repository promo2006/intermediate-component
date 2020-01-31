import * as AccountMSSql from './mssql/account.mssql';
import * as AccountBalanceMSSql from './mssql/accountBalance.mssql';
import * as AccountVccMSSql from './mssql/accountVcc.mssql';
import * as AuthMSSql from './mssql/auth.mssql';
import * as DomainMSSql from './mssql/domain.mssql';
import * as VCCMSSql from './mssql/vcc.mssql';
import * as HomeMSSql from './mssql/home.mssql';
import * as NotificationMSSql from './mssql/notification.mssql';
import * as RoleMSSql from './mssql/role.mssql';
import * as UserMSSql from './mssql/user.mssql';
import * as EnvironmentMSSql from './mssql/platform.mssql';
import * as IntegrationMSSql from './mssql/integration.mssql';
import * as LicenseMSSql from './mssql/license.mssql';
import * as PlatformMSSql from './mssql/platform.mssql';
import * as PlatformDataMSSql from './mssql/platformData.mssql';
import * as PlatformLicenseMSSql from './mssql/platformLicense.mssql';
import * as ClientMSSql from './mssql/client.mssql';

// Armo un objeto para exportar y junto todas las categorias importadas.
let MSSql: any = {};
Object.assign(
	MSSql,
	AccountMSSql,
	AccountBalanceMSSql,
	AccountVccMSSql,
	AuthMSSql,
	DomainMSSql,
	VCCMSSql,
	HomeMSSql,
	NotificationMSSql,
	RoleMSSql,
	UserMSSql,
	EnvironmentMSSql,
	IntegrationMSSql,
	LicenseMSSql,
	PlatformMSSql,
	PlatformDataMSSql,
	PlatformLicenseMSSql,
	ClientMSSql
);

export { MSSql };
