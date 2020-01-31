// Obtengo o defino los datos que se definen en el HTML
var templateId = templateId || "";
var typeOfContent = typeOfContent || "";
var templateHtmlHead = templateHtmlHead || "";
var templateHtmlBody = templateHtmlBody || "";
var templateCss = templateCss || "";
var templateAssets = templateAssets || [];
var filenames = filenames.split(",");
var optionsHtml = [];
var modalOptions = {};
var framework = framework || "";
var appSkin = appSkin || "occ";

// Ruta para archivos estaticos del servidor
var staticPath = staticPath || "/static";
// Extensiones de archivos estaticos
var jsExtension = jsExtension || "js";
var cssExtension = cssExtension || "css";

// Armo la URL para estilos especificos del canvas
var skinEditorUrl = staticPath + "/libs/grapesjs/inconcert/skin-editor-" + appSkin + "." + cssExtension;

// Armo URLs para versiones de bootstrap
var bs3jsUrl = staticPath + "/libs/bootstrap-3.3.7.min.js";
var bs3cssUrl = staticPath + "/libs/bootstrap-3.3.7.min.css";
var bs4jsUrl = staticPath + "/libs/bootstrap-4.0.min.js";
var bs4cssUrl = staticPath + "/libs/bootstrap-4.0.min.css";

// Armo URL para jQuery
var jqueryUrl = staticPath + "/libs/jquery." + jsExtension;

// Variables de versiones bootstrap
var bs3 = "bootstrap_3";
var bs4 = "bootstrap_4";

// Regex para validar si ya se colocó la librería de bootstrap en el html
var regexBootstrapJsCss = /<link .*bootstrap.*\.css.*>/gi;
var regexBootstrapJsJs = /<script .*bootstrap.*\.js.*>/gi;

// Archivos con estilos basicos para cada framework
var dhxBasicBs3 = "dhx-basic-bs3";
var dhxBasicBs4 = "dhx-basic-bs4";
var dhxBasicHtml = "dhx-basic-html";

// Variable global para conocer qué pestaña está activa
activeTab = "";

// Objeto con elementos del head (tags y sus atributos)
var headElements = [];

// Lista de scripts js que se pueden meter en el head del editor
var headScripts = [];
// Lista de estilos css que se pueden meter en el head del editor
var headStyles = [];

// Inicializo los notificaciones
initNotifications();
var optsArray = [];
var buttonTabs = [];
var headElementsArray = [];
var editorArray = [];

