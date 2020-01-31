// MODELOS DE CUENTA SALDO GENERAL
export class AccountBalance {
    
	constructor(
        public accountId : string,
        public subAccountId : string,
        public systemService : string,
        public countableBalance : number,
        public availableBalance : number,
        public retainedBalance : number
    ) { }
    
}