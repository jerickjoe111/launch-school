1. With arrays, you can access the first element's value with `[0]`, but how do you access the last value? Write a function named `lastInArray` that returns the value of the last element in the array provided by the function's argument. You may use the length property and the `[] `operator, but do not use any other methods or properties.

```js
function lastInArray(array) {
  return array[array.length - 1];
}
```

2. Create a function named `rollCall` that takes an array of first names as an argument and logs all the names to the console, one name per line. You should log the names in the same sequence that they appear in the array. Use a `for` loop to process the array.

```js
function rollCall(array) {
  for (let i = 0; i < array.length; i += 1) console.log(array[i]);
}
```

3. Create a function that returns the contents of the array it receives as an argument, but with the values in reversed order. Your function should use a `for` loop that iterates over the elements in the array from the end of the array to the beginning, and pushes each element's value to a new result array. Be sure to start your loop with the element whose index is one less than the input array's length.

```js
function newReverse(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i -= 1) output.push(array[i]);
  return output;
}
```

4. Write a function that returns a string of all the values in an array with no intervening content. For example, your function should return `'1a4' `if the argument is `[1, 'a', 4]`. Use a `for` loop to process the array elements in sequence, and coerce each value in the array to a `String` before concatenating it to the result string.

```js
function arrayToString(array) {
  let output = '';
  for (let i = 0; i < array.length; i += 0) output += String(array[i]);
  return output;
}
```

