grapesjs.plugins.add("icon-block", function(editor, opt = {}) {

  addIconComponent();

  function addIconComponent() {
    var defaultType = editor.DomComponents.getType("default");
    const c = opt;

    editor.DomComponents.addType("icon", {
      model: defaultType.model.extend({
        defaults: Object.assign({}, defaultType.model.prototype.defaults, {
          iconslist: c.icons,
          icon: c.icon,
          draggable: true,
          droppable: false,
          traits: [
            {
              type: "select",
              label: "Icon List",
              name: "iconslist",
              changeProp: 1,
              options: c.icons
            }],
          script: function() {
            //
          }
        }),

        init() {
          var icon = this.get("icon");
          //console.log("init", icon);
          this.listenTo(this, "change:iconslist", this.updateIcons);
        },
        updateIcons() {
          this.set("icon", this.get("iconslist"));
        },
      }, {
        isComponent: function(el) {
          if ($(el).hasClass("icon")) {
            return {type: "icon"};
          }
        }
      }),
      view: defaultType.view.extend({
        init() {
          //console.log("im here 2");
          this.listenTo(this.model, "change:icon", this.updateIcon);
          const comps = this.model.get("components");
          if (!comps.length) {
            comps.reset();
            comps.add(`
                <i data-js="icon" class="fa ${c.icon}"></i>
            `);
          }
        },
        updateIcon() {
           const icon = this.model.get("icon");
           //console.log("updateIcon", icon);
           this.el.innerHTML = `<i data-js="icon" class="fa ${icon}"></i>`;
        },
        render() {
             defaultType.view.prototype.render.apply(this);
             this.updateIcon();
             return this;
        }
      }),
    });

  }

});
