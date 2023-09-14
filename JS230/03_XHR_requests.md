# 03 HTTP Requests with `XMLHttpRequest`

## How non-AJAX web application work

Traditional non-AJAX web applications are entirely based on the HTTP request-response cycle: in order to interact with them, the user must perform an action (click on a link, reload the page, etc.) to which the browser automatically responds by sending a request to a server, expecting to receive the new HTML document with the updated data in the response body. Then, the browser parses the received HTML code and renders its content onto the page. For every asset in the page, the browser will also send requests to fetch them from their locations, until no more requests are needed, and the page is fully loaded.

This approach has the main problem of having to reload the entire web page just to update a part of it, even a little interface component, which is not very efficient. And, as web applications became more complex, this was a big limiting factor. AJAX is the technique that allows us to work around this limitation.

## What is AJAX and how AJAX-based web applications work

AJAX stands for Asynchronous JavaScript And XML, and it is one, if not the most, important defining aspect of modern web applications. It refers to the set of features that lets the browser make HTTP requests to fetch data from a server _without having to reload the entire page_. For example, if we have a widget on a webpage that indicates the to-the-minute updated weather report, the JavaScript script is probably performing requests to a server at short intervals, without us noticing, to update just that little element on the page with the received, updated weather information. And all this is achieved without the hurdle of having to reload the main web page again and again!

AJAX presents other useful perks: first, that it allows us to use all HTTP methods besides `GET` and `POST` (`PUT`, `DELETE`, etc.); second, that AJAX gives us the opportunity to fine tune the requests, allowing us to set the headers and data format (in HTML, JSON or XML formats) according to our needs.

However, there is one issue we have to take into account. Because the browser can't make requests by itself, we have to write JavaScript code that handles the AJAX: on one side we have to write the code that initializes the asynchronous requests (typically with the help of event listeners), and, for the other, we also have to write code that handles the response, for example, by taking the received HTML code and updating some page component accordingly, or even ignoring it.

Other common examples of AJAX in action are the 'autocomplete' functionality in text fields, in which each key press by the user is roughly equivalent to a _minirequest_ made by the JavaScript code; and also forms: if the user enters invalid information in the inputs, asynchronous requests can be made periodically to save the already valid data, while just updating the fields with invalid inputs with error messages, for example.

## Single-page web applications

These applications are based on the idea of creating the entire DOM from fetched data in a serialized format using client-side code. The data is normally received in JSON format used to update the page and via client-server interactions, instead of injecting raw HTML code from the responses' body.

## The `XMLHttpRequest` object ('XHR')

The `XMLHttpRequest` object ('XHR') is not a core JavaScript feature, but part of the browsers' API; it provides basic HTTP networking functionality to load (fetch some resource from a server and use it to update the page state in some way) and send data in client-servers interactions. 

Today this API has been mainly replaced by the more convenient and easier to use `fetch()` method.

The basic use of the XHR API consists on these main steps:

1. Instantiation of the `XMLHttpRequest` class.
2. Setting the HTTP request (method, host, path, headers...).
3. Sending the request, with or without data in its body.
4. Handling the response (usually with the help of event listeners)

We can create a new XHR object with the constructor:

```js
let request = new XMLHttpRequest();
```

We then set the HTTP request as needed:

```js
request.open('METHOD', '/path');
request.setRequestHeader('Header', 'value');
```

And then we send the request, with an argument in case we want to send data in the request's body:

```js
request.send(data)
```

It's important to note that the `send()` method sends the request _asynchronously_. The XHR object will generate events during the request-response cycle, indicating different stages in its life cycle; the developer can use these events to set up event listeners.

## XHR Interface

We interact with this API by invoking the methods of the XHR object, accessing or setting its properties, and indirectly with the events associated with this object.

### XHR object methods

| **Method** | **Description** |
| --- | --- |
| `open(method, url)` | Opens the connection to the `url`(string), with the method (first argument, a string)  |
| `send(data)` | Sends the request, with an optional `data` in its body |
| `setRequestHeader(name, value)` | Sets a header with the name of the first argument, to the value of the second |
| `getRequestHeader(name)` | Gets the response's value for the indicated header |
| `abort()` | Cancels an active request |

### XHR object properties

| **Properties** | **Description** | **Editable** |
| --- | --- | --- |
| `timeout` | Maximum time a request can take to complete | Yes |
| `readyState` | Indicates the current request state | No |
| `response` | Parsed content of the response's body (not always _meaningful_) | No |
| `responseText` | Raw text of the response's body | No |
| `responseType` | Specifies the type of data contained in the expected response (`'text'`, `'json'`, `'arraybuffer'`, `'blob'`, `'document'`) | Yes |

