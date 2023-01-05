(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("cyberuskey-widget", [], factory);
	else if(typeof exports === 'object')
		exports["cyberuskey-widget"] = factory();
	else
		root["cyberuskey-widget"] = factory();
})(typeof(self) !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(1), exports);
__exportStar(__webpack_require__(2), exports);
__exportStar(__webpack_require__(5), exports);
__exportStar(__webpack_require__(6), exports);
__exportStar(__webpack_require__(7), exports);
__exportStar(__webpack_require__(8), exports);
__exportStar(__webpack_require__(3), exports);
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(11), exports);
const api_1 = __webpack_require__(1);
exports.default = api_1.CyberusKeyAPI;
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CyberusKeyAPI = void 0;
/**
 * Cyberus Key API which allows you to do a delegate login with OpenId protocol.
 *
 * @class CyberusKeyAPI
 */
class CyberusKeyAPI {
    /**
     *Creates an instance of CyberusKeyAPI.
     * @param {string} hostUrl Base URL of the host server, e.g. `https://api.cyberuskey.com`
     * @param {GeoProvider} [geoProvider] Geolocalization provider. Use specific implementation like `HTML5GeoProvider`.
     * @param {number} [delayMs=600] Delay (ms) between making an Authentication request and a sound playing.
     * @memberof CyberusKeyAPI
     */
    constructor(hostUrl, geoProvider, delayMs = 600) {
        this._apiUrl = new URL('/api/v2/', hostUrl);
        this._geoProvider = geoProvider;
        this._delayMs = delayMs;
    }
    /**
     * Creates the Cyberus Key session.
     *
     * @param {string} clientId Public client ID generated during creating the account.
     * @param {Geolocation} [geo] Give a value if you want to pass optional geolocation measurement.
     *    It can be later use to compare it against the mobile's measurement (if you have set `fail_on_geo_mismatch`).
     *    Those measurements can be used also to general improvement of the security.
     * @param {string} [origin] The origin domain of the request being made. If `null` then the Referer header will be used.
     * @throws WrongJsonError, OpenApiError, ResourceNotFoundError, OTPGenerationError, UnknownError
     * @returns {Promise<string>} The Cyberus Key session id.
     * @memberof CyberusKeyAPI
     */
    createSession(clientId, origin, geo) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = { client_id: clientId };
            if (geo) {
                data['lat'] = geo.latitude;
                data['lng'] = geo.longitude;
            }
            else if (this._geoProvider) {
                const gps = yield this._geoProvider.getGeo();
                if (gps) {
                    data['lat'] = gps.latitude;
                    data['lng'] = gps.longitude;
                }
            }
            if (origin) {
                data['origin'] = origin;
            }
            const params = {
                method: 'POST',
                body: this._getUrlEncodedBody(data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            return fetch(this._getUrl('sessions'), params)
                .then((response) => response.json())
                .then((json) => json.data.session_id);
        });
    }
    /**
     * Checks if authentication server is available
     *
     * @returns {Promise<boolean>} flag indicating if the authentication server is available.
     * @memberof CyberusKeyAPI
     */
    isOutOfService() {
        return __awaiter(this, void 0, void 0, function* () {
            let errPageMsg = (new URL(document.location.href)).searchParams.get("error");
            if (errPageMsg != null && errPageMsg == "otp_timeout_error") {
                let authActive = sessionStorage.getItem("auth_active");
                if (authActive != null && authActive === "true") {
                    sessionStorage.removeItem("auth_active");
                    let authCounter = sessionStorage.getItem("auth_counter");
                    if (authCounter != null) {
                        let authCounterValue = parseInt(authCounter, 10);
                        if (!isNaN(authCounterValue)) {
                            sessionStorage.setItem("auth_counter", (authCounterValue + 1).toString());
                        }
                    }
                    else {
                        sessionStorage.setItem("auth_counter", "1");
                    }
                }
            }
            else {
                sessionStorage.removeItem("auth_counter");
            }
            const requestOptions = {
                headers: {
                    'Accept': 'application/json'
                }
            };
            return fetch(this._getUrl(`version`), requestOptions)
                .then(response => response.json())
                .then((versionJson) => versionJson.outOfService)
                .catch((err) => {
                return err;
            });
        });
    }
    /**
     * Gets a URL with sound with embedded OTP. You have to emit it.
     *
     * @param {Session} session Cyberus Key's session generated by a user for a login.
     * @returns {Promise<string>} string with url to the sound.
     * @throws ResourceNotFoundError
     * @memberof CyberusKeyAPI
     */
    getOTPSound(session) {
        const type = 'audio/mpeg';
        const requestOptions = {
            headers: {
                'Accept': type,
                'Content-Type': 'text/plain'
            }
        };
        return fetch(this._getUrl(`sessions/${session}`), requestOptions)
            .then((response) => response.arrayBuffer())
            .then((arrayBuffer) => new Blob([arrayBuffer], { type: type }))
            .then((blob) => window.URL.createObjectURL(blob))
            .catch((err) => {
            return err;
        });
    }
    /**
     * Gets OpenID's Authentication endpoint URL which will be used to process the authentication.
     *
     * @param sessionId unique id created for the specific login and connected to the specific otp
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
     * @param {string} [responseType='code'] OpenId response type. The default is `code` (Code Flow, involving the front-channel and backchannel).
     * @returns OpenID's Authentication endpoint URL
     * @throws InvalidRedirectUriError, InvalidClientError, ResourceNotFoundError
     * @memberof CyberusKeyAPI
     */
    getAuthenticationEndpointUrl(sessionId, scope, clientId, redirectUri, state, nonce, responseType = 'code') {
        const data = {
            session_id: sessionId,
            client_id: clientId,
            scope: scope.getValue(),
            redirect_uri: redirectUri,
            response_type: responseType
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
     * Navigates to Authentication Endpoint
     *
     * @param {string} clientId Public client ID generated during creating the account.
     * @param {string} redirectUri Redirect URI to which the response will be sent. If the value is not whitelisted then the request will fail.
     * @param {OpenIdScopeParser} scope Each scope returns a set of user attributes, which are called claims.
     *    Once the user authorizes the requested scopes, the claims are returned in an ID Token.
     * @param {Navigator} navigator Class describes an action that will be done to Authentication URL. For browsers it will be a page redirection.
     * @param session Session id
     * @param {string} [origin] The origin domain of the request being made. If `null` then the Referer header will be used.
     * @param {string} [state]
     *    RECOMMENDED. Opaque value used to maintain state between the request and the callback. Typically, CSRF, XSRF mitigation is done by cryptographically binding the value of this parameter with a browser cookie.
     *    The state parameter preserves some state object set by the client in the Authentication request and makes it available to the client in the response.
     *    It’s that unique and non-guessable value that allows you to prevent the attack by confirming if the value coming from the response matches the one you expect (the one you generated when initiating the request).
     *    The state parameter is a string so you can encode any other information in it.
     * @param {string} [nonce]
     *    String value used to associate a Client session with an ID Token, and to mitigate replay attacks.
     *    The value is passed through unmodified from the Authentication Request to the ID Token.
     *    Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values.
     * @param {string} [responseType='code'] OpenId response type. The default is `code` (Code Flow, involving the front-channel and backchannel).
     * @returns {Promise<void>}
     * @memberof CyberusKeyAPI
     */
    navigateAuthentication(clientId, redirectUri, scope, navigator, session, origin, state, nonce, responseType = 'code') {
        const authenticateUrl = this.getAuthenticationEndpointUrl(session, scope, clientId, redirectUri, state, nonce, responseType);
        sessionStorage.setItem("auth_active", "true");
        return navigator.navigate(authenticateUrl);
    }
    loginThroughCyberusKeyDashboard(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                client_id: options.clientId,
                scope: options.scope.getValue(),
                redirect_uri: options.redirectUri,
                response_type: options.responseType,
                state: options.state,
                nonce: options.nonce,
                display: options.display || 'page',
                prompt: options.prompt,
                theme: options.theme,
            };
            if (options.state) {
                data['state'] = options.state;
            }
            if (options.nonce) {
                data['nonce'] = options.nonce;
            }
            const url = new URL(this._getUrl('authenticate'));
            Object.keys(data).forEach((parameterName) => {
                url.searchParams.append(parameterName, data[parameterName]);
            });
            yield options.navigator.navigate(url.href);
        });
    }
    _getUrl(path) {
        return (new URL(path, this._apiUrl)).href;
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
exports.MissingRedirectUri = exports.OTPGenerationError = exports.ResourceNotFoundError = exports.OpenApiError = exports.WrongJsonError = exports.TooManyCallsError = exports.UnknownError = exports.CyberusKeyError = exports.ErrorCode = exports.errorFactory = void 0;
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
    get code() {
        return ErrorCode[this._code];
    }
    get description() {
        return this.message;
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Geolocation = void 0;
/**
 * An abstraction for a taken geolocation measurement.
 *
 * @export
 * @class Geolocation
 */
class Geolocation {
    constructor(latitude, longitude, accuracy) {
        this._latitude = latitude;
        this._longitude = longitude;
        this._accuracy = accuracy;
    }
    /**
     * Get a latitude.
     *
     * @readonly
     * @type {number}
     * @memberof Geolocation
     */
    get latitude() {
        return this._latitude;
    }
    /**
     * Gets a longitude.
     *
     * @readonly
     * @type {number}
     * @memberof Geolocation
     */
    get longitude() {
        return this._longitude;
    }
    /**
     * Gets an accuracy of a measurement.
     *
     * @readonly
     * @type {number}
     * @memberof Geolocation
     */
    get accuracy() {
        return this._accuracy;
    }
}
exports.Geolocation = Geolocation;
//# sourceMappingURL=geo.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CyberusKeyWidget = exports.WidgetOptions = exports.WidgetAnimation = void 0;
const cyberuskey_sdk_1 = __webpack_require__(0);
let widgetTemplate = '';
if (typeof (window) !== 'undefined') {
    __webpack_require__(12);
    widgetTemplate = __webpack_require__(19);
}
__exportStar(__webpack_require__(0), exports);
/**
 * Defines the widget animation.
 * Use one of `None`, `Blinking`, `Waves`.
 *
 * @readonly
 * @enum {number}
 */
var WidgetAnimation;
(function (WidgetAnimation) {
    /**
     * No animation.
     */
    WidgetAnimation[WidgetAnimation["None"] = 0] = "None";
    /**
     * Logo is blinking.
     */
    WidgetAnimation[WidgetAnimation["Blinking"] = 1] = "Blinking";
    /**
     * Logo "emits" the waves.
     */
    WidgetAnimation[WidgetAnimation["Waves"] = 2] = "Waves";
})(WidgetAnimation = exports.WidgetAnimation || (exports.WidgetAnimation = {}));
/**
 * Widget options passed to a CyberusKeyWidget constructor.
 *
 * @export
 * @class WidgetOptions
 */
class WidgetOptions {
    constructor() {
        /**
         * A theme of the widget. You can use: `default` or `eliot`.
         *
         * @type {string}
         * @memberof WidgetOptions
         */
        this.theme = 'default';
        /**
         * Cyberus Key's Authentication Server URL.
         *
         * @type {string}
         * @memberof WidgetOptions
         */
        this.serverUrl = 'https://api.cyberuskey.com';
        /**
         * Animation of the widget applied during a sound transmission.
         *
         * @type {WidgetAnimation}
         * @memberof WidgetOptions
         */
        this.animation = WidgetAnimation.Blinking;
        /**
         * Provider of a geolocalization. `If passed, then geolocalization measurement is taken`.
         * For a web browser use [HTML5GeoProvider](https://github.com/CyberusLabs/cyberuskey-sdk/#html5geoprovider).
         * Geolocalization measurement can be later use to compare it against the mobile's measurement (if you have set `fail_on_geo_mismatch`).
         * Those measurements can be used also to general improvement of the security.
         *
         * @type {GeoProvider}
         * @memberof WidgetOptions
         */
        this.geoProvider = null;
        /**
         * `RECOMMENDED`. Opaque value used to maintain state between the request and the callback. Typically, CSRF, XSRF mitigation is done by cryptographically binding the value of this parameter with a browser cookie.
         * The state parameter preserves some state object set by the client in the Authentication request and makes it available to the client in the response.
         * It’s that unique and non-guessable value that allows you to prevent the attack by confirming if the value coming from the response matches the one you expect (the one you generated when initiating the request).
         * The state parameter is a string so you can encode any other information in it.
         *
         * The value can be passed e.g. through an encrypted cookie and validated on the client server before making a Token Request.
         *
         * @type {string}
         * @memberof WidgetOptions
         */
        this.state = null;
        /**
         * String value used to associate a Client session with an ID Token, and to mitigate replay attacks.
         * The value is passed through unmodified from the Authentication Request to the ID Token.
         * Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values.
         *
         * @type {string}
         * @memberof WidgetOptions
         */
        this.nonce = null;
        /**
         * OpenId's response type. By default it's `code` what means OpenId Code Flow.
         *
         * @type {string}
         * @memberof WidgetOptions
         */
        this.responseType = 'code';
        /**
         * Determines whether the login process will be done automatically when the button is ready.
         *
         * @type {boolean}
         * @memberof WidgetOptions
         */
        this.autoplay = false;
        /**
         * If set to `true`, then the login process will be done through the Cyberus Key Dashboard.
         * So, you'll be redirected to the other page to login.
         * If it's `false`, then the login goes directly to the Cyberus Key API.
         *
         * @type {boolean}
         * @memberof WidgetOptions
         */
        this.fullOpenIdLogin = false;
    }
}
exports.WidgetOptions = WidgetOptions;
/**
 * Class represents a UI button that uses `cyberuskey-sdk` and allows to make a login with Cyberus Key Authentication Server.
 *
 * If you miss some docs, try find them [here](https://github.com/CyberusLabs/cyberuskey-sdk/#CyberusKeyAPI), in Cyberus Key JavaScript SDK documentation .
 *
 * Example:
 *
 * ```javascript
 * import { CyberusKeyWidget, HTML5GeoProvider } from "cyberuskey-widget";
 *
 * $(document).ready(() => {
 * const ckButton = new CyberusKeyWidget({
 *    clientId: window.CyberusKey.CLIENT_ID,
 *    redirectUri: window.CyberusKey.REDIRECT_URI,
 *    fullOpenIdLogin: true,
 *    state: window.CyberusKey.STATE,
 *    nonce: window.CyberusKey.NONCE
 *   });
 *
 *   cyberusKeyButton.create('cyberus-key-widget-container');
 * });
 *
 * If fullOpenIdLogin is true, then a user will be redirected to cyberuskey.com to process the login. This is the recommended configuration. If it’s false, the login process is done only on your side and you will have to e.g. handle errors.
 *
 * ```
 *
 * @export
 * @class CyberusKeyWidget
 */
class CyberusKeyWidget {
    /**
     * Creates an instance of CyberusKeyWidget.
     *
     * @param {WidgetOptions} options
     * @memberof CyberusKeyWidget
     */
    constructor(options) {
        if (!options || !options.clientId || !options.redirectUri) {
            throw new Error('CyberusKeyWidget: Missing options(s).');
        }
        let theme = options.theme || 'default';
        const serverUrl = options.serverUrl || 'https://api.cyberuskey.com';
        const animation = options.animation || WidgetAnimation.Blinking;
        if (!['default', 'eliot'].includes(theme)) {
            theme = 'default';
            console.warn(`CyberusKeyWidget: Theme "${theme}" is not supported.`);
        }
        this._clientId = options.clientId;
        this._redirectUri = options.redirectUri;
        this._scope = options.scope || (new cyberuskey_sdk_1.OpenIdScopeParser()).addEmail();
        this._state = options.state;
        this._nonce = options.nonce;
        this._responseType = options.responseType || 'code';
        this._serverUrl = new URL(serverUrl);
        this._theme = theme;
        this._animation = animation || WidgetAnimation.Blinking;
        this._initialized = false;
        this._inProgress = false;
        this._origin = options.origin;
        this._autoplay = options.autoplay;
        this._fullOpenIdLogin = options.fullOpenIdLogin;
        this._audio = new Audio();
        this._api = new cyberuskey_sdk_1.CyberusKeyAPI(this._serverUrl.href, options.geoProvider);
    }
    /**
     * Creates a Cyberus Key button element in the DOM tree.
     *
     * @param {string} containingElementClassName CSS class name of the containing DOM element for the Cyberus Key Widget.
     * @memberof CyberusKeyWidget
     */
    create(containingElementClassName) {
        if (typeof (document) === 'undefined' || typeof (window) === 'undefined') {
            return;
        }
        if (this._initialized) {
            throw new Error(`Widget is already initialized.`);
        }
        const buttonText = this._theme === 'eliot' ? 'LOGIN WITH ELIOT PRO' : 'Login with <b>Cyberus</b>Key';
        const widgetHtml = widgetTemplate
            .replace(/{{lostDeviceUrl}}/g, this._getUrl('dashboard'))
            .replace(/{{theme}}/g, this._theme)
            .replace(/{{loginText}}/g, buttonText);
        this._createButton(widgetHtml, containingElementClassName);
        this._api.isOutOfService()
            .then((isOutOfService) => {
            if (isOutOfService) {
                this._disable();
                throw new Error('The authentication server is currently not available.');
            }
        });
        this._initialized = true;
    }
    _loginButtonClick() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._inProgress) {
                return Promise.resolve();
            }
            this._inProgress = true;
            this._loading();
            this._disable();
            const api = this._api;
            const audio = this._audio;
            api.createSession(this._clientId, this._origin)
                .then((sessionId) => __awaiter(this, void 0, void 0, function* () {
                api.getOTPSound(sessionId).then((soundUrl) => __awaiter(this, void 0, void 0, function* () {
                    this._stopLoading();
                    this._animate();
                    audio.src = soundUrl;
                    try {
                        yield audio.play();
                        yield this._navigateAuthentication(api, sessionId);
                        setTimeout(() => this.stopTheButton(), 10000);
                    }
                    catch (err) {
                        this.stopTheButton();
                        throw err;
                    }
                }));
            }))
                .catch((err) => {
                this.stopTheButton();
                throw err;
            });
        });
    }
    stopTheButton() {
        this._stopLoading();
        this._enable();
        this._inProgress = false;
        this._stopAnimation();
    }
    _navigateAuthentication(api, sessionId) {
        const scope = this._scope;
        return api.navigateAuthentication(this._clientId, this._redirectUri, scope, new cyberuskey_sdk_1.RedirectNavigator(), sessionId, this._origin, this._state, this._nonce, this._responseType);
    }
    _loginThroughDashboard(_) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._inProgress) {
                return Promise.resolve();
            }
            this._inProgress = true;
            try {
                yield this._api.loginThroughCyberusKeyDashboard({
                    clientId: this._clientId,
                    redirectUri: this._redirectUri,
                    scope: this._scope,
                    navigator: new cyberuskey_sdk_1.RedirectNavigator(),
                    state: this._state,
                    nonce: this._nonce,
                    responseType: this._responseType,
                    display: 'page',
                    prompt: 'login,none',
                    theme: this._theme
                });
            }
            finally {
                this._inProgress = false;
            }
        });
    }
    _getUrl(path) {
        return (new URL(path, this._serverUrl)).href;
    }
    _loading() {
        this._addClass('lds-ring', 'enabled');
    }
    _stopLoading() {
        this._removeClass('lds-ring', 'enabled');
    }
    _disable() {
        this._addClass('login-button', 'disabled');
    }
    _enable() {
        this._removeClass('login-button', 'disabled');
    }
    _blink() {
        this._addClass('login-button-icon', 'blinking');
    }
    _stopBlinking() {
        this._removeClass('login-button-icon', 'blinking');
    }
    _waves() {
        this._addClass('lds-ripple', 'enabled');
    }
    _stopWaves() {
        this._removeClass('lds-ripple', 'enabled');
    }
    _animate() {
        this._addClass('login-button', 'blocked');
        if (this._animation === WidgetAnimation.Blinking) {
            this._blink();
        }
        else if (this._animation === WidgetAnimation.Waves) {
            this._waves();
        }
    }
    _stopAnimation() {
        this._removeClass('login-button', 'blocked');
        if (this._animation === WidgetAnimation.Blinking) {
            this._stopBlinking();
        }
        else if (this._animation === WidgetAnimation.Waves) {
            this._stopWaves();
        }
    }
    _createButton(template, containerClassName) {
        const containers = document.getElementsByClassName(containerClassName);
        if (containers.length !== 1) {
            throw new Error(`Can't find matching element for CSS class: ${containerClassName} or there's more than one match.`);
        }
        const container = containers[0];
        container.innerHTML = template;
        const loginButtonElements = container.getElementsByClassName('login-button');
        if (loginButtonElements.length !== 1) {
            throw new Error('Can\'t attach an event to the Cyberus Key Widget.');
        }
        const loginButtonElement = loginButtonElements[0];
        const listenerOfChoice = this._fullOpenIdLogin ?
            this._loginThroughDashboard.bind(this) :
            this._loginButtonClick.bind(this);
        loginButtonElement.addEventListener('click', listenerOfChoice);
        this._containerElement = container;
    }
    _addClass(elementClassName, classNameToAdd) {
        this._containerElement.getElementsByClassName(elementClassName)[0].classList.add(classNameToAdd);
    }
    _removeClass(elementClassName, classNameToAdd) {
        this._containerElement.getElementsByClassName(elementClassName)[0].classList.remove(classNameToAdd);
    }
}
exports.CyberusKeyWidget = CyberusKeyWidget;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=navigator.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedirectNavigator = void 0;
const errors_1 = __webpack_require__(2);
/**
 * Class describes how OpenID's Authentication Endpoint will be handled.
 * This class is thighten to a default browser behaviour for OpenID protocol - a redirection.
 * Which means that your URL will be temporarily replaced by the Authentication Endpoint
 * and replaced again by its response - HTTP 302. The new location will be the one you defined as your `redirect_uri`.
 *
 * @export
 * @class RedirectNavigator
 * @implements {Navigator}
 */
