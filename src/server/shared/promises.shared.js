"use strict";
exports.__esModule = true;
function DummyPromise() {
    // Devuelvo promesa dummy que siempre resuelve true
    return new Promise(function (resolve, reject) {
        resolve(true);
    });
}
exports.DummyPromise = DummyPromise;
function SleepPromise(secondTime) {
    // Devuelvo promesa dummy que siempre resuelve true
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, (1000 * secondTime));
    });
}
exports.SleepPromise = SleepPromise;
