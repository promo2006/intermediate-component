// Obtengo o inicializo objeto compartido
var sharedObj = sharedObj || {};

// Defino y llamo a funcion encapsulada
(function(obj, location, navigator, document, window) {

    // Obtengo variables generales
    var contentProtocol = obj.contentProtocol || location.protocol.replace(":", "");
    var contentDomain = obj.contentDomain || location.host;
    var contentBasePath = obj.contentBasePath;

    function loadCssStyle(url, where, success) {
        // Defino el tag link para cargar la libreria
        var link  = document.createElement("link");
        link.href = url;
        link.rel = "stylesheet";
        link.type = "text/css";
        // Flag para señalizar cuando se completo el load
        var done = false;
        // Asocio handler para manejar la respuesta
        link.onload = link.onreadystatechange = function() {
            if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                done = true;
                success();
                link.onload = link.onreadystatechange = null;
            }
        };
        // Elemento (head o body) donde se insertara el link
        var element;
        // Segun el caso lo inserto en diferentes partes del documento
        switch (where) {
            case "head-top":
                // Obtengo el elemento head
                element = document.getElementsByTagName("head")[0];
                // Le agrego el elemento creado antes del primer hijo
                element.insertBefore(link, element.firstChild);
                // Listo
                break;
            case "head-bottom":
                // Obtengo el elemento head
                element = document.getElementsByTagName("head")[0];
                // Lo agrego al final del head
                element.appendChild(link);
                // Listo
                break;
            case "body-top":
                // Obtengo el elemento body
                element = document.getElementsByTagName("body")[0];
                // Le agrego el elemento creado antes del primer hijo
                element.insertBefore(link, element.firstChild);
                // Listo
                break;
            case "body-bottom":
                // Obtengo el elemento body
                element = document.getElementsByTagName("body")[0];
                // Lo agrego al final del body
                element.appendChild(link);
                // Listo
                break;
            default:
                // No hago nada
                break;
        }
    }

    // Cargo el estilo css para modal
    loadCssStyle(contentProtocol + "://" + contentDomain + (contentBasePath ? contentBasePath : "") + "/static/css/modal.<%= STATIC_CSS_EXTENSION %>", "body-top", function() {

        // Armo el html del modal
        var html = "";
        html += "<div class=\"modal ic-modal fade\" id=\"icModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"icModalTitle\" aria-hidden=\"true\" style=\"display: none;\">";
        html += "  <div class=\"modal-dialog ic-modal-dialog\" role=\"document\">";
        html += "    <div class=\"ic-modal-content\">";
        html += "      <div class=\"ic-modal-header\">";
        html += "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"close\">";
        html += "          <span aria-hidden=\"true\">&times;</span>";
        html += "        </button>";
        html += "        <h4 class=\"ic-modal-title\" id=\"icModalTitle\">";
        html += "          ...";
        html += "        </h4>";
        html += "      </div>";
        html += "      <div class=\"ic-modal-body\" id=\"icModalBody\">";
        html += "        ...";
        html += "      </div>";
        html += "      <div class=\"ic-modal-footer\">";
        html += "        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" id=\"icModalCloseButton\">";
        html += "          OK";
        html += "        </button>";
        html += "      </div>";
        html += "    </div>";
        html += "  </div>";
        html += "</div>";
        // Creo un elemento div
        var div = document.createElement("div");
        // Le asocio el HTML del modal
        div.innerHTML = html;
        // Me quedo con el primer hijo para que el elemento sea directamente el inner
        div = div.firstChild;
        // Obtengo el elemento body
        var body = document.getElementsByTagName("body")[0];
        // Le agrego el elemento creado
        body.insertBefore(div, body.childNodes[1]);
    });

})(sharedObj, location, navigator, document, window);
