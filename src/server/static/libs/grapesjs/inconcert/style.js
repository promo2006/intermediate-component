// Funcion de inicializacion de gestor de estilos
var init = function(opt = {}) {

  // Obtengo el editor
  var gjsEditor = opt.editor;
  // Obtengo los sectores del style manager
  var sectors = gjsEditor.StyleManager.getSectors();

  // Al levantar el editor agrego los sectores configurados
  gjsEditor.on("load", function() {
    sectors.reset();
    sectors.add(opt.styleManagerSectors);
  });

  //  Evento de cambio en estilos (se dispara varias veces)
  gjsEditor.on("component:styleUpdate", function(item) {
      // Los estilos que se agregan van con el !important
      item.attributes.important = true;
  });
};

// Exporto funcion
module.exports = init;
