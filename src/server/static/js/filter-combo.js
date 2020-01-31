// Obtengo o inicializo objeto compartido
var sharedObj = sharedObj || {};

// Defino y llamo a funcion encapsulada
(function(obj, location, navigator, document, window) {

    // Funcion para abrir formulario modal
    function showModal(title, body, close, onClose) {
        // Si tengo deshabilitados los mensajes no sigo
        if (obj.disableMessages) return;
        // Actualizo los campos con los textos recibidos
        $("#icModalTitle").html(title);
        $("#icModalBody").html(body);
        $("#icModalCloseButton").html(close);
        // Asocio la funcion a ejecutar al cerrar si existe
        if (typeof onClose === "function") $("#icModal").on("hidden.bs.modal", onClose);
        // Mando a abrir el formulario
        $("#icModal").modal("show");
    }

    // Funcion para determinar y obtener los formularios que se usaran
    function findC2cForms() {
        // Array de formularios a devolver
        var chosenForms = [];
        // Obtengo el array de todos los formularios que haya en la pagina
        var pageForms = $("form");
        // Recorro el array obtenido y busco en los elementos que hay dentro del form
        pageForms.each(function(formIndex, form) {
            // Obtengo atributo para deshabilitar c2c en este formulario
            var noC2c = $(form).attr("data-ic-noc2c");
            // Si tengo el atributo noc2c me salteo el formulario
            if (noC2c === "1" || noC2c === "true") return true;
            // Obtengo atributo para forzar el canal c2c en este formulario
            var forceC2c = $(form).attr("data-ic-c2c");
            // Si tengo el atributo forceC2c ya agrego el form sin verificar los campos
            if (forceC2c === "1" || forceC2c === "true") {
                // Agrego el form al array de elegidos
                chosenForms.push($(form));
                // Paso al siguiente formulario
                return true;
            }
            // Obtengo atributo para forzar el canal form en este formulario
            var forceForm = $(form).attr("data-ic-form");
            // Si tengo el atributo forceForm me salteo el formulario (para evitar que el c2c pise al form)
            if (forceForm === "1" || forceForm === "true") return true;
            // Recorro el array de los input que hay dentro del formulario
            $(form).find(":input").each(function(index, element) {
                // Si encuentro un campo para ingresar el telefono (con id o name que contenga phone) asumo que es para c2c
                if (element.id.toLowerCase().indexOf("phone") > -1 || element.name.toLowerCase().indexOf("phone") > -1 ||
                    element.id.toLowerCase().indexOf("telefono") > -1 || element.name.toLowerCase().indexOf("telefono") > -1) {
                    // Agrego el form al array de elegidos
                    chosenForms.push($(form));
                    // Salto al siguiente formulario
                    return false;
                }
            });
        });
        // Devuelvo el array obtenido
        return chosenForms;
    }

    // Al levantar la pagina configuro el canal
    $(document).ready(function() {
        // Obtengo la lista de forms a usar
        var chosenForms = findC2cForms();
        // Recorro y proceso la lista de formularios obtenidos
        chosenForms.forEach(function(form, index) {
            // Aplico acciones sobre los botones del formulario
            form.find(":submit").each(function(buttonIndex, button) {
                // A cada boton le asocio la funcion para validar la ciudad seleccionada
                $(button).click(function( event ) {
                    // Obtengo el valor de ciudad seleccionado
                    var city = form.find("#state").find(":selected").val();
                    // Verifico que hayan elegido alguna opcion
                    if (!city) {
                        showModal("Error", "Debe seleccionar una ciudad", "Cerrar");
                        return false;
                    }
                    // Verifico que no hayan elegido la opcion otra
                    if (city === "Otra") {
                        showModal("Error", "La ciudad no tiene cobertura", "Cerrar");
                        return false;
                    }
                    // Obtengo o inicializo objeto con datos de contacto
                    sharedObj.contactData = sharedObj.contactData || {};
                    // Asocio la ciudad obtenida para que se guarde como dato del contacto
                    sharedObj.contactData.city = city;
                });
            });
        });
    });

})(sharedObj, location, navigator, document, window);
