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
      label: opt.navbar01BlkLabel,
      category: opt.categoryNavbarFullWidth,
      content: ` <nav class="navbar navbar-default navbar-fixed-top"  data-gjs-custom-name="${opt.navbar01BlkLabel}">
                    <div class="container-fluid" data-gjs-custom-name="${opt.fullContainerLabel}">
                      <div  class="navbar-header" data-gjs-custom-name="${opt.navHeaderLabel}">
                        <button  data-gjs-custom-name="${opt.navCollapseBtnLabel}" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                          <span class="icon-bar"  data-gjs-custom-name="bar" ></span><span class="icon-bar" data-gjs-custom-name="bar" ></span><span class="icon-bar" data-gjs-custom-name="bar" ></span>
                        </button>
                        <a class="navbar-brand logo-img" href="#" data-gjs-custom-name="${opt.navBrandLabel}">
                          <img src="http://via.placeholder.com/150x50/000000/ffffff?text=Brand+Logo" alt="logo img" height="40">
                        </a>
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
                          <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                            <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control"  placeholder="Type your phone number" />
                          </div>
                          <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success">Submit</button>
                        </form>
                      </div>
                    </div>
                  </nav>
                  <style>
                    nav .btn-success{ margin-left: 10px;}
                    .navbar-brand.logo-img{padding: 5px 15px}
                  </style>`,
      attributes: {class: "gjs-icon-block-label icon-blocks icon-block-NavbarFwForm"}
    });

    ////////////////////
    // Bloque Navbar-Boxed //
    ////////////////////

    bm.add("navbar-01Boxed", {
      label: opt.navbar01BoxedBlkLabel,
      category: opt.categoryNavbarBoxed,
      content: `<nav class="navbar navbar-default navbar-fixed-top"  data-gjs-custom-name="${opt.navbar01BoxedBlkLabel}">
                  <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
                    <div class="navbar-header" data-gjs-custom-name="${opt.navHeaderLabel}">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2" aria-expanded="false"><span class="icon-bar" data-gjs-custom-name="bar"></span><span class="icon-bar" data-gjs-custom-name="bar"></span><span class="icon-bar" data-gjs-custom-name="bar"></span></button>
                      <a class="navbar-brand logo-img" href="#" data-gjs-custom-name="${opt.navBrandLabel}">
                        <img src="http://via.placeholder.com/150x50/000000/ffffff?text=Brand+Logo" alt="logo img" height="40">
                      </a>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2" data-gjs-custom-name="${opt.navCollapseMenuLabel}">
                      <ul class="nav navbar-nav navbar-left" data-gjs-custom-name="${opt.navMenuLabel}">
                          <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="active"><a href="#">Home</a></li>
                          <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 01</a></li>
                          <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 02</a></li>
                          <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 03</a></li>
                          <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i"><a href="#">Link 04</a></li>
                      </ul>
                      <form method="post" action="" class="navbar-form navbar-right" data-gjs-custom-name="${opt.FormLabel}">
                        <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                            <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control"  placeholder="Type your phone number" />
                        </div>
                        <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success">Submit</button>
                      </form>
                    </div>
                  </div>
                </nav>
                <style>
                  .navbar-brand.logo-img{padding: 5px 15px}
                  nav .btn-success{ margin-left: 10px;}
                </style>
                `,
      attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-NavbarBoxForm"}
    });

    ////////////////////
    // Bloque Navbar //
    ////////////////////

    bm.add("navbar-02", {
      label: opt.navbar02BlkLabel,
      category: opt.categoryNavbarFullWidth,
      content: `<nav class="navbar navbar-default navbar-static-top" data-gjs-custom-name="${opt.navbar02BlkLabel}">
                  <div class="container-fluid" data-gjs-custom-name="${opt.fullContainerLabel}">
                    <div class="navbar-header" data-gjs-custom-name="${opt.navHeaderLabel}">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-3" aria-expanded="false"><span class="icon-bar" data-gjs-custom-name="bar"></span><span class="icon-bar" data-gjs-custom-name="bar"></span><span class="icon-bar" data-gjs-custom-name="bar"></span></button>
                      <a class="navbar-brand" href="#" data-gjs-custom-name="${opt.navBrandLabel}">Brand</a>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-3" data-gjs-custom-name="${opt.navCollapseMenuLabel}">
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
      label: opt.navbar02BoxedBlkLabel,
      category: opt.categoryNavbarBoxed,
      content: `<nav class="navbar navbar-default navbar-static-top" data-gjs-custom-name="${opt.navbar02BoxedBlkLabel}">
                  <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
                    <div class="navbar-header" data-gjs-custom-name="${opt.navHeaderLabel}">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-4" aria-expanded="false">
                        <span class="icon-bar" data-gjs-custom-name="bar"></span>
                        <span class="icon-bar" data-gjs-custom-name="bar"></span>
                        <span class="icon-bar" data-gjs-custom-name="bar"></span>
                      </button>
                      <a class="navbar-brand" href="#" data-gjs-custom-name="${opt.navBrandLabel}">Brand</a>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-4" data-gjs-custom-name="${opt.navCollapseMenuLabel}">
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
      label: opt.navbar03BlkLabel,
      category: opt.categoryNavbarFullWidth,
      content: `<nav class="navbar navbar-default navbar-static-top" data-gjs-custom-name="${opt.navbar03BlkLabel}">
                  <div class="container-fluid" data-gjs-custom-name="${opt.fullContainerLabel}">
                    <div class="navbar-header" data-gjs-custom-name="${opt.navHeaderLabel}">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-5" aria-expanded="false">
                          <span class="icon-bar" data-gjs-custom-name="bar"></span><span class="icon-bar" data-gjs-custom-name="bar"></span><span class="icon-bar" data-gjs-custom-name="bar"></span>
                      </button>
                      <a class="navbar-brand" href="#" data-gjs-custom-name="${opt.navBrandLabel}">Brand</a>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-5" data-gjs-custom-name="${opt.navCollapseMenuLabel}">
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
      label: opt.navbar03BoxedBlkLabel,
      category: opt.categoryNavbarBoxed,
      content: `<nav class="navbar navbar-default navbar-static-top" data-gjs-custom-name="${opt.navbar03BoxedBlkLabel}">
                  <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
                    <div class="navbar-header" data-gjs-custom-name="${opt.navHeaderLabel}">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6" aria-expanded="false"><span class="icon-bar" data-gjs-custom-name="bar"></span><span class="icon-bar" data-gjs-custom-name="bar"></span><span class="icon-bar" data-gjs-custom-name="bar"></span></button>
                      <a class="navbar-brand" href="#" data-gjs-custom-name="${opt.navBrandLabel}">Brand</a>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6" data-gjs-custom-name="${opt.navCollapseMenuLabel}">
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
                          <address ><i class="fa fa-clock-o" data-gjs-custom-name="${opt.IconBlkLabel}"></i> We are today working: 9:00 am - 5:00 pm</address>
                          <address ><i class="fa fa-phone" data-gjs-custom-name="${opt.IconBlkLabel}"></i> Call us <span data-gjs-custom-name="${opt.routedPhoneNumberBlkLabel}" class="ic-routed-number">+44 558 558 558</span></address>
                      </div>
                      <div class="col-sm-4 col-xs-12 social-media-links" data-gjs-custom-name="${opt.sectColumn}">
                          <a href="https://www.facebook.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fa fa-facebook"></i></a>
                          <a href="https://www.twitter.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fa fa-twitter"></i></a>
                          <a href="https://www.youtube.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fa fa-youtube"></i></a>
                          <a href="mailto:name@email.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fa fa-envelope"></i></a>
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
                          <address ><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fa fa-clock-o" ></i> We are today working: 9:00 am - 5:00 pm</address>
                          <address><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fa fa-phone" ></i> Call us <span data-gjs-custom-name="${opt.routedPhoneNumberBlkLabel}" class="ic-routed-number">+44 558 558 558</span></address>
                      </div>
                      <div class="col-sm-4 col-xs-12 social-media-links" data-gjs-custom-name="${opt.sectColumn}">
                          <a href="https://www.facebook.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fa fa-facebook"></i></a>
                          <a href="https://www.twitter.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fa fa-twitter"></i></a>
                          <a href="https://www.youtube.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fa fa-youtube"></i></a>
                          <a href="mailto:name@email.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fa fa-envelope" ></i></a>
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
        provider: "yt",
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
      content: `<div class="w-100 ${opt.pfxCountdown}" data-gjs-type="countdown" data-gjs-custom-name="${opt.countdownBlkLabel} - ${opt.countdownEditTime}">
            <span data-js="countdown" class="${opt.pfxCountdown}-cont" data-gjs-custom-name="${opt.countdownContainerLabel}">
              <div class="${opt.pfxCountdown}-block" data-gjs-custom-name="${opt.countdownDigitBoxLabel}" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">
                <div data-js="countdown-day" class="${opt.pfxCountdown}-digit" data-gjs-custom-name="${opt.countdownDigitLabel}" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">00</div>
                <div class="${opt.pfxCountdown}-label" data-gjs-custom-name="${opt.countdownTextLabel}" data-gjs-draggable="false" data-gjs-droppable="false">${opt.labelDays}</div>
              </div>
              <div class="${opt.pfxCountdown}-block" data-gjs-custom-name="${opt.countdownDigitBoxLabel}" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">
                <div data-js="countdown-hour" class="${opt.pfxCountdown}-digit" data-gjs-custom-name="${opt.countdownDigitLabel}" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">00</div>
                <div class="${opt.pfxCountdown}-label" data-gjs-custom-name="${opt.countdownTextLabel}" data-gjs-draggable="false" data-gjs-droppable="false">${opt.labelHours}</div>
              </div>
              <div class="${opt.pfxCountdown}-block" data-gjs-custom-name="${opt.countdownDigitBoxLabel}" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">
                <div data-js="countdown-minute" class="${opt.pfxCountdown}-digit" data-gjs-custom-name="${opt.countdownDigitLabel}" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">00</div>
                <div class="${opt.pfxCountdown}-label" data-gjs-custom-name="${opt.countdownTextLabel}" data-gjs-draggable="false" data-gjs-droppable="false">${opt.labelMinutes}</div>
              </div>
              <div class="${opt.pfxCountdown}-block" data-gjs-custom-name="${opt.countdownDigitBoxLabel}" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">
                <div data-js="countdown-second" class="${opt.pfxCountdown}-digit" data-gjs-custom-name="${opt.countdownDigitLabel}" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">00</div>
                <div class="${opt.pfxCountdown}-label" data-gjs-custom-name="${opt.countdownTextLabel}" data-gjs-draggable="false" data-gjs-droppable="false">${opt.labelSeconds}</div>
              </div>
            </span>
            <span data-js="countdown-endtext" class="${opt.pfxCountdown}-endtext" data-gjs-custom-name="${opt.countdownEndTextLabel}"></span>
      </div>
      <style>
      .${opt.pfxCountdown} {
        text-align: center;
      }
      .${opt.pfxCountdown}-block {
        display: inline-block;
        margin: 0 10px;
        padding: 10px;
      }
      .${opt.pfxCountdown}-digit {
        font-size: 5rem;
      }
      .${opt.pfxCountdown}-endtext {
        font-size: 5rem;
      }
      .${opt.pfxCountdown}-cont,
      .${opt.pfxCountdown}-block {
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
                        <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" for="name-input">First Name</label>
                        <input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputFirstNameBlkLabel}" class="input form-control" placeholder="Eg. Peter" />
                      </div>
                      <div class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                        <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" for="name-input">Last Name</label>
                        <input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputLastNameBlkLabel}" class="input form-control" placeholder="Eg. Smith" />
                      </div>
                    </div>
                    <div class="form-group row" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <div class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                        <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" for="phone-input">Phone Number</label>
                        <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control" aria-describedby="phoneHelp" placeholder=" (00) 0000 0000"/>
                        <small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" id="phoneHelp" class="form-text text-muted">If mobile phone without 044/045.</small>
                      </div>
                      <div class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                        <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" for="email-input">Email</label>
                        <input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputEmailBlkLabel}" class="input form-control" aria-describedby="emailHelp" placeholder="Eg. name@email.com" />
                        <small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small>
                      </div>
                    </div>
                    <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success">Submit</button>
                    <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable=".form-box">
                        <label data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
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
                    <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" for="phone-input">Phone Number</label>
                      <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control" aria-describedby="phoneHelp" placeholder=" (00) 0000 0000"/>
                      <small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" id="phoneHelp" class="form-text text-muted">If mobile phone without 044/045.</small>
                    </div>
                    <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success">Submit</button>
                    <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable=".form-box">
                        <label data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
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
      content: `<form method="post" action="" class="form-box m-auto pt-1 pt-sm-3 form-inline" data-gjs-custom-name="${opt.FormLabel}" >
                    <div class="form-group mr-10" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control"  placeholder="Type your phone number" />
                    </div>
                    <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success mr-10">Submit</button>
                    <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                    <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable=".form-box">
                      <label data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
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
      content: `<form method="post" action="" class="form-box m-auto pt-1 pt-sm-3 form-inline" data-gjs-custom-name="${opt.FormLabel}" >
                    <div class="form-group mr-10" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control"  placeholder="Type your phone number" />
                    </div>
                    <div class="form-group mr-10" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputEmailBlkLabel}" class="input form-control" aria-describedby="emailHelp" placeholder="Eg. name@email.com" />
                    </div>
                    <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success mr-10">Submit</button>
                    <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                    <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable=".form-box">
                      <label data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
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
                  <div class="form-group row" data-gjs-custom-name="${opt.FormGroupLabel}">
                    <div class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" for="name-input">First Name</label>
                      <input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputFirstNameBlkLabel}" class="input form-control" placeholder="Eg. Peter" />
                    </div>
                    <div class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                      <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" for="name-input">Last Name</label>
                      <input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputLastNameBlkLabel}" class="input form-control" placeholder="Eg. Smith" />
                    </div>
                  </div>
                  <div class="form-group row" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <div class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                        <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" for="phone-input">Phone Number</label>
                        <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control" aria-describedby="phoneHelp" placeholder=" (00) 0000 0000"/>
                        <small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" id="phoneHelp" class="form-text text-muted">If mobile phone without 044/045.</small>
                      </div>
                      <div class="col-sm-6 col-xs-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                        <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" for="email-input">Email</label>
                        <input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputEmailBlkLabel}" class="input form-control" aria-describedby="emailHelp" placeholder="Eg. name@email.com" />
                        <small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small>
                      </div>
                  </div>
                  <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                    <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" for="textarea">Textarea</label>
                    <textarea data-gjs-custom-name="${opt.FormLabel} - ${opt.textareaBlkLabel}" class="form-control" id="comments" rows="3"></textarea>
                  </div>
                  <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success">Submit</button>
                  <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                    <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable=".form-box">
                      <label data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
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
      content: `<label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box">Label</label>`,
      attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Flabel"}
    });

    //////////////////////
    // Bloque Aclaration //
    /////////////////////
    bm.add("aclaration", {
      label: opt.FormAclarationsLabel,
      category: opt.categoryFormComp,
      content: `<small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" data-gjs-droppable="form" id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small>`,
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="email-input" >${opt.inputEmailBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="title-input" >${opt.inputTitleBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="firstname-input" >${opt.inputFirstNameBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="lastname-input" >${opt.inputLastNameBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="company-input" >${opt.inputCompanyBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="position-input" >${opt.inputPositionBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="phone-input" >${opt.inputPhoneBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="mobile-input" >${opt.inputMobileBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="fax-input" >${opt.inputFaxBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="website-input" >${opt.inputWebsiteBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="address1-input" >${opt.inputAddress1BlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="address2-input" >${opt.inputAddress2BlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="country-input" >${opt.inputCountryBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="country-select" >${opt.inputCountryBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="state-input" >${opt.inputStateBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="state-select" >${opt.inputStateBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="city-input" >${opt.inputCityBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="city-select" >${opt.inputCityBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="zip-input" >${opt.inputZipBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="facebook-input" >${opt.inputFacebookBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="twitter-input" >${opt.inputTwitterBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="skype-input" >${opt.inputSkypeBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="googlePlus-input" >${opt.inputGooglePlusBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="linkedin-input" >${opt.inputLinkedinBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="instagram-input" >${opt.inputInstagramBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="language-select" >${opt.inputLanguageBlkLabel}</label>
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel} - ${opt.radioBlkLabel} ${opt.inputLanguageBlkLabel}">
                  <label data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.FormLabelLabel}" class="radio-inline"  data-gjs-draggable=".form-box">
                    <input data-ic-form-field="language" id="language-radio-1" name="languageRadio" data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.buttonLabel}" class="form-check-input" type="radio" value="english" > English
                  </label>
                  <label data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.FormLabelLabel}" class="radio-inline"  data-gjs-draggable=".form-box">
                    <input data-ic-form-field="language" id="language-radio-2" name="languageRadio" data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.buttonLabel}" class="form-check-input" type="radio" value="spanish" > Spanish
                  </label>
                  <label data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.FormLabelLabel}" class="radio-inline"  data-gjs-draggable=".form-box">
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
      content: `  <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                    <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable=".form-box">
                      <label data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                        <input data-ic-form-field="language" id="language-en" name="language-en" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" class="form-check-input" type="checkbox" value="" > English
                      </label>
                    </div>
                    <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable=".form-box">
                      <label data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                        <input data-ic-form-field="language" id="language-es" name="language-es" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" class="form-check-input" type="checkbox" value="" >Spanish
                      </label>
                    </div>
                    <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable=".form-box">
                      <label data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable=".form-box">
                    <label data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
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
      content: `<div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                  <label data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag" data-gjs-draggable=".form-box" for="textarea-input" >${opt.textareaBlkLabel}</label>
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
      content: "<div data-html-code>Edit my HTML content</div>",
      command: "open-html-code-editor",
      attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Code"}
    });

    bm.add("icon", {
      label: opt.IconBlkLabel,
      category: opt.categoryContent,
      attributes: {
       class: "gjs-icon-block-label  icon-blocks icon-block-AddIcon",
      },
      content: `<span data-gjs-custom-name="icon" data-gjs-droppable="false" data-gjs-draggable="*" class="icon"></span>`,
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

    /////////////////////////
    // Bloque Jumbotron Boxed //
    /////////////////////////

    bm.add("banner-box", {
      label: opt.BoxedbannerSectionBlkLabel,
      category: opt.categoryContent,
      content: ` <div class="jumbotron container">
						  <h1>Hello, world!</h1>
						  <p>Text Here</p>
						  <p><a class="btn btn-secondary btn-lg" href="#" role="button">Learn more</a></p>
                	</div>`,
      attributes: {class: "gjs-icon-block-label icon-blocks icon-block-BannerBox"}
    });

    /////////////////////////
    // Bloque Jumbotron FW //
    /////////////////////////

    bm.add("banner-fw", {
      label: opt.FullWidthbannerSectionBlkLabel,
      category: opt.categoryContent,
      content: ` <div class="jumbotron">
                 <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
                    <h1>Hello, world!</h1>
                    <p>Text Here</p>
                    <p><a class="btn btn-secondary btn-lg" href="#" role="button">Learn more</a></p>
                  </div>
                </div> `,
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
      content: `<div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Panel title</h3>
                    </div>
                    <div class="panel-body">
                      <p>Panel content</p>
                    </div>
                    <div class="panel-footer"><p>Panel footer</p></div>
                  </div>`,
      attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Panel"}
    });

    ///////////////////////////////
    // Cards //////
    ////////////////////////////
    bm.add("cards", {
      label: opt.cardsSectionBlkLabel,
      category: opt.categoryContent,
      content: `  <div class="row"><div class="col-sm-6 col-md-4">
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h3 class="panel-title">Panel title</h3>
                        </div>
                        <div class="panel-body">
                          <p>Panel content</p>
                        </div>
                        <div class="panel-footer">
                          <p>Panel footer</p>
                        </div>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                          <h3 class="panel-title">Panel title</h3>
                        </div>
                        <div class="panel-body">
                          <p>Panel content</p>
                        </div>
                        <div class="panel-footer">
                          <p>Panel footer</p>
                        </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                          <h3 class="panel-title">Panel title</h3>
                        </div>
                        <div class="panel-body">
                          <p>Panel content</p>
                        </div>
                        <div class="panel-footer">
                          <p>Panel footer</p>
                        </div>
                      </div>
                  </div></div>`,
      attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Cards"}
    });

    //////////////////
    // Bloque Quote //
    //////////////////

    bm.add("quote", {
      label: opt.quoteBlkLabel,
      category: opt.categoryContent,
      content: '<blockquote data-gjs-droppable=""><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p><footer>Author Name in <cite title="Source Title">Source Title</cite></footer></blockquote>',
      attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Blockquote"}
    });

    //////////////////
    // Bloque Button Genérico - Primary//
    ///////////////////

    bm.add("button-first", {
      label: opt.buttonPrimaryBlkLabel,
      category: opt.categoryContent,
      content: '<a class="btn btn-secondary">Button</a>',
      attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-BtnOne"}
    });

    ///////////////////
    // Bloque Button Genérico - Secondary //
    ///////////////////

    bm.add("button-second", {
      label: opt.buttonSecondaryBlkLabel,
      category: opt.categoryContent,
      content: '<a class="btn  btn-default">Button</a>',
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
                content: "<hr>",
                droppable: false,
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
      content: `<a href="tel:01 800 000" itemscope itemtype="http://schema.org/Service" itemprop="telephone" class="ic-phone-link ic-phone-number" data-gjs-editable="false">01 800 000</a>`,
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
      content: `<a href="tel:01 800 000" itemscope itemtype="http://schema.org/Service" itemprop="telephone" class="ic-routed-link ic-routed-number" data-gjs-editable="false">01 800 000</a>`,
      attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-RoutedLink"},
    });

    //////////////////
    // Bloque Mobile C2C//
    ///////////////////

    bm.add("mobilec2c-navbar", {
      label: opt.mobileC2CNavbarBlkLabel,
      category: opt.categoryContent,
      content: `<a href="tel:01 800 000" itemscope itemtype="http://schema.org/Service" itemprop="telephone" class="bottom-bar ic-phone-link visible-sm visible-xs">
                    <section >
                      <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
                          <div class="row" data-gjs-custom-name="${opt.sectRow}">
                            <div class="col-xs-12 text-center c2c-container" data-gjs-custom-name="${opt.sectColumn}">
                                <p>Llama GRATIS</p>
                                <h4 class="ic-phone-number">01 800 000</h4>
                                <i class="fa fa-hand-o-up"></i>
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

    ////////////////////
    // Bloque PopUp //
    ////////////////////

    //bm.add("modal", {
    //  label: opt.basicModalBlkLabel,
    //  category: opt.categoryContent,
    //  content: { script: '$("#modal1").modal("show"); console.log("the element", this)',
    //      content: '<a class="btn btn-secondary" data-toggle="modal" data-target="#modal1">Launch demo modal</a>',
    //      style: {color: "black"},
    //  },
    //  attributes: {class: "gjs-fonts gjs-f-divider"}
    //});

    //bm.add("modal-body", {
    // label: "ModalBody",
    // category: opt.categoryContent,
    // script: "alert($('#modal1').hasClass('in'))",
    // content: '<div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><form method="post" action=""><input type="text" class="form-control" id="name-input" placeholder="Eg. Peter Smith"></form> <h5 class="modal-title text" id="exampleModalLabel">Modal title</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">...</div><div class="modal-footer"><button type="button" class="btn  btn-default" data-dismiss="modal">Close</button><button type="button" class="btn btn-secondary">Save changes</button></div></div></div></div>',
    //});

    ///////////////////////
    // Bloque Grid Items //
    ///////////////////////

    //var gridItem =
    //  `<table class="grid-item-card">
    //    <tr>
    //      <td class="grid-item-card-cell">
    //        <img class="grid-item-image" src="http://placehold.it/250x150/78c5d6/fff/" alt="Image"/>
    //        <table class="grid-item-card-body">
    //          <tr>
    //            <td class="grid-item-card-content">
    //              <h1 class="card-title">Title here</h1>
    //              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
    //            </td>
    //          </tr>
    //        </table>
    //      </td>
    //    </tr>
    //  </table>`;

  //  bm.add("grid-items", {
  //    label: opt.gridItemsBlkLabel,
  //    category: opt.categoryExtras,
  //    content: `<table class="grid-item-row">
  //      <tr>
  //        <td class="grid-item-cell2-l">${gridItem}</td>
  //        <td class="grid-item-cell2-r">${gridItem}</td>
  //      </tr>
  //    </table>`,
  //    attributes: {class: "fa fa-th"}
  //  });

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

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  // Icons Category Components //
  //////////////////////

  ///////////////////////
  // Bloque Ícono  //
  ///////////////////////
    bm.add("icono-chevron-up", {
    label: opt.chevronUpSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa fa-chevron-up' ></i>",
    attributes: {class: "gjs-icon-label fa fa-chevron-up"}
  });

    bm.add("icono-chevron-right", {
    label: opt.chevronRightSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa fa-chevron-right' ></i>",
    attributes: {class: "gjs-icon-label fa fa-chevron-right"}
  });

    bm.add("icono-chevron-down", {
    label: opt.chevronDownSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa fa-chevron-down' ></i>",
    attributes: {class: "gjs-icon-label fa fa-chevron-down"}
  });

    bm.add("icono-chevron-left", {
    label: opt.chevronLeftSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa fa-chevron-left' ></i>",
    attributes: {class: "gjs-icon-label fa fa-chevron-left"}
  });

    bm.add("icono-angleDouble-up", {
    label: opt.angleDoubleUpSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-angle-double-up' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-angle-double-up"}
  });

    bm.add("icono-angleDouble-right", {
    label: opt.angleDoubleRightSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-angle-double-right' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-angle-double-right"}
  });

    bm.add("icono-angleDouble-down", {
    label: opt.angleDoubleDownSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-angle-double-down' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-angle-double-down"}
  });

    bm.add("icono-angleDouble-left", {
    label: opt.angleDoubleLeftSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-angle-double-left' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-angle-double-left"}
  });

    bm.add("icono-check", {
    label: opt.checkmarkSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-check' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-check"}
  });

    bm.add("icono-close", {
    label: opt.closeSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-close' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-close"}
  });

    bm.add("icono-copyright", {
    label: opt.copyrightSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-copyright' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-copyright"}
  });

    bm.add("icono-info", {
    label: opt.infoSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-info' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-info"}
  });

    bm.add("icono-infoCircle", {
    label: opt.infoCircleSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-info-circle' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-info-circle"}
  });

    bm.add("icono-question", {
    label: opt.questionSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-question' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-question"}
  });

    bm.add("icono-questionCircle", {
    label: opt.questionCircleSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-question-circle' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-question-circle"}
  });

    bm.add("icono-phone", {
    label: opt.phoneSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-phone' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-phone"}
  });

    bm.add("icono-wifi", {
    label: opt.wifiSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-wifi' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-wifi"}
  });

    bm.add("icono-facebook", {
    label: opt.facebookSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-facebook' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-facebook"}
  });

    bm.add("icono-google", {
    label: opt.googleSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-google' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-google"}
  });

    bm.add("icono-googlePlus", {
    label: opt.googlePlusSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-google-plus' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-google-plus"}
  });

    bm.add("icono-instagram", {
    label: opt.instagramSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-instagram' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-instagram"}
  });

    bm.add("icono-linkedin", {
    label: opt.linkedinSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-linkedin' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-linkedin"}
  });

    bm.add("icono-pinterest", {
    label: opt.pinterestSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-pinterest' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-pinterest"}
  });

    bm.add("icono-skype", {
    label: opt.skypeSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-skype' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-skype"}
  });

    bm.add("icono-vimeo", {
    label: opt.vimeoSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-vimeo' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-vimeo-square"}
  });

    bm.add("icono-twitter", {
    label: opt.twitterSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-twitter' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-twitter"}
  });

    bm.add("icono-youtube", {
    label: opt.youtubeSectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-youtube' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-youtube"}
  });

    bm.add("icono-youtubePlay", {
    label: opt.youtubePlaySectionBlkLabel,
    category: opt.categoryIcons,
    content: "<i class='fa  fa-youtube-play' ></i>",
    attributes: {class: "gjs-icon-label fa  fa-youtube-play"}
  });

    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    // Módulos Components //
    //////////////////////

    ///////////////////////
    // Module - Intro01 //
    ///////////////////////
    bm.add("module-intro01", {
      label: opt.intro01ModuleBlkLabel,
      category: opt.categoryModulesIntro,
      content: `
      <main class="intro-banner-01 bg-01">
        <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
          <div class="row row-flex-01">
              <div class="col-md-8 col-xs-12 flex-banner">
                  <h1>Banner Title goes here</h1>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              </div>
              <div class="col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0 flex-banner">
                <form action="" method="post" onsubmit="return false" class="form-box text-center m-auto pt-1 pt-sm-3 ">
                  <h3 class="text-center">Join Us Today</h3>
                  <p class="text-center">Leave your phone number and we'll call you as soon as possible.</p>
                  <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control" aria-describedby="phoneHelp" placeholder="Enter your phone number*" />
                        <small id="phoneHelp" class="form-text text-muted">If mobile phone without 044/045.</small>
                  </div>
                  <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputEmailBlkLabel}" class="input form-control" aria-describedby="emailHelp" placeholder="Enter your email" />
                      <small id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small>
                  </div>
                  <button type="submit"  data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" class="btn btn-success">Call me!</button>
                  <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                    <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable=".form-box">
                      <label data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                        <input data-ic-form-field="terms" id="terms-check" name="terms-check" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" class="form-check-input" type="checkbox" value=""  >I have read and accept the <a href="" data-gjs-custom-name="${opt.checkboxTermsBlkLabel} - ${opt.linkBlkLabel}">Terms and Conditions.</a>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
          </div>
          <div class="row" data-gjs-custom-name="${opt.sectRow}">
              <a href="#" class="col-xs-12  hidden-xs text-center">
                <i class="fa fa-chevron-down"></i>
              </a>
          </div>
        </div>
      </main>
      <style>
        .intro-banner-01{position:relative;height: 75vh; max-height: 770px; min-height: 600px; padding-top:30px; padding-bottom:30px;  background:url("https://images.unsplash.com/photo-1470020337050-543c4e581988?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"); background-size: cover; background-position: center center}
        .white-overlay::before{ content:"";  display: block;  height: 100%;  position: absolute;   top: 0;   left: 0;  width: 100%; background-color: rgba(255, 255, 255, .8);}
        .black-overlay::before{ content:"";  display: block;  height: 100%;  position: absolute;   top: 0;   left: 0;  width: 100%; background-color: rgba(0, 0, 0, .8);}
        .intro-banner-01 .container{height: 100%}
        .intro-banner-01 h1, .intro-banner-01 p{text-align:left;}
        .intro-banner-01 .form-box p{text-align:center}
        .intro-banner-01 form{background-color: rgba(255,255,255,0.7); border-top: 4px solid #67a8e9; padding: 20px}
        .intro-banner-01 form small{margin-top:10px; display: block}
        .intro-banner-01 .row:first-child{display: flex; height: calc(100% - 50px);}
        .intro-banner-01 a i{font-size:32px; line-height:40px; margin-top:10px; }
        @media all and (max-width:992px){
                                          .intro-banner-01 .row:first-child{display: block;height: inherit;}
                                          .intro-banner-01{height: auto; max-height: inherit; min-height: auto}
                                          .intro-banner-01 h1, .intro-banner-01 p{text-align:center}
                                          .intro-banner-01 form{margin-top:20px;}
                                        }
        @media all and (max-width:768px){ .intro-banner-01{padding-top:0px}
			                                    .intro-banner-01 h1 {font-size: 2.1em;}
                                        }
      </style>`,
      attributes: {class: "gjs-icon-block-label icon-blocks icon-block-Intro34FwFormR"}
    });

 ///////////////////////
    // Module - Intro01b - Boxed Image //
    ///////////////////////
    bm.add("module-intro01b", {
      label: opt.intro01bModuleBlkLabel,
      category: opt.categoryModulesIntro,
      content: `
      <main class="intro-banner-01b bg-01">
        <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
          <div class="row row-flex-01b">
              <div class="col-md-8 col-xs-12 banner-img-01b white-gradient-overlay">
                  <div class="heading-box">
                    <h1>Banner Title goes here</h1>
                    <h4>Sed ut perspiciatis unde omnis iste natus error<br class="hidden-xs">
                      sit voluptatem accusantium doloremque laudantium,<br class="hidden-xs">
                      totam rem aperiam, eaque ipsa quae ab</h4>
                  </div>
              </div>
              <div class="col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0 flex-banner">
                <form action="" method="post" onsubmit="return false" class="form-box text-center m-auto pt-1 pt-sm-3 ">
                  <h3 class="text-center">Join Us Today</h3>
                  <p class="text-center">Leave your phone number and we'll call you as soon as possible.</p>
                  <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control" aria-describedby="phoneHelp" placeholder="Enter your phone number*" />
                        <small id="phoneHelp" class="form-text text-muted">If mobile phone without 044/045.</small>
                  </div>
                  <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputEmailBlkLabel}" class="input form-control" aria-describedby="emailHelp" placeholder="Enter your email" />
                      <small id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small>
                  </div>
                  <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success">Call me!</button>
                  <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                    <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable=".form-box">
                      <label data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                        <input data-ic-form-field="terms" id="terms-check" name="terms-check" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" class="form-check-input" type="checkbox" value=""  >I have read and accept the <a href="" data-gjs-custom-name="${opt.checkboxTermsBlkLabel} - ${opt.linkBlkLabel}">Terms and Conditions.</a>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
          </div>
        </div>
      </main>
      <style>
        .white-gradient-overlay::before{ content:"";  display: block;  height: 100%;  position: absolute;   top: 0;   left: 0;  width: 100%; background: linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.25));}
        .black-overlay::before{ content:"";  display: block;  height: 100%;  position: absolute;   top: 0;   left: 0;  width: 100%; background-color: rgba(0, 0, 0, .4);}
        .intro-banner-01b{ padding-top:30px; padding-bottom:30px; }
        .intro-banner-01b .banner-img-01b{ padding-top:20px; padding-left:30px; background:  url("https://images.unsplash.com/photo-1511842745775-b366af36db2a"); background-size: cover; background-position: center center}
        .heading-box{position:relative;}
        .intro-banner-01b h1, .intro-banner-01b h4{text-align:left}
        .intro-banner-01b form{background-color: #f2f2f2; padding: 20px; margin-bottom:0px}
        .intro-banner-01b form small{margin-top:10px; display: block}
        .intro-banner-01b .row:first-child{display:flex;}
        @media all and (max-width:992px){
                                          .intro-banner-01b .banner-img-01b{min-height:300px; padding-left:15px;}
                                          .intro-banner-01b .row:first-child{display:block;}
                                          .intro-banner-01b h1, .intro-banner-01b h4{text-align:center}
                                          .intro-banner-01b form{margin-top:20px;}
                                        }
        @media all and (max-width:768px){
                                          .intro-banner-01b h1 {font-size: 2.1em;}
                                          .intro-banner-01b h4 {font-size: 1.2em; line-height: 1.4em}
                                        }
      </style>`,
      attributes: {class: "gjs-icon-block-label icon-blocks icon-block-Intro24BoxFormR"}
    });

///////////////////////
    // Module - Intro02 //
    ///////////////////////
    bm.add("module-intro02", {
      label: opt.intro02ModuleBlkLabel,
      category: opt.categoryModulesIntro,
      content: `
      <main class="intro-banner-02 bg-01">
        <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
          <div class="row row-flex-02">
            <div class="content">
              <div class="col-xs-12 col-md-8 col-md-offset-2 col-xs-offset-0 text-center">
                <h1>Banner Title goes here</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              </div>
              <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0">
                <form action="" method="post" onsubmit="return false" class="form-box text-center m-auto pt-1 pt-sm-3 ">
                  <h3 class="text-center">Join Us Today</h3>
                  <p class="text-center">Leave your phone number and we'll call you as soon as possible.</p>
                  <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control" aria-describedby="phoneHelp" placeholder="Enter your phone number*" />
                        <small id="phoneHelp" class="form-text text-muted">If mobile phone without 044/045.</small>
                  </div>
                  <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputEmailBlkLabel}" class="input form-control" aria-describedby="emailHelp" placeholder="Enter your email" />
                      <small id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small>
                  </div>
                  <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success">Call me!</button>
                  <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                    <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable=".form-box">
                      <label data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                        <input data-ic-form-field="terms" id="terms-check" name="terms-check" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" class="form-check-input" type="checkbox" value=""  >I have read and accept the <a href="" data-gjs-custom-name="${opt.checkboxTermsBlkLabel} - ${opt.linkBlkLabel}">Terms and Conditions.</a>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="row" data-gjs-custom-name="${opt.sectRow}">
              <a href="#" class="col-xs-12 hidden-xs text-center">
                <i class="fa fa-chevron-down"></i>
              </a>
          </div>
        </div>
      </main>
      <style>
        .intro-banner-02{position:relative;height: calc(100vh - 60px); min-height: 750px; padding-top: 30px; padding-top:30px; padding-bottom:30px;  background: url("https://images.unsplash.com/photo-1470020337050-543c4e581988?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"); background-size: cover; background-position: center center}
        .white-overlay::before{ content:"";  display: block;  height: 100%;  position: absolute;   top: 0;   left: 0;  width: 100%; background-color: rgba(255, 255, 255, .8);}
        .black-overlay::before{ content:"";  display: block;  height: 100%;  position: absolute;   top: 0;   left: 0;  width: 100%; background-color: rgba(0, 0, 0, .8);}
        .intro-banner-02 .container{height: 100%}
        .intro-banner-02 form{background-color: rgba(255,255,255,0.8); border-top: 4px solid #67a8e9; padding: 20px; margin-top:20px;}
        .intro-banner-02 form small{margin-top:10px; display: block}
        .intro-banner-02 .row:first-child{display:flex; height: calc(100% - 50px); align-items:center}
        .intro-banner-02 .row:first-child .content{flex: 1;}
        .intro-banner-02 a i{font-size:32px; line-height:40px; margin-top:10px; height: auto; }
        @media all and (orientation:landscape) and (max-height:680px){margin-top:10px;}
        @media all and (max-width:992px){
                                          .intro-banner-02 .row:first-child{display: block;height: inherit;}
                                          .intro-banner-02{height: auto; min-height: auto; max-height:inherit;}
                                          .intro-banner-02 form{margin-top:20px;}
                                        }
        @media all and (max-width:768px){.intro-banner-02{padding-top:0px}
                                         .intro-banner-02 h1 {font-size: 2.1em;}
                                        }
      </style>`,
      attributes: {class: "gjs-icon-block-label icon-blocks icon-block-IntroFullFormB"}
    });

    ///////////////////////
    // Module - Intro03 //
    ///////////////////////
    bm.add("module-intro03", {
      label: opt.intro03ModuleBlkLabel,
      category: opt.categoryModulesIntro,
      content: `
      <main class="intro-banner-03 bg-01 white-overlay">
        <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
          <div class="row row-flex-03">
            <div class="content">
              <div class="col-xs-12 col-md-8 col-md-offset-2 col-xs-offset-0 text-center">
                <h1>Banner Title goes here</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              </div>
              <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 col-xs-offset-0">
                <form action="" method="post" onsubmit="return false" class="form-box text-center">
                  <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control" aria-describedby="phoneHelp" placeholder="Enter your phone number*" />
                        <small id="phoneHelp" class="form-text text-muted">If mobile phone without 044/045.</small>
                  </div>
                  <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success">Call me!</button>
                  <div class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                    <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="checkbox" data-gjs-draggable=".form-box">
                      <label data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                        <input data-ic-form-field="terms" id="terms-check" name="terms-check" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" class="form-check-input" type="checkbox" value=""  >I have read and accept the <a href="" data-gjs-custom-name="${opt.checkboxTermsBlkLabel} - ${opt.linkBlkLabel}">Terms and Conditions.</a>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <style>
        .white-overlay::before{ content:"";  display: block;  height: 100%;  position: absolute;   top: 0;   left: 0;  width: 100%; background-color: rgba(255, 255, 255, .8);}
        .black-overlay::before{ content:"";  display: block;  height: 100%;  position: absolute;   top: 0;   left: 0;  width: 100%; background-color: rgba(0, 0, 0, .8);}
        .intro-banner-03{position:relative; height: 75vh; max-height: 650px; min-height: 500px; padding-top:30px; padding-bottom:30px; background: url("https://images.unsplash.com/photo-1502404679462-d669245fc482"); background-size: cover; background-position: center center}
        .intro-banner-03 .container{height: 100%}
        .intro-banner-03 form{margin-top:40px;}
        .intro-banner-03 form small{margin-top:10px; display: block}
        .intro-banner-03 .row:first-child{display:flex; height: 100%; align-items:center}
        .intro-banner-03 .row:first-child .content{flex: 1;}
        @media all and (max-width:992px){
                                          .intro-banner-03 .row:first-child{display: block; height: inherit;}
                                          .intro-banner-03{height: auto; min-height:auto; max-height:inherit}
                                        }
        @media all and (max-width:768px){ .intro-banner-03{padding-top:0px}
                                          .intro-banner-03 h1 {font-size: 2.1em;}
                                          .intro-banner-03 form{margin-top:25px;}
                                        }
      </style>`,
      attributes: {class: "gjs-icon-block-label icon-blocks icon-block-Intro34FwFormB"}
    });

   ///////////////////////
    // Module - Intro04 //
    ///////////////////////
    bm.add("module-intro04", {
      label: opt.intro04ModuleBlkLabel,
      category: opt.categoryModulesIntro,
      content: `
      <main class="intro-banner-04 bg-01 black-2-overlay">
        <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
          <div class="row row-flex-04">
            <div class="content text-white">
              <div class="col-xs-12 col-md-8 col-md-offset-2 col-xs-offset-0 text-center">
                <h1>Banner Title goes here</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div class="cta-buttons">
                  <a class="btn btn-lg btn-primary">Buy Now</a> <a class="btn btn-lg  btn-default">More Info</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <style>
        .text-white{color:#ffffff}
        .white-overlay::before{ content:"";  display: block;  height: 100%;  position: absolute;   top: 0;   left: 0;  width: 100%; background-color: rgba(255, 255, 255, .8);}
        .black-2-overlay::before{ content:"";  display: block;  height: 100%;  position: absolute;   top: 0;   left: 0;  width: 100%; background-color: rgba(0, 0, 0, .5);}
        .intro-banner-04{position:relative; height: 75vh; min-height: 500px; max-height:650px; padding-top:30px; padding-bottom:30px;  background-image: url("https://images.unsplash.com/photo-1507307206010-53f78489a30f"); background-size: cover; background-position: top center}
        .intro-banner-04 .container{height: 100%}
        .intro-banner-04 .row:first-child{display: flex; height: 100%; align-items:center}
        .cta-buttons{margin-top:20px}
        .intro-banner-04 .btn:first-child{margin-right:15px}
        .intro-banner-04 .row:first-child .content{flex: 1;}

        @media all and (max-width:992px){
                                          .intro-banner-04 h1{margin-top:0px;}
                                          .intro-banner-04 .row:first-child{ height: inherit; min-height:340px}
                                          .intro-banner-04{height: auto; min-height: auto; max-height:inherit}
                                        }
        @media all and (max-width:768px){
                                          .intro-banner-04 h1 {font-size: 2.1em;}
                                        }
        @media all and (max-width:340px){
                                          .intro-banner-04 .row:first-child{ min-height:inherit}
                                        }
      </style>`,
      attributes: {class: "gjs-icon-block-label icon-blocks icon-block-Intro34FwCta"}
    });

  ///////////////////////
  // Module - Intro05 - Boxed Image //
  ///////////////////////
    bm.add("module-intro05-Video", {
      label: opt.intro05ModuleBlkLabel,
      category: opt.categoryModulesIntro,
      content: `
      <main class="intro-banner-05 bg-01  banner-img-05">
        <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
          <div class="row ">
              <div class="col-xs-12 row-flex-05 ">
                <div class="banner-text">
                  <h1>Banner Title goes here</h1>
                  <h4>Sed ut perspiciatis unde omnis iste natus error<br class="hidden-xs">
                      sit voluptatem accusantium doloremque laudantium,<br class="hidden-xs">
                      totam rem aperiam, eaque ipsa quae ab</h4>
                  <a class="btn btn-lg btn-default">Buy Now</a>
                </div>
                <div class="video">
                  <iframe src="https://www.youtube.com/embed/ctvlUvN6wSE" frameborder="0" allowfullscreen="true" class="gjs-no-pointer"></iframe>
                </div>
              </div>
          </div>
        </div>
      </main>
      <style>
        .intro-banner-05{ position:relative; color:#ffffff; padding-top:90px; padding-bottom:90px;  background-image: url("https://images.unsplash.com/photo-1454720203134-22a81186a6c6"); background-size: cover; background-position: center center}
        .white-overlay::before{ content:"";  display: block;  height: 100%;  position: absolute;   top: 0;   left: 0;  width: 100%; background-color: rgba(255, 255, 255, .8);}
        .black-overlay::before{ content:"";  display: block;  height: 100%;  position: absolute;   top: 0;   left: 0;  width: 100%; background-color: rgba(0, 0, 0, .8);}
        .intro-banner-05 .row div:first-child{text-align:right}
        .intro-banner-05 .video{width:100%; max-width: 480px; height: 270px; display:inline-block;}
        .intro-banner-05 .btn{margin-top: 15px}
        .banner-text{display: inline-block; margin-right:40px}
        .row-flex-05{display:flex; align-items: center; justify-content: center;}
        @media all and (max-width:992px){
                                          .row-flex-05{display:block;}
                                          .intro-banner-05{ padding-top:30px; padding-bottom:60px;}
                                          .intro-banner-05 .row div:first-child{text-align:center}
                                          .banner-text{display: block; margin-right:0px}
                                          .intro-banner-05 .video{height: 240px; width: 426px; margin:30px auto 0px auto;}
                                        }
        @media all and (max-width:768px){
                                          .intro-banner-05 h1 {font-size: 2.1em;}
                                          .intro-banner-05 h4 {font-size: 1.2em; line-height: 1.4em}
                                        }
        @media all and (max-width:456px){
                                          .intro-banner-05 .video{height: 163px; width: 290px; }
                                          .intro-banner-05{ padding-top:10px; padding-bottom:30px;}
                                        }
      </style>`,
      attributes: {class: "gjs-icon-block-label icon-blocks icon-block-Intro24FwVideo"}
    });

    ///////////////////////
    // Module - Services01 //
    ///////////////////////
    bm.add("module-services01", {
      label: opt.services01ModuleBlkLabel,
      category: opt.categoryModulesContent,
      content: `
                <section class="services-section">
                <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
                  <div class="row text-center">
                    <a href="#" class="col-xs-12 col-sm-6 col-md-4 ">
                      <div class="box-service" >
                        <h3>Strategy Solutions</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                        <ul class="list-unstyled">
                          <li data-gjs-droppable="i"><i class="fa fa-check"></i> Benefit 01</li>
                          <li data-gjs-droppable="i"><i class="fa fa-check"></i> Larger Benefit 02</li>
                          <li data-gjs-droppable="i"><i class="fa fa-check"></i> Benefit 03</li>
                        </ul>
                      </div>
                    </a>
                    <a href="#" class="col-xs-12 col-sm-6 col-md-4 ">
                      <div class="box-service" >
                        <h3>Strategy Solutions</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                        <ul class="list-unstyled">
                          <li data-gjs-droppable="i"><i class="fa fa-check"></i> Benefit 01</li>
                          <li data-gjs-droppable="i"><i class="fa fa-check"></i> Benefit 02</li>
                          <li data-gjs-droppable="i"><i class="fa fa-check"></i> Benefit 03</li>
                        </ul>
                      </div>
                    </a>
                    <a href="#" class="col-xs-12 col-sm-6 col-md-4 ">
                    <div class="box-service" >
                    <h3>Extreme Strength</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                    <ul class="list-unstyled">
                      <li data-gjs-droppable="i"><i class="fa fa-check"></i> Benefit 01</li>
                      <li data-gjs-droppable="i"><i class="fa fa-check"></i> Benefit 02</li>
                      <li data-gjs-droppable="i"><i class="fa fa-check"></i> Benefit 03</li>
                    </ul>
                  </div>
          </a>
          </div>
              </div>
              </section>

              <style>
              .services-section{padding:90px 0px 60px 0px; background-color: #f2f2f2;}
              .services-section a{text-decoration: none}
              .box-service{width:100%; padding:20px; color: #333333; padding-bottom:30px; background-color: #ffffff; box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px 2px; }
              .box-service i{font-size: 1em; line-height: 2em;}
              .box-service h3{font-weight: bold; margin-top:0px;}

              @media all and (max-width:992px){
                                                .services-section {padding: 60px 0px 40px 0px;}
                                                .box-service{margin:0px auto 30px auto; max-width: 350px; }
                                                .box-service h3{ font-size: 18px}

                                              }

              </style>
  `,
      attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
    });

    ///////////////////////
    // Module - QuienesSomos01 //
    ///////////////////////
    bm.add("module-quienes01", {
      label: opt.quienesModuleBlkLabel,
      category: opt.categoryModulesContent,
      content: `
                  <section class="about-section container">
                  <header class="page-heading text-center">
                    <h2 class="title-text text-capitalize">About Us</h2>
                  </header>
                  <div class="row" data-gjs-custom-name="${opt.sectRow}">
                    <div class="col-xs-12 col-md-6 col-flex"  data-gjs-custom-name="${opt.sectColumn}">
                      <div class="box">
                          <h3><i class="fa fa-chevron-right"></i> Who are we</h3>
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                      </div>
                      <div class="box" >
                        <h3><i class="fa fa-chevron-right"></i> Mission &amp; Vision</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                      </div>
                      <div class="box" >
                        <h3><i class="fa fa-chevron-right"></i> Strategy</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
                      </div>
                    </div>
                    <div class="col-xs-12 col-md-6 col-flex">
                            <img src="http://placehold.it/568x362/78c5d6/fff/" alt="image description" class="img-responsive" />
                    </div>
                </div>
              </section>
              <section class="services-section-01">
                <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
                  <div class="row text-center">
                    <div class="col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-6 col-md-4">
                      <div class="f-iconbox" >
                        <i class="icon-service fa fa-puzzle-piece">
                        </i>
                        <h3>Strategy Solutions</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                      </div>
                    </div>
                    <div class="col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-6 col-md-4">
                      <div class="f-iconbox" >
                        <i class="icon-service fa fa-lightbulb-o" >
                        </i>
                        <h3>Hight Quality</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                      </div>
                    </div>
                    <div class="col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-6 col-md-4">
                      <div class="f-iconbox" >
                        <i class="icon-service fa fa-bolt" >
                        </i>
                        <h3>Extreme Strength</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section class="team-section">
                <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
                  <header class="page-heading text-center">
                    <h2 class="title-text text-capitalize">Meet Our Team</h2>
                  </header>
                  <div class="row text-center">
                        <!-- TEAM MEMBER -->
                        <div class="col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-6 col-md-3">
                          <div class="text-center team-box">
                          <div class="team-image" >
                            <img src="http://placehold.it/150x200/78c5d6/fff/" alt="Image">
                            <div class="content">
                              <p><strong>Peter Smith</strong></p>
                              <p>Co-Founder</p>
                              <hr>
                            <div class="social-icons">
                              <a href="#" class="fa fa-facebook" data-toggle="tooltip" data-placement="bottom" title="Facebook"></a>
                              <a href="#" class="fa fa-google-plus" data-toggle="tooltip" data-placement="bottom" title="Google+"></a>
                              <a href="#" class="fa fa-twitter" data-toggle="tooltip" data-placement="bottom" title="Twitter"></a>
                              <a href="#" class="fa fa-youtube" data-toggle="tooltip" data-placement="bottom" title="Youtube"></a>
                            </div>
                            </div>
                          </div>
                          </div>
                        </div>
                        <!-- END / TEAM MEMBER -->
                        <!-- TEAM MEMBER -->
                        <div class="col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-6 col-md-3">
                          <div class="text-center team-box">
                          <div class="team-image" >
                            <img src="http://placehold.it/150x200/78c5d6/fff/" alt="Image">
                            <div class="content">
                              <p><strong>Peter Smith</strong></p>
                              <p>Co-Founder</p>
                              <hr>
                              <div class="social-icons">
                              <a href="#" class="fa fa-facebook" data-toggle="tooltip" data-placement="bottom" title="Facebook"></a>
                              <a href="#" class="fa fa-google-plus" data-toggle="tooltip" data-placement="bottom" title="Google+"></a>
                              <a href="#" class="fa fa-twitter" data-toggle="tooltip" data-placement="bottom" title="Twitter"></a>
                              <a href="#" class="fa fa-youtube" data-toggle="tooltip" data-placement="bottom" title="Youtube"></a>
                              </div>
                            </div>
                          </div>
                          </div>
                        </div>
                        <!-- END / TEAM MEMBER -->
                        <!-- TEAM MEMBER -->
                        <div class="col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-6 col-md-3">
                          <div class="text-center team-box">
                          <div class="team-image" >
                            <img src="http://placehold.it/150x200/78c5d6/fff/" alt="Image">
                            <div class="content">
                              <p><strong>Peter Smith</strong></p>
                              <p>Co-Founder</p>
                              <hr>
                              <div class="social-icons">
                              <a href="#" class="fa fa-facebook" data-toggle="tooltip" data-placement="bottom" title="Facebook"></a>
                              <a href="#" class="fa fa-google-plus" data-toggle="tooltip" data-placement="bottom" title="Google+"></a>
                              <a href="#" class="fa fa-twitter" data-toggle="tooltip" data-placement="bottom" title="Twitter"></a>
                              <a href="#" class="fa fa-youtube" data-toggle="tooltip" data-placement="bottom" title="Youtube"></a>
                            </div>
                            </div>
                          </div>
                          </div>
                        </div>
                        <!-- END / TEAM MEMBER -->
                        <!-- TEAM MEMBER -->
                        <div class="col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-6 col-md-3" >
                          <div class="text-center team-box">
                          <div class="team-image">
                            <img src="http://placehold.it/150x200/78c5d6/fff/" alt="Image">
                            <div class="content">
                              <p><strong>Peter Smith</strong></p>
                              <p>Co-Founder</p>
                              <hr>
                              <div class="social-icons">
                              <a href="#" class="fa fa-facebook" data-toggle="tooltip" data-placement="bottom" title="Facebook"></a>
                              <a href="#" class="fa fa-google-plus" data-toggle="tooltip" data-placement="bottom" title="Google+"></a>
                              <a href="#" class="fa fa-twitter" data-toggle="tooltip" data-placement="bottom" title="Twitter"></a>
                              <a href="#" class="fa fa-youtube" data-toggle="tooltip" data-placement="bottom" title="Youtube"></a>
                            </div>
                            </div>
                          </div>
                          </div>
                        </div>
                        <!-- END / TEAM MEMBER -->
                  </div>
                </div>
              </section>
              <style>
              .about-section{padding:60px 15px;}
            h2.title-text {margin-bottom: 25px;}
            .about-section h3 i{font-size: 0.6em; vertical-align: middle; padding-bottom: 2px}
            .about-section .row{display: flex; }
            .about-section .col-flex{display: flex; align-self: center; flex-direction: column }

              .services-section-01{padding:90px 0px 60px 0px; background-color: #f2f2f2;}
              .f-iconbox{margin-bottom:30px}
            .services-section-01 a{text-decoration: none}
              .services-section-01 i{font-size: 25px; padding: 20px 0 0; text-align: center; border-radius: 50%; border: 2px solid #333333; color: #333333; width: 68px; height: 68px;}

              .team-section {padding:90px 0px 60px 0px;}
            .team-section hr{opacity: 0.4; margin: 10px auto}
              .box{margin: 0 0 28px; overflow: hidden;}
              .team-image{position: relative;}
              .team-image img{width:100%}
              .team-image .content{ position: absolute; bottom: 0; width: 100%; background: rgba(29, 71, 115, 0.75); padding: 15px 20px;}
              .team-box{margin-bottom:30px;}
              .team-box p{line-height: 1.2em; margin:0px 0px 2px; color: #ffffff}
              .team-box p strong{font-size:1.25em}
              .social-icons {margin-top:10px;}
              .social-icons a{padding-right:10px; color: rgba(255,255,255,0.8); text-decoration: none}
              .social-icons a:last-child{padding-right:0px}
            .social-icons a:hover{color: rgba(255,255,255,1)}

            @media all and (max-width: 992px){
                                                h2.title-text {margin-bottom: 20px; margin-top: 0px}
                                                .about-section{padding:40px 15px; text-align: center}
                                                .about-section img{margin: 0px auto}
                                                .services-section-01, .team-section{padding:40px 0px;}
                                                .about-section .row{display: block; }
                                                .about-section .col-flex{display: block; align-self: center }
                                                .f-iconbox, .team-box{max-width: 350px; margin: 0px auto 30px auto}
                                              }
              </style>
  `,
      attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxAbout1"}
    });

  // Cierro los Bloques
  };

  // Exporto funcion
module.exports = init;
