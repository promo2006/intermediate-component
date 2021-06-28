import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as runSequence from 'gulp4-run-sequence';
import * as gulp from 'gulp';
import * as path from 'path';

import { APP_CLIENT_SRC, APP_SERVER_SRC, TEMP_FILES } from '../config';
import { notifyLiveReload } from '../utils';

// Obtengo plugins de gulp
const plugins = <any>gulpLoadPlugins();

// Lista de carpetas y archivos a mirar
let paths: string[] = [
    path.join(APP_CLIENT_SRC, '**'),
    path.join(APP_SERVER_SRC, '**')
].concat(
    TEMP_FILES.map(p => '!' + p)
);

// Espera cambios en los archivos y dispara tarea
function watchFileChanges(taskname: string) {
    // Devuelvo funcion que ejecuta la tarea
    return function () {

        // Ejecuto el watch
        plugins.watch(paths, (e: any) =>
            // Cuando se da un cambio disparo nueva ejecucion del evento recibido
            runSequence(
                taskname,
                () => notifyLiveReload(e)
            )
        );
    };
}

// Ejecuto el build y me quedo esperando cambios en archivos para reinicar el proceso
export = watchFileChanges('build.dev');
