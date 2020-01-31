// Obtengo o inicializo objeto compartido
var sharedObj = sharedObj || {};

// Defino y llamo a funcion encapsulada
(function(obj, location, navigator, document, window) {

    // Parámetros globales de configuracion
    var CHAT_PROCESS_URL = "/public/chat/process";
    var CHAT_TIMEOUT = 30000;

    // Obtengo variables generales
    var currentProtocol = obj.currentProtocol || location.protocol.replace(":", "");
    var currentDomain = obj.currentDomain || location.host;
    var currentBasePath = obj.currentBasePath;
    var contentBaseHref = obj.contentBaseHref;
    var contentPath = obj.contentPath;
    var sourceId = obj.sourceId;
    var contentType = obj.contentType;
    var contentId = obj.contentId;
    var variantId = obj.variantId;
    var popupId = obj.popupId;
    var templateId = obj.templateId;
    var campaignId = obj.campaignId;
    var contactId = obj.contactId;
    var isInternalContent = !!(obj.isInternalContent && obj.isInternalContent.toString() === "true");
    var isPopup = !!(obj.isPopup && obj.isPopup.toString() === "true");
    // Obtengo variables de configuracion de la campaña
    var chatEnvironmentHttps = !!(obj.chatEnvironmentHttps && obj.chatEnvironmentHttps.toString() === "true");
    var chatEnvironmentHost = obj.chatEnvironmentHost || "";
    var chatEnvironmentPort = obj.chatEnvironmentPort || "80";
    var chatCampaign = obj.chatCampaign || "";
    var chatAccount = obj.chatAccount || "";
    var chatAccountToken = obj.chatAccountToken || "";
    var duplicatedContactMessage = obj.chatDuplicatedContactMessage;
    var redirectToThankyouPage = !!(obj.chatRedirectToThankyouPage && obj.chatRedirectToThankyouPage.toString() === "true");
    var redirectToThankyouPageOnDuplicate = !!(obj.chatRedirectToThankyouPageOnDuplicate && obj.chatRedirectToThankyouPageOnDuplicate.toString() === "true");
    var successMessage = obj.chatSuccessMessage;
    var conversionCustomCode = obj.chatConversionCustomCode;
    // Obtengo variables de mensajes genericos
    var successHeaderText = obj.chatSuccessHeaderText;
    var failedHeaderText = obj.chatFailedHeaderText;
    var closeButtonText = obj.chatCloseButtonText;
    var failedMessage = obj.chatFailedMessage;
    var errorMessage = obj.chatErrorMessage;
    var timeoutMessage = obj.chatTimeoutMessage;

    // Verifico si estoy en un popup interno
    var isInternalPopup = !!(getParameterByName(location.href, "isinternalpopup") === "1");

    // Armo URL para thankyou page
    var thankyouPagePrefix = "t";
    var conversionChannel = "chat";
    var thankyouPageUrl = (isInternalContent ? currentProtocol + "://" + currentDomain + (currentBasePath ? currentBasePath : "") + "/" + thankyouPagePrefix + contentPath + conversionChannel :  "");

    // Boton presionado
    var clickedButtonId;

    // Flag de chat en proceso
    var chatProcessing = false;

    // Inicializo flag de conversion
    obj.chatConverted = false;

    // Parseo codigo custom para conversion
    try {
        if (conversionCustomCode) {
            conversionCustomCode = JSON.parse(decodeURIComponent(conversionCustomCode)) || conversionCustomCode;
        } else {
            conversionCustomCode = {};
        }
    } catch (e) {
        conversionCustomCode = {};
    }

    // Flag para indicar si ya se inserto el codigo
    var conversionCustomCodeInjected = false;

    function initializeChat(jsLib) {

        // Funcion para procesar el chat abierto
        var onChatOpen = function(callback) {
            // Datos del contacto y conversion recibidos en respuesta del c2c
            var contactData = {};
            var conversionData = {};
            // Recupero el array de parametros que se armo para el tracking
            var visitParams = (obj.tracking && obj.tracking.visitParams) || {};
            try {
                // Muestro el spinner
                showSpinner(true);
                // Enciendo el flag de processing
                chatProcessing = true;
                // Datos que se enviaran al servidor
                var postData = {
                    visitId: visitParams.visitId,
                    contentUrl: location.href,
                    contentType: contentType,
                    contentId: contentId,
                    variantId: variantId,
                    templateId: templateId,
                    sourceId: sourceId,
                    campaignId: campaignId,
                    thankyouPageUrl: thankyouPageUrl,
                    formId: null,
                    buttonId: clickedButtonId,
                    contactData: {
                        id: contactId,
                        trackingId: visitParams.trackingId,
                        fingerprint: visitParams.fingerprint
                    }
                };
                // Obtengo los datos de contactos guardados en objeto compartido
                var previousContactData = obj.contactData || {};
                // Si tengo datos de contacto capturados desde otros scripts, los uso
                for (var data in previousContactData) {
                    if (previousContactData.hasOwnProperty(data))
                        postData.contactData[data] = previousContactData[data];
                }
                // Envio post al servidor para procesar el evento
                jsLib.ajax({
                    type: "POST",
                    url: currentProtocol + "://" + currentDomain + (currentBasePath ? currentBasePath : "") + CHAT_PROCESS_URL,
                    data: JSON.stringify(postData),
                    dataType: "json",
                    contentType: "application/json",
                    async: !obj.ajaxSync,
                    timeout: CHAT_TIMEOUT,
                    success: function(response, textStatus, jqXHR) {
                        if (response && response.status) {
                            // Si tengo contacto lo guardo localmente y en el sessionStorage
                            if (response.data && response.data.contact) {
                                contactData = response.data.contact;
                                sessionStorage.setItem("Contact", JSON.stringify(response.data.contact));
                            }
                            // Si tengo conversion lo guardo localmente y en el sessionStorage
                            if (response.data && response.data.conversion) {
                                conversionData = response.data.conversion;
                                sessionStorage.setItem("Conversion", JSON.stringify(response.data.conversion));
                            }
                            // Array de parametros a enviar
                            var paramsArray = [];
                            // Agrego el ID de contacto
                            if (contactData.id) paramsArray.push({
                                n: "contactId",
                                a: "contactId",
                                t: "ID",
                                v: contactData.id
                            }, {
                                n: "contactId",
                                a: "contactId",
                                t: "CUSTOM",
                                v: contactData.id
                            });
                            // Agrego el ID de conversion
                            if (conversionData.conversionId) paramsArray.push({
                                n: "conversionId",
                                a: "conversionId",
                                t: "CUSTOM",
                                v: conversionData.conversionId
                            });
                            // Agrego el ID de visita
                            if (visitParams.visitId) paramsArray.push({
                                n: "visitId",
                                a: "visitId",
                                t: "CUSTOM",
                                v: visitParams.visitId
                            });
                            // Agrego la URL
                            paramsArray.push({
                                n: "url",
                                a: "url",
                                t: "CUSTOM",
                                v: location.href.split("?")[0]
                            });
                            // Devuelvo datos de contexto para enviar al agente
                            if (callback) callback(paramsArray);
                            // Inyecto codigo custom si lo hay
                            injectConversionCustomCode();
                            // Activo mensaje y thankyou page
                            showMessageAndRedirect(response.data);
                            // Actualizo flag de conversion
                            obj.chatConverted = true;
                        } else {
                            // Devuelvo datos de contexto para enviar al agente
                            if (callback) callback([]);
                            // Se recibio un error desde el servidor
                            var msg = response.error || response.description || failedMessage;
                            // Muestro mensaje recibido
                            showModal(failedHeaderText, msg, closeButtonText);
                        }
                        // Apago el spinner
                        showSpinner(false);
                        // Apago el flag de processing
                        chatProcessing = false;
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        // Devuelvo datos de contexto para enviar al agente
                        if (callback) callback([]);
                        // Fallo el process
                        var msg = errorMessage + ": " + textStatus;
                        // Si el error es un timeout muestro mensaje configurado
                        if (textStatus === "timeout") msg = timeoutMessage;
                        // Muestro mensaje recibido
                        showModal(failedHeaderText, msg, closeButtonText);
                        // Apago el spinner
                        showSpinner(false);
                        // Apago el flag de processing
                        chatProcessing = false;
                    }
                });
            } catch (err) {
                // Algo fallo
                console.error(err);
                // Muestro mensaje
                showModal(failedHeaderText, errorMessage, closeButtonText);
                // Devuelvo datos de contexto para enviar al agente
                if (callback) callback([]);
                // Apago el spinner
                showSpinner(false);
                // Apago el flag de processing
                chatProcessing = false;
            }
        };

        // Funcion para abrir formulario modal
        function showModal(title, body, close, onClose) {
            // Si tengo deshabilitados los mensajes no sigo
            if (obj.disableMessages) return;
            // Actualizo los campos con los textos recibidos
            jsLib("#icModalTitle").html(title);
            jsLib("#icModalBody").html(body);
            jsLib("#icModalCloseButton").html(close);
            // Asocio la funcion a ejecutar al cerrar si existe
            if (typeof onClose === "function") jsLib("#icModal").on("hidden.bs.modal", onClose);
            // Mando a abrir el formulario
            jsLib("#icModal").modal("show");
        }

        // Funcion para abrir o cerrar loadingSpinner
        function showSpinner(show) {
            // Si tengo deshabilitado el spinner no sigo
            if (obj.disableSpinner) return;
            // Segun el caso hago toggle o accion especifica
            if (show === undefined || show === null)
                // Mando a abrir el formulario
                jsLib("#icSpinner").modal("toggle");
            else
                // Mando a abrir el formulario
                jsLib("#icSpinner").modal((show ? "show" : "hide"));
        }

        // Funcion para inyectar codigo custom de conversion
        function injectConversionCustomCode() {
            // Si ya lo inyecte en otra conversion, no lo vuelvo a hacer
            if (conversionCustomCodeInjected) return;
            // Meto todo dentro de bloque try catch por si el codigo tiene errores
            try {
                // Verifico caso head
                if (conversionCustomCode && conversionCustomCode.head) {
                    // Inyecto codigo en el head
                    jsLib("head").append(conversionCustomCode.head);
                }
                // Verifico caso bodyTop
                if (conversionCustomCode && conversionCustomCode.bodyTop) {
                    // Inyecto codigo en inicio del body
                    jsLib("body").prepend(conversionCustomCode.bodyTop);
                }
                // Verifico caso bodyBottom
                if (conversionCustomCode && conversionCustomCode.bodyBottom) {
                    // Inyecto codigo en final del body
                    jsLib("body").append(conversionCustomCode.bodyBottom);
                }
            } catch (err) {
                // Algo fallo
                console.error(err);
            }
            // Paso el flag a true
            conversionCustomCodeInjected = true;
        }

        // Funcion para mostrar mensajes y redirecciones de conversion
        function showMessageAndRedirect(data) {
            // Verifico si el contacto fue duplicado
            var isDuplicated = (data && data.status === "duplicate") || false;
            // Verifico si corresponde usar thankyou page
            var mustRedirectToThankyouPage = ((!isDuplicated && redirectToThankyouPage) || (isDuplicated && redirectToThankyouPageOnDuplicate));
            // Segun el caso redirijo a thankyou page o muestro mensaje modal
            if (isInternalContent && mustRedirectToThankyouPage) {
                // Si es contenido interno y corresponde, redirijo a thankyou page
                if (thankyouPageUrl) location.href = thankyouPageUrl;
            } else {
                // Obtengo el mensaje a mostrar segun el caso
                var message = (isDuplicated ? duplicatedContactMessage : successMessage);
                // Si tengo mensaje lo muestro
                if (message) showModal(successHeaderText, message, closeButtonText);
            }
        }

        // Funcion para inyectar el codigo generado por la campaña/cuenta de chat en i6
        function injectChatScript(i6Https, i6Host, i6Port, token, success) {
            // Initializo el script de chat de i6
            var proto  = (i6Https === true ? "https:" : location.protocol || "http:");
            var node   = document.createElement("script");
            node.type  = "text/javascript";
            node.async = true;
            node.src   = proto +  "//webchat-" + i6Host + (i6Port === "80" ? "" : ":" + i6Port) + "/v3/click_to_chat?token=" + token;
            // Handler para manejar el evento de carga del script
            var done = false;
            node.onload = node.onreadystatechange = function() {
                if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                    done = true;
                    success();
                }
            };
            // Handler para capturar errores de carga
            node.onerror = function() {
                console.error("Web chat failed to load... i6 server is down??");
            };
            // Agrego el script al dom para que se cargue
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(node, s);
        }

        // Al levantar la pagina configuro el canal
        jsLib(document).ready(function() {

            // Me suscribo al evento de chat listo
            jsLib(window).on("readyActiveChat", function(e) {
                // Obtengo el api de i6
                var i6Api = inConcert[chatAccountToken];
                // Funcion para capturar parametros y enviarlos al formulario de chat
                i6Api.setCaptureParametersFunction(onChatOpen, true);
                // Doy por inicializado el canal de chat
                obj.chatInitialized = true;
                // Verifico si corresponde reactivar los links y los botones inicialmente desactivados
                if (isInternalContent && typeof reEnableLinks === "function") reEnableLinks();
                if (isInternalContent && typeof reEnableButtons === "function") reEnableButtons();
            });

            // Inyecto el script de chat de i6
            injectChatScript(chatEnvironmentHttps, chatEnvironmentHost, chatEnvironmentPort, chatAccountToken,
                function() {
                    // Script de chat cargado
                }
            );
        });
    }

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
                console.error("Shared library failed to load... Chat scripts wont initialize");
            }
        };
        window.setTimeout(checkLoop, interval);
    }

    // Me quedo esperando a que cargue la libreria shared
    whenJsLibAvailable(function(jsLib) {
        // Inicializo el canal cuando este todo listo
        initializeChat(jsLib);
    });

})(sharedObj, location, navigator, document, window);
