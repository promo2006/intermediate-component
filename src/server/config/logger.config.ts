import * as path from 'path';
import * as stackTrace from 'stack-trace';

// Ruta task.log
export const TASK_LOG_FILE: string = path.resolve(__dirname, '..', 'logs', 'Task.log');

// Obtiene el PID asociado al log
let getLogPid = function() {
    // Obtengo pid
    let pid: string = process.pid.toString();
    // Devuevlo con formato y largo fijo
    return (pid + '     ').substring(0, 5);
};

// Obtiene y arma el dato de nivel de log
let getLogLevel = function(loggingEvent: any) {
    // Largo del resultado a devolver
    let resultLength: number = 5;
    // Obtengo nivel de log
    var level: string = loggingEvent.level.toString();
    // Devuevlo con formato y largo fijo
    return '[' + (level + Array(resultLength + 1).join(' ')).substring(0, resultLength) + ']';
};

// Obtiene y arma el contexto asiciado al log
let getLogContext = function(loggingEvent: any) {
    // Largo del resultado a devolver
    let resultLength: number = 30;
    // Obtengo el trace de la ejecucion actual
    let trace: stackTrace.StackFrame[] = stackTrace.get();
    // Verifico que tengo al menos la cantidad esperada de llamados
    if (trace.length <= 9) return '[Unknown context]';
    // Obtengo el nodo correspondiente a la funcion que llamo al logger
    let caller: any = trace[9];
    // Obtengo las variables del contexto
    let fileName: string = path.basename(caller.getFileName() || '');
    let lineNumber: string = caller.getLineNumber() || '';
    // Armo y acomodo el contexto para que tenga siempre el mismo largo
    let context: string = (fileName + ':' + lineNumber);
    context = ( context.length > resultLength ? '...' + context.slice(-1 * (resultLength - ('...').length)) : context );
    // Devuelvo el texto completo juntando todo
    return '[' + (context + Array(resultLength + 1).join(' ')).substring(0, resultLength) + ']';
};

// Configuracion de los loggers a utilizar
export const LOGGER_CONFIG: any = {
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
