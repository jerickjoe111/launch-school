1. Write a function named push that accepts two arguments: an Array and any other value. The function should append the second argument to the end of the Array, and return the new length of the Array.

```js
function push(array, element) {
  array[array.length] = element;
  return array.length;
}
```

2. Write a function named pop that accepts one argument: an Array. The function should remove the last element from the array and return it.

```js
function pop(array) {
  return array.splice(array.length -1)[0];
}
```

3. Write a function named `unshift` that accepts two arguments: an Array and a value. The function should insert the value at the beginning of the Array, and return the new length of the array. You will need a for loop for this problem.

```js
function unshift(array, element) {
  for (let i = array.length - 1; i >= 0; i -= 1) array[i + 1] = array[i];
  array[0] = element;
  return array.length;
}
```

4. Write a function named `shift` that accepts one argument: an Array. The function should remove the first value from the beginning of the Array and return it.

```js
function shift(array) {
  let removed = array[0];
  for (let i = 1; i < array.length; i += 1) array[i - 1] = array[i];
  array.length = array.length - 1;
  return removed;
}
```
