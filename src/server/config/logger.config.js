"use strict";
exports.__esModule = true;
var path = require("path");
var stackTrace = require("stack-trace");
// Ruta task.log
exports.TASK_LOG_FILE = path.resolve(__dirname, '..', 'logs', 'Task.log');
// Obtiene el PID asociado al log
var getLogPid = function () {
    // Obtengo pid
    var pid = process.pid.toString();
    // Devuevlo con formato y largo fijo
    return (pid + '     ').substring(0, 5);
};
// Obtiene y arma el dato de nivel de log
var getLogLevel = function (loggingEvent) {
    // Largo del resultado a devolver
    var resultLength = 5;
    // Obtengo nivel de log
    var level = loggingEvent.level.toString();
    // Devuevlo con formato y largo fijo
    return '[' + (level + Array(resultLength + 1).join(' ')).substring(0, resultLength) + ']';
};
// Obtiene y arma el contexto asiciado al log
var getLogContext = function (loggingEvent) {
    // Largo del resultado a devolver
    var resultLength = 30;
    // Obtengo el trace de la ejecucion actual
    var trace = stackTrace.get();
    // Verifico que tengo al menos la cantidad esperada de llamados
    if (trace.length <= 9)
        return '[Unknown context]';
    // Obtengo el nodo correspondiente a la funcion que llamo al logger
    var caller = trace[9];
    // Obtengo las variables del contexto
    var fileName = path.basename(caller.getFileName() || '');
    var lineNumber = caller.getLineNumber() || '';
    // Armo y acomodo el contexto para que tenga siempre el mismo largo
    var context = (fileName + ':' + lineNumber);
    context = (context.length > resultLength ? '...' + context.slice(-1 * (resultLength - ('...').length)) : context);
    // Devuelvo el texto completo juntando todo
    return '[' + (context + Array(resultLength + 1).join(' ')).substring(0, resultLength) + ']';
};
// Configuracion de los loggers a utilizar
exports.LOGGER_CONFIG = {
    appenders: [
        {
            type: 'file',
            filename: path.resolve(__dirname, '..', 'logs', 'AccessLog.log'),
            maxLogSize: 20 * 1000 * 1024,
            backups: 5,
            category: 'AccessLog',
            layout: {
                type: 'pattern',
                pattern: '%x{level} %d{ISO8601} %x{pid} %m',
                tokens: {
                    pid: getLogPid,
                    level: getLogLevel,
                    context: getLogContext
                }
            }
        },
        {
            type: 'file',
            filename: path.resolve(__dirname, '..', 'logs', 'ServerScripts.log'),
            maxLogSize: 20 * 1000 * 1024,
            backups: 5,
            category: 'ServerScripts',
            layout: {
                type: 'pattern',
                pattern: '%x{level} %d{ISO8601} %x{pid} %x{context} %m',
                tokens: {
                    pid: getLogPid,
                    level: getLogLevel,
                    context: getLogContext
                }
            }
        },
        {
            type: 'file',
            filename: path.resolve(__dirname, '..', 'logs', 'PublicScripts.log'),
            maxLogSize: 20 * 1000 * 1024,
            backups: 15,
            category: 'PublicScripts',
            layout: {
                type: 'pattern',
                pattern: '%x{level} %d{ISO8601} %x{pid} %x{context} %m',
                tokens: {
                    pid: getLogPid,
                    level: getLogLevel,
                    context: getLogContext
                }
            }
        },
        {
            type: 'file',
            filename: path.resolve(__dirname, '..', 'logs', 'DoubleClick.log'),
            maxLogSize: 20 * 1000 * 1024,
            backups: 5,
            category: 'DoubleClick',
            layout: {
                type: 'pattern',
                pattern: '%x{level} %d{ISO8601} %x{pid} %x{context} %m',
                tokens: {
                    pid: getLogPid,
                    level: getLogLevel,
                    context: getLogContext
                }
            }
        },
        {
            type: 'file',
            filename: path.resolve(__dirname, '..', 'logs', 'Sql.log'),
            maxLogSize: 20 * 1000 * 1024,
            backups: 5,
            category: 'Sql',
            layout: {
                type: 'pattern',
                pattern: '%x{level} %d{ISO8601} %x{pid} %x{context} %m',
                tokens: {
                    pid: getLogPid,
                    level: getLogLevel,
                    context: getLogContext
                }
            }
        },
        {
            type: 'file',
            filename: path.resolve(__dirname, '..', 'logs', 'Redis.log'),
            maxLogSize: 20 * 1000 * 1024,
            backups: 5,
            category: 'Redis',
            layout: {
                type: 'pattern',
                pattern: '%x{level} %d{ISO8601} %x{pid} %x{context} %m',
                tokens: {
                    pid: getLogPid,
                    level: getLogLevel,
                    context: getLogContext
                }
            }
        },
        {
            type: 'file',
            filename: path.resolve(__dirname, '..', 'logs', 'Task.log'),
            maxLogSize: 20 * 1000 * 1024,
            backups: 5,
            category: 'Task',
            layout: {
                type: 'pattern',
                pattern: '%x{level} %d{ISO8601} %x{pid} %x{context} %m',
                tokens: {
                    pid: getLogPid,
                    level: getLogLevel,
                    context: getLogContext
                }
            }
        }
    ]
};
