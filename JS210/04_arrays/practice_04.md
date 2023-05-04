_You may use functions that were answers to previous practice problems to complete this problem, but do not use any built-in Array methods._

1. Write a function named `slice` that accepts three arguments: an Array, a start index, and an end index. The function should return a new Array that contains values from the original Array starting with the value at the starting index, and including all values up to but not including the end index. Do not modify the original Array.

```js
function slice(array, startIndex, endIndex) {
  let output = [];
  for (let i = startIndex; i < endIndex; i += 0) push(output, array[i]);
  return output;
}
```

2. Write a function named `splice` that accepts three arguments: an Array, a start index, and the number of values to remove. The function should remove values from the original Array, starting with the start index and removing the specified number of values. The function should return the removed values in a new Array.

```js
function splice(array, begin, number) {
  let removedValues = [];
  for (let index = begin; index < array.length; index += 1) {
    if (index < begin + number) removedValues.push(array[index]);
    array[index] = array[index + number];
  }

  array.length = array.length - removedValues.length;
  return removedValues;
}
```

3. Write a function named `concat` that accepts two Array arguments. The function should return a new Array that contains the values from each of the original Arrays.

```js
function concat(firstArray, secondArray) {
  let newArray = [];
  for (let index = 0; index < firstArray.length; index += 1) push(newArray, firstArray[index]);
  for (let index = 0; index < secondArray.length; index += 1) push(newArray, secondArray[index]);
  return newArray;
}
```

4. Write a function named `join` that accepts two arguments: an Array and a String. The function should coerce each value in the Array to a String, and then join those values together using the second argument as a separator. You may assume that a separator will always be passed.

```js
function join(array, separator) {
  let output = '';

  for (let i = 0; i < array.length; i += 1) {
    output += String(array[i]);
    if (i < array.length - 1) output += separator;
  }
  
  return output
}
```