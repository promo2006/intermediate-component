import * as log4js from 'log4js';
import * as moment from 'moment';
import * as path from 'path';
import * as fs from 'fs';
import * as ncp from 'ncp';
import * as mkdirp from 'mkdirp';
import * as rimraf from 'rimraf';
import * as multer from 'multer';
import * as extract from 'extract-zip';
import * as child_process from 'child_process';
let fse = require('fs-extra');
let zipFolder: any = require('zip-folder');
let mv = require('mv');

// Importo configuraciones
import { FILE_UPLOAD_LIMIT } from '../config/app.config';

import { DummyPromise } from './promises.shared';

// Funcion para ejecutar comandos de consola
let exec = child_process.exec;

// Obtengo logger
let logger = log4js.getLogger('ServerScripts');

//funcion pipe asincronico
export function PipeWriteFile(response: any, file: any): Promise<boolean> {
	//declaro bluebird para tener accesos a la funcion finally
	let Promise = require('bluebird');
	let ended = false;
	return new Promise(function (resolve: any, reject: any) {
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
	}).finally(() => file.close());
}

export function DeleteFileSync(file: any) {
	var fs = require('fs');
	fs.unlinkSync(file);
}

export function FileProperty(filePath: string): Promise<any[]> {
	// Armo promesa para devolver
	return new Promise(function (resolve, reject) {
		// Chequeo si el archivo existe
		try {
			// Array con el resultado de la funcion
			let result: any = {};
			// Verifico que el path recibido corresponda a un directorio existente
			if (fs.existsSync(filePath) && fs.lstatSync(filePath).isFile()) {
				// Para cada archivo obtengo sus propiedades
				let fileStat = fs.lstatSync(filePath);
				let creationDate = moment(fileStat.birthtime);
				let updateDate = moment(fileStat.mtime);
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
		} catch (e) {
			// Algo fallo, lanzo error
			reject(e);
		}
	});
}

export function ListFolderContent(folderPath: string): Promise<any[]> {

	// Armo promesa para devolver
	return new Promise(function (resolve, reject) {
		// Chequeo si el archivo existe
		try {
			// Array con el resultado de la funcion
			let result: any[] = [];

			// Verifico que el path recibido corresponda a un directorio existente
			if (fs.existsSync(folderPath) && fs.lstatSync(folderPath).isDirectory()) {

				// Obtengo la lista de archivos del directorio
				let files: string[] = fs.readdirSync(folderPath);

				// Recorro el array obtenido
				files.forEach(
					fileName => {
						// Para cada archivo obtengo sus propiedades
						let filePath = path.join(folderPath, fileName);
						let fileStat = fs.lstatSync(filePath);
						let creationDate = moment(fileStat.birthtime);
						let updateDate = moment(fileStat.mtime);
						// Armo el objeto y lo agrego al array
						result.push(
							{
								name: fileName,
								path: filePath,
								isFolder: fileStat.isDirectory(),
								creationDate: creationDate,
								updateDate: updateDate,
							}
						);
					}
				);
			}
			// Resuelvo con el resultado
			resolve(result);
		} catch (e) {
			// Algo fallo, lanzo error
			reject(e);
		}
	});
}

export function CreateFolder(folderName: string): Promise<boolean> {

	// Verifico si el directorio a crear existe
	return ExistInFileSystem(folderName)
		.then(
			result => {
				// Si existe ya salgo
				if (result) return true;

				// Si la carpeta no existe la creo
				return new Promise<boolean>(function (resolve, reject) {
					try {
						mkdirp(folderName, function (err) {
							// Si no hay errores devuelvo true
							resolve(err === null || err === undefined);
						});
					} catch (e) {
						// Algo fallo, lanzo error
						reject(e);
					}
				});
			}
		);
}

export function ExistInFileSystem(fileSystemPath: string): Promise<boolean> {

	// Armo promesa para devolver
	return new Promise(function (resolve, reject) {
		// Chequeo si el archivo existe
		try {
			fs.stat(fileSystemPath, function (err, stat) {
				// Si no hay errores el archivo existe
				resolve(err === null || err === undefined);
			});
		} catch (e) {
			// Algo fallo, lanzo error
			reject(e);
		}
	});
}

export function TouchPath(fileSystemPath: string): Promise<boolean> {

	// Armo promesa para devolver
	return new Promise(function (resolve, reject) {
		// Actualizo fecha de modificacion y acceso
		try {
			// Obtengo la fecha actual
			let now: Date = moment().toDate();
			// Actualizo fechas
			fs.utimes(fileSystemPath, now, now, function (err) {
				// Si no hay errores el archivo existe
				resolve(err === null || err === undefined);
			});
		} catch (e) {
			// Algo fallo, lanzo error
			reject(e);
		}
	});
}

export function CopyFile(sourcePath: string, targetPath: string): Promise<boolean> {

	// Armo promesa para devolver
	return new Promise(function (resolve, reject) {
		try {
			// Copiamos archivo al destino
			fse.copy(sourcePath, targetPath, function (err) {
				// Si no hay errores el archivo se copio
				resolve(err === null || err === undefined);
			});
		} catch (e) {
			// Algo fallo, lanzo error
			reject(e);
		}
	});
}

export function CopyFolder(sourcePath: string, targetPath: string): Promise<boolean> {

	// Verifico que la carpeta de destino exista
	return new Promise<boolean>(function (resolve, reject) {
		try {
			fs.stat(targetPath, function (err, stat) {
				// Si no hay errores el archivo existe
				resolve(err === null || err === undefined);
			});
		} catch (e) {
			// Algo fallo, lanzo error
			reject(e);
		}
	}).then(
		resultExists => {
			// Si ya existe sigo
			if (resultExists) return true;

			// Si la carpeta no existe la creo
			return new Promise<boolean>(function (resolve, reject) {
				try {
					mkdirp(targetPath, function (err) {
						// Si no hay errores devuelvo true
						resolve(err === null || err === undefined);
					});
				} catch (e) {
					// Algo fallo, lanzo error
					reject(e);
				}
			});
		}
	).then(
		resultMkDir => {
			// Copio la carpeta origen hacia la ruta destino
			return new Promise<boolean>(function (resolve, reject) {
				try {
					ncp.ncp(sourcePath, targetPath, function (err) {
						// Si no hay errores devuelvo true
						resolve(err === null || err === undefined);
					});
				} catch (e) {
					// Algo fallo, lanzo error
					reject(e);
				}
			});
		}
	);
}

export function MoveFolder(sourceFolder: string, destFolder: string): Promise<boolean> {

	// Verifico que el directorio a mover exista
	return ExistInFileSystem(sourceFolder)
		.then(
			result => {
				// Si no existe no sigo
				if (!result) throw 'El directorio \'' + sourceFolder + '\' no existe';

				// Armo promesa para devolver
				return new Promise<boolean>((resolve, reject) => {
					// Elimino la carpeta recursivamente con rimraf
					try {
						fs.rename(sourceFolder, destFolder, function (err) {
							// Si no hay errores devuelvo true
							resolve(err === null || err === undefined);
						});
					} catch (e) {
						// Algo fallo, lanzo error
						reject(e);
					}
				});
			}
		);
}

export function MoveFolderOtherDevice(sourceFolder: string, destFolder: string): Promise<boolean> {

	// Verifico que el directorio a mover exista
	return ExistInFileSystem(sourceFolder)
		.then(
			result => {
				// Si no existe no sigo
				if (!result) throw 'El directorio \'' + sourceFolder + '\' no existe';

				// Armo promesa para devolver
				return new Promise<boolean>((resolve, reject) => {
					// Elimino la carpeta recursivamente con rimraf
					try {
						mv(sourceFolder, destFolder, function (err) {
							// Si no hay errores devuelvo true
							resolve(err === null || err === undefined);
						});
					} catch (e) {
						// Algo fallo, lanzo error
						reject(e);
					}
				});
			}
		);
}

export function DeleteFolder(folderPath: any): Promise<boolean> {

	// Armo promesa para devolver
	return new Promise(function (resolve, reject) {
		// Elimino la carpeta recursivamente con rimraf
		try {
			rimraf(folderPath, function (err) {
				// Si no hay errores devuelvo true
				resolve(err === null || err === undefined);
			});
		} catch (e) {
			// Algo fallo, lanzo error
			reject(e);
		}
	});
}

export function DeleteFile(filePath: any): Promise<boolean> {

	// Armo promesa para devolver
	return new Promise(function (resolve, reject) {
		// Elimino el archivo
		try {
			fs.unlink(filePath, function (err) {
				// Si no hay errores devuelvo true
				resolve(err === null || err === undefined);
			});
		} catch (e) {
			// Algo fallo, lanzo error
			reject(e);
		}
	});
}

export function ReadFileContent(fileName: string, encode: string, safe?: boolean): Promise<string> {

	logger.info('ReadFileContent: ', fileName);
	// Armo promesa para devolver
	return new Promise(function (resolve, reject) {
		// Leo el contenido del archivo
		try {
			fs.readFile(fileName, encode, function (err: any, data: any) {
				logger.info('ReadFileContent - readFile - fileName: ', fileName);
				if (err) {
					if (safe) {
						return resolve(null);
					} else {
						logger.info('ReadFileContent - readFile - err: ', err);
						return reject(err);
					}
				} else {
					return resolve(data);
				}
			});
		} catch (e) {
			logger.info('ReadFileContent - error: ', e);
			// Algo fallo, lanzo error
			if (safe)
				resolve(null);
			else
				reject(e);
		}
	});
}

export function FileToBase64(file: any) {
	return new Promise(function (resolve, reject) {
		try {
			// Lee data binaria.
			var buffer = fs.readFileSync(file);
			// Convierte la data binaria a cadena codificada en base64.
			return resolve(new Buffer(buffer).toString('base64'));
		} catch (e) {
			reject(e);
		}
	});
}

export function BufferFile(file: any) {
	return new Promise(function (resolve, reject) {
		try {
			// Lee data binaria.
			var buffer = fs.readFileSync(file);
			// Convierte la data binaria a cadena codificada en base64.
			return resolve(buffer);
		} catch (e) {
			reject(e);
		}
	});
}

export function WriteFileContent(fileName: string, data: string, encode: string, safe?: boolean): Promise<boolean> {

	// Armo promesa para devolver
	return new Promise(function (resolve, reject) {
		// Escribo el contenido del archivo
		try {
			fs.writeFile(fileName, data, { encoding: encode }, function (err: any) {
				if (err) {
					if (safe)
						return resolve(null);
					else
						return reject(err);
				} else {
					return resolve(true);
				}
			});
		} catch (e) {
			// Algo fallo, lanzo error
			if (safe)
				resolve(null);
			else
				reject(e);
		}
	});
}

export function ZipFolder(srcFolder: string, zipFilePath: string): Promise<boolean> {

	// Armo promesa para devolver
	return new Promise<boolean>((resolve, reject) => {
		// Comprimo la carpeta en el filename recibido
		try {
			zipFolder(srcFolder, zipFilePath, function (err: any) {
				// Si no hay errores devuelvo true
				resolve(err === null || err === undefined);
			});
		} catch (e) {
			// Algo fallo, lanzo error
			reject(e);
		}
	});
}

export function UnZipFolder(zipFilePath: string, destinationPath?: string): Promise<boolean> {

	// Si el path de destino no existe uso el mismo nombre del archivo
	destinationPath = destinationPath || zipFilePath;

	// Armo promesa para devolver
	return new Promise<boolean>((resolve, reject) => {
		// Descomprimo el archivo en carpeta con rl propio filename
		try {
			extract(
				zipFilePath,
				{
					dir: destinationPath
				},
				function (err) {
					if (err) {
						return reject(err);
					} else {
						return resolve(true);
					}
				}
			);
		} catch (e) {
			// Algo fallo, lanzo error
			reject(e);
		}
	});
}

export function UnRarFolder(rarFilePath: string, destinationPath?: string): Promise<boolean> {

	// Si el path de destino no existe uso el mismo nombre del archivo
	destinationPath = destinationPath || rarFilePath;

	// Creo el directorio para descomprimor
	return CreateFolder(destinationPath)
		.then(
			result => {
				// Si existe ya salgo
				if (!result) throw 'No se pudo crear el directorio \'' + destinationPath + '\'';

				// Armo promesa para devolver
				return new Promise<boolean>((resolve, reject) => {
					// Descomprimo el archivo en carpeta con rl propio filename
					try {
						// Armo el comando para descomprimir el rar
						let cmd: string = 'unrar x "' + rarFilePath + '" "' + destinationPath + '"';

						// Ejecuto el comando y obtengo el resultado
						exec(cmd, function (err: any, stdout: string, stderr: string) {
							if (err) {
								return reject(err);
							} else {
								return resolve(true);
							}
						});
					} catch (e) {
						// Algo fallo, lanzo error
						reject(e);
					}
				});
			}
		);
}

export function GetFolderTree(folderPath: string, extensionExclude?: string[], extensionFilter?: string[]): Promise<any[]> {

	// Armo promesa para devolver
	return new Promise(function (resolve, reject) {

		// Si los filtros me vienen vacios los inicializo
		extensionExclude = extensionExclude || [];
		extensionFilter = extensionFilter || [];

		// Funcion para buscar archivos recurisvamente
		let walk = function (dir: string, obj: any[], done: any) {

			// Busco los elementos en el directorio
			fs.readdir(dir, function (err, list) {

				// Si hay errores no sigo
				if (err) return done(err);

				// Obtengo cantidad de elementos encontrados
				let pending = list.length;
				// Si no hay elementos ya salgo
				if (!pending) return done(null);

				// Recorro elementos obtenidos
				list.forEach(function (fileName) {

					// Obtengo la ruta del elemento
					let filePath: string = path.resolve(dir, fileName);

					// Obtengo propiedades del elemento
					fs.stat(filePath, function (err, stat) {

						// Evaluo si el elemento es un directorio
						if (stat && stat.isDirectory()) {

							// Armo el el objeto directorio
							let objDirectory: any = {
								name: fileName,
								relativePath: path.relative(folderPath, filePath).replace(/\\/g, '/'),
								fullPath: filePath,
								type: 'directory',
								children: []
							};

							// Agrego el directorio al arbol
							obj.push(objDirectory);

							// Llamo a la funcion recursivamente
							walk(filePath, objDirectory.children, function (err: any, res: any[]) {
								// Obtengo el size del directorio completo
								objDirectory.size = objDirectory.children.reduce((prev: number, cur: any) => prev + cur.size, 0);
								// Chequeo si quedan mas elementos para procesar
								if (!--pending) done(null);
							});
						} else {
							// Obtengo la extension del archivo
							let fileExtension: string = path.extname(fileName).toLowerCase().slice(1);

							// Flag para saber si hay que agregarlo o no
							let skipFile: boolean = false;
							// Si tengo exclusion de extensiones y la extension esta incluida activo el skip
							if (fileExtension && extensionExclude.length && extensionExclude.indexOf(fileExtension) >= 0) skipFile = true;
							// Si tengo filtro de extensiones y la extension no esta incluida activo el skip
							if (extensionFilter.length && (extensionFilter.indexOf(fileExtension) === -1 || !fileExtension)) skipFile = true;

							// Si no esta el skip lo agrego a la lista
							if (!skipFile) {
								// Armo el el objeto directorio
								let objFile: any = {
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
							if (!--pending) done(null);
						}
					});
				});
			});
		};

		// Obtengo el nombre de la carpeta
		let folderName: string = path.basename(folderPath);
		// Armo el el objeto del directorio principal
		let objMainDirectory: any = {
			name: folderName,
			type: 'directory',
			relativePath: path.relative(folderPath, folderPath).replace(/\\/g, '/'),
			fullPath: folderPath,
			children: []
		};

		// Objeto arbol que voy a devolver
		let folderTree: any = [];
		// Agrego el directorio al arbol
		folderTree.push(objMainDirectory);

		// Lanzo el walker y le paso la referencia a la carpeta principal
		walk(folderPath, objMainDirectory.children, function (err: any, results: any[]) {
			// Si hubo algun error hago el reject de la promesa
			if (err) return reject(err);
			// Obtengo el size del directorio completo
			objMainDirectory.size = objMainDirectory.children.reduce((prev: number, cur: any) => prev + cur.size, 0);
			//Devuelvo el objeto arbol completo
			resolve(folderTree);
		});
	});
}

export function GetFolderFiles(folderPath: string, extensionExclude?: string[], extensionFilter?: string[], recursive?: boolean): Promise<any[]> {

	// Armo promesa para devolver
	return new Promise(function (resolve, reject) {

		// Si los filtros me vienen vacios los inicializo
		extensionExclude = extensionExclude || [];
		extensionFilter = extensionFilter || [];
		recursive = (recursive === true);

		// Funcion para buscar archivos recurisvamente
		let walk = function (dir: string, obj: any[], done: any) {

			// Busco los elementos en el directorio
			fs.readdir(dir, function (err, list) {

				// Si hay errores no sigo
				if (err) return done(err);

				// Obtengo cantidad de elementos encontrados
				let pending = list.length;
				// Si no hay elementos ya salgo
				if (!pending) return done(null);

				// Recorro elementos obtenidos
				list.forEach(function (fileName) {

					// Obtengo la ruta del elemento
					let filePath: string = path.resolve(dir, fileName);

					// Obtengo propiedades del elemento
					fs.stat(filePath, function (err, stat) {

						// Evaluo si el elemento es un directorio
						if (stat && stat.isDirectory()) {

							// Armo el el objeto directorio
							let objDirectory: any = {
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
								walk(filePath, obj, function (err: any, res: any[]) {
									// Chequeo si quedan mas elementos para procesar
									if (!--pending) done(null);
								});
							} else {
								// Chequeo si quedan mas elementos para procesar
								if (!--pending) done(null);
							}
						} else {
							// Obtengo la extension del archivo
							let fileExtension: string = path.extname(fileName).toLowerCase().slice(1);

							// Flag para saber si hay que agregarlo o no
							let skipFile: boolean = false;
							// Si tengo exclusion de extensiones y la extension esta incluida activo el skip
							if (fileExtension && extensionExclude.length && extensionExclude.indexOf(fileExtension) >= 0) skipFile = true;
							// Si tengo filtro de extensiones y la extension no esta incluida activo el skip
							if (extensionFilter.length && (extensionFilter.indexOf(fileExtension) === -1 || !fileExtension)) skipFile = true;

							// Si no esta el skip lo agrego a la lista
							if (!skipFile) {
								// Armo el el objeto directorio
								let objFile: any = {
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
							if (!--pending) done(null);
						}
					});
				});
			});
		};

		// Objeto arbol que voy a devolver
		let folderFiles: any[] = [];

		// Lanzo el walker y le paso la referencia a la carpeta principal
		walk(folderPath, folderFiles, function (err: any, results: any[]) {
			// Verifico si hubo algun error
			if (err) {
				// Obtengo mensajes de error
				let errorMsg: string = (typeof err === 'string' ? err : err.message || err.description || '');
				// Escribo a log
				logger.error('Error al consultar archivos de la carpeta snapshot \'' + folderPath + '\': ' + errorMsg);
				// Devuelvo array vacío
				resolve([]);
			} else {
				// Devuelvo el objeto arbol completo
				resolve(folderFiles);
			}
		});
	});
}

export function UploadFileToServer(
	fileName: string, destFolder: string, req: any, res: any,
	types?: string, fieldName?: string, single?: boolean,
	replace?: boolean, fileSizeLimit?: number): Promise<boolean> {

	// Valores por defecto
	single = (single === false ? single : true);
	fieldName = (fieldName ? fieldName : 'file');
	replace = (replace === false ? replace : true);
	fileSizeLimit = (fileSizeLimit ? fileSizeLimit : FILE_UPLOAD_LIMIT);

	// Inicializo contador de multer
	req.multerCounter = 0;

	// Configuro el storage de multer
	let storageEngine: multer.StorageEngine = multer.diskStorage({
		destination: function (req: any, file: any, cb: any) {
			cb(null, destFolder);
		},
		filename: function (req: any, file: any, cb: any) {
			cb(null, fileName || file.originalname);
		}
	});

	// Armo el filtro de tipo de archivos
	let fileFilter: any = function (req: any, file: any, cb: any) {
		// Incremento contador
		req.multerCounter++;
		// Armo el regex para matchear con el filename
		let typesRegEx: string = '\.(' + (types.toLowerCase() || '.+') + ')$';
		let regEx: RegExp = new RegExp(typesRegEx);
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
		} else {
			// Verifico si el archivo existe
			ExistInFileSystem(path.join(destFolder, file.originalname))
				.then(
					result => {
						// Si el archivo existe devuelvo false
						return cb(null, !result);
					}
				);
		}
	};

	// Handler para el upload
	let upload: any;

	// Si segun el caso uso funcion para un archivo o un array
	if (single) {
		upload = multer({
			storage: storageEngine,
			fileFilter: fileFilter,
			limits: { fileSize: fileSizeLimit },
		}).single(fieldName);
	} else {
		upload = multer({
			storage: storageEngine,
			fileFilter: fileFilter,
			limits: { fileSize: fileSizeLimit },
		}).array(fieldName);
	}

	// Obtengo la ruta temporal del template a subir
	let tempFilename: string = path.join(destFolder, fileName);

	// Si ya existe el archivo a subir lo elimino
	return DummyPromise()
		.then(
			result => {
				// Si no me llego archivo no borro nada (se usa el nombre original)
				if (!fileName) return true;

				// Si tengo filename lo borro
				return DeleteFolder(tempFilename);
			}
		).then(
			resultDelete => {
				// Verifico que el delete haya funcionado bien
				if (!resultDelete) throw 'Cannot delete existing file \'' + tempFilename + '\'';

				// Sigo con una promesa armada a mano (el multer es con callbacks)
				return new Promise<boolean>((resolve, reject) => {
					// Ejecuto el upload
					return upload(req, res, function (err: any) {
						// Verifico errores
						if (err && err.code === 'LIMIT_FILE_SIZE') {
							// Error de tamaño de archivo
							logger.error('El archivo recibido supera el límite permitido (' + fileSizeLimit.toString() + 'bytes).');
							reject('ERROR_FILE_UPLOAD_LIMIT' + '|' + (Math.round(100.00 * fileSizeLimit / 1024 / 1024) / 100.00).toString());
						} else if (err) {
							// Error generico
							logger.error('Error al subir archivo: ' + err);
							reject(err);
						} else {
							// Resultado correcto
							resolve(true);
						}
					});
				});
			}
		);
}

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

export function JoinPath(route: string, fileName: string): string {
	return path.join(route, fileName);
}
