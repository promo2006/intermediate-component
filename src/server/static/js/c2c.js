// Obtengo o inicializo objeto compartido
var sharedObj = sharedObj || {};

// Defino y llamo a funcion encapsulada
(function(obj, location, navigator, document, window) {

    // Parámetros globales de configuracion
    var C2C_PROCESS_URL = "/public/c2c/process";
    var C2C_TIMEOUT = 30000;

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
    var popupTriggerType = obj.popupTriggerType;
    var popupTriggerValue = obj.popupTriggerValue;
    var templateId = obj.templateId;
    var campaignId = obj.campaignId;
    var contactId = obj.contactId;
    var isInternalContent = !!(obj.isInternalContent && obj.isInternalContent.toString() === "true");
    var isPopup = !!(obj.isPopup && obj.isPopup.toString() === "true");
    // Obtengo variables de configuracion de la campaña
    var duplicatedContactMessage = obj.c2cDuplicatedContactMessage;
    var firstnameRequired = !!(obj.c2cFirstnameRequired && obj.c2cFirstnameRequired.toString() === "true");
    var missingFirstnameMessage = obj.c2cMissingFirstnameMessage;
    var lastnameRequired = !!(obj.c2cLastnameRequired && obj.c2cLastnameRequired.toString() === "true");
    var missingLastnameMessage = obj.c2cMissingLastnameMessage;
    var emailRequired = !!(obj.c2cEmailRequired && obj.c2cEmailRequired.toString() === "true");
    var missingEmailMessage = obj.c2cMissingEmailMessage;
    var invalidEmailMessage = obj.c2cInvalidEmailMessage;
    var minPhoneDigits = obj.c2cMinPhoneDigits;
    var maxPhoneDigits = obj.c2cMaxPhoneDigits;
    var missingPhoneMessage = obj.c2cMissingPhoneMessage;
    var invalidPhoneMessage = obj.c2cInvalidPhoneMessage;
    var acceptTermsMessage = obj.c2cAcceptTermsMessage;
    var redirectToThankyouPage = !!(obj.c2cRedirectToThankyouPage && obj.c2cRedirectToThankyouPage.toString() === "true");
    var redirectToThankyouPageOnDuplicate = !!(obj.c2cRedirectToThankyouPageOnDuplicate && obj.c2cRedirectToThankyouPageOnDuplicate.toString() === "true");
    var successMessage = obj.c2cSuccessMessage;
    var conversionCustomCode = obj.c2cConversionCustomCode;
    // Obtengo variables de mensajes genericos
    var successHeaderText = obj.c2cSuccessHeaderText;
    var failedHeaderText = obj.c2cFailedHeaderText;
    var closeButtonText = obj.c2cCloseButtonText;
    var failedMessage = obj.c2cFailedMessage;
    var errorMessage = obj.c2cErrorMessage;
    var timeoutMessage = obj.c2cTimeoutMessage;

    // Verifico si estoy en un popup interno
    var isInternalPopup = !!(getParameterByName(location.href, "isinternalpopup") === "1");

    // Mapeo de campos del formulario
    var contactFieldsMap = {};

    // Armo URL para thankyou page
    var thankyouPagePrefix = "t";
    var conversionChannel = "c2c";
    var thankyouPageUrl = (isInternalContent ? currentProtocol + "://" + currentDomain + (currentBasePath ? currentBasePath : "") + "/" + thankyouPagePrefix + contentPath + conversionChannel :  "");

    // Boton presionado
    var clickedButtonId;

    // Flag de C2C en proceso
    var c2cProcessing = false;

    // Inicializo flag de conversion
    obj.c2cConverted = false;

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

    function initializeC2C(jsLib) {
        // Funcion de submit para el formulario de C2C
        var onSubmit = function(event) {
            try {
                // Si el flag esta habilitado no sigo procesando
                if (obj.disableC2c) return;
                // Obtengo el objeto form
                var form = jsLib(this);
                // Valido si estan todos los datos requeridos
                if (form.valid() && !c2cProcessing) {
                    // Muestro el spinner
                    showSpinner(true);
                    // Enciendo el flag de processing
                    c2cProcessing = true;
                    // Recupero el array de parametros que se armo para el tracking
                    var visitParams = (obj.tracking && obj.tracking.visitParams) || {};
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
                        formId: form.attr("id"),
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
                    // Obtengo el mapeo de campos correspondiente al formulario para el que fue el click
                    var formFieldsMap = contactFieldsMap[form.attr("id")] || {};
                    // Recorro los elementos del mapeo obtenido previamente y le asigno al objeto contacto el valor de cada campo
                    for (var field in formFieldsMap) {
                        if (formFieldsMap.hasOwnProperty(field))
                            //se excluye del contact data los datos que no son propios del contacto
                            if (formFieldsMap[field] !== "scheduleDate" && formFieldsMap[field] !== "scheduleTime" && formFieldsMap[field] !== "numberType") {
                                //agregamos los datos del contacto al contactData
                                postData.contactData[field] = form.find(':input[data-ic-form-field="' + formFieldsMap[field] + '"]').val();
                            } else {
                                //se agregan los datos de conversion en el objeto principal
                                postData[field] = form.find(':input[data-ic-form-field="' + formFieldsMap[field] + '"]').val();
                            }
                    }
                    // Envio post al servidor para procesar el evento
                    jsLib.ajax({
                        type: "POST",
                        url: currentProtocol + "://" + currentDomain + (currentBasePath ? currentBasePath : "") + C2C_PROCESS_URL,
                        data: JSON.stringify(postData),
                        dataType: "json",
                        contentType: "application/json",
                        async: !obj.ajaxSync,
                        timeout: C2C_TIMEOUT,
                        success: function(response, textStatus, jqXHR) {
                            if (response && response.status) {
                                // Si tengo contacto lo guardo en el sessionStorage
                                if (response.data && response.data.contact) sessionStorage.setItem("Contact", JSON.stringify(response.data.contact));
                                // Si tengo conversion lo guardo en el sessionStorage
                                if (response.data && response.data.conversion) sessionStorage.setItem("Conversion", JSON.stringify(response.data.conversion));
                                // Inyecto codigo custom si lo hay
                                injectConversionCustomCode();
                                // Activo mensaje y thankyou page
                                showMessageAndRedirect(response.data);
                                // Actualizo flag de conversion
                                obj.c2cConverted = true;
                            } else {
                                // Se recibio un error desde el servidor
                                var msg = response.error || response.description || failedMessage;
                                // Muestro mensaje recibido
                                showModal(failedHeaderText, msg, closeButtonText);
                            }
                            // Apago el spinner
                            showSpinner(false);
                            // Apago el flag de processing
                            c2cProcessing = false;
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            // Fallo el process
                            var msg = errorMessage + ": " + textStatus;
                            // Si el error es un timeout muestro mensaje configurado
                            if (textStatus === "timeout") msg = timeoutMessage;
                            // Muestro mensaje recibido
                            showModal(failedHeaderText, msg, closeButtonText);
                            // Apago el spinner
                            showSpinner(false);
                            // Apago el flag de processing
                            c2cProcessing = false;
                        }
                    });
                }
            } catch (err) {
                // Algo fallo
                console.error(err);
                // Muestro mensaje
                showModal(failedHeaderText, errorMessage, closeButtonText);
                // Apago el spinner
                showSpinner(false);
                // Apago el flag de processing
                c2cProcessing = false;
            }
            return false;
        };

        // Funcion de submit para el formulario de C2C desde popup (dentro de iframe)
        var onSubmitPopup = function(event) {
            try {
                // Si el flag esta habilitado no sigo procesando
                if (obj.disableC2c) return;
                // Obtengo el objeto form
                var form = jsLib(this);
                // Valido si estan todos los datos requeridos
                if (form.valid() && !c2cProcessing) {
                    // Enciendo el flag de processing
                    c2cProcessing = true;
                    // Armo objeto con datos a enviar
                    var dataToSend = {
                        action: "iframeToC2c",
                        iframeUrl: location.href,
                        contentType: "Popup",
                        contentId: popupId,
                        popupId: popupId,
                        popupTriggerType: popupTriggerType,
                        popupTriggerValue: popupTriggerValue,
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
                    // Apago el flag de processing
                    c2cProcessing = false;
                }
            } catch (err) {
                // Algo fallo
                console.error(err);
                // Apago el flag de processing
                c2cProcessing = false;
            }
            return false;
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

        // Funcion para determinar y obtener los formularios que se usaran
        function findC2cForms() {
            // Array de formularios a devolver
            var chosenForms = [];
            // Obtengo el array de todos los formularios que haya en la pagina
            var pageForms = jsLib("form");
            // Recorro el array obtenido y busco en los elementos que hay dentro del form
            pageForms.each(function(formIndex, form) {
                // Obtengo atributo para deshabilitar c2c en este formulario
                var noC2c = jsLib(form).attr("data-ic-noc2c");
                // Si tengo el atributo noc2c me salteo el formulario
                if (noC2c === "1" || noC2c === "true") return true;
                // Obtengo atributo para forzar el canal c2c en este formulario
                var forceC2c = jsLib(form).attr("data-ic-c2c");
                // Si tengo el atributo forceC2c ya agrego el form sin verificar los campos
                if (forceC2c === "1" || forceC2c === "true") {
                    // Agrego el form al array de elegidos
                    chosenForms.push(jsLib(form));
                    // Paso al siguiente formulario
                    return true;
                }
                // Obtengo atributo para forzar el canal form en este formulario
                var forceForm = jsLib(form).attr("data-ic-form");
                // Si tengo el atributo forceForm me salteo el formulario (para evitar que el c2c pise al form)
                if (forceForm === "1" || forceForm === "true") return true;
                // Recorro el array de los input que hay dentro del formulario
                jsLib(form).find(":input").each(function(index, element) {
                    // Si encuentro un campo para ingresar el telefono (con id o name que contenga phone o telefono) asumo que es para c2c
                    if (element.id.toLowerCase().indexOf("phone") > -1 || element.name.toLowerCase().indexOf("phone") > -1 ||
                        element.id.toLowerCase().indexOf("telefono") > -1 || element.name.toLowerCase().indexOf("telefono") > -1) {
                        // Agrego el form al array de elegidos
                        chosenForms.push(jsLib(form));
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
            // Reglas para validacion del formulario
            var formValidator = {
                rules: {},
                messages: {},
                errorPlacement: function (error, element) {
                    // Segun el caso ubico el mensaje en un lugar diferente
                    if (element.attr("type") === "checkbox") {
                        // Para el caso de los checkbox el error lo pongo al final del nodo padre, para que no quede antes que el texto
                        error.appendTo(element.parent());
                    } else {
                        // En cualquier otro caso lo inserto en el lugar por defecto
                        error.insertAfter(element);
                    }
                }
            };
            // Obtengo el id del form
            var formId = form.attr("id");
            // Inicializo el mapeo de campos para este formulario
            contactFieldsMap[formId] = {};
            // Recorro los elementos input del formulario y armo objeto con las propiedades del contacto
            form.find(":input").each(function(index, element) {
                // Obtengo el elemento input
                var input = jsLib(element);
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
                // Obtengo el name del campo para usar en el validador
                var fieldName = input.attr("name");
                // Solo me quedo con los que el nombre contenga los nombres de los datos
                if (((lazyFieldName && fieldId.toLowerCase().indexOf("email") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "email")) && !contactFieldsMap[formId].email) {
                    contactFieldsMap[formId].email = fieldId;
                    // Si esta habilitada la validacion para este campo, lo agrego al validador
                    if (emailRequired) {
                        formValidator.rules[fieldName] = {
                            required: true,
                            email: true
                        };
                        formValidator.messages[fieldName] = {
                            required: missingEmailMessage,
                            email: invalidEmailMessage
                        };
                    }
                } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("title") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "title")) && !contactFieldsMap[formId].title) {
                    contactFieldsMap[formId].title = fieldId;
                } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("firstname") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "firstname") || (lazyFieldName && fieldId.toLowerCase().indexOf("first_name") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "first_name")) && !contactFieldsMap[formId].firstname) {
                    contactFieldsMap[formId].firstname = fieldId;
                    // Si esta habilitada la validacion para este campo, lo agrego al validador
                    if (firstnameRequired) {
                        formValidator.rules[fieldName] = {
                            required: true
                        };
                        formValidator.messages[fieldName] = {
                            required: missingFirstnameMessage
                        };
                    }
                } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("lastname") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "lastname") || (lazyFieldName && fieldId.toLowerCase().indexOf("last_name") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "last_name")) && !contactFieldsMap[formId].lastname) {
                    contactFieldsMap[formId].lastname = fieldId;
                    // Si esta habilitada la validacion para este campo, lo agrego al validador
                    if (lastnameRequired) {
                        formValidator.rules[fieldName] = {
                            required: true
                        };
                        formValidator.messages[fieldName] = {
                            required: missingLastnameMessage
                        };
                    }
                } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("language") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "language")) && !contactFieldsMap[formId].language) {
                    contactFieldsMap[formId].language = fieldId;
                } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("company") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "company")) && !contactFieldsMap[formId].company) {
                    contactFieldsMap[formId].company = fieldId;
                } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("position") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "position")) && !contactFieldsMap[formId].position) {
                    contactFieldsMap[formId].position = fieldId;
                } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("phone") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "phone") || (lazyFieldName && fieldId.toLowerCase().indexOf("telefono") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "telefono")) && !contactFieldsMap[formId].phone) {
                    contactFieldsMap[formId].phone = fieldId;
                    // En c2c el phone es siempre requerido
                    formValidator.rules[fieldName] = {
                        required: true,
                        phone: true
                    };
                    formValidator.messages[fieldName] = {
                        required: missingPhoneMessage,
                        phone: function(value, phoneElement) { return jsLib.validator.format(invalidPhoneMessage.replace("PHONE", phoneElement.value)); }
                    };
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
                } else if ((lazyFieldName && fieldId.toLowerCase().indexOf("terms") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "terms") || (lazyFieldName && fieldId.toLowerCase().indexOf("legal") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "legal")) {
                    // Si esta el check de terminos lo agrego a las validaciones
                    formValidator.rules[fieldName] = {
                        required: true
                    };
                    formValidator.messages[fieldName] = {
                        required: acceptTermsMessage
                    };
                } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("numbertype") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "numbertype")) && !contactFieldsMap[formId].numberType) {
                    contactFieldsMap[formId].numberType = fieldId;
                } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("scheduletime") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "scheduletime")) && !contactFieldsMap[formId].scheduleTime) {
                    contactFieldsMap[formId].scheduleTime = fieldId;
                } else if (((lazyFieldName && fieldId.toLowerCase().indexOf("scheduledate") > -1) || (!lazyFieldName && fieldId.toLowerCase() === "scheduledate")) && !contactFieldsMap[formId].scheduleDate) {
                    contactFieldsMap[formId].scheduleDate = fieldId;
                } else if (!contactFieldsMap[formId][fieldId]) {
                    // Campo custom
                    contactFieldsMap[formId][fieldId] = fieldId;
                }
            });
            // Devuelvo las reglas de validacion obtenidas
            return formValidator;
        }

        // Publico funcion asociada al objeto para poder recibir C2C desde iframes
        obj.iframeToC2c = function(iframeData) {
            try {
                // Si el flag esta habilitado no sigo procesando
                if (obj.disableC2c) return;
                // Muestro el spinner
                showSpinner(true);
                // Enciendo el flag de processing
                c2cProcessing = true;
                // Obtengo datos de la conversion recibidos desde el iframe (no confundir con los ID y datos del contenido en el que estoy parado)
                var fromContentType = (iframeData.contentType === "Popup" ? contentType : iframeData.contentType || contentType);
                var fromContentId = (iframeData.contentType === "Popup" ? contentId : iframeData.contentId || contentId);
                var fromPopupId = iframeData.popupId || "";
                var fromPopupTriggerType = iframeData.popupTriggerType || "";
                var fromPopupTriggerValue = iframeData.popupTriggerValue || "";
                var fromClickedButtonId = iframeData.buttonId || clickedButtonId;
                // Recupero el array de parametros que se armo para el tracking
                var visitParams = (obj.tracking && obj.tracking.visitParams) || {};
                // Datos que se enviaran al servidor
                var postData = {
                    visitId: visitParams.visitId,
                    contentUrl: location.href,
                    contentType: fromContentType,
                    contentId: fromContentId,
                    popupId: fromPopupId,
                    popupTriggerType: fromPopupTriggerType,
                    popupTriggerValue: fromPopupTriggerValue,
                    templateId: templateId,
                    sourceId: sourceId,
                    campaignId: campaignId,
                    thankyouPageUrl: thankyouPageUrl,
                    formId: iframeData.formId,
                    buttonId: fromClickedButtonId,
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
                // Agrego todos los datos de contacto recibidos
                for (var field in iframeData.contactData) {
                    if (iframeData.contactData.hasOwnProperty(field))
                        postData.contactData[field] = iframeData.contactData[field];
                }
                // Envio post al servidor para procesar el evento
                jsLib.ajax({
                    type: "POST",
                    url: currentProtocol + "://" + currentDomain + (currentBasePath ? currentBasePath : "") + C2C_PROCESS_URL,
                    data: JSON.stringify(postData),
                    dataType: "json",
                    contentType: "application/json",
                    async: !obj.ajaxSync,
                    timeout: C2C_TIMEOUT,
                    success: function(response, textStatus, jqXHR) {
                        if (response && response.status) {
                            // Si tengo contacto lo guardo en el sessionStorage
                            if (response.data && response.data.contact) sessionStorage.setItem("Contact", JSON.stringify(response.data.contact));
                            // Si tengo conversion lo guardo en el sessionStorage
                            if (response.data && response.data.conversion) sessionStorage.setItem("Conversion", JSON.stringify(response.data.conversion));
                            // Inyecto codigo custom si lo hay
                            injectConversionCustomCode();
                            // Activo mensaje y thankyou page
                            showMessageAndRedirect(response.data);
                            // Actualizo flag de conversion
                            obj.c2cConverted = true;
                        } else {
                            // Se recibio un error desde el servidor
                            var msg = response.error || response.description || failedMessage;
                            // Muestro mensaje recibido
                            showModal(failedHeaderText, msg, closeButtonText);
                        }
                        // Apago el spinner
                        showSpinner(false);
                        // Apago el flag de processing
                        c2cProcessing = false;
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        // Fallo el process
                        var msg = errorMessage + ": " + textStatus;
                        // Si el error es un timeout muestro mensaje configurado
                        if (textStatus === "timeout") msg = timeoutMessage;
                        // Muestro mensaje recibido
                        showModal(failedHeaderText, msg, closeButtonText);
                        // Apago el spinner
                        showSpinner(false);
                        // Apago el flag de processing
                        c2cProcessing = false;
                    }
                });
            } catch (err) {
                // Algo fallo
                console.error(err);
                // Muestro mensaje
                showModal(failedHeaderText, errorMessage, closeButtonText);
                // Apago el spinner
                showSpinner(false);
                // Apago el flag de processing
                c2cProcessing = false;
            }
        };

        // Al levantar la pagina configuro el canal
        jsLib(document).ready(function() {
            // Si el flag esta habilitado no sigo procesando
            if (obj.disableC2c) return;
            // Inicializo array de formularios procesador
            obj.c2cForms = obj.c2cForms || [];
            // Defino funcion custom para validar los numeros de telefono
            jsLib.validator.addMethod("phone", function(value, element, params) {
                // Obtengo el valor del telefono
                var phone = value || "";
                // Valido que cumpla el formato
                var phoneMatches = (!!phone.match(/^[0-9\-\(\)\+\s]+$/));
                // Valido que cumpla el formato
                var phoneDigits = phone.replace(/[^0-9]/g, "").length;
                // Evaluo y devuelvo
                return this.optional(element) || (phoneMatches && (phoneDigits >= minPhoneDigits || !minPhoneDigits) && (phoneDigits <= maxPhoneDigits || !maxPhoneDigits));
            });
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
                // Armo objeto para guardar los datos del formulario
                var formData = {
                    formId: formId,
                    buttons: []
                };
                // Le borro el evento de onsubmit si lo tiene
                form.removeAttr("onsubmit");
                // Desasocio los handler anteriores que puedan existir para el submit
                form.unbind();
                // Si tengo otra instancia "principal" de jQuery hago el unbind tambien ahi
                if (obj.mainJsLib) obj.mainJsLib("#" + formId).unbind();
                // Obtengo el mapeo de los campos
                var formValidator = mapFields(form);
                // Asocio las reglas para validacion
                form.validate(formValidator);
                // Busco los botones de submit del formulario
                var submitButtons = form.find(":submit");
                // Aplico acciones sobre los botones de submit obtenidos del formulario
                submitButtons.each(function(buttonIndex, button) {
                    // Obtengo el elemento
                    var submitButton = jsLib(button);
                    // Si el boton no tiene id le asigno uno
                    if (!submitButton.attr("id")) submitButton.attr("id", formId + "_" + buttonIndex.toString());
                    // Agrego el boton al array
                    formData.buttons.push(submitButton.attr("id"));
                    // Eliminio las posibles acciones que tenga el boton del formulario
                    submitButton.removeAttr("data-toggle");
                    submitButton.removeAttr("data-target");
                    submitButton.removeAttr("onclick");
                    // Capturo el id de boton presionado en el evento click
                    submitButton.on("click touchstart", function() {
                        clickedButtonId = jsLib(this).attr("id");
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
                        // Agrego el boton al array
                        formData.buttons.push(outerButton.attr("id"));
                        // Desasocio los eventos que pueda tener
                        outerButton.unbind();
                        // Si tengo otra instancia "principal" de jQuery hago el unbind tambien ahi
                        if (obj.mainJsLib) obj.mainJsLib("#" + outerButton.attr("id")).unbind();
                        // Asocio accion de click con ejecucion del submit por codigo
                        outerButton.on("click touchstart", function(event) {
                            clickedButtonId = jsLib(this).attr("id");
                            form.submit();
                            event.stopImmediatePropagation();
                        });
                    }
                }
                // Agrego el dato del formulario al array
                obj.c2cForms.push(formData);
                // Asocio la funcion de submit definida
                form.submit(isPopup || isInternalPopup ? onSubmitPopup : onSubmit);
                // Al terminar de procesar el ultimo elemento doy por inicializado el canal de c2c
                if (index === chosenForms.length - 1) {
                    // Paso el flag a true
                    obj.c2cInitialized = true;
                    // Verifico si corresponde reactivar los links y los botones inicialmente desactivados
                    if (isInternalContent && typeof reEnableLinks === "function") reEnableLinks();
                    if (isInternalContent && typeof reEnableButtons === "function") reEnableButtons();
                }
            });
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
                console.error("Shared library failed to load... Click2call scripts wont initialize");
            }
        };
        window.setTimeout(checkLoop, interval);
    }

    // Me quedo esperando a que cargue la libreria shared
    whenJsLibAvailable(function(jsLib) {
        // Inicializo el canal cuando este todo listo
        initializeC2C(jsLib);
    });

})(sharedObj, location, navigator, document, window);
