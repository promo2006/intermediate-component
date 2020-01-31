//import { active } from "d3";

// Funcion de inicializacion de comandos
var init = function(opt = {}) {

  // Obtengo el editor
  var gjsEditor = opt.editor;
  // Obtengo los comandos del editor
  var cmdm = gjsEditor.Commands;

  // Agrego comandos para botones de cambiar device
  cmdm.add("set-device-general", {
    run: function(editor) {
      editor.setDevice("General");
    }
  });
  cmdm.add("set-device-desktop", {
    run: function(editor) {
      editor.setDevice("Desktop");
    }
  });
  cmdm.add("set-device-tablet", {
    run: function(editor) {
      editor.setDevice("Tablet");
    }
  });
  cmdm.add("set-device-mobile", {
    run: function(editor) {
      editor.setDevice("Mobile");
    }
  });
  cmdm.add("set-device-mobile-XS", {
    run: function(editor) {
      editor.setDevice("MobileXS");
    }
  });

  // Agrego comandos para botones de undo y redo
  cmdm.add("undo", {
    run: function(editor, sender) {
      sender.set("active", 0);
      editor.UndoManager.undo(true);
    }
  });
  cmdm.add("redo", {
    run: function(editor, sender) {
      sender.set("active", 0);
      editor.UndoManager.redo(true);
    }
  });
  cmdm.add("change-tab", {
    run: function(editor, sender) {
      //var tabId = sender.id.replace("btn", "#a-gjs");
      var btnActive = "#btn-" + editor.Config.titleEditor + "-" + activeTab;
      var btnTitle = sender.attributes.titulo;
      var tabId = "#a-gjs-" + btnTitle;
      $(tabId)[0].click();

      if (sender) sender.set("active", false);

      var btnId = "#btn-" + btnTitle + "-" + btnTitle;

      $(btnActive).removeClass("active");
      $(btnId).addClass("active");

      activeTab = btnTitle;
    }
  });

  cmdm.add("new-html", {
    run: function(editor, sender) {
      if (sender) sender.set("active", false);

      var titleEditor = editor.Config.titleEditor;

      // Seteo todos los valores en null antes de abrir el modal
      $("#htmlName-" + titleEditor).val("");
      $("#htmlType-" + titleEditor).val("Página");
      $("#width-popup-gen-" + titleEditor).val("");
      $("#height-popup-gen-" + titleEditor).val("");

      $("#sizePopup-" + titleEditor).css("display", "none");

      // Muestro el modal
      $("#new-html-modal-" + titleEditor).modal("show");

      // Coloco el evento de cancelar
      $("#cancel-new-html-" + titleEditor).off("click");
      $("#cancel-new-html-" + titleEditor).click(function(){
        $("#new-html-modal-" + titleEditor).modal("hide");
      });

      // Coloco el evento de guardar
      $("#save-new-html-" + titleEditor).off("click");
      $("#save-new-html-" + titleEditor).click(function(event) {
        event.preventDefault();

        var htmlName = $("#htmlName-" + titleEditor).val();
        var htmlType = $("#htmlType-" + titleEditor).val();
        var maxWidthGen = $("#width-popup-gen-" + titleEditor).val();
        var minHeightGen = $("#height-popup-gen-" + titleEditor).val();

        if (!htmlName) {
          window.notification("error", "Error", "TEXT_TEMPLATE_109", {});
          return;
        }

        //Validaciones del nombre Html
        htmlName = htmlName.replace(/[^a-zA-Z0-9.]+/g, "");

        // Si el nombre ingresado es vacío o sólo caracteres especiales
        if (htmlName === "") {
          window.notification("error", "Error", "TEXT_TEMPLATE_109", {});
          return;
        }

        // Si ya existe dentro de los filenames
        if (filenames.includes(htmlName + ".html") &&
            editorArray.find(function(editorComp){ return editorComp.Config.titleEditor === htmlNewName && editorComp.Config.status === true; }) > -1) {
          window.notification("error", "Error", "TEXT_TEMPLATE_108", {});
          return;
        }

        if (editor && editor.Config) {
          // Seteo las variables que se usan para inicializar el nuevo editor
          var config = editor.Config;
          var titleNewHtml = htmlName;
          var containerNewHtml = "#gjs-" + titleNewHtml;
          var btnNewHtml = "#btn-" + titleNewHtml + "-" + titleNewHtml;
          var indexEditor = editorArray.length;

          // Quitar clase activeTab
          $(".activeTab").removeClass("activeTab");
          // Agrego el html para el pase de pestañas
          var newButtonTag = "";
          newButtonTag += '<button id="a-gjs-' + titleNewHtml + '" class="tablinks" onclick="openTab(event, ';
          newButtonTag += "'" + titleNewHtml + "'";
          newButtonTag += ')">' + titleNewHtml + "</button>";
          $(".tab").append(newButtonTag);
          var newDivTag = '<div id="gjs-' + titleNewHtml + '" class="tabcontent activeTab"></div>';
          $("#gjs").append(newDivTag);

          // Agrego Form de Page-Settings
          var newPageSettings = '<div id="info-panel-' + titleNewHtml + '" style="display:none">' +
                                  '<form action="/builder/template/upload_asset/' + templateId + '/favicon" enctype="multipart/form-data" method="post" id="form-info-panel-' + titleNewHtml + '">' +
                                    '<div class="row">' +
                                      '<div class="col-12 col-md-6 form-col">' +
                                        '<p class="gjs-category-title">Propiedades de Diseño</p>' +
                                        '<div class="form-box pt-3 pl-3 pr-3 pb-4 gjs-design-prop">' +
                                          '<div class="form-group">' +
                                              '<label class="gjs-form-label" for="head-title" aria-labelledby="fontHelp">Importar tipografías</label>' +
                                              '<input type="url" class="form-control  form-control-sm mb-2" id="font-url-one-' + titleNewHtml + '" placeholder="Font 01">' +
                                              '<input type="url" class="form-control  form-control-sm mb-2" id="font-url-two-' + titleNewHtml + '" placeholder="Font 02">' +
                                              '<input type="url" class="form-control form-control-sm" id="font-url-three-' + titleNewHtml + '" placeholder="Font 03">' +
                                              '<small id="fontHelp-' + titleNewHtml + '" class="form-text text-muted">Elija una tipografía de Google Fonts y copie la URL. <a class="info-panel-link gjs-four-color" href="https://fonts.google.com/" target="_blank">Ver Google Fonts.</a></small>' +
                                          "</div>";
          if (htmlType !== "Popup") {
                      newPageSettings +=  '<div class="form-group">' +
                                              '<label class="gjs-form-label"  for="page-layout">Diseño de página</label>' +
                                              '<div class="form-check form-check-inline mb-0">' +
                                                '<label class="form-check-label mb-0"><input class="form-check-input mt-0 mr-1" type="radio" name="page-layout-' + titleNewHtml + '" id="page-layout1-' + titleNewHtml + '" value="boxed" checked>En caja</label>' +
                                              "</div>" +
                                              '<div class="form-check form-check-inline mb-0">' +
                                                  '<label class="form-check-label mb-0"><input class="form-check-input mt-0 mr-1" type="radio" name="page-layout-' + titleNewHtml + '" id="page-layout2-' + titleNewHtml + '" value="fullwidth">Ancho Completo</label>' +
                                              "</div>" +
                                              '<div id="layout-width-' + titleNewHtml + '" class="d-block">' +
                                                 '<label class="gjs-form-label mt-3"  for="max-container-width">Ancho máximo de la caja:</label>' +
                                                  '<input class="form-control w-25 form-control-sm d-inline-block" type="number" value="" min="650" max="9999" id="max-container-width-' + titleNewHtml + '" aria-labelledby="AnchoCajaHelp"><span> px</span>' +
                                                  '<small id="AnchoCajaHelp-' + titleNewHtml + '" class="form-text text-muted">Unidad expresada en px. Ancho máximo que ocupará el diseño.</small>' +
                                              "</div>" +
                                          "</div> <!-- cierro: form group  -->" +
                                        "</div> <!-- cierro: FORM BOX   -->" +
                                      "</div> <!-- cierro: COL 12  -->" +
                                      '<div class="col-12 col-md-6 form-col">' +
                                          '<p class="gjs-category-title">Propiedades del sitio</p>' +
                                          '<div class="form-box pt-3 pl-3 pr-3 pb-4 gjs-design-prop">' +
                                              '<div class="form-group">' +
                                                  '<label class="gjs-form-label"  for="head-title">Título de la página</label>' +
                                                  '<input type="text" class="form-control form-control-sm" id="head-title-' + titleNewHtml + '" placeholder="" head-title>' +
                                              "</div>" +
                                              '<div class="form-group">' +
                                                  '<label class="gjs-form-label"  for="head-favicon">Favicon</label>' +
                                                  "<div>" +
                                                    '<input type="file" name="files[]" id="favicon-ico-' + titleNewHtml + '" class="inputfile-img d-none" accept=".ico" />' +
                                                    '<label for="favicon-ico-' + titleNewHtml + '" class="btn btn-upload btn-sm"><svg version="1.1" id="Capa_1-' + titleNewHtml + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
                                                    'viewBox="0 0 96 96.3" style="enable-background:new 0 0 96 96.3;" xml:space="preserve"><g><path d="M28.6,35.4c1.5,0,3-0.6,4.1-1.6l9.9-9.9v37.3c0,3.1,2.4,5.5,5.5,5.5s5.5-2.4,5.5-5.5V23.9l9.9,9.9c1.1,1.1,2.5,1.7,4.1,1.6' +
                                                      "c1.5,0,2.8-0.7,3.7-1.6c1.1-1.1,1.7-2.5,1.6-4.1c0-1.5-0.7-2.8-1.6-3.7L51.9,6.8c-1-1-2.4-1.6-3.9-1.6c-1.3,0-2.5,0.5-3.7,1.4" +
                                                      'L24.9,26.1c-1.1,1.1-1.7,2.5-1.6,4.1c0,1.4,0.6,2.8,1.6,3.7C25.8,34.8,27.1,35.4,28.6,35.4z"/><path d="M86.5,50.9c-3.1,0-5.5,2.4-5.5,5.5v13.9c0,5.2-4.3,9.5-9.5,9.5h-47c-5.2,0-9.5-4.3-9.5-9.5V56.4c0-3.1-2.4-5.5-5.5-5.5' +
                                                      'S4,53.3,4,56.4v13.9c0,11.3,9.2,20.5,20.5,20.5h47.1c11.2,0,20.4-9.2,20.4-20.5V56.4C92,53.3,89.6,50.9,86.5,50.9z"/></g></svg> <span>Elegir favicon...</span></label>' +
                                                  "</div>" +
                                                  '<small id="fileHelp-' + titleNewHtml + '" class="form-text text-muted">Pequeño ícono (formato: .ico de 16x16px ó 32x32px) que identifica al sitio. <a class="info-panel-link gjs-four-color" href="http://www.favicon.cc/" target="_blank">Crear ícono aquí.</a></small>' +
                                              "</div>" +
                                              '<div class="form-group">' +
                                                  '<label class="gjs-form-label"  for="meta-description">Descripción del sitio</label>' +
                                                  '<input type="text" maxlength="250" class="form-control form-control-sm" id="meta-description-' + titleNewHtml + '" placeholder="" aria-describedby="metaDescHelp" >' +
                                                  '<small id="metaDescHelp-' + titleNewHtml + '" class="form-text text-muted">Aparece en los motores de búsqueda. Máx. 250 caracteres.</small>' +
                                              "</div>" +
                                              '<div class="form-group">' +
                                                  '<label class="gjs-form-label"  for="meta-keywords">Palabras Clave Meta</label>' +
                                                  '<input type="text" class="form-control form-control-sm" id="meta-keywords-' + titleNewHtml + '" placeholder="" aria-describedby="metaKeyHelp" >' +
                                                  '<small id="metaKeyHelp-' + titleNewHtml + '" class="form-text text-muted">Separa las palabras clave entre sí mediante una coma.</small>' +
                                              "</div><!-- cierro: form group -->" +
                                          "</div><!-- cierro: FORM BOX -->" +
                                      "</div><!-- cierro COL 12  -->" ;
                    } else {
            newPageSettings +=            "</div> <!-- cierro: FORM BOX   -->" +
                                      "</div> <!-- cierro: COL 12  -->" +
                                    '<div class="col-12 col-md-6 form-col">' +
                                        '<p class="gjs-category-title">Diseño del popup</p>' +
                                        '<div class="form-box pt-3 pl-3 pr-3 pb-4 gjs-design-prop">' +
                                        '<div class="form-group">' +
                                              '<div id="layout-width-gen-' + titleNewHtml + '" class="d-block d-block-column">' +
                                                '<label class="gjs-form-label text-uppercase mt-0"  for="page-layout">General</label>' +
                                                '<div class="d-inline-block mr-3">' +
                                                  '<label class="gjs-form-label mt-1"  for="max-popup-width-gen-' + titleNewHtml + '">Ancho máximo:</label>' +
                                                  '<input class="form-control w-75 form-control-sm d-inline-block ps-input-column" type="number" value="' + maxWidthGen + '" min="0" max="9999" id="max-popup-width-gen-' + titleNewHtml + '" aria-labelledby="AnchoHelp-' + titleNewHtml + '"><span> px</span>' +
                                                  '<!--<small id="AnchoHelp-' + titleNewHtml + '" class="form-text text-muted">Unidad expresada en px. Ancho máximo que ocupará el popup.</small>-->' +
                                                "</div>" +
                                                '<div class="d-inline-block">' +
                                                  '<label class="gjs-form-label mt-1"  for="popup-height-gen-' + titleNewHtml + '">Alto máximo:</label>' +
                                                  '<input class="form-control w-75 form-control-sm d-inline-block ps-input-column" type="number" value="' + minHeightGen + '" min="0" max="9999" id="popup-height-gen-' + titleNewHtml + '" aria-labelledby="AltoHelp-' + titleNewHtml + '"><span> px</span>' +
                                                  '<!--<small id="AltoHelp-' + titleNewHtml + '" class="form-text text-muted">Unidad expresada en px. Alto mínimo que ocupará el popup.</small>-->' +
                                                "</div>" +
                                              "</div>" +
                                              '<div id="layout-width-tab-' + titleNewHtml + '" class="d-block d-block-column">' +
                                                '<label class="gjs-form-label text-uppercase mt-3"  for="page-layout">Tablet</label>' +
                                                '<div class="d-inline-block mr-3">' +
                                                  '<label class="gjs-form-label mt-1"  for="max-popup-width-tab-' + titleNewHtml + '">Ancho máximo:</label>' +
                                                  '<input class="form-control w-75 form-control-sm d-inline-block ps-input-column" type="number" value="" min="0" max="9999" id="max-popup-width-tab-' + titleNewHtml + '" aria-labelledby="AnchoHelp-' + titleNewHtml + '"><span> px</span>' +
                                                  '<!--<small id="AnchoHelp-' + titleNewHtml + '" class="form-text text-muted">Unidad expresada en px. Ancho máximo que ocupará el popup.</small>-->' +
                                                "</div>" +
                                                '<div class="d-inline-block">' +
                                                  '<label class="gjs-form-label mt-1"  for="popup-height-tab-' + titleNewHtml + '">Alto máximo:</label>' +
                                                  '<input class="form-control w-75 form-control-sm d-inline-block ps-input-column" type="number" value="" min="0" max="9999" id="popup-height-tab-' + titleNewHtml + '" aria-labelledby="AltoHelp-' + titleNewHtml + '"><span> px</span>' +
                                                  '<!--<small id="AltoHelp-' + titleNewHtml + '" class="form-text text-muted">Unidad expresada en px. Alto mínimo que ocupará el popup.</small>-->' +
                                                "</div>" +
                                              "</div>" +
                                              '<div id="layout-width-mob-' + titleNewHtml + '" class="d-block d-block-column">' +
                                                '<label class="gjs-form-label text-uppercase mt-3"  for="page-layout">Mobile</label>' +
                                                '<div class="d-inline-block mr-3">' +
                                                  '<label class="gjs-form-label mt-1"  for="max-popup-width-mob-' + titleNewHtml + '">Ancho máximo:</label>' +
                                                  '<input class="form-control w-75 form-control-sm d-inline-block ps-input-column" type="number" value="" min="0" max="9999" id="max-popup-width-mob-' + titleNewHtml + '" aria-labelledby="AnchoHelp-' + titleNewHtml + '"><span> px</span>' +
                                                  '<!--<small id="AnchoHelp-' + titleNewHtml + '" class="form-text text-muted">Unidad expresada en px. Ancho máximo que ocupará el popup.</small>-->' +
                                                "</div>" +
                                                '<div class="d-inline-block">' +
                                                  '<label class="gjs-form-label mt-1"  for="popup-height-mob-' + titleNewHtml + '">Alto máximo:</label>' +
                                                  '<input class="form-control w-75 form-control-sm d-inline-block ps-input-column" type="number" value="" min="0" max="9999" id="popup-height-mob-' + titleNewHtml + '" aria-labelledby="AltoHelp-' + titleNewHtml + '"><span> px</span>' +
                                                  '<!--<small id="AltoHelp-' + titleNewHtml + '" class="form-text text-muted">Unidad expresada en px. Alto mínimo que ocupará el popup.</small>-->' +
                                                "</div>" +
                                              "</div>" +
                                        "</div></div></div><!-- cierro: form group / FORM BOX / COL 12  -->";
          }
          newPageSettings +=    "</div><!-- cierro row  -->" +
                                  '<div class="row gjs-mdl-footer">' +
                                      '<div class="col-12 text-right  pt-3 pl-3 pr-3 pb-3">' +
                                      '<button type="submit" class="btn btn-secondary btn-sm" id="btn-settings-' + titleNewHtml + '">Guardar Cambios</button>' +
                                      "</div>" +
                                  "</div>" +
                              "</form>" +
                          "</div>";

          // Agrego modal de Nuevo HTML
          var newModalNewHtml = '<div class="modal fade" id="new-html-modal-' + titleNewHtml + '">' +
                                  '<div class="modal-dialog">' +
                                      '<div class="modal-content">' +
                                          '<div class="modal-header">' +
                                              '<h4 class="modal-title">Nuevo HTML</h4>' +
                                              '<button type="button" class="close" data-dismiss="modal">&times;</button>' +
                                          "</div>" +
                                          '<div class="modal-body">' +
                                              '<div class="form-group">' +
                                                  "<div>" +
                                                      '<label class="gjs-form-label" for="htmlName-' + titleNewHtml + '">Nombre:</label>' +
                                                      '<input type="text" value="" class="form-control" id="htmlName-' + titleNewHtml + '">' +
                                                  "</div>" +
                                                  "</br>" +
                                                  "<div>" +
                                                      '<label class="gjs-form-label" for="htmlType-' + titleNewHtml + '">Tipo de HTML:</label>' +
                                                      '<select class="form-control" id="htmlType-' + titleNewHtml + '">' +
                                                          "<option>Página</option>" +
                                                          "<option>Popup</option>" +
                                                      "</select>" +
                                                  "</div>" +
                                                  '<div id="sizePopup-' + titleNewHtml + '" style="display:none;" class="mt-2">' +
                                                      '<div class="form-group d-inline-block w-25 mr-3">' +
                                                          '<label class="gjs-form-label gjs-form-label-small mt-1" for="width-popup-gen-' + titleNewHtml + '">Ancho máximo:</label>' +
                                                          '<input class="form-control d-inline-block w-75" type="text" value="" class="form-control" id="width-popup-gen-' + titleNewHtml + '"><span> px</span>' +
                                                      "</div>" +
                                                      "</br>" +
                                                      '<div class="form-group d-inline-block w-25">' +
                                                          '<label class="gjs-form-label gjs-form-label-small mt-1" for="height-popup-gen-' + titleNewHtml + '">Alto máximo:</label>' +
                                                          '<input class="form-control d-inline-block w-75" type="text" value="" class="form-control" id="height-popup-gen-' + titleNewHtml + '"><span> px</span>' +
                                                      "</div>" +
                                                  "</div>" +
                                              "</div>" +
                                              "<script>" +
                                                  '$("#htmlType-' + titleNewHtml + '").change(function() {' +
                                                      '$("#width-popup-gen-' + titleNewHtml + '").val("");' +
                                                      '$("#height-popup-gen-' + titleNewHtml + '").val("");' +
                                                      'if ($( this )[0].value === "Popup") {' +
                                                          '$("#sizePopup-' + titleNewHtml + '").css("display","flex");' +
                                                      "} else {" +
                                                          '$("#sizePopup-' + titleNewHtml + '").css("display","none");' +
                                                      "}" +
                                                  "});" +
                                              "</script>" +
                                          "</div>" +
                                          '<div class="modal-footer">' +
                                              '<button type="button" class="btn btn-danger" data-dismiss="modal" id="cancel-new-html-' + titleNewHtml + '">Cancel</button>' +
                                              '<button type="button" class="btn btn-secondary" data-dismiss="modal" id="save-new-html-' + titleNewHtml + '">Save</button>' +
                                          "</div>" +
                                      "</div>" +
                                  "</div>" +
                              "</div>";
          $("body").append(newPageSettings);
          $("body").append(newModalNewHtml);

          var htmlInit = "";
          var cssInit = "";
          if (htmlType === "Popup") {
            htmlInit = '<script>document.body.classList.add("popup-body");</script>';
            if (maxWidthGen || minHeightGen) {
              cssInit = "body.popup-body{" + (maxWidthGen ? "width: " + maxWidthGen + "px;" : "") + (minHeightGen ? " height: " + minHeightGen + "px !important;}" : "}");
            }
          }

          // Opciones del nuevo editor
          var optsNewHtml = {
            // Configuraciones del editor
            container: containerNewHtml,
            height: config.height,
            protectedCss: config.protectedCss,
            autorender: config.autorender,
            jsInHtml: config.jsInHtml,
            //undoManager: true,
            showOffsets: config.showOffsets,
            allowScripts: config.allowScripts,
            avoidInlineStyle: config.avoidInlineStyle,
            titleEditor: titleNewHtml,
            indexEditor: editorArray.length,
            // Codigo fuente recibido
            components: htmlInit,
            style: cssInit,
            plugins: config.plugins,
            pluginsOpts: config.pluginsOpts,
            assetManager: config.assetManager,
            storageManager: config.storageManager,
            styleManager: config.styleManager,
            deviceManager: config.deviceManager
          };

          headStyles = [];
          headElements = [];

          // Obtengo objeto DOM con el head para guardar los elementos y sus atributos
          var parsedHead = document.createElement("div");
          parsedHead.innerHTML = "";

          // Hago el parse del head y gauardo los elementos
          var headToBody = "";
          headToBody = parseHead(parsedHead.childNodes, titleNewHtml + ".css");

          // Agrego los headStyles dentro del headElements
          headStyles.forEach(function(headStyle){
            headElements.push(generateHeadElement("link", "stylesheet", "", headStyle, "0"));
          });

          // Agrego las librerías de bootstrap
          switch (framework) {
              case bs3:
                  headElements.push(generateHeadElement("script", "", "", bs3jsUrl, "0"));
                  headElements.push(generateHeadElement("link", "stylesheet", "", bs3cssUrl, "0"));
                  break;
              case bs4:
                  headElements.push(generateHeadElement("script", "", "", bs4jsUrl, "0"));
                  headElements.push(generateHeadElement("link", "stylesheet", "", bs4cssUrl, "0"));
                  break;
              default:
                  break;
          }

          // Agrego el meta con la info del tipo de HTML si es Popup
          if (htmlType === "Popup") {
            headElements.push(generateHeadElement("meta", "", "", "", "htmlType", "Popup", ""));
          }

          // Agrego el nuevo editor con los parámetros definidos
          setNewEditor(editor, sender, titleNewHtml, htmlType, optsNewHtml, headElements);
        }
      });
    }
  });

  // Comando para editar nombre del html
  cmdm.add("edit-html-name", {
    run: function(editor, sender){
      if (sender) sender.set("active", false);

      if (editor && editor.Config) {
        var titleEditor = editor.Config.titleEditor;

        // Seteo todos los valores en null antes de abrir el modal
        $("#htmlNewName-" + titleEditor).val("");

        // Muestro el modal
        $("#edit-html-modal-" + titleEditor).modal("show");

        // Coloco el evento de cancelar
        $("#cancel-edit-html-" + titleEditor).off("click");
        $("#cancel-edit-html-" + titleEditor).click(function(){
          $("#edit-html-modal-" + titleEditor).modal("hide");
        });

        // Coloco el evento de guardar
        $("#save-edit-html-" + titleEditor).off("click");
        $("#save-edit-html-" + titleEditor).click(function(event) {
          event.preventDefault();

          var htmlNewName = $("#htmlNewName-" + titleEditor).val();

          if (!htmlNewName) {
            window.notification("error", "Error", "TEXT_TEMPLATE_109", {});
            return;
          }

          //Validaciones del nombre Html
          htmlNewName = htmlNewName.replace(/[^a-zA-Z0-9.]+/g, "");

          // Si el nombre ingresado es vacío o sólo caracteres especiales
          if (htmlNewName === "") {
            window.notification("error", "Error", "TEXT_TEMPLATE_109", {});
            return;
          }

          // Si ya existe dentro de los filenames y tiene un status true (esto porque al eliminar un editor, éste queda con estatus false)
          if (filenames.includes(htmlNewName + ".html") &&
              editorArray.find(function(editorComp){ return editorComp.Config.titleEditor === htmlNewName && editorComp.Config.status === true; }) > -1) {
            window.notification("error", "Error", "TEXT_TEMPLATE_108", {});
            return;
          }

          // Seteo las variables que se usan para inicializar el editor con otro nombre
          var config = editor.Config;
          var titleNewHtml = htmlNewName;
          var indexEditor = config.indexEditor;
          var containerNewHtml = "#gjs-" + titleNewHtml;

          var htmlType = $("#layout-width-" + titleEditor)[0] === undefined ? "Popup" : "Página";

          // Opciones del nuevo editor
          var optsNewHtml = {
            // Configuraciones del editor
            container: containerNewHtml,
            height: config.height,
            protectedCss: config.protectedCss,
            autorender: config.autorender,
            jsInHtml: config.jsInHtml,
            //undoManager: true,
            showOffsets: config.showOffsets,
            allowScripts: config.allowScripts,
            avoidInlineStyle: config.avoidInlineStyle,
            titleEditor: titleNewHtml,
            indexEditor: editorArray.length,
            canvas: config.canvas,
            // Codigo fuente recibido
            components: editor.getHtml(),
            style: editor.getCss(),
            plugins: config.plugins,
            pluginsOpts: config.pluginsOpts,
            assetManager: config.assetManager,
            storageManager: config.storageManager,
            styleManager: config.styleManager,
            deviceManager: config.deviceManager
          };

          // Modifico la referencia al css del headElement
          var indexElement = headElementsArray[indexEditor].findIndex(function(element){return element.tag === "link" && element.href.includes("./css/" + titleEditor + ".html.css"); });
          if (indexElement > -1) {
            headElementsArray[indexEditor][indexElement].href = "./css/" + titleNewHtml + ".html.css";
          }

          // Cierro el modal
          $("#edit-html-modal-" + titleEditor).modal("hide");

          // Agrego el nuevo editor con los parámetros definidos
          setNewEditor(editor, sender, titleNewHtml, htmlType, optsNewHtml, headElementsArray[indexEditor]);

          // Elimino el editor actual
          removeEditor(indexEditor, sender);

          // Ejecuto el comando change-tab para abrir el nuevo editor
          var commands = editorArray[optsNewHtml.indexEditor].Commands;
          sender.attributes.titulo = titleNewHtml;
          commands.get("change-tab").run(editorArray[optsNewHtml.indexEditor], sender);
        });
      }
    }
  });

  // Comando para duplicar el html
  cmdm.add("duplicate-html", {
    run: function(editor, sender){
      if (sender) sender.set("active", false);

      if (editor && editor.Config) {
        var titleEditor = editor.Config.titleEditor;

        // Seteo todos los valores en null antes de abrir el modal
        $("#htmlDuplicateName-" + titleEditor).val("");

        // Muestro el modal
        $("#duplicate-html-modal-" + titleEditor).modal("show");

        // Coloco el evento de cancelar
        $("#cancel-duplicate-html-" + titleEditor).off("click");
        $("#cancel-duplicate-html-" + titleEditor).click(function(){
          $("#duplicate-html-modal-" + titleEditor).modal("hide");
        });

        // Coloco el evento de guardar
        $("#save-duplicate-html-" + titleEditor).off("click");
        $("#save-duplicate-html-" + titleEditor).click(function(event) {
          event.preventDefault();

          var htmlNewName = $("#htmlDuplicateName-" + titleEditor).val();

          if (!htmlNewName) {
            window.notification("error", "Error", "TEXT_TEMPLATE_109", {});
            return;
          }

          //Validaciones del nombre Html
          htmlNewName = htmlNewName.replace(/[^a-zA-Z0-9.]+/g, "");

          // Si el nombre ingresado es vacío o sólo caracteres especiales
          if (htmlNewName === "") {
            window.notification("error", "Error", "TEXT_TEMPLATE_109", {});
            return;
          }

          // Si ya existe dentro de los filenames y tiene un status true (esto porque al eliminar un editor, éste queda con estatus false)
          if (filenames.includes(htmlNewName + ".html") &&
              editorArray.find(function(editorComp){ return editorComp.Config.titleEditor === htmlNewName && editorComp.Config.status === true; }) > -1) {
            window.notification("error", "Error", "TEXT_TEMPLATE_108", {});
            return;
          }

          // Seteo las variables que se usan para inicializar el editor con otro nombre
          var config = editor.Config;
          var titleNewHtml = htmlNewName;
          var indexEditor = config.indexEditor;
          var containerNewHtml = "#gjs-" + titleNewHtml;

          var htmlType = $("#layout-width-" + titleEditor)[0] === undefined ? "Popup" : "Página";

          // Opciones del nuevo editor
          var optsNewHtml = {
            // Configuraciones del editor
            container: containerNewHtml,
            height: config.height,
            protectedCss: config.protectedCss,
            autorender: config.autorender,
            jsInHtml: config.jsInHtml,
            //undoManager: true,
            showOffsets: config.showOffsets,
            allowScripts: config.allowScripts,
            avoidInlineStyle: config.avoidInlineStyle,
            titleEditor: titleNewHtml,
            indexEditor: editorArray.length,
            canvas: config.canvas,
            // Codigo fuente recibido
            components: editor.getHtml(),
            style: editor.getCss(),
            plugins: config.plugins,
            pluginsOpts: config.pluginsOpts,
            assetManager: config.assetManager,
            storageManager: config.storageManager,
            styleManager: config.styleManager,
            deviceManager: config.deviceManager
          };

          // Agrego un nuevo headElements
          var headElementsDuplicated = headElementsArray[indexEditor].slice();
          var indexElement = headElementsDuplicated.findIndex(function(element){return element.tag === "link" && element.href.includes("./css/" + titleEditor + ".html.css"); });
          if (indexElement > -1) {
            headElementsDuplicated[indexElement].href = "./css/" + titleNewHtml + ".html.css";
          }

          // Cierro el modal
          //$("#edit-html-modal-" + titleEditor).modal("hide");

          // Agrego el nuevo editor con los parámetros definidos
          setNewEditor(editor, sender, titleNewHtml, htmlType, optsNewHtml, headElementsDuplicated);
        });
      }
    }
  });

  // Comando para eliminar html
  cmdm.add("delete-html", {
    run: function(editor, sender){
      if (sender) sender.set("active", false);

      if (editor && editor.Config) {
        var titleEditor = editor.Config.titleEditor;

        // Muestro el modal
        $("#delete-html-modal-" + titleEditor).modal("show");

        // Coloco el evento de cancelar
        $("#cancel-delete-html-" + titleEditor).off("click");
        $("#cancel-delete-html-" + titleEditor).click(function(){
          $("#delete-html-modal-" + titleEditor).modal("hide");
        });

        // Coloco el evento de guardar
        $("#confirm-delete-html-" + titleEditor).off("click");
        $("#confirm-delete-html-" + titleEditor).click(function(event) {
          event.preventDefault();

          // Seteo las variables que se usan para inicializar el editor con otro nombre
          var config = editor.Config;
          var indexEditor = config.indexEditor;

          // Elimino el editor actual
          removeEditor(indexEditor, sender);
        });
      }
    }
  });

  // Comando para boton de PageSettings
  var mdlClass = "gjs-mdl-dialog-md";
  var mdlHeadClass = "";
  var mdlHeadClass1231 = "test";
  cmdm.add("open-info", {
    run: function(editor, sender){
      if (sender) sender.set("active", false);

      // Primero filtro los editores que no se eliminaron (status false). Luego busco el índice del editor que tiene el titleEditor actual
      var indexEditorReal = editorArray.filter(function(editorComp){return editorComp.Config.status !== false; }).findIndex(function(comp){ return comp.Config.titleEditor === editor.Config.titleEditor; });
      var infoContainer = document.getElementById("info-panel-" + activeTab);
      var mdlDialogs = document.querySelectorAll(".gjs-mdl-dialog");
      var mdlHeaders = document.querySelectorAll(".gjs-mdl-header");
      mdlDialogs[indexEditorReal].className += " " + mdlClass;
      mdlHeaders[indexEditorReal].className += " " + mdlHeadClass;
      /*
      var mdlDialog = document.querySelector(".gjs-mdl-dialog");
      var mdlHeader = document.querySelector(".gjs-mdl-header");
      mdlDialog.className += " " + mdlClass;
      mdlHeader.className += " " + mdlHeadClass;
      */
      infoContainer.style.display = "block";
      editor.Modal.setTitle(opt.settingsModalTitle);
      editor.Modal.setContent(infoContainer);
      editor.Modal.open();
      editor.Modal.getModel().once("change:open", function() {
        mdlDialogs[indexEditorReal].className = mdlDialogs[indexEditor].className.replace(mdlClass, "");
        //mdlDialog.className = mdlDialog.className.replace(mdlClass, "");
      });
    }
  });

  // Agrego comandos para botones de guardar y descartar
  cmdm.add(opt.cmdSaveChanges, {
    run: function(editor, sender) {
      if (sender) sender.set("active", false);
      if (window.saveTemplate && typeof window.saveTemplate === "function") window.saveTemplate();
    }
  });
  cmdm.add(opt.cmdDiscardChanges, {
    run: function(editor, sender) {
      if (sender) sender.set("active", false);
      if (window.discardTemplate && typeof window.discardTemplate === "function") window.discardTemplate();
    }
  });

  // Función para generar nuevo editor
  setNewEditor = function setNewEditor (editor, sender, titleNewHtml, htmlType, optsNewHtml, newHeadElements) {
    var btnNewHtml = "#btn-" + titleNewHtml + "-" + titleNewHtml;
    var indexEditor = editorArray.length;

    // Quitar clase activeTab
    $(".activeTab").removeClass("activeTab");
    // Agrego el html para el pase de pestañas
    var newButtonTag = "";
    newButtonTag += '<button id="a-gjs-' + titleNewHtml + '" class="tablinks" onclick="openTab(event, ';
    newButtonTag += "'" + titleNewHtml + "'";
    newButtonTag += ')">' + titleNewHtml + "</button>";
    $(".tab").append(newButtonTag);
    var newDivTag = '<div id="gjs-' + titleNewHtml + '" class="tabcontent activeTab"></div>';
    $("#gjs").append(newDivTag);

    // Agrego Form de Page-Settings
    var newPageSettings = getPageSettingsHtml(htmlType, titleNewHtml);

    // Agrego modal de Nuevo HTML
    var newModalNewHtml = getModalNewHtml(titleNewHtml);

    // Agrego modal de Editar HTML
    var newModalEditHtml = getModalEditHtml(titleNewHtml);

    // Agrego modal de Duplicar HTML
    var newModalDuplicateHtml = getModalDuplicateHtml(titleNewHtml);

    // Agrego modal de Eliminar HTML
    var newModalDeleteHtml = getModalDeleteHtml(titleNewHtml);

    $("body").append(newPageSettings);
    $("body").append(newModalNewHtml);
    $("body").append(newModalEditHtml);
    $("body").append(newModalDuplicateHtml);
    $("body").append(newModalDeleteHtml);

    // Creo los botones que se colocarán como pestañas dentro del editor
    buttonTabs.push({
      className: "",
      command: "change-tab",
      attributes: {},
      active: false,
      titulo: titleNewHtml
    });

    // Agrego el nuevo html dentro del array de filenames
    filenames.push(titleNewHtml + ".html");

    // Se van colocando los elementos del head en un array
    headElementsArray.push(newHeadElements);

    // Agrego la pestaña a cada editor
    editorArray.forEach(function(e, index) {
      if (e.Config.status !== false) {
        var pnm = e.Panels;
        var editorConfig = e.Config;
        var idPanel = "tabs-" + editorConfig.titleEditor;
        var btnId = "btn-" + editorConfig.titleEditor + "-" + titleNewHtml;

        pnm.addButton(idPanel, {
          className: "",
          command: "change-tab",
          attributes: {id: btnId},
          active: false,
          titulo: titleNewHtml,
          id: btnId
        });

        $("#" + btnId)[0].innerText = titleNewHtml;
      }
    });

    // Agrego las opciones del editor al array
    optsArray.push(optsNewHtml);

    // Inicializo el nuevo editor
    window.initEditor(optsNewHtml, optsNewHtml.indexEditor);

    var newModalOption = {value: titleNewHtml + ".html", name: titleNewHtml + ".html"};

    //Actualizo las opciones de modal a los botones y links
    for (var i = 0; i < editorArray.length - 1; i++) {
      if (editorArray[i].Config.status !== false) {
        var componentes = editorArray[i].getComponents().models;
        updateCompModalOptions(componentes, newModalOption);
      }
    }

    // Ejecuto el comando change-tab para abrir el nuevo editor
    var commands = editorArray[indexEditor].Commands;
    sender.attributes.titulo = titleNewHtml;
    commands.get("change-tab").run(editor, sender);
  };

  // Función para generar el html del Page Settings
  getPageSettingsHtml = function getPageSettingsHtml(htmlType, titleNewHtml) {
    // Agrego Form de Page-Settings
    var newPageSettings = '<div id="info-panel-' + titleNewHtml + '" style="display:none">' +
                            '<form action="/builder/template/upload_asset/' + titleNewHtml + '/favicon" enctype="multipart/form-data" method="post" id="form-info-panel-' + titleNewHtml + '">' +
                              '<div class="row">' +
                                '<div class="col-12 col-md-6 form-col">' +
                                  '<p class="gjs-category-title">Propiedades de Diseño</p>' +
                                  '<div class="form-box pt-3 pl-3 pr-3 pb-4 gjs-design-prop">' +
                                    '<div class="form-group">' +
                                        '<label class="gjs-form-label" for="head-title" aria-labelledby="fontHelp">Importar tipografías</label>' +
                                        '<input type="url" class="form-control  form-control-sm mb-2" id="font-url-one-' + titleNewHtml + '" placeholder="Font 01">' +
                                        '<input type="url" class="form-control  form-control-sm mb-2" id="font-url-two-' + titleNewHtml + '" placeholder="Font 02">' +
                                        '<input type="url" class="form-control form-control-sm" id="font-url-three-' + titleNewHtml + '" placeholder="Font 03">' +
                                        '<small id="fontHelp-' + titleNewHtml + '" class="form-text text-muted">Elija una tipografía de Google Fonts y copie la URL. <a class="info-panel-link gjs-four-color" href="https://fonts.google.com/" target="_blank">Ver Google Fonts.</a></small>' +
                                    "</div>";
    if (htmlType !== "Popup") {
      newPageSettings +=  '<div class="form-group">' +
                            '<label class="gjs-form-label"  for="page-layout">Diseño de página</label>' +
                                '<div class="form-check form-check-inline mb-0">' +
                                '<label class="form-check-label mb-0"><input class="form-check-input mt-0 mr-1" type="radio" name="page-layout-' + titleNewHtml + '" id="page-layout1-' + titleNewHtml + '" value="boxed" checked>En caja</label>' +
                                "</div>" +
                                '<div class="form-check form-check-inline mb-0">' +
                                '<label class="form-check-label mb-0"><input class="form-check-input mt-0 mr-1" type="radio" name="page-layout-' + titleNewHtml + '" id="page-layout2-' + titleNewHtml + '" value="fullwidth">Ancho Completo</label>' +
                                "</div>" +
                                '<div id="layout-width-' + titleNewHtml + '" class="d-block">' +
                                    '<label class="gjs-form-label mt-3"  for="max-container-width">Ancho máximo de la caja:</label>' +
                                    '<input class="form-control w-25 form-control-sm d-inline-block" type="number" value="" min="650" max="9999" id="max-container-width-' + titleNewHtml + '" aria-labelledby="AnchoCajaHelp"><span> px</span>' +
                                    '<small id="AnchoCajaHelp-' + titleNewHtml + '" class="form-text text-muted">Unidad expresada en px. Ancho máximo que ocupará el diseño.</small>' +
                                "</div>" +
                          "</div>";
    } else {
      newPageSettings +=  '<div class="form-group">' +
                            '<label class="gjs-form-label"  for="page-layout">Diseño del popup</label>' +

                                '<div id="layout-width-gen-' + titleNewHtml + '" class="d-block d-block-column">' +
                                  '<label class="gjs-form-label"  for="page-layout">General</label>' +
                                  '<div class="d-block">' +
                                    '<label class="gjs-form-label mt-3"  for="max-popup-width-gen-' + titleNewHtml + '">Ancho máximo:</label>' +
                                    '<input class="form-control w-25 form-control-sm d-inline-block ps-input-column" type="number" value="" min="0" max="9999" id="max-popup-width-gen-' + titleNewHtml + '" aria-labelledby="AnchoHelp-' + titleNewHtml + '"><span> px</span>' +
                                    '<!--<small id="AnchoHelp-' + titleNewHtml + '" class="form-text text-muted">Unidad expresada en px. Ancho máximo que ocupará el popup.</small>-->' +
                                  "</div>" +
                                  '<div class="d-block">' +
                                    '<label class="gjs-form-label mt-3"  for="popup-height-gen-' + titleNewHtml + '">Alto máximo:</label>' +
                                    '<input class="form-control w-25 form-control-sm d-inline-block ps-input-column" type="number" value="" min="0" max="9999" id="popup-height-gen-' + titleNewHtml + '" aria-labelledby="AltoHelp-' + titleNewHtml + '"><span> px</span>' +
                                    '<!--<small id="AltoHelp-' + titleNewHtml + '" class="form-text text-muted">Unidad expresada en px. Alto mínimo que ocupará el popup.</small>-->' +
                                  "</div>" +
                                "</div>" +
                                "</br>" +
                                '<div id="layout-width-tab-' + titleNewHtml + '" class="d-block d-block-column">' +
                                  '<label class="gjs-form-label"  for="page-layout">Tablet</label>' +
                                  '<div class="d-block">' +
                                    '<label class="gjs-form-label mt-3"  for="max-popup-width-tab-' + titleNewHtml + '">Ancho máximo:</label>' +
                                    '<input class="form-control w-25 form-control-sm d-inline-block ps-input-column" type="number" value="" min="0" max="9999" id="max-popup-width-tab-' + titleNewHtml + '" aria-labelledby="AnchoHelp-' + titleNewHtml + '"><span> px</span>' +
                                    '<!--<small id="AnchoHelp-' + titleNewHtml + '" class="form-text text-muted">Unidad expresada en px. Ancho máximo que ocupará el popup.</small>-->' +
                                  "</div>" +
                                  '<div class="d-block">' +
                                    '<label class="gjs-form-label mt-3"  for="popup-height-tab-' + titleNewHtml + '">Alto máximo:</label>' +
                                    '<input class="form-control w-25 form-control-sm d-inline-block ps-input-column" type="number" value="" min="0" max="9999" id="popup-height-tab-' + titleNewHtml + '" aria-labelledby="AltoHelp-' + titleNewHtml + '"><span> px</span>' +
                                    '<!--<small id="AltoHelp-' + titleNewHtml + '" class="form-text text-muted">Unidad expresada en px. Alto mínimo que ocupará el popup.</small>-->' +
                                  "</div>" +
                                "</div>" +
                                "</br>" +
                                '<div id="layout-width-mob-' + titleNewHtml + '" class="d-block d-block-column">' +
                                  '<label class="gjs-form-label"  for="page-layout">Mobile</label>' +
                                  '<div class="d-block">' +
                                    '<label class="gjs-form-label mt-3"  for="max-popup-width-mob-' + titleNewHtml + '">Ancho máximo:</label>' +
                                    '<input class="form-control w-25 form-control-sm d-inline-block ps-input-column" type="number" value="" min="0" max="9999" id="max-popup-width-mob-' + titleNewHtml + '" aria-labelledby="AnchoHelp-' + titleNewHtml + '"><span> px</span>' +
                                    '<!--<small id="AnchoHelp-' + titleNewHtml + '" class="form-text text-muted">Unidad expresada en px. Ancho máximo que ocupará el popup.</small>-->' +
                                  "</div>" +
                                  '<div class="d-block">' +
                                    '<label class="gjs-form-label mt-3"  for="popup-height-mob-' + titleNewHtml + '">Alto máximo:</label>' +
                                    '<input class="form-control w-25 form-control-sm d-inline-block ps-input-column" type="number" value="" min="0" max="9999" id="popup-height-mob-' + titleNewHtml + '" aria-labelledby="AltoHelp-' + titleNewHtml + '"><span> px</span>' +
                                    '<!--<small id="AltoHelp-' + titleNewHtml + '" class="form-text text-muted">Unidad expresada en px. Alto mínimo que ocupará el popup.</small>-->' +
                                  "</div>" +
                                "</div>" +
                          "</div>";
    }
    newPageSettings +=    "</div>" +
                            "</div>" +
                                '<div class="col-12 col-md-6 form-col">' +
                                    '<p class="gjs-category-title">Propiedades del sitio</p>' +
                                '<div class="form-box pt-3 pl-3 pr-3 pb-4 gjs-design-prop">' +
                                        '<div class="form-group">' +
                                            '<label class="gjs-form-label"  for="head-title">Título de la página</label>' +
                                            '<input type="text" class="form-control form-control-sm" id="head-title-' + titleNewHtml + '" placeholder="" head-title>' +
                                        "</div>" +
                                        '<div class="form-group">' +
                                            '<label class="gjs-form-label"  for="head-favicon">Favicon</label>' +
                                            '<div><input type="file" name="files[]" id="favicon-ico-' + titleNewHtml + '" class="inputfile-img d-none" accept=".ico" />' +
                                            '<label for="favicon-ico-' + titleNewHtml + '" class="btn btn-upload btn-sm"><svg version="1.1" id="Capa_1-' + titleNewHtml + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
                                            'viewBox="0 0 96 96.3" style="enable-background:new 0 0 96 96.3;" xml:space="preserve"><g><path d="M28.6,35.4c1.5,0,3-0.6,4.1-1.6l9.9-9.9v37.3c0,3.1,2.4,5.5,5.5,5.5s5.5-2.4,5.5-5.5V23.9l9.9,9.9c1.1,1.1,2.5,1.7,4.1,1.6' +
                                                "c1.5,0,2.8-0.7,3.7-1.6c1.1-1.1,1.7-2.5,1.6-4.1c0-1.5-0.7-2.8-1.6-3.7L51.9,6.8c-1-1-2.4-1.6-3.9-1.6c-1.3,0-2.5,0.5-3.7,1.4" +
                                                'L24.9,26.1c-1.1,1.1-1.7,2.5-1.6,4.1c0,1.4,0.6,2.8,1.6,3.7C25.8,34.8,27.1,35.4,28.6,35.4z"/><path d="M86.5,50.9c-3.1,0-5.5,2.4-5.5,5.5v13.9c0,5.2-4.3,9.5-9.5,9.5h-47c-5.2,0-9.5-4.3-9.5-9.5V56.4c0-3.1-2.4-5.5-5.5-5.5' +
                                                'S4,53.3,4,56.4v13.9c0,11.3,9.2,20.5,20.5,20.5h47.1c11.2,0,20.4-9.2,20.4-20.5V56.4C92,53.3,89.6,50.9,86.5,50.9z"/></g></svg> <span>Elegir favicon...</span></label></div>' +
                                            '<small id="fileHelp-' + titleNewHtml + '" class="form-text text-muted">Pequeño ícono (formato: .ico de 16x16px ó 32x32px) que identifica al sitio. <a class="info-panel-link gjs-four-color" href="http://www.favicon.cc/" target="_blank">Crear ícono aquí.</a></small>' +
                                        "</div>" +
                                        '<div class="form-group">' +
                                            '<label class="gjs-form-label"  for="meta-description">Descripción del sitio</label>' +
                                            '<input type="text" maxlength="250" class="form-control form-control-sm" id="meta-description-' + titleNewHtml + '" placeholder="" aria-describedby="metaDescHelp" >' +
                                            '<small id="metaDescHelp-' + titleNewHtml + '" class="form-text text-muted">Aparece en los motores de búsqueda. Máx. 250 caracteres.</small>' +
                                        "</div>" +
                                        '<div class="form-group">' +
                                            '<label class="gjs-form-label"  for="meta-keywords">Palabras Clave Meta</label>' +
                                            '<input type="text" class="form-control form-control-sm" id="meta-keywords-' + titleNewHtml + '" placeholder="" aria-describedby="metaKeyHelp" >' +
                                            '<small id="metaKeyHelp-' + titleNewHtml + '" class="form-text text-muted">Separa las palabras clave entre sí mediante una coma.</small>' +
                                        "</div>" +
                                "</div>" +
                            "</div>" +
                            "</div>" +
                            '<div class="row gjs-mdl-footer">' +
                                '<div class="col-12 text-right  pt-3 pl-3 pr-3 pb-3">' +
                                '<button type="submit" class="btn btn-secondary btn-sm" id="btn-settings-' + titleNewHtml + '">Guardar Cambios</button>' +
                                "</div>" +
                            "</div>" +
                          "</form>" +
                          "</div>";
    return newPageSettings;
  };

  // Función para generar el html del modal para nueva página
  getModalNewHtml = function getModalNewHtml(titleNewHtml) {
    // Agrego modal de Nuevo HTML
    var newModalNewHtml = '<div class="modal fade" id="new-html-modal-' + titleNewHtml + '">' +
                            '<div class="modal-dialog">' +
                                '<div class="modal-content">' +
                                    '<div class="modal-header">' +
                                        '<h4 class="modal-title">Nuevo HTML</h4>' +
                                        '<button type="button" class="close" data-dismiss="modal">&times;</button>' +
                                    "</div>" +
                                    '<div class="modal-body">' +
                                        '<div class="form-group">' +
                                            "<div>" +
                                                '<label for="htmlName-' + titleNewHtml + '">Nombre:</label>' +
                                                '<input type="text" value="" class="form-control" id="htmlName-' + titleNewHtml + '">' +
                                            "</div>" +
                                            "</br>" +
                                            "<div>" +
                                                '<label for="htmlType-' + titleNewHtml + '">Tipo de HTML:</label>' +
                                                '<select class="form-control" id="htmlType-' + titleNewHtml + '">' +
                                                    "<option>Página</option>" +
                                                    "<option>Popup</option>" +
                                                "</select>" +
                                            "</div>" +
                                            "</br>" +
                                            '<div id="sizePopup-' + titleNewHtml + '" style="display:none;">' +
                                                "<div class>" +
                                                    '<label for="width-popup-gen-' + titleNewHtml + '">Width:</label>' +
                                                    '<input type="text" value="" class="form-control" id="width-popup-gen-' + titleNewHtml + '">' +
                                                "</div>" +
                                                "</br>" +
                                                "<div class>" +
                                                    '<label for="height-popup-gen-' + titleNewHtml + '">Height:</label>' +
                                                    '<input type="text" value="" class="form-control" id="height-popup-gen-' + titleNewHtml + '">' +
                                                "</div>" +
                                            "</div>" +
                                        "</div>" +
                                        "<script>" +
                                            '$("#htmlType-' + titleNewHtml + '").change(function() {' +
                                                '$("#width-popup-gen-' + titleNewHtml + '").val("");' +
                                                '$("#height-popup-gen-' + titleNewHtml + '").val("");' +
                                                'if ($( this )[0].value === "Popup") {' +
                                                    '$("#sizePopup-' + titleNewHtml + '").css("display","flex");' +
                                                "} else {" +
                                                    '$("#sizePopup-' + titleNewHtml + '").css("display","none");' +
                                                "}" +
                                            "});" +
                                        "</script>" +
                                    "</div>" +
                                    '<div class="modal-footer">' +
                                        '<button type="button" class="btn btn-secondary" data-dismiss="modal" id="save-new-html-' + titleNewHtml + '">Save</button>' +
                                        '<button type="button" class="btn btn-danger" data-dismiss="modal" id="cancel-new-html-' + titleNewHtml + '">Cancel</button>' +
                                    "</div>" +
                                "</div>" +
                            "</div>" +
                          "</div>";
    return newModalNewHtml;
  };

  // Función para generar el html del modal para nueva página
  getModalEditHtml = function getModalEditHtml(titleNewHtml) {
    // Agrego modal de Nuevo HTML
    var newModalEditHtml = '<div class="modal fade" id="edit-html-modal-' + titleNewHtml + '">' +
                            '<div class="modal-dialog">' +
                                '<div class="modal-content">' +
                                    '<div class="modal-header">' +
                                        '<h4 class="modal-title">Editar HTML</h4>' +
                                        '<button type="button" class="close" data-dismiss="modal">&times;</button>' +
                                    "</div>" +
                                    '<div class="modal-body">' +
                                        '<div class="form-group">' +
                                            "<div>" +
                                                '<label for="htmlNewName-' + titleNewHtml + '">Nombre:</label>' +
                                                '<input type="text" value="" class="form-control" id="htmlNewName-' + titleNewHtml + '">' +
                                            "</div>" +
                                        "</div>" +
                                    "</div>" +
                                    '<div class="modal-footer">' +
                                        '<button type="button" class="btn btn-secondary" data-dismiss="modal" id="save-edit-html-' + titleNewHtml + '">Save</button>' +
                                        '<button type="button" class="btn btn-danger" data-dismiss="modal" id="cancel-edit-html-' + titleNewHtml + '">Cancel</button>' +
                                    "</div>" +
                                "</div>" +
                            "</div>" +
                          "</div>";
    return newModalEditHtml;
  };

  // Función para generar el html del modal para duplicar página
  getModalDuplicateHtml = function getModalDuplicateHtml(titleNewHtml) {
    // Agrego modal de Nuevo HTML
    var newModalEditHtml = '<div class="modal fade" id="duplicate-html-modal-' + titleNewHtml + '">' +
                            '<div class="modal-dialog">' +
                                '<div class="modal-content">' +
                                    '<div class="modal-header">' +
                                        '<h4 class="modal-title">Duplicar HTML</h4>' +
                                        '<button type="button" class="close" data-dismiss="modal">&times;</button>' +
                                    "</div>" +
                                    '<div class="modal-body">' +
                                        '<div class="form-group">' +
                                            "<div>" +
                                                '<label for="htmlDuplicateName-' + titleNewHtml + '">Nombre:</label>' +
                                                '<input type="text" value="" class="form-control" id="htmlDuplicateName-' + titleNewHtml + '">' +
                                            "</div>" +
                                        "</div>" +
                                    "</div>" +
                                    '<div class="modal-footer">' +
                                        '<button type="button" class="btn btn-secondary" data-dismiss="modal" id="save-duplicate-html-' + titleNewHtml + '">Save</button>' +
                                        '<button type="button" class="btn btn-danger" data-dismiss="modal" id="cancel-duplicate-html-' + titleNewHtml + '">Cancel</button>' +
                                    "</div>" +
                                "</div>" +
                            "</div>" +
                          "</div>";
    return newModalEditHtml;
  };

  // Función para generar el html del modal para confirmar eliminación de página
  getModalDeleteHtml = function getModalDeleteHtml(titleNewHtml) {
    // Agrego modal de Nuevo HTML
    var newModalEditHtml = '<div class="modal fade" id="delete-html-modal-' + titleNewHtml + '">' +
                            '<div class="modal-dialog">' +
                                '<div class="modal-content">' +
                                    '<div class="modal-header">' +
                                        '<h4 class="modal-title">Eliminar HTML</h4>' +
                                        '<button type="button" class="close" data-dismiss="modal">&times;</button>' +
                                    "</div>" +
                                    '<div class="modal-body">' +
                                        '<div class="form-group">' +
                                            "<div>" +
                                                "<label>¿Desea eliminar el html?</label>" +
                                            "</div>" +
                                        "</div>" +
                                    "</div>" +
                                    '<div class="modal-footer">' +
                                        '<button type="button" class="btn btn-secondary" data-dismiss="modal" id="confirm-delete-html-' + titleNewHtml + '">Confirm</button>' +
                                        '<button type="button" class="btn btn-danger" data-dismiss="modal" id="cancel-delete-html-' + titleNewHtml + '">Cancel</button>' +
                                    "</div>" +
                                "</div>" +
                            "</div>" +
                          "</div>";
    return newModalEditHtml;
  };

  removeEditor = function removeEditor(indexEditor, sender) {
    // Primero cuento cuántos editores activos tengo para evitar eliminar el editor si es que sólo tengo uno
    var countActiveEditors = 0;
    editorArray.forEach(function(editorComp) {
      countActiveEditors = countActiveEditors + (editorComp.Config.status === false ? 0 : 1);
    });
    if (countActiveEditors <= 1) {
      // Mensaje que no se puede eliminar el editor
      return;
    }

    if (editorArray[indexEditor]) {
      var editorToDelete = editorArray[indexEditor];
      var titleEditorToDelete = editorToDelete.Config.titleEditor;

      // Elimino la pestaña en todos los editores
      editorArray.forEach(function(editor) {
        $("#btn-" + editor.Config.titleEditor + "-" + titleEditorToDelete).remove();
      });

      // Elimino el div donde se encuentra el editor
      $("#gjs-" + titleEditorToDelete).remove();

      // Elimino el tag <a> del tab que abre el editor
      $("#a-gjs-" + titleEditorToDelete).remove();

      // Elimino los modal y paneles con el id del editor
      $("#info-panel-" + titleEditorToDelete).remove();
      $("#new-html-" + titleEditorToDelete).remove();
      $("#edit-html-" + titleEditorToDelete).remove();

      // Elimino el archivo html de la carpeta
      window.deleteHtml(titleEditorToDelete);

      // Desactivo el botón
      buttonTabs[indexEditor].status = false;

      // Desactivo el editor
      editorToDelete.Config.status = false;

      // Desactivo la opción dentro del array
      optsArray[indexEditor].status = false;

      // Coloco el primer editor (pestaña) que no tenga status false como activo
      //var indexNewActiveTab = editorToDelete.Config.indexEditor > 0 ? editorToDelete.Config.indexEditor - 1 : 1;
      var indexNewActiveTab = editorArray.findIndex(function(editorComp){ return editorComp.Config.status !== false; });
      var titleNewActiveEditor = editorArray[indexNewActiveTab].Config.titleEditor;
      var commands = editorArray[indexNewActiveTab].Commands;
      sender.attributes.titulo = titleNewActiveEditor;
      commands.get("change-tab").run(editorArray[indexNewActiveTab], sender);

      //Actualizo las opciones de modal a los botones y links
      for (var i = 0; i < editorArray.length - 1; i++) {
        if (editorArray[i].Config.status !== false) {
          var componentes = editorArray[i].getComponents().models;
          removeCompModalOptions(componentes, titleEditorToDelete + ".html");
        }
      }
    }
  };

  updateCompModalOptions = function updateCompModalOptions(componentes, newModalOption) {
    componentes.forEach(function(componente) {
      switch (componente.get("tagName")) {
        case "button":
        case "a":
          componente.updateModalOptions(newModalOption);
          break;
        default:
          break;
      }

      var comps = componente.get("components").models;
      if (comps.length > 0) {
        updateCompModalOptions(comps, newModalOption);
      }
    });
  };

  removeCompModalOptions = function removeCompModalOptions(componentes, modalOption) {
    componentes.forEach(function(componente) {
      switch (componente.get("tagName")) {
        case "button":
        case "a":
          componente.removeModalOption(modalOption);
          break;
        default:
          break;
      }

      var comps = componente.get("components").models;
      if (comps.length > 0) {
        removeCompModalOptions(comps, modalOption);
      }
    });
  };
};

// Exporto funcion
module.exports = init;
