import './styles/widget.scss';
import { GeoProvider } from "cyberuskey-sdk";
export * from "cyberuskey-sdk";
/**
 * Class represents a UI button that uses `cyberuskey-sdk` and allows to make a login with Cyberus Key Authentication Server.
 *
 *
 * Example:
 *
 * ```javascript
 * import { CyberusKeyWidget, HTML5GeoProvider } from "cyberuskey-widget";
 *
 * $(document).ready(() => {
 *  const cyberusKeyButton = new CyberusKeyWidget('default', API_URL);
 *  cyberusKeyButton.create('.cyberus-key-widget-container', CLIENT_ID, REDIRECT_URI, new HTML5GeoProvider());
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
    /**
     * Creates an instance of CyberusKeyWidget.
     *
     * @param {string} [theme='default'] A theme of the button.
     * @param {string} [serverUrl='https://auth-server-demo.cyberuslabs.net'] Cyberus Key Authentication server URL.
     * @memberof CyberusKeyWidget
     */
    constructor(theme?: string, serverUrl?: string);
    /**
     * Creates a Cyberus Key button element in the DOM tree.
     *
     * @param {string} containingElementSelector Selector of a containing DOM element for the button.
     * @param {string} clientId Public client ID generated during creating the account.
     * @param {string} redirectUri Redirect URI to which the response will be sent. If the value is not whitelisted then the request will fail.
     * @param {GeoProvider} [geoProvider] Provider of a geolocalization. For a web browser use HTML5GeoProvider.
     *    Geolocalization measurement can be later use to compare it against the mobile's measurement (if you have set `fail_on_geo_mismatch`).
     *    Those measurements can be used also to general improvement of the security.
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
    create(containingElementSelector: string, clientId: string, redirectUri: string, geoProvider?: GeoProvider, state?: string, nonce?: string): void;
    _loginButtonClick(): Promise<void>;
    _getUrl(path: string): string;
}
