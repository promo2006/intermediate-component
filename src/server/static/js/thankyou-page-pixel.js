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
var url = "https://www.smart4ads.com/smart4ads/api/s2s.php?";
url += "accountid=2e3f6a67&";
url += "campaignid=ad8c4a6a&",
url += "totalcost=0&";
url += "actioncode=Totalplay_CPL_MX&";
url += "orderid=" + (contact.id || "") + "&";
url += "affiliateid=" + (contact.aff_sub || "");

// Creo e inserto el objeto img para insertar
var pixel = new Image();
pixel.width = "1";
pixel.height = "1";
pixel.alt = "";
pixel.title = "";
pixel.border = 0;
pixel.src = url;
