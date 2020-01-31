import * as InitMailService from './smtp.mail';


// Armo un objeto para exportar y junto todas las categorias importadas
let Mail: any = {};
Object.assign(
    Mail,
    InitMailService
);

export { Mail };
