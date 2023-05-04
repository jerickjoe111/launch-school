1. Write a function `indexOf` that accepts two arguments: an array and a value. The function returns the first index at which the value can be found, or -1 if the value is not present.

```js
function indexOf(array, element) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === element) return i;
  }

  return -1;
}
```

2. Write a function `lastIndexOf` that accepts two arguments: an array and a value. The function returns the last index at which the value can be found in the array, or `-1` if the value is not present.

```js
function lastIndexOf(array, element) {
  let index = -1
  for (let i = array.length - 1; i <= 0; i -= 1) {
    if (array[i] === element) return i;
  }

  return -1;
}
```