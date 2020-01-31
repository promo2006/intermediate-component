// Obtengo o inicializo objeto compartido
var sharedObj = sharedObj || {};

// Defino y llamo a funcion encapsulada
(function(obj, location, navigator, document, window) {

    // Devuelve parametros del querystring de una URL
    obj.getParameterByName = function(url, name) {
        if (!url) return null;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
        var results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return "";
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };

    // Obtengo datos de la URL del iframe
    var pageTitle = obj.pageTitle || obj.getParameterByName(location.href, "a");
    var pageUrl = obj.pageUrl || obj.getParameterByName(location.href, "b");
    var pageReferrer = obj.pageReferrer || obj.getParameterByName(location.href, "c");
    var adblock = obj.adblock || obj.getParameterByName(location.href, "d");
    var doNotTrack = obj.doNotTrack || obj.getParameterByName(location.href, "e");
    var currentProtocol = obj.currentProtocol || obj.getParameterByName(location.href, "f2") || location.protocol.replace(":", "");
    var currentDomain = obj.currentDomain || obj.getParameterByName(location.href, "f") || location.host;
    var trackingProtocol = obj.trackingProtocol || obj.getParameterByName(location.href, "g2") || location.protocol.replace(":", "");
    var trackingDomain = obj.trackingDomain || obj.getParameterByName(location.href, "g") || location.host;
    var sourceId = obj.sourceId || obj.getParameterByName(location.href, "h");
    var variantId = obj.variantId || obj.getParameterByName(location.href, "i");
    var contentType = obj.contentType || obj.getParameterByName(location.href, "j");
    var contentId = obj.contentId || obj.getParameterByName(location.href, "k");
    var templateId = obj.templateId || obj.getParameterByName(location.href, "l");
    var campaignId = obj.campaignId || obj.getParameterByName(location.href, "m");
    var contactId = obj.contactId || obj.getParameterByName(location.href, "n");
    var clickSourceName = obj.clickSourceName || obj.getParameterByName(location.href, "o");
    var clickIdName = obj.clickIdName || obj.getParameterByName(location.href, "p");
    var clickCampaignName = obj.clickCampaignName || obj.getParameterByName(location.href, "q");
    var clickAdGroupName = obj.clickAdGroupName || obj.getParameterByName(location.href, "r");
    var clickKeywordName = obj.clickKeywordName || obj.getParameterByName(location.href, "s");
    var clickAdPositionName = obj.clickAdPositionName || obj.getParameterByName(location.href, "t");
    var isInternalContent = (obj.isInternalContent && obj.isInternalContent.toString() === "true") || (obj.getParameterByName(location.href, "u") === "true");
    var isErrorPage = (obj.isErrorPage && obj.isErrorPage.toString() === "true") || (obj.getParameterByName(location.href, "v") === "true");
    var inboundPublicNumber = obj.inboundPublicNumber || obj.getParameterByName(location.href, "w");
    var inboundRoutedNumber = obj.inboundRoutedNumber || obj.getParameterByName(location.href, "x");
    var trackingBasePath = obj.trackingBasePath || obj.getParameterByName(location.href, "y");
    var currentBasePath = obj.currentBasePath || obj.getParameterByName(location.href, "z");

    // Busco el trackingId que me llega desde la pagina principal (si no esta ahi lo busco en las cookies del dominio de tracking)
    var trackingId = obj.getParameterByName(location.href, "ictid") || obj.readCookie("_ictid");

    // Verifico si no tengo dato en el parametro v (significaria que el cliente tiene una version vieja en cache)
    if (obj.getParameterByName(location.href, "v") === null) {
        // Tengo que ajustar los datos
        console.log("Correccion para version vieja del script");
        // Obtengo los parametros con los nombres anteriores
        variantId = "";
        contentType = obj.contentType || obj.getParameterByName(location.href, "i");
        contentId = obj.contentId || obj.getParameterByName(location.href, "j");
        templateId = obj.templateId || obj.getParameterByName(location.href, "k");
        campaignId = obj.campaignId || obj.getParameterByName(location.href, "l");
        contactId = obj.contactId || obj.getParameterByName(location.href, "m");
        clickSourceName = obj.clickSourceName || obj.getParameterByName(location.href, "n");
        clickIdName = obj.clickIdName || obj.getParameterByName(location.href, "o");
        clickCampaignName = obj.clickCampaignName || obj.getParameterByName(location.href, "p");
        clickAdGroupName = obj.clickAdGroupName || obj.getParameterByName(location.href, "q");
        clickKeywordName = obj.clickKeywordName || obj.getParameterByName(location.href, "r");
        clickAdPositionName = obj.clickAdPositionName || obj.getParameterByName(location.href, "s");
        isInternalContent = (obj.isInternalContent && obj.isInternalContent.toString() === "true") || (obj.getParameterByName(location.href, "t") === "true");
        isErrorPage = (obj.isErrorPage && obj.isErrorPage.toString() === "true") || (obj.getParameterByName(location.href, "u") === "true");
        inboundPublicNumber = "";
        inboundRoutedNumber = "";
    }

    // URL del pixel de tracking
    var pixelTrackingUrl = (trackingProtocol && trackingDomain ? trackingProtocol + "://" + trackingDomain : "") + (trackingBasePath ? trackingBasePath : "") + "/public/tracking/pixel.gif";

    // Funcion que crea el pixel y con esto envia el evento de content visit
    obj.sendContentVisit = function() {
        // Objeto de parametros para tracking
        var visitParams = {};
        var previousVisitParams = {};
        // Genero el id de visita aleatorio
        visitParams.visitId = obj.generateGuid();
        // Guardo los parametros obtenidos en el objeto global para capturarlo en otros scripts
        obj.visitParams = visitParams;
        // Obtengo parametros de la pagina
        visitParams.event = "contentvisit";
        visitParams.page_title = pageTitle;
        visitParams.page_language = navigator.language;
        visitParams.page_referrer = encodeURIComponent(pageReferrer);
        visitParams.page_url = encodeURIComponent(pageUrl);
        visitParams.timeStamp = new Date();
        visitParams.resolution = (screen.height > screen.width) ? screen.height + "x" + screen.width : screen.width + "x" + screen.height;
        visitParams.timezone_offset = new Date().getTimezoneOffset();
        visitParams.platform = navigator.platform;
        visitParams.adblock = adblock;
        visitParams.do_not_track = doNotTrack;
        // Agrego las variables que tenga definidas como globales en los scripts inyectados
        visitParams.currentProtocol = currentProtocol;
        visitParams.currentDomain = currentDomain;
        visitParams.currentBasePath = currentBasePath;
        visitParams.trackingProtocol = trackingProtocol;
        visitParams.trackingDomain = trackingDomain;
        visitParams.trackingBasePath = trackingBasePath;
        visitParams.contactId = contactId;
        visitParams.campaignId = campaignId;
        visitParams.contentType = contentType;
        visitParams.contentId = contentId;
        visitParams.variantId = variantId;
        visitParams.templateId = templateId;
        visitParams.sourceId = sourceId;
        visitParams.isInternalContent = isInternalContent;
        visitParams.isErrorPage = isErrorPage;
        visitParams.inboundPublicNumber = inboundPublicNumber;
        visitParams.inboundRoutedNumber = inboundRoutedNumber;
        // Agrego los parametros recibidos en la URL de la landing, segun configuracion de la campaña
        if (clickSourceName) visitParams.clickSource = obj.getParameterByName(pageUrl, clickSourceName);
        if (clickIdName) visitParams.clickId = obj.getParameterByName(pageUrl, clickIdName);
        if (clickCampaignName) visitParams.clickCampaign = obj.getParameterByName(pageUrl, clickCampaignName);
        if (clickAdGroupName) visitParams.clickAdGroup = obj.getParameterByName(pageUrl, clickAdGroupName);
        if (clickKeywordName) visitParams.clickKeyword = obj.getParameterByName(pageUrl, clickKeywordName);
        if (clickAdPositionName) visitParams.clickAdPosition = obj.getParameterByName(pageUrl, clickAdPositionName);
        // Chequeo si estan guardados los parametros en el session storage de una visita anterior
        try {
            // Obtengo parametros almacenados si existen
            var stored = sessionStorage.getItem("VisitParams");
            if (stored) previousVisitParams = JSON.parse(stored);
            // Si la visita tiene los mismos parametros que la anterior y es de tipo website, no trackeo ya que asumo que es navegación
            if (visitParams.campaignId === previousVisitParams.campaignId &&
                visitParams.contentId === previousVisitParams.contentId &&
                visitParams.templateId === previousVisitParams.templateId &&
                visitParams.contentType === previousVisitParams.contentType) {
                // Guardo la visita anterior en el objeto global, para trackear el left y para que lo usen las demas librerias
                obj.visitParams = previousVisitParams;
                // Envio data hacia la pagina principal
                obj.sendDataToMainPage();
                // Interrumpo la ejecucion para no hacer el tracking de esta visita
                return;
            }
        } catch (ex) {
            previousVisitParams = {};
        }
        // Si obtuve un tarcking (deberia) lo uso, sino genero uno
        if (trackingId) {
            // Si hay un trackingId guardado, lo asocio a la visita
            visitParams.trackingId = trackingId;
        } else {
            // Si no hay trackingId, genero uno nuevo
            visitParams.trackingId = obj.generateGuid();
        }
        try {
            // Obtengo fingerprint del browser y junto los parametros que me devuelve
            new Fingerprint2({ excludeAvailableScreenResolution: true })
            .get(function(result, components) {
                // Guardo el fingerprint para usarlo en los siguientes eventos
                visitParams.fingerprint = result;
                // Creo el pixel con toda la data que tengo
                obj.createPixel();
                // Envio data hacia la pagina principal
                obj.sendDataToMainPage();
            });
        } catch (err) {
            // Hubo algun error
            console.error("Cannot obtain browser fingerprint...");
            // Creo el pixel con toda la data que tengo
            obj.createPixel();
            // Envio data hacia la pagina principal
            obj.sendDataToMainPage();
        }
    };

    // Funcion para crear el pixel con la informacion que se recolecto
    obj.createPixel = function() {
        // Obtengo o creo el array de parametros
        var visitParams = obj.visitParams || {};
        // Limpio las propiedades nulas del objeto
        for (var propName in visitParams) {
            if (visitParams[propName] === null || visitParams[propName] === undefined) delete visitParams[propName];
        }
        // Creo el objeto img para que se envie el request
        obj.trackingPixel = new Image();
        obj.trackingPixel.src = pixelTrackingUrl + "?" + obj.toQuerystring(visitParams);
        // Guardo el objeto final en el session storage, para detectar posteriores visitas dentro del mismo tab
        sessionStorage.setItem("VisitParams", JSON.stringify(visitParams));
        // Guardo el trackingId en el cookie paaa detectarlo en futuras visitas
        obj.createCookie("_ictid", visitParams.trackingId, 365);
    };

    // Funcion para capturar el unload de la pagina y trackear el page left
    obj.hookContentVisitLeft = function() {
        // Obtengo o creo el array de parametros
        var visitParams = obj.visitParams || {};
        // Obtengo el handler anterior si existe
        var existingHandler = window.onbeforeunload;
        // Asocio funcion al evento onbeforeunload
        window.onbeforeunload = function(event) {
            // Si ya existia una funcion para este evento la ejecuto
            if (existingHandler) existingHandler(event);
            // En el cierre de la pagina mando un nuevo request para trackear el content visit left
            var leftParams = {
                event: "contentvisitleft",
                visitId: visitParams.visitId
            };
            //Envio request http para trackear el evento
            obj.httpGet(pixelTrackingUrl + "?" + obj.toQuerystring(leftParams), true);
        };
    };

    // Ejecuta un request GET
    obj.httpGet = function(url, sync) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url, sync === true);
        xmlHttp.send();
    };

    // Genera un hash tipo guid usando el random de javascript
    obj.generateGuid = function() {
        // Devuelve un string de 4 caracteres (numeros y minusculas) aleatorios
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        // Arma el guid
        return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
    };

    // Convierte los parametros almacenados en querystring para enviar en el GET al pixel
    obj.toQuerystring = function(objParams) {
        if ("string" === typeof objParams) {
            return objParams;
        }
        return Object.keys(objParams).map(function(key) {
            return key + "=" + objParams[key];
        }).join("&");
    };

    // Crea una nueva cookie
    obj.createCookie = function(name, value, days) {
        var cookieValue = name + "=" + value;
        var cookieExpires = "";
        var cookiePath = "; path=/";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toUTCString();
        }
        document.cookie = cookieValue + cookieExpires + cookiePath;
    };

    // Obtiene el dato de una cookie
    obj.readCookie = function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    };

    // Borra una cookie
    obj.eraseCookie = function(name) {
        obj.createCookie(name, "", -1);
    };

    // Funcion para enviar el objeto y sus datos hacia la pagina principal
    obj.sendDataToMainPage = function() {
        // Posteo data hacia el window principal para que reciban datos de tracking
        try {
            // Armo objeto con datos a enviar
            var dataToSend = {
                action: "tracking",
                tracking: obj
            };
            // Segun el caso obtengo el origen a donde hay que postear el mensaje
            var mainPageOrigin = (isInternalContent ? currentProtocol + "://" + currentDomain + (currentBasePath ? currentBasePath : "")  : pageUrl);
            // Hago el postMessage con el objeto que tiene todo hacia el parent en el dominio correspondiente
            parent.postMessage(JSON.stringify(dataToSend), mainPageOrigin);
        } catch (err) {
            // Hubo algun error
            console.error("Cannot share data beween main and tracking frames...");
        }
    };

    // Ejecuto el tracking de la visita
    obj.sendContentVisit();
    // Asocio el evento de visit left
    obj.hookContentVisitLeft();

})(sharedObj, location, navigator, document, window);
