# XHR Requests Problems

1. Write JavaScript code that makes a GET request to this URL: `https://api.github.com/repos/rails/rails`.

```js
const METHOD = 'GET';
const URL = 'https://api.github.com/repos/rails/rails';

let request = new XMLHttpRequest();
request.open(METHOD, URL);
request.send();
```

2. What property will contain the response body after the request from the previous problem completes?

`responseText` (raw text) and `response` (parsed text, not always meaningful).

