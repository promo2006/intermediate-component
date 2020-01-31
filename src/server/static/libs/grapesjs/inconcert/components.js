// Funcion de inicializacion de bloques
var init = function(opt2 = {}) {
  var c = opt2;
  // Obtengo el editor
  var gjsEditor = opt2.editor;
  // Get DomComponents module
  var comps = gjsEditor.DomComponents;

  // Get the model and the view from the default Component type
  var defaultType = comps.getType("default");
  var defaultModel = defaultType.model;
  var defaultView = defaultType.view;

  var inputTypes = [
    {value: "text", name: "Text"},
    {value: "email", name: "Email"},
    {value: "password", name: "Password"},
    {value: "number", name: "Number"},
  ];

  // The `input` will be the Component type ID
  comps.addType("modal", {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        // Can be dropped only inside `form` elements
        draggable: "form, form *",
        // Can"t drop other elements inside it
        droppable: false,
        // Se coloca en false para que no se muestren los modals en las capas
        layerable: false,
        // Traits (Settings)
        traits: ["name", "placeholder", {
            // Change the type of the input (text, password, email, etc.)
            type: "select",
            label: "Type",
            name: "type",
            options: inputTypes,
          }, {
            type: "checkbox",
            label: "Required",
            name: "required",
        }],
      }),
    },
    {
      isComponent: function(el) {
        if (el.tagName === "DIV" && el.classList && el.classList.contains && el.classList.contains("modal")) {
          return {type: "modal"};
        }
      },
    }),

    // Define the View
    view: defaultType.view,
  });

  // The `input` will be the Component type ID
  var Component = comps.getType("image").model;
  var ComponentView = comps.getType("image").view;
  var OComponentView = comps.getType("video").view;
  var OComponent = comps.getType("video").model;

  var yt = "yt";
  var vi = "vi";

  comps.addType("video", {
    // Define the Model
    model: Component.extend({
      // Extend default properties
      defaults: Object.assign({}, Component.prototype.defaults, {
        // Traits (Settings)
        type: "video",
        tagName: "video",
        videoId: "",
        startOn: "",
        void: 0,
        provider: "", // on change of provider, traits are switched
        ytUrl: "https://www.youtube.com/embed/",
        viUrl: "https://player.vimeo.com/video/",
        loop: 0,
        muted: 0,
        autoplay: 0,
        controls: 1,
        color: "",
        attributes: {allowfullscreen: "allowfullscreen"},
        suggestedVideos: 0,
        title: 0,
        privacyImprove: 0,
        sources: [],
        toolbar: OComponent.prototype.defaults.toolbar,
      }),
      initialize(o, opt) {
        var traits = [];
        var prov = this.get("provider");
        switch (prov) {
          case yt:
            traits = this.getYoutubeTraits();
            break;
          case vi:
            traits = this.getVimeoTraits();
            break;
          default:
            traits = this.getSourceTraits();
        }
        if (this.get("src"))
          this.parseFromSrc();
        this.set("traits", traits);
        //this.set("attributes", { allowfullscreen: "allowfullscreen", className: this.collection.config.pStylePrefix + "no-pointer", height: "100%", width: "100%"});
        Component.prototype.initialize.apply(this, arguments);
        this.listenTo(this, "change:provider", this.updateTraits);
        this.listenTo(this, "change:videoId", this.updateSrc);
      },
      initToolbar: function initToolbar() {
        for (var len = arguments.length, args = Array(len), key = 0; key < len; key++) {
          args[key] = arguments[key];
        }

        OComponent.prototype.initToolbar.apply(this, args);
      },
      parseFromSrc: function parseFromSrc() {
        var prov = this.get("provider");
        var uri = this.parseUri(this.get("src"));
        var qr = uri.query;
        switch (prov) {
          case yt: case vi:
            var videoId = uri.pathname.split("/").pop();
            this.set("videoId", videoId);
            if (qr.autoplay)
              this.set("autoplay", 1);
            if (qr.loop)
              this.set("loop", 1);
            if (parseInt(qr.controls) === 0)
              this.set("controls", 0);
            if (qr.color)
              this.set("color", qr.color);
            if (qr.rel === undefined)
              this.set("suggestedVideos", 1);
            if (qr.showinfo === undefined)
              this.set("title", 1);
            if (uri.hostname && uri.hostname.indexOf("-nocookie") > -1)
              this.set("privacyImprove", 1);
            if (qr.start)
              this.set("startOn", qr.start.toHHMMSS());
            break;
          default:
        }
      },
      parseUri: function parseUri(uri) {
        var el = document.createElement("a");
        el.href = uri;
        var query = {};
        var qrs = el.search.substring(1).split("&");
        for (var i = 0; i < qrs.length; i++) {
          var pair = qrs[i].split("=");
          var name = decodeURIComponent(pair[0]);
          if (name) query[name] = decodeURIComponent(pair[1]);
        }
        return {
          hostname: el.hostname,
          pathname: el.pathname,
          protocol: el.protocol,
          search: el.search,
          hash: el.hash,
          port: el.port,
          query: query
        };
      },
      updateSrc: function updateSrc() {
        var prov = this.get("provider");
        switch (prov) {
          case yt:
            this.set("src", this.getYoutubeSrc());
            break;
          case vi:
            this.set("src", this.getVimeoSrc());
            break;
          default:
            break;
        }
      },
      getAttrToHTML: function getAttrToHTML(...args) {
        var attr = Component.prototype.getAttrToHTML.apply(this, args);
        var prov = this.get("provider");
        switch (prov) {
          case yt: case vi:
            break;
          default:
            if (this.get("startOn"))
              attr.loop = "startOn";
            if (this.get("loop"))
              attr.loop = "loop";
            if (this.get("autoplay"))
              attr.autoplay = "autoplay";
            if (this.get("controls"))
              attr.controls = "controls";
            if (this.get("suggestedVideos"))
              attr.suggestedVideos = "suggestedVideos";
            if (this.get("title"))
              attr.title = "title";
            if (this.get("privacyImprove"))
              attr.title = "privacyImprove";
        }
        return attr;
      },
      updateTraits: function updateTraits() {
        var prov = this.get("provider");
        var traits = this.getSourceTraits();
        switch (prov) {
          case yt:
            this.set("tagName", "iframe");
            traits = this.getYoutubeTraits();
            break;
          case vi:
            this.set("tagName", "iframe");
            traits = this.getVimeoTraits();
            break;
          default:
            this.set("tagName", "video");
        }
        this.loadTraits(traits);
        this.em.trigger("change:selectedComponent");
      },
      getProviderTrait: function getProviderTrait() {
        return {
          type: "select",
          label: "Provider",
          name: "provider",
          changeProp: 1,
          value: this.get("provider"),
          options: [
            {value: "so", name: "HTML5 Source"},
            {value: yt, name: "Youtube"},
            {value: vi, name: "Vimeo"}
          ]
        };
      },
      getSourceTraits: function getSourceTraits() {
        return [
          this.getProviderTrait(), {
            label: "Source",
            name: "src",
            placeholder: "eg. ./media/video.mp4",
            changeProp: 1,
          },
          this.getAutoplayTrait(),
          this.getLoopTrait(),
          this.getControlsTrait()];
      },
      getYoutubeTraits: function getYoutubeTraits() {
        return [
          this.getProviderTrait(), {
            label: "Video ID",
            name: "videoId",
            placeholder: "eg. jNQXAC9IVRw",
            changeProp: 1,
          },
          this.getStartOnTrait(),
          this.getAutoplayTrait(),
          this.getLoopTrait(),
          this.getControlsTrait(),
          this.getSuggestedVideosTrait(),
          this.getTitleTrait(),
          this.getPrivacyImproveTrait()];
      },
      getVimeoTraits: function getVimeoTraits() {
        return [
          this.getProviderTrait(), {
            label: "Video ID",
            name: "videoId",
            placeholder: "eg. 123456789",
            changeProp: 1,
          }, {
            label: "Color",
            name: "color",
            placeholder: "eg. FF0000",
            changeProp: 1,
          },
          this.getAutoplayTrait(),
          this.getLoopTrait(),
          this.getControlsTrait()];
      },
      getStartOnTrait: function getStartOnTrait() {
        return {
          type: "textTime",
          label: "Start on",
          name: "startOn",
          changeProp: 1
        };
      },
      getAutoplayTrait: function getAutoplayTrait() {
        return {
          type: "checkbox",
          label: "Autoplay",
          name: "autoplay",
          changeProp: 1
        };
      },
      getLoopTrait: function getLoopTrait() {
        return {
          type: "checkbox",
          label: "Loop",
          name: "loop",
          changeProp: 1
        };
      },
      getControlsTrait: function getControlsTrait() {
        return {
          type: "checkbox",
          label: "Controls",
          name: "controls",
          changeProp: 1
        };
      },
      getSuggestedVideosTrait: function getSuggestedVideosTrait() {
        return {
          type: "checkbox",
          label: "Suggested Videos",
          name: "suggestedVideos",
          changeProp: 1
        };
      },
      getTitleTrait: function getTitleTrait() {
        return {
          type: "checkbox",
          label: "Title",
          name: "title",
          changeProp: 1
        };
      },
      getPrivacyImproveTrait: function getPrivacyImproveTrait() {
        return {
          type: "checkbox",
          label: "Privacy Improve",
          name: "privacyImprove",
          changeProp: 1
        };
      },
      getYoutubeSrc: function getYoutubeSrc() {
        var url = this.get("ytUrl");
        url = this.get("privacyImprove") ? url.replace("youtube.com", "youtube-nocookie.com") : url;
        url += this.get("videoId") + "?";
        url += this.get("autoplay") ? "&autoplay=1" : "";
        url += !this.get("controls") ? "&controls=0" : "";
        url += this.get("loop") ? "&loop=1" : "";
        url += !this.get("suggestedVideos") ? "&rel=0" : "";
        url += !this.get("title") ? "&showinfo=0" : "";
        if (this.get("startOn") && this.get("startOn") !== "00:00" && this.get("startOn") !== "00:00:00") {
          var startOnTime = this.get("startOn").split(":");
          var seconds = (+startOnTime[0]) * 60 * 60 + (+startOnTime[1]) * 60 + (+(startOnTime[2] === undefined ? "00" : startOnTime[2]));
          url += "&start=" + seconds;
        }
        return url;
      },
      getVimeoSrc: function getVimeoSrc() {
        var url = this.get("viUrl");
        url += this.get("videoId") + "?";
        url += this.get("autoplay") ? "&autoplay=1" : "";
        url += this.get("loop") ? "&loop=1" : "";
        url += !this.get("controls") ? "&title=0&portrait=0&badge=0" : "";
        url += this.get("color") ? "&color=" + this.get("color") : "";
        return url;
      },
    }, {
      isComponent: function(el) {
        var result = "";
        var isYtProv = /youtube[-nocookie]*\.com\/embed/.test(el.src);
        var isViProv = /player\.vimeo\.com\/video/.test(el.src);
        var isExtProv = isYtProv || isViProv;
        if (el.tagName === "VIDEO" ||
          (el.tagName === "IFRAME" && isExtProv) ) {
          result = {type: "video"};
          if (el.src)
            result.src = el.src;
          if (isExtProv) {
            if (isYtProv)
              result.provider = yt;
            else if (isViProv)
              result.provider = vi;
          }
        }
        return result;
      }
    }),

    // Define the View
    view: ComponentView.extend({
      tagName: "div",
      events: {},
      initialize() {
        OComponentView.prototype.initialize.apply(this, arguments);
        this.listenTo(this.model, "change:src", this.updateSrc);
        this.listenTo(this.model, "change:startOn change:loop change:autoplay change:controls change:color change:suggestedVideos change:title change:privacyImprove", this.updateVideo);
        this.listenTo(this.model, "change:provider", this.updateProvider);
      },
      updateProvider: function updateProvider() {
        var prov = this.model.get("provider");
        this.el.innerHTML = "";
        this.el.appendChild(this.renderByProvider(prov));
      },
      updateSrc: function updateSrc() {
        var prov = this.model.get("provider");
        var src = this.model.get("src");
        switch (prov) {
          case "yt":
            src = this.model.getYoutubeSrc();
            break;
          case "vi":
            src = this.model.getVimeoSrc();
            break;
          default:
            break;
        }
        this.videoEl.src = src;
      },
      updateVideo: function updateVideo() {
        var prov = this.model.get("provider");
        var videoEl = this.videoEl;
        var md = this.model;
        switch (prov) {
          case "yt":
          case "vi":
            this.model.trigger("change:videoId");
            break;
          default:
            videoEl.startOn = md.get("startOn");
            videoEl.loop = md.get("loop");
            videoEl.autoplay = md.get("autoplay");
            videoEl.controls = md.get("controls");
            videoEl.suggestedVideos = md.get("suggestedVideos");
            videoEl.title = md.get("title");
            videoEl.privacyImprove = md.get("privacyImprove");
        }
      },
      renderByProvider: function renderByProvider(prov) {
        var videoEl;
        switch (prov) {
          case "yt":
            videoEl = this.renderYoutube();
            break;
          case "vi":
            videoEl = this.renderVimeo();
            break;
          default:
            videoEl = this.renderSource();
        }
        this.videoEl = videoEl;
        return videoEl;
      },
      renderSource: function renderSource() {
        var el = document.createElement("video");
        el.src = this.model.get("src");
        this.initVideoEl(el);
        return el;
      },
      renderYoutube: function renderYoutube() {
        var el = document.createElement("iframe");
        el.src = this.model.getYoutubeSrc();
        el.frameBorder = 0;
        el.setAttribute("allowfullscreen", true);
        this.initVideoEl(el);
        return el;
      },
      renderVimeo: function renderVimeo() {
        var el = document.createElement("iframe");
        el.src = this.model.getVimeoSrc();
        el.frameBorder = 0;
        el.setAttribute("allowfullscreen", true);
        this.initVideoEl(el);
        return el;
      },
      initVideoEl(el) {
        el.className = this.ppfx + "no-pointer";
        el.style.height = "100%";
        el.style.width = "100%";
      },
      render(...args) {
        ComponentView.prototype.render.apply(this, args);
        this.updateClasses();
        var prov = this.model.get("provider");
        this.el.appendChild(this.renderByProvider(prov));
        return this;
      },
    }),
  });

