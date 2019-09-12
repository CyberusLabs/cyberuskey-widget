import { GeoProvider } from 'cyberuskey-sdk';
import './styles/widget.scss';
export * from 'cyberuskey-sdk';
/**
 * Defines the widget animation.
 * Use one of `None`, `Blinking`, `Waves`.
 *
 * @readonly
 * @enum {number}
 */
export declare enum WidgetAnimation {
    /**
     * No animation.
     */
    None = 0,
    /**
     * Logo is blinking.
     */
    Blinking = 1,
    /**
     * Logo "emits" the waves.
     */
    Waves = 2
}
/**
 * Widget options passed to a CyberusKeyWidget constructor.
 *
 * @export
 * @class WidgetOptions
 */
export declare class WidgetOptions {
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
    readonly theme: string;
    /**
     * Cyberus Key's Authentication Server URL.
     *
     * @type {string}
     * @memberof WidgetOptions
     */
    readonly serverUrl: string;
    /**
     * Animation of the widget applied during a sound transmission.
     *
     * @type {WidgetAnimation}
     * @memberof WidgetOptions
     */
    readonly animation: WidgetAnimation;
    /**
     * Provider of a geolocalization. `If passed, then geolocalization measurement is taken`.
     * For a web browser use [HTML5GeoProvider](https://github.com/CyberusLabs/cyberuskey-sdk/#html5geoprovider).
     * Geolocalization measurement can be later use to compare it against the mobile's measurement (if you have set `fail_on_geo_mismatch`).
     * Those measurements can be used also to general improvement of the security.
     *
     * @type {GeoProvider}
     * @memberof WidgetOptions
     */
    readonly geoProvider?: GeoProvider;
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
    readonly state?: string;
    /**
     * String value used to associate a Client session with an ID Token, and to mitigate replay attacks.
     * The value is passed through unmodified from the Authentication Request to the ID Token.
     * Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values.
     *
     * @type {string}
     * @memberof WidgetOptions
     */
    readonly nonce?: string;
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
 *    geoProvider: new HTML5GeoProvider(),
 *    clientId: window.CyberusKey.CLIENT_ID,
 *    redirectUri: window.CyberusKey.REDIRECT_URI,
 *    state: window.CyberusKey.STATE,
 *    nonce: window.CyberusKey.NONCE
 *   });
 *
 *   cyberusKeyButton.create('.cyberus-key-widget-container');
 * });
 * ```
 *
 * @export
 * @class CyberusKeyWidget
 */
export declare class CyberusKeyWidget {
    private _serverUrl;
    private _theme;
    private _clientId;
    private _redirectUri;
    private _geoProvider;
    private _state;
    private _nonce;
    private _initialized;
    private _inProgress;
    private _containingElementClassName;
    private _animation;
    private _containerElement;
    /**
     * Creates an instance of CyberusKeyWidget.
     *
     * @param {WidgetOptions} options
     * @memberof CyberusKeyWidget
     */
    constructor(options: WidgetOptions);
    /**
     * Creates a Cyberus Key button element in the DOM tree.
     *
     * @param {string} containingElementClassName CSS class name of the containing DOM element for the Cyberus Key Widget.
     * @memberof CyberusKeyWidget
     */
    create(containingElementClassName: string): void;
    _loginButtonClick(): Promise<void>;
    _getUrl(path: string): string;
    _loading(): void;
    _stopLoading(): void;
    _disable(): void;
    _enable(): void;
    _blink(): void;
    _stopBlinking(): void;
    _waves(): void;
    _stopWaves(): void;
    _animate(): void;
    _stopAnimation(): void;
    _createButton(template: string, containerClassName: string): void;
    _addClass(elementClassName: string, classNameToAdd: string): void;
    _removeClass(elementClassName: string, classNameToAdd: string): void;
}
