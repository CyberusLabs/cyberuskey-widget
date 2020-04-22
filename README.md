<p>
  <img src="https://cyberuslabs.com/wp-content/uploads/2015/09/cl_new_logo-e1553199321586.png" alt="Cyberus Key logo">
</p>

# What is Cyberus Key?

Your users will never need to remember or input a password again with Cyberus Key, our one-touch
universal, user authentication system.

Now you can guarantee your customers the highest level of protection against phishing attacks, identity and data theft,and more. By removing the risk
of stolen passwords or credentials, you can eliminate one of the biggest cyber security threats..

# Cyberus Key Widget

Cyberus Key Widget is a button that help you to integrate with Cyberus Key Authentication Server. After clicking the button an OpenID's authentication
proccess will be started.

# How to install?

With NPM:
```
npm install cyberuskey-widget
```

With Yarn:
```
yarn add cyberuskey-widget
```

You can also get a minified file from JSDelivr's CDN (replace the VERSION with the version you want to):
```
<script src="https://cdn.jsdelivr.net/npm/cyberuskey-widget@{VERSION}/dist/widget.min.js" type="text/javascript"></script>

<script type="text/javascript">
  var CyberusKeyWidgetNamespace = window['cyberuskey-widget'];
  var CyberusKeyWidget = CyberusKeyWidgetNamespace.CyberusKeyWidget;

  new CyberusKeyWidget(/* ... */);
</script>
```

And then you can embed the button on your web page:

```javascript
import { CyberusKeyWidget, HTML5GeoProvider } from "cyberuskey-widget";

$(document).ready(() => {
const ckButton = new CyberusKeyWidget({
geoProvider: new HTML5GeoProvider(),
clientId: window.CyberusKey.CLIENT_ID,
redirectUri: window.CyberusKey.REDIRECT_URI,
state: window.CyberusKey.STATE,
nonce: window.CyberusKey.NONCE
});

cyberusKeyButton.create('cyberus-key-widget-container');
});
```

# Documentation

