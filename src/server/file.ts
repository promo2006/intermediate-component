
import * as moment from 'moment';

const fs = require('fs');

var settings = require("settings");

const rootPath : string = settings.PROJECT_DIR + 'server/';
const generalFilePath : string = rootPath + 'storage/file.txt';

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
        return InconcertAddTextToFile(generalFilePath, myText);
    } else {
        return InconcertAddDataToGeneralFile(myText);
    }
}

// Esta función agrega un registro de texto al archivo de registro segmentado
export function InconcertAddDataToBlockFile(myText : string[]) : boolean {
    let blockFileNamePath : string = rootPath + 'storage/out/' + moment().format('x') + '.txt';
    myText.map(
        s => {
            InconcertAddTextToFile(blockFileNamePath, s);
        }
    );

    return true;
}

// Esta función agrega un registro de texto al archivo indicado en su input
export function InconcertAddTextToFile(myFile : string, myText : string) : boolean {
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
    } catch (err) {
        console.log('Save failed!');
    }

    return true;
}

// Esta función genera un archivo por cada 50 registros existentes en el registro principal
export function InconcertSplitGeneralFileData() : void {
    fs.readFile(generalFilePath, function (err, data) {
        if (err) {
            return console.error(err);
        }
        
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
}