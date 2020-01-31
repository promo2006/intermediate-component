// Obtengo o inicializo objeto compartido
var sharedObj = sharedObj || {};

// Parseo variables
try {
    sharedObj = JSON.parse(decodeURIComponent(strSharedObj)) || {};
} catch (e) {
    sharedObj = {};
}

// Defino y llamo a funcion encapsulada
(function(obj, location, navigator, document, window) {

    // Datos del browser o documento
    sharedObj.pageTitle = document.title;
    sharedObj.pageUrl = location.href;
    sharedObj.pageReferrer = document.referrer;
    sharedObj.adblock = hasAdBlock();
    sharedObj.doNotTrack = navigator.doNotTrack;

    // Valida si el navegador tiene adblocker (esta deteccion a veces falla en localhost)
    function hasAdBlock() {
        var ads = document.createElement("div");
        ads.innerHTML = "&nbsp;";
        ads.className = "adsbox";
        var result = false;
        try {
            document.body.appendChild(ads);
            result = document.getElementsByClassName("adsbox")[0].offsetHeight === 0;
            document.body.removeChild(ads);
        } catch (e) {
            result = false;
        }
        return result;
    }

})(sharedObj, location, navigator, document, window);
