import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { AuthHttp } from 'angular2-jwt';
import { RoutesCentralized } from '../routes-centralized';

@Injectable()

export class LanguageService {

    
    // Idioma del usuario logueado
    private routes: any = RoutesCentralized;

    // Devuelve la traduccion de un mensaje dentro de una categoria
    GetMessage( route: string): string {
        console.log(this.routes);

        return 'holi';
    }   
}


