import * as sy from 'systeminformation';
import * as md5 from 'md5';

//import { CENTRALIZED_API_BASE_URL } from '../config/config';
import * as request from 'request-promise-native';
import { RoutesCentralized } from './routes-centralized';

//import { DummyPromise } from './shared/promises.shared';

// Billing.
const CENTRALIZED_API_BASE_URL: string = 'http://localhost:9002/';

/*
const fs = require('fs');
const zlib = require('zlib');
const readStream = fs.createReadStream('./file.txt');
const gzipStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./newfile.txt');

readStream
.pipe(gzipStream)
.pipe(writeStream);
*/

export function InconcertRequest(installationId : string, path : string, data : any): Promise<any> {
    let systemInformationData: any = null;
    let route:string=RoutesCentralized[path];

    return DummyPromise()
    .then(
        result => {
            // Validamos que retorne datos.
            if (installationId && route && data)  
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
                uri: CENTRALIZED_API_BASE_URL +route ,
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
export function GetSystemInformation(instalationId: string): Promise<any> {

    // Definimos variable que contendrá la información del sistema necesaria.
    let systemInformationData: any = {
        installationId: instalationId,
        macAddress: '',
        publicIp: ''
    };

    return DummyPromise()
    .then(
        (result: any) => {
            // Solicitamos a la librería las interfaces de red
            let sys = sy.networkInterfaces();

            // Por defecto, retorna información de las tarjatas que se tengan instaladas. Se debe filtrar por la tarjeta de red que se encuentre habilitada.
            return sys;
        }
    )
    .then(
        (result: sy.Systeminformation.NetworkInterfacesData[]) => {
            if (result === null)
                throw 'SERVER_ERROR_NOT_FOUND_NETWORK_INTERFACE_INFORMATION';
            
            // Validamos que existan datos.
            if (result && result.length) {

                // Declaramos un objeto para el resultados válido
                let myNetworkInterface : any = null;
                
                // Recuperamos los datos de la interface de red activa
                myNetworkInterface = result.filter(r => r.operstate === 'up')[0];
                
                // Asignamos la mac
                //systemInformationData.macAddress = result[0].mac;
                systemInformationData.macAddress = myNetworkInterface.mac;
                systemInformationData.ip = myNetworkInterface.ip4;
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

export function GenerateMD5Content(data: any): string {
    let result: string = '';

    // Validamos que no sea null.
    if (data) {
        // Generamos el contenido de archivo .lic con el formato adecuado y luego lo convertimos en md5.
        result += data.installationId;
        result += data.macAddress;
        //result += data.baseboardSerialNumber;

        result = md5(result);
    }

    // Retornamos contenido en formato md5.
    return result;
}

export function DummyPromise(): Promise<boolean> {
    // Devuelvo promesa dummy que siempre resuelve true
    return new Promise(function(resolve, reject) {
        resolve(true);
    });
}

// Enviamos solicitud.
export function Login(user: string, password: string): Promise<any> {
	console.log('Login por API i6', JSON.stringify({ user: user, password: password }));
	let data = { user: user, password: password };
	let postOptions = {
		uri: 'http' + '://cls4-cgn-mia.i6.inconcertcc.com/inconcert/api/login/'
		, method: 'POST'
		, body: data
		, headers: {
			'Content-Type': 'application/json'
		}
		, json: true
		, strictSSL: false
	};
	return request(postOptions)
		.then((response: any) => {
			let status = (response && response.status) ? true : false;
			let message = (response && response) ? response : '';
			return Promise.resolve({ status: status, accessToken: message.token });
		})
		.catch((err: any) => {
			console.log('Login: Error ' + err.message);
			return Promise.resolve({ status: false, body: err.message });
		});
}