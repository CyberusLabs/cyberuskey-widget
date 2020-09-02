import {
    CyberusKeyAPI,
    GeoProvider,
    OpenIdScopeParser,
    RedirectNavigator,
    LoginOptions
} from 'cyberuskey-sdk';

let widgetTemplate = '';

if (typeof(window) !== 'undefined') {
  require("./styles/widget.scss");
  widgetTemplate = require("./templates/widget.html");
}


export * from 'cyberuskey-sdk';

/**
 * Defines the widget animation.
 * Use one of `None`, `Blinking`, `Waves`.
 *
 * @readonly
 * @enum {number}
 */
export enum WidgetAnimation {
  /**
   * No animation.
   */
  None = 0,
  /**
   * Logo is blinking.
   */
  Blinking,
  /**
   * Logo "emits" the waves.
   */
  Waves
}

/**
 * Widget options passed to a CyberusKeyWidget constructor.
 *
 * @export
 * @class WidgetOptions
 */
export class WidgetOptions {
  /**
   * Public client ID generated during creating the account.
   *
   * @type {string}
   * @memberof WidgetOptions
   */
  readonly clientId: string;

  /**
   * Redirect URI to which the response will be sent. If the value is not whitelisted then the request will fail.
   *
   * @type {string}
   * @memberof WidgetOptions
   */
  readonly redirectUri: string;

    /**
     * A theme of the widget. You can use: `default` or `eliot`.
     *
     * @type {string}
     * @memberof WidgetOptions
     */
    readonly theme: string = 'default';

    /**
     * Cyberus Key's Authentication Server URL.
     *
     * @type {string}
     * @memberof WidgetOptions
     */
    readonly serverUrl: string = 'https://production-api.cyberuskey.com';

    /**
     * @param {OpenIdScopeParser} scope Each scope returns a set of user attributes, which are called claims.
     *    Once the user authorizes the requested scopes, the claims are returned in an ID Token.
     *    By default set to: `openid email`.
     *
     * @type {OpenIdScopeParser}
     * @memberof WidgetOptions
     */
    readonly scope: OpenIdScopeParser;

    /**
     * The domain URL under which the Widget is embedded in. E.g. `https://your-company-inc.com`.
     *
     * @type {WidgetAnimation}
     * @memberof WidgetOptions
     */
    readonly origin: string;

    /**
     * Animation of the widget applied during a sound transmission.
     *
     * @type {WidgetAnimation}
     * @memberof WidgetOptions
     */
    readonly animation?: WidgetAnimation = WidgetAnimation.Blinking;

    /**
     * Provider of a geolocalization. `If passed, then geolocalization measurement is taken`.
     * For a web browser use [HTML5GeoProvider](https://github.com/CyberusLabs/cyberuskey-sdk/#html5geoprovider).
     * Geolocalization measurement can be later use to compare it against the mobile's measurement (if you have set `fail_on_geo_mismatch`).
     * Those measurements can be used also to general improvement of the security.
     *
     * @type {GeoProvider}
     * @memberof WidgetOptions
     */
    readonly geoProvider?: GeoProvider = null;

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
    readonly state?: string = null;

    /**
     * String value used to associate a Client session with an ID Token, and to mitigate replay attacks.
     * The value is passed through unmodified from the Authentication Request to the ID Token.
     * Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values.
     *
     * @type {string}
     * @memberof WidgetOptions
     */
    readonly nonce?: string = null;

    /**
     * OpenId's response type. By default it's `code` what means OpenId Code Flow.
     *
     * @type {string}
     * @memberof WidgetOptions
     */
    readonly responseType: string = 'code';

    /**
     * Determines whether the login process will be done automatically when the button is ready.
     *
     * @type {boolean}
     * @memberof WidgetOptions
     */
    readonly autoplay: boolean = false;

    /**
     * If set to `true`, then the login process will be done through the Cyberus Key Dashboard.
     * So, you'll be redirected to the other page to login.
     * If it's `false`, then the login goes directly to the Cyberus Key API.
     *
     * @type {boolean}
     * @memberof WidgetOptions
     */
    readonly fullOpenIdLogin: boolean = false;
}

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
export class CyberusKeyWidget {
    private _serverUrl: URL;
    private _theme: string;
    private _clientId: string;
    private _redirectUri: string;
    private _scope: OpenIdScopeParser;
    private _geoProvider: GeoProvider
    private _state: string;
    private _nonce: string;
    private _initialized: boolean;
    private _inProgress: boolean;
    private _animation: WidgetAnimation;
    private _containerElement: Element;
    private _responseType: string;
    private _origin: string;
    private _autoplay: boolean;
    private _fullOpenIdLogin: boolean;

