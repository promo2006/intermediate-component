// Obtengo o inicializo objeto compartido
var sharedObj = sharedObj || {};

// Defino y llamo a funcion encapsulada
(function(obj, location, navigator, document, window) {

    // Obtengo variables generales
    var currentProtocol = obj.currentProtocol || location.protocol.replace(":", "");
    var currentDomain = obj.currentDomain || location.host;
    var currentBasePath = obj.currentBasePath;
    var contentProtocol = obj.contentProtocol || location.protocol.replace(":", "");
    var contentDomain = obj.contentDomain || location.host;
    var contentBasePath = obj.contentBasePath;
    var contentBaseHref = obj.contentBaseHref;
    var contentPath = obj.contentPath;
    var sourceId = obj.sourceId;
    var contentType = obj.contentType;
    var contentId = obj.contentId;
    var variantId = obj.variantId;
    var templateId = obj.templateId;
    var campaignId = obj.campaignId;
    var campaignToken = obj.campaignToken;
    var contactId = obj.contactId;
    var isInternalContent = !!(obj.isInternalContent && obj.isInternalContent.toString() === "true");

    // Armo datos para la URL del popup
    var popupUrlBase = currentProtocol + "://" + currentDomain + (currentBasePath ? currentBasePath : "") + "/popup/" + campaignToken + "/";
    var popupUrlParams = (isInternalContent ? "opened_from=" + contentPath + "&source_id=" + sourceId + "&" : "");

    // Obtengo la lista de popups a usar
    var popupsData = obj.popupsData;

    // Parseo las reglas para abrir el popup
    try {
        if (popupsData) {
            popupsData = JSON.parse(decodeURIComponent(popupsData)) || [];
        } else {
            popupsData = [];
        }
    } catch (e) {
        popupsData = [];
    }

    // Si no tengo lista de popups o no tengo al menos un elemento no sigo
    if (!popupsData || !popupsData.length) return;

    // Datos del trigger que disparo el template
    var popupTriggerType = "";
    var popupTriggerValue = "";

    // Datos del popup
    var popupObj = null;
    var popupOpened = false;
    var popupOpts = {
        // URL del popup
        src: popupUrlBase,
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

    function initializePopup(jsLib) {

        // Si el flag esta habilitado no sigo procesando
        if (obj.disablePopup) return;

        // Obtengo el ancho de pantalla
        var width = jsLib(window).width();
        var height = jsLib(window).height();

        // Obtengo la URL actual
        var currentUrl = window.location.pathname;

        // Funcion para abrir el popup
        var openPopup = function(popupId, triggerType, triggerValue) {
            // Verifico si no hay otro popup abierto
            if (!popupOpened) {
                // Actualizo el valor del trigger disparado
                popupTriggerType = triggerType || "";
                popupTriggerValue = triggerValue || "";
                // Actualizo la URL con los parametros del trigger actual
                popupOpts.src = popupUrlBase + (popupId || "").toLowerCase() + "?" + popupUrlParams + "trigger_type=" + popupTriggerType + "&trigger_value=" + popupTriggerValue;
                // Abro el popup
                popupObj = jsLib.fancybox.open(popupOpts);
                // Devuelvo true
                return true;
            } else {
                // Si no se pudo abrir devuelvo false
                return false;
            }
        };

        // Al levantar la pagina configuro el popup
        jsLib(document).ready(function() {

            // Recorro y proceso la lista de popups recibida
            popupsData.forEach(function(popup, index) {

                ///////////////////////////////////////////
                // Obtengo datos del popup a inicializar //
                ///////////////////////////////////////////

                // Obtengo variables de configuracion del popup (DE MOMENTO USO EL PRIMERO DE LA LSITA, LUEGO HAY QUE CAMBIAR ESTO PARA SOPORTAR N POPUPS)
                var popupId = popup.id;
                var popupRules = popup.rules;
                var popupCondition = popup.condition;

                // Parseo las reglas para abrir el popup
                try {
                    if (popupRules) {
                        popupRules = JSON.parse(decodeURIComponent(popupRules)) || {};
                    } else {
                        popupRules = {};
                    }
                } catch (e) {
                    popupRules = {};
                }

                // Parseo las condiciones para abrir el popup
                try {
                    if (popupCondition) {
                        popupCondition = JSON.parse(decodeURIComponent(popupCondition)) || {};
                    } else {
                        popupCondition = {};
                    }
                } catch (e) {
                    popupCondition = {};
                }

                // Datos asociados a las reglas
                var deviceEnabled = false;
                var domainEnabled = false;
                var urlEnabled = false;
                var frecuencyEnabled = false;

                // Datos para uso maximo del popup
                var maxPopupPerTrigger = (popupRules && popupRules.frecuency && popupRules.frecuency.maxPerTrigger ? +popupRules.frecuency.maxPerTrigger : 1);
                var maxPopupTotal = (popupRules && popupRules.frecuency && popupRules.frecuency.maxTotal ? +popupRules.frecuency.maxTotal : 1);
                var popupTotalCount = 0;

                // Obtengo configuracionde deshabilitar popup
                var disableOnConversion = (popupRules && popupRules.disable && popupRules.disable.conversion ? !!popupRules.disable.conversion.enabled : false);

                //////////////////////////////////////////////////////
                // Verifico si las condiciones configuradas aplican //
                //////////////////////////////////////////////////////

                // Segun el tamaño, verifico que el tipo de dispositivo este habilitado
                if (width <= 600) {
                    // Caso tamaño mobile
                    deviceEnabled = !!(popupRules && popupRules.device && popupRules.device.mobile);
                } else if (deviceEnabled = (width > 600 && width <= 900)) {
                    // Caso tamaño tablet
                    deviceEnabled = !!(popupRules && popupRules.device && popupRules.device.tablet);
                } else {
                    // Caso tamaño desktop
                    deviceEnabled = !!(popupRules && popupRules.device && popupRules.device.desktop);
                }

                // Verifico si el dominio esta habilitado
                domainEnabled = (!popupRules.domain || popupRules.domain === window.location.host);

                // Flag para salir del loop
                var exit = false;

                // Recorro el array de reglas
                if (popupRules && popupRules.url && popupRules.url.length) popupRules.url.forEach(function(urlRule) {
                    // Verifico si ya se encontro una condicion
                    if (exit) return;
                    // Evaluo las condiciones
                    if (
                        // Caso todas las URL
                        (urlRule.condition === "all") ||
                        // Caso pagina inicial
                        (urlRule.condition === "home" && (currentUrl === contentPath || currentUrl + "/" === contentPath || currentUrl === "/")) ||
                        // Caso la URL comienza con
                        (urlRule.condition === "startsWith" && urlRule.value && (currentUrl.startsWith(urlRule.value) || currentUrl.startsWith("/" + urlRule.value))) ||
                        // Caso la URL termina con
                        (urlRule.condition === "endsWith" && urlRule.value && (currentUrl.endsWith(urlRule.value))) ||
                        // Caso la URL contiene
                        (urlRule.condition === "contains" && urlRule.value && (currentUrl.indexOf(urlRule.value) > -1)) ||
                        // Caso la URL es igual a
                        (urlRule.condition === "equals" && urlRule.value && (currentUrl === urlRule.value || currentUrl === "/" + urlRule.value))
                    ) {
                        // Aplico la acción (la primera que matchea es la que vale)
                        urlEnabled = (urlRule.action === "show");
                        // Interrumpo loop
                        exit = true;
                    }
                });

                // Datos almacenados en localStorage
                var popupData = {};

                // Intento obtener datos almacenados en localStorage
                try {
                    popupData = JSON.parse(localStorage.getItem("popup-" + campaignToken + "-" + popupId.toLowerCase())) || {};
                } catch (err) {
                    popupData = {};
                }

                // Actualizo datos de la visita
                popupData.lastVisitDate = new Date().toLocaleString();
                popupData.lastVisitUrl = window.location.href;
                popupData.visitCount = (popupData.visitCount ? popupData.visitCount + 1 : 1);

                // Actualizo el dato en el localStorage
                localStorage.setItem("popup-" + campaignToken + "-" + popupId.toLowerCase(), JSON.stringify(popupData));

                // Obtengo configuraciones
                var frecuencyType = (popupRules && popupRules.frecuency && popupRules.frecuency.type) || "everyVisit";
                var frecuencyOnlyOnVisitNum = (popupRules && popupRules.frecuency && popupRules.frecuency.onlyOnVisitNum) || 1;
                var frecuencyEveryNumVisit = (popupRules && popupRules.frecuency && popupRules.frecuency.everyNumVisit) || 1;

                // Segun el tipo de frecuencia evaluo la validación
                if (frecuencyType === "firstVisit") {
                    // Caso firstVisit
                    frecuencyEnabled = (popupData.visitCount === 1);
                } else if (frecuencyType === "everyVisitExceptFirst") {
                    // Caso everyVisitExceptFirst
                    frecuencyEnabled = (popupData.visitCount > 1);
                } else if (frecuencyType === "onlyOnVisitNum" && frecuencyOnlyOnVisitNum && frecuencyOnlyOnVisitNum > 0) {
                    // Caso onlyOnVisitNum
                    frecuencyEnabled = (popupData.visitCount === frecuencyOnlyOnVisitNum);
                } else if (frecuencyType === "everyNumVisit" && frecuencyEveryNumVisit && frecuencyEveryNumVisit > 0) {
                    // Caso everyNumVisit
                    frecuencyEnabled = ((popupData.visitCount - 1) % frecuencyEveryNumVisit === 0);
                } else {
                    // Caso everyVisit
                    frecuencyEnabled = true;
                }

                // Si falta alguna de las condiciones no sigo
                if (!deviceEnabled || !domainEnabled || !urlEnabled || !frecuencyEnabled) return;

                //////////////////////////////////////////
                // Activo los triggers que configurados //
                //////////////////////////////////////////

                // Evaluo triger de visita
                if (popupRules && popupRules.trigger && popupRules.trigger.visit && popupRules.trigger.visit.enabled) {
                    // Si tengo configurado el disable y ya hubo una conversion no sigo
                    if (disableOnConversion && (obj.c2cConverted || obj.formConverted || obj.chatConverted)) return;
                    // Si el supero el maximo no sigo (en este caso solo el total)
                    if (popupTotalCount >= maxPopupTotal) return;
                    // Abro el popup directamente
                    if (openPopup(popupId, "visit", "")) {
                        // Si abrio incremento contadores
                        popupTotalCount++;
                    }
                }

                // Evaluo triger de delay
                if (popupRules && popupRules.trigger && popupRules.trigger.delay && popupRules.trigger.delay.enabled && popupRules.trigger.delay.timeout) {
                    // Configuro timer para abrir el popup
                    setTimeout(function() {
                        // Si tengo configurado el disable y ya hubo una conversion no sigo
                        if (disableOnConversion && (obj.c2cConverted || obj.formConverted || obj.chatConverted)) return;
                        // Si el supero el maximo no sigo (en este caso solo el total)
                        if (popupTotalCount >= maxPopupTotal) return;
                        // Abro el popup
                        if (openPopup(popupId, "delay", popupRules.trigger.delay.timeout.toString())) {
                            // Si abrio incremento contadores
                            popupTotalCount++;
                        }
                    }, 1000 * popupRules.trigger.delay.timeout);
                }

                // Evaluo triger de exit
                if (popupRules && popupRules.trigger && popupRules.trigger.exit && popupRules.trigger.exit.enabled) {
                    // Contador de popup por trigger disparado
                    var exitTriggerCount = 0;
                    // Posicion Y del mouse
                    var mouseY = 0;
                    // ACtualizo dato con evento de movimiento del mouse
                    document.addEventListener("mousemove", function(e) {
                        mouseY = e.clientY;
                    });
                    // Capturo evento de mouse saliendo del documento
                    jsLib(document).mouseleave(function() {
                        // Si tengo configurado el disable y ya hubo una conversion no sigo
                        if (disableOnConversion && (obj.c2cConverted || obj.formConverted || obj.chatConverted)) return;
                        // Si el supero el maximo no sigo
                        if (exitTriggerCount >= maxPopupPerTrigger || popupTotalCount >= maxPopupTotal) return;
                        // Si la posición Y estaba en la parte superior abro el popup
                        if (mouseY < 50) {
                            // Abro el popup
                            if (openPopup(popupId, "exit", "")) {
                                // Si abrio incremento contadores
                                exitTriggerCount++;
                                popupTotalCount++;
                            }
                        }
                    });
                }

                // Evaluo triger de scrollUp
                if (popupRules && popupRules.trigger && popupRules.trigger.scrollUp && popupRules.trigger.scrollUp.enabled) {
                    // Contador de popup por trigger disparado
                    var scrollUpTriggerCount = 0;
                    // Capturo evento de scroll
                    jsLib(window).scroll(function(event) {
                        // Si tengo configurado el disable y ya hubo una conversion no sigo
                        if (disableOnConversion && (obj.c2cConverted || obj.formConverted || obj.chatConverted)) return;
                        // Si el supero el maximo no sigo
                        if (scrollUpTriggerCount >= maxPopupPerTrigger || popupTotalCount >= maxPopupTotal) return;
                        // Si se llega al scroll inicial abro el popup
                        if (jsLib(window).scrollTop() === 0) {
                            // Abro el popup
                            if (openPopup(popupId, "scrollUp", "")) {
                                // Si abrio incremento contadores
                                scrollUpTriggerCount++;
                                popupTotalCount++;
                            }
                        }
                    });
                }

                // Evaluo triger de scroll
                if (popupRules && popupRules.trigger && popupRules.trigger.scroll && popupRules.trigger.scroll.enabled && popupRules.trigger.scroll.percentage) {
                    // Contador de popup por trigger disparado
                    var scrollTriggerCount = 0;
                    // Capturo evento de scroll
                    jsLib(window).scroll(function(event) {
                        // Si tengo configurado el disable y ya hubo una conversion no sigo
                        if (disableOnConversion && (obj.c2cConverted || obj.formConverted || obj.chatConverted)) return;
                        // Si el supero el maximo no sigo
                        if (scrollTriggerCount >= maxPopupPerTrigger || popupTotalCount >= maxPopupTotal) return;
                        // Obtengo el porcentaje de scroll
                        var scrollPercent = 100 * jsLib(window).scrollTop() / (jsLib(document).height() - jsLib(window).height());
                        // Si se llega al scroll configurado abro el popup (dejo un margen para el 100% porque a veces el la cuenta no llega aunque se baje hasta el final)
                        if (scrollPercent >= (popupRules.trigger.scroll.percentage === 100 ? 99.9 : popupRules.trigger.scroll.percentage)) {
                            // Abro el popup
                            if (openPopup(popupId, "scroll", popupRules.trigger.scroll.percentage.toString())) {
                                // Si abrio incremento contadores
                                scrollTriggerCount++;
                                popupTotalCount++;
                            }
                        }
                    });
                }

                // Evaluo triger de click
                if (popupRules && popupRules.trigger && popupRules.trigger.click && popupRules.trigger.click.enabled && popupRules.trigger.click.elementType && popupRules.trigger.click.elementValue) {
                    // Contador de popup por trigger disparado
                    var clickTriggerCount = 0;
                    // Obtengo el selector segun el caso
                    var selector = (
                        popupRules.trigger.click.elementType === "id" ?
                        "#" + popupRules.trigger.click.elementValue :
                        (
                            popupRules.trigger.click.elementType === "class" ?
                            "." + popupRules.trigger.click.elementValue :
                            (
                                popupRules.trigger.click.elementValue
                            )
                        )
                    );
                    // Configuro la accion de click
                    jsLib(selector).click(function() {
                        // Si tengo configurado el disable y ya hubo una conversion no sigo
                        if (disableOnConversion && (obj.c2cConverted || obj.formConverted || obj.chatConverted)) return;
                        // Si el supero el maximo no sigo
                        if (!popupRules.trigger.click.ignoreMax && (clickTriggerCount >= maxPopupPerTrigger || popupTotalCount >= maxPopupTotal)) return;
                        // Abro el popup
                        if (openPopup(popupId, "click", selector)) {
                            // Si abrio incremento contadores
                            clickTriggerCount++;
                            popupTotalCount++;
                        }
                    });
                }
            });
        });
    }

    // Funcion para esperar a que incialice la libreria que carga jquery y fancybox
    function whenJsFancyboxAvailable(callback) {
        var interval = 10;
        var counter = 0;
        var checkLoop = function() {
            counter = counter + interval;
            if (obj && obj.jsLib && obj.jsLib.fancybox) {
                callback(obj.jsLib);
            } else if (counter <= 10000) {
                window.setTimeout(checkLoop, interval);
            } else {
                console.error("Shared library failed to load... Popup scripts wont initialize");
            }
        };
        window.setTimeout(checkLoop, interval);
    }

    // Me quedo esperando a que cargue fancybox
    whenJsFancyboxAvailable(function(jsLib) {
        // Inicializo el popup
        initializePopup(jsLib);
    });

})(sharedObj, location, navigator, document, window);
