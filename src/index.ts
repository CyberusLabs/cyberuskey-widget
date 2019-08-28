import './styles/widget.scss';
import {
  CyberusKeyAPI,
  OpenIdScopeParser,
  RedirectNavigator,
  WebAudioSoundEmitter
} from "cyberuskey-sdk";


const $ = require('cash-dom');
const widgetTemplate = require("./templates/widget.html")
const widgetImages = {
  'default': 'img/cyberus/cyberus_login_widget.png',
  'eliot': 'img/eliot/eliot_login_widget_button.png'
};

export class CyberusKeyWidget {
  private _serverUrl: URL;
  private _theme: string;
  private _clientId: string;
  private _redirectUri: string;
  private _state: string;
  private _nonce: string;
  private _initialized: boolean;
  private _inProgress: boolean;

  /**
   * Creates an instance of CyberusKeyWidget.
   *
   * @param {string} [theme='default'] A theme of the button.
   * @param {string} [serverUrl='https://auth-server-demo.cyberuslabs.net'] Cyberus Key Authentication server URL.
   * @memberof CyberusKeyWidget
   */
  constructor(theme = 'default', serverUrl: string = 'https://auth-server-demo.cyberuslabs.net') {
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
  create(containingElementSelector: string, clientId: string, redirectUri: string, state?: string, nonce?: string): void {
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

  async _loginButtonClick(): Promise<void> {
    if (this._inProgress) {
      return Promise.resolve();
    }

    this._inProgress = true;

    const api = new CyberusKeyAPI(this._serverUrl.href);
    const scope = (new OpenIdScopeParser()).addEmail().addProfile();

    await api.authenticate(
      this._clientId,
      this._redirectUri,
      scope,
      new WebAudioSoundEmitter(),
      new RedirectNavigator())
  }

  _getUrl(path: string): string {
    return (new URL(path, this._serverUrl)).href;
  }
}