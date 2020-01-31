// Defino el plugin de grapesjs
grapesjs.plugins.add("gjs-component-countdown", (editor, opts) => {

    // Obtengo opciones
    let c = opts || {};

    // Asocio el editor a las opciones
    c.editor = editor;

    // Obtengo constantes
    var consts = require("./consts");

    // Opciones default del plugin
    let defaults = {

        // Bloques
        blocks: [
            consts.countdownRef
        ],

        // Default style
        defaultStyle: true,

        // Default start time, eg. "2018-01-25 00:00"
        startTime: "",

        // Text to show when the countdown is ended
        endText: "EXPIRED",

        // Date input type, eg, "date", "datetime-local"
        dateInputType: "date",

        // Countdown class prefix
        countdownClsPfx: "countdown",

        // Countdown label
        labelCountdown: "Countdown",

        // Countdown category label
        labelCountdownCategory: "Extra",

        // Days label text used in component
        labelDays: "days",

        // Hours label text used in component
        labelHours: "hours",

        // Minutes label text used in component
        labelMinutes: "minutes",

        // Seconds label text used in component
        labelSeconds: "seconds",
    };

    // Load defaults
    for (let name in defaults) {
        if (!(name in c))
            c[name] = defaults[name];
    }

    // Inicializo componentes
    var importComponents = require("./components");
    importComponents(c);

    // Inicializo bloques
    var importBlocks = require("./blocks");
    importBlocks(c);

});