Widget uses Cyberus Key JavaScript SDK, here you have the [documentation](https://github.com/CyberusLabs/cyberuskey-sdk/#CyberusKeyAPI).

## Classes

<dl>
<dt><a href="#WidgetOptions">WidgetOptions</a></dt>
<dd></dd>
<dt><a href="#CyberusKeyWidget">CyberusKeyWidget</a></dt>
<dd></dd>
</dl>

<a name="WidgetOptions"></a>

## WidgetOptions
**Kind**: global class  

* [WidgetOptions](#WidgetOptions)
    * [new WidgetOptions()](#new_WidgetOptions_new)
    * [.theme](#WidgetOptions.theme) : <code>string</code>
    * [.serverUrl](#WidgetOptions.serverUrl) : <code>string</code>
    * [.animation](#WidgetOptions.animation) : [<code>WidgetAnimation</code>](#WidgetAnimation)
    * [.geoProvider](#WidgetOptions.geoProvider) : <code>GeoProvider</code>
    * [.state](#WidgetOptions.state) : <code>string</code>
    * [.nonce](#WidgetOptions.nonce) : <code>string</code>
    * [.responseType](#WidgetOptions.responseType) : <code>string</code>
    * [.autoplay](#WidgetOptions.autoplay) : <code>boolean</code>
    * [.fullOpenIdLogin](#WidgetOptions.fullOpenIdLogin) : <code>boolean</code>

<a name="new_WidgetOptions_new"></a>

### new WidgetOptions()
<p>Widget options passed to a CyberusKeyWidget constructor.</p>

<a name="WidgetOptions.theme"></a>

### WidgetOptions.theme : <code>string</code>
<p>A theme of the widget. You can use: <code>default</code> or <code>eliot</code>.</p>

**Kind**: static property of [<code>WidgetOptions</code>](#WidgetOptions)  
<a name="WidgetOptions.serverUrl"></a>

### WidgetOptions.serverUrl : <code>string</code>
<p>Cyberus Key's Authentication Server URL.</p>

**Kind**: static property of [<code>WidgetOptions</code>](#WidgetOptions)  
<a name="WidgetOptions.animation"></a>

### WidgetOptions.animation : [<code>WidgetAnimation</code>](#WidgetAnimation)
<p>Animation of the widget applied during a sound transmission.</p>

**Kind**: static property of [<code>WidgetOptions</code>](#WidgetOptions)  
<a name="WidgetOptions.geoProvider"></a>

### WidgetOptions.geoProvider : <code>GeoProvider</code>
<p>Provider of a geolocalization. <code>If passed, then geolocalization measurement is taken</code>.
For a web browser use <a href="https://github.com/CyberusLabs/cyberuskey-sdk/#html5geoprovider">HTML5GeoProvider</a>.
Geolocalization measurement can be later use to compare it against the mobile's measurement (if you have set <code>fail_on_geo_mismatch</code>).
Those measurements can be used also to general improvement of the security.</p>

**Kind**: static property of [<code>WidgetOptions</code>](#WidgetOptions)  
<a name="WidgetOptions.state"></a>

### WidgetOptions.state : <code>string</code>
<p><code>RECOMMENDED</code>. Opaque value used to maintain state between the request and the callback. Typically, CSRF, XSRF mitigation is done by cryptographically binding the value of this parameter with a browser cookie.
The state parameter preserves some state object set by the client in the Authentication request and makes it available to the client in the response.
It’s that unique and non-guessable value that allows you to prevent the attack by confirming if the value coming from the response matches the one you expect (the one you generated when initiating the request).
The state parameter is a string so you can encode any other information in it.</p>
<p>The value can be passed e.g. through an encrypted cookie and validated on the client server before making a Token Request.</p>

**Kind**: static property of [<code>WidgetOptions</code>](#WidgetOptions)  
<a name="WidgetOptions.nonce"></a>

### WidgetOptions.nonce : <code>string</code>
<p>String value used to associate a Client session with an ID Token, and to mitigate replay attacks.
The value is passed through unmodified from the Authentication Request to the ID Token.
Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values.</p>

**Kind**: static property of [<code>WidgetOptions</code>](#WidgetOptions)  
<a name="WidgetOptions.responseType"></a>

### WidgetOptions.responseType : <code>string</code>
<p>OpenId's response type. By default it's <code>code</code> what means OpenId Code Flow.</p>

**Kind**: static property of [<code>WidgetOptions</code>](#WidgetOptions)  
<a name="WidgetOptions.autoplay"></a>

### WidgetOptions.autoplay : <code>boolean</code>
<p>Determines whether the login process will be done automatically when the button is ready.</p>

**Kind**: static property of [<code>WidgetOptions</code>](#WidgetOptions)  
<a name="WidgetOptions.fullOpenIdLogin"></a>

### WidgetOptions.fullOpenIdLogin : <code>boolean</code>
<p>If set to <code>true</code>, then the login process will be done through the Cyberus Key Dashboard.
So, you'll be redirected to the other page to login.
If it's <code>false</code>, then the login goes directly to the Cyberus Key API.</p>

**Kind**: static property of [<code>WidgetOptions</code>](#WidgetOptions)  
<a name="CyberusKeyWidget"></a>

## CyberusKeyWidget
**Kind**: global class  

* [CyberusKeyWidget](#CyberusKeyWidget)
    * [new CyberusKeyWidget()](#new_CyberusKeyWidget_new)
    * _instance_
        * [.create(containingElementClassName)](#CyberusKeyWidget+create)
    * _static_
        * [.CyberusKeyWidget](#CyberusKeyWidget.CyberusKeyWidget)
            * [new CyberusKeyWidget(options)](#new_CyberusKeyWidget.CyberusKeyWidget_new)

<a name="new_CyberusKeyWidget_new"></a>

### new CyberusKeyWidget()
<p>Class represents a UI button that uses <code>cyberuskey-sdk</code> and allows to make a login with Cyberus Key Authentication Server.</p>
<p>If you miss some docs, try find them <a href="https://github.com/CyberusLabs/cyberuskey-sdk/#CyberusKeyAPI">here</a>, in Cyberus Key JavaScript SDK documentation .</p>
<p>Example:</p>
<pre class="prettyprint source lang-javascript"><code>import { CyberusKeyWidget, HTML5GeoProvider } from &quot;cyberuskey-widget&quot;;

$(document).ready(() => {
const ckButton = new CyberusKeyWidget({
   geoProvider: new HTML5GeoProvider(),
   clientId: window.CyberusKey.CLIENT_ID,
   redirectUri: window.CyberusKey.REDIRECT_URI,
   state: window.CyberusKey.STATE,
   nonce: window.CyberusKey.NONCE
  });

  cyberusKeyButton.create('cyberus-key-widget-container');
});
</code></pre>

<a name="CyberusKeyWidget+create"></a>

### cyberusKeyWidget.create(containingElementClassName)
<p>Creates a Cyberus Key button element in the DOM tree.</p>

**Kind**: instance method of [<code>CyberusKeyWidget</code>](#CyberusKeyWidget)  

| Param | Type | Description |
| --- | --- | --- |
| containingElementClassName | <code>string</code> | <p>CSS class name of the containing DOM element for the Cyberus Key Widget.</p> |

<a name="CyberusKeyWidget.CyberusKeyWidget"></a>

### CyberusKeyWidget.CyberusKeyWidget
**Kind**: static class of [<code>CyberusKeyWidget</code>](#CyberusKeyWidget)  
<a name="new_CyberusKeyWidget.CyberusKeyWidget_new"></a>

#### new CyberusKeyWidget(options)
<p>Creates an instance of CyberusKeyWidget.</p>


| Param | Type |
| --- | --- |
| options | [<code>WidgetOptions</code>](#WidgetOptions) | 

<a name="WidgetAnimation"></a>

## WidgetAnimation : <code>enum</code>
<p>Defines the widget animation.
Use one of <code>None</code>, <code>Blinking</code>, <code>Waves</code>.</p>

**Kind**: global enum  
**Read only**: true  

# Links

CyberusKey JavaScript SDK docs: https://github.com/CyberusLabs/cyberuskey-sdk/

# License

[MIT](LICENSE.md) © Cyberus Labs sp. z o.o.