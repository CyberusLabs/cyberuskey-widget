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

And then you can embed the button on your web page:

```javascript
import { CyberusKeyWidget, HTML5GeoProvider } from "cyberuskey-widget";

$(document).ready(() => {
  const cyberusKeyButton = new CyberusKeyWidget({
    theme: 'default',
    serverUrl: API_URL
  };

  cyberusKeyButton.create('.cyberus-key-widget-container', CLIENT_ID, REDIRECT_URI, new HTML5GeoProvider());
});
```

# Documentation

## Classes

<dl>
<dt><a href="#CyberusKeyWidget">CyberusKeyWidget</a></dt>
<dd></dd>
</dl>

## Interfaces

<dl>
<dt><a href="#WidgetOptions">WidgetOptions</a></dt>
<dd><p>Widget options passed to the its constructor.</p></dd>
</dl>

<a name="WidgetOptions"></a>

## WidgetOptions
<p>Widget options passed to the its constructor.</p>

**Kind**: global interface  
<a name="CyberusKeyWidget"></a>

## CyberusKeyWidget
**Kind**: global class  

* [CyberusKeyWidget](#CyberusKeyWidget)
    * [new CyberusKeyWidget()](#new_CyberusKeyWidget_new)
    * _instance_
        * [.create(containingElementSelector, clientId, redirectUri, [geoProvider], [state], [nonce])](#CyberusKeyWidget+create)
    * _static_
        * [.CyberusKeyWidget](#CyberusKeyWidget.CyberusKeyWidget)
            * [new CyberusKeyWidget([options])](#new_CyberusKeyWidget.CyberusKeyWidget_new)

<a name="new_CyberusKeyWidget_new"></a>

### new CyberusKeyWidget()
<p>Class represents a UI button that uses <code>cyberuskey-sdk</code> and allows to make a login with Cyberus Key Authentication Server.</p>
<p>Example:</p>
<pre class="prettyprint source lang-javascript"><code>import { CyberusKeyWidget, HTML5GeoProvider } from &quot;cyberuskey-widget&quot;;

$(document).ready(() => {
  const cyberusKeyButton = new CyberusKeyWidget({
    theme: 'default',
    serverUrl: API_URL
  };

  cyberusKeyButton.create('.cyberus-key-widget-container', CLIENT_ID, REDIRECT_URI, new HTML5GeoProvider());
});
</code></pre>

<a name="CyberusKeyWidget+create"></a>

### cyberusKeyWidget.create(containingElementSelector, clientId, redirectUri, [geoProvider], [state], [nonce])
<p>Creates a Cyberus Key button element in the DOM tree.</p>

**Kind**: instance method of [<code>CyberusKeyWidget</code>](#CyberusKeyWidget)  

| Param | Type | Description |
| --- | --- | --- |
| containingElementSelector | <code>string</code> | <p>Selector of a containing DOM element for the button.</p> |
| clientId | <code>string</code> | <p>Public client ID generated during creating the account.</p> |
| redirectUri | <code>string</code> | <p>Redirect URI to which the response will be sent. If the value is not whitelisted then the request will fail.</p> |
| [geoProvider] | <code>GeoProvider</code> | <p>Provider of a geolocalization. <code>If passed, then geolocalization measurement will be taken</code>. For a web browser use HTML5GeoProvider. Geolocalization measurement can be later use to compare it against the mobile's measurement (if you have set <code>fail_on_geo_mismatch</code>). Those measurements can be used also to general improvement of the security.</p> |
| [state] | <code>string</code> | <p>RECOMMENDED. Opaque value used to maintain state between the request and the callback. Typically, CSRF, XSRF mitigation is done by cryptographically binding the value of this parameter with a browser cookie. The state parameter preserves some state object set by the client in the Authentication request and makes it available to the client in the response. It’s that unique and non-guessable value that allows you to prevent the attack by confirming if the value coming from the response matches the one you expect (the one you generated when initiating the request). The state parameter is a string so you can encode any other information in it.</p> |
| [nonce] | <code>string</code> | <p>String value used to associate a Client session with an ID Token, and to mitigate replay attacks. The value is passed through unmodified from the Authentication Request to the ID Token. Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values.</p> |

<a name="CyberusKeyWidget.CyberusKeyWidget"></a>

### CyberusKeyWidget.CyberusKeyWidget
**Kind**: static class of [<code>CyberusKeyWidget</code>](#CyberusKeyWidget)  
<a name="new_CyberusKeyWidget.CyberusKeyWidget_new"></a>

#### new CyberusKeyWidget([options])
<p>Creates an instance of CyberusKeyWidget.</p>


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | [<code>WidgetOptions</code>](#WidgetOptions) | <code>{}</code> | <p>Widget options.</p> |

<a name="WidgetAnimation"></a>

## WidgetAnimation : <code>enum</code>
<p>Defines the widget animation.</p>

**Kind**: global enum  

# Links

TODO