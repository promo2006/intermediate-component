export class Domain {

    public selected: boolean = false;
	public associatedDistributedServiceData: Domain;

	constructor(
		public domain: string,
		public description: string,
		public client: string,
		public hasHttps: boolean,
		public contentPort: string,
        public prefix: string,
		public isMainDomain: boolean,
		public isContentDomain: boolean,
		public contentDefaultRedirect: string,
		public isDistributedService: boolean,
		public associatedDistributedService: string,
		public customCode: string,
        public createdDate: Date,
        public createdByUserId: string,
        public lastModifiedDate: Date,
        public lastModifiedByUserId: string
	) { }
}