/*********************************************************
 * Redefino componentes para que se puedan abrir popups
 *********************************************************/

  // Genero las opciones que se podrán abrir como popup
  var ComponentText = comps.getType("text").model;
  var ComponentTextView = comps.getType("text").view;
  var OComponentLinkView = comps.getType("link").view;
  var traitsLink = [];
  var traitsLinkNoModal = [];
  var traitsLinkModal = [];

  comps.addType("link", {
    // Define the Model
    model: ComponentText.extend({

      defaults: Object.assign({}, ComponentText.prototype.defaults, {
        type: "link",
        tagName: "a",
        "data-ic-popup": "",
        href: "",
        title: ""
      }),
      initialize: function initialize(o, opt) {
        this.updateTraits();
        if (this.get("data-ic-popup")) {
          this.set("traits", traitsLinkModal);
          this.set("targetTrait", "popup");
        } else
          this.set("traits", traitsLinkNoModal);

        ComponentText.prototype.initialize.apply(this, arguments);
        this.listenTo(this, "change:targetTrait", this.updateModal);
      },
      getAttrToHTML: function getAttrToHTML(...args) {
        const attr = ComponentText.prototype.getAttrToHTML.apply(this, args);
        delete attr.onmousedown;
        return attr;
      },
      updateModal: function updateModal() {
        var targetValue = this.get("targetTrait");

        this.updateTraits();

        var linkAttributes = {};
        if (this.getAttributes().title) linkAttributes.title = this.getAttributes().title;
        if (this.get("targetTrait") === "_blank") linkAttributes.target = this.get("targetTrait");

        if (targetValue === "popup") {
          this.loadTraits(traitsLinkModal);
          linkAttributes["data-ic-popup"] = optionsHtml[0].value;
        } else {
          this.loadTraits(traitsLinkNoModal);
        }
        this.em.trigger("change:selectedComponent");
        this.setAttributes(linkAttributes);
      },
      // Método para agregar la opción de Modal cuando se agrega un HTML en el diseño
      updateModalOptions: function (newOption) {
        // Actualizo el objeto traitsLinkModal con la nueva opción
        if (traitsLinkModal[2].options.findIndex(function(option){ return option.value === newOption.value; }) < 0)
          traitsLinkModal[2].options.push(newOption);
        // Actualizo las opciones del Modal si tiene seleccionado una página para hacer popup
        if (this.getAttributes()["data-ic-popup"]) {
          this.loadTraits(traitsLinkModal);
          this.em.trigger("change:selectedComponent");
        }
      },
      // Método para quitar una opción de Modal cuando se elimina un HTML en el diseño
      removeModalOption: function (modalOption) {
        // Actualizo el objeto traitsLinkModal sin la opción
        // Obtengo el index de la opción
        var indexOption = traitsLinkModal[2].options.findIndex(function(option){ return option.value === modalOption; });
        if (indexOption >= 0)
          traitsLinkModal[2].options.splice(indexOption, 1);
        // Actualizo las opciones del Modal si tiene seleccionado una página para hacer popup
        if (this.getAttributes()["data-ic-popup"]) {
          this.loadTraits(traitsLinkModal);
          this.em.trigger("change:selectedComponent");
        }
      },
      // Método para actualizar los traits para Modal y No Modal
      updateTraits: function() {
        var optionsTarget = [
          {value: "same", name: "This window"},
          {value: "_blank", name: "New window"},
          {value: "popup", name: "Popup"}
        ];

        // Armo los traits que va a utilizar el componente Link
        optionsHtml = [];
        optsArray.forEach(function (htmlPage) {
          if (htmlPage.status !== false) {
            var titleEditor = htmlPage.titleEditor + ".html";
            optionsHtml.push({value: titleEditor, name: titleEditor});
          }
        });
        modalOptions = {type: "select", label: "Modal", name: "data-ic-popup", options: optionsHtml};

        traitsLink = [];
        traitsLinkNoModal = [];
        traitsLinkModal = [];
        traitsLink = ["title", {type: "select", label: "Target", name: "targetTrait", options: optionsTarget, changeProp: 1}];

        traitsLinkNoModal = traitsLink.slice();
        traitsLinkNoModal.push("href");

        traitsLinkModal = traitsLink.slice();
        traitsLinkModal.push(modalOptions);
      }
    }, {
      isComponent: function isComponent(el) {
        var result = void 0;
        var avoidEdit = void 0;

        if (el.tagName === "A") {
          result = {
            type: "link",
            editable: 0
          };

          if (el.getAttribute("data-ic-popup")) result["data-ic-popup"] = el.getAttribute("data-ic-popup");
          if (el.getAttribute("target")) result.target = el.getAttribute("target");

          // The link is editable only if, at least, one of its
          // children is a text node (not empty one)
          var children = el.childNodes;
          var len = children.length;
          if (!len) delete result.editable;

          for (var i = 0; i < len; i++) {
            var child = children[i];

            if (child.nodeType === 3 && child.textContent.trim() !== "") {
              delete result.editable;
              break;
            }
          }
        }

        return result;
      }
    }),

    // Define the View
    view: ComponentTextView.extend({
      render(...args) {
        ComponentTextView.prototype.render.apply(this, args);

        // I need capturing instead of bubbling as bubbled clicks from other
        // children will execute the link event
        this.el.addEventListener("click", this.prevDef, true);

        return this;
      },
    })
  });

  var inputType = comps.getType("input");
  var inputModel = inputType.model;

  var traitsButton = [];
  var traitsButtonNoModal = [];
  var traitsButtonModal = [];

  comps.addType("button", {
    model: defaultModel.extend({
      defaults: Object.assign({}, inputModel.prototype.defaults, {
        "custom-name": c.labelButtonName,
        tagName: "button",
      }),
      initialize: function initialize(o, opt) {
        this.updateTraits();

        // Reemplazo el type por el valor del atributo "type" del tag button
        this.set("type", this.get("buttonType"));

        // Coloco los traits correctos de acuerdo al tipo de botón que se agregó
        if (this.get("type") === "button") {
          if (this.get("data-ic-popup")) {
            this.set("traits", traitsButtonModal);
            this.set("openPopup", true);
          } else this.set("traits", traitsButtonNoModal);
        } else this.set("traits", traitsButton);

        inputModel.prototype.initialize.apply(this, arguments);
        this.listenTo(this, "change:type", this.updateType);
        this.listenTo(this, "change:openPopup", this.updateModal);
      },
      updateType: function() {
        var buttonType = this.get("type");
        var id = this.getAttributes().id;

        this.updateTraits();

        // Agrego el atributo al tag
        var buttonAttributes = {};
        if (buttonType) buttonAttributes.type = buttonType;
        if (id) buttonAttributes.id = id;
        // Cambio los traits para button
        if (buttonType === "button") {
          this.loadTraits(traitsButtonNoModal);
          this.set("openPopup", false);
        } else {
          this.loadTraits(traitsButton);
        }
        this.em.trigger("change:selectedComponent");
        this.setAttributes(buttonAttributes);
      },
      updateModal: function() {
        var openPopup = this.get("openPopup");
        var buttonType = this.get("type");
        var id = this.getAttributes().id;

        // Formo los atributos que voy a colocar en el tag button
        var buttonAttributes = {};
        if (buttonType) buttonAttributes.type = buttonType;
        if (id) buttonAttributes.id = id;

        if (openPopup === true) {
          this.loadTraits(traitsButtonModal);
          buttonAttributes["data-ic-popup"] = optionsHtml[0].value;
        } else {
          this.loadTraits(traitsButtonNoModal);
        }
        this.em.trigger("change:selectedComponent");
        this.setAttributes(buttonAttributes);
      },
      // Método para agregar la opción de Modal cuando se agrega un HTML en el diseño
      updateModalOptions: function (newOption) {
        // Actualizo el objeto traitsButtonModal con la nueva opción
        if (traitsButtonModal[4].options.findIndex(function(option){ return option.value === newOption.value; }) < 0)
          traitsButtonModal[4].options.push(newOption);
        // Actualizo las opciones del Modal si tiene seleccionado una página para hacer popup
        if (this.getAttributes()["data-ic-popup"]) {
          this.loadTraits(traitsButtonModal);
          this.em.trigger("change:selectedComponent");
        }
      },
      // Método para quitar una opción de Modal cuando se elimina un HTML en el diseño
      removeModalOption: function (modalOption) {
        // Actualizo el objeto traitsLinkModal sin la opción
        // Obtengo el index de la opción
        var indexOption = traitsButtonModal[4].options.findIndex(function(option){ return option.value === modalOption; });
        if (indexOption >= 0)
          traitsButtonModal[4].options.splice(indexOption, 1);
        // Actualizo las opciones del Modal si tiene seleccionado una página para hacer popup
        if (this.getAttributes()["data-ic-popup"]) {
          this.loadTraits(traitsButtonModal);
          this.em.trigger("change:selectedComponent");
        }
      },
      // Método para armar los traits en cada cambio de opción o creación de un nuevo componente
      updateTraits: function () {
        // Armo los traits para el componente
        optionsHtml = [];
        optsArray.forEach(function (htmlPage) {
          if (htmlPage.status !== false) {
            var titleEditor = htmlPage.titleEditor + ".html";
            optionsHtml.push({value: titleEditor, name: titleEditor});
          }
        });
        modalOptions = {type: "select", label: "Modal", name: "data-ic-popup", options: optionsHtml};

        traitsButton = [
          {
            type: "text",
            label: "ID",
            name: "id"
          },
          {
            type: "content",
            label: "Text",
          },
          {
            label: c.labelTraitType,
            type: "select",
            name: "type",
            changeProp: 1,
            options: [
              {value: "submit", name: c.labelTypeSubmit},
              {value: "reset", name: c.labelTypeReset},
              {value: "button", name: c.labelTypeButton},
            ]
          }];

        traitsButtonNoModal = traitsButton.slice();
        traitsButtonNoModal.push({type: "checkbox", label: "Open Popup", name: "openPopup", changeProp: 1});

        traitsButtonModal = traitsButtonNoModal.slice();
        traitsButtonModal.push(modalOptions);
      }
    }, {
      isComponent(el) {
        var result = void 0;
        if (el.tagName === "BUTTON") {
          var buttonType = el.type ? el.type : "button";
          result = {
            type: "button",
            buttonType: buttonType
          };
          if (el.getAttribute("data-ic-popup")) result["data-ic-popup"] = el.getAttribute("data-ic-popup");
          return result;
        }
      },
    }),
    view: defaultView.extend({
      events: {
        "click": "handleClick"
      },

      init() {
        this.listenTo(this.model, "change:content", this.updateContent);
      },

      updateContent() {
        this.el.innerHTML = this.model.get("content");
      },

      handleClick(e) {
        e.preventDefault();
      },
    }),
  });
};

  // Función para convertir segundos a formato HH:MM:SS
String.prototype.toHHMMSS = function () {
  var secNum = parseInt(this, 10); // don"t forget the second param
  var hours   = Math.floor(secNum / 3600);
  var minutes = Math.floor((secNum - (hours * 3600)) / 60);
  var seconds = secNum - (hours * 3600) - (minutes * 60);

  if (hours   < 10) {hours   = "0" + hours; }
  if (minutes < 10) {minutes = "0" + minutes; }
  if (seconds < 10) {seconds = "0" + seconds; }
  return hours + ":" + minutes + ":" + seconds;
};

// Exporto funcion
module.exports = init;
