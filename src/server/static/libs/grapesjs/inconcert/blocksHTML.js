// Funcion de inicializacion de bloques
var init = function(opt = {}) {

        // Inicializo string para armar el objeto con las propiedades
        var tableStyleStr = "";
        var cellStyleStr = "";
        var rowStyleStr = "";

        // Obtengo el editor
        var gjsEditor = opt.editor;

        // Obtengo configuraciones para estilos de tabla y celda
        var tableStyle = opt.tableStyle || {};
        var cellStyle = opt.cellStyle || {};
        var rowStyle = opt.rowStyle || {};

        // Obtengo el block manager asociado al editor
        var bm = gjsEditor.BlockManager;

        // Armo las propiedades de estilo de la tabla de bloques
        for (var prop in tableStyle) {
          if (tableStyle.hasOwnProperty(prop))
            tableStyleStr += "${prop}: ${tableStyle[prop]}; ";
        }

        // Armo las propiedades de estilo de las celdas de bloques
        for (var prop in cellStyle) {
          if (cellStyle.hasOwnProperty(prop))
            cellStyleStr += "${prop}: ${cellStyle[prop]}; ";
        }

        // Armo las propiedades de estilo de las rows de la tabla
        for (var prop in rowStyle) {
            if (rowStyle.hasOwnProperty(prop))
            rowStyle += "${prop}: ${rowStyle[prop]}; ";
          }

        // Reinicio la lista de bloques
        bm.getAll().reset();

        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // Media Category Components //
        //////////////////////

        //////////////////
        // Bloque Image //
        //////////////////

        bm.add("image", {
          label: opt.imageBlkLabel,
          category: opt.categoryMedia,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-Image"},
          content: {
            name: `${opt.imageBlkLabel}`,
            type: "image",
            style: {color: "black"},
            activeOnRender: 1
          },
        });

        //////////////////
        // Bloque Video //
        //////////////////
        bm.add("video", {
          label: opt.videoBlkLabel,
          category: opt.categoryMedia,
          attributes: { class: "gjs-icon-block-label icon-blocks icon-block-Video"},
          content: {
            name: `${opt.videoBlkLabel}`,
            type: "video",
            provider: "",
            style: {
              height: "350px",
              width: "615px",
              background: "black",
            }
          },
        });

        //////////////////
        // Bloque Mapa //
        //////////////////
        bm.add("map", {
          label: opt.mapBlkLabel,
          category: opt.categoryMedia,
          attributes: { class: "gjs-icon-block-label icon-blocks icon-block-Map" },
          content: {
            name: `${opt.mapBlkLabel}`,
            type: "map",
            style: {
              height: "350px"
              }    },
        });

        //////////////////////
        // Bloque Countdown //
        //////////////////////
        bm.add("countdown", {
          label: opt.countdownBlkLabel,
          category: opt.categoryMedia,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-Countdown"},
          content: `
                    <div class="countdown dhx-countdown " data-gjs-type="countdown" data-js-type="countdown" data-gjs-custom-name="Countdown - Edit Time Here">
                      <div class="countdown-cont " data-js="countdown" data-gjs-custom-name="Countdown Container">
                        <div class="countdown-block " data-gjs-custom-name="Countdown Digit Box" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">
                          <div data-js="countdown-day" class="countdown-digit" data-gjs-custom-name="Countdown Digit" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">00</div>
                          <div class="countdown-label" data-gjs-custom-name="Countdown Label" data-gjs-draggable="false" data-gjs-droppable="false">${opt.labelDays}</div>
                        </div>
                        <div class="countdown-block " data-gjs-custom-name="Countdown Digit Box" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">
                          <div data-js="countdown-hour" class="countdown-digit" data-gjs-custom-name="Countdown Digit" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">00</div>
                          <div class="countdown-label" data-gjs-custom-name="Countdown Label" data-gjs-draggable="false" data-gjs-droppable="false">${opt.labelHours}</div>
                        </div>
                        <div class="countdown-block " data-gjs-custom-name="Countdown Digit Box" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">
                          <div data-js="countdown-minute" class="countdown-digit" data-gjs-custom-name="Countdown Digit" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">00</div>
                          <div class="countdown-label" data-gjs-custom-name="Countdown Label" data-gjs-draggable="false" data-gjs-droppable="false">${opt.labelMinutes}</div>
                        </div>
                        <div class="countdown-block " data-gjs-custom-name="Countdown Digit Box" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">
                          <div data-js="countdown-second" class="countdown-digit" data-gjs-custom-name="Countdown Digit" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">00</div>
                          <div class="countdown-label" data-gjs-custom-name="Countdown Label" data-gjs-draggable="false" data-gjs-droppable="false">${opt.labelSeconds}</div>
                        </div>
                      </div>
                      <div data-js="countdown-endtext" class="countdown-endtext" data-gjs-custom-name="${opt.countdownEndTextLabel}"></div>
                    </div>
          <style>
          .countdown {
            text-align: center;
          }
          .countdown-block {
            display: inline-block;
            margin: 0 10px;
            padding: 10px;
          }
          .countdown-digit {
            font-size: 5rem;
          }
          .countdown-endtext {
            font-size: 5rem;
          }
          .countdown-cont,
          .countdown-block {
            display: inline-block;
          }
          </style>`
        });

        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // FORM Category Components //
        //////////////////////

        ///////////////////
        // Bloque Basic Form //
        ///////////////////

        bm.add("basic-form", {
          label: opt.basicFormBlkLabel,
          category: opt.categoryForm,
          content: `<form data-gjs-custom-name="${opt.FormLabel}" action="" method="post" onsubmit="return false" class="form-box m-auto pt-1 pt-sm-3">
                        <div class="form-group row" data-gjs-custom-name="${opt.FormGroupLabel}">
                          <div class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                            <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" for="name-input">First Name</label>
                            <input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputFirstNameBlkLabel}"  placeholder="Eg. Peter" />
                          </div>
                          <div class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                            <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" for="name-input">Last Name</label>
                            <input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputLastNameBlkLabel}"  placeholder="Eg. Smith" />
                          </div>
                        </div>
                        <div class="form-group row" data-gjs-custom-name="${opt.FormGroupLabel}">
                          <div class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                            <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" for="phone-input">Phone Number</label>
                            <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}"  aria-describedby="phoneHelp" placeholder=" (00) 0000 0000"/>
                            <small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" id="phoneHelp" class="form-text text-muted">If mobile phone without 044/045.</small>
                          </div>
                          <div class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                            <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" for="email-input">Email</label>
                            <input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputEmailBlkLabel}"  aria-describedby="emailHelp" placeholder="Eg. name@email.com" />
                            <small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small>
                          </div>
                        </div>
                        <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success">Submit</button>
                        <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                          <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" data-gjs-draggable="form, form *">
                            <label data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                              <input data-ic-form-field="terms" id="terms-check" name="terms-check" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}"  type="checkbox" value=""  >I have read and accept the <a href="" data-gjs-custom-name="${opt.checkboxTermsBlkLabel} - ${opt.linkBlkLabel}">Terms and Conditions.</a>
                            </label>
                          </div>
                        </div>
                    </form>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-BasicForm"}
        });

        ///////////////////
        // Bloque Phone Form //
        ///////////////////

        bm.add("phone-form", {
          label: opt.phoneFormBlkLabel,
          category: opt.categoryForm,
          content: `<form data-gjs-custom-name="${opt.FormLabel}" action="" method="post" onsubmit="return false" class="form-box m-auto pt-1 pt-sm-3">
                        <h4>${opt.phoneFormTitleH4}</h4>
                        <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                          <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" for="phone-input">Phone Number</label>
                          <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}"  aria-describedby="phoneHelp" placeholder=" (00) 0000 0000"/>
                          <small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" id="phoneHelp" class="form-text text-muted">If mobile phone without 044/045.</small>
                        </div>
                        <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success">Submit</button>
                        <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                          <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" data-gjs-draggable="form, form *">
                            <label data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                              <input data-ic-form-field="terms" id="terms-check" name="terms-check" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}"  type="checkbox" value=""  >I have read and accept the <a href="" data-gjs-custom-name="${opt.checkboxTermsBlkLabel} - ${opt.linkBlkLabel}">Terms and Conditions.</a>
                            </label>
                          </div>
                        </div>
                    </form>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-BasicForm"}
        });

        ///////////////////
        // Bloque Contact Form //
        ///////////////////

        bm.add("contact-form", {
          label: opt.fullFormBlkLabel,
          category: opt.categoryForm,
          content: `<form action="" method="post" onsubmit="return false" class="form-box m-auto pt-1 pt-sm-3">
                      <h4 class="text-center">${opt.contactFormTitleH4}</h4>
                      <p class="text-center">${opt.contactFormTextp}</p>
                      <div class="form-group row" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <div class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                          <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" for="name-input">First Name</label>
                          <input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputFirstNameBlkLabel}"  placeholder="Eg. Peter" />
                        </div>
                        <div class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                          <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" for="name-input">Last Name</label>
                          <input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputLastNameBlkLabel}"  placeholder="Eg. Smith" />
                        </div>
                      </div>
                      <div class="form-group row" data-gjs-custom-name="${opt.FormGroupLabel}">
                          <div class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                            <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" for="phone-input">Phone Number</label>
                            <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}"  aria-describedby="phoneHelp" placeholder=" (00) 0000 0000"/>
                            <small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" id="phoneHelp" class="form-text text-muted">If mobile phone without 044/045.</small>
                          </div>
                          <div class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                            <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" for="email-input">Email</label>
                            <input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputEmailBlkLabel}"  aria-describedby="emailHelp" placeholder="Eg. name@email.com" />
                            <small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small>
                          </div>
                      </div>
                      <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" for="textarea">Textarea</label>
                        <textarea data-gjs-custom-name="${opt.FormLabel} - ${opt.textareaBlkLabel}"  id="comments" rows="3"></textarea>
                      </div>
                      <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success">Submit</button>
                      <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" data-gjs-draggable="form, form *">
                          <label data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                            <input data-ic-form-field="terms" id="terms-check" name="terms-check" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}"  type="checkbox" value=""  >I have read and accept the <a href="" data-gjs-custom-name="${opt.checkboxTermsBlkLabel} - ${opt.linkBlkLabel}">Terms and Conditions.</a>
                          </label>
                        </div>
                      </div>
                    </form>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-FullForm"}
        });

        //////////////////////
        // Bloque Label //
        /////////////////////
        bm.add("label", {
          label: opt.labelBlkLabel,
          category: opt.categoryFormComp,
          content: `<label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *">Label</label>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Flabel"}
        });

        //////////////////////
        // Bloque Aclaration //
        /////////////////////
        bm.add("aclaration", {
          label: opt.FormAclarationsLabel,
          category: opt.categoryFormComp,
          content: `<small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" data-gjs-droppable="form, form *" id="emailHelp">We will never share your email with anyone else.</small>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Flabel"}
        });

        //////////////////////
        // Bloque Input - Type Email //
        /////////////////////
        bm.add("input-email", {
          label: `${opt.inputBlkLabel} ${opt.inputEmailBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="email-input" >${opt.inputEmailBlkLabel}</label>
                      <input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputEmailBlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Title //
        /////////////////////
        bm.add("input-title", {
          label: `${opt.inputBlkLabel} ${opt.inputTitleBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="title-input" >${opt.inputTitleBlkLabel}</label>
                      <input type="text" data-ic-form-field="title" id="title-input" name="title-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputTitleBlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type First Name //
        /////////////////////
        bm.add("input-firstname", {
          label: `${opt.inputBlkLabel} ${opt.inputFirstNameBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="firstname-input" >${opt.inputFirstNameBlkLabel}</label>
                      <input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputFirstNameBlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Last Name //
        /////////////////////
        bm.add("input-lastname", {
          label: `${opt.inputBlkLabel} ${opt.inputLastNameBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="lastname-input" >${opt.inputLastNameBlkLabel}</label>
                      <input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputLastNameBlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Company //
        /////////////////////
        bm.add("input-company", {
          label: `${opt.inputBlkLabel} ${opt.inputCompanyBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputCompanyBlkLabel}</label>
                      <input type="text" data-ic-form-field="company" id="company-input" name="company-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputCompanyBlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Position //
        /////////////////////
        bm.add("input-position", {
          label: `${opt.inputBlkLabel} ${opt.inputPositionBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputPositionBlkLabel}</label>
                      <input type="text" data-ic-form-field="position" id="position-input" name="position-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPositionBlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Tel //
        /////////////////////
        bm.add("input-tel", {
          label: `${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputPhoneBlkLabel}</label>
                      <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Mobile //
        /////////////////////
        bm.add("input-mobile", {
          label: `${opt.inputBlkLabel} ${opt.inputMobileBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputMobileBlkLabel}</label>
                      <input type="tel" data-ic-form-field="mobile" id="mobile-input" name="mobile-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputMobileBlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Fax //
        /////////////////////
        bm.add("input-fax", {
          label: `${opt.inputBlkLabel} ${opt.inputFaxBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputFaxBlkLabel}</label>
                      <input type="tel" data-ic-form-field="fax" id="fax-input" name="fax-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputFaxBlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Website //
        /////////////////////
        bm.add("input-website", {
          label: `${opt.inputBlkLabel} ${opt.inputWebsiteBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputWebsiteBlkLabel}</label>
                      <input type="url" data-ic-form-field="website" id="website-input" name="website-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputWebsiteBlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Address1 //
        /////////////////////
        bm.add("input-address1", {
          label: `${opt.inputBlkLabel} ${opt.inputAddress1BlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputAddress1BlkLabel}</label>
                      <input type="text" data-ic-form-field="address1" id="address1-input" name="address1-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputAddress1BlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Address2 //
        /////////////////////
        bm.add("input-address2", {
          label: `${opt.inputBlkLabel} ${opt.inputAddress2BlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputAddress2BlkLabel}</label>
                      <input type="text" data-ic-form-field="address2" id="address2-input" name="address2-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputAddress2BlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Country //
        /////////////////////
        bm.add("input-country", {
          label: `${opt.inputBlkLabel} ${opt.inputCountryBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputCountryBlkLabel}</label>
                      <input type="text" data-ic-form-field="country" id="country-input" name="country-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputCountryBlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Select Country //
        /////////////////////
        bm.add("select-country", {
          label: `${opt.selectBlkLabel} ${opt.inputCountryBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputCountryBlkLabel}</label>
                      <select data-gjs-custom-name="${opt.FormLabel} - ${opt.selectBlkLabel} ${opt.inputCountryBlkLabel}"  data-ic-form-field="country" id="country-select" name="country-select" >
                        <option data-gjs-custom-name="${opt.selectBlkLabel} - ${opt.labelOption}" value="Mexico">Mexico</option>
                        <option data-gjs-custom-name="${opt.selectBlkLabel} - ${opt.labelOption}" value="USA">USA</option>
                        <option data-gjs-custom-name="${opt.selectBlkLabel} - ${opt.labelOption}" value="Spain">Spain</option>
                      </select>
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Fselect"}
        });

        //////////////////////
        // Bloque Input - Type State //
        /////////////////////
        bm.add("input-state", {
          label: `${opt.inputBlkLabel} ${opt.inputStateBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputStateBlkLabel}</label>
                      <input type="text" data-ic-form-field="state" id="state-input" name="state-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputStateBlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Select State //
        /////////////////////
        bm.add("select-state", {
          label: `${opt.selectBlkLabel} ${opt.inputStateBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputStateBlkLabel}</label>
                      <select data-gjs-custom-name="${opt.FormLabel} - ${opt.selectBlkLabel} ${opt.inputStateBlkLabel}"  data-ic-form-field="state" id="state-select" name="state-select" >
                        <option data-gjs-custom-name="${opt.selectBlkLabel} - ${opt.labelOption}" value="aguascalientes">Aguascalientes</option>
                        <option data-gjs-custom-name="${opt.selectBlkLabel} - ${opt.labelOption}" value="bajaCalif">Baja California</option>
                        <option data-gjs-custom-name="${opt.selectBlkLabel} - ${opt.labelOption}" value="campeche">Campeche</option>
                      </select>
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Fselect"}
        });

        //////////////////////
        // Bloque Input - Type City //
        /////////////////////
        bm.add("input-city", {
          label: `${opt.inputBlkLabel} ${opt.inputCityBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputCityBlkLabel}</label>
                      <input type="text" data-ic-form-field="city" id="city-input" name="city-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputCityBlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Select City //
        /////////////////////
        bm.add("select-city", {
          label: `${opt.selectBlkLabel} ${opt.inputCityBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputCityBlkLabel}</label>
                      <select data-gjs-custom-name="${opt.FormLabel} - ${opt.selectBlkLabel} ${opt.inputCityBlkLabel}"  data-ic-form-field="city" id="city-select" name="city-select" >
                        <option data-gjs-custom-name="${opt.selectBlkLabel} - ${opt.labelOption}" value="ensenada">Ensenada</option>
                        <option data-gjs-custom-name="${opt.selectBlkLabel} - ${opt.labelOption}" value="mexicali">Mexicali</option>
                        <option data-gjs-custom-name="${opt.selectBlkLabel} - ${opt.labelOption}" value="tijuana">Tijuana</option>
                      </select>
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Fselect"}
        });

        //////////////////////
        // Bloque Input - Type Zip //
        /////////////////////
        bm.add("input-zip", {
          label: `${opt.inputBlkLabel} ${opt.inputZipBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputZipBlkLabel}</label>
                      <input type="text" data-ic-form-field="zip" id="zip-input" name="zip-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputZipBlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type facebook //
        /////////////////////
        bm.add("input-facebook", {
          label: `${opt.inputBlkLabel} ${opt.inputFacebookBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputFacebookBlkLabel}</label>
                      <input type="text" data-ic-form-field="facebook" id="facebook-input" name="facebook-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputFacebookBlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type twitter //
        /////////////////////
        bm.add("input-twitter", {
          label: `${opt.inputBlkLabel} ${opt.inputTwitterBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputTwitterBlkLabel}</label>
                      <input type="text" data-ic-form-field="twitter" id="twitter-input" name="twitter-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputTwitterBlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type skype //
        /////////////////////
        bm.add("input-skype", {
          label: `${opt.inputBlkLabel} ${opt.inputSkypeBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputSkypeBlkLabel}</label>
                      <input type="text" data-ic-form-field="skype" id="skype-input" name="skype-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputSkypeBlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type googlePlus //
        /////////////////////
        bm.add("input-googlePlus", {
          label: `${opt.inputBlkLabel} ${opt.inputGooglePlusBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputGooglePlusBlkLabel}</label>
                      <input type="text" data-ic-form-field="googlePlus" id="googlePlus-input" name="googlePlus-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputGooglePlusBlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type linkedin //
        /////////////////////
        bm.add("input-linkedin", {
          label: `${opt.inputBlkLabel} ${opt.inputLinkedinBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputLinkedinBlkLabel}</label>
                      <input type="text" data-ic-form-field="linkedin" id="linkedin-input" name="linkedin-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputLinkedinBlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type instagram //
        /////////////////////
        bm.add("input-instagram", {
          label: `${opt.inputBlkLabel} ${opt.inputInstagramBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputInstagramBlkLabel}</label>
                      <input type="text" data-ic-form-field="instagram" id="instagram-input" name="instagram-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputInstagramBlkLabel}"  />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Select Language //
        /////////////////////
        bm.add("select-language", {
          label: `${opt.selectBlkLabel} ${opt.inputLanguageBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.inputLanguageBlkLabel}</label>
                      <select data-gjs-custom-name="${opt.FormLabel} - ${opt.selectBlkLabel} ${opt.inputLanguageBlkLabel}"  data-ic-form-field="language" id="language-select" name="language-select" >
                        <option data-gjs-custom-name="${opt.selectBlkLabel} - ${opt.labelOption}" value="english">English</option>
                        <option data-gjs-custom-name="${opt.selectBlkLabel} - ${opt.labelOption}" value="spanish">Spanish</option>
                        <option data-gjs-custom-name="${opt.selectBlkLabel} - ${opt.labelOption}" value="portuguese">Portuguese</option>
                      </select>
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Fselect"}
        });

        //////////////////////
        // Bloque radiobtn Language//
        /////////////////////
        bm.add("radio-language", {
          label: `${opt.radioBlkLabel} ${opt.inputLanguageBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel} - ${opt.radioBlkLabel} ${opt.inputLanguageBlkLabel}">
                      <label data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *">
                        <input data-ic-form-field="language" id="language-radio-1" name="languageRadio" data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.buttonLabel}"  type="radio" value="english" > English
                      </label>
                      <label data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *">
                        <input data-ic-form-field="language" id="language-radio-2" name="languageRadio" data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.buttonLabel}"  type="radio" value="spanish" > Spanish
                      </label>
                      <label data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *">
                        <input data-ic-form-field="language" id="language-radio-3" name="languageRadio" data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.buttonLabel}"  type="radio" value="french" > French
                      </label>
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Fradio"}
        });

        //////////////////////
        // Bloque checkbox Language//
        /////////////////////
        bm.add("checkbox-language", {
          label: `${opt.checkboxBlkLabel} ${opt.inputLanguageBlkLabel}`,
          category: opt.categoryFormComp,
          content: `  <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" data-gjs-draggable="form, form *">
                          <label data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                            <input data-ic-form-field="language" id="language-en" name="language-en" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}"  type="checkbox" value="" > English
                          </label>
                        </div>
                        <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" data-gjs-draggable="form, form *">
                          <label data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                            <input data-ic-form-field="language" id="language-es" name="language-es" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}"  type="checkbox" value="" >Spanish
                          </label>
                        </div>
                        <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" data-gjs-draggable="form, form *">
                          <label data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                            <input data-ic-form-field="language" id="language-fr" name="language-fr" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}"  type="checkbox" value="" >French
                          </label>
                        </div>
                      </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Fcheckbox"}
        });

        //////////////////////
        // Bloque checkbox Términos //
        /////////////////////
        bm.add("checkbox-terms", {
          label: opt.checkboxTermsBlkLabel,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" data-gjs-draggable="form, form *">
                        <label data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                          <input data-ic-form-field="terms" id="terms-check" name="terms-check" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}"  type="checkbox" value=""  >I have read and accept the <a href="" data-gjs-custom-name="${opt.checkboxTermsBlkLabel} - ${opt.linkBlkLabel}">Terms and Conditions.</a>
                        </label>
                      </div>
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-FTermCheck"}
        });

        ///////////////////
        // Bloque Textarea //
        ///////////////////

        bm.add("textarea", {
          label: opt.textareaBlkLabel,
          category: opt.categoryFormComp,
          content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" data-gjs-draggable="form, form *" for="company-input" >${opt.textareaBlkLabel}</label>
                      <textarea data-gjs-custom-name="${opt.FormLabel} - ${opt.textareaBlkLabel}"  id="comments" rows="3"></textarea>
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Ftextarea"}
        });

        ///////////////////
        // Bloque Button Send //
        ///////////////////

        bm.add("button-send", {
          label: opt.buttonSendBlkLabel,
          category: opt.categoryFormComp,
          content: `<button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit">Send</button>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-FbtnSend"}
        });

        ///////////////////
        // Bloque Button Erase //
        ///////////////////

        bm.add("button-reset", {
          label: opt.buttonResetBlkLabel,
          category: opt.categoryFormComp,
          content: `<button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonResetBlkLabel}" type="reset">Erase</button>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-FbtnErase"}
        });

        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // Contenido Category Components //
        //////////////////////

        // HTML ///
        bm.add("html-code", {
          label: opt.HtmlCodeBlkLabel,
          category: opt.categoryContent,
          content: "<div data-html-code>Edit my HTML content</div>",
          command: "open-html-code-editor",
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Code"}
        });

        /////////////////////////
        // Box / Empty div //
        /////////////////////////

        bm.add("box-div", {
          label: opt.BoxDivSectionBlkLabel,
          category: opt.categoryContent,
          content: `<div class="empty-div"></div> <style>.empty-div{min-height:50px;}</style>`,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-FullW1"}
        });

        /////////////////
        // Bloque Text //
        /////////////////

        bm.add("text", {
          label: opt.textBlkLabel,
          category: opt.categoryContent,
          content: {
            type: "text",
            content: "Insert your text here",
            activeOnRender: 1
          },
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Text"},
        });

        /////////////////////////
        // Bloque Text Section //
        /////////////////////////

        bm.add("text-sect", {
          label: opt.textSectionBlkLabel,
          category: opt.categoryContent,
          content: "<h1>Insert title here</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>",
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-TextBlock"}
        });

        //////////////////
        // Bloque Quote //
        //////////////////

        bm.add("quote", {
          label: opt.quoteBlkLabel,
          category: opt.categoryContent,
          content: '<blockquote data-gjs-droppable="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</blockquote>',
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Blockquote"}
        });

        /////////////////
        // Bloque Link //
        /////////////////

        bm.add("link", {
          label: opt.linkBlkLabel,
          category: opt.categoryContent,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Link"},
          content: {
            type: "link",
            content: "Link"
          },
        });

        ///////////////////////
        // Bloque Link Block //
        ///////////////////////

        bm.add("link-block", {
          label: opt.linkBlockBlkLabel,
          category: opt.categoryContent,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-LinkBlock"},
          content: {
            type: "link",
            editable: false,
            droppable: true,
            style: {
              display: "inline-block",
              padding: "5px",
              "min-height": "50px",
              "min-width": "50px"
            }
          },
        });

        ////////////////////
        // Bloque Divider //
        ////////////////////

        bm.add("divider", {
          label: opt.dividerBlkLabel,
          category: opt.categoryContent,
          content: {
                    content: '<div class="divider"> </div>',
                    droppable: false,
                    style: {"border-top": "1px solid rgba(0,0,0,0.7)", height: "10px", width: "90%", margin: "10px auto 0px auto"}
                   },
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Divider"}
        });

        //////////////////
        // Bloque Phone Number//
        ///////////////////
        bm.add("phone-number", {
          label: opt.phoneNumberBlkLabel,
          category: opt.categoryContent,
          content: `<p class="ic-phone-number" data-gjs-editable="false">01 800 000</p>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-PhoneNumber"},
        });

        //////////////////
        // Bloque Phone Link//
        ///////////////////
        bm.add("phone-link", {
          label: opt.phoneLinkBlkLabel,
          category: opt.categoryContent,
          content: `<a href="tel:01 800 000" class="ic-phone-link ic-phone-number" data-gjs-editable="false">01 800 000</a>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-PhoneLink"},
        });

        //////////////////
        // Bloque Routed Phone Number//
        ///////////////////
        bm.add("routed-phone-number", {
          label: opt.routedPhoneNumberBlkLabel,
          category: opt.categoryContent,
          content: `<p class="ic-routed-number" data-gjs-editable="false">01 800 000</p>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-RoutedNumber"},
        });

        //////////////////
        // Bloque Routed Phone Link//
        ///////////////////
        bm.add("routed-phone-link", {
          label: opt.routedPhoneLinkBlkLabel,
          category: opt.categoryContent,
          content: `<a href="tel:01 800 000" class="ic-routed-link ic-routed-number" data-gjs-editable="false">01 800 000</a>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-RoutedLink"},
        });

        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // Lists/Tablas Category Components //
        //////////////////////

        ///////////////////////
        // Bloque Listas //
        ///////////////////////

        var listItem =
          `
          <li data-gjs-droppable="i" data-gjs-draggable=".list-body">List Item 01</li>
          <li data-gjs-droppable="i" data-gjs-draggable=".list-body">List Item 02</li>
          <li data-gjs-droppable="i" data-gjs-draggable=".list-body">List Item 03</li>`;

        var listDescItem =
          `
          <dt data-gjs-droppable="i" data-gjs-draggable=".list-desc-body">Name</dt>
          <dd data-gjs-droppable="i" data-gjs-draggable=".list-desc-body">Description</dd>`;

        bm.add("list-ordered", {
          label: opt.listOrderedBlkLabel,
          category: opt.categoryList,
          content: `<ol class="list-body" data-gjs-custom-name="${opt.listOrderedBlkLabel}">${listItem}${listItem}</ol>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-listOrdered"}
        });

        bm.add("list-Unordered", {
          label: opt.listUnorderedBlkLabel,
          category: opt.categoryList,
          content: `<ul class="list-body" data-gjs-custom-name="${opt.listUnorderedBlkLabel}">${listItem}${listItem}</ul>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-listUnordered"}
        });

        bm.add("list-Description", {
          label: opt.listDescriptionBlkLabel,
          category: opt.categoryList,
          content: `<dl class="list-desc-body"  data-gjs-custom-name="${opt.listDescriptionBlkLabel}">${listDescItem}${listDescItem}${listDescItem}</dl>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-listDescription"}
        });

        bm.add("list-items", {
          label: opt.listItemsBlkLabel,
          category: opt.categoryList,
          content: `${listItem}`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-listItem"}
        });

        bm.add("list-description-items", {
          label: opt.listDescItemsBlkLabel,
          category: opt.categoryList,
          content: `${listDescItem}`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-listDescItem"}
        });

      ///////////////////////
      // Bloque Tablas //
      ///////////////////////
        var tableCell =
          `<td>Table Cell 01</td>`;
        var tableCellTitle =
          `<th>Table Cell Title</th>`;

        bm.add("table", {
          label: opt.tableBlkLabel,
          category: opt.categoryList,
          content: `
          <div  data-gjs-custom-name="${opt.tableBlkLabel} ${opt.ContainerLabel}">
            <table  data-gjs-custom-name="${opt.tableBlkLabel}">
              <tr> ${tableCellTitle} ${tableCellTitle} ${tableCellTitle} ${tableCellTitle} </tr>
                <tr > ${tableCellTitle} ${tableCell} ${tableCell} ${tableCell} </tr>
                <tr> ${tableCellTitle} ${tableCell} ${tableCell} ${tableCell} </tr>
                <tr> ${tableCellTitle} ${tableCell} ${tableCell} ${tableCell} </tr>
              </table>
          </div>
          `,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-table"}
        });

      ///////////////////////////////
      // Icons Category Components //
      ///////////////////////////////

      //////////////////
      // Bloque Ícono //
      //////////////////
        bm.add("icono-chevron-up", {
        label: opt.chevronUpSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.IconBlkLabel} ${opt.chevronUpSectionBlkLabel}" class='fas fa-chevron-up' ></i>`,
        attributes: {class: "gjs-icon-label fas fa-chevron-up"}
      });

        bm.add("icono-chevron-right", {
        label: opt.chevronRightSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.IconBlkLabel} ${opt.chevronRightSectionBlkLabel}" class='fas fa-chevron-right' ></i>`,
        attributes: {class: "gjs-icon-label fas fa-chevron-right"}
      });

        bm.add("icono-chevron-down", {
        label: opt.chevronDownSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.IconBlkLabel} ${opt.chevronDownSectionBlkLabel}" class='fas fa-chevron-down' ></i>`,
        attributes: {class: "gjs-icon-label fas fa-chevron-down"}
      });

        bm.add("icono-chevron-left", {
        label: opt.chevronLeftSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.IconBlkLabel} ${opt.chevronLeftSectionBlkLabel}" class='fas fa-chevron-left' ></i>`,
        attributes: {class: "gjs-icon-label fas fa-chevron-left"}
      });

        bm.add("icono-angleDouble-up", {
        label: opt.angleDoubleUpSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.IconBlkLabel} ${opt.angleDoubleUpSectionBlkLabel}" class='fas fa-angle-double-up' ></i>`,
        attributes: {class: "gjs-icon-label fas fa-angle-double-up"}
      });

        bm.add("icono-angleDouble-right", {
        label: opt.angleDoubleRightSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.IconBlkLabel} ${opt.angleDoubleRightSectionBlkLabel}" class='fas fa-angle-double-right' ></i>`,
        attributes: {class: "gjs-icon-label fas fa-angle-double-right"}
      });

        bm.add("icono-angleDouble-down", {
        label: opt.angleDoubleDownSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.IconBlkLabel} ${opt.angleDoubleDownSectionBlkLabel}" class='fas fa-angle-double-down' ></i>`,
        attributes: {class: "gjs-icon-label fas fa-angle-double-down"}
      });

        bm.add("icono-angleDouble-left", {
        label: opt.angleDoubleLeftSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.IconBlkLabel} ${opt.angleDoubleLeftSectionBlkLabel}" class='fas fa-angle-double-left' ></i>`,
        attributes: {class: "gjs-icon-label fas fa-angle-double-left"}
      });

        bm.add("icono-check", {
        label: opt.checkmarkSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.IconBlkLabel} ${opt.checkmarkSectionBlkLabel}" class='fas fa-check' ></i>`,
        attributes: {class: "gjs-icon-label fas fa-check"}
      });

        bm.add("icono-close", {
        label: opt.closeSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.IconBlkLabel} ${opt.closeSectionBlkLabel}" class='fas fa-times' ></i>`,
        attributes: {class: "gjs-icon-label fas fa-times"}
      });

        bm.add("icono-copyright", {
        label: opt.copyrightSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.IconBlkLabel} ${opt.copyrightSectionBlkLabel}" class='far fa-copyright' ></i>`,
        attributes: {class: "gjs-icon-label far fa-copyright"}
      });

        bm.add("icono-info", {
        label: opt.infoSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.IconBlkLabel} ${opt.infoSectionBlkLabel}" class='fas fa-info' ></i>`,
        attributes: {class: "gjs-icon-label fas fa-info"}
      });

        bm.add("icono-infoCircle", {
        label: opt.infoCircleSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.IconBlkLabel} ${opt.infoCircleSectionBlkLabel}" class='fas fa-info-circle' ></i>`,
        attributes: {class: "gjs-icon-label fas fa-info-circle"}
      });

        bm.add("icono-map", {
        label: opt.mapSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.IconBlkLabel} ${opt.mapSectionBlkLabel}" class='far fa-map' ></i>`,
        attributes: {class: "gjs-icon-label far fa-map"}
      });
        bm.add("icono-mapMarker", {
        label: opt.mapMarkerSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.IconBlkLabel} ${opt.mapMarkerSectionBlkLabel}" class='fas fa-map-marker-alt' ></i>`,
        attributes: {class: "gjs-icon-label fas fa-map-marker-alt"}
      });

        bm.add("icono-mapPin", {
        label: opt.mapPinSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.IconBlkLabel} ${opt.mapPinSectionBlkLabel}" class='fas fa-map-pin' ></i>`,
        attributes: {class: "gjs-icon-label fas fa-map-pin"}
      });

        bm.add("icono-plus", {
          label: opt.plusSectionBlkLabel,
          category: opt.categoryIcons,
          content: `<i data-gjs-custom-name="${opt.IconBlkLabel} ${opt.plusSectionBlkLabel}" class='fas fa-plus' ></i>`,
          attributes: {class: "gjs-icon-label fas fa-plus"}
      });

        bm.add("icono-question", {
        label: opt.questionSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.IconBlkLabel} ${opt.questionSectionBlkLabel}" class='fas fa-question' ></i>`,
        attributes: {class: "gjs-icon-label fas fa-question"}
      });

        bm.add("icono-questionCircle", {
        label: opt.questionCircleSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.IconBlkLabel} ${opt.questionCircleSectionBlkLabel}" class='fas fa-question-circle' ></i>`,
        attributes: {class: "gjs-icon-label fas fa-question-circle"}
      });

        bm.add("icono-phone", {
        label: opt.phoneSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.IconBlkLabel} ${opt.phoneSectionBlkLabel}" class='fas fa-phone' ></i>`,
        attributes: {class: "gjs-icon-label fas fa-phone"}
      });

        bm.add("icono-wifi", {
        label: opt.wifiSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.IconBlkLabel} ${opt.wifiSectionBlkLabel}" class='fas fa-wifi' ></i>`,
        attributes: {class: "gjs-icon-label fas fa-wifi"}
      });

        bm.add("icono-facebook", {
        label: opt.facebookSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.facebookSectionBlkLabel}" class='fab fa-facebook' ></i>`,
        attributes: {class: "gjs-icon-label fab fa-facebook"}
      });

        bm.add("icono-google", {
        label: opt.googleSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.googleSectionBlkLabel}" class='fab fa-google' ></i>`,
        attributes: {class: "gjs-icon-label fab fa-google"}
      });

        bm.add("icono-googlePlus", {
        label: opt.googlePlusSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.googlePlusSectionBlkLabel}" class='fab fa-google-plus-g' ></i>`,
        attributes: {class: "gjs-icon-label fab fa-google-plus-g"}
      });

        bm.add("icono-instagram", {
        label: opt.instagramSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.instagramSectionBlkLabel}" class='fab fa-instagram' ></i>`,
        attributes: {class: "gjs-icon-label fab fa-instagram"}
      });

        bm.add("icono-linkedin", {
        label: opt.linkedinSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.linkedinSectionBlkLabel}" class='fab fa-linkedin' ></i>`,
        attributes: {class: "gjs-icon-label fab fa-linkedin"}
      });

        bm.add("icono-pinterest", {
        label: opt.pinterestSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.pinterestSectionBlkLabel}" class='fab fa-pinterest' ></i>`,
        attributes: {class: "gjs-icon-label fab fa-pinterest"}
      });

        bm.add("icono-skype", {
        label: opt.skypeSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.skypeSectionBlkLabel}" class='fab fa-skype' ></i>`,
        attributes: {class: "gjs-icon-label fab fa-skype"}
      });

        bm.add("icono-spotify", {
        label: opt.spotifySectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.spotifySectionBlkLabel}" class='fab fa-spotify' ></i>`,
        attributes: {class: "gjs-icon-label fab fa-spotify"}
      });

        bm.add("icono-vimeo", {
        label: opt.vimeoSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.vimeoSectionBlkLabel}" class='fab fa-vimeo' ></i>`,
        attributes: {class: "gjs-icon-label fab fa-vimeo"}
      });

        bm.add("icono-twitter", {
        label: opt.twitterSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.twitterSectionBlkLabel}" class='fab fa-twitter' ></i>`,
        attributes: {class: "gjs-icon-label fab fa-twitter"}
      });

        bm.add("icono-youtube", {
        label: opt.youtubeSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.youtubeSectionBlkLabel}" class='fab fa-youtube' ></i>`,
        attributes: {class: "gjs-icon-label fab fa-youtube"}
      });

        bm.add("icono-whatsapp", {
        label: opt.whatsappSectionBlkLabel,
        category: opt.categoryIcons,
        content: `<i data-gjs-custom-name="${opt.whatsappSectionBlkLabel}" class='fab fa-whatsapp' ></i>`,
        attributes: {class: "gjs-icon-label fab fa-whatsapp"}
      });

      // Cierro los Bloques
  };

// Exporto funcion
module.exports = init;
