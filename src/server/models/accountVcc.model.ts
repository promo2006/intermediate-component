// MODELOS DE CUENTA VCC GENERAL
export class AccountVcc {
    
	constructor(
        public installationId : string,
        public accountId : string,
        public subAccountId : string,
        public transcriptionRatePerHour : number,
        public transcriptionRatePerSecond : number,
        public semanticAnalysisRatePerTransaction : number,
        public cognitiveAnalysisRatePerTransaction : number,
        public vcc : string
    ) { }
    
}