// Objeto contacto
var contact = {};

// Obtengo datos del contacto
try {
    contact = JSON.parse(sessionStorage.getItem("Contact"));
} catch (err) {
    console.log("Cannot obtain contact data");
    console.log(err);
}

// Controlo que no sean null
contact = contact || {};

// Armo la URL
var url = "https://ridness-weduceful.com/postback?cid=" + ((contact && contact.aff_id) || "") + "&payout=80";

// Envio el POST
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    //
};
xhttp.open("POST", url, true);
xhttp.send();
