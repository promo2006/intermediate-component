import * as moment from 'moment';

const dateFormatForService = 'YYYY-MM-DD HH:mm:ss';

export function guid(): any {
	//let s4= Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	//return s4 + s4 + '-' + s4 + '-' + s4 + '-' + s4 + '-' + s4 + s4 + s4;

	// Generate a v1 UUID (time-based)
	//const uuidV1 = require('uuid/v1');
	//uuidV1(); // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a'

	// Generate a v4 UUID (random)
	const uuidV4 = require('uuid/v4');
	return uuidV4(); // -> '110ec58a-a0f2-4ac4-8393-c866d813b8d1'
}

export function dateFromStrOfServiceCall(s: string): Date {
	return moment(s, dateFormatForService).toDate();
}

export function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

// color aleatorio en hexadecimal
export function getRandomHexColor() {
	let letters = "0123456789ABCDEF", color = "#", c;
	for (c = 0; c < 6; c++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// delay en javascript
export function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export function getInteractionIdFromURLBase64(urlBase64) {
	var result = null;
	if (urlBase64 && urlBase64.length) {
		var url = Buffer.from(urlBase64, 'base64').toString(),
			array = url.split('/');
		if (array && array.length) {
			var id = array[9],
				section = array[10],
				part = array[11];
			result = {
				id: id,
				section: section,
				part: part,
				url: url
			};
		}
	}
	return result;
}