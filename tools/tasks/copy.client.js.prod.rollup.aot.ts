import * as gulp from 'gulp';
import { join } from 'path';

import { APP_CLIENT_SRC, TMP_CLIENT_DIR } from '../config';

const replace = require('gulp-replace');

/**
 * Executes the build task, copying all TypeScript files over to the `dist/tmp` directory.
 */
export = () => {
  return gulp.src([
      join(APP_CLIENT_SRC, 'tsconfig.json'),
      join(APP_CLIENT_SRC, '**/*.ts'),
      join(APP_CLIENT_SRC, '**/*.js'),
      '!' + join(APP_CLIENT_SRC, '**/*.spec.ts'),
      '!' + join(APP_CLIENT_SRC, '**/*.e2e-spec.ts')
    ])
    // import in dev mode: import * as moment from 'moment';
    // import for rollup:  import moment from 'moment';
    .pipe(replace('import * as ace from \'brace\';', 'import ace from \'brace\';'))
    .pipe(replace('import * as dragula from \'dragula\';', 'import dragula from \'dragula\';'))
    .pipe(replace('import * as jspdf from \'jspdf\';', 'import jspdf from \'jspdf\';'))
    .pipe(replace('import * as fullcalendar from \'fullcalendar\';', 'import fullcalendar from \'fullcalendar\';'))
    .pipe(replace('import * as moment from \'moment\';', 'import moment from \'moment\';'))
    .pipe(replace('import * as timezone from \'moment-timezone\';', 'import timezone from \'moment-timezone\';'))
    .pipe(replace('import * as screenfull from \'screenfull\';', 'import screenfull from \'screenfull\';'))
    .pipe(replace('import * as Shuffle from \'shufflejs\';', 'import Shuffle from \'shufflejs\';'))
    .pipe(replace('import * as socketClient from \'socketClient\';', 'import socketClient from \'socketClient\';'))
    .pipe(replace('import * as validator from \'validator\';', 'import validator from \'validator\';'))
    //.pipe(replace('import * as XLSX from \'xlsx\';', 'import XLSX from \'xlsx\';'))
    .pipe(gulp.dest(TMP_CLIENT_DIR));
};
