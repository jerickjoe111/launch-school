# Basic serialization techniques

## Form input values into a query string

1. Find form element
2. iterate through every input element:
    - encode name and value with `encodeURIComponent`
    - append to string with the correct format name=pair&name=pair

3. Send string in the request body or appended to the path after `?`

```js
let form = document.querySelector('form')

let queryString = ''
form.querySelectorAll('input').forEach(input => {
  if (queryString.length !== 0) queryString += '&'
  let name = encodeURIComponent(input.name)
  let value = encodeURIComponent(input.value)
  queryString += `${name}=${value}`
})

let encodedQueryString = encodeURIComponent(queryString)
// The Content-Type header in the request has to be set to 'application/x-www-form-urlencoded'
```

## Form input values into form data

```js
let form = document.querySelector('form')
let formData = new FormData(form)

//...

request.send(formData)
// the Headers are set automatically by the browser
```

## Form data into JSON

```js
function formDataToJson(formData) {
  let json = {};
  for (let [name, value] of formData) {
    json[name] = value;
  }

  return JSON.stringify(json);
}
```

## Manipulate an existing query string

1. We first pass the query string to the `URLSearchParams` constructor
2. The object returned defined a complete interface:

- `append()`
- `delete()`
- `entries()`
- `forEach()`
- `get()`
- `getAll()`
- `has()`
- `keys()`
- `set()`
- `sort()`
- `toString()`
- `values()`

3. We can even iterate the parameters with a `for`...`of` loop.

```js
let paramsString = "q=URLUtils.searchParams&topic=api";
let searchParams = new URLSearchParams(paramsString);

// Iterating the search parameters
for (let [name, value] of searchParams) {
  console.log(name, value);
}
```

## JavaScript Object into query string

```js
let object = {foo: 1, bar: 2, baz: 3}

let queryString = ''
for (let property in object) {
  if (queryString.length !== 0) queryString += '&'
  let name = encodeURIComponent(property)
  let value = encodeURIComponent(object[property])
  queryString += `${name}=${value}`
}
```

## JavaScript Object into JSON


```js
let object = {foo: 1, bar: 2, baz: 3}
let json = JSON.stringify(object)
```

## JSON into JavaScript Object

```js
let object = {foo: 1, bar: 2, baz: 3}
let json = JSON.stringify(object)

let parsed = JSON.parse(json) // !
```