    /**
     * Creates an instance of CyberusKeyWidget.
     *
     * @param {WidgetOptions} options
     * @memberof CyberusKeyWidget
     */
    constructor(options: WidgetOptions) {
        if (!options || !options.clientId || !options.redirectUri) {
            throw new Error('CyberusKeyWidget: Missing options(s).')
        }

        let theme = options.theme || 'default';
        const serverUrl = options.serverUrl || 'https://production-api.cyberuskey.com';
        const animation = options.animation || WidgetAnimation.Blinking;

        if (!['default', 'eliot'].includes(theme)) {
            theme = 'default';
            console.warn(`CyberusKeyWidget: Theme "${theme}" is not supported.`);
        }


        this._clientId = options.clientId;
        this._redirectUri = options.redirectUri;
        this._scope = options.scope || (new OpenIdScopeParser()).addEmail();
        this._geoProvider = options.geoProvider;
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
    }

    /**
     * Creates a Cyberus Key button element in the DOM tree.
     *
     * @param {string} containingElementClassName CSS class name of the containing DOM element for the Cyberus Key Widget.
     * @memberof CyberusKeyWidget
     */
    create(containingElementClassName: string): void {
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

        this._initialized = true;
    }

    async _loginButtonClick(): Promise<void> {
        if (this._inProgress) {
            return Promise.resolve();
        }

        this._inProgress = true;
        this._loading();
        this._disable()

        const audio = new Audio()
        const api = new CyberusKeyAPI(this._serverUrl.href, this._geoProvider);
        api.createSession(this._clientId, this._origin)
            .then(async (sessionId) => {
                api.getOTPSound(sessionId).then(async (soundUrl) => {
                    this._stopLoading();
                    this._animate()
                    audio.src = soundUrl;
                    try {
                        await audio.play()
                        await this._navigateAuthentication(api, sessionId)
                        setTimeout(() => this.stopTheButton(), 10000)

                    } catch (err) {
                        this.stopTheButton();
                        throw err;
                    }

                })
            })
            .catch((err) => {
                this.stopTheButton();
                throw err;
            })
    }

    private stopTheButton() {
        this._stopLoading();
        this._enable()
        this._inProgress = false;
        this._stopAnimation()
    }

    _navigateAuthentication(api: CyberusKeyAPI, sessionId: string) {

        const scope = new OpenIdScopeParser().addEmail().addProfile();

        return api.navigateAuthentication(
            this._clientId,
            this._redirectUri,
            scope,
            new RedirectNavigator(),
            sessionId,
            this._origin,
            this._state,
            this._nonce,
            this._responseType)
    }

    async _loginThroughDashboard(_: MouseEvent) {
        if (this._inProgress) {
            return Promise.resolve();
        }

        this._inProgress = true;

        const api = new CyberusKeyAPI(this._serverUrl.href, this._geoProvider);

        try {
            await api.loginThroughCyberusKeyDashboard({
                clientId: this._clientId,
                redirectUri: this._redirectUri,
                scope: this._scope,
                navigator: new RedirectNavigator(),
                state: this._state,
                nonce: this._nonce,
                responseType: this._responseType,
                display: 'page',
                prompt: 'login,none',
                theme: this._theme
            } as LoginOptions);
        } finally {
            this._inProgress = false;
        }
    }

    _getUrl(path: string): string {
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
        } else if (this._animation === WidgetAnimation.Waves) {
            this._waves();
        }
    }

    _stopAnimation() {
        this._removeClass('login-button', 'blocked');

        if (this._animation === WidgetAnimation.Blinking) {
            this._stopBlinking();
        } else if (this._animation === WidgetAnimation.Waves) {
            this._stopWaves();
        }
    }

    _createButton(template: string, containerClassName: string) {
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
            this._loginButtonClick.bind(this)


        loginButtonElement.addEventListener('click', listenerOfChoice);

        this._containerElement = container;
    }

    _addClass(elementClassName: string, classNameToAdd: string) {
        this._containerElement.getElementsByClassName(elementClassName)[0].classList.add(classNameToAdd);
    }

    _removeClass(elementClassName: string, classNameToAdd: string) {
        this._containerElement.getElementsByClassName(elementClassName)[0].classList.remove(classNameToAdd);
    }
}