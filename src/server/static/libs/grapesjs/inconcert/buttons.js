// Funcion de inicializacion de botones
var init = function(opt = {}) {

  // Obtengo el editor
  var gjsEditor = opt.editor;
  // Obtengo los paneles del editor
  var pnm = gjsEditor.Panels;

  ///////////////////////////////////////////////////////
  // Botones del panel de opciones (los de la derecha) //
  ///////////////////////////////////////////////////////

  // Obtengo el panel de opciones
  var optPanel = pnm.getPanel("options");

  // Agrego boton de deshacer
  pnm.addButton("options", {
    id: "undo",
    className: "icon-designer icon-designer-undo",
    command: "undo",
    attributes: {title: opt.cmdBtnUndoLabel}
  });

  // Agrego boton de rehacer
  pnm.addButton("options", {
    id: "redo",
    className: "icon-designer icon-designer-redo",
    command: "redo",
    attributes: {title: opt.cmdBtnRedoLabel}
  });

  // Agrego boton de page settings
  pnm.addButton("options", {
    id: "open-info-" + opt.titleEditor,
    className: "icon-designer icon-designer-options dhx-pagesettings",
    command: function () {
      editor.runCommand("open-info");
    },
    command: "open-info",
    attributes: { title: opt.cmdBtnPageSett }
  });
  // Agrego boton de guardar cambios
  pnm.addButton("options", {
    id: opt.cmdSaveChanges,
    //className: "icon-designer icon-designer-save",
    className: "icon-designer icon-designer-save dhx-floppydisc-outline",
    command: opt.cmdSaveChanges,
    attributes: {title: opt.modalTitleSaveChanges},
  });

  // Agrego boton de descartar cambios
  pnm.addButton("options", {
    id: opt.cmdDiscardChanges,
    //className: "icon-designer icon-designer-delete",
    className: "icon-designer icon-designer-delete dhx-exit-outline",
    command: opt.cmdDiscardChanges,
    attributes: {title: opt.modalTitleDiscardChanges},
  });

  ///////////////////////////////////////////////////
  // Botones del panel de comandos (los del medio) //
  ///////////////////////////////////////////////////

  // Obtengo el panel de comandos
  var cmdPanel = pnm.getPanel("commands");

  // Verifico que se haya obtenido algo
  if (cmdPanel) {

    // Apago el combo por defecto para elegir dispositivo
    gjsEditor.getConfig().showDevices = 0;

    // Obtengo los botones del panel
    var cmdBtns = cmdPanel.get("buttons");

    // Limpio los botones existentes
    cmdBtns.reset();

    // Agrego botones para tamaño de pantalla por dispositivo
    cmdBtns.add([{
      id: "deviceGeneral",
      className: "icon-designer icon-designer-alldevices",
      command: "set-device-general",
      attributes: {title: opt.cmdBtnGeneralLabel},
      active: 1
    },
      {
      id: "deviceDesktop",
      className: "icon-designer icon-designer-desktop",
      command: "set-device-desktop",
      attributes: {title: opt.cmdBtnDesktopLabel},
      active: 1
    }, {
      id: "deviceTablet",
      className: "icon-designer icon-designer-tablet",
      command: "set-device-tablet",
      attributes: {title: opt.cmdBtnTabletLabel}
    }, {
      id: "deviceMobile",
      className: "icon-designer icon-designer-mobile",
      command: "set-device-mobile",
      attributes: {title: opt.cmdBtnMobileLabel}
    }, {
      id: "deviceMobileXS",
      className: "icon-designer icon-designer-mobile",
      command: "set-device-mobile-XS",
      attributes: {title: opt.cmdBtnMobileXSLabel}
    }]);

    //////////////////////////////////////////////////////
    // Panel para el logo de inConcert (a la izquierda) //
    //////////////////////////////////////////////////////

    // Agrego panel para el logo
    var panelLogo = pnm.addPanel({id: "logo"});

    //////////////////////////////////////////////////////
    // Panel para las tabs de los htmls //
    //////////////////////////////////////////////////////
    //var panelTabs = pnm.addPanel({id: "tabs"});
  }
};

// Exporto funcion
module.exports = init;
