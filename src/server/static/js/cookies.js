// Obtengo o inicializo objeto compartido
var sharedObj = sharedObj || {};

// Defino y llamo a funcion encapsulada
(function(obj, location, navigator, document, window) {

    // Si estoy en IE >= 8 no muestro mensaje (la libreria no funciona)
    if (obj.ie && obj.ie <= 8) return;

    // Obtengo variables generales
    var contentProtocol = obj.contentProtocol || location.protocol.replace(":", "");
    var contentDomain = obj.contentDomain || location.host;
    var contentBasePath = obj.contentBasePath;

    // Opciones del aviso de cookies
    var cookiesAlertEnabled = !!obj.cookiesAlertEnabled;
    var cookiesAlertPosition = obj.cookiesAlertPosition || "bottom";
    var cookiesAlertMessage = decodeURIComponent(obj.cookiesAlertMessage || "This website uses cookies to ensure you get the best experience on our website.");
    var cookiesAlertDismiss = obj.cookiesAlertDismiss || "OK";

    // Si no tengo habilitado el uso de cookies no sigo
    if (!cookiesAlertEnabled) return;

    // Armo configuracion para el cookieconsent
    var cookieConsentConfig = {
        "palette": {
            "popup": {
                "background": "#252e39"
            },
            "button": {
                "background": "#14a7d0"
            }
        },
        "showLink": false,
        "theme": "classic",
        "position": cookiesAlertPosition,
        "content": {
            "message": cookiesAlertMessage,
            "dismiss": cookiesAlertDismiss,
        },
        "cookie": {
            "expiryDays": 1
        }
    };

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

    // Cargo el estilo css de cookieconsent
    loadCssStyle(contentProtocol + "://" + contentDomain + (contentBasePath ? contentBasePath : "") + "/static/libs/cookieconsent.<%= STATIC_CSS_EXTENSION %>", "head-bottom", function() {

        // Cargo el libreria js de cookieconsent
        loadJsScript(contentProtocol + "://" + contentDomain + (contentBasePath ? contentBasePath : "") + "/static/libs/cookieconsent.<%= STATIC_JS_EXTENSION %>", "head-bottom", function() {

            // Inicializo  la libreria
            if (document.readyState === "complete") {
                // Si la pagina ya cargo la initializo directamente
                window.cookieconsent.initialise(cookieConsentConfig);
            } else {
                // Sino, le meto un listener al evento de load
                window.addEventListener("load", function() {
                    window.cookieconsent.initialise(cookieConsentConfig);
                });
            }
        });
    });

})(sharedObj, location, navigator, document, window);
