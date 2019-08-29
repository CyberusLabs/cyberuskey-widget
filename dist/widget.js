(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("cyberuskey-widget", [], factory);
	else if(typeof exports === 'object')
		exports["cyberuskey-widget"] = factory();
	else
		root["cyberuskey-widget"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["undefined"] = 1] = "undefined";
    ErrorCode[ErrorCode["unknown_error"] = 2] = "unknown_error";
    ErrorCode[ErrorCode["server_error"] = 3] = "server_error";
    ErrorCode[ErrorCode["wrong_json"] = 4] = "wrong_json";
    ErrorCode[ErrorCode["openapi_error"] = 5] = "openapi_error";
    ErrorCode[ErrorCode["resource_not_found"] = 6] = "resource_not_found";
    ErrorCode[ErrorCode["otp_generation_failure"] = 7] = "otp_generation_failure";
    ErrorCode[ErrorCode["invalid_redirect_uri"] = 8] = "invalid_redirect_uri";
    ErrorCode[ErrorCode["invalid_client"] = 9] = "invalid_client";
    ErrorCode[ErrorCode["too_many_calls_error"] = 10] = "too_many_calls_error";
})(ErrorCode || (ErrorCode = {}));
exports.ErrorCode = ErrorCode;
class CyberusKeyError extends Error {
    constructor(code, message) {
        super(message);
        this._code = ErrorCode[code];
    }
}
exports.CyberusKeyError = CyberusKeyError;
class UnknownError extends CyberusKeyError {
    constructor(code = 'unknown_error', message = 'Unknown error occured.') {
        super(code, message);
    }
}
exports.UnknownError = UnknownError;
class TooManyCallsError extends CyberusKeyError {
    constructor(code = 'too_many_calls_error', message = 'You\'ve done too many calls.') {
        super(code, message);
    }
}
exports.TooManyCallsError = TooManyCallsError;
class MissingRedirectUri extends CyberusKeyError {
    constructor() {
        super('invalid_redirect_uri', 'Missing redirection URI.');
    }
}
exports.MissingRedirectUri = MissingRedirectUri;
class WrongJsonError extends CyberusKeyError {
}
exports.WrongJsonError = WrongJsonError;
class OpenApiError extends CyberusKeyError {
}
exports.OpenApiError = OpenApiError;
class ResourceNotFoundError extends CyberusKeyError {
}
exports.ResourceNotFoundError = ResourceNotFoundError;
class OTPGenerationError extends CyberusKeyError {
}
exports.OTPGenerationError = OTPGenerationError;
class InvalidRedirectUriError extends CyberusKeyError {
}
class InvalidClientError extends CyberusKeyError {
}
const MAPPING = {
    [ErrorCode.undefined]: UnknownError,
    [ErrorCode.unknown_error]: UnknownError,
    [ErrorCode.server_error]: UnknownError,
    [ErrorCode.undefined]: WrongJsonError,
    [ErrorCode.wrong_json]: WrongJsonError,
    [ErrorCode.openapi_error]: OpenApiError,
    [ErrorCode.resource_not_found]: ResourceNotFoundError,
    [ErrorCode.otp_generation_failure]: OTPGenerationError,
    [ErrorCode.invalid_redirect_uri]: InvalidRedirectUriError,
    [ErrorCode.invalid_client]: InvalidClientError,
    [ErrorCode.too_many_calls_error]: TooManyCallsError
};
function errorFactory(code, message) {
    const enum_type = ErrorCode[code];
    const ErrorConstructor = MAPPING[enum_type];
    return new ErrorConstructor(code, message);
}
exports.errorFactory = errorFactory;
//# sourceMappingURL=errors.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = __webpack_require__(0);
const session_1 = __webpack_require__(2);
let createSessionLastTimestamp = null;
/**
 * Cyberus Key API which allows you to do a delegate login with OpenId protocol.
 *
 * @class CyberusKeyAPI
 */
