// Obtengo o inicializo objeto compartido
var sharedObj = sharedObj || {};

// Activo el ajax sincronico para evitar que se cancele el request por la navgacion que hace Unbounce
sharedObj.ajaxSync = false;
// Deshabilito mensajes standard del sistema, para usar solo los de Unbounce
sharedObj.disableMessages = true;

// HTML para insertar el spinner mientras carga
var spinnerStyle = '<style>.ic-wrapper{right:-35px!important;left:auto!important}.ic-holder{position:absolute;left:0;top:0;bottom:0;right:0;width:100%;height:100%;background-color:#2D2F48}.ic-preloader{width:30px;height:30px;position:absolute;left:50%;top:50%;transform:translateX(-50%) translateY(-50%);animation:rotatePreloader 2s infinite ease-in}@keyframes rotatePreloader{0%{transform:translateX(-50%) translateY(-50%) rotateZ(0)}100%{transform:translateX(-50%) translateY(-50%) rotateZ(-360deg)}}.ic-preloader div{position:absolute;width:100%;height:100%;opacity:0}.ic-preloader div:before{content:"";position:absolute;left:50%;top:0;width:10%;height:10%;background-color:#fff;transform:translateX(-50%);border-radius:50%}.ic-preloader div:nth-child(1){transform:rotateZ(0);animation:rotateCircle1 2s infinite linear;z-index:9}@keyframes rotateCircle1{0%{opacity:1;transform:rotateZ(36deg)}57%,7%{transform:rotateZ(0)}100%{transform:rotateZ(-324deg);opacity:1}}.ic-preloader div:nth-child(2){transform:rotateZ(36deg);animation:rotateCircle2 2s infinite linear;z-index:8}@keyframes rotateCircle2{5%{opacity:0}5.0001%{opacity:1;transform:rotateZ(0)}12%,62%{transform:rotateZ(-36deg)}100%{transform:rotateZ(-324deg);opacity:1}}.ic-preloader div:nth-child(3){transform:rotateZ(72deg);animation:rotateCircle3 2s infinite linear;z-index:7}@keyframes rotateCircle3{10%{opacity:0}10.0002%{opacity:1;transform:rotateZ(-36deg)}17%,67%{transform:rotateZ(-72deg)}100%{transform:rotateZ(-324deg);opacity:1}}.ic-preloader div:nth-child(4){transform:rotateZ(108deg);animation:rotateCircle4 2s infinite linear;z-index:6}@keyframes rotateCircle4{15%{opacity:0}15.0003%{opacity:1;transform:rotateZ(-72deg)}22%,72%{transform:rotateZ(-108deg)}100%{transform:rotateZ(-324deg);opacity:1}}.ic-preloader div:nth-child(5){transform:rotateZ(144deg);animation:rotateCircle5 2s infinite linear;z-index:5}@keyframes rotateCircle5{20%{opacity:0}20.0004%{opacity:1;transform:rotateZ(-108deg)}27%,77%{transform:rotateZ(-144deg)}100%{transform:rotateZ(-324deg);opacity:1}}.ic-preloader div:nth-child(6){transform:rotateZ(180deg);animation:rotateCircle6 2s infinite linear;z-index:4}@keyframes rotateCircle6{25%{opacity:0}25.0005%{opacity:1;transform:rotateZ(-144deg)}32%,82%{transform:rotateZ(-180deg)}100%{transform:rotateZ(-324deg);opacity:1}}.ic-preloader div:nth-child(7){transform:rotateZ(216deg);animation:rotateCircle7 2s infinite linear;z-index:3}@keyframes rotateCircle7{30%{opacity:0}30.0006%{opacity:1;transform:rotateZ(-180deg)}37%,87%{transform:rotateZ(-216deg)}100%{transform:rotateZ(-324deg);opacity:1}}.ic-preloader div:nth-child(8){transform:rotateZ(252deg);animation:rotateCircle8 2s infinite linear;z-index:2}@keyframes rotateCircle8{35%{opacity:0}35.0007%{opacity:1;transform:rotateZ(-216deg)}42%,92%{transform:rotateZ(-252deg)}100%{transform:rotateZ(-324deg);opacity:1}}.ic-preloader div:nth-child(9){transform:rotateZ(288deg);animation:rotateCircle9 2s infinite linear;z-index:1}@keyframes rotateCircle9{40%{opacity:0}40.0008%{opacity:1;transform:rotateZ(-252deg)}47%,97%{transform:rotateZ(-288deg)}100%{transform:rotateZ(-324deg);opacity:1}}.ic-preloader div:nth-child(10){transform:rotateZ(324deg);animation:rotateCircle10 2s infinite linear;z-index:0}@keyframes rotateCircle10{45%{opacity:0}45.0009%{opacity:1;transform:rotateZ(-288deg)}102%,52%{transform:rotateZ(-324deg)}100%{transform:rotateZ(-324deg);opacity:1}}</style>';
var spinnerHtml = '<span class="ic-wrapper"><div class="ic-holder"><div class="ic-preloader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div></span>';

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
                // Si no tengo id de formulario no sigo
                if (!form.formId) return;
                // Obtengo el objeto formulario
                var thisForm = $unbounce("#" + form.formId);
                // Obtengo los eventos originales del formulario
                var formEvents = $unbounce("#" + form.formId).data("events");
                // Handler de submit original (unbounce)
                var originalSubmitHandler;
                // Si el formlario tiene un handler de subimit lo capturo
                if (formEvents && formEvents.submit && formEvents.submit.length) {
                    originalSubmitHandler = formEvents.submit[0].handler;
                }
                // Desasocio el handler de submit de unbounce
                thisForm.unbind("submit");
                // Retraso la accion de submit
                thisForm.submit(function(event) {
                    // Anulo accion por defecto
                    event.preventDefault();
                    // Anulo accion por defecto
                    event.stopImmediatePropagation();
                    // Si el formulario no es valido no sigo
                    if (!thisForm.valid()) {
                        // Ejecuto el handler original
                        if (originalSubmitHandler) originalSubmitHandler(event);
                        // No sigo
                        return;
                    }
                    // Recorro la lista de borones de formularios de c2c obtenidos
                    if (form.buttons) form.buttons.forEach(function(buttonId) {
                        // Desasocio los handlers que haya puesto unbounce en el boton
                        $unbounce("#" + buttonId).append(spinnerHtml);
                        $unbounce("#" + buttonId).append(spinnerStyle);
                    });
                    // Programo el submit real para despues
                    setTimeout( function () {
                        // Ejecuto el handler original
                        if (originalSubmitHandler) originalSubmitHandler(event);
                    }, 5000);
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
