import * as gulp from 'gulp';
import { join } from 'path';

import { FONTS_SRC, APP_CLIENT_DEST } from '../config';

export = () => {
  return gulp.src(FONTS_SRC)
    .pipe(gulp.dest(join(APP_CLIENT_DEST, 'fonts')));
};
