(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("_"), require("Wix"), require("ReactDOM"), require("$"));
	else if(typeof define === 'function' && define.amd)
		define("UI", ["React", "_", "Wix", "ReactDOM", "$"], factory);
	else if(typeof exports === 'object')
		exports["UI"] = factory(require("React"), require("_"), require("Wix"), require("ReactDOM"), require("$"));
	else
		root["UI"] = factory(root["React"], root["_"], root["Wix"], root["ReactDOM"], root["$"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_67__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./js/editor-ui-lib.js */1);


/***/ },
/* 1 */
/*!*****************************!*\
  !*** ./js/editor-ui-lib.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(/*! wix-ui-react/ui */ 2);

/***/ },
/* 2 */
/*!*******************************!*\
  !*** ./js/wix-ui-react/ui.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var symbols = __webpack_require__(/*! symbols */ 3);
	var dock = __webpack_require__(/*! wix-ui-react/components/alignment/dock */ 13);
	var buttonsGroup = __webpack_require__(/*! wix-ui-react/components/switches/buttonsGroup */ 48);
	var button = __webpack_require__(/*! wix-ui-react/components/button/button */ 54);
	var colorPickerSlider = __webpack_require__(/*! wix-ui-react/components/colorSpace/colorPickerSlider */ 62);
	var colorPickerInput = __webpack_require__(/*! wix-ui-react/components/colorSpace/colorPickerInput */ 81);
	var checkbox = __webpack_require__(/*! wix-ui-react/components/switches/checkbox */ 83);
	var dropDown = __webpack_require__(/*! wix-ui-react/components/dropDown/dropDown */ 90);
	var dropDownSelect = __webpack_require__(/*! wix-ui-react/components/dropDown/dropDownSelect */ 102);
	var radioButtons = __webpack_require__(/*! wix-ui-react/components/switches/radioButtons */ 106);
	var tooltip = __webpack_require__(/*! wix-ui-react/components/tooltip/tooltip */ 112);
	var openedPanels = __webpack_require__(/*! wix-ui-react/components/panels/openedPanels */ 116);
	var languagePicker = __webpack_require__(/*! wix-ui-react/components/languagePicker/languagePicker */ 122);
	var slider = __webpack_require__(/*! wix-ui-react/components/slider/slider */ 123);
	var stepper = __webpack_require__(/*! wix-ui-react/components/stepper/stepper */ 127);
	var tabs = __webpack_require__(/*! wix-ui-react/components/tabs/tabs */ 131);
	var textInput = __webpack_require__(/*! wix-ui-react/components/textInput/textInput */ 139);
	var toggle = __webpack_require__(/*! wix-ui-react/components/switches/toggle */ 147);
	var toggleButtonsGroup = __webpack_require__(/*! wix-ui-react/components/switches/toggleButtonsGroup */ 155);
	var paletteDisplayer = __webpack_require__(/*! wix-ui-react/components/colorSpace/paletteDisplayer */ 157);
	var fontPicker = __webpack_require__(/*! wix-ui-react/components/fontPicker/fontPicker */ 165);
	var sectionDividerLabeled = __webpack_require__(/*! wix-ui-react/components/sectionDividerLabeled/sectionDividerLabeled */ 168);
	var teaserPopup = __webpack_require__(/*! wix-ui-react/components/teaserPopup/teaserPopup */ 173);
	var textInputWithButton = __webpack_require__(/*! wix-ui-react/components/textInputWithButton/textInputWithButton */ 179);
	var preloader = __webpack_require__(/*! wix-ui-react/components/preloader */ 189);
	var imagePreview = __webpack_require__(/*! wix-ui-react/components/imagePreview/imagePreview */ 194);
	var panelTabs = __webpack_require__(/*! wix-ui-react/components/panelTabs/tabs */ 200);
	var appSettings = __webpack_require__(/*! wix-ui-react/appSettings/appSettings */ 210);
	var fontAndColorPicker = __webpack_require__(/*! wix-ui-react/components/fontAndColorPicker/fontAndColorPicker */ 220);

	__webpack_require__(/*! cssCollector */ 224);

	module.exports = {
	    symbol: symbols.symbol,
	    checkbox: checkbox,
	    dock: dock,
	    radioButtons: radioButtons,
	    tabs: tabs,
	    slider: slider,
	    stepper: stepper,
	    dropDown: dropDown,
	    dropDownSelect: dropDownSelect,
	    colorPickerSlider: colorPickerSlider,
	    colorPickerInput: colorPickerInput,
	    button: button,
	    tooltip: tooltip,
	    toggleSwitch: toggle,
	    toggleButtons: buttonsGroup,
	    OpenedPanels: openedPanels,
	    languagePicker: languagePicker,
	    toggleButtonsGroup: toggleButtonsGroup,
	    textInput: textInput,
	    paletteDisplayer: paletteDisplayer,
	    fontPicker: fontPicker,
	    fontAndColorPicker: fontAndColorPicker,
	    sectionDividerLabeled: sectionDividerLabeled,
	    teaserPopup: teaserPopup,
	    textInputWithButton: textInputWithButton,
	    preloader: preloader,
	    imagePreview: imagePreview,
	    panelTabs: panelTabs,
	    appSettings: appSettings
	};

/***/ },
/* 3 */
/*!***********************!*\
  !*** ./js/symbols.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var symbol = __webpack_require__(/*! symbols/control/symbol */ 4);
	var symbolsData = __webpack_require__(/*! symbols/data/symbols */ 7);

	__webpack_require__(/*! symbols/symbols.scss */ 9);

	module.exports = {
	    symbol: symbol,
	    symbolsData: symbolsData
	};

/***/ },
/* 4 */
/*!**************************************!*\
  !*** ./js/symbols/control/symbol.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! symbols/data/symbols */ 7), __webpack_require__(/*! symbols/control/symbol.rt */ 8)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, symbols, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'Symbol',
	        propTypes: {
	            name: React.PropTypes.string.isRequired,
	            className: React.PropTypes.string,
	            onClick: React.PropTypes.func,
	            style: React.PropTypes.object
	        },
	        getSvgDef: function getSvgDef() {
	            var ret = symbols[this.props.name];
	            if (!ret) {
	                console.error('SVG symbol %s does not exist', this.props.name);
	            }
	            return ret || { content: '', svg: {} };
	        },
	        // TODO: Move this into a mixin & search for all occurrences
	        getClassName: function getClassName(defaultClassName) {
	            return (defaultClassName ? defaultClassName : '') + (this.props.className ? ' ' + this.props.className : '');
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 5 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/*!********************!*\
  !*** external "_" ***!
  \********************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/*!************************************!*\
  !*** ./js/symbols/data/symbols.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {
	    "use strict";

	    var aliases = {
	        PPOpenMonthlyArrow: 'playAnimation',
	        infoSmall: 'info',
	        mobileCompWithLink: 'link'
	    };

	    var addAliases = function addAliases(symbols, aliases) {
	        _.forEach(aliases, function (value, key) {
	            symbols[value] = symbols[key];
	        });
	        return symbols;
	    };

	    var customIcons = {
	        "globus": {
	            "svg": {
	                "width": "16",
	                "height": "19",
	                "viewBox": "0 0 16 19"
	            },
	            "content": "<path fill=\"#2B5672\" fill-rule=\"evenodd\" d=\"M9.005 13.955a6.958 6.958 0 0 1-4.948-2.046 6.937 6.937 0 0 1-2.05-4.94c.002-1.696.603-3.3 1.704-4.568l1.44 1.45a4.96 4.96 0 0 0-1.256 3.282 5 5 0 0 0 5 5c1.325 0 2.52-.524 3.416-1.366l1.296 1.464a6.953 6.953 0 0 1-4.601 1.723m-.11-10.857a4.04 4.04 0 0 1 4.036 4.036 4.04 4.04 0 0 1-4.035 4.037A4.04 4.04 0 0 1 4.86 7.135a4.04 4.04 0 0 1 4.035-4.036m5.77 9.523l.335-.334-2.02-2.282a4.97 4.97 0 0 0 .915-2.87 5 5 0 0 0-5-5 4.95 4.95 0 0 0-3.012 1.033L3.703 1l-.358.32A7.93 7.93 0 0 0 1 6.97c0 2.135.833 4.142 2.345 5.65a7.942 7.942 0 0 0 5.196 2.32L8.543 17h-2v1h5v-1h-2v-2.064a7.946 7.946 0 0 0 5.123-2.315\" ></path>"
	        },
	        "phone": {
	            "svg": {
	                "width": "16",
	                "height": "19",
	                "viewBox": "0 0 16 19"
	            },
	            "content": "<path fill=\"#2B5672\" fill-rule=\"evenodd\" d=\"M5.008 3.2l-.644.49A3.484 3.484 0 0 0 3.02 5.993a3.514 3.514 0 0 0 .647 2.596l4.055 5.52a3.394 3.394 0 0 0 4.813.708l.646-.49-1.915-2.606-1.28.973a.485.485 0 0 1-.69-.1L5.543 7.48a.507.507 0 0 1 .1-.698l1.28-.974L5.01 3.2zm5.472 13.315a4.42 4.42 0 0 1-3.546-1.807L2.88 9.188a4.528 4.528 0 0 1-.834-3.34c.17-1.188.783-2.24 1.73-2.958l1.037-.79a.485.485 0 0 1 .688.102L8.005 5.61a.503.503 0 0 1-.1.7l-1.28.974 3.165 4.31 1.28-.973a.484.484 0 0 1 .688.103l2.504 3.408a.506.506 0 0 1-.1.7l-1.04.79a4.332 4.332 0 0 1-2.642.895z\" ></path>"
	        },
	        "premiumLarge": {
	            "svg": {
	                "width": "22",
	                "height": "22",
	                "viewBox": "0 0 22 22"
	            },
	            "content": "<g fill=\"none\" fill-rule=\"evenodd\" ><path fill=\"#AA4DC8\" stroke=\"#FFF\" d=\"M11 1c5.523 0 10 4.477 10 10s-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1\" ></path><path fill=\"#FFF\" d=\"M16 7h-1.25s.228 1.925-1.572 1.925S11.625 7 11.625 7h-1.25s.3 1.91-1.523 1.91S7.25 7 7.25 7H6l.625 8h8.75L16 7z\" ></path></g>"
	        },
	        "premiumSmall": {
	            "svg": {
	                "width": "12",
	                "height": "10",
	                "viewBox": "0 0 12 10"
	            },
	            "content": "<path fill=\"#AA4DC8\" fill-rule=\"evenodd\" d=\"M11 1H9.75s.228 1.942-1.572 1.942S6.625 1 6.625 1h-1.25s.3 1.928-1.523 1.928S2.25 1 2.25 1H1l1 8h8l1-8z\" ></path>"
	        },
	        "help": {
	            "svg": {
	                "width": "18",
	                "height": "18",
	                "viewBox": "0 0 18 18"
	            },
	            "content": '<path fill="#2b5672" fill-rule="evenodd"  d="M11.207 5.047a2.733 2.733 0 0 0-.9-.51 3.37 3.37 0 0 0-1.1-.175 3.62 3.62 0 0 0-1.354.238 2.725 2.725 0 0 0-.994.665 2.973 2.973 0 0 0-.617 1.043 2.464 2.464 0 0 0-.217 1.358h.882a5.152 5.152 0 0 1 .126-1.015 2.333 2.333 0 0 1 .42-.808 1.947 1.947 0 0 1 .708-.542 2.378 2.378 0 0 1 1-.2 2.13 2.13 0 0 1 .77.14 2.037 2.037 0 0 1 .637.385 1.8 1.8 0 0 1 .43.6 1.822 1.822 0 0 1 .16.77 1.95 1.95 0 0 1-.258.994 3.484 3.484 0 0 1-.65.81q-.446.407-.752.73a3.435 3.435 0 0 0-.5.664 1.488 1.488 0 0 0-.28.586 5.89 5.89 0 0 0-.07.887h.876c.01 0 .028-.558.056-.782a1.2 1.2 0 0 1 .168-.485 1.67 1.67 0 0 1 .378-.433c.168-.16.4-.362.7-.66A5.4 5.4 0 0 0 11.7 8.27a2.43 2.43 0 0 0 .343-1.324 2.54 2.54 0 0 0-.224-1.082 2.382 2.382 0 0 0-.613-.817zm-2.665 7.995L8.5 14.57h1.18L9.625 13zM9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm0 17a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8z"/>'
	        },
	        "email": {
	            "svg": {
	                "width": "15",
	                "height": "13",
	                "viewBox": "0 0 15 13"
	            },
	            "content": '<path fill="#2b5672" fill-rule="evenodd" d="M14.74 1.5A1.487 1.487 0 0 0 13.268 0H1.475A1.487 1.487 0 0 0 0 1.5v10A1.487 1.487 0 0 0 1.475 13h11.792a1.487 1.487 0 0 0 1.474-1.5v-10zM13.525 1L7.4 5.653 1.25 1h12.274zm-.257 11H1.475a1.043 1.043 0 0 1-.492-.918V1.315l6.21 4.765a.34.34 0 0 0 .416 0l6.15-4.718v9.72a1.043 1.043 0 0 1-.493.918z"/>'
	        }
	    };

	    var editorIcons = {
	        "arrowDown": {
	            "svg": {
	                "width": "12",
	                "height": "12",
	                "viewBox": "135.1 -517.4 1024 1024"
	            },
	            "content": "<path d=\"M137.3-195c0 17.4 7.4 34.7 19.8 47.1l441.4 409.1c27.3 24.8 71.9 24.8 99.2 0l438.9-429c27.3-24.8 27.3-66.9 0-91.7-27.3-24.8-71.9-24.8-99.2 0L648.1 122.3 256.3-242.2c-27.3-24.8-71.9-24.8-99.2 0-12.4 14.9-19.8 29.8-19.8 47.2z\" class=\"c1\" ></path>"
	        },
	        "infoIcon": {
	            "svg": {
	                "width": "18",
	                "height": "18",
	                "preserveAspectRatio": "xMidYMid",
	                "viewBox": "1.5 1.5 18 18"
	            },
	            "content": "<circle cx=\"10.5\" cy=\"10.5\" r=\"8\" ></circle><path fill-rule=\"evenodd\" d=\"M10.5 19.5a9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9zm-8-9c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8zm10 5h-4l1-2v-3h-1l1-2h2v5l1 2zm-3-10h2v2h-2v-2z\" ></path>"
	        },
	        "firstTimeInfoBoxClose": {
	            "svg": {
	                "width": "18",
	                "height": "18",
	                "viewBox": "0 0 18 18"
	            },
	            "content": "<path fill=\"none\" d=\"M5 5l8 8M13 5l-8 8\" ></path>"
	        },
	        "firstTimeInfoBoxArrowRight": {
	            "svg": {
	                "width": "5",
	                "height": "8",
	                "viewBox": "0 0 5 8"
	            },
	            "content": "<path fill=\"none\" d=\"M1 1l3 3-3 3\" ></path>"
	        },
	        "infoSmall": {
	            "svg": {
	                "width": "18",
	                "height": "18",
	                "viewBox": "0 0 18 18"
	            },
	            "content": "<path fill=\"#7a92a5\" fill-rule=\"evenodd\" d=\"M9 0a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9zm0 17c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM8 6h2V4H8v2zm2 6V7H8L7 9h1v3l-1 1v1h4v-1l-1-1z\" ></path>"
	        },
	        "checkbox": {
	            "svg": {
	                "width": "16",
	                "height": "16",
	                "viewBox": "0 0 16 16"
	            },
	            "content": "<path d=\"M5 16c-2.335 0-5-2.66-5-5V5c0-2.34 2.665-5 5-5h6c2.335 0 5 2.66 5 5v6c0 2.34-2.665 5-5 5H4.235\" class=\"bg\" ></path><path d=\"M11.556.89A3.56 3.56 0 0 1 15.11 4.45v7.096a3.56 3.56 0 0 1-3.554 3.563H4.444A3.56 3.56 0 0 1 .89 11.55V4.452A3.56 3.56 0 0 1 4.443.89h7.112m0-.89H4.444A4.453 4.453 0 0 0 0 4.452v7.096A4.453 4.453 0 0 0 4.444 16h7.112A4.453 4.453 0 0 0 16 11.548V4.452A4.453 4.453 0 0 0 11.556 0\" class=\"border\" ></path><path d=\"M4.008 8.344c.03.205.145.4.334.534l2.78 1.96a.886.886 0 0 0 1.192-.157l3.512-4.383a.778.778 0 0 0-.164-1.132.883.883 0 0 0-1.195.155l-3 3.745-2.103-1.48a.885.885 0 0 0-1.194.162.778.778 0 0 0-.162.597\" class=\"check\" ></path><path d=\"M12 8c0 .552-.398 1-.89 1H4.89C4.397 9 4 8.552 4 8s.398-1 .89-1h6.22c.492 0 .89.448.89 1\" class=\"minus\" ></path>"
	        },
	        "switch": {
	            "svg": {
	                "width": "50",
	                "height": "28",
	                "viewBox": "0 0 50 28"
	            },
	            "content": "<path d=\"M14 24.5C7.66 24.5 2.5 19.34 2.5 13S7.66 1.5 14 1.5h21c6.34 0 11.5 5.16 11.5 11.5S41.34 24.5 35 24.5H14\" class=\"st1\" ></path><path d=\"M35 2c6.065 0 11 4.935 11 11s-4.935 11-11 11H14C7.935 24 3 19.065 3 13S7.935 2 14 2h21m0-1H14C7.373 1 2 6.373 2 13s5.373 12 12 12h21c6.627 0 12-5.373 12-12S41.627 1 35 1\" class=\"st2\" ></path><g class=\"switch-thumb-regular\" ><path d=\"M25 13.5C25 19.3 20.075 24 14 24S3 19.3 3 13.5v-1C3 6.7 7.925 2 14 2s11 4.7 11 10.5v1\" class=\"switch-thumb-circle\" ></path><path d=\"M10.008 13.344c.03.205.145.4.334.534l2.78 1.96a.886.886 0 0 0 1.192-.157l3.512-4.384a.778.778 0 0 0-.164-1.13.883.883 0 0 0-1.195.154l-3 3.744-2.103-1.48a.885.885 0 0 0-1.194.163.778.778 0 0 0-.162.597\" class=\"switch-thumb-check\" ></path><path d=\"M19 13c0 .552-.497 1-1.11 1h-7.78C9.5 14 9 13.552 9 13s.498-1 1.11-1h7.78c.613 0 1.11.448 1.11 1\" class=\"switch-thumb-minus\" ></path></g><g class=\"switch-thumb-selected\" ><path d=\"M46 13.5C46 19.3 41.075 24 35 24s-11-4.7-11-10.5v-1C24 6.7 28.925 2 35 2s11 4.7 11 10.5v1\" class=\"switch-thumb-circle\" ></path><path d=\"M31.008 13.344c.03.205.145.4.334.534l2.78 1.96a.886.886 0 0 0 1.192-.157l3.512-4.384a.778.778 0 0 0-.164-1.13.883.883 0 0 0-1.195.154l-3 3.744-2.103-1.48a.885.885 0 0 0-1.194.163.778.778 0 0 0-.162.597\" class=\"switch-thumb-check\" ></path><path d=\"M40 13c0 .552-.497 1-1.11 1h-7.78C30.5 14 30 13.552 30 13s.498-1 1.11-1h7.78c.613 0 1.11.448 1.11 1\" class=\"switch-thumb-minus\" ></path></g>"
	        },
	        "inputValidationError": {
	            "svg": {
	                "width": "25",
	                "height": "25",
	                "viewBox": "0 0 25 25"
	            },
	            "content": "<circle cx=\"13\" cy=\"12\" r=\"12\" ></circle><path fill-rule=\"evenodd\" d=\"M13 7c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1z\" class=\"c1\" ></path><circle cx=\"13\" cy=\"17\" r=\"1\" class=\"c2\" ></circle>"
	        },
	        "inputValidationSuccess": {
	            "svg": {
	                "width": "25",
	                "height": "25",
	                "viewBox": "0 0 25 25"
	            },
	            "content": "<circle cx=\"13\" cy=\"12\" r=\"12\" ></circle><path fill-rule=\"evenodd\" d=\"M17.38 10.91l-4.68 5.25h-.01c-.07.17-.17.33-.32.43-.4.25-.91.1-1.14-.35L8.99 13.4c-.23-.45-.1-1.02.3-1.27.4-.26.91-.11 1.14.34l1.5 1.9 4.27-4.78c.33-.37.86-.37 1.18 0 .33.36.33.95 0 1.32z\" class=\"c1\" ></path>"
	        },
	        "image-change": {
	            "svg": {
	                "width": "14",
	                "height": "14",
	                "viewBox": "0 0 70 70"
	            },
	            "content": "<path fill=\"#3799EB\" fill-rule=\"evenodd\" d=\"M62.5 67.5V50.83S51.67 66.91 31.39 66.91C12.75 66.91-2.42 52.5-2.42 32.5h5c0 15 12.92 29.41 28.81 29.41 10.49 0 22.25-5.77 27.36-14.83l-16.25-.2V42.5h25v25h-5zM33.67 3.09c-10.49 0-22.27 5.77-27.38 14.83l16.21.2v4.38h-25v-25h5v16.67S13.37-1.91 33.65-1.91C52.29-1.91 67.5 12.5 67.5 32.5h-5c0-15-12.94-29.41-28.83-29.41z\" ></path>"
	        },
	        "image-effects": {
	            "svg": {
	                "width": "16",
	                "height": "16",
	                "viewBox": "0 0 16 16"
	            },
	            "content": "<path fill=\"#3799EB\" fill-rule=\"evenodd\" d=\"M12.5 12.83v3h-1v-3H5a2.5 2.5 0 0 1-2.5-2.5v-6.5h-3v-1h3v-3h1v3H10c1.57 0 2.5.75 2.5 2v7h3v1h-3zm-1-2v-1-5c0-.24 0-1-1.5-1H3.5v6.5c0 .83.67 1.5 1.5 1.5h6.5v-1z\" ></path>"
	        },
	        "showComp": {
	            "svg": {
	                "width": "18",
	                "height": "14",
	                "viewBox": "0 0 18 13"
	            },
	            "content": "<path fill=\"#3798EB\" fill-rule=\"evenodd\" d=\"M17.78 6.19c-.11.26-2.74 6.31-8.78 6.31C2.96 12.5.33 6.45.22 6.19L.14 6l.08-.19C.33 5.55 2.96-.5 9-.5c6.04 0 8.67 6.05 8.78 6.31l.08.19-.08.19zM9 .5C4.2.5 1.73 5 1.24 6 1.73 7 4.2 11.5 9 11.5S16.27 7 16.76 6C16.27 5 13.8.5 9 .5zm0 8.6C7.29 9.1 5.9 7.71 5.9 6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1 0 1.71-1.39 3.1-3.1 3.1zm0-5.2a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2z\" ></path>"
	        },
	        "mobileCompWithLink": {
	            "svg": {
	                "width": "16",
	                "height": "17",
	                "viewBox": "0 0 16 17"
	            },
	            "content": "<path fill=\"#3197EF\" fill-rule=\"evenodd\" d=\"M14.895 1.606a3.786 3.786 0 0 0-5.35 0l-1.65 1.652a.864.864 0 0 0 0 1.22.864.864 0 0 0 1.22 0l1.65-1.653a2.06 2.06 0 0 1 2.91 0 2.06 2.06 0 0 1 0 2.91l-3.328 3.33a2.06 2.06 0 0 1-2.91 0 .863.863 0 0 0-1.22 1.22 3.772 3.772 0 0 0 2.675 1.104 3.77 3.77 0 0 0 2.674-1.106l3.33-3.33a3.788 3.788 0 0 0 0-5.348zM6.89 12.522l-1.652 1.652a2.06 2.06 0 0 1-2.91 0 2.06 2.06 0 0 1 0-2.91l3.33-3.33a2.058 2.058 0 0 1 2.908 0 .864.864 0 0 0 1.22 0 .864.864 0 0 0 0-1.22 3.786 3.786 0 0 0-5.35 0l-3.327 3.33A3.757 3.757 0 0 0 0 12.72c0 1.01.394 1.96 1.11 2.674A3.77 3.77 0 0 0 3.782 16.5c.968 0 1.936-.37 2.674-1.106L8.11 13.74a.86.86 0 1 0-1.22-1.218z\" ></path>"
	        },
	        "delete": {
	            "svg": {
	                "width": "13",
	                "height": "15",
	                "viewBox": "0 0 13 15"
	            },
	            "content": "<path fill=\"#3799EB\" d=\"M12 3v9a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V3H0V2h4v-.5C4 .673 4.684 0 5.525 0h1.867C8.25 0 9 .7 9 1.5V2h4v1h-1zM8 1.5c0-.248-.307-.5-.608-.5H5.525C5.24 1 5 1.23 5 1.5V2h3v-.5zM11 3H9 4 2v9a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V3zM8 5h1v6H8V5zM6 5h1v6H6V5zM4 5h1v6H4V5z\" ></path>"
	        },
	        "calendar": {
	            "svg": {
	                "width": "14",
	                "height": "14",
	                "viewBox": "0 0 14 14"
	            },
	            "content": "<path fill=\"#3799EB\" fill-rule=\"evenodd\" d=\"M12 13.97H2c-1.1 0-2-1.12-2-2.22V4.06c0-1.1.9-1.9 2-1.9h2V.72c0-.28.22-.5.5-.5s.5.22.5.5v1.44h4V.72c0-.28.22-.5.5-.5s.5.22.5.5v1.44h2c1.1 0 2 .8 2 1.9v7.69c0 1.1-.9 2.22-2 2.22zm1-9.91c0-.55-.45-.9-1-.9h-2v.37c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-.37H5v.37c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-.37H2c-.55 0-1 .35-1 .9v7.69c0 .55.45 1.22 1 1.22h10c.55 0 1-.67 1-1.22V4.06zm-4 5h2V11H9V9.06zm0-2.97h2v2H9v-2zM6 9.06h2V11H6V9.06zm0-2.97h2v2H6v-2zM3 9.06h2V11H3V9.06zm0-2.97h2v2H3v-2z\" ></path>"
	        },
	        "magnifyingGlass": {
	            "svg": {
	                "width": "15",
	                "height": "15",
	                "viewBox": "0 0 15 15"
	            },
	            "content": "<path fill=\"#3799EB\" fill-rule=\"evenodd\" d=\"M14.25 13.54l-2.84-2.85c1.02-1.17 1.65-2.67 1.65-4.3 0-3.59-3.04-6.64-6.63-6.64S-.25 2.8-.25 6.39s3.06 6.63 6.65 6.63c1.62 0 3.12-.62 4.3-1.62l2.85 2.85.7-.71zM6.4 12.05C3.37 12.05.78 9.43.78 6.39.78 3.36 3.32.75 6.35.75 9.39.75 12 3.36 12 6.39c0 3.04-2.57 5.66-5.6 5.66z\" ></path>"
	        },
	        "plus": {
	            "svg": {
	                "width": "9",
	                "height": "9",
	                "viewBox": "0 0 9 9"
	            },
	            "content": "<path fill=\"#3799EB\" d=\"M4 0h1v9H4z\" ></path><path fill=\"#3799EB\" d=\"M0 4h9v1H0z\" ></path>"
	        },
	        "camera": {
	            "svg": {
	                "width": "55",
	                "height": "42",
	                "viewBox": "0 0 55 42"
	            },
	            "content": "<path fill=\"#5B99E7\" fill-rule=\"evenodd\" d=\"M46.06 14.94c1.11 0 2-.89 2-1.99 0-1.09-.89-1.98-2-1.98-1.1 0-2 .89-2 1.98 0 1.1.9 1.99 2 1.99m0 2c-2.21 0-4-1.79-4-3.99s1.79-3.98 4-3.98 4 1.78 4 3.98-1.79 3.99-4 3.99z\" ></path><path fill=\"#5B99E7\" fill-rule=\"evenodd\" d=\"M50.06 39.94c1.66 0 3-1.35 3-3V8.97c0-1.66-1.34-3-3-3H5.09c-1.65 0-3 1.34-3 3v27.97c0 1.65 1.35 3 3 3h44.97m0 2H5.09c-2.76 0-5-2.24-5-5V8.97c0-2.76 2.24-5 5-5h44.97c2.76 0 5 2.24 5 5v27.97c0 2.76-2.24 5-5 5z\" ></path><path fill=\"#5B99E7\" fill-rule=\"evenodd\" d=\"M28.08 34.94c6.61 0 11.98-5.38 11.98-11.99s-5.37-11.98-11.98-11.98-11.99 5.37-11.99 11.98 5.38 11.99 11.99 11.99m0 2c-7.73 0-13.99-6.26-13.99-13.99 0-7.72 6.26-13.98 13.99-13.98 7.72 0 13.98 6.26 13.98 13.98 0 7.73-6.26 13.99-13.98 13.99zM38.89 3.97a2.99 2.99 0 0 0-2.83-2H19.09c-1.3 0-2.41.83-2.82 2h22.62m2.17 2H14.09v-1c0-2.76 2.24-5 5-5h16.97c2.76 0 5 2.24 5 5v1z\" ></path>"
	        },
	        "contactForm": {
	            "svg": {
	                "width": "22",
	                "height": "22",
	                "preserveAspectRatio": "xMidYMid",
	                "viewBox": "0 0 22 22"
	            },
	            "content": "<path fill-rule=\"evenodd\" d=\"M21.883 3.745a2.177 2.177 0 0 0-2.177-2.177H2.294A2.177 2.177 0 0 0 .117 3.745v14.51c0 1.202.975 2.177 2.177 2.177h17.412a2.177 2.177 0 0 0 2.177-2.177V3.745zm-1.798-.725l-9.04 6.752L1.963 3.02h18.122zm-.38 15.96H2.296c-.402 0-.727-.932-.727-1.33V3.475l9.17 6.914a.505.505 0 0 0 .613 0l9.08-6.846v14.104c0 .4-.323 1.332-.724 1.332z\" class=\"cls-4\" ></path>"
	        },
	        "fillDesign": {
	            "svg": {
	                "width": "11",
	                "height": "15",
	                "preserveAspectRatio": "xMidYMid",
	                "viewBox": "0 0 11 15"
	            },
	            "content": "<path fill-rule=\"evenodd\" d=\"M5.464-.006S-.01 4.116-.01 8.704c0 3.06 2.505 5.29 5.497 5.29s5.45-2.23 5.45-5.29c0-4.588-5.473-8.71-5.473-8.71zm-.526 11c-1 0-2-1.12-2-2.5s1-2.5 2-2.5v5z\" class=\"cls-2\" ></path>"
	        },
	        "upgrade": {
	            "svg": {
	                "width": "16",
	                "height": "14",
	                "viewBox": "0 0 16 14"
	            },
	            "content": "<path fill=\"#2B3F4F\" fill-rule=\"evenodd\" d=\"M16 0l-1 11H1L0 0h2s-.35 3 2.56 3C7.48 3 7 0 7 0h2s-.4 3.02 2.48 3.02S14 0 14 0h2zm-1 14H1v-2h14v2z\" ></path>"
	        },
	        "PPOpenMonthlyArrow": {
	            "svg": {
	                "width": "15",
	                "height": "15",
	                "viewBox": "0 0 15 15"
	            },
	            "content": '<path fill=#549CD5" d="M10.6 7.7l-4.3 3.5V4.3z" ></path><circle cx="7.5" cy="7.5" r="6.8" fill="none" stroke="#549CD5" stroke-miterlimit="10" ></circle>'
	        },
	        "arrowLeftSmall": {
	            "svg": {
	                "width": "3",
	                "height": "5",
	                "viewBox": "0 0 3 5"
	            },
	            "content": "<path fill=\"#3899EC\" d=\"M.466 2.99L0 2.5l.31-.327L2.07.327 2.378 0 3 .653 2.69.98 1.242 2.5 2.69 4.02l.31.327L2.38 5l-.312-.327L.466 2.99z\" ></path>"
	        },
	        "cyclePickerMoreArrow": {
	            "svg": {
	                "width": "9",
	                "height": "5",
	                "viewBox": "0 0 9 5"
	            },
	            "content": "<path fill=\"#5C9AE9\" fill-rule=\"evenodd\" d=\"M4.46 5L0 0h2l2.38 3L7 0h2L4.46 5z\" ></path>"
	        },
	        "linkBtnThin": {
	            "svg": {
	                "width": "24",
	                "height": "24",
	                "viewBox": "0 0 24 24"
	            },
	            "content": "<path d=\"M17.1 6.9c-1.25-1.25-3.197-1.19-4.526.14l-.887.885.605.606.886-.886c1.002-1 2.396-1.06 3.318-.14.92.92.86 2.316-.14 3.318l-1.694 1.695c-.478.477-1.076.757-1.683.788a2.132 2.132 0 0 1-1.64-.644l-.605.605a2.99 2.99 0 0 0 2.13.898c.054 0 .105 0 .157-.003.82-.043 1.618-.41 2.244-1.04l1.695-1.693c1.33-1.33 1.39-3.277.14-4.527zm-6.278 9.456c-.477.476-1.072.755-1.68.785-.602.042-1.182-.192-1.636-.646-.454-.454-.678-1.02-.647-1.637.03-.606.31-1.202.784-1.68l1.695-1.694c.995-.997 2.39-1.054 3.31-.133l.606-.605c-1.253-1.25-3.197-1.194-4.522.133L7.04 12.573c-.628.627-.996 1.423-1.036 2.242-.042.853.276 1.664.896 2.285.6.6 1.364.9 2.14.9.84 0 1.697-.348 2.387-1.04l.865-.865-.605-.604-.865.866z\" ></path>"
	        },
	        "pencil": {
	            "svg": {
	                "width": "12",
	                "height": "14",
	                "viewBox": "0 0 14 14"
	            },
	            "content": "<path fill=\"#2B5571\" fill-rule=\"evenodd\" d=\"M13.01 2.06L11.43.48c-.74-.74-2.03-.74-2.77 0L7.38 1.77l-.32.32-5.95 5.95-1.4 5.74 5.74-1.4 5.95-5.95 1.61-1.6c.76-.77.76-2.01 0-2.77zM.6 12.89l1.2-3.73 2.53 2.53-3.73 1.2zm4.64-1.55l-1.23-1.23 3.24-3.24-.63-.63-3.24 3.24-1.23-1.22 5.23-5.23 3.08 3.09-5.22 5.22zm7.14-7.14l-1.29 1.29L8.01 2.4l1.28-1.29c.41-.4 1.11-.4 1.51 0l1.58 1.58c.41.41.41 1.09 0 1.51z\" ></path>"
	        },
	        "image-btn": {
	            "svg": {
	                "width": "34",
	                "height": "34",
	                "viewBox": "0 0 34 34"
	            },
	            "content": "<path d=\"M21 11h-8a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zm-7.5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-1.422 9l3-3.004 1 1.998 3-3.997 3 5.003h-10z\" class=\"st0\" ></path>"
	        },
	        "benefitsModalVSign": {
	            "svg": {
	                "width": "9",
	                "height": "8",
	                "viewBox": "-.2 0 9 7.7"
	            },
	            "content": "<path fill=\"#2B5672\" d=\"M8.33 1.75L3.64 7.02c0 .01 0 .01-.01.01-.07.17-.17.32-.32.42-.4.26-.91.11-1.14-.34L-.08 4.26c-.23-.45-.09-1.03.31-1.29s.91-.1 1.14.35l1.5 1.91L7.15.42c.33-.37.85-.37 1.18 0 .33.37.33.96 0 1.33z\" ></path>"
	        },
	        "mba_Phone_number": {
	            "svg": {
	                "width": "34",
	                "height": "34",
	                "viewBox": "0 0 34 34"
	            },
	            "content": "<g fill=\"#2D4150\" fill-rule=\"evenodd\" ><path d=\"M14.858 11.574L13.83 9.882a1 1 0 0 0-1.56-.188l-.572.57a1 1 0 0 0 0 1.415l2.01 2.01.963-.962a1 1 0 0 0 .188-1.154M14.393 20.936c2.177 2.177 4.778 3.364 6.9 1.242l-2.16-2.16c-.706.708-1.63-.214-2.618-1.203l-2.053-2.053c-.99-.99-1.912-1.913-1.205-2.62l-2.16-2.158c-2.12 2.12-.933 4.722 1.243 6.9l2.053 2.052M21.702 18.418l1.692 1.028a1 1 0 0 1 .19 1.56l-.573.573a1 1 0 0 1-1.413 0l-2.01-2.013.96-.962a1 1 0 0 1 1.155-.187\" ></path></g>"
	        },
	        "mba_email": {
	            "svg": {
	                "width": "34",
	                "height": "34",
	                "viewBox": "0 0 34 34"
	            },
	            "content": "<g fill=\"#2D4150\" fill-rule=\"evenodd\" ><path d=\"M24.33 12.132A2.982 2.982 0 0 0 22 11H12a2.99 2.99 0 0 0-2.52 1.383l7.534 5.97 7.316-6.22M9.078 13.34A2.995 2.995 0 0 0 9 14v6c0 .663.222 1.27.585 1.766l4.637-4.35-5.144-4.076M24.41 21.77c.367-.497.59-1.105.59-1.77v-6c0-.343-.07-.668-.176-.975l-5.107 4.342 4.694 4.403\" ></path><path d=\"M17.035 19.647l-2.022-1.603-4.715 4.423A2.98 2.98 0 0 0 12 23h10c.63 0 1.215-.197 1.698-.53L18.95 18.02l-1.915 1.63\" ></path></g>"
	        }
	    };

	    var symbols = _.defaults(customIcons, editorIcons);

	    return addAliases(symbols, aliases);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 8 */
/*!**************************************!*\
  !*** ./js/symbols/control/symbol.rt ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';
	    function mergeProps(inline, external) {
	        var res = _.assign({}, inline, external);
	        if (inline.hasOwnProperty('style')) {
	            res.style = _.defaults(res.style, inline.style);
	        }
	        if (inline.hasOwnProperty('className') && external.hasOwnProperty('className')) {
	            res.className = external.className + ' ' + inline.className;
	        }
	        return res;
	    }
	    function scopeDef2() {
	        var def = this.getSvgDef();
	        return React.createElement('svg', mergeProps({
	            'className': this.getClassName('symbol-' + this.props.name),
	            'style': this.props.style ? this.props.style : {},
	            'onClick': this.props.onClick,
	            'dangerouslySetInnerHTML': { __html: def.content }
	        }, def.svg));
	    }
	    return function () {
	        return scopeDef2.apply(this, []);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 9 */
/*!*********************************!*\
  !*** ./js/symbols/symbols.scss ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./symbols.scss */ 10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./symbols.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./symbols.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/*!*****************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/symbols/symbols.scss ***!
  \*****************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, ".symbol-firstTimeInfoBoxClose {\n  stroke: #3899ec; }\n\n.dropdown .symbol-arrowDown,\n.dropdown-options .symbol-arrowDown {\n  fill: #3899ec;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%); }\n\n.dropdown-options .arrow:hover .symbol-arrowDown {\n  opacity: 1; }\n\n.dropdown.disabled.select .symbol-arrowDown {\n  fill: #bcbcbc; }\n\n.font-family-dd.toolbar-mode .symbol-arrowDown {\n  width: 9px;\n  padding: 0; }\n\n.font-family-dd.toolbar-mode .expand.arrow:hover .symbol-arrowDown {\n  fill: #3899ec; }\n\n.symbol-inputValidationError {\n  fill: #ee5951; }\n  .symbol-inputValidationError .c1,\n  .symbol-inputValidationError .c2 {\n    fill: #fff; }\n\n.symbol-inputValidationSuccess {\n  fill: #60bc57; }\n  .symbol-inputValidationSuccess .c1 {\n    fill: #fff; }\n  .media-button-filename-text .symbol-inputValidationSuccess {\n    width: 20px;\n    height: 20px;\n    padding-left: 4px;\n    vertical-align: middle;\n    display: inline-block;\n    background-color: #fff; }\n\n.symbol-playAnimation circle {\n  fill: none !important; }\n", ""]);

	// exports


/***/ },
/* 11 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 12 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 13 */
/*!******************************************************!*\
  !*** ./js/wix-ui-react/components/alignment/dock.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 5);
	var _ = __webpack_require__(/*! lodash */ 6);
	var Wix = __webpack_require__(/*! Wix */ 14);
	var template = __webpack_require__(/*! wix-ui-react/components/alignment/dock.rt */ 15);
	__webpack_require__(/*! baseUI/controls/dock.scss */ 44);
	__webpack_require__(/*! ./overrides.scss */ 46);

	var dockDirections = ['TOP_LEFT', 'TOP', 'TOP_RIGHT', 'LEFT', 'RIGHT', 'BOTTOM_LEFT', 'BOTTOM', 'BOTTOM_RIGHT'];

	var defaults = {
	    defaultValue: 'TOP'
	};

	module.exports = React.createClass({

	    displayName: 'Dock',
	    propTypes: {
	        value: React.PropTypes.oneOf(_.values(dockDirections))
	    },

	    getInitialState: function getInitialState() {
	        return {
	            value: this.props.defaultValue || defaults.defaultValue
	        };
	    },

	    getValueLink: function getValueLink(valueName) {
	        var that = this;
	        return {
	            value: that.state[valueName],
	            requestChange: function requestChange(newValue) {
	                that.handleChange(newValue, valueName);
	            }
	        };
	    },

	    handleChange: function handleChange(newValue) {
	        this.setState({
	            value: newValue
	        }, function () {

	            var compId = Wix.Utils.getOrigCompId();

	            if (newValue === 'RIGHT') {
	                newValue = 'CENTER_RIGHT';
	            }
	            if (newValue === 'LEFT') {
	                newValue = 'CENTER_LEFT';
	            }
	            if (newValue === 'TOP') {
	                newValue = 'TOP_CENTER';
	            }
	            if (newValue === 'BOTTOM') {
	                newValue = 'BOTTOM_CENTER';
	            }

	            if (compId) {
	                Wix.Settings.setWindowPlacement(compId, Wix.WindowPlacement[newValue], 0, 0);
	            }
	        });

	        if (_.isFunction(this.props.onChange)) {
	            this.props.onChange.call(this, newValue);
	        }
	    },

	    render: template
	});

/***/ },
/* 14 */
/*!**********************!*\
  !*** external "Wix" ***!
  \**********************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ },
/* 15 */
/*!******************************************************!*\
  !*** ./js/wix-ui-react/components/alignment/dock.rt ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/controls/dock */ 16)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, dock) {
	    'use strict';
	    return function () {
	        return React.createElement(dock, {
	            'label': this.props.title,
	            'onChange': this.handleChange,
	            'value': this.state.value,
	            'onPreviewHover': this.props.onPreviewHover
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 16 */
/*!************************************!*\
  !*** ./js/baseUI/controls/dock.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! baseUI/controls/dock.rt */ 17), __webpack_require__(/*! baseUI/controls/radioButtonsMixin */ 42)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, template, radioButtonsMixin) {
	    'use strict';

	    var dockDirections = ['TOP_LEFT', 'TOP', 'TOP_RIGHT', 'LEFT', 'RIGHT', 'BOTTOM_LEFT', 'BOTTOM', 'BOTTOM_RIGHT'];

	    return React.createClass({
	        displayName: 'dock',

	        propTypes: {
	            value: React.PropTypes.oneOf(_.values(dockDirections))
	        },

	        mixins: [radioButtonsMixin],

	        onDockMouseEnter: function onDockMouseEnter(direction) {
	            if (_.isFunction(this.props.onPreviewHover)) {
	                this.props.onPreviewHover(direction);
	            }
	        },

	        onDockChange: function onDockChange(direction) {
	            this.callOnChangeIfExists(direction);
	        },

	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 17 */
/*!************************************!*\
  !*** ./js/baseUI/controls/dock.rt ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/controls/infoIcon */ 18)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, infoIcon) {
	    'use strict';
	    return function () {
	        return React.createElement('div', {
	            'className': 'control-dock',
	            'onMouseLeave': this.props.onMouseLeave
	        }, this.hasLabel() && (this.props.infoText || this.props.infoText) ? React.createElement(infoIcon, {
	            'key': 'tooltip',
	            'title': this.props.infoTitle,
	            'text': this.props.infoText,
	            'size': 18
	        }) : null, React.createElement('label', { 'className': 'dock-label' }, this.getLabel()), React.createElement('div', { 'className': 'dock-corners-wrapper' }, React.createElement('label', {
	            'onMouseEnter': this.onDockMouseEnter.bind(null, 'TOP_LEFT'),
	            'onMouseLeave': this.props.onMouseLeave
	        }, React.createElement('input', {
	            'type': 'radio',
	            'name': this.getRadioGroupId(),
	            'onChange': this.onDockChange.bind(null, 'TOP_LEFT'),
	            'checked': this.props.value === 'TOP_LEFT',
	            'value': 'TOP_LEFT'
	        }), React.createElement('span', { 'className': 'square top left' })), React.createElement('label', {
	            'onMouseEnter': this.onDockMouseEnter.bind(null, 'TOP'),
	            'onMouseLeave': this.props.onMouseLeave
	        }, React.createElement('input', {
	            'type': 'radio',
	            'name': this.getRadioGroupId(),
	            'onChange': this.onDockChange.bind(null, 'TOP'),
	            'checked': this.props.value === 'TOP',
	            'value': 'TOP'
	        }), React.createElement('span', { 'className': 'square top' })), React.createElement('label', {
	            'onMouseEnter': this.onDockMouseEnter.bind(null, 'TOP_RIGHT'),
	            'onMouseLeave': this.props.onMouseLeave
	        }, React.createElement('input', {
	            'type': 'radio',
	            'name': this.getRadioGroupId(),
	            'onChange': this.onDockChange.bind(null, 'TOP_RIGHT'),
	            'checked': this.props.value === 'TOP_RIGHT',
	            'value': 'TOP_RIGHT'
	        }), React.createElement('span', { 'className': 'square top right' })), React.createElement('label', {
	            'onMouseEnter': this.onDockMouseEnter.bind(null, 'LEFT'),
	            'onMouseLeave': this.props.onMouseLeave
	        }, React.createElement('input', {
	            'type': 'radio',
	            'name': this.getRadioGroupId(),
	            'onChange': this.onDockChange.bind(null, 'LEFT'),
	            'checked': this.props.value === 'LEFT',
	            'value': 'LEFT'
	        }), React.createElement('span', { 'className': 'square left' })), React.createElement('label', {}, React.createElement('span', { 'className': 'square middle' })), React.createElement('label', {
	            'onMouseEnter': this.onDockMouseEnter.bind(null, 'RIGHT'),
	            'onMouseLeave': this.props.onMouseLeave
	        }, React.createElement('input', {
	            'type': 'radio',
	            'name': this.getRadioGroupId(),
	            'onChange': this.onDockChange.bind(null, 'RIGHT'),
	            'checked': this.props.value === 'RIGHT',
	            'value': 'RIGHT'
	        }), React.createElement('span', { 'className': 'square right' })), React.createElement('label', {
	            'onMouseEnter': this.onDockMouseEnter.bind(null, 'BOTTOM_LEFT'),
	            'onMouseLeave': this.props.onMouseLeave
	        }, React.createElement('input', {
	            'type': 'radio',
	            'name': this.getRadioGroupId(),
	            'onChange': this.onDockChange.bind(null, 'BOTTOM_LEFT'),
	            'checked': this.props.value === 'BOTTOM_LEFT',
	            'value': 'BOTTOM_LEFT'
	        }), React.createElement('span', { 'className': 'square bottom left' })), React.createElement('label', {
	            'onMouseEnter': this.onDockMouseEnter.bind(null, 'BOTTOM'),
	            'onMouseLeave': this.props.onMouseLeave
	        }, React.createElement('input', {
	            'type': 'radio',
	            'name': this.getRadioGroupId(),
	            'onChange': this.onDockChange.bind(null, 'BOTTOM'),
	            'checked': this.props.value === 'BOTTOM',
	            'value': 'BOTTOM'
	        }), React.createElement('span', { 'className': 'square bottom' })), React.createElement('label', {
	            'onMouseEnter': this.onDockMouseEnter.bind(null, 'BOTTOM_RIGHT'),
	            'onMouseLeave': this.props.onMouseLeave
	        }, React.createElement('input', {
	            'type': 'radio',
	            'name': this.getRadioGroupId(),
	            'onChange': this.onDockChange.bind(null, 'BOTTOM_RIGHT'),
	            'checked': this.props.value === 'BOTTOM_RIGHT',
	            'value': 'BOTTOM_RIGHT'
	        }), React.createElement('span', { 'className': 'square bottom right' })), React.createElement('div', { 'className': 'dashed horizontal' }), React.createElement('div', { 'className': 'dashed vertical' })));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 18 */
/*!****************************************!*\
  !*** ./js/baseUI/controls/infoIcon.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react-dom */ 19), __webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! baseUI/framework/uiConstants */ 20), __webpack_require__(/*! baseUI/popovers/templates/imageAndTextTooltip/imageAndTextTooltip */ 21), __webpack_require__(/*! baseUI/mixins/classNameMixin */ 36), __webpack_require__(/*! baseUI/mixins/reportUIChangeMixin */ 37), __webpack_require__(/*! baseUI/controls/infoIcon.rt */ 38)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ReactDOM, React, _, uiConstants, imageAndTextTooltipTemplate, classNameMixin, reportUIChangeMixin, template) {
	    'use strict';

	    function getTooltipBoundsRect(dom) {
	        var node = dom;
	        while (node && node.parentElement && !node.dataset.tooltipBounds) {
	            node = node.parentElement;
	        }

	        if (node) {
	            return node.getBoundingClientRect();
	        }
	    }

	    return React.createClass({
	        displayName: 'infoIcon',
	        propTypes: {
	            title: React.PropTypes.string,
	            text: React.PropTypes.string.isRequired,
	            alignment: React.PropTypes.string,
	            fitToBounds: React.PropTypes.bool,
	            symbolName: React.PropTypes.string,
	            tooltipWidth: React.PropTypes.string,
	            propagate: React.PropTypes.bool
	        },
	        mixins: [classNameMixin, reportUIChangeMixin],
	        contextTypes: {
	            reportUIChange: React.PropTypes.func
	        },
	        getDefaultProps: function getDefaultProps() {
	            return {
	                alignment: uiConstants.TOOLTIP.ALIGNMENT.TOP,
	                fitToBounds: true,
	                symbolName: 'infoIcon'
	            };
	        },
	        getTooltipValue: function getTooltipValue() {
	            return React.createElement(imageAndTextTooltipTemplate, _.assign({}, this.props));
	        },
	        getTooltipsPanelBounds: function getTooltipsPanelBounds() {
	            var clientRect = getTooltipBoundsRect(ReactDOM.findDOMNode(this));

	            return {
	                left: clientRect ? clientRect.left : 180,
	                width: clientRect ? clientRect.width : 500
	            };
	        },
	        onClick: function onClick(e) {
	            if (!this.props.propagate) {
	                e.stopPropagation();
	            }
	        },
	        handleMouseEnter: function handleMouseEnter() {
	            this.reportUIChange({ state: 'open', control_name: this.props.text });
	        },
	        handleMouseLeave: function handleMouseLeave() {
	            this.reportUIChange({ state: 'close', control_name: this.props.text });
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 19 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ },
/* 20 */
/*!********************************************!*\
  !*** ./js/baseUI/framework/uiConstants.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    'use strict';

	    return {
	        gfppMargins: 16,
	        compPanelMargins: 24,
	        TOPBAR_HEIGHT: 48,

	        LEFTBAR_BTN_WIDTH_COLLAPSED: 48,

	        MOBILE_PREVIEW_TOP: 59,
	        MOBILE_PREVIEW_MODE_HEIGHT: 512,
	        MOBILE_PREVIEW_BOTTOM: 94,

	        ANCHOR_OFFSET_TOP: -12,
	        ANCHOR_HEIGHT: 25,
	        ANCHOR_WIDTH: 126,

	        COLOR_FORMATS: {
	            HEX: 'hex',
	            RGB: 'rgb',
	            HSB: 'hsb'
	        },

	        BUBBLE: {
	            DISTANCE_FROM_TARGET: 10,
	            MARGINS_FROM_WINDOW: 6
	        },

	        TOOLTIP: {
	            ALIGNMENT: {
	                TOP: 'top',
	                LEFT: 'left',
	                RIGHT: 'right',
	                BOTTOM: 'bottom'
	            },
	            TRIGGERS: {
	                CLICK: 'onClick',
	                MOUSE_ENTER: 'onMouseEnter',
	                MOUSE_LEAVE: 'onMouseLeave',
	                OUTER_CLICK: 'outerClick'
	            },
	            VALUE_TYPE: {
	                STRING: 'string',
	                CLASS: 'class',
	                TEMPLATE: 'template'
	            },
	            STYLE_TYPE: {
	                SMALL: 'small',
	                NORMAL: 'normal',
	                CONTENT_ONLY: 'contentOnly'
	            }
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 21 */
/*!*********************************************************************************!*\
  !*** ./js/baseUI/popovers/templates/imageAndTextTooltip/imageAndTextTooltip.js ***!
  \*********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! core */ 22), __webpack_require__(/*! baseUI/popovers/templates/imageAndTextTooltip/imageAndTextTooltip.rt */ 24)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, core, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'imageAndTextTooltip',
	        mixins: [core.mixins.editorAPIMixin],
	        propTypes: {
	            title: React.PropTypes.string,
	            text: React.PropTypes.string,
	            image: React.PropTypes.string,
	            imageContainerStyle: React.PropTypes.object,
	            calculatedAlignment: React.PropTypes.string
	        },
	        render: template,
	        onLinkClick: function onLinkClick() {
	            if (this.props.linkAction) {
	                this.props.linkAction();
	            }
	        },
	        getImageContainerStyle: function getImageContainerStyle() {
	            return this.props.imageContainerStyle || {};
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 22 */
/*!********************!*\
  !*** ./js/core.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! core/mixins/editorAPIMixin */ 23)], __WEBPACK_AMD_DEFINE_RESULT__ = function (editorAPIMixin) {
	    'use strict';

	    return {
	        mixins: {
	            editorAPIMixin: editorAPIMixin
	        },
	        bi: {}
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 23 */
/*!******************************************!*\
  !*** ./js/core/mixins/editorAPIMixin.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';

	    return {
	        contextTypes: {
	            editorAPI: React.PropTypes.object
	        },
	        getEditorAPI: function getEditorAPI() {
	            return this.context.editorAPI || {
	                bi: _.noop
	            };
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 24 */
/*!*********************************************************************************!*\
  !*** ./js/baseUI/popovers/templates/imageAndTextTooltip/imageAndTextTooltip.rt ***!
  \*********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! util */ 25),
	    __webpack_require__(/*! symbols */ 3),
	    __webpack_require__(/*! baseUI/framework/uiConstants */ 20)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, util, symbols, uiConstants) {
	    'use strict';
	    return function () {
	        return React.createElement('div', { 'className': 'imageAndTextTooltip' }, this.props.calculatedAlignment === uiConstants.TOOLTIP.ALIGNMENT.TOP && !!this.props.image ? React.createElement('div', {
	            'key': 'upperImage',
	            'className': 'image-container upper-image',
	            'style': this.getImageContainerStyle()
	        }, React.createElement(symbols.symbol, { 'name': this.props.image })) : null, React.createElement('div', { 'className': 'text-container ' + (!this.props.image ? 'text-no-image' : '') }, !!this.props.title ? React.createElement('div', {
	            'className': 'title',
	            'key': 'tooltipTitle'
	        }, util.translate(this.props.title)) : null, !!this.props.text ? React.createElement('div', {
	            'className': 'text',
	            'key': 'tooltipText'
	        }, util.translate(this.props.text)) : null, !!this.props.linkAction ? React.createElement('div', {
	            'className': 'learn-more',
	            'onClick': this.onLinkClick,
	            'key': 'learnMore'
	        }, util.translate(this.props.learnMoreText), '\n        ') : null), this.props.calculatedAlignment === uiConstants.TOOLTIP.ALIGNMENT.BOTTOM && !!this.props.image ? React.createElement('div', {
	            'key': 'lowerImage',
	            'className': 'image-container lower-image',
	            'style': this.getImageContainerStyle()
	        }, React.createElement(symbols.symbol, { 'name': this.props.image })) : null);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 25 */
/*!********************!*\
  !*** ./js/util.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! util/utils/classNames */ 26), __webpack_require__(/*! util/props/propTypesFilterMixin */ 27), __webpack_require__(/*! util/mixins/valueLinkMixin */ 28), __webpack_require__(/*! util/mixins/singlePassDOMReadWriteMixin */ 29), __webpack_require__(/*! util/mixins/blockOuterScrollMixin */ 30), __webpack_require__(/*! util/mixins/outerClickMixin */ 31), __webpack_require__(/*! util/math/math */ 32), __webpack_require__(/*! util/keyboardShortcuts/keyboardShortcuts */ 33), __webpack_require__(/*! overrides/utils */ 35)], __WEBPACK_AMD_DEFINE_RESULT__ = function (classNameUtils, propTypesFilterMixin, valueLinkMixin, singlePassDOMReadWriteMixin, blockOuterScrollMixin, outerClickMixin, math, keyboardShortcuts, utils) {

	    return {
	        inheritClassName: classNameUtils.inheritClassName,
	        propTypesFilterMixin: propTypesFilterMixin,
	        valueLinkMixin: valueLinkMixin,
	        translationMixin: utils.translationMixin,
	        media: utils.media,
	        keyboardShortcuts: keyboardShortcuts,
	        translate: function translate(text) {
	            return text;
	        },
	        singlePassDOMReadWriteMixin: singlePassDOMReadWriteMixin,
	        blockOuterScrollMixin: blockOuterScrollMixin,
	        outerClickMixin: outerClickMixin,
	        math: math
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 26 */
/*!*************************************!*\
  !*** ./js/util/utils/classNames.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    'use strict';

	    return {
	        inheritClassName: function inheritClassName(props, defaultClassName) {
	            return (defaultClassName ? defaultClassName : '') + (props.className ? ' ' + props.className : '');
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 27 */
/*!***********************************************!*\
  !*** ./js/util/props/propTypesFilterMixin.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';

	    return {
	        /**
	         * @returns {Object} Own props, after filtering the props defined in propTypes of this and its mixins
	         */
	        filteredProps: function filteredProps() {
	            return _.omit(this.props, _.keys(this.constructor.propTypes));
	        },

	        /**
	         * This is a temporary function that substitutes `title` with `headerTitle` prop
	         * Since `title` is a valid HTML attribute it should not be used with rt-props as
	         * this will result in an unexpected `alt text` to appear when hovering the component.
	         *
	         * See JIRA Issue: https://jira.wixpress.com/browse/SE-4679
	         * @returns {Object} Own props, after filtering the props defined in propTypes of this and its mixins
	         */
	        getContentProps: function getContentProps() {
	            var filteredProps = this.filteredProps();
	            filteredProps.headerTitle = filteredProps.title;
	            return _.omit(filteredProps, 'title');
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 28 */
/*!******************************************!*\
  !*** ./js/util/mixins/valueLinkMixin.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	    'use strict';

	    var ERROR_DUPLICATE_VALUE_PROP = 'Cannot provide a valueLink and a value.';
	    var ERROR_DUPLICATE_ON_CHANGE_PROP = 'Cannot provide a valueLink and an onChange event.';

	    function verifyValueLinkProp(props) {
	        if (props.valueLink !== undefined) {
	            var valueLinkShapeError = React.PropTypes.shape({
	                value: React.PropTypes.any,
	                requestChange: React.PropTypes.func
	            }).apply(this, arguments);

	            if (valueLinkShapeError instanceof Error) {
	                return valueLinkShapeError;
	            }
	            if (props.value !== undefined) {
	                return new Error(ERROR_DUPLICATE_VALUE_PROP);
	            }
	            if (props.onChange !== undefined) {
	                return new Error(ERROR_DUPLICATE_ON_CHANGE_PROP);
	            }
	        }
	    }

	    return {
	        propTypes: {
	            value: React.PropTypes.any,
	            onChange: React.PropTypes.func,
	            valueLink: verifyValueLinkProp
	        },

	        getValueFromProps: function getValueFromProps(props) {
	            props = props || this.props;
	            return props.valueLink !== undefined ? props.valueLink.value : props.value;
	        },

	        callOnChangeIfExists: function callOnChangeIfExists(newVal, processedValueData) {
	            var onChange = this.props.valueLink ? this.props.valueLink.requestChange : this.props.onChange;
	            if (onChange) {
	                onChange(newVal, processedValueData);
	            }
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 29 */
/*!*******************************************************!*\
  !*** ./js/util/mixins/singlePassDOMReadWriteMixin.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	/**
	 * Created by avim on 4/16/2015.
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {
	    'use strict';

	    var LIFECYCLE_PHASES = {
	        MOUNT: 'mount',
	        UPDATE: 'update'
	    };

	    var pendingCounter = 0;
	    var arrayOfCompsToMeasurePatch = [];

	    function addComponentToSinglePassDOM(comp, phase) {
	        pendingCounter++;
	        arrayOfCompsToMeasurePatch.push({
	            comp: comp,
	            phase: phase
	        });
	    }

	    function reportComponentReadyForSinglePassDOM() {
	        pendingCounter--;
	        if (pendingCounter === 0) {
	            var measurements = _.map(arrayOfCompsToMeasurePatch, function (obj) {
	                return obj.comp.measurePhase(obj.phase);
	            });
	            _.map(arrayOfCompsToMeasurePatch, function (obj, index) {
	                obj.comp.patchPhase(measurements[index], obj.phase);
	            });
	            arrayOfCompsToMeasurePatch = [];
	        }
	    }

	    return {
	        componentWillMount: function componentWillMount() {
	            addComponentToSinglePassDOM(this, LIFECYCLE_PHASES.MOUNT);
	        },
	        componentWillUpdate: function componentWillUpdate() {
	            addComponentToSinglePassDOM(this, LIFECYCLE_PHASES.UPDATE);
	        },
	        componentDidMount: reportComponentReadyForSinglePassDOM,
	        componentDidUpdate: reportComponentReadyForSinglePassDOM,
	        componentWillUnmount: function componentWillUnmount() {
	            arrayOfCompsToMeasurePatch = _.reject(arrayOfCompsToMeasurePatch, { comp: this });
	        },
	        LIFECYCLE_PHASES: LIFECYCLE_PHASES
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 30 */
/*!*************************************************!*\
  !*** ./js/util/mixins/blockOuterScrollMixin.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    'use strict';

	    /**
	     * To use -
	     *  use onWheel="{this.blockOuterScroll}" on the scrollable element of your choice
	     */

	    return {
	        blockOuterScroll: function blockOuterScroll(e) {
	            var contentNode = e.currentTarget;
	            var totalHeight = e.currentTarget.scrollHeight;
	            var maxScroll = totalHeight - e.currentTarget.offsetHeight;
	            var delta = e.deltaY % 3 ? e.deltaY : e.deltaY * 10;
	            if (contentNode.scrollTop + delta <= 0) {
	                contentNode.scrollTop = 0;
	                e.preventDefault();
	            } else if (contentNode.scrollTop + delta >= maxScroll) {
	                contentNode.scrollTop = maxScroll;
	                e.preventDefault();
	            }
	            e.stopPropagation();
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 31 */
/*!*******************************************!*\
  !*** ./js/util/mixins/outerClickMixin.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {
	    'use strict';

	    var registeredOuterClickListeners = [];
	    var isDocumentInitialized = false;

	    function initializeDocumentListener() {
	        if (!isDocumentInitialized) {
	            document.addEventListener('mousedown', callOnOuterClick);
	            isDocumentInitialized = true;
	        }
	    }

	    var heyIWasClickedOn = [];

	    function callOnOuterClick(e) {

	        var listenersToInvoke = registeredOuterClickListeners.slice();
	        var component;
	        while (heyIWasClickedOn.length) {
	            component = heyIWasClickedOn.pop();
	            _.remove(listenersToInvoke, { domNode: component.domNode });
	        }
	        _.invoke(listenersToInvoke, 'listener', e);
	    }

	    function registerOuterClick(component) {
	        registeredOuterClickListeners.push(component);
	        component.domNode.addEventListener('mousedown', function () {
	            heyIWasClickedOn.push(component);
	        }, true);
	    }

	    function unregisterOuterClick(component) {
	        _.remove(registeredOuterClickListeners, { domNode: component.domNode });
	    }

	    return {
	        componentDidMount: function componentDidMount() {
	            if (!_.isFunction(this.onOuterClick)) {
	                throw new Error('using the outerClickMixin requires specifying an onOuterClick function.' + 'Please see ' + (this.constructor.displayName || 'ReactCompositeComponent'));
	            }
	            initializeDocumentListener();
	            registerOuterClick({ domNode: ReactDOM.findDOMNode(this), listener: this.onOuterClick });
	        },
	        componentWillUnmount: function componentWillUnmount() {
	            unregisterOuterClick({ domNode: ReactDOM.findDOMNode(this) });
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 32 */
/*!******************************!*\
  !*** ./js/util/math/math.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {
	    'use strict';

	    function valueFromPercent(percent, min, max) {
	        if (percent > 100 || percent < 0 || max < min) {
	            console.error('percent is invalid of range or range error');
	            return null;
	        }
	        return min + (max - min) * percent / 100;
	    }

	    function percentFromValue(value, min, max) {
	        if (value > max || value < min || max < min) {
	            console.error('value is out of range or range error');
	            return null;
	        }
	        var range = max - min;
	        return 100 * (value - min) / range;
	    }

	    function ensureWithinLimits(value, min, max) {
	        min = _.isUndefined(min) ? value : min;
	        max = _.isUndefined(max) ? value : max;

	        if (min > max) {
	            max = min + 100;
	        }
	        //if (min > max){
	        //    throw 'min limit is greater than max limit';
	        //}

	        if (value < min) {
	            return min;
	        }
	        if (value > max) {
	            return max;
	        }

	        return value;
	    }

	    return {
	        valueFromPercent: valueFromPercent,
	        percentFromValue: percentFromValue,
	        ensureWithinLimits: ensureWithinLimits
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 33 */
/*!********************************************************!*\
  !*** ./js/util/keyboardShortcuts/keyboardShortcuts.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 6), __webpack_require__(/*! keyboardMaster */ 34)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, keyboardMaster) {
	    'use strict';

	    // Add shared contexts names in the Editor here, if you think they could be extended.

	    var SHARED_CONTEXTS = {
	        TOP_CONTEXT: 'all',
	        EDITOR: 'EDITOR',
	        PREVIEW: 'PREVIEW',
	        TOP_BAR: 'TOP_BAR',
	        MENU_BAR: 'MENU_BAR',
	        MODAL_PANEL: 'MODAL_PANEL',
	        AUTOMATIC: 'AUTOMATIC'
	    };

	    var SHARED_CONTEXTS_KEYBOARD_ACTIONS = {
	        TOP_CONTEXT: {},
	        EDITOR: {},
	        PREVIEW: {},
	        TOP_BAR: {}
	    };

	    var lastEnabledContext = null;
	    var DISABLED_CONTEXT = '!DISABLED!';
	    var DEFAULT_CONTEXT = SHARED_CONTEXTS.TOP_CONTEXT;

	    var currentContext = DEFAULT_CONTEXT;

	    var keyMaster = keyboardMaster.noConflict();

	    var specialKeys = {
	        space: 'space',
	        up: 'up',
	        down: 'down',
	        left: 'left',
	        right: 'right',
	        home: 'home',
	        end: 'end',
	        pageUp: 'pageup',
	        pageDown: 'pagedown',
	        del: 'del',
	        esc: 'esc',
	        enter: 'enter',
	        backspace: 'backspace',
	        tab: 'tab',
	        alt: 'alt',
	        option: 'option',
	        shift: 'shift',
	        ctrl: 'ctrl',
	        command: 'command'
	    };

	    function filter(event) {
	        var tagName = (event.target || event.srcElement).tagName;

	        if (tagName === 'INPUT') {
	            var isCtrlOrCmd = event.metaKey || event.ctrlKey;
	            var isZorY = event.keyCode === 90 || event.keyCode === 89;

	            // allow undo/redo in inputs
	            if (isCtrlOrCmd && isZorY) {
	                event.preventDefault();
	                return true;
	            }

	            // filter all other keyboard shortcuts
	            return false;
	        }

	        // ignore keypressed in any elements that support keyboard data input
	        return !(tagName === 'SELECT' || tagName === 'TEXTAREA');
	    }

	    function disable() {
	        lastEnabledContext = currentContext;
	        setCurrentContext(DISABLED_CONTEXT);
	    }

	    function enable() {
	        if (!areKeyboardShortcutsEnabled()) {
	            setContext(lastEnabledContext);
	            lastEnabledContext = null;
	        }
	    }

	    function areKeyboardShortcutsEnabled() {
	        return getCurrentContext() !== DISABLED_CONTEXT;
	    }

	    function registerContext(context, shortcuts) {
	        if (isValidContext(context) && shortcuts) {
	            if (SHARED_CONTEXTS_KEYBOARD_ACTIONS[context]) {
	                unregisterContext(context);
	            }
	            SHARED_CONTEXTS_KEYBOARD_ACTIONS[context] = shortcuts;
	            _.forOwn(shortcuts, function (shortcutAction, shortCutCombo) {
	                registerShortcut(shortCutCombo, context, shortcutAction);
	            });
	        }
	    }

	    function unregisterContext(context) {
	        if (isValidContext(context)) {
	            keyMaster.deleteScope(context);
	            SHARED_CONTEXTS_KEYBOARD_ACTIONS[context] = {};
	        }
	    }

	    function registerShortcut(shortcut, context, action) {
	        if (!_.isEmpty(shortcut) && action && isValidContext(context)) {
	            keyMaster(shortcut, context, action);
	        }
	    }

	    function isValidContext(context) {
	        return !_.isEmpty(context);
	    }

	    function clearContext() {
	        setCurrentContext(DEFAULT_CONTEXT);
	    }

	    function getCurrentContext() {
	        return currentContext;
	    }

	    function setCurrentContext(contextName) {
	        if (areKeyboardShortcutsEnabled()) {
	            setContext(contextName);
	        }
	    }

	    function setContext(contextName) {
	        currentContext = contextName;
	        keyMaster.setScope(contextName);
	    }

	    function extendContext(contextNameToExtend, extension) {
	        var target = {};
	        var extendedContext = SHARED_CONTEXTS_KEYBOARD_ACTIONS[contextNameToExtend] || {};
	        _.extend(target, extendedContext);
	        _.extend(target, extension);
	        return target;
	    }

	    keyMaster.filter = filter;

	    return {
	        CONTEXTS: SHARED_CONTEXTS,

	        disable: disable,
	        enable: enable,

	        isEnabled: areKeyboardShortcutsEnabled,

	        specialKeys: specialKeys,
	        extendContext: extendContext,
	        getContext: getCurrentContext,

	        setContext: setCurrentContext,

	        clearContext: clearContext,
	        registerContext: registerContext,
	        unregisterContext: unregisterContext
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 34 */
/*!****************************************!*\
  !*** ./js/keyboardmaster/keymaster.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	//     keymaster.js
	//     (c) 2011-2013 Thomas Fuchs
	//     keymaster.js may be freely distributed under the MIT license.

	;(function(global){
	  var k,
	    _handlers = {},
	    _mods = { 16: false, 18: false, 17: false, 91: false },
	    _scope = 'all',
	    // modifier keys
	    _MODIFIERS = {
	      '⇧': 16, shift: 16,
	      '⌥': 18, alt: 18, option: 18,
	      '⌃': 17, ctrl: 17, control: 17,
	      '⌘': 91, command: 91
	    },
	    // special keys
	    _MAP = {
	      backspace: 8, tab: 9, clear: 12,
	      enter: 13, 'return': 13,
	      esc: 27, escape: 27, space: 32,
	      left: 37, up: 38,
	      right: 39, down: 40,
	      del: 46, 'delete': 46,
	      home: 36, end: 35,
	      pageup: 33, pagedown: 34,
	      ',': 188, '.': 190, '/': 191,
	      '`': 192, '-': 189, '=': 187,
	      ';': 186, '\'': 222,
	      '[': 219, ']': 221, '\\': 220
	    },
	    code = function(x){
	      return _MAP[x] || x.toUpperCase().charCodeAt(0);
	    },
	    _downKeys = [];

	  for(k=1;k<20;k++) _MAP['f'+k] = 111+k;

	  // IE doesn't support Array#indexOf, so have a simple replacement
	  function index(array, item){
	    var i = array.length;
	    while(i--) if(array[i]===item) return i;
	    return -1;
	  }

	  // for comparing mods before unassignment
	  function compareArray(a1, a2) {
	    if (a1.length != a2.length) return false;
	    for (var i = 0; i < a1.length; i++) {
	        if (a1[i] !== a2[i]) return false;
	    }
	    return true;
	  }

	  var modifierMap = {
	      16:'shiftKey',
	      18:'altKey',
	      17:'ctrlKey',
	      91:'metaKey'
	  };
	  function updateModifierKey(event) {
	      for(k in _mods) _mods[k] = event[modifierMap[k]];
	  }

	  // handle keydown event
	  function dispatch(event) {
	    var key, handler, k, i, modifiersMatch, scope;
	    key = event.keyCode;

	    if (index(_downKeys, key) == -1) {
	        _downKeys.push(key);
	    }

	    // if a modifier key, set the key.<modifierkeyname> property to true and return
	    if(key == 93 || key == 224) key = 91; // right command on webkit, command on Gecko
	    if(key in _mods) {
	      _mods[key] = true;
	      // 'assignKey' from inside this closure is exported to window.key
	      for(k in _MODIFIERS) if(_MODIFIERS[k] == key) assignKey[k] = true;
	      return;
	    }
	    updateModifierKey(event);

	    // see if we need to ignore the keypress (filter() can can be overridden)
	    // by default ignore key presses if a select, textarea, or input is focused
	    if(!assignKey.filter.call(this, event)) return;

	    // abort if no potentially matching shortcuts found
	    if (!(key in _handlers)) return;

	    scope = getScope();

	    // for each potential shortcut
	    for (i = 0; i < _handlers[key].length; i++) {
	      handler = _handlers[key][i];

	      // see if it's in the current scope
	      if(handler.scope == scope || handler.scope == 'all'){
	        // check if modifiers match if any
	        modifiersMatch = handler.mods.length > 0;
	        for(k in _mods)
	          if((!_mods[k] && index(handler.mods, +k) > -1) ||
	            (_mods[k] && index(handler.mods, +k) == -1)) modifiersMatch = false;
	        // call the handler and stop the event if neccessary
	        if((handler.mods.length === 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91]) || modifiersMatch){
	          if(handler.method(event, handler)===false){
	            if(event.preventDefault) event.preventDefault();
	              else event.returnValue = false;
	            if(event.stopPropagation) event.stopPropagation();
	            if(event.cancelBubble) event.cancelBubble = true;
	          }
	        }
	      }
	    }
	  }

	  // unset modifier keys on keyup
	  function clearModifier(event){
	    var key = event.keyCode, k,
	        i = index(_downKeys, key);

	    // remove key from _downKeys
	    if (i >= 0) {
	        _downKeys.splice(i, 1);
	    }

	    if(key == 93 || key == 224) key = 91;
	    if(key in _mods) {
	      _mods[key] = false;
	      for(k in _MODIFIERS) if(_MODIFIERS[k] == key) assignKey[k] = false;
	    }
	  }

	  function resetModifiers() {
	    for(k in _mods) _mods[k] = false;
	    for(k in _MODIFIERS) assignKey[k] = false;
	  }

	  // parse and assign shortcut
	  function assignKey(key, scope, method){
	    var keys, mods;
	    keys = getKeys(key);
	    if (method === undefined) {
	      method = scope;
	      scope = 'all';
	    }

	    // for each shortcut
	    for (var i = 0; i < keys.length; i++) {
	      // set modifier keys if any
	      mods = [];
	      key = keys[i].split('+');
	      if (key.length > 1){
	        mods = getMods(key);
	        key = [key[key.length-1]];
	      }
	      // convert to keycode and...
	      key = key[0];
	      key = code(key);
	      // ...store handler
	      if (!(key in _handlers)) _handlers[key] = [];
	      _handlers[key].push({ shortcut: keys[i], scope: scope, method: method, key: keys[i], mods: mods });
	    }
	  }

	  // unbind all handlers for given key in current scope
	  function unbindKey(key, scope) {
	    var multipleKeys, keys,
	      mods = [],
	      i, j, obj;

	    multipleKeys = getKeys(key);

	    for (j = 0; j < multipleKeys.length; j++) {
	      keys = multipleKeys[j].split('+');

	      if (keys.length > 1) {
	        mods = getMods(keys);
	      }

	      key = keys[keys.length - 1];
	      key = code(key);

	      if (scope === undefined) {
	        scope = getScope();
	      }
	      if (!_handlers[key]) {
	        return;
	      }
	      for (i = 0; i < _handlers[key].length; i++) {
	        obj = _handlers[key][i];
	        // only clear handlers if correct scope and mods match
	        if (obj.scope === scope && compareArray(obj.mods, mods)) {
	          _handlers[key][i] = {};
	        }
	      }
	    }
	  }

	  // Returns true if the key with code 'keyCode' is currently down
	  // Converts strings into key codes.
	  function isPressed(keyCode) {
	      if (typeof(keyCode)=='string') {
	        keyCode = code(keyCode);
	      }
	      return index(_downKeys, keyCode) != -1;
	  }

	  function getPressedKeyCodes() {
	      return _downKeys.slice(0);
	  }

	  function filter(event){
	    var tagName = (event.target || event.srcElement).tagName;
	    // ignore keypressed in any elements that support keyboard data input
	    return !(tagName == 'INPUT' || tagName == 'SELECT' || tagName == 'TEXTAREA');
	  }

	  // initialize key.<modifier> to false
	  for(k in _MODIFIERS) assignKey[k] = false;

	  // set current scope (default 'all')
	  function setScope(scope){ _scope = scope || 'all'; }
	  function getScope(){ return _scope || 'all'; }

	  // delete all handlers for a given scope
	  function deleteScope(scope){
	    var key, handlers, i;

	    for (key in _handlers) {
	      handlers = _handlers[key];
	      for (i = 0; i < handlers.length; ) {
	        if (handlers[i].scope === scope) handlers.splice(i, 1);
	        else i++;
	      }
	    }
	  }

	  // abstract key logic for assign and unassign
	  function getKeys(key) {
	    var keys;
	    key = key.replace(/\s/g, '');
	    keys = key.split(',');
	    if ((keys[keys.length - 1]) === '') {
	      keys[keys.length - 2] += ',';
	    }
	    return keys;
	  }

	  // abstract mods logic for assign and unassign
	  function getMods(key) {
	    var mods = key.slice(0, key.length - 1);
	    for (var mi = 0; mi < mods.length; mi++)
	    mods[mi] = _MODIFIERS[mods[mi]];
	    return mods;
	  }

	  // cross-browser events
	  function addEvent(object, event, method) {
	    if (object.addEventListener)
	      object.addEventListener(event, method, false);
	    else if(object.attachEvent)
	      object.attachEvent('on'+event, function(){ method(window.event); });
	  }

	  // set the handlers globally on document
	  addEvent(document, 'keydown', function(event) { dispatch(event); }); // Passing _scope to a callback to ensure it remains the same by execution. Fixes #48
	  addEvent(document, 'keyup', clearModifier);

	  // reset modifiers to false whenever the window is (re)focused.
	  addEvent(window, 'focus', resetModifiers);

	  // store previously defined key
	  var previousKey = global.key;

	  // restore previously defined key and return reference to our key object
	  function noConflict() {
	    var k = global.key;
	    global.key = previousKey;
	    return k;
	  }

	  // set window.key and window.key.set/get/deleteScope, and the default filter
	  global.key = assignKey;
	  global.key.setScope = setScope;
	  global.key.getScope = getScope;
	  global.key.deleteScope = deleteScope;
	  global.key.filter = filter;
	  global.key.isPressed = isPressed;
	  global.key.getPressedKeyCodes = getPressedKeyCodes;
	  global.key.noConflict = noConflict;
	  global.key.unbind = unbindKey;

	  if(true) module.exports = assignKey;

	})(this);


/***/ },
/* 35 */
/*!*******************************!*\
  !*** ./js/overrides/utils.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {

	    return {
	        translationMixin: {
	            translateIfNeeded: function translateIfNeeded(str) {
	                return str;
	            }
	        },
	        media: {
	            getMediaUrl: function getMediaUrl(item) {
	                return 'http://static.parastorage.com/services/santa-resources/resources/editor/' + item;
	            }
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 36 */
/*!********************************************!*\
  !*** ./js/baseUI/mixins/classNameMixin.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    'use strict';

	    return {
	        generateClassName: function generateClassName(className) {
	            className = className || '';
	            var additionalClassName = this.props.className;

	            if (additionalClassName) {
	                className += ' ' + additionalClassName;
	            }

	            return className;
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 37 */
/*!*************************************************!*\
  !*** ./js/baseUI/mixins/reportUIChangeMixin.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React) {
	    'use strict';

	    return {
	        contextTypes: {
	            reportUIChange: React.PropTypes.func
	        },
	        reportUIChange: function reportUIChange(changeEvent) {
	            if (this.context.reportUIChange) {
	                this.context.reportUIChange(this.constructor.displayName, this.props.instanceId || this.props.label, changeEvent);
	            }
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 38 */
/*!****************************************!*\
  !*** ./js/baseUI/controls/infoIcon.rt ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/popovers/tooltip */ 39),
	    __webpack_require__(/*! symbols */ 3),
	    __webpack_require__(/*! baseUI/framework/uiConstants */ 20)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, tooltip, symbols, uiConstants) {
	    'use strict';
	    function onClick1(e) {
	        this.onClick(e);
	    }
	    return function () {
	        return React.createElement(tooltip, {
	            'value': this.getTooltipValue(),
	            'alignment': this.props.alignment,
	            'width': this.props.tooltipWidth
	        }, React.createElement('span', {
	            'className': this.generateClassName('info-icon'),
	            'onMouseEnter': this.handleMouseEnter,
	            'onMouseLeave': this.handleMouseLeave
	        }, React.createElement(symbols.symbol, {
	            'name': this.props.symbolName,
	            'onClick': onClick1.bind(this)
	        })));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 39 */
/*!***************************************!*\
  !*** ./js/baseUI/popovers/tooltip.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react-dom */ 19), __webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! baseUI/framework/uiConstants */ 20), __webpack_require__(/*! baseUI/popovers/tooltipEventCatcher */ 40), __webpack_require__(/*! baseUI/popovers/tooltipManager */ 41)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ReactDOM, React, _, uiConstants, tooltipEventCatcher, tooltipManager) {
	    'use strict';

	    return React.createClass({
	        displayName: 'tooltip',
	        propTypes: {
	            id: React.PropTypes.string,
	            disabled: React.PropTypes.bool,
	            value: React.PropTypes.oneOfType([React.PropTypes.string.isRequired, React.PropTypes.node.isRequired, React.PropTypes.element.isRequired, React.PropTypes.shape({
	                classPath: React.PropTypes.string.isRequired,
	                props: React.PropTypes.object.isRequired
	            })]),
	            noArrow: React.PropTypes.bool,
	            width: React.PropTypes.string,
	            alignment: React.PropTypes.string,
	            delay: React.PropTypes.string,
	            interactive: React.PropTypes.bool,
	            openTriggers: React.PropTypes.arrayOf(React.PropTypes.oneOf(_.values(uiConstants.TOOLTIP.TRIGGERS))),
	            closeTriggers: React.PropTypes.arrayOf(React.PropTypes.oneOf(_.values(uiConstants.TOOLTIP.TRIGGERS))),
	            shouldTranslate: React.PropTypes.bool,
	            children: React.PropTypes.element.isRequired,
	            onOpen: React.PropTypes.func,
	            onClose: React.PropTypes.func,
	            styleType: React.PropTypes.oneOf(_.values(uiConstants.TOOLTIP.STYLE_TYPE)),
	            marginsFromWindow: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string])
	        },
	        getDefaultProps: function getDefaultProps() {
	            return {
	                disabled: false,
	                alignment: uiConstants.TOOLTIP.ALIGNMENT.TOP,
	                delay: '100',
	                width: '240px',
	                interactive: false,
	                openTriggers: [uiConstants.TOOLTIP.TRIGGERS.MOUSE_ENTER],
	                closeTriggers: [uiConstants.TOOLTIP.TRIGGERS.MOUSE_LEAVE, uiConstants.TOOLTIP.TRIGGERS.CLICK],
	                onOpen: _.noop,
	                onClose: _.noop,
	                marginsFromWindow: 6
	            };
	        },

	        getInitialState: function getInitialState() {
	            this.id = this.props.id || tooltipManager.generateId();
	            return null;
	        },

	        componentDidMount: function componentDidMount() {
	            this.forceUpdate();
	        },

	        componentWillUpdate: function componentWillUpdate(nextProps) {
	            tooltipManager.registerOrUpdateTooltip(this.id, this.getPresenterData(nextProps));
	        },

	        componentWillUnmount: function componentWillUnmount() {
	            tooltipManager.unRegisterTooltip(this.id);
	        },

	        setDelayedTooltipShow: function setDelayedTooltipShow(delay) {
	            if (!this.pendingShowDelay && !tooltipManager.isDisplayed(this.id)) {
	                this.pendingShowDelay = setTimeout(function () {
	                    tooltipManager.show(this.id);
	                    this.clearDelayedTooltipShow();
	                }.bind(this), delay);
	            }
	        },

	        clearDelayedTooltipShow: function clearDelayedTooltipShow() {
	            clearTimeout(this.pendingShowDelay);
	            this.pendingShowDelay = null;
	        },

	        showTooltip: function showTooltip() {
	            if (!this.props.disabled) {
	                this.wasHidden = false;
	                this.setDelayedTooltipShow(this.props.delay);
	            }
	        },

	        hideTooltip: function hideTooltip() {
	            tooltipManager.hide(this.id);
	        },

	        toggleTooltip: function toggleTooltip() {
	            if (tooltipManager.isDisplayed(this.id)) {
	                this.hideTooltip();
	            } else {
	                this.showTooltip();
	            }
	        },

	        handleMouseLeave: function handleMouseLeave() {
	            this.clearDelayedTooltipShow();
	            tooltipManager.notifyMouseLeave(this.id);
	        },

	        getPresenterData: function getPresenterData(props) {
	            props = props || this.props;
	            var presenterData = _.assign({}, _.omit(props, 'children'), {
	                targetNode: ReactDOM.findDOMNode(this),
	                id: this.id
	            });
	            return presenterData;
	        },

	        render: function render() {
	            var supportedShowEvents = {
	                onMouseEnter: this.showTooltip,
	                onClick: this.showTooltip
	            };

	            var supportedHideEvents = {
	                onMouseLeave: this.handleMouseLeave,
	                onClick: this.hideTooltip
	            };

	            var selectedShowEvents = _.pick(supportedShowEvents, this.props.openTriggers);
	            var selectedHideEvents = _.pick(supportedHideEvents, this.props.closeTriggers);
	            var selectedEvents = _.assign({}, selectedShowEvents, selectedHideEvents);

	            if (selectedShowEvents.onClick && selectedHideEvents.onClick) {
	                selectedEvents.onClick = this.toggleTooltip;
	            }

	            return React.createElement(tooltipEventCatcher, selectedEvents, this.props.children);
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 40 */
/*!***************************************************!*\
  !*** ./js/baseUI/popovers/tooltipEventCatcher.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 6), __webpack_require__(/*! react */ 5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, React) {
	    'use strict';

	    return React.createClass({
	        displayName: 'tooltipEventCatcher',
	        propTypes: {
	            'children': React.PropTypes.element.isRequired
	        },

	        onEvent: function onEvent(eventName, evt) {
	            this.props[eventName](evt);
	            if (this.props.children.props[eventName]) {
	                this.props.children.props[eventName](evt);
	            }
	        },

	        render: function render() {
	            // get all event props (starting with 'on'), and add a proxy methods to them
	            var extendProps = _(this.props).pick(function (value, key) {
	                return key.indexOf('on') === 0;
	            }).mapValues(function (value, key) {
	                return this.onEvent.bind(this, key);
	            }, this).value();

	            return React.cloneElement(React.Children.only(this.props.children), extendProps);
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 41 */
/*!**********************************************!*\
  !*** ./js/baseUI/popovers/tooltipManager.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {
	    'use strict';

	    var registeredTooltips = {};
	    var tooltipRenderer = {
	        updateDisplayedTooltips: _.noop
	    };
	    var idsCounter = 0;

	    function getDisplayedTooltipsPresenterData() {
	        return _(registeredTooltips).filter('isDisplayed').pluck('presenterData').value();
	    }

	    var tooltipManager = {
	        generateId: function generateId() {
	            return 'tooltip_' + idsCounter++;
	        },

	        setTooltipRenderer: function setTooltipRenderer(containerInstance) {
	            tooltipRenderer = containerInstance;
	        },

	        registerOrUpdateTooltip: function registerOrUpdateTooltip(id, presenterData) {
	            registeredTooltips[id] = registeredTooltips[id] || {};
	            registeredTooltips[id].presenterData = _.assign({}, registeredTooltips[id].presenterData, presenterData);
	            if (registeredTooltips[id].isDisplayed) {
	                tooltipRenderer.updateDisplayedTooltips(getDisplayedTooltipsPresenterData());
	            }
	        },

	        unRegisterTooltip: function unRegisterTooltip(id) {
	            this.hide(id);
	            delete registeredTooltips[id];
	        },

	        isDisplayed: function isDisplayed(id) {
	            return registeredTooltips[id] && registeredTooltips[id].isDisplayed;
	        },

	        createTooltip: function createTooltip(showAfterCreation, params) {
	            params.id = params.id || this.generateId();
	            this.registerOrUpdateTooltip(params.id, params);
	            if (showAfterCreation) {
	                this.show(params.id);
	            }
	            return params.id;
	        },

	        show: function show(id) {
	            if (!registeredTooltips[id] || registeredTooltips[id].isDisplayed) {
	                return;
	            }

	            registeredTooltips[id].isDisplayed = true;
	            tooltipRenderer.updateDisplayedTooltips(getDisplayedTooltipsPresenterData());

	            if (registeredTooltips[id].presenterData.onOpen) {
	                registeredTooltips[id].presenterData.onOpen();
	            }
	        },

	        toggle: function toggle(id) {
	            if (!registeredTooltips[id]) {
	                return;
	            }

	            if (registeredTooltips[id].isDisplayed) {
	                this.hide(id);
	            } else {
	                this.show(id);
	            }
	        },

	        showForDuration: function showForDuration(id, duration) {
	            this.show(id);
	            setTimeout(function () {
	                this.hide(id);
	            }.bind(this), duration);
	        },

	        notifyMouseLeave: function notifyMouseLeave(id) {
	            var tooltip = registeredTooltips[id];
	            if (!tooltip || !tooltip.isDisplayed) {
	                return;
	            }
	            if (tooltip.presenterData.interactive) {
	                tooltip.presenterData.mouseLeftTargetNode = true;
	                tooltipRenderer.updateDisplayedTooltips(getDisplayedTooltipsPresenterData());
	            } else {
	                this.hide(id);
	            }
	        },

	        hide: function hide(id) {
	            var tooltip = registeredTooltips[id];
	            if (!this.isDisplayed(id)) {
	                return;
	            }
	            tooltip.isDisplayed = false;
	            tooltip.presenterData.mouseLeftTargetNode = false;
	            tooltipRenderer.updateDisplayedTooltips(getDisplayedTooltipsPresenterData());

	            if (tooltip.presenterData.onClose) {
	                tooltip.presenterData.onClose();
	            }
	        },

	        hideAll: function hideAll(callback) {
	            _.forEach(registeredTooltips, function (tooltip) {
	                tooltip.isDisplayed = false;
	            });
	            tooltipRenderer.updateDisplayedTooltips(getDisplayedTooltipsPresenterData(), callback);
	        }
	    };

	    return tooltipManager;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 42 */
/*!*************************************************!*\
  !*** ./js/baseUI/controls/radioButtonsMixin.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	/**
	 * Created by eitanr on 2/3/15.
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 43), __webpack_require__(/*! baseUI/mixins/reportUIChangeMixin */ 37), __webpack_require__(/*! util */ 25)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, inputMixin, reportUIChangeMixin, util) {
	    'use strict';

	    var translationMixin = util.translationMixin;
	    var seq = 0;

	    return {
	        propTypes: {
	            options: React.PropTypes.arrayOf(React.PropTypes.shape({
	                value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]).isRequired,
	                className: React.PropTypes.string
	            }))
	        },
	        mixins: [inputMixin, reportUIChangeMixin, translationMixin],

	        getRadioGroupId: function getRadioGroupId() {
	            if (!this.groupId) {
	                this.groupId = 'rb_' + seq++;
	            }
	            return this.groupId;
	        },

	        handleChange: function handleChange(newSelectedValue, newSelectedType) {
	            this.callOnChangeIfExists(newSelectedValue, newSelectedType);
	            this.reportUIChange({ value: newSelectedValue });
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 43 */
/*!*********************************************!*\
  !*** ./js/baseUI/panelInputs/inputMixin.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! util */ 25)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, util) {
	    'use strict';

	    return {

	        mixins: [util.valueLinkMixin, util.propTypesFilterMixin],

	        propTypes: {
	            label: React.PropTypes.string,
	            disabled: React.PropTypes.bool
	        },

	        hasLabel: function hasLabel() {
	            return this.props.label !== undefined && this.props.label.trim().length > 0;
	        },

	        getLabel: function getLabel() {
	            return this.props.label !== undefined ? this.props.label : '';
	        },

	        isDisabled: function isDisabled() {
	            return this.props.disabled === true;
	        },

	        getClassName: function getClassName(defaultClassName) {
	            return util.inheritClassName(this.props, defaultClassName);
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 44 */
/*!**************************************!*\
  !*** ./js/baseUI/controls/dock.scss ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./dock.scss */ 45);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./dock.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./dock.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 45 */
/*!**********************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/controls/dock.scss ***!
  \**********************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, ".control-dock {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 0;\n  position: relative; }\n  .control-dock:hover .info-icon {\n    opacity: 1; }\n  .control-dock .info-icon {\n    float: right;\n    opacity: 0; }\n  .control-dock .dock-label {\n    font-size: 14px;\n    left: 25px;\n    margin-bottom: 20px;\n    display: block;\n    color: #2b5672;\n    margin-top: 20px; }\n  .control-dock .dock-corners-wrapper {\n    position: relative;\n    margin: 0 auto;\n    width: 185px; }\n  .control-dock label {\n    font-size: 0;\n    margin: 0;\n    display: inline-block; }\n    .control-dock label input {\n      display: none; }\n      .control-dock label input:checked + .top,\n      .control-dock label input:checked + .right,\n      .control-dock label input:checked + .bottom,\n      .control-dock label input:checked + .left {\n        border-color: #3899ec;\n        background: #d3edff; }\n      .control-dock label input:checked + .middle {\n        background: #3899ec; }\n    .control-dock label .square {\n      cursor: pointer;\n      box-sizing: border-box;\n      background: #eaf7ff;\n      margin: 0;\n      padding: 0;\n      width: 61px;\n      height: 43px;\n      display: block; }\n      .control-dock label .square.top {\n        margin-bottom: 1px;\n        margin-right: 1px;\n        border-top: 12px solid #b1ddf8; }\n        .control-dock label .square.top:hover {\n          border-top-color: #4eb7f5; }\n        .control-dock label .square.top.left {\n          border-top-left-radius: 5px; }\n        .control-dock label .square.top.right {\n          border-top-right-radius: 5px; }\n      .control-dock label .square.left {\n        border-left: 12px solid #b1ddf8;\n        margin-left: 0; }\n        .control-dock label .square.left:hover {\n          border-left-color: #4eb7f5; }\n      .control-dock label .square.middle {\n        margin-left: 1px;\n        margin-right: 1px; }\n        .control-dock label .square.middle:hover {\n          background: #4eb7f5; }\n      .control-dock label .square.right {\n        border-right: 12px solid #b1ddf8;\n        margin-right: 0; }\n        .control-dock label .square.right:hover {\n          border-right-color: #4eb7f5; }\n      .control-dock label .square.bottom {\n        margin-top: 1px;\n        margin-right: 1px;\n        border-bottom: 12px solid #b1ddf8; }\n        .control-dock label .square.bottom:hover {\n          border-bottom-color: #4eb7f5; }\n        .control-dock label .square.bottom.left {\n          border-bottom-left-radius: 5px; }\n        .control-dock label .square.bottom.right {\n          border-bottom-right-radius: 5px;\n          margin-right: 0; }\n    .control-dock label.disabled .square.middle {\n      background: #ffffff; }\n      .control-dock label.disabled .square.middle:hover {\n        background: #ffffff; }\n  .control-dock .dashed {\n    position: absolute;\n    box-sizing: border-box;\n    pointer-events: none; }\n    .control-dock .dashed.horizontal {\n      border-top: 1px dotted #7fccf7;\n      border-bottom: 1px dotted #7fccf7;\n      height: 45px;\n      top: 43px;\n      left: 12px;\n      right: 12px; }\n    .control-dock .dashed.vertical {\n      border-left: 1px dotted #7fccf7;\n      border-right: 1px dotted #7fccf7;\n      width: 63px;\n      top: 12px;\n      bottom: 12px;\n      left: 61px; }\n", ""]);

	// exports


/***/ },
/* 46 */
/*!*************************************************************!*\
  !*** ./js/wix-ui-react/components/alignment/overrides.scss ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./overrides.scss */ 47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./overrides.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./overrides.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 47 */
/*!*********************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/wix-ui-react/components/alignment/overrides.scss ***!
  \*********************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, ".control-dock {\n  margin-bottom: 20px; }\n  .control-dock .dock-label {\n    text-align: left;\n    margin: 18px auto;\n    position: relative; }\n", ""]);

	// exports


/***/ },
/* 48 */
/*!*************************************************************!*\
  !*** ./js/wix-ui-react/components/switches/buttonsGroup.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 5);
	var _ = __webpack_require__(/*! lodash */ 6);
	var Wix = __webpack_require__(/*! Wix */ 14);
	var template = __webpack_require__(/*! wix-ui-react/components/switches/buttonsGroup.rt */ 49);
	__webpack_require__(/*! baseUI/controls/buttonsGroup.scss */ 52);

	module.exports = React.createClass({

	    displayName: 'ButtonsGroup',
	    propTypes: {
	        defaultValue: React.PropTypes.oneOfType([React.PropTypes.arrayOf(React.PropTypes.string), React.PropTypes.string]),
	        style: React.PropTypes.string
	    },

	    componentDidMount: function componentDidMount() {
	        if (Wix.Utils.getViewMode() !== 'standalone') {
	            var wixParam = this.props['wix-param'];
	            Wix.Styles.getStyleParams(function (styleParams, callback) {
	                var number = styleParams.numbers[wixParam] || { value: this.props.defaultValue };
	                this.setState({
	                    checked: _.isObject(number) ? number.value.toString() : number.toString()
	                }, callback);
	            }.bind(this));
	        }
	    },

	    getInitialState: function getInitialState() {
	        return {
	            checked: this.props.defaultValue
	        };
	    },

	    handleChange: function handleChange(newValue) {
	        this.setState({
	            checked: newValue
	        }, function () {
	            var wixParam = this.props['wix-param'];
	            if (wixParam) {
	                Wix.Styles.setNumberParam(wixParam, {
	                    value: newValue
	                });
	            }
	        });

	        if (_.isFunction(this.props.onChange)) {
	            this.props.onChange.call(this, newValue);
	        }
	    },

	    render: template
	});

/***/ },
/* 49 */
/*!*************************************************************!*\
  !*** ./js/wix-ui-react/components/switches/buttonsGroup.rt ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/controls/buttonsGroup */ 50)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, buttonsGroup) {
	    'use strict';
	    return function () {
	        return React.createElement(buttonsGroup, {
	            'name': 'buttonsGroup',
	            'options': this.props.options,
	            'className': this.props.className,
	            'value': this.state.checked,
	            'onChange': this.handleChange,
	            'title': this.props.title,
	            'infoText': this.props.infoText,
	            'infoTitle': this.props.infoTitle
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 50 */
/*!********************************************!*\
  !*** ./js/baseUI/controls/buttonsGroup.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	/**
	 * Created by eitanr on 2/4/15.
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! baseUI/controls/radioButtonsMixin */ 42), __webpack_require__(/*! baseUI/controls/buttonsGroup.rt */ 51)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, radioMixin, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'ButtonsGroup',
	        PropTypes: {
	            options: React.PropTypes.array.isRequired,
	            align: React.PropTypes.string
	        },
	        mixins: [radioMixin],
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 51 */
/*!********************************************!*\
  !*** ./js/baseUI/controls/buttonsGroup.rt ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/controls/infoIcon */ 18),
	    __webpack_require__(/*! util */ 25)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, infoIcon, util) {
	    'use strict';
	    function onChange1(selectedValue, option, optionIndex) {
	        this.handleChange(option.value);
	    }
	    function repeatOption2(selectedValue, option, optionIndex) {
	        return React.createElement('label', {
	            'key': option.value,
	            'className': option.className
	        }, React.createElement('input', {
	            'type': 'radio',
	            'name': this.getRadioGroupId(),
	            'value': option.value,
	            'checked': option.value === selectedValue,
	            'onChange': onChange1.bind(this, selectedValue, option, optionIndex)
	        }), React.createElement('span', {}, this.translateIfNeeded(option.label)));
	    }
	    function scopeSelectedValue3() {
	        var selectedValue = this.getValueFromProps(this.props);
	        return _.map(this.props.options, repeatOption2.bind(this, selectedValue));
	    }
	    return function () {
	        return React.createElement('div', { 'className': 'control-buttons-group' }, this.props.title ? React.createElement('p', { 'key': 'title' }, util.translate(this.props.title)) : null, this.props.title && (this.props.infoText || this.props.infoTitle) ? React.createElement(infoIcon, {
	            'key': 'infoIcon',
	            'text': this.props.infoText,
	            'title': this.props.infoTitle,
	            'size': 18
	        }) : null, React.createElement.apply(this, [
	            'div',
	            { 'className': 'group-buttons-container' + (this.props.align ? '-' + this.props.align : '') },
	            scopeSelectedValue3.apply(this, [])
	        ]));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 52 */
/*!**********************************************!*\
  !*** ./js/baseUI/controls/buttonsGroup.scss ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./buttonsGroup.scss */ 53);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./buttonsGroup.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./buttonsGroup.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 53 */
/*!******************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/controls/buttonsGroup.scss ***!
  \******************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.control-buttons-group {\n  font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n  font-size: 14px;\n  white-space: nowrap;\n  color: #2b5672;\n  position: relative; }\n  .control-buttons-group p {\n    font-size: 14px;\n    color: #2b5672;\n    font-weight: 300;\n    margin-bottom: 15px;\n    margin-top: 0;\n    text-align: left; }\n  .control-buttons-group .group-buttons-container-left {\n    text-align: left; }\n  .control-buttons-group .group-buttons-container-right {\n    text-align: right; }\n  .control-buttons-group .group-buttons-container-center {\n    text-align: center; }\n  .control-buttons-group .info-icon {\n    display: none;\n    position: absolute;\n    top: 12px;\n    right: 12px; }\n  .control-buttons-group:hover .info-icon {\n    display: inline-block; }\n  .control-buttons-group input {\n    display: none; }\n    .control-buttons-group input + span {\n      color: #3899ec;\n      cursor: pointer;\n      height: 36px;\n      background-color: #edf7ff;\n      display: inline-block;\n      position: relative;\n      white-space: nowrap;\n      line-height: 36px;\n      vertical-align: middle;\n      font-size: 14px;\n      padding: 0 14px;\n      max-width: 93px;\n      min-width: 74px;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      text-align: center;\n      box-shadow: 0 2px 0 0 #d4e7fb; }\n    .control-buttons-group input:checked + span {\n      color: #fff;\n      position: relative;\n      top: 2px;\n      background-color: #3899ec;\n      box-shadow: inset 0 2px 0 0 rgba(0, 0, 0, 0.11); }\n    .control-buttons-group input:disabled + span {\n      cursor: default;\n      background-color: #f6f6f6; }\n    .control-buttons-group input:disabled:checked + span {\n      background-color: #bcbcbc; }\n    .control-buttons-group input:disabled:not(:checked) + span {\n      color: #bcbcbc;\n      box-shadow: 0 2px 0 0 #e5e5e5; }\n  .control-buttons-group label {\n    display: inline-block; }\n    .control-buttons-group label input:not(:checked, :disabled) + span:hover {\n      background-color: #d3edff; }\n    .control-buttons-group label:first-of-type span {\n      border-radius: 20px 0 0 20px; }\n    .control-buttons-group label:last-of-type span {\n      border-radius: 0 20px 20px 0; }\n  .animation-panel .control-buttons-group {\n    text-align: center; }\n", ""]);

	// exports


/***/ },
/* 54 */
/*!*****************************************************!*\
  !*** ./js/wix-ui-react/components/button/button.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var template = __webpack_require__(/*! ./button.rt */ 55);
	__webpack_require__(/*! baseUI/controls/button.scss */ 58);
	__webpack_require__(/*! ./overrides.scss */ 60);

	module.exports = React.createClass({
	    displayName: 'button',
	    propTypes: {
	        label: React.PropTypes.string,
	        className: React.PropTypes.string,
	        onClick: React.PropTypes.func,
	        disabled: React.PropTypes.bool,
	        icon: React.PropTypes.string
	    },
	    getIcon: function getIcon() {
	        if (this.props.icon) {
	            return this.props.icon;
	        }
	        if (_.includes(this.props.className, 'btn-back')) {
	            return 'arrowLeftSmall';
	        }
	        return undefined;
	    },
	    getProps: function getProps() {
	        return _.defaults({
	            icon: this.getIcon()
	        }, this.props);
	    },
	    render: template
	});

/***/ },
/* 55 */
/*!*****************************************************!*\
  !*** ./js/wix-ui-react/components/button/button.rt ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/controls/button */ 56)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, myButton) {
	    'use strict';
	    return function () {
	        return React.createElement(myButton, this.getProps());
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 56 */
/*!**************************************!*\
  !*** ./js/baseUI/controls/button.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 43), __webpack_require__(/*! util */ 25), __webpack_require__(/*! baseUI/controls/button.rt */ 57)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, inputMixin, util, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'Button',
	        mixins: [inputMixin, util.translationMixin],
	        propTypes: {
	            label: React.PropTypes.string,
	            className: React.PropTypes.string,
	            disabled: React.PropTypes.bool,
	            icon: React.PropTypes.string
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 57 */
/*!**************************************!*\
  !*** ./js/baseUI/controls/button.rt ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! symbols */ 3)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, symbols) {
	    'use strict';
	    function mergeProps(inline, external) {
	        var res = _.assign({}, inline, external);
	        if (inline.hasOwnProperty('style')) {
	            res.style = _.defaults(res.style, inline.style);
	        }
	        if (inline.hasOwnProperty('className') && external.hasOwnProperty('className')) {
	            res.className = external.className + ' ' + inline.className;
	        }
	        return res;
	    }
	    return function () {
	        return React.createElement('button', mergeProps({
	            'className': this.getClassName('control-button'),
	            'disabled': this.props.disabled ? 'disabled' : ''
	        }, this.filteredProps()), this.props.icon ? React.createElement(symbols.symbol, {
	            'key': 'symbol-' + this.props.icon,
	            'className': this.props.label ? 'symbol-with-label' : '',
	            'name': this.props.icon
	        }) : null, React.createElement('span', {}, this.translateIfNeeded(this.props.label)));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 58 */
/*!****************************************!*\
  !*** ./js/baseUI/controls/button.scss ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./button.scss */ 59);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./button.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./button.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 59 */
/*!************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/controls/button.scss ***!
  \************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.control-button {\n  font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n  font-size: 16px;\n  height: 36px;\n  line-height: 16px;\n  padding: 0 24px;\n  border-radius: 18px;\n  text-align: center;\n  box-sizing: border-box;\n  border: 0;\n  outline: none;\n  background-color: #3899ec;\n  color: #fff;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n  .control-button svg {\n    background: transparent; }\n    .control-button svg * {\n      fill: #fff; }\n  .control-button:hover {\n    background-color: #4eb7f5; }\n  .control-button:active {\n    background-color: #3899ec; }\n  .control-button[disabled] {\n    color: #fff;\n    background-color: #bcbcbc; }\n  .control-button.btn-big {\n    font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 18px; }\n  .control-button.btn-md {\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px;\n    height: 30px;\n    line-height: 14px;\n    padding: 0 18px;\n    border-radius: 15px; }\n  .control-button.btn-sm {\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px;\n    height: 24px;\n    line-height: 14px;\n    padding: 0 18px;\n    border-radius: 15px; }\n  .control-button.btn-back {\n    min-width: 67px;\n    height: 21px;\n    line-height: 21px;\n    color: #3899ec;\n    background-color: #eaf7ff;\n    font-weight: 300;\n    font-size: 13px;\n    margin: 15px 0px 15px 12px;\n    text-align: center; }\n    .control-button.btn-back:hover {\n      color: #3899ec;\n      background-color: #d3edff; }\n    .control-button.btn-back svg * {\n      fill: #3899ec; }\n  .control-button.btn-danger-primary {\n    background-color: #ee5951;\n    color: #fff; }\n    .control-button.btn-danger-primary:hover {\n      color: #fff;\n      background-color: #f1726b; }\n    .control-button.btn-danger-primary:active {\n      color: #fff;\n      background-color: #ee5951; }\n  .control-button.btn-danger-secondary {\n    background-color: #fce6e5;\n    color: #ee5951; }\n    .control-button.btn-danger-secondary:hover {\n      color: #ee5951;\n      background-color: #facdca; }\n    .control-button.btn-danger-secondary:active {\n      color: #ee5951;\n      background-color: #fce6e5; }\n    .control-button.btn-danger-secondary svg * {\n      fill: #ee5951; }\n  .control-button.btn-confirm-primary {\n    background-color: #3899ec;\n    color: #fff; }\n    .control-button.btn-confirm-primary:hover {\n      color: #fff;\n      background-color: #4eb7f5; }\n    .control-button.btn-confirm-primary:active {\n      color: #fff;\n      background-color: #3899ec; }\n    .control-button.btn-confirm-primary[disabled] {\n      color: #fff;\n      background-color: #bcbcbc; }\n  .control-button.btn-confirm-secondary {\n    background-color: #eaf7ff;\n    color: #3899ec; }\n    .control-button.btn-confirm-secondary:hover {\n      color: #3899ec;\n      background-color: #d3edff; }\n    .control-button.btn-confirm-secondary:active {\n      color: #3899ec;\n      background-color: #eaf7ff; }\n    .control-button.btn-confirm-secondary svg * {\n      fill: #3899ec; }\n    .control-button.btn-confirm-secondary[disabled] {\n      color: #bcbcbc;\n      background-color: #f0f0f0; }\n      .control-button.btn-confirm-secondary[disabled] svg * {\n        fill: #bcbcbc; }\n  .control-button.btn-text {\n    background: none;\n    border-radius: 0;\n    font-size: 18px;\n    color: #3899ec;\n    padding: 0; }\n    .control-button.btn-text:hover {\n      color: #3899ec;\n      text-decoration: underline; }\n  .control-button.btn-upgrade {\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px;\n    background-color: #aa4dc8;\n    color: #fff;\n    height: 30px;\n    padding: 9px 24px 8px 23px;\n    line-height: 14px; }\n  .control-button.btn-upgrade-nav {\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px;\n    background-color: transparent;\n    color: #cd68ed;\n    height: 32px;\n    padding: 10px 14px 9px 13px;\n    line-height: 14px; }\n    .control-button.btn-upgrade-nav:hover {\n      background-color: rgba(238, 219, 244, 0.7); }\n  .control-button .symbol-with-label {\n    margin-right: 8px; }\n\n.button-wrapper-center {\n  text-align: center;\n  margin-bottom: 15px; }\n", ""]);

	// exports


/***/ },
/* 60 */
/*!**********************************************************!*\
  !*** ./js/wix-ui-react/components/button/overrides.scss ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./overrides.scss */ 61);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./overrides.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./overrides.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 61 */
/*!******************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/wix-ui-react/components/button/overrides.scss ***!
  \******************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, ".control-button.btn-back {\n  padding: 0 12px 0 9px; }\n  .control-button.btn-back svg {\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n    margin-right: 12px; }\n", ""]);

	// exports


/***/ },
/* 62 */
/*!********************************************************************!*\
  !*** ./js/wix-ui-react/components/colorSpace/colorPickerSlider.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 5);
	var Wix = __webpack_require__(/*! Wix */ 14);
	var _ = __webpack_require__(/*! lodash */ 6);

	var template = __webpack_require__(/*! wix-ui-react/components/colorSpace/colorPickerSlider.rt */ 63);
	var colorPickerMixin = __webpack_require__(/*! ./colorPickerMixin */ 74);
	__webpack_require__(/*! baseUI/colorPicker/colorPickerInputWithOpacity.scss */ 75);
	__webpack_require__(/*! baseUI/colorPicker/colorPickerInput.scss */ 77);
	__webpack_require__(/*! baseUI/colorPicker/colorFormat.scss */ 79);

	module.exports = React.createClass({
	    displayName: 'ColorPickerSlider',

	    propTypes: {
	        title: React.PropTypes.string,
	        onChange: React.PropTypes.func,
	        startWithColor: React.PropTypes.string,
	        startWithOpacity: React.PropTypes.number
	    },
	    mixins: [colorPickerMixin],
	    getDefaultProps: function getDefaultProps() {
	        return {
	            openColorPicker: this.openColorPicker
	        };
	    },
	    render: template
	});

/***/ },
/* 63 */
/*!********************************************************************!*\
  !*** ./js/wix-ui-react/components/colorSpace/colorPickerSlider.rt ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/colorPicker/colorPickerInputWithOpacity */ 64)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, colorPickerInputWithOpacity) {
	    'use strict';
	    return function () {
	        return React.createElement(colorPickerInputWithOpacity, {
	            'label': this.props.title,
	            'valueLink': this.getValueLink('colorWithOpacity'),
	            'openColorPicker': this.openColorPicker,
	            'useMouseEvent': true,
	            'onSlideEnd': this.handleSlideEnd,
	            'handleStepperChange': this.handleSlideEnd
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 64 */
/*!**************************************************************!*\
  !*** ./js/baseUI/colorPicker/colorPickerInputWithOpacity.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! util */ 25), __webpack_require__(/*! baseUI/colorPicker/colorPickerInputWithOpacity.rt */ 65)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, util, template) {
	    'use strict';

	    return React.createClass({
	        propTypes: {
	            label: React.PropTypes.string,
	            isSmallStepper: React.PropTypes.bool
	        },
	        getDefaultProps: function getDefaultProps() {
	            return {
	                isSmallStepper: false
	            };
	        },
	        mixins: [util.valueLinkMixin, util.propTypesFilterMixin, util.translationMixin],
	        displayName: 'colorPickerInputWithOpacity',
	        linkColor: function linkColor() {
	            return {
	                value: this.getValueFromProps().color,
	                requestChange: function (color) {
	                    this.callOnChangeIfExists({ color: color, alpha: this.getValueFromProps().alpha });
	                }.bind(this)
	            };
	        },
	        linkOpacity: function linkOpacity() {
	            return {
	                value: this.getValueFromProps().alpha * 100,
	                requestChange: function (alpha) {
	                    this.callOnChangeIfExists({ color: this.getValueFromProps().color, alpha: alpha / 100 });
	                    if (this.props.onChange) {
	                        this.props.onChange({ color: this.getValueFromProps().color, alpha: alpha / 100 });
	                    }
	                }.bind(this)
	            };
	        },
	        getPropsForColorInput: function getPropsForColorInput() {
	            var props = this.filteredProps();
	            props.opacity = this.getValueFromProps().alpha;
	            return props;
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 65 */
/*!**************************************************************!*\
  !*** ./js/baseUI/colorPicker/colorPickerInputWithOpacity.rt ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/panelInputs/slider */ 66),
	    __webpack_require__(/*! baseUI/colorPicker/colorPickerInput */ 72)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, slider, colorPicker) {
	    'use strict';
	    return function () {
	        return React.createElement('div', { 'className': 'color-picker-input-with-opacity' }, this.props.label ? React.createElement('label', {
	            'key': 'label',
	            'className': _.keys(_.pick({
	                'color-picker-input-with-opacity-label': true,
	                disabled: this.props.disabled
	            }, _.identity)).join(' ')
	        }, this.translateIfNeeded(this.props.label)) : null, React.createElement('div', { 'className': 'color-picker-input-with-opacity-slider' }, React.createElement(slider, {
	            'isSmallStepper': this.props.isSmallStepper,
	            'disabled': this.props.disabled,
	            'units': '%',
	            'valueLink': this.linkOpacity(),
	            'onSlideEnd': this.props.onSlideEnd,
	            'min': 0,
	            'max': 100,
	            'step': 1,
	            'handleStepperChange': this.props.handleStepperChange
	        }), React.createElement(colorPicker, _.assign({}, {
	            'disabled': this.props.disabled,
	            'valueLink': this.linkColor()
	        }, this.getPropsForColorInput()))));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 66 */
/*!*****************************************!*\
  !*** ./js/baseUI/panelInputs/slider.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react-dom */ 19), __webpack_require__(/*! jquery */ 67), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! react */ 5), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 43), __webpack_require__(/*! util */ 25), __webpack_require__(/*! baseUI/panelInputs/normalizeNumber */ 68), __webpack_require__(/*! baseUI/mixins/reportUIChangeMixin */ 37), __webpack_require__(/*! baseUI/panelInputs/slider.rt */ 69)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ReactDOM, $, _, React, inputMixin, util, normalizeNumber, reportUIChangeMixin, template) {
	    'use strict';

	    var sliderRadius = 8;

	    /**
	     * @property {number} min
	     * @property {number} max
	     * @property {number} step
	     * @property {string} units
	     * @property {string} defaultValue
	     */

	    var slider = React.createClass({
	        displayName: 'slider',
	        mixins: [inputMixin, util.translationMixin, reportUIChangeMixin],
	        contextTypes: {
	            reportUIChange: React.PropTypes.func
	        },
	        propTypes: {
	            min: React.PropTypes.number,
	            max: React.PropTypes.number,
	            stepperMin: React.PropTypes.number,
	            stepperMax: React.PropTypes.number,
	            units: React.PropTypes.string,
	            step: React.PropTypes.number,
	            defaultValue: React.PropTypes.number,
	            infoText: React.PropTypes.string,
	            infoTitle: React.PropTypes.string,
	            onSlideEnd: React.PropTypes.func,
	            isSmallStepper: React.PropTypes.bool
	        },

	        getDefaultProps: function getDefaultProps() {
	            return {
	                max: 100,
	                min: 0,
	                step: 1,
	                units: '',
	                isSmallStepper: false
	            };
	        },

	        getSliderValue: function getSliderValue(props) {
	            var value = this.getValueFromProps(props);
	            if (!_.isUndefined(value)) {
	                return parseFloat(value);
	            }
	            return value;
	        },
	        getInitialState: function getInitialState() {
	            this.sliderX = 0;
	            this.sliderWidth = 0;

	            var value = this.getSliderValue();
	            var defaultValue = this.props.defaultValue !== undefined ? Number(this.props.defaultValue) : this.props.min;
	            var finalizedValue = _.isNumber(value) ? value : defaultValue;

	            return { value: normalizeNumber(finalizedValue, this.props.min, this.props.max, this.props.step) };
	        },
	        /**
	         * @param {number} val
	         * @return {number}
	         */
	        getValueInPercent: function getValueInPercent() {
	            var value = this.state.value;
	            if (this.state.value > this.props.max) {
	                value = this.props.max;
	            } else if (this.state.value < this.props.min) {
	                value = this.props.min;
	            }
	            return Math.round((value - this.props.min) / (this.props.max - this.props.min) * 100);
	        },
	        /**
	         * @param {number} percent
	         * @return {*}
	         */
	        fromPercent: function fromPercent(percent) {
	            return this.props.min + (this.props.max - this.props.min) * percent / 100;
	        },
	        calcPositionOnSlider: function calcPositionOnSlider(mouseX) {
	            var percent = (mouseX - this.sliderX) / this.sliderWidth * 100;
	            return Math.min(Math.max(percent, 0), 100);
	        },

	        calcNewValueFromKnob: function calcNewValueFromKnob(mouseX) {
	            var pos = this.calcPositionOnSlider(mouseX);
	            var newVal = normalizeNumber(this.fromPercent(pos), this.props.min, this.props.max, this.props.step);
	            return newVal;
	        },

	        handleKnobPositionChange: function handleKnobPositionChange(e) {
	            var val = this.calcNewValueFromKnob(e.pageX - sliderRadius); // reducing sliderRadius is to compensate for slider width (so that mouse will be in the middle of knob)
	            this.handleChange(val);
	        },

	        mouseUp: function mouseUp() {
	            var doc = $(document);
	            $(document.body).removeClass('block-selection');
	            doc.off('mousemove', this.handleKnobPositionChange);
	            doc.off('mouseup', this.mouseUp);
	            this.reportUIChange({ value: this.state.value, value_change_origin: 'Slider' });
	            if (this.props.onSlideEnd) {
	                this.props.onSlideEnd();
	            }
	        },

	        mouseDown: function mouseDown(e) {
	            $(document.body).addClass('block-selection');
	            var doc = $(document);
	            doc.off('mousemove', this.handleKnobPositionChange);
	            doc.off('mouseup', this.mouseUp);

	            var sliderContainer = $(ReactDOM.findDOMNode(this.refs.slider));

	            this.sliderX = sliderContainer.offset().left;
	            this.sliderWidth = sliderContainer.width() - 2 * sliderRadius; // this compensates for slider size

	            this.handleKnobPositionChange(e);

	            doc.on('mousemove', this.handleKnobPositionChange);
	            doc.on('mouseup', this.mouseUp);
	        },

	        handleChange: function handleChange(newVal, handleStepperChange) {
	            if (this.state.value !== newVal) {
	                this.setState({ value: newVal }, function () {
	                    if (this.props.handleStepperChange && handleStepperChange) {
	                        this.props.handleStepperChange();
	                    }
	                }.bind(this));
	                this.callOnChangeIfExists(newVal);
	            }
	        },

	        handleStepperChange: function handleStepperChange(newVal) {
	            newVal = normalizeNumber(newVal, this.getStepperMin(), this.getStepperMax(), this.props.step);
	            this.handleChange(newVal, true);
	            this.reportUIChange({ value: newVal, value_change_origin: 'Input' });
	        },

	        getStepperMax: function getStepperMax(optionalProps) {
	            var stepperMax;

	            if (optionalProps) {
	                stepperMax = optionalProps.stepperMax || optionalProps.max;
	            }

	            if (!stepperMax) {
	                stepperMax = this.props.stepperMax || this.props.max;
	            }

	            return stepperMax;
	        },

	        getStepperMin: function getStepperMin(optionalProps) {
	            var stepperMin;

	            if (optionalProps) {
	                stepperMin = optionalProps.stepperMin;
	                if (isNaN(stepperMin)) {
	                    stepperMin = optionalProps.min;
	                }
	            }

	            if (isNaN(stepperMin)) {
	                stepperMin = this.props.stepperMin;
	                if (isNaN(stepperMin)) {
	                    stepperMin = this.props.min;
	                }
	            }

	            return stepperMin;
	        },

	        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	            var valueFromProps = this.getSliderValue(nextProps);
	            if (valueFromProps !== this.state.value) {
	                var newVal = normalizeNumber(valueFromProps, this.getStepperMin(nextProps), this.getStepperMax(nextProps), nextProps.step || this.props.step);
	                this.setState({ value: newVal });
	            }
	        },

	        getTopLevelProps: function getTopLevelProps() {
	            return _.omit(this.props, ['min', 'max', 'value', 'units', 'defaultValue', 'onChange', 'step']);
	        },

	        render: template
	    });

	    return slider;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 67 */
/*!********************!*\
  !*** external "$" ***!
  \********************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_67__;

/***/ },
/* 68 */
/*!**************************************************!*\
  !*** ./js/baseUI/panelInputs/normalizeNumber.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    'use strict';

	    function alignNumberToStep(num, step) {
	        if (num % step) {
	            num = Math.round(num / step) * step;
	        }
	        return num;
	    }

	    function fixNotANumber(num) {
	        if (isNaN(num)) {
	            num = 0;
	        }
	        return num;
	    }

	    function validateBoundaries(num, min, max) {
	        if (num > max) {
	            num = max;
	        } else if (num < min) {
	            num = min;
	        }
	        return num;
	    }

	    function limitDecimalPoint(num) {
	        if (num !== Math.round(num)) {
	            num = num.toFixed(2);

	            if (num.charAt(num.length - 1) === '0') {
	                num = num.slice(0, num.length - 1);
	            }
	        }
	        return Number(num);
	    }

	    function normalizeNumber(value, min, max, step) {
	        if (value === '') {
	            return min;
	        }
	        var num = Number(value);
	        num = fixNotANumber(num);
	        num = alignNumberToStep(num, step);
	        num = validateBoundaries(num, min, max);
	        num = limitDecimalPoint(num);
	        return num;
	    }

	    return normalizeNumber;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 69 */
/*!*****************************************!*\
  !*** ./js/baseUI/panelInputs/slider.rt ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/panelInputs/stepper */ 70),
	    __webpack_require__(/*! baseUI/controls/infoIcon */ 18)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, stepper, infoIcon) {
	    'use strict';
	    return function () {
	        return React.createElement('div', {
	            'className': _.keys(_.pick({
	                'input-slider': true,
	                'has-label': this.hasLabel(),
	                disabled: this.isDisabled()
	            }, _.identity)).join(' ')
	        }, React.createElement('label', { 'className': 'label' }, this.translateIfNeeded(this.getLabel())), this.hasLabel() && (this.props.infoText || this.props.infoText) ? React.createElement(infoIcon, {
	            'key': 'tooltip',
	            'title': this.props.infoTitle,
	            'text': this.props.infoText,
	            'size': 18
	        }) : null, React.createElement('div', { 'className': 'clearfix sliderArea' }, React.createElement('div', { 'className': 'sliderContainer' }, React.createElement(stepper, {
	            'className': _.keys(_.pick({ 'small': this.props.isSmallStepper }, _.identity)).join(' '),
	            'disabled': this.props.disabled,
	            'min': this.getStepperMin(),
	            'max': this.getStepperMax(),
	            'value': this.state.value,
	            'units': this.props.units,
	            'step': this.props.step,
	            'onChange': this.handleStepperChange
	        }), React.createElement('div', {
	            'className': 'slider',
	            'ref': 'slider',
	            'onMouseDown': this.mouseDown
	        }, React.createElement('div', { 'className': 'line' }), React.createElement('div', { 'className': 'knobContainer' }, React.createElement('div', {
	            'className': 'coloredLine',
	            'style': { width: 'calc(' + (this.getValueInPercent() + '% + 3px') + ')' }
	        }), React.createElement('div', {
	            'className': 'sliderKnob',
	            'style': { left: 'calc(' + (this.getValueInPercent() + '%') + ')' }
	        }))))));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 70 */
/*!******************************************!*\
  !*** ./js/baseUI/panelInputs/stepper.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react-dom */ 19), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! jquery */ 67), __webpack_require__(/*! react */ 5), __webpack_require__(/*! util */ 25), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 43), __webpack_require__(/*! baseUI/panelInputs/normalizeNumber */ 68), __webpack_require__(/*! baseUI/panelInputs/stepper.rt */ 71)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ReactDOM, _, $, React, util, inputMixin, normalizeNumber, template) {
	    'use strict';

	    var DOWN = 40;
	    var UP = 38;
	    var ENTER = 13;
	    var ESC = 27;

	    var stepper = React.createClass({

	        displayName: 'stepper',
	        mixins: [inputMixin],
	        propTypes: {
	            min: React.PropTypes.number,
	            max: React.PropTypes.number,
	            step: React.PropTypes.number,
	            units: React.PropTypes.string
	        },

	        getDefaultProps: function getDefaultProps() {
	            return {
	                max: 100,
	                min: 0,
	                step: 1,
	                units: ''
	            };
	        },

	        getInitialState: function getInitialState() {
	            var value = this.getValueFromProps();
	            return {
	                value: normalizeNumber(value !== undefined ? Number(value) : 0, this.props.min, this.props.max, this.props.step),
	                edited: false
	            };
	        },
	        handleKeyDown: function handleKeyDown(e) {
	            var keyCode = e.keyCode;
	            if (keyCode === ENTER) {
	                e.preventDefault();
	                ReactDOM.findDOMNode(this.refs.input).blur();
	            }
	            if (keyCode === ESC) {
	                e.preventDefault();
	                this.handleCancel();
	            }
	            if (keyCode === UP) {
	                e.preventDefault();
	                this.changeValueByStep(true);
	            }
	            if (keyCode === DOWN) {
	                e.preventDefault();
	                this.changeValueByStep(false);
	            }
	        },

	        getWrapperClasses: function getWrapperClasses() {

	            var classes = {
	                'input-stepper': true,
	                'disabled': this.isDisabled(),
	                'edited': this.state.edited,
	                'has-units': this.props.units
	            };

	            if (this.props.className) {
	                classes[this.props.className] = true;
	            }

	            return classes;
	        },
	        changeValueByStep: function changeValueByStep(isIncrease) {

	            var newVal = isIncrease ? parseFloat(this.state.value) + this.props.step : this.state.value - this.props.step;
	            newVal = normalizeNumber(newVal, this.props.min, this.props.max, this.props.step);
	            this.acceptChanges(newVal);
	        },

	        isTemporaryValue: function isTemporaryValue(value) {
	            var temporaryValue = ['.', '-'];
	            return _.contains(temporaryValue, value);
	        },

	        handleChange: function handleChange(e) {

	            var enteredValue = e.target.value;

	            if (!/^-?[0-9]*(\.[0-9]*)?$/.test(enteredValue)) {
	                return;
	            }

	            this.setState({ value: enteredValue });
	        },
	        handleCancel: function handleCancel() {
	            var latestValue = this.getValueFromProps();
	            var self = this;
	            this.setState({ value: latestValue }, function () {
	                ReactDOM.findDOMNode(self.refs.input).blur();
	            });
	        },

	        handleBlur: function handleBlur() {
	            this.setState({ edited: false });
	            if (this.props.disabled) {
	                return;
	            }

	            var newVal = normalizeNumber(this.state.value, this.props.min, this.props.max, this.props.step);
	            if (!this.isTemporaryValue(this.state.value)) {
	                this.acceptChanges(newVal);
	            } else {
	                this.acceptChanges(this.getValueFromProps());
	            }
	        },
	        getStepperValue: function getStepperValue(props) {
	            var value = this.getValueFromProps(props);
	            if (!_.isUndefined(value)) {
	                return parseFloat(value);
	            }
	            return value;
	        },
	        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	            var valueFromProps = this.getStepperValue(nextProps);
	            if (valueFromProps !== this.state.value) {
	                var newVal = normalizeNumber(valueFromProps, isNaN(nextProps.min) ? this.props.min : nextProps.min, nextProps.max || this.props.max, nextProps.step || this.props.step);
	                this.setState({ value: newVal });
	            }
	        },

	        onFocus: function onFocus() {
	            var $input = $(ReactDOM.findDOMNode(this.refs.input));
	            this.setState({ edited: true }, function () {
	                $input.select().one('mouseup', function (e) {
	                    e.preventDefault();
	                });
	            });
	        },
	        acceptChanges: function acceptChanges(value) {
	            this.setState({ value: value });
	            this.callOnChangeIfExists(value);
	        },

	        render: template
	    });

	    return stepper;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 71 */
/*!******************************************!*\
  !*** ./js/baseUI/panelInputs/stepper.rt ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! util */ 25)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, util) {
	    'use strict';
	    function onClick1() {
	        this.refs.input.focus();
	    }
	    function onFocus2() {
	        this.onFocus();
	    }
	    function onBlur3() {
	        this.handleBlur();
	    }
	    return function () {
	        return React.createElement('div', {
	            'className': _.keys(_.pick(this.getWrapperClasses(), _.identity)).join(' '),
	            'onClick': onClick1.bind(this)
	        }, React.createElement('input', {
	            'ref': 'input',
	            'className': 'input',
	            'type': 'text',
	            'value': this.state.value,
	            'disabled': !!this.props.disabled,
	            'readOnly': !this.state.edited,
	            'maxLength': '8',
	            'step': this.props.step,
	            'onChange': this.handleChange,
	            'onKeyDown': this.handleKeyDown,
	            'onFocus': onFocus2.bind(this),
	            'onBlur': onBlur3.bind(this)
	        }), this.props.units ? React.createElement('span', {
	            'className': 'units',
	            'key': 'units'
	        }, this.props.units) : null);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 72 */
/*!***************************************************!*\
  !*** ./js/baseUI/colorPicker/colorPickerInput.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! util */ 25), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 43), __webpack_require__(/*! baseUI/colorPicker/colorPickerInput.rt */ 73)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, util, inputMixin, template) {
	    'use strict';

	    return React.createClass({
	        mixins: [inputMixin],
	        displayName: 'colorPickerInput',
	        getInitialState: function getInitialState() {
	            return {
	                forceHighlight: false
	            };
	        },
	        propTypes: {
	            useMouseEvent: React.PropTypes.bool,
	            position: React.PropTypes.object,
	            openColorPicker: React.PropTypes.func.isRequired,
	            colorResolver: React.PropTypes.func, //so that we can support theme color pointers, e.g. 'color_9'
	            previewOnHover: React.PropTypes.bool // Defaults to true
	        },
	        getDefaultProps: function getDefaultProps() {
	            return {
	                colorResolver: _.identity //so that we don't need to pass resolveColor when using the colorpicker for basic colors
	            };
	        },
	        openColorPicker: function openColorPicker(event) {
	            this.setState({
	                forceHighlight: true
	            });
	            var position = this.props.position;
	            if (!position && this.props.useMouseEvent) {
	                position = { top: event.clientY, left: event.clientX };
	            }
	            this.props.openColorPicker(this.handleChange, this.getValueFromProps(), true, position, this.props.previewOnHover !== false, this.props.enableHistory, this.onColorPickerClose);
	        },
	        handleChange: function handleChange(newValue) {
	            this.callOnChangeIfExists(newValue);
	        },
	        resolveColor: function resolveColor() {
	            return this.props.colorResolver(this.getValueFromProps());
	        },
	        getOpacity: function getOpacity() {
	            var opacity = 1;
	            if (_.isNumber(this.props.opacity)) {
	                opacity = this.props.opacity;
	            }
	            return opacity;
	        },
	        unHighlight: function unHighlight() {
	            if (this.isMounted()) {
	                this.setState({
	                    forceHighlight: false
	                });
	            }
	        },
	        onColorPickerClose: function onColorPickerClose() {
	            if (this.isMounted()) {
	                // in case both color picker panel and input became unmounted at the same time
	                this.unHighlight();
	            }
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 73 */
/*!***************************************************!*\
  !*** ./js/baseUI/colorPicker/colorPickerInput.rt ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! util */ 25)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, util) {
	    'use strict';
	    return function () {
	        return React.createElement('div', {
	            'onClick': this.openColorPicker,
	            'className': this.getClassName('color-picker-input') + (this.props.label ? ' with-label' : '')
	        }, this.props.label ? React.createElement('label', {
	            'className': 'color-picker-label',
	            'key': 'colorPickerLabel'
	        }, util.translate(this.props.label)) : null, React.createElement('div', {
	            'className': _.keys(_.pick({
	                'color-picker-wrapper': true,
	                disabled: this.props.disabled,
	                colorPickerOpen: this.state.forceHighlight
	            }, _.identity)).join(' ')
	        }, React.createElement('div', {
	            'className': 'color-picker-color',
	            'style': {
	                backgroundColor: this.resolveColor(),
	                opacity: this.getOpacity()
	            }
	        })));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 74 */
/*!*******************************************************************!*\
  !*** ./js/wix-ui-react/components/colorSpace/colorPickerMixin.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    var DEFAULT_COLOR_NAME = 'color-1';
	    var DEFAULT_STANDALONE_COLOR = '#3D9BE9';
	    var DEFAULT_OPACITY = 1;

	    function getColorNameByRef(siteColors, reference) {
	        return _.result(_.find(siteColors, { reference: reference }), 'name') || '';
	    }

	    return {
	        componentDidMount: function componentDidMount() {
	            var wixParam = this.props['wix-param'];
	            document.addEventListener('paletteChange', this.paletteChangeHandler, false);
	            if (Wix.Utils.getViewMode() === 'standalone') {
	                this.setComponentState(this.props.startWithOpacity || DEFAULT_OPACITY, DEFAULT_STANDALONE_COLOR, '');
	            } else {
	                var colorName;
	                Wix.Styles.getSiteColors(function (siteColors) {
	                    Wix.Styles.getStyleParams(function (styleParams) {
	                        var colorVal;
	                        var color = styleParams.colors[wixParam];
	                        if (color) {
	                            colorVal = color.value || color.rgba;
	                            var alpha = colorVal ? parseFloat(this.getAlphFromRgba(colorVal)) : DEFAULT_OPACITY;
	                            colorName = getColorNameByRef(siteColors, color.themeName);
	                            this.setComponentState(alpha, this.rgb2hex(colorVal), colorName);
	                        } else {
	                            colorVal = Wix.Styles.getColorByreference(this.state.colorData.name).value;
	                            colorName = getColorNameByRef(siteColors, this.state.colorData.name);
	                            this.setComponentState(parseFloat(this.state.colorData.alpha), colorVal, colorName, function () {
	                                this.updateStyleAndUiLib();
	                            }.bind(this));
	                        }
	                    }.bind(this));
	                }.bind(this));
	            }
	        },

	        componentWillUnmount: function componentWillUnmount() {
	            document.removeEventListener('paletteChange', this.paletteChangeHandler, false);
	        },

	        setComponentState: function setComponentState(alpha, color, name, callback) {
	            if (this.isMounted()) {
	                this.setState({
	                    colorData: {
	                        alpha: alpha,
	                        color: color,
	                        name: name
	                    }
	                }, callback);
	            }
	        },

	        getInitialState: function getInitialState() {
	            return {
	                colorData: {
	                    alpha: this.props.startWithOpacity || DEFAULT_OPACITY,
	                    color: '',
	                    name: this.props.startWithColor || DEFAULT_COLOR_NAME
	                }
	            };
	        },

	        openColorPicker: function openColorPicker(onChange, value, allowPaletteEditing, position) {
	            var colorElmPosition = ReactDOM.findDOMNode(this).getBoundingClientRect();

	            Wix.Styles.openColorPicker({
	                left: colorElmPosition.right + 12,
	                top: colorElmPosition.top,
	                wixParam: this.props['wix-param'],
	                color: this.state.colorData.color
	            }, this.colorChangeHandler);
	        },

	        colorChangeHandler: function colorChangeHandler(style) {
	            if (style.paletteChange) {
	                var themeEvent = document.createEvent('CustomEvent');
	                themeEvent.initCustomEvent('paletteChange', true, true, { colors: style.colors });
	                document.dispatchEvent(themeEvent);
	            } else if (style && !_.isEmpty(style)) {
	                var colorVal = this.rgb2hex(style.colorParam.value) || this.state.colorData.color;
	                var rgba = this.convertHex(colorVal, this.state.colorData.alpha);
	                var uiLibVal = {};
	                uiLibVal.value = rgba;
	                if (!_.isEmpty(style.colorParam.themeName)) {
	                    uiLibVal.themeName = style.colorParam.themeName;
	                }
	                this.setComponentState(this.state.colorData.alpha, colorVal, style.colorParam.themeName || '');
	                Wix.Styles.setUILIBParamValue('colors', this.props['wix-param'], uiLibVal);
	                if (this.props.onChange) {
	                    this.props.onChange({
	                        color: colorVal,
	                        opacity: this.state.colorData.alpha
	                    });
	                }
	            }
	        },

	        paletteChangeHandler: function paletteChangeHandler(event) {
	            var wixParam = this.props['wix-param'];
	            var colors = event.detail.colors;
	            var color = colors[wixParam];
	            if (color) {
	                var colorVal = this.rgb2hex(color.value || color.rgba);
	                if (this.props.onChange) {
	                    this.props.onChange({
	                        color: colorVal,
	                        opacity: this.state.colorData.alpha
	                    });
	                }
	                this.setComponentState(this.state.colorData.alpha, colorVal, this.state.colorData.name);
	                var uiLibVal = {};
	                var rgba = this.convertHex(colorVal, this.state.colorData.alpha);
	                uiLibVal.value = rgba;
	                if (!_.isEmpty(this.state.colorData.name)) {
	                    uiLibVal.themeName = this.state.colorData.name;
	                }
	                Wix.Styles.setUILIBParamValue('colors', wixParam, uiLibVal);
	            }
	        },

	        getValueLink: function getValueLink(valueName) {
	            return {
	                value: this.state.colorData,
	                requestChange: function requestChange(newValue) {
	                    this.setComponentState(newValue.alpha, this.state.colorData.color, this.state.colorData.name);
	                }.bind(this)
	            };
	        },

	        getValue: function getValue() {
	            return this.state.colorData;
	        },

	        updateStyleAndUiLib: function updateStyleAndUiLib() {
	            var rgba = this.convertHex(this.state.colorData.color, this.state.colorData.alpha);
	            var value = {
	                rgba: rgba,
	                opacity: this.state.colorData.alpha
	            };
	            if (!_.isEmpty(this.state.colorData.name)) {
	                value.color = {
	                    name: this.state.colorData.name
	                };
	            }
	            var wixParam = this.props['wix-param'];
	            Wix.Styles.setColorParam(wixParam, {
	                value: value
	            });

	            var uiLibVal = {};
	            uiLibVal.value = rgba;
	            if (!_.isEmpty(this.state.colorData.name)) {
	                uiLibVal.themeName = this.state.colorData.name;
	            }
	            Wix.Styles.setUILIBParamValue('colors', wixParam, uiLibVal);
	        },

	        handleSlideEnd: function handleSlideEnd() {
	            this.updateStyleAndUiLib();

	            if (this.props.onChange) {
	                this.props.onChange({
	                    color: this.state.colorData.color,
	                    opacity: this.state.colorData.alpha
	                });
	            }
	        },

	        rgb2hex: function rgb2hex(rgb) {
	            if (_.contains(rgb, 'rgb')) {
	                rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
	                return rgb && rgb.length === 4 ? "#" + ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
	            } else {
	                return rgb;
	            }
	        },

	        convertHex: function convertHex(hex, opacity) {
	            var result;
	            if (_.contains(hex, 'rgba')) {
	                var tokens = hex.split(',');
	                tokens[3] = opacity + ')';
	                result = tokens.join(',');
	            } else {
	                hex = hex.replace('#', '');
	                var r = parseInt(hex.substring(0, 2), 16);
	                var g = parseInt(hex.substring(2, 4), 16);
	                var b = parseInt(hex.substring(4, 6), 16);

	                result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
	            }

	            return result;
	        },

	        getAlphFromRgba: function getAlphFromRgba(rgba) {
	            if (_.isUndefined(rgba)) {
	                return 1;
	            }

	            if (!_.contains(rgba, 'rgba')) {
	                return 1;
	            }

	            if (_.contains(rgba, '#')) {
	                return 1;
	            }
	            var tokens = rgba.split(',');
	            var alpha = tokens[3];
	            return alpha.split(')')[0];
	        }

	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 75 */
/*!****************************************************************!*\
  !*** ./js/baseUI/colorPicker/colorPickerInputWithOpacity.scss ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./colorPickerInputWithOpacity.scss */ 76);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./colorPickerInputWithOpacity.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./colorPickerInputWithOpacity.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 76 */
/*!************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/colorPicker/colorPickerInputWithOpacity.scss ***!
  \************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.color-picker-input-with-opacity {\n  position: relative; }\n  .color-picker-input-with-opacity .color-picker-input-with-opacity-label {\n    display: block;\n    font-size: 14px;\n    color: #2b5672;\n    overflow: hidden;\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    text-overflow: ellipsis; }\n    .color-picker-input-with-opacity .color-picker-input-with-opacity-label.disabled {\n      opacity: 0.5; }\n  .color-picker-input-with-opacity .color-picker-input-with-opacity-slider {\n    position: relative; }\n  .color-picker-input-with-opacity .input-slider {\n    margin-right: 40px; }\n  .color-picker-input-with-opacity .color-picker-input {\n    position: absolute;\n    right: 0;\n    top: 2px; }\n", ""]);

	// exports


/***/ },
/* 77 */
/*!*****************************************************!*\
  !*** ./js/baseUI/colorPicker/colorPickerInput.scss ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./colorPickerInput.scss */ 78);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./colorPickerInput.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./colorPickerInput.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 78 */
/*!*************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/colorPicker/colorPickerInput.scss ***!
  \*************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.color-picker-input {\n  position: relative; }\n  .color-picker-input > .color-picker-wrapper {\n    width: 30px;\n    height: 30px;\n    border: 1px solid #cacaca;\n    box-sizing: border-box;\n    border-radius: 8px;\n    background-size: 20px 20px;\n    background-image: linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc);\n    background-position: 5px 5px, 15px 15px;\n    position: relative;\n    cursor: pointer;\n    overflow: hidden; }\n    .color-picker-input > .color-picker-wrapper.disabled {\n      opacity: 0.4; }\n    .color-picker-input > .color-picker-wrapper > .color-picker-color {\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0; }\n    .color-picker-input > .color-picker-wrapper:hover, .color-picker-input > .color-picker-wrapper.colorPickerOpen {\n      border: 2px solid #7fccf7;\n      background-position: 4px 4px, 14px 14px; }\n  .color-picker-input > .color-picker-label {\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px;\n    color: #2b5672;\n    height: 30px;\n    line-height: 30px;\n    cursor: pointer; }\n    .color-picker-input > .color-picker-label:hover + .color-picker-wrapper {\n      border: 2px solid #7fccf7; }\n    .color-picker-input > .color-picker-label ~ .color-picker-wrapper {\n      position: absolute;\n      right: 0;\n      top: 0; }\n  .color-picker-input > .divider-long,\n  .color-picker-input > .rich-text-paragraph {\n    margin-top: 14px; }\n  .color-picker-input-with-opacity .color-picker-input {\n    position: absolute;\n    right: 0;\n    top: 2px; }\n", ""]);

	// exports


/***/ },
/* 79 */
/*!************************************************!*\
  !*** ./js/baseUI/colorPicker/colorFormat.scss ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./colorFormat.scss */ 80);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./colorFormat.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./colorFormat.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 80 */
/*!********************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/colorPicker/colorFormat.scss ***!
  \********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.color-format .color-values-wrapper {\n  position: relative;\n  margin: 18px 17px 12px 17px;\n  max-height: 24px; }\n  .color-format .color-values-wrapper .color-value-hex {\n    width: 175px;\n    margin: 0 auto 0 auto; }\n    .color-format .color-values-wrapper .color-value-hex .control-text-input input {\n      padding-left: 62px;\n      height: 24px;\n      line-height: 24px;\n      font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n      font-size: 14px; }\n    .color-format .color-values-wrapper .color-value-hex .control-text-input::before {\n      content: \"#\";\n      position: absolute;\n      left: 55px;\n      top: 4px;\n      font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n      font-size: 14px; }\n    .color-format .color-values-wrapper .color-value-hex .control-text-input .validation-icon {\n      top: 0; }\n  .color-format .color-values-wrapper .color-value-item {\n    position: relative;\n    display: inline-block;\n    width: 33%; }\n    .color-format .color-values-wrapper .color-value-item:nth-child(1) {\n      text-align: left; }\n    .color-format .color-values-wrapper .color-value-item:nth-child(2) {\n      text-align: center; }\n    .color-format .color-values-wrapper .color-value-item:nth-child(3) {\n      text-align: right; }\n    .color-format .color-values-wrapper .color-value-item .input-stepper {\n      width: 100%;\n      box-sizing: border-box; }\n      .color-format .color-values-wrapper .color-value-item .input-stepper input {\n        height: 24px;\n        line-height: 24px;\n        font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n        font-size: 14px; }\n      .color-format .color-values-wrapper .color-value-item .input-stepper .units {\n        height: 24px;\n        line-height: 24px; }\n", ""]);

	// exports


/***/ },
/* 81 */
/*!*******************************************************************!*\
  !*** ./js/wix-ui-react/components/colorSpace/colorPickerInput.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 5);
	var Wix = __webpack_require__(/*! Wix */ 14);
	var _ = __webpack_require__(/*! lodash */ 6);

	var template = __webpack_require__(/*! ./colorPickerInput.rt */ 82);
	var colorPickerMixin = __webpack_require__(/*! ./colorPickerMixin */ 74);
	__webpack_require__(/*! baseUI/colorPicker/colorPickerInput.scss */ 77);
	__webpack_require__(/*! baseUI/colorPicker/colorPickerInput.scss */ 77);
	__webpack_require__(/*! baseUI/colorPicker/colorFormat.scss */ 79);

	module.exports = React.createClass({
	    displayName: 'colorPickerInput',
	    propTypes: {
	        title: React.PropTypes.string,
	        onChange: React.PropTypes.func,
	        startWithColor: React.PropTypes.string
	    },
	    mixins: [colorPickerMixin],
	    getDefaultProps: function getDefaultProps() {
	        return {
	            colorResolver: _.identity //so that we don't need to pass resolveColor when using the colorpicker for basic colors
	        };
	    },
	    getValueLinkWithoutOpacity: function getValueLink(valueName) {
	        return {
	            value: this.state.colorData.color,
	            requestChange: function requestChange() {
	                this.setComponentState(1, this.state.colorData.color, this.state.colorData.name);
	            }.bind(this)
	        };
	    },
	    render: template
	});

/***/ },
/* 82 */
/*!*******************************************************************!*\
  !*** ./js/wix-ui-react/components/colorSpace/colorPickerInput.rt ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/colorPicker/colorPickerInput */ 72)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, colorPickerInput) {
	    'use strict';
	    return function () {
	        return React.createElement(colorPickerInput, {
	            'label': this.props.title,
	            'openColorPicker': this.openColorPicker,
	            'valueLink': this.getValueLinkWithoutOpacity(),
	            'useMouseEvent': true,
	            'handleStepperChange': this.handleSlideEnd
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 83 */
/*!*********************************************************!*\
  !*** ./js/wix-ui-react/components/switches/checkbox.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 5);
	var _ = __webpack_require__(/*! lodash */ 6);
	var Wix = __webpack_require__(/*! Wix */ 14);
	__webpack_require__(/*! symbols/svg/toggles/checkbox.scss */ 84);
	var template = __webpack_require__(/*! wix-ui-react/components/switches/checkbox.rt */ 86);

	module.exports = React.createClass({

	    displayName: 'Checkbox',
	    propTypes: {
	        label: React.PropTypes.string,
	        defaultValue: React.PropTypes.bool,
	        disabled: React.PropTypes.bool,
	        infoText: React.PropTypes.string,
	        infoTitle: React.PropTypes.string
	    },

	    getInitialState: function getInitialState() {
	        return {
	            checked: this.props.defaultValue || false,
	            disabled: this.props.disabled
	        };
	    },

	    enable: function enable() {
	        this.setState({ disabled: false });
	    },

	    disable: function disable() {
	        this.setState({ disabled: true });
	    },

	    componentDidMount: function componentDidMount() {
	        if (Wix.Utils.getViewMode() !== 'standalone') {
	            var wixParam = this.props['wix-param'];
	            Wix.Styles.getStyleParams(function (styleParams, callback) {
	                var bool = styleParams.booleans[wixParam];
	                if (_.isBoolean(bool)) {
	                    this.setState({
	                        checked: bool
	                    }, callback);
	                } else {
	                    var defaultValue = this.state.checked;
	                    this.setState({
	                        checked: defaultValue
	                    }, callback);
	                }
	            }.bind(this));
	        }
	    },

	    handleChange: function handleChange(newValue) {
	        this.setState({
	            checked: newValue
	        }, function () {
	            var wixParam = this.props['wix-param'];
	            if (wixParam) {
	                Wix.Styles.setBooleanParam(wixParam, {
	                    value: newValue
	                });
	            }
	        });

	        if (this.props.onChange && _.isFunction(this.props.onChange)) {
	            this.props.onChange.call(this, newValue);
	        }
	    },

	    render: template
	});

/***/ },
/* 84 */
/*!**********************************************!*\
  !*** ./js/symbols/svg/toggles/checkbox.scss ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./checkbox.scss */ 85);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./checkbox.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./checkbox.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 85 */
/*!******************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/symbols/svg/toggles/checkbox.scss ***!
  \******************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, ".control-checkbox .symbol-checkbox {\n  vertical-align: top; }\n  .control-checkbox .symbol-checkbox .bg {\n    fill: #fff; }\n  .control-checkbox .symbol-checkbox .border {\n    fill: #3899ec; }\n  .control-checkbox .symbol-checkbox .check,\n  .control-checkbox .symbol-checkbox .minus {\n    fill: transparent; }\n  .show-on-all-pages .border {\n    fill: #fb7d33; }\n\n.control-checkbox .label-checkbox {\n  color: #162d3d;\n  margin: 0 13px; }\n\n.control-checkbox .info-checkbox {\n  position: absolute;\n  right: 12px;\n  top: 1px; }\n\n.control-checkbox:hover .symbol-checkbox .bg {\n  fill: #d3edff; }\n\n.show-on-all-pages .bg {\n  fill: #fee5d6; }\n\n.control-checkbox:active .symbol-checkbox .bg {\n  fill: #fff; }\n\n.control-checkbox .input-checkbox:disabled ~ .symbol-checkbox {\n  pointer-events: none; }\n  .control-checkbox .input-checkbox:disabled ~ .symbol-checkbox .bg {\n    fill: #f0f0f0; }\n  .control-checkbox .input-checkbox:disabled ~ .symbol-checkbox .border {\n    fill: #e3e3e3; }\n\n.control-checkbox .input-checkbox:checked ~ .symbol-checkbox .bg,\n.control-checkbox .input-checkbox:checked ~ .symbol-checkbox .border {\n  fill: #3899ec; }\n\n.control-checkbox .input-checkbox:checked ~ .symbol-checkbox .check {\n  fill: #fff; }\n\n.control-checkbox .input-checkbox:checked ~ .symbol-checkbox .minus {\n  fill: transparent; }\n\n.show-on-all-pages .bg,\n.show-on-all-pages .border {\n  fill: #fb7d33; }\n\n.control-checkbox:hover .input-checkbox:not(:disabled):checked ~ .symbol-checkbox .bg,\n.control-checkbox:hover .input-checkbox:not(:disabled):checked ~ .symbol-checkbox .border {\n  fill: #4eb7f5; }\n\n.show-on-all-pages .bg,\n.show-on-all-pages .border {\n  fill: #fc975c; }\n\n.control-checkbox:active .input-checkbox:checked ~ .symbol-checkbox .bg,\n.control-checkbox:active .input-checkbox:checked ~ .symbol-checkbox .border {\n  fill: #3899ec; }\n\n.control-checkbox .input-checkbox:checked:disabled ~ .symbol-checkbox {\n  pointer-events: none; }\n  .control-checkbox .input-checkbox:checked:disabled ~ .symbol-checkbox .bg {\n    fill: #e3e3e3; }\n  .control-checkbox .input-checkbox:checked:disabled ~ .symbol-checkbox .border {\n    fill: #e0e0e0; }\n\n.control-checkbox .input-checkbox[data-indeterminate=\"true\"] ~ .symbol-checkbox .bg {\n  fill: #fff; }\n\n.control-checkbox .input-checkbox[data-indeterminate=\"true\"] ~ .symbol-checkbox .border,\n.control-checkbox .input-checkbox[data-indeterminate=\"true\"] ~ .symbol-checkbox .minus {\n  fill: #3899ec; }\n\n.control-checkbox .input-checkbox[data-indeterminate=\"true\"] ~ .symbol-checkbox .check {\n  fill: transparent; }\n\n.control-checkbox:hover .input-checkbox[data-indeterminate=\"true\"] ~ .symbol-checkbox .bg {\n  fill: #d3edff; }\n\n.control-checkbox:active .input-checkbox[data-indeterminate=\"true\"] ~ .symbol-checkbox .bg {\n  fill: #fff; }\n\n.control-checkbox .input-checkbox[data-indeterimnate=\"true\"]:disabled ~ .symbol-checkbox {\n  pointer-events: none; }\n  .control-checkbox .input-checkbox[data-indeterimnate=\"true\"]:disabled ~ .symbol-checkbox .bg {\n    fill: #e2e2e2; }\n  .control-checkbox .input-checkbox[data-indeterimnate=\"true\"]:disabled ~ .symbol-checkbox .border,\n  .control-checkbox .input-checkbox[data-indeterimnate=\"true\"]:disabled ~ .symbol-checkbox .minus {\n    fill: #e3e3e3; }\n", ""]);

	// exports


/***/ },
/* 86 */
/*!*********************************************************!*\
  !*** ./js/wix-ui-react/components/switches/checkbox.rt ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/controls/toggle */ 87)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, toggle) {
	    'use strict';
	    return function () {
	        return React.createElement(toggle, {
	            'name': 'checkbox',
	            'label': this.props.label,
	            'labelAfterSymbol': true,
	            'disabled': this.state.disabled,
	            'className': this.props.className,
	            'value': this.state.checked,
	            'infoTitle': this.props.infoTitle,
	            'infoText': this.props.infoText,
	            'onChange': this.handleChange
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 87 */
/*!**************************************!*\
  !*** ./js/baseUI/controls/toggle.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! baseUI/controls/toggleMixin */ 88), __webpack_require__(/*! baseUI/controls/toggle.rt */ 89)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, booleanMixin, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'boolean',
	        propTypes: {
	            name: React.PropTypes.string,
	            label: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element]),
	            infoText: React.PropTypes.string,
	            infoTitle: React.PropTypes.string,
	            shouldDisplayInfoIcon: React.PropTypes.bool,
	            infoAlignment: React.PropTypes.string,
	            infoFitToBounds: React.PropTypes.bool,
	            disabled: React.PropTypes.bool,
	            labelAfterSymbol: React.PropTypes.bool,
	            shouldTranslate: React.PropTypes.bool,
	            size: React.PropTypes.string
	        },
	        mixins: [booleanMixin],
	        getDefaultProps: function getDefaultProps() {
	            return {
	                name: 'switch'
	            };
	        },
	        getClasses: function getClasses() {

	            var classes = {
	                'boolean-control': true
	            };

	            classes[this.getClassName('control-' + this.props.name)] = true;
	            classes[this.getSizeClass()] = true;

	            return classes;
	        },
	        getSizeClass: function getSizeClass() {
	            if (this.props.size === 'medium') {
	                return 'medium-scale';
	            }
	            return 'no-scale';
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 88 */
/*!*******************************************!*\
  !*** ./js/baseUI/controls/toggleMixin.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 43), __webpack_require__(/*! util */ 25), __webpack_require__(/*! baseUI/mixins/reportUIChangeMixin */ 37)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, inputMixin, util, reportUIChangeMixin) {
	    'use strict';

	    var translationMixin = util.translationMixin;

	    return {
	        mixins: [inputMixin, reportUIChangeMixin, translationMixin],
	        contextTypes: {
	            reportUIChange: React.PropTypes.func
	        },
	        handleChange: function handleChange() {
	            var newVal = !this.getValueFromProps(this.props);
	            this.reportUIChange({ value: newVal });
	            this.callOnChangeIfExists(newVal);
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 89 */
/*!**************************************!*\
  !*** ./js/baseUI/controls/toggle.rt ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! symbols */ 3),
	    __webpack_require__(/*! util */ 25),
	    __webpack_require__(/*! baseUI/controls/infoIcon */ 18)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, symbols, util, infoIcon) {
	    'use strict';
	    function onChange1(e) {
	        this.handleChange(e);
	    }
	    return function () {
	        return React.createElement('label', {
	            'className': _.keys(_.pick(this.getClasses(), _.identity)).join(' '),
	            'disabled': !!this.props.disabled
	        }, React.createElement('input', {
	            'className': 'input-' + this.props.name,
	            'type': 'checkbox',
	            'checked': this.getValueFromProps(this.props),
	            'disabled': !!this.props.disabled,
	            'data-indeterminate': !!this.props.indeterminate,
	            'onChange': onChange1.bind(this)
	        }), this.props.label && !this.props.labelAfterSymbol ? React.createElement('span', {
	            'key': 'labelBefore',
	            'className': 'label label-' + this.props.name
	        }, this.translateIfNeeded(this.props.label)) : null, React.createElement(symbols.symbol, { 'name': this.props.name }), this.props.label && this.props.labelAfterSymbol ? React.createElement('span', {
	            'key': 'labelAfter',
	            'className': 'label label-' + this.props.name
	        }, this.translateIfNeeded(this.props.label)) : null, this.props.shouldDisplayInfoIcon || this.props.infoText || this.props.infoTitle ? React.createElement(infoIcon, {
	            'className': 'info-' + this.props.name,
	            'key': 'infoIcon',
	            'title': this.props.infoTitle,
	            'text': this.props.infoText,
	            'alignment': this.props.infoAlignment,
	            'fitToBounds': this.props.infoFitToBounds
	        }) : null);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 90 */
/*!*********************************************************!*\
  !*** ./js/wix-ui-react/components/dropDown/dropDown.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var dropDownOption = __webpack_require__(/*! baseUI/panelInputs/dropDown/option */ 91);
	var dropDownOptions = __webpack_require__(/*! baseUI/panelInputs/dropDown/options */ 93);
	var dropDownSelect = __webpack_require__(/*! baseUI/panelInputs/dropDown/select */ 96);

	__webpack_require__(/*! baseUI/panelInputs/dropDown/dropDown.scss */ 100);

	module.exports = {
	    select: dropDownSelect,
	    option: dropDownOption,
	    options: dropDownOptions
	};

/***/ },
/* 91 */
/*!**************************************************!*\
  !*** ./js/baseUI/panelInputs/dropDown/option.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! util */ 25), __webpack_require__(/*! baseUI/mixins/classNameMixin */ 36), __webpack_require__(/*! baseUI/panelInputs/dropDown/dropdownManager */ 92)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, util, classNameMixin, dropdownManager) {
	    'use strict';

	    return React.createClass({
	        displayName: 'option',

	        mixins: [classNameMixin, util.translationMixin],

	        propTypes: {
	            value: React.PropTypes.any,
	            index: React.PropTypes.number,
	            autotranslate: React.PropTypes.bool
	        },

	        getDefaultProps: function getDefaultProps() {
	            return {
	                type: 'option'
	            };
	        },

	        getInitialState: function getInitialState() {
	            return {
	                selected: dropdownManager.getSelectedIndex() === this.props.index,
	                hovered: this.props.hovered
	            };
	        },

	        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	            var newVal = nextProps.value;
	            var nextState = {};

	            if (this.props.value !== newVal) {
	                nextState.value = newVal;
	            }

	            nextState.selected = dropdownManager.getSelectedIndex() === this.props.index;
	            this.setState(nextState);
	        },

	        select: function select() {
	            dropdownManager.select(this);
	        },

	        getData: function getData() {
	            return {
	                value: this.props.value,
	                index: this.props.index,
	                content: this.content
	            };
	        },

	        hover: function hover() {
	            this.setState({
	                hovered: true
	            });
	        },

	        unhover: function unhover() {
	            this.setState({
	                hovered: false
	            });
	        },

	        onMouseEnter: function onMouseEnter() {
	            dropdownManager.setHovered(this);
	        },

	        render: function render() {
	            var className = 'option';

	            this.content = this.props.children || '';

	            if (this.state.selected) {
	                className += ' selected';
	            } else if (this.state.hovered || this.props.hovered) {
	                className += ' hovered';
	            }

	            if (this.props.autotranslate && typeof this.content === 'string') {
	                this.content = this.translateIfNeeded(this.content.trim());
	            }

	            dropdownManager.addOption(this);

	            return React.DOM.li({
	                onClick: this.select,
	                className: this.generateClassName(className),
	                style: this.props.style,
	                onMouseEnter: this.onMouseEnter,
	                onMouseLeave: this.unhover
	            }, this.content);
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 92 */
/*!***********************************************************!*\
  !*** ./js/baseUI/panelInputs/dropDown/dropdownManager.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {
	    'use strict';

	    var state = {
	        optionsComponent: null,
	        selectedIndex: null,
	        currentDropdown: null,
	        currentOptionsList: null,
	        hoveredOption: null,
	        isOptionsVisible: false // synchronous state, which shows the options visibility. Added due to a setState in React is async
	    };

	    return {
	        INDENT_FROM_EDGE: 12,
	        defaultScrollSpeed: 5,
	        MIN_LIST_HEIGHT: 180,
	        keyboardContext: 'dropdown',

	        controlKeys: [27, // esc
	        32, // space
	        13, // enter
	        38, // arrow up
	        40 // arrow down
	        ],

	        setState: function setState(name, value) {
	            if (typeof name === 'string') {
	                state[name] = value;
	            } else if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	                _.forEach(name, function (val, prop) {
	                    state[prop] = val;
	                });
	            }

	            return state;
	        },

	        reset: function reset() {
	            this.setState({
	                optionsComponent: null,
	                selectedIndex: null,
	                currentDropdown: null,
	                currentOptionsList: null,
	                hoveredOption: null,
	                isOptionsVisible: false
	            });
	        },

	        registerOptionsComponent: function registerOptionsComponent(optsComp) {
	            return this.setState('optionsComponent', optsComp);
	        },

	        addOption: function addOption(option) {
	            if (state.currentOptionsList.indexOf(option) === -1) {
	                state.currentOptionsList.push(option);
	            }
	        },

	        toggle: function toggle(dropdownComponent) {
	            var optsComp = state.optionsComponent;

	            if (optsComp) {
	                var isOptionsHidden = !state.isOptionsVisible;

	                if (isOptionsHidden) {
	                    if (dropdownComponent) {
	                        var dropdownData = dropdownComponent.getData();

	                        this.setState({
	                            selectedIndex: dropdownData.selectedIndex,
	                            currentDropdown: dropdownComponent,
	                            currentOptionsList: [],
	                            isOptionsVisible: true
	                        });

	                        dropdownComponent.setExpanded(isOptionsHidden);
	                        optsComp.show(dropdownData);
	                    }
	                } else {
	                    if (dropdownComponent) {
	                        dropdownComponent.setExpanded(isOptionsHidden);
	                    } else if (state.currentDropdown) {
	                        state.currentDropdown.setExpanded(isOptionsHidden);
	                    }

	                    this.hide();
	                }
	            }
	        },

	        hide: function hide() {
	            this.setState('isOptionsVisible', false);
	            state.optionsComponent.hide();
	        },

	        getOptionsLocation: function getOptionsLocation() {
	            var optsComp = state.optionsComponent;
	            var dropdownComponent = state.currentDropdown;

	            //TODO: test and refactor
	            return dropdownComponent.getOptionsLocation(dropdownComponent.getDDEl(), optsComp.getOptionsListEl(), optsComp.getSelectedEl(dropdownComponent.state.selectedIndex), optsComp.getFooterEl());
	        },

	        select: function select(option) {
	            this.toggle();
	            state.currentDropdown.setSelected(option.getData());
	        },

	        getScrollData: function getScrollData(deltaY) {
	            var optionsComp = state.optionsComponent;
	            var currentDropdown = state.currentDropdown;

	            return currentDropdown.getScrollData ? currentDropdown.getScrollData(deltaY, optionsComp.getOptionsEl(), optionsComp.getOptionsListEl()) : null;
	        },

	        getViewportHeight: function getViewportHeight() {
	            return document.documentElement.clientHeight;
	        },

	        getSelectedIndex: function getSelectedIndex() {
	            return state.selectedIndex;
	        },

	        focusDropdown: function focusDropdown() {
	            if (state.currentDropdown && state.currentDropdown.isMounted()) {
	                state.currentDropdown.focus();
	            }
	        },

	        setHovered: function setHovered(option) {
	            if (state.hoveredOption) {
	                state.hoveredOption.unhover();
	            }

	            if (option) {
	                option.hover();
	            }

	            this.setState('hoveredOption', option);
	        },

	        getKeyboardHandlers: function getKeyboardHandlers() {
	            var self = this;

	            var preventNative = function preventNative(e) {
	                e.preventDefault();
	                e.stopPropagation();
	            };

	            var escape = function escape(e) {
	                self.toggle();
	                preventNative(e);
	            };

	            var select = function select(e) {
	                if (state.hoveredOption) {
	                    self.select(state.hoveredOption);
	                }

	                preventNative(e);
	            };

	            var hover = function hover(e) {
	                var keyCode = e.keyCode;

	                if (keyCode === 38 || keyCode === 40) {
	                    var hoveredOptIndex;
	                    var nextHoveredIndex;

	                    hoveredOptIndex = state.hoveredOption ? state.hoveredOption.props.index : state.selectedIndex;

	                    if (keyCode === 38) {
	                        nextHoveredIndex = hoveredOptIndex - 1;
	                    } else {
	                        nextHoveredIndex = hoveredOptIndex + 1;
	                    }

	                    if (nextHoveredIndex >= 0 && nextHoveredIndex < state.currentOptionsList.length) {
	                        self.setHovered(state.currentOptionsList[nextHoveredIndex]);
	                    }
	                }

	                preventNative(e);
	            };

	            return {
	                esc: escape,
	                enter: select,
	                space: select,
	                up: hover,
	                down: hover,
	                backspace: preventNative
	            };
	        },

	        isExpanded: function isExpanded(dropdown) {
	            return state.currentDropdown === dropdown && state.isOptionsVisible;
	        },

	        getFocusedElement: function getFocusedElement() {
	            return document.activeElement;
	        },

	        focus: function focus(el) {
	            var isOptions = el === state.optionsComponent.getOptionsEl();
	            var ddFocusEl = state.currentDropdown.getFocusEl();

	            if (isOptions && ddFocusEl) {
	                ddFocusEl.focus();
	            } else {
	                el.focus();
	            }
	        },

	        blur: function blur() {
	            if (state.currentDropdown.getFocusEl() !== this.getFocusedElement()) {
	                this.toggle();
	            }
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 93 */
/*!***************************************************!*\
  !*** ./js/baseUI/panelInputs/dropDown/options.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react-dom */ 19), __webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! util */ 25), __webpack_require__(/*! baseUI/panelInputs/dropDown/dropdownManager */ 92), __webpack_require__(/*! baseUI/panelInputs/dropDown/cacheMixin */ 94), __webpack_require__(/*! baseUI/panelInputs/dropDown/options.rt */ 95)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ReactDOM, React, _, util, dropdownManager, cacheMixin, template) {
	    'use strict';

	    var keyboardShortcuts = util.keyboardShortcuts;

	    function hasClass(className, el) {
	        return el.classList.contains(className);
	    }

	    function hasBottomOverflow(el) {
	        return el.offsetHeight + el.scrollTop + 1 < el.scrollHeight; // + 1 is a hack
	    }

	    function hasTopOverflow(el) {
	        return el.scrollTop > 0;
	    }

	    return React.createClass({
	        displayName: 'options',

	        mixins: [cacheMixin],

	        preventBlur: false,

	        render: template,

	        getInitialState: function getInitialState() {
	            this.updateCache({
	                optionalClasses: null,
	                initialKeyboardContext: '',
	                optionsElStyle: null
	            });

	            return {
	                visible: false,
	                className: '',
	                showScrollBar: false
	            };
	        },

	        getWindow: function getWindow() {
	            // this needed because of tests and phantom strange bug
	            return window;
	        },

	        componentDidMount: function componentDidMount() {
	            var windowObj = this.getWindow();

	            dropdownManager.registerOptionsComponent(this);
	            keyboardShortcuts.registerContext(dropdownManager.keyboardContext, dropdownManager.getKeyboardHandlers());

	            this.onWindowResize = function () {
	                if (this.state.visible) {
	                    this.locate(dropdownManager.getOptionsLocation());

	                    if (!this.state.showScrollBar) {
	                        this.toggleScrollArrows();
	                    }
	                }
	            }.bind(this);

	            this.onWindowScroll = function () {
	                if (this.state.visible) {
	                    this.hide();
	                }
	            }.bind(this);

	            windowObj.addEventListener('resize', this.onWindowResize);
	            windowObj.addEventListener('scroll', this.onWindowScroll);
	        },

	        shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	            return nextState.visible !== undefined && nextState.visible !== this.state.visible || nextState.className !== undefined && nextState.className !== this.state.className;
	        },

	        componentDidUpdate: function componentDidUpdate() {
	            var optionsEl = this.getOptionsEl();

	            if (this.state.visible) {
	                this.locate(dropdownManager.getOptionsLocation());

	                if (this.state.showScrollBar) {
	                    this.hideScrollArrows();
	                } else {
	                    this.toggleScrollArrows();
	                }

	                dropdownManager.focus(optionsEl);
	            } else {
	                var optionalClasses = this.getCached('optionalClasses');

	                if (optionalClasses && optionalClasses.length) {
	                    optionalClasses.forEach(function (optionalClass) {
	                        optionsEl.classList.remove(optionalClass);
	                    });

	                    this.updateCache('optionalClasses', null);
	                }
	            }
	        },

	        componentWillUnmount: function componentWillUnmount() {
	            var windowObj = this.getWindow();

	            windowObj.removeEventListener('resize', this.onWindowResize);
	            windowObj.removeEventListener('scroll', this.onWindowScroll);
	            keyboardShortcuts.unregisterContext(dropdownManager.keyboardContext);
	        },

	        show: function show(dropdownData) {
	            this.updateCache({
	                options: dropdownData.options,
	                initialKeyboardContext: keyboardShortcuts.getContext(),
	                footer: dropdownData.footer
	            });

	            keyboardShortcuts.setContext(dropdownManager.keyboardContext);

	            this.setState({
	                visible: true,
	                className: dropdownData.className,
	                showScrollBar: dropdownData.showScrollBar
	            });

	            this.disableBrowserScroll();
	        },

	        hide: function hide() {
	            this.setState({ visible: false });
	            this.enableBrowserScroll();
	            this.resetOptionsElStyle();
	            dropdownManager.focusDropdown();
	            dropdownManager.setHovered(null);

	            if (keyboardShortcuts.getContext() === dropdownManager.keyboardContext) {
	                keyboardShortcuts.setContext(this.getCached('initialKeyboardContext'));
	            }
	        },

	        getOptionsListEl: function getOptionsListEl() {
	            return ReactDOM.findDOMNode(this.refs.list);
	        },

	        getOptionsEl: function getOptionsEl() {
	            return ReactDOM.findDOMNode(this.refs.options);
	        },

	        getSelectedEl: function getSelectedEl(selectedOptionIndex) {
	            return this.getOptionsListEl().children[selectedOptionIndex];
	        },

	        getFooterEl: function getFooterEl() {
	            var footer = this.refs.footer;

	            if (footer) {
	                return ReactDOM.findDOMNode(footer);
	            }

	            return null;
	        },

	        locate: function locate(location) {
	            var optionsEl = this.getOptionsEl();
	            var optionalClasses = location.optionalClasses;
	            var toCache = {};

	            _.forEach(location.style, function (value, prop) {
	                optionsEl.style.setProperty(prop, value + 'px');
	            });

	            toCache.optionsElStyle = location.style;
	            this.getOptionsListEl().scrollTop = location.scrollTop || 0;

	            if (optionalClasses && optionalClasses.length) {
	                optionalClasses.forEach(function (optionalClass) {
	                    optionsEl.classList.add(optionalClass);
	                });

	                toCache.optionalClasses = optionalClasses;
	            }

	            this.updateCache(toCache);
	        },

	        toggleScrollArrows: function toggleScrollArrows() {
	            var listEl = this.getOptionsListEl();
	            var optionsEl = this.getOptionsEl();
	            var hasUpClass = hasClass('up', optionsEl);
	            var hasDownClass = hasClass('down', optionsEl);
	            var hasScrollClass = hasClass('scroll', optionsEl);
	            var hasListTopOverflow = hasTopOverflow(listEl);
	            var hasListBottomOverflow = hasBottomOverflow(listEl);

	            if ((hasListTopOverflow || hasListBottomOverflow) && !hasScrollClass) {
	                optionsEl.classList.add('scroll');
	            } else if (!hasListTopOverflow && !hasListBottomOverflow && hasScrollClass) {
	                optionsEl.classList.remove('scroll');
	            }

	            if (hasListTopOverflow && !hasUpClass) {
	                optionsEl.classList.add('up');
	            } else if (hasUpClass && !hasListTopOverflow) {
	                optionsEl.classList.remove('up');
	            }

	            if (hasListBottomOverflow && !hasDownClass) {
	                optionsEl.classList.add('down');
	            } else if (hasDownClass && !hasListBottomOverflow) {
	                optionsEl.classList.remove('down');
	            }
	        },

	        hideScrollArrows: function hideScrollArrows() {
	            var optionsEl = this.getOptionsEl();

	            if (hasClass('up', optionsEl)) {
	                optionsEl.classList.remove('up');
	            }

	            if (hasClass('down', optionsEl)) {
	                optionsEl.classList.remove('down');
	            }
	        },

	        wheelScroll: function wheelScroll(e) {
	            this.scroll(dropdownManager.getScrollData(e.deltaY));
	        },

	        scroll: function scroll(scrollData) {
	            if (scrollData) {
	                if (scrollData.edge) {
	                    this.getOptionsEl().style.setProperty(scrollData.edge, scrollData.distance + 'px');
	                } else {
	                    this.getOptionsListEl().scrollTop += scrollData.distance;
	                }

	                if (!this.state.showScrollBar) {
	                    this.toggleScrollArrows();
	                }
	            }
	        },

	        scrollTo: function scrollTo(direction) {
	            this.scroll(dropdownManager.getScrollData(direction * dropdownManager.defaultScrollSpeed));
	            this.scrollAnimationFrame = window.requestAnimationFrame(this.scrollTo.bind(this, direction));
	        },

	        stopScrollAnimation: function stopScrollAnimation() {
	            window.cancelAnimationFrame(this.scrollAnimationFrame);
	        },

	        disableBrowserScrollKeys: function disableBrowserScrollKeys(e) {
	            var keys = [37, 38, 39, 40];

	            keys.some(function (key) {
	                var isScrollKey = e.keyCode === key;

	                if (isScrollKey) {
	                    e.preventDefault();
	                }

	                return isScrollKey;
	            });
	        },

	        disableBrowserScroll: function disableBrowserScroll() {
	            document.onkeydown = this.disableBrowserScrollKeys;

	            window.onwheel = window.onmousewheel = function (e) {
	                e.preventDefault();
	            };
	        },

	        enableBrowserScroll: function enableBrowserScroll() {
	            window.onwheel = window.onmousewheel = document.onkeydown = null;
	        },

	        onMouseLeave: function onMouseLeave() {
	            dropdownManager.setHovered(null);
	        },

	        resetOptionsElStyle: function resetOptionsElStyle() {
	            var optionsEl = this.getOptionsEl();

	            _.forEach(this.getCached('optionsElStyle'), function (value, name) {
	                optionsEl.style.setProperty(name, '');
	            });
	        },

	        onBlur: function onBlur() {
	            if (this.state.visible && !this.preventBlur) {
	                dropdownManager.blur();
	            }
	        },

	        disableBlur: function disableBlur() {
	            // blur is disabled if it was fired by one of the children of the options
	            this.preventBlur = true;
	        },

	        enableBlur: function enableBlur() {
	            // blur is enabled in order to handle outside options clicks
	            this.preventBlur = false;
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 94 */
/*!******************************************************!*\
  !*** ./js/baseUI/panelInputs/dropDown/cacheMixin.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {
	    'use strict';

	    return {
	        cache: null,

	        resetCache: function resetCache() {
	            this.cache = null;
	        },

	        updateCache: function updateCache(name, value) {
	            if (!this.cache) {
	                this.cache = {};
	            }

	            if (typeof name === 'string') {
	                this.cache[name] = value;
	            } else if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	                _.forEach(name, function (val, prop) {
	                    this.cache[prop] = val;
	                }.bind(this), this);
	            }

	            return this.cache;
	        },

	        getCached: function getCached(name) {
	            if (this.cache) {
	                return this.cache[name];
	            }
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 95 */
/*!***************************************************!*\
  !*** ./js/baseUI/panelInputs/dropDown/options.rt ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! symbols */ 3)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, symbols) {
	    'use strict';
	    function onMouseEnter1(direction) {
	        this.scrollTo(-1);
	    }
	    function onMouseEnter2(direction) {
	        this.scrollTo(1);
	    }
	    return function () {
	        return React.createElement('section', { 'className': 'dropdown-options ' + this.state.className + ' ' + (this.state.visible ? 'expanded' : '') }, React.createElement('div', {
	            'className': 'options',
	            'ref': 'options',
	            'onWheel': this.wheelScroll,
	            'tabIndex': '0',
	            'onBlur': this.onBlur,
	            'onMouseLeave': this.onMouseLeave,
	            'onMouseDown': this.disableBlur,
	            'onMouseUp': this.enableBlur
	        }, React.createElement('i', {
	            'className': 'top arrow',
	            'onMouseEnter': onMouseEnter1.bind(this),
	            'onMouseLeave': this.stopScrollAnimation
	        }, React.createElement(symbols.symbol, { 'name': 'arrowDown' })), React.createElement('ol', {
	            'className': 'list',
	            'ref': 'list'
	        }, this.getCached('options')), this.getCached('footer') ? React.createElement('footer', {
	            'ref': 'footer',
	            'key': 'options-footer'
	        }, this.getCached('footer')) : null, React.createElement('i', {
	            'className': 'bottom arrow',
	            'onMouseEnter': onMouseEnter2.bind(this),
	            'onMouseLeave': this.stopScrollAnimation
	        }, React.createElement(symbols.symbol, { 'name': 'arrowDown' }))));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 96 */
/*!**************************************************!*\
  !*** ./js/baseUI/panelInputs/dropDown/select.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! baseUI/panelInputs/dropDown/dropDownMixin */ 97), __webpack_require__(/*! baseUI/panelInputs/dropDown/dropdownManager */ 92), __webpack_require__(/*! baseUI/panelInputs/dropDown/select.rt */ 99)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, dropDownMixin, dropdownManager, selectTemplate) {
	    'use strict';

	    var indentFromEdge = dropdownManager.INDENT_FROM_EDGE;

	    function getAllowedPosition(currentOptionsPosition, deltaY, listEl) {
	        var newPosition = currentOptionsPosition - Math.abs(deltaY);

	        if (Math.abs(newPosition) < indentFromEdge) {
	            newPosition = indentFromEdge;
	        } else {
	            var maxDistanceFromEdge = dropdownManager.getViewportHeight() - indentFromEdge - listEl.scrollHeight;

	            if (maxDistanceFromEdge < indentFromEdge) {
	                maxDistanceFromEdge = indentFromEdge;
	            }

	            if (newPosition < maxDistanceFromEdge) {
	                newPosition = maxDistanceFromEdge;
	            }
	        }

	        return newPosition;
	    }

	    function shouldMoveEdge(currentOptionsPosition) {
	        return currentOptionsPosition > indentFromEdge;
	    }

	    function getOptionsTopPos(ddBoundingClientRect, selectedOptionEl) {
	        return selectedOptionEl ? ddBoundingClientRect.top - selectedOptionEl.offsetTop : ddBoundingClientRect.top;
	    }

	    function getOptionsBottomPos(ddBoundingClientRect, listEl, selectedOptionEl) {
	        return dropdownManager.getViewportHeight() - getOptionsTopPos(ddBoundingClientRect, selectedOptionEl) - listEl.scrollHeight;
	    }

	    function getOptionsVerticalPositions(currentSideName, ddBoundingClientRect, listEl) {
	        var ddDistanceToEdge;
	        var sides = {};
	        var oppositeSide;
	        var ddTopPos = ddBoundingClientRect.top;
	        var isTopSide = currentSideName === 'top';

	        if (isTopSide) {
	            ddDistanceToEdge = ddTopPos + ddBoundingClientRect.height;
	        } else {
	            ddDistanceToEdge = dropdownManager.getViewportHeight() - ddTopPos;
	        }

	        if (ddDistanceToEdge < dropdownManager.MIN_LIST_HEIGHT + indentFromEdge) {
	            if (isTopSide) {
	                oppositeSide = dropdownManager.getViewportHeight() - (ddDistanceToEdge + listEl.scrollHeight);
	            } else {
	                oppositeSide = ddTopPos - listEl.scrollHeight;
	            }

	            if (oppositeSide < indentFromEdge) {
	                oppositeSide = indentFromEdge;
	            }
	        } else {
	            ddDistanceToEdge = indentFromEdge;
	        }

	        sides.currentSide = ddDistanceToEdge;
	        sides.oppositeSide = oppositeSide;

	        return sides;
	    }

	    return React.createClass({
	        displayName: 'select',
	        mixins: [dropDownMixin],
	        className: 'select',

	        getDefaultProps: function getDefaultProps() {
	            return {
	                toggleIcon: true,
	                template: selectTemplate,
	                autotranslate: true,
	                setSelectedAnyway: false
	            };
	        },

	        getOptionsLocation: function getOptionsLocation(ddEl, listEl, selectedEl) {
	            var ddBoundingClientRect = ddEl.getBoundingClientRect();
	            var top = getOptionsTopPos(ddBoundingClientRect, selectedEl);
	            var bottom = getOptionsBottomPos(ddBoundingClientRect, listEl, selectedEl);
	            var isTopOverflow = top < indentFromEdge;
	            var isBottomOverflow = bottom < indentFromEdge;
	            var isBothOverflow = isTopOverflow && isBottomOverflow;
	            var scrollDistance = 0;
	            var width = Number(this.props.optionsWidth) || ddBoundingClientRect.width;
	            var sides;

	            if (isTopOverflow || isBothOverflow) {
	                scrollDistance = -top + indentFromEdge;
	            }

	            if (isTopOverflow && !isBottomOverflow) {
	                sides = getOptionsVerticalPositions('top', ddBoundingClientRect, listEl);
	                top = sides.currentSide;

	                if (sides.oppositeSide) {
	                    bottom = sides.oppositeSide;
	                }
	            } else if (isBottomOverflow && !isTopOverflow) {
	                sides = getOptionsVerticalPositions('bottom', ddBoundingClientRect, listEl);
	                bottom = sides.currentSide;

	                if (sides.oppositeSide) {
	                    top = sides.oppositeSide;
	                }
	            } else if (isTopOverflow && isBottomOverflow) {
	                top = indentFromEdge;
	                bottom = indentFromEdge;
	            }

	            return {
	                style: {
	                    top: top,
	                    bottom: bottom,
	                    left: ddBoundingClientRect.left,
	                    width: width
	                },

	                scrollTop: scrollDistance
	            };
	        },

	        getScrollData: function getScrollData(deltaY, optionsEl, listEl) {
	            var optionsElRect = optionsEl.getBoundingClientRect();
	            var edge;
	            var currentOptionsPosition;
	            var hasOverflow = optionsElRect.height < listEl.scrollHeight;
	            var scrollData = { distance: 0 };

	            if (hasOverflow) {
	                if (deltaY > 0) {
	                    edge = 'top';
	                    currentOptionsPosition = Math.floor(optionsElRect.top);
	                } else {
	                    edge = 'bottom';
	                    currentOptionsPosition = Math.floor(dropdownManager.getViewportHeight() - optionsElRect.bottom);
	                }

	                if (shouldMoveEdge(currentOptionsPosition)) {
	                    scrollData.distance = getAllowedPosition(currentOptionsPosition, deltaY, listEl);
	                    scrollData.edge = edge;
	                } else {
	                    scrollData.distance = deltaY;
	                }
	            }

	            return scrollData;
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 97 */
/*!*********************************************************!*\
  !*** ./js/baseUI/panelInputs/dropDown/dropDownMixin.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react-dom */ 19), __webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! util */ 25), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 43), __webpack_require__(/*! baseUI/panelInputs/dropDown/dropdownManager */ 92), __webpack_require__(/*! baseUI/panelInputs/dropDown/cacheMixin */ 94), __webpack_require__(/*! baseUI/mixins/reportUIChangeMixin */ 37), __webpack_require__(/*! baseUI/panelInputs/dropDown/dropDown.rt */ 98)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ReactDOM, React, _, util, inputMixin, dropdownManager, cacheMixin, reportUIChangeMixin, template) {
	    'use strict';

	    function getSelectedIndex(options, value) {
	        var selectedIndex = 0;

	        options.some(function (child, i) {
	            var isSelected = child.props.value === value;

	            if (isSelected) {
	                selectedIndex = i;
	            }

	            return isSelected;
	        });

	        return selectedIndex;
	    }

	    var TOGGLE_KEY_CODES = [32, 38, 40];

	    return {
	        mixins: [inputMixin, cacheMixin, util.translationMixin, reportUIChangeMixin],

	        propTypes: {
	            label: React.PropTypes.string,
	            tabIndex: React.PropTypes.number,
	            scrollSpeed: React.PropTypes.number,
	            toggleIcon: React.PropTypes.bool,
	            template: React.PropTypes.func,
	            autotranslate: React.PropTypes.bool,
	            infoText: React.PropTypes.string,
	            setSelectedAnyway: React.PropTypes.bool
	        },

	        render: template,

	        getInitialState: function getInitialState() {
	            var value = this.getValueFromProps();
	            var optionsData = this.getOptionsData(value, this.props.children);
	            var options = optionsData.options;
	            var selectedIndex = optionsData.selectedIndex;

	            this.updateCache({
	                selectedContent: this.getSelectedContent(selectedIndex, options),
	                options: options,
	                footer: optionsData.footer
	            });

	            return {
	                value: value,
	                selectedIndex: selectedIndex,
	                expanded: false
	            };
	        },

	        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	            var newVal = this.getValueFromProps(nextProps);

	            if (nextProps.children !== this.props.children) {
	                var optionsData = this.getOptionsData(newVal, nextProps.children);

	                this.updateCache({
	                    selectedContent: this.getSelectedContent(optionsData.selectedIndex, optionsData.options),
	                    options: optionsData.options,
	                    footer: optionsData.footer
	                });

	                this.setState({ selectedIndex: optionsData.selectedIndex });
	            }

	            if (this.getValueFromProps() !== newVal) {
	                var options = this.getCached('options');
	                var selectedIndex = getSelectedIndex(options, newVal);

	                this.updateCache('selectedContent', this.getSelectedContent(selectedIndex, options));

	                this.setState({
	                    value: newVal,
	                    selectedIndex: selectedIndex
	                });
	            }
	        },

	        componentWillUnmount: function componentWillUnmount() {
	            dropdownManager.hide();
	        },

	        getSelectedContent: function getSelectedContent(selectedIndex, children) {
	            var content = children[selectedIndex].props.children || '';

	            if (this.props.autotranslate && typeof content === 'string') {
	                content = this.translateIfNeeded(content.trim());
	            }

	            return content;
	        },

	        getOptionsData: function getOptionsData(value, children) {
	            var autotranslate = this.props.autotranslate;
	            var optionIndex = 0;

	            var optionsData = {
	                options: [],
	                footer: null
	            };
	            var filteredChildren = _(children).flattenDeep().filter(React.isValidElement).value();

	            React.Children.forEach(filteredChildren, function (child) {
	                if (child) {
	                    if (child.props.type === 'footer') {
	                        optionsData.footer = child;
	                    } else {
	                        var optionClone;

	                        var newProps = {
	                            key: 'option-' + optionIndex,
	                            index: optionIndex,
	                            autotranslate: autotranslate
	                        };

	                        //set selected index to the first child with value === value
	                        if (optionsData.selectedIndex === undefined && value === child.props.value) {
	                            optionsData.selectedIndex = optionIndex;
	                        }

	                        optionClone = React.cloneElement(child, newProps);
	                        optionsData.options.push(optionClone);

	                        optionIndex++;
	                    }
	                }
	            });

	            //if we didn't find any child to be selected, select the first option
	            if (!optionsData.selectedIndex) {
	                optionsData.selectedIndex = 0;
	            }

	            return optionsData;
	        },

	        getData: function getData() {
	            return {
	                options: this.getCached('options'),
	                footer: this.getCached('footer'),
	                selectedIndex: this.state.selectedIndex,
	                className: this.className,
	                showScrollBar: this.props.showScrollBar
	            };
	        },

	        getDDClassName: function getDDClassName() {
	            var addClassName = '';

	            if (this.className) {
	                addClassName += ' ' + this.className;
	            }

	            if (this.props.className) {
	                addClassName += ' ' + this.props.className;
	            }

	            if (this.state.expanded) {
	                addClassName += ' expanded';
	            }

	            if (this.props.showScroll) {
	                addClassName += ' show-scroll';
	            }

	            if (this.props.disabled) {
	                addClassName += ' disabled';
	            }

	            return addClassName.trim();
	        },

	        getDDEl: function getDDEl() {
	            return ReactDOM.findDOMNode(this.refs.dropdown);
	        },

	        getOnChange: function getOnChange(newValue) {
	            return this.callOnChangeIfExists.bind(this, newValue);
	        },

	        setSelected: function setSelected(optionData) {
	            var newValue = optionData.value;
	            var newIndex = optionData.index;

	            if (this.props.setSelectedAnyway || this.state.value !== newValue || this.state.selectedIndex !== newIndex) {
	                this.reportUIChange({ value: newValue });
	                this.updateCache('selectedContent', optionData.content);

	                this.setState({
	                    value: newValue,
	                    selectedIndex: newIndex
	                }, this.getOnChange(newValue));
	            }
	        },

	        toggle: function toggle(event) {
	            if (!this.props.disabled && this.props.onClick) {
	                this.props.onClick(event);
	            } else if (!this.props.disabled) {
	                dropdownManager.toggle(this);
	                this.preventBlur = true;
	            }
	        },

	        onKeyDown: function onKeyDown(e) {
	            if (TOGGLE_KEY_CODES.indexOf(e.keyCode) > -1) {
	                this.toggle(e);
	                e.preventDefault();
	                e.stopPropagation();
	            }
	        },

	        focus: function focus() {
	            if (this.isMounted()) {
	                ReactDOM.findDOMNode(this).focus();
	            }
	        },

	        isExpanded: function isExpanded() {
	            return dropdownManager.isExpanded(this);
	        },

	        setExpanded: function setExpanded(isExpanded) {
	            this.setState({ expanded: isExpanded });
	        },

	        getFocusEl: function getFocusEl() {
	            var focusElement = this.refs.focusElement;

	            if (focusElement) {
	                return ReactDOM.findDOMNode(focusElement);
	            }
	        } //,

	        //onBlur: function(){
	        //    if (!this.preventBlur){
	        //        dropdownManager.blur();
	        //    } else {
	        //        this.preventBlur = false;
	        //    }
	        //}
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 98 */
/*!****************************************************!*\
  !*** ./js/baseUI/panelInputs/dropDown/dropDown.rt ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! symbols */ 3),
	    __webpack_require__(/*! baseUI/controls/infoIcon */ 18)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, symbols, infoIcon) {
	    'use strict';
	    return function () {
	        return React.createElement('div', {
	            'className': 'dropdown ' + this.getDDClassName(),
	            'style': this.props.style,
	            'tabIndex': this.props.tabIndex || 0,
	            'onKeyDown': this.onKeyDown
	        }, this.hasLabel() ? React.createElement('label', { 'key': 'dropdownLabel' }, this.translateIfNeeded(this.getLabel())) : null, this.hasLabel() && (this.props.infoText || this.props.infoTitle) ? React.createElement(infoIcon, {
	            'key': 'infoIcon',
	            'text': this.props.infoText,
	            'title': this.props.infoTitle
	        }) : null, React.createElement('div', {
	            'className': 'dd',
	            'ref': 'dropdown',
	            'onClick': this.toggle
	        }    /* tabindex="0" */
	             /* onBlur="{this.onBlur}" */, React.createElement('div', {
	            'className': 'selected-container',
	            'ref': 'selectedContainer'
	        }, this.props.template.call(this)), this.props.toggleIcon ? React.createElement('i', {
	            'key': 'toggleIcon',
	            'className': 'expand arrow'
	        }, React.createElement(symbols.symbol, { 'name': this.props.customDropDownIcon ? this.props.customDropDownIcon : 'arrowDown' })) : null));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 99 */
/*!**************************************************!*\
  !*** ./js/baseUI/panelInputs/dropDown/select.rt ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';
	    return function () {
	        return React.createElement('div', { 'className': 'selected' }, this.getCached('selectedContent'));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 100 */
/*!******************************************************!*\
  !*** ./js/baseUI/panelInputs/dropDown/dropDown.scss ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./dropDown.scss */ 101);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./dropDown.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./dropDown.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 101 */
/*!**************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/panelInputs/dropDown/dropDown.scss ***!
  \**************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\ndiv.dropdown {\n  font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n  font-size: 16px;\n  position: relative; }\n  div.dropdown .info-icon {\n    line-height: 0;\n    opacity: 0;\n    position: absolute;\n    right: 12px;\n    top: 18px;\n    transition-property: opacity;\n    transition-duration: .15s; }\n  div.dropdown:hover .info-icon {\n    opacity: 1; }\n  div.dropdown * {\n    margin: 0;\n    padding: 0; }\n  div.dropdown > label {\n    display: none;\n    font-weight: 300;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap; }\n  div.dropdown > div.dd {\n    position: relative; }\n    div.dropdown > div.dd > div.selected-container {\n      box-sizing: border-box;\n      color: #162d3d;\n      font-size: 18px;\n      height: 36px;\n      line-height: 36px;\n      min-height: 36px;\n      overflow: hidden;\n      padding-right: 30px;\n      position: relative;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n    div.dropdown > div.dd i.arrow .symbol-arrowDown {\n      fill: #3899ec;\n      left: 50%;\n      position: absolute;\n      top: 50%;\n      transform: translate(-50%, -50%); }\n  div.dropdown:focus {\n    outline: none; }\n  div.dropdown.context-menu:not(.disabled) > div.dd, div.dropdown.select:not(.disabled) > div.dd, div.dropdown.combobox:not(.disabled) > div.dd {\n    cursor: pointer; }\n  div.dropdown.select > label, div.dropdown.combobox > label {\n    color: #2b5672;\n    display: inline-block;\n    font-size: 14px;\n    line-height: 18px;\n    margin-bottom: 3px;\n    text-align: left; }\n  div.dropdown.select > .info-icon, div.dropdown.combobox > .info-icon {\n    float: right;\n    margin-right: 3px;\n    position: static; }\n  div.dropdown.select:not(.disabled):hover > div.dd > div.selected-container > i.expand.arrow, div.dropdown.combobox:not(.disabled):hover > div.dd > div.selected-container > i.expand.arrow {\n    opacity: 1; }\n  div.dropdown.select:not(.disabled):hover > div.dd > div.selected-container > div.selected, div.dropdown.combobox:not(.disabled):hover > div.dd > div.selected-container > div.selected {\n    color: #3899ec; }\n  div.dropdown.select > div.dd > div.selected-container > div.selected, div.dropdown.combobox > div.dd > div.selected-container > div.selected {\n    overflow: inherit;\n    text-overflow: inherit; }\n  div.dropdown.select > div.dd > i.expand.arrow, div.dropdown.combobox > div.dd > i.expand.arrow {\n    border: 2px solid #3899ec;\n    border-radius: 50%;\n    content: '';\n    display: block;\n    height: 22px;\n    opacity: .6;\n    right: 0;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 22px; }\n  div.dropdown.context-menu {\n    width: 24px;\n    height: 24px;\n    border: 1px solid #000;\n    border-radius: 50%;\n    line-height: 24px;\n    text-align: center; }\n    div.dropdown.context-menu > div.dd {\n      height: 100%; }\n      div.dropdown.context-menu > div.dd > div.selected-container {\n        height: 30px;\n        line-height: 30px;\n        min-height: 30px; }\n  div.dropdown.disabled > div.dd > div.selected-container {\n    color: #7a7a7a; }\n  div.dropdown.disabled.select label {\n    color: #939393; }\n  div.dropdown.disabled.select > .dd > i.expand.arrow {\n    border-color: #bcbcbc;\n    opacity: .6; }\n    div.dropdown.disabled.select > .dd > i.expand.arrow > .symbol-arrowDown {\n      fill: #bcbcbc; }\n    div.dropdown.disabled.select > .dd > i.expand.arrow:hover {\n      background-color: transparent; }\n      div.dropdown.disabled.select > .dd > i.expand.arrow:hover > .symbol-arrowDown {\n        fill: #bcbcbc; }\n\nsection.dropdown-options {\n  left: 0;\n  position: absolute;\n  top: 0; }\n  section.dropdown-options * {\n    margin: 0;\n    padding: 0; }\n  section.dropdown-options > div.options {\n    background-color: #fff;\n    border-radius: 8px;\n    box-shadow: 0 0 22px 0 rgba(22, 45, 61, 0.26);\n    display: none;\n    flex-direction: column;\n    max-height: 100%;\n    position: fixed; }\n    section.dropdown-options > div.options:focus {\n      outline: none; }\n    section.dropdown-options > div.options > ol.list {\n      display: block;\n      flex-grow: 1;\n      max-height: 100%;\n      overflow: hidden; }\n      section.dropdown-options > div.options > ol.list > li.option {\n        box-sizing: border-box;\n        cursor: pointer;\n        display: block;\n        font-size: 14px;\n        line-height: 36px;\n        padding: 0 20px;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        position: relative; }\n        section.dropdown-options > div.options > ol.list > li.option:not(.separator) {\n          height: 36px; }\n          section.dropdown-options > div.options > ol.list > li.option:not(.separator).hovered {\n            background-color: #eaf7ff; }\n        section.dropdown-options > div.options > ol.list > li.option.level1 {\n          padding-left: 30px; }\n        section.dropdown-options > div.options > ol.list > li.option.level2 {\n          padding-left: 40px; }\n        section.dropdown-options > div.options > ol.list > li.option.level2 {\n          padding-left: 50px; }\n    section.dropdown-options > div.options > i.arrow {\n      background-color: rgba(255, 255, 255, 0.93);\n      display: block;\n      font-size: 8px;\n      height: 36px;\n      left: 0;\n      opacity: .6;\n      position: absolute;\n      width: 100%;\n      visibility: hidden;\n      z-index: 1; }\n      section.dropdown-options > div.options > i.arrow > .symbol-arrowDown {\n        fill: #3899ec;\n        left: 50%;\n        position: absolute;\n        top: 50%;\n        transform: translate(-50%, -50%); }\n      section.dropdown-options > div.options > i.arrow:hover > .symbol-arrowDown {\n        opacity: 1; }\n    section.dropdown-options > div.options > i.top.arrow {\n      top: 0;\n      transform: rotateX(180deg); }\n    section.dropdown-options > div.options > i.bottom.arrow {\n      bottom: 0; }\n    section.dropdown-options > div.options > footer {\n      flex-shrink: 0; }\n  section.dropdown-options.expanded {\n    height: 100vh;\n    width: 100%;\n    z-index: 9998 !important; }\n    section.dropdown-options.expanded > div.options {\n      display: flex !important; }\n      section.dropdown-options.expanded > div.options.scroll.up > i.top.arrow,\n      section.dropdown-options.expanded > div.options.scroll.down > i.bottom.arrow {\n        visibility: visible; }\n      section.dropdown-options.expanded > div.options > ol.list {\n        will-change: transform, scroll-position; }\n  section.dropdown-options.select > div.options {\n    overflow: hidden; }\n    section.dropdown-options.select > div.options > ol.list > li.option:first-child {\n      border-radius: 8px 8px 0 0; }\n    section.dropdown-options.select > div.options > ol.list > li.option:last-child {\n      border-radius: 0 0 8px 8px; }\n    section.dropdown-options.select > div.options > ol.list > li.option.selected {\n      background-color: #3899ec;\n      color: #fff; }\n  section.dropdown-options.context-menu > div.options > ol.list {\n    box-sizing: border-box;\n    padding: 10px 0; }\n    section.dropdown-options.context-menu > div.options > ol.list > li.option.selected:hover:not(.separator) {\n      background-color: #eaf7ff; }\n  section.dropdown-options.context-menu > div.options.tag-triangle:before {\n    margin-left: -5px;\n    left: 50%; }\n  section.dropdown-options.combobox > div.options {\n    overflow: hidden; }\n    section.dropdown-options.combobox > div.options > ol.list {\n      overflow-y: auto; }\n      section.dropdown-options.combobox > div.options > ol.list > li.option.selected {\n        background-color: #3899ec;\n        color: #fff; }\n    section.dropdown-options.combobox > div.options > footer {\n      font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n      font-size: 14px;\n      background-color: #fff;\n      box-shadow: 0 -1px 23px 0 #fff;\n      color: #3899ec;\n      line-height: 35px;\n      height: 35px;\n      padding: 0 20px;\n      z-index: 0; }\n      section.dropdown-options.combobox > div.options > footer span {\n        cursor: pointer; }\n", ""]);

	// exports


/***/ },
/* 102 */
/*!***************************************************************!*\
  !*** ./js/wix-ui-react/components/dropDown/dropDownSelect.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 5);
	var _ = __webpack_require__(/*! lodash */ 6);
	var Wix = __webpack_require__(/*! Wix */ 14);
	var template = __webpack_require__(/*! wix-ui-react/components/dropDown/dropDown.rt */ 103);
	__webpack_require__(/*! baseUI/panelInputs/dropDown/dropDown.scss */ 100);
	__webpack_require__(/*! ./overrides.scss */ 104);

	module.exports = React.createClass({

	    displayName: 'DropDown',
	    propTypes: {
	        title: React.PropTypes.string,
	        options: React.PropTypes.arrayOf(React.PropTypes.shape({
	            value: React.PropTypes.string.isRequired,
	            label: React.PropTypes.string.isRequired,
	            className: React.PropTypes.string,
	            type: React.PropTypes.string
	        })).isRequired
	    },

	    getInitialState: function getInitialState() {
	        return {
	            value: this.props.defaultValue
	        };
	    },

	    componentDidMount: function componentDidMount() {
	        if (Wix.Utils.getViewMode() !== 'standalone') {
	            var wixParam = this.props['wix-param'];
	            if (wixParam) {
	                Wix.Styles.getStyleParams(function (styleParams, callback) {
	                    var num = styleParams.numbers[wixParam];
	                    if (_.isNumber(num)) {
	                        this.setState({
	                            value: num.toString()
	                        }, callback);
	                    }
	                }.bind(this));
	            }
	        }
	    },

	    getValueLink: function getValueLink(valueName) {
	        var that = this;
	        return {
	            value: that.state[valueName],
	            requestChange: function requestChange(newValue) {
	                that.handleChange(newValue, valueName);
	            }
	        };
	    },

	    handleChange: function handleChange(newValue, valueName) {
	        this.setState({
	            value: newValue
	        }, function () {
	            var wixParam = this.props['wix-param'];
	            if (wixParam) {
	                Wix.Styles.setNumberParam(wixParam, {
	                    value: newValue
	                });
	            }
	        });

	        if (this.props.onChange && _.isFunction(this.props.onChange)) {
	            this.props.onChange.call(this, newValue);
	        }
	    },
	    render: template
	});

/***/ },
/* 103 */
/*!*********************************************************!*\
  !*** ./js/wix-ui-react/components/dropDown/dropDown.rt ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/panelInputs/dropDown/select */ 96),
	    __webpack_require__(/*! baseUI/panelInputs/dropDown/option */ 91)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, dropDownSelect, dropDownOption) {
	    'use strict';
	    function repeatOption1(option, optionIndex) {
	        return React.createElement(dropDownOption, {
	            'key': 'option' + optionIndex,
	            'value': option.value,
	            'className': option.className
	        }, option.label);
	    }
	    return function () {
	        return React.createElement.apply(this, [
	            dropDownSelect,
	            {
	                'infoTitle': this.props.infoTitle,
	                'style': this.props.style,
	                'infoText': this.props.infoText,
	                'label': this.props.title,
	                'valueLink': this.getValueLink('value')
	            },
	            _.map(this.props.options, repeatOption1.bind(this))
	        ]);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 104 */
/*!************************************************************!*\
  !*** ./js/wix-ui-react/components/dropDown/overrides.scss ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./overrides.scss */ 105);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./overrides.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./overrides.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 105 */
/*!********************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/wix-ui-react/components/dropDown/overrides.scss ***!
  \********************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, "div.dropdown, section.dropdown-options {\n  text-align: left;\n  padding: 17px 12px 17px 12px; }\n  div.dropdown > div.options > ol.list > li.option, section.dropdown-options > div.options > ol.list > li.option {\n    color: #162d3d;\n    font-size: 16px; }\n  div.dropdown.select > .info-icon, section.dropdown-options.select > .info-icon {\n    position: absolute;\n    right: 12px;\n    top: 12px; }\n  div.dropdown.select > label, section.dropdown-options.select > label {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    width: calc(100% - 30px);\n    margin-bottom: 2px;\n    margin-top: 3px; }\n", ""]);

	// exports


/***/ },
/* 106 */
/*!*************************************************************!*\
  !*** ./js/wix-ui-react/components/switches/radioButtons.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	__webpack_require__(/*! baseUI/controls/radioButtons.scss */ 107);

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! Wix */ 14), __webpack_require__(/*! baseUI/controls/radioButtonsMixin */ 42), __webpack_require__(/*! wix-ui-react/components/switches/radioButtons.rt */ 109)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, Wix, radioMixin, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'RadioButtons',
	        mixins: [radioMixin],
	        propTypes: {
	            title: React.PropTypes.string,
	            disabled: React.PropTypes.bool,
	            options: React.PropTypes.arrayOf(React.PropTypes.shape({
	                value: React.PropTypes.string.isRequired,
	                label: React.PropTypes.string.isRequired,
	                className: React.PropTypes.string,
	                type: React.PropTypes.string
	            })),
	            onChange: React.PropTypes.func,
	            infoText: React.PropTypes.string,
	            infoTitle: React.PropTypes.string,
	            defaultValue: React.PropTypes.string
	        },
	        onClick: function onClick() {
	            if (this.props && this.props.onClickPreview) {
	                this.props.onClickPreview(this.props);
	            }
	        },
	        onMouseOver: function onMouseOver() {
	            if (this.props && this.props.onMouseOverPreview) {
	                this.props.onMouseOverPreview(this.props);
	            }
	        },
	        getInitialState: function getInitialState() {
	            return {
	                value: this.props.defaultValue || this.props.options && this.props.options[0].value,
	                disabled: this.props.disabled
	            };
	        },
	        componentDidMount: function componentDidMount() {
	            var wixParam = this.props['wix-param'];
	            if (Wix.Utils.getViewMode() !== 'standalone' && wixParam) {
	                Wix.Styles.getStyleParams(function (styleParams, callback) {
	                    var number = styleParams.numbers[wixParam] || { value: this.props.value || this.props.defaultValue || this.props.options[0].value };
	                    this.setState({
	                        value: _.isObject(number) ? number.value : "" + number
	                    }, callback);
	                }.bind(this));
	            }
	        },
	        getValueLink: function getValueLink(valueName) {
	            var that = this;
	            return {
	                value: that.state[valueName],
	                requestChange: function requestChange(newValue) {
	                    that.handleChangeInner(newValue, valueName);
	                }
	            };
	        },
	        handleChangeInner: function handleChangeInner(newValue, valueName, callback) {
	            var stateToSet = {};
	            stateToSet[valueName] = newValue;
	            this.setState(stateToSet, function () {
	                var wixParam = this.props['wix-param'];
	                if (wixParam) {
	                    Wix.Styles.setNumberParam(wixParam, {
	                        value: newValue
	                    });
	                }
	                if (_.isFunction(this.props.onChange)) {
	                    this.props.onChange(newValue);
	                }
	                if (_.isFunction(callback)) {
	                    callback();
	                }
	            });

	            if (_.isFunction(this.props.onClickPreview)) {
	                this.props.onClickPreview.call(this, newValue);
	            }
	        },
	        enable: function enable() {
	            this.setState({ disabled: false });
	        },
	        disable: function disable() {
	            this.setState({ disabled: true });
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 107 */
/*!**********************************************!*\
  !*** ./js/baseUI/controls/radioButtons.scss ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./radioButtons.scss */ 108);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./radioButtons.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./radioButtons.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 108 */
/*!******************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/controls/radioButtons.scss ***!
  \******************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.control-radio-buttons {\n  box-sizing: border-box;\n  position: relative; }\n  .control-radio-buttons .info-icon {\n    position: absolute;\n    top: 0;\n    right: 0;\n    opacity: 0;\n    transition-property: opacity;\n    transition-duration: .15s; }\n  .control-radio-buttons:hover .info-icon {\n    opacity: 1; }\n  .control-radio-buttons div {\n    margin-bottom: 14px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px;\n    color: #2b5672; }\n  .control-radio-buttons label {\n    display: block;\n    margin: 0 0 13px 1px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n    .control-radio-buttons label:last-child {\n      margin-bottom: 0; }\n  .control-radio-buttons span:nth-of-type(2) {\n    position: relative;\n    top: -4px;\n    display: inline;\n    color: #162d3d;\n    margin-left: 12px;\n    font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px; }\n  .control-radio-buttons input {\n    display: none; }\n    .control-radio-buttons input + span {\n      border-radius: 50%;\n      display: inline-block;\n      height: 17px;\n      width: 17px;\n      box-shadow: inset 0 0 0 1px #3899ec;\n      transition-property: background-color, border-width;\n      transition-duration: .15s;\n      box-sizing: border-box; }\n    .control-radio-buttons input:checked + span {\n      background-color: #3899ec;\n      box-shadow: inset 0 0 0 1px #3899ec, inset 0 0 0 2px #fff; }\n  .control-radio-buttons.disabled span:nth-of-type(2) {\n    color: #939393; }\n  .control-radio-buttons.disabled input + span {\n    box-shadow: inset 0 0 0 1px #bcbcbc; }\n  .control-radio-buttons.disabled input:checked + span {\n    background-color: #bcbcbc;\n    box-shadow: inset 0 0 0 1px #bcbcbc, inset 0 0 0 2px #fff; }\n  .control-radio-buttons:not(.disabled) label {\n    cursor: pointer; }\n    .control-radio-buttons:not(.disabled) label:hover input:not(:checked) + span {\n      background-color: #d3edff; }\n", ""]);

	// exports


/***/ },
/* 109 */
/*!*************************************************************!*\
  !*** ./js/wix-ui-react/components/switches/radioButtons.rt ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/controls/radioButtons */ 110)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, radioButtons) {
	    'use strict';
	    return function () {
	        return React.createElement(radioButtons, {
	            'valueLink': this.getValueLink('value'),
	            'options': this.props.options,
	            'disabled': this.state.disabled,
	            'infoText': this.props.infoText,
	            'infoTitle': this.props.infoTitle,
	            'label': this.props.title,
	            'onMouseOverPreview': this.props.onMouseOverPreview
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 110 */
/*!********************************************!*\
  !*** ./js/baseUI/controls/radioButtons.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! baseUI/controls/radioButtonsMixin */ 42), __webpack_require__(/*! baseUI/controls/radioButtons.rt */ 111)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, radioMixin, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'RadioButtons',
	        mixins: [radioMixin],
	        propTypes: {
	            label: React.PropTypes.string,
	            disabled: React.PropTypes.bool,
	            options: React.PropTypes.arrayOf(React.PropTypes.shape({
	                value: React.PropTypes.string.isRequired,
	                label: React.PropTypes.string.isRequired,
	                className: React.PropTypes.string,
	                type: React.PropTypes.string
	            })),
	            infoText: React.PropTypes.string,
	            infoTitle: React.PropTypes.string
	        },
	        onClick: function onClick() {
	            if (this.props && this.props.onClickPreview) {
	                this.props.onClickPreview(this.props);
	            }
	        },
	        onMouseOver: function onMouseOver() {
	            if (this.props && this.props.onMouseOverPreview) {
	                this.props.onMouseOverPreview(this.props);
	            }
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 111 */
/*!********************************************!*\
  !*** ./js/baseUI/controls/radioButtons.rt ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/controls/infoIcon */ 18)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, infoIcon) {
	    'use strict';
	    function onChange1(selectedValue, option, optionIndex) {
	        this.handleChange(option.value, option.type);
	    }
	    function repeatOption2(selectedValue, option, optionIndex) {
	        return React.createElement('label', {
	            'className': option.className,
	            'onMouseOver': this.onMouseOver,
	            'key': 'option-' + option.value
	        }, React.createElement('input', {
	            'type': 'radio',
	            'name': this.getRadioGroupId(),
	            'value': option.value,
	            'disabled': this.props.disabled,
	            'checked': option.value === selectedValue,
	            'onChange': onChange1.bind(this, selectedValue, option, optionIndex)
	        }), React.createElement('span', {}), React.createElement('span', { 'onClick': this.onClick }, this.translateIfNeeded(option.label)));
	    }
	    function scopeSelectedValue3() {
	        var selectedValue = this.getValueFromProps(this.props);
	        return _.map(this.props.options, repeatOption2.bind(this, selectedValue));
	    }
	    return function () {
	        return React.createElement.apply(this, [
	            'div',
	            { 'className': 'control-radio-buttons' + (this.props.disabled ? ' disabled' : '') },
	            this.props.infoText ? React.createElement(infoIcon, {
	                'key': 'infoIcon',
	                'text': this.props.infoText,
	                'title': this.props.infoTitle
	            }) : null,
	            this.props.label ? React.createElement('div', { 'key': 'label' }, this.translateIfNeeded(this.props.label)) : null,
	            scopeSelectedValue3.apply(this, [])
	        ]);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 112 */
/*!*******************************************************!*\
  !*** ./js/wix-ui-react/components/tooltip/tooltip.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var template = __webpack_require__(/*! wix-ui-react/components/tooltip/tooltip.rt */ 113);
	__webpack_require__(/*! baseUI/popovers/tooltips.scss */ 114);

	module.exports = React.createClass({
	    displayName: 'Tooltip',
	    render: template
	});

/***/ },
/* 113 */
/*!*******************************************************!*\
  !*** ./js/wix-ui-react/components/tooltip/tooltip.rt ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/popovers/tooltip */ 39)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, tooltip) {
	    'use strict';
	    return function () {
	        return React.createElement(tooltip, {
	            'value': this.props.value,
	            'alignment': this.props.alignment,
	            'styleType': this.props.styleType,
	            'width': this.props.width
	        }, React.createElement('span', {}, this.props.children));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 114 */
/*!******************************************!*\
  !*** ./js/baseUI/popovers/tooltips.scss ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./tooltips.scss */ 115);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./tooltips.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./tooltips.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 115 */
/*!**************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/popovers/tooltips.scss ***!
  \**************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.tooltip-presenter {\n  z-index: 9999;\n  position: fixed;\n  left: 0;\n  top: 0;\n  background-color: #fff;\n  box-shadow: 0 0 18px 0 rgba(22, 45, 61, 0.27);\n  border-radius: 8px; }\n  .tooltip-presenter .arrow {\n    transform: rotate(45deg);\n    background-color: #fff; }\n    .tooltip-presenter .arrow:after {\n      content: '';\n      z-index: -1;\n      position: absolute;\n      top: calc(100% - 1px);\n      left: 0;\n      width: 100%;\n      height: 1px;\n      box-shadow: 0 2px 4px 0 rgba(22, 45, 61, 0.27); }\n    .tooltip-presenter .arrow:before {\n      content: '';\n      z-index: -1;\n      position: absolute;\n      top: 0;\n      left: calc(100% - 1px);\n      width: 1px;\n      height: 100%;\n      box-shadow: 2px 0px 4px 0 rgba(22, 45, 61, 0.27); }\n  .tooltip-presenter.alignment-bottom .arrow:after {\n    top: 0;\n    left: 0;\n    box-shadow: 0 -2px 4px 0 rgba(22, 45, 61, 0.27); }\n  .tooltip-presenter.alignment-bottom .arrow:before {\n    top: 0;\n    left: 0;\n    box-shadow: -2px 0px 4px 0 rgba(22, 45, 61, 0.27); }\n  .tooltip-presenter.alignment-right .arrow:after {\n    top: calc(100% - 1px);\n    left: 0;\n    box-shadow: 0 2px 4px 0 rgba(22, 45, 61, 0.27); }\n  .tooltip-presenter.alignment-right .arrow:before {\n    top: 0;\n    left: 0;\n    box-shadow: -2px 0px 4px 0 rgba(22, 45, 61, 0.27); }\n  .tooltip-presenter.alignment-left .arrow:after {\n    top: 0;\n    left: 0;\n    box-shadow: 0 -2px 4px 0 rgba(22, 45, 61, 0.27); }\n  .tooltip-presenter.alignment-left .arrow:before {\n    top: 0;\n    left: calc(100% - 1px);\n    box-shadow: 2px 0px 4px 0 rgba(22, 45, 61, 0.27); }\n  .tooltip-presenter .content-wrapper {\n    position: relative;\n    color: #2b5672;\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px; }\n  .tooltip-presenter.normal-tooltip .content-wrapper {\n    padding: 18px;\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px;\n    color: #2b5672; }\n  .tooltip-presenter.small-tooltip .content-wrapper {\n    padding: 12px; }\n  .tooltip-presenter .content {\n    word-wrap: break-word; }\n\n.imageAndTextTooltip {\n  white-space: normal; }\n  .imageAndTextTooltip .text-container {\n    padding: 24px; }\n    .imageAndTextTooltip .text-container .title {\n      font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n      font-size: 18px;\n      color: #2b5672;\n      margin-bottom: 12px; }\n    .imageAndTextTooltip .text-container .text {\n      font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n      font-size: 14px;\n      color: #2b5672; }\n    .imageAndTextTooltip .text-container .learn-more {\n      cursor: pointer;\n      color: #3899ec;\n      font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n      font-size: 14px;\n      margin-top: 10px; }\n      .imageAndTextTooltip .text-container .learn-more :hover {\n        text-decoration: underline; }\n    .imageAndTextTooltip .text-container.text-no-image {\n      padding: 18px; }\n  .imageAndTextTooltip .image-container {\n    background-color: #3899ec;\n    text-align: center;\n    left: 0;\n    right: 0; }\n    .imageAndTextTooltip .image-container.upper-image {\n      border-top-left-radius: 8px;\n      border-top-right-radius: 8px; }\n    .imageAndTextTooltip .image-container.lower-image {\n      border-bottom-left-radius: 8px;\n      border-bottom-right-radius: 8px; }\n    .imageAndTextTooltip .image-container svg {\n      margin-top: 22px;\n      margin-bottom: 22px; }\n\n.titleBodyAndLinkTooltip {\n  white-space: normal;\n  max-width: 300px;\n  padding: 18px; }\n  .titleBodyAndLinkTooltip .title {\n    font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 18px;\n    color: #2b5672;\n    margin-bottom: 6px; }\n  .titleBodyAndLinkTooltip .text {\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px;\n    color: #2b5672; }\n  .titleBodyAndLinkTooltip .link {\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px;\n    color: #3899ec;\n    cursor: pointer;\n    margin-top: 11px; }\n    .titleBodyAndLinkTooltip .link :hover {\n      text-decoration: underline; }\n\n.keyboardShortcutTooltip .label {\n  font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n  font-size: 14px;\n  color: #2b5672; }\n\n.keyboardShortcutTooltip .shortcut {\n  font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n  font-size: 12px;\n  color: #7a92a5;\n  margin-left: 2px; }\n\n.tooltips-layer {\n  top: 0;\n  left: 0; }\n", ""]);

	// exports


/***/ },
/* 116 */
/*!***********************************************************!*\
  !*** ./js/wix-ui-react/components/panels/openedPanels.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 5);
	var _ = __webpack_require__(/*! lodash */ 6);
	var template = __webpack_require__(/*! wix-ui-react/components/panels/openedPanels.rt */ 117);
	var panelsManagerFactory = __webpack_require__(/*! panels/panelManager/panelManagerFactory */ 120);

	module.exports = React.createClass({

	    displayName: 'OpenedPanels',

	    getOpenedPanels: function getOpenedPanels() {
	        var op = panelsManagerFactory.getManager().getOpenPanels();
	        var comps = _.map(op, function (item) {
	            return item.comp;
	        });
	        return comps;
	    },

	    getInitialState: function getInitialState() {
	        this.initPanelManager();

	        return {
	            openPanels: this.getOpenedPanels()
	        };
	    },

	    onPanelsUpdated: function onPanelsUpdated() {
	        this.setState({
	            openPanels: this.getOpenedPanels()
	        });
	    },

	    initPanelManager: function initPanelManager() {
	        panelsManagerFactory.getManager().registerObserver(this.onPanelsUpdated);
	    },

	    render: template
	});

/***/ },
/* 117 */
/*!***********************************************************!*\
  !*** ./js/wix-ui-react/components/panels/openedPanels.rt ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! wix-ui-react/components/panels/basicPanel */ 118)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, BasicPanel) {
	    'use strict';
	    function repeatPanel1(panel, panelIndex) {
	        return React.createElement(BasicPanel, panel.props, '\n       ', panel, '\n    ');
	    }
	    return function () {
	        return React.createElement.apply(this, [
	            'div',
	            { 'className': 'opened-panels' },
	            _.map(this.state.openPanels, repeatPanel1.bind(this))
	        ]);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 118 */
/*!*********************************************************!*\
  !*** ./js/wix-ui-react/components/panels/basicPanel.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 5);
	var template = __webpack_require__(/*! wix-ui-react/components/panels/basicPanel.rt */ 119);

	module.exports = React.createClass({

	    displayName: 'Panel',
	    getStyle: function getStyle() {
	        return {
	            zIndex: 1700,
	            top: 30,
	            left: 100,
	            position: 'absolute',
	            width: 210,
	            height: 325,
	            borderRadius: 10,
	            overflow: 'hidden',
	            boxShadow: '2px 2px 10px 2px rgba(10,20,30,0.3)',
	            textAlign: 'center',
	            backgroundColor: '#fff' //'rgba(248, 245, 236, 0.2)'
	        };
	    },

	    render: template
	});

/***/ },
/* 119 */
/*!*********************************************************!*\
  !*** ./js/wix-ui-react/components/panels/basicPanel.rt ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';
	    return function () {
	        return React.createElement('div', { 'style': this.getStyle() }, '\n    ', this.props.children, '\n');
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 120 */
/*!*******************************************************!*\
  !*** ./js/panels/panelManager/panelManagerFactory.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! panels/panelManager/panelManager */ 121)], __WEBPACK_AMD_DEFINE_RESULT__ = function (PanelManagerClass) {
	    'use strict';

	    var manager = null;

	    return {
	        getManager: function getManager() {
	            manager = manager || new PanelManagerClass();
	            return manager;
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 121 */
/*!************************************************!*\
  !*** ./js/panels/panelManager/panelManager.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {
	    'use strict';

	    function panelManager() {

	        var openedPanels = [];
	        var panelUpdatesObservers = [];

	        /**
	         * Sole point of update for the openedPanels. Other methods MUST NOT change the opened panels array directly!
	         * @private
	         * @param newOpenedPanels
	         */
	        function updateOpenPanels(newOpenedPanels) {
	            openedPanels = newOpenedPanels;
	            notifyObservers();
	        }

	        function notifyObservers() {
	            _.forEach(panelUpdatesObservers, function (observer) {
	                observer();
	            });
	        }

	        function createPanelProps(panelName, panelProps) {
	            return _.assign({}, panelProps, {
	                panelName: panelName,
	                key: panelName + _.uniqueId()
	            });
	        }

	        return {
	            /**
	             * Open a panel
	             * @param panelName the package export path of the panel i.e. "compPanels.panels.SiteButton.settingsPanel"
	             * @param {object} [panelProps] props that will be passed on to the requested panel when created (according to the panel's declared PropTypes i.e. "title", "position" etc.)
	             * @param {boolean} [leavePanelsOpen] if other panels should remain open when opening the current panel. by default all panels should close
	             */
	            openPanel: function openPanel(panelName, panelClass, panelProps, leavePanelsOpen) {
	                if (!leavePanelsOpen) {
	                    this.closeAllPanels();
	                }
	                var currentInstance = _.find(openedPanels, { name: panelName });
	                if (currentInstance && currentInstance.singleInstance) {
	                    this.updatePanelProps(panelName, panelProps);
	                    return;
	                }
	                var props = createPanelProps(panelName, panelProps);
	                var panelDescriptor = {
	                    name: panelName,
	                    comp: React.createElement(panelClass, props),
	                    props: props
	                };
	                updateOpenPanels(openedPanels.concat(panelDescriptor));
	            },

	            /**
	             * Close an open panel that has the provided package export path
	             * @param panelName the package export path of the panel i.e. "compPanels.panels.SiteButton.settingsPanel"
	             */
	            closePanelByName: function closePanelByName(panelName) {
	                updateOpenPanels(_.reject(openedPanels, { name: panelName }));
	            },

	            /**
	             * Close all panels that were chronologically opened after the provided one (not inclusive!)
	             * @param panelName the package export path of the panel i.e. "compPanels.panels.SiteButton.settingsPanel"
	             */
	            closePanelsOpenedAfter: function closePanelsOpenedAfter(panelName) {
	                var panelIndex = _.findIndex(this.getOpenPanels(), { name: panelName });
	                updateOpenPanels(_.take(this.getOpenPanels(), panelIndex + 1));
	            },
	            /**
	             * Close all open panels
	             */
	            closeAllPanels: function closeAllPanels() {
	                updateOpenPanels([]);
	            },
	            /**
	             * Get an array of open panels descriptors
	             *
	             * @typedef {Object} PanelDescriptor
	             * @property {string} name the package export path of the panel i.e. "compPanels.panels.SiteButton.settingsPanel"
	             * @property {string} frameType type of frame, according to the frame's declared displayName
	             * @property {string} props props that are passed on to the panel
	             *
	             * @return {Array.<PanelDescriptor>}
	             */
	            getOpenPanels: function getOpenPanels() {
	                return _.clone(openedPanels);
	            },

	            /**
	             * Register an observer to be called on updates of the open panels' state
	             *
	             * @callback panelObserver
	             *
	             * @param {panelObserver} observer the observer-function to be called on update
	             */
	            registerObserver: function registerObserver(observer) {
	                panelUpdatesObservers.push(observer);
	            },

	            /**
	             * Un Register an observer
	             *
	             * @param {panelObserver} observer the observer-function that was register using registerObserver
	             */
	            unregisterObserver: function unregisterObserver(observer) {
	                var observerIndex = _.indexOf(panelUpdatesObservers, observer);
	                if (observerIndex > -1) {
	                    panelUpdatesObservers.splice(observerIndex, 1);
	                }
	            },

	            /**
	             * Update panel props
	             *
	             * @param {string} panelName
	             * @param {Object} props
	             */
	            updatePanelProps: function updatePanelProps(panelName, props) {
	                var updatedOpenPanels = this.getOpenPanels();
	                var panels = _.filter(updatedOpenPanels, { name: panelName });
	                _.forEach(panels, function (panel) {
	                    _.merge(panel.props, props);
	                    updateOpenPanels(updatedOpenPanels);
	                }, this);
	            }
	        };
	    }

	    return panelManager;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 122 */
/*!*********************************************************************!*\
  !*** ./js/wix-ui-react/components/languagePicker/languagePicker.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 5);
	var _ = __webpack_require__(/*! lodash */ 6);
	var dropDown = __webpack_require__(/*! wix-ui-react/components/dropDown/dropDown */ 90);
	__webpack_require__(/*! baseUI/panelInputs/dropDown/dropDown.scss */ 100);

	module.exports = React.createClass({

	    displayName: 'languagePicker',
	    mixins: [React.addons.LinkedStateMixin],
	    getInitialState: function getInitialState() {
	        return {
	            languages: [{ symbol: 'En', native: 'English' }, { symbol: 'Da', native: 'Dansk' }, { symbol: 'De', native: 'Deutsch' }, { symbol: 'Es', native: 'Español' }, { symbol: 'Fr', native: 'Français' }, { symbol: 'It', native: 'Italiano' }, { symbol: 'Nl', native: 'Nederlands' }, { symbol: 'No', native: 'Norsk' }, { symbol: 'Pl', native: 'Polski' }, { symbol: 'Pt', native: 'Português' }, { symbol: 'Ru', native: 'Русский' }, { symbol: 'Sv', native: 'Svenska' }, { symbol: 'Ja', native: '日本語' }, { symbol: 'Ko', native: '한국어' }, { symbol: 'Tr', native: 'Türkçe' }, { symbol: 'He', native: 'עברית' }],
	            defaultValue: 'En'
	        };
	    },

	    render: function render() {
	        function repeatLangs(lang) {
	            return React.createElement(dropDown.option, { value: lang }, lang.native);
	        }
	        var defaultLang = _.find(this.state.languages, { 'symbol': this.props.defaultValue });

	        return React.createElement(dropDown.select, {
	            'value': defaultLang,
	            'valueLink': this.props.valueLink,
	            'onChange': this.props.onChange,
	            'label': this.props.title,
	            'customDropDownIcon': 'arrowDown', // TODO: use a world icon or something
	            'infoTitle': this.props.infoTitle,
	            'infoText': this.props.infoText || 'here you can select language'

	        }, _.map(this.state.languages, repeatLangs.bind(this)));
	    }
	});

/***/ },
/* 123 */
/*!*****************************************************!*\
  !*** ./js/wix-ui-react/components/slider/slider.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Wix = __webpack_require__(/*! Wix */ 14);

	var template = __webpack_require__(/*! wix-ui-react/components/slider/slider.rt */ 124);
	__webpack_require__(/*! baseUI/panelInputs/slider.scss */ 125);

	module.exports = React.createClass({

	    displayName: 'Slider',
	    propTypes: {
	        title: React.PropTypes.string,
	        defaultValue: React.PropTypes.number,
	        min: React.PropTypes.number,
	        max: React.PropTypes.number,
	        units: React.PropTypes.string,
	        step: React.PropTypes.number,
	        infoText: React.PropTypes.string,
	        infoTitle: React.PropTypes.string,
	        onSlideEnd: React.PropTypes.func,
	        onChange: React.PropTypes.func
	    },

	    getInitialState: function getInitialState() {
	        return {
	            value: this.props.defaultValue
	        };
	    },

	    componentDidMount: function componentDidMount() {
	        if (Wix.Utils.getViewMode() !== 'standalone') {
	            var wixParam = this.props['wix-param'];
	            if (wixParam) {
	                Wix.Styles.getStyleParams(function (styleParams) {
	                    var num = styleParams.numbers[wixParam] || this.props.defaultValue || 0;
	                    this.setState({
	                        value: Number(num || num.value)
	                    });
	                }.bind(this));
	            }
	        }
	    },

	    handleSlideEnd: function handleSlideEnd() {
	        var newValue = this.state.value;

	        if (this.props.onSlideEnd) {
	            this.props.onSlideEnd.call(this, newValue);
	        }
	    },

	    handleChange: function handleChange(newValue) {
	        this.setState({
	            value: newValue
	        });

	        if (Wix.Utils.getViewMode() !== 'standalone') {
	            var wixParam = this.props['wix-param'];
	            if (wixParam) {
	                Wix.Styles.setNumberParam(wixParam, {
	                    value: newValue
	                });
	            }
	        }

	        if (this.props.onChange) {
	            this.props.onChange.call(this, newValue);
	        }
	    },

	    render: template
	});

/***/ },
/* 124 */
/*!*****************************************************!*\
  !*** ./js/wix-ui-react/components/slider/slider.rt ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/panelInputs/slider */ 66)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, slider) {
	    'use strict';
	    return function () {
	        return React.createElement(slider, {
	            'label': this.props.title,
	            'min': this.props.min,
	            'max': this.props.max,
	            'step': this.props.step,
	            'value': this.state.value,
	            'onChange': this.handleChange,
	            'onSlideEnd': this.handleSlideEnd,
	            'units': this.props.units,
	            'infoText': this.props.infoText,
	            'infoTitle': this.props.infoTitle
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 125 */
/*!*******************************************!*\
  !*** ./js/baseUI/panelInputs/slider.scss ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./slider.scss */ 126);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./slider.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./slider.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 126 */
/*!***************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/panelInputs/slider.scss ***!
  \***************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.input-slider {\n  position: relative; }\n  .input-slider > label {\n    display: none; }\n  .input-slider.has-label > label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 14px;\n    color: #2b5672;\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px;\n    text-align: left;\n    font-weight: 300;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .input-slider .info-icon {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0px; }\n  .input-slider .sliderArea {\n    position: relative; }\n  .input-slider .slider {\n    position: relative;\n    height: 36px;\n    margin: 0 81px 0 0;\n    padding-top: 3px; }\n    .input-slider .slider .line {\n      position: absolute;\n      top: 17px;\n      left: 0;\n      height: 6px;\n      width: 100%;\n      background-color: #d3edff;\n      border-radius: 3px;\n      box-shadow: inset 0 1px 0 0 #c0e1f2;\n      cursor: pointer; }\n    .input-slider .slider .knobContainer {\n      margin-right: 16px;\n      position: relative; }\n    .input-slider .slider .coloredLine {\n      position: absolute;\n      top: 14px;\n      left: 0;\n      height: 6px;\n      background-color: #3899ec;\n      border-radius: 3px;\n      box-shadow: inset 0 1px 0 0 #3899ec;\n      will-change: width;\n      cursor: pointer; }\n    .input-slider .slider .sliderKnob {\n      position: absolute;\n      content: '';\n      top: 9px;\n      display: inline-block;\n      border-radius: 50%;\n      background-color: #fff;\n      box-shadow: 0px 1px 3px 0px rgba(52, 94, 151, 0.6);\n      width: 16px;\n      height: 16px;\n      cursor: pointer;\n      will-change: left;\n      transition: box-shadow 0.25s ease-in-out 0s; }\n      .input-slider .slider .sliderKnob:after {\n        position: absolute;\n        content: '';\n        display: inline-block;\n        border-radius: 50%;\n        background-color: #3899ec;\n        width: 8px;\n        height: 8px;\n        left: 4px;\n        top: 4px;\n        cursor: pointer; }\n      .input-slider .slider .sliderKnob:hover {\n        box-shadow: 0px 1px 2px 2px rgba(138, 209, 250, 0.58); }\n  .input-slider .input-stepper {\n    position: absolute;\n    right: 0; }\n    .input-slider .input-stepper .input {\n      text-align: right; }\n  .input-slider:hover .input-stepper, .input-slider:hover .input-stepper > * {\n    background-color: #eaf7ff; }\n  .input-slider:hover .info-icon {\n    display: inline-block; }\n  .input-slider.disabled {\n    opacity: .5; }\n", ""]);

	// exports


/***/ },
/* 127 */
/*!*******************************************************!*\
  !*** ./js/wix-ui-react/components/stepper/stepper.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var template = __webpack_require__(/*! wix-ui-react/components/stepper/stepper.rt */ 128);
	__webpack_require__(/*! baseUI/panelInputs/stepper.scss */ 129);

	module.exports = React.createClass({

	    displayName: 'Stepper',
	    propTypes: {
	        min: React.PropTypes.number,
	        max: React.PropTypes.number,
	        step: React.PropTypes.number,
	        units: React.PropTypes.string,
	        defaultValue: React.PropTypes.number,
	        onChange: React.PropTypes.func
	    },

	    getInitialState: function getInitialState() {
	        return {
	            value: this.props.defaultValue
	        };
	    },

	    render: template
	});

/***/ },
/* 128 */
/*!*******************************************************!*\
  !*** ./js/wix-ui-react/components/stepper/stepper.rt ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/panelInputs/stepper */ 70)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, stepper) {
	    'use strict';
	    return function () {
	        return React.createElement(stepper, {
	            'step': this.props.step,
	            'min': this.props.min,
	            'max': this.props.max,
	            'units': this.props.units,
	            'value': this.state.value,
	            'onChange': this.props.onChange
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 129 */
/*!********************************************!*\
  !*** ./js/baseUI/panelInputs/stepper.scss ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./stepper.scss */ 130);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./stepper.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./stepper.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 130 */
/*!****************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/panelInputs/stepper.scss ***!
  \****************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.input-stepper {\n  border-radius: 8px;\n  border: 1px solid transparent;\n  width: 56px;\n  padding: 0 6px;\n  position: relative;\n  text-align: left;\n  display: inline-block; }\n  .input-stepper:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border: 1px solid transparent;\n    border-radius: 8px;\n    pointer-events: none; }\n  .input-stepper.edited:after {\n    border-color: #9cccf6;\n    box-shadow: inset 0px 0px 3px 0px rgba(0, 90, 132, 0.25); }\n  html .input-stepper:not(.disabled):hover,\n  .input-stepper:not(.disabled):hover > input,\n  .input-stepper:not(.disabled):hover > .units,\n  .input-stepper:not(.disabled) > input:focus {\n    background-color: #d3edff;\n    color: #2b5672;\n    cursor: pointer; }\n  .input-stepper:not(.disabled):hover:after {\n    border-color: #d3edff; }\n  .input-stepper.edited {\n    background-color: transparent !important; }\n    .input-stepper.edited > input {\n      background-color: transparent !important;\n      cursor: text !important; }\n  .input-stepper:not(.edited) > input {\n    cursor: default; }\n    .input-stepper:not(.edited) > input::selection {\n      background-color: transparent; }\n  .input-stepper .input {\n    border: none;\n    outline: none;\n    text-align: center;\n    font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 18px;\n    height: 36px;\n    line-height: 36px;\n    padding: 0 7px;\n    width: calc(100% - 14px);\n    display: inline-block;\n    color: #162d3d; }\n    .input-stepper .input::selection {\n      background-color: #eaf7ff; }\n  .input-stepper.has-units .input {\n    width: 70%;\n    padding: 0;\n    text-align: right;\n    display: inline-block; }\n  .input-stepper .units {\n    line-height: 36px;\n    height: 36px;\n    width: 1%;\n    display: inline-block;\n    white-space: nowrap;\n    padding: 0 7px 0 1px; }\n  .input-stepper.edited .units {\n    visibility: hidden; }\n  .input-stepper.disabled {\n    opacity: 0.5; }\n    .input-stepper.disabled > input {\n      color: #7a7a7a;\n      background: transparent; }\n    .input-stepper.disabled .units {\n      color: #7a7a7a; }\n\n.input-stepper.small {\n  width: 45px;\n  padding: 2px 2px 2px 0; }\n  .input-stepper.small .units {\n    height: 18px;\n    line-height: 18px;\n    font-size: 12px; }\n  .input-stepper.small > input {\n    font-size: 12px;\n    height: 18px;\n    line-height: 18px; }\n", ""]);

	// exports


/***/ },
/* 131 */
/*!*************************************************!*\
  !*** ./js/wix-ui-react/components/tabs/tabs.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var tabHolder = __webpack_require__(/*! baseUI/tabs/tabHolder */ 132);
	var tabLabel = __webpack_require__(/*! baseUI/tabs/tabLabel */ 133);
	var tabHeader = __webpack_require__(/*! baseUI/tabs/tabHeader */ 134);
	var tabContent = __webpack_require__(/*! baseUI/tabs/tabContent */ 135);
	var tab = __webpack_require__(/*! baseUI/tabs/tab */ 136);
	__webpack_require__(/*! wix-ui-react/components/tabs/tabs-ui-lib.scss */ 137);

	module.exports = {
	    holder: tabHolder,
	    header: tabHeader,
	    label: tabLabel,
	    content: tabContent,
	    tab: tab
	};

/***/ },
/* 132 */
/*!*************************************!*\
  !*** ./js/baseUI/tabs/tabHolder.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 43), __webpack_require__(/*! baseUI/mixins/classNameMixin */ 36)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, inputMixin, classNameMixin) {
	    'use strict';

	    return React.createClass({
	        mixins: [inputMixin, classNameMixin],

	        displayName: 'tabs',

	        propTypes: {
	            className: React.PropTypes.string,
	            style: React.PropTypes.object,
	            defaultTab: React.PropTypes.any
	        },

	        getInitialState: function getInitialState() {
	            return {
	                value: this.getValueFromProps(this.props) !== undefined ? this.getValueFromProps(this.props) : this.props.defaultTab
	            };
	        },

	        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	            var newVal = this.getValueFromProps(nextProps);

	            if (newVal !== undefined && this.state.value !== newVal) {
	                this.setState({ value: newVal });
	            }
	        },

	        setSelected: function setSelected(value) {
	            this.callOnChangeIfExists(value);
	            this.setState({ value: value });
	        },

	        generateChildren: function generateChildren() {
	            var children = [];

	            React.Children.forEach(this.props.children, function (child) {
	                var type = child.props.type;

	                if (type === 'tabHeader') {
	                    var headerProps = {
	                        setSelected: this.setSelected,
	                        value: this.state.value,
	                        key: 'tab-header'
	                    };
	                    if (this.props.headerStyle) {
	                        headerProps.style = this.props.headerStyle;
	                    }
	                    children.push(React.cloneElement(child, headerProps));
	                } else if (type === 'tabContent') {
	                    children.push(React.cloneElement(child, {
	                        value: this.state.value,
	                        key: 'tab-content'
	                    }));
	                } else {
	                    children.push(child);
	                }
	            }, this);

	            return children;
	        },

	        render: function render() {
	            return React.DOM.section({
	                className: this.generateClassName('tabs'),
	                style: this.props.style
	            }, this.generateChildren());
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 133 */
/*!************************************!*\
  !*** ./js/baseUI/tabs/tabLabel.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! baseUI/mixins/classNameMixin */ 36)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, classNameMixin) {
	    'use strict';

	    return React.createClass({
	        displayName: 'tabLabel',

	        mixins: [classNameMixin],

	        getDefaultProps: function getDefaultProps() {
	            return {
	                type: this.displayName
	            };
	        },

	        setSelected: function setSelected() {
	            var props = this.props;
	            var value = typeof props.for !== 'undefined' ? props.for : props.htmlFor;
	            props.setSelected(value);
	        },

	        render: function render() {
	            return React.DOM.li({
	                onClick: this.setSelected,
	                className: this.generateClassName('tab-label ' + (this.props.selected ? 'selected' : '')),
	                style: this.props.style
	            }, this.props.children);
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 134 */
/*!*************************************!*\
  !*** ./js/baseUI/tabs/tabHeader.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! baseUI/mixins/classNameMixin */ 36)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, classNameMixin) {
	    'use strict';

	    return React.createClass({
	        mixins: [classNameMixin],

	        displayName: 'tabHeader',
	        childrenList: [],
	        i: 1,

	        getInitialState: function getInitialState() {
	            return {
	                showMore: false
	            };
	        },

	        getDefaultProps: function getDefaultProps() {
	            return {
	                type: this.displayName
	            };
	        },

	        showMore: function showMore() {
	            this.setState({ showMore: true });
	        },

	        createLabel: function createLabel(elem, i) {
	            return React.cloneElement(elem, {
	                setSelected: this.props.setSelected,
	                selected: elem.props.for !== undefined ? this.props.value === elem.props.for : this.props.value === elem.props.htmlFor,
	                key: 'tab-label ' + i
	            });
	        },

	        createShowMoreLabel: function createShowMoreLabel(elem) {
	            return React.cloneElement(elem, {
	                showMore: this.showMore,
	                key: 'tab-show-more-label'
	            });
	        },

	        addChild: function addChild(child) {
	            if (!child) {
	                return false;
	            }
	            var type = child.props.type;
	            var showMore = type === 'tabShowMoreLabel' && !this.state.showMore;

	            if (type === 'tabLabel') {
	                this.childrenList.push(this.createLabel(child, this.i));
	                this.i++; //eslint-disable-line space-unary-ops
	            } else if (showMore) {
	                this.childrenList.push(this.createShowMoreLabel(child));
	            }

	            return showMore;
	        },

	        generateChildren: function generateChildren() {
	            var currentChildren = this.props.children;
	            this.i = 1;
	            this.childrenList = [];

	            if (currentChildren.constructor === Array) {
	                currentChildren.some(this.addChild, this);
	            } else if (currentChildren.constructor === Object) {
	                // the only child
	                this.addChild(currentChildren);
	            }

	            return this.childrenList;
	        },

	        render: function render() {
	            return React.DOM.ul({
	                className: this.generateClassName('tab-header'),
	                style: this.props.style
	            }, this.generateChildren());
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 135 */
/*!**************************************!*\
  !*** ./js/baseUI/tabs/tabContent.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! baseUI/mixins/classNameMixin */ 36)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, classNameMixin) {
	    'use strict';

	    return React.createClass({
	        mixins: [classNameMixin],

	        displayName: 'tabContent',

	        getDefaultProps: function getDefaultProps() {
	            return {
	                type: this.displayName
	            };
	        },

	        getSelectedTab: function getSelectedTab() {
	            var children = this.props.children;
	            var i = 1;
	            var currentTab = false;
	            var selected = this.props.value;

	            if (children.constructor === Array) {
	                children.some(function (child) {
	                    if (!child) {
	                        return false;
	                    }
	                    var type = child.props.type;

	                    if (type === 'tab') {
	                        if (selected === child.props.name) {
	                            currentTab = child;
	                        }

	                        i++;
	                    }

	                    return Boolean(currentTab);
	                }, this);
	            } else if (children.constructor === Object) {
	                // the only child
	                currentTab = selected === children.props.name ? children : null;
	            }

	            return currentTab;
	        },

	        render: function render() {
	            return React.DOM.section({
	                className: this.generateClassName('tab-content ' + this.props.value),
	                style: this.props.style
	            }, this.getSelectedTab());
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 136 */
/*!*******************************!*\
  !*** ./js/baseUI/tabs/tab.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! baseUI/mixins/classNameMixin */ 36)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, classNameMixin) {
	    'use strict';

	    return React.createClass({
	        displayName: 'tab',

	        mixins: [classNameMixin],

	        getDefaultProps: function getDefaultProps() {
	            return {
	                type: this.displayName
	            };
	        },

	        render: function render() {
	            return React.createElement('div', {
	                className: this.generateClassName('tab'),
	                style: this.props.style
	            }, this.props.children);
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 137 */
/*!**********************************************************!*\
  !*** ./js/wix-ui-react/components/tabs/tabs-ui-lib.scss ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./tabs-ui-lib.scss */ 138);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./tabs-ui-lib.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./tabs-ui-lib.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 138 */
/*!******************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/wix-ui-react/components/tabs/tabs-ui-lib.scss ***!
  \******************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, "section.tabs {\n  overflow: hidden;\n  position: relative; }\n  section.tabs > ul.tab-header > li.tab-label {\n    cursor: pointer;\n    display: block; }\n  section.tabs > section.tab-content {\n    position: relative; }\n  section.tabs.left {\n    display: flex; }\n    section.tabs.left > section.tab-content {\n      align-self: stretch; }\n  section.tabs.top > ul.tab-header {\n    display: block;\n    overflow: hidden;\n    width: 100%; }\n    section.tabs.top > ul.tab-header > li.tab-label {\n      float: left; }\n  section.tabs.radio > ul.tab-header > li.tab-label {\n    line-height: 16px;\n    margin-bottom: 15px;\n    padding-left: 32px;\n    position: relative; }\n    section.tabs.radio > ul.tab-header > li.tab-label:before, section.tabs.radio > ul.tab-header > li.tab-label:after {\n      content: '';\n      border-radius: 50%;\n      display: block;\n      position: absolute; }\n    section.tabs.radio > ul.tab-header > li.tab-label:before {\n      border: 1px solid #3899ec;\n      box-sizing: border-box;\n      height: 16px;\n      left: 5px;\n      width: 16px;\n      top: calc(50% - 8px); }\n    section.tabs.radio > ul.tab-header > li.tab-label.selected:after {\n      background-color: #3899ec;\n      height: 12px;\n      left: 7px;\n      width: 12px;\n      top: calc(50% - 6px); }\n\nsection.tabs.top > ul.tab-header {\n  display: flex; }\n\nsection.tabs {\n  display: flex;\n  flex-direction: column; }\n  section.tabs > ul.tab-header {\n    min-height: 47px;\n    display: flex; }\n    section.tabs > ul.tab-header > li.tab-label {\n      flex: 1 1;\n      border: 1px solid #daedfe;\n      border-top: 0;\n      box-sizing: border-box;\n      position: relative;\n      background-color: #eaf7ff;\n      height: 47px;\n      line-height: 47px;\n      text-align: center;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      padding: 0 10px;\n      color: #2b5672; }\n      section.tabs > ul.tab-header > li.tab-label:hover {\n        background-color: #d3edff;\n        border-bottom: 1px solid #d3edff; }\n      section.tabs > ul.tab-header > li.tab-label.selected {\n        border: none;\n        background-color: #fff; }\n      section.tabs > ul.tab-header > li.tab-label:last-child {\n        border-right: none; }\n      section.tabs > ul.tab-header > li.tab-label:first-child {\n        border-left: none; }\n", ""]);

	// exports


/***/ },
/* 139 */
/*!***********************************************************!*\
  !*** ./js/wix-ui-react/components/textInput/textInput.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! baseUI/panelInputs/textInputSync */ 140), __webpack_require__(/*! baseUI/panelInputs/textInputAsync */ 144), __webpack_require__(/*! wix-ui-react/components/textInput/textInput.rt */ 146)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, textInputSync, textInputAsync, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'textInput',
	        propTypes: {
	            title: React.PropTypes.string,
	            type: React.PropTypes.string,
	            placeholder: React.PropTypes.string,
	            defaultText: React.PropTypes.string,
	            maxLength: React.PropTypes.number,
	            className: React.PropTypes.string,
	            isMultiLine: React.PropTypes.bool,
	            infoText: React.PropTypes.string,
	            infoTitle: React.PropTypes.string,
	            onChangeInValidationStatus: React.PropTypes.func,
	            validateOnBlurOnly: React.PropTypes.bool
	        },
	        getInputComponent: function getInputComponent() {
	            if (this.props.validateOnBlurOnly) {
	                return textInputAsync;
	            }
	            return textInputSync;
	        },
	        getPropsForInputComponent: function getPropsForInputComponent() {
	            var props = _.clone(this.props);
	            props.label = props.title;
	            props.textAreaClass = 'textarea';
	            return props;
	        },
	        isValueValid: function isValueValid() {
	            return this.refs.inputComp.isValid();
	        },
	        focus: function focus() {
	            this.refs.inputComp.focus();
	        },
	        getValue: function getValue() {
	            return this.refs.inputComp.lastValidValue;
	        },
	        setValue: function setValue(newValue) {
	            this.refs.inputComp.setState({
	                value: newValue
	            });
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 140 */
/*!************************************************!*\
  !*** ./js/baseUI/panelInputs/textInputSync.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react-dom */ 19), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! jquery */ 67), __webpack_require__(/*! react */ 5), __webpack_require__(/*! util */ 25), __webpack_require__(/*! baseUI/mixins/inputFocusMixin */ 141), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 43), __webpack_require__(/*! baseUI/panelInputs/inputValidationMixin */ 142), __webpack_require__(/*! baseUI/popovers/tooltipManager */ 41), __webpack_require__(/*! baseUI/panelInputs/textInputCommon.rt */ 143)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ReactDOM, _, $, React, util, inputFocusMixin, inputMixin, inputValidationMixin, tooltipManager, template) {
	    'use strict';

	    var SUCCESS_DURATION = 1000;
	    var TEXT_INPUT_TOOLTIP_ERROR = 'text-input-sync-validation-error-';
	    var KEYS = {
	        ESC: 27,
	        ENTER: 13
	    };

	    return React.createClass({
	        displayName: 'textInputSync',
	        mixins: [React.addons.LinkedStateMixin, inputFocusMixin, inputMixin, inputValidationMixin, util.translationMixin, util.blockOuterScrollMixin],
	        propTypes: {
	            label: React.PropTypes.string,
	            type: React.PropTypes.string,
	            placeholder: React.PropTypes.string,
	            defaultText: React.PropTypes.string,
	            maxLength: React.PropTypes.number,
	            focus: React.PropTypes.bool,
	            className: React.PropTypes.string,
	            isMultiLine: React.PropTypes.bool,
	            infoText: React.PropTypes.string,
	            infoTitle: React.PropTypes.string,
	            onChangeInValidationStatus: React.PropTypes.func,
	            textAreaClass: React.PropTypes.string
	        },
	        getInitialState: function getInitialState() {
	            var value = this.getInitialValue();
	            //todo Shimi_Liderman 7/6/15 20:55 should validate initial value? if not valid what is the initial lastValidValue?
	            this.lastValidValue = value;
	            return {
	                value: value,
	                isFocused: false
	            };
	        },
	        getInitialValue: function getInitialValue() {
	            var valueFromProps = this.getValueFromProps();
	            return valueFromProps ? valueFromProps : this.translateIfNeeded(this.props.defaultText) || '';
	        },
	        getWrapperClasses: function getWrapperClasses() {
	            var isValid = this.isValid(this.state.value);
	            var classes = {
	                'control-text-input': true,
	                'success': isValid && this.shouldDisplaySuccessIndicator,
	                'error': !isValid,
	                'instant-error': !isValid,
	                'is-disabled': this.isDisabled(),
	                'focused': this.state.isFocused,
	                'has-label': this.props.label
	            };

	            if (this.props.className) {
	                classes[this.props.className] = true;
	            }

	            return classes;
	        },
	        getInputElementClass: function getInputElementClass() {
	            return this.props.isMultiLine ? 'textarea' : 'input';
	        },
	        getTooltipId: function getTooltipId() {
	            if (!this.uniqueTooltipId) {
	                this.uniqueTooltipId = TEXT_INPUT_TOOLTIP_ERROR + _.uniqueId();
	            }

	            return this.uniqueTooltipId;
	        },
	        hasValueBeenChangedByUser: function hasValueBeenChangedByUser(value) {
	            return value !== this.valueOnFocus;
	        },
	        scrollInputToTopIfNeeded: function scrollInputToTopIfNeeded() {
	            if (this.props.isMultiLine) {
	                ReactDOM.findDOMNode(this.refs.input).scrollTop = 0;
	            }
	        },
	        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	            var nextValue = this.getValueFromProps(nextProps);
	            if (nextValue !== this.getValueFromProps() && nextValue !== this.state.value && this.isValid(nextValue)) {
	                this.setState({ value: nextValue });
	                this.lastValidValue = nextValue;
	                this.valueOnFocus = nextValue;
	            }
	        },
	        componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
	            var self = this;
	            if (shouldDisplaySuccessIndicator()) {
	                this.shouldDisplaySuccessIndicator = true;
	                setTimeout(hideSuccessIndicator, SUCCESS_DURATION);
	            }

	            function shouldDisplaySuccessIndicator() {
	                return !nextState.isFocused && self.state.isFocused && self.hasValueBeenChangedByUser(nextState.value) && self.isValid(nextState.value);
	            }

	            function hideSuccessIndicator() {
	                if (self.isMounted()) {
	                    self.shouldDisplaySuccessIndicator = false;
	                    self.forceUpdate();
	                }
	            }
	        },
	        componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	            var hasGainedFocus = !prevState.isFocused && this.state.isFocused;
	            var hasLostFocus = prevState.isFocused && !this.state.isFocused;

	            this.handleAutoFocusIfNeeded(prevProps);

	            if (hasGainedFocus) {
	                this.selectContent();
	                this.valueOnFocus = this.lastValidValue;
	            } else if (hasLostFocus) {
	                this.scrollInputToTopIfNeeded();
	            }

	            var value = this.state.value;
	            if (prevState.value !== value) {
	                var isValid = this.isValid(value);
	                if (isValid) {
	                    this.lastValidValue = value;
	                    if (value !== this.getValueFromProps()) {
	                        // value was not changed as a result of a new value passed in props
	                        this.callOnChangeIfExists(value);
	                    }
	                    tooltipManager.hide(this.getTooltipId());
	                } else {
	                    tooltipManager.show(this.getTooltipId());
	                }

	                if (this.props.onChangeInValidationStatus) {
	                    this.props.onChangeInValidationStatus(isValid);
	                }
	            }
	        },
	        selectContent: function selectContent() {
	            var $input = $(ReactDOM.findDOMNode(this.refs.input));
	            $input.select().one('mouseup', function (e) {
	                e.preventDefault();
	            });
	        },
	        handleCancel: function handleCancel() {
	            var self = this;
	            this.lastValidValue = this.valueOnFocus;
	            this.setState({ value: this.valueOnFocus }, function () {
	                $(ReactDOM.findDOMNode(self.refs.input)).blur();
	            });
	        },
	        handleKeyDown: function handleKeyDown(evt) {
	            var keyCode = evt.keyCode;
	            switch (keyCode) {
	                case KEYS.ESC:
	                    //esc
	                    this.handleCancel();
	                    break;
	                case KEYS.ENTER:
	                    //enter
	                    if (!this.props.isMultiLine) {
	                        $(ReactDOM.findDOMNode(this.refs.input)).blur();
	                    }
	                    break;
	            }
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 141 */
/*!*********************************************!*\
  !*** ./js/baseUI/mixins/inputFocusMixin.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ 67)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
	    'use strict';

	    return {
	        focus: function focus() {
	            $(ReactDOM.findDOMNode(this.refs.input)).focus();
	        },
	        handleAutoFocusIfNeeded: function handleAutoFocusIfNeeded(prevProps) {
	            // this is needed because autoFocus does not work with input in panels, and neither does focusing on componentDidMount or on first componentDidUpdate
	            var isFocused = this.state.isFocused;
	            var isAutoFocusRequested = !!this.props.focus;

	            if (isAutoFocusRequested && !isFocused) {
	                var hasAutoFocusJustBeenRequested = !prevProps.focus && isAutoFocusRequested;

	                if (hasAutoFocusJustBeenRequested || !this.wasFocusedBefore) {
	                    this.wasFocusedBefore = false;
	                    var $input = $(ReactDOM.findDOMNode(this.refs.input));
	                    $input.focus();
	                }
	            } else if (isAutoFocusRequested && isFocused) {
	                this.wasFocusedBefore = true;
	            }
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 142 */
/*!*******************************************************!*\
  !*** ./js/baseUI/panelInputs/inputValidationMixin.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';

	    return {
	        propTypes: {
	            validator: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.arrayOf(React.PropTypes.func)]),
	            invalidMessage: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.string])
	        },

	        /**
	         * Returns true if ALL validation functions return true
	         * @param value
	         * @returns {boolean}
	         */
	        isValid: function isValid(value) {
	            if (!this.hasValidator()) {
	                return true;
	            }

	            value = arguments.length === 0 ? this.state.value : value;

	            if (_.isArray(this.props.validator)) {
	                return _.every(this.props.validator, function (validator) {
	                    return validator(value);
	                });
	            }
	            return this.props.validator(value);
	        },

	        hasValidator: function hasValidator() {
	            return !!this.props.validator;
	        },

	        /**
	         * Returns the invalid message
	         * @returns {string}
	         */
	        getInvalidMessage: function getInvalidMessage() {
	            return _.isFunction(this.props.invalidMessage) ? this.props.invalidMessage() : this.props.invalidMessage;
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 143 */
/*!**************************************************!*\
  !*** ./js/baseUI/panelInputs/textInputCommon.rt ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/popovers/tooltip */ 39),
	    __webpack_require__(/*! baseUI/framework/uiConstants */ 20),
	    __webpack_require__(/*! symbols */ 3),
	    __webpack_require__(/*! baseUI/controls/infoIcon */ 18)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, tooltip, uiConstants, symbols, infoIcon) {
	    'use strict';
	    function onFocus1(inputClass) {
	        this.setState({ isFocused: true });
	    }
	    function onBlur2(inputClass) {
	        this.setState({ isFocused: false });
	    }
	    function scopeInputClass3() {
	        var inputClass = this.getInputElementClass();
	        return React.createElement('div', _.assign({}, { 'className': _.keys(_.pick(this.getWrapperClasses(), _.identity)).join(' ') }, this.filteredProps()), this.hasLabel() ? React.createElement('label', { 'key': 'textInputControlTitle' }, this.translateIfNeeded(this.getLabel())) : null, this.hasLabel() && (this.props.infoText || this.props.infoTitle) ? React.createElement(infoIcon, {
	            'key': 'infoIcon',
	            'text': this.props.infoText,
	            'title': this.props.infoTitle,
	            'size': 18
	        }) : null, React.createElement(inputClass, {
	            'ref': 'input',
	            'type': this.props.type || 'text',
	            'className': this.props.isMultiLine ? this.props.textAreaClass : '',
	            'valueLink': this.linkState('value'),
	            'onWheel': this.handleWheel,
	            'disabled': this.isDisabled(),
	            'placeholder': this.translateIfNeeded(this.props.placeholder) || '',
	            'maxLength': this.props.maxLength,
	            'spellCheck': false,
	            'autoFocus': this.props.focus,
	            'onKeyDown': this.handleKeyDown,
	            'onFocus': onFocus1.bind(this, inputClass),
	            'onBlur': onBlur2.bind(this, inputClass)
	        }), React.createElement(tooltip, {
	            'id': this.getTooltipId(),
	            'value': this.getInvalidMessage(),
	            'width': '300px',
	            'styleType': uiConstants.TOOLTIP.STYLE_TYPE.SMALL,
	            'openTriggers': [],
	            'closeTriggers': []
	        }, React.createElement('span', {
	            'className': 'validation-icon validation-icon-error',
	            'onClick': this.selectContent
	        }, React.createElement(symbols.symbol, { 'name': 'inputValidationError' }))), React.createElement('span', { 'className': 'validation-icon validation-icon-success' }, React.createElement(symbols.symbol, { 'name': 'inputValidationSuccess' })));
	    }
	    return function () {
	        return scopeInputClass3.apply(this, []);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 144 */
/*!*************************************************!*\
  !*** ./js/baseUI/panelInputs/textInputAsync.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react-dom */ 19), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! jquery */ 67), __webpack_require__(/*! react */ 5), __webpack_require__(/*! util */ 25), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 43), __webpack_require__(/*! baseUI/mixins/inputFocusMixin */ 141), __webpack_require__(/*! baseUI/panelInputs/inputValidationMixin */ 142), __webpack_require__(/*! baseUI/panelInputs/inputValidationAsyncMixin */ 145), __webpack_require__(/*! baseUI/popovers/tooltipManager */ 41), __webpack_require__(/*! baseUI/panelInputs/textInputCommon.rt */ 143)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ReactDOM, _, $, React, util, inputMixin, inputFocusMixin, inputValidationMixin, inputValidationAsyncMixin, tooltipManager, template) {
	    'use strict';

	    var SUCCESS_DURATION = 1000;
	    var TEXT_INPUT_TOOLTIP_ERROR = 'text-input-async-validation-error-';
	    var KEYS = {
	        ESC: 27,
	        ENTER: 13
	    };

	    return React.createClass({
	        displayName: 'textInputAsync',
	        mixins: [React.addons.LinkedStateMixin, inputMixin, inputFocusMixin, inputValidationMixin, inputValidationAsyncMixin, util.translationMixin, util.blockOuterScrollMixin],
	        propTypes: {
	            label: React.PropTypes.string,
	            type: React.PropTypes.string,
	            placeholder: React.PropTypes.string,
	            defaultText: React.PropTypes.string,
	            maxLength: React.PropTypes.number,
	            focus: React.PropTypes.bool,
	            className: React.PropTypes.string,
	            isMultiLine: React.PropTypes.bool,
	            infoText: React.PropTypes.string,
	            infoTitle: React.PropTypes.string,
	            onChangeInValidationStatus: React.PropTypes.func,
	            textAreaClass: React.PropTypes.string
	        },
	        ValidationStatus: {
	            NONE: 'none',
	            SUCCESS: 'success',
	            ERROR: 'error'
	        },
	        getInitialState: function getInitialState() {
	            var value = this.getInitialValue();
	            //todo Shimi_Liderman 7/6/15 20:55 should validate initial value? if not valid what is the initial lastValidValue?
	            this.lastValidValue = value;
	            return {
	                value: value,
	                validationStatus: this.ValidationStatus.NONE,
	                isFocused: false
	            };
	        },
	        getInitialValue: function getInitialValue() {
	            var valueFromProps = this.getValueFromProps();
	            return valueFromProps ? valueFromProps : this.translateIfNeeded(this.props.defaultText) || '';
	        },
	        getWrapperClasses: function getWrapperClasses() {
	            var classes = {
	                'control-text-input': true,
	                'success': this.state.validationStatus === this.ValidationStatus.SUCCESS,
	                'error': this.state.validationStatus === this.ValidationStatus.ERROR,
	                'is-disabled': this.isDisabled(),
	                'focused': this.state.isFocused,
	                'has-label': this.props.label
	            };

	            if (this.props.className) {
	                classes[this.props.className] = true;
	            }

	            return classes;
	        },
	        getInputElementClass: function getInputElementClass() {
	            return this.props.isMultiLine ? 'textarea' : 'input';
	        },
	        getTooltipId: function getTooltipId() {
	            if (!this.uniqueTooltipId) {
	                this.uniqueTooltipId = TEXT_INPUT_TOOLTIP_ERROR + _.uniqueId();
	            }

	            return this.uniqueTooltipId;
	        },
	        hasValueBeenChangedByUser: function hasValueBeenChangedByUser(value) {
	            return value !== this.lastValidValue;
	        },
	        onValidationSuccess: function onValidationSuccess(value, result) {
	            if (this.isMounted()) {
	                this.successResultObject = result;
	                this.setState({ validationStatus: this.ValidationStatus.SUCCESS });
	            } else {
	                this.callOnChangeIfExists(value, this.successResultObject);
	            }
	        },
	        onValidationFailure: function onValidationFailure() {
	            if (this.isMounted()) {
	                this.setState({ validationStatus: this.ValidationStatus.ERROR });
	            }
	        },
	        validate: function validate(value, onSuccess, onFailure) {
	            if (this.isValid(value)) {
	                this.isAsyncValid(value, onSuccess, onFailure);
	            } else {
	                onFailure(this.getInvalidMessage());
	            }
	        },
	        hideSuccessIndicator: function hideSuccessIndicator() {
	            if (this.isMounted()) {
	                this.setState({ validationStatus: this.ValidationStatus.NONE });
	            }
	        },
	        onValueValid: function onValueValid(value) {
	            setTimeout(this.hideSuccessIndicator, SUCCESS_DURATION);
	            tooltipManager.hide(this.getTooltipId());
	            this.lastValidValue = value;
	            this.callOnChangeIfExists(value, this.successResultObject);
	        },
	        toggleErrorTooltip: function toggleErrorTooltip() {
	            var isFocused = this.state.isFocused;
	            var validationStatus = this.state.validationStatus;
	            var tooltipId = this.getTooltipId();

	            if (!isFocused && validationStatus === this.ValidationStatus.ERROR) {
	                tooltipManager.show(tooltipId);
	            } else {
	                tooltipManager.hide(tooltipId);
	            }
	        },
	        scrollInputToTopIfNeeded: function scrollInputToTopIfNeeded() {
	            if (this.props.isMultiLine) {
	                ReactDOM.findDOMNode(this.refs.input).scrollTop = 0;
	            }
	        },
	        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	            var nextValue = this.getValueFromProps(nextProps);
	            if (nextValue !== this.getValueFromProps() && nextValue !== this.state.value) {
	                this.lastValidValue = nextValue;
	                this.setState({ value: nextValue });
	            }
	        },
	        componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	            var value = this.state.value;
	            var validationStatus = this.state.validationStatus;
	            var hasGainedFocus = !prevState.isFocused && this.state.isFocused;
	            var hasLostFocus = prevState.isFocused && !this.state.isFocused;
	            var hasValidationStatusChanged = prevState.validationStatus !== validationStatus;

	            this.handleAutoFocusIfNeeded(prevProps);

	            this.toggleErrorTooltip();

	            if (hasGainedFocus) {
	                this.selectContent();
	            } else if (hasLostFocus) {
	                this.scrollInputToTopIfNeeded();
	                if (this.hasValueBeenChangedByUser(value)) {
	                    this.validate(value, this.onValidationSuccess.bind(this, value), this.onValidationFailure);
	                }
	            }

	            if (hasValidationStatusChanged && validationStatus === this.ValidationStatus.SUCCESS) {
	                this.onValueValid(value);
	            }
	        },
	        selectContent: function selectContent() {
	            var $input = $(ReactDOM.findDOMNode(this.refs.input));
	            $input.select().one('mouseup', function (e) {
	                e.preventDefault();
	            });
	        },
	        handleCancel: function handleCancel() {
	            var self = this;
	            this.setState({ value: this.lastValidValue, validationStatus: this.ValidationStatus.NONE }, function () {
	                $(ReactDOM.findDOMNode(self.refs.input)).blur();
	            });
	        },
	        handleKeyDown: function handleKeyDown(evt) {
	            var keyCode = evt.keyCode;
	            switch (keyCode) {
	                case KEYS.ESC:
	                    //esc
	                    this.handleCancel();
	                    break;
	                case KEYS.ENTER:
	                    //enter
	                    if (!this.props.isMultiLine) {
	                        $(ReactDOM.findDOMNode(this.refs.input)).blur();
	                    }
	                    break;
	            }
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 145 */
/*!************************************************************!*\
  !*** ./js/baseUI/panelInputs/inputValidationAsyncMixin.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';

	    return {
	        propTypes: {
	            asyncValidator: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.arrayOf(React.PropTypes.objectOf(React.PropTypes.func)), React.PropTypes.arrayOf(React.PropTypes.func)])
	        },

	        /**
	         * @param value
	         * @param onSuccess
	         * @param onError
	         */
	        isAsyncValid: function isAsyncValid(value, onSuccess, onError) {
	            if (!this.hasAsyncValidator()) {
	                onSuccess();
	            }

	            if (_.isFunction(this.props.asyncValidator)) {
	                this.props.asyncValidator(value, onSuccess, onError);
	            } else {
	                var successCounter = _.size(this.props.asyncValidator);
	                var successResults = {};
	                var hasFailedValidation = false;

	                _.forEach(this.props.asyncValidator, function (validatorFunc, validatorName) {
	                    var onValidatorSuccess = function onValidatorSuccess(result) {
	                        if (result) {
	                            successResults[validatorName] = result;
	                        }

	                        successCounter--;
	                        if (successCounter === 0) {
	                            onSuccess(successResults);
	                        }
	                    };

	                    var onValidatorError = function onValidatorError(errorMessage) {
	                        if (hasFailedValidation) {
	                            return;
	                        }
	                        hasFailedValidation = true;
	                        onError(errorMessage);
	                    };

	                    validatorFunc(value, onValidatorSuccess, onValidatorError);
	                });
	            }
	        },

	        hasAsyncValidator: function hasAsyncValidator() {
	            return !!this.props.asyncValidator;
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 146 */
/*!***********************************************************!*\
  !*** ./js/wix-ui-react/components/textInput/textInput.rt ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';
	    function scopeInputComp1() {
	        var inputComp = this.getInputComponent();
	        return React.createElement(inputComp, _.assign({}, { 'ref': 'inputComp' }, this.getPropsForInputComponent()));
	    }
	    return function () {
	        return scopeInputComp1.apply(this, []);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 147 */
/*!*******************************************************!*\
  !*** ./js/wix-ui-react/components/switches/toggle.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 5);
	var _ = __webpack_require__(/*! lodash */ 6);
	var template = __webpack_require__(/*! wix-ui-react/components/switches/toggle.rt */ 148);
	__webpack_require__(/*! baseUI/controls/toggle.scss */ 149);
	__webpack_require__(/*! wix-ui-react/components/switches/toggle.scss */ 151);
	__webpack_require__(/*! symbols/svg/toggles/switch.scss */ 153);

	module.exports = React.createClass({

	    displayName: 'Toggle',
	    propTypes: {
	        label: React.PropTypes.string,
	        defaultValue: React.PropTypes.bool,
	        disabled: React.PropTypes.bool,
	        onChange: React.PropTypes.func,
	        infoText: React.PropTypes.string,
	        infoTitle: React.PropTypes.string
	    },

	    getInitialState: function getInitialState() {
	        return {
	            checked: this.props.defaultValue || false,
	            disabled: this.props.disabled
	        };
	    },

	    enable: function enable() {
	        this.setState({ disabled: false });
	    },

	    disable: function disable() {
	        this.setState({ disabled: true });
	    },

	    componentDidMount: function componentDidMount() {
	        if (Wix.Utils.getViewMode() !== 'standalone') {
	            var wixParam = this.props['wix-param'];
	            Wix.Styles.getStyleParams(function (styleParams, callback) {
	                var bool = styleParams.booleans[wixParam];
	                if (_.isBoolean(bool)) {
	                    this.setState({
	                        checked: bool
	                    }, callback);
	                } else {
	                    var defaultValue = this.state.checked;
	                    this.setState({
	                        checked: defaultValue
	                    }, callback);
	                }
	            }.bind(this));
	        }
	    },

	    handleChange: function handleChange(newValue) {
	        this.setState({
	            checked: newValue
	        }, function () {
	            var wixParam = this.props['wix-param'];
	            if (wixParam) {
	                Wix.Styles.setBooleanParam(wixParam, {
	                    value: newValue
	                });
	            }
	        });

	        if (this.props.onChange && _.isFunction(this.props.onChange)) {
	            this.props.onChange.call(this, newValue);
	        }
	    },

	    render: template
	});

/***/ },
/* 148 */
/*!*******************************************************!*\
  !*** ./js/wix-ui-react/components/switches/toggle.rt ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/controls/toggle */ 87)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, toggle) {
	    'use strict';
	    return function () {
	        return React.createElement(toggle, {
	            'name': 'switch',
	            'label': this.props.label,
	            'labelAfterSymbol': false,
	            'disabled': this.state.disabled,
	            'className': this.props.className,
	            'value': this.state.checked,
	            'infoTitle': this.props.infoTitle,
	            'infoText': this.props.infoText,
	            'onChange': this.handleChange
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 149 */
/*!****************************************!*\
  !*** ./js/baseUI/controls/toggle.scss ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./toggle.scss */ 150);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./toggle.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./toggle.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 150 */
/*!************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/controls/toggle.scss ***!
  \************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, ".boolean-control {\n  overflow: hidden; }\n  .boolean-control input {\n    display: none; }\n    .boolean-control input ~ svg,\n    .boolean-control input ~ .label {\n      cursor: pointer; }\n    .boolean-control input:disabled ~ svg,\n    .boolean-control input:disabled ~ .label {\n      cursor: default; }\n  .boolean-control span.label {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    width: inherit;\n    display: inline-block;\n    vertical-align: middle; }\n  .boolean-control.medium-scale svg {\n    transform: scale(0.8);\n    margin-bottom: -3px;\n    vertical-align: middle;\n    padding: 1px; }\n  .boolean-control.no-scale svg {\n    transform: scale(1);\n    vertical-align: middle;\n    padding: 1px; }\n  .boolean-control span:not(.info-icon) svg > path {\n    fill: #bcbcbc !important; }\n", ""]);

	// exports


/***/ },
/* 151 */
/*!*********************************************************!*\
  !*** ./js/wix-ui-react/components/switches/toggle.scss ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./toggle.scss */ 152);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./toggle.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./toggle.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 152 */
/*!*****************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/wix-ui-react/components/switches/toggle.scss ***!
  \*****************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, ".control-switch {\n  position: relative;\n  padding: 22px 24px 20px;\n  display: block; }\n  .control-switch .info-icon {\n    opacity: 0;\n    position: absolute;\n    right: 12px;\n    top: 12px;\n    transition-property: opacity;\n    transition-duration: .15s; }\n  .control-switch:hover .info-icon {\n    opacity: 1; }\n", ""]);

	// exports


/***/ },
/* 153 */
/*!********************************************!*\
  !*** ./js/symbols/svg/toggles/switch.scss ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./switch.scss */ 154);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./switch.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./switch.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 154 */
/*!****************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/symbols/svg/toggles/switch.scss ***!
  \****************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.control-switch .symbol-switch {\n  float: right; }\n  .control-switch .symbol-switch .st1 {\n    fill: #d3edff; }\n    .show-on-all-pages {\n      fill: #fee5d6; }\n  .control-switch .symbol-switch .st2 {\n    fill: #b1ddf8; }\n    .show-on-all-pages {\n      fill: #fed8c1; }\n  .control-switch .symbol-switch .switch-thumb-circle {\n    fill: #fff; }\n  .control-switch .symbol-switch .switch-thumb-minus {\n    fill: #b1ddf8; }\n    .show-on-all-pages {\n      fill: #fed8c1; }\n  .control-switch .symbol-switch .switch-thumb-check {\n    fill: none; }\n  .control-switch .symbol-switch .switch-thumb-regular {\n    visibility: visible; }\n  .control-switch .symbol-switch .switch-thumb-selected {\n    visibility: hidden; }\n\n.control-switch .label-switch {\n  color: #2b5672;\n  font-size: 14px;\n  line-height: 1.8;\n  font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif; }\n\n.control-switch:hover .symbol-switch .st1 {\n  fill: #b1ddf8; }\n  .show-on-all-pages {\n    fill: #fed8c1; }\n\n.control-switch .input-switch:disabled ~ .symbol-switch {\n  pointer-events: none; }\n  .control-switch .input-switch:disabled ~ .symbol-switch .st1 {\n    fill: #ececec; }\n  .control-switch .input-switch:disabled ~ .symbol-switch .st2 {\n    fill: #e3e3e3; }\n  .control-switch .input-switch:disabled ~ .symbol-switch .switch-thumb-circle {\n    filter: none; }\n  .control-switch .input-switch:disabled ~ .symbol-switch .switch-thumb-minus {\n    fill: #e3e3e3; }\n  .control-switch .input-switch:disabled ~ .symbol-switch .switch-thumb-check {\n    fill: none; }\n\n.control-switch .input-switch:checked ~ .symbol-switch .st1,\n.control-switch .input-switch:checked ~ .symbol-switch .st2 {\n  fill: #3899ec; }\n  .show-on-all-pages {\n    fill: #fb7d33; }\n\n.control-switch .input-switch:checked ~ .symbol-switch .switch-thumb-circle {\n  fill: #fff; }\n\n.control-switch .input-switch:checked ~ .symbol-switch .switch-thumb-minus {\n  fill: none; }\n\n.control-switch .input-switch:checked ~ .symbol-switch .switch-thumb-check {\n  fill: #3899ec; }\n  .show-on-all-pages {\n    fill: #fb7d33; }\n\n.control-switch .input-switch:checked ~ .symbol-switch .switch-thumb-regular {\n  visibility: hidden; }\n\n.control-switch .input-switch:checked ~ .symbol-switch .switch-thumb-selected {\n  visibility: visible; }\n\n.control-switch:hover .input-switch:not(:disabled):checked ~ .symbol-switch .st1,\n.control-switch:hover .input-switch:not(:disabled):checked ~ .symbol-switch .st2 {\n  fill: #4eb7f5; }\n  .show-on-all-pages {\n    fill: #fc975c; }\n\n.control-switch:hover .input-switch:not(:disabled):checked ~ .symbol-switch .switch-thumb-check {\n  fill: #4eb7f5; }\n  .show-on-all-pages {\n    fill: #fb7d33; }\n\n.control-switch .input-switch:checked:disabled ~ .symbol-switch {\n  pointer-events: none; }\n  .control-switch .input-switch:checked:disabled ~ .symbol-switch .st1 {\n    fill: #ececec; }\n  .control-switch .input-switch:checked:disabled ~ .symbol-switch .st2 {\n    fill: #e3e3e3; }\n  .control-switch .input-switch:checked:disabled ~ .symbol-switch .switch-thumb-circle {\n    filter: none; }\n  .control-switch .input-switch:checked:disabled ~ .symbol-switch .switch-thumb-minus {\n    fill: none; }\n  .control-switch .input-switch:checked:disabled ~ .symbol-switch .switch-thumb-check {\n    fill: #e3e3e3; }\n", ""]);

	// exports


/***/ },
/* 155 */
/*!*******************************************************************!*\
  !*** ./js/wix-ui-react/components/switches/toggleButtonsGroup.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 5);
	var template = __webpack_require__(/*! wix-ui-react/components/switches/toggleButtonsGroup.rt */ 156);
	__webpack_require__(/*! baseUI/controls/buttonsGroup.scss */ 52);

	module.exports = React.createClass({

	    displayName: 'ToggleButtonsGroup',
	    propTypes: {
	        options: React.PropTypes.array.isRequired,
	        style: React.PropTypes.string
	    },

	    getInitialState: function getInitialState() {
	        return {
	            checked: this.props.defaultValue || []
	        };
	    },

	    handleChange: function handleChange(newValue) {
	        var that = this;
	        this.setState({
	            checked: _.xor([newValue], this.state.checked)
	        }, function () {
	            if (that.props.onChange) {
	                that.props.onChange.call(that, that.state.checked);
	            }
	        });
	    },

	    render: template
	});

/***/ },
/* 156 */
/*!*******************************************************************!*\
  !*** ./js/wix-ui-react/components/switches/toggleButtonsGroup.rt ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/controls/infoIcon */ 18)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, infoIcon) {
	    'use strict';
	    function onChange1(option, optionIndex) {
	        this.handleChange(option.value);
	    }
	    function repeatOption2(option, optionIndex) {
	        return React.createElement('label', {
	            'key': option.value,
	            'className': option.className
	        }, React.createElement('input', {
	            'type': 'checkbox',
	            'value': option.value,
	            'checked': _(this.state.checked).contains(option.value),
	            'onChange': onChange1.bind(this, option, optionIndex)
	        }), React.createElement('span', {}, option.label));
	    }
	    return function () {
	        return React.createElement('div', { 'className': 'control-buttons-group' }, this.props.title ? React.createElement('p', { 'key': 'title' }, this.props.title) : null, this.props.title && (this.props.infoText || this.props.infoTitle) ? React.createElement(infoIcon, {
	            'key': 'infoIcon',
	            'text': this.props.infoText,
	            'title': this.props.infoTitle,
	            'size': 18
	        }) : null, React.createElement.apply(this, [
	            'div',
	            { 'className': 'group-buttons-container' + (this.props.align ? '-' + this.props.align : '') },
	            _.map(this.props.options, repeatOption2.bind(this))
	        ]));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 157 */
/*!*******************************************************************!*\
  !*** ./js/wix-ui-react/components/colorSpace/paletteDisplayer.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 5);
	var template = __webpack_require__(/*! wix-ui-react/components/colorSpace/paletteDisplayer.rt */ 158);
	__webpack_require__(/*! baseUI/colorPicker/palettesList.scss */ 161);
	__webpack_require__(/*! baseUI/colorPicker/paletteDisplayer.scss */ 163);

	module.exports = React.createClass({

	    displayName: 'paletteDisplayer',
	    mixins: [React.addons.LinkedStateMixin],
	    propTypes: {
	        label: React.PropTypes.string,
	        defaultValue: React.PropTypes.bool,
	        onChange: React.PropTypes.func,
	        onClick: React.PropTypes.func
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            openColorPicker: this.handleClick
	        };
	    },

	    getThemeColors: function getThemeColors() {
	        if (this.props.palette) {
	            return this.props.palette;
	        }
	        return {
	            color_0: '#ffffff',
	            color_1: '#FFFFFF',
	            color_2: '#000000',
	            color_3: '237,28,36,1',
	            color_4: '0,136,203,1',
	            color_5: '255,203,5,1',
	            color_6: '114,114,114,1',
	            color_7: '176,176,176,1',
	            color_8: '255,255,255,1',
	            color_9: '114,114,114,1',
	            color_10: '176,176,176,1',
	            color_11: '#FFFFFF',
	            color_12: '#CCCCCC',
	            color_13: '#A0A09F',
	            color_14: '#605E5E',
	            color_15: '#2F2E2E',
	            color_16: '#BAE9FF',
	            color_17: '#97DEFF',
	            color_18: '#30BDFF',
	            color_19: '#207EA9',
	            color_20: '#103F54',
	            color_21: '#B6E8E3',
	            color_22: '#8DD1CA',
	            color_23: '#41BAAE',
	            color_24: '#2B7C74',
	            color_25: '#163E3A',
	            color_26: '#F4C0AF',
	            color_27: '#E99F86',
	            color_28: '#DE5021',
	            color_29: '#943616',
	            color_30: '#4A1B0B',
	            color_31: '#F4EAB1',
	            color_32: '#E9DB89',
	            color_33: '#DEC328',
	            color_34: '#94821B',
	            color_35: '#4A410D'
	        };
	    },

	    render: template
	});

/***/ },
/* 158 */
/*!*******************************************************************!*\
  !*** ./js/wix-ui-react/components/colorSpace/paletteDisplayer.rt ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/colorPicker/paletteDisplayer */ 159)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, paletteDisplayer) {
	    'use strict';
	    return function () {
	        return React.createElement(paletteDisplayer, {
	            'isSelectable': true,
	            'value': 'color_0',
	            'palette': this.getThemeColors(),
	            'onPreview': this.props.onPreview
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 159 */
/*!***************************************************!*\
  !*** ./js/baseUI/colorPicker/paletteDisplayer.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! core */ 22), __webpack_require__(/*! util */ 25), __webpack_require__(/*! baseUI/colorPicker/paletteDisplayer.rt */ 160)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, core, util, template) {
	    'use strict';

	    function invertMatrix(matrix, rows, cols) {
	        var result = [];
	        var total = rows * cols;

	        for (var mod = 0; mod < rows; mod++) {
	            for (var index = mod; index < total; index += rows) {
	                result.push(matrix[index]);
	            }
	        }

	        return result;
	    }

	    return React.createClass({
	        displayName: 'paletteDisplayer',
	        mixins: [core.mixins.editorAPIMixin, util.valueLinkMixin, util.propTypesFilterMixin],
	        propTypes: {
	            palette: React.PropTypes.objectOf(React.PropTypes.string).isRequired,
	            isSelectable: React.PropTypes.bool,
	            onPreview: React.PropTypes.func
	        },
	        getColors: function getColors() {
	            var result = [];
	            _.forEach(this.props.palette, function (colorValue, colorSymbol) {
	                var colorIndex = parseInt(/color_(\d+)/.exec(colorSymbol)[1], 10);
	                if (colorIndex >= 11) {
	                    result.push({ symbol: colorSymbol, value: colorValue });
	                }
	            });

	            return invertMatrix(result, 5, result.length / 5);
	        },
	        getOptionClasses: function getOptionClasses(colorObj) {
	            return {
	                'palette-color-option': true,
	                'white-option': util.colors.getDistanceToWhite(colorObj.value) < 3,
	                'option-selected': this.getValueFromProps() === colorObj.symbol,
	                'selectable': this.props.isSelectable
	            };
	        },
	        previewColor: function previewColor(color) {
	            if (this.props.isSelectable && this.props.onPreview) {
	                this.props.onPreview(color);
	            }
	        },
	        selectColor: function selectColor(color, colorIndex) {
	            this.getEditorAPI().bi.event(core.bi.events.colorPicker.CHANGE_SITE_COLORS_LINK_CLICKED, {
	                index_selected_color: colorIndex
	            });
	            if (this.props.isSelectable) {
	                this.callOnChangeIfExists(color);
	            }
	        },
	        selectColorAndClose: function selectColorAndClose(color) {
	            if (this.props.isSelectable) {
	                this.callOnChangeIfExists(color, true);
	            }
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 160 */
/*!***************************************************!*\
  !*** ./js/baseUI/colorPicker/paletteDisplayer.rt ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';
	    function onMouseOut1() {
	        this.previewColor(this.getValueFromProps());
	    }
	    function mergeProps(inline, external) {
	        var res = _.assign({}, inline, external);
	        if (inline.hasOwnProperty('style')) {
	            res.style = _.defaults(res.style, inline.style);
	        }
	        if (inline.hasOwnProperty('className') && external.hasOwnProperty('className')) {
	            res.className = external.className + ' ' + inline.className;
	        }
	        return res;
	    }
	    function onClick3(colorObj, colorObjIndex) {
	        this.selectColor(colorObj.symbol, colorObjIndex);
	    }
	    function onMouseEnter4(colorObj, colorObjIndex) {
	        this.previewColor(colorObj.symbol);
	    }
	    function repeatColorObj5(colorObj, colorObjIndex) {
	        return React.createElement('div', {
	            'key': 'paletteColor-' + colorObjIndex,
	            'className': _.keys(_.pick(this.getOptionClasses(colorObj), _.identity)).join(' '),
	            'onClick': onClick3.bind(this, colorObj, colorObjIndex),
	            'onDoubleClick': this.selectColorAndClose.bind(this, colorObj.symbol),
	            'onMouseEnter': onMouseEnter4.bind(this, colorObj, colorObjIndex),
	            'style': { backgroundColor: colorObj.value }
	        });
	    }
	    return function () {
	        return React.createElement.apply(this, [
	            'div',
	            mergeProps({
	                'className': 'palette-displayer',
	                'onMouseOut': onMouseOut1.bind(this)
	            }, this.filteredProps()),
	            _.map(this.getColors(), repeatColorObj5.bind(this))
	        ]);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 161 */
/*!*************************************************!*\
  !*** ./js/baseUI/colorPicker/palettesList.scss ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./palettesList.scss */ 162);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./palettesList.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./palettesList.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 162 */
/*!*********************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/colorPicker/palettesList.scss ***!
  \*********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, ".palettes-list {\n  position: relative;\n  width: 138px;\n  height: 100%;\n  text-align: center; }\n  .palettes-list .palette-options {\n    display: inline;\n    vertical-align: top; }\n    .palettes-list .palette-options .palette-option-wrapper {\n      padding: 3px 0;\n      display: inline-block;\n      cursor: pointer; }\n      .palettes-list .palette-options .palette-option-wrapper:hover .palette-option {\n        border-color: #d3edff;\n        transition-duration: 0.4s;\n        transition-property: border-color; }\n      .palettes-list .palette-options .palette-option-wrapper .palette-option {\n        position: relative;\n        display: inline-block;\n        height: 24px;\n        line-height: 24px;\n        border: 1px solid transparent;\n        font-size: 0;\n        padding: 3px; }\n        .palettes-list .palette-options .palette-option-wrapper .palette-option.selected {\n          border-color: #3899ec; }\n          .palettes-list .palette-options .palette-option-wrapper .palette-option.selected:before {\n            position: absolute;\n            content: '';\n            font-size: initial;\n            left: -11px;\n            cursor: initial;\n            width: 0;\n            height: 0;\n            border-right: 6px solid #3899ec;\n            border-top: 6px solid transparent;\n            border-bottom: 6px solid transparent;\n            top: 9px; }\n        .palettes-list .palette-options .palette-option-wrapper .palette-option .palette-option-color {\n          display: inline-block;\n          width: 18px;\n          height: 100%; }\n          .palettes-list .palette-options .palette-option-wrapper .palette-option .palette-option-color.white-color {\n            box-sizing: border-box;\n            border: 1px solid #ccc; }\n", ""]);

	// exports


/***/ },
/* 163 */
/*!*****************************************************!*\
  !*** ./js/baseUI/colorPicker/paletteDisplayer.scss ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./paletteDisplayer.scss */ 164);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./paletteDisplayer.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./paletteDisplayer.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 164 */
/*!*************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/colorPicker/paletteDisplayer.scss ***!
  \*************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, ".palette-displayer {\n  width: 210px; }\n  .palette-displayer .palette-color-option {\n    display: inline-block;\n    vertical-align: top;\n    position: relative;\n    width: 42px;\n    height: 24px; }\n    .palette-displayer .palette-color-option.white-option {\n      box-sizing: border-box;\n      border: 1px solid #ccc; }\n    .palette-displayer .palette-color-option.selectable {\n      cursor: pointer; }\n      .palette-displayer .palette-color-option.selectable.option-selected::after {\n        content: \"\";\n        position: absolute;\n        width: 46px;\n        height: 28px;\n        background-color: inherit;\n        top: -1px;\n        left: -2px;\n        z-index: 1;\n        box-sizing: border-box;\n        border: 1px solid #fff;\n        box-shadow: 0px 0px 7px 0px rgba(22, 45, 61, 0.44);\n        z-index: 2; }\n      .palette-displayer .palette-color-option.selectable:not(.option-selected):hover::after {\n        content: \"\";\n        position: absolute;\n        width: 46px;\n        height: 28px;\n        background-color: inherit;\n        top: -1px;\n        left: -2px;\n        z-index: 1; }\n      .palette-displayer .palette-color-option.selectable.white-option.option-selected::after {\n        content: \"\";\n        position: absolute;\n        box-sizing: border-box;\n        border: 1px solid #ccc;\n        width: 46px;\n        height: 28px;\n        background-color: inherit;\n        top: -2px;\n        left: -3px;\n        z-index: 1;\n        z-index: 2; }\n      .palette-displayer .palette-color-option.selectable.white-option:not(.option-selected):hover::after {\n        content: \"\";\n        position: absolute;\n        box-sizing: border-box;\n        border: 1px solid #ccc;\n        width: 46px;\n        height: 28px;\n        background-color: inherit;\n        top: -2px;\n        left: -3px;\n        z-index: 1;\n        border: 1px solid #fff;\n        box-shadow: 0px 0px 7px 0px rgba(22, 45, 61, 0.44); }\n", ""]);

	// exports


/***/ },
/* 165 */
/*!*************************************************************!*\
  !*** ./js/wix-ui-react/components/fontPicker/fontPicker.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 5);
	var Wix = __webpack_require__(/*! Wix */ 14);
	var template = __webpack_require__(/*! wix-ui-react/components/fontPicker/fontPicker.rt */ 166);
	var fontPickerMixin = __webpack_require__(/*! ./fontPickerMixin */ 167);

	module.exports = React.createClass({

	    displayName: 'FontPicker',
	    propTypes: {
	        infoTitle: React.PropTypes.string,
	        infoText: React.PropTypes.string,
	        startWithFont: React.PropTypes.string,
	        startWithTheme: React.PropTypes.string,
	        title: React.PropTypes.string,
	        hideStyle: React.PropTypes.bool,
	        hideTheme: React.PropTypes.bool,
	        showDefaultPanelTitle: React.PropTypes.bool
	    },
	    mixins: [fontPickerMixin],
	    render: template
	});

/***/ },
/* 166 */
/*!*************************************************************!*\
  !*** ./js/wix-ui-react/components/fontPicker/fontPicker.rt ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! wix-ui-react/components/dropDown/dropDown */ 90)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, dropDown) {
	    'use strict';
	    return function () {
	        return React.createElement(dropDown.select, {
	            'label': this.props.title,
	            'wix-param': 'myBodyFont',
	            'infoTitle': this.props.infoTitle,
	            'infoText': this.props.infoText,
	            'onClick': this.onFontClick
	        }, React.createElement(dropDown.option, { 'value': 'show' }, this.state.displayName), React.createElement(dropDown.option, { 'value': 'dummy' }, 'Dummy'));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 167 */
/*!******************************************************************!*\
  !*** ./js/wix-ui-react/components/fontPicker/fontPickerMixin.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {

	    var DEFAULT_THEME = 'font_2';

	    return {
	        getInitialState: function getInitialState() {
	            var overrides = this.getInitialOverrides();
	            return {
	                displayName: '',
	                hasOverrides: !_.isEmpty(overrides),
	                initialOverrides: overrides
	            };
	        },
	        componentDidMount: function componentDidMount() {
	            var _this = this;

	            if (Wix.Utils.getViewMode() !== 'editor') {
	                return;
	            }

	            this.getSavedWixParamValue()
	            // got saved value, not dealing with overrides
	            .then(function (savedTheme) {
	                _this.setState({
	                    displayName: savedTheme.displayName || savedTheme.preset,
	                    fontStyle: savedTheme
	                });
	            })
	            // no saved value, happened only on the first time settings being opened
	            .catch(function () {
	                _this.getBaseTheme().then(function (baseTheme) {
	                    _this.getThemeWithOverrides(baseTheme, _this.state.initialOverrides).then(function (theme) {
	                        var displayName;
	                        if (!_this.props.hideTheme) {
	                            displayName = _this.state.hasOverrides ? 'Custom' : theme.displayName;
	                            _this.updateState(displayName, theme, true);
	                        } else if (_this.props.startWithFont) {
	                            displayName = _this.props.startWithFont;
	                            _this.updateState(displayName, theme, true);
	                        } else {
	                            _this.getFontDisplayNameByFamily(theme.family).then(function (displayName) {
	                                _this.updateState(displayName, theme, true);
	                            });
	                        }
	                    });
	                });
	            });
	        },
	        updateState: function updateState(displayName, theme, shouldBroadcastChange) {
	            var _this2 = this;

	            this.setState({
	                displayName: displayName,
	                fontStyle: theme
	            }, function () {
	                // if change is from the editor you shouldn't update ui lib and set editor param.
	                if (shouldBroadcastChange) {
	                    Wix.Styles.setFontParam(_this2.props['wix-param'], { value: theme });
	                    Wix.Styles.setUILIBParamValue('fonts', _this2.props['wix-param'], theme);
	                }
	            });
	        },
	        getThemeWithOverrides: function getThemeWithOverrides(baseTheme, themeOverrides) {
	            var _this3 = this;

	            return new Promise(function (resolve) {

	                var theme = _.cloneDeep(themeOverrides);
	                _.defaultsDeep(theme, baseTheme);
	                var themeWithOverrides = {
	                    family: theme.fontFamily,
	                    displayName: theme.displayName,
	                    style: theme.style,
	                    size: _.isString(theme.size) ? theme.size.replace('px', '') : theme.size,
	                    preset: _this3.state.hasOverrides ? 'Custom' : theme.baseThemeKey,
	                    editorKey: theme.editorKey,
	                    fontStyleParam: true
	                };

	                if (theme.startWithFont) {
	                    _this3.getEditorFonts().then(function (editorFonts) {
	                        var fontObj = _.find(editorFonts, { displayName: theme.startWithFont });
	                        themeWithOverrides.family = _.get(fontObj, 'fontFamily');
	                        resolve(themeWithOverrides);
	                    });
	                } else {
	                    resolve(themeWithOverrides);
	                }
	            });
	        },
	        getSavedWixParamValue: function getSavedWixParamValue() {
	            var _this4 = this;

	            return new Promise(function (resolve, reject) {
	                var wixParam = _this4.props['wix-param'];
	                Wix.Styles.getStyleParams(function (styleParams) {
	                    var wixParamValue = _.get(styleParams, 'fonts[' + wixParam + ']');
	                    if (wixParamValue) {
	                        return resolve(wixParamValue);
	                    }
	                    reject();
	                });
	            });
	        },
	        getBaseTheme: function getBaseTheme() {
	            var _this5 = this;

	            return new Promise(function (resolve, reject) {
	                var baseThemeKey, baseTheme;
	                Wix.Styles.getSiteTextPresets(function (textPresets) {
	                    baseThemeKey = _.findKey(textPresets, { editorKey: _this5.props.startWithTheme });
	                    baseThemeKey = baseThemeKey || _.findKey(textPresets, { editorKey: DEFAULT_THEME });
	                    baseTheme = textPresets[baseThemeKey];
	                    if (baseTheme) {
	                        baseTheme.baseThemeKey = baseThemeKey;
	                        baseTheme.style = {
	                            bold: baseTheme.weight === 'bold',
	                            italic: baseTheme.style === 'italic',
	                            underline: false
	                        };
	                        return resolve(baseTheme);
	                    }
	                    reject();
	                });
	            });
	        },
	        getInitialOverrides: function getInitialOverrides() {
	            var overrides = {};
	            if (this.props.startWithFont) {
	                overrides.startWithFont = this.props.startWithFont;
	            }
	            if (this.props.startWithSize) {
	                overrides.size = this.props.startWithSize;
	            }
	            if (this.props.startWithStyle) {
	                overrides.style = this.props.startWithStyle;
	            }
	            return overrides;
	        },
	        getFontDisplayNameByFamily: function getFontDisplayNameByFamily(family) {
	            var _this6 = this;

	            return new Promise(function (resolve) {
	                _this6.getEditorFonts().then(function (editorFonts) {
	                    var fontObj = _.find(editorFonts, { fontFamily: family });
	                    resolve(_.get(fontObj, 'displayName'));
	                });
	            });
	        },
	        getEditorFonts: function getEditorFonts() {
	            return new Promise(function (resolve) {
	                Wix.Styles.getEditorFonts(function (editorFonts) {
	                    var fonts = [];
	                    _.forEach(editorFonts, function (fontLangArray) {
	                        fonts = fonts.concat(fontLangArray.fonts);
	                    });
	                    resolve(fonts);
	                });
	            });
	        },
	        onFontClick: function onFontClick(event) {
	            var title = this.props.showDefaultPanelTitle ? '' : this.props.title;
	            Wix.Styles.openFontPicker({
	                title: title,
	                left: event.clientX,
	                top: event.clientY,
	                wixParam: this.props['wix-param'],
	                hideStyle: this.props.hideStyle,
	                hideFont: this.props.hideFont,
	                hideSize: this.props.hideSize,
	                hideTheme: this.props.hideTheme,
	                fontMinSize: this.props.fontMinSize,
	                fontMaxSize: this.props.fontMaxSize
	            }, this.onFontChange);
	        },
	        onFontChange: function onFontChange(newStyle) {
	            var _this7 = this;

	            if (this.props.onChange) {
	                this.props.onChange(newStyle.fontParam);
	            }
	            if (this.props.hideTheme) {
	                this.getFontDisplayNameByFamily(newStyle.fontParam.family).then(function (displayName) {
	                    _this7.updateState(displayName, newStyle.fontParam);
	                });
	            } else {
	                var displayName = newStyle.fontParam.displayName || 'Custom';
	                this.updateState(displayName, newStyle.fontParam);
	            }

	            Wix.Styles.setUILIBParamValue('fonts', this.props['wix-param'], newStyle.fontParam);
	        },
	        getValue: function getValue() {
	            return this.state.fontStyle;
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 168 */
/*!***********************************************************************************!*\
  !*** ./js/wix-ui-react/components/sectionDividerLabeled/sectionDividerLabeled.js ***!
  \***********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var sectionDividerLabeled = __webpack_require__(/*! baseUI/controls/sectionDividerLabeledC06 */ 169);
	__webpack_require__(/*! baseUI/controls/sectionDividerLabeledC06.scss */ 171);

	module.exports = sectionDividerLabeled;

/***/ },
/* 169 */
/*!********************************************************!*\
  !*** ./js/baseUI/controls/sectionDividerLabeledC06.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! util */ 25), __webpack_require__(/*! baseUI/controls/sectionDividerLabeledC06.rt */ 170)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, util, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'sectionDividerLabeledC06',
	        mixins: [util.translationMixin],
	        propTypes: {
	            label: React.PropTypes.string,
	            infoTitle: React.PropTypes.string,
	            infoText: React.PropTypes.string
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 170 */
/*!********************************************************!*\
  !*** ./js/baseUI/controls/sectionDividerLabeledC06.rt ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/controls/infoIcon */ 18)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, infoIcon) {
	    'use strict';
	    return function () {
	        return React.createElement('div', { 'className': 'control-section-divider labeled' }, this.translateIfNeeded(this.props.label), '\n    ', this.props.infoText ? React.createElement(infoIcon, {
	            'key': 'icon',
	            'size': 18,
	            'text': this.props.infoText,
	            'title': this.props.infoTitle,
	            'fitToBoundsWidth': false
	        }) : null);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 171 */
/*!**********************************************************!*\
  !*** ./js/baseUI/controls/sectionDividerLabeledC06.scss ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./sectionDividerLabeledC06.scss */ 172);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./sectionDividerLabeledC06.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./sectionDividerLabeledC06.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 172 */
/*!******************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/controls/sectionDividerLabeledC06.scss ***!
  \******************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.control-section-divider {\n  height: 42px;\n  box-sizing: border-box;\n  background-color: #f0f3f5;\n  width: 100%; }\n  .control-section-divider.labeled {\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 16px;\n    line-height: 42px;\n    position: relative;\n    text-align: center;\n    cursor: default;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    color: #2b5672;\n    padding: 0 42px; }\n    .control-section-divider.labeled .info-icon {\n      position: absolute;\n      right: 12px;\n      top: 12px;\n      line-height: 0;\n      opacity: 0;\n      transition-property: opacity;\n      transition-duration: 0.15s; }\n    .control-section-divider.labeled:hover .info-icon {\n      opacity: 1; }\n", ""]);

	// exports


/***/ },
/* 173 */
/*!***************************************************************!*\
  !*** ./js/wix-ui-react/components/teaserPopup/teaserPopup.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var template = __webpack_require__(/*! wix-ui-react/components/teaserPopup/teaserPopup.rt */ 174);
	__webpack_require__(/*! baseUI/panelInputs/firstTimeInfoBox.scss */ 177);
	var _ = __webpack_require__(/*! lodash */ 6);

	module.exports = React.createClass({
	    displayName: 'TeaserPopup',
	    propTypes: {
	        text: React.PropTypes.string,
	        title: React.PropTypes.string,
	        linkText: React.PropTypes.string,
	        gotItText: React.PropTypes.string,
	        linkClicked: React.PropTypes.func
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            id: 'hardcoded_id', // id is a required property in the editor.
	            linkText: 'Learn more',
	            gotItText: 'Got it'
	        };
	    },
	    userPrefs: function userPrefs() {
	        return {
	            site: {
	                get: function get() {
	                    return false;
	                },
	                set: _.noop
	            }
	        };
	    },
	    biLearnMore: _.noop,
	    biClose: _.noop,

	    render: template
	});

/***/ },
/* 174 */
/*!***************************************************************!*\
  !*** ./js/wix-ui-react/components/teaserPopup/teaserPopup.rt ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/panelInputs/firstTimeInfoBox */ 175)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, firstTimeInfoBox) {
	    'use strict';
	    return function () {
	        return React.createElement(firstTimeInfoBox, {
	            'text': this.props.text,
	            'title': this.props.title,
	            ',': true,
	            'id': this.props.id,
	            'learnMore': this.props.linkClicked,
	            'linkText': this.props.linkText,
	            'gotItText': this.props.gotItText,
	            'biClose': this.biClose,
	            'biLearnMore': this.biLearnMore,
	            'userPrefs': this.userPrefs()
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 175 */
/*!***************************************************!*\
  !*** ./js/baseUI/panelInputs/firstTimeInfoBox.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react-dom */ 19), __webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! baseUI/panelInputs/firstTimeInfoBox.rt */ 176)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ReactDOM, React, _, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'firstTimeInfoBox',
	        getInitialState: function getInitialState() {
	            return {
	                close: false
	            };
	        },
	        propTypes: {
	            id: React.PropTypes.string.isRequired,
	            text: React.PropTypes.string.isRequired,
	            hide: React.PropTypes.bool,
	            title: React.PropTypes.string,
	            linkText: React.PropTypes.string,
	            image: React.PropTypes.string,
	            video: React.PropTypes.string,
	            context: React.PropTypes.oneOf(['header', 'section', 'settings', 'left-panel', 'pages-panel']),
	            userPrefs: React.PropTypes.object.isRequired,
	            onFirstTimeInfoBoxHeightChange: React.PropTypes.func,
	            biLearnMore: React.PropTypes.func.isRequired,
	            learnMore: React.PropTypes.func,
	            biClose: React.PropTypes.func.isRequired
	        },
	        getDefaultProps: function getDefaultProps() {
	            return {
	                context: 'header',
	                hide: false
	            };
	        },
	        componentDidMount: function componentDidMount() {
	            if (this.props.onFirstTimeInfoBoxHeightChange) {
	                this.props.onFirstTimeInfoBoxHeightChange(ReactDOM.findDOMNode(this) ? ReactDOM.findDOMNode(this).offsetHeight : 0);
	            }
	        },
	        shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	            return !(_.isEqual(this.props, nextProps) && _.isEqual(this.state, nextState));
	        },
	        shouldShowTeaser: function shouldShowTeaser() {
	            return !this.props.userPrefs.site.get('closed_teaser_' + this.props.id);
	        },
	        close: function close() {
	            this.props.userPrefs.site.set('closed_teaser_' + this.props.id, true);
	            ReactDOM.findDOMNode(this).style.display = 'none';
	            this.setState({ close: true });
	            if (this.props.onFirstTimeInfoBoxHeightChange) {
	                this.props.onFirstTimeInfoBoxHeightChange();
	            }
	            this.props.biClose({ panel_name: this.props.id });
	        },
	        link: function link() {
	            if (this.props.learnMore) {
	                this.props.learnMore();
	                this.props.biLearnMore({ panel_name: this.props.id });
	            }
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 176 */
/*!***************************************************!*\
  !*** ./js/baseUI/panelInputs/firstTimeInfoBox.rt ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! util */ 25),
	    __webpack_require__(/*! baseUI/controls/button */ 56),
	    __webpack_require__(/*! symbols */ 3)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, util, UIButton, symbols) {
	    'use strict';
	    return function () {
	        return this.shouldShowTeaser() ? React.createElement('div', {
	            'className': util.inheritClassName(this.props, 'first-time-info-box') + ' in-' + this.props.context,
	            'key': this.props.id
	        }, React.createElement('div', { 'className': 'pointer' }), React.createElement('div', { 'className': 'top-line' }, React.createElement('div', {
	            'className': 'close',
	            'onClick': this.close.bind(this, 'x')
	        }, React.createElement(symbols.symbol, { 'name': 'firstTimeInfoBoxClose' }))), React.createElement('div', { 'className': 'content ' + (!!this.props.linkText ? 'has-link' : 'no-link') }, !!this.props.title ? React.createElement('div', {
	            'className': 'title',
	            'key': 'title'
	        }, util.translate(this.props.title)) : null, React.createElement('div', { 'className': 'text' }, util.translate(this.props.text))), React.createElement('div', { 'className': 'bottom-line' }, !!this.props.linkText ? React.createElement(UIButton, {
	            'label': this.props.linkText,
	            'className': 'link no-margin btn-sm btn-text',
	            'onClick': this.link,
	            'key': 'learnMoreButton'
	        }) : null, !!this.props.linkText ? React.createElement(symbols.symbol, {
	            'className': 'arrow',
	            'name': 'firstTimeInfoBoxArrowRight',
	            'onClick': this.link,
	            'key': 'learnMoreSymbol'
	        }) : null, React.createElement('div', { 'className': 'space' }), React.createElement(UIButton, {
	            'label': this.props.gotItText,
	            'className': 'got-it btn-back',
	            'onClick': this.close.bind(this, 'gotit')
	        }))) : null;
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 177 */
/*!*****************************************************!*\
  !*** ./js/baseUI/panelInputs/firstTimeInfoBox.scss ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./firstTimeInfoBox.scss */ 178);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./firstTimeInfoBox.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./firstTimeInfoBox.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 178 */
/*!*************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/panelInputs/firstTimeInfoBox.scss ***!
  \*************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.first-time-info-box {\n  position: relative;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 0 8px 0 rgba(22, 45, 61, 0.18);\n  border: 1px solid transparent; }\n  .first-time-info-box.in-header {\n    margin: 24px 24px 3px; }\n    .first-time-info-box.in-header .pointer {\n      right: 16px; }\n  .first-time-info-box.in-section {\n    margin: 24px 0 0; }\n    .first-time-info-box.in-section .pointer {\n      right: 10px; }\n  .first-time-info-box.in-settings {\n    margin: 12px 12px 0; }\n    .first-time-info-box.in-settings .pointer {\n      right: 28px; }\n  .first-time-info-box.in-left-panel {\n    margin: 12px 20px 0; }\n    .first-time-info-box.in-left-panel .pointer {\n      right: 34px; }\n  .first-time-info-box.in-pages-panel {\n    margin: 0 12px 4px; }\n    .first-time-info-box.in-pages-panel .pointer {\n      display: none; }\n  .first-time-info-box .pointer {\n    display: none;\n    top: -11px;\n    position: absolute;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 10px solid #fff; }\n  .first-time-info-box .content {\n    text-align: left;\n    margin: -2px 34px 17px 23px; }\n    .first-time-info-box .content .title {\n      font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n      font-size: 18px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      color: #2b5672;\n      margin-bottom: 12px; }\n    .first-time-info-box .content .text {\n      font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n      font-size: 14px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      color: #2b5672; }\n  .first-time-info-box .bottom-line {\n    text-align: right;\n    margin: 0 23px 19px 23px;\n    display: flex;\n    align-items: center; }\n    .first-time-info-box .bottom-line .link {\n      height: 14px;\n      line-height: 14px;\n      font-size: 14px;\n      padding: 0;\n      margin: 0;\n      border-radius: 0; }\n    .first-time-info-box .bottom-line .arrow {\n      cursor: pointer;\n      position: relative;\n      padding-left: 9px; }\n      .first-time-info-box .bottom-line .arrow polyline {\n        stroke: #3899ec; }\n    .first-time-info-box .bottom-line .space {\n      flex: 1; }\n    .first-time-info-box .bottom-line .got-it {\n      margin: 0;\n      text-align: center;\n      padding: 0 14px; }\n      .first-time-info-box .bottom-line .got-it:hover {\n        background-color: #b1ddf8; }\n  .first-time-info-box .top-line {\n    text-align: right;\n    margin-top: 8px;\n    margin-right: 8px;\n    height: 18px; }\n    .first-time-info-box .top-line .close {\n      cursor: pointer;\n      display: inline-block; }\n      .first-time-info-box .top-line .close polyline {\n        stroke: #3899ec; }\n", ""]);

	// exports


/***/ },
/* 179 */
/*!*******************************************************************************!*\
  !*** ./js/wix-ui-react/components/textInputWithButton/textInputWithButton.js ***!
  \*******************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var template = __webpack_require__(/*! wix-ui-react/components/textInputWithButton/textInputWithButton.rt */ 180);
	__webpack_require__(/*! baseUI/panelInputs/textInputWithButton.scss */ 187);
	var _ = __webpack_require__(/*! lodash */ 6);

	module.exports = React.createClass({
	    displayName: 'textInputWithButton',
	    propTypes: {
	        title: React.PropTypes.string,
	        placeholder: React.PropTypes.string,
	        validator: React.PropTypes.func,
	        infoText: React.PropTypes.string,
	        infoTitle: React.PropTypes.string,
	        invalidMessage: React.PropTypes.string,
	        defaultText: React.PropTypes.string,
	        buttonText: React.PropTypes.string,
	        maxLength: React.PropTypes.number,
	        isMultiLine: React.PropTypes.bool,
	        onButtonClick: React.PropTypes.func
	    },
	    getValue: function getValue() {
	        return this.state.value;
	    },
	    setValue: function setValue(newValue) {
	        this.setState({ value: newValue });
	    },
	    render: template
	});

/***/ },
/* 180 */
/*!*******************************************************************************!*\
  !*** ./js/wix-ui-react/components/textInputWithButton/textInputWithButton.rt ***!
  \*******************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/panelInputs/textInputWithButton */ 181)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, textInputWithButton) {
	    'use strict';
	    return function () {
	        return React.createElement(textInputWithButton, {
	            'label': this.props.title,
	            'placeholder': this.props.placeholder,
	            'validator': this.props.validator,
	            'infoText': this.props.infoText,
	            'infoTitle': this.props.infoTitle,
	            'invalidMessage': this.props.invalidMessage,
	            'defaultText': this.props.defaultText,
	            'buttonLabel': this.props.buttonText,
	            'maxLength': this.props.maxLength,
	            'multiLine': this.props.isMultiLine,
	            'onChange': this.props.onButtonClick
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 181 */
/*!******************************************************!*\
  !*** ./js/baseUI/panelInputs/textInputWithButton.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! util */ 25), __webpack_require__(/*! baseUI/panelInputs/statefulInputMixin */ 182), __webpack_require__(/*! baseUI/panelInputs/textInputWithButton.rt */ 183)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, util, statefulInputMixin, template) {
	    'use strict';

	    return React.createClass({
	        mixins: [statefulInputMixin, util.translationMixin],
	        displayName: 'textInputWithButton',
	        propTypes: {
	            label: React.PropTypes.string,
	            placeholder: React.PropTypes.string,
	            defaultText: React.PropTypes.string,
	            multiLine: React.PropTypes.bool,
	            buttonLabel: React.PropTypes.string,
	            maxLength: React.PropTypes.number,
	            focus: React.PropTypes.bool,
	            processValue: React.PropTypes.func,
	            infoText: React.PropTypes.string,
	            infoTitle: React.PropTypes.string,
	            fixedButton: React.PropTypes.bool
	        },
	        getInitialState: function getInitialState() {
	            return {
	                isFocused: false
	            };
	        },
	        updateValue: function updateValue(value, validationResult) {
	            this.callOnChangeIfExists(value, validationResult);
	        },
	        toggleFocus: function toggleFocus(isFocused) {
	            this.setState({ isFocused: isFocused });
	        },
	        shouldShowButton: function shouldShowButton() {
	            return this.props.buttonLabel && (this.props.fixedButton || this.state.isFocused);
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 182 */
/*!*****************************************************!*\
  !*** ./js/baseUI/panelInputs/statefulInputMixin.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash */ 6), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 43)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, inputMixin) {
	    'use strict';

	    return _.extend({}, inputMixin, {
	        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	            var newVal = this.getValueFromProps(nextProps);
	            if (this.getValueFromProps(this.props) !== newVal) {
	                this.setState({ value: newVal });
	            }
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 183 */
/*!******************************************************!*\
  !*** ./js/baseUI/panelInputs/textInputWithButton.rt ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/controls/button */ 56),
	    __webpack_require__(/*! baseUI/framework/uiConstants */ 20),
	    __webpack_require__(/*! baseUI/panelInputs/textInput */ 184),
	    __webpack_require__(/*! symbols */ 3)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, UIButton, uiConstants, textInput, symbols) {
	    'use strict';
	    function mergeProps(inline, external) {
	        var res = _.assign({}, inline, external);
	        if (inline.hasOwnProperty('style')) {
	            res.style = _.defaults(res.style, inline.style);
	        }
	        if (inline.hasOwnProperty('className') && external.hasOwnProperty('className')) {
	            res.className = external.className + ' ' + inline.className;
	        }
	        return res;
	    }
	    function onFocus2(isDisabled) {
	        this.toggleFocus(true);
	    }
	    function onBlur3(isDisabled) {
	        this.toggleFocus(false);
	    }
	    function scopeIsDisabled4() {
	        var isDisabled = this.isDisabled();
	        return React.createElement('div', mergeProps({ 'className': 'control-text-input-with-button' + (isDisabled ? ' disabled' : '') }, this.filteredProps()), React.createElement(textInput, {
	            'valueLink': {
	                value: this.getValueFromProps(),
	                requestChange: this.updateValue
	            },
	            'label': this.props.label,
	            'placeholder': this.props.placeholder,
	            'defaultText': this.props.defaultText,
	            'maxLength': this.props.maxLength,
	            'focus': this.props.focus,
	            'isMultiLine': this.props.multiLine,
	            'validator': this.props.validator,
	            'asyncValidator': this.props.asyncValidator,
	            'invalidMessage': this.props.invalidMessage,
	            'processValue': this.props.processValue,
	            'onFocus': onFocus2.bind(this, isDisabled),
	            'onBlur': onBlur3.bind(this, isDisabled),
	            'infoText': this.props.infoText,
	            'infoTitle': this.props.infoTitle,
	            'validateOnBlurOnly': true
	        }), this.shouldShowButton() ? React.createElement(UIButton, {
	            'key': 'textInputWithButtonButton',
	            'ref': 'actionButton',
	            'onClick': this.handleClick,
	            'disabled': !this.state.isFocused,
	            'label': this.props.buttonLabel
	        }) : null);
	    }
	    return function () {
	        return scopeIsDisabled4.apply(this, []);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 184 */
/*!********************************************!*\
  !*** ./js/baseUI/panelInputs/textInput.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! baseUI/panelInputs/inputValidationMixin */ 142), __webpack_require__(/*! baseUI/panelInputs/inputValidationAsyncMixin */ 145), __webpack_require__(/*! baseUI/panelInputs/textInputSync */ 140), __webpack_require__(/*! baseUI/panelInputs/textInputAsync */ 144), __webpack_require__(/*! utils */ 185), __webpack_require__(/*! baseUI/panelInputs/textInput.rt */ 186)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, inputValidationMixin, inputValidationAsyncMixin, textInputSync, textInputAsync, santaUtils, template) {
	    'use strict';

	    var browserDetection = santaUtils.browserDetection;

	    function getBrowserName() {
	        if (typeof window !== 'undefined' && browserDetection) {
	            var detectionData = browserDetection(window.navigator.userAgent);
	            var browser = detectionData && detectionData.browser;

	            if (browser) {
	                if (browser.chrome) {
	                    return 'chrome';
	                } else if (browser.safari) {
	                    return 'safari';
	                } else if (browser.firefox) {
	                    return 'firefox';
	                } else if (browser.ie) {
	                    return 'ie';
	                }
	            }
	        }
	    }

	    return React.createClass({
	        displayName: 'textInput',
	        mixins: [inputValidationMixin, inputValidationAsyncMixin],
	        propTypes: {
	            label: React.PropTypes.string,
	            type: React.PropTypes.string,
	            placeholder: React.PropTypes.string,
	            defaultText: React.PropTypes.string,
	            maxLength: React.PropTypes.number,
	            focus: React.PropTypes.bool,
	            className: React.PropTypes.string,
	            isMultiLine: React.PropTypes.bool,
	            infoText: React.PropTypes.string,
	            infoTitle: React.PropTypes.string,
	            onChangeInValidationStatus: React.PropTypes.func,
	            validateOnBlurOnly: React.PropTypes.bool
	        },
	        getInputComponent: function getInputComponent() {
	            if (this.props.validateOnBlurOnly || this.hasAsyncValidator()) {
	                return textInputAsync;
	            }
	            return textInputSync;
	        },
	        getPropsForInputComponent: function getPropsForInputComponent() {
	            var props = _.clone(this.props);
	            props.textAreaClass = 'textarea-' + getBrowserName();
	            return props;
	        },
	        isValueValid: function isValueValid() {
	            return this.refs.inputComp.isValid();
	        },
	        focus: function focus() {
	            this.refs.inputComp.focus();
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 185 */
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    "use strict";

	    // code from zepto detect module - https://github.com/madrobby/zepto/blob/master/src/detect.js#files
	    // note - I added MS Edge detection here, which zepto does not have. -Etai

	    var browserDetection = function detect(ua) {
	        if (!ua) {
	            return {};
	        }
	        var os = {},
	            browser = {},
	            webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
	            android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
	            osx = !!ua.match(/\(Macintosh\; Intel /),
	            ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
	            ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
	            iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
	            webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
	            wp = ua.match(/Windows Phone ([\d.]+)/),
	            touchpad = webos && ua.match(/TouchPad/),
	            kindle = ua.match(/Kindle\/([\d.]+)/),
	            silk = ua.match(/Silk\/([\d._]+)/),
	            blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
	            bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
	            rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
	            playbook = ua.match(/PlayBook/),
	            chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
	            firefox = ua.match(/Firefox\/([\d.]+)/),
	            ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
	            webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
	            safari = webview || ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/),
	            edge = ua.match(/Edge\/12/);

	        browser.webkit = !!webkit;
	        if (browser.webkit) {
	            browser.version = webkit[1];
	        }

	        if (android) {
	            os.android = true;
	            os.version = android[2];
	        }
	        if (iphone && !ipod) {
	            os.ios = os.iphone = true;
	            os.version = iphone[2].replace(/_/g, '.');
	        }
	        if (ipad) {
	            os.ios = os.ipad = true;
	            os.version = ipad[2].replace(/_/g, '.');
	        }
	        if (ipod) {
	            os.ios = os.ipod = true;
	            os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
	        }
	        if (wp) {
	            os.wp = true;
	            os.version = wp[1];
	        }
	        if (webos) {
	            os.webos = true;
	            os.version = webos[2];
	        }
	        if (touchpad) {
	            os.touchpad = true;
	        }
	        if (blackberry) {
	            os.blackberry = true;
	            os.version = blackberry[2];
	        }
	        if (bb10) {
	            os.bb10 = true;
	            os.version = bb10[2];
	        }
	        if (rimtabletos) {
	            os.rimtabletos = true;
	            os.version = rimtabletos[2];
	        }
	        if (playbook) {
	            browser.playbook = true;
	        }
	        if (kindle) {
	            os.kindle = true;
	            os.version = kindle[1];
	        }
	        if (silk) {
	            browser.silk = true;
	            browser.version = silk[1];
	        }
	        if (!silk && os.android && ua.match(/Kindle Fire/)) {
	            browser.silk = true;
	        }
	        if (chrome) {
	            browser.chrome = true;
	            browser.version = chrome[1];
	        }
	        if (firefox) {
	            browser.firefox = true;
	            browser.version = firefox[1];
	        }
	        if (ie) {
	            browser.ie = true;
	            browser.version = ie[1];
	        }
	        if (safari && (osx || os.ios)) {
	            browser.safari = true;
	            if (osx) {
	                browser.version = safari[1];
	            }
	        }
	        if (webview) {
	            browser.webview = true;
	        }
	        if (edge) {
	            browser.edge = true;
	        }

	        os.tablet = !!(ipad || playbook || android && !ua.match(/Mobile/) || firefox && ua.match(/Tablet/) || ie && !ua.match(/Phone/) && ua.match(/Touch/));
	        os.phone = !!(!os.tablet && !os.ipod && (android || iphone || webos || blackberry || bb10 || chrome && ua.match(/Android/) || chrome && ua.match(/CriOS\/([\d.]+)/) || firefox && ua.match(/Mobile/) || ie && ua.match(/Touch/)));

	        return {
	            browser: browser,
	            os: os
	        };
	    };

	    return {
	        browserDetection: browserDetection
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 186 */
/*!********************************************!*\
  !*** ./js/baseUI/panelInputs/textInput.rt ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';
	    function scopeInputComp1() {
	        var inputComp = this.getInputComponent();
	        return React.createElement(inputComp, _.assign({}, { 'ref': 'inputComp' }, this.getPropsForInputComponent()));
	    }
	    return function () {
	        return scopeInputComp1.apply(this, []);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 187 */
/*!********************************************************!*\
  !*** ./js/baseUI/panelInputs/textInputWithButton.scss ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./textInputWithButton.scss */ 188);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./textInputWithButton.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./textInputWithButton.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 188 */
/*!****************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/panelInputs/textInputWithButton.scss ***!
  \****************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, ".control-text-input-with-button {\n  position: relative; }\n  .control-text-input-with-button:hover .info-icon {\n    display: inline-block; }\n  .control-text-input-with-button:hover .control-text-input:not(.focused) > input,\n  .control-text-input-with-button:hover .control-text-input:not(.focused) > textarea {\n    background-color: #eaf7ff;\n    color: #2b5672; }\n    .control-text-input-with-button:hover .control-text-input:not(.focused) > input::placeholder,\n    .control-text-input-with-button:hover .control-text-input:not(.focused) > textarea::placeholder {\n      color: #2b5672; }\n  .control-text-input-with-button:hover .control-text-input:not(.focused) > input:hover,\n  .control-text-input-with-button:hover .control-text-input:not(.focused) > textarea:hover {\n    background-color: #d3edff;\n    color: #2b5672; }\n  .control-text-input-with-button .control-text-input {\n    margin: 12px 0 !important;\n    width: 100% !important; }\n  .control-text-input-with-button .control-button {\n    margin: 0 auto 18px !important;\n    display: block;\n    padding: 7px 24px;\n    width: auto;\n    min-width: 0;\n    line-height: 14px !important;\n    font-size: 14px;\n    height: 30px; }\n", ""]);

	// exports


/***/ },
/* 189 */
/*!*******************************************************!*\
  !*** ./js/wix-ui-react/components/preloader/index.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var preloader = __webpack_require__(/*! baseUI/controls/preloader */ 190);
	__webpack_require__(/*! baseUI/controls/preloader.scss */ 192);

	module.exports = preloader;

/***/ },
/* 190 */
/*!*****************************************!*\
  !*** ./js/baseUI/controls/preloader.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! baseUI/controls/preloader.rt */ 191)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'preloader',
	        //propTypes: {
	        //    diameter: React.propTypes.number,
	        //    stroke: React.propTypes.number,
	        //    duration: React.propTypes.number
	        //},
	        //getDefaultProps: function() {
	        //    return {
	        //        diameter: 30,
	        //        stroke: 3,
	        //        duration: 1
	        //    };
	        //},
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 191 */
/*!*****************************************!*\
  !*** ./js/baseUI/controls/preloader.rt ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';
	    return function () {
	        return React.createElement('div', { 'className': 'circle-preloader ' + (this.props.className || '') });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 192 */
/*!*******************************************!*\
  !*** ./js/baseUI/controls/preloader.scss ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./preloader.scss */ 193);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./preloader.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./preloader.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 193 */
/*!***************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/controls/preloader.scss ***!
  \***************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, ".circle-preloader {\n  width: 15px;\n  height: 30px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -15px;\n  margin-left: -15px;\n  overflow: hidden;\n  transform-origin: 100% 50%;\n  animation: semi-rotate 1s linear infinite; }\n  .circle-preloader::before {\n    content: '';\n    top: 0;\n    left: 0;\n    right: -100%;\n    bottom: 0;\n    border: 3px solid currentColor;\n    border-color: currentColor transparent transparent currentColor;\n    border-radius: 50%;\n    position: absolute;\n    transform: rotate(-45deg);\n    animation: inner-rotate 0.5s linear infinite alternate;\n    color: #7fccf7; }\n  .circle-preloader::after {\n    content: '';\n    top: 0;\n    left: 0;\n    right: -100%;\n    bottom: 0;\n    border: 3px solid currentColor;\n    border-color: currentColor transparent transparent currentColor;\n    border-radius: 50%;\n    position: absolute;\n    transform: rotate(-45deg);\n    animation: inner-rotate 0.5s linear infinite alternate;\n    color: #3899ec;\n    opacity: 0; }\n  .circle-preloader.white::before {\n    color: #f0f0f0; }\n  .circle-preloader.white::after {\n    color: #ececec; }\n  .install-preloader .circle-preloader {\n    position: relative; }\n\n@keyframes inner-rotate {\n  to {\n    transform: rotate(115deg);\n    opacity: 1; } }\n\n@keyframes semi-rotate {\n  from {\n    transform: rotate(180deg);\n    animation-timing-function: ease-out; }\n  45% {\n    transform: rotate(198deg); }\n  55% {\n    transform: rotate(234deg); }\n  to {\n    transform: rotate(540deg); } }\n", ""]);

	// exports


/***/ },
/* 194 */
/*!*****************************************************************!*\
  !*** ./js/wix-ui-react/components/imagePreview/imagePreview.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var template = __webpack_require__(/*! wix-ui-react/components/imagePreview/imagePreview.rt */ 195);
	var Wix = __webpack_require__(/*! Wix */ 14);
	var _ = __webpack_require__(/*! lodash */ 6);
	__webpack_require__(/*! baseUI/panelInputs/imagePreview.scss */ 198);

	var ENABLE_MULTIPLE = false;
	var MAX_BUTTONS_COUNT = 2;
	var PREVIEW_HEIGHT = 155;
	var PREVIEW_WIDTH = 288;

	var BUTTON_PROP = React.PropTypes.shape({
	    label: React.PropTypes.string,
	    icon: React.PropTypes.string,
	    tooltip: React.PropTypes.string,
	    onClick: React.PropTypes.func
	});
	var VALUE_PROP = React.PropTypes.shape({
	    relativeUri: React.PropTypes.string,
	    fileName: React.PropTypes.string,
	    height: React.PropTypes.number,
	    width: React.PropTypes.number
	});

	module.exports = React.createClass({
	    displayName: 'imagePreview',
	    propTypes: {
	        value: React.PropTypes.oneOfType([React.PropTypes.arrayOf(VALUE_PROP), VALUE_PROP]).isRequired,
	        buttons: React.PropTypes.oneOfType([React.PropTypes.arrayOf(BUTTON_PROP), BUTTON_PROP]).isRequired,
	        onChange: React.PropTypes.func
	    },
	    getInitialState: function getInitialState() {
	        return {
	            value: this.getValue(),
	            buttons: this.getButtons()
	        };
	    },
	    getButtons: function getButtons(props) {
	        props = props || this.props;
	        var buttons = props.buttons || [];
	        if (!_.isArray(buttons)) {
	            buttons = [buttons];
	        }
	        buttons = buttons.slice(0, MAX_BUTTONS_COUNT);
	        return _.map(buttons, function (button) {
	            return {
	                nonEmptyButtonLabel: button.label,
	                emptyButtonLabel: button.label,
	                nonEmptyButtonIcon: button.icon,
	                emptyButtonIcon: button.icon,
	                emptyButtonTooltip: button.tooltip,
	                nonEmptyButtonTooltip: button.tooltip,
	                onClick: button.onClick
	            };
	        });
	    },
	    getValue: function getValue(props) {
	        props = props || this.props;
	        var value = props.value || [];
	        if (!ENABLE_MULTIPLE && !_.isArray(value) && !_.isEmpty(value)) {
	            return [_.last(value)];
	        }
	        return value;
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        var nextState = {};
	        if (nextProps.value !== this.props.value) {
	            nextState.value = this.getValue(nextProps);
	            this.handleChange(nextProps.value);
	        }
	        if (nextProps.buttons !== this.props.buttons) {
	            nextState.buttons = this.getButtons(nextProps);
	        }
	        this.setState(nextState);
	    },
	    handleChange: function handleChange(newValue) {
	        if (this.props.onChange) {
	            this.props.onChange.call(this, newValue);
	        }
	    },
	    getPreviewURL: function getPreviewURL(wixImageObject) {
	        if (wixImageObject && wixImageObject.relativeUri) {
	            return Wix.Utils.Media.getResizedImageUrl(wixImageObject.relativeUri, PREVIEW_WIDTH, PREVIEW_HEIGHT, { resizeFilter: 'cover' });
	        }
	        return null;
	    },
	    getProps: function getProps() {
	        return _.defaults({
	            value: this.state.value,
	            getURL: this.getPreviewURL,
	            onChange: this.handleChange,
	            buttons: this.state.buttons,
	            emptySymbolName: 'camera'
	        }, this.props);
	    },
	    render: template
	});

/***/ },
/* 195 */
/*!*****************************************************************!*\
  !*** ./js/wix-ui-react/components/imagePreview/imagePreview.rt ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/panelInputs/media/imagePreview */ 196)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, imagePreview) {
	    'use strict';
	    return function () {
	        return React.createElement(imagePreview, this.getProps());
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 196 */
/*!*****************************************************!*\
  !*** ./js/baseUI/panelInputs/media/imagePreview.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! baseUI/panelInputs/inputMixin */ 43), __webpack_require__(/*! baseUI/panelInputs/media/imagePreview.rt */ 197)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, inputMixin, template) {
	    'use strict';

	    var BUTTON_PROP = React.PropTypes.shape({
	        nonEmptyButtonLabel: React.PropTypes.string,
	        nonEmptyButtonIcon: React.PropTypes.string,
	        emptyButtonLabel: React.PropTypes.string,
	        emptyButtonIcon: React.PropTypes.string,
	        onClick: React.PropTypes.func
	    });

	    return React.createClass({
	        displayName: 'imagePreview',
	        mixins: [inputMixin],
	        propTypes: {
	            emptySymbolName: React.PropTypes.string,
	            getURL: React.PropTypes.func,
	            getStyle: React.PropTypes.func,
	            buttons: React.PropTypes.oneOfType([React.PropTypes.arrayOf(BUTTON_PROP), BUTTON_PROP]).isRequired
	        },
	        getDefaultProps: function getDefaultProps() {
	            return {
	                getURL: _.identity,
	                getStyle: _.constant(null),
	                buttons: []
	            };
	        },
	        getInitialState: function getInitialState() {
	            return {
	                imageIndex: 0,
	                style: {}
	            };
	        },
	        componentWillReceiveProps: function componentWillReceiveProps(nexProps) {
	            if (this.state.imageIndex >= this.getNumberOfImages(nexProps)) {
	                this.setState({
	                    imageIndex: 0
	                });
	            }
	        },
	        getButtons: function getButtons() {
	            var buttons = this.props.buttons;
	            if (!buttons) {
	                buttons = [];
	            } else if (!_.isArray(buttons)) {
	                buttons = [buttons];
	            }
	            return buttons;
	        },
	        updateStyle: function updateStyle() {
	            this.setState({
	                style: this.props.getStyle(this._getImages()[this.state.imageIndex])
	            });
	        },
	        getStyle: function getStyle() {
	            return this.state.style;
	        },
	        getButtonIcon: function getButtonIcon(button) {
	            return this.isEmpty() ? button.emptyButtonIcon : button.nonEmptyButtonIcon;
	        },
	        getButtonLabel: function getButtonLabel(button) {
	            return this.isEmpty() ? button.emptyButtonLabel : button.nonEmptyButtonLabel;
	        },
	        getButtonTooltip: function getButtonTooltip(button) {
	            return this.isEmpty() ? button.emptyButtonTooltip : button.nonEmptyButtonTooltip;
	        },
	        _showImage: function _showImage(imageIndex) {
	            var images = this._getImages();
	            if (imageIndex < 0) {
	                imageIndex = images.length - 1;
	            } else if (imageIndex === images.length) {
	                imageIndex = 0;
	            }
	            this.setState({
	                imageIndex: imageIndex
	            });
	        },
	        showPrevImage: function showPrevImage() {
	            this._showImage(this.state.imageIndex - 1);
	        },
	        showNextImage: function showNextImage() {
	            this._showImage(this.state.imageIndex + 1);
	        },
	        getURL: function getURL() {
	            return this.props.getURL(this._getImages()[this.state.imageIndex]);
	        },
	        _getImages: function _getImages(props) {
	            var images = this.getValueFromProps(props);
	            if (!images) {
	                images = [];
	            } else if (!_.isArray(images)) {
	                images = [images];
	            }
	            return images;
	        },
	        getNumberOfImages: function getNumberOfImages(props) {
	            return this._getImages(props).length;
	        },
	        isEmpty: function isEmpty() {
	            return this._getImages().length === 0 || !this.getURL();
	        },
	        onClick: function onClick(button) {
	            button.onClick(this.callOnChangeIfExists);
	        },
	        getButtonClasses: function getButtonClasses(button) {
	            return {
	                action: true,
	                'has-icon': !!this.getButtonIcon(button),
	                'has-label': !!this.getButtonLabel(button)
	            };
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 197 */
/*!*****************************************************!*\
  !*** ./js/baseUI/panelInputs/media/imagePreview.rt ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! util */ 25),
	    __webpack_require__(/*! baseUI/controls/button */ 56),
	    __webpack_require__(/*! baseUI/popovers/tooltip */ 39),
	    __webpack_require__(/*! symbols */ 3)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, util, UIButton, tooltip, symbols) {
	    'use strict';
	    function onClick1(buttons, button, buttonIndex) {
	        this.onClick(button);
	    }
	    function repeatButton2(buttons, button, buttonIndex) {
	        return React.createElement(tooltip, {
	            'key': this.getButtonLabel(button) || 'button' + buttonIndex,
	            'value': this.getButtonTooltip(button),
	            'disabled': !this.getButtonTooltip(button)
	        }, React.createElement(UIButton, {
	            'className': _.keys(_.pick(this.getButtonClasses(button), _.identity)).join(' '),
	            'label': this.getButtonLabel(button),
	            'icon': this.getButtonIcon(button),
	            'onClick': onClick1.bind(this, buttons, button, buttonIndex)
	        }));
	    }
	    function scopeButtons3() {
	        var buttons = this.getButtons();
	        return buttons.length > 0 ? React.createElement.apply(this, [
	            'span',
	            {
	                'className': 'button-wrapper',
	                'key': 'buttons'
	            },
	            _.map(buttons, repeatButton2.bind(this, buttons))
	        ]) : null;
	    }
	    return function () {
	        return React.createElement('div', { 'className': util.inheritClassName(this.props, 'image-preview') + (this.isEmpty() ? ' empty' : '') }, !this.isEmpty() ? React.createElement('div', {
	            'className': 'image-wrapper',
	            'key': 'wrapper'
	        }, React.createElement('img', {
	            'src': this.getURL(),
	            'style': this.getStyle(),
	            'onLoad': this.updateStyle
	        })) : null, this.getNumberOfImages() > 1 ? React.createElement('span', {
	            'onClick': this.showPrevImage,
	            'className': 'arrow-button prev',
	            'key': 'prev'
	        }) : null, this.getNumberOfImages() > 1 ? React.createElement('span', {
	            'onClick': this.showNextImage,
	            'className': 'arrow-button next',
	            'key': 'next'
	        }) : null, this.isEmpty() ? React.createElement('div', {
	            'className': _.keys(_.pick({
	                'placeholder-wrapper': true,
	                'symbol-in-the-middle': this.getButtons().length === 0
	            }, _.identity)).join(' '),
	            'key': 'placeholder'
	        }, this.props.emptySymbolName ? React.createElement(symbols.symbol, {
	            'name': this.props.emptySymbolName,
	            'key': 'symbol'
	        }) : null, React.createElement('div', { 'className': 'corner-borders top' }), React.createElement('div', { 'className': 'corner-borders bottom' })) : null, scopeButtons3.apply(this, []));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 198 */
/*!*************************************************!*\
  !*** ./js/baseUI/panelInputs/imagePreview.scss ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./imagePreview.scss */ 199);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./imagePreview.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./imagePreview.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 199 */
/*!*********************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/panelInputs/imagePreview.scss ***!
  \*********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.image-preview {\n  background-color: #eaf7ff;\n  box-sizing: border-box;\n  height: 155px;\n  position: relative;\n  text-align: center;\n  width: 288px; }\n  .image-preview .image-wrapper {\n    font-size: 0;\n    height: 100%; }\n    .image-preview .image-wrapper > img {\n      height: 100%; }\n  .image-preview .button-wrapper {\n    background-color: rgba(177, 221, 248, 0.4);\n    bottom: 0;\n    display: block;\n    height: 54px;\n    left: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 100%; }\n    .image-preview .button-wrapper button.action {\n      background-color: #fff;\n      border: 0;\n      border-radius: 17px;\n      color: #3899ec;\n      cursor: pointer;\n      font-size: 14px;\n      height: 32px;\n      line-height: 32px;\n      margin-bottom: 0 !important;\n      margin-top: 11px !important;\n      outline: none;\n      text-overflow: clip;\n      vertical-align: top; }\n      .image-preview .button-wrapper button.action.has-icon {\n        padding-left: 0; }\n        .image-preview .button-wrapper button.action.has-icon:not(.has-label) {\n          padding: 0 9px;\n          margin-left: 0;\n          margin-right: 10px; }\n      .image-preview .button-wrapper button.action:nth-of-type(1):nth-last-of-type(1) {\n        min-width: 167px;\n        max-width: 204px; }\n      .image-preview .button-wrapper button.action:nth-of-type(1):nth-last-of-type(2) {\n        margin-right: 24px; }\n        .image-preview .button-wrapper button.action:nth-of-type(1):nth-last-of-type(2), .image-preview .button-wrapper button.action:nth-of-type(1):nth-last-of-type(2) + button {\n          width: 108px; }\n        .image-preview .button-wrapper button.action:nth-of-type(1):nth-last-of-type(2) + button {\n          margin-left: 0; }\n      .image-preview .button-wrapper button.action:nth-of-type(1):nth-last-of-type(3) {\n        width: 152px;\n        margin-left: 24px;\n        margin-right: 12px;\n        float: left; }\n      .image-preview .button-wrapper button.action:nth-of-type(2):nth-last-of-type(2) {\n        float: right;\n        margin-right: 24px; }\n      .image-preview .button-wrapper button.action:nth-of-type(3):nth-last-of-type(1) {\n        float: right;\n        margin-right: 12px; }\n      .image-preview .button-wrapper button.action:hover {\n        background-color: #eaf7ff; }\n      .image-preview .button-wrapper button.action:active {\n        background-color: #fff; }\n      .image-preview .button-wrapper button.action svg {\n        float: left;\n        width: 14px;\n        height: 32px; }\n        .image-preview .button-wrapper button.action svg.symbol-with-label {\n          margin: 0 11px 0 9px !important; }\n        .image-preview .button-wrapper button.action svg * {\n          fill: #3899ec; }\n      .image-preview .button-wrapper button.action span {\n        color: #3899ec;\n        font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n        font-size: 14px;\n        line-height: 17px;\n        text-align: left;\n        left: -3px;\n        position: relative; }\n  .image-preview .placeholder-wrapper svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -75%); }\n  .image-preview .placeholder-wrapper.symbol-in-the-middle svg {\n    transform: translate(-50%, -50%); }\n  .image-preview .placeholder-wrapper .corner-borders:before, .image-preview .placeholder-wrapper .corner-borders:after {\n    border: solid #5c99e8;\n    content: '';\n    height: 10px;\n    margin: 25px;\n    position: absolute;\n    width: 10px; }\n  .image-preview .placeholder-wrapper .corner-borders.top:before {\n    border-width: 1px 0 0 1px;\n    left: 0;\n    top: 0; }\n  .image-preview .placeholder-wrapper .corner-borders.top:after {\n    border-width: 1px 1px 0 0;\n    right: 0;\n    top: 0; }\n  .image-preview .placeholder-wrapper .corner-borders.bottom:before {\n    border-width: 0 0 1px 1px;\n    bottom: 0;\n    left: 0; }\n  .image-preview .placeholder-wrapper .corner-borders.bottom:after {\n    border-width: 0 1px 1px 0;\n    bottom: 0;\n    right: 0; }\n  .image-preview .arrow-button {\n    border-radius: 50%;\n    box-shadow: 0px 1px 3px 0px rgba(52, 94, 151, 0.43);\n    cursor: pointer;\n    height: 24px;\n    position: absolute;\n    top: 50%;\n    width: 24px; }\n    .image-preview .arrow-button:after {\n      border-left: 2px solid #0199ef;\n      border-top: 2px solid #0199ef;\n      content: '';\n      height: 6px;\n      left: calc(50% - 2px);\n      position: absolute;\n      top: calc(50% - 4px);\n      transform: rotate(-45deg);\n      width: 6px; }\n    .image-preview .arrow-button.prev {\n      left: 0px;\n      margin: -12px 0 0 12px; }\n    .image-preview .arrow-button.next {\n      right: 0px;\n      margin: -12px 12px 0 0; }\n      .image-preview .arrow-button.next:after {\n        left: calc(50% - 5px);\n        top: calc(50% - 4px);\n        transform: rotate(135deg); }\n    .image-preview .arrow-button:hover {\n      background-color: rgba(56, 153, 236, 0.9); }\n      .image-preview .arrow-button:hover:after {\n        border-color: #fff; }\n    .image-preview .arrow-button[disabled] {\n      cursor: default; }\n    .image-preview .arrow-button, .image-preview .arrow-button[disabled], .image-preview .arrow-button[disabled]:hover {\n      background-color: rgba(255, 255, 255, 0.9); }\n    .image-preview .arrow-button[disabled]:after, .image-preview .arrow-button[disabled]:hover:after {\n      border-color: #bcbcbc; }\n", ""]);

	// exports


/***/ },
/* 200 */
/*!******************************************************!*\
  !*** ./js/wix-ui-react/components/panelTabs/tabs.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 5);
	var template = __webpack_require__(/*! ./tabs.rt */ 201);
	var _ = __webpack_require__(/*! lodash */ 6);
	__webpack_require__(/*! ./tabs.scss */ 208);

	var CONTENT_WIDTH = 288;
	var MENU_PADDING = 10;
	module.exports = React.createClass({
	    displayName: 'tabs',
	    propTypes: {
	        defaultTabIndex: React.PropTypes.number,
	        onChange: React.PropTypes.func
	    },
	    getInitialState: function getInitialState() {
	        return {
	            activeTabIndex: this.props.defaultTabIndex || 0
	        };
	    },
	    getMenuLabelWidth: function getMenuLabelWidth() {
	        var totalWidth = Wix.Utils.getWidth() || document.body.offsetWidth;
	        return totalWidth - 2 * MENU_PADDING - CONTENT_WIDTH;
	    },
	    componentDidMount: function componentDidMount() {
	        this.invokeTabChangeCallbacks();
	    },
	    invokeTabChangeCallbacks: function invokeTabChangeCallbacks() {
	        var activeTabComp = this.getTabByIndex(this.state.activeTabIndex);
	        if (_.isFunction(activeTabComp.props.onActive)) {
	            activeTabComp.props.onActive();
	        }
	        if (_.isFunction(this.props.onChange)) {
	            this.props.onChange(this.state.activeTabIndex);
	        }
	    },
	    resetScrollTop: function resetScrollTop() {
	        //this.refs.customScroll.updateScrollPosition(0);
	    },
	    setActiveTab: function setActiveTab(tabIndex) {
	        this.setState({
	            activeTabIndex: tabIndex
	        }, function () {
	            this.resetScrollTop();
	            this.invokeTabChangeCallbacks();
	        });
	    },
	    isActiveTab: function isActiveTab(tabIndex) {
	        return tabIndex === this.state.activeTabIndex;
	    },
	    getTabByIndex: function getTabByIndex(tabIndex) {
	        return _.get(this.props, 'children[' + tabIndex + ']');
	    },
	    getChildren: function getChildren() {
	        return _.isArray(this.props.children) ? this.props.children : [this.props.children];
	    },
	    tabClicked: function tabClicked(tabIndex) {
	        this.setActiveTab(tabIndex);
	    },
	    render: template
	});

/***/ },
/* 201 */
/*!******************************************************!*\
  !*** ./js/wix-ui-react/components/panelTabs/tabs.rt ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/customScroll/customScroll */ 202),
	    __webpack_require__(/*! wix-ui-react/components/contentTooltip/contentTooltip */ 204)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, customScroll, contentTooltip) {
	    'use strict';
	    function repeatChild1(child, childIndex) {
	        return React.createElement('div', { 'key': 'child' + childIndex }, child.props.tab ? React.createElement(contentTooltip, {
	            'key': 'withTooltip',
	            'maxWidth': this.getMenuLabelWidth(),
	            'isActive': this.isActiveTab(childIndex),
	            'styleType': 'normal',
	            'onClick': this.tabClicked.bind(this, childIndex)
	        }, '\n                ', child.props.tab, '\n            ') : null, !child.props.tab ? React.createElement('div', { 'key': 'withoutTooltip' }, child) : null);
	    }
	    function repeatChild2(child, childIndex) {
	        return React.createElement('div', {
	            'className': _.keys(_.pick({ hidden: !this.isActiveTab(childIndex) }, _.identity)).join(' '),
	            'key': 'child' + childIndex
	        }, '\n                    ', child, '\n                ');
	    }
	    return function () {
	        return React.createElement('div', { 'className': 'tabs' }, React.createElement.apply(this, [
	            'div',
	            { 'className': 'tabs-menu' },
	            _.map(this.getChildren(), repeatChild1.bind(this))
	        ]), React.createElement('div', { 'className': 'active-tab-content-pos settings-panel' }, React.createElement(customScroll, {
	            'ref': 'customScroll',
	            'heightRelativetoParent': '100%'
	        }, React.createElement.apply(this, [
	            'div',
	            { 'className': 'active-tab-content' },
	            _.map(this.getChildren(), repeatChild2.bind(this))
	        ]))));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 202 */
/*!************************************************!*\
  !*** ./js/baseUI/customScroll/customScroll.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react-dom */ 19), __webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! jquery */ 67), __webpack_require__(/*! util */ 25), __webpack_require__(/*! baseUI/customScroll/customScroll.rt */ 203)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ReactDOM, React, _, $, util, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'customScroll',
	        propTypes: {
	            allowOuterScroll: React.PropTypes.bool,
	            heightRelativetoParent: React.PropTypes.string,
	            onScroll: React.PropTypes.func,
	            addScrolledClass: React.PropTypes.bool,
	            freezePosition: React.PropTypes.bool
	        },
	        getInitialState: function getInitialState() {
	            this.scrollbarYWidth = 0;
	            return {
	                scrollPos: 0,
	                onDrag: false
	            };
	        },
	        componentDidMount: function componentDidMount() {
	            this.forceUpdate();
	        },
	        componentDidUpdate: function componentDidUpdate(prevProps) {
	            var domNode = ReactDOM.findDOMNode(this);
	            var boundingRect = domNode.getBoundingClientRect();
	            var innerContainer = ReactDOM.findDOMNode(this.refs.innerContainer);
	            var contentHeight = innerContainer.scrollHeight;

	            this.scrollbarYWidth = innerContainer.offsetWidth - innerContainer.clientWidth;
	            this.visibleHeight = innerContainer.clientHeight;
	            this.scrollRatio = contentHeight ? this.visibleHeight / contentHeight : 1;

	            this.toggleScrollIfNeeded(contentHeight);

	            this.position = {
	                top: boundingRect.top + $(window).scrollTop(),
	                left: boundingRect.left + $(window).scrollLeft()
	            };

	            this.freezePosition(prevProps);
	        },
	        componentWillUnmount: function componentWillUnmount() {
	            $(document).off('mousemove', this.onHandleDrag);
	            $(document).off('mouseup', this.onHandleDragEnd);
	        },
	        freezePosition: function freezePosition(prevProps) {
	            var innerContainer = ReactDOM.findDOMNode(this.refs.innerContainer);
	            var contentWrapper = ReactDOM.findDOMNode(this.refs.contentWrapper);

	            if (this.props.freezePosition) {
	                contentWrapper.scrollTop = this.state.scrollPos;
	            }

	            if (prevProps.freezePosition) {
	                innerContainer.scrollTop = this.state.scrollPos;
	            }
	        },
	        toggleScrollIfNeeded: function toggleScrollIfNeeded(contentHeight) {
	            var shouldHaveScroll = contentHeight - this.visibleHeight > 1;
	            if (this.hasScroll !== shouldHaveScroll) {
	                this.hasScroll = shouldHaveScroll;
	                this.forceUpdate();
	            }
	        },
	        getScrollTop: function getScrollTop() {
	            return ReactDOM.findDOMNode(this.refs.innerContainer).scrollTop;
	        },
	        updateScrollPosition: function updateScrollPosition(scrollValue) {
	            var innerContainer = ReactDOM.findDOMNode(this.refs.innerContainer);
	            innerContainer.scrollTop = scrollValue;
	            this.setState({
	                scrollPos: scrollValue
	            });
	        },
	        onCustomScrollClick: function onCustomScrollClick(event) {
	            if (this.isClickOnScrollHandle(event)) {
	                return;
	            }
	            var newScrollHandleTop = this.calculateNewScrollHandleTop(event);
	            var newScrollValue = this.getScrollValueFromHandlePosition(newScrollHandleTop);

	            this.updateScrollPosition(newScrollValue);
	        },
	        isClickOnScrollHandle: function isClickOnScrollHandle(event) {
	            return event.target === ReactDOM.findDOMNode(this.refs.scrollHandle);
	        },
	        calculateNewScrollHandleTop: function calculateNewScrollHandleTop(clickEvent) {
	            var clickYRelativeToScrollbar = clickEvent.pageY - this.position.top;
	            var scrollHandleTop = this.getScrollHandleStyle().top;
	            var newScrollHandleTop;
	            var isBelowHandle = clickYRelativeToScrollbar > scrollHandleTop + this.scrollHandleHeight;
	            if (isBelowHandle) {
	                newScrollHandleTop = scrollHandleTop + Math.min(this.scrollHandleHeight, this.visibleHeight - this.scrollHandleHeight);
	            } else {
	                newScrollHandleTop = scrollHandleTop - Math.max(this.scrollHandleHeight, 0);
	            }
	            return newScrollHandleTop;
	        },
	        getScrollValueFromHandlePosition: function getScrollValueFromHandlePosition(handlePosition) {
	            return handlePosition / this.scrollRatio;
	        },
	        getScrollHandleStyle: function getScrollHandleStyle() {
	            var handlePosition = this.state.scrollPos * this.scrollRatio;
	            this.scrollHandleHeight = this.visibleHeight * this.scrollRatio;
	            return {
	                height: this.scrollHandleHeight,
	                top: handlePosition
	            };
	        },
	        scrollTo: function scrollTo(scrollPosition) {
	            this.setState({
	                scrollPos: scrollPosition
	            });
	        },
	        onScroll: function onScroll(event) {
	            if (this.props.freezePosition) {
	                return;
	            }
	            this.scrollTo(event.currentTarget.scrollTop);
	            if (this.props.onScroll) {
	                this.props.onScroll(event);
	            }
	        },
	        getScrolledElement: function getScrolledElement() {
	            return ReactDOM.findDOMNode(this.refs.innerContainer);
	        },
	        onHandleMouseDown: function onHandleMouseDown(event) {
	            this.startDragHandlePos = this.getScrollHandleStyle().top;
	            this.startDragMousePos = event.pageY;
	            this.setState({
	                onDrag: true
	            });
	            $(document).on('mousemove', this.onHandleDrag);
	            $(document).on('mouseup', this.onHandleDragEnd);
	        },
	        onHandleDrag: function onHandleDrag(event) {
	            var mouseDeltaY = event.pageY - this.startDragMousePos;
	            var handleTopPosition = util.math.ensureWithinLimits(this.startDragHandlePos + mouseDeltaY, 0, this.visibleHeight - this.scrollHandleHeight);
	            var newScrollValue = this.getScrollValueFromHandlePosition(handleTopPosition);
	            this.updateScrollPosition(newScrollValue);
	        },
	        onHandleDragEnd: function onHandleDragEnd() {
	            this.setState({
	                onDrag: false
	            });
	            $(document).off('mousemove', this.onHandleDrag);
	            $(document).off('mouseup', this.onHandleDragEnd);
	        },
	        blockOuterScroll: function blockOuterScroll(e) {
	            if (this.props.allowOuterScroll) {
	                return;
	            }
	            var contentNode = e.currentTarget;
	            var totalHeight = e.currentTarget.scrollHeight;
	            var maxScroll = totalHeight - e.currentTarget.offsetHeight;
	            var delta = e.deltaY % 3 ? e.deltaY : e.deltaY * 10;
	            if (contentNode.scrollTop + delta <= 0) {
	                contentNode.scrollTop = 0;
	                e.preventDefault();
	            } else if (contentNode.scrollTop + delta >= maxScroll) {
	                contentNode.scrollTop = maxScroll;
	                e.preventDefault();
	            }
	            e.stopPropagation();
	        },
	        getScrollStyles: function getScrollStyles() {
	            var scrollSize = this.scrollbarYWidth || 20;
	            var innerContainerStyle = {
	                marginRight: -1 * scrollSize + 'px',
	                height: this.props.heightRelativetoParent ? '100%' : ''
	            };
	            var contentWrapperStyle = {
	                marginRight: this.scrollbarYWidth ? 0 : scrollSize + 'px',
	                height: this.props.heightRelativetoParent ? '100%' : '',
	                overflowY: this.props.freezePosition ? 'hidden' : 'visible'
	            };

	            return {
	                innerContainer: innerContainerStyle,
	                contentWrapper: contentWrapperStyle
	            };
	        },
	        getOuterContainerStyle: function getOuterContainerStyle() {
	            return {
	                height: this.props.heightRelativetoParent ? '100%' : ''
	            };
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 203 */
/*!************************************************!*\
  !*** ./js/baseUI/customScroll/customScroll.rt ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';
	    return function () {
	        return React.createElement('div', {
	            'className': 'custom-scroll',
	            'style': { height: this.props.heightRelativetoParent }
	        }, React.createElement('div', {
	            'className': 'outer-container',
	            'style': this.getOuterContainerStyle()
	        }, this.hasScroll ? React.createElement('div', {
	            'className': 'custom-scrollbar ' + (this.state.onDrag ? 'handleDrag' : ''),
	            'onClick': this.onCustomScrollClick,
	            'key': 'scrollbar'
	        }, React.createElement('div', {
	            'ref': 'scrollHandle',
	            'className': 'custom-scroll-handle',
	            'style': this.getScrollHandleStyle(),
	            'onMouseDown': this.onHandleMouseDown
	        }, React.createElement('div', { 'className': 'inner-handle' }))) : null, React.createElement('div', {
	            'ref': 'innerContainer',
	            'className': _.keys(_.pick({
	                'inner-container': true,
	                'content-scrolled': this.state.scrollPos && this.props.addScrolledClass
	            }, _.identity)).join(' '),
	            'style': this.getScrollStyles().innerContainer,
	            'onScroll': this.onScroll,
	            'onWheel': this.blockOuterScroll
	        }, React.createElement('div', {
	            'className': 'content-wrapper',
	            'ref': 'contentWrapper',
	            'style': this.getScrollStyles().contentWrapper
	        }, '\n                ', this.props.children, '\n            '))));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 204 */
/*!*********************************************************************!*\
  !*** ./js/wix-ui-react/components/contentTooltip/contentTooltip.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 5);
	var template = __webpack_require__(/*! ./contentTooltip.rt */ 205);
	__webpack_require__(/*! ./contentTooltip.scss */ 206);

	module.exports = React.createClass({
	    displayName: 'contentTooltip',
	    getInitialState: function getInitialState() {
	        return {
	            shouldUseTooltip: true
	        };
	    },
	    setShouldUseTooltipState: function setShouldUseTooltipState() {
	        var shouldUseTooltip = true;
	        var labelText = _.get(this, 'refs.labelText');
	        if (labelText) {
	            shouldUseTooltip = labelText.clientWidth < labelText.scrollWidth;
	        }
	        this.setState({
	            shouldUseTooltip: shouldUseTooltip
	        });
	    },
	    componentDidMount: function componentDidMount() {
	        this.setShouldUseTooltipState();
	        // fixing first measure bug
	        setTimeout(this.setShouldUseTooltipState, 100);
	        window.addEventListener("resize", this.setShouldUseTooltipState);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        window.removeEventListener("resize", this.setShouldUseTooltipState);
	    },
	    getStyleType: function getStyleType() {
	        return this.props.styleType || 'normal';
	    },
	    render: template
	});

/***/ },
/* 205 */
/*!*********************************************************************!*\
  !*** ./js/wix-ui-react/components/contentTooltip/contentTooltip.rt ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! wix-ui-react/components/tooltip/tooltip */ 112)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, tooltip) {
	    'use strict';
	    return function () {
	        return React.createElement('div', { 'className': 'content-tooltip' }, React.createElement('div', {
	            'className': 'tab-label' + ' ' + _.keys(_.pick({
	                'active': this.props.isActive,
	                hidden: this.state.shouldUseTooltip
	            }, _.identity)).join(' '),
	            'onClick': this.props.onClick
	        }, React.createElement('div', {
	            'className': 'label-text',
	            'ref': 'labelText'
	        }, this.props.children)), this.state.shouldUseTooltip ? React.createElement(tooltip, {
	            'key': 'tab-with-tooltip',
	            'value': this.props.children,
	            'styleType': this.getStyleType()
	        }, React.createElement('div', {
	            'className': 'tab-label' + ' ' + _.keys(_.pick({ 'active': this.props.isActive }, _.identity)).join(' '),
	            'onClick': this.props.onClick
	        }, React.createElement('div', { 'className': 'label-text' }, this.props.children))) : null);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 206 */
/*!***********************************************************************!*\
  !*** ./js/wix-ui-react/components/contentTooltip/contentTooltip.scss ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./contentTooltip.scss */ 207);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./contentTooltip.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./contentTooltip.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 207 */
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/wix-ui-react/components/contentTooltip/contentTooltip.scss ***!
  \*******************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, ".content-tooltip .tab-label {\n  max-width: 100%; }\n  .content-tooltip .tab-label .label-text {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    display: inline-block;\n    max-width: 100%; }\n  .content-tooltip .tab-label.hidden {\n    visibility: hidden;\n    position: absolute; }\n", ""]);

	// exports


/***/ },
/* 208 */
/*!********************************************************!*\
  !*** ./js/wix-ui-react/components/panelTabs/tabs.scss ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./tabs.scss */ 209);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./tabs.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./tabs.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 209 */
/*!****************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/wix-ui-react/components/panelTabs/tabs.scss ***!
  \****************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, ".custom-scroll .outer-container {\n  overflow: hidden;\n  position: relative; }\n  .custom-scroll .outer-container:hover .custom-scrollbar {\n    opacity: 1;\n    transition-duration: 0.2s; }\n\n.custom-scroll .inner-container {\n  overflow-x: hidden;\n  overflow-y: scroll; }\n  .custom-scroll .inner-container::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    height: 0px;\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.05) 60%, transparent 100%);\n    pointer-events: none;\n    transition: height 0.1s ease-in;\n    will-change: height; }\n  .custom-scroll .inner-container.content-scrolled::after {\n    height: 5px;\n    transition: height 0.15s ease-out; }\n\n.custom-scroll .custom-scrollbar {\n  position: absolute;\n  height: 100%;\n  width: 6px;\n  right: 3px;\n  opacity: 0;\n  z-index: 1;\n  transition: opacity 0.4s ease-out;\n  will-change: opacity;\n  padding: 6px 0;\n  box-sizing: border-box; }\n\n.custom-scroll .handleDrag {\n  opacity: 1; }\n\n.custom-scroll .custom-scroll-handle {\n  position: absolute;\n  width: 100%;\n  top: 0; }\n\n.custom-scroll .inner-handle {\n  height: calc(100% - 12px);\n  margin-top: 6px;\n  background-color: rgba(78, 183, 245, 0.7);\n  border-radius: 3px; }\n\n.background-sub-panel,\n.animation-panel,\n.settings-panel {\n  padding: 0;\n  margin: 0; }\n  .background-sub-panel .dropdown,\n  .animation-panel .dropdown,\n  .settings-panel .dropdown {\n    padding: 19px 12px 17px 12px;\n    margin: 0 11px; }\n  .background-sub-panel .control-switch .label-switch,\n  .animation-panel .control-switch .label-switch,\n  .settings-panel .control-switch .label-switch {\n    width: calc(100% - 57px); }\n  .background-sub-panel .control-buttons-group,\n  .animation-panel .control-buttons-group,\n  .settings-panel .control-buttons-group {\n    padding: 19px 24px 26px 24px; }\n  .background-sub-panel .control-button-in-panel-content,\n  .animation-panel .control-button-in-panel-content,\n  .settings-panel .control-button-in-panel-content {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: calc(100% - 48px); }\n  .background-sub-panel .selective-text-input .control-checkbox,\n  .animation-panel .selective-text-input .control-checkbox,\n  .settings-panel .selective-text-input .control-checkbox {\n    margin: -6px 0; }\n  .background-sub-panel .selective-text-input .control-text-input,\n  .animation-panel .selective-text-input .control-text-input,\n  .settings-panel .selective-text-input .control-text-input {\n    width: calc(100% - 100px); }\n  .background-sub-panel :not(.selective-text-input) > .control-checkbox,\n  .animation-panel :not(.selective-text-input) > .control-checkbox,\n  .settings-panel :not(.selective-text-input) > .control-checkbox {\n    display: block;\n    width: calc(100% - 60px);\n    margin: 21px 30px;\n    box-sizing: border-box; }\n  .background-sub-panel .control-alignment,\n  .animation-panel .control-alignment,\n  .settings-panel .control-alignment {\n    padding: 19px 24px 24px 24px; }\n    .background-sub-panel .control-alignment .label,\n    .animation-panel .control-alignment .label,\n    .settings-panel .control-alignment .label {\n      padding: 0 0 12px 0; }\n  .background-sub-panel .control-radio-buttons,\n  .animation-panel .control-radio-buttons,\n  .settings-panel .control-radio-buttons {\n    margin: 19px 24px 24px 24px; }\n  .background-sub-panel .first-time-info-box,\n  .animation-panel .first-time-info-box,\n  .settings-panel .first-time-info-box {\n    margin-bottom: 12px; }\n  .background-sub-panel .control-section-divider,\n  .animation-panel .control-section-divider,\n  .settings-panel .control-section-divider {\n    padding: 0 42px; }\n  .background-sub-panel .rich-text-paragraph,\n  .animation-panel .rich-text-paragraph,\n  .settings-panel .rich-text-paragraph {\n    padding: 18px 24px; }\n  .background-sub-panel .rich-text-paragraph-content,\n  .animation-panel .rich-text-paragraph-content,\n  .settings-panel .rich-text-paragraph-content {\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .background-sub-panel .control-button:not(.btn-back):not(.no-margin):not(.create-news-letter),\n  .animation-panel .control-button:not(.btn-back):not(.no-margin):not(.create-news-letter),\n  .settings-panel .control-button:not(.btn-back):not(.no-margin):not(.create-news-letter) {\n    margin: 12px 24px; }\n  .background-sub-panel .thumbnails-with-icons,\n  .animation-panel .thumbnails-with-icons,\n  .settings-panel .thumbnails-with-icons {\n    margin: 24px; }\n  .background-sub-panel .media-button,\n  .animation-panel .media-button,\n  .settings-panel .media-button {\n    margin: 24px; }\n    .background-sub-panel .media-button .control-button,\n    .animation-panel .media-button .control-button,\n    .settings-panel .media-button .control-button {\n      margin: 0 auto;\n      max-width: calc(100% - 24px); }\n  .background-sub-panel .control-button2-wrapper,\n  .animation-panel .control-button2-wrapper,\n  .settings-panel .control-button2-wrapper {\n    padding: 24px 0;\n    text-align: center; }\n    .background-sub-panel .control-button2-wrapper.control-button2-wrapper-no-top-spacing,\n    .animation-panel .control-button2-wrapper.control-button2-wrapper-no-top-spacing,\n    .settings-panel .control-button2-wrapper.control-button2-wrapper-no-top-spacing {\n      padding-top: 0; }\n    .background-sub-panel .control-button2-wrapper.control-button2-wrapper-no-bottom-spacing,\n    .animation-panel .control-button2-wrapper.control-button2-wrapper-no-bottom-spacing,\n    .settings-panel .control-button2-wrapper.control-button2-wrapper-no-bottom-spacing {\n      padding-bottom: 0; }\n  .background-sub-panel > .control-button,\n  .animation-panel > .control-button,\n  .settings-panel > .control-button {\n    margin: 24px auto;\n    max-width: calc(100% - 48px);\n    display: block; }\n  .background-sub-panel .inner-control-button,\n  .animation-panel .inner-control-button,\n  .settings-panel .inner-control-button {\n    margin: 24px auto;\n    max-width: calc(100% - 48px);\n    display: block; }\n    .background-sub-panel .inner-control-button.no-margin-top,\n    .animation-panel .inner-control-button.no-margin-top,\n    .settings-panel .inner-control-button.no-margin-top {\n      margin-top: 0; }\n  .background-sub-panel .control-text-input,\n  .animation-panel .control-text-input,\n  .settings-panel .control-text-input {\n    margin: 12px;\n    width: calc(100% - 24px); }\n  .background-sub-panel .control-text-input-with-button,\n  .animation-panel .control-text-input-with-button,\n  .settings-panel .control-text-input-with-button {\n    margin: 0 12px;\n    width: calc(100% - 24px); }\n  .background-sub-panel .input-link-to,\n  .animation-panel .input-link-to,\n  .settings-panel .input-link-to {\n    padding: 12px;\n    width: calc(100% - 24px); }\n  .background-sub-panel .c22,\n  .animation-panel .c22,\n  .settings-panel .c22 {\n    margin: 0 23px; }\n  .background-sub-panel .control-checkbox,\n  .animation-panel .control-checkbox,\n  .settings-panel .control-checkbox {\n    display: block;\n    margin: 14px 24px; }\n  .background-sub-panel .radio-group,\n  .animation-panel .radio-group,\n  .settings-panel .radio-group {\n    display: block;\n    margin: 14px 24px; }\n  .background-sub-panel .button-row,\n  .animation-panel .button-row,\n  .settings-panel .button-row {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 19px 12px; }\n    .background-sub-panel .button-row .dropdown,\n    .animation-panel .button-row .dropdown,\n    .settings-panel .button-row .dropdown {\n      padding: 0;\n      margin: 0; }\n  .background-sub-panel .input-slider,\n  .animation-panel .input-slider,\n  .settings-panel .input-slider {\n    margin: 12px 12px 12px 24px; }\n  .background-sub-panel .writable-drop-down,\n  .animation-panel .writable-drop-down,\n  .settings-panel .writable-drop-down {\n    padding: 17px 12px;\n    margin-right: 11px; }\n  .background-sub-panel .image-control-action-link,\n  .animation-panel .image-control-action-link,\n  .settings-panel .image-control-action-link {\n    min-height: 150px; }\n  .background-sub-panel .color-picker-input-wrapper,\n  .animation-panel .color-picker-input-wrapper,\n  .settings-panel .color-picker-input-wrapper {\n    padding: 15px 24px;\n    box-sizing: border-box; }\n  .background-sub-panel .color-picker-input-with-opacity,\n  .animation-panel .color-picker-input-with-opacity,\n  .settings-panel .color-picker-input-with-opacity {\n    margin: 15px 24px 0 24px; }\n    .background-sub-panel .color-picker-input-with-opacity .input-slider,\n    .animation-panel .color-picker-input-with-opacity .input-slider,\n    .settings-panel .color-picker-input-with-opacity .input-slider {\n      margin: 0 35px 10px 0; }\n\n.settings-panel .color-picker-input {\n  margin: 12px 24px; }\n\n.settings-panel .color-picker-input-with-opacity-slider .color-picker-input {\n  margin: 0; }\n\nhtml, body {\n  height: 100%; }\n\n.tabs {\n  font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, sans-serif;\n  display: flex;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n  .tabs .tabs-menu {\n    box-sizing: border-box;\n    width: calc(100% - 288px);\n    background: rgba(246, 251, 255, 0.98);\n    padding: 15px 10px 12px 10px; }\n    .tabs .tabs-menu .tab-label {\n      box-sizing: border-box;\n      padding: 8px 14px 7px;\n      margin: 0 0 4px;\n      border-radius: 20px;\n      color: #2b5672;\n      display: inline-block; }\n      .tabs .tabs-menu .tab-label:hover {\n        background: rgba(211, 237, 255, 0.7);\n        color: #2b5672;\n        cursor: pointer; }\n      .tabs .tabs-menu .tab-label.active {\n        background: #d3edff;\n        color: #3899ec; }\n    .tabs .tabs-menu .divider-long {\n      margin: 12px -10px; }\n    .tabs .tabs-menu .divider-short {\n      margin: 12px 13px 12px 6px; }\n  .tabs .active-tab-content-pos {\n    width: 288px;\n    height: 100%;\n    overflow-y: auto;\n    background-color: #ffffff; }\n  .tabs .active-tab-content {\n    background-color: #ffffff;\n    min-height: 100%;\n    visibility: visible; }\n    .tabs .active-tab-content > .hidden {\n      display: none; }\n", ""]);

	// exports


/***/ },
/* 210 */
/*!****************************************************!*\
  !*** ./js/wix-ui-react/appSettings/appSettings.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 5);
	var template = __webpack_require__(/*! ./appSettings.rt */ 211);

	module.exports = React.createClass({
	    displayName: 'appSettings',
	    render: template
	});

/***/ },
/* 211 */
/*!****************************************************!*\
  !*** ./js/wix-ui-react/appSettings/appSettings.rt ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! wix-ui-react/appSettings/manager */ 212)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, manager) {
	    'use strict';
	    return function () {
	        return React.createElement('div', { 'style': { height: '100%' } }, '\n    ', this.props.children, '\n    ', React.createElement(manager, {}));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 212 */
/*!************************************************!*\
  !*** ./js/wix-ui-react/appSettings/manager.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 5);
	var options = __webpack_require__(/*! baseUI/panelInputs/dropDown/options */ 93);
	var openedPanels = __webpack_require__(/*! wix-ui-react/components/panels/openedPanels */ 116);
	var tooltipsRenderer = __webpack_require__(/*! baseUI/popovers/tooltipsRenderer */ 213);

	module.exports = React.createClass({
	    render: function render() {
	        var container = React.createElement('div', { id: 'ui-lib' }, //is someone using the id?
	        React.createElement(options, {}), React.createElement(tooltipsRenderer, {}), React.createElement(openedPanels, {}));

	        return container;
	    }
	});

/***/ },
/* 213 */
/*!************************************************!*\
  !*** ./js/baseUI/popovers/tooltipsRenderer.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! baseUI/popovers/tooltipManager */ 41), __webpack_require__(/*! baseUI/popovers/tooltipsRenderer.rt */ 214)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, tooltipManager, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'tooltipsRenderer',

	        getInitialState: function getInitialState() {
	            return {
	                presentedTooltips: []
	            };
	        },

	        componentWillMount: function componentWillMount() {
	            tooltipManager.setTooltipRenderer(this);
	        },

	        updateDisplayedTooltips: function updateDisplayedTooltips(presentersArr, callback) {
	            this.setState({
	                presentedTooltips: presentersArr
	            }, callback);
	        },

	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 214 */
/*!************************************************!*\
  !*** ./js/baseUI/popovers/tooltipsRenderer.rt ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/popovers/bubble */ 215),
	    __webpack_require__(/*! baseUI/popovers/tooltipPresenter */ 218)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, bubble, tooltipPresenter) {
	    'use strict';
	    function repeatTooltipData1(tooltipData, tooltipDataIndex) {
	        return React.createElement(tooltipPresenter, _.assign({}, { 'key': tooltipData.id }, tooltipData));
	    }
	    return function () {
	        return React.createElement.apply(this, [
	            'div',
	            { 'className': 'tooltips-layer' }    /* <UA.tooltipAnimation> */,
	            _.map(this.state.presentedTooltips, repeatTooltipData1.bind(this))    /* </UA.tooltipAnimation> */
	        ]);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 215 */
/*!**************************************!*\
  !*** ./js/baseUI/popovers/bubble.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react-dom */ 19), __webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! jquery */ 67), __webpack_require__(/*! core */ 22), __webpack_require__(/*! util */ 25), __webpack_require__(/*! baseUI/framework/uiConstants */ 20), __webpack_require__(/*! baseUI/mixins/positionRelativeToElementMixin */ 216), __webpack_require__(/*! baseUI/popovers/bubble.rt */ 217)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ReactDOM, React, _, $, core, util, uiConstants, positionRelativeToElementMixin, template) {
	    'use strict';

	    var distanceFromTarget = uiConstants.BUBBLE.DISTANCE_FROM_TARGET;

	    function getValueType(value) {
	        if (_.isString(value)) {
	            return uiConstants.TOOLTIP.VALUE_TYPE.STRING;
	        } else if (value && value.classPath && value.props) {
	            return uiConstants.TOOLTIP.VALUE_TYPE.CLASS;
	        }
	        return uiConstants.TOOLTIP.VALUE_TYPE.TEMPLATE;
	    }

	    return React.createClass({
	        mixins: [util.translationMixin, util.outerClickMixin, positionRelativeToElementMixin],
	        displayName: 'bubble',
	        propTypes: {
	            'value': React.PropTypes.oneOfType([React.PropTypes.string.isRequired, React.PropTypes.element.isRequired, React.PropTypes.shape({
	                classPath: React.PropTypes.string,
	                props: React.PropTypes.object
	            }).isRequired]),
	            targetNode: React.PropTypes.object,
	            mouseLeftTargetNode: React.PropTypes.bool,
	            closeTriggers: React.PropTypes.arrayOf(React.PropTypes.oneOf(_.values(uiConstants.TOOLTIP.TRIGGERS))),
	            width: React.PropTypes.string,
	            noArrow: React.PropTypes.bool,
	            styleType: React.PropTypes.oneOf(_.values(uiConstants.TOOLTIP.STYLE_TYPE)),
	            marginsFromWindow: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	            hideMethod: React.PropTypes.func,
	            timeoutForMouseOverBubble: React.PropTypes.number
	        },

	        getInitialState: function getInitialState() {
	            return {
	                measured: false
	            };
	        },

	        getDefaultProps: function getDefaultProps() {
	            return {
	                timeoutForMouseOverBubble: 150
	            };
	        },

	        getClasses: function getClasses() {
	            var classes = {
	                'tooltip-presenter': true
	            };

	            classes['alignment-' + this.calculatedAlignment] = true;

	            var valueType = getValueType(this.props.value);

	            if (valueType !== uiConstants.TOOLTIP.VALUE_TYPE.STRING && !this.props.styleType) {
	                classes['content-only'] = true;
	            } else {
	                switch (this.props.styleType) {
	                    case uiConstants.TOOLTIP.STYLE_TYPE.SMALL:
	                        classes['small-tooltip'] = true;
	                        break;
	                    case uiConstants.TOOLTIP.STYLE_TYPE.CONTENT_ONLY:
	                        classes['content-only'] = true;
	                        break;
	                    default:
	                        classes['normal-tooltip'] = true;
	                        break;
	                }
	            }

	            return classes;
	        },

	        onOuterClick: function onOuterClick(evt) {
	            var clickedNode = evt.target;
	            if (_.contains(this.props.closeTriggers, uiConstants.TOOLTIP.TRIGGERS.OUTER_CLICK)) {
	                while (clickedNode) {
	                    if (clickedNode === this.props.targetNode) {
	                        return;
	                    }
	                    clickedNode = clickedNode.parentElement || clickedNode.parentNode;
	                }
	                this.hide();
	            }
	        },

	        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	            if (nextProps.mouseLeftTargetNode) {
	                this.hideAfterDelayIfMouseNotOverBubble();
	            }
	        },

	        hide: function hide() {
	            this.props.hideMethod();
	        },

	        hideAfterDelayIfMouseNotOverBubble: function hideAfterDelayIfMouseNotOverBubble() {
	            setTimeout(function () {
	                if (!this.mouseOverBubble) {
	                    this.hide();
	                }
	            }.bind(this), this.props.timeoutForMouseOverBubble);
	        },

	        onMouseLeave: function onMouseLeave() {
	            this.mouseOverBubble = false;
	            if (_.contains(this.props.closeTriggers, uiConstants.TOOLTIP.TRIGGERS.MOUSE_LEAVE)) {
	                this.hideAfterDelayIfMouseNotOverBubble();
	            }
	        },

	        onMouseEnter: function onMouseEnter() {
	            this.mouseOverBubble = true;
	        },

	        getContent: function getContent() {
	            var value = this.props.value;
	            var valueType = getValueType(value);

	            switch (valueType) {
	                case uiConstants.TOOLTIP.VALUE_TYPE.STRING:
	                    return React.createElement('div', {
	                        className: 'content',
	                        children: this.translateIfNeeded(value)
	                    });
	                case uiConstants.TOOLTIP.VALUE_TYPE.CLASS:
	                    return React.createElement(core.lazyComponent, _.assign({
	                        'moduleName': value.classPath,
	                        onLoad: this.onContentLoaded
	                    }, _.assign({}, value.props, { calculatedAlignment: this.calculatedAlignment })));
	                case uiConstants.TOOLTIP.VALUE_TYPE.TEMPLATE:
	                    return this.props.value;
	            }
	        },

	        onContentLoaded: function onContentLoaded() {
	            this.forceUpdate();
	        },

	        getArrowStyle: function getArrowStyle() {
	            if (!this.calculatedAlignment || !this.isMounted() || this.props.noArrow) {
	                return {
	                    display: 'none'
	                };
	            }

	            var arrowSize = this.props.styleType === uiConstants.TOOLTIP.STYLE_TYPE.SMALL ? 8 : 10;
	            var targetLayout = this.props.targetNode.getBoundingClientRect();
	            var arrowTop, arrowLeft;
	            switch (this.calculatedAlignment) {
	                case uiConstants.TOOLTIP.ALIGNMENT.TOP:
	                    arrowTop = targetLayout.top - distanceFromTarget - arrowSize / 2;
	                    arrowLeft = targetLayout.left + (targetLayout.width - arrowSize) / 2;
	                    break;
	                case uiConstants.TOOLTIP.ALIGNMENT.BOTTOM:
	                    arrowTop = targetLayout.top + targetLayout.height + distanceFromTarget - arrowSize / 2;
	                    arrowLeft = targetLayout.left + (targetLayout.width - arrowSize) / 2;
	                    break;
	                case uiConstants.TOOLTIP.ALIGNMENT.LEFT:
	                    arrowTop = targetLayout.top + (targetLayout.height - arrowSize) / 2;
	                    arrowLeft = targetLayout.left - distanceFromTarget - arrowSize / 2;
	                    break;
	                case uiConstants.TOOLTIP.ALIGNMENT.RIGHT:
	                    arrowTop = targetLayout.top + (targetLayout.height - arrowSize) / 2;
	                    arrowLeft = targetLayout.left + targetLayout.width + distanceFromTarget - arrowSize / 2;
	                    break;
	            }
	            var $bubbleNode = $(ReactDOM.findDOMNode(this));
	            var fixedPositionTopDelta = $bubbleNode.offset().top - $(window).scrollTop() - parseInt($bubbleNode.css('top'), 10);
	            var fixedPositionLeftDelta = $bubbleNode.offset().left - parseInt($bubbleNode.css('left'), 10);
	            return {
	                position: 'fixed',
	                top: arrowTop - fixedPositionTopDelta,
	                left: arrowLeft - fixedPositionLeftDelta,
	                height: arrowSize,
	                width: arrowSize
	            };
	        },

	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 216 */
/*!************************************************************!*\
  !*** ./js/baseUI/mixins/positionRelativeToElementMixin.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react-dom */ 19), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! react */ 5), __webpack_require__(/*! jquery */ 67), __webpack_require__(/*! util */ 25), __webpack_require__(/*! baseUI/framework/uiConstants */ 20)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ReactDOM, _, React, $, util, uiConstants) {
	    'use strict';

	    var verticalAlignments = [uiConstants.TOOLTIP.ALIGNMENT.BOTTOM, uiConstants.TOOLTIP.ALIGNMENT.TOP];
	    var distanceFromTarget = uiConstants.BUBBLE.DISTANCE_FROM_TARGET;

	    function getWindowSize() {
	        return {
	            width: $(window).width(),
	            height: $(window).height()
	        };
	    }

	    return {
	        mixins: [util.singlePassDOMReadWriteMixin],

	        PropTypes: {
	            alignment: React.PropTypes.oneOf(_.values(uiConstants.TOOLTIP.ALIGNMENT)),
	            overridePositionAdjustments: React.PropTypes.shape({
	                type: React.PropTypes.oneOf(_.values(uiConstants.TOOLTIP.ALIGNMENT)).isRequired,
	                value: React.PropTypes.number.isRequired
	            })
	        },

	        getInitialState: function getInitialState() {
	            this.calculatedAlignment = null;
	            return {};
	        },

	        getDefaultProps: function getDefaultProps() {
	            return {
	                alignment: uiConstants.TOOLTIP.ALIGNMENT.TOP
	            };
	        },

	        getPosition: function getPosition() {
	            var isVerticalAlignment = _.contains(verticalAlignments, this.props.alignment);
	            var position = {
	                top: 0,
	                left: 0
	            };
	            if (isVerticalAlignment) {
	                position.top = this.getTopInVerticalAlignment();
	                position.left = this.getLeftInVerticalAlignment();
	            } else {
	                position.top = this.getTopInHorizontalAlignment();
	                position.left = this.getLeftInHorizontalAlignment();
	            }

	            position.top += $(window).scrollTop();
	            return position;
	        },

	        getLayouts: function getLayouts() {
	            var windowSize = getWindowSize();
	            var targetLayout = this.props.targetNode.getBoundingClientRect();
	            var selfLayout = ReactDOM.findDOMNode(this).getBoundingClientRect();

	            return {
	                window: windowSize,
	                target: targetLayout,
	                self: selfLayout
	            };
	        },

	        getTopInVerticalAlignment: function getTopInVerticalAlignment() {
	            var layouts = this.getLayouts();
	            var result = 0;

	            var canFitAboveTarget = layouts.target.top - distanceFromTarget - layouts.self.height > 0;
	            var canFitBelowTarget = layouts.target.bottom + distanceFromTarget + layouts.self.height < layouts.window.height;
	            var isTopAlignment = this.props.alignment === uiConstants.TOOLTIP.ALIGNMENT.TOP;
	            var isBottomAlignment = this.props.alignment === uiConstants.TOOLTIP.ALIGNMENT.BOTTOM;

	            var shouldPositionAboveTarget = isTopAlignment && canFitAboveTarget || isBottomAlignment && !canFitBelowTarget;

	            if (shouldPositionAboveTarget) {
	                result = layouts.target.top - distanceFromTarget - layouts.self.height;
	                this.updateCalculatedAlignmentAndRender(uiConstants.TOOLTIP.ALIGNMENT.TOP);
	            } else {
	                result = layouts.target.bottom + distanceFromTarget;
	                this.updateCalculatedAlignmentAndRender(uiConstants.TOOLTIP.ALIGNMENT.BOTTOM);
	            }

	            return result;
	        },

	        getLeftInVerticalAlignment: function getLeftInVerticalAlignment() {
	            var result;
	            var layouts = this.getLayouts();
	            var targetCenterX = Math.floor(layouts.target.left + layouts.target.width / 2);
	            var leftPosCenteredOnTarget = targetCenterX - layouts.self.width / 2;

	            var leftPosToUse = this.applyLeftRightOverridePositionAdjustments() || leftPosCenteredOnTarget;

	            var maxAllowedLeft = layouts.window.width - this.props.marginsFromWindow - layouts.self.width;
	            var minAllowedLeft = this.props.marginsFromWindow;
	            var leftAdjustedToScreen = util.math.ensureWithinLimits(leftPosToUse, minAllowedLeft, maxAllowedLeft);

	            result = leftAdjustedToScreen;

	            return result;
	        },

	        getTopInHorizontalAlignment: function getTopInHorizontalAlignment() {
	            var result;
	            var layouts = this.getLayouts();

	            var targetCenterY = Math.floor(layouts.target.top + layouts.target.height / 2);
	            var topPosCenteredOnTarget = targetCenterY - layouts.self.height / 2;

	            var topPosToUse = this.applyTopBottomOverridePositionAdjustments() || topPosCenteredOnTarget;

	            var maxAllowedTop = layouts.window.height - this.props.marginsFromWindow - layouts.self.height;
	            var minAllowedTop = this.props.marginsFromWindow;
	            result = util.math.ensureWithinLimits(topPosToUse, minAllowedTop, maxAllowedTop);

	            return result;
	        },

	        getLeftInHorizontalAlignment: function getLeftInHorizontalAlignment() {
	            var layouts = this.getLayouts();
	            var result = 0;

	            var canFitLeftOfTarget = layouts.target.left - distanceFromTarget - layouts.self.width > 0;
	            var canFitRightOfTarget = layouts.target.right + distanceFromTarget + layouts.self.width < layouts.window.width;
	            var isLeftAlignment = this.props.alignment === uiConstants.TOOLTIP.ALIGNMENT.LEFT;
	            var isRightAlignment = this.props.alignment === uiConstants.TOOLTIP.ALIGNMENT.RIGHT;

	            var shouldPositionLeftOfTarget = isLeftAlignment && canFitLeftOfTarget || isRightAlignment && !canFitRightOfTarget;

	            if (shouldPositionLeftOfTarget) {
	                result = layouts.target.left - distanceFromTarget - layouts.self.width;
	                this.updateCalculatedAlignmentAndRender(uiConstants.TOOLTIP.ALIGNMENT.LEFT);
	            } else {
	                result = layouts.target.right + distanceFromTarget;
	                this.updateCalculatedAlignmentAndRender(uiConstants.TOOLTIP.ALIGNMENT.RIGHT);
	            }

	            return result;
	        },

	        applyLeftRightOverridePositionAdjustments: function applyLeftRightOverridePositionAdjustments() {
	            var layouts = this.getLayouts();
	            var overridePositionAdjustments = this.props.overridePositionAdjustments;
	            var targetCenterX = Math.floor(layouts.target.left + layouts.target.width / 2);

	            if (overridePositionAdjustments && overridePositionAdjustments.type === uiConstants.TOOLTIP.ALIGNMENT.LEFT) {
	                return targetCenterX - overridePositionAdjustments.value;
	            } else if (overridePositionAdjustments && overridePositionAdjustments.type === uiConstants.TOOLTIP.ALIGNMENT.RIGHT) {
	                return targetCenterX + overridePositionAdjustments.value - layouts.self.width;
	            }

	            return null;
	        },

	        applyTopBottomOverridePositionAdjustments: function applyTopBottomOverridePositionAdjustments() {
	            var layouts = this.getLayouts();
	            var overridePositionAdjustments = this.props.overridePositionAdjustments;
	            var targetCenterY = Math.floor(layouts.target.top + layouts.target.height / 2);

	            if (overridePositionAdjustments && overridePositionAdjustments.type === uiConstants.TOOLTIP.ALIGNMENT.TOP) {
	                return targetCenterY - overridePositionAdjustments.value;
	            } else if (overridePositionAdjustments && overridePositionAdjustments.type === uiConstants.TOOLTIP.ALIGNMENT.BOTTOM) {
	                return targetCenterY + overridePositionAdjustments.value - layouts.self.height;
	            }

	            return null;
	        },

	        updateCalculatedAlignmentAndRender: function updateCalculatedAlignmentAndRender(alignment) {
	            if (this.calculatedAlignment !== alignment) {
	                this.calculatedAlignment = alignment;
	                this.forceUpdate();
	            }
	        },

	        measurePhase: function measurePhase() {
	            return this.getPosition();
	        },

	        patchPhase: function patchPhase(position) {
	            var style = {
	                top: position.top,
	                left: position.left
	            };
	            var domNode = ReactDOM.findDOMNode(this);
	            $(domNode).offset(style);
	        }

	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 217 */
/*!**************************************!*\
  !*** ./js/baseUI/popovers/bubble.rt ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _) {
	    'use strict';
	    return function () {
	        return React.createElement('div', {
	            'className': _.keys(_.pick(this.getClasses(), _.identity)).join(' '),
	            'style': { maxWidth: this.props.width },
	            'onMouseLeave': this.onMouseLeave,
	            'onMouseEnter': this.onMouseEnter
	        }, React.createElement('div', {
	            'className': 'arrow',
	            'style': this.getArrowStyle()
	        }), React.createElement('div', { 'className': 'content-wrapper' }, this.getContent()));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 218 */
/*!************************************************!*\
  !*** ./js/baseUI/popovers/tooltipPresenter.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 5), __webpack_require__(/*! lodash */ 6), __webpack_require__(/*! baseUI/popovers/tooltipManager */ 41), __webpack_require__(/*! baseUI/popovers/tooltipPresenter.rt */ 219)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, tooltipManager, template) {
	    'use strict';

	    return React.createClass({
	        displayName: 'tooltipPresenter',
	        propTypes: {
	            id: React.PropTypes.string
	        },
	        getBubbleProps: function getBubbleProps() {
	            return _.assign({}, this.props, {
	                hideMethod: tooltipManager.hide.bind(tooltipManager, this.props.id)
	            });
	        },
	        render: template
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 219 */
/*!************************************************!*\
  !*** ./js/baseUI/popovers/tooltipPresenter.rt ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/popovers/bubble */ 215)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, bubble) {
	    'use strict';
	    return function () {
	        return React.createElement(bubble, this.getBubbleProps());
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 220 */
/*!*****************************************************************************!*\
  !*** ./js/wix-ui-react/components/fontAndColorPicker/fontAndColorPicker.js ***!
  \*****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 5);
	var template = __webpack_require__(/*! wix-ui-react/components/fontAndColorPicker/fontAndColorPicker.rt */ 221);
	__webpack_require__(/*! wix-ui-react/components/fontAndColorPicker/fontAndColorPicker.scss */ 222);

	module.exports = React.createClass({
	    displayName: 'FontAndColorPicker',
	    propTypes: {
	        title: React.PropTypes.string,
	        infoTitle: React.PropTypes.string,
	        infoText: React.PropTypes.string,
	        startWithFont: React.PropTypes.string,
	        startWithTheme: React.PropTypes.string,
	        startWithColor: React.PropTypes.string,
	        onChange: React.PropTypes.func,
	        hideTheme: React.PropTypes.bool,
	        showDefaultPanelTitle: React.PropTypes.bool,
	        'wix-param-font': React.PropTypes.string,
	        'wix-param-color': React.PropTypes.string
	    },

	    getFontPickerProps: function getFontPickerProps() {
	        return _.chain({ 'wix-param': this.props['wix-param-font'] }).defaults(this.props).omit(['title', 'infoText', 'infoTitle']).value();
	    },

	    getColorPickerProps: function getColorPickerProps() {
	        return _.chain({ 'wix-param': this.props['wix-param-color'] }).defaults(this.props).omit(['title', 'infoText', 'infoTitle']).value();
	    },

	    hasTitle: function hasTitle() {
	        return !_.isEmpty(this.props.title);
	    },

	    getValue: function getValue() {
	        return {
	            font: this.refs.fontPicker.getValue(),
	            color: this.refs.colorPicker.getValue()
	        };
	    },
	    render: template
	});

/***/ },
/* 221 */
/*!*****************************************************************************!*\
  !*** ./js/wix-ui-react/components/fontAndColorPicker/fontAndColorPicker.rt ***!
  \*****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! react/addons */ 5),
	    __webpack_require__(/*! lodash */ 6),
	    __webpack_require__(/*! baseUI/controls/infoIcon */ 18),
	    __webpack_require__(/*! wix-ui-react/components/fontPicker/fontPicker */ 165),
	    __webpack_require__(/*! wix-ui-react/components/colorSpace/colorPickerInput */ 81)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, infoIcon, fontPicker, colorPickerInput) {
	    'use strict';
	    return function () {
	        return React.createElement('div', { 'className': 'font-and-color-picker' }, this.hasTitle() ? React.createElement('label', { 'key': 'dropdownLabel' }, this.props.title) : null, this.hasTitle() && (this.props.infoText || this.props.infoTitle) ? React.createElement(infoIcon, {
	            'key': 'infoIcon',
	            'text': this.props.infoText,
	            'title': this.props.infoTitle
	        }) : null, React.createElement('div', { 'className': 'font-picker' }, React.createElement(fontPicker, _.assign({}, { 'ref': 'fontPicker' }, this.getFontPickerProps()))), React.createElement('div', { 'className': 'color-picker' }, React.createElement(colorPickerInput, _.assign({}, { 'ref': 'colorPicker' }, this.getColorPickerProps()))));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 222 */
/*!*******************************************************************************!*\
  !*** ./js/wix-ui-react/components/fontAndColorPicker/fontAndColorPicker.scss ***!
  \*******************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./fontAndColorPicker.scss */ 223);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./fontAndColorPicker.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./fontAndColorPicker.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 223 */
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/wix-ui-react/components/fontAndColorPicker/fontAndColorPicker.scss ***!
  \***************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, ".font-and-color-picker {\n  position: relative;\n  text-align: left;\n  padding: 17px 24px 9px; }\n  .font-and-color-picker label {\n    width: calc(100% - 15px);\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    color: #2b5672;\n    font-size: 14px;\n    margin-bottom: 3px;\n    display: block; }\n  .font-and-color-picker .info-icon {\n    top: 12px;\n    right: 12px;\n    position: absolute;\n    opacity: 0; }\n  .font-and-color-picker:hover .info-icon {\n    opacity: 1; }\n  .font-and-color-picker .font-picker {\n    display: inline-block;\n    width: 158px; }\n    .font-and-color-picker .font-picker .dropdown {\n      margin: 0 19px 0 0;\n      padding: 16px 11px 13px 12px; }\n      .font-and-color-picker .font-picker .dropdown.select {\n        margin: 0;\n        padding: 0; }\n  .font-and-color-picker .color-picker {\n    display: inline-block;\n    padding-left: 23px;\n    border-left: 1px solid #d9e1e8;\n    margin-left: 28px;\n    position: relative;\n    bottom: 1px;\n    height: 30px; }\n    .font-and-color-picker .color-picker .color-picker-input {\n      margin: 0; }\n      .font-and-color-picker .color-picker .color-picker-input .color-picker-wrapper {\n        margin-bottom: 4px; }\n", ""]);

	// exports


/***/ },
/* 224 */
/*!****************************!*\
  !*** ./js/cssCollector.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! baseUI/base/reset.scss */ 225);
	__webpack_require__(/*! baseUI/base/normalize.scss */ 227);
	__webpack_require__(/*! baseUI/controls/infoIcon.scss */ 229);
	__webpack_require__(/*! baseUI/controls/horizontalTabsArrowed.scss */ 231);
	__webpack_require__(/*! baseUI/panelInputs/stepper.scss */ 129);
	__webpack_require__(/*! baseUI/panelInputs/textInput.scss */ 233);
	__webpack_require__(/*! baseUI/controls/divider.scss */ 235);
	__webpack_require__(/*! wix-ui-jquery/panelTabs/panelTabs.scss */ 237);

/***/ },
/* 225 */
/*!***********************************!*\
  !*** ./js/baseUI/base/reset.scss ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./reset.scss */ 226);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./reset.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./reset.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 226 */
/*!*******************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/base/reset.scss ***!
  \*******************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\nbody {\n  font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n  font-size: 14px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility; }\n\nul,\nli {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n*:not(input):not(textarea) {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n[data-z-counter] {\n  z-index: 0; }\n\n[data-z-counter='0'] {\n  z-index: auto; }\n", ""]);

	// exports


/***/ },
/* 227 */
/*!***************************************!*\
  !*** ./js/baseUI/base/normalize.scss ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./normalize.scss */ 228);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./normalize.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./normalize.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 228 */
/*!***********************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/base/normalize.scss ***!
  \***********************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, "html {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\nbody {\n  margin: 0; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active,\na:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: .67em 0; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\nbutton {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\ninput[type=\"number\"]::-webkit-inner-spin-button, input[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button, input[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n", ""]);

	// exports


/***/ },
/* 229 */
/*!******************************************!*\
  !*** ./js/baseUI/controls/infoIcon.scss ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./infoIcon.scss */ 230);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./infoIcon.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./infoIcon.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 230 */
/*!**************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/controls/infoIcon.scss ***!
  \**************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, ".info-icon {\n  cursor: pointer;\n  border-radius: 50%;\n  display: inline-block;\n  width: 18px;\n  height: 18px; }\n  .info-icon svg circle {\n    fill: transparent; }\n  .info-icon svg path {\n    fill: #7a92a5; }\n  .info-icon svg:hover path {\n    fill: #3899ec; }\n", ""]);

	// exports


/***/ },
/* 231 */
/*!*******************************************************!*\
  !*** ./js/baseUI/controls/horizontalTabsArrowed.scss ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./horizontalTabsArrowed.scss */ 232);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./horizontalTabsArrowed.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./horizontalTabsArrowed.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 232 */
/*!***************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/controls/horizontalTabsArrowed.scss ***!
  \***************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, ".control-tabs-horizontal.arrowed {\n  box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.05);\n  font-size: 0; }\n  .control-tabs-horizontal.arrowed label {\n    height: 52px;\n    line-height: 52px;\n    text-align: center;\n    cursor: pointer;\n    display: inline-block; }\n    .control-tabs-horizontal.arrowed label:hover .tab-decorator {\n      border-bottom: solid 3px #7fccf7; }\n    .control-tabs-horizontal.arrowed label:first-child:nth-last-child(1),\n    .control-tabs-horizontal.arrowed label:first-child:nth-last-child(1) ~ label {\n      width: 100%; }\n    .control-tabs-horizontal.arrowed label:first-child:nth-last-child(2),\n    .control-tabs-horizontal.arrowed label:first-child:nth-last-child(2) ~ label {\n      width: 50%; }\n    .control-tabs-horizontal.arrowed label:first-child:nth-last-child(3),\n    .control-tabs-horizontal.arrowed label:first-child:nth-last-child(3) ~ label {\n      width: 33.33333%; }\n    .control-tabs-horizontal.arrowed label:first-child:nth-last-child(4),\n    .control-tabs-horizontal.arrowed label:first-child:nth-last-child(4) ~ label {\n      width: 25%; }\n  .control-tabs-horizontal.arrowed input {\n    display: none; }\n    .control-tabs-horizontal.arrowed input + .tab-decorator {\n      display: block;\n      font-size: 14px;\n      box-sizing: border-box;\n      color: #09e;\n      border-bottom: solid 3px transparent;\n      transition-property: border-color;\n      transition-duration: 0.4s;\n      position: relative;\n      padding-left: 6px;\n      padding-right: 6px;\n      height: 52px; }\n      .control-tabs-horizontal.arrowed input + .tab-decorator:after {\n        content: '';\n        width: 0;\n        height: 0;\n        border: solid;\n        border-color: transparent transparent #09e;\n        border-width: 0 9px 7px;\n        position: absolute;\n        bottom: -3px;\n        left: calc(50% - 9px);\n        opacity: 0;\n        transition-property: opacity;\n        transition-duration: 0.4s; }\n      .control-tabs-horizontal.arrowed input + .tab-decorator span {\n        display: table-cell;\n        width: 33.3%;\n        vertical-align: middle;\n        text-align: center;\n        height: 49px;\n        white-space: normal;\n        text-overflow: ellipsis;\n        overflow: hidden; }\n    .control-tabs-horizontal.arrowed input:checked + .tab-decorator {\n      border-bottom-color: #0099ef;\n      color: #2b5672; }\n      .control-tabs-horizontal.arrowed input:checked + .tab-decorator:after {\n        opacity: 1; }\n", ""]);

	// exports


/***/ },
/* 233 */
/*!**********************************************!*\
  !*** ./js/baseUI/panelInputs/textInput.scss ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./textInput.scss */ 234);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./textInput.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./textInput.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 234 */
/*!******************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/panelInputs/textInput.scss ***!
  \******************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.control-text-input {\n  position: relative;\n  text-align: left;\n  display: inline-block;\n  width: 100%; }\n  .control-text-input > label {\n    font-weight: 300;\n    color: #2b5672;\n    font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 14px;\n    text-align: left;\n    display: block;\n    overflow: hidden;\n    line-height: 18px;\n    max-height: 34px;\n    padding: 7px 30px 6px 12px; }\n  .control-text-input .info-icon {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0px; }\n  .control-text-input:hover .info-icon {\n    display: inline-block; }\n  .control-text-input input, .control-text-input textarea {\n    font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;\n    font-size: 16px;\n    display: block;\n    box-sizing: border-box;\n    width: 100%;\n    height: 36px;\n    padding: 0px 11px 0px;\n    border: 1px solid transparent;\n    outline: none;\n    border-radius: 8px;\n    color: #162d3d;\n    text-align: left;\n    text-overflow: ellipsis; }\n    .control-text-input input::placeholder, .control-text-input textarea::placeholder {\n      color: #b6c1cd; }\n  .control-text-input textarea {\n    height: 100px;\n    resize: none;\n    overflow: hidden;\n    padding: 10px 24px 10px 10px;\n    transition: height 200ms ease; }\n  .control-text-input:not(.is-disabled):hover > input, .control-text-input:not(.is-disabled):hover > textarea {\n    background-color: #eaf7ff;\n    color: #2b5672;\n    cursor: pointer; }\n  .control-text-input:not(.is-disabled) input:hover, .control-text-input:not(.is-disabled) textarea:hover {\n    background-color: #d3edff;\n    color: #2b5672; }\n    .control-text-input:not(.is-disabled) input:hover::placeholder, .control-text-input:not(.is-disabled) textarea:hover::placeholder {\n      color: #2b5672; }\n  .control-text-input:not(.is-disabled) input:focus, .control-text-input:not(.is-disabled) textarea:focus {\n    background-color: transparent;\n    border: 1px solid #4eb7f5;\n    box-shadow: inset 0px 0px 3px 0px rgba(0, 90, 132, 0.25); }\n    .control-text-input:not(.is-disabled) input:focus::placeholder, .control-text-input:not(.is-disabled) textarea:focus::placeholder {\n      color: #b6c1cd; }\n    .control-text-input:not(.is-disabled) input:focus::selection, .control-text-input:not(.is-disabled) textarea:focus::selection {\n      background-color: #eaf7ff; }\n    .control-text-input:not(.is-disabled) input:focus:hover, .control-text-input:not(.is-disabled) textarea:focus:hover {\n      cursor: text; }\n  .control-text-input:not(.is-disabled) textarea:focus {\n    overflow: auto;\n    height: 132px; }\n  .control-text-input:not(.is-disabled) textarea.textarea-firefox {\n    height: 110px; }\n    .control-text-input:not(.is-disabled) textarea.textarea-firefox:focus {\n      height: 142px; }\n  .control-text-input.error:not(.focused) .validation-icon-error {\n    visibility: visible; }\n  .control-text-input.error:not(.focused) input, .control-text-input.error:not(.focused) textarea {\n    width: calc(100% - 43px);\n    padding-right: 0; }\n  .control-text-input.success:not(.focused) .validation-icon-success {\n    visibility: visible; }\n  .control-text-input.success:not(.focused) input, .control-text-input.success:not(.focused) textarea {\n    width: calc(100% - 43px);\n    padding-right: 0; }\n  .control-text-input.instant-error.validation-icon-error {\n    visibility: visible; }\n  .control-text-input.instant-error input:focus, .control-text-input.instant-error textarea:focus {\n    border: 1px solid #ee5951; }\n  .control-text-input.instant-error:not(.focused).validation-icon-error {\n    visibility: hidden; }\n  .control-text-input.is-disabled > label {\n    color: #939393; }\n  .control-text-input.is-disabled input, .control-text-input.is-disabled textarea {\n    color: #b6c1cd;\n    background-color: transparent; }\n  .control-text-input.has-label .validation-icon {\n    top: 37px; }\n  .control-text-input .validation-icon {\n    position: absolute;\n    right: 12px;\n    top: 9px;\n    cursor: pointer;\n    visibility: hidden;\n    font-size: 0; }\n    .control-text-input .validation-icon .symbol-inputValidationError {\n      fill: #ee5951; }\n    .control-text-input .validation-icon .symbol-inputValidationSuccess {\n      fill: #60bc57; }\n", ""]);

	// exports


/***/ },
/* 235 */
/*!*****************************************!*\
  !*** ./js/baseUI/controls/divider.scss ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./divider.scss */ 236);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./divider.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./divider.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 236 */
/*!*************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/baseUI/controls/divider.scss ***!
  \*************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, "hr.divider-long, hr.divider-short {\n  background-color: #d9e1e8;\n  border: 0;\n  height: 1px;\n  margin: 0; }\n\nhr.divider-short {\n  margin: 0 24px; }\n", ""]);

	// exports


/***/ },
/* 237 */
/*!***************************************************!*\
  !*** ./js/wix-ui-jquery/panelTabs/panelTabs.scss ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./panelTabs.scss */ 238);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./panelTabs.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./panelTabs.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 238 */
/*!***********************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?functions=selector-parse&root=/Users/omerganim/projects/editor-ui-lib/js!./js/wix-ui-jquery/panelTabs/panelTabs.scss ***!
  \***********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 11)();
	// imports


	// module
	exports.push([module.id, "[wix-ctrl] > [tab] {\n  visibility: hidden; }\n", ""]);

	// exports


/***/ }
/******/ ])
});
;