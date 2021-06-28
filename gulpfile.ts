import * as gulp from 'gulp';
import * as path from 'path';
import * as log from 'fancy-log';
import * as runSequence from 'gulp4-run-sequence';
import { loadTasks } from './tools/utils';

loadTasks(path.resolve('./tools/tasks'));

// --------------
// Build dev.
gulp.task('build.dev', (done: any) =>
  runSequence(//'clean.dev',
              'build.assets.dev',
              'build.html_css',
              'build.fonts',
              'build.flags',
              'build.skins',
              'build.js.dev',
              'build.index.dev',
              'build.server.dev',
              'build.app.server',
              'copy.server.assets',
              'build.server.statics',
              done));

// --------------
// Build prod (compilación JIT)
gulp.task('build.prod', (done: any) =>
  runSequence('clean.prod',
              //'tslint',
              //'css-lint',
              'build.assets.prod',
              'build.skins',
              'build.html_css',
              'copy.client.js.prod',
              'copy.server.js.prod',
              'build.js.prod',
              'build.bundles',
              'build.bundles.app',
              'build.index.prod',
              'build.server.prod',
              'build.app.server',
              'copy.server.assets',
              'build.packages.prod',
              'build.server.statics',
              'minify.server.statics',
              'build.tar.prod',
              //'build.database.scripts',
              done));

// --------------
// Build prod (compilación AOT)
gulp.task('build.prod.aot', (done: any) =>
  runSequence('clean.prod',
              //'tslint',
              //'css-lint',
              'build.assets.prod',
              'build.fonts',
              'build.flags',
              'build.skins',
              'build.html_css',
              'copy.client.js.prod',
              'copy.server.js.prod',
              'compile.ahead.prod',
              'build.js.prod.aot',
              'build.bundles',
              'build.bundles.app.aot',
              'build.index.prod',
              'build.server.prod',
              'build.app.server',
              'copy.server.assets',
              'build.packages.prod',
              'build.server.statics',
              'minify.server.statics',
              'build.tar.prod',
              'build.database.scripts',
              done));

// --------------
// Build prod (compilación AOT y rollup)
gulp.task('build.prod.rollup.aot', (done: any) =>
  runSequence('clean.prod',
              //'tslint',
              //'css-lint',
              'build.assets.prod',
              'build.fonts',
              'build.flags',
              'build.skins',
              'build.html_css',
              'copy.client.js.prod.rollup.aot',
              'copy.server.js.prod',
              'compile.ahead.prod',
              'build.js.prod.rollup.aot',
              'build.bundles',
              'build.bundles.app.rollup.aot',
              'transpile.bundles.rollup.aot',
              'build.index.prod',
              'build.server.prod',
              'build.app.server',
              'copy.server.assets',
              'build.packages.prod',
              'build.server.statics',
              'minify.server.statics',
              'build.tar.prod',
              'build.database.scripts',
              done));

// --------------
// Build prod (compilación JIT) y análisis del espacio usado en el bundle
gulp.task('sme.prod', (done: any) =>
  runSequence('build.prod',
              'build.sme.prod',
              done));

// --------------
// Build prod (compilación AOT) y análisis del espacio usado en el bundle
gulp.task('sme.prod.aot', (done: any) =>
  runSequence('build.prod.aot',
              'build.sme.prod.aot',
              done));

// --------------
// Build prod (compilación AOT y rollup) y análisis del espacio usado en el bundle
gulp.task('sme.prod.rollup.aot', (done: any) =>
  runSequence('build.prod.rollup.aot',
              'build.sme.prod.rollup.aot',
              done));

// --------------
// Serve dev and wait for ENTER to rebuild
gulp.task('serve.dev', (done: any) =>
  runSequence('build.dev',
              'server.start',
              'watch.key.press.dev',
              done));

// --------------
// Serve dev and watch for file changes to rebuild
gulp.task('serve.watch.dev', (done: any) =>
  runSequence('build.dev',
              'server.start',
              'watch.file.changes.dev',
              done));

// --------------
// Serve prod
gulp.task('serve.prod', (done: any) =>
  runSequence('build.prod',
              'server.prod',
              done));

// --------------
// Aux task for build process testing.
gulp.task('aux', (done: any) =>
  runSequence(//'build.bundles.app',
              'build.bundles',
              'build.bundles.app.aot',
              done));

// --------------
// Clean dev that will only run once
// this prevents karma watchers from being broken when directories are deleted
let firstRun = true;
gulp.task('clean.once', (done: any) => {
  if (firstRun) {
    firstRun = false;
    runSequence('clean.dev', done);
  } else {
    log('Skipping clean on rebuild');
    done();
  }
});
