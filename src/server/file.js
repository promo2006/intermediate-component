"use strict";
exports.__esModule = true;
var moment = require("moment");
var fs = require('fs');
var settings = require("settings");
var rootPath = settings.PROJECT_DIR + 'server/';
var generalFilePath = rootPath + 'storage/file.txt';
// Esta función verifica que exista el archivo de registro general y lo crea en caso no exista
function InconcertExistsGeneralFile() {
    try {
        if (fs.existsSync(generalFilePath)) {
            return true;
        }
        else {
            fs.writeFile(generalFilePath, '', function (err) {
                if (err) {
                    console.error(err);
                    return false;
                }
                console.log("File created!");
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
function InconcertAddDataToGeneralFile(myText) {
    if (InconcertExistsGeneralFile()) {
        return InconcertAddTextToFile(generalFilePath, myText);
    }
    else {
        return InconcertAddDataToGeneralFile(myText);
    }
}
exports.InconcertAddDataToGeneralFile = InconcertAddDataToGeneralFile;
// Esta función agrega un registro de texto al archivo de registro segmentado
function InconcertAddDataToBlockFile(myText) {
    var blockFileNamePath = rootPath + 'storage/out/' + moment().format('x') + '.txt';
    myText.map(function (s) {
        InconcertAddTextToFile(blockFileNamePath, s);
    });
    return true;
}
exports.InconcertAddDataToBlockFile = InconcertAddDataToBlockFile;
// Esta función agrega un registro de texto al archivo indicado en su input
function InconcertAddTextToFile(myFile, myText) {
    /*
    fs.appendFile(myFile, myText + '\n', function (err) {
        if (err) {
            console.log('Save failed!');
            return false;
            //throw err;
        } else
            return true
    });
    */
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
    fs.readFile(generalFilePath, function (err, data) {
        if (err) {
            return console.error(err);
        }
        var blockSize = 50;
        var content = data.toString().split('\n');
        var totalRows = content.filter(function (r) { return r.length > 0; }).length;
        var blocks = Math.floor(totalRows / blockSize);
        console.log('Total rows: ' + content.length);
        // Hacemos un recorrido para los bloques identificados
        for (var i = 0; i < blocks; i++) {
            var blockContent = content.splice(0, blockSize);
            InconcertAddDataToBlockFile(blockContent);
            console.log(blockContent);
        }
        console.log('Total rows: ' + content.length);
    });
}
exports.InconcertSplitGeneralFileData = InconcertSplitGeneralFileData;
