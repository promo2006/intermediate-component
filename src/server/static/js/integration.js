// Obtengo o inicializo objeto compartido
var sharedObj = sharedObj || {};

// Defino y llamo a funcion encapsulada
(function(obj, location, navigator, document, window) {

    // Obtengo variables generales
    var customCodeHead = decodeURIComponent(obj.customCode_head || "");
    var customCodeBodyTop = decodeURIComponent(obj.customCode_bodyTop || "");
    var customCodeBodyBottom = decodeURIComponent(obj.customCode_bodyBottom || "");

    // Funcion para inyectar codigo custom
    function injectCustomCode(jsLib) {
        // Meto todo dentro de bloque try catch por si el codigo tiene errores
        try {
            // Verifico caso head
            if (customCodeHead) {
                // Inyecto codigo en el head
                jsLib("head").append(customCodeHead);
            }
            // Verifico caso bodyTop
            if (customCodeBodyTop) {
                // Inyecto codigo en inicio del body
                jsLib("body").prepend(customCodeBodyTop);
            }
            // Verifico caso bodyBottom
            if (customCodeBodyBottom) {
                // Inyecto codigo en final del body
                jsLib("body").append(customCodeBodyBottom);
            }
        } catch (err) {
            // Algo fallo
            console.error(err);
        }
    }

    // Funcion para esperar a que incialice la libreria que carga jquery
    function whenJsLibAvailable(callback) {
        var interval = 10;
        var counter = 0;
        var checkLoop = function() {
            counter = counter + interval;
            if (obj && obj.jsLib) {
                callback(obj.jsLib);
            } else if (counter <= 10000) {
                window.setTimeout(checkLoop, interval);
            } else {
                console.error("Shared library failed to load... Integration scripts wont initialize");
            }
        };
        window.setTimeout(checkLoop, interval);
    }

    // Me quedo esperando a que cargue la libreria shared
    whenJsLibAvailable(function(jsLib) {
        // Inyecto el codigo cuando este todo listo
        injectCustomCode(jsLib);
    });

})(sharedObj, location, navigator, document, window);
