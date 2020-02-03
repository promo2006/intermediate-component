import * as sy from 'systeminformation';

//import { CENTRALIZED_API_BASE_URL } from '../config/config';
import * as request from 'request-promise-native';

import { DummyPromise } from './shared/promises.shared';

// Billing.
const CENTRALIZED_API_BASE_URL: string = 'http://localhost:9002/';

export function InconcertRequest(installationId : string, path : string, data : any): Promise<any> {
    let systemInformationData: any = null;

    return DummyPromise()
    .then(
        result => {
            // Validamos que retorne datos.
            if (installationId && path && data)  
                // Instanciamos la información del servidor
                return this.GetSystemInformation(installationId);
            else
                throw 'SERVER_ERROR_MISSING_REQUIRED_PARAMETERS';
        }
    )
    .then(
        result => {
            // Asignamos el valor de la función GetSystemInformation.
            systemInformationData = result;

            let plaformHash: string = '';

            if (systemInformationData) {
                // Obtenemos el contenido en formato md5.
                plaformHash = this.GenerateMD5Content(systemInformationData);
            }

            // Configuramos el objeto para realizar el request.
            let options: any = {
                method: 'POST',
                uri: CENTRALIZED_API_BASE_URL + 'api/activation/activate_platform',
                body: data,
                headers: {
                    'Content-Type': 'application/json',
                    'Platform-Hash': plaformHash
                },
                json: true, // Automáticamente stringifies body a JSON.
                resolveWithFullResponse: false
            };

            return request(options);
        }
    )
    .then(
        result => {
            // Si falla el request retornamor mensaje de fallo
            if (result === null)
                throw 'SERVER_ERROR_EXTERNAL_REQUEST_FAILED';

            // Retornamos el resultado del request
            return Promise.resolve(result);
        }
    )
    .catch(
        (err: any) => {

            // Obtenemos mensajes de error.
            let clientMsg: string = (typeof err === 'string' ? err : 'Cannot process request');
            let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || 'SERVER_ERROR_REQUESTING_ERROR');

            // Escribo el error en el log.
            //logger.error(errorMsg);

            // Hago reject y devuelvo el error.
            return Promise.reject(err);
        }
    );
}

// Método para obtener la información del sistema donde se encuenta instalado.
function GetSystemInformation(instalationId: string): Promise<any> {

    // Definimos variable que contendrá la información del sistema necesaria.
    let systemInformationData: any = {
        installationId: instalationId,
        macAddress: '',
        baseboardSerialNumber: ''
    };

    return DummyPromise()
    .then(
        (result: boolean) => {
            // Instanciamos la información de la baseboard
            let sys: any = sy.baseboard();
            
            return sys;
        }
    )
    .then(
        (result: any) => {

            // Asignamos el serial.
            systemInformationData.baseboardSerialNumber = result.serial;

            let sys = sy.networkInterfaces();

            // Por defecto, retorna información de las tarjatas que se tengan instaladas. Se debe filtrar por la tarjeta de red que se encuentre habilitada.
            return sys;
        }
    )
    .then(
        (result: sy.Systeminformation.NetworkInterfacesData[]) => {
            // Validamos que existan datos.
            if (result && result.length) {

                // Asignamos la mac.
                systemInformationData.macAddress = result[0].mac;
            }

            // Retornamos el objeto con los datos recopilados.
            return Promise.resolve(systemInformationData);
        }
    )
    .catch(
        (err: any) => {
            // Retornamos false.
            //return Promise.resolve(false);

            // Obtengo mensaje de error.
			let errorMsg: string = (err && err.procName ? 'Error al ejecutar \'' + err.procName + '\': ' : 'Error al ejecutar consulta: ') + (err ? typeof err === 'string' ? err : err.message || err.description || '' : '');

			// Hago reject y devuelvo el error.
			return Promise.reject(err);
        }
    );
}