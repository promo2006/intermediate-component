import { join, normalize } from 'path';
import { argv } from 'yargs';

// Modos de ejecucion
export const ENVIRONMENTS: Environments = {
	DEVELOPMENT: 'dev',
	PRODUCTION: 'prod'
};

// Configuración del proyecto.
export class ProjectConfig {

	// Obtengo el ambiente (dev, prod, test).
	ENV = getEnvironment();

	// Datos generales de la aplicación obtenidos del packages.json.
	APP_TITLE = appDescription();
	APP_NAME = appName();
	APP_VERSION = appVersion();

	// Directorio base del proyecto
	PROJECT_ROOT = join(__dirname, '../..');

	// Puerto en que esucha la aplicación cliente (solo para dev).
	//APP_CLIENT_PORT = 5100;
	APP_CLIENT_PORT = 4210;

	// Puerto en que esucha la aplicacion servidor
	DEV_APP_SERVER_PORT = 9002;
	PROD_APP_SERVER_PORT = 9000;
	APP_SERVER_PORT = this.ENV === ENVIRONMENTS.DEVELOPMENT ? this.DEV_APP_SERVER_PORT : this.PROD_APP_SERVER_PORT;

	// Ruta base de la URL de la aplicación.
	APP_BASE = argv['base'] || '/';

	// Ruta base de la URL de los archivos de cliente.
	APP_CLIENT_BASE = '/client/';

	// URL base para el api desde el cliente.
	PROD_API_BASE_URL = '';
	DEV_API_BASE_URL = 'http://localhost:' + this.DEV_APP_SERVER_PORT;

	// Cantidad de ejecuciones en que se haran builds con typings (0 = siempre usar typings).
	TYPED_COMPILE_INTERVAL = 0;

	// Directorio del componete app para el bootstrap de angular.
	BOOTSTRAP_DIR = 'app';

	// Carpeta de la aplicación cliente.
	APP_CLIENT = 'client';

	// Carpeta de la aplicación servidor.
	APP_SERVER = argv['server'] || 'server';

	// Carpeta de la base de datos.
	APP_DATABASE = argv['database'] || 'database';

	// Nombre del archivo principal de la aplicación de angular.
	BOOTSTRAP_MAIN = 'main';

	// Nombre del archivo principal de la aplicación de angular (AOT).
	BOOTSTRAP_MAIN_AOT = 'main-aot';

	// Archivo principal de angular con el que se bootstrapea la aplicación de angular.
	BOOTSTRAP_MODULE = this.BOOTSTRAP_DIR + '/' + this.BOOTSTRAP_MAIN;

	// Archivo principal de angular con el que se bootstrapea la aplicación de angular (AOT).
	BOOTSTRAP_MODULE_AOT = this.BOOTSTRAP_DIR + '/' + this.BOOTSTRAP_MAIN_AOT;

	/// Carpeta de los fuentes de la aplicación cliente.
	APP_CLIENT_SRC = `src/${this.APP_CLIENT}`;

	// Carpeta de los fuentes de la aplicación servidor.
	APP_SERVER_SRC = `src/${this.APP_SERVER}`;

	// Carpeta de los fuentes de base de datos.
	APP_DATABASE_SRC = `src/${this.APP_DATABASE}`;

	// Carpeta de los fuentes de assets en la aplicación cliente.
	ASSETS_SRC = `${this.APP_CLIENT_SRC}/assets`;

	// Carpeta de los fuentes de SASS en la aplicación cliente.
	CSS_SRC = `${this.ASSETS_SRC}/scss`;

	// Path de los source de fonts.
	FONTS_SRC = [
		'node_modules/font-awesome/fonts/**',
		'node_modules/material-design-icons/iconfont/**'
	];

	// Path de los source de banderas.
	FLAGS_SRC = [
		'node_modules/flag-icon-css/flags/**'
	];

	// Carpeta de tools.
	TOOLS_DIR = 'tools';

	// Directorios para build.
	DIST_DIR = 'dist';
	DIST_DEV_DIR = `${this.DIST_DIR}/dev`;
	DIST_PROD_DIR = `${this.DIST_DIR}/prod`;

	// Directorio destino de la aplicación cliente en modo dev.
	DEV_CLIENT_DEST = `${this.DIST_DEV_DIR}/${this.APP_CLIENT}`;

	// Directorio destino de la aplicación cliente en modo prod.
	PROD_CLIENT_DEST = `${this.DIST_PROD_DIR}/${this.APP_CLIENT}`;

