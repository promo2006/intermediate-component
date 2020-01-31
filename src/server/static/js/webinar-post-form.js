// Obtengo o inicializo objeto compartido
var sharedObj = sharedObj || {};

// Defino y llamo a funcion encapsulada
(function(obj, location, navigator, document, window) {

    console.debug("Inicializando formulario...");

    // Datos del formulario de registracion
    var registrationButton = "js-reg-btn";
    var registrationIframe = "regpopFrame";
    var registrationForm = "registerForm";

    // Mapeo de campos del formulario
    var contactFieldsMap = {};
    // Boton presionado
    var clickedButtonId;
    // Accion original del formulario
    var originalFormMethod;
    var originalFormAction;

    // Flag para indicar si el form ya fue inicializado
    var formInitialized = false;

    // Funcion de submit para el formulario de registracion
    var onSubmit = function(event) {
        // Anulo accion por defecto
        event.preventDefault();
        // Anulo accion por defecto
        event.stopImmediatePropagation();
        // Obtengo el objeto form
        var form = $(this);
        // Si hay algun campo con error de validacion no sigo
        if (form.find(".validation_error").length) return;
        // Armo objeto con datos a enviar
        var dataToSend = {
            action: "iframeToForm",
            iframeUrl: location.href,
            formId: form.attr("id"),
            buttonId: clickedButtonId,
            contactData: {}
        };
        // Obtengo el mapeo de campos correspondiente al formulario para el que fue el click
        var formFieldsMap = contactFieldsMap[form.attr("id")] || {};
        // Recorro los elementos del mapeo obtenido previamente y le asigno al objeto contacto el valor de cada campo
        for (var field in formFieldsMap) {
            if (formFieldsMap.hasOwnProperty(field))
                dataToSend.contactData[field] = form.find(':input[data-ic-form-field="' + formFieldsMap[field] + '"]').val();
        }
        // Agrego las propiedades especificas del webinar
        dataToSend.contactData.webicode = form.find('input[id="webicode"]').val();
        dataToSend.contactData.memberid = form.find('input[id="memberid"]').val();
        dataToSend.contactData.selected_date = form.find('input[id="selected_date"]').val();
        dataToSend.contactData.selected_schedule = form.find('input[id="selected_schedule"]').val();
        dataToSend.contactData.select_country = form.find('input[id="select_country"]').val();
        dataToSend.contactData.select_countryname = form.find('input[id="select_countryname"]').val();
        // Hago el postMessage con el objeto para que lo reciba el script de la pagina principal
        parent.postMessage(JSON.stringify(dataToSend), "*");
        // Programo el submit real para despues
        setTimeout( function () {
            // Devuelvo la configuracion original del submit
            if (originalFormMethod) form.attr("method", originalFormMethod);
            if (originalFormAction) form.attr("action", originalFormAction);
            // Ejecuto el submit original
            form[0].submit();
        }, 4000);
    };

    // Funcion para obtener los campos asociados a un form y hacer el mapeo para valicacion y envio de datos
    function mapFields(form) {
        // Obtengo el id del form
        var formId = form.attr("id");
        // Inicializo el mapeo de campos para este formulario
        contactFieldsMap[formId] = {};
        // Recorro los elementos input del formulario y armo objeto con las propiedades del contacto
        form.find(":input").each(function(index, element) {
            // Obtengo el elemento input
            var input = $(element);
            // Si el elemento es un boton lo ignoro
            if (input.is("button")) return true;
            // Obtengo el name del input (primero busco el atributo data-ic-form-field, sino lo busco por el id y sino por el name). Si no obtengo nombre le asigno uno en base al id de form
            var fieldId = input.attr("data-ic-form-field") || input.attr("name") || input.attr("id") || form.attr("id") + "_" + index.toString();
            // Si el campo tiene atributo data busco la palabra exacta, sino busco si contiene el texto
            var lazyFieldName = (!input.attr("data-ic-form-field"));
            // Si el input no tiene id o name, se lo lleno con el field name obtenido
            if (!input.attr("id")) input.attr("id", fieldId);
            if (!input.attr("name")) input.attr("name", fieldId);
            // El data-ic-form-field lo piso siempre, ya que con este voy a identificar luego el mapeo
            input.attr("data-ic-form-field", fieldId);
            // Solo me quedo con los que el nombre contenga los nombres de los datos
            if (((lazyFieldName && fieldId.toLowerCase().indexOf("email") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "email")) && !contactFieldsMap[formId].email) {
                contactFieldsMap[formId].email = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("title") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "title")) && !contactFieldsMap[formId].title) {
                contactFieldsMap[formId].title = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("firstname") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "firstname") || (lazyFieldName && fieldId.toLowerCase().indexOf("first_name") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "first_name")) && !contactFieldsMap[formId].firstname) {
                contactFieldsMap[formId].firstname = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("lastname") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "lastname") || (lazyFieldName && fieldId.toLowerCase().indexOf("last_name") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "last_name")) && !contactFieldsMap[formId].lastname) {
                contactFieldsMap[formId].lastname = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("language") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "language")) && !contactFieldsMap[formId].language) {
                contactFieldsMap[formId].language = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("company") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "company")) && !contactFieldsMap[formId].company) {
                contactFieldsMap[formId].company = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("position") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "position")) && !contactFieldsMap[formId].position) {
                contactFieldsMap[formId].position = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("phone") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "phone") || (lazyFieldName && fieldId.toLowerCase().indexOf("telefono") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "telefono")) && !contactFieldsMap[formId].phone) {
                contactFieldsMap[formId].phone = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("mobile") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "mobile")) && !contactFieldsMap[formId].mobile) {
                contactFieldsMap[formId].mobile = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("fax") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "fax")) && !contactFieldsMap[formId].fax) {
                contactFieldsMap[formId].fax = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("website") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "website")) && !contactFieldsMap[formId].website) {
                contactFieldsMap[formId].website = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("address1") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "address1")) && !contactFieldsMap[formId].address1) {
                contactFieldsMap[formId].address1 = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("address2") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "address2")) && !contactFieldsMap[formId].address2) {
                contactFieldsMap[formId].address2 = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("country") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "country")) && !contactFieldsMap[formId].country) {
                contactFieldsMap[formId].country = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("state") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "state")) && !contactFieldsMap[formId].state) {
                contactFieldsMap[formId].state = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("city") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "city")) && !contactFieldsMap[formId].city) {
                contactFieldsMap[formId].city = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("zip") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "zip")) && !contactFieldsMap[formId].zip) {
                contactFieldsMap[formId].zip = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("facebook") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "facebook")) && !contactFieldsMap[formId].facebook) {
                contactFieldsMap[formId].facebook = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("twitter") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "twitter")) && !contactFieldsMap[formId].twitter) {
                contactFieldsMap[formId].twitter = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("skype") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "skype")) && !contactFieldsMap[formId].skype) {
                contactFieldsMap[formId].skype = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("googlePlus") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "googlePlus")) && !contactFieldsMap[formId].googlePlus) {
                contactFieldsMap[formId].googlePlus = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("linkedin") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "linkedin")) && !contactFieldsMap[formId].linkedin) {
                contactFieldsMap[formId].linkedin = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("instagram") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "instagram")) && !contactFieldsMap[formId].instagram) {
                contactFieldsMap[formId].instagram = fieldId;
            } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("comments") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "comments")) && !contactFieldsMap[formId].comments) {
                contactFieldsMap[formId].comments = fieldId;
            } else if (!contactFieldsMap[formId][fieldId]) {
                // Campo custom
                contactFieldsMap[formId][fieldId] = fieldId;
            }
        });
    }

    // EL iframe se inserta al apretar el formulario de registracion
    $("#" + registrationButton).mouseup(function() {
        // Si el formulario ya fue inicializado no sigo
        if (formInitialized) return;
        // Espero para darle tiempo al form de cargarse
        setTimeout(function() {
            // Espero a que el iframe termine de cargar
            $("#" + registrationIframe).ready(function() {
                // Si el formulario ya fue inicializado no sigo
                if (formInitialized) return;
                // Doy el form por inicializado
                formInitialized = true;
                // Obtengo el iframe de registracion
                var ifr = document.getElementById(registrationIframe);
                // Obtengo el documento dentro del iframe
                var ifrDoc = ifr.contentDocument || ifr.contentWindow.document;
                // Obtengo elformulario de registracion
                var form = $(ifrDoc.getElementsByName(registrationForm));
                // Si el form no tiene id le asigno uno
                if (!form.attr("id")) form.attr("id", registrationForm);
                // Obtengo el mapeo de los campos (aca no hay validator)
                mapFields(form);
                // Busco los botones de submit del formulario
                var submitButtons = form.find(":submit");
                // Aplico acciones sobre los botones de submit obtenidos del formulario
                submitButtons.each(function(buttonIndex, button) {
                    // Obtengo el elemento
                    var submitButton = $(button);
                    // Si el boton no tiene id le asigno uno
                    if (!submitButton.attr("id")) submitButton.attr("id", form.attr("id") + "_" + buttonIndex.toString());
                    // Capturo el id de boton presionado en el evento click
                    submitButton.click(function() {
                        clickedButtonId = $(this).attr("id");
                    });
                });
                // Si el formulario no tiene boton de submit explicito, busco el elemento que esta a continuacion
                if (!submitButtons.length) {
                    // Obtengo el elemento que esta a continuacion del formulario
                    var outerButton = form.next();
                    // Si el elemento es un boton le asocio el codigo de submit del form mediante eventos
                    if (outerButton.is("a") || outerButton.is("input") || outerButton.is("button")) {
                        // Si el boton no tiene id le asigno uno
                        if (!outerButton.attr("id")) outerButton.attr("id", form.attr("id") + "_outer");
                        // Asocio accion de click con ejecucion del submit por codigo
                        outerButton.click(function(event) {
                            clickedButtonId = $(this).attr("id");
                        });
                    }
                }
                // Capturo los atributos del post para el formulario
                originalFormMethod = form.attr("method");
                originalFormAction = form.attr("action");
                // Los borro para evitar que actuen hasta que no haya mandado lo mio
                form.removeAttr("method");
                form.removeAttr("action");
                // Asocio la funcion de submit definida
                form.submit(onSubmit);
            });
        }, 2000);
    });

})(sharedObj, location, navigator, document, window);
