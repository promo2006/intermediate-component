export function DummyPromise(): Promise<boolean> {
    // Devuelvo promesa dummy que siempre resuelve true
    return new Promise(function(resolve, reject) {
        resolve(true);
    });
}

export function SleepPromise(secondTime: number): Promise<boolean> {
    // Devuelvo promesa dummy que siempre resuelve true
    return new Promise(function(resolve, reject) {
        setTimeout(resolve,(1000 * secondTime));
    });
}
