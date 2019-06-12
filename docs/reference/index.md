---
title: "Library Reference"
index: 10
category: "uport-transports"
type: "reference"
source: "https://github.com/uport-project/uport-transports/blob/develop/docs/reference/index.md"
---

## Modules

<dl>
<dt><a href="#module_uport-transports/transport/ui">uport-transports/transport/ui</a></dt>
<dd><p>A set of ui utility functions and default displays for bridging between
a web browser and a uport user&#39;s mobile app</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#BrowserTransport">BrowserTransport</a></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#uportModal">uportModal</a> ⇒ <code>String</code></dt>
<dd><p>Skeleton for a modal popup, styled with css imported from &#39;./style.css&#39;</p>
</dd>
<dt><a href="#qrModal">qrModal</a> ⇒ <code>Object</code></dt>
<dd><p>Format a modal with a QR code and a custom message, as well as links to
the uport mobile app on the app store and play store</p>
</dd>
<dt><a href="#pushModal">pushModal</a></dt>
<dd><p>Html string for a modal notifying a user that a push notification has been
sent to their phone</p>
</dd>
<dt><a href="#successModal">successModal</a></dt>
<dd><p>Html string for a modal displaying a success message</p>
</dd>
<dt><a href="#failureModal">failureModal</a></dt>
<dd><p>Html string for a modal displaying a failure message</p>
</dd>
<dt><a href="#spinnerModal">spinnerModal</a></dt>
<dd><p>HTML string for a modal displaying a spinner</p>
</dd>
<dt><a href="#providerModal">providerModal</a></dt>
<dd><p>HTML string for a modal displaying a provider dialog</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#randomString">randomString(length)</a> ⇒ <code>String</code></dt>
<dd><p>Given a length, returns a random string of that length</p>
</dd>
<dt><a href="#decryptResponse">decryptResponse(encrypted, secretKey)</a> ⇒ <code>Promise.&lt;Object, Error&gt;</code></dt>
<dd><p>Decrypts a response from a promise. This is intended to be used to wrap the response from Chasqui or other transport</p>
</dd>
<dt><a href="#URIHandlerSend">URIHandlerSend(uriHandler, [config], message)</a> ⇒ <code>function</code> | <code>Promise.&lt;Object, Error&gt;</code></dt>
<dd><p>A general Chasqui Transport. Allows you to configure the transport with any uriHandler for the request,
 while the response will always be returned through Chasqui. Chasqui is a simple messaging server that
 allows responses to be relayed from a uport client to the original callee.</p>
</dd>
<dt><a href="#poll">poll(url, [pollingInterval], [cancelled])</a> ⇒ <code>Promise.&lt;Object, Error&gt;</code></dt>
<dd><p>A polling function specifically for polling Chasqui.</p>
</dd>
<dt><a href="#poll">poll(url, messageParse, errorParse, [pollingInterval], [cancelled])</a> ⇒ <code>Promise.&lt;Object, Error&gt;</code></dt>
<dd><p>A general polling function. Polls a given url and parse message according to given parsing functions, promise resolves on response or error.</p>
</dd>
<dt><a href="#send">send(token, pubEncKey, [pushServiceUrl], message, [opts])</a> ⇒ <code>function</code> | <code>Promise.&lt;Object, Error&gt;</code></dt>
<dd><p>A push notification transport for pushing requests to the uPort mobile client of a specific user
 for which you have been given a valid push token.</p>
</dd>
<dt><a href="#sendAndNotify">sendAndNotify()</a></dt>
<dd><p>The same transport as above, but also display a self-dismissing modal notifying
the user that push notification has been sent to their device</p>
</dd>
<dt><a href="#send">send(displayText, message, [opts])</a> ⇒ <code>function</code> | <code>function</code></dt>
<dd><p>A QR tranpsort which uses our provided QR modal to relay a request to a uPort client,
optionally compressing the provided message if a compress function is provided</p>
</dd>
<dt><a href="#chasquiCompress">chasquiCompress(message, threshold)</a> ⇒ <code>String</code></dt>
<dd><p>A utility function for reducing the size of a QR code by uploading it to chasqui and
replacing the contents with the topic url.</p>
<p>An empty Verification JWT (i.e. with signature and sub/iss but blank claim) is ~250 characters
The absolute max that can fit in a scanable QR on the screen is ~1500 characters
Below 650 characters the QR modal fits perfectly in the browser on a 13&quot; MBP, with some wiggle room</p>
</dd>
<dt><a href="#chasquiSend">chasquiSend([config], message)</a> ⇒ <code>function</code> | <code>Promise.&lt;Object, Error&gt;</code></dt>
<dd><p>A QR Code and Chasqui Transport. The QR modal is configured for tranporting the request, while the
 response will be returned through Chasqui.</p>
