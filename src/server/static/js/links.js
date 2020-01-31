// Obtengo o inicializo objeto compartido
var sharedObj = sharedObj || {};

// Defino y llamo a funcion encapsulada
(function(obj, location, navigator, document, window) {

    // Obtengo variables generales
    var currentProtocol = obj.currentProtocol;
    var currentDomain = obj.currentDomain;
    var currentBasePath = obj.currentBasePath;
    var contentPath = obj.contentPath;

    // Armo URL base para popups
    var popupsBaseUrl = currentProtocol + "://" + currentDomain + (currentBasePath ? currentBasePath : "") + contentPath;

    // Datos del popup
    var popupObj = null;
    var popupOpened = false;
    var popupOpts = {
        // URL del popup
        src: popupsBaseUrl,
        // Tipo iframe
        type: "iframe",
        // Opciones
        opts: {
            // Escondo el toolbar
            toolbar: false,
            // Boton chico para cerrar
            smallBtn: true,
            // Evento de popup abierto
            beforeShow: function(instance, current) {
                popupOpened = true;
            },
            // Evento de popup cerrado
            beforeClose: function(instance, current) {
                popupOpened = false;
            }
        }
    };

    // Funcion para ajustar los links
    function adjustLinks(jsLib) {

        // Funcion para abrir el popup
        var openPopup = function(popupHtml) {
            // Verifico si no hay otro popup abierto
            if (!popupOpened) {
                // Actualizo la URL con el valor recibido
                popupOpts.src = popupsBaseUrl + popupHtml + "?isinternalpopup=1&notracking=1";
                // Abro el popup
                popupObj = jsLib.fancybox.open(popupOpts);
                // Devuelvo true
                return true;
            } else {
                // Si no se pudo abrir devuelvo false
                return false;
            }
        };

        // Smooth scrolling para los links con anchor
        jsLib('a[href^="#"]').click(function(event) {
            event.preventDefault();
            var offset = jsLib(this.hash).offset();
            if (offset) jsLib("html,body").animate({
                scrollTop: offset.top
            }, 500);
        });

        // Smooth scrolling para cuando la pagina carga y tiene anchor
        jsLib(document).ready(function() {
            var offset = jsLib(location.hash).offset();
            if (offset) jsLib("html,body").animate({
                scrollTop: offset.top
            }, 500);
        });

        // Asocio accion de click a todo lo que tenga el atributo para abrir popup
        jsLib("[data-ic-popup]").click(function(event) {
            var popupHtml = jsLib(this).attr("data-ic-popup");
            if (popupHtml) {
                event.preventDefault();
                openPopup(popupHtml);
            }
        });
    }

    // Funcion para esperar a que incialicen las librerias compartidas
    function whenSharedInitialized(callback) {
        var interval = 10;
        var counter = 0;
        var checkLoop = function() {
            counter = counter + interval;
            if (obj && obj.sharedInitialized && obj.jsLib) {
                callback(obj.jsLib);
            } else if (counter <= 10000) {
                window.setTimeout(checkLoop, interval);
            } else {
                console.error("Links library failed to load... Internal links wont initialize");
            }
        };
        window.setTimeout(checkLoop, interval);
    }

    // Me quedo esperando a que cargue la libreria shared
    whenSharedInitialized(function(jsLib) {
        // Inyecto el codigo cuando este todo listo
        adjustLinks(jsLib);
    });

})(sharedObj, location, navigator, document, window);
