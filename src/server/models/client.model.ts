export class Client {

	constructor(
		public id: string,
		public clientName: string,
		public createdDate: Date,
		public createdByUserId: string,
		public lastModifiedDate: Date,
		public lastModifiedByUserId: string
	) { }
}
