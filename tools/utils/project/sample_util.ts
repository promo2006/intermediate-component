import * as through2 from 'through2';

export function myUtil() {
  // Code goes here
}

// Funcion noop (antes se usaba la de gulp-util pero ahora esta deprecated)
export function noop() {
    // just pass-through anything
    return through2.obj();
}
