// MODELO DE CUENTA PARA DETALLE SIMPLE DE LICENCIAS DISPOBNIBLES
export class AvailableLicenseItem {
    
	constructor(
        public installationId : string,
        public product : string,
        public totalLicense : string
    ) { }
    
}