</dd>
<dt><a href="#send">send([config], message, [opts])</a> ⇒ <code>function</code></dt>
<dd><p>A mobile transport for handling and configuring requests which are sent from a mobile browser to a uport client, in this case the uPort mobile app.</p>
</dd>
<dt><a href="#getResponse">getResponse()</a> ⇒ <code>Object</code></dt>
<dd><p>A function to fetch a response from hash params appended to callback url, if available when function called.</p>
</dd>
<dt><a href="#listenResponse">listenResponse(cb)</a></dt>
<dd><p>A listener which calls given callback when a response becomes avaialble in the hash params (url fragment)</p>
</dd>
<dt><a href="#onResponse">onResponse()</a> ⇒ <code>Promise.&lt;Object, Error&gt;</code></dt>
<dd><p>A promise which resolves once a response become available in the hash params (url fragment)</p>
</dd>
<dt><a href="#parseResponse">parseResponse()</a> ⇒ <code>Object</code></dt>
<dd><p>Parses response from full response url or hash param string</p>
</dd>
<dt><a href="#paramsToUrlFragment">paramsToUrlFragment(url, [params])</a> ⇒ <code>String</code></dt>
<dd><p>Add params as url fragment (hash params)</p>
</dd>
<dt><a href="#paramsToQueryString">paramsToQueryString(url, [params])</a> ⇒ <code>String</code></dt>
<dd><p>Add params as url query params</p>
</dd>
<dt><a href="#getUrlQueryParams">getUrlQueryParams(url)</a> ⇒ <code>Object</code></dt>
<dd><p>Returns params object of query params in given url</p>
</dd>
<dt><a href="#getURLJWT">getURLJWT(url)</a> ⇒ <code>String</code></dt>
<dd><p>Returns request token (JWT) from a request URI</p>
</dd>
<dt><a href="#isJWT">isJWT(jwt)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Given string, returns boolean if string is JWT</p>
</dd>
<dt><a href="#trimURI">trimURI(message)</a></dt>
<dd><p>Remove both deeplink and universal link prefixes from a given message</p>
</dd>
<dt><a href="#messageToUniversalURI">messageToUniversalURI(message)</a> ⇒ <code>String</code></dt>
<dd><p>Wrap a JWT in a request URI using the Universal Link scheme based at id.uport.me</p>
</dd>
<dt><a href="#messageToDeeplinkURI">messageToDeeplinkURI(message, uri)</a></dt>
<dd><p>Wrap a JWT in a request URI using the Deeplink scheme, using me.uport:</p>
</dd>
<dt><a href="#messageToURI">messageToURI(message, type)</a></dt>
<dd><p>Wrap a JWT in a request URI according to the specified scheme</p>
</dd>
</dl>

<a name="module_uport-transports/transport/ui"></a>
### uport-transports/transport/ui
A set of ui utility functions and default displays for bridging between
a web browser and a uport user's mobile app


