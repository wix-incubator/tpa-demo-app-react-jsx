/******/ (function(modules) { // webpackBootstrap
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

        module.exports = __webpack_require__(/*! ./js/Wix.js */1);


        /***/ },
    /* 1 */
    /*!*******************!*\
     !*** ./js/Wix.js ***!
     \*******************/
    /***/ function(module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */(function(global) {"use strict";

            module.exports = global["Wix"] = __webpack_require__(/*! -!./~/jshint-loader!./js/Wix.js */ 2);
            /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

        /***/ },
    /* 2 */
    /*!*************************************!*\
     !*** ./~/jshint-loader!./js/Wix.js ***!
     \*************************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! privates/core */ 4), __webpack_require__(/*! Base */ 22), __webpack_require__(/*! Billing */ 13), __webpack_require__(/*! privates/utils */ 9), __webpack_require__(/*! Activities */ 17), __webpack_require__(/*! Settings */ 20),
            __webpack_require__(/*! Contacts */ 26), __webpack_require__(/*! Utils */ 18), __webpack_require__(/*! Styles */ 21), __webpack_require__(/*! Events */ 5), __webpack_require__(/*! Error */ 15), __webpack_require__(/*! Media */ 19), __webpack_require__(/*! WindowOrigin */ 3),
            __webpack_require__(/*! WindowPlacement */ 24), __webpack_require__(/*! Worker */ 27), __webpack_require__(/*! PubSub */ 28), __webpack_require__(/*! Preview */ 30), __webpack_require__(/*! Dashboard */ 31), __webpack_require__(/*! Theme */ 23), __webpack_require__(/*! Counters */ 32), __webpack_require__(/*! Features */ 33), __webpack_require__(/*! privates/urlUtils */ 8), __webpack_require__(/*! Data */ 29)], __WEBPACK_AMD_DEFINE_RESULT__ = function (core, Base, Billing, utils, Activities, Settings,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     Contacts, Utils, Styles, Events, Error, Media, WindowOrigin,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     WindowPlacement, Worker, PubSub, Preview, Dashboard, Theme, Counters, Features, urlUtils, Data) {

            core.init({});

            var getNamespaceToExport = function () {
                if (urlUtils.getQueryParameter('endpointType') === 'worker') {
                    return {
                        Worker: Worker,
                        Events: Events,
                        Error: Error
                    };
                }
                return getDefaultNamespaces();
            };

            var getDefaultNamespaces = function () {
                return {
                    Activities: Activities,
                    Billing: Billing,
                    Contacts: Contacts,
                    Counters: Counters,
                    Dashboard: Dashboard,
                    Error: Error,
                    Events: Events,
                    Features: Features,
                    Media: Media,
                    PubSub: PubSub,
                    Preview: Preview,
                    Settings: Settings,
                    Styles: Styles,
                    Theme: Theme,
                    Utils: Utils,
                    WindowOrigin: WindowOrigin,
                    WindowPlacement: WindowPlacement,
                    openModal: Base.openModal,
                    openPopup: Base.openPopup,
                    setHeight: Base.setHeight,
                    closeWindow: Base.closeWindow,
                    scrollTo: Base.scrollTo,
                    scrollBy: Base.scrollBy,
                    getSiteInfo: Base.getSiteInfo,
                    getSitePages: Base.getSitePages,
                    getBoundingRectAndOffsets: Base.getBoundingRectAndOffsets,
                    removeEventListener: Base.removeEventListener,
                    addEventListener: Base.addEventListener,
                    resizeWindow: Base.resizeWindow,
                    requestLogin: Base.requestLogin,
                    currentMember: Base.currentMember,
                    navigateToPage: Base.navigateToPage,
                    getCurrentPageId: Base.getCurrentPageId,
                    pushState: Base.pushState,
                    reportHeightChange: Base.reportHeightChange,
                    getStyleParams: Base.getStyleParams,
                    getExternalId: Base.getExternalId,
                    navigateToComponent: Base.navigateToComponent,
                    resizeComponent: Base.resizeComponent,
                    Data: Data
                };
            };

            return getNamespaceToExport();

        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


        /***/ },
    /* 3 */
    /*!************************************!*\
     !*** ./js/modules/WindowOrigin.js ***!
     \************************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_RESULT__;/**
         * Represents a Wix popup window origin. A window can be positioned where it is origin is the view port (0,0) or
         * where the origin is another widget (x,y).
         * @memberof Wix
         * @namespace WindowOrigin
         */
        'use strict';

        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return {
                /**
                 * Default position. The popup will be placed inside the browser viewport.
                 * @see WindowOrigin.FIXED
                 * @memberof Wix.WindowOrigin
                 * @since 1.17.0
                 */
                DEFAULT: 'FIXED',

                /**
                 * Fixed position. The popup will be placed inside the browser viewport.
                 * @memberof Wix.WindowOrigin
                 * @since 1.17.0
                 */
                FIXED: 'FIXED',

                /**
                 * Relative position. The popup will be placed relative to the opening widget (Not supported for Page).
                 * @memberof Wix.WindowOrigin
                 * @since 1.17.0
                 */
                RELATIVE: 'RELATIVE',

                /**
                 * Absolute position. The popup will be placed relative to a given x,y coordinates that their origin is the top-left corner of the widget.
                 * @memberof Wix.WindowOrigin
                 * @author mayah@wix.com
                 * @since 1.28.0
                 */
                ABSOLUTE: 'ABSOLUTE'
            };
        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 4 */
    /*!*************************************!*\
     !*** ./js/modules/privates/core.js ***!
     \*************************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! Events */ 5), __webpack_require__(/*! privates/viewMode */ 6), __webpack_require__(/*! privates/postMessage */ 7), __webpack_require__(/*! privates/urlUtils */ 8), __webpack_require__(/*! privates/styles */ 11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Events, viewMode, postMessage, urlUtils, styles) {

            var readyQ;

            var isReady = false;

            var version = "1.61.0";

            var init = function init(opts) {
                postMessage.init(getVersion());
                if (opts && opts.endpointType !== 'worker') {
                    // report ready to Wix
                    postMessage.sendMessage(postMessage.MessageTypes.APP_IS_ALIVE, { version: getVersion() }, styles.init.bind(null, setReady));
                }
                viewMode.init();
            };

            var getDecodedInstance = function getDecodedInstance() {
                var instanceStr = urlUtils.getQueryParameter("instance");
                var encodedInstance = instanceStr.substring(instanceStr.indexOf(".") + 1);
                return JSON.parse(decodeBase64(encodedInstance));
            };

            var getInstanceValue = function getInstanceValue(key) {
                var decodedInstance = getDecodedInstance();
                if (decodedInstance) {
                    return decodedInstance[key] || null;
                }
                return null;
            };

            var decodeBase64 = function decodeBase64(str) {
                return atob(str);
            };

            var setReady = function setReady(styles) {
                isReady = true;
                callReadyQ(styles);
            };

            var callReadyQ = function callReadyQ(styles) {
                if (isReady && readyQ) {
                    for (var i = 0; i < readyQ.length; i++) {
                        readyQ[i].call(null, styles);
                    }
                }
            };

            var addToReadyQ = function addToReadyQ(action) {
                readyQ = readyQ || [];
                readyQ.push(action);
            };

            var getVersion = function getVersion() {

                if (version !== '1.61.0') {
                    return 'unknown';
                }

                return version;
            };

            return {
                init: init,
                addToReadyQ: addToReadyQ,
                getInstanceValue: getInstanceValue
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 5 */
    /*!******************************!*\
     !*** ./js/modules/Events.js ***!
     \******************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_RESULT__;/**
         * @memberof Wix
         * @namespace Events
         */
        'use strict';

        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return {
                /**
                 * Called when a site owner toggles between preview and edit mode in the Wix Editor.
                 * @memberof Wix.Events
                 * @since 1.11.0
                 * @example
                 * {
	     *   editMode: 'editor' or 'preview'
	     * }
                 */
                EDIT_MODE_CHANGE: 'EDIT_MODE_CHANGE',

                /**
                 * Called when a user navigates (in Editor, preview or Viewer) to the page where the TPA component (Widget/Page) is.
                 * @memberof Wix.Events
                 * @since 1.11.0
                 * @deprecated
                 * @example
                 * {
	     *   toPage: 'mainPage',
	     *   fromPage: 'cee5"'
	     * }
                 */
                PAGE_NAVIGATION_CHANGE: 'PAGE_NAVIGATION_CHANGE',

                /**
                 * Issued when the site owner publishes the site (in editor).
                 * @memberof Wix.Events
                 * @since 1.13.0
                 */
                SITE_PUBLISHED: 'SITE_PUBLISHED',

                /**
                 * Issued when the site owner deletes (in editor) a TPA component (Widget/Page).
                 * @memberof Wix.Events
                 * @since 1.13.0
                 */
                COMPONENT_DELETED: 'COMPONENT_DELETED',

                /**
                 * Issued by the Settings endpoint when new settings are applied by the site owner.
                 * @memberof Wix.Events
                 * @since 1.17.0
                 * @example
                 * Custom JSON
                 */
                SETTINGS_UPDATED: 'SETTINGS_UPDATED',

                /**
                 * Signal window placement change
                 * @memberof Wix.Events
                 * @since 1.18.0
                 */
                WINDOW_PLACEMENT_CHANGED: 'WINDOW_PLACEMENT_CHANGED',

                /**
                 * @memberof Wix.Events
                 * @private
                 */
                ON_MESSAGE_RESPONSE: "ON_MESSAGE_RESPONSE",

                /**
                 * @memberof Wix.Events
                 * @since 1.22.0
                 */
                THEME_CHANGE: 'THEME_CHANGE',

                /**
                 * @memberof Wix.Events
                 * @since 1.22.0
                 *
                 */
                STYLE_PARAMS_CHANGE: 'STYLE_PARAMS_CHANGE',

                /**
                 * @memberof Wix.Events
                 * @since 1.25.0
                 * @description
                 * Issued when scroll happens inside the site (not when it happen inside the app iframe).
                 * The event data contains multiple details that helps the app determine it's behaviour considering it's position in the site,
                 * the browser window dimensions and a state.
                 *
                 *  Name          | Type      | Description
                 * ---------------|-----------|------------
                 * scrollTop      | `Number`  | Site's scroll position on the y axis
                 * scrollLeft     | `Number`  | site's scroll position on the x axis
                 * documentHeight | `Number`  | Site's document height
                 * documentWidth  | `Number`  | Site's document width
                 * x              | `Number`  | App offset within the site's page on the x axis (doesn't change)
                 * y              | `Number`  | App offset within the site's page on the y axis (doesn't change)
                 * height         | `Number`  | App height
                 * width          | `Number`  | App width
                 * left           | `Number`  | App top-left offset,within the viewport, from the left
                 * bottom         | `Number`  | App top-left, offset within the viewport, from the bottom
                 * right          | `Number`  | App top-left, offset within the viewport, from the right
                 * top            | `Number`  | App top-left, offset within the viewport, from the top
                 *
                 * @example
                 * {
	     *      "scrollTop": 4,
	     *      "scrollLeft": 0,
	     *      "documentHeight": 724,
	     *      "documentWidth": 1227,
	     *      "x": 124,
	     *      "y": 131,
	     *      "height": 682,
	     *      "width": 978,
	     *      "left": 124.5,
	     *      "bottom": 809,
	     *      "right": 1102.5,
	     *      "top": 127
	     * }
                 */
                SCROLL: 'SCROLL',

                /**
                 * Issued on any page navigation within the Wix site.
                 * @memberof Wix.Events
                 * @since 1.25.0
                 * @example
                 * {
	     *   toPage: 'mainPage',
	     *   fromPage: 'cee5"'
	     * }
                 */
                PAGE_NAVIGATION: 'PAGE_NAVIGATION',

                /**
                 * Issued on any page in navigation within the Wix site. This event is a utility event on top of the PAGE_NAVIGATION event.
                 * @memberof Wix.Events
                 * @since 1.25.0
                 * @example
                 * {
	     *   toPage: 'mainPage',
	     *   fromPage: 'cee5"'
	     * }
                 */
                PAGE_NAVIGATION_IN: 'PAGE_NAVIGATION_IN',

                /**
                 * Issued on any page out navigation within the Wix site. This event is a utility event on top of the PAGE_NAVIGATION event.
                 * @memberof Wix.Events
                 * @since 1.25.0
                 * @example
                 * {
	     *   toPage: 'mainPage',
	     *   fromPage: 'cee5"'
	     * }
                 */
                PAGE_NAVIGATION_OUT: 'PAGE_NAVIGATION_OUT',

                /**
                 * Issued when the site state changed.
                 * @memberof Wix.Events
                 * @since 1.29.0
                 * @example
                 * {
	     *   newState: 'state'
	     * }
                 */
                STATE_CHANGED: 'STATE_CHANGED',

                /**
                 * Issued when the site owner switch between desktop editor and mobile editor.
                 * @memberof Wix.Events
                 * @since 1.45.0
                 * @experimental
                 * @example
                 * {
	     *   deviceType: 'desktop'
	     * }
                 */
                DEVICE_TYPE_CHANGED: 'DEVICE_TYPE_CHANGED'
            };
        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 6 */
    /*!*****************************************!*\
     !*** ./js/modules/privates/viewMode.js ***!
     \*****************************************/
    /***/ function(module, exports, __webpack_require__) {

        'use strict';

        var postMessage = __webpack_require__(/*! privates/postMessage */ 7);
        var urlUtils = __webpack_require__(/*! privates/urlUtils */ 8);
        var currentEditMode;

        var getViewMode = function getViewMode() {
            return currentEditMode || urlUtils.getQueryParameter('viewMode');
        };

        var setViewModeFromHandler = function setViewModeFromHandler() {
            postMessage.sendMessage(postMessage.MessageTypes.GET_VIEW_MODE, {}, function (params) {
                currentEditMode = params && params.editMode;
            });
        };

        var init = function init() {
            // initialize edit mode state tracking
            postMessage.addEventListenerInternal('EDIT_MODE_CHANGE', function (params) {
                currentEditMode = params.editMode;
            });

            setViewModeFromHandler();
        };

        module.exports = {
            init: init,
            getViewMode: getViewMode
        };

        /***/ },
    /* 7 */
    /*!********************************************!*\
     !*** ./js/modules/privates/postMessage.js ***!
     \********************************************/
    /***/ function(module, exports, __webpack_require__) {

        'use strict';

        var urlUtils = __webpack_require__(/*! privates/urlUtils */ 8);
        var utils = __webpack_require__(/*! privates/utils */ 9);
        var Events = __webpack_require__(/*! Events */ 5);
        var reporter = __webpack_require__(/*! privates/reporter */ 10);

        var MessageTypes = {
            REFRESH_APP: 'refreshApp',
            APP_IS_ALIVE: 'appIsAlive',
            APP_STATE_CHANGED: 'appStateChanged',
            CLOSE_WINDOW: 'closeWindow',
            RESIZE_WINDOW: 'resizeWindow',
            SET_WINDOW_PLACEMENT: 'setWindowPlacement',
            GET_WINDOW_PLACEMENT: 'getWindowPlacement',
            OPEN_POPUP: 'openPopup',
            OPEN_MODAL: 'openModal',
            OPEN_MEDIA_DIALOG: 'openMediaDialog',
            SUPER_APPS_OPEN_MEDIA_DIALOG: 'superAppsOpenMediaDialog',
            OPEN_BILLING_PAGE: 'openBillingPage',
            GET_SITE_PAGES: 'getSitePages',
            GET_SITE_COLORS: 'getSiteColors',
            GET_USER_SESSION: 'getUserSession',
            NAVIGATE_TO_PAGE: 'navigateToPage',
            POST_MESSAGE: 'postMessage',
            HEIGHT_CHANGED: 'heightChanged',
            NAVIGATE_TO_STATE: 'navigateToState',
            SM_REQUEST_LOGIN: 'smRequestLogin',
            SM_CURRENT_MEMBER: 'smCurrentMember',
            SITE_INFO: 'siteInfo',
            BOUNDING_RECT_AND_OFFSETS: 'boundingRectAndOffsets',
            SCROLL_TO: 'scrollTo',
            SCROLL_BY: 'scrollBy',
            SET_STYLE_PARAM: 'setStyleParam',
            GET_STYLE_PARAMS: 'getStyleParams',
            REGISTER_EVENT_LISTENER: 'registerEventListener',
            REMOVE_EVENT_LISTENER: 'removeEventListener',
            PUBLISH: 'publish',
            GET_CONTACT_BY_ID: 'getContactById',
            GET_CONTACTS: 'getContacts',
            CREATE_CONTACT: 'createContact',
            GET_ACTIVITY_BY_ID: 'getActivityById',
            GET_ACTIVITIES: 'getActivities',
            POST_ACTIVITY: 'postActivity',
            NAVIGATE_TO_SECTION_PAGE: 'navigateToSectionPage',
            GET_CURRENT_PAGE_ID: 'getCurrentPageId',
            GET_CONTACT_LABELS: 'getContactLabels',
            GET_DASHBOARD_APP_URL: 'getDashboardAppUrl',
            GET_EDITOR_URL: 'getEditorUrl',
            SETTINGS_OPEN_MODAL: 'settingsOpenModal',
            GET_SECTION_URL: 'getSectionUrl',
            OPEN_BILLING_PAGE_FOR_PRODUCT: 'openBillingPageForProduct',
            GET_BILLING_PAGE_FOR_PRODUCT: 'getBillingPageForProduct',
            GET_ACTIVE_BILLING_PACKAGE: 'getActiveBillingPackage',
            GET_BILLING_PACKAGES: 'getBillingPackages',
            ADD_COMPONENT: 'addComponent',
            POST_COUNTERS_REPORT: 'postCountersReport',
            RESIZE_COMPONENT: 'resizeComponent',
            OPEN_SETTINGS_DIALOG: 'openSettingsDialog',
            IS_SUPPORTED: 'isSupported',
            SET_EXTERNAL_ID: 'setExternalId',
            GET_EXTERNAL_ID: 'getExternalId',
            NAVIGATE_TO_COMPONENT: 'navigateToComponent',
            GET_WIX_UPGRADE_URL: 'getWixUpgradeUrl',
            TRACK_APP_UPGRADE: 'trackAppUpgrade',
            RECONCILE_CONTACT: 'reconcileContact',
            GET_INSTALLED_INSTANCE: 'getInstalledInstance',
            GET_VIEW_MODE: 'getViewMode',
            REVALIDATE_SESSION: 'revalidateSession',
            SET_VALUE: 'setValue',
            GET_VALUE: 'getValue',
            REMOVE_VALUE: 'removeValue',
            GET_VALUES: 'getValues',
            OPEN_COLOR_PICKER: 'openColorPicker',
            OPEN_FONT_PICKER: 'openFontPicker'
        };

        var callId = 1;

        var callbacks = {};

        var compId, deviceType;

        var EventsCallbacks = {};

        var version;

        var sendMessage = function sendMessage(msgType, params, callback) {
            if (!msgType) {
                return;
            }
            if (params === null) {
                params = undefined;
            }
            var blob = getBlob(msgType, params, callback);

            var target = parent.postMessage ? parent : parent.document.postMessage ? parent.document : undefined;
            if (target && typeof target !== "undefined") {
                target.postMessage(JSON.stringify(blob), "*");
            }
        };

        var init = function init(_version) {
            // get our comp id
            version = _version;
            compId = urlUtils.getQueryParameter('compId') || '[UNKNOWN]';
            deviceType = urlUtils.getQueryParameter('deviceType') || 'desktop';
            addPostMessageCallback(receiver);
        };

        var addPostMessageCallback = function addPostMessageCallback(callback) {
            window.addEventListener('message', callback, false);
        };

        var receiver = function receiver(event) {
            if (!event || !event.data) {
                return;
            }

            var data = {};
            try {
                data = JSON.parse(event.data);
            } catch (e) {
                return;
            }

            switch (data.intent) {
                case 'TPA_RESPONSE':
                    if (data.callId && callbacks[data.callId]) {
                        callbacks[data.callId](data.res);
                        delete callbacks[data.callId];
                    }
                    break;

                case 'addEventListener':
                    callEventListeners(data);
                    break;

                case 'UI_LIB_RESPONSE':
                    if (data.callId && callbacks[data.callId]) {
                        callbacks[data.callId](data.res);
                    }
                    break;
            }
        };

        var callEventListeners = function callEventListeners(data, typeOfCall) {
            if (EventsCallbacks[data.eventType]) {
                EventsCallbacks[data.eventType].forEach(function (callbackHandler) {
                    callbackHandler.callback.call(this, data.params, typeOfCall);
                });
            }
        };

        var addEventListenerInternal = function addEventListenerInternal(eventKey, callBack, skipValidation, params) {
            if (!skipValidation && (!eventKey || !Events.hasOwnProperty(eventKey))) {
                reporter.reportSdkError('Unsupported event name, ' + eventKey);
                return;
            }
            var id = getCallId();

            EventsCallbacks[eventKey] = EventsCallbacks[eventKey] || [];
            EventsCallbacks[eventKey].push({
                callback: callBack,
                id: id
            });

            //params can be used as override params for the event to add more functionality
            params = params || {};
            params.eventKey = eventKey;

            sendMessage(MessageTypes.REGISTER_EVENT_LISTENER, params, handleAddEventListenerResponse.bind(null, callBack));
            return id;
        };

        var handleAddEventListenerResponse = function handleAddEventListenerResponse(callback, event) {
            if (event.drain) {
                event.data.forEach(function (data) {
                    callback(data);
                }, null);
            }
        };

        var getBlob = function getBlob(msgType) {
            var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            var onResponseCallback = arguments.length <= 2 || arguments[2] === undefined ? function () {} : arguments[2];

            if (utils.isObject(params)) {
                params.version = version;
            } else {
                reporter.reportSdkMsg('Expecting params to be of type Object, ' + typeof params + " given");
            }

            var blob = {
                intent: "TPA2",
                callId: getCallId(),
                type: msgType,
                compId: compId,
                deviceType: deviceType,
                data: params
            };

            if (onResponseCallback) {
                callbacks[blob.callId] = onResponseCallback;
            }

            return blob;
        };

        var getCallId = function getCallId() {
            return callId++;
        };

        var removeEventListenerInternal = function removeEventListenerInternal(eventName, callBackOrId, skipValidation) {
            if (!skipValidation && (!eventName || !Events.hasOwnProperty(eventName))) {
                reporter.reportSdkError('Unsupported event name, ' + eventName);
                return;
            }
            var i = -1;
            var eventCallbacks = EventsCallbacks[eventName];
            if (eventCallbacks) {
                for (var y = 0; y < eventCallbacks.length; y++) {
                    if (eventCallbacks[y].callback === callBackOrId || eventCallbacks[y].id === callBackOrId) {
                        i = y;
                        break;
                    }
                }
                if (i !== -1) {
                    eventCallbacks.splice(i, 1);
                }
            }

            if (i >= 0 && eventCallbacks.length === 0) {
                sendMessage(MessageTypes.REMOVE_EVENT_LISTENER, {
                    eventKey: eventName
                });
            }
        };

        module.exports = {
            init: init,
            sendMessage: sendMessage,
            MessageTypes: MessageTypes,
            getCallId: getCallId,
            addEventListenerInternal: addEventListenerInternal,
            removeEventListenerInternal: removeEventListenerInternal,
            callEventListeners: callEventListeners
        };

        /***/ },
    /* 8 */
    /*!*****************************************!*\
     !*** ./js/modules/privates/urlUtils.js ***!
     \*****************************************/
    /***/ function(module, exports) {

        'use strict';

        var queryMap;

        var getQueryParameter = function getQueryParameter(parameterName) {
            if (!queryMap) {
                queryMap = {};
                var queryString = location.search.substring(1) || '';
                var queryArray = queryString.split('&');

                queryArray.forEach(function (element) {
                    var parts = element.split('=');
                    queryMap[parts[0]] = decodeURIComponent(parts[1]);
                });
            }
            return queryMap[parameterName] || null;
        };

        module.exports = {
            getQueryParameter: getQueryParameter
        };

        /***/ },
    /* 9 */
    /*!**************************************!*\
     !*** ./js/modules/privates/utils.js ***!
     \**************************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            'use strict';

            var isString = function isString(arg) {
                return typeof arg === "string";
            };

            var isFunction = function isFunction(arg) {
                return typeof arg === "function";
            };

            var isObject = function isObject(arg) {
                return typeof arg === "object";
            };

            var isNumber = function isNumber(arg) {
                return Object.prototype.toString.call(arg) === '[object Number]';
            };

            var isPercentValue = function isPercentValue(value) {
                return Object.prototype.toString.call(value) === '[object String]' && /^[0-9]+%$/.test(value);
            };

            var has = function has(obj, key) {
                return Boolean(obj) && isObject(obj) && hasOwnProperty.call(obj, key);
            };

            var isBoolean = function isBoolean(obj) {
                return obj === true || obj === false || Object.prototype.toString.call(obj) === '[object Boolean]';
            };

            var isArray = function isArray(value) {
                return Array.isArray(value);
            };

            var protocol = function protocol() {
                return location.protocol;
            };

            var onDocumentReady = function onDocumentReady(callback) {
                //from zepto src
                var readyRE = /complete|loaded|interactive/;
                if (readyRE.test(document.readyState) && document.body) {
                    callback();
                } else {
                    document.addEventListener('DOMContentLoaded', function () {
                        callback();
                    }, false);
                }
            };

            var shallowCloneObject = function shallowCloneObject(obj, ignoreKeys) {
                var newObj = {};
                for (var p in obj) {
                    if (obj.hasOwnProperty(p) && ignoreKeys.indexOf(p) === -1) {
                        newObj[p] = obj[p];
                    }
                }
                return newObj;
            };

            return {
                isString: isString,
                isFunction: isFunction,
                isObject: isObject,
                isNumber: isNumber,
                isPercentValue: isPercentValue,
                isArray: isArray,
                has: has,
                isBoolean: isBoolean,
                protocol: protocol,
                onDocumentReady: onDocumentReady,
                shallowCloneObject: shallowCloneObject
            };
        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 10 */
    /*!*****************************************!*\
     !*** ./js/modules/privates/reporter.js ***!
     \*****************************************/
    /***/ function(module, exports) {

        'use strict';

        var reportSdkError = function reportSdkError(errorMessage) {
            var error = new TypeError('Wix SDK: ' + errorMessage);
            throw error.stack;
        };

        var reportSdkMsg = function reportSdkMsg(message) {
            log(new TypeError('Wix SDK: ' + message));
        };

        var log = function log(text) {
            if (window.console && window.console.log) {
                window.console.log(text);
            }
        };

        module.exports = {
            reportSdkError: reportSdkError,
            reportSdkMsg: reportSdkMsg
        };

        /***/ },
    /* 11 */
    /*!***************************************!*\
     !*** ./js/modules/privates/styles.js ***!
     \***************************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! privates/postMessage */ 7), __webpack_require__(/*! privates/utils */ 9), __webpack_require__(/*! Events */ 5), __webpack_require__(/*! privates/templateUtils */ 12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (postMessage, utils, Events, templateUtils) {

            var styles = {
                siteColors: null,
                siteTextPresets: null,
                style: null,
                fontsMeta: null,
                fontsSpriteUrl: null,
                mappedColors: null,
                mappedFonts: null
            };

            var getFirstOrFallbackStyleParamValue = function getFirstOrFallbackStyleParamValue(match, p1, offset, fullString) {
                var optionsOrder = p1.trim().split(' ');
                for (var i = 0; i < optionsOrder.length; i++) {
                    if (utils.isObject(styles.mappedFonts[optionsOrder[i]]) && utils.isString(styles.mappedFonts[optionsOrder[i]].value)) {
                        return styles.mappedFonts[optionsOrder[i]].value;
                    }

                    if (utils.isObject(styles.mappedColors[optionsOrder[i]]) && utils.isString(styles.mappedColors[optionsOrder[i]].value)) {
                        return styles.mappedColors[optionsOrder[i]].value;
                    }

                    if (typeof styles.mappedNumbers[optionsOrder[i]] !== 'undefined') {
                        return styles.mappedNumbers[optionsOrder[i]];
                    }

                    if (utils.isObject(styles.siteTextPresets && styles.siteTextPresets[optionsOrder[i]]) && utils.isString(styles.siteTextPresets[optionsOrder[i]].value)) {
                        return styles.siteTextPresets[optionsOrder[i]].value;
                    }

                    if (i === optionsOrder.length - 1) {
                        return optionsOrder[i];
                    }
                }
                return p1;
            };

            var updateCache = function updateCache(style) {
                if (style.style && style.style.googleFontsCssUrl) {
                    templateUtils.appendOrUpdateGoogleFontsLink(style.style.googleFontsCssUrl);
                }
                templateUtils.appendFontsLinks(style);
                mapSiteStyles(style);
            };

            var normalizeColorThemeName = function normalizeColorThemeName(styles) {
                for (var color in styles.colors) {
                    if (styles.colors.hasOwnProperty(color) && styles.colors[color].hasOwnProperty('themeName')) {
                        styles.colors[color].themeName = templateUtils.getColorReferenceByColorName(styles.colors[color].themeName);
                    }
                }
                return styles;
            };

            var mapSiteStyleData = function mapSiteStyleData(newStyle) {
                styles.mappedColors = templateUtils.mapColors(styles.siteColors, newStyle.colors);
                styles.mappedFonts = templateUtils.mapFonts(newStyle.fonts);
                styles.mappedNumbers = templateUtils.mapNumbers(newStyle.numbers);
                return styles;
            };

            var mapSiteStyles = function mapSiteStyles(appStyle) {
                styles.siteColors = appStyle.siteColors ? appStyle.siteColors : styles.siteColors;
                styles.siteTextPresets = appStyle.siteTextPresets ? appStyle.siteTextPresets : styles.siteTextPresets;
                styles.fontsMeta = appStyle.fonts && appStyle.fonts.fontsMeta ? appStyle.fonts.fontsMeta : styles.fontsMeta;
                styles.fontsSpriteUrl = appStyle.fonts && appStyle.fonts.imageSpriteUrl ? appStyle.fonts.imageSpriteUrl : styles.fontsSpriteUrl;
                styles.style = appStyle.style ? normalizeColorThemeName(appStyle.style) : normalizeColorThemeName(appStyle);
                return mapSiteStyleData(appStyle.style || appStyle);
            };

            var onThemeChange = function onThemeChange(style) {
                updateCache(style);
                postMessage.callEventListeners({
                    params: styles.style,
                    eventType: Events.STYLE_PARAMS_CHANGE
                }, 'internal');
            };

            var onStyleParamChange = function onStyleParamChange(style, typeOfCall) {
                if (typeOfCall !== 'internal') {
                    updateCache(style);
                }
                templateUtils.evalWixStyleTemplates(getFirstOrFallbackStyleParamValue);
            };

            var init = function init(onReady, style) {
                utils.onDocumentReady(function () {
                    templateUtils.insertStyleReset();
                    postMessage.addEventListenerInternal(Events.THEME_CHANGE, onThemeChange);
                    postMessage.addEventListenerInternal(Events.STYLE_PARAMS_CHANGE, onStyleParamChange);
                    onThemeChange(style);
                    onReady(style);
                });
            };

            return {
                init: init,
                onThemeChange: onThemeChange,
                onStyleParamChange: onStyleParamChange,
                updateStylesCache: updateCache,
                mapSiteStyles: mapSiteStyles,
                getFirstOrFallbackStyleParamValue: getFirstOrFallbackStyleParamValue,
                Cache: styles
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 12 */
    /*!**********************************************!*\
     !*** ./js/modules/privates/templateUtils.js ***!
     \**********************************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! privates/core */ 4), __webpack_require__(/*! privates/utils */ 9)], __WEBPACK_AMD_DEFINE_RESULT__ = function (core, utils) {

            'use strict';
            var WIX_STYLE_ATTRIBUTE = 'wix-style';
            var TPA_DEV_STYLES_PREFIX = 'style.';
            var PRIME_COLORS_REFERENCES = ['white/black', 'black/white', 'primery-1', 'primery-2', 'primery-3'];
            var NON_PRIME_COLORS_PREFIX = 'color-';

            var googleCssFonts = {
                link: null
            };
            var queryMap = null;

            var insertStyleReset = function insertStyleReset() {
                var styleResetElement = document.createElement('style');
                styleResetElement.setAttribute(WIX_STYLE_ATTRIBUTE, '');
                styleResetElement.textContent = ".Title{ {{Title}} } .Menu{ {{Menu}} } .Page-title{ {{Page-title}} } .Heading-XL{ {{Heading-XL}} } .Heading-L{ {{Heading-L}} } .Heading-M{ {{Heading-M}} } .Heading-S{ {{Heading-S}} } .Body-L{ {{Body-L}} } .Body-M{ {{Body-M}} } .Body-S{ {{Body-S}} } .Body-XS{ {{Body-XS}} } }";
                document.getElementsByTagName('head')[0].appendChild(styleResetElement);
            };

            var getColorReferenceByColorName = function getColorReferenceByColorName(colorName) {
                var editorIndex = Number(colorName.split('_').pop());
                if (editorIndex <= 5) {
                    return PRIME_COLORS_REFERENCES[editorIndex - 1];
                } else if (editorIndex > 10) {
                    return NON_PRIME_COLORS_PREFIX + (editorIndex - 10);
                }
            };

            var mapColors = function mapColors(siteColors, tpaColors) {
                var colorMap = {},
                    ref;
                for (var i = 0; i < siteColors.length; i++) {
                    ref = getColorReferenceByColorName(siteColors[i].name);
                    siteColors[i].reference = ref;
                    colorMap[ref] = siteColors[i];
                }
                for (var color in tpaColors) {
                    if (tpaColors.hasOwnProperty(color)) {
                        colorMap[TPA_DEV_STYLES_PREFIX + color] = tpaColors[color];
                    }
                }
                return colorMap;
            };

            var mapFonts = function mapFonts(fonts) {
                var mappedFonts = {};
                for (var font in fonts) {
                    if (fonts.hasOwnProperty(font)) {
                        mappedFonts['style.' + font] = fonts[font];
                    }
                }
                return mappedFonts;
            };

            var mapNumbers = function mapNumbers(numbers) {
                var mappedNumbers = {};
                for (var number in numbers) {
                    if (numbers.hasOwnProperty(number)) {
                        mappedNumbers['style.' + number] = numbers[number];
                    }
                }
                return mappedNumbers;
            };

            var getWixStyleElements = function getWixStyleElements() {
                var styles = [];
                [].forEach.apply(document.getElementsByTagName('style'), [function (style) {
                    if (style.hasAttribute(WIX_STYLE_ATTRIBUTE)) {
                        styles.push(style);
                    }
                }]);
                return styles;
            };

            var getQueryParameter = function getQueryParameter(parameterName) {
                if (!queryMap) {
                    queryMap = {};
                    var queryString = location.search.substring(1) || '';
                    var queryArray = queryString.split('&');

                    queryArray.forEach(function (element) {
                        var parts = element.split('=');
                        queryMap[parts[0]] = decodeURIComponent(parts[1]);
                    });
                }
                return queryMap[parameterName] || null;
            };

            var evalTemplate = function evalTemplate(template, replaceCallback) {
                var mediaType = getQueryParameter("deviceType") || "desktop";
                template = applyWixMediaQuery(template, mediaType);
                return template.replace(/\{{2}([^}|^\{]*)\}{2}/gmi, replaceCallback);
            };

            var evalWixStyleTemplates = function evalWixStyleTemplates(matchFunction) {
                getWixStyleElements().forEach(function (style) {
                    style.originalTemplate = style.originalTemplate || style.textContent;
                    style.textContent = evalTemplate(style.originalTemplate, matchFunction);
                });
            };

            var scheduleToRemoveOldGoogleFontsLink = function scheduleToRemoveOldGoogleFontsLink() {
                var elToRemove = googleCssFonts.link;
                setTimeout(function () {
                    if (elToRemove.parentNode) {
                        elToRemove.parentNode.removeChild(elToRemove);
                    }
                }, 5000);
            };

            var appendOrUpdateGoogleFontsLink = function appendOrUpdateGoogleFontsLink(url) {
                if (!url) {
                    return;
                }
                if (googleCssFonts.link) {
                    if (googleCssFonts.link.getAttribute('href') === url) {
                        return;
                    }
                    scheduleToRemoveOldGoogleFontsLink();
                }
                googleCssFonts.link = appendStyleLinkToHead(url, 'wix-google-fonts');
            };

            var appendStyleLinkToHead = function appendStyleLinkToHead(url, id) {
                var head = document.getElementsByTagName('head')[0];
                var link = document.createElement('link');
                link.setAttribute('type', 'text/css');
                link.setAttribute('rel', 'stylesheet');
                link.setAttribute('href', url);
                if (utils.isString(id)) {
                    link.id = id;
                }
                head.appendChild(link);
                return link;
            };

            var appendFontsLinks = function appendFontsLinks(styles) {
                var fonts = styles.fonts;
                if (!fonts) {
                    return;
                }
                var links = document.getElementsByTagName('link');
                fonts.cssUrls = fonts.cssUrls || [];
                fonts.cssUrls.forEach(function (url) {
                    for (var i = 0; i < links.length; i++) {
                        if (links[i].getAttribute('href') === url) {
                            return;
                        }
                    }
                    appendStyleLinkToHead(url);
                });
            };

            var findEndOfMediaQueryIndex = function findEndOfMediaQueryIndex(startIndex, styleTpl) {
                var memIndex = 0;
                var index = startIndex;
                var currentChar;
                for (; index < styleTpl.length; index++) {
                    currentChar = styleTpl.charAt(index);
                    if (currentChar === '{') {
                        memIndex += 1;
                    }
                    if (currentChar === '}') {
                        memIndex -= 1;
                    }
                    if (memIndex < 0) {
                        index++;
                        break;
                    }
                }
                return index - 1;
            };

            var getStartOfMediaQueryIndex = function getStartOfMediaQueryIndex(match, offset) {
                return offset + match.index + match[0].length;
            };

            var getNonMediaQueryTextLength = function getNonMediaQueryTextLength(match, currentIndex) {
                return match.index - currentIndex;
            };

            var applyWixMediaQuery = function applyWixMediaQuery(cssText, currentMediaType) {
                var target = "";
                var currentIndex = 0;
                var mediaRegExp = /@media\s*\(\s*wix-device-type\s*:\s*(\w+)\s*\)\s*\{/m;
                var match;

                while (currentIndex < cssText.length) {
                    match = cssText.substr(currentIndex).match(mediaRegExp);
                    if (match) {

                        target += cssText.substr(currentIndex, getNonMediaQueryTextLength(match, currentIndex));
                        var mediaQueryContentStartIndex = getStartOfMediaQueryIndex(match, currentIndex);
                        var mediaQueryCloseIndex = findEndOfMediaQueryIndex(mediaQueryContentStartIndex, cssText);

                        if (match[1] === currentMediaType) {
                            var mediaQueryLength = mediaQueryCloseIndex - mediaQueryContentStartIndex;
                            target += '/*** wix-media - @media: (' + currentMediaType + ') ***/';
                            target += cssText.substr(mediaQueryContentStartIndex, mediaQueryLength);
                        }

                        currentIndex = mediaQueryCloseIndex + 1;
                    } else {
                        target += cssText.substr(currentIndex, cssText.length - currentIndex);
                        break;
                    }
                }

                return target;
            };

            return {
                googleCssFonts: googleCssFonts,
                applyWixMediaQuery: applyWixMediaQuery,
                evalTemplate: evalTemplate,
                getColorReferenceByColorName: getColorReferenceByColorName,
                mapColors: mapColors,
                mapFonts: mapFonts,
                mapNumbers: mapNumbers,
                getWixStyleElements: getWixStyleElements,
                insertStyleReset: insertStyleReset,
                evalWixStyleTemplates: evalWixStyleTemplates,
                appendFontsLinks: appendFontsLinks,
                appendOrUpdateGoogleFontsLink: appendOrUpdateGoogleFontsLink
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 13 */
    /*!*******************************!*\
     !*** ./js/modules/Billing.js ***!
     \*******************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
         * Functions and objects relating to the purchasing and billing process. To define products for purchase within your app, go to the Features section of the Wix Developer app registration <a href="http://dev.wix.com" target="_blank">dev.wix.com</a>.
         * @memberof Wix
         * @namespace Wix.Billing
         */
        'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! privates/postMessage */ 7), __webpack_require__(/*! privates/utils */ 9), __webpack_require__(/*! privates/responseHandlers */ 14), __webpack_require__(/*! privates/reporter */ 10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (postMessage, utils, responseHandlers, reporter) {

            var openBillingPageForProduct = function openBillingPageForProduct(vendorProductId, cycle, onError) {
                if (!utils.isString(vendorProductId)) {
                    reporter.reportSdkError('Missing mandatory argument - vendorProductId must be a string');
                    return;
                }
                if (!utils.has(this.Cycle, cycle)) {
                    reporter.reportSdkError('Missing mandatory argument - cycle must be one of Wix.Billing.Cycle');
                    return;
                }

                var args = {
                    vendorProductId: vendorProductId,
                    cycle: cycle
                };

                postMessage.sendMessage(postMessage.MessageTypes.OPEN_BILLING_PAGE_FOR_PRODUCT, args, onError);
            };

            var getBillingPageForProduct = function getBillingPageForProduct(vendorProductId, cycle, onSuccess, onError) {
                if (!utils.isString(vendorProductId)) {
                    reporter.reportSdkError('Missing mandatory argument - vendorProductId must be a string');
                    return;
                }
                if (!utils.has(this.Cycle, cycle)) {
                    reporter.reportSdkError('Missing mandatory argument - cycle must be one of Wix.Billing.Cycle');
                    return;
                }

                if (!utils.isFunction(onSuccess)) {
                    reporter.reportSdkError('Missing mandatory argument - onSuccess must be a function');
                    return;
                }

                var args = {
                    vendorProductId: vendorProductId,
                    cycle: cycle
                };

                var onComplete = function onComplete(result) {
                    responseHandlers.handleDataResponse(result, onSuccess, onError);
                };

                postMessage.sendMessage(postMessage.MessageTypes.GET_BILLING_PAGE_FOR_PRODUCT, args, onComplete);
            };

            var getBillingPackages = function getBillingPackages(vendorProductIds, onSuccess, onError) {
                if (utils.isFunction(vendorProductIds)) {
                    onSuccess = vendorProductIds;
                    vendorProductIds = undefined;
                }

                if (!utils.isFunction(onSuccess)) {
                    reporter.reportSdkError('Missing mandatory argument - onSuccess must be a function');
                    return;
                }

                var args = {
                    vendorProductIds: vendorProductIds
                };

                var onComplete = function onComplete(result) {
                    responseHandlers.handleDataResponse(result, onSuccess, onError);
                };

                postMessage.sendMessage(postMessage.MessageTypes.GET_BILLING_PACKAGES, args, onComplete);
            };

            var getActiveBillingPackage = function getActiveBillingPackage(onSuccess, onError) {
                if (!utils.isFunction(onSuccess)) {
                    reporter.reportSdkError('Missing mandatory argument - onSuccess must be a function');
                    return;
                }

                var onComplete = function onComplete(result) {
                    responseHandlers.handleDataResponse(result, onSuccess, onError);
                };

                postMessage.sendMessage(postMessage.MessageTypes.GET_ACTIVE_BILLING_PACKAGE, undefined, onComplete);
            };

            return {
                /**
                 * @enum
                 * @memberof Wix.Billing
                 * @since 1.37.0
                 */
                Cycle: {
                    MONTHLY: 'MONTHLY',
                    YEARLY: 'YEARLY',
                    ONE_TIME: 'ONE_TIME'
                },

                /**
                 * Opens the Wix billing page in a new window with information about the product and cycle requested. This API is internal and works with the Upgrade button component found in the <a href="http://wix.github.io/wix-ui-lib/#Upgrade-entry" target="_blank">UI Lib.</a>
                 *
                 * @function
                 * @memberof Wix.Billing
                 * @author lior.shefer@wix.com
                 * @since 1.37.0
                 * @private
                 * @param {String} vendorProductId The vendor product id associated with the initiated purchase.
                 * @param {Wix.Billing.Cycle} cycle The billing cycle.
                 * @param {Function} [onError] A callback error function. An error might be a result of a wrong cycle, missing cycle or bad vendor product Id.
                 * missing cycle or bad productId.
                 *
                 * @example
                 * Wix.Billing.openBillingPageForProduct('vendorProductId', Wix.Billing.Cycle.MONTHLY, function () {
	         *      //handle error
	         * });
                 *
                 */
                openBillingPageForProduct: openBillingPageForProduct,

                /**
                 * Returns a link to Wix Billing page with information about the product and cycle requested.
                 *
                 * @function
                 * @memberof Wix.Billing
                 * @author lior.shefer@wix.com
                 * @since 1.37.0
                 * @param {String} vendorProductId Vendor product id as detailed in the Features section of the Wix Developer App Registration <a href="http://dev.wix.com" target="_blank">dev.wix.com</a>
                 * @param {Wix.Billing.Cycle} cycle The billing cycle.
                 * @param {Function} onSuccess A callback function, returns a link the Wix billing page with information about the product and cycle requested.
                 * @param {Function} [onError] A callback error function, Error is wrong cycle,
                 * missing cycle or bad productId.
                 *
                 * @example
                 * var onError = function () {
	         *  //handle the error
	         * };
                 * Wix.Billing.getBillingPageForProduct('vendorProductId', Wix.Billing.Cycle.MONTHLY, function () {
	         *      //handle return value i.e., //https://premium.wix.com/...
	         * }, onError);
                 *
                 */
                getBillingPageForProduct: getBillingPageForProduct,

                /**
                 * Returns an Array of objects containing product and pricing info. As is defined in the Features section of the Wix Developer App Registration <a href="http://dev.wix.com" target="_blank">dev.wix.com</a>
                 *
                 * @function
                 * @memberof Wix.Billing
                 * @author lior.shefer@wix.com
                 * @since 1.37.0
                 * @param {Array} [vendorProductIds] A list of vendor product ids (each representing a billing package), as detailed in the Features section of the Wix Developer App Registration <a href="http://dev.wix.com" target="_blank">dev.wix.com</a>
                 * @param {Function} onSuccess A callback function to receive the product info.
                 * @param {Function} [onError] A callback error function.
                 *
                 * @return {Array} Array of Objects containing the product info:
                 *
                 *  Name         | Type                 | Description
                 * --------------|----------------------|------------
                 * prices        | `Array`              | -
                 * price         | `Object`             | Name           | Type      | Description
                 * -             |  -                   | value          |`String`   | The product price.
                 * -             |  -                   | currencyCode   |`String`   | The product payment currency code.
                 * -             |  -                   | currencySymbol |`String`   | The product payment currency symbol.
                 * -             |  -                   | cycle          |[Wix.Billing.Cycle](Wix.Billing.html#Cycle)  | The product payment cycle
                 *
                 * @example
                 * var onError = function () {
	         *  //handle the error
	         * };
                 * var onSuccess = function (data) {
	         *  //handle onSuccess
	         *  //sample data schema:
	         *  [{
	         *     id: <vendorProductId>,
	         *     prices: [
	         *     {
	        *       value : '3.99',
	        *       currencyCode: 'USD',
	         *       currencySymbol: '&#36;',
	         *       cycle: 'MONTHLY'
	         *     }]
	         *  }]
	         *
	         * };
                 * Wix.Billing.getBillingPackages(onSuccess, onError);
                 *
                 */
                getBillingPackages: getBillingPackages

                /**
                 * Gets the current billing package information. This includes productId and cycle.
                 *
                 * @function
                 * @memberof Wix.Billing
                 * @author lior.shefer@wix.com
                 * @since 1.37.0
                 * @param {Function} onSuccess A callback function to receive the product info.
                 * @param {Function} [onError] A callback error function.
                 *
                 * @example
                 * var onError = function () {
	         *  //handle the error
	         * };
                 * var onSuccess = function () {
	         *  //handle callback
	         * };
                 * Wix.Billing.getActiveBillingPackage(onSuccess, onError);
                 *
                 */
                //getActiveBillingPackage: getActiveBillingPackage
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 14 */
    /*!*************************************************!*\
     !*** ./js/modules/privates/responseHandlers.js ***!
     \*************************************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! Error */ 15), __webpack_require__(/*! WixDataCursor */ 16)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Error, WixDataCursor) {

            var getWixError = function getWixError(errorCode) {
                var wixErrorMessage = Error.WIX_ERROR;

                switch (errorCode) {
                    case 404:
                        wixErrorMessage = Error.NOT_FOUND;
                        break;
                    case 400:
                        wixErrorMessage = Error.BAD_REQUEST;
                        break;
                    case 'INVALID_SCHEMA':
                        wixErrorMessage = Error.INVALID_SCHEMA;
                        break;
                }

                return wixErrorMessage;
            };

            var handleDataResponse = function handleDataResponse(response, onSuccess, onFailure) {
                if (response.error) {
                    var wixErrorMessage = this.getWixError(response.error.errorCode);
                    if (onFailure) {
                        onFailure(wixErrorMessage);
                    }
                } else {
                    onSuccess(response.data);
                }
            };

            var handleCursorResponse = function handleCursorResponse(response, onSuccess, onFailure, messageType, options) {
                if (!response.error) {
                    var cursor = new WixDataCursor(messageType, response.data.results, response.data.total, response.data.pageSize);
                    cursor.setNextCursor(response.data.nextCursor);
                    cursor.setPreviousCursor(response.data.previousCursor);
                    cursor.setOptions(options);
                    onSuccess(cursor);
                } else {
                    var wixErrorMessage = this.getWixError(response.error.errorCode);
                    if (onFailure) {
                        onFailure(wixErrorMessage);
                    }
                }
            };

            return {
                getWixError: getWixError,
                handleDataResponse: handleDataResponse,
                handleCursorResponse: handleCursorResponse
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 15 */
    /*!*****************************!*\
     !*** ./js/modules/Error.js ***!
     \*****************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_RESULT__;/**
         * This is the description for the Error namespace.
         * @memberof Wix
         * @namespace Wix.Error
         */
        'use strict';

        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return {
                /**
                 * Indicates an unknown error happened on Wix side which could not be recovered. When handling this error, you can try again or prompt the user with an error dialog.
                 * @memberof Wix.Error
                 * @since 1.27.0
                 */
                WIX_ERROR: 'WIX_ERROR',

                /**
                 * Indicates the activity could not be found.
                 * @memberof Wix.Error
                 * @since 1.27.0
                 */
                NOT_FOUND: 'NOT_FOUND',

                /**
                 * Indicates the dates you provided are in the wrong format or are not valid date ranges.
                 * @memberof Wix.Error
                 * @since 1.27.0
                 */
                BAD_REQUEST: 'BAD_REQUEST',

                /**
                 * @memberof Wix.Error
                 * @since 1.27.0
                 */
                INVALID_SCHEMA: 'INVALID_SCHEMA',

                /**
                 * @memberof Wix.Error
                 * @since 1.46.0
                 */
                FORBIDDEN: 'FORBIDDEN'
            };
        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 16 */
    /*!*************************************!*\
     !*** ./js/modules/WixDataCursor.js ***!
     \*************************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
         * @namespace WixDataCursor
         */
        'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! privates/postMessage */ 7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (postMessage) {
            var _callService = function _callService(onSuccess, onFailure, cursorId) {
                var that = this;
                var onComplete = function onComplete(response) {
                    if (response.error) {
                        onFailure(response);
                    } else {
                        that._nextCursor = response.data.nextCursor;
                        that._previousCursor = response.data.previousCursor;
                        that._data = response.data.results;
                        onSuccess(response.data.results);
                    }
                };

                var args = {
                    cursorId: cursorId,
                    options: this._options
                };

                postMessage.sendMessage(this._serviceMessageType, args, onComplete);
            };

            function WixDataCursor(serviceMessageType, data, total, pageSize) {
                if (typeof serviceMessageType !== 'string') {
                    throw new TypeError('Mandatory parameters are missing.');
                }

                this._serviceMessageType = serviceMessageType;
                this._data = data || [];
                this._nextCursor = null;
                this._previousCursor = null;
                this._total = total;
                this._pageSize = pageSize;
                this._options = {};
            }

            /**
             * @memberof WixDataCursor
             * @returns {boolean} If WixDataCursor has more data.
             */
            WixDataCursor.prototype.hasNext = function hasNext() {
                return !!this._nextCursor;
            };

            /**
             * @memberof WixDataCursor
             * @returns {boolean} If WixDataCursor has previous data.
             */
            WixDataCursor.prototype.hasPrevious = function hasPrevious() {
                return !!this._previousCursor;
            };

            /**
             * @memberof WixDataCursor
             * @param onSuccess
             * @param onFailure
             * @returns {boolean} The next WixDataCursor object.
             */
            WixDataCursor.prototype.next = function next(onSuccess, onFailure) {
                if (this.hasNext()) {
                    _callService.call(this, onSuccess, onFailure, this._nextCursor);
                } else {
                    onSuccess([]);
                }
            };

            /**
             * @memberof WixDataCursor
             * @param onSuccess
             * @param onFailure
             * @returns {boolean} The previous WixDataCursor object.
             */
            WixDataCursor.prototype.previous = function previous(onSuccess, onFailure) {
                if (this.hasPrevious()) {
                    _callService.call(this, onSuccess, onFailure, this._previousCursor);
                } else {
                    onSuccess([]);
                }
            };

            /**
             * @memberof WixDataCursor
             * @private
             * @param {Object} data
             */
            WixDataCursor.prototype.setData = function setData(data) {
                this._data = data;
            };

            /**
             * @memberof WixDataCursor
             * @private
             * @returns {WixDataCursor[]}
             */
            WixDataCursor.prototype.getData = function getData() {
                return this._data;
            };

            /**
             * @memberof WixDataCursor
             * @private
             * @param {WixDataCursor} cursor
             */
            WixDataCursor.prototype.setNextCursor = function setNextCursor(cursor) {
                this._nextCursor = cursor;
            };

            /**
             * @memberof WixDataCursor
             * @private
             * @param {WixDataCursor} cursor
             */
            WixDataCursor.prototype.setPreviousCursor = function setPreviousCursor(cursor) {
                this._previousCursor = cursor;
            };

            /**
             * @memberof WixDataCursor
             * @returns {Number} The total number of Object in the cursor.
             */
            WixDataCursor.prototype.getTotal = function getTotal() {
                return this._total;
            };

            /**
             * @memberof WixDataCursor
             * @returns {Number} The number of the cursor page size.
             */
            WixDataCursor.prototype.getPageSize = function getPageSize() {
                return this._pageSize;
            };

            /**
             * @memberof WixDataCursor
             * @param {Object} options
             * @private
             * @returns Sets the cursor options object.
             */
            WixDataCursor.prototype.setOptions = function setOptions(options) {
                this._options = options;
            };

            return WixDataCursor;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 17 */
    /*!**********************************!*\
     !*** ./js/modules/Activities.js ***!
     \**********************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
         * @memberof Wix
         * @namespace Activities
         */
        'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! privates/postMessage */ 7), __webpack_require__(/*! privates/responseHandlers */ 14), __webpack_require__(/*! Utils */ 18), __webpack_require__(/*! privates/reporter */ 10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (postMessage, responseHandlers, utils, reporter) {

            var postActivity = function postActivity(activity, onSuccess, onFailure) {
                if (utils.getViewMode() !== "site") {
                    reporter.reportSdkError('Invalid view mode. This function cannot be called in editor/preview mode. Supported view mode is: [site]');
                    return;
                }
                var args = {
                    activity: activity
                };

                var onComplete = null;
                if (onSuccess || onFailure) {
                    onComplete = function (result) {
                        if (result.status && onSuccess) {
                            onSuccess(result.response);
                        } else if (onFailure) {
                            onFailure(result.response);
                        }
                    };
                }
                postMessage.sendMessage(postMessage.MessageTypes.POST_ACTIVITY, args, onComplete);
            };

            var getActivities = function getActivities(onSuccess, onFailure, query) {
                if (typeof onSuccess !== 'function') {
                    reporter.reportSdkError('Missing mandatory argument - onSuccess, must be a function');
                    return;
                }

                if (typeof onFailure !== 'function') {
                    reporter.reportSdkError('Missing mandatory argument - onFailure, must be a function');
                    return;
                }

                var args = {
                    query: query
                };

                var onComplete = function onComplete(response) {
                    responseHandlers.handleCursorResponse(response, onSuccess, onFailure, postMessage.MessageTypes.GET_ACTIVITIES);
                };

                postMessage.sendMessage(postMessage.MessageTypes.GET_ACTIVITIES, args, onComplete);
            };

            var getActivityById = function getActivityById(id, onSuccess, onFailure) {
                if (typeof id !== 'string') {
                    reporter.reportSdkError('Missing mandatory argument - id, must be a string');
                    return;
                }
                if (typeof onSuccess !== 'function') {
                    reporter.reportSdkError('Missing mandatory argument - onSuccess, must be a function');
                    return;
                }
                if (typeof onFailure !== 'function') {
                    reporter.reportSdkError('Missing mandatory argument - onFailure, must be a function');
                    return;
                }

                var args = {
                    id: id
                };

                var onComplete = function onComplete(result) {
                    responseHandlers.handleDataResponse(result, onSuccess, onFailure);
                };

                postMessage.sendMessage(postMessage.MessageTypes.GET_ACTIVITY_BY_ID, args, onComplete);
            };

            var getUserSessionToken = function getUserSessionToken(callback) {
                postMessage.sendMessage(postMessage.MessageTypes.GET_USER_SESSION, null, callback);
            };
            return {

                /**
                 * A collection of ActivityType objects
                 * @enum
                 * @memberof Wix.Activities
                 * @readonly
                 * @since 1.25.0
                 */
                Type: {
                    /**
                     * Indicates a contact form was filled out.
                     * @constant
                     */
                    CONTACT_CONTACT_FORM: 'contact/contact-form',
                    /**
                     * indicates a subscription form was filled
                     * @constant
                     */
                    SUBSCRIPTION_FORM: 'contact/subscription-form',
                    /**
                     * A schema for creating a contact
                     * @constant
                     */
                    CONTACT_CREATE: 'contacts/create',
                    /**
                     * Indicates a conversion with a contact was completed.
                     * @constant
                     */
                    CONVERSION_COMPLETE: 'conversion/complete',
                    /**
                     * indicates a download from the site
                     * @constant
                     */
                    DOWNLOADS_DOWNLOADED: 'downloads/downloaded',
                    /**
                     * indicates an event has been created, updated
                     * @constant
                     */
                    EVENTS_EVENT_UPDATE: 'events/event-update',
                    /**
                     * indicates an item was added to a cart through ecommerce
                     * @constant
                     */
                    ECOMMERCE_CART_ADD: 'e_commerce/cart-add',
                    /**
                     * indicates an item was removed from the cart through ecommerce
                     * @constant
                     */
                    ECOMMERCE_CART_REMOVE: 'e_commerce/cart-remove',
                    /**
                     * indicates a cart was checked out through ecommerce
                     * @constant
                     */
                    ECOMMERCE_CART_CHECKOUT: 'e_commerce/cart-checkout',
                    /**
                     * indicates a cart has been abandoned through ecommerce
                     * @constant
                     */
                    ECOMMERCE_CART_ABANDON: 'e_commerce/cart-abandon',
                    /**
                     * Indicates a purchase was made through ecommerce.
                     * @constant
                     */
                    ECOMMERCE_PURCHASE: 'e_commerce/purchase',
                    /**
                     * Indicates a message was sent to a contact.
                     * @constant
                     */
                    SEND_MESSAGE: 'messaging/send',
                    /**
                     * Indicates a contact liked an album of music.
                     * @constant
                     */
                    ALBUM_FAN: 'music/album-fan',
                    /**
                     * Indicates a contact shared an album of music.
                     * @constant
                     */
                    ALBUM_SHARE: 'music/album-share',
                    /**
                     * indicates a contact played an album to completion.
                     * @constant
                     */
                    ALBUM_PLAYED: 'music/album-played',
                    /**
                     * Indicates a contact viewed the lyrics of a song.
                     * @constant
                     */
                    TRACK_LYRICS: 'music/track-lyrics',
                    /**
                     * Indicates a contact begun to play a track.
                     * @constant
                     */
                    TRACK_PLAY: 'music/track-play',
                    /**
                     * Indicates a contact played a track to completion.
                     * @constant
                     */
                    TRACK_PLAYED: 'music/track-played',
                    /**
                     *  Indicates a contact shared a track.
                     *  @constant
                     */
                    TRACK_SHARE: 'music/track-share',
                    /**
                     * Indicates a contact skipped a track.
                     * @constant
                     */
                    TRACK_SKIP: 'music/track-skip',
                    /**
                     * indicates a hotel reservation has been made (but not yet confirmed)
                     * @constant
                     */
                    HOTELS_RESERVATION: 'hotels/reservation',
                    /**
                     * Indicates a hotel reservation has been cancelled.
                     * @constant
                     */
                    HOTELS_CANCEL: 'hotels/cancel',
                    /**
                     * Indicates a hotel reservation has been confirmed.
                     * @constant
                     */
                    HOTELS_CONFIRMATION: 'hotels/confirmation',
                    /**
                     * Indicates a hotel purchase has been made.
                     * @constant
                     */
                    HOTELS_PURCHASE: 'hotels/purchase',
                    /**
                     * Indicates a hotel purchase has failed.
                     * @constant
                     */
                    HOTELS_PURCHASE_FAILED: 'hotels/purchase-failed',
                    /**
                     * indicates an appointment has been confirmed
                     * @constant
                     */
                    SCHEDULER_CONFIRMATION: 'scheduler/confirmation',
                    /**
                     * indicates an appointment has been cancelled
                     * @constant
                     */
                    SCHEDULER_CANCEL: 'scheduler/cancel',
                    /**
                     * Indicates an appointment has been scheduled.
                     * @constant
                     */
                    SCHEDULER_APPOINTMENT: 'scheduler/appointment',
                    /**
                     * indicates a shipment was made
                     * @constant
                     */
                    SHIPPING_SHIPPED: 'shipping/shipped',
                    /**
                     * indicates a shipment was delivered
                     * @constant
                     */
                    SHIPPING_DELIVERED: 'shipping/delivered',
                    /**
                     * indicates a shipment status update
                     * @constant
                     */
                    SHIPPING_STATUS_CHANGE: 'shipping/status-change',
                    /**
                     * indicates a comment was written on the site
                     * @constant
                     */
                    SOCIAL_COMMENT: 'social/comment',
                    /**
                     * indicates an item was shared from the site
                     * @constant
                     */
                    SOCIAL_SHARE_URL: 'social/share-url',
                    /**
                     * indicates a user is tracking activity on the site (Like, Follow, Subscribe, etc)
                     * @constant
                     */
                    SOCIAL_TRACK: 'social/track'
                },

                /**
                 * @enum
                 * @memberof Wix.Activities
                 * @since 1.25.0
                 */
                Error: {
                    BAD_DATES: 'BAD_DATES',
                    ACTIVITY_NOT_FOUND: 'ACTIVITY_NOT_FOUND',
                    WRONG_PERMISSIONS: 'WRONG_PERMISSIONS'
                },

                /**
                 * This method posts an Activity to the current site.  An Activity is an action performed by a site viewer on the installed site.
                 * By reporting Activities, your application better integrates with the Wix ecosystem. Each Activity conforms to a specific schema predefined by Wix.
                 * When the Activity is successfully created, the id of the activity will be returned. If schema validation fails, or other errors occur, an error will be returned.
                 *
                 *
                 * @function
                 * @memberof Wix.Activities
                 * @since 1.25.0
                 * @param {Object} activity An activity descriptor, must follow specific type/schema pattern:
                 *  Name         | Type      | Description |||
                 * --------------|-----------|------------
                 * type          | `String`  | The Activity Type. [Wix.Activities.ActivityType](Wix.Activities.html#toc4) |||
                 * info          | `Object`  | The Activity information, specified by the Activity type. |||
                 * details       | `Object`  | Name               | Type      | Description
                 * -             |  -        | additionalInfoUrl  |`String`   | URL for additional information about this Activity.
                 * -             |  -        | summary            |`String`   | Additional information about this Activity.
                 * contactUpdate | `Object`  | Additional Contact information relevant to this Activity. |||
                 *
                 * @param {Function} [onSuccess] Success callback function.
                 * @param {Function} [onFailure] Failure callback function.
                 *
                 * @example
                 * var activity = {
	     *      type:Wix.Activities.Type.CONTACT_CONTACT_FORM,
	     *      info:{"fields":[{"name":"email","value":"email@email.com"},{"name":"message","value":"messageValue"}]},
	     *      details:{additionalInfoUrl:null, summary:"testing tpa contact form"},
	     *      contactUpdate:{}
	     * };
                 *
                 * Wix.Activities.postActivity(activity, onSuccess, onFailure);
                 *
                 */
                postActivity: postActivity,

                /**
                 * Gets a list of all activities that have been performed by users on the current site, optionally bound by date ranges, activity types and scope (app/site).
                 * The results are returned through a callback that delivers a WixDataCursor object, with the results being in descending order by date.
                 * @function
                 * @memberof Wix.Activities
                 * @since 1.28.0
                 * @param {Function} onSuccess A function that receives a WixDataCursor object.
                 * @param {Function} onFailure A function that receives an error object in case of invalid input.
                 * @param {Object} [query] An Object containing params to restrict our results.
                 * @returns {WixDataCursor}
                 * @example
                 * var query = {
	     *      from: < ISO 8601 timestamp>,
	     *      until: < ISO 8601 timestamp>,
	     *      scope: <'app' 'scope'>,
	     *      activityTypes: [ 'type1', 'type2', ...]
	     * };
                 *
                 * Wix.Activities.getActivities(onSuccess, onFailure, query);
                 *
                 */
                getActivities: getActivities,

                /**
                 * Gets a specific Activity that occurred on the current site.
                 * @function
                 * @memberof Wix.Activities
                 * @since 1.28.0
                 * @param {String} id The id of the Activity to look up.
                 * @param {Function} onSuccess Callback triggered when data about the Activity is returned from Wix.
                 * @param {Function} onFailure Callback triggered if the data could not be returned successfully.
                 * @returns {Activity}
                 * @example
                 *
                 * Wix.Activities.getActivityById(id, onSuccess, onFailure)
                 *
                 */
                getActivityById: getActivityById,

                /**
                 * Returns a session token which can be used to make AJAX calls to Wix RESTful API.
                 * @function
                 * @memberof Wix.Activities
                 * @since 1.25.0
                 * @param {Function} callback a callback function to receive the token.
                 * @example
                 *
                 * Wix.Activities.getUserSessionToken(callback);
                 *
                 */
                getUserSessionToken: getUserSessionToken
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 18 */
    /*!*****************************!*\
     !*** ./js/modules/Utils.js ***!
     \*****************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
         * This is the description for the Utils namespace.
         * @memberof Wix
         * @namespace Wix.Utils
         */
        'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! privates/core */ 4), __webpack_require__(/*! Media */ 19), __webpack_require__(/*! privates/utils */ 9), __webpack_require__(/*! privates/reporter */ 10), __webpack_require__(/*! privates/urlUtils */ 8), __webpack_require__(/*! privates/postMessage */ 7), __webpack_require__(/*! privates/viewMode */ 6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (core, Media, utils, reporter, urlUtils, postMessage, viewMode) {

            var getViewMode = function getViewMode() {
                return window.top === window ? 'standalone' : viewMode.getViewMode();
            };

            var toWixDate = function toWixDate(date) {
                return date.toISOString();
            };

            var getCompId = function getCompId() {
                return urlUtils.getQueryParameter("compId");
            };

            var getOrigCompId = function getOrigCompId() {
                return urlUtils.getQueryParameter("origCompId");
            };

            var getWidth = function getWidth() {
                return urlUtils.getQueryParameter("width");
            };

            var getLocale = function getLocale() {
                return urlUtils.getQueryParameter("locale");
            };

            var getCacheKiller = function getCacheKiller() {
                return urlUtils.getQueryParameter("cacheKiller");
            };

            var getTarget = function getTarget() {
                return urlUtils.getQueryParameter("target");
            };

            var getSectionUrl = function getSectionUrl(sectionIdentifier, callback) {
                if (utils.isObject(sectionIdentifier)) {
                    if (utils.isFunction(callback)) {
                        if (sectionIdentifier.sectionId) {
                            var args = {
                                sectionIdentifier: sectionIdentifier.sectionId
                            };
                            postMessage.sendMessage(postMessage.MessageTypes.GET_SECTION_URL, args, callback);
                        } else {
                            reporter.reportSdkError('Wrong arguments - an Object with sectionId must be provided');
                        }
                    } else {
                        reporter.reportSdkError('Mandatory arguments - callback must be specified');
                    }
                } else {
                    var sectionUrl = urlUtils.getQueryParameter("section-url");
                    return sectionUrl && sectionUrl.replace(/\?$/, "");
                }
            };

            var getInstanceId = function getInstanceId() {
                return core.getInstanceValue("instanceId");
            };

            var getSignDate = function getSignDate() {
                return core.getInstanceValue("signDate");
            };

            var getUid = function getUid() {
                return core.getInstanceValue("uid");
            };

            var getPermissions = function getPermissions() {
                return core.getInstanceValue("permissions");
            };

            var getIpAndPort = function getIpAndPort() {
                return core.getInstanceValue("ipAndPort");
            };

            var getDemoMode = function getDemoMode() {
                var mode = core.getInstanceValue("demoMode");
                mode = mode === null ? false : mode;

                return mode;
            };

            var getDeviceType = function getDeviceType() {
                return urlUtils.getQueryParameter("deviceType") || "desktop";
            };

            var getInstanceValue = function getInstanceValue(key) {
                return core.getInstanceValue(key);
            };

            var getSiteOwnerId = function getSiteOwnerId() {
                return getInstanceValue('siteOwnerId');
            };

            var navigateToSection = function navigateToSection(sectionIdentifier, state, onFailure) {
                var args;
                if (utils.isFunction(sectionIdentifier)) {
                    onFailure = sectionIdentifier;
                } else if (utils.isString(sectionIdentifier)) {
                    args = {
                        state: sectionIdentifier
                    };
                    onFailure = state;
                } else if (utils.isObject(sectionIdentifier) && utils.isFunction(state)) {
                    args = {
                        sectionIdentifier: sectionIdentifier
                    };
                    onFailure = state;
                } else {
                    args = {
                        sectionIdentifier: sectionIdentifier,
                        state: state
                    };
                }

                postMessage.sendMessage(postMessage.MessageTypes.NAVIGATE_TO_SECTION_PAGE, args, onFailure);
            };

            return {
                /**
                 * This method returns a String which represents the current view mode.
                 * @function
                 * @memberof Wix.Utils
                 * @since 1.12.0
                 * @returns {String} The current view mode (editor/preview/site/standalone).
                 * @example
                 *
                 * //viewMode will get a value like 'editor/preview/site'
                 * var viewMode = Wix.Utils.getViewMode();
                 */
                getViewMode: getViewMode,

                /**
                 * Converts a JavaScript Date object into the correct format, ISO 8601, used by Wix APIs when dealing with dates.
                 * It follows the same example provided by Mozilla as a polyfill for non-ECMA 262, 5th edition browsers.
                 * @function
                 * @memberof Wix.Utils
                 * @since 1.28.0
                 * @param {Date}
                 * @return {String} Represents the given date formatted in ISO 8601.
                 */
                toWixDate: toWixDate,

                /**
                 * This method returns a String which represents the Widget/Page/Settings iframe's component id.
                 * @function
                 * @memberof Wix.Utils
                 * @since 1.12.0
                 * @returns {String} The Widget/Page/Settings iframe's component id.
                 * @example
                 *
                 * //compId will get a value like 'TPWdgt-d88e26c-217b-505f-196d-2f6d87f1c2db'
                 * var compId = Wix.Utils.getCompId();
                 */
                getCompId: getCompId,

                /**
                 * This method returns for valid endpoints a String which represents the Widget/Page iframe's component id which opened the App Settings panel.
                 * @function
                 * @memberof Wix.Utils
                 * @since 1.12.0
                 * @returns {String} The Widget/Page iframe's component id which opened the App Settings panel, popup or modal. If not exist returns null.
                 * @example
                 *
                 * //origCompId will get a value like 'TPWdgt-d88e26c-217b-505f-196d-2f6d87f1c2db'
                 * var origCompId = Wix.Utils.getOrigCompId();
                 */
                getOrigCompId: getOrigCompId,

                /**
                 * This method returns a Number which represents the Widget/Page/Settings iframe's width.
                 * @function
                 * @memberof Wix.Utils
                 * @since 1.12.0
                 * @returns {Number} The Widget/Page/Settings iframe's width.
                 * @example
                 *
                 * // width will get a value like 300
                 * var width = Wix.Utils.getWidth();
                 */
                getWidth: getWidth,

                /**
                 * This method for valid endpoints (Widget/Page/Settings) returns a String which represents the current locale of the site/editor. A locale is an abbreviated language tag that defines the user's language, country and any special variant preference of the user interface (e.g. Number format, Date format, etc.).
                 * @function
                 * @memberof Wix.Utils
                 * @since 1.14.0
                 * @return {String} A standard IETF language tag - en (English), es (Spanish), fr (Franch), it (Italian), etc.
                 * @example
                 *
                 * //locale will get a value like 'en', 'es', etc.
                 * var locale = Wix.Utils.getLocale()
                 */
                getLocale: getLocale,

                /**
                 * This method for valid endpoints (Widget/Page) returns a String which is the cacheKiller query parameter.
                 * @function
                 * @memberof Wix.Utils
                 * @since 1.12.0
                 * @returns {String} The cacheKiller query parameter, if not exist returns null.
                 * @example
                 *
                 * //cacheKiller will get a value of a random string - 1359996970511
                 *var cacheKiller = Wix.Utils.getCacheKiller();
                 */
                getCacheKiller: getCacheKiller,

                /**
                 * This method for valid endpoints (Widget/Page) returns a String which is the target query parameter (for the section-url).
                 * @function
                 * @memberof Wix.Utils
                 * @since 1.12.0
                 * @returns {String} The target query parameter, if not exist returns null.
                 * @example
                 *
                 * //target will get a value like '_top' or '_self'
                 * var target = Wix.Utils.getTarget();
                 */
                getTarget: getTarget,

                /**
                 * This method when no sectionId is given is valid for Page endpoint only.
                 *
                 * When a sectionId is not provided this method returns a string which is the section-url query parameter.
                 *
                 * When a sectionId and a callback function are provided this method returns the page app Url for the given sectionId.
                 *
                 * Please note: The parameter "section-url" here refers to the Page app URL.
                 * @function
                 * @memberof Wix.Utils
                 * @since 1.37.0
                 * @private
                 * @param {Object} [sectionId] App pageId defined in dev.wix.com
                 * @param {Function} [callback] A callback function that returns the section's URL - this is mandatory if sectionId was provided.
                 *
                 * @returns {String} The section-url query parameter, if not exist returns null.
                 * @returns {Object} The section url for the given sectionId
                 *
                 * @example
                 *
                 * //url will get a value of a valid url like 'http://user.wix.com/site#!page/ch6q'
                 * var url = Wix.Utils.getSectionUrl()
                 *
                 * var url = Wix.Utils.getSectionUrl({sectionId: 'mySectionId'}, function(data) {
	         *      //do something with data.url
	         * })
                 */
                getSectionUrl: getSectionUrl,

                /**
                 * This method returns a String which represents the app instance Id.
                 * @function
                 * @memberof Wix.Utils
                 * @since 1.12.0
                 * @returns {String} An app instance id - a GUID like value (decoded property of the instance query parameter)
                 * @example
                 *
                 * //instanceId will get a GUID like value - e.g. '12de5bae-01e7-eaab-325f-436462858228'
                 * var instanceId = Wix.Utils.getInstanceId();
                 */
                getInstanceId: getInstanceId,

                /**
                 * This method returns a String which represents the app instance signDate.
                 * @function
                 * @memberof Wix.Utils
                 * @deprecated 1.13.0
                 * @returns {String} An app instance signDate (property of the decoded instance query parameter).
                 * @example
                 *
                 * //date will get a value like '2013-01-04T02:45:35.302-06:00'
                 * var date = Wix.Utils.getSignDate();
                 */
                getSignDate: getSignDate,

                /**
                 * This method returns a String which represents the user identifier.
                 * @function
                 * @memberof Wix.Utils
                 * @since 1.12.0
                 * @returns {String} A user identifier (decoded property of the instance query parameter).
                 * @example
                 *
                 * var uid = Wix.Utils.getUid();
                 */
                getUid: getUid,

                /**
                 * This method returns a String which represents the user's permissions (decoded property of the instance query parameter).
                 * @function
                 * @memberof Wix.Utils
                 * @since 1.12.0
                 * @returns {String} User's permissions (decoded property of the instance query parameter) - permissions can get the value of 'OWNER' for the site owner otherwise it will be null.
                 * @example
                 *
                 * var permissions = Wix.Utils.getPermissions();
                 */
                getPermissions: getPermissions,

                /**
                 * This method returns a String which represents the app IP and port.
                 * @function
                 * @memberof Wix.Utils
                 * @since 1.13.0
                 * @returns {String} An app IP and port (decoded property of the instance query parameter).
                 * @example
                 *
                 * //ipAndPort will get a value like '91.199.119.254/61308'
                 * var ipAndPort = Wix.Utils.getIpAndPort();
                 */
                getIpAndPort: getIpAndPort,

                /**
                 * This method returns a Boolean which represents the app instance demo mode state.
                 * @function
                 * @memberof Wix.Utils
                 * @since 1.12.0
                 * @returns {Boolean} An app instance demo mode state (decoded property of the instance query parameter).
                 * @example
                 *
                 * // demoMode will get a value like true/false
                 * var demoMode = Wix.Utils.getDemoMode();
                 */
                getDemoMode: getDemoMode,

                /**
                 * This method returns a String which represents the current device type.
                 * @function
                 * @memberof Wix.Utils
                 * @since 1.20.0
                 * @returns {String} The current device type. One of the following: * desktop *mobile
                 * @example
                 *
                 * // deviceType will get a value of 'desktop' or 'mobile'
                 * var deviceType = Wix.Worker.Utils.getDeviceType();
                 */
                getDeviceType: getDeviceType,

                /**
                 * Gets a value contained within the instance by key. If the key does not exist, null is returned
                 * @function
                 * @memberof Wix.Utils
                 * @since 1.44.0
                 * @returns {*} The current value of the requested key. If the key does not exist, null is returned.
                 * @example
                 *
                 * // demoMode will get a value of true or false
                 * var demoMode = Wix.Utils.getInstanceValue('demoMode');
                 */
                getInstanceValue: getInstanceValue,

                /**
                 * Navigates to the callers section page in the hosted site.
                 * @function
                 * @memberof Wix.Utils
                 * @since 1.33.0
                 * @param {Object} [sectionIdenfitier] App page id defined in dev.wix.com {sectionId : 'sectionId'}.
                 * @param {String} [state] New app's state to push into the editor history stack.
                 * @param {Function} onFailure This will be called if the hosting site does not include the section app, or if the caller's application does not include a section.
                 * @example
                 *
                 *
                 * Wix.Utils.navigateToSection({ sectionId : 'sectionId' }, 'myState', function(error){
	         *    //Handle error use-case
	         * });
                 */
                navigateToSection: navigateToSection,

                /**
                 * This method returns a String which represents the site owner's identifier.
                 * @function
                 * @memberof Wix.Utils
                 * @since 1.52.0
                 * @returns {String} A site owner identifier.
                 * @example
                 *
                 * var siteOwnerId = Wix.Utils.getSiteOwnerId();
                 */
                getSiteOwnerId: getSiteOwnerId,

                Media: Media
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 19 */
    /*!*****************************!*\
     !*** ./js/modules/Media.js ***!
     \*****************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
         * This is the description for the Media namespace.
         * @memberof Wix.Utils
         * @namespace Wix.Utils.Media
         */
        'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! privates/utils */ 9), __webpack_require__(/*! privates/reporter */ 10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (utils, reporter) {
            var getWixStatic = function getWixStatic() {
                return utils.protocol() + '//static.wixstatic.com/';
            };

            var getWixMedia = function getWixMedia() {
                return utils.protocol() + '//media.wix.com/';
            };

            var getImageUrl = function getImageUrl(relativeUrl) {
                return getWixStatic() + 'media/' + relativeUrl;
            };

            var getResizedImageUrl = function getResizedImageUrl(relativeUrl, width, height, sharpParams) {
                // assign sharp default parameters
                sharpParams = sharpParams || {};
                sharpParams.quality = sharpParams.quality || 75;
                sharpParams.resizaFilter = sharpParams.resizaFilter || 22;
                sharpParams.usm_r = sharpParams.usm_r || 0.50;
                sharpParams.usm_a = sharpParams.usm_a || 1.20;
                sharpParams.usm_t = sharpParams.usm_t || 0.00;

                var urlArr = [];
                var splitUrl = /[.]([^.]+)$/.exec(relativeUrl);
                var ext = splitUrl && /[.]([^.]+)$/.exec(relativeUrl)[1] || "";

                // build the image url
                relativeUrl = getWixStatic() + 'media/' + relativeUrl;
                urlArr.push(relativeUrl);
                urlArr.push("srz");
                urlArr.push("p");
                urlArr.push(width);
                urlArr.push(height);

                // sharpening parameters
                urlArr.push(sharpParams.quality);
                urlArr.push(sharpParams.resizaFilter);
                urlArr.push(sharpParams.usm_r);
                urlArr.push(sharpParams.usm_a);
                urlArr.push(sharpParams.usm_t);

                urlArr.push(ext); // get file extension
                urlArr.push("srz");

                return urlArr.join('_');
            };

            var getAudioUrl = function getAudioUrl(relativeUrl, audioType) {
                //support for old usage: when no audioType is given should return the standard
                audioType = audioType || AudioType.STANDARD;
                if (!utils.has(AudioType, audioType)) {
                    reporter.reportSdkError('Invalid argument - audioType value should be set using Wix.Utils.Media.AudioType');
                }

                switch (audioType) {
                    case AudioType.STANDARD:
                        return getWixMedia() + 'mp3/' + relativeUrl;
                    case AudioType.PREVIEW:
                        return getWixStatic() + 'preview/' + relativeUrl;
                    case AudioType.SHORT_PREVIEW:
                        return getWixStatic() + relativeUrl;
                }
            };

            var getDocumentUrl = function getDocumentUrl(relativeUrl) {
                return getWixMedia() + 'ugd/' + relativeUrl;
            };

            var getSwfUrl = function getSwfUrl(relativeUrl) {
                return getWixStatic() + 'media/' + relativeUrl;
            };

            var getPreviewSecureMusicUrl = function getPreviewSecureMusicUrl(previewFileName) {
                reporter.reportSdkMsg('Wix.Utils.Media.getPreviewSecureMusicUrl is DEPRECATED please use Wix.Utils.Media.getAudioUrl(\'myFileName.mp3\', Wix.Utils.Media.AudioType.PREVIEW)');
                return getWixStatic() + 'preview/' + previewFileName;
            };

            var AudioType = {
                STANDARD: 'STANDARD',
                PREVIEW: 'PREVIEW',
                SHORT_PREVIEW: 'SHORT_PREVIEW'
            };

            return {

                /**
                 * An enum of audio types that are supported by Wix.Utils.Media.getAudioUrl
                 * @enum
                 * @memberof Wix.Utils.Media
                 * @since 1.45.0
                 */
                AudioType: {
                    /**
                     * Standard mp3 audio file
                     * @since 1.45.0
                     */
                    STANDARD: AudioType.STANDARD,
                    /**
                     * A full preview of a high-quality audio file playable in the browser
                     * @since 1.45.0
                     */
                    PREVIEW: AudioType.PREVIEW,
                    /**
                     * A short preview of a high-quality audio file playable in the browser
                     * @since 1.45.0
                     */
                    SHORT_PREVIEW: AudioType.SHORT_PREVIEW
                },

                /**
                 * This method constructs a URL for a media item of type image.
                 * @function
                 * @memberof Wix.Utils.Media
                 * @since 1.17.0
                 * @param {String} Image item uri (relative to Wix media gallery).
                 * @returns {String} A full URL pointing to the Wix static servers of an image with the default dimensions - width and height.
                 * @example
                 *
                 * var imageUrl = Wix.Utils.Media.getImageUrl('relative_url.jpg')
                 */
                getImageUrl: getImageUrl,

                /**
                 * This method constructs a URL for a media item of type image and let the developer change the image dimensions as well as it's sharpening properties (optional),
                 * see sharpening explained here - http://en.wikipedia.org/wiki/Unsharp_masking.
                 * @function
                 * @memberof Wix.Utils.Media
                 * @since 1.17.0
                 * @param {String} relativeUrl Static image url provided by the media dialog.
                 * @param {Number} width Desired image width.
                 * @param {Number} height Desired image height.
                 * @param {Object} [sharpParams]
                 * @param {Number} sharpParams.quality JPEG quality, leave as is (75) unless image size is important for your app.
                 * @param {Number} sharpParams.resizaFilter Resize filter.
                 * @param {Number} sharpParams.usm_r Unsharp mask radius.
                 * @param {Number} sharpParams.usm_a Unsharp mask amount (percentage).
                 * @param {Number} sharpParams.usm_t Unsharp mask threshold.
                 * @returns {String} A full URL pointing to the Wix static servers of an image with the custom dimension parameters.
                 * @example
                 *
                 * var resizedImageUrl = Wix.Utils.Media.getResizedImageUrl('relative_url.jpg', 500, 500)
                 */
                getResizedImageUrl: getResizedImageUrl,

                /**
                 * Constructs an absolute URL for a relative path to an audio file. By default, returns a URL to a standard audio file.
                 * @function
                 * @memberof Wix.Utils.Media
                 * @since 1.45.0
                 * @param {String} relativeUri A relative URL to the target audio file.
                 * @param {Wix.Utils.Media.AudioType} audioType the type of audio URL to build. Default is Wix.Media.AudioType.STANDARD.
                 * @returns {String} An absolute URL pointing to the audio file hosted on Wix's static.
                 * @example
                 *
                 * var audioUrl = Wix.Utils.Media.getAudioUrl('relative_url.mp3', Wix.Utils.Media.AudioType.SHORT_PREVIEW)
                 */
                getAudioUrl: getAudioUrl,

                /**
                 * This method constructs a URL for a media item of type document.
                 * @function
                 * @memberof Wix.Utils.Media
                 * @since 1.17.0
                 * @param {String} relativeUri Document item uri (relative to Wix media gallery).
                 * @returns {String} A full URL pointing to the Wix static servers of a document media file with the default dimensions.
                 * @example
                 *
                 * var documentUrl = Wix.Utils.Media.getDocumentUrl('relative_url.pdf')
                 */
                getDocumentUrl: getDocumentUrl,

                /**
                 * This method constructs a URL for a media item of type swf.
                 * @function
                 * @memberof Wix.Utils.Media
                 * @since 1.17.0
                 * @param {String} relativeUri Swf item uri (relative to Wix media gallery).
                 * @returns {String} A full URL pointing to the Wix static servers of a swf media file  with the default dimensions.
                 * @example
                 *
                 * var swfUrl = Wix.Utils.Media.getSwfUrl('relative_url.swf')
                 */
                getSwfUrl: getSwfUrl,

                /**
                 * This method constructs a URL for a media item of type secure music.
                 * @function
                 * @memberof Wix.Utils.Media
                 * @since 1.41.0
                 * @param {String} relativeUri secure music item uri (relative to Wix media gallery).
                 * @returns {String} A full URL pointing to the Wix static servers of a secure media file.
                 * @deprecated
                 * @example
                 * var preview = Wix.Utils.Media.getPreviewSecureMusicUrl('relative_url.mp3')
                 */
                getPreviewSecureMusicUrl: getPreviewSecureMusicUrl

            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 20 */
    /*!********************************!*\
     !*** ./js/modules/Settings.js ***!
     \********************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
         * This is the description for the Settings namespace.
         * @memberof Wix
         * @namespace Wix.Settings
         */
        'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! Styles */ 21), __webpack_require__(/*! Base */ 22), __webpack_require__(/*! WindowPlacement */ 24), __webpack_require__(/*! privates/utils */ 9), __webpack_require__(/*! privates/reporter */ 10), __webpack_require__(/*! privates/postMessage */ 7), __webpack_require__(/*! privates/sharedAPI */ 25)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Styles, Base, WindowPlacement, utils, reporter, postMessage, sharedAPI) {

            var getStyleParams = function getStyleParams(callback) {
                reporter.reportSdkMsg('Wix.Settings.getStyleParams is DEPRECATED use Wix.Styles.getStyleParams');
                return Styles.getStyleParams(callback);
            };

            /** Function getStyleColorByKey
             *
             * Returns the css color value of saved style parameter
             *
             * @deprecated
             * @since SDK 1.22.0
             * @param colorKey (String) a unique key describing a color style parameter
             * @return (String) css color string. E.g "#FFFFFF" or "rgba(0,0,0,0.5)"
             */
            var getStyleColorByKey = function getStyleColorByKey(colorKey) {
                reporter.reportSdkMsg('Wix.Settings.getStyleColorByKey is DEPRECATED use Wix.Styles.getStyleColorByKey');
                return Styles.getStyleColorByKey(colorKey);
            };

            /**
             * Function getColorByreference
             * Returns the color object of editor style
             *
             * @deprecated
             * @since 1.22.0
             * @param colorReference (String) a unique key describing a theme color parameter
             * @return (Object) a map describing a Wix style color.
             */
            var getColorByreference = function getColorByreference(colorReference) {
                reporter.reportSdkMsg('Wix.Settings.getColorByreference is DEPRECATED use Wix.Styles.getColorByreference');
                return Styles.getColorByreference(colorReference);
            };

            /**
             * Function setColorParam
             * Sets a style color parameter
             *
             * @deprecated
             * @since 1.22.0
             * @param key (String) a unique key describing a color style parameter
             * @param value (Object)
             */
            var setColorParam = function setColorParam(key, value) {
                reporter.reportSdkMsg('Wix.Settings.setColorParam is DEPRECATED use Wix.Styles.setColorParam');
                return Styles.setColorParam(key, value);
            };

            /**
             * Function setNumberParam
             * Sets a style number parameter
             *
             * @deprecated
             * @since 1.22.0
             * @param key (String) a unique key describing a number style parameter
             * @param value (Number)
             */
            var setNumberParam = function setNumberParam(key, value) {
                reporter.reportSdkMsg('Wix.Settings.setNumberParam is DEPRECATED use Wix.Styles.setNumberParam');
                return Styles.setNumberParam(key, value);
            };

            /** Function setBooleanParam
             *
             * Sets a style boolean parameter
             *
             * @deprecated
             * @since 1.22.0
             * @param key (String) a unique key describing a boolean style parameter
             * @param value (Boolean)
             */
            var setBooleanParam = function setBooleanParam(key, value) {
                reporter.reportSdkMsg('Wix.Settings.setBooleanParam is DEPRECATED use Wix.Styles.setBooleanParam');
                return Styles.setBooleanParam(key, value);
            };

            /** Function getSiteColors
             *
             * Returns the currently active site colors
             *
             * @deprecated
             * @since 1.12.0
             * @param callback (Function) callback function: function(colors)
             */
            var getSiteColors = function getSiteColors(callback) {
                reporter.reportSdkMsg('Wix.Settings.getSiteColors is DEPRECATED use Wix.Styles.getSiteColors');
                return Styles.getSiteColors(callback);
            };

            var getWindowPlacement = function getWindowPlacement(compId, callback) {
                if (!compId || !callback) {
                    reporter.reportSdkError('Mandatory arguments - compId & callback must be specified');
                }

                postMessage.sendMessage(postMessage.MessageTypes.GET_WINDOW_PLACEMENT, {
                    compId: compId
                }, callback);
            };

            var getSiteInfo = function getSiteInfo(onSuccess) {
                Base.getSiteInfo(onSuccess);
            };

            var refreshApp = function refreshApp(queryParams) {
                refreshAppByCompIds(null, queryParams);
            };

            var refreshAppByCompIds = function refreshAppByCompIds(compIds, queryParams) {
                postMessage.sendMessage(postMessage.MessageTypes.REFRESH_APP, {
                    queryParams: queryParams,
                    compIds: compIds
                });
            };

            var openBillingPage = function openBillingPage() {
                postMessage.sendMessage(postMessage.MessageTypes.OPEN_BILLING_PAGE);
            };

            var openMediaDialog = function openMediaDialog(mediaType, multipleSelection, onSuccess, onCancel) {
                sharedAPI.openMediaDialog(postMessage.MessageTypes.OPEN_MEDIA_DIALOG, mediaType, multipleSelection, onSuccess, onCancel);
            };

            var triggerSettingsUpdatedEvent = function triggerSettingsUpdatedEvent(message, compId) {
                message = message || {};
                compId = compId || '*';

                postMessage.sendMessage(postMessage.MessageTypes.POST_MESSAGE, {
                    message: message,
                    compId: compId
                });
            };

            var getSitePages = function getSitePages(callback) {
                postMessage.sendMessage(postMessage.MessageTypes.GET_SITE_PAGES, null, callback);
            };

            var setWindowPlacement = function setWindowPlacement(compId, placement, verticalMargin, horizontalMargin) {
                if (!compId || !placement) {
                    reporter.reportSdkError('Mandatory arguments - compId & placement must be specified');
                }

                if (!WindowPlacement.hasOwnProperty(placement)) {
                    reporter.reportSdkError('Invalid argument - placement value should be set using Wix.WindowPlacement');
                }
                postMessage.sendMessage(postMessage.MessageTypes.SET_WINDOW_PLACEMENT, {
                    compId: compId,
                    placement: placement,
                    verticalMargin: verticalMargin,
                    horizontalMargin: horizontalMargin
                });
            };

            var getDashboardAppUrl = function getDashboardAppUrl(callback) {
                if (!callback) {
                    reporter.reportSdkError('Mandatory arguments - a callback must be specified');
                }

                postMessage.sendMessage(postMessage.MessageTypes.GET_DASHBOARD_APP_URL, undefined, callback);
            };

            var openModal = function openModal(url, width, height, title, onClose, bareUI) {
                if (!url || !width || !height) {
                    reporter.reportSdkError('Mandatory arguments - url & width & height must be specified');
                    return;
                }
                if (!utils.isString(url)) {
                    reporter.reportSdkError('Invalid argument - a Url must be of type string');
                    return;
                }
                if (!utils.isNumber(width) && !utils.isPercentValue(width)) {
                    reporter.reportSdkError('Invalid argument - a width must be of type Number or Percentage');
                    return;
                }
                if (!utils.isNumber(height) && !utils.isPercentValue(height)) {
                    reporter.reportSdkError('Invalid argument - a height must be of type Number or Percentage');
                    return;
                }

                var args = {
                    url: url,
                    width: width,
                    height: height,
                    isBareMode: bareUI
                };

                if (utils.isFunction(title)) {
                    onClose = title;
                } else {
                    args.title = title;
                }

                postMessage.sendMessage(postMessage.MessageTypes.SETTINGS_OPEN_MODAL, args, onClose);
            };

            var closeWindow = function closeWindow(message) {
                Base.closeWindow(message);
            };

            var addComponent = function addComponent(options, onSuccess, onError) {
                if (!options || !options.componentType) {
                    reporter.reportSdkError('Mandatory arguments - options has to have componentType');
                    return;
                }

                var callback = function callback(data) {
                    if (data.onError) {
                        if (onError) {
                            onError.apply(this, arguments);
                        }
                    } else {
                        onSuccess.apply(this, arguments);
                    }
                };

                var args = {
                    componentType: options.componentType
                };

                if (options.componentType === 'WIDGET') {

                    if (!options.widget) {
                        reporter.reportSdkError('Mandatory arguments - options has to have widget object');
                        return;
                    }

                    args.widget = {
                        tpaWidgetId: options.widget.widgetId,
                        allPages: options.widget.allPages || false,
                        wixPageId: options.widget.wixPageId
                    };
                }

                if (options.componentType === 'PAGE') {
                    if (!options.page) {
                        reporter.reportSdkError('Mandatory arguments - options has to have page object');
                        return;
                    }

                    args.page = {
                        pageId: options.page.pageId,
                        title: options.page.title
                    };
                }

                postMessage.sendMessage(postMessage.MessageTypes.ADD_COMPONENT, args, callback);
            };

            var setExternalId = function setExternalId(guid, onSuccess, onError) {
                if (!guid) {
                    reporter.reportSdkError('Mandatory arguments - GUID must be provided');
                    return;
                }

                var callback = function callback(data) {
                    if (data.onError) {
                        if (onError) {
                            onError.apply(this, arguments);
                        }
                    } else {
                        if (onSuccess) {
                            onSuccess.apply(this, arguments);
                        }
                    }
                };

                var args = {
                    externalId: guid
                };

                postMessage.sendMessage(postMessage.MessageTypes.SET_EXTERNAL_ID, args, callback);
            };

            var revalidateSession = function revalidateSession(onSuccess, onError) {
                Base.revalidateSession(onSuccess, onError);
            };

            return {
                /**
                 * @enum
                 * @memberof Wix.Settings
                 * @since 1.40.0
                 */
                MediaType: {
                    IMAGE: 'photos',
                    BACKGROUND: 'backgrounds',
                    AUDIO: 'audio',
                    DOCUMENT: 'documents',
                    SWF: 'swf',
                    SECURE_MUSIC: 'secure_music'
                },

                getColorByreference: getColorByreference,
                setBooleanParam: setBooleanParam,
                setColorParam: setColorParam,
                setNumberParam: setNumberParam,
                getSiteColors: getSiteColors,
                getStyleColorByKey: getStyleColorByKey,

                /**
                 * Get window placement for a Glued Widget. Error will be thrown for non-Glued widgets.
                 *
                 * @function
                 * @memberof Wix.Settings
                 * @since 1.19.0
                 * @param compId (String) component ID of the Glued Widget
                 * @param callback (Function) a callback function that gets the component placement as an argument
                 *   callback signature: function(data) {}
                 * @example
                 *
                 * var compId = Wix.Utils.getOrigCompId();
                 * Wix.Settings.getWindowPlacement(compId, function (data) {
	         *  // do something with widget placement
	         * });
                 */
                getWindowPlacement: getWindowPlacement,

                /**
                 * This method returns the URL leading to your BackOffice (AKA Business) application, in the Wix Dashboard.
                 * The URL is fully qualified and starts with "//" for using HTTPS if supported. If the site is not saved, save dialog will be prompted.
                 * @function
                 * @memberof Wix.Settings
                 * @author tomergab@wix.com
                 * @since 1.32.0
                 * @param {Function} callback A callback function to receive the URL of the app in the dashboard (AKA BackOffice/Business).
                 * @example
                 *
                 * Wix.Settings.getDashboardAppUrl(function(url) {
	         *    // do something with the URL
	         * });
                 */
                getDashboardAppUrl: getDashboardAppUrl,

                /**
                 * The getsiteInfo method is used to retrieve information about the host site in which the app is shown.
                 * @function
                 * @memberof Wix.Settings
                 * @since 1.12.0
                 * @see Wix.getSiteInfo
                 *
                 * @example
                 *
                 * Wix.Settings.getSiteInfo(function(siteInfo) {
	         *    // do something with the siteInfo
	         * });
                 *
                 */
                getSiteInfo: getSiteInfo,

                /**
                 * The getSitePages method is used to retrieve the site structure from the hosting Wix Platform. The site structure includes visible and hidden pages as well as sub pages.
                 * @function
                 * @memberof Wix.Settings
                 * @since 1.17.0
                 * @see Wix.getSitePages
                 *
                 * @example
                 *
                 * Wix.Settings.getSitePages(function(sitePages) {
	         *    // do something with the site pages
	         * });
                 */
                getSitePages: getSitePages,

                /**
                 * The getStyleParams method is used to retrieve the style parameters from the hosting Wix Platform. The parameters includes colors numbers, booleans.
                 * @function
                 * @memberof Wix.Settings
                 * @deprecated Use Wix.Styles.getStyleParams
                 * @since 1.22.0
                 * @param {Function} callback A callback function to receive the style parameters.
                 * @example
                 *
                 * Wix.Settings.getStyleParams(function(styleParams) {
	         *    // do something with the style params
	         * });
                 */
                getStyleParams: getStyleParams,

                /**
                 * The Setting.openBillingPage method allows the app to offer a premium package from within the app settings.
                 * When called it will open the Wix billing system page in a modal window.
                 * @function
                 * @memberof Wix.Settings
                 * @since 1.16.0
                 * @example
                 *
                 * Wix.Settings.openBillingPage();
                 */
                openBillingPage: openBillingPage,

                /**
                 * This method opens the Wix media dialog inside the WIx Editor, and let's the site owner choose a an existing file from the Wix media galleries,
                 * or upload a new file instead. When completed a callback function returns the meta data of the selected item/s.
                 * This method returns a meta data descriptor for a selected media item. To access the media item from your code you will need to construct a
                 * full URL using that descriptor. Since the media items URLs format is set by Wix and might changed in the future,
                 * we are requiring that the URL construction will be done using the SDK. Use one of the Wix.Utils.Media.get* methods to get the desired media item URL.
                 * @function
                 * @memberof Wix.Settings
                 * @author lior.shefer@wix.com
                 * @since 1.40.0
                 * @param {Wix.Settings.MediaType} mediaType Media gallery to choose from - image, background, audio, swf and secure music.
                 * @param {Boolean} multiSelect selection mode, single (false) or multiple (true) item to choose from.
                 * @param {Function} onSuccess callback function, passing the media item/s meta data.
                 * @param {Function} [onCancel] callback function called when user cancels.
                 * @return This is an asynchronous function, the returned value is passed in the onSuccess callback function.
                 * An object (single selection) or Array of objects (multiple selection). The object describes the meta data of the selected media item.
                 *
                 * @example
                 *
                 * Wix.Settings.openMediaDialog(Wix.Settings.MediaType.IMAGE, false, function(data) {
	         *    // save image data
	         * });
                 */
                openMediaDialog: openMediaDialog,

                /**
                 * Notifying the host site that the app requires reloading.
                 * The refreshApp method is normally used when a user changes the app settings in the settings iframe, and as a result requires that the Widget or Page iframes should be reloaded such that the new settings will take affect.
                 * The refreshApp method accepts a single optional argument, an object. Where each of the object's properties will translate into a query parameter in the iframe URL.
                 * @function
                 * @memberof Wix.Settings
                 * @since 1.12.0
                 * @param {Object} [queryParams] A map of custom query parameters that should be added to the iframe URL.
                 * @example
                 *
                 * //The App's components (all of them) will be refreshed without custom query parameters
                 * Wix.Settings.refreshApp();
                 *
                 * //The App's components (all of them) will be refreshed with custom query parameters as specified in the object argument - [BASE-URL]?[WIX-QUERY-PARAMETERS]&param1=value1&param2=value2
                 * Wix.Settings.refreshApp({param1: "value1", param2: "value2"})
                 */
                refreshApp: refreshApp,

                /**
                 * Notifying the host site that some specific components of the app requires reloading. It does the same as Settings.refreshApp but for specific components.
                 * @function
                 * @memberof Wix.Settings
                 * @since 1.12.0
                 * @param {Array} compIds An array of the app component ids that should be refreshed.
                 * @param {Object} [queryParams] A map of custom query parameters that should be added to the iframe URL.
                 * @example
                 *
                 * //For example, if the user adds 3 components of the same app with ids: "id1", "id2" and "id3", and then he changes something in
                 * the settings iframe that affects only 2 components display, to refresh these 2 components:
                 * //The App's components with ids "id1" and "id3" will be refreshed without custom query parameters
                 * Wix.Settings.refreshAppByCompIds(["id1", "id3"]);
                 * //The App's components with ids "id1" and "id3" will be refreshed with custom query parameters as specified in the object argument - [BASE-URL]?[WIX-QUERY-PARAMETERS]&param1=value1&param2=value2
                 * Wix.Settings.refreshAppByCompIds(["id1", "id3"], {param1: "value1", param2: "value2"});
                 */
                refreshAppByCompIds: refreshAppByCompIds,

                /**
                 * The setWindowPlacement method sets the placement for fixed position widgets in an editing session.
                 * @function
                 * @memberof Wix.Settings
                 * @since 1.19.0
                 * @param {String} compId Component id to change window placement to.
                 * @param {WindowPlacement} placement New placement for the widget window
                 * @param {Number} [verticalMargin] Vertical offset from the window placement. Valid values are between -2 and 2.
                 * @param {Number} [horizontalMargin] Horizontal offset from the window placement. Valid values are between -2 and 2.
                 * @example
                 *
                 * var compId = Wix.Utils.getOrigCompId();
                 * Wix.Settings.setWindowPlacement(compId, Wix.WindowPlacement.CENTER, 2, 0);
                 */
                setWindowPlacement: setWindowPlacement,

                /**
                 * The triggerSettingsUpdatedEvent method is used from the Settings iframe to trigger a Wix.Events.SETTINGS_UPDATED event in a Widget/Page iframe.
                 * It should be used in an editing session when a developer wants to reflect editing changes but avoid refresh/reload on the Widget/Page iframe.
                 * @function
                 * @memberof Wix.Settings
                 * @since 1.17.0
                 * @param {Object} message A custom JSON which will be passed to the Widget/Page as the event data.
                 * @param {String} [compId] A component id the developer wants to trigger the event on. The most obvious compId is Utils.getOrigCompId(). If no compId is given all components that registered to
                 *  Wix.Events.SETTINGS_UPDATED will receive the event.
                 * @example
                 *
                 * Wix.Settings.triggerSettingsUpdatedEvent(message, compId);
                 */
                triggerSettingsUpdatedEvent: triggerSettingsUpdatedEvent,

                /**
                 * The openModal method allows the Settings iframe to open a modal window.
                 *
                 * The modal window is a singleton (every new modal closes the previous one) and contains a lightbox.
                 *
                 * A modal can be dismissed by the user if it touches the lightbox, presses the closing button or by the app itself
                 * if it calls the Wix.closeWindow from within the modal iframe.
                 *
                 * @function
                 * @memberof Wix.Settings
                 * @author lior.shefer@wix.com
                 * @since 1.43.0
                 * @private
                 * @param {String} url Model iframe url.
                 * @param {Number} width The modal window width (can be a string for percent, i.e., '90%', or an integer for pixels, i.e., 90).
                 * @param {Number} height The modal window height (can be a string for percent, i.e., '90%', or an integer for pixels, i.e., 90).
                 * @param {String} [title] Title of the modal.
                 * @param {Function} [onClose] onClose callback function.
                 * @param {Boolean} [bareUI] Opens the modal in a bare mode without the modal title, help and close buttons.
                 * @example
                 *
                 * var onClose = function(message) { console.log("modal closed", message); }
                 * //Open a modal when width and height are in pixels.
                 * Wix.Settings.openModal("http://sslstatic.wix.com/services/js-sdk/1.41.0/html/modal.html", 400, 400, "My modal's title", onClose);
                 *
                 * //Open a modal when width and height in percentages.
                 * Wix.Settings.openModal("http://sslstatic.wix.com/services/js-sdk/1.41.0/html/modal.html", '70%', '90%', "My modal's title", onClose);
                 */
                openModal: openModal,

                /**
                 * The closeWindow method is available only under a modal endpoint (will not have any effect for other endpoints). It allows the modal to close itself programmatically.
                 * @function
                 * @memberof Wix.Settings
                 * @since 1.37.0
                 * @see Wix.closeWindow
                 * @example
                 *
                 * // The following call will close the modal/popup window and send a the object message to the opener onClose callback
                 * var message = {"reason": "button-clicked"};
                 * Wix.Settings.closeWindow(message);
                 *
                 */
                closeWindow: closeWindow,
                /**
                 * Add a new component to the site.
                 * Once the component is added, the user would be directed to the page where the component was added.
                 * @function
                 * @memberof Wix.Settings
                 * @author lior.shefer@wix.com
                 * @since 1.45.0
                 * @experimental
                 * @example
                 *
                 * // create a new page from a pageId. User is prompted for page name, compId is returned in callback
                 * Wix.Settings.addComponent({
	        *      componentType : 'PAGE',
	        *      page : {
	        *          id : 'product-catalog',
	        *      }
	         * }, function(compId) {
	        *      console.log(compId);
	         * });
                 */
                addComponent: addComponent,

                /**
                 * Sets the width or height of the given component. Works for both pages and widgets.
                 * @function
                 * @author lior.shefer@wix.com
                 * @memberof Wix.Settings
                 * @since 1.45.0
                 * @experimental
                 * @example
                 *
                 *
                 * Wix.Settings.resizeComponent({
	         *    width: 400,
	         *    height:600
	         * });
                 */
                resizeComponent: sharedAPI.resizeComponent,

                /**
                 * Stores the value, which is a GUID. If a value for the given component did not previously exist, it is created. If it already exists, its existing value is overwritten with the new contents of value.
                 * @function
                 * @author lior.shefer@wix.com
                 * @param {String} guid - GUID value to set
                 * @memberof Wix.Settings
                 * @since 1.45.0
                 * @example
                 *
                 *
                 * Wix.Settings.setExternalId('71e2d60f-421d-4a7f-a63d-d45479b82349');
                 */
                setExternalId: setExternalId,

                /**
                 * Before showing sensitive information or making an action which requires a secure session,
                 * an app should verify that a secure session exists.
                 * Get a newly signed app instance by calling Wix.Settings.revalidateSession.
                 * @function
                 * @memberof Wix.Settings
                 * @since 1.47.0
                 * @param {Function} onSuccess Receives a newly signed and encoded app instance.
                 * @param {Function} onFailure
                 * @example
                 *
                 *
                 * Wix.Settings.revalidateSession(function(instanceData){
	         *  //handle success use-case
	         * }, function(error){
	         *    //Handle error use-case
	         * });
                 */
                revalidateSession: revalidateSession
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 21 */
    /*!******************************!*\
     !*** ./js/modules/Styles.js ***!
     \******************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
         * This is the description for the Styles namespace.
         * @memberof Wix
         * @namespace Wix.Styles
         */
        'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! privates/core */ 4), __webpack_require__(/*! privates/postMessage */ 7), __webpack_require__(/*! privates/reporter */ 10), __webpack_require__(/*! privates/templateUtils */ 12), __webpack_require__(/*! privates/styles */ 11), __webpack_require__(/*! privates/utils */ 9)], __WEBPACK_AMD_DEFINE_RESULT__ = function (core, postMessage, reporter, templateUtils, styles, utils) {

            var EDITOR_PARAM_TYPES = ['color', 'number', 'boolean', 'font'];

            var getStyle = function getStyle(callback, key) {
                if (styles.Cache[key] && callback) {
                    callback(styles.Cache[key]);
                } else {
                    core.addToReadyQ(function () {
                        if (callback) {
                            callback(styles.Cache[key]);
                        }
                    });
                }
                return styles.Cache[key];
            };

            var getDynamicCallback = function getDynamicCallback(onSuccess, onError) {
                return function (data) {
                    if (data && data.onError) {
                        if (onError) {
                            onError.apply(this, arguments);
                        }
                    } else {
                        if (onSuccess) {
                            onSuccess.apply(this, arguments);
                        }
                    }
                };
            };

            var isValidStyleType = function isValidStyleType(type) {
                return EDITOR_PARAM_TYPES.indexOf(type) > -1;
            };

            var getNormalizedStyleParamsObj = function getNormalizedStyleParamsObj(type, key, value) {
                if (!isValidStyleType(type)) {
                    reporter.reportSdkError('Invalid editor param type: "' + type + '"');
                    return false;
                }
                if (!utils.isString(key)) {
                    reporter.reportSdkError('Invalid key name');
                    return false;
                }
                if (!utils.isObject(value)) {
                    reporter.reportSdkError('Invalid value');
                    return false;
                }

                return {
                    key: key,
                    type: type,
                    param: value
                };
            };

            var setEditorParam = function setEditorParam(type, key, value, onSuccess, onError) {
                if (EDITOR_PARAM_TYPES.indexOf(type) === -1) {
                    reporter.reportSdkError('Invalid editor param type: "' + type + '"');
                }
                if (!key) {
                    reporter.reportSdkError('Invalid key name');
                }

                var callback = function callback(data) {
                    if (data && data.onError) {
                        if (onError) {
                            onError.apply(this, arguments);
                        }
                    } else {
                        if (onSuccess) {
                            onSuccess.apply(this, arguments);
                        }
                    }
                };

                postMessage.sendMessage(postMessage.MessageTypes.SET_STYLE_PARAM, {
                    type: type,
                    key: key,
                    param: value
                }, callback);
            };

            var getStyleParams = function getStyleParams(callback) {
                return getStyle(callback, 'style');
            };

            var setStyleParams = function setStyleParams(styleObjArr, onSuccess, onError) {
                if (!utils.isArray(styleObjArr)) {
                    reporter.reportSdkError(styleObjArr + ' is not a valid styles array.');
                    return;
                }

                var mappedStyleObjArr = [];
                var styleObj;
                var normalized;
                for (var i = 0; i < styleObjArr.length; i++) {
                    styleObj = styleObjArr[i];

                    if (!utils.has(styleObj, 'key') || !utils.has(styleObj, 'type') || !utils.has(styleObj, 'value')) {
                        reporter.reportSdkError('styleObjArr[' + i + '] is not a valid style object.');
                        return utils.isFunction(onError) && onError();
                    }

                    normalized = getNormalizedStyleParamsObj(styleObj.type, styleObj.key, styleObj.value);
                    if (!normalized) {
                        return utils.isFunction(onError) && onError();
                    }
                    mappedStyleObjArr.push(normalized);
                }

                var callback = getDynamicCallback(onSuccess, onError);
                postMessage.sendMessage(postMessage.MessageTypes.SET_STYLE_PARAM, mappedStyleObjArr, callback);
            };

            var setFontParam = function setFontParam(key, value, onSuccess, onError) {
                setEditorParam('font', key, value, onSuccess, onError);
            };

            var getEditorFonts = function getEditorFonts(callback) {
                return getStyle(callback, 'fontsMeta');
            };

            var getSiteTextPresets = function getSiteTextPresets(callback) {
                return getStyle(callback, 'siteTextPresets');
            };

            var getFontsSpriteUrl = function getFontsSpriteUrl(callback) {
                return getStyle(callback, 'fontsSpriteUrl');
            };

            var getStyleFontByKey = function getStyleFontByKey(fontKey) {
                var font = styles.Cache.mappedFonts && styles.Cache.mappedFonts['style.' + fontKey];
                return font;
            };

            var getStyleFontByReference = function getStyleFontByReference(fontReference) {
                return styles.Cache.siteTextPresets && styles.Cache.siteTextPresets[fontReference];
            };

            var getSiteColors = function getSiteColors(callback) {
                return getStyle(callback, 'siteColors');
            };

            var getStyleColorByKey = function getStyleColorByKey(colorKey) {
                var color = styles.Cache.mappedColors && styles.Cache.mappedColors['style.' + colorKey];
                return color ? color.value : '';
            };

            var getColorByreference = function getColorByreference(colorReference) {
                var color = styles.Cache.mappedColors && styles.Cache.mappedColors[colorReference];
                color = utils.shallowCloneObject(color, ['name']);
                return color;
            };

            var setColorParam = function setColorParam(key, value, onSuccess, onError) {
                if (value.hasOwnProperty('reference') && value.reference) {
                    value.color = getColorByreference(value.reference);
                }
                setEditorParam('color', key, value, onSuccess, onError);
            };

            var setNumberParam = function setNumberParam(key, value, onSuccess, onError) {
                setEditorParam('number', key, value, onSuccess, onError);
            };

            var setBooleanParam = function setBooleanParam(key, value, onSuccess, onError) {
                setEditorParam('boolean', key, value, onSuccess, onError);
            };

            var openColorPicker = function openColorPicker(position, onSuccess) {
                postMessage.sendMessage(postMessage.MessageTypes.OPEN_COLOR_PICKER, position, onSuccess);
            };

            var openFontPicker = function openFontPicker(position, onSuccess) {
                postMessage.sendMessage(postMessage.MessageTypes.OPEN_FONT_PICKER, position, onSuccess);
            };

            var setUILIBParamValue = function setUILIBParamValue(type, key, value) {
                styles.Cache.style[type][key] = value;
            };

            return {
                /**
                 *
                 * The getStyleParams method is used to retrieve the style parameters from the hosting Wix Platform.
                 * The parameters includes colors numbers, booleans.
                 * @function
                 * @memberof Wix.Styles
                 * @since 1.26.0
                 * @param {Function} callback Callback function to retrieve the style values.
                 * @example
                 *
                 * Wix.Styles.getStyleParams( function(styleParams) {
	         *    //do something with the style params
	         * });
                 */
                getStyleParams: getStyleParams,

                /**
                 * Sets multiple style parameters in one call.
                 * @function
                 * @memberof Wix.Styles
                 * @private
                 * @since 1.61.0
                 * @param {Array} an array of objects. Each object describes a style change and must contain a type {String} ('color'/'number'/'boolean'/'font'), key {String} and value {Object}.
                 * @param {Function} onSuccess A callback function, returns an object containing the updated styleProperties.
                 * @param {Function} onFailure Will be invoked in case of error.
                 *
                 * @example
                 *
                 *  var styleChangesArr = [{
	         *   "type": "font",
	         *   "key": "layout",
	         *   "value": {
	         *     "value": {
	         *       "value": "layout4",
	         *       "fontStyleParam": false
	         *     }
	         *   }
	         * }, {
	         *   "type": "boolean",
	         *   "key": "widgetButtonToggle",
	         *   "value": {
	         *     "value": true
	         *   }
	         * }]
                 *
                 * Wix.Styles.setStyleParams(styleChangesArr, function(styleProperties){console.log('success')}, function(){console.log('failure')})
                 * */
                setStyleParams: setStyleParams,

                /**
                 * Sets a style font parameter in the Wix site
                 *
                 * @function
                 * @memberof Wix.Styles
                 * @private
                 * @since 1.47.0
                 * @param {String} key a unique key describing a boolean style parameter that was chosen by the developer in the ui-lib component.
                 * @param {Object} value to store.
                 * @param {Function} onSuccess A callback function, returns on object containing styleProperties.
                 * @param {Function} onFailure This will be called in case of error.
                 */
                setFontParam: setFontParam,

                /**
                 * Returns the list of Wix fonts meta data from the editor
                 *
                 * @function
                 * @memberof Wix.Styles
                 * @private
                 * @since 1.26.0
                 * @param {Function} callback A callback function to pass the Editor's font.
                 */
                getEditorFonts: getEditorFonts,

                /**
                 *
                 * Returns the list of the text presets from the editor
                 * @function
                 * @memberof Wix.Styles
                 * @private
                 * @since 1.26.0
                 * @param {Function} callback A callback function to pass the text presets.
                 */
                getSiteTextPresets: getSiteTextPresets,

                /**
                 *
                 * Returns the url of the Wix fonts sprite, used to render the font picker.
                 *
                 * @function
                 * @memberof Wix.Styles
                 * @private
                 * @since 1.26.0
                 * @param {Function} callback A callback function to pass the sprite url.
                 */
                getFontsSpriteUrl: getFontsSpriteUrl,

                /**
                 *
                 * Returns style font by a unique key
                 *
                 * @function
                 * @memberof Wix.Styles
                 * @private
                 * @since 1.26.0
                 * @param {String} fontKey The font key that was chosen by the developer in the ui-lib component.
                 * @return {Object}
                 */
                getStyleFontByKey: getStyleFontByKey,

                /**
                 *
                 * Returns a style font by it's reference name
                 *
                 * @private
                 * @function
                 * @memberof Wix.Styles
                 * @since 1.26.0
                 * @param {String} fontReference Font reference, e.g., 'Title'.
                 * @return {Object}
                 */
                getStyleFontByReference: getStyleFontByReference,

                /**
                 * Function getSiteColors
                 *
                 * Returns the currently active site colors
                 * @private
                 * @function
                 * @memberof Wix.Styles
                 * @since 1.26.0
                 * @param {Function} callback
                 */
                getSiteColors: getSiteColors,

                /**
                 *
                 * Returns the css color value of saved style parameter
                 *
                 * @private
                 * @function
                 * @memberof Wix.Styles
                 * @since 1.26.0
                 * @param {String} colorKey A unique key describing a color style parameter that was chosen by the developer in the ui-lib component.
                 * @return {String} css Color string. e.g., "#FFFFFF" or "rgba(0,0,0,0.5)"
                 */
                getStyleColorByKey: getStyleColorByKey,

                /**
                 *
                 * Returns the color object of editor style
                 *
                 * @private
                 * @function
                 * @memberof Wix.Styles
                 * @since 1.26.0
                 * @param {String} colorReference A unique key describing a theme color parameter.
                 * @return {Object} data A map describing a Wix style color.
                 */
                getColorByreference: getColorByreference,

                /**
                 *
                 * Sets a style color parameter
                 *
                 * @private
                 * @function
                 * @memberof Wix.Styles
                 * @since 1.47.0
                 * @param {String} key A unique key describing a color style parameter that was chosen by the developer in the ui-lib component.
                 * @param {Object} value
                 * @param {Function} onSuccess A callback function, returns on object containing styleProperties.
                 * @param {Function} onFailure This will be called in case of error.
                 */
                setColorParam: setColorParam,

                /**
                 * Function setNumberParam
                 *
                 * Sets a style number parameter
                 *
                 * @private
                 * @function
                 * @memberof Wix.Styles
                 * @since 1.47.0
                 * @param {String} key A unique key describing a number style parameter that was chosen by the developer in the ui-lib component.
                 * @param {Object} value
                 * @param {Function} onSuccess A callback function, returns on object containing styleProperties.
                 * @param {Function} onFailure This will be called in case of error.
                 */
                setNumberParam: setNumberParam,

                /**
                 * Function setBooleanParam
                 *
                 * Sets a style boolean parameter
                 *
                 * @private
                 * @function
                 * @memberof Wix.Styles
                 * @since 1.47.0
                 * @param {String} key A unique key describing a boolean style parameter that was chosen by the developer in the ui-lib component.
                 * @param {Object} value
                 * @param {Function} onSuccess A callback function, returns on object containing styleProperties.
                 * @param {Function} onFailure This will be called in case of error.
                 */
                setBooleanParam: setBooleanParam,

                /**
                 * Function openColorPicker
                 * Opens the editor color picker panel
                 * @memberof Wix.Styles
                 * @private
                 * @since 1.61.0
                 */
                openColorPicker: openColorPicker,

                /**
                 * Function openFontPicker
                 * Opens the editor font picker panel
                 * @memberof Wix.Styles
                 * @private
                 * @since 1.61.0
                 */
                openFontPicker: openFontPicker,

                /**
                 * Function setUILIBParamValue
                 * Internal api for use only w/ the ui-lib to sync state between the editor and  both font and color pickers.
                 * @memberof Wix.Styles
                 * @private
                 * @since 1.61.0
                 */
                setUILIBParamValue: setUILIBParamValue
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 22 */
    /*!****************************!*\
     !*** ./js/modules/Base.js ***!
     \****************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
         * This is the description for the Wix namespace.
         * @namespace Wix
         */
        'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! Utils */ 18), __webpack_require__(/*! Styles */ 21), __webpack_require__(/*! privates/utils */ 9), __webpack_require__(/*! Theme */ 23), __webpack_require__(/*! WindowOrigin */ 3), __webpack_require__(/*! WindowPlacement */ 24), __webpack_require__(/*! privates/reporter */ 10), __webpack_require__(/*! privates/postMessage */ 7), __webpack_require__(/*! privates/sharedAPI */ 25)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Utils, Styles, utils, Theme, WindowOrigin, WindowPlacement, reporter, postMessage, sharedAPI) {

            var openModal = function openModal(url, width, height, onClose, theme) {
                if (Utils.getViewMode() === "editor") {
                    reporter.reportSdkError('Invalid view mode. This function cannot be called in editor mode. Supported view modes are: [preview, site]');
                    return;
                }

                var args = {
                    url: url,
                    width: width,
                    height: height,
                    theme: theme || Theme.DEFAULT
                };

                postMessage.sendMessage(postMessage.MessageTypes.OPEN_MODAL, args, onClose);
            };

            var setHeight = function setHeight(height, options) {
                if (!utils.isNumber(height)) {
                    reporter.reportSdkError('Mandatory argument - height - should be of type Number');
                    return;
                } else if (height < 0) {
                    reporter.reportSdkError('height should be a positive integer');
                    return;
                }

                var overflow;

                if (options) {
                    if (utils.isObject(options) && utils.isBoolean(options.overflow)) {
                        overflow = options.overflow;
                    } else {
                        reporter.reportSdkError('Invalid argument - options should be of type object, containing boolean indicating if to resize this component over other components on the page');
                        return;
                    }
                }

                postMessage.sendMessage(postMessage.MessageTypes.HEIGHT_CHANGED, {
                    height: height,
                    overflow: overflow
                });
            };

            var closeWindow = function closeWindow(message) {
                var args = {
                    message: message
                };
                postMessage.sendMessage(postMessage.MessageTypes.CLOSE_WINDOW, args);
            };

            var scrollTo = function scrollTo(x, y) {
                if (Utils.getViewMode() === 'editor') {
                    reporter.reportSdkError('Invalid view mode. This function cannot be called in editor mode. Supported view modes are: [preview, site]');
                    return;
                }
                var args = {
                    x: x,
                    y: y
                };

                postMessage.sendMessage(postMessage.MessageTypes.SCROLL_TO, args);
            };

            var navigateToComponent = function navigateToComponent(compId, options, onFailure) {
                if (Utils.getViewMode() === 'editor') {
                    reporter.reportSdkError('Invalid view mode. This function cannot be called in editor mode. Supported view modes are: [preview, site]');
                    return;
                }
                if (!utils.isString(compId)) {
                    reporter.reportSdkError('Missing mandatory argument - compId - should be of type String');
                    return;
                }

                var args = {
                    compId: compId
                };

                if (utils.isFunction(options)) {
                    onFailure = options;
                } else if (options) {
                    if (utils.isObject(options) && options.pageId && utils.isString(options.pageId)) {
                        args.pageId = options.pageId;
                    } else {
                        reporter.reportSdkError('Invalid argument - options should be of type object, containing string representing page id');
                        return;
                    }
                }

                postMessage.sendMessage(postMessage.MessageTypes.NAVIGATE_TO_COMPONENT, args, onFailure);
            };

            var getSiteInfo = function getSiteInfo(onSuccess) {
                postMessage.sendMessage(postMessage.MessageTypes.SITE_INFO, null, onSuccess);
            };

            var getSitePages = function getSitePages(callback) {
                postMessage.sendMessage(postMessage.MessageTypes.GET_SITE_PAGES, null, callback);
            };

            var getStyleParams = function getStyleParams(callback) {
                reporter.reportSdkMsg('Wix.getStyleParams is DEPRECATED use Wix.Styles.getStyleParams');
                return Styles.getStyleParams(callback);
            };

            var reportHeightChange = function reportHeightChange() {
                reporter.reportSdkError('Deprecated, use Wix.setHeight instead');
            };

            var pushState = function pushState(state) {
                if (!utils.isString(state)) {
                    reporter.reportSdkError('Missing mandatory argument - state - should be of type String');
                    return;
                }
                postMessage.sendMessage(postMessage.MessageTypes.APP_STATE_CHANGED, {
                    state: state
                });
            };

            var getCurrentPageId = function getCurrentPageId(callback) {
                postMessage.sendMessage(postMessage.MessageTypes.GET_CURRENT_PAGE_ID, null, callback);
            };

            var navigateToPage = function navigateToPage(pageId) {
                if (!pageId) {
                    reporter.reportSdkError('Missing mandatory argument - pageId');
                    return;
                }

                postMessage.sendMessage(postMessage.MessageTypes.NAVIGATE_TO_PAGE, {
                    pageId: pageId
                });
            };

            var currentMember = function currentMember(onSuccess) {
                if (Utils.getViewMode() !== "site") {
                    reporter.reportSdkError('Invalid view mode. This function cannot be called in editor/preview mode. Supported view mode is: [site]');
                    return;
                }
                postMessage.sendMessage(postMessage.MessageTypes.SM_CURRENT_MEMBER, null, onSuccess);
            };

            var requestLogin = function requestLogin(onSuccess) {
                postMessage.sendMessage(postMessage.MessageTypes.SM_REQUEST_LOGIN, null, onSuccess);
            };

            var openPopup = function openPopup(url, width, height, position, onClose, theme) {
                if (Utils.getViewMode() === 'editor') {
                    reporter.reportSdkError('Invalid view mode. This function cannot be called in editor mode. Supported view modes are: [preview, site]');
                    return;
                }

                // in case position was omitted and the last argument is the onClose callback
                if (arguments.length === 4 && utils.isFunction(arguments[3])) {
                    position = {};
                }

                position = position || {};
                position.origin = position.origin || WindowOrigin.DEFAULT;
                position.placement = position.placement || WindowPlacement.CENTER;

                var args = {
                    url: url,
                    width: width,
                    height: height,
                    position: position,
                    theme: theme || Theme.DEFAULT
                };
                postMessage.sendMessage(postMessage.MessageTypes.OPEN_POPUP, args, onClose);
            };

            var resizeWindow = function resizeWindow(width, height, onComplete) {
                var args = {
                    width: width,
                    height: height
                };
                postMessage.sendMessage(postMessage.MessageTypes.RESIZE_WINDOW, args, onComplete);
            };

            var addEventListener = function addEventListener(eventName, callBack) {
                return postMessage.addEventListenerInternal(eventName, callBack, false);
            };

            var removeEventListener = function removeEventListener(eventName, callBackOrId) {
                postMessage.removeEventListenerInternal(eventName, callBackOrId, false);
            };

            var scrollBy = function scrollBy(x, y) {
                if (Utils.getViewMode() === 'editor') {
                    reporter.reportSdkError('Invalid view mode. This function cannot be called in editor mode. Supported view modes are: [preview, site]');
                    return;
                }
                var args = {
                    x: x,
                    y: y
                };
                postMessage.sendMessage(postMessage.MessageTypes.SCROLL_BY, args);
            };

            var getBoundingRectAndOffsets = function getBoundingRectAndOffsets(callback) {
                postMessage.sendMessage(postMessage.MessageTypes.BOUNDING_RECT_AND_OFFSETS, null, callback);
            };

            var getExternalId = function getExternalId(onSuccess, onError) {
                if (!onSuccess) {
                    reporter.reportSdkError('Mandatory arguments - an onSuccess callback must be specified');
                }

                var callback = function callback(data) {
                    if (data && data.onError) {
                        if (onError) {
                            onError.apply(this, arguments);
                        }
                    } else {
                        onSuccess.apply(this, arguments);
                    }
                };

                postMessage.sendMessage(postMessage.MessageTypes.GET_EXTERNAL_ID, undefined, callback);
            };

            var resizeComponent = function resizeComponent(options, onSuccess, onFailure) {
                var viewMode = Utils.getViewMode();
                if (viewMode !== 'editor') {
                    reporter.reportSdkError(viewMode + ' is an invalid view mode. This function can only be called in editor mode.');
                } else {
                    sharedAPI.resizeComponent(options, onSuccess, onFailure);
                }
            };

            var revalidateSession = function revalidateSession(onSuccess, onError) {
                sharedAPI.revalidateSession(onSuccess, onError);
            };

            return {
                /**
                 * The openModal method allows an app to open a modal window within the site or preview.
                 *
                 * A modal is a runtime Widget that is not part of the site structure.
                 *
                 * The modal window is a singleton (every new modal closes the previous one) and contains a lightbox.
                 *
                 * A modal can be dismissed by the user if it touches the lightbox, presses the closing button or by the app itself
                 * if it calls the Wix.closeWindow from within the modal iframe.
                 *
                 * The onClose argument can be used to detect modal close.
                 * @function
                 * @memberof Wix
                 * @since 1.16.0
                 * @param {String} url Model iframe url.
                 * @param {Number} width The modal window width.
                 * @param {Number} height The modal window height.
                 * @param {Function} [onClose] Onclose callback function.
                 * @param {Wix.Theme} [theme] The modal window theme, one of Wix.Theme values. Wix.Theme.DEFAULT is used for regular modal look & feel - border, shadow, close button. Wix.Theme.BARE is used for no decorations at all.
                 * @example
                 *
                 * var onClose = function(message) { console.log("modal closed", message); }
                 * Wix.openModal("http://sslstatic.wix.com/services/js-sdk/1.16.0/html/modal.html", 400, 400, onClose);
                 *
                 */
                openModal: openModal,

                /**
                 *
                 * @function
                 * @memberof Wix
                 *
                 * @description
                 *
                 * The openPopup method allows an app to open a popup window within the site or preview.
                 *
                 * A popup is a runtime Widget that is not part of the site structure.
                 *
                 * Unlike the modal, a popup is not a singleton and doesn't present a lightbox.
                 *
                 * A popup can also be positioned by the caller. We currently support a predefined set of
                 * positions that can be used when opening a popup.
                 *
                 * A popup is dismissed by the user if he presses the close button or by the app itself if it calls the Wix.closeWindow from within
                 * the popup iframe.
                 *
                 * The onClose argument can be used to detect modal close.
                 *
                 * Popup positioning
                 * A popup position is determined by two properties, it's position origin and it's position placement.
                 * A position origin determines the origin point (x,y) which will be used to apply the position placement.
                 * The position origin is defined under [Wix.WindowOrigin](Wix.WindowOrigin) and can have the following values:
                 *
                 * [Wix.WindowOrigin.DEFAULT](Wix.WindowOrigin.html#DEFAULT)
                 *
                 * [Wix.WindowOrigin.FIXED](Wix.WindowOrigin.html#FIXED)
                 *
                 * [Wix.WindowOrigin.RELATIVE]((Wix.WindowOrigin.html#RELATIVE)
                 *
                 * [Wix.WindowOrigin.ABSOLUTE]((Wix.WindowOrigin.html#ABSOLUTE)
                 *
                 * A position placement is a predefined set of locations when a popup will be placed.
                 * The placement values are valid for Wix.WindowOrigin.FIXED, Wix.WindowOrigin.ABSOLUTE and Wix.WindowOrigin.RELATIVE origins but mapped to a different positions on the screen.
                 * The position placement is defined under Wix.WindowPlacement and can have the following values:
                 *
                 * [Wix.WindowPlacement.TOP_LEFT](Wix.WindowPlacement.html#TOP_LEFT)
                 *
                 * [Wix.WindowPlacement.TOP_CENTER](Wix.WindowPlacement.html#TOP_CENTER)
                 *
                 * [Wix.WindowPlacement.TOP_RIGHT](Wix.WindowPlacement.html#TOP_RIGHT)
                 *
                 * [Wix.WindowPlacement.CENTER_LEFT](Wix.WindowPlacement.html#CENTER_LEFT)
                 *
                 * [Wix.WindowPlacement.CENTER](Wix.WindowPlacement.html#CENTER)
                 *
                 * [Wix.WindowPlacement.CENTER_RIGHT](Wix.WindowPlacement.html#CENTER_RIGHT)
                 *
                 * [Wix.WindowPlacement.BOTTOM_LEFT](Wix.WindowPlacement.html#BOTTOM_LEFT)
                 *
                 * [Wix.WindowPlacement.BOTTOM_CENTER](Wix.WindowPlacement.html#BOTTOM_CENTER)
                 *
                 * [Wix.WindowPlacement.BOTTOM_RIGHT](Wix.WindowPlacement.html#BOTTOM_RIGHT)
                 *
                 * @since 1.17.0
                 * @param {String} url Popup iframe's url.
                 * @param {Number} width Popup width in pixels.
                 * @param {Number} height Popup height in pixels.
                 * @param {Object} position
                 * @param {Function} [onClose] Callback function.
                 * @param {Wix.Theme} [theme] The popup window theme, one of Wix.Theme values. Wix.Theme.DEFAULT is used for regular popup look & feel - border, shadow, close button. Wix.Theme.BARE is used for no decorations at all.
                 *
                 * Note:
                 * In a RELATIVE or ABSOLUTE origin, there is a chance that the requested popup can not fit in the
                 * desired position since it's size exceeds the margin between the opening Widget and the screen size.
                 * A Widget position is determined by site owners when they build their sites while the Widget
                 * is not aware to it's position in the site. When the Wix Platform render popups,
                 * it calculates if a popup in the requested size can fit the requested position.
                 * If not, the Wix Platform will default the position to {origin: Wix.WindowOrigin.FIXED, placement: Wix.WindowPlacement.CENTER},
                 * i.e., the center of the screen.
                 *
                 *
                 * @example
                 * // The following call will open a popup window positioned in the center of the screen
                 * var position =  {origin: Wix.WindowOrigin.FIXED, placement: Wix.WindowPlacement.CENTER};
                 * var onClose = function(message) { console.log("popup closed", message) };
                 * Wix.openPopup("http://sslstatic.wix.com/services/js-sdk/1.16.0/html/modal.html", 400, 400, position, onClose);
                 * @example
                 * // The following call will open a popup window positioned bottom-right to the point (x, y), originated in the top-left corner of the widget
                 * var position =  {origin: Wix.WindowOrigin.ABSOLUTE, placement: Wix.WindowPlacement.BOTTOM_RIGHT, x: 20, y: 100};
                 * var onClose = function(message) { console.log("popup closed", message) };
                 * Wix.openPopup("http://sslstatic.wix.com/services/js-sdk/1.16.0/html/modal.html", 400, 400, position, onClose);
                 *
                 */
                openPopup: openPopup,

                /**
                 * This method requests the hosting Wix platform to change the iframe height inside the site/editor.
                 * @function
                 * @memberof Wix
                 * @since 1.50.0
                 * @param {Number} height An integer that represents the desired height in pixels.
                 * @param {Object} [Options] options may contain boolean value telling the platform to display and resize this component over other components on the page. By default, other components will be relocated (pushed down) as a result of this operation.
                 e.
                 * @example
                 *
                 * Wix.setHeight(height);
                 *
                 */
                setHeight: setHeight,

                /**
                 * The closeWindow method is available only under a modal endpoint (will not have any effect for other endpoints). It allows the modal to close itself programmatically.
                 * @function
                 * @memberof Wix
                 * @since 1.16.0
                 * @param {Object} [message] A custom message object to pass to the opener's onClose callback function.
                 * @example
                 *
                 * // The following call will close the modal/popup window and send a the object message to the opener onClose callback
                 * var message = {"reason": "button-clicked"};
                 * Wix.closeWindow(message);
                 *
                 */
                closeWindow: closeWindow,

                /**
                 * The scrollTo method will perform a scroll to a fixed position in the app's hosting site window exactly as the standard method do.
                 * Available in preview and site view modes only.
                 * @function
                 * @memberof Wix
                 * @since 1.19.0
                 * @param {Number} x The coordinate to scroll to, along the x-axis.
                 * @param {Number} y The coordinate to scroll to, along the y-axis.
                 * @example
                 *
                 * Wix.scrollTo(0, 0);
                 *
                 */
                scrollTo: scrollTo,

                /**
                 * The navigateToComponent method will navigate to a component on the current page, or to a component on a page with the pageId provided.
                 * @function
                 * @memberof Wix
                 * @since 1.47.0
                 * @param {String} compId of the component to navigate to
                 * @param {Object} [Options] options may contain pageId to navigate to. When pageId is not provided, the method will navigate to a component with the given id on the current page.
                 * @param {Function} [onFailure] the function will return an object that specifies the error which occurred, it will be invoked in the following scenarios:
                 *        1. Current page does not contain the given component (and pageId was not provided).
                 *        2. Provided pageId is not valid.
                 *        3. PageId is given but the page does not contain a component with the provided component id. Note: The method will first navigate to a page with the provided pageId as an effect of this API call.
                 * @example
                 *
                 * // The following call will scroll to a component with id = comp1, on a page with id = page1
                 * Wix.navigateToComponent('comp1', {pageId: 'page1'}, function(error) { console.log(error.error)} );
                 *
                 */
                navigateToComponent: navigateToComponent,

                /**
                 * The scrollBy method will perform a scroll by the specified number of pixels in the app's hosting site window exactly as the standard method - http://www.w3schools.com/jsref/met_win_scrollto.asp do.
                 * Available in preview and site view modes only.
                 * @function
                 * @memberof Wix
                 * @since 1.19.0
                 * @param {Number} x How many pixels to scroll by, along the x-axis (horizontal)
                 * @param {Number} y How many pixels to scroll by, along the y-axis (vertical)
                 * @example
                 *
                 * // The following call will scroll to the top of the page
                 * Wix.scrollBy(0, 0);
                 *
                 */
                scrollBy: scrollBy,

                /**
                 * The getsiteInfo method is used to retrieve information about the host site in which the app is shown.
                 * @function
                 * @memberof Wix
                 * @since 1.3.0
                 * @param callback (Function) a callback function to receive the site pages.
                 * @return {Object} data JSON containing the site info. It's properties are:
                 *
                 *  Name           | Type      | Description
                 * ----------------|-----------|------------
                 * siteTitle       | `String`  | The title of the site that is used for SEO.
                 * pageTitle       | `String`  | The site current page title that is used for SEO.
                 * siteDescription | `String`  | The description of the site that is used for SEO
                 * siteKeywords    | `String`  | The keywords which were related to the site and are used for SEO.
                 * referrer        | `String`  | The referrer header of the http request.
                 * url             | `String`  | The full url taken from the location.href, includes internal site state, For example: http://user.wix.com/site-name#!pageTitle/pageId, http://www.domain.com#!pageTitle/pageId. This field is omitted when running in Editor view mode.
                 * baseUrl         | `String`  | Base url of the current site, for example: http://user.wix.com/site-name, http://www.domain.com
                 *
                 * @example
                 * Wix.getSiteInfo( function(siteInfo) {
	         *      // do something with the siteInfo
	         * });
                 */
                getSiteInfo: getSiteInfo,

                /**
                 * The getSitePages method is used to retrieve the site structure from the hosting Wix Platform. The site structure includes visible and hidden pages as well as sub pages.
                 * @function
                 * @memberof Wix
                 * @since 1.17.0
                 * @param {Function} callback A callback function to receive the site pages.
                 * @return {Array} Array containing an ordered set of the site pages. A single page description contains the following properties:
                 *
                 *  Name             | Type      | Description
                 * ------------------|-----------|------------
                 * id                | `String`  | The page id.
                 * title             | `String`  | The page title.
                 * hide              | `Boolean` | A flag indicating if the page is hidden.
                 * subPages(optional)| `Array`   | An ordered set of sub pages.
                 * @example
                 *
                 * Wix.getSitePages(function(sitePages) {
	         *    // do something with the site pages
	         * });
                 */
                getSitePages: getSitePages,

                /**
                 * The getBoundingRectAndOffsets method returns the app's component bounding rect and site's offset.
                 * @function
                 * @memberof Wix
                 * @since 1.26.0
                 * @param {Function} callback A callback function which passes back the bounding rect and offsets.
                 *
                 * @example
                 * Wix.getBoundingRectAndOffsets(function(data){
	         *    // use the offsets and rect details
	         * });
                 */
                getBoundingRectAndOffsets: getBoundingRectAndOffsets,

                /**
                 * The removeEventListener method allows to remove previously assigned event listeners that were specified using Wix.addEventListener.
                 * @function
                 * @memberof Wix
                 * @since 1.25.0
                 * @param {Wix.Events} eventName Unique event identifier.
                 * @param {Function} callBackOrId A callback function that was used with addEventListener or an id returned by addEventListener.
                 *
                 * @example
                 * var callback = function(){};
                 * var id = Wix.addEventListener(Wix.Events.EDIT_MODE_CHANGE, function(data) {
	         *     //do something
	         * });
                 * Wix.addEventListener(Wix.Events.PAGE_NAVIGATION, callback);
                 * // remove listener as a callback function
                 * Wix.removeEventListener(Wix.Events.PAGE_NAVIGATION, callback);
                 * // remove listener as an id
                 * Wix.removeEventListener(Wix.Events.EDIT_MODE_CHANGE, id);
                 */
                removeEventListener: removeEventListener,

                /**
                 * The addEventListener method lets the App listen to events that happens inside the editor/site.
                 * @function
                 * @memberof Wix
                 * @since 1.11.0
                 * @param {Wix.Events} eventName Unique event identifier.
                 * @param {Function} handler A callback function that will get called by the SDK once an event occur.
                 * The events that you can currently listen to are:
                 * @see Wix.Events.EDIT_MODE_CHANGE
                 * @see Wix.Events.PAGE_NAVIGATION_CHANGE
                 * @see Wix.Events.PAGE_NAVIGATION
                 * @see Wix.Events.PAGE_NAVIGATION_IN
                 * @see Wix.Events.PAGE_NAVIGATION_OUT
                 * @see Wix.Events.SCROLL
                 * @see Wix.Events.COMPONENT_DELETED
                 * @see Wix.Events.SITE_PUBLISHED
                 * @see Wix.Events.SETTINGS_UPDATED
                 * @see Wix.Events.STATE_CHANGED
                 * @see Wix.Events.THEME_CHANGE
                 *
                 */
                addEventListener: addEventListener,

                /**
                 * The resizeWindow method is valid only for fixed position widgets. It re-sizes the widget window.
                 * @function
                 * @memberof Wix
                 * @since 1.19.0
                 * @param {Number} width Window width in pixels.
                 * @param {Number} height Window height in pixels.
                 * @param {Function} onComplete On resize complete callback function.
                 * @example
                 *
                 * // The following call will resize the widget window
                 * Wix.resizeWindow(300,300);
                 *
                 */
                resizeWindow: resizeWindow,

                /**
                 *
                 * <div style="margin:20px 0;background-color:blue;border-radius: 5px;border-style: solid;border-width: 1px;padding:10px;background-color: #E0EFFF;border-color: #9EB6D4;">
                 * This method is part of Wix Site Members feature. To use it a manual provisioning is required by the Wix team, contact apps@wix.com to enable it for your app.
                 * </div>
                 *
                 * This method is relevant for live sites and not from the App Settings. The method requests the current site visitor of the Wix site to log-in or register.
                 *
                 * After a successful log-in, the Wix site will reload including the app iframe and the new signed-instance parameter will contain the details of the logged in user.
                 *
                 *
                 * The method has an affect only for a published site. If called in the Wix editor, the method has no affect.          *
                 *
                 * @function
                 * @memberof Wix
                 * @since 1.6.0
                 * @param {Function} callback A callback function to receive the current member details.
                 * @example
                 *
                 * Wix.requestLogin(function (data) {
	         *    //do something with data
	         * }
                 */
                requestLogin: requestLogin,

                /**
                 *
                 * <div style="margin:20px 0;background-color:blue;border-radius: 5px;border-style: solid;border-width: 1px;padding:10px;background-color: #E0EFFF;border-color: #9EB6D4;">
                 * This method is part of Wix Site Members feature. To use it a manual provisioning is required by the Wix team, contact apps@wix.com to enable it for your app.
                 * </div>
                 *
                 * This method is relevant for live sites and not from the App Settings.
                 *
                 * @function
                 * @memberof Wix
                 * @since 1.6.0
                 * @param {Function} callback A callback function to receive the current member details.
                 * @returns {Object} JSON Containing the user's details.
                 *
                 * This method returns the details of the current site visitor that is logged into the Wix site, using the Wix site member options.
                 *
                 * Name              | Type       | Value
                 * ------------------|-----------|------------
                 * name  | 'String'  | The current member's name
                 * email | 'String'  | The current member's email
                 * id    | 'String'  | The current member's id
                 * owner | 'Boolean' | Indicates if the user is the owner of the site
                 *
                 * @example
                 *
                 * Wix.currentMember(function(memberDetails) {
	         *   // save memberDetails
	         * }
                 *
                 *
                 */
                currentMember: currentMember,

                /**
                 * The navigateToPage method is used to navigate to a specific page inside the editor/preview/site.
                 *
                 * The function accepts a single argument, page id, which is retrieved by using the method Wix.getSitePages().
                 *
                 * @function
                 * @memberof Wix
                 * @since 1.17.0
                 * @param {String} pageId A string representing the page id target.
                 * @returns {Object} JSON Containing the user's details.
                 *
                 * This method returns the details of the current site visitor that is logged into the Wix site, using the Wix site member options.
                 *
                 * Name              | Type       | Value
                 * ------------------|-----------|------------
                 * name  | 'String'  | The current member's name
                 * email | 'String'  | The current member's email
                 * id    | 'String'  | The current member's id
                 * owner | 'Boolean' | Indicates if the user is the owner of the site
                 *
                 * @example
                 *
                 * Wix.navigateToPage(PAGE_ID);
                 */
                navigateToPage: navigateToPage,

                /**
                 * The getCurrentPageId method returns the page id of the app hosting page.
                 *
                 * @function
                 * @memberof Wix
                 * @since 1.31.0
                 * @author lior.shefer@wix.com
                 * @example
                 *
                 * // The following call will return the page id of the app hosting page.
                 * Wix.getCurrentPageId(function(pageId) {
	         *     //store the site pageId
	         * }
                 */
                getCurrentPageId: getCurrentPageId,

                /**
                 * This method enable AJAX style Page apps to inform the Wix platform about a change in the app internal state. The new state will be reflected in the site/page URL.
                 * Once you call the pushState method, the browser top window URL will change the 'app-state' path part to the new state you provide with the pushState
                 * method (similar to the browser history API - https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
                 * For a full explanation of how deep-linking works with AJAX style apps, see Deep Linking for AJAX Style Apps - http://dev.wix.com/docs/display/DRAF/Developing+a+Page+App.
                 * @function
                 * @memberof Wix
                 * @since 1.8.0
                 * @param {String} state New app's state to push into the editor history stack.
                 * @example
                 *
                 * Wix.pushState("app-state");
                 *
                 */
                pushState: pushState,

                /**
                 * This method requests the hosting Wix platform to change the iframe height inside the site/editor.
                 * @function
                 * @memberof Wix
                 * @since 1.8.0
                 * @deprecated
                 * @see Wix.setHeight
                 * @param {Number} height An integer that represents the desired height in pixels.
                 *
                 * @example
                 *
                 * Wix.reportHeightChange(height);
                 *
                 */
                reportHeightChange: reportHeightChange,

                /**
                 * The getStyleParams method is used to retrieve the style parameters from the hosting Wix Platform. The parameters includes colors numbers, booleans.
                 * @function
                 * @memberof Wix
                 * @since 1.22.0
                 * @deprecated
                 * @see Wix.Styles.getStyleParams
                 * @param {function} callback A callback function to receive the style parameters.
                 *
                 * @example
                 *
                 * Wix.getStyleParams( function(styleParams) {
	         *  // do something with the style params
	         * });
                 *
                 */
                getStyleParams: getStyleParams,

                /**
                 * Call this method to get the GUID corresponding to the calling component, if one exists. If one does not exist, undefined will be returned.
                 * @function
                 * @author lior.shefer@wix.com
                 * @param {function} onSuccess - the GUID value, if one exists. If one does not exist, undefined will be returned.
                 * @param {function} [onFailure] - onError message
                 * @memberof Wix.Settings
                 * @since 1.45.0
                 * @example
                 *
                 *
                 * Wix.getExternalId(function (value) {
	         *   // do something w/ the value
	         * });
                 */
                getExternalId: getExternalId,

                /**
                 * Sets the width of the given component. Works for both pages and widgets.
                 * Available in editor view mode only.
                 * @function
                 * @author lior.shefer@wix.com
                 * @memberof Wix
                 * @since 1.47.0
                 * @param {Object} options - options object w/ width and/or height
                 * @param {function} onSuccess - onSuccess message
                 * @param {function} [onFailure] - onError message
                 * @experimental
                 * @example
                 *
                 *
                 * Wix.Settings.resizeComponent({
	         *    width: 400,
	         *    height:600
	         * });
                 */
                resizeComponent: resizeComponent,

                revalidateSession: revalidateSession
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 23 */
    /*!*****************************!*\
     !*** ./js/modules/Theme.js ***!
     \*****************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
         * A theme for a popup window.
         * @memberof Wix
         * @namespace Theme
         */
        'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return {
                /**
                 * Default theme is used for regular popup look & feel - border, shadow, close button.
                 * @memberof Wix.Theme
                 * @since 1.17.0
                 */
                DEFAULT: 'DEFAULT',

                /**
                 * Bare theme is used for no decorations at all.
                 * @memberof Wix.Theme
                 * @since 1.17.0
                 */
                BARE: 'BARE'
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 24 */
    /*!***************************************!*\
     !*** ./js/modules/WindowPlacement.js ***!
     \***************************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_RESULT__;/**
         * Represents a predefined values to position a Wix popup windows without the hassle of figuring out the position yourself.
         * Can be used to position the window relatively (to the calling widget) or absolutely (to the view port).
         *
         * @memberof Wix
         * @namespace WindowPlacement
         */
        'use strict';

        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return {
                /**
                 * Top left placement.
                 * @memberof Wix.WindowPlacement
                 * @since 1.17.0
                 */
                TOP_LEFT: 'TOP_LEFT',

                /**
                 * Top right placement.
                 * @memberof Wix.WindowPlacement
                 * @since 1.17.0
                 */
                TOP_RIGHT: 'TOP_RIGHT',

                /**
                 * Bottom right placement.
                 * @memberof Wix.WindowPlacement
                 * @since 1.17.0
                 */
                BOTTOM_RIGHT: 'BOTTOM_RIGHT',

                /**
                 * Bottom left placement.
                 * @memberof Wix.WindowPlacement
                 * @since 1.17.0
                 */
                BOTTOM_LEFT: 'BOTTOM_LEFT',

                /**
                 * Top center placement.
                 * @memberof Wix.WindowPlacement
                 * @since 1.17.0
                 */
                TOP_CENTER: 'TOP_CENTER',

                /**
                 * Center right placement.
                 * @memberof Wix.WindowPlacement
                 * @since 1.17.0
                 */
                CENTER_RIGHT: 'CENTER_RIGHT',

                /**
                 * Bottom center placement.
                 * @memberof Wix.WindowPlacement
                 * @since 1.17.0
                 */
                BOTTOM_CENTER: 'BOTTOM_CENTER',

                /**
                 * Center left placement.
                 * @memberof Wix.WindowPlacement
                 * @since 1.17.0
                 */
                CENTER_LEFT: 'CENTER_LEFT',

                /**
                 * (FIXED origin only) center of the screen.
                 * @memberof Wix.WindowPlacement
                 * @since 1.17.0
                 * @deprecated
                 */
                CENTER: 'CENTER'
            };
        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 25 */
    /*!******************************************!*\
     !*** ./js/modules/privates/sharedAPI.js ***!
     \******************************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! privates/utils */ 9), __webpack_require__(/*! privates/postMessage */ 7), __webpack_require__(/*! privates/reporter */ 10), __webpack_require__(/*! privates/responseHandlers */ 14)], __WEBPACK_AMD_DEFINE_RESULT__ = function (utils, postMessage, reporter, responseHandlers) {
            'use strict';

            var resizeComponent = function resizeComponent(options, onSuccess, onFailure) {
                if (!options || !options.width && !options.height) {
                    reporter.reportSdkError('Mandatory arguments - width or height must be supplied');
                    return;
                }

                var args = {};

                if (options.width) {
                    args.width = options.width;
                }

                if (options.height) {
                    args.height = options.height;
                }

                var callback = function callback(data) {
                    if (data.onError) {
                        if (onFailure) {
                            onFailure(data);
                        }
                    } else {
                        if (onSuccess) {
                            onSuccess(data);
                        }
                    }
                };

                postMessage.sendMessage(postMessage.MessageTypes.RESIZE_COMPONENT, args, callback);
            };

            var openMediaDialog = function openMediaDialog(messageType, mediaType, multipleSelection, onSuccess, onCancel) {
                if (!utils.isString(mediaType) || !isValidMediaType.call(this, mediaType)) {
                    reporter.reportSdkError('Missing mandatory argument - mediaType must be one of Wix.Settings.MediaType');
                    return;
                }

                if (!utils.isBoolean(multipleSelection)) {
                    reporter.reportSdkError('Missing mandatory argument - multipleSelection must be true or false');
                    return;
                }

                if (!utils.isFunction(onSuccess)) {
                    reporter.reportSdkError('Missing mandatory argument - onSuccess must be a function');
                    return;
                }

                var callOnCancel = utils.isFunction(onCancel);

                var callback = function callback(data) {
                    if (data.wasCancelled) {
                        if (callOnCancel) {
                            onCancel(data);
                        }
                    } else {
                        onSuccess(data);
                    }
                };

                var args = {
                    mediaType: mediaType,
                    multiSelection: multipleSelection,
                    callOnCancel: callOnCancel
                };

                postMessage.sendMessage(messageType, args, callback);
            };

            var isValidMediaType = function isValidMediaType(value) {
                for (var key in MediaType) {
                    if (MediaType[key] === value) {
                        return true;
                    }
                }
                return false;
            };

            var MediaType = {
                IMAGE: 'photos',
                BACKGROUND: 'backgrounds',
                AUDIO: 'audio',
                DOCUMENT: 'documents',
                SWF: 'swf',
                SECURE_MUSIC: 'secure_music'
            };

            var revalidateSession = function revalidateSession(onSuccess, onError) {
                if (onSuccess) {
                    if (utils.isFunction(onSuccess)) {
                        var callback = function callback(response) {
                            if (response && response.onError) {
                                var wixErrorMessage = responseHandlers.getWixError(response.error.errorCode);
                                if (onError) {
                                    onError.call(this, wixErrorMessage);
                                }
                            } else {
                                onSuccess.apply(this, arguments);
                            }
                        };
                        postMessage.sendMessage(postMessage.MessageTypes.REVALIDATE_SESSION, {}, callback);
                    } else {
                        reporter.reportSdkError('Mandatory argument - onSuccess - should be of type Function');
                    }
                } else {
                    reporter.reportSdkError('Missing Mandatory argument - onSuccess');
                }
            };

            return {
                resizeComponent: resizeComponent,
                openMediaDialog: openMediaDialog,
                MediaType: MediaType,
                revalidateSession: revalidateSession
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 26 */
    /*!********************************!*\
     !*** ./js/modules/Contacts.js ***!
     \********************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
         * @memberof Wix
         * @namespace Contacts
         */
        'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! privates/utils */ 9), __webpack_require__(/*! privates/responseHandlers */ 14), __webpack_require__(/*! privates/reporter */ 10), __webpack_require__(/*! privates/postMessage */ 7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (utils, responseHandlers, reporter, postMessage) {

            var getContacts = function getContacts(options, onSuccess, onFailure) {
                if (!utils.isObject(options)) {
                    reporter.reportSdkError('Missing mandatory argument - options, must be an object');
                    return;
                }

                if (!utils.isFunction(onSuccess)) {
                    reporter.reportSdkError('Missing mandatory argument - onSuccess, must be a function');
                    return;
                }

                var args = {
                    options: options
                };

                var onComplete = function onComplete(response) {
                    responseHandlers.handleCursorResponse(response, onSuccess, onFailure, postMessage.MessageTypes.GET_CONTACTS, options);
                };

                postMessage.sendMessage(postMessage.MessageTypes.GET_CONTACTS, args, onComplete);
            };

            var getContactById = function getContactById(id, onSuccess, onFailure) {
                if (typeof id !== 'string') {
                    reporter.reportSdkError('Missing mandatory argument - id, must be a string');
                    return;
                }

                if (!utils.isFunction(onSuccess)) {
                    reporter.reportSdkError('Missing mandatory argument - onSuccess, must be a function');
                    return;
                }

                if (!utils.isFunction(onFailure)) {
                    reporter.reportSdkError('Missing mandatory argument - onFailure, must be a function');
                    return;
                }

                var args = {
                    id: id
                };

                var onComplete = function onComplete(response) {
                    responseHandlers.handleDataResponse(response, onSuccess, onFailure);
                };

                postMessage.sendMessage(postMessage.MessageTypes.GET_CONTACT_BY_ID, args, onComplete);
            };

            var getContactLabels = function getContactLabels(onSuccess, onFailure) {
                if (!utils.isFunction(onSuccess)) {
                    reporter.reportSdkError('Missing mandatory argument - onSuccess, must be a function');
                    return;
                }

                if (!utils.isFunction(onFailure)) {
                    reporter.reportSdkError('Missing mandatory argument - onFailure, must be a function');
                    return;
                }

                var onComplete = function onComplete(response) {
                    responseHandlers.handleDataResponse(response, onSuccess, onFailure);
                };

                postMessage.sendMessage(postMessage.MessageTypes.GET_CONTACT_LABELS, {}, onComplete);
            };

            function validateReconcileParams(contactInfo, onSuccess, onFailure) {
                var result = {
                    passed: false
                };
                if (contactInfo === undefined) {
                    result = {
                        passed: false,
                        error: 'Missing mandatory contact options parameter'
                    };
                } else if (!utils.isObject(contactInfo)) {
                    result = {
                        passed: false,
                        error: 'Contact options parameter must be an object'
                    };
                } else if (onSuccess && !utils.isFunction(onSuccess)) {
                    result = {
                        passed: false,
                        error: 'Missing mandatory argument - onSuccess, must be a function'
                    };
                } else if (onFailure && !utils.isFunction(onFailure)) {
                    result = {
                        passed: false,
                        error: 'Missing mandatory argument - onFailure, must be a function'
                    };
                } else {
                    result = {
                        passed: true
                    };
                }
                return result;
            }
            var reconcileContact = function reconcileContact(contactInfo, onSuccess, onFailure) {
                var validation = validateReconcileParams(contactInfo, onSuccess, onFailure);
                if (validation.passed) {
                    var onComplete = function onComplete(response) {
                        responseHandlers.handleDataResponse(response, onSuccess, onFailure);
                    };
                    postMessage.sendMessage(postMessage.MessageTypes.RECONCILE_CONTACT, contactInfo, onComplete);
                } else {
                    reporter.reportSdkError(validation.error);
                }
            };
            return {
                /**
                 * Gets a list of all contacts that have interacted with a given site.
                 * @memberof Wix.Contacts
                 * @author lior.shefer@wix.com
                 * @since  1.31.0
                 * @function
                 * @param {Object} options object that supports two parameters: 'label' and 'pageSize'.
                 * 'label' can either be a list of strings or a string. if a list, the strings are joined together with a comma
                 * to be sent to the contacts endpoint. 'pageSize' accepts either 25, 50 or 100 and defaults to 25.
                 * @param {Function} onSuccess An on success callback which gets WixDataCursor as parameter.
                 * @param {Function} onFailure An on failure callback.
                 * @return {WixDataCursor} cursor.
                 * @example
                 * Wix.Contacts.getContacts(function(WixDataCursor), function(errorType));
                 */
                getContacts: getContacts,

                /**
                 * Gets a specific Contact that has interacted with the current site by its id.
                 * @memberof Wix.Contacts
                 * @author lior.shefer@wix.com
                 * @since 1.27.0
                 * @function
                 * @param {String} id The id of the Contact to look up.
                 * @param {Function} onSuccess A function that receives data about the Contact.
                 * @param {Function} onFailure A function called when an error occurs that receives a Wix.Error.
                 * @return {Contact}
                 */
                getContactById: getContactById,

                /**
                 * Returns all the Contact labels for the given site that have opted in to receiving communications from applications
                 * @memberof Wix.Contacts
                 * @author lior.shefer@wix.com
                 * @deprecated
                 * @since 1.32.0
                 * @function
                 * @param {Function} onSuccess A function that receives an array of labels.
                 * @param {Function} onFailure A function called when an error occurs that receives a Wix.Error.
                 * @return {String[]} An array of labels
                 */
                getContactLabels: getContactLabels,

                /**
                 * Reconciles Contact information with that of the WixHive's.
                 *
                 * Use this when your app has information about a site visitor that may already be registered as a Contact as part of the WixHive. Your app should provide as much information as possible so that we will find the best match for that Contact and return it with the reconciled information. If no match was found, we will create a new Contact.
                 *
                 * Depending on the type of information, we will either add or dismiss changes. When the information can be added to a list, such as emails or phones, a new item will be added if no similar item exists. When the information cannot be added we dismiss the change, such is the case with name, company and picture. If your wish is to override such data, there are explicit ways to do so using the Contactâ€™s id and our REST API.
                 *
                 * @memberof Wix.Contacts
                 * @author benk@wix.com
                 * @since 1.46.0
                 * @function
                 * @param {Object} contactInfo Contact information that will be passed to the server.
                 * @param {Function} [onSuccess] A function that receives reconciliation details.
                 * @param {Function} [onFailure] A function called when an error occurs, receives a Wix.Error.
                 * @return {ReconcileContactResult} Contains the reconciled Contact and details about the operation.
                 */
                reconcileContact: reconcileContact
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 27 */
    /*!******************************!*\
     !*** ./js/modules/Worker.js ***!
     \******************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
         * This is the description for the Worker namespace.
         * @memberof Wix
         * @namespace Wix.Worker
         */
        'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! Base */ 22), __webpack_require__(/*! PubSub */ 28), __webpack_require__(/*! Utils */ 18), __webpack_require__(/*! Data */ 29)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Base, PubSub, Utils, Data) {

            var getSiteInfo = function getSiteInfo(onSuccess) {
                Base.getSiteInfo(onSuccess);
            };

            var getSitePages = function getSitePages(callback) {
                Base.getSitePages(callback);
            };

            var addEventListener = function addEventListener(eventName, callBack) {
                return Base.addEventListener(eventName, callBack);
            };

            var removeEventListener = function removeEventListener(eventName, callBackOrId) {
                return Base.removeEventListener(eventName, callBackOrId);
            };

            var currentMember = function currentMember(onSuccess) {
                return Base.currentMember(onSuccess);
            };

            var publish = function publish(eventKey, data, isPersistent) {
                return PubSub.publish(eventKey, data, isPersistent);
            };

            var subscribe = function subscribe(eventKey, callBack, receivePastEvents) {
                return PubSub.subscribe(eventKey, callBack, receivePastEvents);
            };

            var unsubscribe = function unsubscribe(eventKey, callBackOrId) {
                return PubSub.unsubscribe(eventKey, callBackOrId);
            };

            var getViewMode = function getViewMode() {
                return Utils.getViewMode();
            };

            var getDeviceType = function getDeviceType() {
                return Utils.getDeviceType();
            };

            var getLocale = function getLocale() {
                return Utils.getLocale();
            };

            var getInstanceId = function getInstanceId() {
                return Utils.getInstanceId();
            };

            var getIpAndPort = function getIpAndPort() {
                return Utils.getIpAndPort();
            };

            var navigateToSection = function navigateToSection(sectionIdentifier, state, onFailure) {
                Utils.navigateToSection(sectionIdentifier, state, onFailure);
            };

            var getValue = function getValue(key, onSuccess, onFailure) {
                Data.Public.get(key, onSuccess, onFailure);
            };

            var getValues = function getValues(keys, onSuccess, onFailure) {
                Data.Public.getMulti(keys, onSuccess, onFailure);
            };

            return {
                /**
                 * @memberof Wix.Worker
                 * @since 1.30.0
                 * @see Wix.getSiteInfo
                 */
                getSiteInfo: getSiteInfo,

                /**
                 * @memberof Wix.Worker
                 * @since 1.30.0
                 * @see Wix.getSitePages
                 */
                getSitePages: getSitePages,

                /**
                 * @memberof Wix.Worker
                 * @since 1.30.0
                 * @see Wix.addEventListener
                 */
                addEventListener: addEventListener,

                /**
                 * @memberof Wix.Worker
                 * @since 1.30.0
                 * @see Wix.removeEventListener
                 */
                removeEventListener: removeEventListener,

                /**
                 * @memberof Wix.Worker
                 * @since 1.30.0
                 * @see Wix.currentMember
                 */
                currentMember: currentMember,

                /**
                 * This is the description for the PubSub namespace.
                 * @memberof Wix.Worker
                 * @namespace Wix.Worker.PubSub
                 */
                PubSub: {

                    /**
                     * @since 1.30.0
                     * @memberof Wix.Worker.PubSub
                     * @see Wix.PubSub.publish
                     */
                    publish: publish,

                    /**
                     * @since 1.30.0
                     * @memberof Wix.Worker.PubSub
                     * @see Wix.PubSub.subscribe
                     */
                    subscribe: subscribe,

                    /**
                     * @since 1.30.0
                     * @memberof Wix.Worker.PubSub
                     * @see Wix.PubSub.unsubscribe
                     */
                    unsubscribe: unsubscribe
                },

                /**
                 * @memberof Wix.Worker
                 * @namespace Wix.Worker.Utils
                 */
                Utils: {
                    /**
                     * @since 1.30.0
                     * @memberof Wix.Worker.Utils
                     * @see Wix.Utils.getViewMode
                     */
                    getViewMode: getViewMode,

                    /**
                     * @since 1.30.0
                     * @memberof Wix.Worker.Utils
                     * @see Wix.Utils.getDeviceType
                     */
                    getDeviceType: getDeviceType,

                    /**
                     * @since 1.30.0
                     * @memberof Worker.Utils
                     * @see Wix.Utils.getLocale
                     */
                    getLocale: getLocale,

                    /**
                     * @since 1.30.0
                     * @memberof Wix.Worker.Utils
                     * @see Wix.Utils.getInstanceId
                     */
                    getInstanceId: getInstanceId,

                    /**
                     * @since 1.30.0
                     * @memberof Wix.Worker.Utils
                     * @see Wix.Utils.getDeviceType
                     */
                    getIpAndPort: getIpAndPort,

                    /**
                     * @since 1.39.0
                     * @memberof Wix.Worker.Utils
                     * @author lior.shefer@wix.com
                     * @see Wix.Utils.navigateToSection
                     */
                    navigateToSection: navigateToSection
                },

                Data: {
                    Public: {
                        /**
                         * @since 1.61.0
                         * @memberof Wix.Worker.Data.Public
                         * @author mayah@wix.com
                         * @see Wix.Data.Public.get
                         */
                        get: getValue,

                        /**
                         * @since 1.61.0
                         * @memberof Wix.Worker.Data.Public
                         * @author mayah@wix.com
                         * @see Wix.Data.Public.getMulti
                         */
                        getMulti: getValues

                    }
                }
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 28 */
    /*!******************************!*\
     !*** ./js/modules/PubSub.js ***!
     \******************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
         * This is the description for the PubSub namespace.
         * @memberof Wix
         * @namespace Wix.PubSub
         */
        'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! privates/utils */ 9), __webpack_require__(/*! privates/reporter */ 10), __webpack_require__(/*! privates/postMessage */ 7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (utils, reporter, postMessage) {

            var TPA_PUB_SUB_PREFIX = 'TPA_PUB_SUB_';

            var unsubscribe = function unsubscribe(eventName, callBackOrId) {
                postMessage.removeEventListenerInternal(TPA_PUB_SUB_PREFIX + eventName, callBackOrId, true);
            };

            var subscribe = function subscribe(eventName, callBack, receivePastEvents) {
                if (!utils.isString(eventName)) {
                    reporter.reportSdkError('Missing mandatory argument - eventName, must be a string');
                    return;
                }
                if (!utils.isFunction(callBack)) {
                    reporter.reportSdkError('Missing mandatory argument - callBack, must be a function');
                    return;
                }
                return postMessage.addEventListenerInternal(TPA_PUB_SUB_PREFIX + eventName, callBack, true, {
                    receivePastEvents: receivePastEvents
                });
            };

            var publish = function publish(eventName, data, isPersistent) {
                if (!utils.isString(eventName)) {
                    reporter.reportSdkError('Missing mandatory argument - eventName, must be a string');
                    return;
                }
                postMessage.sendMessage(postMessage.MessageTypes.PUBLISH, {
                    eventKey: TPA_PUB_SUB_PREFIX + eventName,
                    isPersistent: !!isPersistent || false,
                    eventData: data || {}
                });
            };

            return {
                /**
                 * Unsubscribes from receiving further events. The id from the initial subscribe call is used to unsubscribe from furthers notifications.
                 * @memberof Wix.PubSub
                 * @since 1.25.0
                 * @function
                 * @param {String} eventName The name of the event to unsubscribe from.
                 * @param {Number} subscription Id returned by Wix.PubSub.subscribe.
                 * @example
                 * //subscribe and then unsubscribe to "my_event_name" event
                 * var id = Wix.PubSub.subscribe("my_event_name", function(event) { });
                 * Wix.PubSub.unsubscribe("my_event_name", id);
                 */
                unsubscribe: unsubscribe,

                /**
                 * Subscribes to events from other app parts of a multi-widget TPA.  If the components span multiple pages, they will be notified once they are rendered.
                 * It is also possible to receive all notifications prior to rendering by specifying a flag when subscribing to events.
                 * If the flag is set, the widget will be notified immediately of any prior events of the type it is registered to receive.
                 * @memberof Wix.PubSub
                 * @since 1.25.0
                 * @function
                 * @param {String} eventName The name of the event to subscribe to.
                 * @param {Function} callBack function that will respond to events sent from other components of the broadcasting app. it will be given the event object itself and the source of the event.
                 * @param {Boolean} [receivePastEvents] a flag to indicate that all past instances of the registered event should be sent to registered listener. This will happen immediately upon registration.
                 * @returns {Number} subscription id.
                 * @example
                 * //subscribe and then unsubscribe to "my_event_name" event
                 * Wix.PubSub.subscribe("my_event_name", function(event) {
	         *  //process the event which has the following format :
	         *  // {
	         *  //    name:eventName,
	         *  //    data: eventData,
	         *  //    origin: compId
	         *  // }
	         * });
                 * // subscribe to "my_event_name" event, events which also happened before this component was rendered will send
                 * Wix.PubSub.subscribe("my_event_name", function(event) { }, true);
                 */
                subscribe: subscribe,

                /**
                 * Broadcasts an event to other extensions of a multi-widget TPA.
                 * If the app extensions (Widget, Fixed Positioned Widget, Page) span multiple pages, they will be notified when they are rendered.
                 * @memberof Wix.PubSub
                 * @since 1.25.0
                 * @function
                 * @param {String} eventName The name of the event to publish.
                 * @param {Object} data Data the object to send to subscribers for this event type.
                 * @param {Boolean} isPersistent Indicates whether this event is persisted for event subscribers who have not yet subscribed.
                 * @example
                 * // The following call will publish an app event that can be consumed by all the app parts and persist => even of those parts are not rendered yet.
                 * Wix.PubSub.publish("my_event_name", {value:"this is my message"}, true);
                 */
                publish: publish
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 29 */
    /*!****************************!*\
     !*** ./js/modules/Data.js ***!
     \****************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
         * @memberof Wix
         * @namespace Data.Public
         */
        'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! Utils */ 18), __webpack_require__(/*! privates/utils */ 9), __webpack_require__(/*! privates/postMessage */ 7), __webpack_require__(/*! privates/reporter */ 10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Utils, utils, postMessage, reporter) {

            var SCOPE = {
                // Data set with scope = APP are accessible across all components
                APP: 'APP',

                // Data set with scope = COMPONENT are accessible across all components
                COMPONENT: 'COMPONENT'
            };

            var parseAndReturnArgs = function parseAndReturnArgs(options, onSuccess, onFailure) {
                var scope = SCOPE.COMPONENT;

                if (options) {
                    if (utils.isObject(options) && options.scope && (options.scope === SCOPE.APP || options.scope === SCOPE.COMPONENT)) {
                        scope = options.scope;
                    } else if (utils.isFunction(options)) {
                        onFailure = onSuccess;
                        onSuccess = options;
                    } else {
                        reporter.reportSdkError('Invalid argument - options should be of type object, containing scope of type Wix.Data.SCOPE');
                        return undefined;
                    }
                }

                if (!utils.isFunction(onSuccess)) {
                    reporter.reportSdkError('Invalid argument - onSuccess - should be a function');
                    return undefined;
                }

                var onComplete = function onComplete(result) {
                    handleDataResponse(result, onSuccess, onFailure);
                };

                return {
                    scope: scope,
                    onComplete: onComplete
                };
            };

            var handleDataResponse = function handleDataResponse(data, onSuccess, onFailure) {
                if (data && data.error) {
                    if (onFailure) {
                        onFailure(data);
                    }
                } else {
                    if (onSuccess) {
                        onSuccess(data);
                    }
                }
            };

            var getMulti = function getMulti(keys, options, onSuccess, onFailure) {
                if (!utils.isArray(keys)) {
                    reporter.reportSdkError('Mandatory argument - keys - should be of type Array');
                    return;
                }

                var args = parseAndReturnArgs(options, onSuccess, onFailure);

                if (args) {
                    postMessage.sendMessage(postMessage.MessageTypes.GET_VALUES, {
                        keys: keys,
                        scope: args.scope
                    }, args.onComplete);
                }
            };

            var set = function set(key, value, options, onSuccess, onFailure) {
                if (Utils.getViewMode() !== "editor") {
                    reporter.reportSdkError('Invalid view mode. This function can be called only in editor mode.');
                    return;
                }

                if (!utils.isString(key)) {
                    reporter.reportSdkError('Mandatory argument - key - should be of type String');
                    return;
                } else if (!(utils.isString(value) || utils.isBoolean(value) || utils.isNumber(value) || utils.isObject(value))) {
                    reporter.reportSdkError('Mandatory argument - value - should be of type String, Number, Boolean or Json');
                    return;
                }

                var args = parseAndReturnArgs(options, onSuccess, onFailure);

                if (args) {
                    postMessage.sendMessage(postMessage.MessageTypes.SET_VALUE, {
                        key: key,
                        value: value,
                        scope: args.scope
                    }, args.onComplete);
                }
            };

            var get = function get(key, options, onSuccess, onFailure) {
                if (!utils.isString(key)) {
                    reporter.reportSdkError('Mandatory argument - key - should be of type String');
                    return;
                }

                var args = parseAndReturnArgs(options, onSuccess, onFailure);

                if (args) {
                    postMessage.sendMessage(postMessage.MessageTypes.GET_VALUE, {
                        key: key,
                        scope: args.scope
                    }, args.onComplete);
                }
            };

            var remove = function remove(key, options, onSuccess, onFailure) {
                if (Utils.getViewMode() !== "editor") {
                    reporter.reportSdkError('Invalid view mode. This function can be called only in editor mode.');
                    return;
                }

                if (!utils.isString(key)) {
                    reporter.reportSdkError('Mandatory argument - key - should be of type String');
                    return;
                }

                var args = parseAndReturnArgs(options, onSuccess, onFailure);

                if (args) {
                    postMessage.sendMessage(postMessage.MessageTypes.REMOVE_VALUE, {
                        key: key,
                        scope: args.scope
                    }, args.onComplete);
                }
            };

            return {
                /*
                 * An enum of scope types indicates if data is accessible from a specific component or all components of an app
                 * @enum
                 * @memberof Wix.Data.Public
                 * @since 1.61.0
                 */
                SCOPE: SCOPE,

                Public: {

                    /**
                     * Stores the value under the key. If the key did not previously exist, it is created.
                     * If the key already exists, its existing value is overwritten with the new value.
                     * User can set: string, bool, number and json.
                     * Data is stored per component unless otherwise stated.
                     * Data will only be accessible from the component from which it was set. Data can also be stored globally, in which case it will be available across all components.
                     *
                     * Available in the components, settings panel, modal and popups (for example: the Manage window) in the Editor.
                     * @function
                     * @author mayah@wix.com
                     * @memberof Wix.Data.Public
                     * @since 1.61.0
                     * @param {String} key - key of value to set
                     * @param {Object | String | Number | Boolean} value - value to set
                     * @param {Object} [Options] - Object that contains Wix.Data.SCOPE that indicates if data is accessible by specific comp or all apps comps installed
                     * @param {function} [onSuccess] - result will be a JSON Object mirroring the values given
                     * @param {Function} [onFailure] the function will return an object that specifies the error that occurred, it will be invoked in the following scenarios:
                     *        1. The app exceeded the provided 1K storage space.
                     *        2. Invalid value type, valid types are boolean, string, number and JSON.
                     *
                     * @experimental
                     * @example
                     *
                     * // Will be accessible only from the component from which it was called
                     * Wix.Data.Public.set(â€˜defaultSettingsâ€™,
                     *   { "menu": {
	             *     "showSuccessMsg": true,
	             *     "formFields": {
	             *         "name": "What is your name?",
	             *         "quest": "What is your quest?",
	             *         "color": "What is your favorite color?"
	             *     }
	             *   });
	             */
                    set: set,

                    /**
                     * Get a single value that was stored
                     *
                     * Available from Editor and Viewer, in all components, popups and modals.
                     * @function
                     * @author mayah@wix.com
                     * @memberof Wix.Data.Public
                     * @since 1.61.0
                     * @param {String} key - key of value to get.
                     * @param {Object} [Options] - Object that contains Wix.Data.SCOPE that indicates which scope to get the key from. Default scope is COMPONENT.
                     * @param {function} [onSuccess] - result will be the value attached to the key provided. For example: {  key1: value1 }
                     * @param {Function} [onFailure] will be invoked when the provided key is not found
                     *
                     * @experimental
                     * @example
                     * // returns a key named 'myKey' from the APP scope
                     * Wix.Data.Public.get(â€˜myKeyâ€™, { scope: 'APP' }, function(result){
	            *  console.log(result);
	             * });
                     */
                    get: get,

                    /**
                     * Remove a single value.
                     * Future attempts to access this key will raise an exception until something is stored again for this key using one of the set methods.
                     *
                     * Available in the settings panel, modal and popups (for example: the Manage window) in the Editor.
                     * @function
                     * @author mayah@wix.com
                     * @memberof Wix.Data.Public
                     * @since 1.61.0
                     * @param {String} key - key of value to remove.
                     * @param {Object} [Options] - Object that contains Wix.Data.SCOPE that indicates which scope to remove the key from. Default scope is COMPONENT.
                     * @param {function} [onSuccess] - result will be a JSON Object with the key and value that were found. For example: {  key1: value1 }
                     * @param {Function} [onFailure] invoked when the provided key is not found
                     *
                     * @experimental
                     * @example
                     * // Will remove a key named 'myKey' from the COMPONENT scope
                     * Wix.Data.Public.remove(â€˜myKeyâ€™, function(result){
	            *  console.log(result);
	             * });
                     */
                    remove: remove,

                    /**
                     * Get multiple values.
                     * To get multiple values, use the more efficient getMulti method. Pass it an array of keys and it will return a JSON object with those keys and matching values.
                     *
                     * Available from Editor and Viewer, in all components, popups and modals.
                     * @function
                     * @author mayah@wix.com
                     * @memberof Wix.Data.Public
                     * @since 1.61.0
                     * @param {Array} keys - array of keys of values to get. All values returned will be from the provided scope.
                     * @param {Object} [Options] - Object that contains Wix.Data.SCOPE that indicates which scopes to get the keys from. Default scope is COMPONENT.
                     * @param {function} [onSuccess] - result will be a JSON Object with the key and value that were found. For example: {  key1: value1 }
                     * @param {Function} [onFailure] invoked when the one of the keys is not found
                     *
                     * @experimental
                     * @example
                     * // Returns key1 and key2 from the APP scope
                     * Wix.Data.Public.getMulti([â€˜key1â€™, â€˜key2â€™], { scope: 'APP' }, function(results){
	             *  for(key in results) {
	             *      console.log(key + â€˜: â€˜ + results[key]);
	             *  };
	             * });
                     */
                    getMulti: getMulti
                }
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 30 */
    /*!*******************************!*\
     !*** ./js/modules/Preview.js ***!
     \*******************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
         * This is the description for the Preview namespace.
         * @memberof Wix
         * @namespace Wix.Preview
         */
        'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! privates/postMessage */ 7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (postMessage) {

            var openSettingsDialog = function openSettingsDialog(options, failure) {
                postMessage.sendMessage(postMessage.MessageTypes.OPEN_SETTINGS_DIALOG, options, failure);
            };

            return {
                /**
                 * Available only from Preview.
                 * Ends Preview and opens the Settings Dialog for a given component, potentially navigating the user to a different page in the editor.
                 * When called with no options, uses the widget or page that called the function.
                 * @memberof Wix.Preview
                 * @since 1.45.0
                 * @experimental
                 * @function
                 * @param {Object} [options] options may contain compId to open the settings panel for. If the provided component id is incorrect, the failure callback will be invoked.
                 * @param {Function} [failure] The callback is invoked either when the user cancels opening the settings panel, or if the specified component information is incorrect.
                 * @example
                 * Wix.Preview.openSettingsDialog(
                 *  {compId: 'comp-iey3wfy7'},
                 *  function(error){
	         *      console.log('Oh no!');
	         *   }
                 *  );
                 */
                openSettingsDialog: openSettingsDialog
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 31 */
    /*!*********************************!*\
     !*** ./js/modules/Dashboard.js ***!
     \*********************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
         * @memberof Wix
         * @namespace Dashboard
         */
        'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! Base */ 22), __webpack_require__(/*! Settings */ 20), __webpack_require__(/*! privates/reporter */ 10), __webpack_require__(/*! privates/postMessage */ 7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Base, Settings, reporter, postMessage) {

            var setHeight = function setHeight(height) {
                Base.setHeight(height);
            };

            var resizeWindow = function resizeWindow(width, height, onComplete) {
                Base.resizeWindow(width, height, onComplete);
            };

            var openMediaDialog = function openMediaDialog(mediaType, multipleSelection, onSuccess, onCancel) {
                Settings.openMediaDialog(mediaType, multipleSelection, onSuccess, onCancel);
            };

            var openBillingPage = function openBillingPage() {
                Settings.openBillingPage();
            };

            var openModal = function openModal(url, width, height, onClose) {
                Base.openModal(url, width, height, onClose);
            };

            var closeWindow = function closeWindow(message) {
                Base.closeWindow(message);
            };

            var scrollTo = function scrollTo(x, y) {
                Base.scrollTo(x, y);
            };

            var getEditorUrl = function getEditorUrl(callback) {
                if (!callback) {
                    reporter.reportSdkError('Mandatory arguments - a callback must be specified');
                    return;
                }
                postMessage.sendMessage(postMessage.MessageTypes.GET_EDITOR_URL, undefined, callback);
            };

            var pushState = function pushState(state) {
                if (typeof state !== "string") {
                    reporter.reportSdkError('Missing mandatory argument - state');
                    return;
                }

                postMessage.sendMessage(postMessage.MessageTypes.APP_STATE_CHANGED, {
                    state: state
                });
            };

            var revalidateSession = function revalidateSession(onSuccess, onError) {
                Base.revalidateSession(onSuccess, onError);
            };

            return {
                /**
                 * This method requests the hosting Wix platform to change the iframe height inside the side dashboard (under the My Account tab in Wix.com). Works on the app or modal iframes.
                 * @function
                 * @author lior.shefer@wix.com
                 * @deprecated
                 * @memberof Wix.Dashboard
                 * @since 1.24.0
                 * @see Wix.setHeight
                 * @example
                 *
                 * Wix.Dashboard.setHeight(height);
                 *
                 */
                setHeight: setHeight,

                /**
                 * This method opens Wix media dialog inside WIx Dashboard, and let's the site owner choose a an existing file from the Wix media galleries,
                 * or upload a new file instead. When completed a callback function returns the meta data of the selected item/s.
                 * This method returns a meta data descriptor for a selected media item.
                 * To access the media item from your code you will need to construct a full URL using that descriptor.
                 * Since the media items URLs format is set by Wix and might changed in the future, we are requiring that the URL construction will be done using the SDK.
                 * Use one of the Wix.Utils.Media.get* methods to get the desired media item URL.
                 * The following media type are currently supported - Wix.Settings.MediaType
                 * @function
                 * @author lior.shefer@wix.com
                 * @memberof Wix.Dashboard
                 * @since 1.40.0
                 * @see Wix.Settings.openMediaDialog
                 *
                 * @example
                 *
                 * Wix.Dashboard.openMediaDialog(Wix.Settings.MediaType.IMAGE, false, function(data) {
	         *    // save image data
	         * });
                 */
                openMediaDialog: openMediaDialog,

                /**
                 * The Dashboard.openBillingPage method allows the app to offer a premium package from within the app.
                 * When called will open the Wix billing system page in a new browser window.
                 * @function
                 * @author lior.shefer@wix.com
                 * @memberof Wix.Dashboard
                 * @since 1.31.0
                 * @example
                 *
                 * Wix.Dashboard.openBillingPage();
                 *
                 */
                openBillingPage: openBillingPage,

                /**
                 * The openModal method allows an app to open a modal window within the dashboard. A modal is a runtime Widget that is not part of the dashboard structure.
                 * The modal window is a singleton (every new modal closes the previous one) and contains a lightbox.
                 * A modal can be dismissed by the user if it touches the lightbox, presses the closing button or by the app itself
                 * if it calls the Wix.Dashboard.closeWindow() from within the modal iframe. The onClose argument can be used to detect modal close.
                 * @function
                 * @memberof Wix.Dashboard
                 * @since 1.27.0
                 * @see Wix.openModal
                 * @example
                 *
                 * var onClose = function(message) { console.log("modal closed", message); }
                 * Wix.Dashboard.openModal("http://sslstatic.wix.com/services/js-sdk/1.16.0/html/modal.html", 400, 400, onClose);
                 *
                 */
                openModal: openModal,

                /**
                 * The closeWindow method is available only under a modal endpoint (will not have any effect for other endpoints). It allows the modal to close itself programmatically.
                 * @function
                 * @memberof Dashboard
                 * @since 1.27.0
                 * @see Wix.closeWindow
                 * @example
                 *
                 * // The following call will close the modal/popup window and send a the object message to the opener onClose callback
                 * var message = {"reason": "button-clicked"};
                 * Wix.Dashboard.closeWindow(message);
                 *
                 */
                closeWindow: closeWindow,

                /**
                 * The Dashboard.scrollTo method allows the app to scroll to an absolute offset - vertical & horizontal.
                 * @function
                 * @author lior.shefer@wix.com
                 * @memberof Dashboard
                 * @since 1.31.0
                 * @see Wix.scrollTo
                 * @example
                 *
                 * Wix.Dashboard.scrollTo(0, 0);
                 *
                 */
                scrollTo: scrollTo,

                /**
                 * Returns a url for the app in the Editor. Once directed to the Editor, the app will be shown to your user. If your app has components on more than one page, the first page that contains your app will be opened.
                 * @function
                 * @memberof Wix.Dashboard
                 * @since 1.33.0
                 * @param {Function} callback A callback which gets editor url as parameter.
                 * @example
                 *
                 * Wix.Dashboard.getEditorUrl(function(url) {
	         *    //editor url as a callback parameter
	         * });
                 *
                 */
                getEditorUrl: getEditorUrl,

                /**
                 * This method enable AJAX style Page apps to inform the Wix platform about a change in the app internal state. The new state will be reflected in the site/page URL.
                 * Once you call the pushState method, the browser top window URL will change the 'app-state' path part to the new state you provide with the pushState
                 * method (similar to the browser history API - https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
                 * For a full explanation of how deep-linking works with AJAX style apps, see Deep Linking for AJAX Style Apps - http://dev.wix.com/docs/display/DRAF/Developing+a+Page+App.
                 * @function
                 * @memberof Wix.Dashboard
                 * @since 1.35.0
                 * @see Wix.pushState
                 * @example
                 *
                 * Wix.Dashboard.pushState("app-state");
                 *
                 */
                pushState: pushState,

                /**
                 * Applicable only for modal component. Re-sizes the modal window.
                 * @function
                 * @memberof Wix.Dashboard
                 * @author tomergab@wix.com
                 * @since 1.40.0
                 * @see Wix.resizeWindow
                 * @param {Number} width Window width in pixels.
                 * @param {Number} height Window height in pixels.
                 * @param [Function] onComplete On resize complete callback function.
                 * @example
                 *
                 * // The following call will resize the widget window
                 * Wix.Dashboard.resizeWindow(300, 300);
                 *
                 */
                resizeWindow: resizeWindow,

                /**
                 * Before showing sensitive information or making an action which requires a secure session,
                 * an app should verify that a secure session exists.
                 * Get a newly signed app instance by calling Wix.Dashboard.revalidateSession.
                 *
                 * @function
                 * @memberof Wix.Dashboard
                 * @since 1.52.0
                 * @param {Function} onSuccess Receives a newly signed and encoded app instance.
                 * @param {Function} onFailure
                 * @example
                 *
                 *
                 * Wix.Dashboard.revalidateSession(function(instanceData){
	         *  //handle success use-case
	         * }, function(error){
	         *    //Handle error use-case
	         * });
                 */
                revalidateSession: revalidateSession
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 32 */
    /*!********************************!*\
     !*** ./js/modules/Counters.js ***!
     \********************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
         * @memberof Wix
         * @private
         * @namespace Counters
         */
        'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! privates/postMessage */ 7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (postMessage) {
            'use strict';

            var report = function report(data, onSuccess, onFailure) {
                var onComplete = null;
                if (onSuccess || onFailure) {
                    onComplete = function (result) {
                        if (result.status && result.status !== 'error' && onSuccess) {
                            onSuccess(result.response);
                        } else if (onFailure) {
                            onFailure(result.response);
                        }
                    };
                }

                postMessage.sendMessage(postMessage.MessageTypes.POST_COUNTERS_REPORT, data, onComplete);
            };

            return {
                /**
                 * @function
                 * @private
                 * @memberof Wix.Counters
                 * @param {Object} data
                 * @param {Function} onSuccess A callback function.
                 * @param {Function} [onFailure] An on Failure callback function.
                 */
                report: report
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ },
    /* 33 */
    /*!********************************!*\
     !*** ./js/modules/Features.js ***!
     \********************************/
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
         * @memberof Wix
         * @namespace Features
         */
        'use strict';

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! privates/utils */ 9), __webpack_require__(/*! privates/reporter */ 10), __webpack_require__(/*! privates/postMessage */ 7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (utils, reporter, postMessage) {
            'use strict';

            var Types = {
                PREVIEW_TO_SETTINGS: 'PREVIEW_TO_SETTINGS',
                ADD_COMPONENT: 'ADD_COMPONENT',
                RESIZE_COMPONENT: 'RESIZE_COMPONENT'
            };

            var isValidFeatureName = function isValidFeatureName(featureName) {
                return featureName === Types.PREVIEW_TO_SETTINGS || featureName === Types.ADD_COMPONENT || featureName === Types.RESIZE_COMPONENT;
            };

            var isSupported = function isSupported(featureName, callback) {
                if (featureName) {
                    if (utils.isFunction(featureName)) {
                        reporter.reportSdkError('Mandatory argument - feature name must be supplied.');
                        return;
                    }
                    if (!callback) {
                        reporter.reportSdkError('Mandatory argument - callback must be supplied.');
                        return;
                    }
                    if (!utils.isFunction(callback)) {
                        reporter.reportSdkError('Mandatory argument - callback must be a function.');
                        return;
                    }
                    if (!isValidFeatureName(featureName)) {
                        reporter.reportSdkError('Mandatory argument - feature must be one of Wix.Features.Types.');
                        return;
                    }

                    var featureData = {
                        name: featureName
                    };
                    postMessage.sendMessage(postMessage.MessageTypes.IS_SUPPORTED, featureData, callback);
                } else {
                    reporter.reportSdkError('Mandatory arguments - feature name and callback must be supplied.');
                }
            };

            return {
                /**
                 * @enum
                 * @memberof Wix.Features
                 * @since 1.45.0
                 */
                Types: {
                    /**
                     * See {@link Wix.Preview.openSettingsDialog}
                     * @memberof Wix.Features.Types
                     * @since 1.45.0
                     */
                    PREVIEW_TO_SETTINGS: Types.PREVIEW_TO_SETTINGS,

                    /**
                     * See {@link Wix.Settings.addComponent}
                     * @memberof Wix.Features.Types
                     * @see Wix.Settings.addComponent
                     * @since 1.45.0
                     */
                    ADD_COMPONENT: Types.ADD_COMPONENT,

                    /**
                     * See {@link Wix.Settings.resizeComponent}
                     * @memberof Wix.Features.Types
                     * Wix.Settings.resizeComponent
                     * @since 1.45.0
                     */
                    RESIZE_COMPONENT: Types.RESIZE_COMPONENT
                },

                /**
                 * Returns true via callback if the feature whose name was given is available for use.
                 * The feature name provided must be one of Wix.Features.Types.
                 * @function
                 * @memberof Wix.Features
                 * @since 1.45.0
                 * @param {Wix.Features.Types} feature name
                 * @param {Function} callback
                 */
                isSupported: isSupported
            };
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/ }
    /******/ ]);