class RedirectNavigator {
    /**
     * Navigates to the given URL.
     *
     * @param {string} url Authentication Endpoint URL.
     * @throws MissingRedirectUri
     * @returns {Promise<void>}
     * @memberof RedirectNavigator
     */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenIdScopeParser = void 0;
/**
 * Handy class to define an OpenID's scope.
 * Scopes are used by an application during authentication to authorize access to a user's details,
 * like name and picture. Each scope returns a set of user attributes, which are called claims.
 *
 * You can use additional values `email` (add a user's email claim) and `profile` (add user first and last name).
 *
 * ```javascript
 * const scopeParser = new OpenIdScopeParser();
 * const scope = scopeParser.addEmail().addProfile().getValue();
 * ```
 *
 * @export
 * @class OpenIdScopeParser
 */
class OpenIdScopeParser {
    constructor() {
        this._scope = ['openid'];
    }
    /**
     * Adds `email` scope.
     *
     * @returns {this}
     * @memberof OpenIdScopeParser
     */
    addEmail() {
        if (this._scope.includes('email')) {
            return this;
        }
        this._scope.push('email');
        return this;
    }
    /**
     * Adds `profile` scope.
     *
     * @returns {this}
     * @memberof OpenIdScopeParser
     */
    addProfile() {
        if (this._scope.includes('profile')) {
            return this;
        }
        this._scope.push('profile');
        return this;
    }
    /**
     * Gets formatted scope value, e.g. `openid email`.
     *
     * @returns {string}
     * @memberof OpenIdScopeParser
     */
    getValue() {
        return this._scope.join(' ');
    }
}
exports.OpenIdScopeParser = OpenIdScopeParser;
//# sourceMappingURL=scopeParser.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=geoProvider.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTML5GeoProvider = void 0;
const geo_1 = __webpack_require__(3);
/**
 * Class provides a geolocalization measurement.
 * It uses a HTML5's `Geolocation.getCurrentPosition()` method.
 *
 * @export
 * @class HTML5GeoProvider
 * @implements {GeoProvider}
 */
class HTML5GeoProvider {
    /**
     * Creates an instance of HTML5GeoProvider.
     *
     * @param {boolean} [enableHighAccuracy=false]  Forces high accuracy of the geolocation. It may take longer.
     * @param {Navigator} [navigator=window.navigator]
     * @param numOfTriesBeforeGpsActivates The GPS localization will be used only after n unsuccessful tries.
     * By unsuccessful try we define the number of times the authentication resulted in session not found error.
     * @param onPermissionDialog Leave an implementation of the additional information dialog to appear before site
     * asks for localization permission for the caller to handle. It takes a function with default message as parameter
     * @memberof HTML5GeoProvider
     */
    constructor(enableHighAccuracy = false, onPermissionDialog = null, numOfTriesBeforeGpsActivates = 2, navigator = window.navigator) {
        this._numOfTriesBeforeGpsActivates = 2;
        this.defaultMessage = "Cyberus Key widget would like to access your location" +
            " to use geolocation tracking to assert successful authentication.";
        this._enableHighAccuracy = enableHighAccuracy;
        this._navigator = navigator;
        this._numOfTriesBeforeGpsActivates = numOfTriesBeforeGpsActivates;
        this._onPermissionDialog = onPermissionDialog;
    }
    /**
     * Gets a geolocalization measurement.
     *
     * @returns {Promise<Geolocation>} Geolocalization measurement.
     * @memberof HTML5GeoProvider
     */
    getGeo() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = null;
            let data = sessionStorage.getItem("auth_counter");
            if (data == null)
                return null;
            let value = parseInt(data, 10);
            if (isNaN(value) || value < this._numOfTriesBeforeGpsActivates)
                return null;
            try {
                const permissionDialog = this._onPermissionDialog;
                const defaultMessage = this.defaultMessage;
                navigator.permissions && navigator.permissions.query({ name: 'geolocation' })
                    .then(function (PermissionStatus) {
                    if (PermissionStatus.state == 'prompt') {
                        if (permissionDialog)
                            permissionDialog(defaultMessage);
                        else
                            alert(defaultMessage);
                    }
                });
                result = yield this._getGeo(this._enableHighAccuracy);
            }
            catch (_a) {
                // E.g. user didn't agree on geolicalization.
                return null;
            }
            const { coords } = result;
            return new geo_1.Geolocation(coords.latitude, coords.longitude, coords.accuracy);
        });
    }
    _getGeo(enableHighAccuracy) {
        return new Promise((resolve, reject) => {
            this._navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy });
        });
    }
}
exports.HTML5GeoProvider = HTML5GeoProvider;
//# sourceMappingURL=html5GeoProvider.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginOptions = void 0;
/**
 * Login options.
 *
 * @export
 * @class LoginOptions
 */
