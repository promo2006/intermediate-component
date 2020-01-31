// Obtengo o inicializo objeto compartido
var sharedObj = sharedObj || {};

// Defino y llamo a funcion encapsulada
(function(obj, location, navigator, document, window) {

    function initializeUnbounce(jsLib) {
        // Al levantar la pagina hago correcciones para caso Unbounce
        jsLib(document).ready(function() {
            // Si la libreria de unbounce no esta donde espero no sigo
            if (!window.lp || !window.lp.jQuery) return;
            // Obtengo el jquery de unbounce
            var $unbounce = window.lp.jQuery;
            // Obtengo la lista de forms a procesar
            var c2cForms = obj.c2cForms || [];
            // Recorro los formularios de c2c obtenidos
            c2cForms.forEach(function(form) {
                // Desasocio los handlers que haya puesto unbounce en el formulario
                if (form.formId) $unbounce("#" + form.formId).unbind();
                // Recorro la lista de borones de formularios de c2c obtenidos
                if (form.buttons) form.buttons.forEach(function(buttonId) {
                    // Desasocio los handlers que haya puesto unbounce en el boton
                    if (buttonId) $unbounce("#" + buttonId).unbind();
                });
            });
        });
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
                console.error("Shared library failed to load... inConcert script wont initialize");
            }
        };
        window.setTimeout(checkLoop, interval);
    }

    // Me quedo esperando a que cargue la libreria shared
    whenJsLibAvailable(function(jsLib) {
        // Ejecuto correciones cuando este todo listo
        initializeUnbounce(jsLib);
    });

})(sharedObj, location, navigator, document, window);
