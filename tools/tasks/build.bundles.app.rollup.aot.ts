import { parallel } from 'async';
import { writeFile } from 'fs';
import { join } from 'path';

import { TMP_CLIENT_DIR, BOOTSTRAP_MODULE_AOT, ROLLUP_INCLUDE_DIR, ROLLUP_INCLUDES, ROLLUP_NAMED_EXPORTS, PRESERVE_SOURCE_MAPS } from '../config';

const rollup = require('rollup');
const globals = require('rollup-plugin-node-globals');
const builtins = require('rollup-plugin-node-builtins');
const json = require('rollup-plugin-json');
const includePaths = require('rollup-plugin-includepaths');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const config = {
  input: join(TMP_CLIENT_DIR, BOOTSTRAP_MODULE_AOT),
  treeshake: true,
  output: {
    sourcemap: false,
    name: 'main',
  },
  onwarn: function(warning) {
      // Evito los warning que se generan por el codigo compilado
      if ((warning.code === 'THIS_IS_UNDEFINED') ||
          (warning.code === 'CIRCULAR_DEPENDENCY' && !warning.importer.indexOf('node_modules\\moment\\'))
          ) return;
      // Cualquier otro mensaje lo logueo
      console.warn(warning.message);
  },
  plugins: [
    globals(),
    builtins(),
    json({
      include: 'node_modules/**',
      exclude: [],
      preferConst: true,
      indent: '  '
    }),
    includePaths({
      include: ROLLUP_INCLUDES,
      paths: [join(TMP_CLIENT_DIR, 'app')],
      external: [],
      extensions: ['.js', '.json', '.html', '.ts']
    }),
    nodeResolve({
      jsnext: true,
      main: true,
      module: false,
      browser: true,
      preferBuiltins: true,
      modulesOnly: false,
    }),
    commonjs({
      include: ROLLUP_INCLUDE_DIR,
      namedExports: ROLLUP_NAMED_EXPORTS,
    }),
  ]
};

export = (done: any) => {
  rollup
    .rollup(config)
    .then((bundle: any) => bundle.generate({
        format: 'iife',
        sourcemap: PRESERVE_SOURCE_MAPS,
      })
    )
    .then((result: any) => {
      const path = join(TMP_CLIENT_DIR, 'bundle.js');

      parallel(getTasks(path, result), (error: any, results: boolean[]) => {
        if (error && results.indexOf(false) === -1) {
          console.error(error);
          process.exit(0);
        }
        done();
      });
    })
    .catch((error: any) => {
      console.error(error);
      process.exit(0);
    });
};

function getTasks(path: string, result: any): any[] {
  const tasks = [
    (callback: any) => {
      return writeFile(
        path,
        result.code + (PRESERVE_SOURCE_MAPS ? '\n//# sourceMappingURL=bundle.js.map' : ''),
        (error: any) => callback(null, !error)
      );
    }
  ];
  if (PRESERVE_SOURCE_MAPS) {
    tasks.push((callback: any) =>
      writeFile(path + '.map', result.map.toString(), (error: any) => callback(null, !error))
    );
  }
  return tasks;
}