class LoginOptions {
    constructor() {
        /**
         * @param {string} [responseType='code'] OpenId response type. The default is `code` (Code Flow, involving the front-channel and backchannel).
         *
         * @type {string}
         * @memberof LoginOptions
         */
        this.responseType = 'code';
        /**
         * @param {string} display It specifies how the Authorization Server displays the authentication and consent user interface pages to the End-User.
         *   Default and the only supported value is `page`.
         *
         * @type {string}
         * @memberof LoginOptions
         */
        this.display = 'page';
        /**
         * @param {string} prompt Space delimited, case sensitive list of string values that specifies whether the Authorization Server
         *   prompts the End-User for reauthentication and consent. The defined values are: `login`, `none`.
         *   Default is `login,none`. Can't be changed for now.
         *
         * @type {string}
         * @memberof LoginOptions
         */
        this.prompt = 'login,none';
        /**
         * Theme of the login page of Cyberus Key Dashboard. Default is `default`.
         *
         * @type {string}
         * @memberof LoginOptions
         */
        this.theme = 'default';
    }
}
exports.LoginOptions = LoginOptions;
//# sourceMappingURL=loginOptions.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(13);
            var content = __webpack_require__(14);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
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
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

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
  } else {
    style.removeAttribute('media');
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
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(15);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(16);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(17);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(18);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, ".cyberuskey-widget{position:relative;max-width:480px}.cyberuskey-widget .lds-ring{position:absolute;display:none;left:calc(50% - 32px);width:64px;height:64px}.cyberuskey-widget .lds-ring.enabled{display:block}.cyberuskey-widget .lds-ring.default{top:2px}.cyberuskey-widget .lds-ring.eliot{top:10px}.cyberuskey-widget .lds-ring div{box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid #ababab;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:#ababab rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.cyberuskey-widget .lds-ring div:nth-child(1){animation-delay:-0.45s}.cyberuskey-widget .lds-ring div:nth-child(2){animation-delay:-0.3s}.cyberuskey-widget .lds-ring div:nth-child(3){animation-delay:-0.15s}@keyframes lds-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.cyberuskey-widget .blinking{animation:blinking .8s infinite}@keyframes blinking{0%{opacity:1}50%{opacity:.2}100%{opacity:1}}.cyberuskey-widget .lds-ripple{position:absolute;display:none;width:130px;height:130px}.cyberuskey-widget .lds-ripple.default{top:-30px;left:-22px}.cyberuskey-widget .lds-ripple.eliot{top:-23px;left:-21px}.cyberuskey-widget .lds-ripple.enabled{display:block}.cyberuskey-widget .lds-ripple div{position:absolute;border:6px solid #ababab;opacity:1;border-radius:50%;animation:lds-ripple 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite}.cyberuskey-widget .lds-ripple div:nth-child(2){animation-delay:-0.5s}@keyframes lds-ripple{0%{top:64px;left:64px;width:0;height:0;opacity:1}100%{top:-1px;left:-1px;width:130px;height:130px;opacity:0}}.cyberuskey-widget .login-button-container{position:relative}.cyberuskey-widget .login-button{display:flex;height:66px;background:#eb5e18;border-radius:6px;transition:opacity .25s ease-in-out;cursor:pointer}.cyberuskey-widget .login-button .login-button-icon{position:relative;flex:0 0 80px;max-width:80px}.cyberuskey-widget .login-button .login-button-text-container{display:flex;flex:1 1 400px;align-items:center;justify-content:center;user-select:none}.cyberuskey-widget .login-button .login-buton-text,.cyberuskey-widget .login-button .login-buton-text b,.cyberuskey-widget .login-button .lost-phone{font-family:Helvetica,Arial,sans-serif}.cyberuskey-widget .login-button.blocked{cursor:not-allowed}.cyberuskey-widget .login-button.disabled{opacity:.6;cursor:not-allowed}.cyberuskey-widget .login-button.default{background:linear-gradient(to right, #eb5e18, #ef7d46 100%);min-width:310px}.cyberuskey-widget .login-button.default .login-button-icon{background-color:rgba(0,0,0,0);background:no-repeat center url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:75%}.cyberuskey-widget .login-button.default .login-buton-text{color:#fff;font-size:1.4em}.cyberuskey-widget .login-button.default .login-button-vl{border-left:1px solid #f18c5a;height:100%}.cyberuskey-widget .login-button.eliot{background:linear-gradient(180deg, #1490FB, #0754B6 100%);max-width:465px;min-width:360px;height:80px}.cyberuskey-widget .login-button.eliot .login-button-icon{background:no-repeat center url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-size:75%}.cyberuskey-widget .login-button.eliot .login-buton-text{color:#fff;font-size:1.7em}.cyberuskey-widget .login-button.eliot .login-button-vl{border-left:1px solid #3897ef;height:100%}.cyberuskey-widget .lost-phone{flex:0 0 auto;margin-top:16px;text-align:center;color:#7e8aac;font-size:18px;font-weight:400;letter-spacing:-0.32px;line-height:52.8px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 15 */
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
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
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
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.7 56.7'%3E%3Ctitle%3Ecyberus_buttony_login_icon%3C/title%3E%3Cpath d='M36.3,28.2a6.1,6.1,0,0,1-12.2,0,6.1,6.1,0,0,1,12.2,0Zm11,0h-11m8.6,0v4.7M17.7,48.2A23.1,23.1,0,0,1,6.8,28.7a23.2,23.2,0,0,1,13.9-21m20.4,7.4A18,18,0,0,0,30,11.3,17.6,17.6,0,0,0,12.2,28.8,17.6,17.6,0,0,0,30,46.2a17.3,17.3,0,0,0,8.5-2.1m-4.2-27a13.4,13.4,0,0,0-4-.6A12.4,12.4,0,0,0,17.7,28.8a12.2,12.2,0,0,0,2.3,7' style='fill:none;stroke:%23fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.5px'/%3E%3C/svg%3E"

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.7 56.7'%3E%3Ctitle%3Ecyberus_buttony_login_icon%3C/title%3E%3Cpath d='M19.1,49.9A24.8,24.8,0,0,1,22.3,6m22,8A19.1,19.1,0,1,0,32.4,47.8a18.6,18.6,0,0,0,9.1-2.3M37,16.2a16.2,16.2,0,0,0-4.4-.7,13.4,13.4,0,0,0-11.1,21M34.8,22.6a7.8,7.8,0,0,0-2.2-.3,6.7,6.7,0,0,0,0,13.4,7.8,7.8,0,0,0,2.2-.3M25.9,29h8.9' style='fill:none;stroke:%23fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.5px'/%3E%3C/svg%3E"

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"cyberuskey-widget\"> <div class=\"login-button-container\"> <div class=\"lds-ripple {{theme}}\"> <div></div> <div></div> </div> <div class=\"lds-ring {{theme}}\"> <div></div> <div></div> <div></div> <div></div> </div> <div class=\"login-button {{theme}}\"> <div class=\"login-button-icon\"></div> <div class=\"login-button-vl\"></div> <div class=\"login-button-text-container\"> <span class=\"login-buton-text\">{{loginText}}</span> </div> </div> </div> <div class=\"lost-phone\"> Lost your phone? <a class=\"lock-now-link\" href=\"{{lostDeviceUrl}}\" target=\"_parent\">Lock now</a> </div> </div>";
// Exports
module.exports = code;

/***/ })
/******/ ]);
});
//# sourceMappingURL=widget.js.map