	// Directorio destino de la aplicación servidor en modo dev.
	DEV_SERVER_DEST = `${this.DIST_DEV_DIR}/${this.APP_SERVER}`;

	// Directorio destino de la aplicación servidor en modo prod.
	PROD_SERVER_DEST = `${this.DIST_PROD_DIR}/${this.APP_SERVER}`;

	// Directorio temporal de la aplicación cliente en modo dev.
	TMP_CLIENT_DIR = `${this.DIST_DIR}/tmp_${this.APP_CLIENT}`;

	// Directorio temporal de la aplicación servidor en modo dev.
	TMP_SERVER_DIR = `${this.DIST_DIR}/tmp_${this.APP_SERVER}`;

	// Directorio destino de la aplicación cliente.
	APP_CLIENT_DEST = this.ENV === ENVIRONMENTS.DEVELOPMENT ? this.DEV_CLIENT_DEST : this.PROD_CLIENT_DEST;

	// Directorio destino de la aplicación servidor.
	APP_SERVER_DEST = this.ENV === ENVIRONMENTS.DEVELOPMENT ? this.DEV_SERVER_DEST : this.PROD_SERVER_DEST;

	// Carpeta assets en destino.
	ASSETS_DEST = `${this.APP_CLIENT_DEST}/assets`;

	// Ruta de la carpeta de archivos estáticos del servidor.
	SERVER_STATIC_DEST = `${this.APP_SERVER_DEST}/static`;

	// Path de los source y destino de skins.
	SKINS_SRC = join(this.ASSETS_SRC, 'skins');
	SKINS_DEST = join(this.ASSETS_DEST, 'skins');

	// Ruta destino de los archivos css.
	CSS_DEST = `${this.APP_CLIENT_DEST}/css`;

	// Ruta destino de los archivos css.
	JS_DEST = `${this.APP_CLIENT_DEST}/js`;

	// Nombre del archivo para incluir lo shims.
	JS_PROD_SHIMS_BUNDLE = 'shims.js';

	// Nombre de archivo para el bundle de la aplicación cliente en modo producción.
	JS_PROD_APP_BUNDLE = 'app.js';

	// Nombre del archivo para el bundle de estilos de la aplicación cliente.
	CSS_PROD_BUNDLE = 'main.css';

	// Ruta base para los estilos de los skins.
	SKIN_CSS_BASE_URL = this.ENV === ENVIRONMENTS.DEVELOPMENT ? this.SKINS_DEST.replace(/\\/g, '/') : 'client/css';

	// Lista de reglas para el codelizer.
	CODELYZER_RULES = customRules();

	// Extension a usar en los archivos js estaticos del servidor.
	STATIC_JS_EXTENSION = this.ENV === ENVIRONMENTS.DEVELOPMENT ? 'js' : 'min.js';

	// Extension a usar en los archivos css estaticos del servidor.
	STATIC_CSS_EXTENSION = this.ENV === ENVIRONMENTS.DEVELOPMENT ? 'css' : 'min.css';

	// Flag para defomor si usar SASS.
	ENABLE_SCSS = true;

	// Flag para preservar los sourcemaps al compilar prod (se usa para el SME).
	PRESERVE_SOURCE_MAPS = argv['preserve-source-maps'] || false;

	// Directorio de salida para el resultado del source-map-explorer.
	SME_DIR = `${this.DIST_DIR}/sme`;

	// Lista de directorios a incluir para el rollup.
	ROLLUP_INCLUDE_DIR: string[] = [
		'node_modules/**',
		'node_modules/atoa/**',
		'node_modules/contra/**',
		'node_modules/ticky/**',
		'node_modules/ng2-file-upload/**',
		'node_modules/ngx-clipboard/**',
		'node_modules/ngx-window-token/**',
		// 'node_modules/xlsx/**',
	];

	// Mapeos de librerías que el rollup no puede encontrar.
	ROLLUP_INCLUDES: any = {
		'contra/emitter': 'node_modules/contra/emitter.js',
		'moment-timezone': 'node_modules/moment-timezone/index.js',
		'ngx-clipboard/src/index': 'node_modules/ngx-clipboard/esm2015/ngx-clipboard.js',
		'ngx-clipboard/src/clipboard.service': 'node_modules/ngx-clipboard/esm2015/ngx-clipboard.js',
		'ngx-clipboard/src/clipboard.directive': 'node_modules/ngx-clipboard/esm2015/ngx-clipboard.js',
		'ngx-window-token/src/index': 'node_modules/ngx-window-token/esm2015/ngx-window-token.js'
	};

