// MODELOS DE CUENTA GENERAL
export class Account {
	constructor(
        public installationId : string,
        public accountId : string,
        public subAccountId : string,
        public user : string,
        public token : string,
        public level : string,
        public transcriptionRatePerHour : number,
        public transcriptionRatePerSecond : number,
        public semanticAnalysisRatePerTransaction : number,
        public cognitiveAnalysisRatePerTransaction : number
    ) { }
    
}

// MODELO DE CUENTA PARA GRILLA DE CUENTAS Y SUBCUENTAS
export class AccountItem {
    
	constructor(
        public installationId : string,
        public clientName : string,
        public accountId : string,
        public subAccountId : string,
        public user : string,
        public token : string
    ) { }
    
}

// MODEL DE CUENTA PARA ITEMS DE COMBOBOX
export class AccountSelectItem {
    
	constructor(
        public installationId : string,
        public accountId : string,
        public subAccountId : string
    ) { }
    
}

// MODEL GENERAL DE CUENTA PARA TARIFAS
export class AccountRate {
	constructor(
        public accountId : string,
        public subAccountId : string,
        public transcriptionRatePerHour : number,
        public transcriptionRatePerSecond : number,
        public semanticAnalysisRatePerTransaction : number,
        public cognitiveAnalysisRatePerTransaction : number
    ) { }
    
}

// MODEL DE CUENTAS PARA LA GRILLA CUENTAS EN CLIENT DEL SERVIDOR CENTRALIZADO
export class AccountViewModel {

	constructor(
		public installationId: string,
        public clientName: string,
        public accountId: string,
        public subAccountId: string
	) { }
}