class CyberusKeyAPI {
    /**
     * Creates an instance of CyberusKeyAPI.
     * @param {string} hostUrl Base URL of the host server, e.g. `https://auth-server-demo.cyberuslabs.net`
     * @memberof CyberusKeyAPI
     */
    constructor(hostUrl) {
        this._apiUrl = new URL('/api/v2/', hostUrl);
    }
    /**
     * Creates the Cyberus Key session.
     *
     * @param {string} clientId Public client ID generated during creating the account.
     * @param {boolean} [useGeolocation=false] Set `true` if you want to pass optional geolocation measurements.
     *    They can be later use to compare them against the mobile's measurements (if you have set `fail_on_geo_mismatch`).
     *    Those measurements can be used also to general improvement of the security.
     * @throws WrongJsonError, OpenApiError, ResourceNotFoundError, OTPGenerationError, UnknownError
     * @returns {Promise<Session>} The Cyberus Key session.
     * @memberof CyberusKeyAPI
     */
    createSession(clientId, useGeolocation = false) {
        return __awaiter(this, void 0, void 0, function* () {
            this._raiseWhenCalledTooManyTimes(createSessionLastTimestamp);
            const data = { client_id: clientId };
            const response = yield fetch(this._getUrl('sessions'), {
                method: 'POST',
                body: this._getUrlEncodedBody(data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            const json = yield response.json();
            createSessionLastTimestamp = this._timestamp();
            if (response.ok && response.status === 201 && json.success) {
                return new session_1.Session(json.data);
            }
            if (!json.error) {
                throw new errors_1.UnknownError();
            }
            throw errors_1.errorFactory(json.error, json.error_description);
        });
    }
    /**
     * Gets a sonic sound with embedded OTP.
     *
     * @param {Session} session Cyberus Key's session generated by a user for a login.
     * @returns {Promise<ArrayBuffer>} Bytes of a sound.
     * @throws ResourceNotFoundError
     * @memberof CyberusKeyAPI
     */
    getOTPSound(session) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(this._getUrl(`sessions/${session.sessionId}`), {
                headers: {
                    'Accept': 'audio/mpeg',
                    'Content-Type': 'text/plain'
                }
            });
            // @ts-ignore
            const buffer = response.buffer || response.arrayBuffer;
            return yield buffer.call(response);
        });
    }
    /**
     * Gets OpenID's Authentication endpoint URL which will be used to process the authentication.
     *
     * @param {Session} session Cyberus Key session.
     * @param {OpenIdScopeParser} scope Each scope returns a set of user attributes, which are called claims.
     *    Once the user authorizes the requested scopes, the claims are returned in an ID Token.
     * @param {string} clientId Public client ID generated during creating the account.
     * @param {string} redirectUri Redirect URI to which the response will be sent. If the value is not whitelisted then the request will fail.
     * @param {string} [state]
     *    RECOMMENDED. Opaque value used to maintain state between the request and the callback. Typically, CSRF, XSRF mitigation is done by cryptographically binding the value of this parameter with a browser cookie.
     *    The state parameter preserves some state object set by the client in the Authentication request and makes it available to the client in the response.
     *    It’s that unique and non-guessable value that allows you to prevent the attack by confirming if the value coming from the response matches the one you expect (the one you generated when initiating the request).
     *    The state parameter is a string so you can encode any other information in it.
     * @param {string} [nonce]
     *    String value used to associate a Client session with an ID Token, and to mitigate replay attacks.
     *    The value is passed through unmodified from the Authentication Request to the ID Token.
     *    Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values.
     * @returns OpenID's Authentication endpoint URL
     * @throws InvalidRedirectUriError, InvalidClientError, ResourceNotFoundError
     * @memberof CyberusKeyAPI
     */
    getAuthenticationEndpointUrl(session, scope, clientId, redirectUri, state, nonce) {
        const data = {
            session_id: session.sessionId,
            client_id: clientId,
            scope: scope.getValue(),
            redirect_uri: redirectUri,
            response_type: 'code'
        };
        if (state) {
            data['state'] = state;
        }
        if (nonce) {
            data['nonce'] = nonce;
        }
        const url = new URL(this._getUrl('authenticate'));
        Object.keys(data).forEach((parameterName) => {
            url.searchParams.append(parameterName, data[parameterName]);
        });
        return url.href;
    }
    /**
     * Makes an authentication with Cyberus Key.
     *
     * @param {string} clientId Public client ID generated during creating the account.
     * @param {string} redirectUri Redirect URI to which the response will be sent. If the value is not whitelisted then the request will fail.
     * @param {OpenIdScopeParser} scope Each scope returns a set of user attributes, which are called claims.
     *    Once the user authorizes the requested scopes, the claims are returned in an ID Token.
     * @param {SoundEmitter} soundEmitter Interface which can play a sound.
     * @param {Navigator} navigator Class describes an action that will be done to Authentication URL. For browsers it will be a page redirection.
     * @param {string} [state]
     *    RECOMMENDED. Opaque value used to maintain state between the request and the callback. Typically, CSRF, XSRF mitigation is done by cryptographically binding the value of this parameter with a browser cookie.
     *    The state parameter preserves some state object set by the client in the Authentication request and makes it available to the client in the response.
     *    It’s that unique and non-guessable value that allows you to prevent the attack by confirming if the value coming from the response matches the one you expect (the one you generated when initiating the request).
     *    The state parameter is a string so you can encode any other information in it.
     * @param {string} [nonce]
     *    String value used to associate a Client session with an ID Token, and to mitigate replay attacks.
     *    The value is passed through unmodified from the Authentication Request to the ID Token.
     *    Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values.
     * @memberof CyberusKeyAPI
     */
    authenticate(clientId, redirectUri, scope, soundEmitter, navigator, state, nonce) {
        return __awaiter(this, void 0, void 0, function* () {
            const session = yield this.createSession(clientId);
            const sound = yield this.getOTPSound(session);
            const authenticateUrl = this.getAuthenticationEndpointUrl(session, scope, clientId, redirectUri, state, nonce);
            console.info(`Navigating to ${authenticateUrl}.`);
            yield navigator.navigate(authenticateUrl);
            yield this._timeout(1000);
            console.info(`Sound emitting.`);
            yield soundEmitter.emit(sound);
        });
    }
    _getUrl(path) {
        return (new URL(path, this._apiUrl)).href;
    }
    _timestamp() {
        return (new Date()).getTime();
    }
    _raiseWhenCalledTooManyTimes(lastTimestamp) {
        if (!lastTimestamp) {
            return;
        }
        if (this._timestamp() - lastTimestamp < 1000 * 10) {
            throw new errors_1.TooManyCallsError();
        }
    }
    _getUrlEncodedBody(data) {
        return Object.keys(data).reduce((result, key) => {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(data[key]);
            result.push(`${encodedKey}=${encodedValue}`);
            return result;
        }, []).join("&");
    }
    _timeout(ms) {
        return new Promise((resolve) => {
            return setTimeout(resolve, ms);
        });
    }
}
exports.CyberusKeyAPI = CyberusKeyAPI;
//# sourceMappingURL=api.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Data class representing a Cyberus Key session.
 *
 * @export
 * @class Session
 */
