import 'reflect-metadata';
import { main } from '@angular/compiler-cli/src/main';
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { argv } from 'yargs';

import { TMP_CLIENT_DIR, PROJECT_ROOT, TOOLS_DIR, BOOTSTRAP_DIR, BOOTSTRAP_MAIN_AOT } from '../config';

const modifyFile = (path: string, mod: any = (f: string) => f) => {
  // Leo el contenido del archivo
  const file = readFileSync(path);
  // Escribo el contenido modificado
  writeFileSync(path, mod(file.toString()));
};

const updateCompilerOptions = (options: any, task: string) => {
  // Actualizo propiedades del tsconfig
  options.declaration = true;
  options.sourceMap = false;
  // Ajustes particulares para el caso rollup
  if (task.indexOf('rollup') >= 0) {
    options.module = 'es2015';
    options.moduleResolution = 'node';
  }
};

export = (done: any) => {

  // Hago ajustes en le tsconfig para compilacion AOT y rollup
  modifyFile(join(TMP_CLIENT_DIR, 'tsconfig.json'), (content: string) => {
    const parsed = JSON.parse(content);
    const path = join(PROJECT_ROOT, TOOLS_DIR, 'manual_typings', 'project');
    updateCompilerOptions(parsed.compilerOptions, argv._[0]);
    parsed.files = parsed.files || [];
    parsed.files = parsed.files.concat(
      readdirSync(path)
        .filter(f => f.endsWith('d.ts'))
        .map(f => join(path, f))
    );
    parsed.files = parsed.files.filter((f: string, i: number) => parsed.files.indexOf(f) === i);
    parsed.files.push(join(BOOTSTRAP_DIR, BOOTSTRAP_MAIN_AOT + '.ts'));
    return JSON.stringify(parsed, null, 2);
  });

  // Argumentos para la compilación
  const args: string[] = [
    '-p', join(TMP_CLIENT_DIR, 'tsconfig.json')
  ];

  // Ejecuto la compilación
  return Promise.resolve(main(args))
  .then(result => {
    // Verifico si la compilacion fue correcta
    if (result > 0) {
      console.error('Compilation failed');
      process.exit(1);
    }
  })
  .catch((err: any) => {
    // Algo falló
    console.error('Compilation failed');
    console.error(err.stack);
    process.exit(1);
  });
};
