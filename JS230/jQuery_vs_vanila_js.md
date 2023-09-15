# Comparative techniques for jQuery and vanilla JavaScript

## DOM traversal

### Get all parents:

```js
function ancestors(element, callback) {
  let parent = element.parentNode; 
  while (parent) { // add possible extra condition, like && parent.parentNode !== 'HTML'
    callback(parent)
    parent = parent.parentNode;
  }
}

let ancestors = []

ancestors(someElement, element => ancestors.push(element))
```

```js
$(someElement).parents()
```

### Get all Siblings:

```js
function siblings(element, callback) {
  for (let sibling of element?.parentNode?.children) {
    callback(sibling);
  }
}
let siblings = []
siblings(someElement, element => siblings.push(element))
```

```js
$(someElement).find('*')
```

### `closest()`

```js
  function siblings(element, callback) {
    if (element.parentNode) {
      for (let sibling of element?.parentNode?.children) {
        callback(sibling)
      }
    }
  }

  function closest(element, selector) {
    let parent = element
    let output = []
    let target;
    while (parent) {
      siblings(parent, element => output.push(element))
      parent = parent?.parentNode;
      target = parent?.querySelector(selector)
      if (output.includes(target)) break
    }
    
    if (target) return output.find(element => element === target)
    else return null
  } 
```

```js
$(someElement).closest(selector)
```

### `find()`

```js
someElement.querySelector(selector)
```

```js
$(someElemet).find(selector)
```

### `children()`

```js
function children(someElement, selector) {
  let children = someElement.children
  children.find(element => element.matches(selector))
}
```

```js
$(someElement).children()
```

## Event management

### Event delegation

```js
let allowedSelector = ''
someElement.addEventListener('click', event => {
  if (!event.target.matches(allowedSelector)) return
  // some behavior
})
```

```js
$(someElement).on('click', allowedSelector, callback) // only certain elements will be triggered, all delegate to parent
```

### Remove listeners

```js
someElement.addEventListener('click', callback)
someElement.removeEventListener('click')
```

```js
$(someElement).on('click', callback)
$(someElement).off('click')
```

## Networking

### Request

```js
  let request = new XMLHttpRequest()
  request.open(method, path)
  request.setRequestHeader(name, value)
  request.responseType = 'json'
  request.addEventListener('load', event => {
    // handles response
  })
  request.send(data)
```

```js
$.ajax({
  url:,
  type:,
  dataType:,
  headers: {name: value, name2: value2}
  data:, someValue
}).done(returnedData => {
  // handles response
})
```

## Styling and Animation

### Hide/Show/ etc...

```css
.hide { /* any name */
  display: none
  /* any rule */
}
```

```js
element.classList.toggle('hide')
```

```js
$(element).hide()
$(element).show()
```
