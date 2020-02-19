"use strict";
exports.__esModule = true;
var log4js = require("log4js");
var logger_config_1 = require("./config/logger.config");
var sy = require("systeminformation");
var md5 = require("md5");
//import { CENTRALIZED_API_BASE_URL } from '../config/config';
var request = require("request-promise-native");
var routes_centralized_1 = require("./routes-centralized");
var crypt_1 = require("./crypt");
var moment = require("moment");
// Importo funciones para manejo de archivos
var file_manager_1 = require("./shared/file-manager");
// Inicializo los logs
log4js.configure(logger_config_1.LOGGER_CONFIG);
// Obtengo logger
var logger = log4js.getLogger('ServerScripts');
var fs = require('fs');
//import { DummyPromise } from './shared/promises.shared';
// Billing.
var CENTRALIZED_API_BASE_URL = 'http://localhost:9002/';
// Método para hacer el request al servidor centralizado, se recibe el body (data)
function InconcertRequest(installationId, path, data) {
    var systemInformationData = null;
    var route = routes_centralized_1.RoutesCentralized[path];
    return DummyPromise()
        .then(function (result) {
        // Validamos que retorne datos.
        if (installationId && route && data)
            // Instanciamos la información del servidor
            return GetSystemInformation(installationId);
        else
            throw 'SERVER_ERROR_MISSING_REQUIRED_PARAMETERS';
    })
        .then(function (result) {
        // Asignamos el valor de la función GetSystemInformation.
        systemInformationData = result;
        var plaformHash = '';
        if (systemInformationData) {
            // Obtenemos el contenido en formato md5.
            plaformHash = GenerateMD5Content(systemInformationData);
        }
        // Configuramos el objeto para realizar el request.
        var options = {
            method: 'POST',
            uri: CENTRALIZED_API_BASE_URL + route,
            body: data,
            headers: {
                'Content-Type': 'application/json',
                'Platform-Hash': plaformHash
            },
            json: true,
            resolveWithFullResponse: false
        };
        return request(options);
    })
        .then(function (result) {
        // Si falla el request retornamor mensaje de fallo
        if (result === null)
            throw 'SERVER_ERROR_EXTERNAL_REQUEST_FAILED';
        // Retornamos el resultado del request
        return Promise.resolve(result);
    })["catch"](function (err) {
        // Obtenemos mensajes de error.
        var clientMsg = (typeof err === 'string' ? err : 'Cannot process request');
        var errorMsg = (typeof err === 'string' ? err : err.message || err.description || 'SERVER_ERROR_REQUESTING_ERROR');
        // Escribo el error en el log.
        //logger.error(errorMsg);
        // Hago reject y devuelvo el error.
        return Promise.reject(err);
    });
}
exports.InconcertRequest = InconcertRequest;
// Método para obtener la información del sistema donde se encuenta instalado.
function GetSystemInformation(instalationId) {
    // Definimos variable que contendrá la información del sistema necesaria.
    var systemInformationData = {
        installationId: instalationId,
        macAddress: '',
        publicIp: ''
    };
    return DummyPromise()
        .then(function (result) {
        // Solicitamos a la librería las interfaces de red
        var sys = sy.networkInterfaces();
        // Por defecto, retorna información de las tarjetas que se tengan instaladas. Se debe filtrar por la tarjeta de red que se encuentre habilitada.
        return sys;
    })
        .then(function (result) {
        if (result === null)
            throw 'SERVER_ERROR_NOT_FOUND_NETWORK_INTERFACE_INFORMATION';
        // Validamos que existan datos.
        if (result && result.length) {
            // Declaramos un objeto para el resultados válido
            var myNetworkInterface = null;
            // Recuperamos los datos de la interface de red activa
            myNetworkInterface = result.filter(function (r) { return r.operstate === 'up'; })[0];
            // Asignamos la mac
            //systemInformationData.macAddress = result[0].mac;
            systemInformationData.macAddress = myNetworkInterface.mac;
            systemInformationData.ip = myNetworkInterface.ip4;
        }
        // Retornamos el objeto con los datos recopilados.
        return Promise.resolve(systemInformationData);
    })["catch"](function (err) {
        // Retornamos false.
        //return Promise.resolve(false);
        // Obtengo mensaje de error.
        var errorMsg = (err && err.procName ? 'Error al ejecutar \'' + err.procName + '\': ' : 'Error al ejecutar consulta: ') + (err ? typeof err === 'string' ? err : err.message || err.description || '' : '');
        // Hago reject y devuelvo el error.
        return Promise.reject(err);
    });
}
exports.GetSystemInformation = GetSystemInformation;
// Método para general el platformHash
function GenerateMD5Content(data) {
    var result = '';
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
exports.GenerateMD5Content = GenerateMD5Content;
function DummyPromise() {
    // Devuelvo promesa dummy que siempre resuelve true
    return new Promise(function (resolve, reject) {
        resolve(true);
    });
}
exports.DummyPromise = DummyPromise;
/***********************************************************************/
/*****************************File.ts***********************************/
/***********************************************************************/
console.log(crypt_1.InconcertDecrypt('63db286607f7a5b1856aacb704ccffe0a3d0c884ffa73f65f2dd089f45ffe3eeee9adf2e906004e6b77c837b6aea86f0f5b2ad7e0e7a64ce287b62ab7baddd1c783f6fbadb9f1950b1293c92c4287f6df926daa8e93996950f56c17716d4cad41a8b6b90eacc8fda0276081da596a7c1f3cdce546f0a7d561cb97c8c556ff69ddfa7dc992ce6ce8d4d259cd2c3b237fb8c4bf05c5f5ab057911c2282e2c698a81dc832c04b56cd7f3bf32cc933a12a4b24b76297ed151b8c915ac1c107cb95b6'));
console.log(crypt_1.InconcertDecrypt('63db286607f7a5b1856aacb704ccffe0a3d0c884ffa73f65f2dd089f45ffe3eeee9adf2e906004e6b77c837b6aea86f0f5b2ad7e0e7a64ce287b62ab7baddd1c783f6fbadb9f1950b1293c92c4287f6df926daa8e93996950f56c17716d4cad41a8b6b90eacc8fda0276081da596a7c1cc5d227d2364915e3881daec59714d1275f3fe8891ba0f7c1eea061cee6f5858ae9a2d683459753cb4e20e4bd617e4cea0701476ecdfff9907c66314513f46383d5866434f1d2673b70784e1ce078460'));
console.log(crypt_1.InconcertDecrypt('63db286607f7a5b1856aacb704ccffe0a3d0c884ffa73f65f2dd089f45ffe3eeee9adf2e906004e6b77c837b6aea86f0f5b2ad7e0e7a64ce287b62ab7baddd1c783f6fbadb9f1950b1293c92c4287f6df926daa8e93996950f56c17716d4cad41a8b6b90eacc8fda0276081da596a7c15e1d67d0d42bdabd8eb846e5de052fb7a572b36315abe954e06bc0040573e94abaf5c8d9ce68fe2e897b1d09015d7e8b41619be2c0c325409b6a99eb7da3dd1689bc13cd787d2d92a4987510fbecb9b0'));
console.log(crypt_1.InconcertDecrypt('63db286607f7a5b1856aacb704ccffe0a3d0c884ffa73f65f2dd089f45ffe3eeee9adf2e906004e6b77c837b6aea86f0f5b2ad7e0e7a64ce287b62ab7baddd1c783f6fbadb9f1950b1293c92c4287f6df926daa8e93996950f56c17716d4cad41a8b6b90eacc8fda0276081da596a7c18b03496740c510c7c04781e90f4530b81dac097f0d940691b35176cc9f46a784a1e96102dbae9f9f4dc00630431cb4c462f03a38e9a943143ef3560b4aa8fbfb19366458eefe240c2094cda7f2a3a945'));
console.log(crypt_1.InconcertDecrypt('63db286607f7a5b1856aacb704ccffe006c80928186fc2e60d83ee29bf39720a7796aa51a78d991f4eebb963f66662aef2d427074a5d9eca0301b9c4c3a34786324a0ad8081eae4ac466e8bdc513601d82900d513b78bc17f5c9edc8cf198dfed08b117fcdd12931e419f5641ec85e1aacfa85a62e0a25a66ee711913969582e'));
console.log(crypt_1.InconcertDecrypt('63db286607f7a5b1856aacb704ccffe006c80928186fc2e60d83ee29bf39720a7796aa51a78d991f4eebb963f66662aef2d427074a5d9eca0301b9c4c3a3478697e7800365ca7fcc190fca1c4f54a643bb1f73ea19432babc28a76fdf45476ef58c87befd249bd2796f7669c5867caa1cab68192fcf06beb56c05e435ebd7223'));
console.log(crypt_1.InconcertDecrypt('63db286607f7a5b1856aacb704ccffe006c80928186fc2e60d83ee29bf39720a7796aa51a78d991f4eebb963f66662aef2d427074a5d9eca0301b9c4c3a34786524d0cbf85f3874ba6a8de04df7a48291e9ac534fa03f45f7b827f63b483ca3add5345f2c92ba16181528811254eb2c2b57d1a7a6042974478fabeb9e014eea2'));
console.log(crypt_1.InconcertDecrypt('63db286607f7a5b1856aacb704ccffe006c80928186fc2e60d83ee29bf39720a7796aa51a78d991f4eebb963f66662aef2d427074a5d9eca0301b9c4c3a3478679fa3c22f8817708e6e33ecd1d110a26985a3af3ba0201391da44ec6c5b47dd1707efc2d6f74467ae215fb1d176d82e0dc3cb59d9fb7316792219cfd2e5edb4a'));
console.log(crypt_1.InconcertDecrypt('63db286607f7a5b1856aacb704ccffe006c80928186fc2e60d83ee29bf39720a7796aa51a78d991f4eebb963f66662aef2d427074a5d9eca0301b9c4c3a347868836136a382cde51d3f8e4dd95818b9e05c36c68470a56b35bf2e2b4ca0aa3efe36c676fda9636bc64eaafd96e7c2f225092098573d9bcb0b6f140a32e259fe9'));
console.log(crypt_1.InconcertDecrypt('63db286607f7a5b1856aacb704ccffe006c80928186fc2e60d83ee29bf39720a7796aa51a78d991f4eebb963f66662aef2d427074a5d9eca0301b9c4c3a34786c36475c9aff0ad2216ef9a99ef1cb99af4a8f09f08f9dd932496826cdbb7c3dfd72635f93048ab1b9707b4ab0b6bb56f062f0c97a00b03ce8815b6a6334a2042'));
console.log(crypt_1.InconcertDecrypt('4ecc10adf214d7b7142ead24fe13f3ece4d24313e500f233040e6e0222ff9d1558d5242a5cdbcf38834030c978423a89cd2b63821dbfb3c80f3b72b96b7c40c1771faddbb14053ae346db241307ab1bd40176bd8688f04352edc65eae506ce82241d29c6ff595adde4e3478b0a864626ee9ae11fe9b55ca457f9bbffd50dfaeb7f328ccad4a6ba12cd002b357ad32629b9f7ff809e4406e75f2de25b207887a6'));
console.log(crypt_1.InconcertDecrypt('4ecc10adf214d7b7142ead24fe13f3ece4d24313e500f233040e6e0222ff9d1558d5242a5cdbcf38834030c978423a89cd2b63821dbfb3c80f3b72b96b7c40c1771faddbb14053ae346db241307ab1bd40176bd8688f04352edc65eae506ce82241d29c6ff595adde4e3478b0a864626ee9ae11fe9b55ca457f9bbffd50dfaeb7f328ccad4a6ba12cd002b357ad32629b9f7ff809e4406e75f2de25b207887a6'));
console.log(crypt_1.InconcertDecrypt('4ecc10adf214d7b7142ead24fe13f3ece4d24313e500f233040e6e0222ff9d1558d5242a5cdbcf38834030c978423a89cd2b63821dbfb3c80f3b72b96b7c40c1771faddbb14053ae346db241307ab1bd40176bd8688f04352edc65eae506ce82241d29c6ff595adde4e3478b0a864626ee9ae11fe9b55ca457f9bbffd50dfaeb6822c4caea4f441c7641bbc878169d7f6b545e62b9c8f3901df59faaa549da97'));
console.log(crypt_1.InconcertDecrypt('4ecc10adf214d7b7142ead24fe13f3ece4d24313e500f233040e6e0222ff9d1558d5242a5cdbcf38834030c978423a89cd2b63821dbfb3c80f3b72b96b7c40c17ce6d5c052f99eca3c67e806516adcb937bf9937dba32ba6fdbca26eab3ebcb0d60a156d73804b727d4d3711d51d8a7b6be309ddd345fae6d976b57f7fd3812202983ca596fec5702c8451d5089a911c7ba3c9e36caba7505bde3d0e1c2d3318'));
console.log(crypt_1.InconcertDecrypt('4ecc10adf214d7b7142ead24fe13f3ece4d24313e500f233040e6e0222ff9d1558d5242a5cdbcf38834030c978423a89cd2b63821dbfb3c80f3b72b96b7c40c1771faddbb14053ae346db241307ab1bd40176bd8688f04352edc65eae506ce82241d29c6ff595adde4e3478b0a864626ee9ae11fe9b55ca457f9bbffd50dfaeb6822c4caea4f441c7641bbc878169d7f6b545e62b9c8f3901df59faaa549da97'));
console.log(crypt_1.InconcertDecrypt('4ecc10adf214d7b7142ead24fe13f3ece4d24313e500f233040e6e0222ff9d1558d5242a5cdbcf38834030c978423a89cd2b63821dbfb3c80f3b72b96b7c40c1771faddbb14053ae346db241307ab1bd40176bd8688f04352edc65eae506ce82241d29c6ff595adde4e3478b0a864626ee9ae11fe9b55ca457f9bbffd50dfaeb6822c4caea4f441c7641bbc878169d7f6b545e62b9c8f3901df59faaa549da97'));
console.log(crypt_1.InconcertDecrypt('4ecc10adf214d7b7142ead24fe13f3ece4d24313e500f233040e6e0222ff9d1558d5242a5cdbcf38834030c978423a89cd2b63821dbfb3c80f3b72b96b7c40c1771faddbb14053ae346db241307ab1bd40176bd8688f04352edc65eae506ce82241d29c6ff595adde4e3478b0a864626ee9ae11fe9b55ca457f9bbffd50dfaeb7f328ccad4a6ba12cd002b357ad32629b9f7ff809e4406e75f2de25b207887a6'));
console.log(crypt_1.InconcertDecrypt('4ecc10adf214d7b7142ead24fe13f3ece4d24313e500f233040e6e0222ff9d1558d5242a5cdbcf38834030c978423a89cd2b63821dbfb3c80f3b72b96b7c40c1771faddbb14053ae346db241307ab1bd40176bd8688f04352edc65eae506ce82241d29c6ff595adde4e3478b0a864626ee9ae11fe9b55ca457f9bbffd50dfaeb7f328ccad4a6ba12cd002b357ad32629b9f7ff809e4406e75f2de25b207887a6'));
console.log(crypt_1.InconcertDecrypt('4ecc10adf214d7b7142ead24fe13f3ece4d24313e500f233040e6e0222ff9d1558d5242a5cdbcf38834030c978423a89cd2b63821dbfb3c80f3b72b96b7c40c1771faddbb14053ae346db241307ab1bd40176bd8688f04352edc65eae506ce82241d29c6ff595adde4e3478b0a864626ee9ae11fe9b55ca457f9bbffd50dfaeb6822c4caea4f441c7641bbc878169d7f6b545e62b9c8f3901df59faaa549da97'));
console.log(crypt_1.InconcertDecrypt('4ecc10adf214d7b7142ead24fe13f3ece4d24313e500f233040e6e0222ff9d1558d5242a5cdbcf38834030c978423a89cd2b63821dbfb3c80f3b72b96b7c40c1771faddbb14053ae346db241307ab1bd40176bd8688f04352edc65eae506ce82241d29c6ff595adde4e3478b0a864626ee9ae11fe9b55ca457f9bbffd50dfaeb7f328ccad4a6ba12cd002b357ad32629b9f7ff809e4406e75f2de25b207887a6'));
console.log(crypt_1.InconcertDecrypt('4ecc10adf214d7b7142ead24fe13f3ece4d24313e500f233040e6e0222ff9d1558d5242a5cdbcf38834030c978423a89cd2b63821dbfb3c80f3b72b96b7c40c1771faddbb14053ae346db241307ab1bd40176bd8688f04352edc65eae506ce82241d29c6ff595adde4e3478b0a864626ee9ae11fe9b55ca457f9bbffd50dfaeb7f328ccad4a6ba12cd002b357ad32629b9f7ff809e4406e75f2de25b207887a6'));
console.log(crypt_1.InconcertDecrypt('4ecc10adf214d7b7142ead24fe13f3ece4d24313e500f233040e6e0222ff9d1558d5242a5cdbcf38834030c978423a89cd2b63821dbfb3c80f3b72b96b7c40c1771faddbb14053ae346db241307ab1bd40176bd8688f04352edc65eae506ce82241d29c6ff595adde4e3478b0a864626ee9ae11fe9b55ca457f9bbffd50dfaeb6822c4caea4f441c7641bbc878169d7f6b545e62b9c8f3901df59faaa549da97'));
console.log(crypt_1.InconcertDecrypt('4ecc10adf214d7b7142ead24fe13f3ece4d24313e500f233040e6e0222ff9d1558d5242a5cdbcf38834030c978423a89cd2b63821dbfb3c80f3b72b96b7c40c1771faddbb14053ae346db241307ab1bd40176bd8688f04352edc65eae506ce82241d29c6ff595adde4e3478b0a864626ee9ae11fe9b55ca457f9bbffd50dfaeb6822c4caea4f441c7641bbc878169d7f6b545e62b9c8f3901df59faaa549da97'));
// Ruta donde guardaremos los registros txt de Speech & Quality 
var rootPath = '/sq/';
// Ruta para el archivo de registro general
var generalFilePath = rootPath + 'storage/file.txt';
// Ruta de carpeta para los archivos segmentados pendientes de enviar al servidor centralizado
var segmentedFileFolderPath = rootPath + 'storage/out/';
// Ruta de carpeta para los archivos segmentados ya enviados y procesados en el servidor centralizado
var completedFileFolderPath = rootPath + 'storage/completed/';
// Esta función verifica que exista el archivo de registro general y lo crea en caso no exista
function InconcertExistsGeneralFile() {
    try {
        // Verificamos si existe la ruta
        if (fs.existsSync(generalFilePath)) {
            return true;
        }
        else {
            logger.info('[IntermediateComponent::InconcertExistsGeneralFile] Writing to file: ' + generalFilePath);
            // Generamos el archivo de la ruta general
            fs.writeFile(generalFilePath, '', function (err) {
                if (err) {
                    console.error(err);
                    return false;
                }
                // Retornamos true si se creó correctamente
                return true;
            });
            return true;
        }
    }
    catch (err) {
        console.error(err);
        return false;
    }
}
exports.InconcertExistsGeneralFile = InconcertExistsGeneralFile;
// Esta función inserta un registro de texto al archivo de registro principal
function InconcertAddDataToGeneralFile(myText, myTextStatus) {
    // Verifica si existe el archivo de registros general y lo crea de no existir
    if (InconcertExistsGeneralFile()) {
        if (myTextStatus !== undefined)
            // Ingresamos y escriptamos texto al archivo general
            return InconcertAddEncryptTextToFile(generalFilePath, myText, myTextStatus);
        else
            // Ingresamos y escriptamos texto al archivo general
            return InconcertAddEncryptTextToFile(generalFilePath, myText);
    }
    else {
        if (myTextStatus)
            // Si no existe el archivo de registro general se vuelve a lanzar la función
            return InconcertAddDataToGeneralFile(myText, myTextStatus);
        else
            // Si no existe el archivo de registro general se vuelve a lanzar la función
            return InconcertAddDataToGeneralFile(myText);
    }
}
exports.InconcertAddDataToGeneralFile = InconcertAddDataToGeneralFile;
// Esta función agrega un registro de texto al archivo de registro segmentado
function InconcertAddDataToSegmentedFile(myText) {
    var blockFileNewNamePath = segmentedFileFolderPath + moment().format('x') + '-NEW.txt';
    var blockFileUpdateNamePath = segmentedFileFolderPath + moment().format('x') + '-UPDATE.txt';
    var blockFileCompletedNamePath = segmentedFileFolderPath + moment().format('x') + '-COMPLETED.txt';
    // Declaramos variables para contar los registros de cada archivo
    var newInsertCounter = 0;
    var updateInsertCounter = 0;
    var completedInsertCounter = 0;
    myText.map(function (s) {
        if (s && s.length) {
            var operation = s.split('::');
            if (operation.length === 1) {
                newInsertCounter++;
                InconcertAddTextToFile(blockFileNewNamePath, s);
            }
            else {
                switch (operation[1]) {
                    case 'new':
                        newInsertCounter++;
                        InconcertAddTextToFile(blockFileNewNamePath, s);
                        break;
                    case 'update':
                        updateInsertCounter++;
                        InconcertAddTextToFile(blockFileUpdateNamePath, s);
                        break;
                    case 'success':
                        completedInsertCounter++;
                        InconcertAddTextToFile(blockFileCompletedNamePath, s);
                        break;
                    case 'failed':
                        completedInsertCounter++;
                        InconcertAddTextToFile(blockFileCompletedNamePath, s);
                        break;
                }
            }
        }
    });
    return true;
}
exports.InconcertAddDataToSegmentedFile = InconcertAddDataToSegmentedFile;
// Esta función agrega y encripta un registro de texto  al archivo indicado en su input
function InconcertAddEncryptTextToFile(myFile, myText, myTextResult) {
    // Declaramos una variable para el texto a insertar
    var insertText = '';
    // Si existe el input result lo agregamos al final de la cadena de texto
    if (myTextResult !== undefined) {
        insertText += crypt_1.InconcertEncrypt(myText) + '::' + myTextResult;
    }
    else {
        insertText += crypt_1.InconcertEncrypt(myText);
    }
    try {
        fs.appendFileSync(myFile, insertText + '\n');
    }
    catch (err) {
        console.log('Save failed!');
    }
    return true;
}
exports.InconcertAddEncryptTextToFile = InconcertAddEncryptTextToFile;
// Esta función agrega un registro de texto  al archivo indicado en su input
function InconcertAddTextToFile(myFile, myText) {
    try {
        fs.appendFileSync(myFile, myText + '\n');
    }
    catch (err) {
        console.log('Save failed!');
    }
    return true;
}
exports.InconcertAddTextToFile = InconcertAddTextToFile;
// Esta función genera un archivo por cada 50 registros existentes en el registro principal
function InconcertSplitGeneralFileData() {
    // Abrimos el archivo de registro general
    var data = fs.readFileSync(generalFilePath, 'utf-8');
    // Cantidad de registros para los archivos segmentados
    var blockSize = 4;
    var content = data.toString().split('\n');
    var totalRows = content.filter(function (r) { return r.length > 0; }).length;
    var blocks = Math.ceil(totalRows / blockSize);
    // Hacemos un recorrido para los bloques identificados
    for (var i = 0; i < blocks; i++) {
        var blockContent = content.splice(0, blockSize);
        InconcertAddDataToSegmentedFile(blockContent);
    }
    fs.writeFileSync(generalFilePath, content.join('\n'), 'utf-8');
}
exports.InconcertSplitGeneralFileData = InconcertSplitGeneralFileData;
// Esta función envía los archivos contenidos en la carpeta "out" al servicor centralizado
function InconcertSegmentedFileUpload(installationId) {
    // Declaramos un array de string para almacenar los nombres de los archivos
    var segmentedFiles = [];
    var segmentedNewFiles = [];
    var segmentedUpdateFiles = [];
    var segmentedCloseFiles = [];
    // Declaramos un objeto para almacenar el resultado de los archivos
    var segmentedFilesResult = [];
    return DummyPromise()
        .then(function (result) {
        // Recuperamos los archivos de la carpeta OUT
        return file_manager_1.GetFolderTree(segmentedFileFolderPath);
    })
        .then(function (result) {
        if (result && result.length > 0 && result[0].children && result[0].children.length > 0) {
            // Guardamos en nuestra variable todos los archivos
            segmentedFiles = result[0].children;
            /*
            segmentedNewFiles = segmentedFiles.filter(f => f.split('-')[1] = 'new.txt');
            segmentedUpdateFiles = segmentedFiles.filter(f => f.split('-')[1] = 'update.txt');
            segmentedCloseFiles = segmentedFiles.filter(f => f.split('-')[1] = 'close.txt');
            */
            // Declarramos un PromiseArray para obtener el contenido de cada archivo
            var fileContentPromises_1 = [];
            // Recorremos el listado de archivos segmentados
            segmentedFiles.map(function (f) {
                logger.info('[IntermediateComponent::InconcertSegmentedFileUpload] Promising read: ' + f.fullPath);
                fileContentPromises_1.push(file_manager_1.ReadFileContent(f.fullPath, 'utf8'));
            });
            return Promise.all(fileContentPromises_1);
        }
        else {
            throw 'SERVER_ERROR_NOT_FOUND_FILE';
        }
    })
        .then(function (result) {
        // Declarramos un PromiseArray para hacer los envios al centralizado
        var promises = [];
        if (result && result.length > 0) {
            result.map(function (r, i) {
                // Creamos el objeto que enviaremos al servidor centralizado
                var body = {
                    'installationId': installationId,
                    'file': segmentedFiles[i].name,
                    'data': r
                };
                promises.push(InconcertRequest(installationId, 'IC_PARAM_URL_BATCH_DETAIL_SAVE', body));
            });
        }
        else {
            throw 'SERVER_ERROR_NOT_FOUND_FILE_CONTENT';
        }
        return Promise.all(promises);
    })
        .then(function (result) {
        // Almacenamos los resultados de los archivos enviados
        segmentedFilesResult = result;
        // Declarramos un PromiseArray para los archivos que serán movidos a la carpeta Completed
        var moveFilepromises = [];
        if (segmentedFilesResult && segmentedFilesResult.length > 0) {
            segmentedFilesResult.map(function (r) {
                // Validamos si la operación fue exitosa
                if (r.status === true) {
                    moveFilepromises.push(InconcertSegmentedFileToCompletedFolder(r.data));
                }
            });
        }
        else {
            throw 'SERVER_ERROR_NOT_RECEIVED_RESULT';
        }
        return Promise.all(moveFilepromises);
    })
        .then(function (result) {
        if (result) {
            //console.log(result);
            Promise.resolve({ 'res': true, 'data': result });
        }
    })["catch"](function (err) {
        Promise.resolve({ 'res': false, 'err': err });
    });
}
exports.InconcertSegmentedFileUpload = InconcertSegmentedFileUpload;
function InconcertSegmentedFileToCompletedFolder(segmentedFileName) {
    var sourcePath = segmentedFileFolderPath + segmentedFileName;
    var targetPath = completedFileFolderPath + segmentedFileName;
    return DummyPromise()
        .then(function (result) {
        return file_manager_1.CopyFile(sourcePath, targetPath);
    })
        .then(function (result) {
        if (result) {
            return file_manager_1.DeleteFile(sourcePath);
        }
        else {
            throw 'SERVER_ERROR_COPY_FILE_FAILED';
        }
    })
        .then(function (result) {
        if (result) {
            Promise.resolve(true);
        }
        else {
            throw 'SERVER_ERROR_DELET_FILE_FAILED';
        }
    })["catch"](function (err) {
        Promise.resolve(null);
    });
}