### XHR object events

The life cycle of an XHR object is comprised by different stages: initializing the request, sending the request, waiting for the response, and, hopefully, receiving the response. The beginning and the end of this cycle is marked by the following events associated with the XHR object:

- `loadstart`: This event is fired when the request is sent to the server.
- `loadend`: This is the last event fired, when all other events have fired.

However, in between these two events another important one will fire, depending on the request success or failure:

- `load`: This event is fired when the XHR transaction have been completed successfully. It's important to note that the browser considers any transaction with a complete response as a success, even if the response has a non-200 status code, or if it is related to an application error. It's the developer task to handle the response from the perspective of the application.
- `error`: This event is fired when the request found an error.
- `abort`: This event is fired when a request has been aborted.
- `timeout`: This event is fired when the transaction's progression is terminated due to preset time expiring.

Additionally, there's a `progress` event that is fired periodically when a request receives more data.

Inside a callback passed in to `addEventListener` when adding an event listener, we can access to the request object itself via the `target` property of the `Event` object (the argument that will be passed to the listened when the event is fired).

## Data serialization

Clients and servers need some standard format that both parties are able to understand and process, in a way that all information is preserved. This is achieved by implementing data structures (_data serialization formats_) that work well representing hierarchical data; these formats structure the data in a form that can be efficiently stored, transferred, and converted back into the original format by the receiver. An example of these formats could be XML, but JSON is the most widely used by far due to its convenient and universal nature.

There are three main serialization formats:

### Query string/URL encoding

This a very basic form of data serialization; it consists of one or more `name=value` pairs delimited by the `&` character. As a _query string_ the list of pairs can be sent appended to the request path in `GET` requests, after the `?` character, or in the body of `POST` requests (without the `?`). 

In any case, the query string has to be _encoded_ if it includes more than alphanumeric characters (including white spaces `' '`). Thankfully, JavaScript provides a method for this task: `encodeURIComponent`.

In `POST` requests, to send data in this format we have to include a header named `Content-Type` with the value `application/x-www-form-urlencoded`, and then just pass the encoded query string as an argument to `send()`.

Converting input/form data into a query string:

```js
let data = new FormData()
document.querySelectorAll('input').forEach(input => data.append(input.name, input.value))
let queryString = new URLSearchParams(data).toString()
```

### Multipart Forms

In this format we can send name-value pairs in the body of `POST` requests, with each pair separated by a boundary delimiter defined in the `Content-Type` request header, after the media type, like:

```
Content-Type: multipart/form-data; boundary=----WebKitFormBoundarywDbHM6i57QWyAWro
```

`POST` requests use this format with forms that include file uploads or that use `FormData` objects to send data.

Also, in the body of these types of requests each pair is sent in a specific format that first identifies the pair's name, and then, after a blank line, adds the value. The final boundary delimiter has to include an extra `--` to mark the end of the content.

(
Each part is composed by the boundary delimiter, then a header `Content-Disposition` with the name of the parameter, a blank line, and the parameter's value.
)

This is an example of a complete `POST` request that uses this format:

```
POST /path HTTP/1.1
Host: example.test
Content-Length: 267
Content-Type: multipart/form-data; boundary=----WebKitFormBoundarywDbHM6i57QWyAWro
Accept: */*

------WebKitFormBoundarywDbHM6i57QWyAWro
Content-Disposition: form-data; name="title"

Do Androids Dream of Electric Sheep?
------WebKitFormBoundarywDbHM6i57QWyAWro
Content-Disposition: form-data; name="year"

1968
------WebKitFormBoundarywDbHM6i57QWyAWro--
```

### JSON

JSON stands for JavaScript Object Notation. Although it's based on the JavaScript object syntax, it is now used by many programs in different languages, and it is the most popular data serialization format for web APIs.

In the web context, it allows us to send and receive standard values and data structures over the internet: not only strings, numbers and booleans, but also arrays and objects. It does not support more complex or specialized types like dates or times, but these can be converted into other structures so that the client and the server may be able to process them. 

We can fetch JSON data via `GET` requests, and, of course, send JSON data in `POST` requests. In the latter case we need to set the `Content-Type` header to `application/json; charset=utf-8` (the last part ensures that the servers encodes the data correctly; it's optional, but it's always a good practice to include it).

This would be an example of a `POST` request sending data in JSON format:

