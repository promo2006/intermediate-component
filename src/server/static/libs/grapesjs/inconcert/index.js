// Obtengo o defino los datos que se definen en el HTML
var templateId = templateId || "";

// Defino el preset de grapesjs
grapesjs.plugins.add("gjs-preset-inconcert", (editor, opts) => {

    // Obtengo opciones
    var c = opts || {};
    var config = editor.getConfig();
    var pfx = config.stylePrefix;

    // Valores por defecto para configuraciones
    var defaults = {
        editor,
        pfx: pfx || "",
        addBasicStyle: true,
        cmdBtnPageSett: "Configuración General",
        cmdSaveChanges: "save-changes",
        cmdDiscardChanges: "discard-changes",
        cmdBtnUndoLabel: "Deshacer (CTRL + Z)",
        cmdBtnRedoLabel: "Rehacer (CTRL + SHIFT + Z)",
        cmdBtnGeneralLabel: "All Devices",
        cmdBtnDesktopLabel: "Desktop",
        cmdBtnTabletLabel: "Tablet",
        cmdBtnMobileLabel: "Mobile",
        cmdBtnMobileXSLabel: "Mobile XS",

        settingsModalTitle: "Configuración General",

        modalTitleSaveChanges: "Guardar cambios",
        modalTitleDiscardChanges: "Descartar y Cerrar",
        codeViewerTheme: "hopscotch",
        openBlocksBtnTitle: c.openBlocksBtnTitle || "Bloques",
        openLayersBtnTitle: c.openLayersBtnTitle || "Capas",
        openSmBtnTitle: c.openSmBtnTitle || "Estilos",
        openTmBtnTitle: c.openTmBtnTitle || "Ajustes",
        expTplBtnTitle: c.expTplBtnTitle || "Ver código",
        fullScrBtnTitle: c.fullScrBtnTitle || "Pantalla completa",
        swichtVwBtnTitle: c.swichtVwBtnTitle || "Ver componentes",
        previewBtnTitle: c.previewBtnTitle || "Vista previa",
        categoryBoxedLabel: c.categoryBoxedLabel || "Boxed Container",
        categoryNavbarBoxed: c.categoryNavbarBoxed || "Navbar - Boxed",
        categoryFullWidthLabel: c.categoryFullWidthLabel || "Full Width Container",
        categoryNavbarFullWidth: c.categoryNavbarFullWidth || "Navbar - Full Width",
        Forms: c.Forms || "Form2",
        categoryMedia: c.categoryMedia || "Media",
        categoryForm: c.categoryForm || "Form",
        categoryFormComp: c.categoryFormComp || "Form Components",
        categoryExtras: c.categoryExtras || "Extras",
        categoryHeader: c.categoryHeader || "Header",
        categoryContent: c.categoryContent || "Content",
        categoryMobileContent: c.categoryMobileContent || "Mobile-Only Content",
        categoryList: c.categoryList || "Lists & Tables",
        categoryModulesIntro: c.categoryModulesIntro || "Modules Intro",
        categoryIntroCTAModulesContent: c.categoryIntroCTAModulesContent || "Modules - Intro + Call To Action",
        categoryIntroFormModulesContent: c.categoryIntroFormModulesContent || "Modules - Intro + Form",
        categoryIntroSusFormModulesContent: c.categoryIntroSusFormModulesContent || "Modules - Intro + Suscribe Form",
        categoryModulesContent: c.categoryModulesContent || "Modules - Content",
        categoryHltModulesContent: c.categoryHltModulesContent || "Modules - Highlights",
        categoryBftModulesContent: c.categoryBftModulesContent || "Modules - Benefits",
        categoryTmnyModulesContent: c.categoryTmnyModulesContent || "Modules - Testimony",
        categoryCtaModulesContent: c.categoryCtaModulesContent || "Modules - Call To Action",
        categoryIcons: c.categoryIcons || "Icons",
        defaultTemplate: "", // Default template in case the canvas is empty
        inlineCss: 1,

        labelSelectOption: "Select main option",
        labelSelectOptionValue: "MainOptValue",
        labelOption: "Option",
        labelOptionValue: "OptValue",

        //tableStyle: {height: "150px",  margin: "0 auto 10px auto",     padding: "5px 5px 5px 5px",      width: "100%"        },
        //cellStyle: {padding: "8px", "line-height": "1.42857143", "vertical-align": "top", "border-top": "1px solid #ddd"},
        sect100BlkLabel: "1 Column",
        sect12BlkLabel: "2 Columns",
        sect13BlkLabel: "3 Columns",
        sect14BlkLabel: "4 Columns",
        sect37BlkLabel: "3/7 - 2 Columns",
        sect73BlkLabel: "7/3 - 2 Columns",
        sect28BlkLabel: "2/8 - 2 Columns",
        sect82BlkLabel: "8/2 - 2 Columns",
        sect262BlkLabel: "2/6/2 Columns",
        sectfull100BlkLabel: "1 Column",
        sectfull12BlkLabel: "2 Columns",
        sectfull13BlkLabel: "3 Columns",
        sectfull14BlkLabel: "4 Columns",
        sectfull37BlkLabel: "3/7 - 2 Columns",
        sectfull73BlkLabel: "7/3 - 2 Columns",
        sectfull28BlkLabel: "2/8 - 2 Columns",
        sectfull82BlkLabel: "8/2 - 2 Columns",
        sectfull262BlkLabel: "2/6/2 Columns",

        imageBlkLabel: "Image",
        videoBlkLabel: "Video",
        mapBlkLabel: "Map",
        countdownBlkLabel: "Countdown",
        labelDays: "days",
        labelHours: "hours",
        labelMinutes: "minutes",
        labelSeconds: "seconds",

        pfxCountdown: "countdown",

        basicFormBlkLabel: "Basic form",
        fullFormBlkLabel: "Full form",
        contactFormBlkLabel: "Contact form",
        phoneFormBlkLabel: "Phone Form",
        phoneFormInlineBlkLabel: "Phone Inline Form",
        phoneEmailFormInlineBlkLabel: "Phone+Email Inline Form",
        phoneFormTitleH4: "Enter your phone number - we call you!",
        FormTitleContainer: "Form Title Container",
        contactFormTitleH4: "Contact Us",
        contactFormTextp: "Send us a message and we'll respond as soon as possible.",
        labelBlkLabel: "label",
        inputBlkLabel: "input",

        inputEmailBlkLabel: "email",
        inputTitleBlkLabel: "title",
        inputFirstNameBlkLabel: "first name",
        inputLastNameBlkLabel: "last name",
        inputCompanyBlkLabel: "company",
        inputPositionBlkLabel: "position",
        inputPhoneBlkLabel: "phone",
        inputMobileBlkLabel: "mobile",
        inputFaxBlkLabel: "fax",
        inputWebsiteBlkLabel: "website",
        inputAddress1BlkLabel: "address1",
        inputAddress2BlkLabel: "address2",
        inputCountryBlkLabel: "country",
        inputStateBlkLabel: "state",
        inputCityBlkLabel: "city",
        inputZipBlkLabel: "zip",
        inputFacebookBlkLabel: "facebook",
        inputTwitterBlkLabel: "twitter",
        inputSkpeBlkLabel: "skype",
        inputGooglePBlkLabel: "googlePlus",
        inputLinkedinBlkLabel: "linkedin",
        inputInstagramBlkLabel: "instagram",

        inputBlkLabel: "terms",

        inputLanguageBlkLabel: "Language",

        textareaBlkLabel: "Textarea",
        selectBlkLabel: "Select",
        checkboxBlkLabel: "Checkbox",
        checkboxTermsBlkLabel: "Checkbox Terms",
        radiobtnBlkLabel: "Radio",
        buttonSendBlkLabel: "Button Send",
        buttonResetBlkLabel: "Button Reset",

        navSimplePhoneBoxedBlkLabel: "Navbar with Phone",
        navSimplePhoneFWBlkLabel: "Navbar with Phone",
        navFormFWBlkLabel: "Navbar with Form",
        navFormBoxedBlkLabel: "Navbar with Form",
        navMenuRFWBlkLabel: "Navbar Align Right",
        navMenuRBoxedBlkLabel: "Navbar Align Right",
        navMenuLFWBlkLabel: "Navbar Align Left",
        navMenuLBoxedBlkLabel: "Navbar Align Left",
        buttonNavbarBlkLabel: "Navbar Button",
        addressFwNavbarBlkLabel: "Top Address Bar",
        addressBoxedNavbarBlkLabel: "Top Address Bar",

        HtmlCodeBlkLabel: "Html Code",
        IconBlkLabel: "Icon",
        BoxDivSectionBlkLabel: "Box",
        BoxedbannerSectionBlkLabel: "Boxed Banner",
        FullWidthbannerSectionBlkLabel: "Full Width Banner",
        textBlkLabel: "Text",
        textSectionBlkLabel: "Text Block",
        panelSectionBlkLabel: "Panel",
        panelHeadBlkLabel: "Panel Head",
        panelBodyBlkLabel: "Panel Body",
        panelFooterBlkLabel: "Panel Footer",
        cardSectionBlkLabel: "Card",
        cardHeadBlkLabel: "Card Head",
        cardBodyBlkLabel: "Card Body",
        cardFooterBlkLabel: "Card Footer",
        cardsSectionBlkLabel: "Cards",
        quoteBlkLabel: "Quote",
        buttonPrimaryBlkLabel: "Button Primary",
        buttonSecondaryBlkLabel: "Button Secondary",
        linkBlkLabel: "Link",
        linkBlockBlkLabel: "Link Block",
        dividerBlkLabel: "Divider",
        phoneNumberBlkLabel: "Phone Number",
        phoneLinkBlkLabel: "Phone Link",
        routedPhoneNumberBlkLabel: "Routed Phone Number",
        routedPhoneLinkBlkLabel: "Routed Phone Link",

        mobileC2CNavbarBlkLabel: "Fixed Mobile C2C",
        mobileFormBlkLabel: "Mobile Basic Form",
        //basicModalBlkLabel: "Basic Modal",

        listOrderedBlkLabel: "Ordered List",
        listUnorderedBlkLabel: "Unordered List",
        listUnstyledBlkLabel: "Unstyled List",
        listInlineBlkLabel: "Inline List",
        listDescriptionBlkLabel: "Description List",
        listItemsBlkLabel: "List Item",
        listInlineItemsBlkLabel: "List Inline Item",
        listDescItemsBlkLabel: "Description List Item",
        listMediaBlkLabel: "Media List",
        listMediaItemBlkLabel: "Media List Item",

        tableBlkLabel: "Table",
        //tableRowBlkLabel: "Table Row",
        //tableCellTitleBlkLabel: "Table Cell Title",
        //tableCellBlkLabel: "Table Cell",

        chevronUpSectionBlkLabel: "Chevron Up",
        chevronDownSectionBlkLabel: "Chevron Down",
        chevronRightSectionBlkLabel: "Chevron Right",
        chevronLeftSectionBlkLabel: "Chevron Left",
        angleDoubleUpSectionBlkLabel: "Angle Double Up",
        angleDoubleDownSectionBlkLabel: "Angle Double Down",
        angleDoubleRightSectionBlkLabel: "Angle Double Right",
        angleDoubleLeftSectionBlkLabel: "Angle Double Left",
        checkmarkSectionBlkLabel: "Checkmark",
        closeSectionBlkLabel: "Close",
        copyrightSectionBlkLabel: "Copyright",
        infoSectionBlkLabel: "Info",
        infoCircleSectionBlkLabel: "Info Circle",
        mapSectionBlkLabel: "Map",
        mapMarkerSectionBlkLabel: "Map Marker",
        mapPinSectionBlkLabel: "Map Pin",
        plusSectionBlkLabel: "Plus",
        questionSectionBlkLabel: "Question",
        questionCircleSectionBlkLabel: "Question Circle",
        phoneSectionBlkLabel: "Phone",
        wifiSectionBlkLabel: "Wifi",
        facebookSectionBlkLabel: "Facebook",
        googleSectionBlkLabel: "Google",
        googlePlusSectionBlkLabel: "Google Plus",
        pinterestSectionBlkLabel: "Pinterest",
        skypeSectionBlkLabel: "Skype",
        spotifySectionBlkLabel: "Spotify",
        vimeoSectionBlkLabel: "Vimeo",
        twitterSectionBlkLabel: "Twitter",
        youtubeSectionBlkLabel: "Youtube",
        whatsappSectionBlkLabel: "Whatsapp",

        // quienesModuleBlkLabel: "About Us",
        // services01ModuleBlkLabel: "Services",

        // intro01ModuleBlkLabel: "3/4 Fold Right Form",
        // intro02ModuleBlkLabel: "Full Fold Bottom Form",
        // intro03ModuleBlkLabel: "3/4 Fold w/form",
        // intro04ModuleBlkLabel: "3/4 Fold w/CTAs",
        // intro01bModuleBlkLabel: "Boxed Right Form",
        // intro05ModuleBlkLabel: "Full Image w/video",

        //Modules Intro - CTA
        // 1 CTA
        Intro1CTACModuleBlkLabel: "Intro 1-CTA Center",
        Intro1CTACBGIModuleBlkLabel: "Intro 1-CTA Center + Bckrd Img",
        Intro1CTACIMGModuleBlkLabel: "Intro 1-CTA Center + Boxed Bckgrd Img",
        Intro1CTACH1IMGModuleBlkLabel: "Intro 1-CTA Center + Img",
        Intro1CTACH1IMGBGIModuleBlkLabel: "Intro 1-CTA Center + Img + Bckrd Img",
        Intro1CTACVIDModuleBlkLabel: "Intro 1-CTA Center + Video",
        Intro1CTACVIDBGIModuleBlkLabel: "Intro 1-CTA Center + Video + Bckrd Img",

        Intro1CTALModuleBlkLabel: "Intro 1-CTA Left",
        Intro1CTALBGIModuleBlkLabel: "Intro 1-CTA Left + Bckrd Img",
        Intro1CTALIMGModuleBlkLabel: "Intro 1-CTA Left + Boxed Bckgrd Img",
        Intro1CTALH1IMGModuleBlkLabel: "Intro 1-CTA Left + Img",
        Intro1CTALH1IMGBGIModuleBlkLabel: "Intro 1-CTA Left + Img + Bckrd Img",
        Intro1CTALVIDModuleBlkLabel: "Intro 1-CTA Left + Video",
        Intro1CTALVIDBGIModuleBlkLabel: "Intro 1-CTA Left + Video + Bckrd Img",

        Intro1CTARModuleBlkLabel: "Intro 1-CTA Right",
        Intro1CTARBGIModuleBlkLabel: "Intro 1-CTA Right + Bckrd Img",
        Intro1CTARIMGModuleBlkLabel: "Intro 1-CTA Right + Boxed Bckgrd Img",
        Intro1CTARH1IMGModuleBlkLabel: "Intro 1-CTA Right + Img",
        Intro1CTARH1IMGBGIModuleBlkLabel: "Intro 1-CTA Right + Img + Bckrd Img",
        Intro1CTARVIDModuleBlkLabel: "Intro 1-CTA Right + Video",
        Intro1CTARVIDBGIModuleBlkLabel: "Intro 1-CTA Right + Video + Bckrd Img",

        // 2 CTA
        Intro2CTACModuleBlkLabel: "Intro 2-CTA Center",
        Intro2CTACBGIModuleBlkLabel: "Intro 2-CTA Center + Bckrd Img",
        Intro2CTACIMGModuleBlkLabel: "Intro 2-CTA Center + Boxed Bckgrd Img",
        Intro2CTACH1IMGModuleBlkLabel: "Intro 2-CTA Center + Img",
        Intro2CTACH1IMGBGIModuleBlkLabel: "Intro 2-CTA Center + Img + Bckrd Img",

        Intro2CTALModuleBlkLabel: "Intro 2-CTA Left",
        Intro2CTALBGIModuleBlkLabel: "Intro 2-CTA Left + Bckrd Img",
        Intro2CTALIMGModuleBlkLabel: "Intro 2-CTA Left + Boxed Bckgrd Img",
        Intro2CTALH1IMGModuleBlkLabel: "Intro 2-CTA Left + Img",
        Intro2CTALH1IMGBGIModuleBlkLabel: "Intro 2-CTA Left + Img + Bckrd Img",

        Intro2CTARModuleBlkLabel: "Intro 2-CTA Right",
        Intro2CTARBGIModuleBlkLabel: "Intro 2-CTA Right + Bckrd Img",
        Intro2CTARIMGModuleBlkLabel: "Intro 2-CTA Right + Boxed Bckgrd Img",
        Intro2CTARH1IMGModuleBlkLabel: "Intro 2-CTA Right + Img",
        Intro2CTARH1IMGBGIModuleBlkLabel: "Intro 2-CTA Right + Img + Bckrd Img",

        //Modules Intro - FORM
        // 2 Form
        Intro1FORMCModuleBlkLabel: "Intro 1-Form Center",
        Intro1FORMCBGIModuleBlkLabel: "Intro 1-Form Center + Bckrd Img",

        Intro1FORMLBGIModuleBlkLabel: "Intro 1-Form Left + Bckrd Img",
        Intro1FORMLIMGModuleBlkLabel: "Intro 1-Form Left + Boxed Bckgrd Img",
        Intro1FORMLH1IMGModuleBlkLabel: "Intro 1-Form Left + Img",
        Intro1FORMLH1IMGBGIModuleBlkLabel: "Intro 1-Form Left + Img + Bckrd Img",
        Intro1FORMLVIDModuleBlkLabel: "Intro 1-Form Left + Video",
        Intro1FORMLVIDBGIModuleBlkLabel: "Intro 1-Form Left + Video + Bckrd Img",

        Intro1FORMRBGIModuleBlkLabel: "Intro 1-Form Right + Bckrd Img",
        Intro1FORMRIMGModuleBlkLabel: "Intro 1-Form Right + Boxed Bckgrd Img",
        Intro1FORMRH1IMGModuleBlkLabel: "Intro 1-Form Right + Img",
        Intro1FORMRH1IMGBGIModuleBlkLabel: "Intro 1-Form Right + Img + Bckrd Img",
        Intro1FORMRVIDModuleBlkLabel: "Intro 1-Form Right + Video",
        Intro1FORMRVIDBGIModuleBlkLabel: "Intro 1-Form Right + Video + Bckrd Img",

        // 4 Form
        Intro4FORMCModuleBlkLabel: "Intro 4-Form Center",
        Intro4FORMCBGIModuleBlkLabel: "Intro 4-Form Center + Bckrd Img",

        Intro4FORMLBGIModuleBlkLabel: "Intro 4-Form Left + Bckrd Img",
        Intro4FORMLIMGModuleBlkLabel: "Intro 4-Form Left + Boxed Bckgrd Img",
        Intro4FORMLH1IMGModuleBlkLabel: "Intro 4-Form Left + Img",
        Intro4FORMLH1IMGBGIModuleBlkLabel: "Intro 4-Form Left + Img + Bckrd Img",
        Intro4FORMLVIDModuleBlkLabel: "Intro 4-Form Left + Video",
        Intro4FORMLVIDBGIModuleBlkLabel: "Intro 4-Form Left + Video + Bckrd Img",

        Intro4FORML2CTABGIModuleBlkLabel: "Intro 4-Form Left + 2-CTA + Bckrd Img",
        Intro4FORML2CTAIMGModuleBlkLabel: "Intro 4-Form Left + 2-CTA + Boxed Bckgrd Img",
        Intro4FORML2CTAH1IMGModuleBlkLabel: "Intro 4-Form Left + 2-CTA + Img",
        Intro4FORML2CTAH1IMGBGIModuleBlkLabel: "Intro 4-Form Left + 2-CTA + Img + Bckrd Img",

        Intro4FORMLICOBGIModuleBlkLabel: "Intro 4-Form Left + Icons + Bckrd Img",
        Intro4FORMLICOIMGModuleBlkLabel: "Intro 4-Form Left + Icons + Boxed Bckgrd Img",
        Intro4FORMLLIBGIModuleBlkLabel: "Intro 4-Form Left + List + Bckrd Img",
        Intro4FORMLLIIMGModuleBlkLabel: "Intro 4-Form Left + List + Boxed Bckgrd Img",

        Intro4FORMRBGIModuleBlkLabel: "Intro 4-Form Right + Bckrd Img",
        Intro4FORMRIMGModuleBlkLabel: "Intro 4-Form Right + Boxed Bckgrd Img",
        Intro4FORMRH1IMGModuleBlkLabel: "Intro 4-Form Right + Img",
        Intro4FORMRH1IMGBGIModuleBlkLabel: "Intro 4-Form Right + Img + Bckrd Img",
        Intro4FORMRVIDModuleBlkLabel: "Intro 4-Form Right + Video",
        Intro4FORMRVIDBGIModuleBlkLabel: "Intro 4-Form Right + Video + Bckrd Img",

        Intro4FORMR2CTABGIModuleBlkLabel: "Intro 4-Form Right + 2-CTA + Bckrd Img",
        Intro4FORMR2CTAIMGModuleBlkLabel: "Intro 4-Form Right + 2-CTA + Boxed Bckgrd Img",
        Intro4FORMR2CTAH1IMGModuleBlkLabel: "Intro 4-Form Right + 2-CTA + Img",
        Intro4FORMR2CTAH1IMGBGIModuleBlkLabel: "Intro 4-Form Right + 2-CTA + Img + Bckrd Img",

        Intro4FORMRICOBGIModuleBlkLabel: "Intro 4-Form Right + Icons + Bckrd Img",
        Intro4FORMRICOIMGModuleBlkLabel: "Intro 4-Form Right + Icons + Boxed Bckgrd Img",
        Intro4FORMRLIBGIModuleBlkLabel: "Intro 4-Form Right + List + Bckrd Img",
        Intro4FORMRLIIMGModuleBlkLabel: "Intro 4-Form Right + List + Boxed Bckgrd Img",

        // 8 Form
        Intro8FORMCModuleBlkLabel: "Intro 8-Form Center",
        Intro8FORMCBGIModuleBlkLabel: "Intro 8-Form Center + Bckrd Img",

        Intro8FORMLBGIModuleBlkLabel: "Intro 8-Form Left + Bckrd Img",
        Intro8FORMLIMGModuleBlkLabel: "Intro 8-Form Left + Boxed Bckgrd Img",
        Intro8FORMLH1IMGModuleBlkLabel: "Intro 8-Form Left + Img",
        Intro8FORMLH1IMGBGIModuleBlkLabel: "Intro 8-Form Left + Img + Bckrd Img",
        Intro8FORMLVIDModuleBlkLabel: "Intro 8-Form Left + Video",
        Intro8FORMLVIDBGIModuleBlkLabel: "Intro 8-Form Left + Video + Bckrd Img",

        Intro8FORMRBGIModuleBlkLabel: "Intro 8-Form Right + Bckrd Img",
        Intro8FORMRIMGModuleBlkLabel: "Intro 8-Form Right + Boxed Bckgrd Img",
        Intro8FORMRH1IMGModuleBlkLabel: "Intro 8-Form Right + Img",
        Intro8FORMRH1IMGBGIModuleBlkLabel: "Intro 8-Form Right + Img + Bckrd Img",
        Intro8FORMRVIDModuleBlkLabel: "Intro 8-Form Right + Video",
        Intro8FORMRVIDBGIModuleBlkLabel: "Intro 8-Form Right + Video + Bckrd Img",

        // 1 Suscribe Form
        Intro1SFORMCModuleBlkLabel: "Intro 1-Suscribe Form Center",
        Intro1SFORMCBGIModuleBlkLabel: "Intro 1-Suscribe Form Center + Bckrd Img",
        Intro1SFORMCH1IMGModuleBlkLabel: "Intro 1-Suscribe Form Center + Img",
        Intro1SFORMCH1IMGBGIModuleBlkLabel: "Intro 1-Suscribe Form Center + Img + Bckrd Img",
        Intro1SFORMCVIDModuleBlkLabel: "Intro 1-Suscribe Form Center + Video",
        Intro1SFORMCVIDBGIModuleBlkLabel: "Intro 1-Suscribe Form Center + Video + Bckrd Img",

        Intro1SFORMLBGIModuleBlkLabel: "Intro 1-Suscribe Form Left + Bckrd Img",
        Intro1SFORMLModuleBlkLabel: "Intro 1-Suscribe Form Left",
        Intro1SFORMLH1IMGModuleBlkLabel: "Intro 1-Suscribe Form Left + Img",
        Intro1SFORMLH1IMGBGIModuleBlkLabel: "Intro 1-Suscribe Form Left + Img + Bckrd Img",
        Intro1SFORMLVIDModuleBlkLabel: "Intro 1-Suscribe Form Left + Video",
        Intro1SFORMLVIDBGIModuleBlkLabel: "Intro 1-Suscribe Form Left + Video + Bckrd Img",

        Intro1SFORMRBGIModuleBlkLabel: "Intro 1-Suscribe Form Right + Bckrd Img",
        Intro1SFORMRModuleBlkLabel: "Intro 1-Suscribe Form Right",
        Intro1SFORMRH1IMGModuleBlkLabel: "Intro 1-Suscribe Form Right + Img",
        Intro1SFORMRH1IMGBGIModuleBlkLabel: "Intro 1-Suscribe Form Right + Img + Bckrd Img",
        Intro1SFORMRVIDModuleBlkLabel: "Intro 1-Suscribe Form Right + Video",
        Intro1SFORMRVIDBGIModuleBlkLabel: "Intro 1-Suscribe Form Right + Video + Bckrd Img",

        // 2 Suscribe Form
        Intro2SFORMCModuleBlkLabel: "Intro 2-Suscribe Form Center",
        Intro2SFORMCBGIModuleBlkLabel: "Intro 2-Suscribe Form Center + Bckrd Img",
        Intro2SFORMCH1IMGModuleBlkLabel: "Intro 2-Suscribe Form Center + Img",
        Intro2SFORMCH1IMGBGIModuleBlkLabel: "Intro 2-Suscribe Form Center + Img + Bckrd Img",
        Intro2SFORMCVIDModuleBlkLabel: "Intro 2-Suscribe Form Center + Video",
        Intro2SFORMCVIDBGIModuleBlkLabel: "Intro 2-Suscribe Form Center + Video + Bckrd Img",

        Intro2SFORMLBGIModuleBlkLabel: "Intro 2-Suscribe Form Left + Bckrd Img",
        Intro2SFORMLModuleBlkLabel: "Intro 2-Suscribe Form Left",
        Intro2SFORMLH1IMGModuleBlkLabel: "Intro 2-Suscribe Form Left + Img",
        Intro2SFORMLH1IMGBGIModuleBlkLabel: "Intro 2-Suscribe Form Left + Img + Bckrd Img",
        Intro2SFORMLVIDModuleBlkLabel: "Intro 2-Suscribe Form Left + Video",
        Intro2SFORMLVIDBGIModuleBlkLabel: "Intro 2-Suscribe Form Left + Video + Bckrd Img",

        Intro2SFORMRBGIModuleBlkLabel: "Intro 2-Suscribe Form Right + Bckrd Img",
        Intro2SFORMRModuleBlkLabel: "Intro 2-Suscribe Form Right",
        Intro2SFORMRH1IMGModuleBlkLabel: "Intro 2-Suscribe Form Right + Img",
        Intro2SFORMRH1IMGBGIModuleBlkLabel: "Intro 2-Suscribe Form Right + Img + Bckrd Img",
        Intro2SFORMRVIDModuleBlkLabel: "Intro 2-Suscribe Form Right + Video",
        Intro2SFORMRVIDBGIModuleBlkLabel: "Intro 2-Suscribe Form Right + Video + Bckrd Img",

        //
        // Modules Blocks - Benefits
        Bft3IcoModuleBlkLabel: "3 Benefits icon",
        Bft3IcoCtaModuleBlkLabel: "3 Benefits icon + CTA",
        Bft3IcoH1ModuleBlkLabel: "3 Benefits icon & title",
        Bft3IcoH1CtaModuleBlkLabel: "3 Benefits icon & title + CTA",
        Bft3IcoH1PModuleBlkLabel: "3 Benefits icon & description",
        Bft3IcoH1PCtaModuleBlkLabel: "3 Benefits icon & description + CTA",

        Bft3IcoboxModuleBlkLabel: "3 Benefits boxed icon",
        Bft3IcoboxCtaModuleBlkLabel: "3 Benefits boxed icon + CTA",
        Bft3IcoboxH1ModuleBlkLabel: "3 Benefits boxed icon & title",
        Bft3IcoboxH1CtaModuleBlkLabel: "3 Benefits boxed icon & title + CTA",
        Bft3IcoboxH1PModuleBlkLabel: "3 Benefits boxed icon & description",
        Bft3IcoboxH1PCtaModuleBlkLabel: "3 Benefits boxed icon & description + CTA",

        Bft3ImgModuleBlkLabel: "3 Benefits image",
        Bft3ImgCtaModuleBlkLabel: "3 Benefits image + CTA",
        Bft3ImgH1ModuleBlkLabel: "3 Benefits image & title",
        Bft3ImgH1CtaModuleBlkLabel: "3 Benefits image & title + CTA",
        Bft3ImgH1PModuleBlkLabel: "3 Benefits image & description",
        Bft3ImgH1PCtaModuleBlkLabel: "3 Benefits image & description + CTA",

        Bft4IcoModuleBlkLabel: "4 Benefits icon",
        Bft4IcoCtaModuleBlkLabel: "4 Benefits icon + CTA",
        Bft4IcoH1ModuleBlkLabel: "4 Benefits icon & title",
        Bft4IcoH1CtaModuleBlkLabel: "4 Benefits icon & title + CTA",
        Bft4IcoH1PModuleBlkLabel: "4 Benefits icon & description",
        Bft4IcoH1PCtaModuleBlkLabel: "4 Benefits icon & description + CTA",

        Bft4IcoboxModuleBlkLabel: "4 Benefits boxed icon",
        Bft4IcoboxCtaModuleBlkLabel: "4 Benefits boxed icon + CTA",
        Bft4IcoboxH1ModuleBlkLabel: "4 Benefits boxed icon & title",
        Bft4IcoboxH1CtaModuleBlkLabel: "4 Benefits boxed icon & title + CTA",
        Bft4IcoboxH1PModuleBlkLabel: "4 Benefits boxed icon & description",
        Bft4IcoboxH1PCtaModuleBlkLabel: "4 Benefits boxed icon & description + CTA",

        Bft4ImgModuleBlkLabel: "4 Benefits image",
        Bft4ImgCtaModuleBlkLabel: "4 Benefits image + CTA",
        Bft4ImgH1ModuleBlkLabel: "4 Benefits image & title",
        Bft4ImgH1CtaModuleBlkLabel: "4 Benefits image & title + CTA",
        Bft4ImgH1PModuleBlkLabel: "4 Benefits image & description ",
        Bft4ImgH1PCtaModuleBlkLabel: "4 Benefits image & description + CTA",

        // Modules Blocks - CTABox
        CTABoxCModuleBlkLabel: "Section CTA Centered",
        CTABoxCBgImgModuleBlkLabel: "Section CTA Centered + Bg Img",
        CTABoxRModuleBlkLabel: "Section CTA Right Section",
        CTABoxRBgImgModuleBlkLabel: "Section CTA Right + Bg Img",

        // Modules Blocks - HLBOX
        HLBox2H1PModuleBlkLabel: "2 Highlight title & text",
        HLBox2IcoH1PModuleBlkLabel: "2 Highlight icon & text",
        HLBox2ImgH1PModuleBlkLabel: "2 Highlight img & text",
        HLBox2H1PBgImgModuleBlkLabel: "2 Highlight title & text + Bg Img",
        HLBox2IcoH1PBgImgModuleBlkLabel: "2 Highlight icon & text + Bg Img",

        HLBox2H1PCtaModuleBlkLabel: "2 Highlight title & text + CTA",
        HLBox2IcoH1PCtaModuleBlkLabel: "2 Highlight icon & text + CTA",
        HLBox2ImgH1PCtaModuleBlkLabel: "2 Highlight img & text + CTA",
        HLBox2H1PCtaBgImgModuleBlkLabel: "2 Highlight title & text + Bg Img + CTA",
        HLBox2IcoH1PCtaBgImgModuleBlkLabel: "2 Highlight icon & text + Bg Img + CTA",

        HLBox2H1PCtaSectModuleBlkLabel: "2 Highlight title & text + Section CTA",
        HLBox2IcoH1PCtaSectModuleBlkLabel: "2 Highlight Icon & text + Section CTA",
        HLBox2ImgH1PCtaSectModuleBlkLabel: "2 Highlight img & text + Section CTA",
        HLBox2H1PBgImgCtaSectModuleBlkLabel: "2 Highlight title & text + Bg Img + Section CTA",
        HLBox2IcoH1PBgImgCtaSectModuleBlkLabel: "2 Highlight icon & text + Bg Img + Section CTA",

        HLBox3H1PModuleBlkLabel: "3 Highlight title & text",
        HLBox3IcoH1PModuleBlkLabel: "3 Highlight icon & text",
        HLBox3ImgH1PModuleBlkLabel: "3 Highlight img & text",
        HLBox3H1PBgImgModuleBlkLabel: "3 Highlight title & text + Bg Img",
        HLBox3IcoH1PBgImgModuleBlkLabel: "3 Highlight icon & text + Bg Img",

        HLBox3H1PCtaModuleBlkLabel: "3 Highlight title & text + CTA",
        HLBox3IcoH1PCtaModuleBlkLabel: "3 Highlight icon & text + CTA",
        HLBox3ImgH1PCtaModuleBlkLabel: "3 Highlight img & text + CTA",
        HLBox3H1PCtaBgImgModuleBlkLabel: "3 Highlight title & text + Bg Img + CTA",
        HLBox3IcoH1PCtaBgImgModuleBlkLabel: "3 Highlight icon & text + Bg Img + CTA",

        HLBox3H1PCtaSectModuleBlkLabel: "3 Highlight title & text + Section CTA",
        HLBox3IcoH1PCtaSectModuleBlkLabel: "3 Highlight Icon & text + Section CTA",
        HLBox3ImgH1PCtaSectModuleBlkLabel: "3 Highlight img & text + Section CTA",
        HLBox3ImgH1PCtaSectBgModuleBlkLabel: "3 Highlight title & text + Bg Img + Section CTA",
        HLBox3ImgH1PCtaSectBgIcoModuleBlkLabel: "3 Highlight icon & text + Bg Img + Section CTA",

        HLBox4H1PModuleBlkLabel: "4 Highlight title & text",
        HLBox4IcoH1PModuleBlkLabel: "4 Highlight icon & text",
        HLBox4ImgH1PModuleBlkLabel: "4 Highlight img & text",
        HLBox4H1PBgImgModuleBlkLabel: "4 Highlight title & text + Bg Img",
        HLBox4IcoH1PBgImgModuleBlkLabel: "4 Highlight icon & text + Bg Img",

        HLBox4H1PCtaModuleBlkLabel: "4 Highlight title & text + CTA",
        HLBox4IcoH1PCtaModuleBlkLabel: "4 Highlight icon & text + CTA",
        HLBox4ImgH1PCtaModuleBlkLabel: "4 Highlight img & text + CTA",
        HLBox4H1PCtaBgImgModuleBlkLabel: "4 Highlight title & text + Bg Img + CTA",
        HLBox4IcoH1PCtaBgImgModuleBlkLabel: "4 Highlight icon & text + Bg Img + CTA",

        HLBox4H1PCtaSectModuleBlkLabel: "4 Highlight title & text + Section CTA",
        HLBox4IcoH1PCtaSectModuleBlkLabel: "4 Highlight Icon & text + Section CTA",
        HLBox4ImgH1PCtaSectModuleBlkLabel: "4 Highlight img & text + Section CTA",
        HLBox4ImgH1PCtaSectBgModuleBlkLabel: "4 Highlight title & text + Bg Img + Section CTA",
        HLBox4ImgH1PCtaSectBgIcoModuleBlkLabel: "4 Highlight icon & text + Bg Img + Section CTA",

        // Modules Blocks - Accordion
        AccordionContModuleBlkLabel: "Accordion Content",

        // Modules Blocks - ImagenContenido
        ImgContImgLModuleBlkLabel: "Image Left Content",
        ImgContImgRModuleBlkLabel: "Image Right Content",
        ImgContImgLCtaModuleBlkLabel: "Image Left Content + CTA",
        ImgContImgRCtaModuleBlkLabel: "Image Right Content + CTA",

        Tmny1ImgCCtaModuleBlkLabel: "1 Testimony Image-XS Center + CTA",
        Tmny1ImgCxsModuleBlkLabel: "1 Testimony Image-XS Center",
        Tmny1ImgLCtaModuleBlkLabel: "1 Testimony Image-LG Left + CTA",
        Tmny1ImgLlgModuleBlkLabel: "1 Testimony Image-LG Left",
        Tmny1ImgRCtaModuleBlkLabel: "1 Testimony Image-LG Right + CTA",
        Tmny1ImgRlgLModuleBlkLabel: "1 Testimony Image-LG Right",
        Tmny1VideoLModuleBlkLabel: "1 Testimony Video Left",
        Tmny1VideoLCtaModuleBlkLabel: "1 Testimony Video Left + CTA",
        Tmny1VideoRModuleBlkLabel: "1 Testimony Video Right ",
        Tmny1VideoRCtaModuleBlkLabel: "1 Testimony Video Right + CTA",

        Tmny2ImgLlgModuleBlkLabel: "2 Testimony Image-LG Left",
        Tmny2ImgLRModuleBlkLabel: "2 Testimony Image-LG",
        Tmny2ImgLRCtaSectModuleBlkLabel: "2 Testimony Image-LG + Section CTA",
        Tmny2ImgLCtaSectModuleBlkLabel: "2 Testimony Image-LG Left + Section CTA",
        Tmny2VideoLModuleBlkLabel: "2 Testimony Video Left",
        Tmny2VideoLRModuleBlkLabel: "2 Testimony Video",
        Tmny2VideoLCtaSectModuleBlkLabel: "2 Testimony Video Left + Section CTA",
        Tmny2VideoLRCtaSectModuleBlkLabel: "2 Testimony Video + Section CTA",

        TmnyBox2ImglgModuleBlkLabel: "2 Testimony Box Image-LG",
        TmnyBox2ImglgCtaSectModuleBlkLabel: "2 Testimony Box Image-LG + Section CTA",
        TmnyBox2ImgxsModuleBlkLabel: "2 Testimony Box Image-XS",
        TmnyBox2ImgxsCtaSectModuleBlkLabel: "2 Testimony Box Image-XS + Section CTA",
        TmnyBox2VideoModuleBlkLabel: "2 Testimony Box Video",
        TmnyBox2VideoCtaSectModuleBlkLabel: "2 Testimony Box Video + Section CTA",

        TmnyBox3ImglgModuleBlkLabel: "3 Testimony Box Image-LG",
        TmnyBox3ImglgCtaSectModuleBlkLabel: "3 Testimony Box Image-LG + Section CTA",
        TmnyBox3ImgxsModuleBlkLabel: "3 Testimony Box Image-XS",
        TmnyBox3ImgxsCtaSectModuleBlkLabel: "3 Testimony Box Image-XS + Section CTA",
        TmnyBox3VideoModuleBlkLabel: "3 Testimony Box Video",
        TmnyBox3VideoCtaSectModuleBlkLabel: "3 Testimony Box Video + Section CTA",

        TmnyBox4ImglgModuleBlkLabel: "4 Testimony Box Image-LG",
        TmnyBox4ImglgCtaSectModuleBlkLabel: "4 Testimony Box Image-LG + Section CTA",
        TmnyBox4ImgxsModuleBlkLabel: "4 Testimony Box Image-XS",
        TmnyBox4ImgxsCtaSectModuleBlkLabel: "4 Testimony Box Image-XS + Section CTA",
        TmnyBox4VideoModuleBlkLabel: "4 Testimony Box Video",
        TmnyBox4VideoCtaSectModuleBlkLabel: "4 Testimony Box Video + Section CTA",

        VidContVideoCModuleBlkLabel: "Video Center",
        VidContVideoCCtaModuleBlkLabel: "Video Center + CTA",
        VidContVideoCH1PModuleBlkLabel: "Video Center title&text",
        VidContVideoCH1PCtaModuleBlkLabel: "Video Center title&text + CTA",
        VidContVideoLH1PModuleBlkLabel: "Video Left title&text",
        VidContVideoLH1PCtaModuleBlkLabel: "Video Left title&text + CTA",
        VidContVideoRH1PModuleBlkLabel: "Video Left title&text",
        VidContVideoRH1PCtaModuleBlkLabel: "Video Right title&text + CTA",

        // Layer-only Labels
        sectRow: "Row",
        sectColumn: "Column",
        fullContainerLabel: "FullWidth Container",
        boxContainerLabel: "Boxed Container",
        ContainerLabel: "Container",
        navHeaderLabel: "Navbar Header",
        navBrandLabel: "Brand Logo",
        navCollapseMenuLabel: "Collapsible Menu",
        navCollapseBtnLabel: "Collapsed Menu Button",
        navMenuLabel: "Menu",
        navMenuItemLabel: "Menu Item",
        countdownEditTime: "Set Countdown Layer",
        countdownContainerLabel: "Countdown container",
        countdownDigitBoxLabel: "Countdown digit box",
        countdownDigitLabel: "Countdown digit",
        countdownTextLabel: "Countdown label",
        countdownEndTextLabel: "Countdown end text",

        FormLabel: "Form",
        FormGroupLabel: "Form Group",
        FormLabelLabel: "Label",
        FormCheckboxLabel: "Checkbox",
        FormRadioLabel: "Radio",
        FormAclarationsLabel: "Aclaration",
        FormLegendLabel: "Legend",
        checkboxBoxLabel: "Box",
        buttonLabel: "Box",

        assetsModalTitle: c.assetsModalTitle || "Seleccionar imagen",

        labelButtonName: "Button",
        labelTraitType: "Type",
        labelTypeSubmit: "Submit",
        labelTypeReset: "Reset",
        labelTypeButton: "Button",

        styleManagerSectors: [{
            name: "Visibility",
            open: false,
            buildProps: [ "display", "opacity" ],
            properties: [{
                name: "Is Visible",
                property: "display",
                type: "radio",
                defaults: "block",
                list: [
                        { value: "block", name: "Yes", title: "Show the selected element."},
                        { value: "none", name: "No", title: "Hide the selected element."}
                      ],
            }, {
                name: "Transparency",
                property: "opacity",
                type: "select",
                defaults: "1.00",
                list: [
                    { name: "100%", value: "1.00" },
                    { name: "90%", value: "0.90" },
                    { name: "80%", value: "0.80" },
                    { name: "70%", value: "0.70" },
                    { name: "60%", value: "0.60" },
                    { name: "50%", value: "0.50" },
                    { name: "40%", value: "0.40" },
                    { name: "30%", value: "0.30" },
                    { name: "20%", value: "0.20" },
                    { name: "10%", value: "0.10" },
                    { name: "8%", value: "0.08" },
                    { name: "5%", value: "0.05" },
                ],
            }],
        }, {
            name: "Position",
            open: false,
            buildProps: [ "position", "top", "right", "left", "bottom" ],
            properties: [{
                property: "position",
                //*type: "select"*/
                defaults: "static",
                list: [
                    { name: "Static", value: "static", title: "Default. Elements render in order, as they appear in the document flow." },
                    { name: "Relative", value: "relative", title: "Positioned relative to its normal position." },
                    { name: "Absolute", value: "absolute", title: "Positioned relative to its first positioned (not static) ancestor element." },
                    { name: "Sticky", value: "sticky", title: "Positioned based on the user's scroll position." },
                    { name: "Fixed", value: "fixed" , title: "Positioned relative to the browser window." }
                ],
            }],
        }, {
            name: "Dimensions And Limits",
            open: false,
            buildProps: ["width", "height", "min-width", "min-height", "max-width", "max-height" ]
        }, {
            name: "Space Between Elements",
            open: false,
            buildProps: [ "margin", "padding" ],
            properties: [{
                name: "Outer Gap",
                property: "margin",
                properties: [
                    { name: "Top", property: "margin-top" },
                    { name: "Right", property: "margin-right" },
                    { name: "Bottom", property: "margin-bottom" },
                    { name: "Left", property: "margin-left" }
                ],
            }, {
                name: "Inner Gap",
                property: "padding",
                properties: [
                    { name: "Top", property: "padding-top" },
                    { name: "Right", property: "padding-right" },
                    { name: "Bottom", property: "padding-bottom" },
                    { name: "Left", property: "padding-left" }
                ],
            }],
        }, {
            name: "Typography & Paragraphs",
            open: false,
            buildProps: ["font-family", "font-size", "font-weight", "color", "line-height", "letter-spacing", "text-align", "text-decoration", "font-style", "text-shadow"],
                properties: [
                { name: "Font Family",
                    property: "font-family",
                    list: [
                        { value: "'Roboto', sans-serif", name: "Roboto", style: "font-family:'Roboto', sans-serif" },
                        { value: "'Roboto Condensed', sans-serif", name: "Roboto Condensed", style: "font-family:'Roboto Condensed', sans-serif" },
                        { value: "'Roboto Slab', serif", name: "Roboto Slab", style: "font-family:'Roboto Slab', serif"},
                        { value: "'Open Sans', sans-serif", name: "Open Sans", style: "font-family:'Open Sans', sans-serif"},
                        { value: "'Open Sans Condensed', sans-serif", name: "Open Sans Condensed", style: "font-family:'Open Sans Condensed', sans-serif"},
                        { value: "'Source Sans Pro', sans-serif", name: "Source Sans Pro", style: "font-family:'Source Sans Pro', sans-serif"},
                        { value: "'Lato', sans-serif", name: "Lato", style: "font-family:'Lato', sans-serif"},
                        { value: "'Ubuntu', sans-serif", name: "Ubuntu", style: "font-family:'Ubuntu', sans-serif"},
                        { value: "'Ubuntu Condensed', sans-serif", name: "Ubuntu Condensed", style: "font-family:'Ubuntu Condensed', sans-serif"},
                        { value: "'Montserrat', serif", name: "Montserrat", style: "font-family:'Montserrat', sans-serif"},
                        { value: "'Hind', sans-serif", name: "Hind", style: "font-family:'Hind', sans-serif"},
                        { value: "'Arvo', serif", name: "Arvo", style: "font-family:'Arvo', serif"},
                        { value: "'Volkhov', serif", name: "Volkhov", style: "font-family:'Volkhov', serif"},
                        { value: "'PT Serif', serif", name: "PT Serif", style: "font-family:'PT Serif', serif"},
                        { value: "'Merriweather', serif", name: "Merriweather", style: "font-family:'Merriweather', serif" },
                        { value: "'Merriweather Sans', sans-serif", name: "Merriweather Sans", style: "font-family:'Merriweather Sans', sans-serif" },
                        { value: "'Helvetica', sans-serif", name: "Helvetica", style: "font-family:'Helvetica', sans-serif"},
                        { value: "'Verdana', sans-serif", name: "Verdana", style: "font-family:'Verdana', sans-serif"},
                        { value: "'Arial', sans-serif", name: "Arial", style: "font-family:'Arial', sans-serif"},
                        { value: "'Arial Black', sans-serif", name: "Arial Black", style: "font-family:'Arial Black', sans-serif"},
                        { value: "'Georgia', serif", name: "Georgia", style: "font-family:'Georgia', serif"},
                        { value: "'Times New Roman', serif", name: "Georgia", style: "font-family:'Times New Roman', serif"},

                        ], },
                { name: "Weight", property: "font-weight" },
                { name: "Color", property: "color" },
                {
                    property: "text-align",
                    type: "radio",
                    defaults: "left",
                    list: [
                        { value: "left", name: "Left", className: "fas fa-align-left" },
                        { value: "center", name: "Center", className: "fas fa-align-center" },
                        { value: "right", name: "Right", className: "fas fa-align-right" },
                        { value: "justify", name: "Justify", className: "fas fa-align-justify" }
                    ],
                }, {
                    property: "text-decoration",
                    type: "radio",
                    defaults: "none",
                    list: [
                        { value: "none", name: "None", className: "fas fa-times" },
                        { value: "underline", name: "underline", className: "fas fa-underline" },
                        { value: "line-through", name: "Line-through", className: "fas fa-strikethrough" }
                    ],
                }, {
                    property: "font-style",
                    type: "radio",
                    defaults: "normal",
                    list: [
                        { value: "normal", name: "Normal", className: "fas fa-font" },
                        { value: "italic", name: "Italic", className: "fas fa-italic" }
                    ],
                }, {
                    property: "text-shadow",
                    type: "composite",
                    properties: [
                        { name: "H Move", property: "text-shadow-h" },
                        { name: "V Move", property: "text-shadow-v" },
                        { name: "Blur", property: "text-shadow-blur" },
                        { name: "Shadow Color", property: "text-shadow-color" }
                    ],
                }],
        }, {
            name: "Element Decorations",
            open: false,
            buildProps: [  "border", "border-radius", "box-shadow", "background-color", "background",  ],
            properties: [ {
                name: "Corner Radius",
                property: "border-radius",
                properties: [
                    { name: "Top-Left", property: "border-top-left-radius" },
                    { name: "Top-Right", property: "border-top-right-radius" },
                    { name: "Bottom-Left", property: "border-bottom-right-radius" },
                    { name: "Bottom-Right", property: "border-bottom-left-radius" }
                ],
            }, {
                name: "Element Shadow",
                property: "box-shadow",
                type: "composite",
                properties: [
                    { name: "H Move", property: "box-shadow-h" },
                    { name: "V Move", property: "box-shadow-v" },
                    { name: "Blur", property: "box-shadow-blur" },
                    { name: "Spread", property: "box-shadow-spread" },
                    { name: "Color", property: "box-shadow-color" },
                    { name: "Shadow type", property: "box-shadow-type" }
                ],
            }, {
                name: "Element Border",
                property: "border",
                properties: [
                    { name: "Width", property: "border-width", defaults: "0" },
                    { name: "Style", property: "border-style" },
                    { name: "Color", property: "border-color" },
                ],
            },
            {
                property: "background",
                type: "composite",
                defaults:   "none",
                properties: [
                    { name: "Background Image", property: "background-image" },
                    { name: "Repeat", property: "background-repeat" },
                    { name: "Position", property: "background-position" },
                    { name: "Attachment", property: "background-attachment" },
                    { name: "Size", property: "background-size"},
                ],
            },
            {   name: "Gradient",
                property: "background-image",
                type: "gradient",
            }
        ],
        }, /* {
            name: "Advanced: General Properties",
            open: false,
            buildProps: [ "float", "clear", "overflow-x", "overflow-y" ],
            properties: [{
                name: "Float",
                title: "Elemnts alignment",
                property: "float",
                type: "select",
                defaults: "none",
                list: [
                    { value: "none" },
                    { value: "left" },
                    { value: "right" }
                ],
            }, {
                name: "Clear",
                property: "clear",
                type: "select",
                defaults: "none",
                list: [
                    { value: "none" },
                    { value: "left" },
                    { value: "right" },
                    { value: "both" }
                ],
            }, {
                property: "vertical-align",
                type: "select",
                defaults: "baseline",
                list: [
                    { value: "baseline" },
                    { value: "top" },
                    { value: "middle" },
                    { value: "bottom" }
                ],
            }, {
                name: "Overflow X",
                property: "overflow-x",
                type: "select",
                defaults: "visible",
                list: [
                    { value: "visible" },
                    { value: "hidden" },
                    { value: "scroll" },
                    { value: "auto" }
                ],
            }, {
                name: "Overflow Y",
                property: "overflow-y",
                type: "select",
                defaults: "visible",
                list: [
                    { value: "visible" },
                    { value: "hidden" },
                    { value: "scroll" },
                    { value: "auto" }
                ],
            }]
        },*/
        {
            name: "Advanced Properties",
            open: false,
            buildProps: [ "float", "clear", "overflow-x", "overflow-y", "display", "flex-direction", "justify-content", "align-items" ],
            properties: [{
                name: "Float",
                title: "Elemnts alignment",
                property: "float",
                type: "select",
                defaults: "none",
                list: [
                    { value: "none" },
                    { value: "left" },
                    { value: "right" }
                ],
            }, {
                name: "Clear",
                property: "clear",
                type: "select",
                defaults: "none",
                list: [
                    { value: "none" },
                    { value: "left" },
                    { value: "right" },
                    { value: "both" }
                ],
            }, {
                property: "vertical-align",
                type: "select",
                defaults: "baseline",
                list: [
                    { value: "baseline" },
                    { value: "top" },
                    { value: "middle" },
                    { value: "bottom" }
                ],
            }, {
                name: "Overflow X",
                property: "overflow-x",
                type: "select",
                defaults: "visible",
                list: [
                    { value: "visible" },
                    { value: "hidden" },
                    { value: "scroll" },
                    { value: "auto" }
                ],
            }, {
                name: "Overflow Y",
                property: "overflow-y",
                type: "select",
                defaults: "visible",
                list: [
                    { value: "visible" },
                    { value: "hidden" },
                    { value: "scroll" },
                    { value: "auto" }
                ],
            }, {
                    name: "Flex Acivation",
                    property: "display",
                    type: "select",
                    defaults: "block",
                    list: [
                            { value: "block", name: "Disable"},
                            { value: "flex", name: "Enable"}
                          ],
                },
                {
                    name: "Flex Direction",
                    property: "flex-direction",
                    type: "radio",
                    defaults: "row",
                    list: [{
                        value: "row",
                        name: "Row",
                        className: "icon-designer icon-designer-directionright",
                        title: "Row",
                    }, {
                        value: "row-reverse",
                        name: "Row reverse",
                        className: "icon-designer icon-designer-directionleft",
                        title: "Row reverse",
                    }, {
                        value: "column",
                        name: "Column",
                        title: "Column",
                        className: "icon-designer icon-designer-directiondown",
                    }, {
                        value: "column-reverse",
                        name: "Column reverse",
                        title: "Column reverse",
                        className: "icon-designer icon-designer-directionup",
                    }],
                },
                {
                    name: "Justify Content",
                    property: "justify-content",
                    type: "radio",
                    defaults: "flex-start",
                    list: [{
                        value: "flex-start",
                        className: "icon-designer icon-designer-contentstart",
                        title: "Start",
                    }, {
                        value: "flex-end",
                        title: "End",
                        className: "icon-designer icon-designer-contentend",
                    }, {
                        value: "space-between",
                        title: "Space between",
                        className: "icon-designer icon-designer-contentspacebet",
                    }, {
                        value: "space-around",
                        title: "Space around",
                        className: "icon-designer icon-designer-contentspacear",
                    }, {
                        value: "center",
                        title: "Center",
                        className: "icon-designer icon-designer-contentmiddle",
                    }],
                },
                {
                    name: "Align Items",
                    property: "align-items",
                    type: "radio",
                    defaults: "center",
                    list: [{
                        value: "flex-start",
                        title: "Start",
                        className: "icon-designer icon-designer-itemstart",
                    }, {
                        value: "flex-end",
                        title: "End",
                        className: "icon-designer icon-designer-itemend",
                    }, {
                        value: "stretch",
                        title: "Stretch",
                        className: "icon-designer icon-designer-itemstretch",
                    }, {
                        value: "center",
                        title: "Center",
                        className: "icon-designer icon-designer-itemmiddle",
                    }],
                },
                {
                    name: "Flex Grow",
                    property: "flex-grow",
                    type: "integer",
                    defaults: 0,
                    min: 0
                },
                {
                    name: "Flex Shrink",
                    property: "flex-shrink",
                    type: "integer",
                    defaults: 0,
                    min: 0
                },
                {   name: "Flex Basis",
                    property: "flex-basis",
                    type: "integer",
                    units: ["px", "%", ""],
                    unit: "",
                    defaults: "auto",
                },
                {
                    name: "Order",
                    property: "order",
                    type: "integer",
                    defaults: 0,
                    min: 0
                },
                {
                    name: "Align Self",
                    property: "align-self",
                    type: "radio",
                    defaults: "auto",
                    list: [{
                        value: "auto",
                        name: "Auto",
                    }, {
                        value: "flex-start",
                        title: "Start",
                        className: "icon-designer icon-designer-itemstart",
                    }, {
                        value: "flex-end",
                        title: "End",
                        className: "icon-designer icon-designer-itemend",
                    }, {
                        value: "stretch",
                        title: "Stretch",
                        className: "icon-designer icon-designer-itemstretch",
                    }, {
                        value: "center",
                        title: "Center",
                        className: "icon-designer icon-designer-itemmiddle",
                    }]
                }
            ]
        },
        /*{
            name: "Flexible Box",
            open: false,
            properties: [{
                name: "Flex Container Properties",
                property: "flex",
                type: "composite",
                properties: [{
                    name: "Flex Acivation",
                    property: "display",
                    type: "select",
                    defaults: "block",
                    list: [
                        { value: "block", name: "Disable" },
                        { value: "flex", name: "Enable" }
                    ],
                }, {
                    name: "Flex Direction",
                    property: "flex-direction",
                    type: "radio",
                    defaults: "row",
                    list: [{
                        value: "row",
                        name: "Row",
                        className: "icon-designer icon-designer-directionright",
                        title: "Row",
                    }, {
                        value: "row-reverse",
                        name: "Row reverse",
                        className: "icon-designer icon-designer-directionleft",
                        title: "Row reverse",
                    }, {
                        value: "column",
                        name: "Column",
                        title: "Column",
                        className: "icon-designer icon-designer-directiondown",
                    }, {
                        value: "column-reverse",
                        name: "Column reverse",
                        title: "Column reverse",
                        className: "icon-designer icon-designer-directionup",
                    }],
                }, {
                    name: "Justify Content",
                    property: "justify-content",
                    type: "radio",
                    defaults: "flex-start",
                    list: [{
                        value: "flex-start",
                        className: "icon-designer icon-designer-contentstart",
                        title: "Start",
                    }, {
                        value: "flex-end",
                        title: "End",
                        className: "icon-designer icon-designer-contentend",
                    }, {
                        value: "space-between",
                        title: "Space between",
                        className: "icon-designer icon-designer-contentspacebet",
                    }, {
                        value: "space-around",
                        title: "Space around",
                        className: "icon-designer icon-designer-contentspacear",
                    }, {
                        value: "center",
                        title: "Center",
                        className: "icon-designer icon-designer-contentmiddle",
                    }],
                }, {
                    name: "Align Items",
                    property: "align-items",
                    type: "radio",
                    defaults: "center",
                    list: [{
                        value: "flex-start",
                        title: "Start",
                        className: "icon-designer icon-designer-itemstart",
                    }, {
                        value: "flex-end",
                        title: "End",
                        className: "icon-designer icon-designer-itemend",
                    }, {
                        value: "stretch",
                        title: "Stretch",
                        className: "icon-designer icon-designer-itemstretch",
                    }, {
                        value: "center",
                        title: "Center",
                        className: "icon-designer icon-designer-itemmiddle",
                    }],
                }],
            },  {
                name: "Child (item) Properties",
                property: "flex",
                type: "composite",
                properties: [{
                    name: "Flex Grow",
                    property: "flex-grow",
                    type: "integer",
                    defaults: 0,
                    min: 0
                }, {
                    name: "Flex Shrink",
                    property: "flex-shrink",
                    type: "integer",
                    defaults: 0,
                    min: 0
                }, {
                    name: "Flex Basis",
                    property: "flex-basis",
                    type: "integer",
                    units: ["px", "%", ""],
                    unit: "",
                    defaults: "auto",
                }, {
                    name: "Order",
                    property: "order",
                    type: "integer",
                    defaults: 0,
                    min: 0
                }, {
                    name: "Align Self",
                    property: "align-self",
                    type: "radio",
                    defaults: "auto",
                    list: [{
                        value: "auto",
                        name: "Auto",
                    }, {
                        value: "flex-start",
                        title: "Start",
                        className: "icon-designer icon-designer-itemstart",
                    }, {
                        value: "flex-end",
                        title: "End",
                        className: "icon-designer icon-designer-itemend",
                    }, {
                        value: "stretch",
                        title: "Stretch",
                        className: "icon-designer icon-designer-itemstretch",
                    }, {
                        value: "center",
                        title: "Center",
                        className: "icon-designer icon-designer-itemmiddle",
                    }]
                }]
            }]
        } */

    ]
    };

    // Cargo los valores a opciones recibidas
    for (var name in defaults) {
        if (!(name in c))
            c[name] = defaults[name];
    }

    // Inicializo comandos
    var importCommands = require("./commands");
    importCommands(c);

    // Inicializo componentes
    var importComponents = require("./components");
    importComponents(c);

    // Inicializo traits
    var importTraits = require("./traits");
    importTraits(c);

    // Add traits  require('./traits').default(editor, c);

    // Inicializo bloques según la versión
    var importBlocks;
    switch (framework) {
        case bs3:
          importBlocks = require("./blocksBS3");
          break;
        case bs4:
          importBlocks = require("./blocksBS4");
          break;
        default:
          importBlocks = require("./blocksHTML");
          break;
      }
    importBlocks(c);

    // Inicializo botones
    var importButtons = require("./buttons");
    importButtons(c);

    // Inicializo gestor de estilos
    var importStyle = require("./style");
    importStyle(c);

    // Si el contenido esta vacio uso valor por defecto
    if (!editor.getHtml() && c.defaultTemplate) {
        editor.setComponents(c.defaultTemplate);

        // Inicializo el undo manager
        editor.editor.initChildrenComp(editor.DomComponents.getWrapper());
    }

    // Al cambiar de componente
    editor.on("change:selectedComponent", function () {
        // Obtengo botones de ajustes y gestor de capas
        var openTmBtn = editor.Panels.getButton("views", "open-tm");
        var openLayersBtn = editor.Panels.getButton("views", "open-layers");
        // Si no estoy parado en ajustes o el gestor de capas me cambio al gestor de estilo
        if ((!openTmBtn || !openTmBtn.get("active")) && (!openLayersBtn || !openLayersBtn.get("active")) &&
            editor.editor.get("selectedComponent")) {
            var openSmBtn = editor.Panels.getButton("views", "open-sm");
            openSmBtn.set("attributes", { title: defaults.openSmBtnTitle, class: "gjs-pn-btn icon-designer icon-designer-style" });
            if (openSmBtn) openSmBtn.set("active", 1);
        }
        // Obtengo la posicion del scroll actual y del nuevo elemento seleccionado
        var frameWindow = editor.Canvas.getFrameEl().contentWindow;
        var currentScrollTop = frameWindow.document.body.scrollTop;
        var selectedElement = editor.getSelected();
        var relativeOffset = (selectedElement ? selectedElement.view.$el.offset().top : 0);
        // Obtengo el tamaño del preview para ver si hay que hacer scroll o no
        var windowSize = window.innerHeight || 0;
        var panelsSize = $(".gjs-pn-panels").height() || 0;
        var previewSize = windowSize - panelsSize;
        // Si corresponde muevo el scroll hacia la posicion del elemento seleccionado
        // Se coloca el 0.6 para que haga el scroll desde cierta parte de la ventana y no sólo para los componentes que no se ven
        if (relativeOffset && (relativeOffset < 0 || relativeOffset >= (previewSize * 0.6)))
            frameWindow.$("html,body").animate({
            scrollTop: currentScrollTop + relativeOffset
        }, 300);
    });

    // Al abrir modal de assets
    editor.on("run:open-assets", (response) => {
        // Ajusto el titulo
        const modal = editor.Modal;
        modal.setTitle(defaults.assetsModalTitle);
        $( ".gjs-am-assets-header > form > div:last-child").addClass("d-none");
        $( ".gjs-am-assets-header > form > .gjs-field > input").addClass("form-control");
        $( ".gjs-am-assets-header > form > .gjs-field > input" ).addClass("form-control-sm");
        $( ".gjs-am-assets-header > form > .gjs-field" ).addClass("form-group");
        //$( ".gjs-field" ).removeClass("gjs-am-add-field");
        $( ".gjs-am-assets-header > form > .gjs-field" ).removeClass("gjs-field");
        $( ".gjs-am-assets-header > form > .gjs-btn-prim" ).addClass( "btn" );
        $( ".gjs-am-assets-header > form > .gjs-btn-prim" ).addClass( "btn-sm" );

        if ($('label[name="label-add-image"]').length) {
            //
        } else {
            $( ".gjs-am-assets-header").prepend("<label class='gjs-form-label' name='label-add-image' >o agrega una imagen desde una URL:<label/>");
        }
    });

    // Al colocar un nuevo bloque
    editor.on("block:add", (response) => {
        console.log(response);
    });

    editor.on("asset:upload:error", (response) => {
        window.notification("error", "", "ERROR_ASSET_UPLOAD", {});
    });

    editor.on("asset:upload:response", (response) => {
        if (response && response.errorCount > 0) {
            //var msgError = response.errorCount + " files already exist";
            window.notification("warn", "", "ERROR_FILES_EXIST", {COUNT: response.errorCount});
            return;
        }

        if (response.status === false) {
            window.notification("error", "", "ERROR_ASSET_UPLOAD", {});
        }

    });
    /*
    // Get the Asset Manager module first

    // Extend the original `image` and add a confirm dialog before removing it
    am.addType("image", {
        // As you adding on top of an already defined type you can avoid indicating
        // `am.getType('image').view.extend({...` the editor will do it by default
        // but you can eventually extend some other type
        view: {
        // If you want to see more methods to extend check out
        // https://github.com/artf/grapesjs/blob/dev/src/asset_manager/view/AssetImageView.js
        onRemove(e) {
            e.stopImmediatePropagation();
            const model = this.model;
            //if (confirm("Are you sure?")) {
            //    model.collection.remove(model);
            //}
        }
        },
    });
    */
    // Al inicializar el editor actualizo datos de los botones
    editor.on("load", function () {
        // Agrego el skin al body del editor
        var frameWindow = editor.Canvas.getFrameEl().contentWindow;
        $(frameWindow.document.body).addClass("");

        // Ajusto titulo del boton de ver componentes
        var swichtVwBtn = editor.Panels.getButton("options", "sw-visibility");
        swichtVwBtn.set("attributes", {
            title: defaults.swichtVwBtnTitle,
            class: "gjs-pn-btn icon-designer icon-designer-outline dhx-outline",
        });
        // Ajusto titulo del boton de vista previa
        var previewBtn = editor.Panels.getButton("options", "preview");
        previewBtn.set("attributes", {
            title: defaults.previewBtnTitle,
            class: "gjs-pn-btn icon-designer icon-designer-preview dhx-preview",
        });

        // Ajusto titulo del boton de pantalla completa
        var fullScrBtn = editor.Panels.getButton("options", "fullscreen");
        fullScrBtn.set("attributes", {
            title: defaults.fullScrBtnTitle,
            class: "gjs-pn-btn icon-designer icon-designer-fullscreen dhx-fullscreen",
        });

        // Ajusto titulo del boton de ver codigo
        var expTplBtn = editor.Panels.getButton("options", "export-template");
        expTplBtn.set("attributes", {
            title: defaults.expTplBtnTitle,
            class: "gjs-pn-btn icon-designer icon-designer-code dhx-code",
        });

        // Ajusto titulo del boton de style manager
        var openSmBtn = editor.Panels.getButton("views", "open-sm");
        openSmBtn.set("attributes", {
            title: defaults.openSmBtnTitle,
            class: "gjs-pn-btn icon-designer icon-designer-style dhx-style",
        });
        // Ajusto titulo del trait manager
        var openTmBtn = editor.Panels.getButton("views", "open-tm");
        openTmBtn.set("attributes", {
            title: defaults.openTmBtnTitle,
            class: "gjs-pn-btn icon-designer icon-designer-options dhx-settings-outline",
        });
        // Ajusto titulo del layer manager
        var openLayersBtn = editor.Panels.getButton("views", "open-layers");
        openLayersBtn.set("attributes", {
            title: defaults.openLayersBtnTitle,
            class: "gjs-pn-btn icon-designer icon-designer-layers",
        });
        // Ajusto titulo del block manager
        var openBlocksBtn = editor.Panels.getButton("views", "open-blocks");
        openBlocksBtn.set("attributes", {
            title: defaults.openBlocksBtnTitle,
            class: "gjs-pn-btn icon-designer icon-designer-blocks",
        });

        // Me paro en la opcion de block manager
        if (openBlocksBtn) openBlocksBtn.set("active", 1);

        // Inicilizo los tooltips
        initTooltips();

        // Muestro u oculto las categorías de bloque según lo que se seleccionó en el radio button
        var blockCategories = $("#gjs-" + editor.Config.titleEditor + " .gjs-block-category");
        // Variable del radio button group para el tipo de contenedor
        var nameRdBoxed = "page-layout-" + editor.Config.titleEditor;
        if ($("input[name=" + nameRdBoxed + "]:checked").val() === "boxed") {
            for (var i = 0; i < blockCategories.length; i++) {
                if (blockCategories[i].innerText && blockCategories[i].innerText.indexOf("Boxed") > -1) {
                    blockCategories[i].hidden = false;
                }else if (blockCategories[i].innerText && blockCategories[i].innerText.indexOf("Full Width") > -1) {
                    blockCategories[i].hidden = true;
                }
            }
        } else {
            for (var i = 0; i < blockCategories.length; i++) {
                if (blockCategories[i].innerText && blockCategories[i].innerText.indexOf("Boxed") > -1) {
                    blockCategories[i].hidden = true;
                }else if (blockCategories[i].innerText && blockCategories[i].innerText.indexOf("Full Width") > -1) {
                    blockCategories[i].hidden = false;
                }
            }
        }
    });

    // Funcion para inicializar los tooltips
    function initTooltips() {

        // Copio todos los titulos a atributos para que se muestren en tooltips
        $("*[title]").each(function () {
            var el = $(this);
            var title = el.attr("title").trim();
            if (!title) return;
            el.attr("data-tooltip", el.attr("title"));
            el.attr("title", "");
            el.attr("data-tooltip-pos", el.attr("data-tooltip-pos") || "bottom");
        });
    }
});
