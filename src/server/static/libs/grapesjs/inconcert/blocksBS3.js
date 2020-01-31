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

        //////////////////////
        // Bloque 1 Section //
        //////////////////////

        bm.add("sect100", {
          label: opt.sect100BlkLabel,
          category: opt.categoryBoxedLabel,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-Boxed1"},
          content: `<section class="container" data-gjs-custom-name="Section - ${opt.sect100BlkLabel}">
                      <div class="row" data-gjs-custom-name="${opt.sectRow}">
                        <div class="col-xs-12" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                      .col-xs-12{min-height:50px}
                    </style>`,
        });

        ////////////////////////
        // Bloque 1/2 Section //
        ////////////////////////

        bm.add("sect12", {
          label: opt.sect12BlkLabel,
          category: opt.categoryBoxedLabel,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-Boxed2"},
          content: `<section class="container" data-gjs-custom-name="Section - ${opt.sect12BlkLabel}">
                      <div class="row" data-gjs-custom-name="${opt.sectRow}">
                        <div class="col-xs-12 col-sm-6" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-xs-12 col-sm-6" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-xs-12{min-height:50px}
                    </style>`,
         });

        ////////////////////////
        // Bloque 1/3 Section //
        ////////////////////////

        bm.add("sect13", {
          label: opt.sect13BlkLabel,
          category: opt.categoryBoxedLabel,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-Boxed3"},
          content: `<section class="container" data-gjs-custom-name="Section - ${opt.sect13BlkLabel}">
                        <div class="row" data-gjs-custom-name="${opt.sectRow}">
                          <div class="col-xs-12 col-sm-4" data-gjs-custom-name="${opt.sectColumn}"></div>
                          <div class="col-xs-12 col-sm-4" data-gjs-custom-name="${opt.sectColumn}"></div>
                          <div class="col-xs-12 col-sm-4" data-gjs-custom-name="${opt.sectColumn}"></div>
                        </div>
                    </section>
                    <style>
                      .col-xs-12{min-height:50px}
                    </style>`,
         });

        ////////////////////////
        // Bloque 1/4 Section //
        ////////////////////////

        bm.add("sect14", {
          label: opt.sect14BlkLabel,
          category: opt.categoryBoxedLabel,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-Boxed4"},
          content: `<section class="container" data-gjs-custom-name="Section - ${opt.sect14BlkLabel}">
                      <div class="row" data-gjs-custom-name="${opt.sectRow}">
                        <div class="col-xs-12 col-sm-6 col-md-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-xs-12 col-sm-6 col-md-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-xs-12 col-sm-6 col-md-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-xs-12 col-sm-6 col-md-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-xs-12{min-height:50px}
                    </style>`,
         });

        ////////////////////////
        // Bloque 3/7 Section //
        ////////////////////////

        bm.add("sect37", {
          label: opt.sect37BlkLabel,
          category: opt.categoryBoxedLabel,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-Boxed37"},
          content: `<section class="container" data-gjs-custom-name="Section - ${opt.sect37BlkLabel}">
                      <div class="row" data-gjs-custom-name="${opt.sectRow}">
                        <div class="col-xs-12 col-md-4" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-xs-12 col-md-8" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-xs-12{min-height:50px}
                    </style>`,
        });

        ////////////////////////
        // Bloque 7/3 Section //
        ////////////////////////

        bm.add("sect73", {
          label: opt.sect73BlkLabel,
          category: opt.categoryBoxedLabel,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-Boxed73"},
          content: `<section class="container" data-gjs-custom-name="Section - ${opt.sect73BlkLabel}">
                      <div class="row" data-gjs-custom-name="${opt.sectRow}">
                        <div class="col-xs-12 col-md-8" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-xs-12 col-md-4" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-xs-12{min-height:50px}
                    </style>`,
        });

        ////////////////////////
        // Bloque 2/6/2 Section //
        ////////////////////////

        bm.add("sect262", {
          label: opt.sect262BlkLabel,
          category: opt.categoryBoxedLabel,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-Boxed262"},
          content: `<section class="container" data-gjs-custom-name="Section - ${opt.sect262BlkLabel}">
                      <div class="row" data-gjs-custom-name="${opt.sectRow}">
                        <div class="col-xs-12 col-md-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-xs-12 col-md-6" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-xs-12 col-md-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-xs-12{min-height:50px}
                    </style>`,
        });

        ////////////////////////
        // Bloque 2/8 Section //
        ////////////////////////

        bm.add("sect28", {
          label: opt.sect28BlkLabel,
          category: opt.categoryBoxedLabel,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-Boxed28"},
          content: `<section class="container" data-gjs-custom-name="Section - ${opt.sect28BlkLabel}">
                      <div class="row" data-gjs-custom-name="${opt.sectRow}">
                        <div class="col-xs-12 col-md-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-xs-12 col-md-9" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-xs-12{min-height:50px}
                    </style>`,
        });

        ////////////////////////
        // Bloque 8/2 Section //
        ////////////////////////

        bm.add("sect82", {
          label: opt.sect82BlkLabel,
          category: opt.categoryBoxedLabel,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-Boxed82"},
          content: `<section class="container" data-gjs-custom-name="Section - ${opt.sect82BlkLabel}">
                      <div class="row" data-gjs-custom-name="${opt.sectRow}">
                        <div class="col-xs-12 col-md-9" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-xs-12 col-md-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-xs-12{min-height:50px}
                    </style>`,
        });

        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // Container Full Width Category Components //
        //////////////////////

        //////////////////////
        // Container Full Width - Bloque 1 Section //
        //////////////////////

        bm.add("sectfull100", {
          label: opt.sectfull100BlkLabel,
          category: opt.categoryFullWidthLabel,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-FullW1"},
          content: `<section class="container-fluid" data-gjs-custom-name="Section - ${opt.sectfull100BlkLabel}">
                      <div class="row" data-gjs-custom-name="${opt.sectRow}">
                        <div class="col-xs-12" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-xs-12{min-height:50px}
                    </style>`,
        });

        ////////////////////////
        // Container Full Width - Bloque 1/2 Section //
        ////////////////////////

        bm.add("sectfull12", {
          label: opt.sectfull12BlkLabel,
          category: opt.categoryFullWidthLabel,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-FullW2"},
          content: `<section class="container-fluid" data-gjs-custom-name="Section - ${opt.sectfull12BlkLabel}">
                      <div class="row" data-gjs-custom-name="${opt.sectRow}">
                        <div class="col-xs-12 col-sm-6" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-xs-12 col-sm-6" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-xs-12{min-height:50px}
                    </style>`,
         });

        ////////////////////////
        // Container Full Width - Bloque 1/3 Section //
        ////////////////////////

        bm.add("sectfull13", {
          label: opt.sectfull13BlkLabel,
          category: opt.categoryFullWidthLabel,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-FullW3"},
          content: `<section class="container-fluid" data-gjs-custom-name="Section - ${opt.sectfull13BlkLabel}">
                        <div class="row" data-gjs-custom-name="${opt.sectRow}">
                          <div class="col-xs-12 col-sm-4" data-gjs-custom-name="${opt.sectColumn}"></div>
                          <div class="col-xs-12 col-sm-4" data-gjs-custom-name="${opt.sectColumn}"></div>
                          <div class="col-xs-12 col-sm-4" data-gjs-custom-name="${opt.sectColumn}"></div>
                        </div>
                    </section>
                    <style>
                    .col-xs-12{min-height:50px}
                    </style>`,
         });

        ////////////////////////
        // Container Full Width - Bloque 1/4 Section //
        ////////////////////////

        bm.add("sectfull14", {
          label: opt.sectfull14BlkLabel,
          category: opt.categoryFullWidthLabel,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-FullW4"},
          content: `<section class="container-fluid" data-gjs-custom-name="Section - ${opt.sectfull14BlkLabel}">
                      <div class="row" data-gjs-custom-name="${opt.sectRow}">
                        <div class="col-xs-12 col-md-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-xs-12 col-md-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-xs-12 col-md-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-xs-12 col-md-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-xs-12{min-height:50px}
                    </style>`,
         });

        ////////////////////////
        // Container Full Width - Bloque 3/7 Section //
        ////////////////////////

        bm.add("sectfull37", {
          label: opt.sectfull37BlkLabel,
          category: opt.categoryFullWidthLabel,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-FullW37"},
          content: `<section class="container-fluid" data-gjs-custom-name="Section - ${opt.sectfull37BlkLabel}">
                      <div class="row" data-gjs-custom-name="${opt.sectRow}">
                        <div class="col-xs-12 col-md-4" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-xs-12 col-md-8" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-xs-12{min-height:50px}
                    </style>`,
        });

        ////////////////////////
        // Container Full Width - Bloque 7/3 Section //
        ////////////////////////

        bm.add("sectfull73", {
          label: opt.sectfull73BlkLabel,
          category: opt.categoryFullWidthLabel,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-FullW73"},
          content: `<section class="container-fluid" data-gjs-custom-name="Section - ${opt.sectfull73BlkLabel}">
                      <div class="row" data-gjs-custom-name="${opt.sectRow}">
                        <div class="col-xs-12 col-md-8" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-xs-12 col-md-4" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-xs-12{min-height:50px}
                    </style>`,
        });

        ////////////////////////
        // Container Full Width - Bloque 2/6/2 Section //
        ////////////////////////

        bm.add("sectfull262", {
          label: opt.sectfull262BlkLabel,
          category: opt.categoryFullWidthLabel,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-FullW262"},
          content: `<section class="container-fluid" data-gjs-custom-name="Section - ${opt.sectfull262BlkLabel}">
                      <div class="row" data-gjs-custom-name="${opt.sectRow}">
                        <div class="col-xs-12 col-md-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-xs-12 col-md-6" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-xs-12 col-md-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-xs-12{min-height:50px}
                    </style>`,
        });

        ////////////////////////
        // Container Full Width - Bloque 2/8 Section //
        ////////////////////////

        bm.add("sectfull28", {
          label: opt.sectfull28BlkLabel,
          category: opt.categoryFullWidthLabel,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-FullW28"},
          content: `<section class="container-fluid" data-gjs-custom-name="Section - ${opt.sectfull28BlkLabel}">
                      <div class="row" data-gjs-custom-name="${opt.sectRow}">
                        <div class="col-xs-12 col-md-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-xs-12 col-md-9" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-xs-12{min-height:50px}
                    </style>`,
        });

        ////////////////////////
        // Container Full Width - Bloque 8/2 Section //
        ////////////////////////

        bm.add("sectfull82", {
          label: opt.sectfull82BlkLabel,
          category: opt.categoryFullWidthLabel,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-FullW82"},
          content: `<section class="container-fluid" data-gjs-custom-name="Section - ${opt.sectfull82BlkLabel}">
                      <div class="row" data-gjs-custom-name="${opt.sectRow}">
                        <div class="col-xs-12 col-md-9" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-xs-12 col-md-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-xs-12{min-height:50px}
                    </style>`,
        });

        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // Navbars Category Components //
        //////////////////////

          ////////////////////
        // Bloque Navbar-Fluid //
        ////////////////////

        bm.add("navbar-01", {
          label: opt.navFormFWBlkLabel,
          category: opt.categoryNavbarFullWidth,
          content: `<nav class="navbar navbar-default navbar-static-top"  data-gjs-custom-name="${opt.navbar01BlkLabel}">
                      <div class="container-fluid" data-gjs-custom-name="${opt.fullContainerLabel}">
                        <div  class="navbar-header" data-gjs-custom-name="${opt.navHeaderLabel}">
                          <button  data-gjs-custom-name="${opt.navCollapseBtnLabel}" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="icon-bar"  data-gjs-custom-name="bar" ></span><span class="icon-bar" data-gjs-custom-name="bar" ></span><span class="icon-bar" data-gjs-custom-name="bar" ></span>
                          </button>
                          <a class="navbar-brand" href="#" data-gjs-custom-name="${opt.navBrandLabel}">Brand</a>
                        </div>
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"  data-gjs-custom-name="${opt.navCollapseMenuLabel}">
                          <ul class="nav navbar-nav navbar-left" data-gjs-custom-name="${opt.navMenuLabel}">
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="active"><a href="#">Home</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 01</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 02</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 03</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 04</a></li>
                          </ul>
                          <form method="post" action="" class="navbar-form navbar-right" data-gjs-custom-name="${opt.FormLabel}" >
                            <div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                              <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control"  placeholder="Type your phone number" />
                            </div>
                            <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success">Submit</button>
                          </form>
                        </div>
                      </div>
                    </nav>
                    <style>
                      nav .btn-success{ margin-left: 10px;}
                    </style>`,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-NavbarFwForm"}
        });

        ////////////////////
        // Bloque Navbar-Boxed //
        ////////////////////

        bm.add("navbar-01Boxed", {
          label: opt.navFormBoxedBlkLabel,
          category: opt.categoryNavbarBoxed,
          content: `<nav class="navbar navbar-default navbar-static-top"  data-gjs-custom-name="${opt.navbar01BoxedBlkLabel}">
                      <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
                        <div class="navbar-header" data-gjs-custom-name="${opt.navHeaderLabel}">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"><span class="icon-bar" data-gjs-custom-name="bar"></span><span class="icon-bar" data-gjs-custom-name="bar"></span><span class="icon-bar" data-gjs-custom-name="bar"></span></button>
                          <a class="navbar-brand" href="#" data-gjs-custom-name="${opt.navBrandLabel}">Brand</a>
                        </div>
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" data-gjs-custom-name="${opt.navCollapseMenuLabel}">
                          <ul class="nav navbar-nav navbar-left" data-gjs-custom-name="${opt.navMenuLabel}">
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="active"><a href="#">Home</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 01</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 02</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 03</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 04</a></li>
                          </ul>
                          <form method="post" action=""class="navbar-form navbar-right" data-gjs-custom-name="${opt.FormLabel}">
                            <div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                              <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control"  placeholder="Type your phone number" />
                            </div>
                            <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success">Submit</button>
                          </form>
                        </div>
                      </div>
                    </nav>
                    <style>
                    nav .btn-success{ margin-left: 10px;}
                    </style>
                    `,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-NavbarBoxForm"}
        });

        ////////////////////
        // Bloque Navbar //
        ////////////////////

        bm.add("navbar-02", {
          label: opt.navMenuRFWBlkLabel,
          category: opt.categoryNavbarFullWidth,
          content: `<nav class="navbar navbar-default navbar-static-top" data-gjs-custom-name="${opt.navbar02BlkLabel}">
                      <div class="container-fluid" data-gjs-custom-name="${opt.fullContainerLabel}">
                        <div class="navbar-header" data-gjs-custom-name="${opt.navHeaderLabel}">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"><span class="icon-bar" data-gjs-custom-name="bar"></span><span class="icon-bar" data-gjs-custom-name="bar"></span><span class="icon-bar" data-gjs-custom-name="bar"></span></button>
                          <a class="navbar-brand" href="#" data-gjs-custom-name="${opt.navBrandLabel}">Brand</a>
                        </div>
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" data-gjs-custom-name="${opt.navCollapseMenuLabel}">
                          <ul class="nav navbar-nav navbar-right" data-gjs-custom-name="${opt.navMenuLabel}">
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="active"><a href="#">Home</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 01</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 02</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 03</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 04</a></li>
                          </ul>
                        </div>
                      </div>
                    </nav>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-NavbarFwRight"}
        });

        ////////////////////
        // Bloque Navbar -Boxed //
        ////////////////////

        bm.add("navbar-02Boxed", {
          label: opt.navMenuRBoxedBlkLabel,
          category: opt.categoryNavbarBoxed,
          content: `<nav class="navbar navbar-default navbar-static-top" data-gjs-custom-name="${opt.navbar02BoxedBlkLabel}">
                      <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
                        <div class="navbar-header" data-gjs-custom-name="${opt.navHeaderLabel}">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="icon-bar" data-gjs-custom-name="bar"></span>
                            <span class="icon-bar" data-gjs-custom-name="bar"></span>
                            <span class="icon-bar" data-gjs-custom-name="bar"></span>
                          </button>
                          <a class="navbar-brand" href="#" data-gjs-custom-name="${opt.navBrandLabel}">Brand</a>
                        </div>
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" data-gjs-custom-name="${opt.navCollapseMenuLabel}">
                            <ul class="nav navbar-nav navbar-right" data-gjs-custom-name="${opt.navMenuLabel}">
                              <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="active"><a href="#">Home</a></li>
                              <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 01</a></li><li data-gjs-droppable="i"><a href="#">Link 02</a></li>
                              <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 03</a></li><li data-gjs-droppable="i"><a href="#">Link 04</a></li>
                            </ul>
                        </div>
                      </div>
                    </nav>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-NavbarBoxRight"}
        });

        ////////////////////
        // Bloque Navbar //
        ////////////////////

        bm.add("navbar-03", {
          label: opt.navMenuLFWBlkLabel,
          category: opt.categoryNavbarFullWidth,
          content: `<nav class="navbar navbar-default navbar-static-top" data-gjs-custom-name="${opt.navbar03BlkLabel}">
                      <div class="container-fluid" data-gjs-custom-name="${opt.fullContainerLabel}">
                        <div class="navbar-header" data-gjs-custom-name="${opt.navHeaderLabel}">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                              <span class="icon-bar" data-gjs-custom-name="bar"></span><span class="icon-bar" data-gjs-custom-name="bar"></span><span class="icon-bar" data-gjs-custom-name="bar"></span>
                          </button>
                          <a class="navbar-brand" href="#" data-gjs-custom-name="${opt.navBrandLabel}">Brand</a>
                        </div>
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" data-gjs-custom-name="${opt.navCollapseMenuLabel}">
                            <ul class="nav navbar-nav navbar-left" data-gjs-custom-name="${opt.navMenuLabel}">
                              <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="active"><a href="#">Home</a></li>
                              <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 01</a></li>
                              <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 02</a></li>
                              <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 03</a></li>
                              <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 04</a></li>
                            </ul>
                        </div>
                      </div>
                    </nav>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-NavbarFwLeft"}
        });

        ////////////////////
        // Bloque Navbar -Boxed //
        ////////////////////

        bm.add("navbar-03Boxed", {
          label: opt.navMenuLBoxedBlkLabel,
          category: opt.categoryNavbarBoxed,
          content: `<nav class="navbar navbar-default navbar-static-top" data-gjs-custom-name="${opt.navbar03BoxedBlkLabel}">
                      <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
                        <div class="navbar-header" data-gjs-custom-name="${opt.navHeaderLabel}">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"><span class="icon-bar" data-gjs-custom-name="bar"></span><span class="icon-bar" data-gjs-custom-name="bar"></span><span class="icon-bar" data-gjs-custom-name="bar"></span></button>
                          <a class="navbar-brand" href="#" data-gjs-custom-name="${opt.navBrandLabel}">Brand</a>
                        </div>
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" data-gjs-custom-name="${opt.navCollapseMenuLabel}">
                          <ul class="nav navbar-nav navbar-left" data-gjs-custom-name="${opt.navMenuLabel}">
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="active"><a href="#">Home</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 01</a></li><li data-gjs-droppable="i"><a href="#">Link 02</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 03</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 04</a></li>
                          </ul>
                        </div>
                      </div>
                    </nav>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-NavbarBoxLeft"}
        });

        //////////////////
        // Bloque Button Navbar//
        ///////////////////

        bm.add("button-navbar", {
          label: opt.buttonNavbarBlkLabel,
          category: opt.categoryNavbarBoxed,
          content: `<a data-gjs-draggable=".navbar-collapse" class="btn btn-default navbar-btn" data-gjs-custom-name="${opt.buttonNavbarBlkLabel}">Button</a>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-BtnOne"}
        });

        bm.add("button-navbar-02", {
          label: opt.buttonNavbarBlkLabel,
          category: opt.categoryNavbarFullWidth,
          content: `<a data-gjs-draggable=".navbar-collapse" class="btn btn-default navbar-btn" data-gjs-custom-name="${opt.buttonNavbarBlkLabel}">Button</a>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-BtnOne"}
        });

        //////////////////
        // Bloque TopAddressBar-FullWidth//
        ///////////////////

        bm.add("address-navbar", {
          label: opt.addressFwNavbarBlkLabel,
          category: opt.categoryNavbarFullWidth,
          content: `<section class="top-bar hidden-sm hidden-xs" data-gjs-custom-name="${opt.addressFwNavbarBlkLabel}">
                      <div class="container-fluid" data-gjs-custom-name="${opt.fullContainerLabel}">
                      <div class="row flex-row" data-gjs-custom-name="${opt.sectRow}">
                          <div class="col-sm-8 col-xs-12 address-box" data-gjs-custom-name="${opt.sectColumn}">
                              <address ><i class="far fa-clock" data-gjs-custom-name="${opt.IconBlkLabel}"></i> We are today working: 9:00 am - 5:00 pm</address>
                              <address ><i class="fas fa-phone" data-gjs-custom-name="${opt.IconBlkLabel}"></i> Call us <span data-gjs-custom-name="${opt.routedPhoneNumberBlkLabel}" class="ic-routed-number">+44 558 558 558</span></address>
                          </div>
                          <div class="col-sm-4 col-xs-12 social-media-links" data-gjs-custom-name="${opt.sectColumn}">
                              <a href="https://www.facebook.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fab fa-facebook"></i></a>
                              <a href="https://www.twitter.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fab fa-twitter"></i></a>
                              <a href="https://www.youtube.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fab fa-youtube"></i></a>
                              <a href="mailto:name@email.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fas fab "></i></a>
                          </div>
                        </div>
                      </div>
                    </section>
                    <style>
                    .top-bar {background-color:#f2f2f2}
                    .address-box{text-align: left;}
                    address{font-size:12px; display:inline-block; padding-right: 15px; margin:10px auto; }
                    address i{font-size:16px; padding-right: 2px;}
                    .social-media-links{text-align:right}
                    .social-media-links a{font-size:18px; padding-right: 8px; margin:10px auto; display: inline-flex;}
                    .flex-row{display: flex}
                    @media all and (max-width:768px){
                                                      address{padding-right: 0px; text-align: center;}
                                                      .address-box, .social-media-links{text-align:center}
                                                     }
                    </style>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-TopNavbarFw"}
        });

        //////////////////
        // Bloque TopAddressBar//
        ///////////////////

        bm.add("address-navbar-02", {
          label: opt.addressBoxedNavbarBlkLabel,
          category: opt.categoryNavbarBoxed,
          content: `<section class="top-bar hidden-sm hidden-xs" data-gjs-custom-name="${opt.addressBoxedNavbarBlkLabel}">
                      <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
                      <div class="row" data-gjs-custom-name="${opt.sectRow}">
                          <div class="col-sm-8 col-xs-12 address-box"  data-gjs-custom-name="${opt.sectColumn}">
                              <address ><i data-gjs-custom-name="${opt.IconBlkLabel}" class="far fa-clock" ></i> We are today working: 9:00 am - 5:00 pm</address>
                              <address><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fas fa-phone" ></i> Call us <span data-gjs-custom-name="${opt.routedPhoneNumberBlkLabel}" class="ic-routed-number">+44 558 558 558</span></address>
                          </div>
                          <div class="col-sm-4 col-xs-12 social-media-links" data-gjs-custom-name="${opt.sectColumn}">
                              <a href="https://www.facebook.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fab fa-facebook"></i></a>
                              <a href="https://www.twitter.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fab fa-twitter"></i></a>
                              <a href="https://www.youtube.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fab fa-youtube"></i></a>
                              <a href="mailto:name@email.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fas fa-envelope" ></i></a>
                          </div>
                        </div>
                      </div>
                    </section>
                    <style>
                    .top-bar {background-color:#f2f2f2}
                    .address-box{text-align: left;}
                    address{font-size:12px; display:inline-block; padding-right: 15px; margin:10px auto; }
                    address i{font-size:16px; padding-right: 2px;}
                    .social-media-links{text-align:right}
                    .social-media-links a{font-size:18px; padding-right: 8px; margin:10px auto; display: inline-flex;}
                    .flex-row{display: flex}
                    @media all and (max-width:768px){
                                                      address{padding-right: 0px; text-align: center;}
                                                      .address-box, .social-media-links{text-align:center}
                                                     }
                    </style>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-TopNavbarBox"}
        });

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
          content: `<img data-gjs-custom-name="Image" class="img-responsive" src="http://via.placeholder.com/600x350" data-gjs-custom-name="${opt.imageBlkLabel}">`
        });

        //////////////////
        // Bloque Video //
        //////////////////
        bm.add("video", {
          label: opt.videoBlkLabel,
          category: opt.categoryMedia,
          attributes: { class: "gjs-icon-block-label icon-blocks icon-block-Video"},
          content: `<div data-gjs-custom-name="${opt.videoBlkLabel} Box" class="embed-responsive embed-responsive-16by9">
								      <iframe  data-gjs-custom-name="${opt.videoBlkLabel}" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							      </div>`,
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
          content: `<div class="countdown dhx-countdown text-center" data-gjs-type="countdown" data-js-type="countdown" data-gjs-custom-name="Countdown - Edit Time Here">
          <div class="countdown-cont row" data-js="countdown" data-gjs-custom-name="Countdown Container">
            <div class="countdown-block dhx-bg-gray1 col-xs-3" data-gjs-custom-name="Countdown Digit Box" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">
              <div data-js="countdown-day" class="countdown-digit" data-gjs-custom-name="Countdown Digit" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">00</div>
              <div class="countdown-label" data-gjs-custom-name="Countdown Label" data-gjs-draggable="false" data-gjs-droppable="false">${opt.labelDays}</div>
            </div>
            <div class="countdown-block dhx-bg-gray1 col-xs-3" data-gjs-custom-name="Countdown Digit Box" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">
              <div data-js="countdown-hour" class="countdown-digit" data-gjs-custom-name="Countdown Digit" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">00</div>
              <div class="countdown-label" data-gjs-custom-name="Countdown Label" data-gjs-draggable="false" data-gjs-droppable="false">${opt.labelHours}</div>
            </div>
            <div class="countdown-block dhx-bg-gray1 col-xs-3" data-gjs-custom-name="Countdown Digit Box" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">
              <div data-js="countdown-minute" class="countdown-digit" data-gjs-custom-name="Countdown Digit" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">00</div>
              <div class="countdown-label" data-gjs-custom-name="Countdown Label" data-gjs-draggable="false" data-gjs-droppable="false">${opt.labelMinutes}</div>
            </div>
            <div class="countdown-block dhx-bg-gray1 col-xs-3" data-gjs-custom-name="Countdown Digit Box" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">
              <div data-js="countdown-second" class="countdown-digit" data-gjs-custom-name="Countdown Digit" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">00</div>

              <div class="countdown-label" data-gjs-custom-name="Countdown Label" data-gjs-draggable="false" data-gjs-droppable="false">${opt.labelSeconds}</div>
            </div>
          </div>
          <div data-js="countdown-endtext" class="countdown-endtext" data-gjs-custom-name="${opt.countdownEndTextLabel}"></div>
        </div>
        <style>
          .dhx-countdown{text-align: center; padding: 30px 0px;}
          .countdown-digit {font-size: 4rem; line-height: 1em}
          .countdown-label{line-height: 1em }
          .countdown-endtext {font-size: 4rem;}
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
                        <div data-gjs-draggable="form, form *" class="form-group row" data-gjs-custom-name="${opt.FormGroupLabel}">
                          <div data-gjs-draggable="form, form *"  class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                            <label data-gjs-draggable="form, form *"  data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" for="name-input">First Name</label>
                            <input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputFirstNameBlkLabel}" class="input form-control" placeholder="Eg. Peter" />
                          </div>
                          <div data-gjs-draggable="form, form *"  class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                            <label data-gjs-draggable="form, form *"  data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" for="name-input">Last Name</label>
                            <input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputLastNameBlkLabel}" class="input form-control" placeholder="Eg. Smith" />
                          </div>
                        </div>
                        <div data-gjs-draggable="form, form *" class="form-group row" data-gjs-custom-name="${opt.FormGroupLabel}">
                          <div data-gjs-draggable="form, form *"  class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                            <label data-gjs-draggable="form, form *"  data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" for="phone-input">Phone Number</label>
                            <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control" aria-describedby="phoneHelp" placeholder=" (00) 0000 0000"/>
                            <small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" id="phoneHelp" class="form-text text-muted">If mobile phone without 044/045.</small>
                          </div>
                          <div data-gjs-draggable="form, form *"  class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                            <label data-gjs-draggable="form, form *"  data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" for="email-input">Email</label>
                            <input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputEmailBlkLabel}" class="input form-control" aria-describedby="emailHelp" placeholder="Eg. name@email.com" />
                            <small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small>
                          </div>
                        </div>
                        <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success">Submit</button>
                        <div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                          <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable="form, form *">
                            <label data-gjs-draggable="form, form *"  data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                              <input data-ic-form-field="terms" id="terms-check" name="terms-check" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" class="form-check-input" type="checkbox" value=""  >I have read and accept the <a href="" data-gjs-custom-name="${opt.checkboxTermsBlkLabel} - ${opt.linkBlkLabel}">Terms and Conditions.</a>
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
                        <div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                          <label data-gjs-draggable="form, form *"  data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" for="phone-input">Phone Number</label>
                          <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control" aria-describedby="phoneHelp" placeholder=" (00) 0000 0000"/>
                          <small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" id="phoneHelp" class="form-text text-muted">If mobile phone without 044/045.</small>
                        </div>
                        <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success">Submit</button>
                        <div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                          <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable="form, form *">
                            <label data-gjs-draggable="form, form *"  data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                              <input data-ic-form-field="terms" id="terms-check" name="terms-check" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" class="form-check-input" type="checkbox" value=""  >I have read and accept the <a href="" data-gjs-custom-name="${opt.checkboxTermsBlkLabel} - ${opt.linkBlkLabel}">Terms and Conditions.</a>
                            </label>
                          </div>
                        </div>
                    </form>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-BasicForm"}
        });

        ///////////////////
        // Bloque Phone Form Inline //
        ///////////////////
        bm.add("phone-form-inline", {
          label: opt.phoneFormInlineBlkLabel,
          category: opt.categoryForm,
          content: `<form method="post" action=""class="form-box m-auto pt-1 pt-sm-3 form-inline" data-gjs-custom-name="${opt.FormLabel}" >
                        <div data-gjs-draggable="form, form *" class="form-group mr-10" data-gjs-custom-name="${opt.FormGroupLabel}">
                            <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control"  placeholder="Type your phone number" />
                        </div>
                        <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success mr-10">Submit</button>
                        <div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable="form, form *">
                          <label data-gjs-draggable="form, form *"  data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                            <input data-ic-form-field="terms" id="terms-check" name="terms-check" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" class="form-check-input" type="checkbox" value=""  >I have read and accept the <a href="" data-gjs-custom-name="${opt.checkboxTermsBlkLabel} - ${opt.linkBlkLabel}">Terms and Conditions.</a>
                          </label>
                        </div>
                      </div>
                    </form>
                    <style>
                      .mr-10{margin-right:10px;}
                    </style>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-BasicForm"}
        });

        ///////////////////
        // Bloque Phone+Email Form Inline //
        ///////////////////
        bm.add("phoneEmail-form-inline", {
          label: opt.phoneEmailFormInlineBlkLabel,
          category: opt.categoryForm,
          content: `<form method="post" action=""class="form-box m-auto pt-1 pt-sm-3 form-inline" data-gjs-custom-name="${opt.FormLabel}" >
                        <div data-gjs-draggable="form, form *" class="form-group mr-10" data-gjs-custom-name="${opt.FormGroupLabel}">
                            <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control"  placeholder="Type your phone number" />
                        </div>
                        <div data-gjs-draggable="form, form *" class="form-group mr-10" data-gjs-custom-name="${opt.FormGroupLabel}">
                            <input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputEmailBlkLabel}" class="input form-control" aria-describedby="emailHelp" placeholder="Eg. name@email.com" />
                        </div>
                        <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success mr-10">Submit</button>
                        <div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable="form, form *">
                          <label data-gjs-draggable="form, form *"  data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                            <input data-ic-form-field="terms" id="terms-check" name="terms-check" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" class="form-check-input" type="checkbox" value=""  >I have read and accept the <a href="" data-gjs-custom-name="${opt.checkboxTermsBlkLabel} - ${opt.linkBlkLabel}">Terms and Conditions.</a>
                          </label>
                        </div>
                      </div>
                    </form>
                    <style>
                      .mr-10{margin:0px 10px;}
                    </style>`,
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
                      <div data-gjs-draggable="form, form *" class="form-group row" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <div data-gjs-draggable="form, form *"  class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                          <label data-gjs-draggable="form, form *"  data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" for="name-input">First Name</label>
                          <input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputFirstNameBlkLabel}" class="input form-control" placeholder="Eg. Peter" />
                        </div>
                        <div data-gjs-draggable="form, form *"  class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                          <label data-gjs-draggable="form, form *"  data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" for="name-input">Last Name</label>
                          <input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputLastNameBlkLabel}" class="input form-control" placeholder="Eg. Smith" />
                        </div>
                      </div>
                      <div data-gjs-draggable="form, form *" class="form-group row" data-gjs-custom-name="${opt.FormGroupLabel}">
                          <div data-gjs-draggable="form, form *"  class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                            <label data-gjs-draggable="form, form *"  data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" for="phone-input">Phone Number</label>
                            <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control" aria-describedby="phoneHelp" placeholder=" (00) 0000 0000"/>
                            <small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" id="phoneHelp" class="form-text text-muted">If mobile phone without 044/045.</small>
                          </div>
                          <div data-gjs-draggable="form, form *"  class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                            <label data-gjs-draggable="form, form *"  data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" for="email-input">Email</label>
                            <input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputEmailBlkLabel}" class="input form-control" aria-describedby="emailHelp" placeholder="Eg. name@email.com" />
                            <small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small>
                          </div>
                      </div>
                      <div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <label data-gjs-draggable="form, form *"  data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" for="textarea">Textarea</label>
                        <textarea data-gjs-custom-name="${opt.FormLabel} - ${opt.textareaBlkLabel}" class="form-control" id="comments" rows="3"></textarea>
                      </div>
                      <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success">Submit</button>
                      <div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable="form, form *">
                          <label data-gjs-draggable="form, form *"  data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                            <input data-ic-form-field="terms" id="terms-check" name="terms-check" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" class="form-check-input" type="checkbox" value=""  >I have read and accept the <a href="" data-gjs-custom-name="${opt.checkboxTermsBlkLabel} - ${opt.linkBlkLabel}">Terms and Conditions.</a>
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
          content: `<label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag">Label</label>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Flabel"}
        });

        //////////////////////
        // Bloque Aclaration //
        /////////////////////
        bm.add("aclaration", {
          label: opt.FormAclarationsLabel,
          category: opt.categoryFormComp,
          content: `<small data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" data-gjs-droppable="form" id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Flabel"}
        });

        // //////////////////////
        // // Bloque Input - Type Text //
        // /////////////////////
        // bm.add("input-text", {
        //   label: opt.inputTextBlkLabel,
        //   category: opt.categoryFormComp,
        //   content: `<input type="tel" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputTextBlkLabel}" class="input form-control" />`,
        //   attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        // });

        //////////////////////
        // Bloque Input - Type Email //
        /////////////////////
        bm.add("input-email", {
          label: `${opt.inputBlkLabel} ${opt.inputEmailBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="email-input" >${opt.inputEmailBlkLabel}</label>
                      <input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputEmailBlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Title //
        /////////////////////
        bm.add("input-title", {
          label: `${opt.inputBlkLabel} ${opt.inputTitleBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="title-input" >${opt.inputTitleBlkLabel}</label>
                      <input type="text" data-ic-form-field="title" id="title-input" name="title-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputTitleBlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type First Name //
        /////////////////////
        bm.add("input-firstname", {
          label: `${opt.inputBlkLabel} ${opt.inputFirstNameBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="firstname-input" >${opt.inputFirstNameBlkLabel}</label>
                      <input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputFirstNameBlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Last Name //
        /////////////////////
        bm.add("input-lastname", {
          label: `${opt.inputBlkLabel} ${opt.inputLastNameBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="lastname-input" >${opt.inputLastNameBlkLabel}</label>
                      <input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputLastNameBlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Company //
        /////////////////////
        bm.add("input-company", {
          label: `${opt.inputBlkLabel} ${opt.inputCompanyBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputCompanyBlkLabel}</label>
                      <input type="text" data-ic-form-field="company" id="company-input" name="company-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputCompanyBlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Position //
        /////////////////////
        bm.add("input-position", {
          label: `${opt.inputBlkLabel} ${opt.inputPositionBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputPositionBlkLabel}</label>
                      <input type="text" data-ic-form-field="position" id="position-input" name="position-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPositionBlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Tel //
        /////////////////////
        bm.add("input-tel", {
          label: `${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputPhoneBlkLabel}</label>
                      <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Mobile //
        /////////////////////
        bm.add("input-mobile", {
          label: `${opt.inputBlkLabel} ${opt.inputMobileBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputMobileBlkLabel}</label>
                      <input type="tel" data-ic-form-field="mobile" id="mobile-input" name="mobile-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputMobileBlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Fax //
        /////////////////////
        bm.add("input-fax", {
          label: `${opt.inputBlkLabel} ${opt.inputFaxBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputFaxBlkLabel}</label>
                      <input type="tel" data-ic-form-field="fax" id="fax-input" name="fax-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputFaxBlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Website //
        /////////////////////
        bm.add("input-website", {
          label: `${opt.inputBlkLabel} ${opt.inputWebsiteBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputWebsiteBlkLabel}</label>
                      <input type="url" data-ic-form-field="website" id="website-input" name="website-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputWebsiteBlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Address1 //
        /////////////////////
        bm.add("input-address1", {
          label: `${opt.inputBlkLabel} ${opt.inputAddress1BlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputAddress1BlkLabel}</label>
                      <input type="text" data-ic-form-field="address1" id="address1-input" name="address1-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputAddress1BlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Address2 //
        /////////////////////
        bm.add("input-address2", {
          label: `${opt.inputBlkLabel} ${opt.inputAddress2BlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputAddress2BlkLabel}</label>
                      <input type="text" data-ic-form-field="address2" id="address2-input" name="address2-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputAddress2BlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Country //
        /////////////////////
        bm.add("input-country", {
          label: `${opt.inputBlkLabel} ${opt.inputCountryBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputCountryBlkLabel}</label>
                      <input type="text" data-ic-form-field="country" id="country-input" name="country-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputCountryBlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Select Country //
        /////////////////////
        bm.add("select-country", {
          label: `${opt.selectBlkLabel} ${opt.inputCountryBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputCountryBlkLabel}</label>
                      <select data-gjs-custom-name="${opt.FormLabel} - ${opt.selectBlkLabel} ${opt.inputCountryBlkLabel}" class="form-control" data-ic-form-field="country" id="country-select" name="country-select" >
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
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputStateBlkLabel}</label>
                      <input type="text" data-ic-form-field="state" id="state-input" name="state-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputStateBlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Select State //
        /////////////////////
        bm.add("select-state", {
          label: `${opt.selectBlkLabel} ${opt.inputStateBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputStateBlkLabel}</label>
                      <select data-gjs-custom-name="${opt.FormLabel} - ${opt.selectBlkLabel} ${opt.inputStateBlkLabel}" class="form-control" data-ic-form-field="state" id="state-select" name="state-select" >
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
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputCityBlkLabel}</label>
                      <input type="text" data-ic-form-field="city" id="city-input" name="city-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputCityBlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Select City //
        /////////////////////
        bm.add("select-city", {
          label: `${opt.selectBlkLabel} ${opt.inputCityBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputCityBlkLabel}</label>
                      <select data-gjs-custom-name="${opt.FormLabel} - ${opt.selectBlkLabel} ${opt.inputCityBlkLabel}" class="form-control" data-ic-form-field="city" id="city-select" name="city-select" >
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
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputZipBlkLabel}</label>
                      <input type="text" data-ic-form-field="zip" id="zip-input" name="zip-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputZipBlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type facebook //
        /////////////////////
        bm.add("input-facebook", {
          label: `${opt.inputBlkLabel} ${opt.inputFacebookBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputFacebookBlkLabel}</label>
                      <input type="text" data-ic-form-field="facebook" id="facebook-input" name="facebook-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputFacebookBlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type twitter //
        /////////////////////
        bm.add("input-twitter", {
          label: `${opt.inputBlkLabel} ${opt.inputTwitterBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputTwitterBlkLabel}</label>
                      <input type="text" data-ic-form-field="twitter" id="twitter-input" name="twitter-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputTwitterBlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type skype //
        /////////////////////
        bm.add("input-skype", {
          label: `${opt.inputBlkLabel} ${opt.inputSkypeBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputSkypeBlkLabel}</label>
                      <input type="text" data-ic-form-field="skype" id="skype-input" name="skype-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputSkypeBlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type googlePlus //
        /////////////////////
        bm.add("input-googlePlus", {
          label: `${opt.inputBlkLabel} ${opt.inputGooglePlusBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputGooglePlusBlkLabel}</label>
                      <input type="text" data-ic-form-field="googlePlus" id="googlePlus-input" name="googlePlus-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputGooglePlusBlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type linkedin //
        /////////////////////
        bm.add("input-linkedin", {
          label: `${opt.inputBlkLabel} ${opt.inputLinkedinBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputLinkedinBlkLabel}</label>
                      <input type="text" data-ic-form-field="linkedin" id="linkedin-input" name="linkedin-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputLinkedinBlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type instagram //
        /////////////////////
        bm.add("input-instagram", {
          label: `${opt.inputBlkLabel} ${opt.inputInstagramBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputInstagramBlkLabel}</label>
                      <input type="text" data-ic-form-field="instagram" id="instagram-input" name="instagram-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputInstagramBlkLabel}" class="input form-control" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Select Language //
        /////////////////////
        bm.add("select-language", {
          label: `${opt.selectBlkLabel} ${opt.inputLanguageBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.inputLanguageBlkLabel}</label>
                      <select data-gjs-custom-name="${opt.FormLabel} - ${opt.selectBlkLabel} ${opt.inputLanguageBlkLabel}" class="form-control" data-ic-form-field="language" id="language-select" name="language-select" >
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
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel} - ${opt.radioBlkLabel} ${opt.inputLanguageBlkLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.FormLabelLabel}" class="radio-inline"  data-gjs-draggable="form, form *">
                        <input data-ic-form-field="language" id="language-radio-1" name="languageRadio" data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.buttonLabel}" class="form-check-input" type="radio" value="english" > English
                      </label>
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.FormLabelLabel}" class="radio-inline"  data-gjs-draggable="form, form *">
                        <input data-ic-form-field="language" id="language-radio-2" name="languageRadio" data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.buttonLabel}" class="form-check-input" type="radio" value="spanish" > Spanish
                      </label>
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.FormLabelLabel}" class="radio-inline"  data-gjs-draggable="form, form *">
                        <input data-ic-form-field="language" id="language-radio-3" name="languageRadio" data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.buttonLabel}" class="form-check-input" type="radio" value="french" > French
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
          content: `  <div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable="form, form *">
                          <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                            <input data-ic-form-field="language" id="language-en" name="language-en" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" class="form-check-input" type="checkbox" value="" > English
                          </label>
                        </div>
                        <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable="form, form *">
                          <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                            <input data-ic-form-field="language" id="language-es" name="language-es" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" class="form-check-input" type="checkbox" value="" >Spanish
                          </label>
                        </div>
                        <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable="form, form *">
                          <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                            <input data-ic-form-field="language" id="language-fr" name="language-fr" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" class="form-check-input" type="checkbox" value="" >French
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
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable="form, form *">
                        <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                          <input data-ic-form-field="terms" id="terms-check" name="terms-check" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" class="form-check-input" type="checkbox" value=""  >I have read and accept the <a href="" data-gjs-custom-name="${opt.checkboxTermsBlkLabel} - ${opt.linkBlkLabel}">Terms and Conditions.</a>
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
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag"  for="company-input" >${opt.textareaBlkLabel}</label>
                      <textarea data-gjs-custom-name="${opt.FormLabel} - ${opt.textareaBlkLabel}" class="form-control textarea" id="comments" rows="3"></textarea>
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Ftextarea"}
        });

        ///////////////////
        // Bloque Button Send //
        ///////////////////

        bm.add("button-send", {
          label: opt.buttonSendBlkLabel,
          category: opt.categoryFormComp,
          content: `<button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success">Send</button>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-FbtnSend"}
        });

        ///////////////////
        // Bloque Button Erase //
        ///////////////////

        bm.add("button-reset", {
          label: opt.buttonResetBlkLabel,
          category: opt.categoryFormComp,
          content: `<button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonResetBlkLabel}" type="reset" class="btn btn-danger">Erase</button>`,
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
          content: `<div data-gjs-custom-name="${opt.HtmlCodeBlkLabel}" data-html-code >Edit my HTML content</div>`,
          command: "open-html-code-editor",
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Code"}
        });

        // bm.add("icon", {
        //   label: opt.IconBlkLabel,
        //   category: opt.categoryContent,
        //   attributes: {
        //    class: "gjs-icon-block-label  icon-blocks icon-block-AddIcon",
        //   },
        //   content: `<span data-gjs-custom-name="${opt.IconBlkLabel}" data-gjs-droppable="false" data-gjs-draggable="*" class="icon"></span>`,
        // });

        /////////////////////////
        // Box / Empty div //
        /////////////////////////

        bm.add("box-div", {
          label: opt.BoxDivSectionBlkLabel,
          category: opt.categoryContent,
          content: `<div data-gjs-custom-name="${opt.BoxDivSectionBlkLabel}" class="empty-div"></div> <style>.empty-div{min-height:50px;}</style>`,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-FullW1"}
        });

        /////////////////////////
        // Bloque Jumbotron Boxed //
        /////////////////////////

        bm.add("banner-box", {
          label: opt.BoxedbannerSectionBlkLabel,
          category: opt.categoryContent,
          content: `<div class="jumbotron container" data-gjs-custom-name="${opt.BoxedbannerSectionBlkLabel}">
                      <h1>Hello, world!</h1>
                      <p>Text Here.</p>
                      <a class="btn btn-secondary btn-lg" href="#" role="button">Learn more</a>
                    </div>`,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-BannerBox"}
        });

        /////////////////////////
        // Bloque Jumbotron FW //
        /////////////////////////

        bm.add("banner-fw", {
          label: opt.FullWidthbannerSectionBlkLabel,
          category: opt.categoryContent,
          content: `<div class="jumbotron" data-gjs-custom-name="${opt.FullWidthbannerSectionBlkLabel}">
                      <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
                        <h1>Hello, world!</h1>
                        <p>Text Here.</p>
                        <a class="btn btn-secondary btn-lg" href="#" role="button">Learn more</a>
                      </div>
                    </div>`,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-BannerFw"}
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

        ///////////////////////////////
        // Panel - Text Box//////
        ////////////////////////////
        bm.add("panel", {
          label: opt.panelSectionBlkLabel,
          category: opt.categoryContent,
          content: `<div class="panel panel-default"  data-gjs-custom-name="${opt.panelSectionBlkLabel}">
                        <div class="panel-heading" data-gjs-custom-name="${opt.panelHeadBlkLabel}">
                            <h3 class="panel-title">Panel title</h3>
                        </div>
                        <div class="panel-body"  data-gjs-custom-name="${opt.panelBodyBlkLabel}">
                          <p>Panel content</p>
                        </div>
                        <div class="panel-footer"  data-gjs-custom-name="${opt.panelFooterBlkLabel}"><p>Panel footer</p></div>
                      </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Panel"}
        });

        ///////////////////////////////
        // Cards //////
        ////////////////////////////
        bm.add("cards", {
          label: opt.cardsSectionBlkLabel,
          category: opt.categoryContent,
          content: `  <div class="col-sm-6 col-md-4" data-gjs-custom-name="${opt.sectColumn}">
                          <div class="panel panel-default" data-gjs-custom-name="${opt.panelSectionBlkLabel}">
                            <div class="panel-heading" data-gjs-custom-name="${opt.panelHeadBlkLabel}">
                              <h3 class="panel-title">Panel title</h3>
                            </div>
                            <div class="panel-body" data-gjs-custom-name="${opt.panelBodyBlkLabel}">
                              <p>Panel content</p>
                            </div>
                            <div class="panel-footer" data-gjs-custom-name="${opt.panelFooterBlkLabel}">
                              <p>Panel footer</p>
                            </div>
                          </div>
                      </div>
                      <div class="col-sm-6 col-md-4" data-gjs-custom-name="${opt.sectColumn}">
                        <div class="panel panel-default" data-gjs-custom-name="${opt.panelSectionBlkLabel}">
                            <div class="panel-heading" data-gjs-custom-name="${opt.panelHeadBlkLabel}">
                              <h3 class="panel-title">Panel title</h3>
                            </div>
                            <div class="panel-body" data-gjs-custom-name="${opt.panelBodyBlkLabel}">
                              <p>Panel content</p>
                            </div>
                            <div class="panel-footer" data-gjs-custom-name="${opt.panelFooterBlkLabel}">
                              <p>Panel footer</p>
                            </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4" data-gjs-custom-name="${opt.sectColumn}">
                        <div class="panel panel-default" data-gjs-custom-name="${opt.panelSectionBlkLabel}">
                            <div class="panel-heading" data-gjs-custom-name="${opt.panelHeadBlkLabel}">
                              <h3 class="panel-title">Panel title</h3>
                            </div>
                            <div class="panel-body" data-gjs-custom-name="${opt.panelBodyBlkLabel}">
                              <p>Panel content</p>
                            </div>
                            <div class="panel-footer" data-gjs-custom-name="${opt.panelFooterBlkLabel}">
                              <p>Panel footer</p>
                            </div>
                          </div>
                      </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Cards"}
        });

        //////////////////
        // Bloque Quote //
        //////////////////

        bm.add("quote", {
          label: opt.quoteBlkLabel,
          category: opt.categoryContent,
          content: `<blockquote data-gjs-custom-name="${opt.quoteBlkLabel}" data-gjs-droppable=""><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p><footer>Author Name in <cite title="Source Title">Source Title</cite></footer></blockquote>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Blockquote"}
        });

        //////////////////
        // Bloque Button Genérico - Primary//
        ///////////////////

        bm.add("button-first", {
          label: opt.buttonPrimaryBlkLabel,
          category: opt.categoryContent,
          content: '<a class="btn btn-secondary" href="#">Button</a>',
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-BtnOne"}
        });

        ///////////////////
        // Bloque Button Genérico - Secondary //
        ///////////////////

        bm.add("button-second", {
          label: opt.buttonSecondaryBlkLabel,
          category: opt.categoryContent,
          content: '<a class="btn btn-default" href="#">Button</a>',
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-BtnTwo"}
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
          content: `<p data-gjs-custom-name="${opt.phoneNumberBlkLabel}" class="ic-phone-number" data-gjs-editable="false">01 800 000</p>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-PhoneNumber"},
        });

        //////////////////
        // Bloque Phone Link//
        ///////////////////
        bm.add("phone-link", {
          label: opt.phoneLinkBlkLabel,
          category: opt.categoryContent,
          content: `<a data-gjs-custom-name="${opt.phoneLinkBlkLabel}" href="tel:01 800 000" class="ic-phone-link ic-phone-number" data-gjs-editable="false">01 800 000</a>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-PhoneLink"},
        });

        //////////////////
        // Bloque Routed Phone Number//
        ///////////////////
        bm.add("routed-phone-number", {
          label: opt.routedPhoneNumberBlkLabel,
          category: opt.categoryContent,
          content: `<p data-gjs-custom-name="${opt.routedPhoneNumberBlkLabel}" class="ic-routed-number" data-gjs-editable="false">01 800 000</p>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-RoutedNumber"},
        });

        //////////////////
        // Bloque Routed Phone Link//
        ///////////////////
        bm.add("routed-phone-link", {
          label: opt.routedPhoneLinkBlkLabel,
          category: opt.categoryContent,
          content: `<a data-gjs-custom-name="${opt.routedPhoneNumberBlkLabel}" href="tel:01 800 000" class="ic-routed-link ic-routed-number" data-gjs-editable="false">01 800 000</a>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-RoutedLink"},
        });

        //////////////////
        // Bloque Mobile C2C//
        ///////////////////

        bm.add("mobilec2c-navbar", {
          label: opt.mobileC2CNavbarBlkLabel,
          category: opt.categoryContent,
          content: `<a data-gjs-custom-name="${opt.mobileC2CNavbarBlkLabel}" href="tel:01 800 000" class="bottom-bar ic-phone-link visible-sm visible-xs">
                        <section data-gjs-custom-name="${opt.sect100BlkLabel}">
                          <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
                              <div class="row" data-gjs-custom-name="${opt.sectRow}">
                                <div class="col-xs-12 text-center c2c-container" data-gjs-custom-name="${opt.sectColumn}">
                                    <p>Llama GRATIS</p>
                                    <h4 class="ic-phone-number">01 800 000</h4>
                                    <i class="fas hand-point-up"></i>
                                </div>
                              </div>
                          </div>
                        </section>
                  </a>
                  <style>
                  a.bottom-bar{background-color:#f2f2f2; position:fixed; z-index:10000; bottom:0px; width:100%; left:0px; padding:15px 0px}
                  .c2c-container{justify-content: center; align-items: center; display: flex;}
                  .c2c-container p{display:inline-block; margin:0px; font-size: 15px; line-height:18px}
                  .c2c-container h4{display:inline-block; margin:0px 10px}
                  .c2c-container i{font-size: 21px; margin:0px}
                  </style>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-MobileC2C"},
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
          <li data-gjs-droppable="i" class="list-item" data-gjs-draggable=".list-body">List Item 01</li>
          <li data-gjs-droppable="i" class="list-item" data-gjs-draggable=".list-body">List Item 02</li>
          <li data-gjs-droppable="i" class="list-item" data-gjs-draggable=".list-body">List Item 03</li>`;

        var listDescItem =
          `
          <dt data-gjs-droppable="i" class="list-desc-item" data-gjs-draggable=".list-desc-body">Name</dt>
          <dd data-gjs-droppable="i" class="list-desc-item" data-gjs-draggable=".list-desc-body">Description</dd>`;

        var listMediaItem =
          `<li data-gjs-droppable="i" class="media media-list-item" data-gjs-draggable=".media-list">
              <div class="media-left media-middle" >
                <img alt="64x64" class="media-object" src="http://placehold.it/200x200/78c5d6/fff/">
              </div>
              <div class="media-body" >
                <h4 class="media-heading">Middle aligned media</h4>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p> <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              </div>
            </li>
            <style>
            .media-body{width: 70%}
            .media-left{width: 30%}
            </style>`;

        bm.add("list-ordered", {
          label: opt.listOrderedBlkLabel,
          category: opt.categoryList,
          content: `<ol class="list-body">${listItem}${listItem}</ol>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-listOrdered"}
        });

        bm.add("list-Unordered", {
          label: opt.listUnorderedBlkLabel,
          category: opt.categoryList,
          content: `<ul class="list-body">${listItem}${listItem}</ul>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-listUnordered"}
        });

        bm.add("list-Unstyled", {
          label: opt.listUnstyledBlkLabel,
          category: opt.categoryList,
          content: `<ul class="list-unstyled list-body">${listItem}${listItem}</ul>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-listUnstyled"}
        });

        bm.add("list-Inline", {
          label: opt.listInlineBlkLabel,
          category: opt.categoryList,
          content: `<ul class="list-inline list-body">${listItem}${listItem}</ul>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-listInline"}
        });

        bm.add("list-Description", {
          label: opt.listDescriptionBlkLabel,
          category: opt.categoryList,
          content: `<dl class="dl-horizontal list-desc-body">${listDescItem}${listDescItem}${listDescItem}</dl>`,
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

        bm.add("list-Media", {
          label: opt.listMediaBlkLabel,
          category: opt.categoryList,
          content: `<ul class="media-list">${listMediaItem}${listMediaItem}</ul>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-listMedia"}
        });

        bm.add("list-Media-Item", {
          label: opt.listMediaItemBlkLabel,
          category: opt.categoryList,
          content: `${listMediaItem}`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-listMediaItem"}
        });

      ///////////////////////
      // Bloque Tablas //
      ///////////////////////
        var tableCell =
          `<td>Table Cell 01</td>`;
        var tableCellTitle =
          `<th>Table Cell Title</th>`;

        var tableCellRowTitle =
          `<th class="row">Table Cell Title</th>`;

        bm.add("table", {
          label: opt.tableBlkLabel,
          category: opt.categoryList,
          content: `
          <div class="table-responsive">
            <table class="table table-striped">
              <caption>Optional table caption.</caption>
              <thead> <tr> ${tableCellTitle} ${tableCellTitle} ${tableCellTitle} ${tableCellTitle} </tr> </thead>
              <tbody>
                <tr > ${tableCellRowTitle} ${tableCell} ${tableCell} ${tableCell} </tr>
                <tr> ${tableCellRowTitle} ${tableCell} ${tableCell} ${tableCell} </tr>
                <tr> ${tableCellRowTitle} ${tableCell} ${tableCell} ${tableCell} </tr>
              </tbody>
            </table>
          </div>
          <style>
          table th{padding:8px; line-height: 1.43em; vertical-align: top; border-bottom: 2px solid #ddd;}
          table th.row{padding:8px; line-height: 1.43em; vertical-align: top; border-top: 1px solid #ddd; border-bottom: 0px solid transparent;}
          table td{padding:8px; line-height: 1.43em; vertical-align: top; border-top: 1px solid #ddd}
          </style>
          `,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-table"}
        });

      ///////////////////////////////
      // Icons Category Components //
      ///////////////////////////////

      ///////////////////
      // Bloque Ícono  //
      ///////////////////

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
