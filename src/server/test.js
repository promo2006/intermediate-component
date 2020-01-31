"use strict";
exports.__esModule = true;
var rp = require("request-promise-native");
// Enviamos solicitud.
function Login(user, password) {
    console.log('Login por API i6', JSON.stringify({ user: user, password: password }));
    var data = { user: user, password: password };
    var postOptions = {
        uri: 'http' + '://cls4-cgn-mia.i6.inconcertcc.com/inconcert/api/login/',
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json'
        },
        json: true,
        strictSSL: false
    };
    return rp(postOptions)
        .then(function (response) {
        var status = (response && response.status) ? true : false;
        var message = (response && response) ? response : '';
        return Promise.resolve({ status: status, accessToken: message.token });
    })["catch"](function (err) {
        console.log('Login: Error ' + err.message);
        return Promise.resolve({ status: false, body: err.message });
    });
}
exports.Login = Login;
