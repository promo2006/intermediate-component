import * as gulp from 'gulp';
import { protractor } from 'gulp-protractor';

class Protractor {
  server(port: number) {
      return require('../../dist/dev/server').init(port, 'testing');
  }
}

/**
 * Executes the build process, running all e2e specs using `protractor`.
 */
export = (done: any) => {
  new Protractor()
    .server(9001)
    .then((server: any) => {
      gulp
        .src([])
        .pipe(protractor({
          configFile: 'protractor.conf.js',
          //args: ['--suite', 'login_only']
          //args: ['--suite', 'login,login_logout']
          args: ['--suite', 'user_add']
          //args: ['--suite', 'phone_add']
          //args: ['--suite', 'environment_add']
          //args: ['--suite', 'login_logout_borrar']
          //args: ['--suite', 'template_add']
          //args: ['--suite', 'prueba']
        })).on('error', (error: string) => { throw error; })
        .on('end', () => { server.close(done); });
    });
};
