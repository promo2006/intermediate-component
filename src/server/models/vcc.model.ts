import { Domain } from '../models/domain.model';

export class VCC {
	public selected: boolean = false;

	constructor(
		public vcc: string,
		public id: string,
		public description: string,
		public country: boolean,
		public language: string,
		public timeZone: string,
		public createdDate: Date,
		public createdByUserId: string,
		public lastModifiedDate: Date,
		public lastModifiedByUserId: string
	) { }
}

export class AzureSubscriptionKey {
	public selected: boolean = false;

	constructor(
		public vcc: string,
		public subscriptionKey: string,
		public subscriptionRegion: string,
		public isDemo: boolean,
		public subscriptionName: string
	) { }
}

export class RequestData {
	public vcc : VCC;
	public azureSubscriptionKey : AzureSubscriptionKey;
	public domain: Domain;
}
