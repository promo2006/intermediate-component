// Funcion de inicializacion de bloques
var init = function(opt = {}) {

    // Obtengo el editor
    var gjsEditor = opt.editor;

    // Obtengo constantes
    var consts = require("./consts");

    // Obtengo opciones
    const c = opt;
    const bm = gjsEditor.BlockManager;
    const pfx = c.countdownClsPfx;
    const style = c.defaultStyle ? `<style>
      .${pfx} {
        text-align: center;
        font-family: Helvetica, serif;
      }

      .${pfx}-block {
        display: inline-block;
        margin: 0 10px;
        padding: 10px;
      }

      .${pfx}-digit {
        font-size: 5rem;
      }

      .${pfx}-endtext {
        font-size: 5rem;
      }

      .${pfx}-cont,
      .${pfx}-block {
        display: inline-block;
      }
    </style>` : "";

    if (c.blocks.indexOf(consts.countdownRef) >= 0) {
        bm.add(consts.countdownRef, {
            label: c.labelCountdown,
            category: c.labelCountdownCategory,
            attributes: {class: "fa fa-clock-o"},
            content: `
            <div class="${pfx}" data-gjs-type="countdown"></div>
            ${style}
            `
        });
    }
};

// Exporto funcion
module.exports = init;
