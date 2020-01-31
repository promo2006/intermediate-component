import { Component, ViewEncapsulation, ViewContainerRef, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS } from 'angular2-jwt';
import './rxjs-operators';

@Component({
	moduleId: module.id,
	selector: 'app-cmp',
	templateUrl: 'app.html',
	encapsulation: ViewEncapsulation.None
})

export class AppComponent {

	// Para arbol de inyeccion de |gury
	private path: string = '';

	// Opciones para las notificaciones
	private notificationOpts = {
		timeOut: 5000,
		lastOnBottom: true,
		clickToClose: true,
		maxLength: 0,
		maxStack: 7,
		showProgressBar: true,
		pauseOnHover: true
	};

	public constructor(
		private router: Router
	) {
		// Para Augury
		router.events.subscribe((val: any) => {
			this.path = val.url;
		});
	}
}
