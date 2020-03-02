//import * as log4js from 'log4js';
//import { LOGGER_CONFIG } from './config/logger.config';

import * as sy from 'systeminformation';
import * as md5 from 'md5';

//import { CENTRALIZED_API_BASE_URL } from '../config/config';
import * as request from 'request-promise-native';
import { RoutesCentralized } from './routes-centralized';
import { InconcertEncrypt, InconcertDecrypt } from './crypt';
import * as moment from 'moment';

// Importo funciones para manejo de archivos
import { ReadFileContent, GetFolderTree, CopyFile, DeleteFile, ExistInFileSystem, CreateFolder } from './shared/file-manager';

// Inicializo los logs
//log4js.configure(LOGGER_CONFIG);

// Obtengo logger
//let logger: log4js.Logger = log4js.getLogger('ServerScripts');

const fs = require('fs');

//import { DummyPromise } from './shared/promises.shared';

// Billing.
const CENTRALIZED_API_BASE_URL: string = 'http://localhost:9002/';
//const CENTRALIZED_API_BASE_URL: string = 'https://billing-test.inconcertcc.com/';


// Método para hacer el request al servidor centralizado, se recibe el body (data)
export function InconcertRequest(installationId : string, path : string, data : any) : Promise<any> {
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

            // Por defecto, retorna información de las tarjetas que se tengan instaladas. Se debe filtrar por la tarjeta de red que se encuentre habilitada.
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

// Método para general el platformHash
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

export function SleepPromise(secondTime: number): Promise<boolean> {
    // Devuelvo promesa dummy que siempre resuelve true
    return new Promise(function(resolve, reject) {
        setTimeout(resolve,(1000 * secondTime));
    });
}


/***********************************************************************/
/*****************************File.ts***********************************/
/***********************************************************************/


// Ruta donde guardaremos los registros txt de Speech & Quality 
const rootPath : string = '/sq/';
// Ruta de la carpeta donde guardaremos el registro general
const storagePath : string = rootPath + 'storage/';
// Ruta para el archivo de registro general
const generalFilePath : string = rootPath + 'storage/file.txt';
// Ruta de carpeta para los archivos segmentados pendientes de enviar al servidor centralizado
const segmentedFileFolderPath : string = rootPath + 'storage/out/';
// Ruta de carpeta para los archivos segmentados ya enviados y procesados en el servidor centralizado
const completedFileFolderPath : string = rootPath + 'storage/completed/';

// Función que verificará que existan las carpetas requeridas para el componente intermedio
export function InconcertCheckSystemFolder() : Promise<boolean> {
    return DummyPromise()
    .then(
        result => {
            // Creamos la carpeta sq
            return CreateFolder(rootPath);
        }
    )
    .then(
        result => {
            // Creamos la carpeta storage
            return CreateFolder(storagePath);
        }
    )
    .then(
        result => {
            // Creamos la carpeta out
            return CreateFolder(segmentedFileFolderPath);
        }
    )
    .then(
        result => {
            // Creamos la carpeta completed
            return CreateFolder(completedFileFolderPath);
        }
    )
    .then(
        result => {
            // Retornamos el resultado
            return Promise.resolve(result);
        }
    )
    .catch(
        err => {
            return Promise.resolve(false);
        }
    );
}

// Esta función verifica que exista el archivo de registro general y lo crea en caso no exista
export function InconcertExistsGeneralFile() : boolean {
    try {
        // Verificamos si existe la ruta
        if (fs.existsSync(generalFilePath)) {
            return true;
        } else {

            //logger.info('[IntermediateComponent::InconcertExistsGeneralFile] Writing to file: ' + generalFilePath);

            // Generamos el archivo de la ruta general
            fs.writeFile(generalFilePath, '',  function(err) {
                if (err) {
                    console.error(err);
                    return false;
                }
                
                // Retornamos true si se creó correctamente
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
export function InconcertAddDataToGeneralFile(myText : string, myTextStatus ?: string) : boolean {
    // Verifica si existe el archivo de registros general y lo crea de no existir
    if (InconcertExistsGeneralFile()) {

        if (myTextStatus !== undefined)
            // Ingresamos y escriptamos texto al archivo general
            return InconcertAddEncryptTextToFile(generalFilePath, myText, myTextStatus);
        else
            // Ingresamos y escriptamos texto al archivo general
            return InconcertAddEncryptTextToFile(generalFilePath, myText);
 
    } else {

        if (myTextStatus)
            // Si no existe el archivo de registro general se vuelve a lanzar la función
            return InconcertAddDataToGeneralFile(myText, myTextStatus);
        else 
            // Si no existe el archivo de registro general se vuelve a lanzar la función
            return InconcertAddDataToGeneralFile(myText);
    }
}

// Esta función agrega un registro de texto al archivo de registro segmentado
export function InconcertAddDataToSegmentedFile(myText : string[]) : boolean {
    let blockFileNewNamePath : string = segmentedFileFolderPath + moment().format('x') + '1-NEW.txt';
    let blockFileUpdateNamePath : string = segmentedFileFolderPath + moment().format('x') + '2-UPDATE.txt';
    let blockFileCompletedNamePath : string = segmentedFileFolderPath + moment().format('x') + '3-COMPLETED.txt';

    // Declaramos variables para contar los registros de cada archivo
    let newInsertCounter = 0;
    let updateInsertCounter = 0;
    let completedInsertCounter = 0;

    myText.map(
        s => {
            if (s && s.length) {
                let operation = s.split('::');
                if (operation.length === 1) {
                    newInsertCounter++
                    InconcertAddTextToFile(blockFileNewNamePath, s);
                } else {
                    switch (operation[1]) {
                        case 'new':
                            newInsertCounter++
                            InconcertAddTextToFile(blockFileNewNamePath, s);
                            break;
                        case 'update':
                            updateInsertCounter++
                            InconcertAddTextToFile(blockFileUpdateNamePath, s);    
                            break;
                        case 'success': 
                            completedInsertCounter++
                            InconcertAddTextToFile(blockFileCompletedNamePath, s);
                            break;
                        case 'failed': 
                            completedInsertCounter++
                            InconcertAddTextToFile(blockFileCompletedNamePath, s);
                            break;
                    }
                }
            }
        }
    );

    return true;
}

// Esta función agrega y encripta un registro de texto  al archivo indicado en su input
export function InconcertAddEncryptTextToFile(myFile : string, myText : string, myTextResult ?: string) : boolean {
    // Declaramos una variable para el texto a insertar
    let insertText = '';

    // Si existe el input result lo agregamos al final de la cadena de texto
    if (myTextResult !== undefined) {
        insertText += InconcertEncrypt(myText) + '::' + myTextResult;
    } else {
        insertText += InconcertEncrypt(myText);
    }

    try {
        fs.appendFileSync(myFile, insertText + '\n');
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
        // Generamos el archivo de la ruta general
        fs.writeFile(myFile, '',  function(err) {
            if (err) {
                console.error(err);
                return false;
            }
            
            // Retornamos true si se creó correctamente
            return true;
        });

        InconcertAddTextToFile(myFile, myText);
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
    let blocks = Math.ceil(totalRows / blockSize);

    // Hacemos un recorrido para los bloques identificados
    for (let i = 0; i < blocks; i++) {
        let blockContent = content.splice(0, blockSize);
        InconcertAddDataToSegmentedFile(blockContent);
    }

    fs.writeFileSync(generalFilePath, content.join('\n'), 'utf-8');
}

// Esta función envía los archivos contenidos en la carpeta "out" al servicor centralizado
export function InconcertSegmentedFileUpload(installationId : string) : Promise<any> {
    // Declaramos un array de string para almacenar los nombres de los archivos
    let segmentedFiles : any[] = [];
    let segmentedNewFiles : any[] = [];
    let segmentedUpdateFiles : any[] = [];
    let segmentedCloseFiles : any[] = [];

    // Declaramos un objeto para almacenar el resultado de los archivos
    let segmentedFilesResult : any[] = [];
    
    return DummyPromise()
    .then(
        result => {
            // Recuperamos los archivos de la carpeta OUT
            return GetFolderTree(segmentedFileFolderPath);
        }
    )
    .then(
        result => {
            if (result && result.length > 0 && result[0].children && result[0].children.length > 0) {
                // Guardamos en nuestra variable todos los archivos
                segmentedFiles = result[0].children;

                /*
                segmentedNewFiles = segmentedFiles.filter(f => f.split('-')[1] = 'new.txt');
                segmentedUpdateFiles = segmentedFiles.filter(f => f.split('-')[1] = 'update.txt');
                segmentedCloseFiles = segmentedFiles.filter(f => f.split('-')[1] = 'close.txt');
                */
               
                // Declarramos un PromiseArray para obtener el contenido de cada archivo
                let fileContentPromises : Promise<any>[] = [];

                // Recorremos el listado de archivos segmentados
                segmentedFiles.map(
                    f => {

                        //logger.info('[IntermediateComponent::InconcertSegmentedFileUpload] Promising read: ' + f.fullPath);

                        fileContentPromises.push(ReadFileContent(f.fullPath, 'utf8'));
                    }
                )

                return Promise.all(fileContentPromises);
            } else {
                throw 'SERVER_ERROR_NOT_FOUND_FILE';
            }
        }
    )
    .then(
        result => {
            let arrSummary : any[] = [];

            // Declarramos un PromiseArray para hacer los envios al centralizado
            let promises : Promise<any>[] = [];

            if (result && result.length > 0) {
                result.map(
                    (r, i) => {
                        // Creamos el objeto que enviaremos al servidor centralizado
                        let body : any = {
                            'installationId' : installationId, 
                            'file' : segmentedFiles[i].name,
                            'data' : r
                        }

                        arrSummary.push(body);
                        //promises.push(InconcertRequest(installationId, 'IC_PARAM_URL_BATCH_DETAIL_SAVE', body));
                    }
                )
            } else {
                throw 'SERVER_ERROR_NOT_FOUND_FILE_CONTENT';
            }

            return InconcertSegmenteFileRecursiveSend(arrSummary);
            //return Promise.all(promises);
        }
    )
    /*
    .then(
        result => {
            // Almacenamos los resultados de los archivos enviados
            segmentedFilesResult = result;

            // Declarramos un PromiseArray para los archivos que serán movidos a la carpeta Completed
            let moveFilepromises : Promise<any>[] = [];

            if (segmentedFilesResult && segmentedFilesResult.length > 0) {
                segmentedFilesResult.map(
                    r => {
                        // Validamos si la operación fue exitosa
                        if (r.status === true) {
                            moveFilepromises.push(InconcertSegmentedFileToCompletedFolder(r.data));   
                        } 
                    }
                );
            } else {
                throw 'SERVER_ERROR_NOT_RECEIVED_RESULT';
            }  
            
            return Promise.all(moveFilepromises);
        }
    )
    */
    .then(
        result => {
            if (result && result.status) {
                Promise.resolve({'res' : true, 'data' : result});
            } else 
                throw 'SERVER_ERROR_MASSIVE_UPLOAD_FAILED';
        }
    )
    .catch(
        err => {
            Promise.resolve({'res' : false, 'err' : err});
        }
    );
}

// Función recursiva para enviar los request al servidor centralizado
function InconcertSegmenteFileRecursiveSend(arrSummary : any[]) : Promise<any> {
    // El array de entrada contiene { 'installationId' : installationId, 'file' : fileName, 'data' : fileTxtContent}

    // Retiramos un item del array de objetos para trabajar
    let myBody : any = arrSummary.shift();

    // consulto si tenemos datos en la cola
    return SleepPromise(1)
    .then(
        result => {
            //logger.info('[IntermediateComponent::InconcertSegmenteFileRecursiveSend] Sending file to Central Server: ' + myBody.file);

            // Lanzamos el request al servidor centralizado
            return InconcertRequest(myBody.installationId, 'IC_PARAM_URL_BATCH_DETAIL_SAVE', myBody);
        }
    )
    .then(
        result => {
            // El servidor centralizado retorna en respuesta el estado y nombre del archivo
            if (result === null)
                throw 'SERVER_ERROR_NOT_RECEIVED_RESULT';

            // Si el resultado del servidor es falso retornamos un throw
            if (result.status !== true) {
                throw 'SERVER_ERROR_FILE_UPLOAD_FAILED';

            // Si la respuesta es true movemos el archivo a la carpeta Completed
            } else {
                //logger.info('[IntermediateComponent::InconcertSegmenteFileRecursiveSend] Moving file to Completed folder: ' + myBody.file + '::' + result.data);

                // Movemos el archivo a la carpeta Completed
                return InconcertSegmentedFileToCompletedFolder(result.data);   
            }
        }
    )
    .then(
        result => {
            if (result) {
                if (arrSummary.length > 0) {
                    //logger.info('[IntermediateComponent::InconcertSegmenteFileRecursiveSend] Launching recursice function: ' + arrSummary.length);
                    
                    return InconcertSegmenteFileRecursiveSend(arrSummary);
                } else 
                    return Promise.resolve({'res' : true, 'data' : result});
            } else {
                throw 'SERVER_ERROR_FILE_MOVE_FAILED';
            }
        }
    )
    .catch(
        err => {
            //logger.error('[IntermediateComponent::InconcertSegmenteFileRecursiveSend] Error: ' + err);

            Promise.resolve({'res' : false, 'err' : err});
        }
    )

}

function InconcertSegmentedFileToCompletedFolder(segmentedFileName : string) : Promise<any> {
    
    let sourcePath : string = segmentedFileFolderPath + segmentedFileName;
    let targetPath: string = completedFileFolderPath + segmentedFileName;

    return DummyPromise()
    .then(
        result => {
            // Verificamos si existe la carpeta Completed
            return CreateFolder(completedFileFolderPath)
        }
    )
    .then(
        result => {
            // Copiamos el archivo a la carpeta Completed
            return CopyFile(sourcePath, targetPath);
        }
    )
    .then(
        result => {
            if (result) {
                return DeleteFile(sourcePath);
            } else {
                throw 'SERVER_ERROR_COPY_FILE_FAILED';
            }
        }
    )
    .then(
        result => {
            if (result) {
                return Promise.resolve(true);   
            } else {
                throw 'SERVER_ERROR_DELETE_FILE_FAILED';
            }
        }
    )
    .catch(
        err => {
            return Promise.resolve(false);
        }
    )
}