filenames.forEach(function(file, index){
    // Codigo HTML del head que se envia para el body (cosas que tienen innerHTML)
    var headToBody = "";
    var headDecoded = decodeURIComponent(templateHtmlHead[index]);
    var bodyDecoded = decodeURIComponent(templateHtmlBody[index]);
    var cssDecoded = decodeURIComponent(templateCss[index]);

    // Le quito los ../ a las direcciones de los assets del tipo background-image
    cssDecoded = cssDecoded.replace(/background-image:url\("..\//gi, "background-image:url(\"");
    cssDecoded = cssDecoded.replace(/background-image:url\(..\//gi, "background-image:url(");

    // Le borro los scripts autoinsertados por componentes (se vuelven a insertar al inicializar)
    bodyDecoded = bodyDecoded.replace(/[ ]*<script>[ \n]*var items = document.querySelectorAll\('.*'\);[ \n]*for \(var i = 0, len = items.length; i < len; i\+\+\) {[ \n]*\(function\(\){[\s\S]*?}\.bind\(items\[i\]\)\)\(\);[ \n]*}[ \n]*<\/script>[ ]*/gi, "");

    // Obtengo objeto DOM con el head para guardar los elementos y sus atributos
    var parsedHead = document.createElement("div");
    parsedHead.innerHTML = headDecoded;

    // Hago el parse del head y gauardo los elementos
    headToBody = parseHead(parsedHead.childNodes, file + ".css");

    // Agrego los estilos fijos dentro del headElements
    headStyles.forEach(function(headStyle) {
        // Verifico que no este ya agregado y que no sea un estilo especifico para el designer
        if (!headElements.find(element => element.href === headStyle) && headStyle !== skinEditorUrl)
            headElements.push(generateHeadElement("link", "stylesheet", "", headStyle, "0"));

    });

    // Agrego los scripts dentro del headElements
    headScripts.forEach(function(headScript) {
        // Verifico que no este ya agregado y que no sea un script especifico para el designer
        if (!headElements.find(element => element.src === headScript))
            headElements.push(generateHeadElement("script", "", "", headScript, "0"));
    });

    // Agrego las librerías de bootstrap según la versión seleccionada (si es que ya no están agregadas)
    if (framework) {
        // Verifico que el src js no esté ya agregado al HTML
        if (!headElements.find(element => element.tag === "script" && element.src.includes("bootstrap")) && !regexBootstrapJsJs.test(bodyDecoded)) {
            switch (framework) {
                case bs3:
                    headElements.push(generateHeadElement("script", "", "", jqueryUrl, "0"));
                    headElements.push(generateHeadElement("script", "", "", bs4jsUrl, "0"));
                    break;
                case bs4:
                    headElements.push(generateHeadElement("script", "", "", jqueryUrl, "0"));
                    headElements.push(generateHeadElement("script", "", "", bs4jsUrl, "0"));
                    break;
                default:
                    break;
            }
        }
        // Verifico que el link no esté ya agregado al HTML
        if (!headElements.find(element => element.tag === "link" && element.href.includes("bootstrap")) && !regexBootstrapJsCss.test(bodyDecoded)) {
            switch (framework) {
                case bs3:
                    headElements.push(generateHeadElement("link", "stylesheet", "", bs3cssUrl, "0"));
                    break;
                case bs4:
                    headElements.push(generateHeadElement("link", "stylesheet", "", bs4cssUrl, "0"));
                    break;
                default:
                    break;
            }
        }
    }

    // Armo la URL para estilos base de los templates (segun el framework)
    var dhxStylesheetFile = (framework === bs3 ? dhxBasicBs3 : framework === bs4 ? dhxBasicBs4 : dhxBasicHtml);
    var dhxStylesheetUrl = staticPath + "/libs/grapesjs/inconcert/" + dhxStylesheetFile + "." + cssExtension;

    // Si el link del estilo base de dhx no esta agregado, lo agrego
    if (!headElements.find(element => element.tag === "link" && element.href.includes(dhxStylesheetFile)))
        headElements.push(generateHeadElement("link", "stylesheet", "", dhxStylesheetUrl, "0"));

    // Se van colocando los elementos del head en un array
    headElementsArray.push(headElements);

    // Formateo el id del contenedor de los editores
    var filename = file.replace(".html", "");
    var idFileDiv = "#gjs-" + filename;

    // Creo los botones que se colocarán como pestañas dentro del editor
    buttonTabs.push({
        className: "",
        command: "change-tab",
        attributes: {},
        active: false,
        titulo: filename
    });

    optsArray.push({
        // Configuraciones del editor
        container: idFileDiv,
        height: "100%",
        protectedCss: "",
        autorender: true,
        jsInHtml: true,
        //undoManager: true,
        showOffsets: true,
        allowScripts: true,
        avoidInlineStyle: true,
        titleEditor: filename,
        indexEditor: index,

        canvas: {
            scripts: headScripts,
            styles: headStyles,
        },

        // Codigo fuente recibido
        components: headToBody + bodyDecoded,
        style: cssDecoded,

        // Plugins
        plugins: [
            // Plugin para usar editor de texto enriquecido CKEditor
            "gjs-plugin-ckeditor",
            // countdown
            "gjs-component-countdown",
            // Plugin para agregar el bloque de Html
            "html-block",
            "icon-block",
            // Plugin para editar imagenes (deshabilitado por ahora)
            //"gjs-aviary",
            // Plugin con bloques de la categoria 'Form'
            "gjs-plugin-forms",
            // Plugin para agregar gradient
            "gjs-style-gradient",
            // Plugin custom con diseño, opciones y funciones para inConcert
            "gjs-preset-inconcert",
        ],

        // Opciones de plugins
        pluginsOpts: {
            "gjs-plugin-ckeditor": {
                options: {
                    language: "es",
                    extraPlugins: ""
                },
                position: "center"
            },
            "gjs-plugin-forms": {
                blocks: []
            },
            "gjs-component-countdown": {
                dateInputType: "datetime-local",
                startTime: "",
            },
            "gjs-style-gradient": {
                colorPicker: "default",
                grapickOpts: {
                    inputDirection: 1,
                    inputType: 1,
                }
            },
            "icon-block": {
                    icon: "fa-chevron-up",
                    icons: [
                    {
                            "value": "fa-chevron-up",
                            "name": "<span class='fa fa-chevron-up'></span> Chevron Up",
                            "class": "fa fa-chevron-up"
                        },
                        {
                            "value": "fa-chevron-down",
                            "name": "Chevron Down"
                        },
                        {
                            "value": "fa-chevron-left",
                            "name": "Chevron Left"
                        },
                        {
                            "value": "fa-chevron-right",
                            "name": "Chevron Right"
                        },
                        {
                            "value": "fa-angle-double-up",
                            "name": "Double Angle Up"
                        },
                        {
                            "value": "fa-angle-double-down",
                            "name": "Double Angle Down"
                        },
                        {
                            "value": "fa-angle-double-left",
                            "name": "Double Angle Left"
                        },
                        {
                            "value": "fa-angle-double-right",
                            "name": "Double Angle Right"
                        },
                        {
                            "value": "fa-check",
                            "name": "Check"
                        },
                        {
                            "value": "fa-close",
                            "name": "Close"
                        },
                        {
                            "value": "fa-copyright",
                            "name": "Copyright"
                        },
                        {
                            "value": "fa-info",
                            "name": "Info"
                        },
                        {
                            "value": "fa-info-circle",
                            "name": "Info Circle"
                        },
                        {
                            "value": "fa-question",
                            "name": "Question"
                        },
                        {
                            "value": "fa-question-circle",
                            "name": "Question Circle"
                        },
                        {
                            "value": "fa-phone",
                            "name": "Phone"
                        },
                        {
                            "value": "fa-wifi",
                            "name": "Wifi"
                        },
                        {
                            "value": "fa-facebook",
                            "name": "Facebook"
                        },
                        {
                            "value": "fa-google",
                            "name": "Google"
                        },
                        {
                            "value": "fa-google-plus",
                            "name": "Google Plus"
                        },
                        {
                            "value": "fa-instagram",
                            "name": "Instagram"
                        },
                        {
                            "value": "fa-linkedin",
                            "name": "Linkedin"
                        },
                        {
                            "value": "fa-pinterest",
                            "name": "Pinterest"
                        },
                        {
                            "value": "fa-skype",
                            "name": "Skype"
                        },
                        {
                            "value": "fa-vimeo-square",
                            "name": "Vimeo"
                        },
                        {
                            "value": "fa-twitter",
                            "name": "Twitter"
                        },
                        {
                            "value": "fa-youtube",
                            "name": "YouTube"
                        },
                        {
                            "value": "fa-youtube-play",
                            "name": "YouTube Play"
                        },
                    ]
            },
        },

        // Assets del template
        assetManager: {
            assets: templateAssets,
            dropzone: 0,
            uploadText: "Arrastra las imágenes hasta aquí o haga click aquí para seleccionar las imágenes.",
            upload: "/builder/template/upload_asset/" + templateId,
            addBtnText: "Agregar",
            inputPlaceholder: "http://www.urlimagen.com/image.jpg"
        },

        // Storage manager en local pero sin autosave (si lo deshabilito no funciona bien el undo)
        storageManager: {
            type: "local",
            id: "",
            autosave: 0,
            autoload: 0
        },

        // Style manager
        styleManager: {
            clearProperties: true,
        },

        // Device Manager
        deviceManager: {
            devices: [
                {
                    name: "General",
                    width: "",
                }, {
                    name: "Desktop",
                    width: "",
                    widthMedia: "9999px) and (min-width: 900px",
                }, {
                    name: "Tablet",
                    width: "768px",
                    widthMedia: "900px) and (min-width: 600px",
                }, {
                    name: "Mobile",
                    width: "375px",
                    height: "559px",
                    widthMedia: "600px",
                }, {
                    name: "MobileXS",
                    width: "320px",
                    height: "480px",
                    widthMedia: "340px",
                }
            ],
        },
    });
});

/////////////////////////////////////////////
// Funciones para interaccion con la suite //
/////////////////////////////////////////////

// Funcion para descartar template (se llama desde comando en boton)
window.discardTemplate = function() {
    // Junto datos para mandar al componente
    var dataToSend = {
        action: "discard-template"
    };
    // Hago el postMessage con el objeto para que lo reciba el script de la pagina principal
    parent.postMessage(JSON.stringify(dataToSend), "*");
};

// Funcion para guardar template (se llama desde comando en boton)
window.saveTemplate = function() {
    // Junto datos para mandar al componente
    var htmlHeadArray = [];
    var htmlBodyArray = [];
    var cssArray = [];

    // Armo los array de head, body y css
    editorArray.forEach(function(editor, index){
        // Únicamente guardo los htmls que no se eliminaron temporalmente desde el editor
        if (editor.Config.status !== false) {
            headElements = headElementsArray[index];
            htmlHeadArray.push(generateHeadHtml());
            htmlBodyArray.push(generateBodyHtml(editor));
            cssArray.push(generateCss(editor));
        }
    });

    // Genero el json que se va a enviar al servicio de guardar
    var dataToSend = {
        action: "save-template",
        filenames: filenames.filter(function(element, index){ return editorArray[index].Config.status !== false; }),
        htmlHead: htmlHeadArray,
        htmlBody: htmlBodyArray,
        css: cssArray
    };

    // Hago el postMessage con el objeto para que lo reciba el script de la pagina principal
    parent.postMessage(JSON.stringify(dataToSend), "*");
};

// Funcion para manejar los mensajes que se retorna en el diseñador
window.notification = function(level, title, msg, parameters) {
    // Junto datos para mandar al componente
    var dataToSend = {
        action: "send-notification",
        level: level,
        title: title,
        msg: msg,
        parameters: parameters
    };
    // Hago el postMessage con el objeto para que lo reciba el script de la pagina principal
    parent.postMessage(JSON.stringify(dataToSend), "*");
};

// Funcion para abrir el modal que pregunta por el nombre del nuevo HTML
window.deleteHtml = function(titleHtml) {
    var urlRemove = "/builder/template/delete_html/" + templateId;
    var data = {};
    data.titleHtml = titleHtml;

    var body = JSON.stringify(data);
    $.ajax({
        method: "POST",
        url: urlRemove,
        data: body,
        contentType: "application/json",
        success: function(status, textStatus, jqXHR) {
            console.log(status);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        }
    });
};

window.initEditor = function(opts, index) {
    var editor = grapesjs.init(opts);
    editorArray.push(editor);

    // Agrego los atributos a cada botón que se genera (id del botón y del span)
    buttonTabs.forEach(function(button, btnindex){
        if (button.status !== false) {
            var btnId = "btn-" + opts.titleEditor + "-" + button.titulo;
            buttonTabs[btnindex].id = btnId;
            buttonTabs[btnindex].attributes.id = btnId;
        }
    });

    //////////////////////////////////////////////////////
    // Panel para las tabs de los htmls //
    //////////////////////////////////////////////////////

    // Agrego nuevo panel para agregar las pestañas dentro del editor
    var pnm = editor.Panels;
    var idPanel = "tabs-" + opts.titleEditor;

    pnm.addPanel({
        id: idPanel,
        visible: "true",
        // Filtro sólo los botones que no tienen como status "false" (se coloca cuando se elimina)
        buttons: buttonTabs.filter(function(button){return button.status !== false; })
    });

    // Agrego la clase para cada panel
    $("#gjs-pn-" + idPanel).addClass("gjs-pn-tabs");

    // Agregar al <span> el texto de la pestaña
    buttonTabs.forEach(function(button){
        if (button.status !== false)
            $("#" + button.id)[0].innerText = button.titulo;
    });

    // Agrego boton de agregar nuevo HTML
    var idPanelNewHtml = "tabs-";
    var btnNewHtml = "btn-" + opts.titleEditor + "-newHtml";
    pnm.addButton(idPanel, {
        id: btnNewHtml,
        className: "btn btn-add-html",
        command: "new-html",
        attributes: {title: "New HTML", id: btnNewHtml/*, "data-toggle": "modal", "data-target": "#new-html-modal-" + opts.titleEditor*/},
    });
    $("#" + btnNewHtml)[0].innerHTML = '<span class="fa fa-fw fa-plus"></span>';

    // Agrego boton de editar nombre de HTML
    var idPanelEditHtmlName = "tabs-";
    var btnEditHtmlName = "btn-" + opts.titleEditor + "-editHtmlName";
    pnm.addButton(idPanel, {
        id: btnEditHtmlName,
        className: "btn btn-edit-html-name",
        command: "edit-html-name",
        attributes: {title: "Edit Html", id: btnEditHtmlName/*, "data-toggle": "modal", "data-target": "#new-html-modal-" + opts.titleEditor*/},
    });
    $("#" + btnEditHtmlName)[0].innerHTML = '<span class="fa fa-fw fa-edit"></span>';

    // Agrego boton de duplicar HTML
    var idPanelDuplicateHtml = "tabs-";
    var btnDuplicateHtml = "btn-" + opts.titleEditor + "-duplicateHtml";
    pnm.addButton(idPanel, {
        id: btnDuplicateHtml,
        className: "btn btn-duplicate-html",
        command: "duplicate-html",
        attributes: {title: "Duplicate Html", id: btnDuplicateHtml/*, "data-toggle": "modal", "data-target": "#new-html-modal-" + opts.titleEditor*/},
    });
    $("#" + btnDuplicateHtml)[0].innerHTML = '<span class="fa fa-fw fa-clone"></span>';

    // Agrego boton de eliminar HTML
    var idPanelDeleteHtml = "tabs-";
    var btnDeleteHtml = "btn-" + opts.titleEditor + "-deleteHtml";
    pnm.addButton(idPanel, {
        id: btnDeleteHtml,
        className: "btn btn-delete-html",
        command: "delete-html",
        attributes: {title: "Delete Html", id: btnDeleteHtml/*, "data-toggle": "modal", "data-target": "#new-html-modal-" + opts.titleEditor*/},
    });
    $("#" + btnDeleteHtml)[0].innerHTML = '<span class="fa fa-fw fa-trash"></span>';

    //////////////////////////////////////////////////////
    // Botones y eventos para los Page Settings //
    //////////////////////////////////////////////////////

    // Funcion para agregar una línea al form de settings
    $('input:radio[name="page-layout-' + opts.titleEditor + '"]').change(function() {
        if ($(this).val() === "boxed") {
            $( "#layout-width-" + opts.titleEditor ).removeClass( "d-none" );
            $( "#layout-width-" + opts.titleEditor ).addClass( "d-block" );
        }else {
            $( "#layout-width-" + opts.titleEditor ).removeClass( "d-block" );
            $( "#layout-width-" + opts.titleEditor ).addClass( "d-none" );
            }
    });

    // Agrego evento para el botón que guarda los page settings
    var btnSavePageSettings = "#btn-settings-" + opts.titleEditor;
    var frmPageSettings = "#form-info-panel-" + opts.titleEditor;
    // Regex para identificar el width en el css
    var regexMaxWidth = /section.container{[ ]*width[ ]*:[ ]*[1-9][0-9]*px[ ]*!important;}/g;
    var regexMaxPopupWidthGen = /body.popup-body{[ ]*width[ ]*:[ ]*[1-9][0-9]*px[ ]*;[ ]*height[ ]*:[ ]*[1-9][0-9]*px[ ]*!important;}/g;
    var regexMaxPopupWidthTab = /@media ([ ]*screen [ ]*and )*[ ]*\([ ]*max-device-width[ ]*:[ ]*600px[ ]*\)[ ]*{body.popup-body{[ ]*width[ ]*:[ ]*[1-9][0-9]*px[ ]*;[ ]*height[ ]*:[ ]*[1-9][0-9]*px[ ]*!important;}}/g;
    var regexMaxPopupWidthMob = /@media ([ ]*screen [ ]*and )*[ ]*\([ ]*max-device-width[ ]*:[ ]*480px[ ]*\)[ ]*{body.popup-body{[ ]*width[ ]*:[ ]*[1-9][0-9]*px[ ]*;[ ]*height[ ]*:[ ]*[1-9][0-9]*px[ ]*!important;}}/g;
    var cssStyle = "";
    $(frmPageSettings).submit(function(event){
        // Le quito el evento de post al form. Luego se consume el servicio manualmente
        event.preventDefault();

        var titleEditor = opts.titleEditor;

        // Variable del radio button group para el tipo de contenedor
        var nameRdBoxed = "page-layout-" + opts.titleEditor;

        // Agrego las fuentes al headElements
        var fontOne = $("#font-url-one-" + titleEditor)[0].value;
        var fontTwo = $("#font-url-two-" + titleEditor)[0].value;
        var fontThree = $("#font-url-three-" + titleEditor)[0].value;

        if (fontOne !== "" && fontOne !== undefined && headElementsArray[index].find(function (obj) { return obj.href === fontOne; }) === undefined)
            headElementsArray[index].push(generateHeadElement("link", "stylesheet", "", fontOne, undefined, undefined, "1"));
        if (fontTwo !== "" && fontTwo !== undefined && headElementsArray[index].find(function (obj) { return obj.href === fontTwo; }) === undefined)
            headElementsArray[index].push(generateHeadElement("link", "stylesheet", "", fontTwo, undefined, undefined, "1"));
        if (fontThree !== "" && fontThree !== undefined && headElementsArray[index].find(function (obj) { return obj.href === fontThree; }) === undefined)
            headElementsArray[index].push(generateHeadElement("link", "stylesheet", "", fontThree, undefined, undefined, "1"));

        // Agrego el title al headElements
        var headTitle = $("#head-title-" + titleEditor)[0].value;
        if (headTitle !== "" && headTitle !== undefined) {
            var indexTitle = headElementsArray[index].findIndex(function (obj) { return obj.tag === "title"; });
            if (indexTitle < 0)
                headElementsArray[index].push(generateHeadElement("title", "", headTitle, ""));
            else
                headElementsArray[index][indexTitle].html = headTitle;
        }

        // Agrego el meta description al headElements
        var headMetaDesc = $("#meta-description-" + titleEditor)[0].value;
        if (headMetaDesc !== "" && headMetaDesc !== undefined) {
            var indexMetaDesc = headElementsArray[index].findIndex(function (obj) { return obj.tag === "meta" && obj.name === "description"; });
            if (indexMetaDesc < 0)
                headElementsArray[index].push(generateHeadElement("meta", "", "", "", "description", headMetaDesc, ""));
            else
                headElementsArray[index][indexMetaDesc].content = headMetaDesc;
        }

        // Agrego el meta keywords al headElements
        var headMetaKey = $("#meta-keywords-" + titleEditor)[0].value;
        if (headMetaKey !== "" && headMetaKey !== undefined) {
            var indexMetaKey = headElementsArray[index].findIndex(function (obj) { return obj.tag === "meta" && obj.name === "keywords"; });
            if (indexMetaKey < 0)
                headElementsArray[index].push(generateHeadElement("meta", "", "", "", "keywords", headMetaKey, ""));
            else
                headElementsArray[index][indexMetaKey].content = headMetaKey;
        }

        // Envío el favicon al servidor
        if ($(this).find( "input[id='favicon-ico-" + titleEditor + "']" ).val()) {
            // Le cambio de nombre al .ico para que se identifique con el html que se está modificando
            var file = $("#favicon-ico-" + titleEditor).get(0).files[0];
            var newFileName = titleEditor + "." + file.name;
            var formData = new FormData();
            formData.append("files[]", file, newFileName);

            $.ajax({
                type: "post",
                url: $( this ).attr( "action" ),
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                success: function(data) {
                    var indexFavicon = headElementsArray[index].findIndex(function (obj) { return obj.tag === "link" && obj.rel === "icon"; });
                    if (indexFavicon < 0)
                        headElementsArray[index].push(generateHeadElement("link", "icon", "", data.data[0]));
                    else
                        headElementsArray[index][indexFavicon].href = data.data[0];
                },
                error: function(err) {
                    window.notification("error", "", "ERROR_ASSET_UPLOAD", {});
                }
            });
        }

        // Agrego el estilo al section.container o body.body-popup
        if ($("#max-container-width-" + titleEditor)[0]) {
            // Cuando es un HTML del tipo Página
            var maxBoxWidth = $("#max-container-width-" + titleEditor)[0].value;
            if (editor.getStyle()) {
                if ($("input[name=" + nameRdBoxed + "]:checked").val() === "boxed" && maxBoxWidth) {
                    cssStyle = editor.getStyle().editor.attributes.style;
                    var newStyleMaxBoxWidth = "section.container{max-width : " + maxBoxWidth + "px !important;}";
                    if (regexMaxWidth.test(cssStyle)) {
                        cssStyle = cssStyle.replace(regexMaxWidth, newStyleMaxBoxWidth);
                    }else {
                        cssStyle += newStyleMaxBoxWidth;
                    }
                }else {
                    cssStyle = cssStyle.replace(regexMaxWidth, "");
                }

                editor.setStyle(cssStyle);
            }

            // Guardo el tipo de contenedores seleccionado como un meta: Boxed o Full width
            var indexMetContainer = headElementsArray[index].findIndex(function (obj) { return obj.tag === "meta" && obj.name === "containerType"; });
            var containerType = $("input[name=" + nameRdBoxed + "]:checked").val();
            if (indexMetContainer < 0)
                headElementsArray[index].push(generateHeadElement("meta", "", "", "", "containerType", containerType, ""));
            else
                headElementsArray[index][indexMetContainer].content = containerType;

            // Muestro u oculto las categorías de bloque según lo que se seleccionó en el radio button
            var blockCategories = $("#gjs-" + titleEditor + " .gjs-block-category");
            if ($("input[name=" + nameRdBoxed + "]:checked").val() === "boxed") {
                for (var i = 0; i < blockCategories.length; i++) {
                    if (blockCategories[i].innerText && blockCategories[i].innerText.indexOf("Boxed") > -1) {
                        blockCategories[i].hidden = false;
                    }else if (blockCategories[i].innerText && blockCategories[i].innerText.indexOf("Full Width") > -1) {
                        blockCategories[i].hidden = true;
                    }
                }
            } else {
                for (var i = 0; i < blockCategories.length; i++) {
                    if (blockCategories[i].innerText && blockCategories[i].innerText.indexOf("Boxed") > -1) {
                        blockCategories[i].hidden = true;
                    }else if (blockCategories[i].innerText && blockCategories[i].innerText.indexOf("Full Width") > -1) {
                        blockCategories[i].hidden = false;
                    }
                }
            }
        } else {
            // Cuando es un HTML del tipo Popup
            var maxPopupWidthGen = $("#max-popup-width-gen-" + titleEditor)[0].value;
            var PopupHightGen = $("#popup-height-gen-" + titleEditor)[0].value;
            var maxPopupWidthTab = $("#max-popup-width-tab-" + titleEditor)[0].value;
            var PopupHightTab = $("#popup-height-tab-" + titleEditor)[0].value;
            var maxPopupWidthMob = $("#max-popup-width-mob-" + titleEditor)[0].value;
            var PopupHightMob = $("#popup-height-mob-" + titleEditor)[0].value;

            if (editor.getStyle()) {
                cssStyle = editor.getCss();
                // General
                var newStyleMaxPopupWidthGen = "";
                if (maxPopupWidthGen || PopupHightGen) {
                    newStyleMaxPopupWidthGen += "body.popup-body{" + (maxPopupWidthGen ? "width: " + maxPopupWidthGen + "px;" : "") + (PopupHightGen ? " height: " + PopupHightGen + "px !important;}" : "}");
                }
                if (regexMaxPopupWidthGen.test(cssStyle)) {
                    cssStyle = cssStyle.replace(regexMaxPopupWidthGen, newStyleMaxPopupWidthGen);
                }else {
                    cssStyle += newStyleMaxPopupWidthGen;
                }

                // Tablet
                var newStyleMaxPopupWidthTab = "";
                if (maxPopupWidthTab || PopupHightTab) {
                    newStyleMaxPopupWidthTab += "@media screen and (max-device-width:600px){body.popup-body{" + (maxPopupWidthTab ? "width: " + maxPopupWidthTab + "px;" : "") + (PopupHightTab ? " height: " + PopupHightTab + "px !important;}}" : "}}");
                }
                if (regexMaxPopupWidthTab.test(cssStyle)) {
                    cssStyle = cssStyle.replace(regexMaxPopupWidthTab, newStyleMaxPopupWidthTab);
                }else {
                    cssStyle += newStyleMaxPopupWidthTab;
                }

                // Mobile
                var newStyleMaxPopupWidthMob = "";
                if (maxPopupWidthMob || PopupHightMob) {
                    newStyleMaxPopupWidthMob += "@media screen and (max-device-width:480px){body.popup-body{" + (maxPopupWidthMob ? "width: " + maxPopupWidthMob + "px;" : "") + (PopupHightMob ? " height: " + PopupHightMob + "px !important;}}" : "}}");
                }
                if (regexMaxPopupWidthMob.test(cssStyle)) {
                    cssStyle = cssStyle.replace(regexMaxPopupWidthMob, newStyleMaxPopupWidthMob);
                }else {
                    cssStyle += newStyleMaxPopupWidthMob;
                }

                editor.setStyle(cssStyle);
            }
        }

        // Cierro el popup
        var infoContainer = document.getElementById("info-panel-" + titleEditor);
        infoContainer.style.display = "block";
        editor.Modal.close();
    });

    /******************************************************
     Agrego las configuraciones guardadas del pageSettings
    *******************************************************/
    // Agrego las fuentes que se hayan guardado con "frompagesettings" igual a "1". Sólo las 3 primeras que se encuentren
    var countFonts = 0;
    headElementsArray[index].forEach(function(headElement, indexHead){
        if (countFonts === 3) return;
        if (headElement.frompagesettings === "1") {
            var idFontInput = "#font-url-" + ((countFonts === 0) ? "one" : (countFonts === 1) ? "two" : "three") + "-" + opts.titleEditor;
            $(idFontInput)[0].value = headElement.href;
        }
    });

    // Agrego el title del head en el input de la ventana
    var headTitleObj = headElementsArray[index].find(function (obj) { return obj.tag === "title"; });
    if (headTitleObj !== undefined) {
        var idHeadTitle = "#head-title-" + opts.titleEditor;
        $(idHeadTitle)[0].value = headTitleObj.html;
    }

    // Agrego el meta description del head en el input de la ventana
    var headMetaDescObj = headElementsArray[index].find(function (obj) { return obj.tag === "meta" && obj.name === "description"; });
    if (headMetaDescObj !== undefined) {
        var idHeadMetaDesc = "#meta-description-" + opts.titleEditor;
        $(idHeadMetaDesc)[0].value = headMetaDescObj.content;
    }

    // Agrego el meta keywords del head en el input de la ventana
    var headMetaKeyObj = headElementsArray[index].find(function (obj) { return obj.tag === "meta" && obj.name === "keywords"; });
    if (headMetaKeyObj !== undefined) {
        var idHeadMetaKey = "#meta-keywords-" + opts.titleEditor;
        $(idHeadMetaKey)[0].value = headMetaKeyObj.content;
    }

    // Selecciono el tipo de contenedor
    var headMetaContainerObj = headElementsArray[index].find(function (obj) { return obj.tag === "meta" && obj.name === "containerType"; });
    if (headMetaContainerObj !== undefined) {
        var idHeadMetaKey = "#meta-keywords-" + opts.titleEditor;
        var nameRdBoxedFullWidth = "page-layout-" + opts.titleEditor;
        $("input[name=" + nameRdBoxedFullWidth + "][value=" + headMetaContainerObj.content + "]").prop("checked", true).trigger("change");
    }

    // Agregar el max-width en el input (o height) según el tipo de HTML
    if (editor.getStyle()) {
        cssStyle = editor.getStyle().editor.attributes.style;
        var idHeadMaxWidth = "#max-container-width-" + opts.titleEditor;
        if ($(idHeadMaxWidth)[0]) {
            // Si el HTML es del tipo Páginca
            // Obtengo la cadena donde se encuentra el estilo del max-width
            var strMatchedMaxWidthStyle = cssStyle.match(regexMaxWidth);
            if (strMatchedMaxWidthStyle && strMatchedMaxWidthStyle.length > 0) {
                // Obtengo el número de max-width para mostrarlo en el page settings
                var strMatchedMaxWidth = strMatchedMaxWidthStyle[0].match(/[1-9][0-9]*/g);
                $(idHeadMaxWidth)[0].value = strMatchedMaxWidth[0] === undefined ? "" : strMatchedMaxWidth[0];
            }
        } else {
            // Si el HTML es del tipo Popup
            // Obtengo la cadena donde se encuentra el estilo del max-popup-width-gen y/o popup-height-gen
            var strMatchedMaxPopupWidthGenStyle = cssStyle.match(regexMaxPopupWidthGen);
            if (strMatchedMaxPopupWidthGenStyle && strMatchedMaxPopupWidthGenStyle.length > 0) {
                // Obtengo el número de max-popup-width-gen para mostrarlo en el page settings
                var strMatchedMaxPopupWidthGenTemp = strMatchedMaxPopupWidthGenStyle[0].match(/{[ ]*width[ ]*:[ ]*[1-9][0-9]*/g);
                if (strMatchedMaxPopupWidthGenTemp && strMatchedMaxPopupWidthGenTemp.length > 0) {
                    var strMatchedMaxPopupWidthGen = strMatchedMaxPopupWidthGenTemp[0].match(/[1-9][0-9]*/g);
                    var idHeadMaxPopupWidthGen = "#max-popup-width-gen-" + opts.titleEditor;
                    $(idHeadMaxPopupWidthGen)[0].value = strMatchedMaxPopupWidthGen[0] === undefined ? "" : strMatchedMaxPopupWidthGen[0];
                }
                // Obtengo el número de popup-height-gen para mostrarlo en el page settings
                var strMatchedMinPopupHeightGenTemp = strMatchedMaxPopupWidthGenStyle[0].match(/height[ ]*:[ ]*[1-9][0-9]*/g);
                if (strMatchedMinPopupHeightGenTemp && strMatchedMinPopupHeightGenTemp.length > 0) {
                    var strMatchedMinPopupHeightGen = strMatchedMinPopupHeightGenTemp[0].match(/[1-9][0-9]*/g);
                    var idHeadMinPopupHeightGen = "#popup-height-gen-" + opts.titleEditor;
                    $(idHeadMinPopupHeightGen)[0].value = strMatchedMinPopupHeightGen[0] === undefined ? "" : strMatchedMinPopupHeightGen[0];
                }
            }

            // Obtengo la cadena donde se encuentra el estilo del max-popup-width-tab y/o popup-height-tab
            var strMatchedMaxPopupWidthTabStyle = cssStyle.match(regexMaxPopupWidthTab);
            if (strMatchedMaxPopupWidthTabStyle && strMatchedMaxPopupWidthTabStyle.length > 0) {
                // Obtengo el número de max-popup-width-tab para mostrarlo en el page settings
                var strMatchedMaxPopupWidthTabTemp = strMatchedMaxPopupWidthTabStyle[0].match(/{[ ]*width[ ]*:[ ]*[1-9][0-9]*/g);
                if (strMatchedMaxPopupWidthTabTemp && strMatchedMaxPopupWidthTabTemp.length > 0) {
                    var strMatchedMaxPopupWidthTab = strMatchedMaxPopupWidthTabTemp[0].match(/[1-9][0-9]*/g);
                    var idHeadMaxPopupWidthTab = "#max-popup-width-tab-" + opts.titleEditor;
                    $(idHeadMaxPopupWidthTab)[0].value = strMatchedMaxPopupWidthTab[0] === undefined ? "" : strMatchedMaxPopupWidthTab[0];
                }
                // Obtengo el número de popup-height-tab para mostrarlo en el page settings
                var strMatchedMinPopupHeightTabTemp = strMatchedMaxPopupWidthTabStyle[0].match(/height[ ]*:[ ]*[1-9][0-9]*/g);
                if (strMatchedMinPopupHeightTabTemp && strMatchedMinPopupHeightTabTemp.length > 0) {
                    var strMatchedMinPopupHeightTab = strMatchedMinPopupHeightTabTemp[0].match(/[1-9][0-9]*/g);
                    var idHeadMinPopupHeightTab = "#popup-height-tab-" + opts.titleEditor;
                    $(idHeadMinPopupHeightTab)[0].value = strMatchedMinPopupHeightTab[0] === undefined ? "" : strMatchedMinPopupHeightTab[0];
                }
            }

            // Obtengo la cadena donde se encuentra el estilo del max-popup-width-mob y/o popup-height-mob
            var strMatchedMaxPopupWidthMobStyle = cssStyle.match(regexMaxPopupWidthMob);
            if (strMatchedMaxPopupWidthMobStyle && strMatchedMaxPopupWidthMobStyle.length > 0) {
                // Obtengo el número de max-popup-width-mob para mostrarlo en el page settings
                var strMatchedMaxPopupWidthMobTemp = strMatchedMaxPopupWidthMobStyle[0].match(/{[ ]*width[ ]*:[ ]*[1-9][0-9]*/g);
                if (strMatchedMaxPopupWidthMobTemp && strMatchedMaxPopupWidthMobTemp.length > 0) {
                    var strMatchedMaxPopupWidthMob = strMatchedMaxPopupWidthMobTemp[0].match(/[1-9][0-9]*/g);
                    var idHeadMaxPopupWidthMob = "#max-popup-width-mob-" + opts.titleEditor;
                    $(idHeadMaxPopupWidthMob)[0].value = strMatchedMaxPopupWidthMob[0] === undefined ? "" : strMatchedMaxPopupWidthMob[0];
                }
                // Obtengo el número de popup-height-mob para mostrarlo en el page settings
                var strMatchedMinPopupHeightMobTemp = strMatchedMaxPopupWidthMobStyle[0].match(/height[ ]*:[ ]*[1-9][0-9]*/g);
                if (strMatchedMinPopupHeightMobTemp && strMatchedMinPopupHeightMobTemp.length > 0) {
                    var strMatchedMinPopupHeightMob = strMatchedMinPopupHeightMobTemp[0].match(/[1-9][0-9]*/g);
                    var idHeadMinPopupHeightMob = "#popup-height-mob-" + opts.titleEditor;
                    $(idHeadMinPopupHeightMob)[0].value = strMatchedMinPopupHeightMob[0] === undefined ? "" : strMatchedMinPopupHeightMob[0];
                }
            }
        }
    }

    // Final de eventos de Page Settings

    // Controlo que el builder este inicializado
    if (!editor) {
        // Fallo la inicializacion del editor
        console.warn("No se pudo inicializar el editor. Contacte al administrador.");
        // Algo fallo
        throw "No se pudo inicializar el editor";
    }

    // Al colocar un nuevo bloque
    editor.on("component:add", (response) => {
        //var nameRdBoxed = "page-layout-" + opts.titleEditor;
        if (response.attributes.classes.models.id === "container" || response.attributes.classes.models.id === "container-fluid") {
            if ($("input[name=" + nameRdBoxed + "]:checked").val() === "boxed") {
                response.attributes.traits.target.setAttributes({class: "container"});
            } else {
                response.attributes.traits.target.setAttributes({class: "container-fluid"});
            }
        }
    });

    editor.on("asset:remove", (response) => {
        console.log("test remove");
        var urlRemove = "/builder/template/remove_asset/" + templateId;
        var data = {};
        data.id_image = response.id;

        var body = JSON.stringify(data);
        $.ajax({
            method: "POST",
            url: urlRemove,
            data: body,
            contentType: "application/json",
            success: function(status, textStatus, jqXHR) {
                console.log(status);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
            }
        });
    });

    // Verifico si el Canvas pudo renderizar el body
    if (!editor.Canvas.getBody()) {
        // Fallo la inicializacion del template (el HTML tiene errores)
        console.warn("No se pudo inicializar el diseñador ya que el template contiene errores. Verifíquelos mediante el editor de código fuente.");
        // Cargo el editor con datos vacios
        opts.components = "";
        opts.style = "";
        opts.assetManager.assets = [];
        // Vuelvo a inicializar
        editor = grapesjs.init(opts);
    }

    // Funcion para que al iniciar las categorias de los Bloques aparezcan collapsed
    const categories = editor.BlockManager.getCategories();
    categories.each(category => {
        // Cierro la categoria
        category.set("open", false);
        // Si se abre una nueva categoria cierro todas las demas
        category.on("change:open", opened => {
        if (opened.get("open")) categories.each(otherCategory => {
            if (otherCategory !== opened) otherCategory.set("open", false);
            });
        });
    });

    // Guardo el editor como variable de la ventana
    window.editor = editor;
};

// Inicializo los editores
optsArray.forEach(function(opts, index){
    window.initEditor(opts, index);
});

// Asigno la primera pestaña como activa en la variable. La dejo como variable global
activeTab = buttonTabs[0].titulo;
var btnActive = "#btn-" + optsArray[0].titleEditor + "-" + activeTab;
$(btnActive).addClass("active");

////////////////////////////////////////////////////////
// Funciones para manejo del DOM asociado al tempalte //
////////////////////////////////////////////////////////

function parseHead(nodes, cssname) {
    var headToBody = "";
    headElements = [];
    headScripts = [];
    headStyles = [
        // Estilos para el canvas del diseñador
        skinEditorUrl,

        // Fuentes standard
        "https://fonts.googleapis.com/css?family=Arvo:400,400i,700,700i|Hind:300,400,500,600,700|Lato:100,100i,300,300i,400,400i,700,700i,900,900i|Merriweather+Sans:300,300i,400,400i,700,700i,800,800i|Merriweather:300,300i,400,400i,700,700i,900,900i|Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Open+Sans+Condensed:300,300i,700|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|PT+Serif:400,400i,700,700i|Roboto+Condensed:300,300i,400,400i,700,700i|Roboto+Slab:100,300,400,700|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i|Ubuntu+Condensed|Ubuntu:300,300i,400,400i,500,500i,700,700i|Volkhov:400,400i,700,700i",
        // "https://fonts.googleapis.com/css?family=Arvo:400,400i,700,700i",
        // "https://fonts.googleapis.com/css?family=Hind:300,400,500,600,700",
        // "https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i",
        // "https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i",
        // "https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
        // "https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300i,700",
        // "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i",
        // "https://fonts.googleapis.com/css?family=PT+Serif:400,400i,700,700i",
        // "https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i",
        // "https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700",
        // "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i",
        // "https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i",
        // "https://fonts.googleapis.com/css?family=Ubuntu+Condensed",
        // "https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400,400i,500,500i,700,700i",
        // "https://fonts.googleapis.com/css?family=Volkhov:400,400i,700,700i",

        "https://use.fontawesome.com/releases/v5.0.8/css/all.css",
    ];

    // Recorro la lista de nodos del head
    for (var i = 0; i < nodes.length ; i++) {
        // Obtengo el nodo
        var node = nodes[i];
        // Excluyo los que son texto (saltos de linea o cosas que no son tags)
        if (node.nodeType !== 3) {
            // Verifico si el elemento tienes hijos que no sean solo texto (los title por ejemplo no entran aca), o si es un script/estilo con innerHTML
            if ((node.childNodes.length > 1) || (node.childNodes[0] && node.childNodes[0].nodeType !== 3) || (["script", "noscript", "style"].includes(node.tagName) && node.innerHTML)) {
                // En este caso lo mando para el body y no lo considero entre las cosas del head
                headToBody += node.outerHTML + "\n";
            } else {
                // Si no tengo tag name no sigo
                if (!node.tagName) continue;
                // Creo el elemento
                var element = {
                    tag: node.tagName.toLowerCase(),
                    html: node.innerHTML || ""
                };
                // Guardo sus atributos
                for (var j = 0; j < node.attributes.length; j++) {
                    // Obtengo el atributo
                    var attrib = node.attributes[j];
                    // Si no tengo nombre de atributo no sigo
                    if (!attrib.name) continue;
                    // Assigno la propiedad al elemento
                    element[attrib.name] = attrib.value;
                }
                // Agrego el elemento al array
                headElements.push(element);
                // Si son scrip o link los agrego a los arrays para meterlos en el head del preview
                if (element.tag === "script" && element.src) headScripts.push(element.src);
                if (element.tag === "link" && element.href && element.href !== ("./css/" + cssname)) headStyles.push(element.href);
            }
        }
    }
    return headToBody;
}

function generateHeadHtml() {
    // Variable para ir juntando el head
    var headHtml = "";
    // Recorro la lista de elementos del head
    for (var i = 0; i < headElements.length ; i++) {
        // Obtengo el elemento
        var element = headElements[i];
        // Abro tag
        headHtml += "   <" + element.tag + " ";
        // Recorro los atributos del elemento y los agrego
        for (var attr in element) {
            // Si existe, es string, y no es el nombre de tag lo agrego
            if (attr !== "tag" && attr !== "html" && element.hasOwnProperty(attr) && typeof element[attr] === "string") {
                // Agrego el atributo
                headHtml += attr + '="' +  element[attr] + '" ';
            }
        }
        // Borro el espacio del final
        if (headHtml.endsWith(" ")) headHtml = headHtml.slice(0, -1);
        // Cierro tag
        headHtml += ">" + element.html + "</" + element.tag + ">" + "\n";
    }
    // Devuelvo el resultado
    return headHtml;
}

/////////////////////////
// Funciones generales //
/////////////////////////

// Funcion para inicializar las notificaciones con toast
function initNotifications() {

    // Inicializo toast para los tooltip y notificaciones
    if (toastr) {
        // Opciones para notificaciones
        toastr.options = {
            closeButton: true,
            preventDuplicates: true,
            showDuration: 250,
            hideDuration: 150
        };

        // Los warn de consola se muestran como notificaciones
        var origWarn = console.warn;
        console.warn = function (msg) {
            if (msg.indexOf("[undefined]") === -1) {
                toastr.warning(msg);
            }
            origWarn(msg);
        };
    }
}

// Función para ajustar las propiedades del CSS
function generateCss(editor) {
    var style = editor.getCss();

    // Queda background-image:url("none") o background-image:url(none) cuando se quita la imagen del preview
    // Se cambia esta línea a background-image:none
    style = style.replace(/url\("none"\)/gi, "none");
    style = style.replace(/url\(none\)/gi, "none");

    // Le agrego "../" a todos los assets del tipo background-image que no sean links web
    style = style.replace(/background-image:url\((?!")/gi, "background-image:url(../");
    style = style.replace(/background-image:url\("(?!http)/gi, "background-image:url(\"../");

    // Le agrego el "all and" a los media queries cuando es popup
    style = style.replace(/@media \(max-width: 600px\)/gi, "@media all and (max-width:600px)");
    style = style.replace(/@media \(max-width: 480px\)/gi, "@media all and (max-width:480px)");

    return style;
}

// Función para ajustar las propiedades del Html
function generateBodyHtml(editor) {
    var bodyHtml = editor.getHtml();

    return bodyHtml;
}

// Funcion para persoanlizar el btn file input
( function ( document, window, index )
{
    var inputs = document.querySelectorAll( ".inputfile-img" );
    Array.prototype.forEach.call( inputs, function( input )
    {
        var label = input.nextElementSibling;
        labelVal = label.innerHTML;

        input.addEventListener( "change", function( e )
                {   var fileName = "";
                    fileName = e.target.value.split( "\\" ).pop();

                    if ( fileName )
                        label.querySelector( "span" ).innerHTML = fileName;
                    else
                        label.innerHTML = labelVal;
                });

        // Firefox bug fix
        input.addEventListener( "focus", function(){ input.classList.add( "has-focus" ); });
        input.addEventListener( "blur", function(){ input.classList.remove( "has-focus" ); });
    });
}( document, window, 0 ));

// Función para formar un nuevo headElement
function generateHeadElement(tag, rel, htmlElement, href, name, content, fromPageSettings) {
    var headElement = {};
    headElement.tag = tag;
    headElement.html = htmlElement;

    switch (tag) {
        case "link":
            headElement.rel = rel;
            headElement.href = href;
            headElement.fromPageSettings = fromPageSettings;
            break;
        case "title":
            break;
        case "meta":
            headElement.name = name;
            headElement.content = content;
            break;
        case "script":
            headElement.src = href;
        default:
            break;
    }

    return headElement;
}

// Funcion para agregar una línea al form de settings
$('input:radio[name="page-layout"]').change(function() {
    if ($(this).val() === "boxed") {
        $("#layout-width" ).removeClass("d-none");
        $("#layout-width" ).addClass("d-block");
    } else {
        $("#layout-width" ).removeClass("d-block");
        $("#layout-width" ).addClass("d-none");
    }
});
