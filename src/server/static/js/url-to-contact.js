// Obtengo o inicializo objeto compartido
var sharedObj = sharedObj || {};

// Defino y llamo a funcion encapsulada
(function(obj, location, navigator, document, window) {

    // Si no existe el objeto contactData lo creo
    obj.contactData = obj.contactData || {};
    // Busco el transaction_id en la url
    var transactionId = getParameterByName(location.href, "transaction_id");
    // Si obtuve valor lo asocio a los datos de contacto
    if (transactionId) obj.contactData.transaction_id = transactionId;

    // Devuelve parametros del querystring de una URL
    function getParameterByName(url, name) {
        if (!url) return null;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
        var results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return "";
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

})(sharedObj, location, navigator, document, window);
