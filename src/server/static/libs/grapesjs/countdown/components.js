// Funcion de inicializacion de componentes
var init = function(opt = {}) {

    // Obtengo el editor
    var gjsEditor = opt.editor;

    // Obtengo opciones
    const c = opt;
    const domc = gjsEditor.DomComponents;
    const defaultType = domc.getType("default");
    const textType = domc.getType("text");
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;
    const textModel = textType.model;
    const textView = textType.view;
    const pfx = c.countdownClsPfx;
    const COUNTDOWN_TYPE = "countdown";

    domc.addType(COUNTDOWN_TYPE, {

        model: defaultModel.extend({
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                // Traits por defecto
                startFrom: c.startTime,
                endText: c.endText,

                // No se puede droppear adentro del componente
                droppable: false,

                // Ajustes del componente
                traits: [{
                    label: "Start",
                    name: "startFrom",
                    changeProp: 1,
                    type: c.dateInputType,
                }, {
                    label: "End text",
                    name: "endText",
                    changeProp: 1,
                }],

                // Script a insertar asociado al componente
                script: function() {

                    /* Obtengo valores de traits del componente */
                    var startFrom = this.getAttribute("data-js-startfrom") || null;
                    var endText = this.getAttribute("data-js-endtext") || "EXPIRED";

                    /* Convierto fecha a objeto Date */
                    var countDownDate = new Date(startFrom).getTime();

                    /* Obtengo referencias a los elementos del componente */
                    var countdownEl = this.querySelector("[data-js=countdown]");
                    var endTextEl = this.querySelector("[data-js=countdown-endtext]");
                    var dayEl = this.querySelector("[data-js=countdown-day]");
                    var hourEl = this.querySelector("[data-js=countdown-hour]");
                    var minuteEl = this.querySelector("[data-js=countdown-minute]");
                    var secondEl = this.querySelector("[data-js=countdown-second]");

                    /* Obtengo y limpio objeto interval anterior si existe */
                    var oldInterval = this.gjs_countdown_interval;
                    if (oldInterval) clearInterval(oldInterval);

                    /* Funcion para actualizar valores del countdown */
                    var setTimer = function(days, hours, minutes, seconds) {
                        dayEl.innerHTML = days < 10 ? "0" + days : days;
                        hourEl.innerHTML = hours < 10 ? "0" + hours : hours;
                        minuteEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;
                        secondEl.innerHTML = seconds < 10 ? "0" + seconds : seconds ;
                    };

                    /* Funcion para obtener y actualizar valores */
                    var moveTimer = function() {
                        /* Obtengo valores a mostrar */
                        var now = new Date().getTime();
                        var distance = countDownDate - now;
                        var days = Math.floor(distance / 86400000);
                        var hours = Math.floor((distance % 86400000) / 3600000);
                        var minutes = Math.floor((distance % 360000) / 60000);
                        var seconds = Math.floor((distance % 60000) / 1000);

                        /* Actualizo valores */
                        setTimer(days, hours, minutes, seconds);

                        /* Si la cuenta se termino pongo el texto configurado */
                        if (distance < 0) {
                            clearInterval(interval);
                            endTextEl.innerHTML = endText;
                            countdownEl.style.display = "none";
                            endTextEl.style.display = "";
                        }
                    };

                    /* Si tengo fecha de expiracion configuro timer */
                    if (countDownDate) {
                        var interval = setInterval(moveTimer, 1000);
                        this.gjs_countdown_interval = interval;
                        endTextEl.style.display = "none";
                        countdownEl.style.display = "";
                        moveTimer();
                    } else {
                        setTimer(0, 0, 0, 0);
                    }
                }
            }),
        }, {
            isComponent(el) {
                // Busco el atributo que identifica al componente
                if (el.getAttribute && el.getAttribute("data-js-type") === COUNTDOWN_TYPE) {

                    // Resultado a devolver con datos del componente
                    var result = {
                        type: COUNTDOWN_TYPE
                    };

                    // Obtengo valores de traits del componente
                    var startFrom = el.getAttribute("data-js-startfrom");
                    var endText = el.getAttribute("data-js-endtext");

                    // Si obtuve traits los agrego
                    if (startFrom) result.startFrom = startFrom;
                    if (endText) result.endText = endText;

                    // Devuelvo resultado
                    return result;
                }
            },
        }),

        view: defaultView.extend({
            init() {
                // Asocio funcion handler a los cambios en los trait
                this.listenTo(this.model, "change:startFrom change:endText", this.onTraitsChange);

                // Obtengo los componentes del modelo
                const comps = this.model.get("components");

                // Si no esta ya inicializado agrego el bloque
                if (!comps.length) {
                    comps.reset();
                    comps.add(`
                        <span data-js="countdown" class="${pfx}-cont">
                            <div class="${pfx}-block">
                                <div data-js="countdown-day" class="${pfx}-digit"></div>
                                <div class="${pfx}-label">${c.labelDays}</div>
                            </div>
                            <div class="${pfx}-block">
                                <div data-js="countdown-hour" class="${pfx}-digit"></div>
                                <div class="${pfx}-label">${c.labelHours}</div>
                            </div>
                            <div class="${pfx}-block">
                                <div data-js="countdown-minute" class="${pfx}-digit"></div>
                                <div class="${pfx}-label">${c.labelMinutes}</div>
                            </div>
                            <div class="${pfx}-block">
                                <div data-js="countdown-second" class="${pfx}-digit"></div>
                                <div class="${pfx}-label">${c.labelSeconds}</div>
                            </div>
                        </span>
                        <span data-js="countdown-endtext" class="${pfx}-endtext"></span>
                    `);
                }
            },
            onTraitsChange: function onTraitsChange() {

                // Obtengo nuevos valores
                var startFrom = this.model.get("startFrom");
                var endText = this.model.get("endText");

                // Actualizo los atributos del objeto asociado al componente
                this.attr["data-js-startfrom"] = startFrom;
                this.attr["data-js-endtext"] = endText;

                // Actualizo el HTML del en el canvas, para que el cambio se impacte en el designer
                this.$el.attr("data-js-startfrom", startFrom);
                this.$el.attr("data-js-endtext", endText);

                // Actualizo script
                this.updateScript();
            },
        }),
    });
};

// Exporto funcion
module.exports = init;
