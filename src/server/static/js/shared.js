// Obtengo o inicializo objeto compartido
var sharedObj = sharedObj || {};

// Defino y llamo a funcion encapsulada
(function(obj, location, navigator, document, window) {

    // Comenzando a inicializar librerias
    obj.libsInitialized = false;

    // Obtengo variables generales
    var contentProtocol = obj.contentProtocol || location.protocol.replace(":", "");
    var contentDomain = obj.contentDomain || location.host;
    var contentBasePath = obj.contentBasePath;

    // Verifico si es IE y obtengo la version
    var ie = isIeVersion();

    // Guardo el dato en objeto compartido
    obj.ie = ie;

    // Si tengo version de IE anterior a la 8 aviso que no va a funcionar
    if (ie && ie < 8) console.warn("Internet Explorer 7 o previous is not supported on this page!!");

    // Asocio listener para recibir la inforacion desde el frame de tracking
    window.addEventListener("message", function(event) {
        try {
            // Intento parsear el data (si falla es porque el message no era para mi)
            var data = JSON.parse(event.data);
            // Si se pudo parsear pero no me llego action tampoco es para mi
            if (!data || !data.action) return;
            // Proceso segun la acción recibida
            if (data && data.action === "tracking") {
                // Caso particular, guardo los datos de tracking en objeto compartido
                obj.tracking = data.tracking;
                // Seteo la cookie en el dominio principal, para podes recibirla en las siguientes visitas
                if (!readCookie("_ictid") && obj.tracking && obj.tracking.visitParams && obj.tracking.visitParams.trackingId)
                    createCookie("_ictid", obj.tracking.visitParams.trackingId, 365);
            } else if (data.action && typeof obj[data.action] === "function") {
                // Si el action corresponde a alguna funcion existente, la ejecuto
                obj[data.action](data);
            }
        } catch (err) {
            // Me llego mensaje desde otro origen, lo ignoro
        }
    }, false);

    function createCookie(name, value, days) {
        var cookieValue = name + "=" + value;
        var cookieExpires = "";
        var cookiePath = "; path=/";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toUTCString();
        }
        document.cookie = cookieValue + cookieExpires + cookiePath;
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name, "", -1);
    }

    function isIeVersion() {
        var version = 3;
        var div = document.createElement("div");
        var all = div.getElementsByTagName("i");
        while (
            div.innerHTML = "<!--[if gt IE " + (++version) + "]><i></i><![endif]-->",
            all[0]
        );
        return (version > 4 ? version : null);
    }

    function loadCssStyle(url, where, success) {
        // Defino el tag link para cargar la libreria
        var link  = document.createElement("link");
        link.href = url;
        link.rel = "stylesheet";
        link.type = "text/css";
        // Flag para señalizar cuando se completo el load
        var done = false;
        // Asocio handler para manejar la respuesta
        link.onload = link.onreadystatechange = function() {
            if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                done = true;
                success();
                link.onload = link.onreadystatechange = null;
            }
        };
        // Elemento (head o body) donde se insertara el link
        var element;
        // Segun el caso lo inserto en diferentes partes del documento
        switch (where) {
            case "head-top":
                // Obtengo el elemento head
                element = document.getElementsByTagName("head")[0];
                // Le agrego el elemento creado antes del primer hijo
                element.insertBefore(link, element.firstChild);
                // Listo
                break;
            case "head-bottom":
                // Obtengo el elemento head
                element = document.getElementsByTagName("head")[0];
                // Lo agrego al final del head
                element.appendChild(link);
                // Listo
                break;
            case "body-top":
                // Obtengo el elemento body
                element = document.getElementsByTagName("body")[0];
                // Le agrego el elemento creado antes del primer hijo
                element.insertBefore(link, element.firstChild);
                // Listo
                break;
            case "body-bottom":
                // Obtengo el elemento body
                element = document.getElementsByTagName("body")[0];
                // Lo agrego al final del body
                element.appendChild(link);
                // Listo
                break;
            default:
                // No hago nada
                break;
        }
    }

    function loadJsScript(url, where, success) {
        // Defino el tag script para cargar la libreria
        var script = document.createElement("script");
        script.src = url;
        // Flag para señalizar cuando se completo el load
        var done = false;
        // Asocio handler para manejar la respuesta
        script.onload = script.onreadystatechange = function() {
            if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                done = true;
                success();
                script.onload = script.onreadystatechange = null;
            }
        };
        // Elemento (head o body) donde se insertara el script
        var element;
        // Segun el caso lo inserto en diferentes partes del documento
        switch (where) {
            case "head-top":
                // Obtengo el elemento head
                element = document.getElementsByTagName("head")[0];
                // Le agrego el elemento creado antes del primer hijo
                element.insertBefore(script, element.firstChild);
                // Listo
                break;
            case "head-bottom":
                // Obtengo el elemento head
                element = document.getElementsByTagName("head")[0];
                // Lo agrego al final del head
                element.appendChild(script);
                // Listo
                break;
            case "body-top":
                // Obtengo el elemento body
                element = document.getElementsByTagName("body")[0];
                // Le agrego el elemento creado antes del primer hijo
                element.insertBefore(script, element.firstChild);
                // Listo
                break;
            case "body-bottom":
                // Obtengo el elemento body
                element = document.getElementsByTagName("body")[0];
                // Lo agrego al final del body
                element.appendChild(script);
                // Listo
                break;
            default:
                // No hago nada
                break;
        }
    }

    function compareVersions(a, b) {
        // Si coinciden devuelvo 0
        if (a === b) return 0;
        // Obtengo componentes de los valores
        var aComponents = a.split(".");
        var bComponents = b.split(".");
        // Obtengo el largo a considerar
        var len = Math.min(aComponents.length, bComponents.length);
        // Loopeo mientras coincidan las versiones
        for (var i = 0; i < len; i++) {
            // A es mayor que B
            if (parseInt(aComponents[i]) > parseInt(bComponents[i])) return 1;
            // B es mayor que A
            if (parseInt(aComponents[i]) < parseInt(bComponents[i])) return -1;
        }
        // Si hasta aca coinciden uno de los dos es mas largo, ese es el mayor
        if (aComponents.length > bComponents.length) return 1;
        if (aComponents.length < bComponents.length) return -1;
        // Si no se cumple nada de lo anterior son iguales
        return 0;
    }

    function initializeTether(onFinish) {
        // Antes de empezar chequeo si tether ya esta cargado
        if (window.Tether === undefined) {
            // Si es vieja hay que usar el tether falso, ya que no es compatible
            var useFakeTether = !!(ie && ie <= 8);
            // Mando a cargar tether desde el servidor
            loadJsScript(contentProtocol + "://" + contentDomain + (contentBasePath ? contentBasePath : "") + "/static/libs/" + (useFakeTether ? "tether-fake" : "tether") +  ".<%= STATIC_JS_EXTENSION %>", "head-bottom", function() {
                // Verifico nuevamente si la libreria esta cargada
                if (window.Tether === undefined) {
                    console.error("Cannot load tether library... ");
                } else {
                    // La libreria cargó
                    onFinish();
                }
            });
        } else {
            // Tether ya estaba cargado, continuo con la ejecucion del script
            onFinish();
        }
    }

    function initializeJQuery(onFinish) {
        // Antes de empezar chequeo si jQuery ya esta cargado y que la version sea compatible con bootstrap (Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0)
        if (typeof jQuery === "undefined" || compareVersions(jQuery.fn.jquery, "1.9.1") < 0 || compareVersions(jQuery.fn.jquery, "4.0.0") >= 0) {
            // Chequeo si no hay otro jQuery ya cargado
            var thisPageUsingOtherJSLibrary = (typeof jQuery === "function");
            // Obtengo referencia al jquery principal
            var mainJsLib = (typeof jQuery === "undefined" ? null : jQuery);
            // Si es vieja hay que usar el jquery viejo
            var useOlderJquery = !!(ie && ie <= 8);
            // Mando a cargar jQuery desde el servidor
            loadJsScript(contentProtocol + "://" + contentDomain + (contentBasePath ? contentBasePath : "") + "/static/libs/" + (useOlderJquery ? "jquery-1.12.0" : "jquery") +  ".<%= STATIC_JS_EXTENSION %>", "head-bottom", function() {
                // Verifico nuevamente si la libreria esta cargada
                if (typeof jQuery === "undefined") {
                    // Hubo algun error, no sigo...
                    console.error("Cannot load JQuery library...");
                    return;
                } else {
                    // La libreria cargó, tengo que verificar si el alias esta en uso
                    if (thisPageUsingOtherJSLibrary) {
                        // Uso un nuevo alias para no generar conflicto
                        myJsLib = jQuery.noConflict();
                        onFinish(myJsLib, mainJsLib);
                    } else {
                        // No esta en uso, uso el jQuery que ya tenia
                        onFinish(jQuery);
                    }
                }
            });
        } else {
            // JQuery ya estaba cargado (y la version sirve), continuo con la ejecucion del script
            onFinish(jQuery);
        }
    }

    function initializeJQueryValidation(jsLib, onFinish) {
        // Antes de empezar chequeo si jQuery ya esta cargado
        if (typeof jsLib.validator === "undefined") {
            // Mando a cargar jQuery desde el servidor
            loadJsScript(contentProtocol + "://" + contentDomain + (contentBasePath ? contentBasePath : "") + "/static/libs/jquery.validate.<%= STATIC_JS_EXTENSION %>", "head-bottom", function() {
                // Verifico nuevamente si la libreria esta cargada
                if (typeof jsLib.validator === "undefined") {
                    console.error("Cannot load JQuery validation library... ");
                } else {
                    // La libreria cargó
                    onFinish();
                }
            });
        } else {
            // JQuery ya estaba cargado, continuo con la ejecucion del script
            onFinish();
        }
    }

    function initializeBootstrap(jsLib, onFinish) {
        // Antes de empezar chequeo si bootstrap ya esta cargado
        if (typeof jsLib().modal !== "function") {
            // Si es vieja hay que usar el bootstrap viejo
            var useOlderBootstrap = !!(ie && ie <= 9);
            // Mando a cargar bootstrap desde el servidor
            loadJsScript(contentProtocol + "://" + contentDomain + (contentBasePath ? contentBasePath : "") + "/static/libs/" + (useOlderBootstrap ? "bootstrap-3.3.7" : "bootstrap") +  ".<%= STATIC_JS_EXTENSION %>", "head-bottom", function() {
                // Verifico nuevamente si la libreria esta cargada
                if (typeof jsLib().modal !== "function") {
                    console.error("Cannot load bootstrap library... ");
                } else {
                    // La libreria cargó
                    onFinish();
                }
            });
        } else {
            // JQuery ya estaba cargado, continuo con la ejecucion del script
            onFinish();
        }
    }

    function initializeFancybox(jsLib, onFinish) {
        // Chequeo si ya tengo cargado fancybox, y si la version me sirve
        if (!jsLib || !jsLib.fancybox || compareVersions(jsLib.fancybox.version, "3.2.10") < 0) {
            // Cargo el estilo css de fancybox
            loadCssStyle(contentProtocol + "://" + contentDomain + (contentBasePath ? contentBasePath : "") + "/static/css/popup.<%= STATIC_CSS_EXTENSION %>", "head-bottom", function() {
                // Cargo la libreria js de fancybox
                loadJsScript(contentProtocol + "://" + contentDomain + (contentBasePath ? contentBasePath : "") + "/static/libs/jquery.fancybox.<%= STATIC_JS_EXTENSION %>", "head-bottom", function() {
                    // Verifico nuevamente si la libreria esta cargada
                    if (!jsLib || !jsLib.fancybox) {
                        console.error("Cannot load Fancybox library... ");
                    } else {
                        // La libreria cargó
                        onFinish();
                    }
                });
            });
        } else {
            // Fancybox ya estaba cargado, continuo con la ejecucion del script
            onFinish();
        }
    }

    function initializeShared(jsLib, onFinish) {

        // Funcion para recibir evento de inicializacion de popup desde el iframe
        obj.popupInitialized = function(iframeData) {
            // Hago el fondo transparente
            jsLib(".fancybox-content").css("background", "transparent");
            jsLib(".fancybox-iframe").css("background", "transparent");
            // Si me llegan datos de tamaño y hay diferencia actualizo el contenedor (solo deberia cuando es sitio externo ya que no anda el preload)
            if (iframeData.width && iframeData.width !== jsLib(".fancybox-content").width()) jsLib(".fancybox-content").css("width", (iframeData.width));
            if (iframeData.height && iframeData.height !== jsLib(".fancybox-content").height()) jsLib(".fancybox-content").css({"height": (iframeData.height), "min-height": (iframeData.height)});
        };

        // Continuo con la ejecucion del script
        onFinish();
    }

    // Inicializo libreria Tether
    initializeTether(function() {
        // Inicializo libreria jQuery
        initializeJQuery(function(jsLib, mainJsLib) {
            // Inicializo libreria jQuery Validation
            initializeJQueryValidation(jsLib, function() {
                // Inicializo libreria de Bootstrap
                initializeBootstrap(jsLib, function() {
                    // Inicializo libreria de fancybox
                    initializeFancybox(jsLib, function() {
                        // Inicializo otras funciones compartidas
                        initializeShared(jsLib, function() {
                            // Doy por inicializadas las librerias
                            obj.sharedInitialized = true;
                            // Asocio la referenca a jquery en el objeto global
                            obj.jsLib = jsLib;
                            // Si recibi una libreria "prinicipal", asocio la referencia
                            if (mainJsLib) obj.mainJsLib = mainJsLib;
                        });
                    });
                });
            });
        });
    });

})(sharedObj, location, navigator, document, window);