class Session {
    constructor(json) {
        this.sessionId = json.session_id;
        this.createdAt = new Date(json.created_at);
    }
}
exports.Session = Session;
//# sourceMappingURL=session.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(4);
const cyberuskey_sdk_1 = __webpack_require__(8);
const $ = __webpack_require__(12);
const widgetTemplate = __webpack_require__(13);
const widgetImages = {
    'default': 'img/cyberus/cyberus_login_widget.png',
    'eliot': 'img/eliot/eliot_login_widget_button.png'
};
class CyberusKeyWidget {
    /**
     * Creates an instance of CyberusKeyWidget.
     *
     * @param {string} [theme='default'] A theme of the button.
     * @param {string} [serverUrl='https://auth-server-demo.cyberuslabs.net'] Cyberus Key Authentication server URL.
     * @memberof CyberusKeyWidget
     */
    constructor(theme = 'default', serverUrl = 'https://auth-server-demo.cyberuslabs.net') {
        if (!Object.keys(widgetImages).includes(theme)) {
            throw new Error(`Theme "${theme}" is not supported.`);
        }
        this._serverUrl = new URL(serverUrl);
        this._theme = theme;
        this._initialized = false;
        this._inProgress = false;
    }
    /**
     * Creates a Cyberus Key button element in the DOM tree.
     *
     * @param {string} containingElementSelector Selector of a containing DOM element for the button.
     * @param {string} clientId Public client ID generated during creating the account.
     * @param {string} redirectUri Redirect URI to which the response will be sent. If the value is not whitelisted then the request will fail.
     * @param {string} [state]
     *    RECOMMENDED. Opaque value used to maintain state between the request and the callback. Typically, CSRF, XSRF mitigation is done by cryptographically binding the value of this parameter with a browser cookie.
     *    The state parameter preserves some state object set by the client in the Authentication request and makes it available to the client in the response.
     *    It’s that unique and non-guessable value that allows you to prevent the attack by confirming if the value coming from the response matches the one you expect (the one you generated when initiating the request).
     *    The state parameter is a string so you can encode any other information in it.
     * @param {string} [nonce]
     *    String value used to associate a Client session with an ID Token, and to mitigate replay attacks.
     *    The value is passed through unmodified from the Authentication Request to the ID Token.
     *    Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values.
     * @memberof CyberusKeyWidget
     */
    create(containingElementSelector, clientId, redirectUri, state, nonce) {
        if (this._initialized) {
            throw new Error(`Widget is already initialized.`);
        }
        this._clientId = clientId;
        this._redirectUri = redirectUri;
        this._state = state;
        this._nonce = nonce;
        const widgetHtml = widgetTemplate
            .replace('{{widgetImageUrl}}', this._getUrl(widgetImages[this._theme]));
        $(widgetHtml)
            .appendTo(containingElementSelector)
            .on('click', this._loginButtonClick.bind(this));
        this._initialized = true;
    }
    _loginButtonClick() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._inProgress) {
                return Promise.resolve();
            }
            this._inProgress = true;
            const api = new cyberuskey_sdk_1.CyberusKeyAPI(this._serverUrl.href);
            const scope = (new cyberuskey_sdk_1.OpenIdScopeParser()).addEmail().addProfile();
            yield api.authenticate(this._clientId, this._redirectUri, scope, new cyberuskey_sdk_1.WebAudioSoundEmitter(), new cyberuskey_sdk_1.RedirectNavigator());
        });
    }
    _getUrl(path) {
        return (new URL(path, this._serverUrl)).href;
    }
}
exports.CyberusKeyWidget = CyberusKeyWidget;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(5);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(7)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, ".cyberus-key-widget{position:relative}.cyberus-key-widget .login-button{flex:1 1 auto;padding:0px;border-style:none;outline:none;cursor:pointer;background-color:transparent;text-align:center}.cyberus-key-widget .login-button img{max-width:500px}.cyberus-key-widget .lost-phone{flex:0 0 auto;margin-top:3px;text-align:center;color:#7e8aac;font-size:18px;font-weight:400;letter-spacing:-0.32px;line-height:52.8px}\n", ""]);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(1));
__export(__webpack_require__(9));
__export(__webpack_require__(0));
__export(__webpack_require__(10));
__export(__webpack_require__(11));
__export(__webpack_require__(2));
const api_1 = __webpack_require__(1);
exports.default = api_1.CyberusKeyAPI;
//# sourceMappingURL=index.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class WebAudioSoundEmitter {
    emit(sound) {
        return __awaiter(this, void 0, void 0, function* () {
            let context;
            try {
                context = new AudioContext();
            }
            catch (e) {
                console.error('AudioContext is not supported.');
                throw e;
            }
            const audioBuffer = yield context.decodeAudioData(sound);
            const source = context.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(context.destination);
            yield (new Promise((resolve) => {
                source.onended = resolve;
                source.start(0);
            }));
        });
    }
}
exports.WebAudioSoundEmitter = WebAudioSoundEmitter;
//# sourceMappingURL=webAudioSoundEmitter.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = __webpack_require__(0);
class RedirectNavigator {
    navigate(url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!url) {
                throw new errors_1.MissingRedirectUri();
            }
            window.location.href = url;
            return Promise.resolve();
        });
    }
}
exports.RedirectNavigator = RedirectNavigator;
//# sourceMappingURL=redirectNavigator.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class OpenIdScopeParser {
    constructor() {
        this._scope = ['openid'];
    }
    addEmail() {
        if (this._scope.includes('email')) {
            return this;
        }
        this._scope.push('email');
        return this;
    }
    addProfile() {
        if (this._scope.includes('profile')) {
            return this;
        }
        this._scope.push('profile');
        return this;
    }
    getValue() {
        return this._scope.join(' ');
    }
}
exports.OpenIdScopeParser = OpenIdScopeParser;
//# sourceMappingURL=scopeParser.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* MIT https://github.com/kenwheeler/cash */
(function(){
"use strict";

var doc = document,
    win = window,
    div = doc.createElement('div'),
    _a = Array.prototype,
    filter = _a.filter,
    indexOf = _a.indexOf,
    map = _a.map,
    push = _a.push,
    reverse = _a.reverse,
    slice = _a.slice,
    some = _a.some,
    splice = _a.splice;
var idRe = /^#[\w-]*$/,
    classRe = /^\.[\w-]*$/,
    htmlRe = /<.+>/,
    tagRe = /^\w+$/; // @require ./variables.ts

function find(selector, context) {
  if (context === void 0) {
    context = doc;
  }

  return !isDocument(context) && !isElement(context) ? [] : classRe.test(selector) ? context.getElementsByClassName(selector.slice(1)) : tagRe.test(selector) ? context.getElementsByTagName(selector) : context.querySelectorAll(selector);
} // @require ./find.ts
// @require ./variables.ts


var Cash =
/** @class */
function () {
  function Cash(selector, context) {
    if (context === void 0) {
      context = doc;
    }

    if (!selector) return;
    if (isCash(selector)) return selector;
    var eles = selector;

    if (isString(selector)) {
      var ctx = isCash(context) ? context[0] : context;
      eles = idRe.test(selector) ? ctx.getElementById(selector.slice(1)) : htmlRe.test(selector) ? parseHTML(selector) : find(selector, ctx);
      if (!eles) return;
    } else if (isFunction(selector)) {
      return this.ready(selector); //FIXME: `fn.ready` is not included in `core`, but it's actually a core functionality
    }

    if (eles.nodeType || eles === win) eles = [eles];
    this.length = eles.length;

    for (var i = 0, l = this.length; i < l; i++) {
      this[i] = eles[i];
    }
  }

  Cash.prototype.init = function (selector, context) {
    return new Cash(selector, context);
  };

  return Cash;
}();

var cash = Cash.prototype.init;
cash.fn = cash.prototype = Cash.prototype; // Ensuring that `cash () instanceof cash`

Cash.prototype.length = 0;
Cash.prototype.splice = splice; // Ensuring a cash collection gets printed as array-like in Chrome's devtools

if (typeof Symbol === 'function') {
  Cash.prototype[Symbol['iterator']] = Array.prototype[Symbol['iterator']];
}

Cash.prototype.get = function (index) {
  if (index === undefined) return slice.call(this);
  return this[index < 0 ? index + this.length : index];
};

Cash.prototype.eq = function (index) {
  return cash(this.get(index));
};

Cash.prototype.first = function () {
  return this.eq(0);
};

Cash.prototype.last = function () {
  return this.eq(-1);
};

Cash.prototype.map = function (callback) {
  return cash(map.call(this, function (ele, i) {
    return callback.call(ele, i, ele);
  }));
};

Cash.prototype.slice = function () {
  return cash(slice.apply(this, arguments));
}; // @require ./cash.ts


var dashAlphaRe = /-([a-z])/g;

function camelCaseReplace(match, letter) {
  return letter.toUpperCase();
}

function camelCase(str) {
  return str.replace(dashAlphaRe, camelCaseReplace);
}

cash.camelCase = camelCase;

function each(arr, callback) {
  for (var i = 0, l = arr.length; i < l; i++) {
    if (callback.call(arr[i], i, arr[i]) === false) break;
  }
}

cash.each = each;

Cash.prototype.each = function (callback) {
  each(this, callback);
  return this;
};

Cash.prototype.removeProp = function (prop) {
  return this.each(function (i, ele) {
    delete ele[prop];
  });
}; // @require ./cash.ts


function extend(target) {
  var objs = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    objs[_i - 1] = arguments[_i];
  }

  var args = arguments,
      length = args.length;

  for (var i = length < 2 ? 0 : 1; i < length; i++) {
    for (var key in args[i]) {
      target[key] = args[i][key];
    }
  }

  return target;
}

Cash.prototype.extend = function (plugins) {
  return extend(cash.fn, plugins);
};

cash.extend = extend;
cash.guid = 1; // @require ./cash.ts

function matches(ele, selector) {
  var matches = ele && (ele['matches'] || ele['webkitMatchesSelector'] || ele['mozMatchesSelector'] || ele['msMatchesSelector'] || ele['oMatchesSelector']);
  return !!matches && matches.call(ele, selector);
}

cash.matches = matches; // @require ./variables.ts

function pluck(arr, prop, deep) {
  var plucked = [];

  for (var i = 0, l = arr.length; i < l; i++) {
    var val_1 = arr[i][prop];

    while (val_1 != null) {
      plucked.push(val_1);
      if (!deep) break;
      val_1 = val_1[prop];
    }
  }

  return plucked;
} // @require ./cash.ts


function isCash(x) {
  return x instanceof Cash;
}

function isWindow(x) {
  return !!x && x === x.window;
}

function isDocument(x) {
  return !!x && x.nodeType === 9;
}

function isElement(x) {
  return !!x && x.nodeType === 1;
}

function isFunction(x) {
  return typeof x === 'function';
}

function isString(x) {
  return typeof x === 'string';
}

function isNumeric(x) {
  return !isNaN(parseFloat(x)) && isFinite(x);
}

var isArray = Array.isArray;
cash.isWindow = isWindow;
cash.isFunction = isFunction;
cash.isString = isString;
cash.isNumeric = isNumeric;
cash.isArray = isArray;

Cash.prototype.prop = function (prop, value) {
  if (!prop) return;

  if (isString(prop)) {
    if (arguments.length < 2) return this[0] && this[0][prop];
    return this.each(function (i, ele) {
      ele[prop] = value;
    });
  }

  for (var key in prop) {
    this.prop(key, prop[key]);
  }

  return this;
}; // @require ./matches.ts
// @require ./type_checking.ts


function getCompareFunction(comparator) {
  return isString(comparator) ? function (i, ele) {
    return matches(ele, comparator);
  } : isFunction(comparator) ? comparator : isCash(comparator) ? function (i, ele) {
    return comparator.is(ele);
  } : function (i, ele) {
    return ele === comparator;
  };
}

Cash.prototype.filter = function (comparator) {
  if (!comparator) return cash();
  var compare = getCompareFunction(comparator);
  return cash(filter.call(this, function (ele, i) {
    return compare.call(ele, i, ele);
  }));
}; // @require collection/filter.ts


function filtered(collection, comparator) {
  return !comparator || !collection.length ? collection : collection.filter(comparator);
} // @require ./type_checking.ts


var splitValuesRe = /\S+/g;

function getSplitValues(str) {
  return isString(str) ? str.match(splitValuesRe) || [] : [];
}

Cash.prototype.hasClass = function (cls) {
  return cls && some.call(this, function (ele) {
    return ele.classList.contains(cls);
  });
};

Cash.prototype.removeAttr = function (attr) {
  var attrs = getSplitValues(attr);
  if (!attrs.length) return this;
  return this.each(function (i, ele) {
    each(attrs, function (i, a) {
      ele.removeAttribute(a);
    });
  });
};

function attr(attr, value) {
  if (!attr) return;

  if (isString(attr)) {
    if (arguments.length < 2) {
      if (!this[0]) return;
      var value_1 = this[0].getAttribute(attr);
      return value_1 === null ? undefined : value_1;
    }

    if (value === undefined) return this;
    if (value === null) return this.removeAttr(attr);
    return this.each(function (i, ele) {
      ele.setAttribute(attr, value);
    });
  }

  for (var key in attr) {
    this.attr(key, attr[key]);
  }

  return this;
}

Cash.prototype.attr = attr;

Cash.prototype.toggleClass = function (cls, force) {
  var classes = getSplitValues(cls),
      isForce = force !== undefined;
  if (!classes.length) return this;
  return this.each(function (i, ele) {
    each(classes, function (i, c) {
      if (isForce) {
        force ? ele.classList.add(c) : ele.classList.remove(c);
      } else {
        ele.classList.toggle(c);
      }
    });
  });
};

Cash.prototype.addClass = function (cls) {
  return this.toggleClass(cls, true);
};

Cash.prototype.removeClass = function (cls) {
  return !arguments.length ? this.attr('class', '') : this.toggleClass(cls, false);
}; // @optional ./add_class.ts
// @optional ./attr.ts
// @optional ./has_class.ts
// @optional ./prop.ts
// @optional ./remove_attr.ts
// @optional ./remove_class.ts
// @optional ./remove_prop.ts
// @optional ./toggle_class.ts
// @require ./cash.ts
// @require ./variables


function unique(arr) {
  return arr.length > 1 ? filter.call(arr, function (item, index, self) {
    return indexOf.call(self, item) === index;
  }) : arr;
}

cash.unique = unique;

Cash.prototype.add = function (selector, context) {
  return cash(unique(this.get().concat(cash(selector, context).get())));
}; // @require core/type_checking.ts
// @require core/variables.ts


function computeStyle(ele, prop, isVariable) {
  if (!isElement(ele) || !prop) return;
  var style = win.getComputedStyle(ele, null);
  return prop ? isVariable ? style.getPropertyValue(prop) || undefined : style[prop] : style;
} // @require ./compute_style.ts


function computeStyleInt(ele, prop) {
  return parseInt(computeStyle(ele, prop), 10) || 0;
}

var cssVariableRe = /^--/; // @require ./variables.ts

function isCSSVariable(prop) {
  return cssVariableRe.test(prop);
} // @require core/camel_case.ts
// @require core/cash.ts
// @require core/each.ts
// @require core/variables.ts
// @require ./is_css_variable.ts


var prefixedProps = {},
    style = div.style,
    vendorsPrefixes = ['webkit', 'moz', 'ms', 'o'];

function getPrefixedProp(prop, isVariable) {
  if (isVariable === void 0) {
    isVariable = isCSSVariable(prop);
  }

  if (isVariable) return prop;

  if (!prefixedProps[prop]) {
    var propCC = camelCase(prop),
        propUC = "" + propCC.charAt(0).toUpperCase() + propCC.slice(1),
        props = (propCC + " " + vendorsPrefixes.join(propUC + " ") + propUC).split(' ');
    each(props, function (i, p) {
      if (p in style) {
        prefixedProps[prop] = p;
        return false;
      }
    });
  }

  return prefixedProps[prop];
}

;
cash.prefixedProp = getPrefixedProp; // @require core/type_checking.ts
// @require ./is_css_variable.ts

var numericProps = {
  animationIterationCount: true,
  columnCount: true,
  flexGrow: true,
  flexShrink: true,
  fontWeight: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  widows: true,
  zIndex: true
};

function getSuffixedValue(prop, value, isVariable) {
  if (isVariable === void 0) {
    isVariable = isCSSVariable(prop);
  }

  return !isVariable && !numericProps[prop] && isNumeric(value) ? value + "px" : value;
}

function css(prop, value) {
  if (isString(prop)) {
    var isVariable_1 = isCSSVariable(prop);
    prop = getPrefixedProp(prop, isVariable_1);
    if (arguments.length < 2) return this[0] && computeStyle(this[0], prop, isVariable_1);
    if (!prop) return this;
    value = getSuffixedValue(prop, value, isVariable_1);
    return this.each(function (i, ele) {
      if (!isElement(ele)) return;

      if (isVariable_1) {
        ele.style.setProperty(prop, value); //TSC
      } else {
        ele.style[prop] = value; //TSC
      }
    });
  }

  for (var key in prop) {
    this.css(key, prop[key]);
  }

  return this;
}

;
Cash.prototype.css = css; // @optional ./css.ts
// @require core/camel_case.ts

function getData(ele, key) {
  var value = ele.dataset ? ele.dataset[key] || ele.dataset[camelCase(key)] : ele.getAttribute("data-" + key);

  try {
    return JSON.parse(value);
  } catch (_a) {}

  return value;
} // @require core/camel_case.ts


function setData(ele, key, value) {
  try {
    value = JSON.stringify(value);
  } catch (_a) {}

  if (ele.dataset) {
    ele.dataset[camelCase(key)] = value;
  } else {
    ele.setAttribute("data-" + key, value);
  }
}

var dataAttributeRe = /^data-(.+)/;

function data(name, value) {
  var _this = this;

  if (!name) {
    if (!this[0]) return;
    var datas_1 = {};
    each(this[0].attributes, function (i, attr) {
      var match = attr.name.match(dataAttributeRe);
      if (!match) return;
      datas_1[match[1]] = _this.data(match[1]);
    });
    return datas_1;
  }

  if (isString(name)) {
    if (value === undefined) return this[0] && getData(this[0], name);
    return this.each(function (i, ele) {
      return setData(ele, name, value);
    });
  }

  for (var key in name) {
    this.data(key, name[key]);
  }

  return this;
}

Cash.prototype.data = data; // @optional ./data.ts
// @require css/helpers/compute_style_int.ts

function getExtraSpace(ele, xAxis) {
  return computeStyleInt(ele, "border" + (xAxis ? 'Left' : 'Top') + "Width") + computeStyleInt(ele, "padding" + (xAxis ? 'Left' : 'Top')) + computeStyleInt(ele, "padding" + (xAxis ? 'Right' : 'Bottom')) + computeStyleInt(ele, "border" + (xAxis ? 'Right' : 'Bottom') + "Width");
}

each(['Width', 'Height'], function (i, prop) {
  Cash.prototype["inner" + prop] = function () {
    if (!this[0]) return;
    if (isWindow(this[0])) return win["inner" + prop];
    return this[0]["client" + prop];
  };
});
each(['width', 'height'], function (index, prop) {
  Cash.prototype[prop] = function (value) {
    if (!this[0]) return value === undefined ? undefined : this;

    if (!arguments.length) {
      if (isWindow(this[0])) return this[0][camelCase("outer-" + prop)];
      return this[0].getBoundingClientRect()[prop] - getExtraSpace(this[0], !index);
    }

    var valueNumber = parseInt(value, 10); //TSC

    return this.each(function (i, ele) {
      if (!isElement(ele)) return;
      var boxSizing = computeStyle(ele, 'boxSizing');
      ele.style[prop] = getSuffixedValue(prop, valueNumber + (boxSizing === 'border-box' ? getExtraSpace(ele, !index) : 0));
    });
  };
});
each(['Width', 'Height'], function (index, prop) {
  Cash.prototype["outer" + prop] = function (includeMargins) {
    if (!this[0]) return;
    if (isWindow(this[0])) return win["outer" + prop];
    return this[0]["offset" + prop] + (includeMargins ? computeStyleInt(this[0], "margin" + (!index ? 'Left' : 'Top')) + computeStyleInt(this[0], "margin" + (!index ? 'Right' : 'Bottom')) : 0);
  };
}); // @optional ./inner.ts
// @optional ./normal.ts
// @optional ./outer.ts
// @require css/helpers/compute_style.ts

var defaultDisplay = {};

function getDefaultDisplay(tagName) {
  if (defaultDisplay[tagName]) return defaultDisplay[tagName];
  var ele = doc.createElement(tagName);
  doc.body.appendChild(ele);
  var display = computeStyle(ele, 'display');
  doc.body.removeChild(ele);
  return defaultDisplay[tagName] = display !== 'none' ? display : 'block';
} // @require css/helpers/compute_style.ts


function isHidden(ele) {
  return computeStyle(ele, 'display') === 'none';
}

Cash.prototype.toggle = function (force) {
  return this.each(function (i, ele) {
    var show = force !== undefined ? force : isHidden(ele);

    if (show) {
      ele.style.display = '';

      if (isHidden(ele)) {
        ele.style.display = getDefaultDisplay(ele.tagName);
      }
    } else {
      ele.style.display = 'none';
    }
  });
};

Cash.prototype.hide = function () {
  return this.toggle(false);
};

Cash.prototype.show = function () {
  return this.toggle(true);
}; // @optional ./hide.ts
// @optional ./show.ts
// @optional ./toggle.ts


function hasNamespaces(ns1, ns2) {
  return !ns2 || !some.call(ns2, function (ns) {
    return ns1.indexOf(ns) < 0;
  });
}

var eventsNamespace = '__cashEvents',
    eventsNamespacesSeparator = '.',
    eventsFocus = {
  focus: 'focusin',
  blur: 'focusout'
},
    eventsHover = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
},
    eventsMouseRe = /^(?:mouse|pointer|contextmenu|drag|drop|click|dblclick)/i; // @require ./variables.ts

