// Obtengo o inicializo objeto compartido
var sharedObj = sharedObj || {};

// Defino y llamo a funcion encapsulada
(function(obj, location, navigator, document, window) {

    // Obtengo variables de configuracion de la campaña
    var publicNumber = obj.inboundPublicNumber;
    var routedNumber = obj.inboundRoutedNumber;

    function initializeInbound() {

        // Si tengo numero publico actualizo los elementos con las clases
        if (publicNumber) {

            // Obtengo los elementos con la clase de telefonos para reemplazar
            var phoneNumberElements = document.getElementsByClassName("ic-phone-number");

            // A cada uno le inserto el número de teléfono
            for (var i = 0; i < phoneNumberElements.length; i++) {
                try {
                    // Reemplazo el HTML interno
                    phoneNumberElements[i].innerHTML = publicNumber;
                    // Si el elemento tenia itemprop y no lo pise ya, le seteo el valor correcto (antes se lo habia renombrado)
                    if (phoneNumberElements[i].hasAttribute("data-ic-itemprop") && !phoneNumberElements[i].hasAttribute("itemprop"))
                        phoneNumberElements[i].setAttribute("itemprop", phoneNumberElements[i].getAttribute("data-ic-itemprop"));
                } catch (e) {
                    // Algo fallo
                    console.warn("Cannot set phone number value on " + (phoneNumberElements[i].tagName || "").toLowerCase() + " element");
                }
            }

            // Obtengo los elementos con la clase de links para reemplazar
            var phoneLinksElements = document.getElementsByClassName("ic-phone-link");

            // A cada uno le inserto el número de teléfono
            for (var j = 0; j < phoneLinksElements.length; j++) {
                try {
                    // Reemplazo el link del href
                    phoneLinksElements[j].href = "tel:" + publicNumber;
                    // Si el elemento tenia itemprop y no lo pise ya, le seteo el valor correcto (antes se lo habia renombrado)
                    if (phoneLinksElements[j].hasAttribute("data-ic-itemprop") && !phoneLinksElements[j].hasAttribute("itemprop"))
                        phoneLinksElements[j].setAttribute("itemprop", phoneLinksElements[j].getAttribute("data-ic-itemprop"));
                } catch (e) {
                    // Algo fallo
                    console.warn("Cannot set phone number link on " + (phoneLinksElements[j].tagName || "").toLowerCase() + " element");
                }
            }
        }

        // Si tengo numero geografico actualizo los elementos con las clases
        if (routedNumber) {

            // Obtengo los elementos con la clase de telefonos para reemplazar
            var routedNumberElements = document.getElementsByClassName("ic-routed-number");

            // A cada uno le inserto el número de teléfono
            for (var k = 0; k < routedNumberElements.length; k++) {
                try {
                    // Reemplazo el HTML interno
                    routedNumberElements[k].innerHTML = routedNumber;
                    // Si el elemento tenia itemprop y no lo pise ya, le seteo el valor correcto (antes se lo habia renombrado)
                    if (routedNumberElements[k].hasAttribute("data-ic-itemprop") && !routedNumberElements[k].hasAttribute("itemprop"))
                        routedNumberElements[k].setAttribute("itemprop", routedNumberElements[k].getAttribute("data-ic-itemprop"));
                } catch (e) {
                    // Algo fallo
                    console.warn("Cannot set routed number value on " + (routedNumberElements[k].tagName || "").toLowerCase() + " element");
                }
            }

            // Obtengo los elementos con la clase de links para reemplazar
            var routedLinksElements = document.getElementsByClassName("ic-routed-link");

            // A cada uno le inserto el número de teléfono
            for (var l = 0; l < routedLinksElements.length; l++) {
                try {
                    // Reemplazo el link del href
                    routedLinksElements[l].href = "tel:" + routedNumber;
                    // Si el elemento tenia itemprop y no lo pise ya, le seteo el valor correcto (antes se lo habia renombrado)
                    if (routedLinksElements[l].hasAttribute("data-ic-itemprop") && !routedLinksElements[l].hasAttribute("itemprop"))
                        routedLinksElements[l].setAttribute("itemprop", routedLinksElements[l].getAttribute("data-ic-itemprop"));
                } catch (e) {
                    // Algo fallo
                    console.warn("Cannot set routed number link on " + (routedLinksElements[l].tagName || "").toLowerCase() + " element");
                }
            }
        }
    }

    // Inicializo el canal
    initializeInbound();

})(sharedObj, location, navigator, document, window);
