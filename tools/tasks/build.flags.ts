import * as gulp from 'gulp';
import { join } from 'path';

import { FLAGS_SRC, APP_CLIENT_DEST } from '../config';

export = () => {
  return gulp.src(FLAGS_SRC)
    .pipe(gulp.dest(join(APP_CLIENT_DEST, 'flags')));
};
