import * as rp from 'request-promise-native';
import * as requestOriginal from 'request';

// Enviamos solicitud.
export function Login(user: string, password: string): Promise<any> {
	console.log('Login por API i6', JSON.stringify({ user: user, password: password }));
	let data = { user: user, password: password };
	let postOptions = {
		uri: 'http' + '://cls4-cgn-mia.i6.inconcertcc.com/inconcert/api/login/'
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
			console.log('Login: Error ' + err.message);
			return Promise.resolve({ status: false, body: err.message });
		});
}