	// Named exports para el rollup.
	ROLLUP_NAMED_EXPORTS: any = {
		'node_modules/contra/emitter.js': ['contra/emitter'],
		'node_modules/ng2-file-upload/index.js': ['FileUploader'],
		'node_modules/ngx-clipboard/esm2015/ngx-clipboard.js': ['ClipboardService'],
		'node_modules/ngx-window-token/esm2015/ngx-window-token.js': ['WINDOW', '_window', 'NgxWindowTokenModule']
	};

	// Las opciones para pasarle al verificador de sintaxis de los SCSS.
	SASS_LINT_OPTIONS = {
		options: {
			formatter: 'stylish',
			'merge-default-rules': true
		},
		rules: {
			// Deshabilito algunas reglas
			'force-element-nesting': 0,
			'force-pseudo-nesting': 0,
			'nesting-depth': [1,
				{
					'max-depth': 10
				}
			],
			'no-color-literals': 0,
			'no-duplicate-properties': [1,
				{
					'exclude': ['height', 'width', 'cursor', 'background-image']
				}
			],
			'no-important': 0,
			'no-qualifying-elements': 0,
			'no-transition-all': 0,
			'no-vendor-prefixes': 0,
			'property-sort-order': 0
		}
	};

	// Lista de librerías a inyectar en el index.html.
	NPM_DEPENDENCIES: InjectableDependency[] = [
		{ src: 'zone.js/dist/zone.js', inject: 'libs' },
		{ src: 'core-js/client/shim.min.js', inject: 'shims' },
		{ src: 'systemjs/dist/system.src.js', inject: 'shims', env: ENVIRONMENTS.DEVELOPMENT },
		{ src: 'tslib/tslib.js', inject: 'libs', env: ENVIRONMENTS.DEVELOPMENT },
		{ src: 'rxjs/bundles/Rx.min.js', inject: 'libs', env: ENVIRONMENTS.DEVELOPMENT },
		// Librerías adicionales.
		{ src: 'flag-icon-css/css/flag-icon.css', inject: true },
		{ src: 'awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css', inject: true },
		{ src: 'jquery/dist/jquery.min.js', inject: 'libs' },
		{ src: 'jquery-slimscroll/jquery.slimscroll.min.js', inject: 'libs' },
		{ src: 'tether/dist/js/tether.min.js', inject: 'libs' },
		{ src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs' },
		{ src: 'hammerjs/hammer.min.js', inject: 'libs' },
		{ src: 'moment/min/moment.min.js', inject: 'libs' },
		{ src: 'validator/validator.js', inject: 'libs' },
		{ src: 'd3/build/d3.js', inject: 'libs' },
		{ src: 'jspdf/dist/jspdf.min.js', inject: 'libs' },
		{ src: 'jspdf-autotable/dist/jspdf.plugin.autotable.min.js', inject: 'libs' },
		{ src: 'raphael/raphael.js', inject: 'libs' },
		{ src: 'justgage/justgage.js', inject: 'libs' },
		{ src: 'highcharts/highcharts.js', inject: 'libs' },
		{ src: 'highcharts/modules/drilldown.js', inject: 'libs' },
		{ src: 'ion-rangeslider/js/ion.rangeSlider.min.js', inject: 'libs' },
		{ src: 'ion-rangeslider/css/normalize.css', inject: true },
		{ src: 'ion-rangeslider/css/ion.rangeSlider.css', inject: true },
		{ src: 'ion-rangeslider/css/ion.rangeSlider.skinHTML5.css', inject: true },
		{ src: 'ion-rangeslider/css/ion.rangeSlider.skinHTML5.css', inject: true },

		// Librerías definidas como archivos estáticos.
		{ src: join(this.PROJECT_ROOT, this.APP_SERVER_SRC, 'static/dhtmlx/codebase/fonts/font_roboto', 'roboto.css'), inject: true },
		{ src: join(this.PROJECT_ROOT, this.APP_SERVER_SRC, 'static/dhtmlx/codebase', 'dhtmlxtree.css'), inject: true },
		{ src: join(this.PROJECT_ROOT, this.APP_SERVER_SRC, 'static/dhtmlx/codebase', 'dhtmlxtree.js'), inject: true },
		{ src: join(this.PROJECT_ROOT, this.APP_SERVER_SRC, 'static/js/audio-dashboard-highcharts-column.js'), inject: true },
		{ src: join(this.PROJECT_ROOT, this.APP_SERVER_SRC, 'static/js/cloud.js'), inject: true },
		{ src: join(this.PROJECT_ROOT, this.APP_SERVER_SRC, 'static/js/highcharts-bar-drilldown.js'), inject: true },
		{ src: join(this.PROJECT_ROOT, this.APP_SERVER_SRC, 'static/js/search-dashboard-highcharts.js'), inject: true },
		{ src: join(this.PROJECT_ROOT, this.APP_SERVER_SRC, 'static/js/study.js'), inject: true },
		{ src: join(this.PROJECT_ROOT, this.APP_SERVER_SRC, 'static/js', 'tree.js'), inject: true },
		{ src: join(this.PROJECT_ROOT, this.APP_SERVER_SRC, 'static/libs', 'd3-tip.js'), inject: 'libs' }
	];

	// Orígenes de assets.
	APP_ASSETS: InjectableDependency[] = [
		{ src: `${this.CSS_SRC}/main.${this.getInjectableStyleExtension()}`, inject: true, vendor: false }
	];

	// Lista de archivos temporales a ignorar por el watcher y builder.
	TEMP_FILES: string[] = [
		'**/*___jb_tmp___',
		'**/*~',
	];

	// Devuelve array de dependencias a inyectar.
	get DEPENDENCIES(): InjectableDependency[] {
		return normalizeDependencies(this.NPM_DEPENDENCIES.filter(filterDependency.bind(null, this.ENV)))
			.concat(this.APP_ASSETS.filter(filterDependency.bind(null, this.ENV)));
	}

	// Configuración de SystemJS para modo dev.
	SYSTEM_JS_CONFIG_DEV: any = {
		transpiler: 'plugin-babel',
		packageConfigPaths: [
			`/node_modules/*/package.json`,
			`/node_modules/**/package.json`,
			`/node_modules/@angular/*/package.json`,
			`/node_modules/@types/*/package.json`,
			`/node_modules/@ng-bootstrap/*/package.json`
		],
		paths: {
			[this.BOOTSTRAP_MODULE]: `${this.APP_BASE}${this.BOOTSTRAP_MODULE}`,
			'@angular/animations': 'node_modules/@angular/animations/bundles/animations.umd.js',
			'@angular/platform-browser/animations': 'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js',
			'@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
			'@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
			'@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
			'@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
			'@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
			'@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
			'@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
			'@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
			'@angular/animations/browser': 'node_modules/@angular/animations/bundles/animations-browser.umd.js',

			'@angular/common/testing': 'node_modules/@angular/common/bundles/common-testing.umd.js',
			'@angular/compiler/testing': 'node_modules/@angular/compiler/bundles/compiler-testing.umd.js',
			'@angular/core/testing': 'node_modules/@angular/core/bundles/core-testing.umd.js',
			'@angular/http/testing': 'node_modules/@angular/http/bundles/http-testing.umd.js',
			'@angular/platform-browser/testing':
				'node_modules/@angular/platform-browser/bundles/platform-browser-testing.umd.js',
			'@angular/platform-browser-dynamic/testing':
				'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
			'@angular/router/testing': 'node_modules/@angular/router/bundles/router-testing.umd.js',

			'app/': `${this.APP_BASE}app/`,
			'assets/': `${this.APP_BASE}assets/`,
			// For test config.
			'dist/dev/': '/base/dist/dev/',
			'': 'node_modules/',

			// Plugin de Babel para hacer el transpile de ES6.
			'plugin-babel': `${this.APP_BASE}node_modules/systemjs-plugin-babel/plugin-babel.js`,
			'systemjs-babel-build': `${this.APP_BASE}node_modules/systemjs-plugin-babel/systemjs-babel-browser.js`,

			// Paths a módulos que requieren configuracion especifica (aca solo se precisan los del lado cliente).
			'@angular/cdk': `${this.APP_BASE}node_modules/@angular/cdk/bundles/cdk.umd.js`,
			'@angular/material': `${this.APP_BASE}node_modules/@angular/material/bundles/material.umd.js`,
			'angular2-jwt': `${this.APP_BASE}node_modules/angular2-jwt/angular2-jwt.js`,
			'angular2-notifications': `${this.APP_BASE}node_modules/angular2-notifications/dist/index.js`,
			'angular-4-data-table': `${this.APP_BASE}node_modules/angular-4-data-table/dist/index.js`,
			'd3': `${this.APP_BASE}node_modules/d3/build/d3.js`,
			'd3-axis': `${this.APP_BASE}node_modules/d3-axis/dist/d3-axis.min.js`,
			'd3-array': `${this.APP_BASE}node_modules/d3-array/dist/d3-array.min.js`,
			'd3-brush': `${this.APP_BASE}node_modules/d3-brush/dist/d3-brush.min.js`,
			'd3-chord': `${this.APP_BASE}node_modules/d3-chord/dist/d3-chord.min.js`,
			'd3-color': `${this.APP_BASE}node_modules/d3-color/dist/d3-color.min.js`,
			'd3-collection': `${this.APP_BASE}node_modules/d3-collection/dist/d3-collection.min.js`,
			'd3-dispatch': `${this.APP_BASE}node_modules/d3-dispatch/dist/d3-dispatch.min.js`,
			'd3-format': `${this.APP_BASE}node_modules/d3-format/dist/d3-format.min.js`,
			'd3-interpolate': `${this.APP_BASE}node_modules/d3-interpolate/dist/d3-interpolate.min.js`,
			'd3-path': `${this.APP_BASE}node_modules/d3-path/dist/d3-path.min.js`,
			'd3-scale': `${this.APP_BASE}node_modules/d3-scale/dist/d3-scale.min.js`,
			'd3-shape': `${this.APP_BASE}node_modules/d3-shape/dist/d3-shape.min.js`,
			'd3-time': `${this.APP_BASE}node_modules/d3-time/dist/d3-time.min.js`,
			'd3-timer': `${this.APP_BASE}node_modules/d3-timer/dist/d3-timer.min.js`,
			'd3-ease': `${this.APP_BASE}node_modules/d3-ease/dist/d3-ease.min.js`,
			'd3-selection': `${this.APP_BASE}node_modules/d3-selection/dist/d3-selection.min.js`,
			'd3-time-format': `${this.APP_BASE}node_modules/d3-time-format/dist/d3-time-format.min.js`,
			'd3-transition': `${this.APP_BASE}node_modules/d3-transition/dist/d3-transition.min.js`,
			'raphael': `${this.APP_BASE}node_modules/raphael/raphael.js`,
			'justgage': `${this.APP_BASE}node_modules/justgage/justgage.js`,
			'highcharts': `${this.APP_BASE}node_modules/highcharts/highcharts.js`,
			'drilldown': `${this.APP_BASE}node_modules/highcharts/modules/drilldown.js`,
			'moment': `${this.APP_BASE}node_modules/moment/min/moment-with-locales.js`,
			'moment-timezone': `${this.APP_BASE}node_modules/moment-timezone/builds/moment-timezone-with-data.min.js`,
			'@ng-bootstrap/ng-bootstrap': `${this.APP_BASE}node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js`,
			'ng2-tree': `${this.APP_BASE}node_modules/ng2-tree/bundles/ng2-tree.umd.js`,
			'ng2-file-upload': `${this.APP_BASE}node_modules/ng2-file-upload/ng2-file-upload.js`,
			'ngx-bootstrap': `${this.APP_BASE}node_modules/ngx-bootstrap/bundles/ngx-bootstrap.umd.min.js`,
			'ngx-clipboard': `${this.APP_BASE}node_modules/ngx-clipboard/dist/bundles/ngxClipboard.umd.js`,
			'ngx-window-token': `${this.APP_BASE}node_modules/ngx-window-token/dist/bundles/ngxWindowToken.umd.js`,
			'powerbi-api': `${this.APP_BASE}node_modules/powerbi-api/lib/index.js`,
			'powerbi-client': `${this.APP_BASE}node_modules/powerbi-client/dist/powerbi.min.js`,
			'screenfull': `${this.APP_BASE}node_modules/screenfull/dist/screenfull.js`,
			'socket.io-client': `${this.APP_BASE}node_modules/socket.io-client/dist/socket.io.js`,
			'validator': `${this.APP_BASE}node_modules/validator/validator.js`,
			'w3c-blob': `${this.APP_BASE}node_modules/w3c-blob/index.js`,
			'buffer': `${this.APP_BASE}node_modules/buffer/index.js`,
			'base64-js': `${this.APP_BASE}node_modules/base64-js/index.js`,
			'ieee754': `${this.APP_BASE}node_modules/ieee754/index.js`,
			'js-base64': `${this.APP_BASE}node_modules/js-base64/base64.js`,
			'xlsx': `${this.APP_BASE}node_modules/xlsx/dist/xlsx.full.min.js`,
			'shufflejs': `${this.APP_BASE}node_modules/shufflejs/dist/shuffle.js`
		},
		map: {
			'rxjs': `${this.APP_BASE}node_modules/rxjs`,
			'ts-md5': `${this.APP_BASE}node_modules/ts-md5`
		},
		meta: {
			'xlsx': {
				exports: 'XLSX'
			}
		},
		packages: {
			[this.BOOTSTRAP_DIR]: {
				defaultExtension: 'js'
			},
			'': {
				defaultExtension: 'js'
			}
		}
	};

	// Configuración a usar del SystemJS (por defecto se usa el de modo dev).
	SYSTEM_JS_CONFIG: any = this.SYSTEM_JS_CONFIG_DEV;

	// Configuración de SystemJS para el builder (modo prod).
	SYSTEM_JS_CONFIG_PROD: any = {
		defaultJSExtensions: true,
		transpiler: 'plugin-babel',
		base: this.PROJECT_ROOT,
		packageConfigPaths: [
			join('node_modules', '*', 'package.json'),
			join('node_modules', '@angular', '*', 'package.json'),
			join('node_modules', '@types', '*', 'package.json'),
			join('node_modules', '@ng-bootstrap', '*', 'package.json')
		],
		paths: {
			[`${this.TMP_CLIENT_DIR}/*`]: `${this.TMP_CLIENT_DIR}/*`,
			[join(this.TMP_CLIENT_DIR, this.BOOTSTRAP_DIR, '*')]: `${this.TMP_CLIENT_DIR}/${this.BOOTSTRAP_DIR}/*`,
			'@angular/platform-browser/animations': 'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js',
			'@angular/animations/browser': 'node_modules/@angular/animations/bundles/animations-browser.umd.js',
			'dist/tmp/node_modules/*': 'dist/tmp/node_modules/*',
			'assets/*': `${this.ASSETS_DEST}/*`,
			'node_modules/*': 'node_modules/*',
			'*': 'node_modules/*',

			// Plugin de Babel para hacer el transpile de ES6.
			'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
			'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

			// Paths a módulos que requieren configuración específica.
			'@angular/cdk': 'node_modules/@angular/cdk/bundles/cdk.umd.js',
			'@angular/material': 'node_modules/@angular/material/bundles/material.umd.js',
			'angular2-jwt': 'node_modules/angular2-jwt/angular2-jwt.js',
			'angular2-notifications': 'node_modules/angular2-notifications/dist/index.js',
			'angular-4-data-table': 'node_modules/angular-4-data-table/dist/index.js',
			'd3': 'node_modules/d3/build/d3.js',
			'd3-axis': 'node_modules/d3-axis/dist/d3-axis.min.js',
			'd3-array': 'node_modules/d3-array/dist/d3-array.min.js',
			'd3-brush': 'node_modules/d3-brush/dist/d3-brush.min.js',
			'd3-chord': 'node_modules/d3-chord/dist/d3-chord.min.js',
			'd3-color': 'node_modules/d3-color/dist/d3-color.min.js',
			'd3-collection': 'node_modules/d3-collection/dist/d3-collection.min.js',
			'd3-dispatch': 'node_modules/d3-dispatch/dist/d3-dispatch.min.js',
			'd3-format': 'node_modules/d3-format/dist/d3-format.min.js',
			'd3-interpolate': 'node_modules/d3-interpolate/dist/d3-interpolate.min.js',
			'd3-path': 'node_modules/d3-path/dist/d3-path.min.js',
			'd3-scale': 'node_modules/d3-scale/dist/d3-scale.min.js',
			'd3-shape': 'node_modules/d3-shape/dist/d3-shape.min.js',
			'd3-time': 'node_modules/d3-time/dist/d3-time.min.js',
			'd3-timer': 'node_modules/d3-timer/dist/d3-timer.min.js',
			'd3-ease': 'node_modules/d3-ease/dist/d3-ease.min.js',
			'd3-selection': 'node_modules/d3-selection/dist/d3-selection.min.js',
			'd3-time-format': 'node_modules/d3-time-format/dist/d3-time-format.min.js',
			'd3-transition': 'node_modules/d3-transition/dist/d3-transition.min.js',
			'raphael': 'node_modules/raphael/raphael.js',
			'justgage': 'node_modules/justgage/justgage.js',
			'highcharts': 'node_modules/highcharts/highcharts.js',
			'drilldown': 'node_modules/highcharts/modules/drilldown.js',
			'moment': 'node_modules/moment/min/moment-with-locales.js',
			'moment-timezone': 'node_modules/moment-timezone/builds/moment-timezone-with-data.min.js',
			'@ng-bootstrap/ng-bootstrap': 'node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
			'ng2-tree': 'node_modules/ng2-tree/bundles/ng2-tree.umd.js',
			'ng2-file-upload': 'node_modules/ng2-file-upload/ng2-file-upload.js',
			'ngx-bootstrap': 'node_modules/ngx-bootstrap/bundles/ngx-bootstrap.umd.min.js',
			'ngx-clipboard': 'node_modules/ngx-clipboard/dist/bundles/ngxClipboard.umd.js',
			'ngx-window-token': 'node_modules/ngx-window-token/dist/bundles/ngxWindowToken.umd.js',
			'powerbi-api': 'node_modules/powerbi-api/lib/index.js',
			'powerbi-client': 'node_modules/powerbi-client/dist/powerbi.min.js',
			'socket.io-client': 'node_modules/socket.io-client/dist/socket.io.js',
			'screenfull': 'node_modules/screenfull/dist/screenfull.js',
			'validator': 'node_modules/validator/validator.js',
			'w3c-blob': 'node_modules/w3c-blob/index.js',
			'buffer': 'node_modules/buffer/index.js',
			'base64-js': 'node_modules/base64-js/index.js',
			'ieee754': 'node_modules/ieee754/index.js',
			'js-base64': 'node_modules/js-base64/base64.js',
			'xlsx': 'node_modules/xlsx/dist/xlsx.full.min.js',
			'shufflejs': 'node_modules/shufflejs/dist/shuffle.js'
		},
		packages: {
			'@angular/animations': {
				main: 'bundles/animations.umd.js',
				defaultExtension: 'js'
			},
			'@angular/common': {
				main: 'bundles/common.umd.js',
				defaultExtension: 'js'
			},
			'@angular/compiler': {
				main: 'bundles/compiler.umd.js',
				defaultExtension: 'js'
			},
			'@angular/core/testing': {
				main: 'bundles/core-testing.umd.js',
				defaultExtension: 'js'
			},
			'@angular/core': {
				main: 'bundles/core.umd.js',
				defaultExtension: 'js'
			},
			'@angular/forms': {
				main: 'bundles/forms.umd.js',
				defaultExtension: 'js'
			},
			'@angular/http': {
				main: 'bundles/http.umd.js',
				defaultExtension: 'js'
			},
			'@angular/platform-browser': {
				main: 'bundles/platform-browser.umd.js',
				defaultExtension: 'js'
			},
			'@angular/platform-browser-dynamic': {
				main: 'bundles/platform-browser-dynamic.umd.js',
				defaultExtension: 'js'
			},
			'@angular/router': {
				main: 'bundles/router.umd.js',
				defaultExtension: 'js'
			},
			'@angular/service-worker': {
				main: 'bundles/service-worker.umd.js',
				defaultExtension: 'js'
			},
			'rxjs': {
				main: 'Rx.js',
				defaultExtension: 'js'
			}
		},
		meta: {
			'xlsx': {
				exports: 'XLSX'
			}
		}
	};

	// Configuración para el autoprefixer de css.
	BROWSER_LIST = [
		'ie >= 10',
		'ie_mob >= 10',
		'ff >= 30',
		'chrome >= 34',
		'safari >= 7',
		'opera >= 23',
		'ios >= 7',
		'android >= 4.4',
		'bb >= 10'
	];

	// Lista de colores para cologuard.
	COLOR_GUARD_WHITE_LIST: [string, string][] = [
	];

	// Configuración para el plugin de templates.
	TEMPLATE_CONFIG = {

		// Used to detect `data` property values to be HTML-escaped.
		escape: /<%-([\s\S]+?)%>/g,

		// Used to detect code to be evaluated.
		evaluate: /<%([\s\S]+?)%>/g,

		// Used to detect `data` property values to inject.
		interpolate: /<%=([\s\S]+?)%>/g,

		// Used to reference the data object in the template text.
		variable: ''
	};

	// Configuración de plugins.
	PLUGIN_CONFIGS: any = {
		/**
		 * The BrowserSync configuration of the application.
		 * The default open behavior is to open the browser. To prevent the browser from opening use the `--b`  flag when
		 * running `npm start` (tested with serve.dev).
		 * Example: `npm start -- --b`
		 * @type {any}
		 */
		'browser-sync': {
			middleware: [require('connect-history-api-fallback')({ index: `${this.APP_BASE}index.html` })],
			port: this.APP_CLIENT_PORT,
			startPath: this.APP_BASE,
			open: argv['b'] ? false : true,
			injectChanges: false,
			server: {
				baseDir: `${this.DIST_DIR}/empty/`,
				routes: {
					[`${this.APP_BASE}${this.APP_CLIENT_SRC}`]: this.APP_CLIENT_SRC,
					[`${this.APP_BASE}${this.APP_CLIENT_DEST}`]: this.APP_CLIENT_DEST,
					[`${this.APP_BASE}${this.APP_SERVER_SRC}`]: this.APP_SERVER_SRC,
					[`${this.APP_BASE}${this.APP_SERVER_DEST}`]: this.APP_SERVER_DEST,
					[`${this.APP_BASE}static`]: this.SERVER_STATIC_DEST,
					[`${this.APP_BASE}node_modules`]: 'node_modules',
					[`${this.APP_BASE}client`]: this.APP_CLIENT_DEST,
					[`${this.APP_BASE.replace(/\/$/, '')}`]: this.APP_CLIENT_DEST,
				}
			}
		},

		// Note: you can customize the location of the file.
		'environment-config': join(this.PROJECT_ROOT, this.TOOLS_DIR, 'env'),

		/**
		 * The options to pass to gulp-sass (and then to node-sass).
		 * Reference: https://github.com/sass/node-sass#options
		 * @type {object}
		 */
		'gulp-sass': {
			includePaths: ['./node_modules/']
		},

		/**
		 * The options to pass to gulp-concat-css.
		 * Reference: https://github.com/mariocasciaro/gulp-concat-css
		 * @type {object}
		 */
		'gulp-concat-css': {
			targetFile: this.CSS_PROD_BUNDLE,
			options: {
				rebaseUrls: false
			}
		}
	};

	// Devuelve la configuracion de un plugin.
	getPluginConfig(pluginKey: string): any {
		if (this.PLUGIN_CONFIGS[pluginKey]) {
			return this.PLUGIN_CONFIGS[pluginKey];
		}
		return null;
	}

	// Devuelve la extension a usar para estilos.
	getInjectableStyleExtension() {
		return this.ENV === ENVIRONMENTS.PRODUCTION && this.ENABLE_SCSS ? 'scss' : 'css';
	}
}

// Normaliza las dependencias.
export function normalizeDependencies(deps: InjectableDependency[]) {
	deps
		.filter((d: InjectableDependency) => !/\*/.test(d.src)) // Skip globs.
		.forEach((d: InjectableDependency) => d.src = require.resolve(d.src));
	return deps;
}

// Devuelve true si la dependencia se usa en un tipo de ambiente.
function filterDependency(env: string, d: InjectableDependency): boolean {
	if (!d.env) {
		d.env = Object.keys(ENVIRONMENTS).map(k => ENVIRONMENTS[k]);
	}
	if (!(d.env instanceof Array)) {
		(<any>d).env = [d.env];
	}
	return d.env.indexOf(env) >= 0;
}

// Devuelve el nombre de la aplicación.
function appName(): string {
	var pkg = require('../../package.json');
	return pkg.name;
}

// Devuelve la version de la aplicación.
function appVersion(): number | string {
	var pkg = require('../../package.json');
	return pkg.version;
}

// Devuelve la descripcion de la aplicación.
function appDescription(): string {
	var pkg = require('../../package.json');
	return pkg.description;
}

// Devuelve la lista de reglas del tslint para codelyzer.
function customRules(): string[] {
	var lintConf = require('../../tslint.json');
	return lintConf.rulesDirectory;
}

// Devuelve el environment de la aplicación.
function getEnvironment() {
	let base: string[] = argv['_'];
	let prodKeyword = !!base.filter(o => o.indexOf(ENVIRONMENTS.PRODUCTION) >= 0).pop();
	let env = (argv['env'] || '').toLowerCase();
	if ((base && prodKeyword) || env === ENVIRONMENTS.PRODUCTION) {
		return ENVIRONMENTS.PRODUCTION;
	} else {
		return ENVIRONMENTS.DEVELOPMENT;
	}
}

// Interfaces.
interface InjectableDependency {
	src: string;
	inject: string | boolean;
	vendor?: boolean;
	env?: string[] | string;
}

interface Environments {
	DEVELOPMENT: string;
	PRODUCTION: string;
	[key: string]: string;
}