function getEventNameBubbling(name) {
  return eventsHover[name] || eventsFocus[name] || name;
} // @require ./variables.ts


function getEventsCache(ele) {
  return ele[eventsNamespace] = ele[eventsNamespace] || {};
} // @require core/guid.ts
// @require events/helpers/get_events_cache.ts


function addEvent(ele, name, namespaces, selector, callback) {
  callback.guid = callback.guid || cash.guid++;
  var eventCache = getEventsCache(ele);
  eventCache[name] = eventCache[name] || [];
  eventCache[name].push([namespaces, selector, callback]);
  ele.addEventListener(name, callback);
} // @require ./variables.ts


function parseEventName(eventName) {
  var parts = eventName.split(eventsNamespacesSeparator);
  return [parts[0], parts.slice(1).sort()]; // [name, namespace[]]
} // @require ./get_events_cache.ts
// @require ./has_namespaces.ts
// @require ./parse_event_name.ts


function removeEvent(ele, name, namespaces, selector, callback) {
  var cache = getEventsCache(ele);

  if (!name) {
    for (name in cache) {
      removeEvent(ele, name, namespaces, selector, callback);
    }

    delete ele[eventsNamespace];
  } else if (cache[name]) {
    cache[name] = cache[name].filter(function (_a) {
      var ns = _a[0],
          sel = _a[1],
          cb = _a[2];
      if (callback && cb.guid !== callback.guid || !hasNamespaces(ns, namespaces) || selector && selector !== sel) return true;
      ele.removeEventListener(name, cb);
    });
  }
}

