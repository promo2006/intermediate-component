import * as sy from 'systeminformation';
import * as md5 from 'md5';

//import { CENTRALIZED_API_BASE_URL } from '../config/config';
import * as request from 'request-promise-native';
import { RoutesCentralized } from './routes-centralized';
import { InconcertEncrypt, InconcertDecrypt } from './crypt';
//import { InconcertExistsGeneralFile, InconcertAddDataToGeneralFile, InconcertSplitGeneralFileData } from './file';

import * as moment from 'moment';

const fs = require('fs');

//import { DummyPromise } from './shared/promises.shared';

// Billing.
const CENTRALIZED_API_BASE_URL: string = 'http://localhost:9002/';


//InconcertExistsGeneralFile();
/*
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
    let route:string = RoutesCentralized[path];

    return DummyPromise()
    .then(
        result => {
            // Validamos que retorne datos.
            if (installationId && route && data)  
                // Instanciamos la información del servidor
                return GetSystemInformation(installationId);
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
                plaformHash = GenerateMD5Content(systemInformationData);
            }

            // Configuramos el objeto para realizar el request.
            let options: any = {
                method: 'POST',
                uri: CENTRALIZED_API_BASE_URL + route ,
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

/***********************************************************************/
/*****************************File.ts***********************************/
/***********************************************************************/
const rootPath : string = '/sq/';
const generalFilePath : string = rootPath + 'storage/file.txt';
const segementedFileFolderPath : string = rootPath + 'storage/out/';

// Esta función verifica que exista el archivo de registro general y lo crea en caso no exista
export function InconcertExistsGeneralFile() : boolean {
    try {
        if (fs.existsSync(generalFilePath)) {
            return true;
        } else {
            fs.writeFile(generalFilePath, '',  function(err) {
                if (err) {
                    console.error(err);
                    return false;
                }
                console.log("File created!");
                return true;
            });

            return true;
        }
    } catch(err) {
        console.error(err)
        return false;
    }
}

// Esta función inserta un registro de texto al archivo de registro principal
export function InconcertAddDataToGeneralFile(myText : string) : boolean {
    if (InconcertExistsGeneralFile()) {
        return InconcertAddEncryptTextToFile(generalFilePath, myText);
    } else {
        return InconcertAddDataToGeneralFile(myText);
    }
}

// Esta función agrega un registro de texto al archivo de registro segmentado
export function InconcertAddDataToSegmentedFile(myText : string[]) : boolean {
    let blockFileNamePath : string = segementedFileFolderPath + moment().format('x') + '.txt';
    myText.map(
        s => {
            // Agregamos el texto extraído directamente al nuevo archivo
            InconcertAddTextToFile(blockFileNamePath, s);
        }
    );

    return true;
}

// Esta función agrega y encripta un registro de texto  al archivo indicado en su input
export function InconcertAddEncryptTextToFile(myFile : string, myText : string) : boolean {
    try {
        fs.appendFileSync(myFile, InconcertEncrypt(myText) + '\n');
    } catch (err) {
        console.log('Save failed!');
    }

    return true;
}

// Esta función agrega un registro de texto  al archivo indicado en su input
export function InconcertAddTextToFile(myFile : string, myText : string) : boolean {
    try {
        fs.appendFileSync(myFile, myText + '\n');
    } catch (err) {
        console.log('Save failed!');
    }

    return true;
}

// Esta función genera un archivo por cada 50 registros existentes en el registro principal
export function InconcertSplitGeneralFileData() : void {
    // Abrimos el archivo de registro general
    let data = fs.readFileSync(generalFilePath, 'utf-8');
    
    // Cantidad de registros para los archivos segmentados
    let blockSize = 50;

    let content = data.toString().split('\n');
    let totalRows = content.filter(r => r.length > 0).length;
    let blocks = Math.floor(totalRows / blockSize);

    // Hacemos un recorrido para los bloques identificados
    for (let i = 0; i < blocks; i++) {
        let blockContent = content.splice(0, blockSize);
        InconcertAddDataToSegmentedFile(blockContent);
    }

    fs.writeFileSync(generalFilePath, content.join('\n'), 'utf-8');

    /*
    fs.readFile(generalFilePath, function (err, data) {
        if (err) {
            return console.error(err);
        }
        
        //Cantidad de registros para los archivos segmentados
        let blockSize = 50;

        let content = data.toString().split('\n');
        let totalRows = content.filter(r => r.length > 0).length;
        let blocks = Math.floor(totalRows / blockSize);

        console.log('Total rows: ' + content.length);

        // Hacemos un recorrido para los bloques identificados
        for (let i = 0; i < blocks; i++) {
            let blockContent = content.splice(0, blockSize);
            InconcertAddDataToBlockFile(blockContent);

            console.log(blockContent);
        }

        console.log('Total rows: ' + content.length);
    });
    */
}

// Esta función envía los archivos contenidos en la carpeta "out" al servicor centralizado
export function InconcertSegmentedFileUpload(installationId : string) : void {
    // Declaramos un array de string para almacenar los nombres de los archivos
    let segmentedFiles : string[] = [];

    // Declarramos un PromiseArray para hacer los envios al centralizado
    let promises : Promise<boolean>[] = [];
    
    // Recuperamos la lista de archivos de la carpeta out
    fs.readdir(segementedFileFolderPath, function (err, files) {
        // Agregamos una excepción en caso de error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 

        // Asignamos el resultado a array que declaramos
        segmentedFiles = files;

        // Recorremos la lista de archivos
        files.forEach(function (file) {
            // Establecemos la ruta del archivo de registro segmentado
            let segmentedFile : string = segementedFileFolderPath + file;

            // Abrimos el archivo de registro segmentado
            let data = fs.readFileSync(segmentedFile, 'utf-8');
                
            // Obtenemos el contenido del archivo de registro segmentado
            let content = data.toString();

            promises.push(InconcertRequest(installationId, 'IC_PARAM_URL_BATCH_DETAIL_SAVE', {'installationId' : installationId, 'data' : data}))
        });
    });

    DummyPromise()
    .then(
        result => {
            console.log('Enviando promise array');
            return Promise.all(promises);
        }
    )
    .then(
        result => {
            console.log(result)
            if (result)
                console.log(result);
            else 
                console.log('fallo')
        }
    )
    .catch(
        err => {
            console.log(err);
        }
    );
}