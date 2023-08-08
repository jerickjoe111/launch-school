# Practice Problems: the DOM

## 1. Use JavaScript to set a class of `'heading' `to the heading (the `h1` element).

```js
let h1 = document.querySelector('h1');
h1.classList.add('heading')
```

## 2. Use JavaScript to set the class of the `ul` element to `'bulleted'`.

```js
let ul = document.querySelector('ul');
ul.classList.add('bulleted');
```

## 3. Use the Inspector to find the hidden element and determine its ID. Following this, set the `onclick` property on the link with an ID of `toggle` to a function that makes the element visible when it's hidden and hides it when it's visible. You can use `getAttribute` to access the class, and `setAttribute` to set it; the class names of interest are `'visible'` and `'hidden'`.

```js
let hiddenElement = document.querySelector('#notice');
document.querySelector('#toggle').onclick = function(e) {
  e.preventDefault;
  if (hiddenElement.className === 'hidden') {
    hiddenElement.className = 'visible';
  } else {
    hiddenElement.className = 'hidden';
  }
}
```

## 4. Add an `onclick` event to the element we show and hide above. This time, the function should set the class of the element to `'hidden'`. This event will let you hide the visible element by clicking on it. As with the previous function, the first thing the function should do is invoke` e.preventDefault`.

```js
document.querySelector('#notice').onclick = function(e) {
  e.preventDefault;
  e.currentTarget.className = 'hidden';
}
```

## 5. Locate the multiplication paragraph and change the text to the result of the arithmetic problem.

```js
let multiplication = document.querySelector('#multiplication');
[a, b] = multiplication.textContent.match(/\d+/g).map(e => parseInt(e));
multiplication.insertAdjacentHTML('beforeend', ` ${a * b}`);
```

## 6. Set the ID of the body element to `'styled'` to apply the rest of the styles from the original file. The body tag in this file doesn't have an ID, so you must locate it by some other means.

```js
document.body.id = 'styled';
```