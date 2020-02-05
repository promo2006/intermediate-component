"use strict";
exports.__esModule = true;
var sy = require("systeminformation");
var md5 = require("md5");
//import { CENTRALIZED_API_BASE_URL } from '../config/config';
var request = require("request-promise-native");
//import { DummyPromise } from './shared/promises.shared';
// Billing.
var CENTRALIZED_API_BASE_URL = 'http://localhost:9002/';
var fs = require('fs');
var zlib = require('zlib');
var readStream = fs.createReadStream('./file.txt');
var gzipStream = zlib.createGzip();
var writeStream = fs.createWriteStream('./newfile.txt');
readStream
    .pipe(gzipStream)
    .pipe(writeStream);
function InconcertRequest(installationId, path, data) {
    var _this = this;
    var systemInformationData = null;
    return DummyPromise()
        .then(function (result) {
        // Validamos que retorne datos.
        if (installationId && path && data)
            // Instanciamos la información del servidor
            return _this.GetSystemInformation(installationId);
        else
            throw 'SERVER_ERROR_MISSING_REQUIRED_PARAMETERS';
    })
        .then(function (result) {
        // Asignamos el valor de la función GetSystemInformation.
        systemInformationData = result;
        var plaformHash = '';
        if (systemInformationData) {
            // Obtenemos el contenido en formato md5.
            plaformHash = _this.GenerateMD5Content(systemInformationData);
        }
        // Configuramos el objeto para realizar el request.
        var options = {
            method: 'POST',
            uri: CENTRALIZED_API_BASE_URL + 'api/activation/get_platform_status',
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
        baseboardSerialNumber: ''
    };
    return DummyPromise()
        .then(function (result) {
        // Instanciamos la información de la baseboard
        var sys = sy.baseboard();
        return sys;
    })
        .then(function (result) {
        // Asignamos el serial.
        systemInformationData.baseboardSerialNumber = result.serial;
        var sys = sy.networkInterfaces();
        // Por defecto, retorna información de las tarjatas que se tengan instaladas. Se debe filtrar por la tarjeta de red que se encuentre habilitada.
        return sys;
    })
        .then(function (result) {
        // Validamos que existan datos.
        if (result && result.length) {
            // Asignamos la mac.
            systemInformationData.macAddress = result[0].mac;
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
function GenerateMD5Content(data) {
    var result = '';
    // Validamos que no sea null.
    if (data) {
        // Generamos el contenido de archivo .lic con el formato adecuado y luego lo convertimos en md5.
        result += data.installationId;
        result += data.macAddress;
        result += data.baseboardSerialNumber;
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