Cash.prototype.off = function (eventFullName, selector, callback) {
  var _this = this;

  if (eventFullName === undefined) {
    this.each(function (i, ele) {
      return removeEvent(ele);
    });
  } else {
    if (isFunction(selector)) {
      callback = selector;
      selector = '';
    }

    each(getSplitValues(eventFullName), function (i, eventFullName) {
      var _a = parseEventName(getEventNameBubbling(eventFullName)),
          name = _a[0],
          namespaces = _a[1];

      _this.each(function (i, ele) {
        return removeEvent(ele, name, namespaces, selector, callback);
      }); //TSC

    });
  }

  return this;
};

function on(eventFullName, selector, callback, _one) {
  var _this = this;

  if (!isString(eventFullName)) {
    for (var key in eventFullName) {
      this.on(key, selector, eventFullName[key]);
    }

    return this;
  }

  if (isFunction(selector)) {
    callback = selector;
    selector = '';
  }

  each(getSplitValues(eventFullName), function (i, eventFullName) {
    var _a = parseEventName(getEventNameBubbling(eventFullName)),
        name = _a[0],
        namespaces = _a[1];

    _this.each(function (i, ele) {
      var finalCallback = function finalCallback(event) {
        if (event.namespace && !hasNamespaces(namespaces, event.namespace.split(eventsNamespacesSeparator))) return;
        var thisArg = ele;

        if (selector) {
          var target = event.target;

          while (!matches(target, selector)) {
            //TSC
            if (target === ele) return;
            target = target.parentNode;
            if (!target) return;
          }

          thisArg = target;
          event.__delegate = true;
        }

        if (event.__delegate) {
          Object.defineProperty(event, 'currentTarget', {
            configurable: true,
            get: function get() {
              return thisArg;
            }
          });
        }

        var returnValue = callback.call(thisArg, event, event.data); //TSC

        if (_one) {
          removeEvent(ele, name, namespaces, selector, finalCallback); //TSC
        }

        if (returnValue === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      };

      finalCallback.guid = callback['guid'] = callback['guid'] || cash.guid++; //TSC

      addEvent(ele, name, namespaces, selector, finalCallback); //TSC
    });
  });
  return this;
}

Cash.prototype.on = on;

function one(eventFullName, selector, callback) {
  return this.on(eventFullName, selector, callback, true); //TSC
}

;
Cash.prototype.one = one;

Cash.prototype.ready = function (callback) {
  var finalCallback = function finalCallback() {
    return callback(cash);
  };

  if (doc.readyState !== 'loading') {
    setTimeout(finalCallback);
  } else {
    doc.addEventListener('DOMContentLoaded', finalCallback);
  }

  return this;
};

Cash.prototype.trigger = function (eventFullName, data) {
  var evt;

  if (isString(eventFullName)) {
    var _a = parseEventName(eventFullName),
        name_1 = _a[0],
        namespaces = _a[1],
        type = eventsMouseRe.test(name_1) ? 'MouseEvents' : 'HTMLEvents';

    evt = doc.createEvent(type);
    evt.initEvent(name_1, true, true);
    evt.namespace = namespaces.join(eventsNamespacesSeparator);
  } else {
    evt = eventFullName;
  }

  evt.data = data;
  var isEventFocus = evt.type in eventsFocus;
  return this.each(function (i, ele) {
    if (isEventFocus && isFunction(ele[evt.type])) {
      ele[evt.type]();
    } else {
      ele.dispatchEvent(evt);
    }
  });
}; // @optional ./off.ts
// @optional ./on.ts
// @optional ./one.ts
// @optional ./ready.ts
// @optional ./trigger.ts
// @require core/pluck.ts
// @require core/variables.ts


function getValue(ele) {
  if (ele.multiple) return pluck(filter.call(ele.options, function (option) {
    return option.selected && !option.disabled && !option.parentNode.disabled;
  }), 'value');
  return ele.value || '';
}

var queryEncodeSpaceRe = /%20/g;

function queryEncode(prop, value) {
  return "&" + encodeURIComponent(prop) + "=" + encodeURIComponent(value).replace(queryEncodeSpaceRe, '+');
} // @require core/cash.ts
// @require core/each.ts
// @require core/type_checking.ts
// @require ./helpers/get_value.ts
// @require ./helpers/query_encode.ts


var skippableRe = /file|reset|submit|button|image/i,
    checkableRe = /radio|checkbox/i;

Cash.prototype.serialize = function () {
  var query = '';
  this.each(function (i, ele) {
    each(ele.elements || [ele], function (i, ele) {
      if (ele.disabled || !ele.name || ele.tagName === 'FIELDSET' || skippableRe.test(ele.type) || checkableRe.test(ele.type) && !ele.checked) return;
      var value = getValue(ele);
      if (value === undefined) return;
      var values = isArray(value) ? value : [value];
      each(values, function (i, value) {
        query += queryEncode(ele.name, value);
      });
    });
  });
  return query.substr(1);
};

function val(value) {
  if (value === undefined) return this[0] && getValue(this[0]);
  return this.each(function (i, ele) {
    if (ele.tagName === 'SELECT') {
      var eleValue_1 = isArray(value) ? value : value === null ? [] : [value];
      each(ele.options, function (i, option) {
        option.selected = eleValue_1.indexOf(option.value) >= 0;
      });
    } else {
      ele.value = value === null ? '' : value;
    }
  });
}

Cash.prototype.val = val;

Cash.prototype.clone = function () {
  return this.map(function (i, ele) {
    return ele.cloneNode(true);
  });
};

Cash.prototype.detach = function () {
  return this.each(function (i, ele) {
    if (ele.parentNode) {
      ele.parentNode.removeChild(ele);
    }
  });
}; // @require ./cash.ts
// @require ./variables.ts
// @require ./type_checking.ts
// @require collection/get.ts
// @require manipulation/detach.ts


var fragmentRe = /^\s*<(\w+)[^>]*>/,
    singleTagRe = /^\s*<(\w+)\s*\/?>(?:<\/\1>)?\s*$/;
var containers;

function initContainers() {
  if (containers) return;
  var table = doc.createElement('table'),
      tr = doc.createElement('tr');
  containers = {
    '*': div,
    tr: doc.createElement('tbody'),
    td: tr,
    th: tr,
    thead: table,
    tbody: table,
    tfoot: table
  };
}

function parseHTML(html) {
  initContainers();
  if (!isString(html)) return [];
  if (singleTagRe.test(html)) return [doc.createElement(RegExp.$1)];
  var fragment = fragmentRe.test(html) && RegExp.$1,
      container = containers[fragment] || containers['*'];
  container.innerHTML = html;
  return cash(container.childNodes).detach().get();
}

cash.parseHTML = parseHTML;

Cash.prototype.empty = function () {
  return this.each(function (i, ele) {
    while (ele.firstChild) {
      ele.removeChild(ele.firstChild);
    }
  });
};

function html(html) {
  if (html === undefined) return this[0] && this[0].innerHTML;
  return this.each(function (i, ele) {
    ele.innerHTML = html;
  });
}

Cash.prototype.html = html;

Cash.prototype.remove = function () {
  return this.detach().off();
};

function text(text) {
  if (text === undefined) return this[0] ? this[0].textContent : '';
  return this.each(function (i, ele) {
    ele.textContent = text;
  });
}

;
Cash.prototype.text = text;

Cash.prototype.unwrap = function () {
  this.parent().each(function (i, ele) {
    var $ele = cash(ele);
    $ele.replaceWith($ele.children());
  });
  return this;
}; // @require core/cash.ts
// @require core/variables.ts


var docEle = doc.documentElement;

Cash.prototype.offset = function () {
  var ele = this[0];
  if (!ele) return;
  var rect = ele.getBoundingClientRect();
  return {
    top: rect.top + win.pageYOffset - docEle.clientTop,
    left: rect.left + win.pageXOffset - docEle.clientLeft
  };
};

Cash.prototype.offsetParent = function () {
  return cash(this[0] && this[0].offsetParent);
};

Cash.prototype.position = function () {
  var ele = this[0];
  if (!ele) return;
  return {
    left: ele.offsetLeft,
    top: ele.offsetTop
  };
};

Cash.prototype.children = function (comparator) {
  var result = [];
  this.each(function (i, ele) {
    push.apply(result, ele.children);
  });
  return filtered(cash(unique(result)), comparator);
};

Cash.prototype.contents = function () {
  var result = [];
  this.each(function (i, ele) {
    push.apply(result, ele.tagName === 'IFRAME' ? [ele.contentDocument] : ele.childNodes);
  });
  return cash(unique(result));
};

Cash.prototype.find = function (selector) {
  var result = [];

  for (var i = 0, l = this.length; i < l; i++) {
    var found = find(selector, this[i]);

    if (found.length) {
      push.apply(result, found);
    }
  }

  return cash(unique(result));
}; // @require collection/filter.ts
// @require traversal/find.ts


var scriptTypeRe = /^$|^module$|\/(?:java|ecma)script/i,
    HTMLCDATARe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function evalScripts(node) {
  var collection = cash(node);
  collection.filter('script').add(collection.find('script')).each(function (i, ele) {
    if (!ele.src && scriptTypeRe.test(ele.type)) {
      // The script type is supported
      if (ele.ownerDocument.documentElement.contains(ele)) {
        // The element is attached to the DOM // Using `documentElement` for broader browser support
        eval(ele.textContent.replace(HTMLCDATARe, ''));
      }
    }
  });
} // @require ./eval_scripts.ts


function insertElement(anchor, child, prepend, prependTarget) {
  if (prepend) {
    anchor.insertBefore(child, prependTarget);
  } else {
    anchor.appendChild(child);
  }

  evalScripts(child);
} // @require core/each.ts
// @require core/type_checking.ts
// @require ./insert_element.ts


function insertContent(parent, child, prepend) {
  each(parent, function (index, parentEle) {
    each(child, function (i, childEle) {
      insertElement(parentEle, !index ? childEle : childEle.cloneNode(true), prepend, prepend && parentEle.firstChild);
    });
  });
}

Cash.prototype.append = function () {
  var _this = this;

  each(arguments, function (i, selector) {
    insertContent(_this, cash(selector));
  });
  return this;
};

Cash.prototype.appendTo = function (selector) {
  insertContent(cash(selector), this);
  return this;
};

Cash.prototype.insertAfter = function (selector) {
  var _this = this;

  cash(selector).each(function (index, ele) {
    var parent = ele.parentNode;

    if (parent) {
      _this.each(function (i, e) {
        insertElement(parent, !index ? e : e.cloneNode(true), true, ele.nextSibling);
      });
    }
  });
  return this;
};

Cash.prototype.after = function () {
  var _this = this;

  each(reverse.apply(arguments), function (i, selector) {
    reverse.apply(cash(selector).slice()).insertAfter(_this);
  });
  return this;
};

Cash.prototype.insertBefore = function (selector) {
  var _this = this;

  cash(selector).each(function (index, ele) {
    var parent = ele.parentNode;

    if (parent) {
      _this.each(function (i, e) {
        insertElement(parent, !index ? e : e.cloneNode(true), true, ele);
      });
    }
  });
  return this;
};

Cash.prototype.before = function () {
  var _this = this;

  each(arguments, function (i, selector) {
    cash(selector).insertBefore(_this);
  });
  return this;
};

Cash.prototype.prepend = function () {
  var _this = this;

  each(arguments, function (i, selector) {
    insertContent(_this, cash(selector), true);
  });
  return this;
};

Cash.prototype.prependTo = function (selector) {
  insertContent(cash(selector), reverse.apply(this.slice()), true);
  return this;
};

Cash.prototype.replaceWith = function (selector) {
  return this.before(selector).remove();
};

Cash.prototype.replaceAll = function (selector) {
  cash(selector).replaceWith(this);
  return this;
};

Cash.prototype.wrapAll = function (selector) {
  if (this[0]) {
    var structure = cash(selector);
    this.first().before(structure);
    var wrapper = structure[0];

    while (wrapper.children.length) {
      wrapper = wrapper.firstElementChild;
    }

    this.appendTo(wrapper);
  }

  return this;
};

Cash.prototype.wrap = function (selector) {
  return this.each(function (index, ele) {
    var wrapper = cash(selector)[0];
    cash(ele).wrapAll(!index ? wrapper : wrapper.cloneNode(true));
  });
};

Cash.prototype.wrapInner = function (selector) {
  return this.each(function (i, ele) {
    var $ele = cash(ele),
        contents = $ele.contents();
    contents.length ? contents.wrapAll(selector) : $ele.append(selector);
  });
};

Cash.prototype.has = function (selector) {
  var comparator = isString(selector) ? function (i, ele) {
    return !!find(selector, ele).length;
  } : function (i, ele) {
    return ele.contains(selector);
  };
  return this.filter(comparator);
};

Cash.prototype.is = function (comparator) {
  if (!comparator || !this[0]) return false;
  var compare = getCompareFunction(comparator);
  var check = false;
  this.each(function (i, ele) {
    check = compare.call(ele, i, ele);
    return !check;
  });
  return check;
};

Cash.prototype.next = function (comparator, _all) {
  return filtered(cash(unique(pluck(this, 'nextElementSibling', _all))), comparator);
};

Cash.prototype.nextAll = function (comparator) {
  return this.next(comparator, true);
};

Cash.prototype.not = function (comparator) {
  if (!comparator || !this[0]) return this;
  var compare = getCompareFunction(comparator);
  return this.filter(function (i, ele) {
    return !compare.call(ele, i, ele);
  });
};

Cash.prototype.parent = function (comparator) {
  return filtered(cash(unique(pluck(this, 'parentNode'))), comparator);
};

Cash.prototype.index = function (selector) {
  var child = selector ? cash(selector)[0] : this[0],
      collection = selector ? this : cash(child).parent().children();
  return indexOf.call(collection, child);
};

Cash.prototype.closest = function (comparator) {
  if (!comparator || !this[0]) return cash();
  var filtered = this.filter(comparator);
  if (filtered.length) return filtered;
  return this.parent().closest(comparator);
};

Cash.prototype.parents = function (comparator) {
  return filtered(cash(unique(pluck(this, 'parentElement', true))), comparator);
};

Cash.prototype.prev = function (comparator, _all) {
  return filtered(cash(unique(pluck(this, 'previousElementSibling', _all))), comparator);
};

Cash.prototype.prevAll = function (comparator) {
  return this.prev(comparator, true);
};

Cash.prototype.siblings = function (comparator) {
  var result = [];
  this.each(function (i, ele) {
    push.apply(result, cash(ele).parent().children(function (ci, child) {
      return child !== ele;
    }));
  });
  return filtered(cash(unique(result)), comparator);
}; // @optional ./children.ts
// @optional ./closest.ts
// @optional ./contents.ts
// @optional ./find.ts
// @optional ./has.ts
// @optional ./is.ts
// @optional ./next.ts
// @optional ./not.ts
// @optional ./parent.ts
// @optional ./parents.ts
// @optional ./prev.ts
// @optional ./siblings.ts
// @optional attributes/index.ts
// @optional collection/index.ts
// @optional css/index.ts
// @optional data/index.ts
// @optional dimensions/index.ts
// @optional effects/index.ts
// @optional events/index.ts
// @optional forms/index.ts
// @optional manipulation/index.ts
// @optional offset/index.ts
// @optional traversal/index.ts
// @require core/index.ts
// @priority -100
// @require ./cash.ts
// @require ./variables.ts


if (true) {
  // Node.js
  module.exports = cash;
} else {}
})();

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cyberus-key-widget\"></div>\n\n<div class=\"cyberus-key-widget\">\n  <button class=\"login-button\">\n    <img src=\"{{widgetImageUrl}}\" alt=\"Click to log in\" />\n  </button>\n\n  <div class=\"lost-phone\">\n    Lost your phone? <a class='lock-now-link' href=\"#\" target=\"_parent\">Lock now</a>\n  </div>\n</div>";

/***/ })
/******/ ]);
});