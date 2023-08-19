# Sending JSON via XHR

1. Write out the raw text of the HTTP request the following code will send to the server:

```js
let request = new XMLHttpRequest();
request.open('POST', 'https://lsjs230-book-catalog.herokuapp.com/books');

request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

let data = { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' };
let json = JSON.stringify(data);

request.send(json);
```

```
POST /books HTTP/1.1
Host: https://lsjs230-book-catalog.herokuapp.com
Content-Type: application/json; charset=utf-8
Accept */*

{"title": "Eloquent JavaScript", "author": "Marijn Haverbeke"}
```

2. Write some JavaScript to create a new product by sending a request to the JSON API on our web store. To create a product, make a `POST` request to `https://ls-230-web-store-demo.herokuapp.com/v1/products`. To make the post request, you'll need the following:

- `Content-Type` header set to `application/json; charset=utf-8`
- `Authorization` header set to `token AUTH_TOKEN`
- `json` object with the following properties:
  - name
  - sku (must have 3 or more characters)
  - price (must be an integer greater than 0)

```js
const URL = 'https://ls-230-web-store-demo.herokuapp.com/v1/products';
let request = new XMLHttpRequest();
let data = {
  name: 'name',
  sku: '123abc',
  price: 1,
}

request.open('POST', URL);
request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
request.setRequestHeader('Authorization', 'AUTH_TOKEN');
request.send(JSON.stringify(data));

request.addEventListener('load', () => {
  console.log('The product was added succesfully');
})
```
