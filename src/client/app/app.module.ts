import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthHttp, provideAuth } from 'angular2-jwt';
import { ClipboardModule } from 'ngx-clipboard';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { MaterialModule } from '@angular/material';
import { TreeModule } from 'ng2-tree';
import { FileDropDirective } from 'ng2-file-upload';
declare let Hammer: any;

// Componentes base.
import { AppComponent } from './app.component';

// Configuraciones del hammerjs (manejo pantalla tactil).
export class MyHammerConfig extends HammerGestureConfig {
	overrides = <any>{
		swipe: {
			velocity: 0.3,
			threshold: 10
		}
	};
}

// Hack para que el hammer no me deshabilite el user-select (seleccionar texto).
delete Hammer.defaults.cssProps.userSelect;

// Para que funcionen los scroll touch.
Hammer.defaults.touchAction = 'auto';

export class AppModule { }
