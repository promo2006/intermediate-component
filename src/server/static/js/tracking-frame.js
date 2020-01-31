// Obtengo o inicializo objeto compartido
var sharedObj = sharedObj || {};

// Defino y llamo a funcion encapsulada
(function(obj, location, navigator, document, window) {
    // Obtengo variables generales
    var trackingProtocol = obj.trackingProtocol;
    var trackingDomain = obj.trackingDomain;
    var trackingBasePath = obj.trackingBasePath;
    // Creo elemento iframe
    var iframe = document.createElement("iframe");
    iframe.id = "ic_frame";
    iframe.name = "ic_frame";
    iframe.style.height = "0px";
    iframe.style.width = "0px";
    iframe.style.border = "0px";
    iframe.style.position = "absolute";
    iframe.style.left = "0px";
    iframe.style.top = "0px";
    iframe.style.zIndex = "0";
    // Armo la url enviando todos los parametros que se van a necesitar
    iframe.src = (trackingProtocol && trackingDomain ? trackingProtocol + "://" + trackingDomain : "") + (trackingBasePath ? trackingBasePath : "") + "/public/tracking/frame.html?"
                + "a=" + (sharedObj.pageTitle || "") + "&"
                + "b=" + (encodeURIComponent(sharedObj.pageUrl) || "") + "&"
                + "c=" + (encodeURIComponent(sharedObj.pageReferrer) || "") + "&"
                + "d=" + ((sharedObj.adblock && sharedObj.adblock.toString()) || "false") + "&"
                + "e=" + ((sharedObj.doNotTrack && sharedObj.doNotTrack.toString()) || "false") + "&"
                + "f2=" + (sharedObj.currentProtocol || "") + "&"
                + "f=" + (sharedObj.currentDomain || "") + "&"
                + "g2=" + (sharedObj.trackingProtocol || "") + "&"
                + "g=" + (sharedObj.trackingDomain || "") + "&"
                + "h=" + (sharedObj.sourceId || "") + "&"
                + "i=" + (sharedObj.variantId || "") + "&"
                + "j=" + (sharedObj.contentType || "") + "&"
                + "k=" + (sharedObj.contentId || "") + "&"
                + "l=" + (sharedObj.templateId || "") + "&"
                + "m=" + (sharedObj.campaignId || "") + "&"
                + "n=" + (sharedObj.contactId || "") + "&"
                + "o=" + (sharedObj.clickSourceName || "") + "&"
                + "p=" + (sharedObj.clickIdName || "") + "&"
                + "q=" + (sharedObj.clickCampaignName || "") + "&"
                + "r=" + (sharedObj.clickAdGroupName || "") + "&"
                + "s=" + (sharedObj.clickKeywordName || "") + "&"
                + "t=" + (sharedObj.clickAdPositionName || "") + "&"
                + "u=" + ((sharedObj.isInternalContent && sharedObj.isInternalContent.toString()) || "false") + "&"
                + "v=" + ((sharedObj.isErrorPage && sharedObj.isErrorPage.toString()) || "false") + "&"
                + "w=" + (sharedObj.inboundPublicNumber || "") + "&"
                + "x=" + (sharedObj.inboundRoutedNumber || "") + "&"
                + "y=" + (sharedObj.trackingBasePath || "") + "&"
                + "z=" + (sharedObj.currentBasePath || "") + "&"
                + "ictid=" + (sharedObj.trackingId || "") + "&"
                + "rnd=" + Date.now().toString();
    // Agrego el iframe al body
    document.body.appendChild(iframe);

})(sharedObj, location, navigator, document, window);
