// Parámetros de configuracion para el redis
export const REDIS_OPTIONS: any = {
    prefix: 'inconcertCache:'
};
// Tiempo en segundos que se mantendran las sesiones en cache
export const REDIS_SESSION_PERSISTENCE: number = 7 * 24 * 60 * 60;
// Tiempo en segundos que se mantendran los datos en cache
export const REDIS_DATA_PERSISTENCE: number = 60 * 60;
// Tiempo en segundos que se mantendran los datos en cache para reprocesados
export const REDIS_DATA_PERSISTENCE_RETRY: number = 10 * 60;
