export class User {

	public selected: boolean = false;
	public permissions: any;
	public userClients: UserClient[];
	public vcc: string;

	constructor(
		public id: string,
		public email: string,
		public firstname: string,
		public lastname: string,
		public password: string,
		public role: string,
		public country: string,
		public language: string,
		public timeZone: string,
		public preferences: string,
		public isSystemUser: boolean,
		public limitClients: boolean,
		public createdDate: Date,
		public createdByUserId: string,
		public lastModifiedDate: Date,
		public lastModifiedByUserId: string
	) { }
}

export class UserClient {

	constructor(
		public userId: string,
		public clientId: string
	) { }
}

export class UserNotification {

	constructor(
		public userIndicatorId: string,
		public vcc: string,
		public indicatorId: string,
		public userId: string,
		public title: string,
		public description: string,
		public type: string,
		public sendDate: Date,
		public opened: boolean,
		public createdDate: Date
	) { }
}

export class UserIndicator {

	constructor(
		public id: string,
		public indicatorId: string,
		public userId: string,
		public customQuery: string,
		public customParams: string,
		public expectedOperator: string,
		public expectedValue: string,
		public lastKnownValue: string,
		public lastModification: Date,
		public receiveByMail: boolean,
		public receiveByBrowser: boolean,
		public reference: string,
		public timeSchedule: string,
		public silentCriteria: string,
		public silent: boolean
	) { }
}

export class UserSocketMessage {
	constructor(
		public id: string,
		public message: string
	) { }
}

export class UserAccessToken {

	constructor(
		public vcc: string,
		public accessToken: string,
		public createdDate: Date
	) { }
}

export class UserAPI {

	constructor(
		public vcc: string,
		public id: string,
		public params: string
	) { }
}
