// Obtengo o inicializo objeto compartido
var sharedObj = sharedObj || {};

// Defino y llamo a funcion encapsulada
(function(obj, location, navigator, document, window) {

    // Obtengo variables de mensajes genericos
    var successHeaderText = "Éxito";
    var failedHeaderText = "Error";
    var closeButtonText = "Cerrar";
    var failedMessage = "No se pudo procesar la solicitud";
    var errorMessage = "Se produjo un error al enviar los datos";

    // Lista de ciudades con cobertura
    var cityOptions = [
        "Aguascalientes",
        "Cancún",
        "Chihuahua",
        "Ciudad Juarez",
        "Ciudad de México",
        "Celaya",
        "Cuernavaca",
        "Guadalajara",
        "León",
        "Mérida",
        "Monterrey",
        "Morelia",
        "Pachuca",
        "Puebla",
        "Querétaro",
        "San Luis Potosí",
        "Tijuana",
        "Toluca",
        "Xalapa",
        "Veracruz",
        "Otra"
    ];

    // Devuelve parametros del querystring de una URL
    var getParameterByName = function(url, name) {
        if (!url) return null;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
        var results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return "";
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };

    // Valida si la ciudad esta dentro de la lista de permitidas (cualquiera menos Otra)
    var cityAllowed = function(city) {
        // Busco la ciudad introducida dentro del array
        var found = cityOptions.find(function(element) { return (element === city); });
        // Devuelvo resultado
        return (!!found && city !== "Otra");
    };

    // Funcion para abrir formulario modal
    var showModal = function(title, body, close, onClose) {
        // Actualizo los campos con los textos recibidos
        $("#icModalTitle").html(title);
        $("#icModalBody").html(body);
        $("#icModalCloseButton").html(close);
        // Asocio la funcion a ejecutar al cerrar si existe
        if (typeof onClose === "function") $("#icModal").on("hidden.bs.modal", onClose);
        // Mando a abrir el formulario
        $("#icModal").modal("show");
    };

    // Funcion de submit para el formulario de captura de la ciudad
    var onC1Submit = function(event) {
        // Anulo las acciones default del evento
        event.preventDefault();
        // Obtengo el objeto form
        var form = $(this);
        // Obtengo valor de la ciudad
        var city = form.find('select[id*="city-input"]').find("option:selected").text();
        // Si tengo ciudad cambio de modal
        if (city) {
            // Refresco pasando la ciudad como parametro de la URL
            location.href = location.href + (location.href.indexOf("?") > -1 ? "&" : "?") + "city=" + city.toString();
        }
    };

    // Funcion de submit para el formulario de no cobertura
    var onC2Submit = function(event) {
        // Anulo las acciones default del evento
        event.preventDefault();
        // Obtengo el objeto form
        var form = $(this);
        // Recupero el array de parametros que se armo para el tracking
        var visitParams = (obj.tracking && obj.tracking.visitParams) || {};
        // Obtengo datos a enviar
        var visitId = visitParams.visitId;
        var campaignId = obj.campaignId;
        var contentType = obj.contentType;
        var contentId = obj.contentId;
        var url = location.href.split("?")[0];
        var phone = form.find('input[id="tel-no-cobertura"]').val();
        var city = getParameterByName(location.href, "city") || "";
        // Datos para enviar el request al servidor
        var postUrl = "/public/note/store";
        var postTimeout = 30000;
        var postData = {
            type: "TOTALPLAY_SIN_COBERTURA",
            sourceType: "visit",
            sourceId: visitId,
            data1: campaignId,
            data2: contentType,
            data3: contentId,
            data4: url,
            data5: phone,
            data6: city
        };
        // Envio post al servidor para procesar el click
        $.ajax({
            type: "POST",
            url: postUrl,
            data: JSON.stringify(postData),
            dataType: "json",
            contentType: "application/json",
            timeout: postTimeout,
            success: function(response, textStatus, jqXHR) {
                if (response && response.status) {
                    // Cierro un modal y abro el otro
                    $("#modal-c2").modal("hide");
                    $("#modal-c3").modal("show");
                } else {
                    var msg = response.error || response.description || failedMessage;
                    showModal(failedHeaderText, msg, closeButtonText);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                var msg = errorMessage + ": " + textStatus;
                showModal(failedHeaderText, msg, closeButtonText);
            }
        });
    };

    // Asocio eventos de submit del modal C1
    $("#modal-c1").find("form").submit(onC1Submit);
    // Seteo el combo de ciudad como campo requerido
    $("#modal-c1").find("form").find('select[id*="city-input"]').prop("required", true);

    // Agrego las ciudades al combo de opciones
    cityOptions.forEach(function(city) {
        $("#modal-c1").find("form").find('select[id*="city-input"]').append(
            $("<option>").val("value").html(city)
        );
    });

    // Asocio eventos de submit del modal C2
    $("#modal-c2").find("form").submit(onC2Submit);
    // Seteo el telefono como campo requerido
    $("#modal-c2").find("form").find('input[name*="terms"]').prop("required", true);
    // Seteo el telefono como campo requerido
    $("#modal-c2").find("form").find('input[id*="phone"]').prop("required", true);
    // Cambio el nombre del telefono para que no se detecte como formulario de c2c
    $("#modal-c2").find("form").find('input[id*="phone"]').attr("id", "tel-no-cobertura");

    // Obtengo la ciudad de la URL
    var urlCity = getParameterByName(location.href, "city") || "";

    // Si tengo valor de city lo guardo localmente
    if (urlCity) {
        // Valido si la city obtenida esta entre los permitidos
        var allowed = cityAllowed(urlCity);
        // Si el objeto contactData no existe lo creo
        obj.contactData = obj.contactData || {};
        // Asocio los datos de contacto
        obj.contactData.city = urlCity;
        obj.contactData.cobertura = (allowed ? "SI" : "NO");
        // Si tengo ciudad y no esta dentro de la lista de permitidos
        if (!allowed) {
            // Abro el modal incdicando que no hay cobertura
            $("#modal-c2").modal("show");
        }
    } else {
        // Si no tengo ciudad abro el modal para que la ingresen
        $("#modal-c1").modal("show");
    }

})(sharedObj, location, navigator, document, window);
