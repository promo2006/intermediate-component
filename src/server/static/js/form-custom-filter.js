// Obtengo o inicializo objeto compartido
var sharedObj = sharedObj || {};

// Mensajes para 
var requirementsFailedHeader = "Error";
var requirementsFailedMessage = "No cumple requisitos...";
var requirementsFailedClose = "Cerrar";

// Defino y llamo a funcion encapsulada
(function(obj, location, navigator, document, window) {

    function initializeFilter(jsLib) {

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

        // Defino funcion custom para validar el tamaño de la deuda
        jsLib.validator.addMethod("debt-amount", function(value, element, params) {
            // Obtengo el valor seleccionado
            var selectedAmount = (value ? value.trim() : "");
            // Lista de opciones validas
            var validAmounts = [
                "MX 15,000 a MX 99,000",
                "MX 100,000 a MX 499,990",
                "MX 500,000 a MX 1,0000",
                "Más de MX 1,000,000"
            ];
            // Evaluo que el valor seleccionado este dentro de los validos y devuelvo
            return validAmounts.includes(selectedAmount);
        });

        // Defino funcion custom para validar la antiguedad de la deuda
        jsLib.validator.addMethod("debt-time", function(value, element, params) {
            // Obtengo el valor seleccionado
            var selectedTime = (value ? value.trim() : "");
            // Lista de opciones validas
            var validTimes = [
                "De 6 a 12 meses",
                "De 1 a 2 años",
                "Más de 2 años"
            ];
            // Evaluo que el valor seleccionado este dentro de los validos y devuelvo
            return validTimes.includes(selectedTime);
        });

        // Obtengo la lista de formularios que tienen el canal c2c o form asociado
        var formForms = obj.formForms || [];
        var c2cForms = obj.c2cForms || [];
        // Junto todos los formularios en un unico array
        var forms = formForms.concat(c2cForms);

        // Recorro la lista obtenida
        forms.forEach(function(formData, index) {
            // Obtengo el objeto formulario
            var form = jsLib("#" + formData.formId);
            // Agrego validador de tamaño de deuda
            form.find("[data-ic-form-field*='debt-amount']").rules("add", {
                "required": true,
                "debt-amount": true,
                "messages": {
                    "required": true,
                    "debt-amount": null
                }
            });
            // Agrego validador de antiguedad de deuda
            form.find("[data-ic-form-field*='debt-time']").rules("add", {
                "required": true,
                "debt-time": true,
                "messages": {
                    "required": true,
                    "debt-time": null
                }
            });
            // Obtengo el validador del formulario
            form.submit(function(value, element) {
                // Si el formulario no es valido, programo una validacion de requisitos
                if (!form.valid())
                    setTimeout(function() {
                        // Obtengo validador
                        var validator = form.validate() || {};
                        // Obtengo lista de elementos invalidos
                        var invalid = validator.invalid || {};
                        // Obtengo los nombres de elementos invalidos
                        var invalidKeys = Object.keys(invalid) || [];
                        // Verifico que los errores son solo de requisitos de la deuda
                        if (invalidKeys.length <= 2 && !invalidKeys.find(function(key) {
                            return (key.indexOf("debt-amount") < 0 && key.indexOf("debt-time") < 0);
                        })) {
                            // Deshabilito todos los formularios
                            jsLib("[data-ic-form] :input").attr("disabled", true);
                            // Muestro mensaje en modal
                            showModal(requirementsFailedHeader, requirementsFailedMessage, requirementsFailedClose);
                        }

                    }, 200);
            });
        });
    }

    // Funcion para esperar a que incialice todo
    function whenChannelInitialized(callback) {
        var interval = 10;
        var counter = 0;
        var checkLoop = function() {
            counter = counter + interval;
            if (obj && obj.jsLib && (obj.c2cInitialized || obj.formInitialized)) {
                callback(obj.jsLib);
            } else if (counter <= 10000) {
                window.setTimeout(checkLoop, interval);
            } else {
                console.error("Custom script failed to load... Form filters wont initialize");
            }
        };
        window.setTimeout(checkLoop, interval);
    }

    // Me quedo esperando a que el canal este inicializado
    whenChannelInitialized(function(jsLib) {
        // Inicializo el filtro cuando este todo listo
        initializeFilter(jsLib);
    });

})(sharedObj, location, navigator, document, window);
