import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';

import { APP_SERVER_DEST, TEMPLATE_CONFIG } from '../config';
import { TemplateLocalsBuilder,  } from '../utils';

const plugins = <any>gulpLoadPlugins();

// Reemplaza todas las variables de template de los archivos estaticos del lado servidor
export = () => {

  let src = [
    join(APP_SERVER_DEST, 'static/css/*'),
    join(APP_SERVER_DEST, 'static/html/*'),
    join(APP_SERVER_DEST, 'static/js/*')
  ];

  return gulp.src(src)
    .pipe(plugins.template(new TemplateLocalsBuilder().withStringifiedSystemConfigDev().build(), TEMPLATE_CONFIG))
    .pipe(gulp.dest(function(file) {
      return file.base;
    }));
};
