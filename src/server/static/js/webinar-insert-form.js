// Obtengo o inicializo objeto compartido
var sharedObj = sharedObj || {};

// Defino y llamo a funcion encapsulada
(function(obj, location, navigator, document, window) {

    // Datos del webinar
    var memberid = "169105139238449518";
    var webicode = "a71596fb08";

    // Texto del boton de registración
    var registerButtonLabel = "¡Regístrate al Webinar!";

    // Contenedor donde se insertará el boton
    var containerSelector = "header.section-primera";

    // Codigo HTML a inyectar
    var html = '<div class="container">';
    html += '  <div class="row">';
    html += '    <div class="column">';
    html += '      <link href="//events.genndi.com/assets/css/register_button.css" rel="stylesheet">';
    html += '      <style type="text/css">';
    html += "      .embedded-joinwebinar-button .btn {";
    html += "          background-color: #6a3679;";
    html += "          border-color: transparent;";
    html += "          color: white;";
    html += "          transition: background-color 0.5s;";
    html += "          text-transform: none;";
    html += "          padding: 0;";
    html += "      }";
    html += "      .embedded-joinwebinar-button .btn:focus,";
    html += "      .embedded-joinwebinar-button .btn:hover {";
    html += "          background-color: #2cb686;";
    html += "          border-color: transparent;";
    html += "          color: white;";
    html += "      }";
    html += "      </style>";
    html += '      <div style="margin:auto;width:300px;">';
    html += '        <div class="embedded-joinwebinar-button">';
    html += '          <button type="button" class="btn btn-default css3button" title="regpopbox_' + memberid + "_" + webicode + '">';
    html += "            <span>" + registerButtonLabel + "</span>";
    html += "          </button>";
    html += "        </div>";
    html += "      </div>";
    html += '      <script src="//events.genndi.com/register.evergreen.extra.js" language="javascript" type="text/javascript" async><\/script>';
    html += '      <img src="//events.genndi.com/tracker?action=registration-evergreen&webicode=' + webicode + "&version=&memberid=" + memberid + '"';
    html += '    style="visibility:hidden; height:0px; width:0px; border:none;">';
    html += "    </div>";
    html += "  </div>";
    html += "</div>";

    // Funcion para inicializar el boton de webinar
    function initializeWebinar(jsLib) {
        // Meto todo dentro de bloque try catch por si el codigo tiene errores
        try {
            // Inyecto codigo en final del header
            jsLib(containerSelector).append(html);
        } catch (err) {
            // Algo fallo
            console.error(err);
        }
    }

    // Funcion para esperar a que incialice la libreria que carga jquery
    function whenJsLibAvailable(callback) {
        var interval = 10;
        var counter = 0;
        var checkLoop = function() {
            counter = counter + interval;
            if (obj && obj.jsLib) {
                callback(obj.jsLib);
            } else if (counter <= 10000) {
                window.setTimeout(checkLoop, interval);
            } else {
                console.error("Shared library failed to load... Click2call scripts wont initialize");
            }
        };
        window.setTimeout(checkLoop, interval);
    }

    // Me quedo esperando a que cargue la libreria shared
    whenJsLibAvailable(function(jsLib) {
        // Inicializo el boton de registracion del webinar
        initializeWebinar(jsLib);
    });

})(sharedObj, location, navigator, document, window);
