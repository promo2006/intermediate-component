// Funcion de inicializacion de bloques
var init = function(opt = {}) {

      // Obtengo el editor
      var gjsEditor = opt.editor;
      gjsEditor.TraitManager.addType("textTime", {
      events: {
            "keyup": "onChange",
      },
      getInputEl: function() {
            if (!this.inputEl) {
                  var input = document.createElement("input");
                  input.value = this.target.get(this.model.get("name"));
                  input.step = "2";
                  input.type = "time";
                  this.inputEl = input;
            }

            return this.inputEl;
      },
      onValueChange: function () {
            this.target.set(this.model.get("name"), this.model.get("value"));
            this.target.view.updateVideo();
      }
      });

};

// Exporto funcion
module.exports = init;