```
POST /path HTTP/1.1
Host: example.test
Content-Length: 62
Content-Type: application/json; charset=utf-8
Accept: */*

{"title":"Do Androids Dream of Electric Sheep?","year":"1968"}
```

## Basic XHR Techniques

### 01. Load HTML via XHR (request HTML piece of code from server, use response body to update web page)

This technique is useful for when we want to fetch some content (like HTML code) from a server and use it to update a web page element by inserting the code directly into the DOM. It's usually accompanied by a combination of different listeners that work together to, for instance, prevent default browser behavior and create custom interactions. 

This approach can be useful for web applications that mainly use server-side rendering to generate the user interface.

Basic use:

1. Instantiate the XHR object
2. Set the XHR object (method, path, headers...)
3. Set listener that will parse and insert the HTML code received in the response
4. Send the request
5. Let the listener handle the response

Fetching HTML code from server and updating a DOM element:

```js
document.addEventListener('DOMContentLoaded', () => {
  let request = new XMLHttpRequest();
  request.open('GET', 'https://host.com/path');
  request.addEventListener('load', () => {
    let element = document.querySelector('#id-of-element');
    element.innerHTML = request.response; // we update the content of the element with the received raw HTML code
  });

  request.send();
});
```

Adding custom listener to display an element with some fetched information live when the user clicks on a link, instead of reloading the full page, as it is the default behavior with links:

```js
document.addEventListener('DOMContentLoaded', () => {
  // code omitted 

  someElement.addEventListener('click', event => { 
    event.preventDefault();

    let elementReference = someElement.dataset.id;

    let request = new XMLHttpRequest();
    request.open('GET', `https://host.com/path/info/${elementReference}`);
    request.addEventListener('load', () => someElement.innerHTML = request.response );

    request.send();
  });
});
```

### 02. Submitting a Form via XHR

This technique implies consists of three basic steps:

1. Serialize form data (that the user introduced in the form input elements).
2. Send the request.
3. Handle the response (success/error).

There are different ways to serialize form data to send to the server via HTTP requests: serialize the form element values manually, and sending them in the body of the request, as a query string; using the `FormData` API. 

We can send the data via an encoded query string, that can be written directly or programmatically (the `URLSearchParams` interface can be of help here) from various input elements. We need to set a `Content-Type` header to `application/x-www-form-urlencoded` first:

```js
let request = new XMLHttpRequest();
request.open('POST', 'path');

request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

let data = 'name=values&other=more%20data';

request.addEventListener('load', () => {
  if (request.status === 201) {
    alert(`The data was sent successfully: ${request.responseText}`);
  }
});

