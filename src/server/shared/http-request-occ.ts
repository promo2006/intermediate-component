import * as rp from 'request-promise-native';
import * as log4js from 'log4js';

// Importo variable DNS que contiene el nombre del dominio o IP.
import { DNS } from '../config/integration.config';

// Inicializo los logs.
let loggerAllegro = log4js.getLogger('Task');

// Enviamos solicitud.
export function Login(user: string, password: string): Promise<any> {
	loggerAllegro.info('Login por API i6', JSON.stringify({ user: user, password: password }));
	let data = { user: user, password: password };
	let postOptions = {
		uri: 'http' + '://' + DNS + '/inconcert/api/login/'
		, method: 'POST'
		, body: data
		, headers: {
			'Content-Type': 'application/json'
		}
		, json: true
		, strictSSL: false
	};
	return rp(postOptions)
		.then((response: any) => {
			let status = (response && response.status) ? true : false;
			let message = (response && response) ? response : '';
			return Promise.resolve({ status: status, accessToken: message.token });
		})
		.catch((err: any) => {
			loggerAllegro.error('Login: Error ' + err.message);
			return Promise.resolve({ status: false, body: err.message });
		});
}

// Enviamos solicitud.
export function SearchUsers(accessToken: string, request: any): Promise<any> {
	loggerAllegro.info('Request (inConcert): Listado de usuarios por API i6');
	let postOptions = {
		uri: 'http' + '://' + DNS + '/inconcert/api/users/search/'
		, method: 'POST'
		, body: request
		, headers: {
			'Content-Type': 'application/json',
			'Authorization': accessToken
		}
		, json: true
		, strictSSL: false
		, resolveWithFullResponse: false
	};
	return rp(postOptions)
		.then((response: any) => {
			return Promise.resolve(response);
		})
		.catch((err: any) => {
			loggerAllegro.error('SearchUsers: Error ' + err.message);
			return Promise.resolve({ status: false, body: err.message });
		});
}

// Enviamos solicitud.
export function SaveUserByAPIi6(accessToken: string, user: any): Promise<any> {
	loggerAllegro.info('Request (inConcert): Creación de usuario por API i6');
	let postOptions = {
		uri: 'http' + '://' + DNS + '/inconcert/api/users/save/'
		, method: 'POST'
		, body: user
		, headers: {
			'Content-Type': 'application/json',
			'Authorization': accessToken
		}
		, json: true
		, strictSSL: false
		, resolveWithFullResponse: false
	};
	return rp(postOptions)
		.then((response: any) => {
			return Promise.resolve(response);
		})
		.catch((err: any) => {
			loggerAllegro.error('SaveUserByAPIi6: Error ' + err.message);
			return Promise.resolve({ status: false, body: err.message });
		});
}
