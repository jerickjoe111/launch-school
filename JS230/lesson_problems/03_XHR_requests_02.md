# Loading JSON via XHR

1. Write some JavaScript code that loads JSON data from `https://api.github.com/repos/rails/rails`, parses the JSON into a JavaScript object, and then logs the HTTP status code and the number of open issues to the console. The property to get the number of open issues is `open_issues`.

```js
const URL = 'https://api.github.com/repos/rails/rails';
let request = new XMLHttpRequest();
request.open('GET', URL);
request.responseType = 'json';
request.send();

request.addEventListener('load', event => {
  console.log(request.status); // logs the HTTP status code
  let data = request.response;
  console.log(data.open_issues);
})
```

2. Extend the code from the previous exercise to log the message `'The request could not be completed!'` to the console when the request produces an error. You may replace the url in the previous exercise to "`hts://api.github.com/repos/rails/rails`" so that the error handler will be triggered.

```js
const URL = 'https://api.github.com/repos/rails/rails';
let request = new XMLHttpRequest();
request.open('GET', URL);
request.responseType = 'json';
request.send();

request.addEventListener('load', event => {
  console.log(request.status); // logs the HTTP status code
  let data = request.response;
  console.log(data.open_issues);
})

request.addEventListener('error', event => {
  console.log('The request could not be completed!');
})
```