"use strict";
exports.__esModule = true;
var log4js = require("log4js");
var moment = require("moment");
var path = require("path");
var fs = require("fs");
var ncp = require("ncp");
var mkdirp = require("mkdirp");
var rimraf = require("rimraf");
var multer = require("multer");
var extract = require("extract-zip");
var child_process = require("child_process");
var fse = require('fs-extra');
var zipFolder = require('zip-folder');
var mv = require('mv');
// Importo configuraciones
var app_config_1 = require("../config/app.config");
var promises_shared_1 = require("./promises.shared");
// Funcion para ejecutar comandos de consola
var exec = child_process.exec;
// Obtengo logger
var logger = log4js.getLogger('ServerScripts');
//funcion pipe asincronico
function PipeWriteFile(response, file) {
    //declaro bluebird para tener accesos a la funcion finally
    var Promise = require('bluebird');
    var ended = false;
    return new Promise(function (resolve, reject) {
        //creamos el pipe para el response
        response.pipe(file);
        //si todo resulta correcto
        function nice_ending() {
            if (!ended) {
                ended = true;
                resolve(true);
            }
        }
        //en caso de error
        function error_ending() {
            if (!ended) {
                ended = true;
                reject(false);
            }
        }
        file.on('finish', nice_ending);
        file.on('end', nice_ending);
        file.on('error', error_ending);
        file.on('close', error_ending);
    })["finally"](function () { return file.close(); });
}
exports.PipeWriteFile = PipeWriteFile;
function DeleteFileSync(file) {
    var fs = require('fs');
    fs.unlinkSync(file);
}
exports.DeleteFileSync = DeleteFileSync;
function FileProperty(filePath) {
    // Armo promesa para devolver
    return new Promise(function (resolve, reject) {
        // Chequeo si el archivo existe
        try {
            // Array con el resultado de la funcion
            var result = {};
            // Verifico que el path recibido corresponda a un directorio existente
            if (fs.existsSync(filePath) && fs.lstatSync(filePath).isFile()) {
                // Para cada archivo obtengo sus propiedades
                var fileStat = fs.lstatSync(filePath);
                var creationDate = moment(fileStat.birthtime);
                var updateDate = moment(fileStat.mtime);
                // Armo el objeto y lo agrego al array
                result = {
                    path: filePath,
                    isFile: fileStat.isFile(),
                    creationDate: creationDate,
                    updateDate: updateDate
                };
            }
            // Resuelvo con el resultado
            resolve(result);
        }
        catch (e) {
            // Algo fallo, lanzo error
            reject(e);
        }
    });
}
exports.FileProperty = FileProperty;
function ListFolderContent(folderPath) {
    // Armo promesa para devolver
    return new Promise(function (resolve, reject) {
        // Chequeo si el archivo existe
        try {
            // Array con el resultado de la funcion
            var result_1 = [];
            // Verifico que el path recibido corresponda a un directorio existente
            if (fs.existsSync(folderPath) && fs.lstatSync(folderPath).isDirectory()) {
                // Obtengo la lista de archivos del directorio
                var files = fs.readdirSync(folderPath);
                // Recorro el array obtenido
                files.forEach(function (fileName) {
                    // Para cada archivo obtengo sus propiedades
                    var filePath = path.join(folderPath, fileName);
                    var fileStat = fs.lstatSync(filePath);
                    var creationDate = moment(fileStat.birthtime);
                    var updateDate = moment(fileStat.mtime);
                    // Armo el objeto y lo agrego al array
                    result_1.push({
                        name: fileName,
                        path: filePath,
                        isFolder: fileStat.isDirectory(),
                        creationDate: creationDate,
                        updateDate: updateDate
                    });
                });
            }
            // Resuelvo con el resultado
            resolve(result_1);
        }
        catch (e) {
            // Algo fallo, lanzo error
            reject(e);
        }
    });
}
exports.ListFolderContent = ListFolderContent;
function CreateFolder(folderName) {
    // Verifico si el directorio a crear existe
    return ExistInFileSystem(folderName)
        .then(function (result) {
        // Si existe ya salgo
        if (result)
            return true;
        // Si la carpeta no existe la creo
        return new Promise(function (resolve, reject) {
            try {
                mkdirp(folderName, function (err) {
                    // Si no hay errores devuelvo true
                    resolve(err === null || err === undefined);
                });
            }
            catch (e) {
                // Algo fallo, lanzo error
                reject(e);
            }
        });
    });
}
exports.CreateFolder = CreateFolder;
function ExistInFileSystem(fileSystemPath) {
    // Armo promesa para devolver
    return new Promise(function (resolve, reject) {
        // Chequeo si el archivo existe
        try {
            fs.stat(fileSystemPath, function (err, stat) {
                // Si no hay errores el archivo existe
                resolve(err === null || err === undefined);
            });
        }
        catch (e) {
            // Algo fallo, lanzo error
            reject(e);
        }
    });
}
exports.ExistInFileSystem = ExistInFileSystem;
function TouchPath(fileSystemPath) {
    // Armo promesa para devolver
    return new Promise(function (resolve, reject) {
        // Actualizo fecha de modificacion y acceso
        try {
            // Obtengo la fecha actual
            var now = moment().toDate();
            // Actualizo fechas
            fs.utimes(fileSystemPath, now, now, function (err) {
                // Si no hay errores el archivo existe
                resolve(err === null || err === undefined);
            });
        }
        catch (e) {
            // Algo fallo, lanzo error
            reject(e);
        }
    });
}
exports.TouchPath = TouchPath;
function CopyFile(sourcePath, targetPath) {
    // Armo promesa para devolver
    return new Promise(function (resolve, reject) {
        try {
            // Copiamos archivo al destino
            fse.copy(sourcePath, targetPath, function (err) {
                // Si no hay errores el archivo se copio
                resolve(err === null || err === undefined);
            });
        }
        catch (e) {
            // Algo fallo, lanzo error
            reject(e);
        }
    });
}
exports.CopyFile = CopyFile;
function CopyFolder(sourcePath, targetPath) {
    // Verifico que la carpeta de destino exista
    return new Promise(function (resolve, reject) {
        try {
            fs.stat(targetPath, function (err, stat) {
                // Si no hay errores el archivo existe
                resolve(err === null || err === undefined);
            });
        }
        catch (e) {
            // Algo fallo, lanzo error
            reject(e);
        }
    }).then(function (resultExists) {
        // Si ya existe sigo
        if (resultExists)
            return true;
        // Si la carpeta no existe la creo
        return new Promise(function (resolve, reject) {
            try {
                mkdirp(targetPath, function (err) {
                    // Si no hay errores devuelvo true
                    resolve(err === null || err === undefined);
                });
            }
            catch (e) {
                // Algo fallo, lanzo error
                reject(e);
            }
        });
    }).then(function (resultMkDir) {
        // Copio la carpeta origen hacia la ruta destino
        return new Promise(function (resolve, reject) {
            try {
                ncp.ncp(sourcePath, targetPath, function (err) {
                    // Si no hay errores devuelvo true
                    resolve(err === null || err === undefined);
                });
            }
            catch (e) {
                // Algo fallo, lanzo error
                reject(e);
            }
        });
    });
}
exports.CopyFolder = CopyFolder;
function MoveFolder(sourceFolder, destFolder) {
    // Verifico que el directorio a mover exista
    return ExistInFileSystem(sourceFolder)
        .then(function (result) {
        // Si no existe no sigo
        if (!result)
            throw 'El directorio \'' + sourceFolder + '\' no existe';
        // Armo promesa para devolver
        return new Promise(function (resolve, reject) {
            // Elimino la carpeta recursivamente con rimraf
            try {
                fs.rename(sourceFolder, destFolder, function (err) {
                    // Si no hay errores devuelvo true
                    resolve(err === null || err === undefined);
                });
            }
            catch (e) {
                // Algo fallo, lanzo error
                reject(e);
            }
        });
    });
}
exports.MoveFolder = MoveFolder;
function MoveFolderOtherDevice(sourceFolder, destFolder) {
    // Verifico que el directorio a mover exista
    return ExistInFileSystem(sourceFolder)
        .then(function (result) {
        // Si no existe no sigo
        if (!result)
            throw 'El directorio \'' + sourceFolder + '\' no existe';
        // Armo promesa para devolver
        return new Promise(function (resolve, reject) {
            // Elimino la carpeta recursivamente con rimraf
            try {
                mv(sourceFolder, destFolder, function (err) {
                    // Si no hay errores devuelvo true
                    resolve(err === null || err === undefined);
                });
            }
            catch (e) {
                // Algo fallo, lanzo error
                reject(e);
            }
        });
    });
}
exports.MoveFolderOtherDevice = MoveFolderOtherDevice;
function DeleteFolder(folderPath) {
    // Armo promesa para devolver
    return new Promise(function (resolve, reject) {
        // Elimino la carpeta recursivamente con rimraf
        try {
            rimraf(folderPath, function (err) {
                // Si no hay errores devuelvo true
                resolve(err === null || err === undefined);
            });
        }
        catch (e) {
            // Algo fallo, lanzo error
            reject(e);
        }
    });
}
exports.DeleteFolder = DeleteFolder;
function DeleteFile(filePath) {
    // Armo promesa para devolver
    return new Promise(function (resolve, reject) {
        // Elimino el archivo
        try {
            fs.unlink(filePath, function (err) {
                // Si no hay errores devuelvo true
                resolve(err === null || err === undefined);
            });
        }
        catch (e) {
            // Algo fallo, lanzo error
            reject(e);
        }
    });
}
exports.DeleteFile = DeleteFile;
function ReadFileContent(fileName, encode, safe) {
    logger.info('ReadFileContent: ', fileName);
    // Armo promesa para devolver
    return new Promise(function (resolve, reject) {
        // Leo el contenido del archivo
        try {
            fs.readFile(fileName, encode, function (err, data) {
                logger.info('ReadFileContent - readFile - fileName: ', fileName);
                if (err) {
                    if (safe) {
                        return resolve(null);
                    }
                    else {
                        logger.info('ReadFileContent - readFile - err: ', err);
                        return reject(err);
                    }
                }
                else {
                    return resolve(data);
                }
            });
        }
        catch (e) {
            logger.info('ReadFileContent - error: ', e);
            // Algo fallo, lanzo error
            if (safe)
                resolve(null);
            else
                reject(e);
        }
    });
}
exports.ReadFileContent = ReadFileContent;
function FileToBase64(file) {
    return new Promise(function (resolve, reject) {
        try {
            // Lee data binaria.
            var buffer = fs.readFileSync(file);
            // Convierte la data binaria a cadena codificada en base64.
            return resolve(new Buffer(buffer).toString('base64'));
        }
        catch (e) {
            reject(e);
        }
    });
}
exports.FileToBase64 = FileToBase64;
function BufferFile(file) {
    return new Promise(function (resolve, reject) {
        try {
            // Lee data binaria.
            var buffer = fs.readFileSync(file);
            // Convierte la data binaria a cadena codificada en base64.
            return resolve(buffer);
        }
        catch (e) {
            reject(e);
        }
    });
}
exports.BufferFile = BufferFile;
function WriteFileContent(fileName, data, encode, safe) {
    // Armo promesa para devolver
    return new Promise(function (resolve, reject) {
        // Escribo el contenido del archivo
        try {
            fs.writeFile(fileName, data, { encoding: encode }, function (err) {
                if (err) {
                    if (safe)
                        return resolve(null);
                    else
                        return reject(err);
                }
                else {
                    return resolve(true);
                }
            });
        }
        catch (e) {
            // Algo fallo, lanzo error
            if (safe)
                resolve(null);
            else
                reject(e);
        }
    });
}
exports.WriteFileContent = WriteFileContent;
function ZipFolder(srcFolder, zipFilePath) {
    // Armo promesa para devolver
    return new Promise(function (resolve, reject) {
        // Comprimo la carpeta en el filename recibido
        try {
            zipFolder(srcFolder, zipFilePath, function (err) {
                // Si no hay errores devuelvo true
                resolve(err === null || err === undefined);
            });
        }
        catch (e) {
            // Algo fallo, lanzo error
            reject(e);
        }
    });
}
exports.ZipFolder = ZipFolder;
function UnZipFolder(zipFilePath, destinationPath) {
    // Si el path de destino no existe uso el mismo nombre del archivo
    destinationPath = destinationPath || zipFilePath;
    // Armo promesa para devolver
    return new Promise(function (resolve, reject) {
        // Descomprimo el archivo en carpeta con rl propio filename
        try {
            extract(zipFilePath, {
                dir: destinationPath
            }, function (err) {
                if (err) {
                    return reject(err);
                }
                else {
                    return resolve(true);
                }
            });
        }
        catch (e) {
            // Algo fallo, lanzo error
            reject(e);
        }
    });
}
exports.UnZipFolder = UnZipFolder;
function UnRarFolder(rarFilePath, destinationPath) {
    // Si el path de destino no existe uso el mismo nombre del archivo
    destinationPath = destinationPath || rarFilePath;
    // Creo el directorio para descomprimor
    return CreateFolder(destinationPath)
        .then(function (result) {
        // Si existe ya salgo
        if (!result)
            throw 'No se pudo crear el directorio \'' + destinationPath + '\'';
        // Armo promesa para devolver
        return new Promise(function (resolve, reject) {
            // Descomprimo el archivo en carpeta con rl propio filename
            try {
                // Armo el comando para descomprimir el rar
                var cmd = 'unrar x "' + rarFilePath + '" "' + destinationPath + '"';
                // Ejecuto el comando y obtengo el resultado
                exec(cmd, function (err, stdout, stderr) {
                    if (err) {
                        return reject(err);
                    }
                    else {
                        return resolve(true);
                    }
                });
            }
            catch (e) {
                // Algo fallo, lanzo error
                reject(e);
            }
        });
    });
}
exports.UnRarFolder = UnRarFolder;
function GetFolderTree(folderPath, extensionExclude, extensionFilter) {
    // Armo promesa para devolver
    return new Promise(function (resolve, reject) {
        // Si los filtros me vienen vacios los inicializo
        extensionExclude = extensionExclude || [];
        extensionFilter = extensionFilter || [];
        // Funcion para buscar archivos recurisvamente
        var walk = function (dir, obj, done) {
            // Busco los elementos en el directorio
            fs.readdir(dir, function (err, list) {
                // Si hay errores no sigo
                if (err)
                    return done(err);
                // Obtengo cantidad de elementos encontrados
                var pending = list.length;
                // Si no hay elementos ya salgo
                if (!pending)
                    return done(null);
                // Recorro elementos obtenidos
                list.forEach(function (fileName) {
                    // Obtengo la ruta del elemento
                    var filePath = path.resolve(dir, fileName);
                    // Obtengo propiedades del elemento
                    fs.stat(filePath, function (err, stat) {
                        // Evaluo si el elemento es un directorio
                        if (stat && stat.isDirectory()) {
                            // Armo el el objeto directorio
                            var objDirectory_1 = {
                                name: fileName,
                                relativePath: path.relative(folderPath, filePath).replace(/\\/g, '/'),
                                fullPath: filePath,
                                type: 'directory',
                                children: []
                            };
                            // Agrego el directorio al arbol
                            obj.push(objDirectory_1);
                            // Llamo a la funcion recursivamente
                            walk(filePath, objDirectory_1.children, function (err, res) {
                                // Obtengo el size del directorio completo
                                objDirectory_1.size = objDirectory_1.children.reduce(function (prev, cur) { return prev + cur.size; }, 0);
                                // Chequeo si quedan mas elementos para procesar
                                if (!--pending)
                                    done(null);
                            });
                        }
                        else {
                            // Obtengo la extension del archivo
                            var fileExtension = path.extname(fileName).toLowerCase().slice(1);
                            // Flag para saber si hay que agregarlo o no
                            var skipFile = false;
                            // Si tengo exclusion de extensiones y la extension esta incluida activo el skip
                            if (fileExtension && extensionExclude.length && extensionExclude.indexOf(fileExtension) >= 0)
                                skipFile = true;
                            // Si tengo filtro de extensiones y la extension no esta incluida activo el skip
                            if (extensionFilter.length && (extensionFilter.indexOf(fileExtension) === -1 || !fileExtension))
                                skipFile = true;
                            // Si no esta el skip lo agrego a la lista
                            if (!skipFile) {
                                // Armo el el objeto directorio
                                var objFile = {
                                    name: fileName,
                                    type: 'file',
                                    extension: fileExtension,
                                    relativePath: path.relative(folderPath, filePath).replace(/\\/g, '/'),
                                    fullPath: filePath,
                                    size: stat.size
                                };
                                // Agrego el archivo al arbol
                                obj.push(objFile);
                            }
                            // Chequeo si quedan mas elementos para procesar
                            if (!--pending)
                                done(null);
                        }
                    });
                });
            });
        };
        // Obtengo el nombre de la carpeta
        var folderName = path.basename(folderPath);
        // Armo el el objeto del directorio principal
        var objMainDirectory = {
            name: folderName,
            type: 'directory',
            relativePath: path.relative(folderPath, folderPath).replace(/\\/g, '/'),
            fullPath: folderPath,
            children: []
        };
        // Objeto arbol que voy a devolver
        var folderTree = [];
        // Agrego el directorio al arbol
        folderTree.push(objMainDirectory);
        // Lanzo el walker y le paso la referencia a la carpeta principal
        walk(folderPath, objMainDirectory.children, function (err, results) {
            // Si hubo algun error hago el reject de la promesa
            if (err)
                return reject(err);
            // Obtengo el size del directorio completo
            objMainDirectory.size = objMainDirectory.children.reduce(function (prev, cur) { return prev + cur.size; }, 0);
            //Devuelvo el objeto arbol completo
            resolve(folderTree);
        });
    });
}
exports.GetFolderTree = GetFolderTree;
function GetFolderFiles(folderPath, extensionExclude, extensionFilter, recursive) {
    // Armo promesa para devolver
    return new Promise(function (resolve, reject) {
        // Si los filtros me vienen vacios los inicializo
        extensionExclude = extensionExclude || [];
        extensionFilter = extensionFilter || [];
        recursive = (recursive === true);
        // Funcion para buscar archivos recurisvamente
        var walk = function (dir, obj, done) {
            // Busco los elementos en el directorio
            fs.readdir(dir, function (err, list) {
                // Si hay errores no sigo
                if (err)
                    return done(err);
                // Obtengo cantidad de elementos encontrados
                var pending = list.length;
                // Si no hay elementos ya salgo
                if (!pending)
                    return done(null);
                // Recorro elementos obtenidos
                list.forEach(function (fileName) {
                    // Obtengo la ruta del elemento
                    var filePath = path.resolve(dir, fileName);
                    // Obtengo propiedades del elemento
                    fs.stat(filePath, function (err, stat) {
                        // Evaluo si el elemento es un directorio
                        if (stat && stat.isDirectory()) {
                            // Armo el el objeto directorio
                            var objDirectory = {
                                name: fileName,
                                relativePath: path.relative(folderPath, filePath).replace(/\\/g, '/'),
                                fullPath: filePath,
                                type: 'directory',
                                children: []
                            };
                            // Agrego el directorio al arbol
                            obj.push(objDirectory);
                            // Segun el valor del flag proceso la carpeta recursivamente o no
                            if (recursive) {
                                // Llamo a la funcion recursivamente
                                walk(filePath, obj, function (err, res) {
                                    // Chequeo si quedan mas elementos para procesar
                                    if (!--pending)
                                        done(null);
                                });
                            }
                            else {
                                // Chequeo si quedan mas elementos para procesar
                                if (!--pending)
                                    done(null);
                            }
                        }
                        else {
                            // Obtengo la extension del archivo
                            var fileExtension = path.extname(fileName).toLowerCase().slice(1);
                            // Flag para saber si hay que agregarlo o no
                            var skipFile = false;
                            // Si tengo exclusion de extensiones y la extension esta incluida activo el skip
                            if (fileExtension && extensionExclude.length && extensionExclude.indexOf(fileExtension) >= 0)
                                skipFile = true;
                            // Si tengo filtro de extensiones y la extension no esta incluida activo el skip
                            if (extensionFilter.length && (extensionFilter.indexOf(fileExtension) === -1 || !fileExtension))
                                skipFile = true;
                            // Si no esta el skip lo agrego a la lista
                            if (!skipFile) {
                                // Armo el el objeto directorio
                                var objFile = {
                                    name: fileName,
                                    type: 'file',
                                    extension: fileExtension,
                                    relativePath: path.relative(folderPath, filePath).replace(/\\/g, '/'),
                                    fullPath: filePath,
                                    size: stat.size
                                };
                                // Agrego el archivo al arbol
                                obj.push(objFile);
                            }
                            // Chequeo si quedan mas elementos para procesar
                            if (!--pending)
                                done(null);
                        }
                    });
                });
            });
        };
        // Objeto arbol que voy a devolver
        var folderFiles = [];
        // Lanzo el walker y le paso la referencia a la carpeta principal
        walk(folderPath, folderFiles, function (err, results) {
            // Verifico si hubo algun error
            if (err) {
                // Obtengo mensajes de error
                var errorMsg = (typeof err === 'string' ? err : err.message || err.description || '');
                // Escribo a log
                logger.error('Error al consultar archivos de la carpeta snapshot \'' + folderPath + '\': ' + errorMsg);
                // Devuelvo array vacío
                resolve([]);
            }
            else {
                // Devuelvo el objeto arbol completo
                resolve(folderFiles);
            }
        });
    });
}
exports.GetFolderFiles = GetFolderFiles;
function UploadFileToServer(fileName, destFolder, req, res, types, fieldName, single, replace, fileSizeLimit) {
    // Valores por defecto
    single = (single === false ? single : true);
    fieldName = (fieldName ? fieldName : 'file');
    replace = (replace === false ? replace : true);
    fileSizeLimit = (fileSizeLimit ? fileSizeLimit : app_config_1.FILE_UPLOAD_LIMIT);
    // Inicializo contador de multer
    req.multerCounter = 0;
    // Configuro el storage de multer
    var storageEngine = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, destFolder);
        },
        filename: function (req, file, cb) {
            cb(null, fileName || file.originalname);
        }
    });
    // Armo el filtro de tipo de archivos
    var fileFilter = function (req, file, cb) {
        // Incremento contador
        req.multerCounter++;
        // Armo el regex para matchear con el filename
        var typesRegEx = '\.(' + (types.toLowerCase() || '.+') + ')$';
        var regEx = new RegExp(typesRegEx);
        // Si me llego un tipo verifico que el archivo matchee
        if (types && !file.originalname.toLowerCase().match(regEx)) {
            // Error de tamaño de archivo
            logger.error('El archivo recibido no está dentro de los tipos permitidos  (' + types.toLowerCase() + ').');
            // return cb('ERROR_FILE_TYPE_NOT_ALLOWED' + '|' + types.toLowerCase().replace(/\|/g, ' '));
            return cb(new Error('Only ' + types.toLowerCase() + ' files are allowed!'));
        }
        // Segun el valor del flag de replace verifico si el archivo existe
        if (replace) {
            // Paso el filtro, ejecuto callback
            cb(null, true);
        }
        else {
            // Verifico si el archivo existe
            ExistInFileSystem(path.join(destFolder, file.originalname))
                .then(function (result) {
                // Si el archivo existe devuelvo false
                return cb(null, !result);
            });
        }
    };
    // Handler para el upload
    var upload;
    // Si segun el caso uso funcion para un archivo o un array
    if (single) {
        upload = multer({
            storage: storageEngine,
            fileFilter: fileFilter,
            limits: { fileSize: fileSizeLimit }
        }).single(fieldName);
    }
    else {
        upload = multer({
            storage: storageEngine,
            fileFilter: fileFilter,
            limits: { fileSize: fileSizeLimit }
        }).array(fieldName);
    }
    // Obtengo la ruta temporal del template a subir
    var tempFilename = path.join(destFolder, fileName);
    // Si ya existe el archivo a subir lo elimino
    return promises_shared_1.DummyPromise()
        .then(function (result) {
        // Si no me llego archivo no borro nada (se usa el nombre original)
        if (!fileName)
            return true;
        // Si tengo filename lo borro
        return DeleteFolder(tempFilename);
    }).then(function (resultDelete) {
        // Verifico que el delete haya funcionado bien
        if (!resultDelete)
            throw 'Cannot delete existing file \'' + tempFilename + '\'';
        // Sigo con una promesa armada a mano (el multer es con callbacks)
        return new Promise(function (resolve, reject) {
            // Ejecuto el upload
            return upload(req, res, function (err) {
                // Verifico errores
                if (err && err.code === 'LIMIT_FILE_SIZE') {
                    // Error de tamaño de archivo
                    logger.error('El archivo recibido supera el límite permitido (' + fileSizeLimit.toString() + 'bytes).');
                    reject('ERROR_FILE_UPLOAD_LIMIT' + '|' + (Math.round(100.00 * fileSizeLimit / 1024 / 1024) / 100.00).toString());
                }
                else if (err) {
                    // Error generico
                    logger.error('Error al subir archivo: ' + err);
                    reject(err);
                }
                else {
                    // Resultado correcto
                    resolve(true);
                }
            });
        });
    });
}
exports.UploadFileToServer = UploadFileToServer;
// export function GenerateSnapshot(fileURL: string, fileDest: string, thumbnail?: boolean): Promise<boolean> {
//     // Armo promesa para devolver
//     return new Promise<boolean>((resolve, reject) => {
//         // Escribo a log
//         logger.info('Generando snapshot para \'' + fileURL + '\' en \'' + fileDest + '\'');
//         // Browser y pagina del API de puppeteer
//         let browser: puppeteer.Browser;
//         let page: puppeteer.Page;
//         // Opciones para inicializar el chromium
//         let puppeteerOpts: puppeteer.LaunchOptions = {
//             args: ['--no-sandbox', '--disable-setuid-sandbox'],
//             ignoreHTTPSErrors: true,
//         };
//         // Si tengo configurado un ejecutable para chromium lo uso
//         if (CHROMIUM_EXEC_PATH) puppeteerOpts.executablePath = CHROMIUM_EXEC_PATH;
//         // Opciones para el snapshot
//         let screenshotOpts: puppeteer.ScreenshotOptions = {
//             path: fileDest,
//             type: (TEMPLATE_PREVIEW_EXT === '.jpg' ? 'jpeg' : 'png'),
//             quality: (thumbnail ? 75 : 100),
//             fullPage: false,
//             omitBackground: false,
//         };
//         // Viewport del navegador
//         let viewport: puppeteer.Viewport = {
//             width: 1366,
//             height: 768,
//             deviceScaleFactor: (thumbnail ? 0.3 : 1),
//             isMobile: false,
//             hasTouch: false,
//             isLandscape: false,
//         };
//         // Opciones de navegación
//         let navigationOpts: puppeteer.NavigationOptions = {
//             timeout: 10000
//         };
//         // Flags de pasos completados
//         let navigationCompleted: boolean = false;
//         let snapshotCompleted: boolean = false;
//         let closeCompleted: boolean = false;
//         // Inicializo el browser
//         return puppeteer.launch(puppeteerOpts).then(
//             resultBrowser => {
//                 // Obtengo el browser
//                 browser = resultBrowser;
//                 // Inicializo nueva pagina
//                 return browser.newPage();
//             }
//         ).then(
//             resultPage => {
//                 // Obtengo la página
//                 page = resultPage;
//                 // Establezco el viewport
//                 page.setViewport(viewport);
//                 // Navego hacia la URL
//                 return page.goto(fileURL, navigationOpts);
//             }
//         ).then(
//             resultGoto => {
//                 // Actualizo el flag
//                 navigationCompleted = true;
//                 // Hago el screenshot de la página
//                 return page.screenshot(screenshotOpts);
//             }
//         ).then(
//             resultScreenshot => {
//                 // Actualizo el flag
//                 snapshotCompleted = true;
//                 // Cierro el browser
//                 return browser.close();
//             }
//         ).then(
//             resultClose => {
//                 // Actualizo el flag
//                 closeCompleted = true;
//                 // Todo OK, sigo
//                 return true;
//             }
//         ).catch(
//             err => {
//                 // Obtengo mensajes de error
//                 let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || '');
//                 // Escribo a log
//                 logger.error('Error al generar snapshot (' + fileDest + '): ' + errorMsg);
//                 // Si no se completo la navegacion saco el snapshot con lo que hay
//                 if (page && !navigationCompleted) {
//                     // Escribo a log
//                     logger.warn('La navegación alcanzó el tiempo limite (' + navigationOpts.timeout.toString() + 'ms). Se generará snapshot con la página parcialmente abierta.');
//                     // Hago el screenshot de la página
//                     return page.screenshot(screenshotOpts);
//                 } else {
//                     // No hago nada
//                     return null;
//                 }
//             }
//         ).then(
//             resultScreenshot => {
//                 // Si el browser esta abierto lo cierro
//                 if (browser && !closeCompleted)
//                     return browser.close();
//                 else
//                     return null;
//             }
//         ).then(
//             resultClose => {
//                 // Escribo a log
//                 logger.info('Snapshot generado exitosamente (' + fileDest + ')');
//                 // Resuelvo con el estado completo del proceso
//                 resolve(navigationCompleted && snapshotCompleted && closeCompleted);
//             }
//         ).catch(
//             err => {
//                 // Obtengo mensajes de error
//                 let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || '');
//                 // Escribo a log
//                 logger.error('Error al generar snapshot (' + fileDest + '): ' + errorMsg);
//                 // Verifico una ultima vez si el close no se hizo
//                 if (browser && !closeCompleted) browser.close();
//                 // Algo fallo, devuelvo false
//                 resolve(false);
//             }
//         );
//     });
// }
function JoinPath(route, fileName) {
    return path.join(route, fileName);
}
exports.JoinPath = JoinPath;
