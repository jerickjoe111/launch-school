# XHR Basic Techniques

## 1. Loading HTML from the server

1. Instantiate the XHR object
2. Set the XHR object (method, path, headers...)
3. Set listener that will parse and insert the HTML code received in the response
4. Send the request
5. Let the listener handle the response

```js
document.addEventListener('DOMContentLoaded', () => {
  let request = new XMLHttpRequest();
  request.open('GET', 'https://host.com/path');
  request.addEventListener('load', () => {
    let element = document.querySelector('#element-id');
    element.innerHTML = request.response; // we update the content of the element with the received raw HTML code
  });

  request.send();
});
```

## 2. Submitting a form

1. Serialize form data (that the user introduced in the form input elements).
    - URL encoded (set 'Content-Type' header)
    - MultiForm data (headers set automatically)
2. Send the request.
3. Handle the response (success/error).

URL Encoding serialization:

```js
let request = new XMLHttpRequest();
request.open('POST', 'path');

request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

let data = 'name=value&foo=bar%20baz'; // encoded query string

request.addEventListener('load', () => {
  if (request.status === 201) {
    alert(`The data was sent successfully: ${request.responseText}`);
  }
});

request.send(data);
```

We can also add the query string to the path after the `?` symbol, instead of sending the string in the request body.

MultiForm serialization:

```js
document.addEventListener('DOMContentLoaded', () => {
  let request = new XMLHttpRequest();
  let form = document.querySelector('form')
  let formData = new FormData(form)
  request.open('POST', 'https://host.com/path');

  request.addEventListener('load', event => {
    if (request.status === 201) {
      alert('Data sent successfully') // handle the response
    } else {
      alert('Something happened')
    }
  });

  request.send(formData); // we send the data on the body of the POST request
});
```

## 3. Loading JSON from the server

1. We initialize the request.
2. We set the `responseType` property of the XHR object to the string `json`;
3. And then, when the response has been received, we can access to the already JSON-parsed data via the `response` property of the XHR object. If the response body couldn't be parsed or other error occurs, the value of this property will be simply `null`

```js
document.addEventListener('DOMContentLoaded', () => {
  let request = new XMLHttpRequest();
  request.open('GET', 'https://host.com/path');
  request.responseType = 'json'

  request.addEventListener('load', event => {
    let parsedResponse = request.response // response already parsed thanks to setting the responseType property

    // does something with the response
  });

  request.send(); // we send the data on the body of the POST request
});
```

If we don't set the `responseType` property of the request, we will have to parse it manually with the method `JSON.parse(request)`; however, if there's an error in the request formatting, an exception will be thrown. We won't have this concert if we set the `responseType` property to `'json'`

## 4. Sending JSON from the server

1. Serialize the data into the JSON format.
2. Initialize and set the request
3. Set the `Content-Type` header to `application/json; charset=utf-8`;
4. Send the request (and handle the response)

```js
document.addEventListener('DOMContentLoaded', () => {
  let request = new XMLHttpRequest();
  let dataToSend = {foo: 1, bar: 2, baz: 3,}
  let json = JSON.stringify(dataToSend)

  request.open('POST', 'https://host.com/path');
  request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); // !

  request.addEventListener('load', event => {
    if (request.status === 201) {
      alert('Data sent successfully') // handle the response
    } else {
      alert('Something happened')
    }
  });

  request.send(json); // we send the data on the body of the POST request, in JSON format
});
```