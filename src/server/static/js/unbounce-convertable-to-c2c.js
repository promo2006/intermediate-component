// Obtengo o inicializo objeto compartido
var sharedObj = sharedObj || {};

// Defino y llamo a funcion encapsulada
(function(obj, location, navigator, document, window) {

    // Si la libreria de unbounce no esta donde espero no sigo
    if (!window.lp || !window.lp.jQuery) return;
    // Obtengo el jquery de unbounce
    var ubJquery = window.lp.jQuery;

    // Mapeo de campos del formulario
    var contactFieldsMap = {};
    // Boton presionado
    var clickedButtonId;

    // Funcion de submit para el formulario de C2C
    var onSubmit = function(event) {
        try {
            // Obtengo el objeto form
            var form = ubJquery(this);
            // Si el formulario no pasa la validacion no sigo
            if (form.valid && typeof form.valid === "function" && !form.valid()) return;
            // Hago un match con la URL para obtener el id de convertable
            var urlMarch = location.href.match("ubembed.com\/(.*)\/");
            // Armo objeto con datos a enviar
            var dataToSend = {
                action: "iframeToC2c",
                iframeUrl: location.href,
                contentType: "unbounce-convertable",
                contentId: (urlMarch && urlMarch.length > 1 ? urlMarch[1] : null),
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
            // Hago el postMessage con el objeto para que lo reciba el script de la pagina principal
            parent.postMessage(JSON.stringify(dataToSend), "*");
        } catch (err) {
            // Algo fallo
            var catchMsg = "Error al enviar los datos desde Convertable hacia la pagina principal: " + err;
            // Imprimo error en consola
            console.error(catchMsg);
        }
        return false;
    };

    // Funcion para determinar y obtener los formularios que se usaran
    function findC2cForms() {
        // Array de formularios a devolver
        var chosenForms = [];
        // Obtengo el array de todos los formularios que haya en la pagina
        var pageForms = ubJquery("form");
        // Recorro el array obtenido y busco en los elementos que hay dentro del form
        pageForms.each(function(formIndex, form) {
            // Obtengo atributo para deshabilitar c2c en este formulario
            var noC2c = ubJquery(form).attr("data-ic-noc2c");
            // Si tengo el atributo noc2c me salteo el formulario
            if (noC2c === "1" || noC2c === "true") return true;
            // Obtengo atributo para forzar el canal c2c en este formulario
            var forceC2c = ubJquery(form).attr("data-ic-c2c");
            // Si tengo el atributo forceC2c ya agrego el form sin verificar los campos
            if (forceC2c === "1" || forceC2c === "true") {
                // Agrego el form al array de elegidos
                chosenForms.push(ubJquery(form));
                // Paso al siguiente formulario
                return true;
            }
            // Obtengo atributo para forzar el canal form en este formulario
            var forceForm = ubJquery(form).attr("data-ic-form");
            // Si tengo el atributo forceForm me salteo el formulario (para evitar que el c2c pise al form)
            if (forceForm === "1" || forceForm === "true") return true;
            // Recorro el array de los input que hay dentro del formulario
            ubJquery(form).find(":input").each(function(index, element) {
                // Si encuentro un campo para ingresar el telefono (con id o name que contenga phone) asumo que es para c2c
                if (element.id.toLowerCase().indexOf("phone") > -1 || element.name.toLowerCase().indexOf("phone") > -1 ||
                    element.id.toLowerCase().indexOf("telefono") > -1 || element.name.toLowerCase().indexOf("telefono") > -1) {
                    // Agrego el form al array de elegidos
                    chosenForms.push(ubJquery(form));
                    // Salto al siguiente formulario
                    return false;
                }
            });
        });
        // Devuelvo el array obtenido
        return chosenForms;
    }

    // Funcion para obtener los campos asociados a un form y hacer el mapeo para valicacion y envio de datos
    function mapFields(form) {
        // Obtengo el id del form
        var formId = form.attr("id");
        // Inicializo el mapeo de campos para este formulario
        contactFieldsMap[formId] = {};
        // Recorro los elementos input del formulario y armo objeto con las propiedades del contacto
        form.find(":input").each(function(index, element) {
            // Obtengo el elemento input
            var input = ubJquery(element);
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

    // Al levantar la pagina hago correcciones para caso Unbounce
    ubJquery(document).ready(function() {
        // Obtengo la lista de forms a usar
        var chosenForms = findC2cForms();
        // Recorro y proceso la lista de formularios obtenidos
        chosenForms.forEach(function(form, index) {
            // Obtengo o creo el id de formulario
            var formId = form.attr("id") || "form_c2c_" + index.toString();
            // Si el form no tiene id le asigno el valor
            if (!form.attr("id")) form.attr("id", formId);
            // Seteo o piso el valor del atributo data-ic-form
            form.attr("data-ic-form", formId);
            // Obtengo el mapeo de los campos (aca no hay validator)
            mapFields(form);
            // Busco los botones de submit del formulario
            var submitButtons = form.find(":submit");
            // Aplico acciones sobre los botones de submit obtenidos del formulario
            submitButtons.each(function(buttonIndex, button) {
                // Obtengo el elemento
                var submitButton = ubJquery(button);
                // Si el boton no tiene id le asigno uno
                if (!submitButton.attr("id")) submitButton.attr("id", formId + "_" + buttonIndex.toString());
                // Capturo el id de boton presionado en el evento click
                submitButton.click(function() {
                    clickedButtonId = ubJquery(this).attr("id");
                });
            });
            // Si el formulario no tiene boton de submit explicito, busco el elemento que esta a continuacion
            if (!submitButtons.length) {
                // Obtengo el elemento que esta a continuacion del formulario
                var outerButton = form.next();
                // Si el elemento es un boton le asocio el codigo de submit del form mediante eventos
                if (outerButton.is("a") || outerButton.is("input") || outerButton.is("button")) {
                    // Si el boton no tiene id le asigno uno
                    if (!outerButton.attr("id")) outerButton.attr("id", formId + "_outer");
                    // Asocio accion de click con ejecucion del submit por codigo
                    outerButton.click(function(event) {
                        clickedButtonId = ubJquery(this).attr("id");
                        // Esto no hace falta ya que el boton en unbounce ya dispara el submit (y no le estoy haciendo unbind)
                        //form.submit();
                    });
                }
            }
            // Asocio la funcion de submit definida
            form.submit(onSubmit);
        });
    });

})(sharedObj, location, navigator, document, window);