* [uport-transports/transport/ui](#module_uport-transports/transport/ui)
    * _static_
        * [.getImageDataURI](#module_uport-transports/transport/ui.getImageDataURI) ⇒ <code>String</code>
        * [.close](#module_uport-transports/transport/ui.close)
        * [.open](#module_uport-transports/transport/ui.open)
        * [.notifyPushSent](#module_uport-transports/transport/ui.notifyPushSent)
        * [.success](#module_uport-transports/transport/ui.success)
        * [.spinner](#module_uport-transports/transport/ui.spinner)
        * [.askProvider](#module_uport-transports/transport/ui.askProvider)
        * [.failure](#module_uport-transports/transport/ui.failure)
    * _inner_
        * [~makeModal(content, [close])](#module_uport-transports/transport/ui..makeModal)

<a name="module_uport-transports/transport/ui.getImageDataURI"></a>

### uport-transports/transport/ui.getImageDataURI ⇒ <code>String</code>
Given a string of data it returns a image URI which is a QR code. An image
 URI can be displayed in a img html tag by setting the src attrbiute to the
 the image URI.

**Kind**: static constant of [<code>uport-transports/transport/ui</code>](#module_uport-transports/transport/ui)  
**Returns**: <code>String</code> - image URI  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> | data string, typically a uPort URI |

<a name="module_uport-transports/transport/ui.close"></a>

### uport-transports/transport/ui.close
Closes the default QR pop over

**Kind**: static constant of [<code>uport-transports/transport/ui</code>](#module_uport-transports/transport/ui)  
<a name="module_uport-transports/transport/ui.open"></a>

### uport-transports/transport/ui.open
A default QR pop over display, which injects the neccessary html

**Kind**: static constant of [<code>uport-transports/transport/ui</code>](#module_uport-transports/transport/ui)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> | data which is displayed in QR code |
| cancel | <code>function</code> | a function called when the cancel button is clicked |
| modalText | <code>String</code> | message to be displayed above the QR in the modal |

<a name="module_uport-transports/transport/ui.notifyPushSent"></a>

### uport-transports/transport/ui.notifyPushSent
Show a notification to the user that a push has been sent to their phone

**Kind**: static constant of [<code>uport-transports/transport/ui</code>](#module_uport-transports/transport/ui)  

| Param | Type | Description |
| --- | --- | --- |
| fallback | <code>function</code> | The fallback handler if the user doesn't receive a push |

<a name="module_uport-transports/transport/ui.success"></a>

### uport-transports/transport/ui.success
Show a success screen to the user which automatically dismisses
after @param {Number} timeout milliseconds

**Kind**: static constant of [<code>uport-transports/transport/ui</code>](#module_uport-transports/transport/ui)  
<a name="module_uport-transports/transport/ui.spinner"></a>

### uport-transports/transport/ui.spinner
Show a spinner (the Consensys Hurricane)

**Kind**: static constant of [<code>uport-transports/transport/ui</code>](#module_uport-transports/transport/ui)  

| Param | Type | Description |
| --- | --- | --- |
| cancel | <code>function</code> | Function to fire when the close button is pressed |

<a name="module_uport-transports/transport/ui.askProvider"></a>

### uport-transports/transport/ui.askProvider
Present a dialog asking

**Kind**: static constant of [<code>uport-transports/transport/ui</code>](#module_uport-transports/transport/ui)  
<a name="module_uport-transports/transport/ui.failure"></a>

### uport-transports/transport/ui.failure
Show a failure modal that gives users the option to repeat the failed action

**Kind**: static constant of [<code>uport-transports/transport/ui</code>](#module_uport-transports/transport/ui)  

| Param | Type | Description |
| --- | --- | --- |
| resend | <code>function</code> | The function that should fire to allow the user to retry |

<a name="module_uport-transports/transport/ui..makeModal"></a>

### uport-transports/transport/ui~makeModal(content, [close])
A utility function for rendering a modal with particular content

**Kind**: inner method of [<code>uport-transports/transport/ui</code>](#module_uport-transports/transport/ui)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>String</code> | html string defining the inside of the modal |
| [close] | <code>function</code> | the handler to fire when the modal's x button is pressed |

<a name="BrowserTransport"></a>
### BrowserTransport
**Kind**: global class  

* [BrowserTransport](#BrowserTransport)
    * [new BrowserTransport()](#new_BrowserTransport_new)
    * [.getIsMobile()](#BrowserTransport+getIsMobile) ⇒ <code>Boolean</code>
    * [.getCallbackUrl(id)](#BrowserTransport+getCallbackUrl) ⇒ <code>String</code>
    * [.getPushInfo()](#BrowserTransport+getPushInfo) ⇒ <code>Object</code>
    * [.setPushInfo(pushToken, publicEncKey)](#BrowserTransport+setPushInfo)
    * [.onResponse(id)](#BrowserTransport+onResponse) ⇒ <code>Promise</code>
    * [.send(request, id, [opts], [cancel])](#BrowserTransport+send)
    * [.mobileSend(request, id, [opts])](#BrowserTransport+mobileSend)
    * [.pushSend(request, id)](#BrowserTransport+pushSend)
    * [.qrSend(request, id, [opts], [cancel])](#BrowserTransport+qrSend)

<a name="new_BrowserTransport_new"></a>

### new BrowserTransport()
Instantiates a new Browser Transport


| Param | Type | Description |
| --- | --- | --- |
| [opts.pushToken] | <code>String</code> | A user's push token containing an endpoint for sending notifications |
| [opts.publicEncKey] | <code>String</code> | A user's public key for encrypting messages pushed to them |
| [opts.qrTitle] | <code>String</code> | Title text that appears in the QR modal |

<a name="BrowserTransport+getIsMobile"></a>

### browserTransport.getIsMobile() ⇒ <code>Boolean</code>
**Kind**: instance method of [<code>BrowserTransport</code>](#BrowserTransport)  
**Returns**: <code>Boolean</code> - true if detected as running on a mobile device  
<a name="BrowserTransport+getCallbackUrl"></a>

### browserTransport.getCallbackUrl(id) ⇒ <code>String</code>
Generates a callbackUrl that can be used to create a request which will return its response to this application

**Kind**: instance method of [<code>BrowserTransport</code>](#BrowserTransport)  
**Returns**: <code>String</code> - a url that can be used as the callbackUrl option when creating a request with uport-credentials  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | id that will be used when sending the request that will contain this callback url |

<a name="BrowserTransport+getPushInfo"></a>

### browserTransport.getPushInfo() ⇒ <code>Object</code>
**Kind**: instance method of [<code>BrowserTransport</code>](#BrowserTransport)  
**Returns**: <code>Object</code> - object containing the currently configured pushToken and publicEncKey  
<a name="BrowserTransport+setPushInfo"></a>

### browserTransport.setPushInfo(pushToken, publicEncKey)
Provide a user's push token and public encryption key to enable the configuration of a push transport

**Kind**: instance method of [<code>BrowserTransport</code>](#BrowserTransport)  

| Param | Type | Description |
| --- | --- | --- |
| pushToken | <code>String</code> | A user's push token containing an endpoint for sending notifications |
| publicEncKey | <code>String</code> | A user's public key for encrypting messages pushed to them |

<a name="BrowserTransport+onResponse"></a>

### browserTransport.onResponse(id) ⇒ <code>Promise</code>
Listens for responses to requests made by calling `send`. Returns a promise that resolves once with the resopnse.

**Kind**: instance method of [<code>BrowserTransport</code>](#BrowserTransport)  
**Returns**: <code>Promise</code> - resolves a response object with { payload, data } containing the jwt and extra optional data  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | id of the request that that we are listening for |

<a name="BrowserTransport+send"></a>

### browserTransport.send(request, id, [opts], [cancel])
Sends a message by automatically selecting an appropriate transport

**Kind**: instance method of [<code>BrowserTransport</code>](#BrowserTransport)  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>String</code> | request message to send |
| id | <code>String</code> | id of the request that will be used to identify the response |
| [opts] | <code>Object</code> | optional parameters for each transport |
| [opts.data] | <code>String</code> | additional application data that can be included as part of the response |
| [opts.redirectUrl] | <code>String</code> | url to send the response to |
| [opts.type] | <code>String</code> | specifies callback type 'post' or 'redirect' for response |
| [cancel] | <code>function</code> | called when user closes the QR modal |

<a name="BrowserTransport+mobileSend"></a>

### browserTransport.mobileSend(request, id, [opts])
Sends a message using URL transport.

**Kind**: instance method of [<code>BrowserTransport</code>](#BrowserTransport)  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>String</code> | request message to send |
| id | <code>String</code> | id of the request that will be used to associate the response |
| [opts] | <code>Object</code> | optional parameters specific to url transport |
| [opts.data] | <code>String</code> | additional application data that can be included as part of the response |
| [opts.redirectUrl] | <code>String</code> | url to send the response to |
| [opts.type] | <code>String</code> | specifies callback type 'post' or 'redirect' for response |

<a name="BrowserTransport+pushSend"></a>

### browserTransport.pushSend(request, id)
Sends a message using push transport.

**Kind**: instance method of [<code>BrowserTransport</code>](#BrowserTransport)  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>String</code> | request message to send |
| id | <code>String</code> | id of the request that will be used to identify the response |

<a name="BrowserTransport+qrSend"></a>

### browserTransport.qrSend(request, id, [opts], [cancel])
Sends a message using a qr transport

**Kind**: instance method of [<code>BrowserTransport</code>](#BrowserTransport)  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>String</code> | request message to send |
| id | <code>String</code> | id of the request that will be used to identify the response |
| [opts] | <code>Object</code> | optional parameters specific to qr transport |
| [cancel] | <code>function</code> | called when user closes the QR modal |

<a name="uportModal"></a>
### uportModal ⇒ <code>String</code>
Skeleton for a modal popup, styled with css imported from './style.css'

**Kind**: global constant  
**Returns**: <code>String</code> - html string for the populated modal  

| Param | Type | Description |
| --- | --- | --- |
| innerHTML | <code>String</code> | html string defining content of modal |

<a name="qrModal"></a>
### qrModal ⇒ <code>Object</code>
Format a modal with a QR code and a custom message, as well as links to
the uport mobile app on the app store and play store

**Kind**: global constant  
**Returns**: <code>Object</code> - populated modal  

| Param | Type | Description |
| --- | --- | --- |
| qrImageUri | <code>String</code> | data uri defining the QR code to be displayed |
| [modalText] | <code>String</code> | message to be displayed above the QR code |

<a name="pushModal"></a>
### pushModal
Html string for a modal notifying a user that a push notification has been
sent to their phone

**Kind**: global constant  
<a name="successModal"></a>
### successModal
Html string for a modal displaying a success message

**Kind**: global constant  
<a name="failureModal"></a>
### failureModal
Html string for a modal displaying a failure message

**Kind**: global constant  
<a name="spinnerModal"></a>
### spinnerModal
HTML string for a modal displaying a spinner

**Kind**: global constant  
<a name="providerModal"></a>
### providerModal
HTML string for a modal displaying a provider dialog

**Kind**: global constant  
<a name="randomString"></a>
### randomString(length) ⇒ <code>String</code>
Given a length, returns a random string of that length

**Kind**: global function  
**Returns**: <code>String</code> - random string  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>Integer</code> | specify length of string returned |

<a name="decryptResponse"></a>
### decryptResponse(encrypted, secretKey) ⇒ <code>Promise.&lt;Object, Error&gt;</code>
Decrypts a response from a promise. This is intended to be used to wrap the response from Chasqui or other transport

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object, Error&gt;</code> - a promise which resolves with the decrypted message or rejects with an error  

| Param | Type | Description |
| --- | --- | --- |
| encrypted | <code>Object</code> | The encrypted message object |
| encrypted.version | <code>String</code> | The string `x25519-xsalsa20-poly1305` |
| encrypted.nonce | <code>String</code> | Base64 encoded nonce |
| encrypted.ephemPublicKey | <code>String</code> | Base64 encoded ephemeral public key |
| encrypted.ciphertext | <code>String</code> | Base64 encoded ciphertext |
| secretKey | <code>String</code> | The secret key as a Uint8Array |

<a name="URIHandlerSend"></a>
### URIHandlerSend(uriHandler, [config], message) ⇒ <code>function</code> \| <code>Promise.&lt;Object, Error&gt;</code>
A general Chasqui Transport. Allows you to configure the transport with any uriHandler for the request,
 while the response will always be returned through Chasqui. Chasqui is a simple messaging server that
 allows responses to be relayed from a uport client to the original callee.

**Kind**: global function  
**Returns**: <code>function</code> - a configured QRTransport Function<code>Promise.&lt;Object, Error&gt;</code> - a function to close the QR modal  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| uriHandler | <code>String</code> |  | a function called with the requestURI once it is formatted for this transport |
| [config] | <code>Object</code> | <code>{}</code> | an optional config object |
| [config.chasquiUrl] | <code>String</code> |  | url of messaging server, defaults to Chasqui instance run by uPort |
| [config.pollingInterval] | <code>String</code> |  | milisecond interval at which the messaging server will be polled for a response |
| message | <code>String</code> |  | a uPort client request message |

<a name="poll"></a>
### poll(url, [pollingInterval], [cancelled]) ⇒ <code>Promise.&lt;Object, Error&gt;</code>
A polling function specifically for polling Chasqui.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object, Error&gt;</code> - a promise which resolves with obj/message or rejects with an error  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | a Chasqui url polled |
| [pollingInterval] | <code>Integer</code> | ms interval at which the given url is polled |
| [cancelled] | <code>function</code> | function which returns boolean, if returns true, polling stops |

<a name="poll"></a>
### poll(url, messageParse, errorParse, [pollingInterval], [cancelled]) ⇒ <code>Promise.&lt;Object, Error&gt;</code>
A general polling function. Polls a given url and parse message according to given parsing functions, promise resolves on response or error.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object, Error&gt;</code> - a promise which resolves with obj/message or rejects with an error  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | url polled |
| messageParse | <code>function</code> | function that parses response from get request, also determines if response is available to decide to continue polling or not |
| errorParse | <code>function</code> | function that parses response from get request and determines if error was returned. |
| [pollingInterval] | <code>Integer</code> | ms interval at which the given url is polled |
| [cancelled] | <code>function</code> | function which returns boolean, if returns true, polling stops |

<a name="send"></a>
### send(token, pubEncKey, [pushServiceUrl], message, [opts]) ⇒ <code>function</code> \| <code>Promise.&lt;Object, Error&gt;</code>
A push notification transport for pushing requests to the uPort mobile client of a specific user
 for which you have been given a valid push token.

**Kind**: global function  
**Returns**: <code>function</code> - a configured Push transport function<code>Promise.&lt;Object, Error&gt;</code> - a promise which resolves with successful push notification status or rejects with an error  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| token | <code>String</code> |  | a push notification token (get a pn token by requesting push permissions in a request) |
| pubEncKey | <code>String</code> |  | the public encryption key of the receiver, encoded as a base64 string, found in a DID document |
| [pushServiceUrl] | <code>String</code> | <code>PUTUTU_URL</code> | the url of the push service, by default it is PUTUTU at https://api.uport.me/pututu/sns/ |
| message | <code>String</code> |  | a uport client request message |
| [opts] | <code>Object</code> | <code>{}</code> | an optional config object |
| opts.type | <code>String</code> |  | specifies callback type 'post' or 'redirect' for response |
| opts.redirectUrl | <code>String</code> |  | specifies url which a uport client will return to control once the request is handled, depending on request type it may or may not be returned with the response as well. |

<a name="sendAndNotify"></a>
### sendAndNotify()
The same transport as above, but also display a self-dismissing modal notifying
the user that push notification has been sent to their device

**Kind**: global function  
**See**: send  
<a name="send"></a>
### send(displayText, message, [opts]) ⇒ <code>function</code> \| <code>function</code>
A QR tranpsort which uses our provided QR modal to relay a request to a uPort client,
optionally compressing the provided message if a compress function is provided

**Kind**: global function  
**Returns**: <code>function</code> - a configured QRTransport Function<code>function</code> - a function to close the QR modal  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| displayText | <code>String</code> |  | dialog used in qr modal display |
| message | <code>String</code> |  | a uport client request message |
| [opts] | <code>Object</code> | <code>{}</code> |  |
| [opts.cancel] | <code>function</code> |  | cancel callback, called on modal close |
| [opts.compress] | <code>function</code> |  | a function to compress a JWT, returning a promise that resolves to a string |

<a name="chasquiCompress"></a>
### chasquiCompress(message, threshold) ⇒ <code>String</code>
A utility function for reducing the size of a QR code by uploading it to chasqui and
replacing the contents with the topic url.

An empty Verification JWT (i.e. with signature and sub/iss but blank claim) is ~250 characters
The absolute max that can fit in a scanable QR on the screen is ~1500 characters
Below 650 characters the QR modal fits perfectly in the browser on a 13" MBP, with some wiggle room

**Kind**: global function  
**Returns**: <code>String</code> - the chasqui url of the message, or the original message if less than threshold  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>String</code> | the request JWT |
| threshold | <code>Number</code> | the smallest size (in string length) to compress |

<a name="chasquiSend"></a>
### chasquiSend([config], message) ⇒ <code>function</code> \| <code>Promise.&lt;Object, Error&gt;</code>
A QR Code and Chasqui Transport. The QR modal is configured for tranporting the request, while the
 response will be returned through Chasqui.

**Kind**: global function  
**Returns**: <code>function</code> - a configured QRTransport Function<code>Promise.&lt;Object, Error&gt;</code> - a function to close the QR modal  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [config] | <code>Object</code> | <code>{}</code> | an optional config object |
| [config.chasquiUrl] | <code>String</code> |  | url of messaging server, defaults to Chasqui instance run by uPort |
| [config.pollingInterval] | <code>String</code> |  | milisecond interval at which the messaging server will be polled for a response |
| message | <code>String</code> |  | a uPort client request message |

<a name="send"></a>
### send([config], message, [opts]) ⇒ <code>function</code>
A mobile transport for handling and configuring requests which are sent from a mobile browser to a uport client, in this case the uPort mobile app.

**Kind**: global function  
**Returns**: <code>function</code> - a configured MobileTransport Function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [config] | <code>Object</code> | <code>{}</code> | an optional config object |
| [config.messageToURI] | <code>function</code> |  | a function called with the message/JWT to format into a URI |
| [config.uriHandler] | <code>function</code> |  | a function called with the requestURI once it is formatted for this transport, default opens URI |
| message | <code>String</code> |  | a uport client request message |
| [opts] | <code>Object</code> | <code>{}</code> | an optional config object |
| opts.id | <code>String</code> |  | an id string for a request, used to identify response once returned |
| opts.data | <code>String</code> |  | additional data specific to your application that you can later receive with the response |
| opts.type | <code>String</code> |  | specifies callback type 'post' or 'redirect' for response |
| opts.callback | <code>String</code> |  | specifies url which a uport client will return to control once request is handled, depending on request type it may or may not be returned with the response as well. |

<a name="getResponse"></a>
### getResponse() ⇒ <code>Object</code>
A function to fetch a response from hash params appended to callback url, if available when function called.

**Kind**: global function  
**Returns**: <code>Object</code> - A response object if repsonse is available, otherwise null.  
<a name="listenResponse"></a>
### listenResponse(cb)
A listener which calls given callback when a response becomes avaialble in the hash params (url fragment)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | a callback function called as cb(err, res) when a response becomes available |

<a name="onResponse"></a>
### onResponse() ⇒ <code>Promise.&lt;Object, Error&gt;</code>
A promise which resolves once a response become available in the hash params (url fragment)

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object, Error&gt;</code> - a promise which resolves with a response object or rejects with an error.  
<a name="parseResponse"></a>
### parseResponse() ⇒ <code>Object</code>
Parses response from full response url or hash param string

**Kind**: global function  
**Returns**: <code>Object</code> - a response object of the form {id: ..., payload: ..., data: ...}  
<a name="paramsToUrlFragment"></a>
### paramsToUrlFragment(url, [params]) ⇒ <code>String</code>
Add params as url fragment (hash params)

**Kind**: global function  
**Returns**: <code>String</code> - a url with valid params added as url fragment (hash params)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>String</code> |  | a url |
| [params] | <code>Object</code> | <code>{}</code> | params object of valid params to add as url fragment |

<a name="paramsToQueryString"></a>
### paramsToQueryString(url, [params]) ⇒ <code>String</code>
Add params as url query params

**Kind**: global function  
**Returns**: <code>String</code> - a url with valid params added as url query framents  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>String</code> |  | a url |
| [params] | <code>Object</code> | <code>{}</code> | params object of valid params to add as url query params |

<a name="getUrlQueryParams"></a>
### getUrlQueryParams(url) ⇒ <code>Object</code>
Returns params object of query params in given url

**Kind**: global function  
**Returns**: <code>Object</code> - object of param key and values  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | a url |

<a name="getURLJWT"></a>
### getURLJWT(url) ⇒ <code>String</code>
Returns request token (JWT) from a request URI

**Kind**: global function  
**Returns**: <code>String</code> - a JWT string  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | a url |

<a name="isJWT"></a>
### isJWT(jwt) ⇒ <code>Boolean</code>
Given string, returns boolean if string is JWT

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| jwt | <code>String</code> | A JWT string |

<a name="trimURI"></a>
### trimURI(message)
Remove both deeplink and universal link prefixes from a given message

**Kind**: global function  

| Param | Type |
| --- | --- |
| message | <code>String</code> | 

<a name="messageToUniversalURI"></a>
### messageToUniversalURI(message) ⇒ <code>String</code>
Wrap a JWT in a request URI using the Universal Link scheme based at id.uport.me

**Kind**: global function  
**Returns**: <code>String</code> - A valid request URI, including the given request token  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>String</code> | A request message (JWT), or if given URI will just return |

<a name="messageToDeeplinkURI"></a>
### messageToDeeplinkURI(message, uri)
Wrap a JWT in a request URI using the Deeplink scheme, using me.uport:

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>String</code> | A request message (JWT) |
| uri | <code>String</code> | The associated deeplink uri for the given message |

<a name="messageToURI"></a>
### messageToURI(message, type)
Wrap a JWT in a request URI according to the specified scheme

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| message | <code>String</code> |  | The message to be uri encoded |
| type | <code>String</code> | <code>universal</code> | The URI method of the above two, either 'universal' or 'deeplink' |

