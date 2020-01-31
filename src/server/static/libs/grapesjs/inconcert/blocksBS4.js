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
                        <div class="col-12" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                      .col-12{min-height:40px}
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
                        <div class="col-12 col-md-6" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-12 col-md-6" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-12{min-height:40px}
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
                          <div class="col-12 col-md-4" data-gjs-custom-name="${opt.sectColumn}"></div>
                          <div class="col-12 col-md-4" data-gjs-custom-name="${opt.sectColumn}"></div>
                          <div class="col-12 col-md-4" data-gjs-custom-name="${opt.sectColumn}"></div>
                        </div>
                    </section>
                    <style>
                      .col-12{min-height:40px}
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
                        <div class="col-12 col-lg-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-12 col-lg-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-12 col-lg-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-12 col-lg-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-12{min-height:40px}
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
                        <div class="col-12 col-lg-4" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-12 col-lg-8" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-12{min-height:40px}
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
                          <div class="col-12 col-lg-8" data-gjs-custom-name="${opt.sectColumn}"></div>
                          <div class="col-12 col-lg-4" data-gjs-custom-name="${opt.sectColumn}"></div>
                        </div>
                      </section>
                      <style>
                      .col-12{min-height:40px}
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
                        <div class="col-12 col-lg-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-12 col-lg-6" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-12 col-lg-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-12{min-height:40px}
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
                        <div class="col-12 col-lg-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-12 col-lg-9" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-12{min-height:40px}
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
                        <div class="col-12 col-lg-9" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-12 col-lg-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-12{min-height:40px}
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
                        <div class="col-12" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-12{min-height:40px}
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
                        <div class="col-12 col-md-6" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-12 col-md-6" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-12{min-height:40px}
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
                          <div class="col-12 col-md-4" data-gjs-custom-name="${opt.sectColumn}"></div>
                          <div class="col-12 col-md-4" data-gjs-custom-name="${opt.sectColumn}"></div>
                          <div class="col-12 col-md-4" data-gjs-custom-name="${opt.sectColumn}"></div>
                        </div>
                    </section>
                    <style>
                    .col-12{min-height:40px}
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
                        <div class="col-12 col-lg-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-12 col-lg-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-12 col-lg-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-12 col-lg-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-12{min-height:40px}
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
                        <div class="col-12 col-md-4" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-12 col-md-8" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-12{min-height:40px}
                    </style>`,
        });

        ////////////////////////
        // Container Full Width - Bloque 7/3 Section //
        ////////////////////////

        bm.add("sectfull73", {
          label: opt.sectfull73BlkLabel,
          category: opt.categoryFullWidthLabel,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-FullW73"},
          content: `<section class="container-fluid" data-gjs-custom-name="Section - ${opt.sect73BlkLabel}">
                      <div class="row" data-gjs-custom-name="${opt.sectRow}">
                        <div class="col-12 col-md-8" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-12 col-md-4" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-12{min-height:40px}
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
                        <div class="col-12 col-lg-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-12 col-lg-6" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-12 col-lg-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-12{min-height:40px}
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
                        <div class="col-12 col-lg-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-12 col-lg-9" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-12{min-height:40px}
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
                        <div class="col-12 col-lg-9" data-gjs-custom-name="${opt.sectColumn}"></div>
                        <div class="col-12 col-lg-3" data-gjs-custom-name="${opt.sectColumn}"></div>
                      </div>
                    </section>
                    <style>
                    .col-12{min-height:40px}
                    </style>`,
        });

        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // Navbars Category Components //
        //////////////////////

        bm.add("Nav-Simple-Phone-FW", {
          label: opt.navSimplePhoneFWBlkLabel,
          category: opt.categoryNavbarFullWidth,
          content: `
                <nav class="navbar-dark bg-dark">
                <div class="container-fluid">
                  <div class="row ">
                    <div class="col-12 col-md-8 py-2 navbar-header text-center text-md-left" data-gjs-custom-name="Navbar Header">
                <a class="navbar-brand" href="#" data-gjs-custom-name="Brand Logo">
                <img src="assets/img/dx-logo-light.svg" alt="logo-img" >
                </a>
              </div>
              <div class="col-md-4 dhx-navtel d-none d-md-flex  text-light" data-gjs-custom-name="Nav Phone Number">
                <div class=" align-self-stretch d-flex w-100 align-items-center justify-content-end" data-gjs-custom-name="Box - Phone Number">
                  <i class="fas fa-phone mr-1 d-inline-block mt-1"></i>
                  <p class="mb-0 d-inline-block mr-1">Call Us Now </p>
                  <p class="mb-0 dhx-phone ic-phone-number d-inline-block">01 800 000</p>
                </div>
              </div>
                  </div>
                </div>
              </nav>`,
              attributes: {class: "gjs-icon-block-label icon-blocks icon-block-NavbarFwForm"}
            });

        bm.add("Nav-Simple-Phone-BX", {
      label: opt.navSimplePhoneBoxedBlkLabel,
      category: opt.categoryNavbarFullWidth,
      content: `
            <nav class="navbar-dark bg-dark">
            <div class="container">
              <div class="row ">
                <div class="col-12 col-md-8 py-2 navbar-header text-center text-md-left" data-gjs-custom-name="Navbar Header">
            <a class="navbar-brand" href="#" data-gjs-custom-name="Brand Logo">
            <img src="assets/img/dx-logo-light.svg" alt="logo-img" >
            </a>
          </div>
          <div class="col-md-4 dhx-navtel d-none d-md-flex  text-light" data-gjs-custom-name="Nav Phone Number">
            <div class=" align-self-stretch d-flex w-100 align-items-center justify-content-end" data-gjs-custom-name="Box - Phone Number">
              <i class="fas fa-phone mr-1 d-inline-block mt-1"></i>
              <p class="mb-0 d-inline-block mr-1">Call Us Now </p>
              <p class="mb-0 dhx-phone ic-phone-number d-inline-block">01 800 000</p>
            </div>
          </div>
              </div>
            </div>
          </nav>`,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-NavbarFwForm"}
        });

          ////////////////////
        // Bloque Navbar-Fluid //
        ////////////////////

        bm.add("navbar-01", {
          label: opt.navFormFWBlkLabel,
          category: opt.categoryNavbarFullWidth,
          content: ` <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light"  data-gjs-custom-name="${opt.navbar01BlkLabel}">
          <div class="container-fluid" data-gjs-custom-name="${opt.fullContainerLabel}">
            <div  class="navbar-header" data-gjs-custom-name="${opt.navHeaderLabel}">
                    <a class="navbar-brand" href="#" data-gjs-custom-name="${opt.navBrandLabel}">
                      <img src="http://via.placeholder.com/150x50/000000/ffffff?text=Brand+Logo" alt="logo img" height="40">
                    </a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav01" aria-controls="navbarNav01" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span></button>
                  </div>
                  <div class="collapse navbar-collapse" id="navbarNav01"  data-gjs-custom-name="${opt.navCollapseMenuLabel}">
                    <ul class="navbar-nav mr-auto" data-gjs-custom-name="${opt.navMenuLabel}">
                      <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item active"><a class="nav-link"  href="#">Home</a></li>
                      <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item"><a class="nav-link"  href="#">Link 01</a></li>
                      <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item"><a class="nav-link"  href="#">Link 02</a></li>
                      <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item"><a class="nav-link"  href="#">Link 03</a></li>
                      <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item"><a class="nav-link"  href="#">Link 04</a></li>
                    </ul>
                      <form class="dhx-form form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2  dhx-input-mw" type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" placeholder="Type your phone number">
            <button class="btn btn-outline-success my-2 my-sm-0" data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}"  type="submit">Call Me</button>
          </form>
                  </div>
                </div>
              </nav>`,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-NavbarFwForm"}
        });

        ////////////////////
        // Bloque Navbar-Boxed //
        ////////////////////

        bm.add("navbar-01Boxed", {
          label: opt.navFormBoxedBlkLabel,
          category: opt.categoryNavbarBoxed,
          content: `<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light"  data-gjs-custom-name="${opt.navbar01BoxedBlkLabel}">
                          <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
                              <div class="navbar-header" data-gjs-custom-name="${opt.navHeaderLabel}">
                                    <a class="navbar-brand" href="#" data-gjs-custom-name="${opt.navBrandLabel}">
                                      <img src="http://via.placeholder.com/150x50/000000/ffffff?text=Brand+Logo" alt="logo img" height="40">
                                    </a>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav02" aria-controls="navbarNav02" aria-expanded="false" aria-label="Toggle navigation">   <span class="navbar-toggler-icon"></span> </button>
                              </div>
                              <div class="collapse navbar-collapse" id="navbarNav02" data-gjs-custom-name="${opt.navCollapseMenuLabel}">
                                <ul class="navbar-nav mr-auto" data-gjs-custom-name="${opt.navMenuLabel}">
                                  <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item active"><a class="nav-link"  href="#">Home</a></li>
                                  <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item"><a class="nav-link"  href="#">Link 01</a></li>
                                  <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item"><a class="nav-link"  href="#">Link 02</a></li>
                                  <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item"><a class="nav-link"  href="#">Link 03</a></li>
                                  <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item"><a class="nav-link"  href="#">Link 04</a></li>
                                </ul>
                                <form class="dhx-form form-inline my-2 my-lg-0">
                                  <input class="form-control mr-sm-2  dhx-input-mw" type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" placeholder="Type your phone number">
                                  <button class="btn btn-outline-success my-2 my-sm-0" data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}"  type="submit">Call Me</button>
                                </form>
                              </div>
                          </div>
                    </nav>
                    `,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-NavbarBoxForm"}
        });

        ////////////////////
        // Bloque Navbar //
        ////////////////////

        bm.add("navbar-02", {
          label: opt.navMenuRBoxedBlkLabel,
          category: opt.categoryNavbarFullWidth,
          content: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark" data-gjs-custom-name="${opt.navbar02BlkLabel}">
                      <div class="container-fluid" data-gjs-custom-name="${opt.fullContainerLabel}">
                        <div class="navbar-header" data-gjs-custom-name="${opt.navHeaderLabel}">
                                <a class="navbar-brand" href="#" data-gjs-custom-name="${opt.navBrandLabel}">Brand</a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav03" aria-controls="navbarNav03" aria-expanded="false" aria-label="Toggle navigation">    <span class="navbar-toggler-icon"></span>  </button>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarNav03" data-gjs-custom-name="${opt.navCollapseMenuLabel}">
                          <ul class="navbar-nav ml-auto" data-gjs-custom-name="${opt.navMenuLabel}">
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item active"><a class="nav-link"  href="#">Home</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item"><a class="nav-link"  href="#">Link 01</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item"><a class="nav-link"  href="#">Link 02</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item"><a class="nav-link"  href="#">Link 03</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item"><a class="nav-link"  href="#">Link 04</a></li>
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
          content: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark" data-gjs-custom-name="${opt.navbar02BoxedBlkLabel}">
                      <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
                        <div class="navbar-header" data-gjs-custom-name="${opt.navHeaderLabel}">
                          <a class="navbar-brand" href="#" data-gjs-custom-name="${opt.navBrandLabel}">Brand</a>
                          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav04" aria-controls="navbarNav04" aria-expanded="false" aria-label="Toggle navigation">    <span class="navbar-toggler-icon"></span>  </button>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarNav04" data-gjs-custom-name="${opt.navCollapseMenuLabel}">
                            <ul class="navbar-nav ml-auto" data-gjs-custom-name="${opt.navMenuLabel}">
                              <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item active"><a class="nav-link"  href="#">Home</a></li>
                              <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item"><a class="nav-link"  href="#">Link 01</a></li><li data-gjs-droppable="i"><a class="nav-link"  href="#">Link 02</a></li>
                              <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item"><a class="nav-link"  href="#">Link 03</a></li><li data-gjs-droppable="i"><a class="nav-link"  href="#">Link 04</a></li>
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
          content: `<nav class="navbar navbar-expand-lg navbar-light bg-light" data-gjs-custom-name="${opt.navbar03BlkLabel}">
                      <div class="container-fluid" data-gjs-custom-name="${opt.fullContainerLabel}">
                        <div class="navbar-header" data-gjs-custom-name="${opt.navHeaderLabel}">
                          <a class="navbar-brand" href="#" data-gjs-custom-name="${opt.navBrandLabel}">Brand</a>
                          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav05" aria-controls="navbarNav05" aria-expanded="false" aria-label="Toggle navigation">    <span class="navbar-toggler-icon"></span>  </button>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarNav05" data-gjs-custom-name="${opt.navCollapseMenuLabel}">
                            <ul class="navbar-nav mr-auto" data-gjs-custom-name="${opt.navMenuLabel}">
                              <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item active"><a class="nav-link"  href="#">Home</a></li>
                              <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item"><a class="nav-link"  href="#">Link 01</a></li>
                              <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item"><a class="nav-link"  href="#">Link 02</a></li>
                              <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item"><a class="nav-link"  href="#">Link 03</a></li>
                              <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item"><a class="nav-link"  href="#">Link 04</a></li>
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
          content: `<nav class="navbar navbar-expand-lg navbar-light bg-light" data-gjs-custom-name="${opt.navbar03BoxedBlkLabel}">
                      <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
                        <div class="navbar-header" data-gjs-custom-name="${opt.navHeaderLabel}">
                                <a class="navbar-brand" href="#" data-gjs-custom-name="${opt.navBrandLabel}">Brand</a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav06" aria-controls="navbarNav06" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span></button>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarNav06" data-gjs-custom-name="${opt.navCollapseMenuLabel}">
                          <ul class="navbar-nav mr-auto" data-gjs-custom-name="${opt.navMenuLabel}">
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item active"><a class="nav-link"  href="#">Home</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item"><a class="nav-link"  href="#">Link 01</a></li><li data-gjs-droppable="i"><a class="nav-link"  href="#">Link 02</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item"><a class="nav-link"  href="#">Link 03</a></li>
                            <li data-gjs-custom-name="${opt.navMenuItemLabel}" data-gjs-droppable="i" class="nav-item"><a class="nav-link"  href="#">Link 04</a></li>
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
          content: `<a data-gjs-draggable=".navbar-collapse" class="btn btn-outline-primary navbar-btn" data-gjs-custom-name="${opt.buttonNavbarBlkLabel}">Button</a>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-BtnOne"}
        });

        bm.add("button-navbar-02", {
          label: opt.buttonNavbarBlkLabel,
          category: opt.categoryNavbarFullWidth,
          content: `<a data-gjs-draggable=".navbar-collapse" class="btn btn-outline-primary navbar-btn" data-gjs-custom-name="${opt.buttonNavbarBlkLabel}">Button</a>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-BtnOne"}
        });

        //////////////////
        // Bloque TopAddressBar-FullWidth//
        ///////////////////

        bm.add("address-navbar", {
          label: opt.addressFwNavbarBlkLabel,
          category: opt.categoryNavbarFullWidth,
          content: `<section class="dhx-top-addressbar d-none d-sm-block navbar-dark bg-primary text-white" data-gjs-custom-name="${opt.addressFwNavbarBlkLabel}">
                        <div class="container-fluid" data-gjs-custom-name="${opt.fullContainerLabel}">
                        <div class="row " data-gjs-custom-name="${opt.sectRow}">
                            <div class="col-sm-8 col-12 dhx-address-box text-left d-flex align-items-center" data-gjs-custom-name="${opt.sectColumn}">
                                <address  class="d-inline-block mr-2 mb-0" ><i class="far fa-clock mr-1" data-gjs-custom-name="${opt.IconBlkLabel}"></i> We are today working: 9:00 am - 5:00 pm</address>
                                <address  class="d-inline-block mb-0"><i class="fas fa-phone mr-1" data-gjs-custom-name="${opt.IconBlkLabel}"></i> Call us <span data-gjs-custom-name="${opt.routedPhoneNumberBlkLabel}" class="ic-routed-number">+44 558 558 558</span></address>
                            </div>
                            <div class="col-sm-4 col-12 dhx-rrss-links text-right  d-flex align-items-center justify-content-end" data-gjs-custom-name="${opt.sectColumn}">
                                <a  class="btn btn-secondary my-1 d-inline-flex" href="https://www.facebook.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fab fa-facebook"></i></a>
                                <a  class="btn btn-secondary my-1 d-inline-flex" href="https://www.twitter.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fab fa-twitter"></i></a>
                                <a  class="btn btn-secondary my-1 d-inline-flex" href="https://www.youtube.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fab fa-youtube"></i></a>
                                <a  class="btn btn-secondary my-1 d-inline-flex" href="mailto:name@email.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fas fa-envelope"></i></a>
                            </div>
                          </div>
                        </div>
                      </section>
                      <style>
                      .dhx-top-addressbar {background-color:#f2f2f2}
                      address{font-size:12px; }
                      address i{font-size:16px;}
                      .dhx-rrss-links a{font-size:18px;}
                      </style>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-TopNavbarFw"}
        });

        //////////////////
        // Bloque TopAddressBar//
        ///////////////////

        bm.add("address-navbar-02", {
          label: opt.addressBoxedNavbarBlkLabel,
          category: opt.categoryNavbarBoxed,
          content: `<section class="dhx-top-addressbar d-none d-md-block navbar-dark bg-primary text-white" data-gjs-custom-name="${opt.addressBoxedNavbarBlkLabel}">
                      <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
                      <div class="row" data-gjs-custom-name="${opt.sectRow}">
                          <div class="col-md-8 col-12 dhx-address-box d-flex align-items-center"  data-gjs-custom-name="${opt.sectColumn}">
                              <address class="d-inline-block mr-2 mb-0"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="far fa-clock mr-1" ></i> We are today working: 9:00 am - 5:00 pm</address>
                              <address class="d-inline-block mb-0"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fas fa-phone mr-1" ></i> Call us <span data-gjs-custom-name="${opt.routedPhoneNumberBlkLabel}" class="ic-routed-number">+44 558 558 558</span></address>
                          </div>
                          <div class="col-md-4 col-12 dhx-rrss-links d-flex align-items-center justify-content-end" data-gjs-custom-name="${opt.sectColumn}">
                              <a   class="btn btn-secondary my-1 d-inline-flex" href="https://www.facebook.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fab fa-facebook"></i></a>
                              <a   class="btn btn-secondary my-1 d-inline-flex" href="https://www.twitter.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fab fa-twitter"></i></a>
                              <a   class="btn btn-secondary my-1 d-inline-flex" href="https://www.youtube.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fab fa-youtube"></i></a>
                              <a   class="btn btn-secondary my-1 d-inline-flex" href="mailto:name@email.com" target="_blank"><i data-gjs-custom-name="${opt.IconBlkLabel}" class="fas fa-envelope" ></i></a>
                          </div>
                        </div>
                      </div>
                    </section>
                    <style>
                    .dhx-top-addressbar {background-color:#f2f2f2}
                    .dhx-address-box{text-align: left;}
                    address{font-size:12px;}
                    address i{font-size:16px;}
                    .dhx-rrss-links{text-align:right}
                    .dhx-rrss-links a{font-size:18px;}
                    @media all and (max-width:768px){
                                                      address{text-align: center;}
                                                      .dhx-address-box, .dhx-rrss-links{text-align:center}
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
          content: `<img data-gjs-custom-name="Image" class="img-fluid" src="http://via.placeholder.com/600x350" data-gjs-custom-name="${opt.imageBlkLabel}">`
        });

        //////////////////
        // Bloque Video //
        //////////////////
        bm.add("video", {
          label: opt.videoBlkLabel,
          category: opt.categoryMedia,
          attributes: { class: "gjs-icon-block-label icon-blocks icon-block-Video"},
          content: `<div data-gjs-custom-name="${opt.videoBlkLabel} Box" class="embed-responsive embed-responsive-21by9">
                      <iframe  data-gjs-custom-name="${opt.videoBlkLabel}" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/" frameborder="0" allowfullscreen="true"></iframe>
                    </div>`
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
          content: `<div class="countdown dhx-countdown py-3 text-center" data-gjs-type="countdown" data-js-type="countdown" data-gjs-custom-name="Countdown - Edit Time Here">
                      <div class="countdown-cont row justify-content-center align-items-stretch " data-js="countdown" data-gjs-custom-name="Countdown Container">
                        <div class="countdown-block col-2 p-3 mx-2 dhx-bg-gray1" data-gjs-custom-name="Countdown Digit Box" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">
                          <div data-js="countdown-day" class="countdown-digit" data-gjs-custom-name="Countdown Digit" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">00</div>
                          <div class="countdown-label" data-gjs-custom-name="Countdown Label" data-gjs-draggable="false" data-gjs-droppable="false">${opt.labelDays}</div>
                        </div>
                        <div class="countdown-block col-2 p-3 mx-2 dhx-bg-gray1" data-gjs-custom-name="Countdown Digit Box" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">
                          <div data-js="countdown-hour" class="countdown-digit" data-gjs-custom-name="Countdown Digit" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">00</div>
                          <div class="countdown-label" data-gjs-custom-name="Countdown Label" data-gjs-draggable="false" data-gjs-droppable="false">${opt.labelHours}</div>
                        </div>
                        <div class="countdown-block col-2 p-3 mx-2 dhx-bg-gray1" data-gjs-custom-name="Countdown Digit Box" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">
                          <div data-js="countdown-minute" class="countdown-digit" data-gjs-custom-name="Countdown Digit" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">00</div>
                          <div class="countdown-label" data-gjs-custom-name="Countdown Label" data-gjs-draggable="false" data-gjs-droppable="false">${opt.labelMinutes}</div>
                        </div>
                        <div class="countdown-block col-2 p-3 mx-2 dhx-bg-gray1" data-gjs-custom-name="Countdown Digit Box" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">
                          <div data-js="countdown-second" class="countdown-digit" data-gjs-custom-name="Countdown Digit" data-gjs-editable="false" data-gjs-draggable="false" data-gjs-droppable="false">00</div>
                          <div class="countdown-label" data-gjs-custom-name="Countdown Label" data-gjs-draggable="false" data-gjs-droppable="false">${opt.labelSeconds}</div>
                        </div>
                      </div>
                      <div data-js="countdown-endtext" class="countdown-endtext" data-gjs-custom-name="${opt.countdownEndTextLabel}"></div>
                    </div>
                    <style>
                      .countdown-digit {font-size: 4rem; line-height: 1em}
                      .countdown-label{line-height: 1em }
                      .countdown-endtext {font-size: 4rem;}
                    </style>
                    `
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
          content: `<form data-gjs-custom-name="${opt.FormLabel}" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto pt-1 pt-sm-3">
                      <div data-gjs-draggable="form, form *" class="form-group form-row" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <div data-gjs-draggable="form, form *"  class="col-sm-6 col-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                          <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="name-input">First Name</label>
                          <input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputFirstNameBlkLabel}" class="input form-control dhx-input-mw" placeholder="Eg. Peter" />
                        </div>
                        <div data-gjs-draggable="form, form *"  class="col-sm-6 col-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                          <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="name-input">Last Name</label>
                          <input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputLastNameBlkLabel}" class="input form-control dhx-input-mw" placeholder="Eg. Smith" />
                        </div>
                      </div>
                      <div data-gjs-draggable="form, form *" class="form-group form-row" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <div data-gjs-draggable="form, form *"  class="col-sm-6 col-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                          <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="phone-input">Phone Number</label>
                          <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder=" (00) 0000 0000"/>
                          <small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
                        </div>
                        <div data-gjs-draggable="form, form *"  class="col-sm-6 col-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                          <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="email-input">Email</label>
                          <input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputEmailBlkLabel}" class="input form-control dhx-input-mw" aria-describedby="emailHelp" placeholder="Eg. name@email.com" />
                          <small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
                        </div>
                      </div>
                      <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success">Submit</button>
                      <div data-gjs-draggable="form, form *" class="form-group mt-1" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="form-check pl-md-2" data-gjs-draggable="form, form *">
                          <input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" type="checkbox" class="form-check-input dhx-terms-box" >
                          <label data-gjs-draggable="form, form *" class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                            I have read and accept the <a href="" data-gjs-custom-name="${opt.checkboxTermsBlkLabel} - ${opt.linkBlkLabel}">Terms and Conditions.</a>
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
          content: `<form data-gjs-custom-name="${opt.FormLabel}" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto pt-1 pt-sm-3">
                        <h4>${opt.phoneFormTitleH4}</h4>
                        <div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                          <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="phone-input">Phone Number</label>
                          <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder=" (00) 0000 0000"/>
                          <small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
                        </div>
                        <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success">Submit</button>
                        <div data-gjs-draggable="form, form *" class="form-group  mt-1" data-gjs-custom-name="${opt.FormGroupLabel}">
                          <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="form-check pl-md-2" data-gjs-draggable="form, form *">
                            <input data-ic-form-field="terms" id="terms-check-01" name="terms-check-01" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" type="checkbox" class="form-check-input dhx-terms-box" >
                            <label data-gjs-draggable="form, form *" class="form-check-label dhx-terms" for="terms-check-01" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                              I have read and accept the <a href="" data-gjs-custom-name="${opt.checkboxTermsBlkLabel} - ${opt.linkBlkLabel}">Terms and Conditions.</a>
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
          content: `<form method="post" action="" class="dhx-form form-box m-auto pt-1 pt-sm-3 form-inline" data-gjs-custom-name="${opt.FormLabel}" >
                        <div data-gjs-draggable="form, form *" class="form-group mr-2" data-gjs-custom-name="${opt.FormGroupLabel}">
                            <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control dhx-input-mw"  placeholder="Type your phone number" />
                        </div>
                        <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success mr-2">Submit</button>
                        <div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                          <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="form-check pl-md-2" data-gjs-draggable="form, form *">
                            <input data-ic-form-field="terms" id="terms-check-02" name="terms-check-02" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" type="checkbox" class="form-check-input dhx-terms-box" >
                            <label data-gjs-draggable="form, form *" class="form-check-label dhx-terms" for="terms-check-02" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                              I have read and accept the <a href="" data-gjs-custom-name="${opt.checkboxTermsBlkLabel} - ${opt.linkBlkLabel}">Terms and Conditions.</a>
                            </label>
                          </div>
                      </div>
                    </form>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-BasicForm"}
        });

        ///////////////////
        // Bloque Phone+Email Form Inline //
        ///////////////////
        bm.add("phoneEmail-form-inline", {
          label: opt.phoneEmailFormInlineBlkLabel,
          category: opt.categoryForm,
          content: `<form method="post" action="" class="dhx-form form-box m-auto pt-1 pt-sm-3 form-inline" data-gjs-custom-name="${opt.FormLabel}" >
                        <div data-gjs-draggable="form, form *" class="form-group mr-2" data-gjs-custom-name="${opt.FormGroupLabel}">
                            <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control dhx-input-mw"  placeholder="Type your phone number" />
                        </div>
                        <div data-gjs-draggable="form, form *" class="form-group mr-2" data-gjs-custom-name="${opt.FormGroupLabel}">
                            <input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputEmailBlkLabel}" class="input form-control dhx-input-mw" aria-describedby="emailHelp" placeholder="Eg. name@email.com" />
                        </div>
                        <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success mr-2">Submit</button>
                        <div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                          <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="form-check pl-md-2" data-gjs-draggable="form, form *">
                            <input data-ic-form-field="terms" id="terms-check-03" name="terms-check-03" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" type="checkbox" class="form-check-input dhx-terms-box" >
                            <label data-gjs-draggable="form, form *" class="form-check-label dhx-terms" for="terms-check-03" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                              I have read and accept the <a href="" data-gjs-custom-name="${opt.checkboxTermsBlkLabel} - ${opt.linkBlkLabel}">Terms and Conditions.</a>
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
          content: `<form action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto pt-1 pt-sm-3">
											<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="${opt.FormTitleContainer}">
													<h3 class="mb-1">${opt.contactFormTitleH4}</h3>
													<p>${opt.contactFormTextp}</p>
											</div>
                      <div data-gjs-draggable="form, form *" class="form-group form-row" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <div data-gjs-draggable="form, form *"  class="col-sm-6 col-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                          <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="name-input">First Name</label>
                          <input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputFirstNameBlkLabel}" class="input form-control dhx-input-mw" placeholder="Eg. Peter" />
                        </div>
                        <div data-gjs-draggable="form, form *"  class="col-sm-6 col-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                          <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="name-input">Last Name</label>
                          <input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputLastNameBlkLabel}" class="input form-control dhx-input-mw" placeholder="Eg. Smith" />
                        </div>
                      </div>
                      <div data-gjs-draggable="form, form *" class="form-group form-row" data-gjs-custom-name="${opt.FormGroupLabel}">
                          <div data-gjs-draggable="form, form *"  class="col-sm-6 col-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                            <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="phone-input">Phone Number</label>
                            <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder=" (00) 0000 0000"/>
                            <small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
                          </div>
                          <div data-gjs-draggable="form, form *"  class="col-sm-6 col-12" data-gjs-custom-name="${opt.sect12BlkLabel}">
                            <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="email-input">Email</label>
                            <input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputEmailBlkLabel}" class="input form-control dhx-input-mw" aria-describedby="emailHelp" placeholder="Eg. name@email.com" />
                            <small data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
                          </div>
                      </div>
                      <div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="textarea">Textarea</label>
                        <textarea data-gjs-custom-name="${opt.FormLabel} - ${opt.textareaBlkLabel}" class="form-control" id="comments" rows="3"></textarea>
                      </div>
                      <button data-gjs-custom-name="${opt.FormLabel} - ${opt.buttonSendBlkLabel}" type="submit" class="btn btn-success">Submit</button>
                      <div data-gjs-draggable="form, form *" class="form-group  mt-1" data-gjs-custom-name="${opt.FormGroupLabel}">
                          <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="form-check pl-md-2" data-gjs-draggable="form, form *">
                            <input data-ic-form-field="terms" id="terms-check-04" name="terms-check-04" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" type="checkbox" class="form-check-input dhx-terms-box" >
                            <label data-gjs-draggable="form, form *" class="form-check-label dhx-terms" for="terms-check-04" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                              I have read and accept the <a href="" data-gjs-custom-name="${opt.checkboxTermsBlkLabel} - ${opt.linkBlkLabel}">Terms and Conditions.</a>
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
          content: `<label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1">Label</label>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Flabel"}
        });

        //////////////////////
        // Bloque Aclaration //
        /////////////////////
        bm.add("aclaration", {
          label: opt.FormAclarationsLabel,
          category: opt.categoryFormComp,
          content: `<small data-gjs-draggable="form, form *" data-gjs-droppable="form" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormAclarationsLabel}" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Flabel"}
        });

        // //////////////////////
        // // Bloque Input - Type Text //
        // /////////////////////
        // bm.add("input-text", {
        //   label: opt.inputTextBlkLabel,
        //   category: opt.categoryFormComp,
        //   content: `<input type="tel" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputTextBlkLabel}" class="input form-control dhx-input-mw" />`,
        //   attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        // });

        //////////////////////
        // Bloque Input - Type Email //
        /////////////////////
        bm.add("input-email", {
          label: `${opt.inputBlkLabel} ${opt.inputEmailBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="email-input" >${opt.inputEmailBlkLabel}</label>
                      <input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputEmailBlkLabel}" class="input form-control dhx-input-mw" />
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="title-input" >${opt.inputTitleBlkLabel}</label>
                      <input type="text" data-ic-form-field="title" id="title-input" name="title-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputTitleBlkLabel}" class="input form-control dhx-input-mw" />
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="firstname-input" >${opt.inputFirstNameBlkLabel}</label>
                      <input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputFirstNameBlkLabel}" class="input form-control dhx-input-mw" />
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="lastname-input" >${opt.inputLastNameBlkLabel}</label>
                      <input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputLastNameBlkLabel}" class="input form-control dhx-input-mw" />
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="company-input" >${opt.inputCompanyBlkLabel}</label>
                      <input type="text" data-ic-form-field="company" id="company-input" name="company-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputCompanyBlkLabel}" class="input form-control dhx-input-mw" />
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="position-input" >${opt.inputPositionBlkLabel}</label>
                      <input type="text" data-ic-form-field="position" id="position-input" name="position-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPositionBlkLabel}" class="input form-control dhx-input-mw" />
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="phone-input" >${opt.inputPhoneBlkLabel}</label>
                      <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputPhoneBlkLabel}" class="input form-control dhx-input-mw" />
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Finput"}
        });

        //////////////////////
        // Bloque Input - Type Mobile //
        /////////////////////
        bm.add("input-mobile", {
          label: `${opt.inputBlkLabel} ${opt.inputMobileBlkLabel}`,
          category: opt.categoryFormComp,
          content: ` <div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                        <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="mobile-input" >${opt.inputMobileBlkLabel}</label>
                        <input type="tel" data-ic-form-field="mobile" id="mobile-input" name="mobile-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputMobileBlkLabel}" class="input form-control dhx-input-mw" />
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="fax-input" >${opt.inputFaxBlkLabel}</label>
                      <input type="tel" data-ic-form-field="fax" id="fax-input" name="fax-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputFaxBlkLabel}" class="input form-control dhx-input-mw" />
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="website-input" >${opt.inputWebsiteBlkLabel}</label>
                      <input type="url" data-ic-form-field="website" id="website-input" name="website-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputWebsiteBlkLabel}" class="input form-control dhx-input-mw" />
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="address1-input" >${opt.inputAddress1BlkLabel}</label>
                      <input type="text" data-ic-form-field="address1" id="address1-input" name="address1-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputAddress1BlkLabel}" class="input form-control dhx-input-mw" />
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="address2-input" >${opt.inputAddress2BlkLabel}</label>
                      <input type="text" data-ic-form-field="address2" id="address2-input" name="address2-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputAddress2BlkLabel}" class="input form-control dhx-input-mw" />
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="country-input" >${opt.inputCountryBlkLabel}</label>
                      <input type="text" data-ic-form-field="country" id="country-input" name="country-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputCountryBlkLabel}" class="input form-control dhx-input-mw" />
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="custom-select" >${opt.inputCountryBlkLabel}</label>
                      <select data-gjs-custom-name="${opt.FormLabel} - ${opt.selectBlkLabel} ${opt.inputCountryBlkLabel}" class="custom-select" data-ic-form-field="country" id="country-select" name="country-select">
                        <option selected>Choose your country</option>
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="state-input" >${opt.inputStateBlkLabel}</label>
                      <input type="text" data-ic-form-field="state" id="state-input" name="state-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputStateBlkLabel}" class="input form-control dhx-input-mw" />
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="state-select" >${opt.inputStateBlkLabel}</label>
                      <select data-gjs-custom-name="${opt.FormLabel} - ${opt.selectBlkLabel} ${opt.inputStateBlkLabel}" class="custom-select" data-ic-form-field="state" id="state-select" name="state-select">
                        <option selected>Choose your state</option>
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="city-input" >${opt.inputCityBlkLabel}</label>
                      <input type="text" data-ic-form-field="city" id="city-input" name="city-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputCityBlkLabel}" class="input form-control dhx-input-mw" />
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="city-select" >${opt.inputCityBlkLabel}</label>
                      <select data-gjs-custom-name="${opt.FormLabel} - ${opt.selectBlkLabel} ${opt.inputCityBlkLabel}"  class="custom-select" data-ic-form-field="city" id="city-select" name="city-select" >
                      <option selected>Choose your city</option>
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="zip-input" >${opt.inputZipBlkLabel}</label>
                      <input type="text" data-ic-form-field="zip" id="zip-input" name="zip-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputZipBlkLabel}" class="input form-control dhx-input-mw" />
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="facebook-input" >${opt.inputFacebookBlkLabel}</label>
                      <input type="text" data-ic-form-field="facebook" id="facebook-input" name="facebook-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputFacebookBlkLabel}" class="input form-control dhx-input-mw" />
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="twitter-input" >${opt.inputTwitterBlkLabel}</label>
                      <input type="text" data-ic-form-field="twitter" id="twitter-input" name="twitter-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputTwitterBlkLabel}" class="input form-control dhx-input-mw" />
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="skype-input" >${opt.inputSkypeBlkLabel}</label>
                      <input type="text" data-ic-form-field="skype" id="skype-input" name="skype-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputSkypeBlkLabel}" class="input form-control dhx-input-mw" />
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="google-input" >${opt.inputGooglePlusBlkLabel}</label>
                      <input type="text" data-ic-form-field="googlePlus" id="googlePlus-input" name="googlePlus-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputGooglePlusBlkLabel}" class="input form-control dhx-input-mw" />
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="linkedin-input" >${opt.inputLinkedinBlkLabel}</label>
                      <input type="text" data-ic-form-field="linkedin" id="linkedin-input" name="linkedin-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputLinkedinBlkLabel}" class="input form-control dhx-input-mw" />
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="instagram-input" >${opt.inputInstagramBlkLabel}</label>
                      <input type="text" data-ic-form-field="instagram" id="instagram-input" name="instagram-input" data-gjs-custom-name="${opt.FormLabel} - ${opt.inputBlkLabel} ${opt.inputInstagramBlkLabel}" class="input form-control dhx-input-mw" />
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="language-select" >${opt.inputLanguageBlkLabel}</label>
                      <select data-gjs-custom-name="${opt.FormLabel} - ${opt.selectBlkLabel} ${opt.inputLanguageBlkLabel}" class="custom-select" data-ic-form-field="language" id="language-select" name="language-select" >
                        <option selected>Choose your language</option>
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
                      <div class="form-check form-check-inline">
                          <input data-ic-form-field="language" id="language-radio-1" name="languageRadio" data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.buttonLabel}" class="form-check-input dhx-terms-box" type="radio" value="english">
                          <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.FormLabelLabel}" class="form-check-label dhx-terms" for="language-radio-1">English</label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                          <input data-ic-form-field="language" id="language-radio-2" name="languageRadio" data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.buttonLabel}" class="form-check-input dhx-terms-box"  type="radio" value="spanish">
                          <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.FormLabelLabel}" class="form-check-label dhx-terms" for="language-radio-2">Spanish</label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                          <input data-ic-form-field="language" id="language-radio-3" name="languageRadio" data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.buttonLabel}" class="form-check-input dhx-terms-box" type="radio" value="french">
                          <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormRadioLabel} - ${opt.FormLabelLabel}" class="form-check-label dhx-terms" for="language-radio-3">French</label>
                      </div>
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Fradio"}
        });

        //////////////////////
        // Bloque checkbox Language//
        /////////////////////
        bm.add("checkbox-language", {
          label: `${opt.checkboxBlkLabel} ${opt.inputLanguageBlkLabel}`,
          category: opt.categoryFormComp,
          content: `<div data-gjs-draggable="form, form *" class="form-group" data-gjs-custom-name="${opt.FormGroupLabel}">
                      <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="form-check pl-md-2" data-gjs-draggable="form, form *">
                          <input data-ic-form-field="language" id="language-en" name="language-en" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" class="form-check-input dhx-terms-box" type="checkbox" value="language-en" >
                          <label data-gjs-draggable="form, form *" class="form-check-label dhx-terms" for="language-en" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">English</label>
                      </div>
                      <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="form-check pl-md-2" data-gjs-draggable="form, form *">
                          <input data-ic-form-field="language" id="language-es" name="language-es" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" class="form-check-input dhx-terms-box" type="checkbox" value="language-es" >
                          <label data-gjs-draggable="form, form *" class="form-check-label dhx-terms" for="language-es" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">Spanish</label>
                      </div>
                      <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="form-check pl-md-2" data-gjs-draggable="form, form *">
                        <input data-ic-form-field="language" id="language-fr" name="language-fr" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" class="form-check-input dhx-terms-box" type="checkbox" value="language-fr" >
                        <label data-gjs-draggable="form, form *" class="form-check-label dhx-terms" for="language-fr" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">French</label>
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
                      <div data-gjs-custom-name="${opt.FormLabel} - ${opt.FormCheckboxLabel}" class="form-check pl-md-2" data-gjs-draggable="form, form *">
                        <input data-ic-form-field="terms" id="terms-check-05" name="terms-check-05" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.checkboxBoxLabel}" type="checkbox" class="form-check-input dhx-terms-box" >
                        <label data-gjs-draggable="form, form *" class="form-check-label dhx-terms" for="terms-check-05" data-gjs-custom-name="${opt.FormCheckboxLabel} - ${opt.FormLabelLabel}">
                          I have read and accept the <a href="" data-gjs-custom-name="${opt.checkboxTermsBlkLabel} - ${opt.linkBlkLabel}">Terms and Conditions.</a>
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
                      <label data-gjs-draggable="form, form *" data-gjs-custom-name="${opt.FormLabel} - ${opt.FormLabelLabel}" class="label-tag dhx-label mb-1" for="text-input" >${opt.textareaBlkLabel}</label>
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
          content: `<div height="50" data-gjs-custom-name="${opt.BoxDivSectionBlkLabel}" class="empty-div"></div>`,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-FullW1"}
        });

        /////////////////////////
        // Bloque Jumbotron Boxed //
        /////////////////////////

        bm.add("banner-box", {
          label: opt.BoxedbannerSectionBlkLabel,
          category: opt.categoryContent,
          content: `<div class="jumbotron container dhx-intro-sect" data-gjs-custom-name="${opt.BoxedbannerSectionBlkLabel}">
                      <h1 class="display-4">Hello, world!</h1>
                      <p class="lead">Text Here.</p>
                      <hr data-gjs-custom-name="${opt.dividerBlkLabel}" class="my-4">
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
          content: `<div class="jumbotron jumbotron-fluid dhx-intro-sect" data-gjs-custom-name="${opt.FullWidthbannerSectionBlkLabel}">
                      <div class="container" data-gjs-custom-name="${opt.boxContainerLabel}">
                        <h1 class="display-4">Hello, world!</h1>
                        <p class="lead">Text Here.</p>
                        <hr data-gjs-custom-name="${opt.dividerBlkLabel}" class="my-4">
                        <a class="btn btn-secondary btn-lg" href="#" role="button">Learn more</a>
                      </div>
                    </div>
                    `,
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
          label: opt.cardSectionBlkLabel,
          category: opt.categoryContent,
          content: `<div data-gjs-custom-name="${opt.cardSectionBlkLabel}" class="card text-center">
                      <h5 class="card-header" data-gjs-custom-name="${opt.cardHeadBlkLabel}">Featured</h5>
                      <div class="card-block py-3" data-gjs-custom-name="${opt.cardBodyBlkLabel}">
                        <h4 class="card-title">Card Title</h4>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere vulputate eleifend. Sed id pellentesque augue. Donec leo nisl, tempor at diam ac, elementum tempor arcu.</p>
                      </div>
                      <div data-gjs-custom-name="${opt.cardFooterBlkLabel}" class="card-footer">
                        <a href="#" class="btn btn-secondary">Button</a>
                      </div>
                    </div>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Panel"}
        });

        ///////////////////////////////
        // Cards //////
        ////////////////////////////
        bm.add("cards", {
          label: opt.cardsSectionBlkLabel,
          category: opt.categoryContent,
          content: `<div data-gjs-custom-name="${opt.sectRow}" class="card-deck">
                        <div data-gjs-custom-name="${opt.cardSectionBlkLabel}" class="card text-center">
                          <h5 class="card-header" data-gjs-custom-name="${opt.cardHeadBlkLabel}">Featured</h5>
                          <div class="card-block py-3" data-gjs-custom-name="${opt.cardBodyBlkLabel}">
                            <h4 class="card-title">Card Title</h4>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere vulputate eleifend. Sed id pellentesque augue. Donec leo nisl, tempor at diam ac, elementum tempor arcu.</p>
                          </div>
                          <div data-gjs-custom-name="${opt.cardFooterBlkLabel}" class="card-footer">
                            <a href="#" class="btn btn-secondary">Button</a>
                          </div>
                        </div>
                        <div data-gjs-custom-name="${opt.cardSectionBlkLabel}" class="card text-center">
                          <h5 class="card-header" data-gjs-custom-name="${opt.cardHeadBlkLabel}">Featured</h5>
                          <div class="card-block py-3" data-gjs-custom-name="${opt.cardBodyBlkLabel}">
                            <h4 class="card-title">Card Title</h4>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere vulputate eleifend. Sed id pellentesque augue. Donec leo nisl, tempor at diam ac, elementum tempor arcu.</p>
                          </div>
                          <div data-gjs-custom-name="${opt.cardFooterBlkLabel}" class="card-footer">
                            <a href="#" class="btn btn-secondary">Button</a>
                          </div>
                        </div>
                        <div data-gjs-custom-name="${opt.cardSectionBlkLabel}" class="card text-center">
                        <h5 class="card-header" data-gjs-custom-name="${opt.cardHeadBlkLabel}">Featured</h5>
                        <div class="card-block py-3" data-gjs-custom-name="${opt.cardBodyBlkLabel}">
                          <h4 class="card-title">Card Title</h4>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere vulputate eleifend. Sed id pellentesque augue. Donec leo nisl, tempor at diam ac, elementum tempor arcu.</p>
                        </div>
                        <div data-gjs-custom-name="${opt.cardFooterBlkLabel}" class="card-footer">
                          <a href="#" class="btn btn-secondary">Button</a>
                        </div>
                      </div>
                    </div>
                    `,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Cards"}
        });

        //////////////////
        // Bloque Quote //
        //////////////////

        bm.add("quote", {
          label: opt.quoteBlkLabel,
          category: opt.categoryContent,
          content: `<blockquote data-gjs-custom-name="${opt.quoteBlkLabel}" data-gjs-droppable=""><p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p><footer class="blockquote-footer">Author Name in <cite title="Source Title">Source Title</cite></footer></blockquote>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-Blockquote"}
        });

        //////////////////
        // Bloque Button Genérico - Primary//
        ///////////////////

        bm.add("button-first", {
          label: opt.buttonPrimaryBlkLabel,
          category: opt.categoryContent,
          content: `<a data-gjs-custom-name="${opt.buttonPrimaryBlkLabel}" class="btn btn-secondary" href="#">Button</a>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-BtnOne"}
        });

        ///////////////////
        // Bloque Button Genérico - Secondary //
        ///////////////////

        bm.add("button-second", {
          label: opt.buttonSecondaryBlkLabel,
          category: opt.categoryContent,
          content: `<a data-gjs-custom-name="${opt.buttonSecondaryBlkLabel}" class="btn btn-outline-primary" href="#">Button</a>`,
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
          content: `<hr data-gjs-custom-name="${opt.dividerBlkLabel}" class="my-4" data-gjs-droppable="false" >`,
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
          category: opt.categoryMobileContent,
          content: `<a href="tel:01 800 000" class="ic-phone-link dhx-phone-link py-3 bg-info d-block d-md-none fixed-bottom text-white" data-gjs-custom-name="${opt.mobileC2CNavbarBlkLabel}">
											<div class="container text-center" data-gjs-custom-name="${opt.boxContainerLabel}">
												<div class="row" data-gjs-custom-name="${opt.sectRow}">
													<div class="col-12" data-gjs-custom-name="${opt.sectColumn}">
														<p class="mb-0 d-inline-block mr-1">Call Us Now </p>
														<p class="mb-0 dhx-phone ic-phone-number d-inline-block">01 800 000</p>
														<i class="fas fa-phone ml-2 d-inline-block align-middle"></i>
													</div>
												</div>
											</div>
										</a>
                  // <style>
                  // .dhx-phone-link{z-index:10000; box-shadow: 6px 6px 6px rgba(0,0,0,0.8)}
                  // </style>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-MobileC2C"},
        });

        //////////////////
        // Bloque Mobile Form Section//
        ///////////////////

        bm.add("mobileform-navbar", {
          label: opt.mobileFormBlkLabel,
          category: opt.categoryMobileContent,
          content: `<section class="container d-flex justify-content-center px-0 px-sm-3 dhx-mobileform-sect" id="dhx-form-mobile" data-gjs-custom-name="Section - Mobile Form">
											<div class="row align-items-center dhx-w100 " data-gjs-custom-name="Row">
											<div class="col-12 d-block d-md-none mx-auto px-0" data-gjs-custom-name="Column">
												<div class="dhx-bg-gray1 dhx-mobileform-container" data-gjs-custom-name="Form Container">
													<div class="text-center bg-dark text-light p-3 dhx-form-title" data-gjs-custom-name="Form Title">
														<h3 class="m-0">Consect Adipis</h3>
													</div>
													<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto px-sm-5 px-4 py-4 ">
															<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
																<div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
																<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label" for="firstname-input">First Name*</label>
																<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="" />
																</div>
																<div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
																<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label" for="lastname-input">Last Name*</label>
																<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="" />
																</div>
															</div>
															<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
																<div class="col-12" data-gjs-custom-name="2 Columns">
																<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
																<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number"/>
																</div>
															</div>
															<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
																<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
																<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="email-input">Email*</label>
																<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email.</small>
																<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="name@email.com" />
																</div>
															</div>
															<div class="form-row form-group text-center" data-gjs-custom-name="Form Group">
																<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
																	<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-lg btn-success mx-auto">Submit</button>
																</div>
															</div>
															<div data-gjs-draggable="form, form *"  class="form-group form-row mt-1 mb-0 text-center" data-gjs-custom-name="Form Group">
																<div data-gjs-custom-name="Form - Checkbox" class="form-check col-12 pl-md-2" data-gjs-draggable="form, form *" >
																	<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
																	<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
																</div>
															</div>
													</form>
												</div>
											</div>
											</div>
							</section>`,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-BasicForm"},
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
          <li data-gjs-custom-name="${opt.listItemsBlkLabel}" class="dhx-list-item" data-gjs-droppable="i" data-gjs-draggable=".list-body">List Item 01</li>
          <li data-gjs-custom-name="${opt.listItemsBlkLabel}" class="dhx-list-item" data-gjs-droppable="i" data-gjs-draggable=".list-body">List Item 02</li>
          <li data-gjs-custom-name="${opt.listItemsBlkLabel}" class="dhx-list-item" data-gjs-droppable="i" data-gjs-draggable=".list-body">List Item 03</li>`;

        var listInlineItem =
         `
         <li data-gjs-custom-name="${opt.listItemsBlkLabel}" data-gjs-droppable="i" class="dhx-list-item list-inline-item" data-gjs-draggable=".list-inline-body">List Item 01</li>
         <li data-gjs-custom-name="${opt.listItemsBlkLabel}" data-gjs-droppable="i" class="dhx-list-item list-inline-item" data-gjs-draggable=".list-inline-body">List Item 02</li>
         <li data-gjs-custom-name="${opt.listItemsBlkLabel}" data-gjs-droppable="i" class="dhx-list-item list-inline-item" data-gjs-draggable=".list-inline-body">List Item 03</li>`;

        var listDescItem =
          `
          <dt data-gjs-custom-name="${opt.listDescItemsBlkLabel}" data-gjs-droppable="i" class="dhx-list-item list-desc-item col-12 col-sm-3 col-md-2" data-gjs-draggable=".list-desc-body">Name</dt>
          <dd data-gjs-custom-name="${opt.listDescItemsBlkLabel}" data-gjs-droppable="i" class="dhx-list-item list-desc-item col-12 col-sm-9 col-md-10" data-gjs-draggable=".list-desc-body">Description</dd>`;

        var listMediaItem =
          `<li data-gjs-custom-name="${opt.listMediaItemBlkLabel}" class="dhx-list-item media my-4 align-items-center"  data-gjs-droppable="i" data-gjs-draggable=".media-list">
                  <img class="mr-3" src="http://placehold.it/200x200/78c5d6/fff/" alt="Placeholder image">
                  <div class="media-body">
                    <h5 class="mt-0 mb-1">Middle aligned media</h5>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p> <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  </div>
           </li>`;

        bm.add("list-ordered", {
          label: opt.listOrderedBlkLabel,
          category: opt.categoryList,
          content: `<ol class="list-body dhx-list"  data-gjs-custom-name="${opt.listOrderedBlkLabel}">${listItem}${listItem}</ol>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-listOrdered"}
        });

        bm.add("list-Unordered", {
          label: opt.listUnorderedBlkLabel,
          category: opt.categoryList,
          content: `<ul class="list-body dhx-list" data-gjs-custom-name="${opt.listUnorderedBlkLabel}">${listItem}${listItem}</ul>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-listUnordered"}
        });

        bm.add("list-Unstyled", {
          label: opt.listUnstyledBlkLabel,
          category: opt.categoryList,
          content: `<ul class="list-body dhx-list" data-gjs-custom-name="${opt.listUnstyledBlkLabel}" class="list-unstyled">${listItem}${listItem}</ul>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-listUnstyled"}
        });

        bm.add("list-Inline", {
          label: opt.listInlineBlkLabel,
          category: opt.categoryList,
          content: `<ul class="list-inline-body dhx-list" data-gjs-custom-name="${opt.listInlineBlkLabel}" class="list-inline">${listInlineItem}${listInlineItem}</ul>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-listInline"}
        });

        bm.add("list-Description", {
          label: opt.listDescriptionBlkLabel,
          category: opt.categoryList,
          content: `<dl class="list-desc-body dhx-list" data-gjs-custom-name="${opt.listDescriptionBlkLabel}" class="row text-left">${listDescItem}${listDescItem}${listDescItem}${listDescItem}</dl>`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-listDescription"}
        });

        bm.add("list-items", {
          label: opt.listItemsBlkLabel,
          category: opt.categoryList,
          content: `${listItem}`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-listItem"}
        });

        bm.add("list-inline-items", {
          label: opt.listInlineItemsBlkLabel,
          category: opt.categoryList,
          content: `${listInlineItem}`,
          attributes: {class: "gjs-icon-block-label  icon-blocks icon-block-listInlineItem"}
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
          content: `<ul data-gjs-custom-name="${opt.listMediaBlkLabel}" class="list-unstyled media-list dhx-list"> ${listMediaItem}${listMediaItem}${listMediaItem}</ul>`,
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
          `<th scope="col">Table Cell Title</th>`;

        var tableCellRowTitle =
          `<th scope="row">Table Row Title</th>`;

        bm.add("table", {
          label: opt.tableBlkLabel,
          category: opt.categoryList,
          content: `
          <div class="table-responsive"  data-gjs-custom-name="${opt.tableBlkLabel} ${opt.ContainerLabel}">
            <table class="table table-striped">
              <caption>Optional table caption.</caption>
              <thead> <tr>${tableCellTitle} ${tableCellTitle} ${tableCellTitle} ${tableCellTitle} ${tableCellTitle}</tr> </thead>
              <tbody>
                <tr> ${tableCellRowTitle} ${tableCell} ${tableCell} ${tableCell} ${tableCell} </tr>
                <tr> ${tableCellRowTitle} ${tableCell} ${tableCell} ${tableCell} ${tableCell} </tr>
                <tr> ${tableCellRowTitle} ${tableCell} ${tableCell} ${tableCell} ${tableCell} </tr>
                <tr> ${tableCellRowTitle} ${tableCell} ${tableCell} ${tableCell} ${tableCell} </tr>
                <tr> ${tableCellRowTitle} ${tableCell} ${tableCell} ${tableCell} ${tableCell} </tr>
              </tbody>
            </table>
          </div>
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

        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // Módulos Components //
        /////////////////////

       // Intro1CTACModuleBlkLabel: "Intro 1-CTA Center",
        bm.add("module-Intro1CTAC", {
          label: opt.Intro1CTACModuleBlkLabel,
          category: opt.categoryIntroCTAModulesContent,
          content: `
								<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center dhx-bg-gray1" data-gjs-custom-name="Section - First Fold">
									<div class="container  py-3" data-gjs-custom-name="Boxed Container - 1 Col">
										<div class="row" data-gjs-custom-name="Row">
											<div class="col-12 col-md-9 col-lg-7 col-xl-6 mx-auto text-center mb-md-0 mb-xl-4" data-gjs-custom-name="Column">
												<h1>Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>
												<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
												<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
													<a href="#" class="btn btn-lg btn-outline-primary" data-gjs-custom-name="Button">Call to Action</a>
												</div>
											</div>
										</div>
									</div>
                </section>
			    `,
        attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

         // Intro1CTACBGIModuleBlkLabel: "Intro 1-CTA Center + Bckrd Img",
        bm.add("module-Intro1CTACBGI", {
         label: opt.Intro1CTACBGIModuleBlkLabel,
         category: opt.categoryIntroCTAModulesContent,
         content: `
								<section class="dhx-full-bg dhx-intro-sect dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
										<div class="container py-3" data-gjs-custom-name="Boxed Container - 1 Col">
											<div class="row" data-gjs-custom-name="Row">
												<div class="col-12 col-md-9 col-lg-7 col-xl-6 mx-auto text-center mb-md-0 mb-xl-4" data-gjs-custom-name="Column">
													<h1>Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>
													<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
													<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
														<a href="#" class="btn btn-lg btn-outline-primary d-md-inline-block d-none" data-gjs-custom-name="Button">Call to Action</a>
														<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none" data-gjs-custom-name="Button">Call to Action</a>
													</div>
												</div>
											</div>
										</div>
                </section>
         `,
        attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

         // Intro1CTACIMGModuleBlkLabel: "Intro 1-CTA Center + Boxed Bckgrd Img",
        bm.add("module-Intro1CTACIMG", {
          label: opt.Intro1CTACIMGModuleBlkLabel,
          category: opt.categoryIntroCTAModulesContent,
          content: `
								<section class="dhx-full-fold-nofooter py-0 d-flex align-items-stretch" data-gjs-custom-name="Section - First Fold">
										<div class="container py-md-4" data-gjs-custom-name="Boxed Container - 1 Col">
											<div class="row dhx-h100 dhx-banner-bg align-items-center" data-gjs-custom-name="Row - Banner Img">
												<div class="col-12 col-md-9 col-lg-7 col-xl-6 mx-auto text-center mb-md-0 mb-xl-4" data-gjs-custom-name="Column">
														<h1>Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>
														<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
														<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
															<a href="#" class="btn btn-lg btn-primary" data-gjs-custom-name="Button">Call to Action</a>
														</div>
												</div>
											</div>
										</div>
                </section>
			`,
        attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
         });

         // Intro1CTACH1IMGModuleBlkLabel: "Intro 1-CTA Center + Img",
        bm.add("module-Intro1CTACH1IMG", {
                       label: opt.Intro1CTACH1IMGModuleBlkLabel,
                       category: opt.categoryIntroCTAModulesContent,
                       content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
																	<div class="container  py-3" data-gjs-custom-name="Boxed Container - 1 Col">
																		<div class="row" data-gjs-custom-name="Row">
																			<div class="col-12 col-md-9 col-lg-7 col-xl-6 mx-auto text-center mb-md-0 mb-xl-4" data-gjs-custom-name="Column">
																				<h1>Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>
																				<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu.</p>
																				<img class="img-fluid" alt="Image Alt" src="http://via.placeholder.com/600x300">
																				<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
																					<a href="#" class="btn btn-lg btn-outline-primary d-md-inline-block d-none" data-gjs-custom-name="Button">Call to Action</a>
																					<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none" data-gjs-custom-name="Button">Call to Action</a>
																				</div>
																			</div>
																		</div>
																	</div>
														 </section>
			                         `,
               attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
             });

        // Intro1CTACH1IMGBGIModuleBlkLabel: "Intro 1-CTA Center + Img + Bckrd Img",
        bm.add("module-Intro1CTACH1IMGBGI", {
          label: opt.Intro1CTACH1IMGBGIModuleBlkLabel,
          category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
											<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
												<div class="row" data-gjs-custom-name="Row">
													<div class="col-12 col-md-9 col-lg-7 col-xl-6 mx-auto text-center mb-md-0 mb-xl-4" data-gjs-custom-name="Column">
														<h1>Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>
														<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu.</p>
														<img class="img-fluid" alt="Image Alt" src="http://via.placeholder.com/600x300/333333">
														<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
															<a href="#" class="btn btn-lg btn-outline-primary d-md-inline-block d-none" data-gjs-custom-name="Button">Call to Action</a>
															<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none" data-gjs-custom-name="Button">Call to Action</a>
														</div>
													</div>
												</div>
											</div>
                </section>
			         `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        // Intro1CTACVIDModuleBlkLabel: "Intro 1-CTA Center + Video",
        bm.add("module-Intro1CTACVID", {
          label: opt.Intro1CTACVIDModuleBlkLabel,
          category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center bg-light" data-gjs-custom-name="Section - First Fold">
										<div class="container py-0 py-sm-3" data-gjs-custom-name="Boxed Container - 1 Col">
											<div class="row" data-gjs-custom-name="Row">
												<div class="col-12 col-md-9 col-lg-7 col-xl-6 mx-auto text-center mb-md-0 mb-xl-4" data-gjs-custom-name="Column">
													<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>
													<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 mx-md-auto">
														<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
													</div>
													<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
														<a href="#" class="btn btn-lg btn-outline-primary" data-gjs-custom-name="Button">Call to Action</a>
													</div>
												</div>
											</div>
										</div>
                </section>
			`,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        // Intro1CTACVIDBGIModuleBlkLabel: "Intro 1-CTA Center + Video + Bckrd Img",
        bm.add("module-Intro1CTACVIDBGI", {
               label: opt.Intro1CTACVIDBGIModuleBlkLabel,
               category: opt.categoryIntroCTAModulesContent,
               content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
													<div class="container py-0 py-sm-4" data-gjs-custom-name="Boxed Container - 1 Col">
														<div class="row" data-gjs-custom-name="Row">
															<div class="col-12 col-md-9 col-lg-7 col-xl-6 mx-auto text-center mb-md-0 mb-xl-4" data-gjs-custom-name="Column">
																<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>
																<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 mx-md-auto">
																	<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
																</div>
																<div class="dhx-w100 mt-4  pt-2" data-gjs-custom-name="Buttons Container">
																	<a href="#" class="btn btn-lg btn-outline-primary d-md-inline-block d-none" data-gjs-custom-name="Button">Call to Action</a>
																	<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none" data-gjs-custom-name="Button">Call to Action</a>
																</div>
															</div>
														</div>
													</div>
										 </section>
			`,
               attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        // Intro1CTALModuleBlkLabel: "Intro 1-CTA Left",
        bm.add("module-Intro1CTAL", {
          label: opt.Intro1CTALModuleBlkLabel,
          category: opt.categoryIntroCTAModulesContent,
          content: `                <section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center dhx-bg-gray1" data-gjs-custom-name="Section - First Fold">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 col-md-9 mx-auto ml-lg-0 col-lg-7 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-1">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-lg btn-outline-primary" data-gjs-custom-name="Button">Call to Action</a>
								</div>
						</div>
					  </div>
					</div>
                </section>
			      `,
         attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1CTALBGIModuleBlkLabel: "Intro 1-CTA Left + Bckrd Img",
        bm.add("module-Intro1CTALBGI", {
          label: opt.Intro1CTALBGIModuleBlkLabel,
          category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - Background Img">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">
							<div class="col-12 col-md-9 mx-auto ml-lg-3 col-lg-7 col-xl-6 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
									<h1>Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>
									<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
										<a href="#" class="btn btn-lg btn-outline-primary d-md-inline-block d-none" data-gjs-custom-name="Button">Call to Action</a>
										<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none" data-gjs-custom-name="Button">Call to Action</a>
									</div>
							</div>
					  </div>
					</div>
                </section>
			      `,
         attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1CTALIMGModuleBlkLabel: "Intro 1-CTA Left + Boxed Bckgrd Img",
        bm.add("module-Intro1CTALIMG", {
          label: opt.Intro1CTALIMGModuleBlkLabel,
          category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-fold-nofooter py-0 d-flex align-items-stretch" data-gjs-custom-name="Section - First Fold">
					<div class="container py-md-4" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row dhx-h100 dhx-banner-bg align-items-center" data-gjs-custom-name="Row - Banner Img">
							<div class="col-12 col-md-9 mx-auto ml-lg-3 col-lg-7 col-xl-6 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
									<h1>Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>
									<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
										<a href="#" class="btn btn-lg btn-primary" data-gjs-custom-name="Button">Call to Action</a>
									</div>
							</div>
					  </div>
					</div>
                </section>
			      `,
         attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        // Intro1CTALH1IMGModuleBlkLabel: "Intro 1-CTA Left + Img",
        bm.add("module-Intro1CTALH1IMG", {
          label: opt.Intro1CTALH1IMGModuleBlkLabel,
          category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 2 Col 4/3">
					  <div class="row align-items-center flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">
						<div class="col-12 col-md-9 mx-auto mr-lg-0 col-lg-7 text-center text-lg-left mb-5 mb-md-5 mb-lg-3" data-gjs-custom-name="Column">
								<h1 class="mb-1">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<div class="dhx-w100 mt-3 pt-lg-2" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-lg btn-outline-primary d-md-inline-block d-none" data-gjs-custom-name="Button">Call to Action</a>
									<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none" data-gjs-custom-name="Button">Call to Action</a>
								</div>
						</div>
						<div class="col-12 col-sm-6 col-md-9 mx-auto col-lg-5 mb-3 mb-lg-0 "  data-gjs-custom-name="Column">
							<img class="img-fluid" alt="Image Alt" src="http://via.placeholder.com/500x300/333333">
						</div>
					  </div>
					</div>
                </section>
			      `,
         attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1CTALH1IMGBGIModuleBlkLabel: "Intro 1-CTA Left + Img + Bckrd Img",
        bm.add("module-Intro1CTALH1IMGBGI", {
          label: opt.Intro1CTALH1IMGBGIModuleBlkLabel,
          category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-sm-center" data-gjs-custom-name="Section - First Fold">
					<div class="container pt-0 pt-sm-3 pb-3" data-gjs-custom-name="Boxed Container - 2 Col 4/3">
					  <div class="row align-items-center" data-gjs-custom-name="Row">
						<div class="col-12 col-md-9 mx-auto mr-lg-0 col-lg-7 text-center text-lg-left mb-2 mb-md-5 mb-lg-3" data-gjs-custom-name="Column">
								<h1 class="mb-1">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<div class="dhx-w100 mt-3 pt-lg-2" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-lg btn-outline-primary d-md-inline-block d-none" data-gjs-custom-name="Button">Call to Action</a>
								</div>
						</div>
						<div class="col-12 col-sm-6 col-md-9 mx-auto col-lg-5 mb-2 mb-sm-5 mb-lg-0 text-center"  data-gjs-custom-name="Column">
							<img class="img-fluid" alt="Image Alt" src="http://via.placeholder.com/500x300/333333">
							<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none mt-3" data-gjs-custom-name="Button">Call to Action</a>
						</div>


					  </div>
					</div>
                </section>
			      `,
         attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        //Intro1CTALVIDModuleBlkLabel: "Intro 1-CTA Left + Video",
        bm.add("module-Intro1CTALVID", {
          label: opt.Intro1CTALVIDModuleBlkLabel,
          category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-start align-items-sm-center dhx-bg-gray1" data-gjs-custom-name="Section - First Fold">
					<div class="container pt-0 pt-sm-3 pb-3" data-gjs-custom-name="Boxed Container - 2 Col 4/3">
					  <div class="row align-items-center" data-gjs-custom-name="Row">
						<div class="col-12 col-md-9 mx-auto mr-lg-0 col-lg-7 text-center text-lg-left mb-3 mb-sm-5 mb-md-5 mb-lg-1" data-gjs-custom-name="Column">
								<h1 class="mb-1">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<div class="dhx-w100 mt-3 pt-lg-2" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-lg btn-outline-primary d-md-inline-block d-none" data-gjs-custom-name="Button">Call to Action</a>
								</div>
						</div>
						<div class="col-12 col-sm-6 col-md-9 mx-auto col-lg-5 mb-5 mb-lg-0 text-center"  data-gjs-custom-name="Column">
							<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 mx-md-auto">
							  	<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
							<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none mt-3" data-gjs-custom-name="Button">Call to Action</a>
						</div>

					  </div>
					</div>
                </section>
			      `,
         attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1CTALVIDBGIModuleBlkLabel: "Intro 1-CTA Left + Video + Bckrd Img",
        bm.add("module-Intro1CTALVIDBGI", {
          label: opt.Intro1CTALVIDBGIModuleBlkLabel,
          category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-start align-items-sm-center " data-gjs-custom-name="Section - Background Img">
					<div class="container pt-0 pt-sm-3 pb-3" data-gjs-custom-name="Boxed Container - 2 Col 4/3">
					  <div class="row align-items-center" data-gjs-custom-name="Row">
						<div class="col-12 col-md-9 mx-auto mr-lg-0 col-lg-7 text-center text-lg-left mb-3 mb-sm-5 mb-md-5 mb-lg-1" data-gjs-custom-name="Column">
								<h1 class="mb-1">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<div class="dhx-w100 mt-3 pt-lg-2" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-lg btn-outline-primary d-md-inline-block d-none" data-gjs-custom-name="Button">Call to Action</a>
								</div>
						</div>
						<div class="col-12 col-sm-6 col-md-9 mx-auto col-lg-5 mb-5 mb-lg-0 text-center"  data-gjs-custom-name="Column">
							<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 mx-md-auto">
							  	<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
							<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none mt-3" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>
			      `,
         attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

       // Intro1CTARModuleBlkLabel: "Intro 1-CTA Right",
        bm.add("module-Intro1CTAR", {
          label: opt.Intro1CTARModuleBlkLabel,
          category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center dhx-bg-gray1" data-gjs-custom-name="Section - First Fold">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 col-md-9 ml-auto mr-auto mr-lg-0 col-lg-7 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-1">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-lg btn-outline-primary" data-gjs-custom-name="Button">Call to Action</a>
								</div>
						</div>
					  </div>
					</div>
                </section>
					`,
           attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

       // Intro1CTARBGIModuleBlkLabel: "Intro 1-CTA Right + Bckrd Img",
        bm.add("module-Intro1CTARBGI", {
           label: opt.Intro1CTARBGIModuleBlkLabel,
           category: opt.categoryIntroCTAModulesContent,
           content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - Background Img">
												<div class="container py-3" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
													<div class="row flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">
														<div class="col-12 col-md-9 ml-auto mr-auto mr-lg-0 col-lg-7 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
																<h1>Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>
																<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
																<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
																	<a href="#" class="btn btn-lg btn-outline-primary d-md-inline-block d-none" data-gjs-custom-name="Button">Call to Action</a>
																	<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none" data-gjs-custom-name="Button">Call to Action</a>
																</div>
														</div>
													</div>
												</div>
								 </section>
				`,
           attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

       // Intro1CTARIMGModuleBlkLabel: "Intro 1-CTA Right + Boxed Bckgrd Img",
        bm.add("module-Intro1CTARIMG", {
         label: opt.Intro1CTARIMGModuleBlkLabel,
         category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-fold-nofooter py-0 d-flex align-items-stretch" data-gjs-custom-name="Section - First Fold">
					<div class="container py-md-4" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row dhx-h100 dhx-banner-bg align-items-center" data-gjs-custom-name="Row - Banner Img">
							<div class="col-12 col-md-9 ml-auto mr-auto mr-lg-0 col-lg-7 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
									<h1>Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>
									<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
										<a href="#" class="btn btn-lg btn-primary" data-gjs-custom-name="Button">Call to Action</a>
									</div>
							</div>
					  </div>
					</div>
                </section>
          `,
        attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        // Intro1CTARH1IMGModuleBlkLabel: "Intro 1-CTA Right + Img",
        bm.add("module-Intro1CTARH1IMG", {
          label: opt.Intro1CTARH1IMGModuleBlkLabel,
          category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container pb-3 pt-0 pt-sm-3" data-gjs-custom-name="Boxed Container - 2 Col 3/4">
					  <div class="row align-items-sm-center align-items-start flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">
						<div class="col-12 col-sm-6 col-md-9 mx-auto col-lg-5 mb-3 mb-lg-0 text-center"  data-gjs-custom-name="Column">
							<img class="img-fluid" alt="Image Alt" src="http://via.placeholder.com/500x300/333333">
							<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none mt-3" data-gjs-custom-name="Button">Call to Action</a>
						</div>
						<div class="col-12 col-md-9 mx-auto mr-lg-0 col-lg-7 text-center text-lg-left mb-3 mb-sm-4 mb-md-5 mb-lg-3" data-gjs-custom-name="Column">
								<h1 class="mb-1">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<div class="dhx-w100 mt-3 pt-lg-2" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-lg btn-outline-primary d-md-inline-block d-none" data-gjs-custom-name="Button">Call to Action</a>
								</div>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
         });

        // Intro1CTARH1IMGBGIModuleBlkLabel: "Intro 1-CTA Right + Img + Bckrd Img",
        bm.add("module-Intro1CTARH1IMGBGI", {
          label: opt.Intro1CTARH1IMGBGIModuleBlkLabel,
          category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container pb-3 pt-0 pt-sm-3" data-gjs-custom-name="Boxed Container - 2 Col 3/4">
					  <div class="row align-items-sm-center align-items-start flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-6 col-md-9 mx-auto col-lg-5 mb-3 mb-lg-0 text-center"  data-gjs-custom-name="Column">
							<img class="img-fluid" alt="Image Alt" src="http://via.placeholder.com/500x300/333333">
							<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none mt-3" data-gjs-custom-name="Button">Call to Action</a>
						</div>
						<div class="col-12 col-md-9 mx-auto mr-lg-0 col-lg-7 text-center text-lg-left mb-3 mb-md-5 mb-lg-3" data-gjs-custom-name="Column">
								<h1 class="mb-1">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<div class="dhx-w100 mt-3 pt-lg-2" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-lg btn-outline-primary d-md-inline-block d-none" data-gjs-custom-name="Button">Call to Action</a>
								</div>
						</div>

					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
         });

        // Intro1CTARVIDModuleBlkLabel: "Intro 1-CTA Right + Video",
        bm.add("module-Intro1CTARVID", {
        label: opt.Intro1CTARVIDModuleBlkLabel,
         category: opt.categoryIntroCTAModulesContent,
         content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center dhx-bg-gray1" data-gjs-custom-name="Section - First Fold">
				 <div class="container pt-sm-3 pt-0 pb-3" data-gjs-custom-name="Boxed Container - 2 Col 3/4">
					 <div class="row align-items-sm-center flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">
					 <div class="col-12 col-sm-6 col-md-9 mx-auto col-lg-5 mb-5 mb-lg-0 text-center"  data-gjs-custom-name="Column">
						 <div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 mx-md-auto">
								 <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
						 </div>
						 <a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none mt-3" data-gjs-custom-name="Button">Call to Action</a>
					 </div>
					 <div class="col-12 col-md-9 mx-auto mr-lg-0 col-lg-7 text-center text-lg-left mb-2 mb-sm-5 mb-md-5 mb-lg-3" data-gjs-custom-name="Column">
							 <h1 class="mb-1">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							 <p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							 <div class="dhx-w100 mt-3 pt-lg-2" data-gjs-custom-name="Buttons Container">
								 <a href="#" class="btn btn-lg btn-outline-primary d-md-inline-block d-none" data-gjs-custom-name="Button">Call to Action</a>
							 </div>
					 </div>
					 </div>
				 </div>
							 </section>
			 `,
           attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
         });

        // Intro1CTARVIDBGIModuleBlkLabel: "Intro 1-CTA Right + Video + Bckrd Img",
        bm.add("module-Intro1CTARVIDBGI", {
          label: opt.Intro1CTARVIDBGIModuleBlkLabel,
           category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - Background Img">
					<div class="container pt-sm-3 pt-0 pb-3" data-gjs-custom-name="Boxed Container - 2 Col 3/4">
					  <div class="row align-items-sm-center flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">
						<div class="col-12 col-sm-6 col-md-9 mx-auto col-lg-5 mb-5 mb-lg-0 text-center"  data-gjs-custom-name="Column">
							<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 mx-md-auto">
							  	<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
							<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none mt-3" data-gjs-custom-name="Button">Call to Action</a>
						</div>
						<div class="col-12 col-md-9 mx-auto mr-lg-0 col-lg-7 text-center text-lg-left mb-2 mb-sm-5 mb-md-5 mb-lg-3" data-gjs-custom-name="Column">
								<h1 class="mb-1">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<div class="dhx-w100 mt-3 pt-lg-2" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-lg btn-outline-primary d-md-inline-block d-none" data-gjs-custom-name="Button">Call to Action</a>
								</div>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
         });

       // 2CTA
       // Intro2CTACModuleBlkLabel: "Intro 2-CTA Center",
        bm.add("module-Intro2CTAC", {
          label: opt.Intro2CTACModuleBlkLabel,
           category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center dhx-bg-gray1" data-gjs-custom-name="Section - First Fold">
											<div class="container  py-3" data-gjs-custom-name="Boxed Container - 1 Col">
												<div class="row" data-gjs-custom-name="Row">
													<div class="col-12 col-md-9 col-lg-7 col-xl-6 mx-auto text-center mb-5" data-gjs-custom-name="Column">
														<h1 >Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>
														<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
														<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
															<a href="#" class="btn btn-lg btn-outline-primary" data-gjs-custom-name="Button">Call to Action</a>
															<a href="video-popup.html" class="btn btn-lg btn-primary ml-2" data-gjs-custom-name="Button">Watch Video</a>
														</div>
													</div>
												</div>
											</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        // Intro2CTACBGIModuleBlkLabel: "Intro 2-CTA Center + Bckrd Img",
        bm.add("module-Intro2CTACBGI", {
          label: opt.Intro2CTACBGIModuleBlkLabel,
           category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
							<div class="col-12 col-md-9 col-lg-7 col-xl-6 mx-auto text-center mb-5" data-gjs-custom-name="Column">
								<h1>Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-lg btn-outline-primary d-md-inline-block d-none" data-gjs-custom-name="Button">Call to Action</a>
									<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none" data-gjs-custom-name="Button">Call to Action</a>
									<a href="video-popup.html" class="btn btn-lg btn-primary ml-2" data-gjs-custom-name="Button">Watch Video</a>
								</div>
							</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        // Intro2CTACIMGModuleBlkLabel: "Intro 2-CTA Center + Boxed Bckgrd Img",
        bm.add("module-Intro2CTACIMG", {
          label: opt.Intro2CTACIMGModuleBlkLabel,
           category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-fold-nofooter py-0 d-flex align-items-stretch" data-gjs-custom-name="Section - First Fold">
					<div class="container py-md-4" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row dhx-h100 dhx-banner-bg align-items-center" data-gjs-custom-name="Row - Banner Img">
							<div class="col-12 col-md-9 col-lg-7 col-xl-6 mx-auto text-center mb-5 mb-md-4" data-gjs-custom-name="Column">
									<h1>Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>
									<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
										<a href="#" class="btn btn-lg btn-outline-primary d-md-inline-block d-none" data-gjs-custom-name="Button">Call to Action</a>
										<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none" data-gjs-custom-name="Button">Call to Action</a>
										<a href="video-popup.html" class="btn btn-lg btn-primary ml-2" data-gjs-custom-name="Button">Watch Video</a>
									</div>
							</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        // Intro2CTACH1IMGModuleBlkLabel: "Intro 2-CTA Center + Img",
        bm.add("module-Intro2CTACH1IMG", {
          label: opt.Intro2CTACH1IMGModuleBlkLabel,
           category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-start align-items-sm-center" data-gjs-custom-name="Section - First Fold">
					<div class="container  py-3" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
							<div class="col-12 col-md-9 col-lg-7 col-xl-6 mx-auto text-center mb-md-0 mb-xl-4" data-gjs-custom-name="Column">
								<h1>Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu.</p>
								<img class="img-fluid" alt="Image Alt" src="http://via.placeholder.com/600x300">
								<div class="dhx-w100 mt-4 " data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-lg btn-outline-primary" data-gjs-custom-name="Button">Call to Action</a>
									<a href="video-popup.html" class="btn btn-lg btn-primary ml-2 mr-lg-2" data-gjs-custom-name="Button">Watch Video</a>
								</div>


							</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        // Intro2CTACH1IMGBGIModuleBlkLabel: "Intro 2-CTA Center + Img + Bckrd Img",
        bm.add("module-Intro2CTACH1IMGBGI", {
          label: opt.Intro2CTACH1IMGBGIModuleBlkLabel,
           category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
							<div class="col-12 col-md-9 col-lg-7 col-xl-6 mx-auto text-center mb-md-0 mb-xl-4" data-gjs-custom-name="Column">
								<h1>Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu.</p>
								<img class="img-fluid" alt="Image Alt" src="http://via.placeholder.com/600x300/333333">
								<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-lg btn-outline-primary d-md-inline-block d-none" data-gjs-custom-name="Button">Call to Action</a>
									<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none" data-gjs-custom-name="Button">Call to Action</a>
									<a href="video-popup.html" class="btn btn-lg btn-primary ml-2 mr-lg-2" data-gjs-custom-name="Button">Watch Video</a>
								</div>
							</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        // Intro2CTALModuleBlkLabel: "Intro 2-CTA Left",
        bm.add("module-Intro2CTAL", {
          label: opt.Intro2CTALModuleBlkLabel,
           category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center dhx-bg-gray1" data-gjs-custom-name="Section - First Fold">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 col-md-9 mx-auto ml-lg-3 col-lg-7 col-xl-6 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-1">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
								<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-lg btn-outline-primary" data-gjs-custom-name="Button">Call to Action</a>
									<a href="video-popup.html" class="btn btn-lg btn-primary ml-2" data-gjs-custom-name="Button">Watch Video</a>
								</div>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        // Intro2CTALBGIModuleBlkLabel: "Intro 2-CTA Left + Bckrd Img",
        bm.add("module-Intro2CTALBGI", {
          label: opt.Intro2CTALBGIModuleBlkLabel,
           category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - Background Img">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">
							<div class="col-12 col-md-9 mx-auto ml-lg-3 col-lg-7 col-xl-6 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
									<h1>Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>
									<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-lg btn-outline-primary d-md-inline-block d-none" data-gjs-custom-name="Button">Call to Action</a>
									<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none" data-gjs-custom-name="Button">Call to Action</a>
									<a href="video-popup.html" class="btn btn-lg btn-primary ml-2" data-gjs-custom-name="Button">Watch Video</a>
								</div>
							</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        // Intro2CTALIMGModuleBlkLabel: "Intro 2-CTA Left + Boxed Bckgrd Img",
        bm.add("module-Intro2CTALIMG", {
          label: opt.Intro2CTALIMGModuleBlkLabel,
           category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-fold-nofooter py-0 d-flex align-items-stretch" data-gjs-custom-name="Section - First Fold">
					<div class="container py-md-4" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row dhx-h100 dhx-banner-bg align-items-center" data-gjs-custom-name="Row - Banner Img">
							<div class="col-12 col-md-9 mx-auto ml-lg-3 col-lg-7 col-xl-6 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
									<h1>Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>
									<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
										<a href="#" class="btn btn-lg btn-outline-primary d-md-inline-block d-none" data-gjs-custom-name="Button">Call to Action</a>
										<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none" data-gjs-custom-name="Button">Call to Action</a>
										<a href="video-popup.html" class="btn btn-lg btn-primary ml-2" data-gjs-custom-name="Button">Watch Video</a>
									</div>
							</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro2CTALH1IMGModuleBlkLabel: "Intro 2-CTA Left + Img",
        bm.add("module-Intro2CTALH1IMG", {
          label: opt.Intro2CTALH1IMGModuleBlkLabel,
           category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
											<div class="container pt-0 pt-sm-3 pb-3" data-gjs-custom-name="Boxed Container - 2 Col 3/4">
												<div class="row align-items-center" data-gjs-custom-name="Row">
												<div class="col-12 col-md-9 mx-auto mr-lg-0 col-lg-7 text-center text-lg-left mb-2 mb-md-5 mb-lg-3" data-gjs-custom-name="Column">
														<h1 class="mb-1">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
														<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
														<div class="dhx-w100 mt-4 d-md-inline-block d-none" data-gjs-custom-name="Buttons Container">
															<a href="#" class="btn btn-lg btn-outline-primary" data-gjs-custom-name="Button">Call to Action</a>
															<a href="video-popup.html" class="btn btn-lg btn-primary ml-2" data-gjs-custom-name="Button">Watch Video</a>
														</div>
												</div>
												<div class="col-12 col-sm-6 col-md-9 mx-auto col-lg-5 mb-3 mb-lg-0 text-center "  data-gjs-custom-name="Column">
													<img class="img-fluid" alt="Image Alt" src="http://via.placeholder.com/500x300/333333">
													<div class="dhx-w100 mt-4 d-inline-block d-md-none" data-gjs-custom-name="Buttons Container">
															<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none" data-gjs-custom-name="Button">Call to Action</a>
															<a href="video-popup.html" class="btn btn-lg btn-primary ml-2" data-gjs-custom-name="Button">Watch Video</a>
													</div>
												</div>
												</div>
											</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro2CTALH1IMGBGIModuleBlkLabel: "Intro 2-CTA Left + Img + Bckrd Img",
        bm.add("module-Intro2CTALH1IMGBGI", {
          label: opt.Intro2CTALH1IMGBGIModuleBlkLabel,
           category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container pt-0 pt-sm-3 pb-3" data-gjs-custom-name="Boxed Container - 2 Col 3/4">
					  <div class="row align-items-center" data-gjs-custom-name="Row">
						<div class="col-12 col-md-9 mx-auto mr-lg-0 col-lg-7 text-center text-lg-left mb-2 mb-md-5 mb-lg-3" data-gjs-custom-name="Column">
								<h1 class="mb-1">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<div class="dhx-w100 mt-4 d-md-inline-block d-none" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-lg btn-outline-primary" data-gjs-custom-name="Button">Call to Action</a>
									<a href="video-popup.html" class="btn btn-lg btn-primary ml-2" data-gjs-custom-name="Button">Watch Video</a>
								</div>
						</div>
						<div class="col-12 col-sm-6 col-md-9 mx-auto col-lg-5 mb-3 mb-lg-0 text-center "  data-gjs-custom-name="Column">
							<img class="img-fluid" alt="Image Alt" src="http://via.placeholder.com/500x300/333333">
							<div class="dhx-w100 mt-4 d-inline-block d-md-none" data-gjs-custom-name="Buttons Container">
									<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none" data-gjs-custom-name="Button">Call to Action</a>
									<a href="video-popup.html" class="btn btn-lg btn-primary ml-2" data-gjs-custom-name="Button">Watch Video</a>
							</div>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro2CTARModuleBlkLabel: "Intro 2-CTA Right",
        bm.add("module-Intro2CTAR", {
          label: opt.Intro2CTARModuleBlkLabel,
           category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center dhx-bg-gray1" data-gjs-custom-name="Section - First Fold">
											<div class="container py-3" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
												<div class="row" data-gjs-custom-name="Row">
												<div class="col-12 col-md-9 ml-auto mr-auto mr-lg-0 col-lg-7 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
														<h1 class="mb-1">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
														<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
														<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
															<a href="#" class="btn btn-lg btn-outline-primary" data-gjs-custom-name="Button">Call to Action</a>
															<a href="video-popup.html" class="btn btn-lg btn-primary ml-2" data-gjs-custom-name="Button">Watch Video</a>
														</div>
												</div>
												</div>
											</div>
                		</section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro2CTARBGIModuleBlkLabel: "Intro 2-CTA Right + Bckrd Img",
        bm.add("module-Intro2CTARBGI", {
          label: opt.Intro2CTARBGIModuleBlkLabel,
           category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - Background Img">
										<div class="container py-3" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
											<div class="row flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">
												<div class="col-12 col-md-9 ml-auto mr-auto mr-lg-0 col-lg-7 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
														<h1>Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>
														<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
													<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
														<a href="#" class="btn btn-lg btn-secondary" data-gjs-custom-name="Button">Call to Action</a>
														<a href="video-popup.html" class="btn btn-lg btn-primary ml-2" data-gjs-custom-name="Button">Watch Video</a>
													</div>
												</div>
											</div>
										</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro2CTARIMGModuleBlkLabel: "Intro 2-CTA Right + Boxed Bckgrd Img",
        bm.add("module-Intro2CTARIMG", {
          label: opt.Intro2CTARIMGModuleBlkLabel,
           category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-fold py-0 d-flex align-items-stretch" data-gjs-custom-name="Section - First Fold">
					<div class="container py-md-4" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row dhx-h100 dhx-banner-bg align-items-center" data-gjs-custom-name="Row - Banner Img">
							<div class="col-12 col-md-9 ml-auto mr-auto mr-lg-0 col-lg-7 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
									<h1>Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>
									<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
										<a href="#" class="btn btn-lg btn-outline-primary d-md-inline-block d-none" data-gjs-custom-name="Button">Call to Action</a>
										<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none" data-gjs-custom-name="Button">Call to Action</a>
										<a href="video-popup.html" class="btn btn-lg btn-primary ml-2" data-gjs-custom-name="Button">Watch Video</a>
									</div>
							</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro2CTARH1IMGModuleBlkLabel: "Intro 2-CTA Right + Img",
        bm.add("module-Intro2CTARH1IMG", {
          label: opt.Intro2CTARH1IMGModuleBlkLabel,
           category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
												<div class="container pt-0 pt-sm-3 pb-3" data-gjs-custom-name="Boxed Container - 2 Col 3/4">
													<div class="row align-items-sm-center align-items-start flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">
													<div class="col-12 col-sm-6 col-md-9 mx-auto col-lg-5 mb-3 mb-lg-0 text-center"  data-gjs-custom-name="Column">
														<img class="img-fluid" alt="Image Alt" src="http://via.placeholder.com/500x300/333333">
															<div class="dhx-w100 mt-4 d-inline-block d-md-none" data-gjs-custom-name="Buttons Container">
																<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none" data-gjs-custom-name="Button">Call to Action</a>
																<a href="video-popup.html" class="btn btn-lg btn-primary ml-2" data-gjs-custom-name="Button">Watch Video</a>
															</div>
													</div>
													<div class="col-12 col-md-9 mx-auto mr-lg-0 col-lg-7 text-center text-lg-left mb-2 mb-md-5 mb-lg-3" data-gjs-custom-name="Column">
															<h1 class="mb-1">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
															<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
															<div class="dhx-w100 mt-4 d-md-inline-block d-none" data-gjs-custom-name="Buttons Container">
																<a href="#" class="btn btn-lg btn-outline-primary" data-gjs-custom-name="Button">Call to Action</a>
																<a href="video-popup.html" class="btn btn-lg btn-primary ml-2" data-gjs-custom-name="Button">Watch Video</a>
															</div>
													</div>
													</div>
												</div>
									</section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro2CTARH1IMGBGIModuleBlkLabel: "Intro 2-CTA Right + Img + Bckrd Img",
        bm.add("module-Intro2CTARH1IMGBGI", {
          label: opt.Intro2CTARH1IMGBGIModuleBlkLabel,
           category: opt.categoryIntroCTAModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
										<div class="container pt-0 pt-sm-3 pb-3" data-gjs-custom-name="Boxed Container - 2 Col 3/4">
											<div class="row align-items-sm-center align-items-start flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">
											<div class="col-12 col-sm-6 col-md-9 mx-auto col-lg-5 mb-3 mb-lg-0 text-center"  data-gjs-custom-name="Column">
												<img class="img-fluid" alt="Image Alt" src="http://via.placeholder.com/500x300/333333">
													<div class="dhx-w100 mt-4 d-inline-block d-md-none" data-gjs-custom-name="Buttons Container">
														<a href="#dhx-form-mobile" class="btn btn-lg btn-outline-primary d-inline-block d-md-none" data-gjs-custom-name="Button">Call to Action</a>
														<a href="video-popup.html" class="btn btn-lg btn-primary ml-2" data-gjs-custom-name="Button">Watch Video</a>
													</div>
											</div>
											<div class="col-12 col-md-9 mx-auto mr-lg-0 col-lg-7 text-center text-lg-left mb-2 mb-md-5 mb-lg-3" data-gjs-custom-name="Column">
													<h1 class="mb-1">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
													<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
													<div class="dhx-w100 mt-4 d-md-inline-block d-none" data-gjs-custom-name="Buttons Container">
														<a href="#" class="btn btn-lg btn-outline-primary" data-gjs-custom-name="Button">Call to Action</a>
														<a href="video-popup.html" class="btn btn-lg btn-primary ml-2" data-gjs-custom-name="Button">Watch Video</a>
													</div>
											</div>
											</div>
										</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        //INTRO FORM MODULES
       // Intro1FORMCModuleBlkLabel: "Intro 1-Form Center",
        bm.add("module-Intro1FORMC", {
         label: opt.Intro1FORMCModuleBlkLabel,
         category: opt.categoryIntroFormModulesContent,
         content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-sm-center bg-success" data-gjs-custom-name="Section - First Fold">
				 <div class="container  py-3" data-gjs-custom-name="Boxed Container - 1 Col">
					 <div class="row" data-gjs-custom-name="Row">
						 <div class="col-12 col-md-9 col-lg-7 mx-auto text-center mb-md-0 mb-xl-4" data-gjs-custom-name="Column">
							 <h1 class="mb-3 text-white">Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>

									 <form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form dhx-bg-gray1 dhx-sm-w60 dhx-w100  form-box text-center m-auto pt-3 pb-4 px-5 px-lg-4 px-xl-5">
											 <p class="text-center">Leave us your phone number and <br><strong >we'll call you soon!</strong></p>
											 <div data-gjs-draggable="form, form *"  class="form-group text-center" data-gjs-custom-name="Form Group">
												 <label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
												 <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="(00) 0000 0000"/>
											 </div>

											 <button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto mt-1">Submit</button>

											 <div data-gjs-draggable="form, form *"  class="form-group mt-2 mb-0 text-center" data-gjs-custom-name="Form Group">
												 <div data-gjs-custom-name="Form - Checkbox" class="form-check pl-3" data-gjs-draggable="form, form *" >
													 <input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
													 <label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
												 </div>
											 </div>
									 </form>
						 </div>
					 </div>
				 </div>
							 </section>
				`,
         attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1FORMCBGIModuleBlkLabel: "Intro 1-Form Center + Bckrd Img",
        bm.add("module-Intro1FORMCBGI", {
          label: opt.Intro1FORMCBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-sm-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
							<div class="col-12 col-md-9 col-lg-7 mx-auto text-center mb-md-0 mb-xl-4" data-gjs-custom-name="Column">
								<h1 class="mb-3">Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>
										<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form dhx-bg-gray1 dhx-sm-w60 dhx-w100  form-box text-center m-auto pt-3 pb-4 px-5 px-lg-4 px-xl-5">
												<h3>Call me today!</h3>
												<p class="text-center">Leave us your phone number and <br><strong class="text-primary">we'll call you soon!</strong></p>
												<div data-gjs-draggable="form, form *"  class="form-group text-center" data-gjs-custom-name="Form Group">
													<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
													<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="(00) 0000 0000"/>
												</div>
												<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto mt-1">Submit</button>
												<div data-gjs-draggable="form, form *"  class="form-group mt-2 mb-0 text-center" data-gjs-custom-name="Form Group">
													<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-3" data-gjs-draggable="form, form *" >
														<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
														<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
													</div>
												</div>
										</form>
							</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1FORMLBGIModuleBlkLabel: "Intro 1-Form Left + Bckrd Img",
        bm.add("module-Intro1FORMLBGI", {
          label: opt.Intro1FORMLBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-sm-center" data-gjs-custom-name="Section - Background Img">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

					  	<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class=" bg-light" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Call me today!</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box text-center m-auto pt-3 pb-4 px-5 px-lg-4 px-xl-5">
											<p class="text-center">Leave us your phone number and <br><strong>we'll call you soon!</strong></p>
										<div data-gjs-draggable="form, form *"  class="form-group text-center" data-gjs-custom-name="Form Group">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="(00) 0000 0000"/>
										</div>

										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto mt-1">Submit</button>

										<div data-gjs-draggable="form, form *"  class="form-group mt-2 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-3" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
								</form>
							</div>

						</div>
						<div class="col-12  col-md-10 mx-auto col-lg-8 text-center text-lg-left" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
						</div>

					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1FORMLIMGModuleBlkLabel: "Intro 1-Form Left + Boxed Bckgrd Img",
        bm.add("module-Intro1FORMLIMG", {
          label: opt.Intro1FORMLIMGModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Call me today!</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box text-center m-auto pt-3 pb-4 px-5 px-lg-4 px-xl-5">
											<p class="text-center">Leave us your phone number and <br><strong>we'll call you soon!</strong></p>
										<div data-gjs-draggable="form, form *"  class="form-group text-center" data-gjs-custom-name="Form Group">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="(00) 0000 0000"/>
										</div>

										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto mt-1">Submit</button>

										<div data-gjs-draggable="form, form *"  class="form-group mt-2 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-3" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
								</form>

							</div>

						</div>
						<div class="col-12 mx-auto col-lg-8 text-center text-md-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<div class="p-4 dhx-banner-bg h-100" data-gjs-custom-name="Banner">
								<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							</div>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1FORMLH1IMGModuleBlkLabel: "Intro 1-Form Left + Img",
        bm.add("module-Intro1FORMLH1IMG", {
          label: opt.Intro1FORMLH1IMGModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row align-items-start flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-7 col-md-6 mx-auto col-lg-4 mt-lg-2" data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Call me today!</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box text-center m-auto pt-3 pb-4 px-5 px-lg-4 px-xl-5">
											<p class="text-center">Leave us your phone number and <br><strong>we'll call you soon!</strong></p>
										<div data-gjs-draggable="form, form *"  class="form-group text-center" data-gjs-custom-name="Form Group">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="(00) 0000 0000"/>
										</div>

										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto mt-1">Submit</button>

										<div data-gjs-draggable="form, form *"  class="form-group mt-2 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-3" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
								</form>

							</div>

						</div>

						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<img class="img-fluid w-100" alt="Image Alt" src="http://via.placeholder.com/500x205">
						</div>

					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        //  Intro1FORMLH1IMGBGIModuleBlkLabel: "Intro 1-Form Left + Img + Bckrd Img",
        bm.add("module-Intro1FORMLH1IMGBGI", {
          label: opt.Intro1FORMLH1IMGBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-4" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row align-items-start flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-7 col-md-6 mx-auto col-lg-4 mt-lg-2 " data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Call me today!</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box text-center m-auto pt-3 pb-4 px-5 px-lg-4 px-xl-5">
											<p class="text-center">Leave us your phone number and <br><strong>we'll call you soon!</strong></p>
										<div data-gjs-draggable="form, form *"  class="form-group text-center" data-gjs-custom-name="Form Group">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="(00) 0000 0000"/>
										</div>

										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto mt-1">Submit</button>

										<div data-gjs-draggable="form, form *"  class="form-group mt-2 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-3" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
								</form>

							</div>

						</div>
						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<img class="img-fluid" alt="Image Alt" src="http://via.placeholder.com/600x300/333333">
						</div>

					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1FORMLVIDModuleBlkLabel: "Intro 1-Form Left + Video",
        bm.add("module-Intro1FORMLVID", {
          label: opt.Intro1FORMLVIDModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-6 mx-auto col-lg-4 pt-lg-1" data-gjs-custom-name="Column">
							<div class="bg-light mt-lg-2" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Call me today!</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box text-center m-auto pt-3 pb-4 px-5 px-lg-4 px-xl-5">
										<p class="text-center">Leave us your phone number and <br><strong>we'll call you soon!</strong></p>
										<div data-gjs-draggable="form, form *"  class="form-group text-center" data-gjs-custom-name="Form Group">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="(00) 0000 0000"/>
										</div>

										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto mt-1">Submit</button>

										<div data-gjs-draggable="form, form *"  class="form-group mt-2 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-3" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
								</form>

							</div>

						</div>

						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<div class="h-100" data-gjs-custom-name="Banner">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-21by9 dhx-w100 mx-md-auto">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
								</div>
							</div>
						</div>


					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1FORMLVIDBGIModuleBlkLabel: "Intro 1-Form Left + Video + Bckrd Img",
        bm.add("module-Intro1FORMLVIDBGI", {
          label: opt.Intro1FORMLVIDBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - Background Img">
					<div class="container py-4" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row flex-column-reverse flex-lg-row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-6 col-lg-4 mx-auto " data-gjs-custom-name="Column">
							<div class=" bg-light" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Call me today!</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box text-center m-auto pt-3 pb-4 px-5 px-lg-4 px-xl-5">
										<p class="text-center">Leave us your phone number and <br><strong>we'll call you soon!</strong></p>
										<div data-gjs-draggable="form, form *"  class="form-group text-center" data-gjs-custom-name="Form Group">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="(00) 0000 0000"/>
										</div>

										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto mt-1">Submit</button>

										<div data-gjs-draggable="form, form *"  class="form-group mt-2 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-3" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
								</form>

							</div>

						</div>

						<div class="col-12 col-lg-7 text-center text-lg-left mx-auto mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<div class="h-100" data-gjs-custom-name="Banner">
								<h1 class="mb-3">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 dhx-w100 ">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
								</div>
							</div>
						</div>

					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        //  Intro1FORMRBGIModuleBlkLabel: "Intro 1-Form Right + Bckrd Img",
        bm.add("module-Intro1FORMRBGI", {
          label: opt.Intro1FORMRBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - Background Img">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12  col-md-10 mx-auto col-lg-8 text-center text-lg-left" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
						</div>
						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class=" bg-light" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Call me today!</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box text-center m-auto pt-3 pb-4 px-5 px-lg-4 px-xl-5">
										<p class="text-center">Leave us your phone number and <br><strong>we'll call you soon!</strong></p>
										<div data-gjs-draggable="form, form *"  class="form-group text-center" data-gjs-custom-name="Form Group">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="(00) 0000 0000"/>
										</div>

										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto mt-1">Submit</button>

										<div data-gjs-draggable="form, form *"  class="form-group mt-2 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-3" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
								</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        //  Intro1FORMRIMGModuleBlkLabel: "Intro 1-Form Right + Boxed Bckgrd Img",
        bm.add("module-Intro1FORMRIMG", {
          label: opt.Intro1FORMRIMGModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-8 text-center text-md-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<div class="p-4 dhx-banner-bg h-100" data-gjs-custom-name="Banner">
								<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							</div>
						</div>
						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Call me today!</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box text-center m-auto pt-3 pb-4 px-5 px-lg-4 px-xl-5">
										<p class="text-center">Leave us your phone number and <br><strong>we'll call you soon!</strong></p>
										<div data-gjs-draggable="form, form *"  class="form-group text-center" data-gjs-custom-name="Form Group">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="(00) 0000 0000"/>
										</div>

										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto mt-1">Submit</button>

										<div data-gjs-draggable="form, form *"  class="form-group mt-2 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-3" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
								</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1FORMRH1IMGModuleBlkLabel: "Intro 1-Form Right + Img",
        bm.add("module-Intro1FORMRH1IMG", {
          label: opt.Intro1FORMRH1IMGModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row align-items-start" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<img class="img-fluid w-100" alt="Image Alt" src="http://via.placeholder.com/500x205">
						</div>
						<div class="col-12 col-sm-7 col-md-6 mx-auto col-lg-4 mt-lg-3 " data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Call me today!</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box text-center m-auto pt-3 pb-4 px-5 px-lg-4 px-xl-5">
										<p class="text-center">Leave us your phone number and <br><strong>we'll call you soon!</strong></p>
										<div data-gjs-draggable="form, form *"  class="form-group text-center" data-gjs-custom-name="Form Group">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="(00) 0000 0000"/>
										</div>

										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto mt-1">Submit</button>

										<div data-gjs-draggable="form, form *"  class="form-group mt-2 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-3" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
								</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1FORMRH1IMGBGIModuleBlkLabel: "Intro 1-Form Right + Img + Bckrd Img",
        bm.add("module-Intro1FORMRH1IMGBGI", {
          label: opt.Intro1FORMRH1IMGBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-4" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row align-items-start" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<img class="img-fluid" alt="Image Alt" src="http://via.placeholder.com/600x300/333333">
						</div>
						<div class="col-12 col-sm-7 col-md-6 mx-auto col-lg-4 mt-lg-3 " data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Call me today!</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box text-center m-auto pt-3 pb-4 px-5 px-lg-4 px-xl-5">
										<p class="text-center">Leave us your phone number and <br><strong>we'll call you soon!</strong></p>
										<div data-gjs-draggable="form, form *"  class="form-group text-center" data-gjs-custom-name="Form Group">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="(00) 0000 0000"/>
										</div>

										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto mt-1">Submit</button>

										<div data-gjs-draggable="form, form *"  class="form-group mt-2 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-3" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
								</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1FORMRVIDModuleBlkLabel: "Intro 1-Form Right + Video",
        bm.add("module-Intro1FORMRVID", {
          label: opt.Intro1FORMRVIDModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<div class="h-100" data-gjs-custom-name="Banner">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-21by9 dhx-w100 dhx-md-w90 mx-md-auto dhx-xl-w75 ml-lg-0">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
								</div>
							</div>
						</div>

						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Call me today!</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box text-center m-auto pt-3 pb-4 px-5 px-lg-4 px-xl-5">
										<p class="text-center">Leave us your phone number and <br><strong>we'll call you soon!</strong></p>
										<div data-gjs-draggable="form, form *"  class="form-group text-center" data-gjs-custom-name="Form Group">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="(00) 0000 0000"/>
										</div>

										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto mt-1">Submit</button>

										<div data-gjs-draggable="form, form *"  class="form-group mt-2 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-3" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
								</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1FORMRVIDBGIModuleBlkLabel: "Intro 1-Form Right + Video + Bckrd Img",
        bm.add("module-Intro1FORMRVIDBGI", {
          label: opt.Intro1FORMRVIDBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - Background Img">
					<div class="container py-4" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row align-items-start" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<div class="h-100" data-gjs-custom-name="Banner">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 dhx-w100 dhx-md-w90 mx-md-auto dhx-xl-w75 ml-lg-0">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
								</div>
							</div>
						</div>
						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class=" bg-light mt-lg-3" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Call me today!</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box text-center m-auto pt-3 pb-4 px-5 px-lg-4 px-xl-5">
										<p class="text-center">Leave us your phone number and <br><strong>we'll call you soon!</strong></p>
										<div data-gjs-draggable="form, form *"  class="form-group text-center" data-gjs-custom-name="Form Group">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="(00) 0000 0000"/>
										</div>

										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto mt-1">Submit</button>

										<div data-gjs-draggable="form, form *"  class="form-group mt-2 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-3" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
								</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        // Intro4FORMCModuleBlkLabel: "Intro 4-Form Center",
        bm.add("module-Intro4FORMC", {
         label: opt.Intro4FORMCModuleBlkLabel,
         category: opt.categoryIntroFormModulesContent,
         content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-sm-center bg-success" data-gjs-custom-name="Section - First Fold">
				 <div class="container  py-3" data-gjs-custom-name="Boxed Container - 1 Col">
					 <div class="row" data-gjs-custom-name="Row">
						 <div class="col-12 col-md-9 col-lg-7 mx-auto text-center mb-md-0 mb-xl-4" data-gjs-custom-name="Column">
							 <h1 class="mb-3 text-white">Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>

								 <form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form bg-light dhx-md-w75 dhx-sm-w90 dhx-w100 mx-auto form-box m-auto p-4">
									 <div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										 <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
										 <input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="First Name" />
										 </div>
										 <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
										 <input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="Last Name" />
										 </div>
									 </div>
									 <div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										 <div data-gjs-draggable="form, form *"  class="col-sm-6 col-12 mb-3 mb-sm-0" data-gjs-custom-name="2 Columns">
										 <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number"/>
										 </div>
										 <div data-gjs-draggable="form, form *"  class="col-sm-6 col-12" data-gjs-custom-name="2 Columns">
										 <select data-gjs-custom-name="Form - Select Country" class="custom-select" data-ic-form-field="country" id="country-select" name="country-select">
											 <option selected>Country</option>
											 <option data-gjs-custom-name="Select - Option" value="Mexico">Mexico</option>
											 <option data-gjs-custom-name="Select - Option" value="USA">USA</option>
											 <option data-gjs-custom-name="Select - Option" value="Spain">Spain</option>
										 </select>
										 </div>
									 </div>
									 <div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										 <div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
										 <input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="name@email.com" />
										 <small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
										 </div>
									 </div>
									 <button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success">Submit</button>
									 <div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										 <div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
											 <input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
											 <label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										 </div>
									 </div>
								 </form>


						 </div>
					 </div>
				 </div>
							 </section>
				`,
         attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMCBGIModuleBlkLabel: "Intro 4-Form Center + Bckrd Img",
        bm.add("module-Intro4FORMCBGI", {
          label: opt.Intro4FORMCBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-sm-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
							<div class="col-12 col-md-9 col-lg-7 mx-auto text-center mb-md-0 mb-xl-4" data-gjs-custom-name="Column">
								<h1 class="mb-3">Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>

									<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form bg-light dhx-md-w75 dhx-sm-w90 dhx-w100 mx-auto form-box m-auto p-4">
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="First Name" />
										  </div>
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="Last Name" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *"  class="col-sm-6 col-12 mb-3 mb-sm-0" data-gjs-custom-name="2 Columns">
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number"/>
										  </div>
										  <div data-gjs-draggable="form, form *"  class="col-sm-6 col-12" data-gjs-custom-name="2 Columns">
											<select data-gjs-custom-name="Form - Select Country" class="custom-select" data-ic-form-field="country" id="country-select" name="country-select">
												<option selected>Country</option>
												<option data-gjs-custom-name="Select - Option" value="Mexico">Mexico</option>
												<option data-gjs-custom-name="Select - Option" value="USA">USA</option>
												<option data-gjs-custom-name="Select - Option" value="Spain">Spain</option>
											</select>
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="name@email.com" />
											<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
										  </div>
										</div>
										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success">Submit</button>
										<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
									</form>


							</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMLBGIModuleBlkLabel: "Intro 4-Form Left + Bckrd Img",
        bm.add("module-Intro4FORMLBGI", {
          label: opt.Intro4FORMLBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - Background Img">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

					  	<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class=" bg-light" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
											<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
												<div class="col-6">
													<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="First Name*" />
												</div>
												<div class="col-6">
													<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Last Name*" />
												</div>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group mb-2" data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
												<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group " data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
												<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="Email*" />
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
												<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
												<div data-gjs-draggable="form, form *"  class="form-group text-center mt-1 mb-0" data-gjs-custom-name="Form Group">
													<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
														<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
														<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
													</div>
												</div>

										</form>

							</div>

						</div>
						<div class="col-12  col-md-10 mx-auto col-lg-8 text-center text-lg-left" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
						</div>

					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMLIMGModuleBlkLabel: "Intro 4-Form Left + Boxed Bckgrd Img",
        bm.add("module-Intro4FORMLIMG", {
          label: opt.Intro4FORMLIMGModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
											<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
												<div class="col-6">
													<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="First Name*" />
												</div>
												<div class="col-6">
													<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Last Name*" />
												</div>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group mb-2" data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
												<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group " data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
												<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="Email*" />
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
												<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
												<div data-gjs-draggable="form, form *"  class="form-group mt-1 text-center mb-0" data-gjs-custom-name="Form Group">
													<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
														<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
														<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
													</div>
												</div>
										</form>
							</div>
						</div>
						<div class="col-12 mx-auto col-lg-8 text-center text-md-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<div class="p-4 dhx-banner-bg h-100" data-gjs-custom-name="Banner">
								<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							</div>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMLH1IMGModuleBlkLabel: "Intro 4-Form Left + Img",
        bm.add("module-Intro4FORMLH1IMG", {
          label: opt.Intro4FORMLH1IMGModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row align-items-center  flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-7 col-md-6 mx-auto col-lg-4 mt-lg-2 " data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4 ">
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label" for="firstname-input">First Name*</label>
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="" />
										  </div>
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label" for="lastname-input">Last Name*</label>
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number"/>

										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="email-input">Email*</label>
											<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email.</small>
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="name@email.com" />

										  </div>
										</div>
										<div class="form-row form-group text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
												<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row mt-1 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check col-12 pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
								</form>

							</div>

						</div>

						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<img class="img-fluid w-100" alt="Image Alt" src="http://via.placeholder.com/500x205">
						</div>

					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        //  Intro4FORMLH1IMGBGIModuleBlkLabel: "Intro 4-Form Left + Img + Bckrd Img",
        bm.add("module-Intro4FORMLH1IMGBGI", {
          label: opt.Intro4FORMLH1IMGBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-4" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row align-items-center flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-7 col-md-6 mx-auto col-lg-4 mt-lg-2 " data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4 ">
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label" for="firstname-input">First Name*</label>
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="" />
										  </div>
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label" for="lastname-input">Last Name*</label>
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number"/>

										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="email-input">Email*</label>
											<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email.</small>
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="name@email.com" />

										  </div>
										</div>
										<div class="form-row form-group text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row mt-1 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check col-12 pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
								</form>

							</div>

						</div>
						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<img class="img-fluid" alt="Image Alt" src="http://via.placeholder.com/600x300/333333">
						</div>

					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMLVIDModuleBlkLabel: "Intro 4-Form Left + Video",
        bm.add("module-Intro4FORMLVID", {
          label: opt.Intro4FORMLVIDModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
											<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
												<div class="col-6">
													<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="First Name*" />
												</div>
												<div class="col-6">
													<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Last Name*" />
												</div>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group mb-2" data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
												<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group " data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
												<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="Email*" />
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
												<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
												<div data-gjs-draggable="form, form *"  class="form-group text-center mt-1 mb-0" data-gjs-custom-name="Form Group">
													<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
														<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
														<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
													</div>
												</div>
										</form>

							</div>

						</div>

						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-21by9 dhx-w100 mx-md-auto">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
								</div>
						</div>


					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMLVIDBGIModuleBlkLabel: "Intro 4-Form Left + Video + Bckrd Img",
        bm.add("module-Intro4FORMLVIDBGI", {
          label: opt.Intro4FORMLVIDBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - Background Img">
					<div class="container py-4" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row flex-column-reverse flex-lg-row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-6 col-lg-4 mx-auto " data-gjs-custom-name="Column">
							<div class=" bg-light" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
									<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
										<div class="col-6">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="firstname-input">First Name*</label>
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Eg. Paul" />
										</div>

										<div class="col-6">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="lastname-input">First Name*</label>
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Eg. Smith" />
										</div>

									</div>
									<div data-gjs-draggable="form, form *"  class="form-group mb-2" data-gjs-custom-name="Form Group">
										<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="phone-input">Phone Number*</label>
										<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="(00) 0000 0000"/>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group " data-gjs-custom-name="Form Group">
										<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="email-input">Email*</label>
										<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">name@email.com</small>
										<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="Email*" />
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
										<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
									</div>
								</form>

							</div>

						</div>

						<div class="col-12 col-lg-7 text-center text-lg-left mx-auto mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-3">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 dhx-w100 ">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
								</div>
						</div>

					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORML2CTABGIModuleBlkLabel: "Intro 4-Form Left + 2-CTA + Bckrd Img",
        bm.add("module-Intro4FORML2CTABGI", {
          label: opt.Intro4FORML2CTABGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-sm-center" data-gjs-custom-name="Section - Background Img">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

					  	<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class=" bg-light" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
											<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
												<div class="col-6">
													<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="First Name*" />
												</div>
												<div class="col-6">
													<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Last Name*" />
												</div>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group mb-2" data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
												<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group " data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
												<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="Email*" />
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
												<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
												<div data-gjs-draggable="form, form *"  class="form-group text-center mt-1 mb-0" data-gjs-custom-name="Form Group">
													<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
														<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
														<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
													</div>
												</div>

										</form>

							</div>

						</div>
						<div class="col-12  col-md-10 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-lg-0" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<div class="dhx-w100" data-gjs-custom-name="Buttons Container">
								<a href="#" class="btn btn-secondary mr-2" data-gjs-custom-name="Button">Call to Action</a>
								<a href="video-popup.html" class="btn btn-secondary" data-gjs-custom-name="Button">Watch Video</a>

							</div>
						</div>

					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORML2CTAIMGModuleBlkLabel: "Intro 4-Form Left + 2-CTA + Boxed Bckgrd Img",
        bm.add("module-Intro4FORML2CTAIMG", {
          label: opt.Intro4FORML2CTAIMGModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
											<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
												<div class="col-6">
													<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="First Name*" />
												</div>
												<div class="col-6">
													<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Last Name*" />
												</div>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group mb-2" data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
												<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group " data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
												<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="Email*" />
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
												<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
												<div data-gjs-draggable="form, form *"  class="form-group mt-1 text-center mb-0" data-gjs-custom-name="Form Group">
													<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
														<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
														<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
													</div>
												</div>

										</form>

							</div>

						</div>
						<div class="col-12 mx-auto col-lg-8 text-center text-md-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<div class="p-5 p-md-4 dhx-banner-bg h-100" data-gjs-custom-name="Banner">
								<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
								<div class="dhx-w100" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-outline-primary" data-gjs-custom-name="Button">Call to Action</a>
									<a href="video-popup.html" class="btn btn-secondary ml-2" data-gjs-custom-name="Button">Watch Video</a>
								</div>
							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORML2CTAH1IMGModuleBlkLabel: "Intro 4-Form Left + 2-CTA + Img",
        bm.add("module-Intro4FORML2CTAH1IMG", {
          label: opt.Intro4FORML2CTAH1IMGModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row align-items-start  flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-7 col-md-6 mx-auto col-lg-4 mt-lg-2 " data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4 ">
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label" for="firstname-input">First Name*</label>
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="" />
										  </div>
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label" for="lastname-input">Last Name*</label>
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number"/>

										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="email-input">Email*</label>
											<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email.</small>
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="name@email.com" />

										  </div>
										</div>
										<div class="form-row form-group text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
												<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row mt-1 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check col-12 pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
								</form>

							</div>

						</div>

						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mt-3 mt-sm-0 mb-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<img class="img-fluid w-100" alt="Image Alt" src="http://via.placeholder.com/500x205">

								<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-lg btn-outline-info mr-2" data-gjs-custom-name="Button">Call to Action</a>
									<a href="video-popup.html" class="btn btn-lg btn-info" data-gjs-custom-name="Button">Watch Video</a>
								</div>
						</div>

					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORML2CTAH1IMGBGIModuleBlkLabel: "Intro 4-Form Left + 2-CTA + Img + Bckrd Img",
        bm.add("module-Intro4FORML2CTAH1IMGBGI", {
          label: opt.Intro4FORML2CTAH1IMGBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-4" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row align-items-stretch flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-7 col-md-6 mx-auto col-lg-4 mt-lg-2 " data-gjs-custom-name="Column">
							<div class="dhx-bg-gray1 dhx-h100" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4 ">
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label" for="firstname-input">First Name*</label>
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="" />
										  </div>
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label" for="lastname-input">Last Name*</label>
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number"/>

										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="email-input">Email*</label>
											<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email.</small>
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="name@email.com" />

										  </div>
										</div>
										<div class="form-row form-group text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row mt-1 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check col-12 pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
								</form>

							</div>

						</div>
						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<img class="img-fluid" alt="Image Alt" src="http://via.placeholder.com/600x300/333333">

								<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-outline-primary mr-2" data-gjs-custom-name="Button">Call to Action</a>
									<a href="video-popup.html" class="btn btn-secondary" data-gjs-custom-name="Button">Watch Video</a>
								</div>

						</div>

					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMLICOBGIModuleBlkLabel: "Intro 4-Form Left + Icons + Bckrd Img",
        bm.add("module-Intro4FORMLICOBGI", {
          label: opt.Intro4FORMLICOBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - Background Img">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

					  	<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class=" bg-light" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
											<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
												<div class="col-6">
													<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="First Name*" />
												</div>
												<div class="col-6">
													<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Last Name*" />
												</div>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group mb-2" data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
												<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group " data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
												<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="Email*" />
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
												<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
												<div data-gjs-draggable="form, form *"  class="form-group text-center mt-1 mb-0" data-gjs-custom-name="Form Group">
													<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
														<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
														<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
													</div>
												</div>

										</form>

							</div>

						</div>
						<div class="col-12  col-md-10 mx-auto col-lg-8 text-center text-lg-left" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<div class="text-center text-lg-left pl-lg-4 mt-4 pt-md-1 mb-4"  data-gjs-custom-name="Icons Container">
								<div class="text-center d-inline-block mr-5 dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
									<i class="fas fa-cloud-download-alt text-primary dhx-icon-bg-rounded bg-white"></i>
									<p>Dolor</p>
								</div>
								<div class="text-center d-inline-block mr-5 dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
									<i class="fab fa-apple text-primary dhx-icon-bg-rounded bg-white"></i>
									<p>Lorem</p>
								</div>
								<div class="text-center d-inline-block  dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
									<i class="fas fa-flask text-primary dhx-icon-bg-rounded bg-white"></i>
									<p>Rutrum</p>
								</div>
							</div>
						</div>

					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMLICOIMGModuleBlkLabel: "Intro 4-Form Left + Icons + Boxed Bckgrd Img",
        bm.add("module-Intro4FORMLICOIMG", {
          label: opt.Intro4FORMLICOIMGModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
											<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
												<div class="col-6">
													<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="First Name*" />
												</div>
												<div class="col-6">
													<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Last Name*" />
												</div>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group mb-2" data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
												<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group " data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
												<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="Email*" />
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
												<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
												<div data-gjs-draggable="form, form *"  class="form-group mt-1 text-center mb-0" data-gjs-custom-name="Form Group">
													<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
														<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
														<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
													</div>
												</div>

										</form>

							</div>

						</div>
						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<div class="p-4 dhx-banner-bg h-100" data-gjs-custom-name="Banner">
								<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>

								<div class="text-center text-xl-left pl-xl-4 mt-4 pt-md-1 mb-md-4"  data-gjs-custom-name="Icons Container">
									<div class="text-center d-inline-block mr-5 dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-cloud-download-alt text-primary dhx-icon-bg-rounded bg-white"></i>
										<p>Dolor</p>
									</div>
									<div class="text-center d-inline-block mr-5 dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fab fa-apple text-primary dhx-icon-bg-rounded bg-white"></i>
										<p>Lorem</p>
									</div>
									<div class="text-center d-inline-block  dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-flask text-primary dhx-icon-bg-rounded bg-white"></i>
										<p>Rutrum</p>
									</div>
								</div>
							</div>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMLLIBGIModuleBlkLabel: "Intro 4-Form Left + List + Bckrd Img",
        bm.add("module-Intro4FORMLLIBGI", {
          label: opt.Intro4FORMLLIBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - Background Img">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

					  	<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class=" bg-light" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
											<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
												<div class="col-6">
													<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="First Name*" />
												</div>
												<div class="col-6">
													<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Last Name*" />
												</div>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group mb-2" data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
												<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group " data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
												<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="Email*" />
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
												<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
												<div data-gjs-draggable="form, form *"  class="form-group text-center mt-1 mb-0" data-gjs-custom-name="Form Group">
													<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
														<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
														<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
													</div>
												</div>

										</form>

							</div>

						</div>
						<div class="col-12  col-md-10 mx-auto col-lg-8 text-center text-lg-left" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<ul class="list-unstyled dhx-list pl-lg-3 text-left d-inline-block d-lg-block mx-auto mx-lg-0 mb-5" data-gjs-custom-name="Unordered List">
							  <li class="dhx-list-item"><i class="fas fa-check pr-2"></i>Lorem ipsum dolor sit amet</li>
							  <li class="dhx-list-item"><i class="fas fa-check pr-2"></i>Consectetur adipiscing elit</li>
							  <li class="dhx-list-item"><i class="fas fa-check pr-2"></i>Integer molestie lorem at massa</li>
							  <li class="dhx-list-item"><i class="fas fa-check pr-2"></i>Faucibus porta lacus fringilla vel</li>
							  <li class="dhx-list-item"><i class="fas fa-check pr-2"></i>Aenean sit amet erat nunc</li>
							  <li class="dhx-list-item"><i class="fas fa-check pr-2"></i>Eget porttitor lorem</li>
							</ul>
						</div>

					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMLLIIMGModuleBlkLabel: "Intro 4-Form Left + List + Boxed Bckgrd Img",
        bm.add("module-Intro4FORMLLIIMG", {
          label: opt.Intro4FORMLLIIMGModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
											<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
												<div class="col-6">
													<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="First Name*" />
												</div>
												<div class="col-6">
													<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Last Name*" />
												</div>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group mb-2" data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
												<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group " data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
												<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="Email*" />
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
												<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
												<div data-gjs-draggable="form, form *"  class="form-group mt-1 text-center mb-0" data-gjs-custom-name="Form Group">
													<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
														<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
														<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
													</div>
												</div>

										</form>

							</div>

						</div>
						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<div class="p-4 dhx-banner-bg h-100" data-gjs-custom-name="Banner">
								<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>

								<ul class="text-left d-inline-block d-lg-block mx-auto mx-lg-0 pl-3 pl-lg-4 ml-lg-3" data-gjs-custom-name="Unordered List">
								  <li class="dhx-list-item">Lorem ipsum dolor sit amet</li>
								  <li class="dhx-list-item">Consectetur adipiscing elit</li>
								  <li class="dhx-list-item">Integer molestie lorem at massa</li>
								  <li class="dhx-list-item">Faucibus porta lacus fringilla vel</li>
								  <li class="dhx-list-item">Aenean sit amet erat nunc</li>
								  <li class="dhx-list-item">Eget porttitor lorem</li>
								</ul>
							</div>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        //  Intro4FORMRBGIModuleBlkLabel: "Intro 4-Form Right + Bckrd Img",
        bm.add("module-Intro4FORMRBGI", {
          label: opt.Intro4FORMRBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - Background Img">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12  col-md-10 mx-auto col-lg-8 text-center text-lg-left" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
						</div>
						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class=" bg-light" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
											<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
												<div class="col-6">
													<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="First Name*" />
												</div>
												<div class="col-6">
													<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Last Name*" />
												</div>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group mb-2" data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
												<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group " data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
												<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="Email*" />
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
												<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
												<div data-gjs-draggable="form, form *"  class="form-group text-center mt-1 mb-0" data-gjs-custom-name="Form Group">
													<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
														<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
														<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
													</div>
												</div>
										</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        //  Intro4FORMRIMGModuleBlkLabel: "Intro 4-Form Right + Boxed Bckgrd Img",
        bm.add("module-Intro4FORMRIMG", {
          label: opt.Intro4FORMRIMGModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-8 text-center text-md-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<div class="p-4 dhx-banner-bg h-100" data-gjs-custom-name="Banner">
								<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							</div>
						</div>
						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
											<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
												<div class="col-6">
													<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="First Name*" />
												</div>
												<div class="col-6">
													<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Last Name*" />
												</div>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group mb-2" data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
												<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group " data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
												<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="Email*" />
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
												<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
												<div data-gjs-draggable="form, form *"  class="form-group text-center mt-1 mb-0" data-gjs-custom-name="Form Group">
													<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
														<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
														<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
													</div>
												</div>
										</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMRH1IMGModuleBlkLabel: "Intro 4-Form Right + Img",
        bm.add("module-Intro4FORMRH1IMG", {
          label: opt.Intro4FORMRH1IMGModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row align-items-center" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<img class="img-fluid w-100" alt="Image Alt" src="http://via.placeholder.com/500x205">
						</div>
						<div class="col-12 col-sm-7 col-md-6 mx-auto col-lg-4 mt-lg-2 " data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4 ">
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label" for="firstname-input">First Name*</label>
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="" />
										  </div>
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label" for="lastname-input">Last Name*</label>
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number"/>

										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="email-input">Email*</label>
											<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email.</small>
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="name@email.com" />

										  </div>
										</div>
										<div class="form-row form-group text-center" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
										</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row mt-1 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check col-12 pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
								</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMRH1IMGBGIModuleBlkLabel: "Intro 4-Form Right + Img + Bckrd Img",
        bm.add("module-Intro4FORMRH1IMGBGI", {
          label: opt.Intro4FORMRH1IMGBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-4" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row align-items-center" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<img class="img-fluid" alt="Image Alt" src="http://via.placeholder.com/600x300/333333">
						</div>
						<div class="col-12 col-sm-7 col-md-6 mx-auto col-lg-4 mt-lg-2 " data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4 ">
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label" for="firstname-input">First Name*</label>
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="" />
										  </div>
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label" for="lastname-input">Last Name*</label>
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number"/>

										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="email-input">Email*</label>
											<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email.</small>
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="name@email.com" />

										  </div>
										</div>
										<div class="form-row form-group text-center" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
										</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row mt-1 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check col-12 pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
								</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMRVIDModuleBlkLabel: "Intro 4-Form Right + Video",
        bm.add("module-Intro4FORMRVID", {
          label: opt.Intro4FORMRVIDModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-21by9 dhx-w100 dhx-md-w90 mx-md-auto dhx-xl-w75 ml-lg-0">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
								</div>
						</div>
						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
											<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
												<div class="col-6">
													<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="First Name*" />
												</div>
												<div class="col-6">
													<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Last Name*" />
												</div>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group mb-2" data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
												<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group " data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
												<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="Email*" />
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
												<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
												<div data-gjs-draggable="form, form *"  class="form-group text-center mt-1 mb-0" data-gjs-custom-name="Form Group">
													<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
														<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
														<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
													</div>
												</div>
										</form>
							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMRVIDBGIModuleBlkLabel: "Intro 4-Form Right + Video + Bckrd Img",
        bm.add("module-Intro4FORMRVIDBGI", {
          label: opt.Intro4FORMRVIDBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - Background Img">
					<div class="container py-4" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row align-items-center" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 dhx-w100 dhx-md-w90 mx-md-auto dhx-xl-w75 ml-lg-0">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
								</div>
						</div>
						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class=" bg-light" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
									<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
										<div class="col-6">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="firstname-input">First Name*</label>
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Eg. Paul" />
										</div>

										<div class="col-6">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="lastname-input">First Name*</label>
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Eg. Smith" />
										</div>

									</div>
									<div data-gjs-draggable="form, form *"  class="form-group mb-2" data-gjs-custom-name="Form Group">
										<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="phone-input">Phone Number*</label>
										<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="(00) 0000 0000"/>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group " data-gjs-custom-name="Form Group">
										<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="email-input">Email*</label>
										<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">name@email.com</small>
										<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="Email*" />
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
										<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
									</div>
								</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMR2CTABGIModuleBlkLabel: "Intro 4-Form Right + 2-CTA + Bckrd Img",
        bm.add("module-Intro4FORMR2CTABGI", {
          label: opt.Intro4FORMR2CTABGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - Background Img">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12  col-md-10 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-lg-0" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<div class="dhx-w100" data-gjs-custom-name="Buttons Container">
								<a href="#" class="btn btn-secondary mr-2" data-gjs-custom-name="Button">Call to Action</a>
								<a href="video-popup.html" class="btn btn-secondary" data-gjs-custom-name="Button">Watch Video</a>
							</div>
						</div>
						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class=" bg-light" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
											<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
												<div class="col-6">
													<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="First Name*" />
												</div>
												<div class="col-6">
													<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Last Name*" />
												</div>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group mb-2" data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
												<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group " data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
												<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="Email*" />
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
												<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
												<div data-gjs-draggable="form, form *"  class="form-group text-center mt-1 mb-0" data-gjs-custom-name="Form Group">
													<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
														<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
														<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
													</div>
												</div>
										</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMR2CTAIMGModuleBlkLabel: "Intro 4-Form Right + 2-CTA + Boxed Bckgrd Img",
        bm.add("module-Intro4FORMR2CTAIMG", {
          label: opt.Intro4FORMR2CTAIMGModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-8 text-center text-md-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<div class="p-4 dhx-banner-bg h-100" data-gjs-custom-name="Banner">
								<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>

								<div class="dhx-w100" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-secondary mr-2" data-gjs-custom-name="Button">Call to Action</a>
									<a href="video-popup.html" class="btn btn-secondary" data-gjs-custom-name="Button">Watch Video</a>
								</div>
							</div>
						</div>
						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
											<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
												<div class="col-6">
													<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="First Name*" />
												</div>
												<div class="col-6">
													<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Last Name*" />
												</div>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group mb-2" data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
												<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group " data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
												<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="Email*" />
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
												<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
												<div data-gjs-draggable="form, form *"  class="form-group text-center mt-1 mb-0" data-gjs-custom-name="Form Group">
													<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
														<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
														<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
													</div>
												</div>
										</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMR2CTAH1IMGModuleBlkLabel: "Intro 4-Form Right + 2-CTA + Img",
        bm.add("module-Intro4FORMR2CTAH1IMG", {
          label: opt.Intro4FORMR2CTAH1IMGModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row align-items-start" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<img class="img-fluid w-100" alt="Image Alt" src="http://via.placeholder.com/500x205">
								<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-lg btn-outline-info mr-2" data-gjs-custom-name="Button">Call to Action</a>
									<a href="video-popup.html" class="btn btn-lg btn-info" data-gjs-custom-name="Button">Watch Video</a>
								</div>
						</div>
						<div class="col-12 col-sm-7 col-md-6 mx-auto col-lg-4 mt-lg-2 " data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4 ">
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label" for="firstname-input">First Name*</label>
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="" />
										  </div>
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label" for="lastname-input">Last Name*</label>
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number"/>

										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="email-input">Email*</label>
											<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email.</small>
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="name@email.com" />

										  </div>
										</div>
										<div class="form-row form-group text-center" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
										</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row mt-1 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check col-12 pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
								</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMR2CTAH1IMGBGIModuleBlkLabel: "Intro 4-Form Right + 2-CTA + Img + Bckrd Img",
        bm.add("module-Intro4FORMR2CTAH1IMGBGI", {
          label: opt.Intro4FORMR2CTAH1IMGBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-4" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row align-items-start" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<img class="img-fluid" alt="Image Alt" src="http://via.placeholder.com/600x300/333333">

								<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-outline-primary mr-2" data-gjs-custom-name="Button">Call to Action</a>
									<a href="video-popup.html" class="btn btn-secondary" data-gjs-custom-name="Button">Watch Video</a>
								</div>
						</div>
						<div class="col-12 col-sm-7 col-md-6 mx-auto col-lg-4 mt-lg-2 " data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4 ">
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label" for="firstname-input">First Name*</label>
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="" />
										  </div>
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label" for="lastname-input">Last Name*</label>
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="phone-input">Phone Number*</label><small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations ">If mobile without 044 / 045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number"/>

										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 dhx-label mr-1" for="email-input">Email*</label>
											<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email.</small>
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="name@email.com" />

										  </div>
										</div>
										<div class="form-row form-group text-center" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
										</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row mt-1 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check col-12 pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
								</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMRICOBGIModuleBlkLabel: "Intro 4-Form Right + Icons + Bckrd Img",
        bm.add("module-Intro4FORMRICOBGI", {
          label: opt.Intro4FORMRICOBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - Background Img">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12  col-md-10 mx-auto col-lg-8 text-center text-lg-left" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>

							<div class="text-center text-lg-left pl-lg-4 mt-4 pt-md-1 mb-4"  data-gjs-custom-name="Icons Container">
								<div class="text-center d-inline-block mr-5 dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
									<i class="fas fa-cloud-download-alt text-primary dhx-icon-bg-rounded bg-white"></i>
									<p>Dolor</p>
								</div>
								<div class="text-center d-inline-block mr-5 dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
									<i class="fab fa-apple text-primary dhx-icon-bg-rounded bg-white"></i>
									<p>Lorem</p>
								</div>
								<div class="text-center d-inline-block  dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
									<i class="fas fa-flask text-primary dhx-icon-bg-rounded bg-white"></i>
									<p>Rutrum</p>
								</div>
							</div>
						</div>
						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class=" bg-light" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
											<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
												<div class="col-6">
													<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="First Name*" />
												</div>
												<div class="col-6">
													<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Last Name*" />
												</div>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group mb-2" data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
												<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group " data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
												<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="Email*" />
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
												<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
												<div data-gjs-draggable="form, form *"  class="form-group text-center mt-1 mb-0" data-gjs-custom-name="Form Group">
													<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
														<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
														<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
													</div>
												</div>
										</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMRICOIMGModuleBlkLabel: "Intro 4-Form Right + Icons + Boxed Bckgrd Img",
        bm.add("module-Intro4FORMRICOIMG", {
          label: opt.Intro4FORMRICOIMGModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<div class="p-4 dhx-banner-bg h-100" data-gjs-custom-name="Banner">
								<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
								<div class="text-center text-xl-left pl-xl-4 mt-4 pt-md-1 mb-md-4"  data-gjs-custom-name="Icons Container">
									<div class="text-center d-inline-block mr-5 dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-cloud-download-alt text-primary dhx-icon-bg-rounded bg-white"></i>
										<p>Dolor</p>
									</div>
									<div class="text-center d-inline-block mr-5 dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fab fa-apple text-primary dhx-icon-bg-rounded bg-white"></i>
										<p>Lorem</p>
									</div>
									<div class="text-center d-inline-block  dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-flask text-primary dhx-icon-bg-rounded bg-white"></i>
										<p>Rutrum</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
											<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
												<div class="col-6">
													<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="First Name*" />
												</div>
												<div class="col-6">
													<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Last Name*" />
												</div>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group mb-2" data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
												<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group " data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
												<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="Email*" />
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
												<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
												<div data-gjs-draggable="form, form *"  class="form-group text-center mt-1 mb-0" data-gjs-custom-name="Form Group">
													<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
														<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
														<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
													</div>
												</div>
										</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMRLIBGIModuleBlkLabel: "Intro 4-Form Right + List + Bckrd Img",
        bm.add("module-Intro4FORMRLIBGI", {
          label: opt.Intro4FORMRLIBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - Background Img">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12  col-md-10 mx-auto col-lg-8 text-center text-lg-left" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>

							<ul class="list-unstyled dhx-list pl-lg-3 text-left d-inline-block d-lg-block mx-auto mx-lg-0 mb-5" data-gjs-custom-name="Unordered List">
							  <li class="dhx-list-item"><i class="fas fa-check pr-2"></i>Lorem ipsum dolor sit amet</li>
							  <li class="dhx-list-item"><i class="fas fa-check pr-2"></i>Consectetur adipiscing elit</li>
							  <li class="dhx-list-item"><i class="fas fa-check pr-2"></i>Integer molestie lorem at massa</li>
							  <li class="dhx-list-item"><i class="fas fa-check pr-2"></i>Faucibus porta lacus fringilla vel</li>
							  <li class="dhx-list-item"><i class="fas fa-check pr-2"></i>Aenean sit amet erat nunc</li>
							  <li class="dhx-list-item"><i class="fas fa-check pr-2"></i>Eget porttitor lorem</li>
							</ul>
						</div>
						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class=" bg-light" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
											<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
												<div class="col-6">
													<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="First Name*" />
												</div>
												<div class="col-6">
													<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Last Name*" />
												</div>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group mb-2" data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
												<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group " data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
												<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="Email*" />
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
												<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
												<div data-gjs-draggable="form, form *"  class="form-group text-center mt-1 mb-0" data-gjs-custom-name="Form Group">
													<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
														<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
														<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
													</div>
												</div>
										</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro4FORMRLIIMGModuleBlkLabel: "Intro 4-Form Right + List + Boxed Bckgrd Img",
        bm.add("module-Intro4FORMRLIIMG", {
          label: opt.Intro4FORMRLIIMGModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<div class="p-4 dhx-banner-bg h-100" data-gjs-custom-name="Banner">
								<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
								<ul class="text-left d-inline-block d-lg-block mx-auto mx-lg-0 pl-3 pl-lg-4 ml-lg-3" data-gjs-custom-name="Unordered List">
								  <li class="dhx-list-item">Lorem ipsum dolor sit amet</li>
								  <li class="dhx-list-item">Consectetur adipiscing elit</li>
								  <li class="dhx-list-item">Integer molestie lorem at massa</li>
								  <li class="dhx-list-item">Faucibus porta lacus fringilla vel</li>
								  <li class="dhx-list-item">Aenean sit amet erat nunc</li>
								  <li class="dhx-list-item">Eget porttitor lorem</li>
								</ul>
							</div>
						</div>
						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
											<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
												<div class="col-6">
													<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="First Name*" />
												</div>
												<div class="col-6">
													<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Last Name*" />
												</div>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group mb-2" data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
												<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group " data-gjs-custom-name="Form Group">
												<small data-gjs-custom-name="Form - Aclaration" id="emailHelp" class="text-muted dhx-aclarations">We will never share your email with anyone else.</small>
												<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" aria-describedby="emailHelp" placeholder="Email*" />
											</div>
											<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
												<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
											</div>
												<div data-gjs-draggable="form, form *"  class="form-group text-center mt-1 mb-0" data-gjs-custom-name="Form Group">
													<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
														<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
														<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
													</div>
												</div>
										</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro8FORMCModuleBlkLabel: "Intro 8-Form Center",
        bm.add("module-Intro8FORMC", {
         label: opt.Intro8FORMCModuleBlkLabel,
         category: opt.categoryIntroFormModulesContent,
         content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-sm-center bg-success" data-gjs-custom-name="Section - First Fold">
				 <div class="container  py-2" data-gjs-custom-name="Boxed Container - 1 Col">
					 <div class="row" data-gjs-custom-name="Row">
						 <div class="col-12 col-md-9 col-lg-7 mx-auto text-center mb-md-0 mb-xl-4" data-gjs-custom-name="Column">
							 <h1 class="mb-3 text-white">Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>

								 <form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form bg-light dhx-xl-w75 dhx-sm-w90 dhx-w100 mx-auto form-box m-auto p-4">
									 <div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										 <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
										 <input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="First Name" />
										 </div>
										 <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
										 <input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="Last Name" />
										 </div>
									 </div>
									 <div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										 <div data-gjs-draggable="form, form *"  class="col-sm-6 col-12 mb-3 mb-sm-0" data-gjs-custom-name="2 Columns">
										 <input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control"  placeholder="Phone Number"/>
										 </div>
										 <div data-gjs-draggable="form, form *"  class="col-sm-6 col-12" data-gjs-custom-name="2 Columns">
										 <input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control"  placeholder="name@email.com" />
										 </div>
									 </div>
									 <div data-gjs-draggable="form, form *"  class="form-group form-row  mb-2" data-gjs-custom-name="Form Group">
										 <div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											 <input type="text" data-ic-form-field="address1" id="address1-input" name="address1-input" data-gjs-custom-name="Form - Input Address1"  class="input form-control"  placeholder="Address line 01" />
										 </div>
									 </div>
									 <div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										 <div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											 <input type="text" data-ic-form-field="address2" id="address2-input" name="address2-input" data-gjs-custom-name="Form - Input Address2"  class="input form-control"  placeholder="Address line 02" />
										 </div>
									 </div>
									 <div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											 <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
																	 <input type="text" data-ic-form-field="zip" id="zip-input" name="zip-input" data-gjs-custom-name="Form - Input ZipCode" class="input form-control" placeholder="Postal Code" />
											 </div>
											 <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											 <select data-gjs-custom-name="Form - Select Country" class="custom-select" data-ic-form-field="country" id="country-select" name="country-select">
												 <option selected>Country</option>
												 <option data-gjs-custom-name="Select - Option" value="Mexico">Mexico</option>
												 <option data-gjs-custom-name="Select - Option" value="USA">USA</option>
												 <option data-gjs-custom-name="Select - Option" value="Spain">Spain</option>
											 </select>
											 </div>
										 </div>

									 <button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mt-2">Submit</button>
									 <div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										 <div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
											 <input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
											 <label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										 </div>
									 </div>
								 </form>


						 </div>
					 </div>
				 </div>
							 </section>
				`,
         attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro8FORMCBGIModuleBlkLabel: "Intro 8-Form Center + Bckrd Img",
        bm.add("module-Intro8FORMCBGI", {
          label: opt.Intro8FORMCBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `				<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-sm-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
							<div class="col-12 col-md-9 col-lg-7 mx-auto text-center mb-md-0 mb-xl-4" data-gjs-custom-name="Column">
								<h1 class="mb-3">Lorem ipsum dolor sit amet, <br class="d-none d-lg-block">consectetur adipiscing elit. </h1>

									<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form bg-light dhx-xl-w75 dhx-sm-w90 dhx-w100 mx-auto form-box m-auto p-4">
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="First Name" />
										  </div>
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="Last Name" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *"  class="col-sm-6 col-12 mb-3 mb-sm-0" data-gjs-custom-name="2 Columns">
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control"  placeholder="Phone Number"/>
										  </div>
										  <div data-gjs-draggable="form, form *"  class="col-sm-6 col-12" data-gjs-custom-name="2 Columns">
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control"  placeholder="name@email.com" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
										  	<input type="text" data-ic-form-field="address1" id="address1-input" name="address1-input" data-gjs-custom-name="Form - Input Address1"  class="input form-control"  placeholder="Address line 01" />
											</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
												<input type="text" data-ic-form-field="address2" id="address2-input" name="address2-input" data-gjs-custom-name="Form - Input Address2"  class="input form-control"  placeholder="Address line 02" />
											</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
                  									<input type="text" data-ic-form-field="zip" id="zip-input" name="zip-input" data-gjs-custom-name="Form - Input ZipCode" class="input form-control" placeholder="Postal Code" />
											  </div>
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
												<select data-gjs-custom-name="Form - Select Country" class="custom-select" data-ic-form-field="country" id="country-select" name="country-select">
													<option selected>Country</option>
													<option data-gjs-custom-name="Select - Option" value="Mexico">Mexico</option>
													<option data-gjs-custom-name="Select - Option" value="USA">USA</option>
													<option data-gjs-custom-name="Select - Option" value="Spain">Spain</option>
												</select>
											  </div>
										  </div>

										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mt-2">Submit</button>
										<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
									</form>


							</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro8FORMLBGIModuleBlkLabel: "Intro 8-Form Left + Bckrd Img",
        bm.add("module-Intro8FORMLBGI", {
          label: opt.Intro8FORMLBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-sm-center" data-gjs-custom-name="Section - Background Img">
					<div class="container pb-3 pt-0 pt-sm-3" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

					  	<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class=" bg-light" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="First Name" />
										  </div>
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="Last Name" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control"  placeholder="Phone Number"/>
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control"  placeholder="name@email.com" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
												<input type="text" data-ic-form-field="company" id="company-input" name="company-input" data-gjs-custom-name="Form - Input Company" class="input form-control" placeholder="Company" />
											</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
								                  <input type="text" data-ic-form-field="city" id="city-input" name="city-input" data-gjs-custom-name="Form - Input City" class="input form-control"  placeholder="City" />
											  </div>
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
												<select data-gjs-custom-name="Form - Select Country" class="custom-select" data-ic-form-field="country" id="country-select" name="country-select">
													<option selected>Country</option>
													<option data-gjs-custom-name="Select - Option" value="Mexico">Mexico</option>
													<option data-gjs-custom-name="Select - Option" value="USA">USA</option>
													<option data-gjs-custom-name="Select - Option" value="Spain">Spain</option>
												</select>
											  </div>
										  </div>

										<div class="form-row form-group text-center mt-4" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
										</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row mt-1 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check col-12 pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
									</form>

							</div>

						</div>
						<div class="col-12  col-md-10 mx-auto col-lg-8 text-center text-lg-left" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
						</div>

					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro8FORMLIMGModuleBlkLabel: "Intro 8-Form Left + Boxed Bckgrd Img",
        bm.add("module-Intro8FORMLIMG", {
          label: opt.Intro8FORMLIMGModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="First Name" />
										  </div>
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="Last Name" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control"  placeholder="Phone Number"/>
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control"  placeholder="name@email.com" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
												<input type="text" data-ic-form-field="company" id="company-input" name="company-input" data-gjs-custom-name="Form - Input Company" class="input form-control" placeholder="Company" />
											</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
								                  <input type="text" data-ic-form-field="city" id="city-input" name="city-input" data-gjs-custom-name="Form - Input City" class="input form-control"  placeholder="City" />
											  </div>
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
												<select data-gjs-custom-name="Form - Select Country" class="custom-select" data-ic-form-field="country" id="country-select" name="country-select">
													<option selected>Country</option>
													<option data-gjs-custom-name="Select - Option" value="Mexico">Mexico</option>
													<option data-gjs-custom-name="Select - Option" value="USA">USA</option>
													<option data-gjs-custom-name="Select - Option" value="Spain">Spain</option>
												</select>
											  </div>
										  </div>

										<div class="form-row form-group text-center mt-4" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
										</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row mt-1 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check col-12 pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
									</form>

							</div>

						</div>
						<div class="col-12 mx-auto col-lg-8 text-center text-md-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<div class="p-4 dhx-banner-bg h-100" data-gjs-custom-name="Banner">
								<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							</div>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro8FORMLH1IMGModuleBlkLabel: "Intro 8-Form Left + Img",
        bm.add("module-Intro8FORMLH1IMG", {
          label: opt.Intro8FORMLH1IMGModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row align-items-center  flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-7 col-md-6 mx-auto col-lg-4 mt-lg-2 " data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="First Name" />
										  </div>
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="Last Name" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control"  placeholder="Phone Number"/>
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control"  placeholder="name@email.com" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
										  	<input type="text" data-ic-form-field="address1" id="address1-input" name="address1-input" data-gjs-custom-name="Form - Input Address1"  class="input form-control"  placeholder="Address line 01" />
											</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
												<input type="text" data-ic-form-field="address2" id="address2-input" name="address2-input" data-gjs-custom-name="Form - Input Address2"  class="input form-control"  placeholder="Address line 02" />
											</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
                  									<input type="text" data-ic-form-field="zip" id="zip-input" name="zip-input" data-gjs-custom-name="Form - Input ZipCode" class="input form-control" placeholder="Postal Code" />
											  </div>
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
												<select data-gjs-custom-name="Form - Select Country" class="custom-select" data-ic-form-field="country" id="country-select" name="country-select">
													<option selected>Country</option>
													<option data-gjs-custom-name="Select - Option" value="Mexico">Mexico</option>
													<option data-gjs-custom-name="Select - Option" value="USA">USA</option>
													<option data-gjs-custom-name="Select - Option" value="Spain">Spain</option>
												</select>
											  </div>
										  </div>

										<div class="form-row form-group text-center mt-4" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
										</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row mt-1 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check col-12 pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
									</form>


							</div>

						</div>

						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<img class="img-fluid w-100" alt="Image Alt" src="http://via.placeholder.com/500x265">
						</div>

					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        //  Intro8FORMLH1IMGBGIModuleBlkLabel: "Intro 8-Form Left + Img + Bckrd Img",
        bm.add("module-Intro8FORMLH1IMGBGI", {
          label: opt.Intro8FORMLH1IMGBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-4" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row align-items-center flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-7 col-md-6 mx-auto col-lg-4 mt-lg-2 " data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="First Name" />
										  </div>
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="Last Name" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control"  placeholder="Phone Number"/>
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control"  placeholder="name@email.com" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
												<input type="text" data-ic-form-field="company" id="company-input" name="company-input" data-gjs-custom-name="Form - Input Company" class="input form-control" placeholder="Company" />
											</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
								                  <input type="text" data-ic-form-field="city" id="city-input" name="city-input" data-gjs-custom-name="Form - Input City" class="input form-control"  placeholder="City" />
											  </div>
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
												<select data-gjs-custom-name="Form - Select Country" class="custom-select" data-ic-form-field="country" id="country-select" name="country-select">
													<option selected>Country</option>
													<option data-gjs-custom-name="Select - Option" value="Mexico">Mexico</option>
													<option data-gjs-custom-name="Select - Option" value="USA">USA</option>
													<option data-gjs-custom-name="Select - Option" value="Spain">Spain</option>
												</select>
											  </div>
										  </div>

										<div class="form-row form-group text-center mt-4" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
										</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row mt-1 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check col-12 pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
									</form>

							</div>

						</div>
						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<img class="img-fluid" alt="Image Alt" src="http://via.placeholder.com/600x340/333333">
						</div>

					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro8FORMLVIDModuleBlkLabel: "Intro 8-Form Left + Video",
        bm.add("module-Intro8FORMLVID", {
          label: opt.Intro8FORMLVIDModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row flex-column-reverse flex-lg-row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="First Name" />
										  </div>
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="Last Name" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control"  placeholder="Phone Number"/>
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control"  placeholder="name@email.com" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
												<input type="text" data-ic-form-field="company" id="company-input" name="company-input" data-gjs-custom-name="Form - Input Company" class="input form-control" placeholder="Company" />
											</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
								                  <input type="text" data-ic-form-field="city" id="city-input" name="city-input" data-gjs-custom-name="Form - Input City" class="input form-control"  placeholder="City" />
											  </div>
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
												<select data-gjs-custom-name="Form - Select Country" class="custom-select" data-ic-form-field="country" id="country-select" name="country-select">
													<option selected>Country</option>
													<option data-gjs-custom-name="Select - Option" value="Mexico">Mexico</option>
													<option data-gjs-custom-name="Select - Option" value="USA">USA</option>
													<option data-gjs-custom-name="Select - Option" value="Spain">Spain</option>
												</select>
											  </div>
										  </div>

										<div class="form-row form-group text-center mt-4" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
										</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row mt-1 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check col-12 pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
									</form>

							</div>

						</div>

						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-2" data-gjs-custom-name="Column">
							<div class="h-100" data-gjs-custom-name="Banner">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-21by9 dhx-w100 mx-md-auto">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
								</div>
							</div>
						</div>


					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro8FORMLVIDBGIModuleBlkLabel: "Intro 8-Form Left + Video + Bckrd Img",
        bm.add("module-Intro8FORMLVIDBGI", {
          label: opt.Intro8FORMLVIDBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - Background Img">
					<div class="container py-4" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row flex-column-reverse flex-lg-row align-items-start" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-6 col-lg-4 mx-auto " data-gjs-custom-name="Column">
							<div class=" bg-light mt-2" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
									<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
										<div class="col-6">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="firstname-input">First Name*</label>
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Eg. Paul" />
										</div>

										<div class="col-6">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="lastname-input">First Name*</label>
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Eg. Smith" />
										</div>

									</div>
									<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="phone-input">Phone Number*</label>
											<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="(00) 0000 0000"/>
										</div>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="email-input">Email*</label>
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" placeholder="name@email.com" />
										</div>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="company-input">Company</label>
											<input type="text" data-ic-form-field="company" id="company-input" name="company-input" data-gjs-custom-name="Form - Input Company" class="input form-control" placeholder="Your Company" />
										</div>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
								                  <label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="company-input">City</label>
								                  <input type="text" data-ic-form-field="city" id="city-input" name="city-input" data-gjs-custom-name="Form - Input City" class="input form-control"  placeholder="Eg. Los Angeles" />
											  </div>
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											  	<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="country-select">Country</label>
												<select data-gjs-custom-name="Form - Select Country" class="custom-select" data-ic-form-field="country" id="country-select" name="country-select">
													<option selected>---</option>
													<option data-gjs-custom-name="Select - Option" value="Mexico">Mexico</option>
													<option data-gjs-custom-name="Select - Option" value="USA">USA</option>
													<option data-gjs-custom-name="Select - Option" value="Spain">Spain</option>
												</select>
											  </div>
									</div>

									<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group text-center mt-1 mb-0" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
									</div>

								</form>

							</div>

						</div>

						<div class="col-12 col-lg-8 text-center text-lg-left mx-auto mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<div class="h-100" data-gjs-custom-name="Banner">
								<h1 class="mb-3">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 dhx-w100 ">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
								</div>
							</div>
						</div>

					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        //  Intro8FORMRBGIModuleBlkLabel: "Intro 8-Form Right + Bckrd Img",
        bm.add("module-Intro8FORMRBGI", {
          label: opt.Intro8FORMRBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-sm-center" data-gjs-custom-name="Section - Background Img">
					<div class="container pb-3 pt-sm-3 pt-0" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12  col-md-10 mx-auto col-lg-8 text-center text-lg-left" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
						</div>
						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class=" bg-light" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="First Name" />
										  </div>
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="Last Name" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control"  placeholder="Phone Number"/>
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control"  placeholder="name@email.com" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
												<input type="text" data-ic-form-field="company" id="company-input" name="company-input" data-gjs-custom-name="Form - Input Company" class="input form-control" placeholder="Company" />
											</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
								                  <input type="text" data-ic-form-field="city" id="city-input" name="city-input" data-gjs-custom-name="Form - Input City" class="input form-control"  placeholder="City" />
											  </div>
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
												<select data-gjs-custom-name="Form - Select Country" class="custom-select" data-ic-form-field="country" id="country-select" name="country-select">
													<option selected>Country</option>
													<option data-gjs-custom-name="Select - Option" value="Mexico">Mexico</option>
													<option data-gjs-custom-name="Select - Option" value="USA">USA</option>
													<option data-gjs-custom-name="Select - Option" value="Spain">Spain</option>
												</select>
											  </div>
										  </div>

										<div class="form-row form-group text-center mt-4" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
										</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row mt-1 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check col-12 pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
									</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        //  Intro8FORMRIMGModuleBlkLabel: "Intro 8-Form Right + Boxed Bckgrd Img",
        bm.add("module-Intro8FORMRIMG", {
          label: opt.Intro8FORMRIMGModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-8 text-center text-md-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<div class="p-4 dhx-banner-bg h-100" data-gjs-custom-name="Banner">
								<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							</div>
						</div>
						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="First Name" />
										  </div>
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="Last Name" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control"  placeholder="Phone Number"/>
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control"  placeholder="name@email.com" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
												<input type="text" data-ic-form-field="company" id="company-input" name="company-input" data-gjs-custom-name="Form - Input Company" class="input form-control" placeholder="Company" />
											</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
								                  <input type="text" data-ic-form-field="city" id="city-input" name="city-input" data-gjs-custom-name="Form - Input City" class="input form-control"  placeholder="City" />
											  </div>
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
												<select data-gjs-custom-name="Form - Select Country" class="custom-select" data-ic-form-field="country" id="country-select" name="country-select">
													<option selected>Country</option>
													<option data-gjs-custom-name="Select - Option" value="Mexico">Mexico</option>
													<option data-gjs-custom-name="Select - Option" value="USA">USA</option>
													<option data-gjs-custom-name="Select - Option" value="Spain">Spain</option>
												</select>
											  </div>
										  </div>

										<div class="form-row form-group text-center mt-4" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
										</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row mt-1 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check col-12 pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
									</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro8FORMRH1IMGModuleBlkLabel: "Intro 8-Form Right + Img",
        bm.add("module-Intro8FORMRH1IMG", {
          label: opt.Intro8FORMRH1IMGModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row align-items-center" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-5">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<img class="img-fluid w-100" alt="Image Alt" src="http://via.placeholder.com/500x270">
						</div>
						<div class="col-12 col-sm-7 col-md-6 mx-auto col-lg-4 mt-lg-2 " data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
									<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
										<div class="col-6">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="firstname-input">First Name*</label>
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Eg. Paul" />
										</div>

										<div class="col-6">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="lastname-input">First Name*</label>
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Eg. Smith" />
										</div>

									</div>
									<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="phone-input">Phone Number*</label>
											<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="(00) 0000 0000"/>
										</div>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="email-input">Email*</label>
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" placeholder="name@email.com" />
										</div>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="address1-input">Address</label>
											<input type="text" data-ic-form-field="address1" id="address1-input" name="address1-input" data-gjs-custom-name="Form - Input Address1"  class="input form-control"  placeholder="Address line 01" />
										</div>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
								                  <label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="company-input">City</label>
								                  <input type="text" data-ic-form-field="city" id="city-input" name="city-input" data-gjs-custom-name="Form - Input City" class="input form-control"  placeholder="Eg. Los Angeles" />
											  </div>
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											  	<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="country-select">Country</label>
												<select data-gjs-custom-name="Form - Select Country" class="custom-select" data-ic-form-field="country" id="country-select" name="country-select">
													<option selected>---</option>
													<option data-gjs-custom-name="Select - Option" value="Mexico">Mexico</option>
													<option data-gjs-custom-name="Select - Option" value="USA">USA</option>
													<option data-gjs-custom-name="Select - Option" value="Spain">Spain</option>
												</select>
											  </div>
									</div>

									<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group text-center mt-1 mb-0" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
									</div>

								</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro8FORMRH1IMGBGIModuleBlkLabel: "Intro 8-Form Right + Img + Bckrd Img",
        bm.add("module-Intro8FORMRH1IMGBGI", {
          label: opt.Intro8FORMRH1IMGBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-4" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row align-items-center" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
								<h1 class="mb-4 display-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<img class="img-fluid" alt="Image Alt" src="http://via.placeholder.com/650x350/333333">
						</div>
						<div class="col-12 col-sm-7 col-md-6 mx-auto col-lg-4 mt-lg-2 " data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="First Name" />
										  </div>
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="Last Name" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control"  placeholder="Phone Number"/>
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control"  placeholder="name@email.com" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
										  	<input type="text" data-ic-form-field="address1" id="address1-input" name="address1-input" data-gjs-custom-name="Form - Input Address1"  class="input form-control"  placeholder="Address line 01" />
											</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
												<input type="text" data-ic-form-field="address2" id="address2-input" name="address2-input" data-gjs-custom-name="Form - Input Address2"  class="input form-control"  placeholder="Address line 02" />
											</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
                  									<input type="text" data-ic-form-field="zip" id="zip-input" name="zip-input" data-gjs-custom-name="Form - Input ZipCode" class="input form-control" placeholder="Postal Code" />
											  </div>
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
												<select data-gjs-custom-name="Form - Select Country" class="custom-select" data-ic-form-field="country" id="country-select" name="country-select">
													<option selected>Country</option>
													<option data-gjs-custom-name="Select - Option" value="Mexico">Mexico</option>
													<option data-gjs-custom-name="Select - Option" value="USA">USA</option>
													<option data-gjs-custom-name="Select - Option" value="Spain">Spain</option>
												</select>
											  </div>
										  </div>

										<div class="form-row form-group text-center mt-4" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
										</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row mt-1 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check col-12 pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
									</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro8FORMRVIDModuleBlkLabel: "Intro 8-Form Right + Video",
        bm.add("module-Intro8FORMRVID", {
          label: opt.Intro8FORMRVIDModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0 pt-lg-2" data-gjs-custom-name="Column">
								<h1 class="mb-3 mb-lg-5 display-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-21by9 dhx-w100  mx-md-auto ml-lg-0">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
								</div>
						</div>

						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class="dhx-form-container dhx-bg-gray1" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input First Name" class="input form-control" placeholder="First Name" />
										  </div>
										  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Last Name" class="input form-control" placeholder="Last Name" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control"  placeholder="Phone Number"/>
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
										  <div class="col-12" data-gjs-custom-name="2 Columns">
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control"  placeholder="name@email.com" />
										  </div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
										  <div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
										  	<input type="text" data-ic-form-field="address1" id="address1-input" name="address1-input" data-gjs-custom-name="Form - Input Address1"  class="input form-control"  placeholder="Address line 01" />
											</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
												<input type="text" data-ic-form-field="address2" id="address2-input" name="address2-input" data-gjs-custom-name="Form - Input Address2"  class="input form-control"  placeholder="Address line 02" />
											</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
                  									<input type="text" data-ic-form-field="zip" id="zip-input" name="zip-input" data-gjs-custom-name="Form - Input ZipCode" class="input form-control" placeholder="Postal Code" />
											  </div>
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
												<select data-gjs-custom-name="Form - Select Country" class="custom-select" data-ic-form-field="country" id="country-select" name="country-select">
													<option selected>Country</option>
													<option data-gjs-custom-name="Select - Option" value="Mexico">Mexico</option>
													<option data-gjs-custom-name="Select - Option" value="USA">USA</option>
													<option data-gjs-custom-name="Select - Option" value="Spain">Spain</option>
												</select>
											  </div>
										  </div>

										<div class="form-row form-group text-center mt-4" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
										</div>
										</div>
										<div data-gjs-draggable="form, form *"  class="form-group form-row mt-1 mb-0 text-center" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check col-12 pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
										</div>
									</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro8FORMRVIDBGIModuleBlkLabel: "Intro 8-Form Right + Video + Bckrd Img",
        bm.add("module-Intro8FORMRVIDBGI", {
          label: opt.Intro8FORMRVIDBGIModuleBlkLabel,
           category: opt.categoryIntroFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold-nofooter dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - Background Img">
					<div class="container py-4" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row align-items-center" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-8 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<div class="h-100" data-gjs-custom-name="Banner">
								<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
								<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 dhx-w100 dhx-md-w90 mx-md-auto ml-lg-0">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
								</div>
							</div>
						</div>
						<div class="col-12 col-sm-6 mx-auto col-lg-4" data-gjs-custom-name="Column">
							<div class=" bg-light" data-gjs-custom-name="Form Container">
								<div class="dhx-form-title text-center bg-dark text-light p-3" data-gjs-custom-name="Form Title">
									<h3 class="m-0">Consect Adipis</h3>
								</div>
								<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form form-box m-auto p-3 p-lg-4">
									<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
										<div class="col-6">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="firstname-input">First Name*</label>
											<input type="text" data-ic-form-field="firstname" id="firstname-input" name="firstname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Eg. Paul" />
										</div>

										<div class="col-6">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="lastname-input">First Name*</label>
											<input type="text" data-ic-form-field="lastname" id="lastname-input" name="lastname-input" data-gjs-custom-name="Form - Input Name" class="input form-control" placeholder="Eg. Smith" />
										</div>

									</div>
									<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="phone-input">Phone Number*</label>
											<small data-gjs-custom-name="Form - Aclaration" id="phoneHelp" class="text-muted dhx-aclarations">If mobile phone without 044/045.</small>
											<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control" aria-describedby="phoneHelp" placeholder="(00) 0000 0000"/>
										</div>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="email-input">Email*</label>
											<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control" placeholder="name@email.com" />
										</div>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group form-row mb-2" data-gjs-custom-name="Form Group">
										<div data-gjs-draggable="form, form *" class="col-12" data-gjs-custom-name="1 Column">
											<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="company-input">Company</label>
											<input type="text" data-ic-form-field="company" id="company-input" name="company-input" data-gjs-custom-name="Form - Input Company" class="input form-control" placeholder="Your Company" />
										</div>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group form-row" data-gjs-custom-name="Form Group">
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
								                  <label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="company-input">City</label>
								                  <input type="text" data-ic-form-field="city" id="city-input" name="city-input" data-gjs-custom-name="Form - Input City" class="input form-control"  placeholder="Eg. Los Angeles" />
											  </div>
											  <div data-gjs-draggable="form, form *" class="col-6" data-gjs-custom-name="2 Columns">
											  	<label data-gjs-draggable="form, form *"  data-gjs-custom-name="Form - Label" class="label-tag mb-0 small dhx-label" for="country-select">Country</label>
												<select data-gjs-custom-name="Form - Select Country" class="custom-select" data-ic-form-field="country" id="country-select" name="country-select">
													<option selected>---</option>
													<option data-gjs-custom-name="Select - Option" value="Mexico">Mexico</option>
													<option data-gjs-custom-name="Select - Option" value="USA">USA</option>
													<option data-gjs-custom-name="Select - Option" value="Spain">Spain</option>
												</select>
											  </div>
									</div>

									<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0"  data-gjs-custom-name="Form Group">
										<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success mx-auto">Submit</button>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group text-center mt-1 mb-0" data-gjs-custom-name="Form Group">
											<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-md-2" data-gjs-draggable="form, form *" >
												<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box" >
												<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
											</div>
									</div>

								</form>

							</div>

						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1SFORMCModuleBlkLabel: "Intro 1-Suscribe Form Center",
        bm.add("module-Intro1SFORMC", {
          label: opt.Intro1SFORMCModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 col-md-10 col-lg-7 text-center mb-4 mb-md-5 mb-lg-0 mx-auto" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, <br class="d-none d-md-block">mollis vulputate arcu. </p>
							 <form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block mt-4 mt-sm-1 justify-content-center mx-auto">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0" data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" checked >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1SFORMCBGIModuleBlkLabel: "Intro 1-Suscribe Form Center + Bckrd Img",
        bm.add("module-Intro1SFORMCBGI", {
          label: opt.Intro1SFORMCBGIModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-4" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 col-md-10 col-lg-7 text-center mb-4 mb-md-5 mb-lg-0 mx-auto" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, <br class="d-none d-md-block">mollis vulputate arcu. </p>

							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block mt-2 justify-content-center border p-3 rounded mx-auto dhx-bg-gray1">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0" data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

       // Intro1SFORMCH1IMGModuleBlkLabel: "Intro 1-Suscribe Form Center + Img",
        bm.add("module-Intro1SFORMCH1IMG", {
          label: opt.Intro1SFORMCH1IMGModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-fold dhx-intro-sect d-flex align-items-center py-4" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 col-md-10 col-lg-7 text-center mb-4 mb-md-5 mb-lg-0 mx-auto" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p>Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<img class="img-fluid w-100" alt="Image Alt" src="http://via.placeholder.com/600x300">
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block mt-2 justify-content-center p-3 mx-auto">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0" data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" checked >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

       // Intro1SFORMCH1IMGBGIModuleBlkLabel: "Intro 1-Suscribe Form Center + Img + Bckrd Img",
        bm.add("module-Intro1SFORMCH1IMGBGI", {
          label: opt.Intro1SFORMCH1IMGBGIModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-4" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 col-md-10 col-lg-7 text-center mb-4 mb-md-5 mb-lg-0 mx-auto" data-gjs-custom-name="Column">
							<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<img class="img-fluid w-100" alt="Image Alt" src="http://via.placeholder.com/600x300/333333">
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block mt-4 justify-content-center border p-3 rounded mx-auto dhx-bg-gray1">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0" data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

       // Intro1SFORMCVIDModuleBlkLabel: "Intro 1-Suscribe Form Center + Video",
        bm.add("module-Intro1SFORMCVID", {
          label: opt.Intro1SFORMCVIDModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 col-md-10 col-lg-7 text-center mb-4 mb-md-5 mb-lg-0 mx-auto" data-gjs-custom-name="Column">
							<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<div class="embed-responsive embed-responsive-21by9 dhx-w100 mx-md-auto">
								  <iframe class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
								</div>
														<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block mt-2 justify-content-center p-3 mx-auto">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check" data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" checked >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

       // Intro1SFORMCVIDBGIModuleBlkLabel: "Intro 1-Suscribe Form Center + Video + Bckrd Img",
        bm.add("module-Intro1SFORMCVIDBGI", {
          label: opt.Intro1SFORMCVIDBGIModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold dhx-intro-sect d-flex align-items-center py-4" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 col-md-10 col-lg-7 text-center mb-4 mb-md-5 mb-lg-0 mx-auto" data-gjs-custom-name="Column">
							<h1 class="mb-4">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<div class="embed-responsive embed-responsive-21by9 dhx-w100 mx-md-auto">
								  <iframe class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
								</div>
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block mt-4 justify-content-center border p-3 rounded mx-auto dhx-bg-gray1">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0" data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1SFORMLBGIModuleBlkLabel: "Intro 1-Suscribe Form Left + Bckrd Img",
        bm.add("module-Intro1SFORMLBGI", {
          label: opt.Intro1SFORMLBGIModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 col-md-8 col-lg-7 text-center text-md-left mb-4 mb-md-5" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, <br class="d-none d-md-block">mollis vulputate arcu. </p>

							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block mt-2 justify-content-center mx-auto p-4 dhx-bg-white-60">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0" data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1SFORMLoduleBlkLabel: "Intro 1-Suscribe Form Left",
        bm.add("module-Intro1SFORML", {
          label: opt.Intro1SFORMLModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 col-md-8 col-lg-7 text-center text-md-left mb-4 mb-md-5" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, <br class="d-none d-md-block">mollis vulputate arcu. </p>

							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block mt-2 justify-content-center mx-auto p-4 dhx-bg-gray1">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0" data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1SFORMLH1IMGModuleBlkLabel: "Intro 1-Suscribe Form Left + Img",
        bm.add("module-Intro1SFORMLH1IMG", {
          label: opt.Intro1SFORMLH1IMGModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col">
					  <div class="row flex-lg-row flex-column-reverse align-items-center mb-md-4" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-md-8 col-lg-7 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, <br class="d-none d-md-block">mollis vulputate arcu. </p>
							<img class="img-fluid dhx-w100 d-block d-lg-none my-4" alt="Image Alt" src="http://via.placeholder.com/700x250">
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block mt-2 justify-content-center mx-auto">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0" data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="col-12 col-lg-4 col-xl-5 mx-auto mb-4 mb-lg-0 d-none d-lg-block" data-gjs-custom-name="Column">
				  			<img class="img-fluid dhx-w100" alt="Image Alt" src="http://via.placeholder.com/600x550">
					  	</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1SFORMLH1IMGBGIModuleBlkLabel: "Intro 1-Suscribe Form Left + Img + Bckrd Img",
        bm.add("module-Intro1SFORMLH1IMGBGI", {
          label: opt.Intro1SFORMLH1IMGBGIModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold dhx-intro-sect d-flex align-items-center py-4" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col">
					  <div class="row flex-lg-row flex-column-reverse align-items-center" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-md-8 col-lg-7 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p>Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<img class="img-fluid dhx-w100 d-block d-lg-none my-4" alt="Image Alt" src="http://via.placeholder.com/700x250/333333">
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block mt-2 justify-content-center mx-auto p-4 dhx-bg-white-60">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0" data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="col-12 col-lg-4 col-xl-5 mx-auto mb-4 mb-lg-0 d-none d-lg-block" data-gjs-custom-name="Column">
				  			<img class="img-fluid dhx-w100" alt="Image Alt" src="http://via.placeholder.com/600x550/333333">
					  	</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1SFORMLVIDModuleBlkLabel: "Intro 1-Suscribe Form Left + Video",
        bm.add("module-Intro1SFORMLVID", {
          label: opt.Intro1SFORMLVIDModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col">
					  <div class="row flex-lg-row flex-column-reverse align-items-center" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-md-8 col-lg-7 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, <br class="d-none d-md-block">mollis vulputate arcu. </p>
							<div class="embed-responsive embed-responsive-21by9 dhx-w100 mx-md-auto d-block d-lg-none my-4" data-gjs-custom-name="Video Box">
								  <iframe class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true" data-gjs-custom-name="Video"></iframe>
							</div>
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block mt-2 justify-content-center mx-auto">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0" data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="col-12 col-lg-5 mx-auto mb-4 mb-lg-0 d-none d-lg-block" data-gjs-custom-name="Column">
				  			<div class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto" data-gjs-custom-name="Video Box">
								  <iframe class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true" data-gjs-custom-name="Video"></iframe>
							</div>
					  	</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1SFORMLVIDBGIModuleBlkLabel: "Intro 1-Suscribe Form Left + Video + Bckrd Img",
        bm.add("module-Intro1SFORMLVIDBGI", {
          label: opt.Intro1SFORMLVIDBGIModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold dhx-intro-sect d-flex align-items-center py-4" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col">
					  <div class="row flex-lg-row flex-column-reverse align-items-center" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-md-8 col-lg-7 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p>Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<div class="embed-responsive embed-responsive-21by9 dhx-w100 mx-md-auto d-block d-lg-none my-4" data-gjs-custom-name="Video Box">
								  <iframe class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true" data-gjs-custom-name="Video"></iframe>
							</div>
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block mt-2 justify-content-center mx-auto p-4 dhx-bg-white-60">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0" data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="col-12 col-lg-5 mx-auto mb-4 mb-lg-0 d-none d-lg-block" data-gjs-custom-name="Column">
				  			<div class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto" data-gjs-custom-name="Video Box">
								  <iframe class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true" data-gjs-custom-name="Video"></iframe>
							</div>
					  	</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1SFORMRBGIModuleBlkLabel: "Intro 1-Suscribe Form Right + Bckrd Img",
        bm.add("module-Intro1SFORMRBGI", {
          label: opt.Intro1SFORMRBGIModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold dhx-intro-sect d-flex align-items-center py-4" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row justify-content-end" data-gjs-custom-name="Row">
						<div class="col-12 col-md-8 col-lg-7 text-center text-md-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p>Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block mt-2 justify-content-center mx-auto p-4 dhx-bg-white-60">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0" data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1SFORMRModuleBlkLabel: "Intro 1-Suscribe Form Right",
        bm.add("module-Intro1SFORMR", {
          label: opt.Intro1SFORMRModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-fold dhx-intro-sect d-flex align-items-center py-4" data-gjs-custom-name="Section - First Fold">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row justify-content-end" data-gjs-custom-name="Row">
						<div class="col-12 col-md-8 col-lg-7 text-center text-md-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, <br class="d-none d-md-block">mollis vulputate arcu. </p>

							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block mt-0 justify-content-center p-3 mx-auto dhx-bg-gray1">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0" data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1SFORMRH1IMGModuleBlkLabel: "Intro 1-Suscribe Form Right + Img",
        bm.add("module-Intro1SFORMRH1IMG", {
          label: opt.Intro1SFORMRH1IMGModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-fold dhx-intro-sect d-flex align-items-center py-4" data-gjs-custom-name="Section - First Fold">
					<div class="container py-3" data-gjs-custom-name="Boxed Container - 2 Col">
					  <div class="row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 col-lg-4 col-xl-5 mx-auto mb-4 mb-lg-0 d-none d-lg-block" data-gjs-custom-name="Column">
				  			<img class="img-fluid dhx-w100" alt="Image Alt" src="http://via.placeholder.com/600x550">
					  	</div>

						<div class="col-12 mx-auto col-md-8 col-lg-7 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p>Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<img class="img-fluid dhx-w100 d-block d-lg-none my-4" alt="Image Alt" src="http://via.placeholder.com/700x250">
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block mt-2 justify-content-center mx-auto">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0" data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        // Intro1SFORMRH1IMGBGIModuleBlkLabel: "Intro 1-Suscribe Form Right + Img + Bckrd Img",
        bm.add("module-Intro1SFORMRH1IMGBGI", {
          label: opt.Intro1SFORMRH1IMGBGIModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold dhx-intro-sect d-flex align-items-center py-4" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col">
					  <div class="row align-items-center" data-gjs-custom-name="Row">
						<div class="col-12 col-lg-4 col-xl-5 mx-auto mb-4 mb-lg-0 d-none d-lg-block" data-gjs-custom-name="Column">
				  			<img class="img-fluid dhx-w100" alt="Image Alt" src="http://via.placeholder.com/600x550/333333">
					  	</div>

						<div class="col-12 mx-auto col-md-8 col-lg-7 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p>Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<img class="img-fluid dhx-w100 d-block d-lg-none my-4" alt="Image Alt" src="http://via.placeholder.com/700x250/333333">
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block mt-2 justify-content-center mx-auto p-4 dhx-bg-white-60">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0" data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1SFORMRVIDModuleBlkLabel: "Intro 1-Suscribe Form Right + Video",
        bm.add("module-Intro1SFORMRVID", {
          label: opt.Intro1SFORMRVIDModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-fold dhx-intro-sect d-flex align-items-center py-4" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col">
					  <div class="row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 col-lg-5 mx-auto mb-4 mb-lg-0 d-none d-lg-block" data-gjs-custom-name="Column">
				  			<div class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto" data-gjs-custom-name="Video Box">
								  <iframe class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true" data-gjs-custom-name="Video"></iframe>
							</div>
					  	</div>
						<div class="col-12 mx-auto col-md-8 col-lg-7 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p>Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<div class="embed-responsive embed-responsive-21by9 dhx-w100 mx-md-auto d-block d-lg-none my-4" data-gjs-custom-name="Video Box">
								  <iframe class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"  data-gjs-custom-name="Video"></iframe>
							</div>
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block mt-2 justify-content-center mx-auto">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0" data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro1SFORMRVIDBGIModuleBlkLabel: "Intro 1-Suscribe Form Right + Video + Bckrd Img",
        bm.add("module-Intro1SFORMRVIDBGI", {
          label: opt.Intro1SFORMRVIDBGIModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold dhx-intro-sect d-flex align-items-center py-4" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col">
					  <div class="row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 col-lg-5 mx-auto mb-4 mb-lg-0 d-none d-lg-block" data-gjs-custom-name="Column">
				  			<div class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto" data-gjs-custom-name="Video Box">
								  <iframe class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true" data-gjs-custom-name="Video"></iframe>
							</div>
					  	</div>
						<div class="col-12 mx-auto col-md-8 col-lg-7 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p>Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<div class="embed-responsive embed-responsive-21by9 dhx-w100 mx-md-auto d-block d-lg-none my-4" data-gjs-custom-name="Video Box">
								  <iframe class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true" data-gjs-custom-name="Video"></iframe>
							</div>
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block mt-2 justify-content-center mx-auto">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" aria-describedby="phoneHelp" placeholder="Phone Number*"/>
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0" data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // 2 Suscribe Form
        // Intro2SFORMCModuleBlkLabel: "Intro 2-Suscribe Form Center",
        bm.add("module-Intro2SFORMC", {
          label: opt.Intro2SFORMCModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 col-md-10 col-lg-7 text-center mb-4 mb-md-5 mb-lg-0 mx-auto" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, <br class="d-none d-md-block">mollis vulputate arcu. </p>

							 <form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block mt-4 mt-sm-1 justify-content-center mx-auto">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" placeholder="Phone Number*"/>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group ml-sm-3" data-gjs-custom-name="Form Group">
										<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control dhx-input-mw"  placeholder="Email*" />
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0" data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" checked >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>


						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro2SFORMCBGIModuleBlkLabel: "Intro 2-Suscribe Form Center + Bckrd Img",
        bm.add("module-Intro2SFORMCBGI", {
          label: opt.Intro2SFORMCBGIModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold dhx-intro-sect d-flex align-items-sm-center align-items-start" data-gjs-custom-name="Section - First Fold">
					<div class="container py-4" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 col-md-10 col-lg-8 text-center mb-4 mb-md-5 mb-lg-0 mx-auto" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, <br class="d-none d-md-block">mollis vulputate arcu. </p>
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block justify-content-center mx-auto p-4 dhx-bg-gray1 rounded border">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" placeholder="Phone Number*"/>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group ml-sm-3" data-gjs-custom-name="Form Group">
										<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control dhx-input-mw"  placeholder="Email*" />
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0 mr-sm-4" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0 " data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" checked >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

       // Intro2SFORMCH1IMGModuleBlkLabel: "Intro 2-Suscribe Form Center + Img",
        bm.add("module-Intro2SFORMCH1IMG", {
          label: opt.Intro2SFORMCH1IMGModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 col-md-10 col-lg-7 text-center mb-4 mb-md-5 mb-lg-0 mx-auto" data-gjs-custom-name="Column">
							<h1 class="mb-3">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<img class="img-fluid dhx-w100 " alt="Image Alt" src="http://via.placeholder.com/600x300">
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form  mx-auto mt-4">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block justify-content-center" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" placeholder="Phone Number*"/>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group ml-sm-3" data-gjs-custom-name="Form Group">
										<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control dhx-input-mw"  placeholder="Email*" />
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0 mr-sm-4" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0 " data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" checked >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

       // Intro2SFORMCH1IMGBGIModuleBlkLabel: "Intro 2-Suscribe Form Center + Img + Bckrd Img",
        bm.add("module-Intro2SFORMCH1IMGBGI", {
          label: opt.Intro2SFORMCH1IMGBGIModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold dhx-intro-sect d-flex align-items-sm-center align-items-start" data-gjs-custom-name="Section - First Fold">
					<div class="container py-0 py-sm-4" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 col-md-10 col-lg-8 text-center mb-4 mb-md-5 mb-lg-0 mx-auto" data-gjs-custom-name="Column">
							<h1 class="mb-3">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<img class="img-fluid  dhx-w100 " alt="Image Alt" src="http://via.placeholder.com/600x300/333333">
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form  mx-auto p-4 mt-4 dhx-bg-gray1 border">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block justify-content-center" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" placeholder="Phone Number*"/>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group ml-sm-3" data-gjs-custom-name="Form Group">
										<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control dhx-input-mw"  placeholder="Email*" />
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0 mr-sm-4" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0 " data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" checked >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

       // Intro2SFORMCVIDModuleBlkLabel: "Intro 2-Suscribe Form Center + Video",
        bm.add("module-Intro2SFORMCVID", {
          label: opt.Intro2SFORMCVIDModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 col-md-10 col-lg-7 text-center mb-4 mb-md-5 mb-lg-0 mx-auto" data-gjs-custom-name="Column">
							<h1 class="mb-3">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
								</div>
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block mt-4 justify-content-center mx-auto">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" placeholder="Phone Number*"/>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group ml-sm-3" data-gjs-custom-name="Form Group">
										<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control dhx-input-mw"  placeholder="Email*" />
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center pr-md-5 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0 " data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" checked >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

       // Intro2SFORMCVIDBGIModuleBlkLabel: "Intro 2-Suscribe Form Center + Video + Bckrd Img",
        bm.add("module-Intro2SFORMCVIDBGI", {
          label: opt.Intro2SFORMCVIDBGIModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold dhx-intro-sect d-flex align-items-sm-center align-items-start" data-gjs-custom-name="Section - First Fold">
					<div class="container py-sm-4" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 col-md-10 col-lg-8 text-center mb-4 mb-md-5 mb-lg-0 mx-auto" data-gjs-custom-name="Column">
							<h1 class="mb-3">Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
								</div>
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form  mx-auto p-4 mt-4 dhx-bg-gray1 border">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block justify-content-center" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" placeholder="Phone Number*"/>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group ml-sm-3" data-gjs-custom-name="Form Group">
										<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control dhx-input-mw"  placeholder="Email*" />
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0 mr-sm-4" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0 " data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" checked >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro2SFORMLBGIModuleBlkLabel: "Intro 2-Suscribe Form Left + Bckrd Img",
        bm.add("module-Intro2SFORMLBGI", {
          label: opt.Intro2SFORMLBGIModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-4" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 text-center text-md-left mb-4 mb-md-5" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block justify-content-center mx-auto p-4 dhx-bg-white-60">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" placeholder="Phone Number*"/>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group ml-sm-3" data-gjs-custom-name="Form Group">
										<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control dhx-input-mw"  placeholder="Email*" />
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0 mr-sm-4" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0 " data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" checked >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro2SFORMLModuleBlkLabel: "Intro 2-Suscribe Form Left",
        bm.add("module-Intro2SFORML", {
          label: opt.Intro2SFORMLModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 text-center text-md-left mb-4 mb-md-5" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block justify-content-center mx-auto p-4 dhx-bg-gray1">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" placeholder="Phone Number*"/>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group ml-sm-3" data-gjs-custom-name="Form Group">
										<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control dhx-input-mw"  placeholder="Email*" />
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0 mr-sm-4" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0 " data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" checked >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro2SFORMLH1IMGModuleBlkLabel: "Intro 2-Suscribe Form Left + Img",
        bm.add("module-Intro2SFORMLH1IMG", {
          label: opt.Intro2SFORMLH1IMGModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row flex-lg-row flex-column-reverse align-items-center" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-8 col-xl-7 text-center text-lg-left" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p >Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<img class="img-fluid dhx-w100 d-block d-lg-none my-4" alt="Image Alt" src="http://via.placeholder.com/700x250">
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block justify-content-center mx-auto p-4 dhx-bg-gray1">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" placeholder="Phone Number*"/>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group ml-sm-3" data-gjs-custom-name="Form Group">
										<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control dhx-input-mw"  placeholder="Email*" />
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0 mr-sm-4" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0 " data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" checked >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="col-12 col-lg-4 col-xl-5 mx-auto mb-4 mb-lg-0 d-none d-lg-block" data-gjs-custom-name="Column">
				  			<img class="img-fluid dhx-w100" alt="Image Alt" src="http://via.placeholder.com/600x550">
					  	</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro2SFORMLH1IMGBGIModuleBlkLabel: "Intro 2-Suscribe Form Left + Img + Bckrd Img",
        bm.add("module-Intro2SFORMLH1IMGBGI", {
          label: opt.Intro2SFORMLH1IMGBGIModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-sm-4" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
					  <div class="row flex-lg-row flex-column-reverse align-items-sm-center align-items-start" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-8 col-xl-7 text-center text-lg-left" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p >Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<img class="img-fluid dhx-w100 d-block d-lg-none my-4" alt="Image Alt" src="http://via.placeholder.com/700x250/333333">
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block justify-content-center mx-auto p-4 dhx-bg-white-60">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" placeholder="Phone Number*"/>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group ml-sm-3" data-gjs-custom-name="Form Group">
										<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control dhx-input-mw"  placeholder="Email*" />
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0 mr-sm-4" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0 " data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" checked >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="col-12 col-lg-4 col-xl-5 mx-auto mb-4 mb-lg-0 d-none d-lg-block" data-gjs-custom-name="Column">
				  			<img class="img-fluid dhx-w100" alt="Image Alt" src="http://via.placeholder.com/600x550/333333">
					  	</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro2SFORMLVIDModuleBlkLabel: "Intro 2-Suscribe Form Left + Video",
        bm.add("module-Intro2SFORMLVID", {
          label: opt.Intro2SFORMLVIDModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
				  		<div class="row flex-lg-row flex-column-reverse align-items-sm-center align-items-start" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-7 text-center text-lg-left" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p >Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-21by9 dhx-w100 mx-md-auto d-block d-lg-none my-4">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block justify-content-center mx-auto ">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" placeholder="Phone Number*"/>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group ml-sm-3" data-gjs-custom-name="Form Group">
										<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control dhx-input-mw"  placeholder="Email*" />
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0 mr-sm-4" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0 " data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" checked >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="col-12 col-lg-5 mx-auto mb-4 mb-lg-0 d-none d-lg-block" data-gjs-custom-name="Column">
				  			<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
					  	</div>
					  </div>

					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro2SFORMLVIDBGIModuleBlkLabel: "Intro 2-Suscribe Form Left + Video + Bckrd Img",
        bm.add("module-Intro2SFORMLVIDBGI", {
          label: opt.Intro2SFORMLVIDBGIModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-sm-4" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
				  		<div class="row flex-lg-row flex-column-reverse align-items-sm-center align-items-start" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-7 text-center text-lg-left" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p >Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-21by9 dhx-w100 mx-md-auto d-block d-lg-none my-4">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block justify-content-center mx-auto p-3 dhx-bg-white-60">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" placeholder="Phone Number*"/>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group ml-sm-2" data-gjs-custom-name="Form Group">
										<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control dhx-input-mw"  placeholder="Email*" />
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-2 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0 mr-sm-4" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0 " data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" checked >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="col-12 col-lg-5 mx-auto mb-4 mb-lg-0 d-none d-lg-block" data-gjs-custom-name="Column">
				  			<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
					  	</div>
					  </div>

					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro2SFORMRBGIModuleBlkLabel: "Intro 2-Suscribe Form Right + Bckrd Img",
        bm.add("module-Intro2SFORMRBGI", {
          label: opt.Intro2SFORMRBGIModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-4" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 col-md-10 col-lg-8 col-xl-7 ml-auto mr-0 text-center text-md-left mb-4 mb-md-5" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block justify-content-center mx-auto p-4 dhx-bg-white-60">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" placeholder="Phone Number*"/>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group ml-sm-3" data-gjs-custom-name="Form Group">
										<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control dhx-input-mw"  placeholder="Email*" />
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0 mr-sm-4" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0 " data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" checked >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro2SFORMRModuleBlkLabel: "Intro 2-Suscribe Form Right",
        bm.add("module-Intro2SFORMR", {
          label: opt.Intro2SFORMRModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 col-md-10 col-lg-8 col-xl-7 ml-auto mr-0 text-center text-md-left mb-4 mb-md-5" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p class="lead">Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block justify-content-center mx-auto p-4 dhx-bg-gray1">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" placeholder="Phone Number*"/>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group ml-sm-3" data-gjs-custom-name="Form Group">
										<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control dhx-input-mw"  placeholder="Email*" />
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0 mr-sm-4" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0 " data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" checked >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro2SFORMRH1IMGModuleBlkLabel: "Intro 2-Suscribe Form Right + Img",
        bm.add("module-Intro2SFORMRH1IMG", {
          label: opt.Intro2SFORMRH1IMGModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row flex-lg-row-reverse flex-column-reverse align-items-center" data-gjs-custom-name="Row">
						<div class="col-12 mx-auto col-lg-8 col-xl-7 text-center text-lg-left" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p >Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<img class="img-fluid dhx-w100 d-block d-lg-none my-4" alt="Image Alt" src="http://via.placeholder.com/700x250">
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block justify-content-center mx-auto p-4 dhx-bg-gray1">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" placeholder="Phone Number*"/>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group ml-sm-3" data-gjs-custom-name="Form Group">
										<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control dhx-input-mw"  placeholder="Email*" />
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0 mr-sm-4" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0 " data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" checked >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="col-12 col-lg-4 col-xl-5 mx-auto mb-4 mb-lg-0 d-none d-lg-block" data-gjs-custom-name="Column">
				  			<img class="img-fluid dhx-w100" alt="Image Alt" src="http://via.placeholder.com/600x550">
					  	</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        // Intro2SFORMRH1IMGBGIModuleBlkLabel: "Intro 2-Suscribe Form Right + Img + Bckrd Img",
        bm.add("module-Intro2SFORMRH1IMGBGI", {
          label: opt.Intro2SFORMRH1IMGBGIModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-sm-4" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
					  <div class="row flex-lg-row flex-column-reverse align-items-sm-center align-items-start" data-gjs-custom-name="Row">
					  	<div class="col-12 col-lg-4 col-xl-5 mx-auto mb-4 mb-lg-0 d-none d-lg-block" data-gjs-custom-name="Column">
				  			<img class="img-fluid dhx-w100" alt="Image Alt" src="http://via.placeholder.com/600x550/333333">
					  	</div>
						<div class="col-12 mx-auto col-lg-8 col-xl-7 text-center text-lg-left" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p >Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<img class="img-fluid dhx-w100 d-block d-lg-none my-4" alt="Image Alt" src="http://via.placeholder.com/700x250/333333">
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block justify-content-center mx-auto p-4 dhx-bg-white-60">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" placeholder="Phone Number*"/>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group ml-sm-3" data-gjs-custom-name="Form Group">
										<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control dhx-input-mw"  placeholder="Email*" />
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0 mr-sm-4" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0 " data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" checked >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>

					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro2SFORMRVIDModuleBlkLabel: "Intro 2-Suscribe Form Right + Video",
        bm.add("module-Intro2SFORMRVID", {
          label: opt.Intro2SFORMRVIDModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
				  		<div class="row flex-lg-row flex-column-reverse align-items-center" data-gjs-custom-name="Row">
						<div class="col-12 col-lg-5 mx-auto mb-4 mb-lg-0 d-none d-lg-block" data-gjs-custom-name="Column">
				  			<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
					  	</div>

						<div class="col-12 mx-auto col-lg-7 text-center text-lg-left" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p >Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-21by9 dhx-w100 mx-md-auto d-block d-lg-none my-4">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block justify-content-center mx-auto ">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" placeholder="Phone Number*"/>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group ml-sm-3" data-gjs-custom-name="Form Group">
										<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control dhx-input-mw"  placeholder="Email*" />
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-3 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0 mr-sm-4" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0 " data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" checked >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>

					  </div>

					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        // Intro2SFORMRVIDBGIModuleBlkLabel: "Intro 2-Suscribe Form Right + Video + Bckrd Img",
        bm.add("module-Intro2SFORMRVIDBGI", {
          label: opt.Intro2SFORMRVIDBGIModuleBlkLabel,
           category: opt.categoryIntroSusFormModulesContent,
          content: `<section class="dhx-full-bg dhx-full-fold dhx-intro-sect d-flex align-items-center" data-gjs-custom-name="Section - First Fold">
					<div class="container py-sm-4" data-gjs-custom-name="Boxed Container - 2 Col 3/7">
				  		<div class="row flex-lg-row flex-column-reverse align-items-sm-center align-items-start" data-gjs-custom-name="Row">
						<div class="col-12 col-lg-5 mx-auto d-none d-lg-block" data-gjs-custom-name="Column">
				  			<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
					  	</div>
						<div class="col-12 mx-auto col-lg-7 text-center text-lg-left" data-gjs-custom-name="Column">
							<h1>Lorem ipsum dolor sit amet, <br class="d-none d-md-block">consectetur adipiscing elit. </h1>
							<p >Aenean purus eros, aliquam nec arcu rutrum, mollis vulputate arcu. </p>
							<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-21by9 dhx-w100 mx-md-auto d-block d-lg-none my-4">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
							<form data-gjs-custom-name="Form" action="" method="post" onsubmit="return false" class="dhx-form d-sm-inline-block justify-content-center mx-auto p-3 dhx-bg-white-60">
								<div data-gjs-draggable="form, form *"  class="form-inline dhx-form-xs-block" data-gjs-custom-name="Form Box">
									<div data-gjs-draggable="form, form *"  class="form-group" data-gjs-custom-name="Form Group">
										<input type="tel" data-ic-form-field="phone" id="phone-input" name="phone-input" data-gjs-custom-name="Form - Input Phone" class="input form-control dhx-input-mw" placeholder="Phone Number*"/>
									</div>
									<div data-gjs-draggable="form, form *"  class="form-group ml-sm-2" data-gjs-custom-name="Form Group">
										<input type="email" data-ic-form-field="email" id="email-input" name="email-input" data-gjs-custom-name="Form - Input Email" class="input form-control dhx-input-mw"  placeholder="Email*" />
									</div>
									<button data-gjs-custom-name="Form - Button Send" type="submit" class="btn btn-success ml-sm-2 mr-0">Call me</button>
								</div>
								<div data-gjs-draggable="form, form *"  class="form-group text-center text-md-left ml-md-3 mb-0 mt-sm-2"  data-gjs-custom-name="Form Group">
									<div data-gjs-draggable="form, form *"  class="form-group mt-1 mb-0 mr-sm-4" data-gjs-custom-name="Form Group">
										<div data-gjs-custom-name="Form - Checkbox" class="form-check pl-0 " data-gjs-draggable="form, form *" >
											<input data-ic-form-field="terms" id="terms-check-06" name="terms-check-06" data-gjs-custom-name="Checkbox - Box" type="checkbox" class="form-check-input dhx-terms-box pl-0" checked >
											<label data-gjs-draggable="form, form *"  class="form-check-label dhx-terms" for="terms-check-06" data-gjs-custom-name="Checkbox - Label">I have read and accept the <a href="" data-gjs-custom-name="Checkbox Terms - Link">Terms and Conditions.</a></label>
										</div>
									</div>
								</div>
							</form>
						</div>
					  </div>
					</div>
                </section>
			 `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
          });

        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // Módulos Components //
        //////////////////////

      //
      //////////// 3 Benefit Icons ///////////
        bm.add("module-3BftIco", {
          label: opt.Bft3IcoModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
                <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
                    <div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
                      <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
                        <div class="col-4 col-md-3 col-lg-2 text-center" data-gjs-custom-name="Benefit Column">
                            <div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
                              <i class="fas fa-cogs text-dark"></i>
                            </div>
                        </div>
                        <div class="col-4 col-md-3 col-lg-2 text-center" data-gjs-custom-name="Benefit Column">
                            <div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
                              <i class="fas fa-users text-dark"></i>
                            </div>
                        </div>
                        <div class="col-4 col-md-3 col-lg-2 text-center" data-gjs-custom-name="Benefit Column">
                            <div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
                              <i class="fas fa-bolt text-dark"></i>
                            </div>
                        </div>
                      </div>
                    </div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-3BftIcoCta", {
          label: opt.Bft3IcoCtaModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">

							<div class="col-4 col-md-3 col-lg-2 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-cogs text-dark"></i>
									</div>
							</div>
							<div class="col-4 col-md-3 col-lg-2 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-users text-dark"></i>
									</div>
							</div>
							<div class="col-4 col-md-3 col-lg-2 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-bolt text-dark"></i>
									</div>
							</div>
					  </div>
					  <div class="row align-items-start justify-content-center mt-4 pt-2 pt-sm-3" data-gjs-custom-name="Row">
							<div class="col-12 text-center" data-gjs-custom-name="Button Column">
									<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
							</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-3BftIcoH1", {
          label: opt.Bft3IcoH1ModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-6 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-cogs text-dark"></i>
										<p class="dhx-title-benefit mt-2">Lorem Ipsum</p>
									</div>
							</div>
							<div class="col-6 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-users text-dark"></i>
										<p class="dhx-title-benefit mt-2">Consectetur</p>
									</div>
							</div>
							<div class="mt-4 mt-sm-0 col-6 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-bolt text-dark"></i>
										<p class="dhx-title-benefit mt-2">Sit Amet Dolor</p>
									</div>
							</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-3BftIcoH1Cta", {
          label: opt.Bft3IcoH1CtaModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-6 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-cogs text-dark"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Lorem Ipsum</p>
									</div>
							</div>
							<div class="col-6 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-users text-dark"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Consectetur</p>
									</div>
							</div>
							<div class="mt-4 mt-sm-0 col-6 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-bolt text-dark"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Sit Amet Dolor</p>
									</div>
							</div>
					  </div>
					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-3BftIcoH1P", {
          label: opt.Bft3IcoH1PModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-10 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-cogs text-dark"></i>
										<p class="dhx-title-benefit mt-1 mb-0">Lorem Ipsum</p>
										<p>Phasellus sagittis nunc a turpis facilisis condimentum.</p>
									</div>
							</div>
							<div class="mt-4 mt-sm-0 col-10 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-users text-dark"></i>
										<p class="dhx-title-benefit mt-1 mb-0">Consectetur</p>
										<p>Mauris fermentum nunc lorem. </p>
									</div>
							</div>
							<div class="mt-4 mt-sm-0 col-10 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-bolt text-dark"></i>
										<p class="dhx-title-benefit mt-1 mb-0">Sit Amet Dolor</p>
										<p>Fusce faucibus a mauris eget pulvinar. Curabitur tincidunt est.</p>
									</div>
							</div>
					  </div>
					</div>
                </section>

      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-3BftIcoH1PCta", {
          label: opt.Bft3IcoH1PCtaModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">

							<div class="col-10 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-cogs text-dark"></i>
										<p class="dhx-title-benefit mt-1 mb-0">Lorem Ipsum</p>
										<p>Phasellus sagittis nunc a turpis facilisis condimentum.</p>
									</div>
							</div>
							<div class="mt-4 mt-sm-0 col-10 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-users text-dark"></i>
										<p class="dhx-title-benefit mt-1 mb-0">Consectetur</p>
										<p>Mauris fermentum nunc lorem. </p>
									</div>
							</div>
							<div class="mt-4 mt-sm-0 col-10 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-bolt text-dark"></i>
										<p class="dhx-title-benefit mt-1 mb-0">Sit Amet Dolor</p>
										<p>Fusce faucibus a mauris eget pulvinar. Curabitur tincidunt est.</p>
									</div>
							</div>
					  </div>
					  <div class="row align-items-start justify-content-center mt-1" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        //////////// 4 Benefit Icons ///////////
        bm.add("module-4BftIco", {
          label: opt.Bft4IcoModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 4 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-3 col-md-3 col-lg-2 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-cogs text-dark"></i>
									</div>
							</div>
							<div class="col-3 col-md-3 col-lg-2 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-users text-dark"></i>
									</div>
							</div>
							<div class="col-3 col-md-3 col-lg-2 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-bolt text-dark"></i>
									</div>
							</div>
							<div class="col-3 col-md-3 col-lg-2 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-phone text-dark"></i>
									</div>
							</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-4BftIcoCta", {
          label: opt.Bft4IcoCtaModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 4 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-3 col-md-3 col-lg-2 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-cogs text-dark"></i>
									</div>
							</div>
							<div class="col-3 col-md-3 col-lg-2 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-users text-dark"></i>
									</div>
							</div>
							<div class="col-3 col-md-3 col-lg-2 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-bolt text-dark"></i>
									</div>
							</div>
							<div class="col-3 col-md-3 col-lg-2 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-phone text-dark"></i>
									</div>
							</div>
					  </div>
					  <div class="row align-items-start justify-content-center mt-4 pt-2 pt-sm-3" data-gjs-custom-name="Row">
							<div class="col-12 text-center" data-gjs-custom-name="Button Column">
									<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
							</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-4BftIcoH1", {
          label: opt.Bft4IcoH1ModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 4 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-10 col-sm-6 col-md-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-cogs text-dark"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Lorem Ipsum</p>
									</div>
							</div>
							<div class="mt-4 mt-sm-0 col-10 col-sm-6 col-md-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-users text-dark"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Sit Amet Dolor</p>
									</div>
							</div>
							<div class="mt-4 mt-md-0 col-10 col-sm-6 col-md-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-bolt text-dark"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Sit Amet Dolor</p>
									</div>
							</div>
							<div class="mt-4 mt-md-0 col-10 col-sm-6 col-md-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-phone text-dark"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Nullam elit orci</p>
									</div>
							</div>
					  </div>
					</div>
                </section>

      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-4BftIcoH1Cta", {
          label: opt.Bft4IcoH1CtaModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 4 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-10 col-sm-6 col-md-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-cogs text-dark"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Lorem Ipsum</p>
									</div>
							</div>
							<div class="mt-4 mt-sm-0 col-10 col-sm-6 col-md-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-users text-dark"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Sit Amet Dolor</p>
									</div>
							</div>
							<div class="mt-4 mt-md-0 col-10 col-sm-6 col-md-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-bolt text-dark"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Sit Amet Dolor</p>
									</div>
							</div>
							<div class="mt-4 mt-md-0 col-10 col-sm-6 col-md-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-phone text-dark"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Nullam elit orci</p>
									</div>
							</div>
					  </div>
					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-4BftIcoH1P", {
          label: opt.Bft4IcoH1PModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 4 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-10 col-sm-5 col-md-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-cogs text-dark"></i>
										<p class="dhx-title-benefit mt-1 mb-0">Lorem Ipsum</p>
										<p>Phasellus sagittis nunc a turpis facilisis condimentum.</p>
									</div>
							</div>
							<div class="mt-4 mt-sm-0 col-10 col-sm-5 col-md-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-users text-dark"></i>
										<p class="dhx-title-benefit mt-1 mb-0">Consectetur</p>
										<p>Mauris fermentum nunc lorem. </p>
									</div>
							</div>
							<div class="mt-4 mt-sm-0 col-10 col-sm-5 col-md-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-bolt text-dark"></i>
										<p class="dhx-title-benefit mt-1 mb-0">Sit Amet Dolor</p>
										<p>Fusce faucibus a mauris eget pulvinar. Curabitur tin.</p>
									</div>
							</div>
							<div class="mt-4 mt-sm-0 col-10 col-sm-5 col-md-3 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-phone text-dark"></i>
										<p class="dhx-title-benefit mt-1 mb-0">Nullam elit orci</p>
										<p>Aenean id consectetur sapien, vitae eleifend ante.</p>
									</div>
							</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-4BftIcoH1PCta", {
          label: opt.Bft4IcoH1PCtaModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 4 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-10 col-sm-5 col-md-3 text-center mb-3 mb-md-0" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-cogs text-dark"></i>
										<p class="dhx-title-benefit mt-1 mb-0">Lorem Ipsum</p>
										<p>Phasellus sagittis nunc a turpis facilisis condimentum.</p>
									</div>
							</div>
							<div class="col-10 col-sm-5 col-md-3 text-center mb-3 mb-md-0" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-users text-dark"></i>
										<p class="dhx-title-benefit mt-1 mb-0">Consectetur</p>
										<p>Mauris fermentum nunc lorem. </p>
									</div>
							</div>
							<div class="col-10 col-sm-5 col-md-3 text-center mb-3 mb-md-0" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-bolt text-dark"></i>
										<p class="dhx-title-benefit mt-1 mb-0">Sit Amet Dolor</p>
										<p>Fusce faucibus a mauris eget pulvinar. Curabitur tinc.</p>
									</div>
							</div>
							<div class="col-10 col-sm-5 col-md-3 text-center mb-3 mb-md-0" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon dhx-icon-lg"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-phone text-dark"></i>
										<p class="dhx-title-benefit mt-1 mb-0">Nullam elit orci</p>
										<p>Aenean id consectetur sapien, vitae eleifend ante.</p>
									</div>
							</div>
					  </div>
					  <div class="row align-items-start justify-content-center mt-1" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>

      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

      //////////// 3 Benefit Icons Box ///////////

        bm.add("module-3BftIcobox", {
        label: opt.Bft3IcoboxModuleBlkLabel,
        category: opt.categoryBftModulesContent,
        content: `
        <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
        <div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
          <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
            <div class="col-4 col-md-3 col-lg-2 text-center" data-gjs-custom-name="Benefit Column">
                <div class="text-center d-inline-block dhx-destacado-icon "  data-gjs-custom-name="Icon Box">
                  <i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
                </div>
            </div>
            <div class="col-4 col-md-3 col-lg-2 text-center" data-gjs-custom-name="Benefit Column">
                <div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
                  <i class="fas fa-users text-light bg-dark dhx-icon-bg-rounded "></i>
                </div>
            </div>
            <div class="col-4 col-md-3 col-lg-2 text-center" data-gjs-custom-name="Benefit Column">
                <div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
                  <i class="fas fa-bolt text-light bg-dark dhx-icon-bg-rounded"></i>
                </div>
            </div>
          </div>
        </div>
              </section>
    `,
        attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
      });

        bm.add("module-3BftIcoboxCta", {
        label: opt.Bft3IcoboxCtaModuleBlkLabel,
        category: opt.categoryBftModulesContent,
        content: `
        <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
        <div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
          <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
            <div class="col-4 col-md-3 col-lg-2 text-center" data-gjs-custom-name="Benefit Column">
                <div class="text-center d-inline-block dhx-destacado-icon "  data-gjs-custom-name="Icon Box">
                  <i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
                </div>
            </div>
            <div class="col-4 col-md-3 col-lg-2 text-center" data-gjs-custom-name="Benefit Column">
                <div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
                  <i class="fas fa-users text-light bg-dark dhx-icon-bg-rounded "></i>
                </div>
            </div>
            <div class="col-4 col-md-3 col-lg-2 text-center" data-gjs-custom-name="Benefit Column">
                <div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
                  <i class="fas fa-bolt text-light bg-dark dhx-icon-bg-rounded"></i>
                </div>
            </div>
          </div>
          <div class="row align-items-start justify-content-center mt-4 pt-2 pt-sm-3" data-gjs-custom-name="Row">
            <div class="col-12 text-center" data-gjs-custom-name="Button Column">
                <a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
            </div>
          </div>
        </div>
              </section>
    `,
        attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
      });

        bm.add("module-3BftIcoboxH1", {
        label: opt.Bft3IcoboxH1ModuleBlkLabel,
        category: opt.categoryBftModulesContent,
        content: `
        <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
        <div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
          <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
            <div class="col-6 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
                <div class="text-center d-inline-block dhx-destacado-icon "  data-gjs-custom-name="Icon Box">
                  <i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
                  <p class="dhx-title-benefit mt-2">Lorem Ipsum</p>
                </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
                <div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
                  <i class="fas fa-users text-light bg-dark dhx-icon-bg-rounded "></i>
                  <p class="dhx-title-benefit mt-2">Consectetur</p>
                </div>
            </div>
            <div class="mt-4 mt-sm-0 col-6 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
                <div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
                  <i class="fas fa-bolt text-light bg-dark dhx-icon-bg-rounded"></i>
                  <p class="dhx-title-benefit mt-2">Sit Amet Dolor</p>
                </div>
            </div>
          </div>
        </div>
              </section>
    `,
        attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
      });

        bm.add("module-3BftIcoboxH1Cta", {
        label: opt.Bft3IcoboxH1CtaModuleBlkLabel,
        category: opt.categoryBftModulesContent,
        content: `
        <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
        <div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
          <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
            <div class="col-6 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
                <div class="text-center d-inline-block dhx-destacado-icon "  data-gjs-custom-name="Icon Box">
                  <i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
                  <p class="dhx-title-benefit mt-2 mb-0">Lorem Ipsum</p>
                </div>
            </div>
            <div class="col-6 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
                <div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
                  <i class="fas fa-users text-light bg-dark dhx-icon-bg-rounded "></i>
                  <p class="dhx-title-benefit mt-2 mb-0">Consectetur</p>
                </div>
            </div>
            <div class="mt-4 mt-sm-0 col-6 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
                <div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
                  <i class="fas fa-bolt text-light bg-dark dhx-icon-bg-rounded"></i>
                  <p class="dhx-title-benefit mt-2 mb-0">Sit Amet Dolor</p>
                </div>
            </div>
          </div>
          <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
          <div class="col-12 text-center" data-gjs-custom-name="Button Column">
            <hr class="mb-3">
            <a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
          </div>
          </div>
        </div>
              </section>
    `,
        attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
      });

        bm.add("module-3BftIcoboxH1P", {
        label: opt.Bft3IcoboxH1PModuleBlkLabel,
        category: opt.categoryBftModulesContent,
        content: `
        <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
        <div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
          <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
            <div class="col-10 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
                <div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
                  <i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
                  <p class="dhx-title-benefit mt-2 mb-0">Lorem Ipsum</p>
                  <p>Phasellus sagittis nunc a turpis facilisis condimentum.</p>
                </div>
            </div>
            <div class="mt-4 mt-sm-0 col-10 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
                <div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
                  <i class="fas fa-users text-light bg-dark dhx-icon-bg-rounded "></i>
                  <p class="dhx-title-benefit mt-2 mb-0">Consectetur</p>
                  <p>Mauris fermentum nunc lorem. </p>
                </div>
            </div>
            <div class="mt-4 mt-sm-0 col-10 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
                <div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
                  <i class="fas fa-bolt text-light bg-dark dhx-icon-bg-rounded"></i>
                  <p class="dhx-title-benefit mt-2 mb-0">Sit Amet Dolor</p>
                  <p>Fusce faucibus a mauris eget pulvinar. Curabitur tincidunt est.</p>
                </div>
            </div>
          </div>
        </div>
              </section>

    `,
        attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
      });

        bm.add("module-3BftIcoboxH1PCta", {
        label: opt.Bft3IcoboxH1PCtaModuleBlkLabel,
        category: opt.categoryBftModulesContent,
        content: `
        <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
        <div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
          <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
            <div class="col-10 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
                <div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
                  <i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
                  <p class="dhx-title-benefit mt-2 mb-0">Lorem Ipsum</p>
                  <p>Phasellus sagittis nunc a turpis facilisis condimentum.</p>
                </div>
            </div>
            <div class="mt-4 mt-sm-0 col-10 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
                <div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
                  <i class="fas fa-users text-light bg-dark dhx-icon-bg-rounded "></i>
                  <p class="dhx-title-benefit mt-2 mb-0">Consectetur</p>
                  <p>Mauris fermentum nunc lorem. </p>
                </div>
            </div>
            <div class="mt-4 mt-sm-0 col-10 col-sm-4 col-lg-3 text-center" data-gjs-custom-name="Benefit Column">
                <div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
                  <i class="fas fa-bolt text-light bg-dark dhx-icon-bg-rounded"></i>
                  <p class="dhx-title-benefit mt-2 mb-0">Sit Amet Dolor</p>
                  <p>Fusce faucibus a mauris eget pulvinar. Curabitur tincidunt est.</p>
                </div>
            </div>
          </div>
          <div class="row align-items-start justify-content-center mt-1" data-gjs-custom-name="Row">
          <div class="col-12 text-center" data-gjs-custom-name="Button Column">
            <hr class="mb-3">
            <a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
          </div>
          </div>
        </div>
              </section>

    `,
        attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
      });

      //
      //////////// 4 Benefit Icons Box ///////////

        bm.add("module-4BftIcobox", {
          label: opt.Bft4IcoboxModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 4 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-3 col-md-2 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon "  data-gjs-custom-name="Icon Box">
										<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
									</div>
							</div>
							<div class="col-3 col-md-2 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-users text-light bg-dark dhx-icon-bg-rounded "></i>
									</div>
							</div>
							<div class="col-3 col-md-2 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-bolt text-light bg-dark dhx-icon-bg-rounded"></i>
									</div>
							</div>
							<div class="col-3 col-md-2 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas text-light bg-dark dhx-icon-bg-rounded  fa-phone"></i>
									</div>
							</div>
					  </div>
					</div>
                </section>

      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-4BftIcoboxCta", {
          label: opt.Bft4IcoboxCtaModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 4 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-3 col-md-2 mb-4 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon "  data-gjs-custom-name="Icon Box">
										<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
									</div>
							</div>
							<div class="col-3 col-md-2 mb-4 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-users text-light bg-dark dhx-icon-bg-rounded "></i>
									</div>
							</div>
							<div class="col-3 col-md-2 mb-0 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-bolt text-light bg-dark dhx-icon-bg-rounded"></i>
									</div>
							</div>
							<div class="col-3 col-md-2 mb-0 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas text-light bg-dark dhx-icon-bg-rounded  fa-phone"></i>
									</div>
							</div>
					  </div>
					  <div class="row align-items-start justify-content-center mt-4 pt-2 pt-sm-3" data-gjs-custom-name="Row">
							<div class="col-12 text-center" data-gjs-custom-name="Button Column">
									<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
							</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-4BftIcoboxH1", {
          label: opt.Bft4IcoboxH1ModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 4 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-10 col-sm-6 col-md-3  mb-3 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon "  data-gjs-custom-name="Icon Box">
										<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Lorem Ipsum</p>
									</div>
							</div>
							<div class="mt-4 mt-sm-0 col-10 col-sm-6 col-md-3  mb-3 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-users text-light bg-dark dhx-icon-bg-rounded "></i>
										<p class="dhx-title-benefit mt-2 mb-0">Consectetur</p>
									</div>
							</div>
							<div class="mt-4 mt-md-0 col-10 col-sm-6 col-md-3  mb-3 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-bolt text-light bg-dark dhx-icon-bg-rounded"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Sit Amet Dolor</p>
									</div>
							</div>
							<div class="mt-4 mt-md-0 col-10 col-sm-6 col-md-3  mb-0 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas text-light bg-dark dhx-icon-bg-rounded  fa-phone"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Nullam elit orci</p>
									</div>
							</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-4BftIcoboxH1Cta4", {
          label: opt.Bft4IcoboxH1CtaModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 4 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-10 col-sm-6 col-md-3  mb-3 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon "  data-gjs-custom-name="Icon Box">
										<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Lorem Ipsum</p>
									</div>
							</div>
							<div class="mt-4 mt-sm-0 col-10 col-sm-6 col-md-3  mb-3 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-users text-light bg-dark dhx-icon-bg-rounded "></i>
										<p class="dhx-title-benefit mt-2 mb-0">Consectetur</p>
									</div>
							</div>
							<div class="mt-4 mt-md-0 col-10 col-sm-6 col-md-3  mb-3 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-bolt text-light bg-dark dhx-icon-bg-rounded"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Sit Amet Dolor</p>
									</div>
							</div>
							<div class="mt-4 mt-md-0 col-10 col-sm-6 col-md-3  mb-0 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas text-light bg-dark dhx-icon-bg-rounded  fa-phone"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Nullam elit orci</p>
									</div>
							</div>
					  </div>
					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-4BftIcoboxH1P", {
          label: opt.Bft4IcoboxH1PModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 4 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-10 col-sm-5 col-md-3 mb-2 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Lorem Ipsum</p>
										<p>Phasellus sagittis nunc a turpis facilisis condimentum.</p>
									</div>
							</div>
							<div class="mt-4 mt-sm-0 col-10 col-sm-5 col-md-3 mb-2 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-users text-light bg-dark dhx-icon-bg-rounded "></i>
										<p class="dhx-title-benefit mt-2 mb-0">Consectetur</p>
										<p>Mauris fermentum nunc lorem. </p>
									</div>
							</div>
							<div class="mt-4 mt-sm-2 mt-lg-0 col-10 col-sm-5 col-md-3 mb-2 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-bolt text-light bg-dark dhx-icon-bg-rounded"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Sit Amet Dolor</p>
										<p>Fusce faucibus a mauris eget pulvinar. Curabitur ti.</p>
									</div>
							</div>
							<div class="mt-4 mt-sm-2 mt-lg-0 col-10 col-sm-5 col-md-3 mb-0 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas text-light bg-dark dhx-icon-bg-rounded  fa-phone"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Nullam elit orci</p>
										<p>Aenean id consectetur sapien, vitae eleifend ante.</p>
									</div>
							</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-4BftIcoboxH1PCta", {
          label: opt.Bft4IcoboxH1PCtaModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 4 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-10 col-sm-5 col-md-3 mb-2 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Lorem Ipsum</p>
										<p>Phasellus sagittis nunc a turpis facilisis condimentum.</p>
									</div>
							</div>
							<div class="mt-4 mt-sm-0 col-10 col-sm-5 col-md-3 mb-2 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-users text-light bg-dark dhx-icon-bg-rounded "></i>
										<p class="dhx-title-benefit mt-2 mb-0">Consectetur</p>
										<p>Mauris fermentum nunc lorem. </p>
									</div>
							</div>
							<div class="mt-4 mt-sm-2 mt-lg-0 col-10 col-sm-5 col-md-3 mb-2 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas fa-bolt text-light bg-dark dhx-icon-bg-rounded"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Sit Amet Dolor</p>
										<p>Fusce faucibus a mauris eget pulvinar. Curabitur ti.</p>
									</div>
							</div>
							<div class="mt-4 mt-sm-2 mt-lg-0 col-10 col-sm-5 col-md-3 mb-0 text-center" data-gjs-custom-name="Benefit Column">
									<div class="text-center d-inline-block dhx-destacado-icon"  data-gjs-custom-name="Icon Box">
										<i class="fas text-light bg-dark dhx-icon-bg-rounded  fa-phone"></i>
										<p class="dhx-title-benefit mt-2 mb-0">Nullam elit orci</p>
										<p>Aenean id consectetur sapien, vitae eleifend ante.</p>
									</div>
							</div>
					  </div>
					  <div class="row align-items-start justify-content-center mt-1" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        //////////// 3 Benefit Image ///////////

        bm.add("module-3BftImg", {
          label: opt.Bft3ImgModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12 col-sm-4 col-md-3 mb-4 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w75 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
							</div>
							<div class="col-12 col-sm-4 col-md-3 mb-4 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w75 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
							</div>
							<div class="col-12 col-sm-4 col-md-3 mb-4 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w75 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
							</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-3BftImgCta", {
          label: opt.Bft3ImgCtaModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12 col-sm-4 col-md-3 mb-4 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w75 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
							</div>
							<div class="col-12 col-sm-4 col-md-3 mb-4 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w75 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
							</div>
							<div class="col-12 col-sm-4 col-md-3 mb-4 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w75 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
							</div>
					  </div>
					  <div class="row align-items-start justify-content-center mt-4 pt-2 pt-sm-3" data-gjs-custom-name="Row">
							<div class="col-12 text-center" data-gjs-custom-name="Button Column">
									<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
							</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-3BftImgH1", {
          label: opt.Bft3ImgH1ModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-10 col-sm-4 col-md-3 mb-4 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-2">Lorem Ipsum</p>
							</div>
							<div class="col-10 col-sm-4 col-md-3 mb-4 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-2">Consectetur</p>
							</div>
							<div class="col-10 col-sm-4 col-md-3 mb-2 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-2">Sit Amet Dolor</p>
							</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-3BftImgH1Cta", {
          label: opt.Bft3ImgH1CtaModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-10 col-sm-4 col-md-3 mb-4 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-2">Lorem Ipsum</p>
							</div>
							<div class="col-10 col-sm-4 col-md-3 mb-4 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-2">Consectetur</p>
							</div>
							<div class="col-10 col-sm-4 col-md-3 mb-2 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-2">Sit Amet Dolor</p>
							</div>
					  </div>
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-3BftImgH1P", {
          label: opt.Bft3ImgH1PModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-10 col-sm-4 mb-4 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-3 mb-0">Lorem Ipsum</p>
								<p>Phasellus sagittis nunc a turpis facilisis condimentum.</p>
							</div>
							<div class="col-10 col-sm-4 mb-4 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-3 mb-0">Consectetur</p>
								<p>Mauris fermentum nunc lorem. </p>
							</div>
							<div class="col-10 col-sm-4 mb-2 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-3 mb-0">Sit Amet Dolor</p>
								<p>Fusce faucibus a mauris eget pulvinar. Curabitur tincidunt est.</p>
							</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-3BftImgH1PCta", {
          label: opt.Bft3ImgH1PCtaModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-10 col-sm-4 mb-4 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-3 mb-0">Lorem Ipsum</p>
								<p>Phasellus sagittis nunc a turpis facilisis condimentum.</p>
							</div>
							<div class="col-10 col-sm-4 mb-4 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-3 mb-0">Consectetur</p>
								<p>Mauris fermentum nunc lorem. </p>
							</div>
							<div class="col-10 col-sm-4 mb-2 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-3 mb-0">Sit Amet Dolor</p>
								<p>Fusce faucibus a mauris eget pulvinar. Curabitur tincidunt est.</p>
							</div>
					  </div>
					  <div class="row align-items-start justify-content-center mt-1" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        //
        //////////// 4 Benefit Image ///////////

        bm.add("module-4BftImg", {
          label: opt.Bft4ImgModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 4 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w75 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
							</div>
							<div class="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w75 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
							</div>
							<div class="col-12 col-sm-6 col-lg-3 mb-4 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w75 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
							</div>
							<div class="col-12 col-sm-6 col-lg-3 mb-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w75 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
							</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-4BftImgCta", {
          label: opt.Bft4ImgCtaModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w75 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
							</div>
							<div class="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w75 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
							</div>
							<div class="col-12 col-sm-6 col-lg-3 mb-4 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w75 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
							</div>
							<div class="col-12 col-sm-6 col-lg-3 mb-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w75 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
							</div>
					  </div>
					  <div class="row align-items-start justify-content-center mt-0 mt-md-4 pt-2 pt-sm-3" data-gjs-custom-name="Row">
							<div class="col-12 text-center" data-gjs-custom-name="Button Column">
									<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
							</div>
					  </div>
					</div>
                </section>

      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-4BftImgH1", {
          label: opt.Bft4ImgH1ModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-10 col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-2">Lorem Ipsum</p>
							</div>
							<div class="col-10 col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-2">Consectetur</p>
							</div>
							<div class="col-10 col-sm-6 col-lg-3 mb-4 mb-md-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-2">Sit Amet Dolor</p>
							</div>
							<div class="col-10 col-sm-6 col-lg-3 mb-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-2">Nullam elit orci</p>
							</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-4BftImgH1Cta", {
          label: opt.Bft4ImgH1CtaModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-10 col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-2">Lorem Ipsum</p>
							</div>
							<div class="col-10 col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-2">Consectetur</p>
							</div>
							<div class="col-10 col-sm-6 col-lg-3 mb-4 mb-md-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-2">Sit Amet Dolor</p>
							</div>
							<div class="col-10 col-sm-6 col-lg-3 mb-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-2">Nullam elit orci</p>
							</div>
					  </div>
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>

      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-4BftImgH1P", {
          label: opt.Bft4ImgH1PModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-10 col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-3 mb-0">Lorem Ipsum</p>
								<p>Phasellus sagittis nunc a turpis facilisis condimentum.</p>
							</div>
							<div class="col-10 col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-3 mb-0">Consectetur</p>
								<p>Mauris fermentum nunc lorem. </p>
							</div>
							<div class="col-10 col-sm-6 col-lg-3 mb-4 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-3 mb-0">Sit Amet Dolor</p>
								<p>Fusce faucibus a mauris eget pulvinar. Curabitur tinci.</p>
							</div>
							<div class="col-10 col-sm-6 col-lg-3 mb-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-3 mb-0">Nullam elit orci</p>
								<p>Aenean id consectetur sapien, vitae eleifend ante.</p>
							</div>
					  </div>
					</div>
                </section>
      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-4BftImgH1PCta", {
          label: opt.Bft4ImgH1PCtaModuleBlkLabel,
          category: opt.categoryBftModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-bnft-sect" data-gjs-custom-name="Section - Benefits">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 3 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-10 col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-3 mb-0">Lorem Ipsum</p>
								<p>Phasellus sagittis nunc a turpis facilisis condimentum.</p>
							</div>
							<div class="col-10 col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-3 mb-0">Consectetur</p>
								<p>Mauris fermentum nunc lorem. </p>
							</div>
							<div class="col-10 col-sm-6 col-lg-3 mb-4 mb-sm-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-3 mb-0">Sit Amet Dolor</p>
								<p>Fusce faucibus a mauris eget pulvinar. Curabitur tinci.</p>
							</div>
							<div class="col-10 col-sm-6 col-lg-3 mb-0 text-center" data-gjs-custom-name="Benefit Column">
								<img class="img-fluid dhx-w90 dhx-sm-w100 rounded mx-auto" alt="Image Alt" src="http://via.placeholder.com/350x250/666666">
								<p class="dhx-title-benefit mt-3 mb-0">Nullam elit orci</p>
								<p>Aenean id consectetur sapien, vitae eleifend ante.</p>
							</div>
					  </div>
					  <div class="row align-items-start justify-content-center mt-1" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>

      `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        //
        //////////// CTA BOX Sections/Modules ///////////

        bm.add("module-CTABoxC", {
          label: opt.CTABoxCModuleBlkLabel,
          category: opt.categoryCtaModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-sect-cta" data-gjs-custom-name="Section - CTA Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col">
					  <div class="row align-items-center justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12 text-center" data-gjs-custom-name="CTA Text Column">
									<h3 class="mb-0">Curabitur suscipit, ex vel tristique semper, risus sem viverra diam.</h3>
							</div>
							<div class="col-12 text-center mt-4" data-gjs-custom-name="CTA Column">
									<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
							</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-CTABoxCBgImg", {
          label: opt.CTABoxCBgImgModuleBlkLabel,
          category: opt.categoryCtaModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-img-lg dhx-sect-cta-img dhx-bg-overlay dhx-bg-overlay-black-60 dhx-sect-cta" data-gjs-custom-name="Section - CTA Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col">
					  <div class="row align-items-center justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12 text-center text-white" data-gjs-custom-name="CTA Text Column">
									<h3 class="mb-0">Curabitur suscipit, ex vel tristique semper, risus sem viverra diam.</h3>
							</div>
							<div class="col-12 text-center mt-4" data-gjs-custom-name="CTA Column">
									<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
							</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-CTABoxR", {
          label: opt.CTABoxRModuleBlkLabel,
          category: opt.categoryCtaModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-sect-cta" data-gjs-custom-name="Section - CTA Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col">
					  <div class="row align-items-center justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12 col-md-9 text-center text-md-left text-xl-right" data-gjs-custom-name="CTA Text Column">
									<h3 class="mb-0">Curabitur suscipit, ex vel tristique semper, risus sem viverra diam.</h3>
							</div>
							<div class="col-12 col-md-2 text-center text-md-left mt-4 mt-md-0" data-gjs-custom-name="CTA Column">
									<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
							</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-CTABoxRBgImg", {
          label: opt.CTABoxRBgImgModuleBlkLabel,
          category: opt.categoryCtaModulesContent,
          content: `
          <section class="dhx-bg-img-lg dhx-sect-cta-img d-flex align-items-center dhx-bg-overlay dhx-bg-overlay-black-60 dhx-sect-cta" data-gjs-custom-name="Section - CTA Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col">
					  <div class="row align-items-center justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12 col-md-9 text-center text-md-left text-xl-right text-white" data-gjs-custom-name="CTA Text Column">
									<h3 class="mb-0">Curabitur suscipit, ex vel tristique semper, risus sem viverra diam.</h3>
							</div>
							<div class="col-12 col-md-2 text-center text-md-left mt-4 mt-md-0" data-gjs-custom-name="CTA Column">
									<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
							</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        //////////// Highlight Box ///////////

        bm.add("module-HLBox2H1P", {
          label: opt.HLBox2H1PModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>

								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox2IcoH1P", {
          label: opt.HLBox2IcoH1PModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cloud-download-alt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>

								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox2ImgH1P", {
          label: opt.HLBox2ImgH1PModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/448x192/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/448x192/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>


								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox2H1PBgImg", {
          label: opt.HLBox2H1PBgImgModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>

								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox2IcoH1PBgImg", {
          label: opt.HLBox2IcoH1PBgImgModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cloud-download-alt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>


								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox2H1PCta", {
          label: opt.HLBox2H1PCtaModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox2IcoH1PCta", {
          label: opt.HLBox2IcoH1PCtaModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cloud-download-alt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>


								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox2ImgH1PCta", {
          label: opt.HLBox2ImgH1PCtaModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/448x192/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/448x192/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>


								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox2H1PCtaBgImg", {
          label: opt.HLBox2H1PCtaBgImgModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
										<div class="card-footer bg-white border-top-0 bg-transparent pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
										<div class="card-footer bg-white border-top-0 bg-transparent pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>

								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox2IcoH1PCtaBgImg", {
          label: opt.HLBox2IcoH1PCtaBgImgModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cloud-download-alt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
										<div class="card-footer bg-white border-top-0 bg-transparent pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
										<div class="card-footer bg-white border-top-0 bg-transparent pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>

								</div>
						  	</div>
					  </div>
					</div>
                </section>

        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox2H1PCtaSect", {
          label: opt.HLBox2H1PCtaSectModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `                <section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>


								</div>
						  	</div>
					  </div>
					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox2IcoH1PCtaSect", {
          label: opt.HLBox2IcoH1PCtaSectModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cloud-download-alt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>


								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox2ImgH1PCtaSect", {
          label: opt.HLBox2ImgH1PCtaSectModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/448x192/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/448x192/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>


								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>

					</div>
                </section>`,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox2H1PBgImgCtaSect", {
          label: opt.HLBox2H1PBgImgCtaSectModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>


								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>

					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox2IcoH1PBgImgCtaSect", {
          label: opt.HLBox2IcoH1PBgImgCtaSectModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `
          <section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cloud-download-alt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>


								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>

					</div>
                </section>

        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        //// 3HL//

        bm.add("module-HLBox3H1P", {
          label: opt.HLBox3H1PModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox3IcoH1P", {
          label: opt.HLBox3IcoH1PModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cloud-download-alt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas text-light bg-dark dhx-icon-bg-rounded  fa-users"></i>
										  </div>
										  <h4>Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>

								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox3ImgH1P", {
          label: opt.HLBox3ImgH1PModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4>Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>

								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox3H1PBgImg", {
          label: opt.HLBox3H1PBgImgModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox3IcoH1PBgImg", {
          label: opt.HLBox3IcoH1PBgImgModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cloud-download-alt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas text-light bg-dark dhx-icon-bg-rounded  fa-users"></i>
										  </div>
										  <h4>Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>

								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox3H1PCta", {
          label: opt.HLBox3H1PCtaModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>
					</div>
                </section>

        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox3IcoH1PCta", {
          label: opt.HLBox3IcoH1PCtaModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cloud-download-alt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas text-light bg-dark dhx-icon-bg-rounded  fa-users"></i>
										  </div>
										  <h4>Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>

								</div>
						  	</div>
					  </div>
					</div>
                </section>


        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox3ImgH1PCta", {
          label: opt.HLBox3ImgH1PCtaModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4>Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>

								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox3H1PCtaBgImg", {
          label: opt.HLBox3H1PCtaBgImgModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
										<div class="card-footer bg-white border-top-0 bg-transparent pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
										<div class="card-footer bg-white border-top-0 bg-transparent pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
										<div class="card-footer bg-white border-top-0 bg-transparent pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox3IcoH1PCtaBgImg", {
          label: opt.HLBox3IcoH1PCtaBgImgModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cloud-download-alt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
										<div class="card-footer bg-white border-top-0 bg-transparent pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
										<div class="card-footer bg-white border-top-0 bg-transparent pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas text-light bg-dark dhx-icon-bg-rounded  fa-users"></i>
										  </div>
										  <h4>Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
										<div class="card-footer bg-white border-top-0 bg-transparent pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>
					</div>
                </section>

        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox3H1PCtaSect", {
          label: opt.HLBox3H1PCtaSectModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>

								</div>
						  	</div>
					  </div>
					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>

        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox3IcoH1PCtaSect", {
          label: opt.HLBox3IcoH1PCtaSectModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cloud-download-alt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas text-light bg-dark dhx-icon-bg-rounded  fa-users"></i>
										  </div>
										  <h4>Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>

								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
         });

        bm.add("module-HLBox3ImgH1PCtaSect", {
          label: opt.HLBox3ImgH1PCtaSectModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4>Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>

								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>

					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox3ImgH1PCtaSectBg", {
          label: opt.HLBox3ImgH1PCtaSectBgModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>

								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>

					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox3ImgH1PCtaSectBgIco", {
          label: opt.HLBox3ImgH1PCtaSectBgIcoModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cloud-download-alt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas text-light bg-dark dhx-icon-bg-rounded  fa-users"></i>
										  </div>
										  <h4>Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>

								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>

					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        // 4 HL ///

        bm.add("module-HLBox4H1P", {
          label: opt.HLBox4H1PModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Phasellus tempor</h4>
										  <p class="card-text">Vestibulum ac diam lacinia, gravida augue ac, mollis dolor. Suspendisse blandit metus lectus, eu vulputate felis egestas sit amet. In a tincidunt nisl, non finibus tellus.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox4IcoH1P", {
          label: opt.HLBox4IcoH1PModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cloud-download-alt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas text-light bg-dark dhx-icon-bg-rounded  fa-users"></i>
										  </div>
										  <h4>Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-bolt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Phasellus tempor</h4>
										  <p class="card-text">Vestibulum ac diam lacinia, gravida augue ac, mollis dolor. Suspendisse blandit metus lectus, eu vulputate felis egestas sit amet. In a tincidunt nisl, non finibus tellus.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox4ImgH1P", {
          label: opt.HLBox4ImgH1PModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4>Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4>Phasellus tempor</h4>
										  <p class="card-text">Vestibulum ac diam lacinia, gravida augue ac, mollis dolor. Suspendisse blandit metus lectus, eu vulputate felis egestas sit amet. In a tincidunt nisl, non finibus tellus.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox4H1PBgImg", {
          label: opt.HLBox4H1PBgImgModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Phasellus tempor</h4>
										  <p class="card-text">Vestibulum ac diam lacinia, gravida augue ac, mollis dolor. Suspendisse blandit metus lectus, eu vulputate felis egestas sit amet. In a tincidunt nisl, non finibus tellus.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>
					</div>
                </section>

        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox4IcoH1PBgImg", {
          label: opt.HLBox4IcoH1PBgImgModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cloud-download-alt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas text-light bg-dark dhx-icon-bg-rounded  fa-users"></i>
										  </div>
										  <h4>Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-bolt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Phasellus tempor</h4>
										  <p class="card-text">Vestibulum ac diam lacinia, gravida augue ac, mollis dolor. Suspendisse blandit metus lectus, eu vulputate felis egestas sit amet. In a tincidunt nisl, non finibus tellus.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox4H1PCta", {
          label: opt.HLBox4H1PCtaModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Phasellus tempor</h4>
										  <p class="card-text">Vestibulum ac diam lacinia, gravida augue ac, mollis dolor. Suspendisse blandit metus lectus, eu vulputate felis egestas sit amet. In a tincidunt nisl, non finibus tellus.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox4IcoH1PCta", {
          label: opt.HLBox4IcoH1PCtaModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `                <section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cloud-download-alt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas text-light bg-dark dhx-icon-bg-rounded  fa-users"></i>
										  </div>
										  <h4>Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-bolt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Phasellus tempor</h4>
										  <p class="card-text">Vestibulum ac diam lacinia, gravida augue ac, mollis dolor. Suspendisse blandit metus lectus, eu vulputate felis egestas sit amet. In a tincidunt nisl, non finibus tellus.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>
					</div>
                </section>`,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox4ImgH1PCta", {
          label: opt.HLBox4ImgH1PCtaModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4>Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4>Phasellus tempor</h4>
										  <p class="card-text">Vestibulum ac diam lacinia, gravida augue ac, mollis dolor. Suspendisse blandit metus lectus, eu vulputate felis egestas sit amet. In a tincidunt nisl, non finibus tellus.</p>
										</div>
										<div class="card-footer bg-white border-top-0 pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox4H1PCtaBgImg", {
          label: opt.HLBox4H1PCtaBgImgModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
										<div class="card-footer bg-white border-top-0 bg-transparent pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
										<div class="card-footer bg-white border-top-0 bg-transparent pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
										<div class="card-footer bg-white border-top-0 bg-transparent pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Phasellus tempor</h4>
										  <p class="card-text">Vestibulum ac diam lacinia, gravida augue ac, mollis dolor. Suspendisse blandit metus lectus, eu vulputate felis egestas sit amet. In a tincidunt nisl, non finibus tellus.</p>
										</div>
										<div class="card-footer bg-white border-top-0 bg-transparent pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>
					</div>
                </section>

        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox4IcoH1PCtaBgImg", {
          label: opt.HLBox4IcoH1PCtaBgImgModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cloud-download-alt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
										<div class="card-footer bg-white border-top-0 bg-transparent  pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
										<div class="card-footer bg-white border-top-0 bg-transparent  pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas text-light bg-dark dhx-icon-bg-rounded  fa-users"></i>
										  </div>
										  <h4>Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
										<div class="card-footer bg-white border-top-0 bg-transparent  pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-bolt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Phasellus tempor</h4>
										  <p class="card-text">Vestibulum ac diam lacinia, gravida augue ac, mollis dolor. Suspendisse blandit metus lectus, eu vulputate felis egestas sit amet. In a tincidunt nisl, non finibus tellus.</p>
										</div>
										<div class="card-footer bg-white border-top-0 bg-transparent  pb-4">
											<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox4H1PCtaSect", {
          label: opt.HLBox4H1PCtaSectModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Phasellus tempor</h4>
										  <p class="card-text">Vestibulum ac diam lacinia, gravida augue ac, mollis dolor. Suspendisse blandit metus lectus, eu vulputate felis egestas sit amet. In a tincidunt nisl, non finibus tellus.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>
					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox4IcoH1PCtaSect", {
          label: opt.HLBox4IcoH1PCtaSectModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cloud-download-alt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas text-light bg-dark dhx-icon-bg-rounded  fa-users"></i>
										  </div>
										  <h4>Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-bolt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Phasellus tempor</h4>
										  <p class="card-text">Vestibulum ac diam lacinia, gravida augue ac, mollis dolor. Suspendisse blandit metus lectus, eu vulputate felis egestas sit amet. In a tincidunt nisl, non finibus tellus.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>

        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox4ImgH1PCtaSect", {
          label: opt.HLBox4ImgH1PCtaSectModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4>Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<img class="card-img-top"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4>Phasellus tempor</h4>
										  <p class="card-text">Vestibulum ac diam lacinia, gravida augue ac, mollis dolor. Suspendisse blandit metus lectus, eu vulputate felis egestas sit amet. In a tincidunt nisl, non finibus tellus.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>

					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox4ImgH1PCtaSectBg", {
          label: opt.HLBox4ImgH1PCtaSectBgModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <h4 class="card-title">Phasellus tempor</h4>
										  <p class="card-text">Vestibulum ac diam lacinia, gravida augue ac, mollis dolor. Suspendisse blandit metus lectus, eu vulputate felis egestas sit amet. In a tincidunt nisl, non finibus tellus.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>

					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-HLBox4ImgH1PCtaSectBgIco", {
          label: opt.HLBox4ImgH1PCtaSectBgIcoModuleBlkLabel,
          category: opt.categoryHltModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-hltbx-sect" data-gjs-custom-name="Section - Highlight Box">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Highlight Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Highlight Cards">
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cloud-download-alt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
									  	  <h4>Lorem Ipsum</h4>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-cogs text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Donec commodo</h4>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas text-light bg-dark dhx-icon-bg-rounded  fa-users"></i>
										  </div>
										  <h4>Sed vestibulum</h4>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
									  <div class="card border-0 dhx-bg-overlay dhx-bg-img dhx-bg-overlay-white-60" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class="text-center d-inline-block dhx-destacado-icon mb-3"  data-gjs-custom-name="Icon Box">
												<i class="fas fa-bolt text-light bg-dark dhx-icon-bg-rounded"></i>
										  </div>
										  <h4>Phasellus tempor</h4>
										  <p class="card-text">Vestibulum ac diam lacinia, gravida augue ac, mollis dolor. Suspendisse blandit metus lectus, eu vulputate felis egestas sit amet. In a tincidunt nisl, non finibus tellus.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>

					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        //
        //////////// Accordion ///////////
        // bm.add("module-AccordionCont", {
        //   label: opt.AccordionContModuleBlkLabel,
        //   category: opt.categoryModulesContent,
        //   content: `<section class="d-flex align-items-center" data-gjs-custom-name="Section - Video">
             // 	<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col 7/3">
             // 	  <div class="row align-items-center flex-column-reverse flex-lg-row" data-gjs-custom-name="Row">
             // 	  <div class="col-12 col-md-10 mx-auto mb-lg-2" data-gjs-custom-name="Column">
             //              <div id="accordion" class="dhx-accordion">
             //              		<div class="card mb-1 rounded-0">
             //              		  <a data-toggle="collapse" data-parent="#accordion" href="#support1" aria-expanded="false" class="collapsed card-heading btn-light btn-block">
             //              			<h5 class="card-title font-alt my-2 ml-3">Support Question 1</h5>
             //              		  </a>
             //              		  <div class="card-collapse collapse border-top" id="support1" aria-expanded="false" style="height: 0px;">
             //              			<div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
             //              			</div>
             //              		  </div>
             //              		</div>
             //              		<div class="card mb-1 rounded-0">
             //              		  <a data-toggle="collapse" data-parent="#accordion" href="#support2" aria-expanded="false" class="collapsed card-heading btn-light btn-block">
             //              			<h5 class="card-title font-alt my-2 ml-3">Support Question 2</h5>
             //              		  </a>
             //              		  <div class="card-collapse collapse border-top" id="support2" aria-expanded="false" style="height: 0px;">
             //              			<div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
             //              			</div>
             //              		  </div>
             //              		</div>
             //              		<div class="card mb-1 rounded-0">
             //              		  <a data-toggle="collapse" data-parent="#accordion" href="#support3" aria-expanded="false" class="collapsed card-heading btn-light btn-block">
             //              			<h5 class="card-title font-alt my-2 ml-3">Support Question 3</h5>
             //              		  </a>
             //              		  <div class="card-collapse collapse border-top" id="support3" aria-expanded="false" style="height: 0px;">
             //              			<div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
             //              			</div>
             //              		  </div>
             //              		</div>
             //              		<div class="card mb-1 rounded-0">
             //              		  <a data-toggle="collapse" data-parent="#accordion" href="#support4" aria-expanded="false" class="collapsed card-heading btn-light btn-block">
             //              			<h5 class="card-title font-alt my-2 ml-3">Support Question 4</h5>
             //              		  </a>
             //              		  <div class="card-collapse collapse border-top" id="support4" aria-expanded="false" style="height: 0px;">
             //              			<div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
             //              			</div>
             //              		  </div>
             //              		</div>
             //              		<div class="card mb-1 rounded-0">
             //              		  <a data-toggle="collapse" data-parent="#accordion" href="#support5" aria-expanded="false" class="collapsed card-heading btn-light btn-block">
             //              			<h5 class="card-title font-alt my-2 ml-3">Support Question 5</h5>
             //              		  </a>
             //              		  <div class="card-collapse collapse border-top" id="support5" aria-expanded="true" style="">
             //              			<div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
             //              			</div>
             //              		  </div>
             //              		</div>
             //              		<div class="card mb-1 rounded-0">
             //              		  <a data-toggle="collapse" data-parent="#accordion" href="#support6" aria-expanded="false" class="collapsed card-heading btn-light btn-block">
             //              			<h5 class="card-title font-alt my-2 ml-3">Support Question 6</h5>
             //              		  </a>
             //              		  <div class="card-collapse collapse border-top" id="support6" aria-expanded="false" style="height: 0px;">
             //              			<div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
             //              			</div>
             //              		  </div>
             //              		</div>
             //              		<div class="card mb-1 rounded-0">
             //              		  <a data-toggle="collapse" data-parent="#accordion" href="#support7" aria-expanded="false" class="collapsed card-heading btn-light btn-block">
             //              			<h5 class="card-title font-alt my-2 ml-3">Support Question 7</h5>
             //              		  </a>
             //              		  <div class="card-collapse collapse border-top" id="support7" aria-expanded="false" style="height: 0px;">
             //              			<div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
             //              			</div>
             //              		  </div>
             //              		</div>
             //              		<div class="card mb-1 rounded-0">
             //              		  <a data-toggle="collapse" data-parent="#accordion" href="#support8" aria-expanded="false" class="collapsed card-heading btn-light btn-block">
             //              			<h5 class="card-title font-alt my-2 ml-3">Support Question 8</h5>
             //              		  </a>
             //              		  <div class="card-collapse collapse border-top" id="support8" aria-expanded="false" style="height: 0px;">
             //              			<div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
             //              			</div>
             //              		  </div>
             //              		</div>
             //              		<div class="card mb-1 rounded-0">
             //              		  <a data-toggle="collapse" data-parent="#accordion" href="#support9" aria-expanded="false" class="collapsed card-heading btn-light btn-block">
             //              			<h5 class="card-title font-alt my-2 ml-3">Support Question 9</h5>
             //              		  </a>
             //              		  <div class="card-collapse collapse border-top" id="support9" aria-expanded="false" style="height: 0px;">
             //              			<div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
             //              			</div>
             //              		  </div>
             //              		</div>
             //              		<div class="card mb-1 rounded-0">
             //              		  <a data-toggle="collapse" data-parent="#accordion" href="#support10" aria-expanded="false" class="collapsed card-heading btn-light btn-block">
             //              			<h5 class="card-title font-alt my-2 ml-3">Support Question 10</h5>
             //              		  </a>
             //              		  <div class="card-collapse collapse border-top" id="support10" aria-expanded="false" style="height: 0px;">
             //              			<div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
             //              			</div>
             //              		  </div>
             //              		</div>
        //                       </div>
             // 		</div>

             // 	  </div>
             // 	</div>
        //         </section>
        // `,
        //   attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        // });

        //
        //////////// Image Content ///////////
        bm.add("module-ImgContImgL", {
          label: opt.ImgContImgLModuleBlkLabel,
          category: opt.categoryModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-sect-mediacont" data-gjs-custom-name="Section - Content">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col 1/2">
					  <div class="row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 col-md-6 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<img class="img-fluid dhx-w75 dhx-md-w100 mx-auto" alt="Image Alt" src="http://via.placeholder.com/550x350">
					  	</div>

						<div class="col-12 col-md-6 mx-auto text-center text-md-left" data-gjs-custom-name="Column - Content Body">
							<h2>A Subtitle</h2>
							<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec laoreet ligula nec ex porta, eu sollicitudin est dignissim. Nulla suscipit sagittis aliquam. Morbi suscipit nisi blandit tellus laoreet, vel laoreet neque eleifend. Nulla ut nulla nunc. Phasellus aliquam elementum risus. Ut et facilisis eros, quis porttitor sapien. Vestibulum vehicula eros ut metus elementum convallis. Etiam iaculis quis odio id hendrerit. Donec aliquam sit amet augue eget luctus. Duis quis molestie purus. Curabitur suscipit, ex vel tristique semper, risus sem viverra diam, et lacinia velit ante nec libero. Maecenas ut blandit risus.</p>
						</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-ImgContImgR", {
          label: opt.ImgContImgRModuleBlkLabel,
          category: opt.categoryModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-sect-mediacont" data-gjs-custom-name="Section - Content">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col 1/2">
					  <div class="row align-items-center flex-column-reverse flex-md-row" data-gjs-custom-name="Row">


						<div class="col-12 col-md-6 mx-auto text-center text-md-left" data-gjs-custom-name="Column - Content Body">
							<h2>A Subtitle</h2>
							<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec laoreet ligula nec ex porta, eu sollicitudin est dignissim. Nulla suscipit sagittis aliquam. Morbi suscipit nisi blandit tellus laoreet, vel laoreet neque eleifend. Nulla ut nulla nunc. Phasellus aliquam elementum risus. Ut et facilisis eros, quis porttitor sapien. Vestibulum vehicula eros ut metus elementum convallis. Etiam iaculis quis odio id hendrerit. Donec aliquam sit amet augue eget luctus. Duis quis molestie purus. Curabitur suscipit, ex vel tristique semper, risus sem viverra diam, et lacinia velit ante nec libero. Maecenas ut blandit risus.</p>
						</div>
						<div class="col-12 col-md-6 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<img class="img-fluid dhx-w75 dhx-md-w100 mx-auto" alt="Image Alt" src="http://via.placeholder.com/550x350">
					  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-ImgContImgLCta", {
          label: opt.ImgContImgLCtaModuleBlkLabel,
          category: opt.categoryModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-sect-mediacont" data-gjs-custom-name="Section - Content">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col 1/2">
					  <div class="row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 col-md-6 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<img class="img-fluid dhx-w75 dhx-md-w100 mx-auto" alt="Image Alt" src="http://via.placeholder.com/550x350">
					  	</div>

						<div class="col-12 col-md-6 mx-auto text-center text-md-left" data-gjs-custom-name="Column - Content Body">
							<h2>A Subtitle</h2>
							<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec laoreet ligula nec ex porta, eu sollicitudin est dignissim. Nulla suscipit sagittis aliquam. Morbi suscipit nisi blandit tellus laoreet, vel laoreet neque eleifend. Nulla ut nulla nunc. Phasellus aliquam elementum risus. Ut et facilisis eros, quis porttitor sapien. Vestibulum vehicula eros ut metus elementum convallis. Etiam iaculis quis odio id hendrerit. Donec aliquam sit amet augue eget luctus. Duis quis molestie purus. Curabitur suscipit, ex vel tristique semper, risus sem viverra diam, et lacinia velit ante nec libero. Maecenas ut blandit risus.</p>
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>

        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-ImgContImgRCta", {
          label: opt.ImgContImgRCtaModuleBlkLabel,
          category: opt.categoryModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-sect-mediacont" data-gjs-custom-name="Section - Content">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col 1/2">
					  <div class="row align-items-center flex-column-reverse flex-md-row" data-gjs-custom-name="Row">


						<div class="col-12 col-md-6 mx-auto text-center text-md-left" data-gjs-custom-name="Column - Content Body">
							<h2>A Subtitle</h2>
							<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec laoreet ligula nec ex porta, eu sollicitudin est dignissim. Nulla suscipit sagittis aliquam. Morbi suscipit nisi blandit tellus laoreet, vel laoreet neque eleifend. Nulla ut nulla nunc. Phasellus aliquam elementum risus. Ut et facilisis eros, quis porttitor sapien. Vestibulum vehicula eros ut metus elementum convallis. Etiam iaculis quis odio id hendrerit. Donec aliquam sit amet augue eget luctus. Duis quis molestie purus. Curabitur suscipit, ex vel tristique semper, risus sem viverra diam, et lacinia velit ante nec libero. Maecenas ut blandit risus.</p>
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
						<div class="col-12 col-md-6 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<img class="img-fluid dhx-w75 dhx-md-w100 mx-auto" alt="Image Alt" src="http://via.placeholder.com/550x350">
					  	</div>
					  </div>
					</div>
                </section>

        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        //
        //////////// 01 Testimony ///////////
        bm.add("module-Tmny1ImgCxs", {
          label: opt.Tmny1ImgCxsModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmny-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 col-sm-8 col-lg-7 text-center mb-4 mb-md-5 mb-lg-0 mx-auto" data-gjs-custom-name="Column">
							<img class="dhx-img-sm img-fluid rounded-circle mb-2" alt="Image Alt" src="http://via.placeholder.com/70x70">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p>Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
						</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-Tmny1ImgCCta", {
          label: opt.Tmny1ImgCCtaModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmny-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5"  data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
						<div class="col-12 col-sm-8 col-lg-6 text-center mb-4 mb-md-5 mb-lg-0 mx-auto" data-gjs-custom-name="Column">
							<img class="dhx-img-sm img-fluid rounded-circle mb-2" alt="Image Alt" src="http://via.placeholder.com/70x70">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p>Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-Tmny1ImgLlg", {
          label: opt.Tmny1ImgLlgModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmny-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col 2/8">
					  <div class="row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<img class="img-fluid dhx-w75 dhx-md-w100 mx-auto dhx-img-lg" alt="Image Alt" src="http://via.placeholder.com/550x300">
					  	</div>

						<div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p class="mb-0">Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
						</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-Tmny1ImgLCta", {
          label: opt.Tmny1ImgLCtaModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmny-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col 2/8">
					  <div class="row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<img class="img-fluid dhx-w75 dhx-md-w100 mx-auto dhx-img-lg" alt="Image Alt" src="http://via.placeholder.com/550x400">
					  	</div>

						<div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p>Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-Tmny1ImgRlg", {
          label: opt.Tmny1ImgRlgLModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmny-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col 8/2">
					  <div class="row align-items-center flex-column-reverse flex-md-row" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p>Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
						</div>

						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<img class="img-fluid dhx-w75 dhx-md-w100 mx-auto dhx-img-lg" alt="Image Alt" src="http://via.placeholder.com/550x300">
					  	</div>

					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-Tmny1ImgRCta", {
          label: opt.Tmny1ImgRCtaModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmny-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col 8/2">
					  <div class="row align-items-center flex-column-reverse flex-md-row" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p>Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>

						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<img class="img-fluid dhx-w75 dhx-md-w100 mx-auto dhx-img-lg" alt="Image Alt" src="http://via.placeholder.com/550x400">
					  	</div>

					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-Tmny1VideoL", {
          label: opt.Tmny1VideoLModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmny-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col 2/8">
					  <div class="row align-items-center" data-gjs-custom-name="Row">
					  <div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Video">
				  			<div class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto" data-gjs-custom-name="Video Box">
							  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
					  	</div>

					  	<div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p class="mb-0">Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
						</div>



					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-Tmny1VideoLCta", {
          label: opt.Tmny1VideoLCtaModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmny-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col 2/8">
					  <div class="row align-items-center" data-gjs-custom-name="Row">

					  	<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Video">
				  			<div class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto" data-gjs-custom-name="Video Box">
							  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
					  </div>
					  <div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p>Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>



					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-Tmny1VideoR", {
          label: opt.Tmny1VideoRModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmny-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col 8/2">
					  <div class="row align-items-center flex-column-reverse flex-md-row" data-gjs-custom-name="Row">
					  <div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p class="mb-0">Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
						</div>
						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Video">
				  			<div class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto" data-gjs-custom-name="Video Box">
							  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
					  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-Tmny1VideoRCta", {
          label: opt.Tmny1VideoRCtaModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `                <section class="d-flex align-items-center dhx-bg-gray1 dhx-tmny-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col 8/2">
					  <div class="row align-items-center flex-column-reverse flex-md-row" data-gjs-custom-name="Row">
					  <div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p>Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Video">
				  			<div class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto" data-gjs-custom-name="Video Box">
							  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
					  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        //
        //////////// 02 Testimony ///////////
        bm.add("module-Tmny2ImgLlg", {
          label: opt.Tmny2ImgLlgModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `                <section class="d-flex align-items-center dhx-bg-gray1 dhx-tmny-sect" data-gjs-custom-name="Section - 2 Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col 2/8">
					  <div class="row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<img class="img-fluid dhx-w75 dhx-md-w100 mx-auto dhx-img-lg" alt="Image Alt" src="http://via.placeholder.com/550x300">
					  	</div>

						<div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p class="mb-0">Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
						</div>
					  </div>
					  <div class="row align-items-center mt-4 mt-md-5" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<img class="img-fluid dhx-w75 dhx-md-w100 mx-auto dhx-img-lg" alt="Image Alt" src="http://via.placeholder.com/550x300">
					  	</div>

						<div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p class="mb-0">Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
						</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-Tmny2ImgLCtaSect", {
          label: opt.Tmny2ImgLCtaSectModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmny-sect" data-gjs-custom-name="Section - 2 Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col 2/8">
					  <div class="row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<img class="img-fluid dhx-w75 dhx-md-w100 mx-auto dhx-img-lg" alt="Image Alt" src="http://via.placeholder.com/550x300">
					  	</div>

						<div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p class="mb-0">Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
						</div>
					  </div>
					  <div class="row align-items-center mt-4 mt-md-5" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<img class="img-fluid dhx-w75 dhx-md-w100 mx-auto dhx-img-lg" alt="Image Alt" src="http://via.placeholder.com/550x300">
					  	</div>

						<div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p class="mb-0">Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
						</div>
					  </div>

               		  <div class="row align-items-start justify-content-center mt-0 mt-lg-4 pt-2 pt-sm-3 border-top" data-gjs-custom-name="Row">
							<div class="col-12 text-center" data-gjs-custom-name="Button Column">
									<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
							</div>
					  </div>
               	</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-Tmny2ImgLR", {
          label: opt.Tmny2ImgLRModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmny-sect" data-gjs-custom-name="Section - 2 Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col">
					  <div class="row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<img class="img-fluid dhx-w75 dhx-md-w100 mx-auto dhx-img-lg" alt="Image Alt" src="http://via.placeholder.com/550x300">
					  	</div>

						<div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p class="mb-0">Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
						</div>
					  </div>
					  <div class="row align-items-center mt-4 mt-lg-5 flex-column-reverse flex-md-row" data-gjs-custom-name="Row">


					  	<div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p class="mb-0">Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
						</div>
						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<img class="img-fluid dhx-w75 dhx-md-w100 mx-auto dhx-img-lg" alt="Image Alt" src="http://via.placeholder.com/550x300">
					  	</div>


					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-Tmny2ImgLRCtaSect", {
          label: opt.Tmny2ImgLRCtaSectModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmny-sect" data-gjs-custom-name="Section - 2 Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col">
					  <div class="row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<img class="img-fluid dhx-w75 dhx-md-w100 mx-auto dhx-img-lg" alt="Image Alt" src="http://via.placeholder.com/550x300">
					  	</div>

						<div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p class="mb-0">Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
						</div>
					  </div>
					  <div class="row align-items-center mt-4 mt-lg-5 flex-column-reverse flex-md-row" data-gjs-custom-name="Row">


					  	<div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p class="mb-0">Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
						</div>
						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<img class="img-fluid dhx-w75 dhx-md-w100 mx-auto dhx-img-lg" alt="Image Alt" src="http://via.placeholder.com/550x300">
					  	</div>


					  </div>
					  <div class="row align-items-start justify-content-center mt-3 mt-lg-5 pt-2 pt-sm-3 border-top" data-gjs-custom-name="Row">
							<div class="col-12 text-center" data-gjs-custom-name="Button Column">
									<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
							</div>
					  </div>


					</div>
                </section>

        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-Tmny2VideoL", {
          label: opt.Tmny2VideoLModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmny-sect" data-gjs-custom-name="Section - 2 Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col 2/8">
					  <div class="row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Video">
				  			<div class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto" data-gjs-custom-name="Video Box">
							  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
					  	</div>

						<div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p class="mb-0">Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
						</div>
					  </div>
					  <div class="row align-items-center mt-4 mt-md-5" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Video">
				  			<div class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto" data-gjs-custom-name="Video Box">
							  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
					  	</div>

						<div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p class="mb-0">Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
						</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-Tmny2VideoLCtaSect", {
          label: opt.Tmny2VideoLCtaSectModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmny-sect" data-gjs-custom-name="Section - 2 Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col">
					  <div class="row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Video">
				  			<div class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto" data-gjs-custom-name="Video Box">
							  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
					  	</div>

						<div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p class="mb-0">Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
						</div>
					  </div>
					  <div class="row align-items-center mt-4 mt-md-5" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Video">
				  			<div class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto" data-gjs-custom-name="Video Box">
							  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
					  	</div>

						<div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p class="mb-0">Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
						</div>
					  </div>
					   <div class="row align-items-start justify-content-center mt-0 mt-lg-4 pt-2 pt-sm-3 border-top" data-gjs-custom-name="Row">
							<div class="col-12 text-center" data-gjs-custom-name="Button Column">
									<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
							</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-Tmny2VideoLR", {
          label: opt.Tmny2VideoLRModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmny-sect" data-gjs-custom-name="Section - 2 Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col">
					  <div class="row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<div class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto" data-gjs-custom-name="Video Box">
							  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
					  	</div>

						<div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p class="mb-0">Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
						</div>
					  </div>
					  <div class="row align-items-center mt-4 mt-lg-5 flex-column-reverse flex-md-row" data-gjs-custom-name="Row">


					  	<div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p class="mb-0">Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
						</div>
						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<div class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto" data-gjs-custom-name="Video Box">
							  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
					  	</div>


					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-Tmny2VideoLRCtaSect", {
          label: opt.Tmny2VideoLRCtaSectModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-tmny-sect" data-gjs-custom-name="Section - 2 Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col">
					  <div class="row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<div class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto" data-gjs-custom-name="Video Box">
							  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
					  	</div>

						<div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p class="mb-0">Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
						</div>
					  </div>
					  <div class="row align-items-center mt-4 mt-lg-5 flex-column-reverse flex-md-row" data-gjs-custom-name="Row">


					  	<div class="col-12 col-sm-9 col-md-7 col-lg-8 mx-auto text-center text-md-left mb-4 mb-md-5 mb-lg-0 dhx-tmny-body" data-gjs-custom-name="Column - Testimony Body">
							<p class="dhx-team-name mb-0">Name Surname</p>
							<p class="dhx-team-position mb-2 mb-md-3">Company/Position</p>
							<p class="mb-0">Pellentesque sagittis, lacus et vulputate sollicitudin, libero felis cursus eros, eget dictum magna quam ac lectus. Nulla commodo imperdiet varius. Morbi mauris dolor, feugiat consectetur ultrices a, cursus mattis nisl.</p>
						</div>
						<div class="col-12 col-sm-9 col-md-5 col-lg-4 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<div class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto" data-gjs-custom-name="Video Box">
							  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
					  	</div>


					  </div>
					  <div class="row align-items-start justify-content-center mt-0 mt-lg-4 pt-2 pt-sm-3 border-top" data-gjs-custom-name="Row">
							<div class="col-12 text-center" data-gjs-custom-name="Button Column">
									<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
							</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

 //
        //////////// 02 Testimony Box ///////////
        bm.add("module-TmnyBox2Imglg", {
          label: opt.TmnyBox2ImglgModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmnybx-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
									  	  <img class="card-img mb-3"  alt="Image Alt" src="http://via.placeholder.com/500x280/666666">
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
									  	   <img class="card-img mb-3"  alt="Image Alt" src="http://via.placeholder.com/500x280/666666">
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>


					</div>
                </section>
                  `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-TmnyBox2ImglgCtaSect", {
          label: opt.TmnyBox2ImglgCtaSectModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmnybx-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
									  	  <img class="card-img mb-3"  alt="Image Alt" src="http://via.placeholder.com/500x280/666666">
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">

										<div class="card-body" data-gjs-custom-name="Card Body">
									  	   <img class="card-img mb-3"  alt="Image Alt" src="http://via.placeholder.com/500x280/666666">
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>

					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-TmnyBox2Imgxs", {
          label: opt.TmnyBox2ImgxsModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmnybx-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">

										<div class="card-body" data-gjs-custom-name="Card Body">
								  	  	  <img class="card-img-top img-fluid dhx-img-xs rounded-circle mb-3"  alt="Image Alt" src="http://via.placeholder.com/200x200/666666">
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>

									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <img class="card-img-top img-fluid dhx-img-xs rounded-circle mb-3"  alt="Image Alt" src="http://via.placeholder.com/200x200/666666">
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>


					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-TmnyBox2ImgxsCtaSect", {
          label: opt.TmnyBox2ImgxsCtaSectModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmnybx-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">

										<div class="card-body" data-gjs-custom-name="Card Body">
								  	  	  <img class="card-img-top img-fluid dhx-img-xs rounded-circle mb-3"  alt="Image Alt" src="http://via.placeholder.com/200x200/666666">
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <img class="card-img-top img-fluid dhx-img-xs rounded-circle mb-3"  alt="Image Alt" src="http://via.placeholder.com/200x200/666666">
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
								</div>
						  	</div>

					   </div>

					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-TmnyBox2Video", {
          label: opt.TmnyBox2VideoModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmnybx-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">

								  	  	<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class=" embed-responsive embed-responsive-16by9 mx-md-auto mb-3">
												<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
										  </div>
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class=" embed-responsive embed-responsive-16by9 mx-md-auto mb-3">
												<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
										  </div>
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>


					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-TmnyBox2VideoCtaSect", {
          label: opt.TmnyBox2VideoCtaSectModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmnybx-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">

								  	  	<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class=" embed-responsive embed-responsive-16by9 mx-md-auto mb-3">
												<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
										  </div>
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>

									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class=" embed-responsive embed-responsive-16by9 mx-md-auto mb-3">
												<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
										  </div>
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

 //
        //////////// 03 Testimony Box ///////////
        bm.add("module-TmnyBox3Imglg", {
          label: opt.TmnyBox3ImglgModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmnybx-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
									  	  <img class="card-img mb-3"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">

										<div class="card-body" data-gjs-custom-name="Card Body">
									  	   <img class="card-img mb-3"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <img class="card-img mb-3"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
								  	  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>


					</div>
                </section>
                  `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-TmnyBox3ImglgCtaSect", {
          label: opt.TmnyBox3ImglgCtaSectModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmnybx-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
									  	  <img class="card-img mb-3"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">

										<div class="card-body" data-gjs-custom-name="Card Body">
									  	   <img class="card-img mb-3"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <img class="card-img mb-3"  alt="Image Alt" src="http://via.placeholder.com/350x200/666666">
								  	  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>

					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-TmnyBox3Imgxs", {
          label: opt.TmnyBox3ImgxsModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmnybx-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">

										<div class="card-body" data-gjs-custom-name="Card Body">
								  	  	  <img class="card-img-top img-fluid dhx-img-xs rounded-circle mb-3"  alt="Image Alt" src="http://via.placeholder.com/100x100/666666">
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>

									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <img class="card-img-top img-fluid dhx-img-xs rounded-circle mb-3"  alt="Image Alt" src="http://via.placeholder.com/100x100/666666">
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
								  	  	  <img class="card-img-top img-fluid dhx-img-xs rounded-circle mb-3"  alt="Image Alt" src="http://via.placeholder.com/100x100/666666">
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Vestibulum ac diam lacinia, gravida augue ac, mollis dolor. Suspendisse blandit metus lectus, eu vulputate felis egestas sit amet. In a tincidunt nisl, non finibus tellus.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>


					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-TmnyBox3ImgxsCtaSect", {
          label: opt.TmnyBox3ImgxsCtaSectModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmnybx-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">

										<div class="card-body" data-gjs-custom-name="Card Body">
								  	  	  <img class="card-img-top img-fluid dhx-img-xs rounded-circle mb-3"  alt="Image Alt" src="http://via.placeholder.com/100x100/666666">
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <img class="card-img-top img-fluid dhx-img-xs rounded-circle mb-3"  alt="Image Alt" src="http://via.placeholder.com/100x100/666666">
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
								  	  	  <img class="card-img-top img-fluid dhx-img-xs rounded-circle mb-3"  alt="Image Alt" src="http://via.placeholder.com/100x100/666666">
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Vestibulum ac diam lacinia, gravida augue ac, mollis dolor. Suspendisse blandit metus lectus, eu vulputate felis egestas sit amet. In a tincidunt nisl, non finibus tellus.</p>
										</div>
									  </div>
								</div>
						  	</div>

					   </div>

					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-TmnyBox3Video", {
          label: opt.TmnyBox3VideoModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmnybx-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">

								  	  	<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class=" embed-responsive embed-responsive-16by9 mx-md-auto mb-3">
												<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
										  </div>
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class=" embed-responsive embed-responsive-16by9 mx-md-auto mb-3">
												<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
										  </div>
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class=" embed-responsive embed-responsive-16by9 mx-md-auto mb-3">
												<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
										  </div>
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Vestibulum ac diam lacinia, gravida augue ac, mollis dolor. Suspendisse blandit metus lectus, eu vulputate felis egestas sit amet. In a tincidunt nisl, non finibus tellus.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>


					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-TmnyBox3VideoCtaSect", {
          label: opt.TmnyBox3VideoCtaSectModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmnybx-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">

								  	  	<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class=" embed-responsive embed-responsive-16by9 mx-md-auto mb-3">
												<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
										  </div>
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>

									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class=" embed-responsive embed-responsive-16by9 mx-md-auto mb-3">
												<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
										  </div>
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class=" embed-responsive embed-responsive-16by9 mx-md-auto mb-3">
												<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
										  </div>
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Vestibulum ac diam lacinia, gravida augue ac, mollis dolor. Suspendisse blandit metus lectus, eu vulputate felis egestas sit amet. In a tincidunt nisl, non finibus tellus.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

 //
        //////////// 04 Testimony Box ///////////
        bm.add("module-TmnyBox4Imglg", {
          label: opt.TmnyBox4ImglgModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmnybx-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
									  	  <img class="card-img mb-3"  alt="Image Alt" src="http://via.placeholder.com/500x280/666666">
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
									  	   <img class="card-img mb-3"  alt="Image Alt" src="http://via.placeholder.com/500x280/666666">
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-lg-4" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
									  	  <img class="card-img mb-3"  alt="Image Alt" src="http://via.placeholder.com/500x280/666666">
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
									  	   <img class="card-img mb-3"  alt="Image Alt" src="http://via.placeholder.com/500x280/666666">
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>


					</div>
                </section>
                  `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-TmnyBox4ImglgCtaSect", {
          label: opt.TmnyBox4ImglgCtaSectModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `                <section class="d-flex align-items-center dhx-bg-gray1 dhx-tmnybx-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
									  	  <img class="card-img mb-3"  alt="Image Alt" src="http://via.placeholder.com/500x280/666666">
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">

										<div class="card-body" data-gjs-custom-name="Card Body">
									  	   <img class="card-img mb-3"  alt="Image Alt" src="http://via.placeholder.com/500x280/666666">
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-lg-4" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
									  	  <img class="card-img mb-3"  alt="Image Alt" src="http://via.placeholder.com/500x280/666666">
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">

										<div class="card-body" data-gjs-custom-name="Card Body">
									  	   <img class="card-img mb-3"  alt="Image Alt" src="http://via.placeholder.com/500x280/666666">
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>

					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-TmnyBox4Imgxs", {
          label: opt.TmnyBox4ImgxsModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmnybx-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
								  	  	  <img class="card-img-top img-fluid dhx-img-xs rounded-circle mb-3"  alt="Image Alt" src="http://via.placeholder.com/200x200/666666">
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>

									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <img class="card-img-top img-fluid dhx-img-xs rounded-circle mb-3"  alt="Image Alt" src="http://via.placeholder.com/200x200/666666">
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>
					  <div class="row align-items-start justify-content-center mt-lg-4" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
								  	  	  <img class="card-img-top img-fluid dhx-img-xs rounded-circle mb-3"  alt="Image Alt" src="http://via.placeholder.com/200x200/666666">
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <img class="card-img-top img-fluid dhx-img-xs rounded-circle mb-3"  alt="Image Alt" src="http://via.placeholder.com/200x200/666666">
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-TmnyBox4ImgxsCtaSect", {
          label: opt.TmnyBox4ImgxsCtaSectModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmnybx-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">

										<div class="card-body" data-gjs-custom-name="Card Body">
								  	  	  <img class="card-img-top img-fluid dhx-img-xs rounded-circle mb-3"  alt="Image Alt" src="http://via.placeholder.com/200x200/666666">
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <img class="card-img-top img-fluid dhx-img-xs rounded-circle mb-3"  alt="Image Alt" src="http://via.placeholder.com/200x200/666666">
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
								</div>
						  	</div>

					   </div>

					   <div class="row align-items-start justify-content-center mt-lg-4" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">

										<div class="card-body" data-gjs-custom-name="Card Body">
								  	  	  <img class="card-img-top img-fluid dhx-img-xs rounded-circle mb-3"  alt="Image Alt" src="http://via.placeholder.com/200x200/666666">
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <img class="card-img-top img-fluid dhx-img-xs rounded-circle mb-3"  alt="Image Alt" src="http://via.placeholder.com/200x200/666666">
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
								</div>
						  	</div>

					   </div>

					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-TmnyBox4Video", {
          label: opt.TmnyBox4VideoModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmnybx-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">

								  	  	<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class=" embed-responsive embed-responsive-16by9 mx-md-auto mb-3">
												<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
										  </div>
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class=" embed-responsive embed-responsive-16by9 mx-md-auto mb-3">
												<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
										  </div>
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-lg-4" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">

								  	  	<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class=" embed-responsive embed-responsive-16by9 mx-md-auto mb-3">
												<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
										  </div>
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>
									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class=" embed-responsive embed-responsive-16by9 mx-md-auto mb-3">
												<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
										  </div>
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Donec ac odio placerat mauris rutrum eleifend. Cras at arcu arcu. Aenean luctus, mi vitae luctus vestibulum.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>


					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-TmnyBox4VideoCtaSect", {
          label: opt.TmnyBox4VideoCtaSectModuleBlkLabel,
          category: opt.categoryTmnyModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-tmnybx-sect" data-gjs-custom-name="Section - Testimony">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row align-items-start justify-content-center" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">

								  	  	<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class=" embed-responsive embed-responsive-16by9 mx-md-auto mb-3">
												<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
										  </div>
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>

									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class=" embed-responsive embed-responsive-16by9 mx-md-auto mb-3">
												<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
										  </div>
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-lg-4" data-gjs-custom-name="Row">
							<div class="col-12" data-gjs-custom-name="Testimony Card Container">
								<div class="card-deck text-center" data-gjs-custom-name="Testimony Cards">
									  <div class="card" data-gjs-custom-name="Card">

								  	  	<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class=" embed-responsive embed-responsive-16by9 mx-md-auto mb-3">
												<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
										  </div>
									  	  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">In eleifend blandit scelerisque. In imperdiet lorem ante, porta venenatis risus fermentum eget. Nullam quis justo non nisi vulputate malesuada. Integer dapibus augue.</p>
										</div>
									  </div>

									  <div class="card" data-gjs-custom-name="Card">
										<div class="card-body" data-gjs-custom-name="Card Body">
										  <div class=" embed-responsive embed-responsive-16by9 mx-md-auto mb-3">
												<iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
										  </div>
										  <p class="dhx-team-name mb-0">Name Surname</p>
									  	  <p class="dhx-team-position">Company/Position</p>
										  <p class="card-text">Cras ut commodo mi. Curabitur ac placerat orci. Donec et ipsum scelerisque, auctor lorem id, accumsan libero. Sed eleifend neque sit amet lorem convallis fringilla.</p>
										</div>
									  </div>
								</div>
						  	</div>
					  </div>

					  <div class="row align-items-start justify-content-center mt-3" data-gjs-custom-name="Row">
						<div class="col-12 text-center" data-gjs-custom-name="Button Column">
							<hr class="mb-3">
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        //
        //////////// Video Sections ///////////

        bm.add("module-VidContVideoC", {
          label: opt.VidContVideoCModuleBlkLabel,
          category: opt.categoryModulesContent,
          content: `<section class="d-flex align-items-center" data-gjs-custom-name="Section - Video">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
							<div class="col-12 col-md-9 col-lg-7 col-xl-6 mx-auto text-center" data-gjs-custom-name="Column">
								<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 mx-md-auto">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
								</div>

							</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-VidContVideoCCta", {
          label: opt.VidContVideoCCtaModuleBlkLabel,
          category: opt.categoryModulesContent,
          content: `<section class="d-flex align-items-center" data-gjs-custom-name="Section - Video">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
							<div class="col-12 col-md-9 col-lg-7 col-xl-6 mx-auto text-center" data-gjs-custom-name="Column">
								<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 mx-md-auto">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
								</div>
								<div class="dhx-w100 mt-4" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-secondary" data-gjs-custom-name="Button">Call to Action</a>
								</div>


							</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-VidContVideoCH1P", {
          label: opt.VidContVideoCH1PModuleBlkLabel,
          category: opt.categoryModulesContent,
          content: `<section class="d-flex align-items-center" data-gjs-custom-name="Section - Video">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
							<div class="col-12 col-md-9 col-lg-7 col-xl-6 mx-auto text-center" data-gjs-custom-name="Column">
								<h2>A Subtitle</h2>
							  	<p>Ut nec pulvinar massa. Cras sagittis nisl tellus, at sollicitudin magna consectetur et. Nullam luctus, purus eget pulvinar dapibus, lacus tellus finibus justo, nec porta nulla ante ac dui. Pellentesque malesuada bibendum risus.</p>
							  	<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 mx-md-auto my-4">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
								</div>

							</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-VidContVideoCH1PCta", {
          label: opt.VidContVideoCH1PCtaModuleBlkLabel,
          category: opt.categoryModulesContent,
          content: `<section class="d-flex align-items-center" data-gjs-custom-name="Section - Video">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 1 Col">
					  <div class="row" data-gjs-custom-name="Row">
							<div class="col-12 col-md-9 col-lg-7 col-xl-6 mx-auto text-center" data-gjs-custom-name="Column">
								<h2>A Subtitle</h2>
							  	<p>Ut nec pulvinar massa. Cras sagittis nisl tellus, at sollicitudin magna consectetur et. Nullam luctus, purus eget pulvinar dapibus, lacus tellus finibus justo, nec porta nulla ante ac dui. Pellentesque malesuada bibendum risus.</p>
							  	<div data-gjs-custom-name="Video Box" class="embed-responsive embed-responsive-16by9 mx-md-auto my-4">
								  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
								</div>
								<div class="dhx-w100 py-1" data-gjs-custom-name="Buttons Container">
									<a href="#" class="btn btn-secondary" data-gjs-custom-name="Button">Call to Action</a>
								</div>


							</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-VidContVideoLH1P", {
          label: opt.VidContVideoLH1PModuleBlkLabel,
          category: opt.categoryModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-sect-mediacont" data-gjs-custom-name="Section - Content">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col 1/2">
					  <div class="row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 col-md-6 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<div class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto" data-gjs-custom-name="Video Box">
							  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
					  	</div>

						<div class="col-12 col-md-6 mx-auto text-center text-md-left" data-gjs-custom-name="Column - Content Body">
							<h2>A Subtitle</h2>
							<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec laoreet ligula nec ex porta, eu sollicitudin est dignissim. Nulla suscipit sagittis aliquam. Morbi suscipit nisi blandit tellus laoreet, vel laoreet neque eleifend. Nulla ut nulla nunc. Phasellus aliquam elementum risus. Ut et facilisis eros, quis porttitor sapien. Vestibulum vehicula eros ut metus elementum convallis. Etiam iaculis quis odio id hendrerit. Donec aliquam sit amet augue eget luctus. Duis quis molestie purus. Curabitur suscipit, ex vel tristique semper, risus sem viverra diam, et lacinia velit ante nec libero. Maecenas ut blandit risus.</p>
						</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-VidContVideoLH1PCta", {
          label: opt.VidContVideoLH1PCtaModuleBlkLabel,
          category: opt.categoryModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-sect-mediacont" data-gjs-custom-name="Section - Content">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col 1/2">
					  <div class="row align-items-center" data-gjs-custom-name="Row">

						<div class="col-12 col-md-6 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<div class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto" data-gjs-custom-name="Video Box">
							  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
					  	</div>

						<div class="col-12 col-md-6 mx-auto text-center text-md-left" data-gjs-custom-name="Column - Content Body">
							<h2>A Subtitle</h2>
							<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec laoreet ligula nec ex porta, eu sollicitudin est dignissim. Nulla suscipit sagittis aliquam. Morbi suscipit nisi blandit tellus laoreet, vel laoreet neque eleifend. Nulla ut nulla nunc. Phasellus aliquam elementum risus. Ut et facilisis eros, quis porttitor sapien. Vestibulum vehicula eros ut metus elementum convallis. Etiam iaculis quis odio id hendrerit. Donec aliquam sit amet augue eget luctus. Duis quis molestie purus. Curabitur suscipit, ex vel tristique semper, risus sem viverra diam, et lacinia velit ante nec libero. Maecenas ut blandit risus.</p>
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-VidContVideoRH1P", {
          label: opt.VidContVideoRH1PModuleBlkLabel,
          category: opt.categoryModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-sect-mediacont" data-gjs-custom-name="Section - Content">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col 1/2">
					  <div class="row align-items-center flex-column-reverse flex-md-row" data-gjs-custom-name="Row">


						<div class="col-12 col-md-6 mx-auto text-center text-md-left" data-gjs-custom-name="Column - Content Body">
							<h2>A Subtitle</h2>
							<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec laoreet ligula nec ex porta, eu sollicitudin est dignissim. Nulla suscipit sagittis aliquam. Morbi suscipit nisi blandit tellus laoreet, vel laoreet neque eleifend. Nulla ut nulla nunc. Phasellus aliquam elementum risus. Ut et facilisis eros, quis porttitor sapien. Vestibulum vehicula eros ut metus elementum convallis. Etiam iaculis quis odio id hendrerit. Donec aliquam sit amet augue eget luctus. Duis quis molestie purus. Curabitur suscipit, ex vel tristique semper, risus sem viverra diam, et lacinia velit ante nec libero. Maecenas ut blandit risus.</p>
						</div>
						<div class="col-12 col-md-6 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<div class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto" data-gjs-custom-name="Video Box">
							  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
					  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

        bm.add("module-VidContVideoRH1PCta", {
          label: opt.VidContVideoRH1PCtaModuleBlkLabel,
          category: opt.categoryModulesContent,
          content: `<section class="d-flex align-items-center dhx-bg-gray1 dhx-sect-mediacont" data-gjs-custom-name="Section - Content">
					<div class="container py-5" data-gjs-custom-name="Boxed Container - 2 Col 1/2">
					  <div class="row align-items-center flex-column-reverse flex-md-row" data-gjs-custom-name="Row">


						<div class="col-12 col-md-6 mx-auto text-center text-md-left" data-gjs-custom-name="Column - Content Body">
							<h2>A Subtitle</h2>
							<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec laoreet ligula nec ex porta, eu sollicitudin est dignissim. Nulla suscipit sagittis aliquam. Morbi suscipit nisi blandit tellus laoreet, vel laoreet neque eleifend. Nulla ut nulla nunc. Phasellus aliquam elementum risus. Ut et facilisis eros, quis porttitor sapien. Vestibulum vehicula eros ut metus elementum convallis. Etiam iaculis quis odio id hendrerit. Donec aliquam sit amet augue eget luctus. Duis quis molestie purus. Curabitur suscipit, ex vel tristique semper, risus sem viverra diam, et lacinia velit ante nec libero. Maecenas ut blandit risus.</p>
							<a href="#" class="btn btn-secondary mx-auto" data-gjs-custom-name="Button">Call to Action</a>
						</div>
						<div class="col-12 col-md-6 mx-auto mb-3 mb-md-0 text-center" data-gjs-custom-name="Column - Image">
				  			<div class="embed-responsive embed-responsive-16by9 dhx-w100 mx-md-auto" data-gjs-custom-name="Video Box">
							  <iframe  data-gjs-custom-name="Video" class="embed-responsive-item gjs-no-pointer" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="true"></iframe>
							</div>
					  	</div>
					  </div>
					</div>
                </section>
        `,
          attributes: {class: "gjs-icon-block-label icon-blocks icon-block-ModuleBoxServices1"}
        });

      // Cierro los Bloques
      };

// Exporto funcion
module.exports = init;
