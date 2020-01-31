export class Platform {

	public installationId: string;
	public macAddress: string;
	public baseBoardSerialNumber: string;
	public status: boolean = false;

	constructor() { }
}

// MODELO ENFOCADO A RECIBIR LOS DATOS DE LA TABLA PLATFORMDATA
export class PlatformData {

	constructor(
		public platformHash: string,
		public installationId: string,
		public clientName: string,
		public clientContactName: string,
		public clientContactEmail: string,
		public transcriptionRatePerHour: number,
		public transcriptionRatePerSecond: number,
		public semancticAnalysisRatePerTransaction: number,
		public cognitiveAnalysisRatePerTransaction: number
	) { }
}

export class PlatformViewModel {

	constructor(
		public platformHash: string,
		public installationId: string,
		public publicIp: string,
		public macAddress: string,
		public baseBoardSerialNumber: string,
		public activationDate: Date,
		public ActivationHash: Date,
		public clientName: string,
		public clientContactName: string,
		public clientContactEmail: string,
		public createdDate: Date
	) { }
}


