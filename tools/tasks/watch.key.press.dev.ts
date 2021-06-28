
import * as runSequence from 'gulp4-run-sequence';
import * as gulp from 'gulp';
import * as tty from 'tty';

import { APP_CLIENT_SRC, APP_SERVER_SRC, TEMP_FILES } from '../config';
import { notifyLiveReload } from '../utils';
import { Chalk } from 'chalk';

// Obtengo plugins de gulp
const chalk: Chalk = require('chalk');

// Libreria para capturar eventos de keypress
let keypress: any = require('keypress');

// Flag para sañalizar si se esta compilando
let buildInProcess: boolean = false;

// Lista de teclas para recompilar (ENTER)
let recompileKeys: string[] = [
    '\r',
];

// Lista de teclas para salir (CTRL + C)
let exitKeys: string[] = [
    '\u0003',
];

// Asocio el proceso al keypress
keypress(process.stdin);

// Asocio evento keypress para capturar teclas
process.stdin.on('keypress', function(ch: any, key: any) {

    // Si me llega una tecla de salida cierro el proceso
    if (key && exitKeys.indexOf(key.sequence) >= 0) {
        // Cierro el proceso
        process.exit();
    }
});

// Cambio el raw mode (cambia segun version de node)
if (typeof (<any>process.stdin).setRawMode === 'function') {
    (<any>process.stdin).setRawMode(true);
} else {
    (<any>tty).setRawMode(true);
}

// Retomo el proceso
process.stdin.resume();

// Tarea auxiliar para poder disparar el reload desde el runSequence
gulp.task('onBuildFinished', function() {

    // Ejecuto el reload con un archivo generico
    notifyLiveReload({path: 'src/app.server.ts'});

    // Vuelvo a habilitar el rebuild con ENTER
    buildInProcess = false;

    // Escribo a log con delay
    setTimeout(() => {
        console.log(chalk.grey(' ----------------------------------------'));
        console.log(chalk.green(' Press ENTER to rebuild project          '));
        console.log(chalk.grey(' ----------------------------------------'));
    }, 2000);
});

// Espera tecla presionada y dispara tarea
function watchKeyPress(taskname: string) {
    // Devuelvo funcion que ejecuta la tarea
    return function() {

        // Habilito el rebuild con ENTER
        buildInProcess = false;

        // Escribo a log con delay
        setTimeout(() => {
            console.log(chalk.grey(' ----------------------------------------'));
            console.log(chalk.green(' Press ENTER to rebuild project          '));
            console.log(chalk.grey(' ----------------------------------------'));
        }, 2500);

        // Desasocio handlers anteriores
        process.stdin.removeAllListeners('keypress');

        // Asocio evento keypress para capturar teclas
        process.stdin.on('keypress', function(ch: any, key: any) {

            // Si no estoy compilando y se recibio un enter disparo nuevo proceso
            if (!buildInProcess && key && recompileKeys.indexOf(key.sequence) >= 0) {
                // Comienza nuevo build, deshabilito el ENTER
                buildInProcess = true;
                // Escribo a log
                console.log(chalk.cyan(' Starting project rebuild process...     '));
                console.log(chalk.grey(' ----------------------------------------'));
                // Ejecuto compile y encadeno nuevo watch
                runSequence(
                    // Evento la tarea recibida
                    taskname,
                    // Ejecuto funcion
                    'onBuildFinished'
                );
            }

            // Si me llega una tecla de salida cierro el proceso
            if (key && exitKeys.indexOf(key.sequence) >= 0) {
                // Cierro el proceso
                process.exit();
            }
        });
    };
}

// Ejecuto el build y me quedo esperando que se presione enter para reinicar proceso
export = watchKeyPress('build.dev');