request.send(data);
```

There is no reason to use the other methods over the `FormData` API: this method is the most convenient, easy to use, and less prone to errors. The only disadvantage of this method is that it only works with form input fields that have a `name` attribute. `FormData` serializes the data into a _multipart_ format (used with file uploads). The `Content-Type` header will be set automatically. 

The `Accept` header will be automatically set to `*/*` (accepts anything) if it is not set manually via `setRequestHeader()`.

This is an example of a custom listener that submits the form data this way:

```js
form.addEventListener('submit', event => {
  event.preventDefault(); // we prevent the browser from submitting the form
  let form = document.querySelector('form')
  let data = new FormData(form); // we convert the form data by passing the element to the constructor

  let request = new XMLHttpRequest();
  request.open(form.method, `path`);
  request.send(data); // and we just send the form data to the server
});
```

#### `URLSearchParams`

[Describe]

The `URLSearchParams` interface defines utility methods to work with the query string of a URL.

An object implementing `URLSearchParams` can directly be used in a `for`...`of` structure to iterate over key/value pairs in the same order as they appear in the query string.

##### Basic use

We can create `URLSearchParams` object passing the query string as an argument:

```js
const paramsString = "q=URLUtils.searchParams&topic=api";
const searchParams = new URLSearchParams(paramsString);
```

This object defines useful properties and methods (`size`, `append()`, `forEach()`, `get()`, `set()`, `has()`...)

#### Handling the response

We can usually check if the request was successful by checking the status code of the response is what we were looking for (for instance, `201`, that means the resource was added successfully on the server), or by adding specific error-handling listeners triggered by `error` events, etc.

### 03. Loading JSON via XHR

This technique is useful for when we expect to receive from the server data in a structured way, and then render it client-side; for instance, when loading widgets that the server can't do by itself. The best way we can structure that data is by the JSON format.

Steps:

1. We initialize the request.
2. We set the `responseType` property of the XHR object to the string `json`;
3. And then, when the response has been received, we can access to the already JSON-parsed data via the `response` property of the XHR object. If the response body couldn't be parsed or other error occurs, the value of this property will be simply `null`

The `JSON.parse()` static method parses a JSON string, and creates the equivalent JavaScript value or object. It will throw an exception if the string to parse is not valid. (Not necessary in modern browsers when we set the `responseType` property to `'json'`, as the data in the `response` will already be parsed.)

If we don't set the `responseType` property, we will have to write our own extra error-handling code along the `JSON.parse()` method, to which we will have to pass the value of the `response` property of the XHR object. As it seems obvious, there is no reason we should prefer this over the much more convenient way of setting the `responseType` property.

```js
let request = new XMLHttpRequest();
request.open('GET', 'https://host.com/path');
request.responseType = 'json';
request.send();

request.addEventListener('load', event => {
  let data = request.response;
  // does something the the parsed data
})
```

### 04. Sending JSON via XHR

JSON is the most convenient way to serialize data in many situations. 

This technique consists of three steps:

1. Serializing the data into the JSON format.
2. Set the `Content-Type` header to `application/json; charset=utf-8`;
3. Send the request (and handle the response)

#### Serializing Data to JSON

To serialize data into valid JSON format from JavaScript code we must: first, create or retrieve a JavaScript value (an object, an array, etc.); and, second, convert the value to a JSON string via the method `JSON.stringify()`, passing it as argument.

```js
let request = new XMLHttpRequest();
request.open('POST', 'https://host.com/path');

let data = { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' };
let json = JSON.stringify(data);

request.send(json);
```

#### Setting the `Content-Type` header

We must tell the server the type of data it should expect. This is not always required, but it is a good practice to always do. We must set the `Content-Type` request header to `application/json; charset=utf-8`:

```js
let request = new XMLHttpRequest();
request.open('POST', 'https://host.com/path');
request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); // !

let data = { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' };
let json = JSON.stringify(data);

request.send(json);
```

## Cross-Domain XHR requests with CORS

### Same-origin policy

The _same-origin policy_ is one of the most important guards against common security issues, like session hijacking, XSS (Cross-Site Scripting), or CSRF (Cross-Site Request Forgery): This policy allows for the unrestricted access between resources of the same origin, but restricting requests/responses between resources from different origins. Origin refers to the same shared _scheme_, _host_, and _path_. 

Every request sent to a _different origin_ (different scheme, different host, or different path), relative to the URL from which the request is sent, is considered a _cross-origin request_. The cross-domain request is the most important of the three possible cross-origin requests;

While almost any cross-origin resource request from APIs is restricted by this policy, there are interactions from different origins that are not restricted: for example, linking, redirections, form submissions, or embedding of external resources (like videos). However, this policy also includes a Cross-origin Resource Sharing or CORS, a W3C specification that allows for certain specified allowed cross-origin resource requests thanks to some special HTTP headers. This is specially important for the interaction of different web APIs.

### CORS

According to this specification, every HTTP request sent by the web browser must have an `Origin` header with the _origin_ (scheme, host, and path) from which the request is made. 

This header's value will be used by the server to check if it should send a corresponding header in the response.

Any browser will automatically add the `Origin` header with the appropriate value when performing an HTTP request, via XHR or `fetch()`. 

When the server receives the request, it uses the value in the `Origin` header to check whether it represents a valid origin (an origin that is allowed to access the response): If the origin is allowed by the server, it sets a header `Access-Control-Allow-Origin` in the response with the same origin value. The requested resource may be available universally; if this is the case, this header will be set a wildcard character `*`. 

The browser will then determine if it lets the web application to access the response: if the `Access-Control-Allow-Origin` header has the correct origin or the `*` character as value, it will make the response accessible; otherwise, it will raise an error. This is true for any case: if the browser does not receive this header with the correct value, even in a correct response, it still won't let the application access to the response.

## Throttling

Throttling seeks controlling the rate at which a function is invoked, preventing superfluous invocations and, in consequence, HTTP requests sent to the server, which puts an unnecessary strain on the server. 

This technique works by setting a delay period of time between a function invocation and sending a request; if, for example, the user quickly types the beginning of a word in a text input that has implemented the 'autocomplete' functionality, it's not necessary to make requests for all the letters typed, for every single keyboard input. We can just make the request for the final result, the written portion of the word: if a request becomes irrelevant due to a newer request, we can forget the original request (the first letters quickly typed) and start a new delay period for the newer request, until the user pauses.