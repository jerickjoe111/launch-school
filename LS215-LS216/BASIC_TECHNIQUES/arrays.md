# Basic Array techniques:

1. [Make a deep copy of an array](#make-a-deep-copy-of-an-array)
2. [Find out if array has duplicates](#find-out-if-array-has-duplicates)
3. [Remove duplicates in an array](#remove-duplicates-in-an-array)
4. [Compare if two arrays have the same values (are equal)](#compare-if-two-arrays-have-the-same-values-are-equal)
5. [Remove sparse areas from an array](#remove-sparse-areas-from-an-array)
6. [Filter out NaN values from an array](#filter-out-nan-values-from-an-array)
7. [Get max/min value from a list of arguments](#get-maxmin-value-from-a-list-of-arguments)
8. [Get all possible permutations (same elements, different order) from an array:](#get-all-possible-permutations-same-elements-different-order-from-an-array)
9. [Sort list of strings, case insensitively](#sort-list-of-strings-case-insensitively)
10. [Copy an array populated by primitive values](#copy-an-array-populated-by-primitive-values)
11. [Swap values in an array](#swap-values-in-an-array)
12. [Delete only certain elements from an array, in place](#delete-only-certain-elements-from-an-array-in-place)
13. [How to get recursively the depth of an array:](#how-to-get-recursively-the-depth-of-an-array)

## Make a deep copy of an array

```js
let original = {a: 1}
let copy = JSON.parse(JSON.stringify(original));
original.b = 2;
copy = {a: 1}; 
```

## Find out if array has duplicates

```js
function hasDuplicates(array) {
  let noDuplicates = [...new Set(array)].join('');

  return noDuplicates !== array.join('')
}

let a = [1,1,2,2];

hasDuplicates(a); // => true
```

## Remove duplicates in an array

```js
let a = [1,1,2,2];
[...new Set(a)];
```

## Compare if two arrays have the same values (are equal)

```js
function compare(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) return false;

  let sortedA = [...ArrayA].sort();
  let sortedB = [...ArrayB].sort();

  for (let i = 0; i < arrayA.length; i += 1) {
    if (arrayA[i] !== arrayB[i]) return false;
  }

  return true;
}
```

## Remove sparse areas from an array

```js
let a = [1,,,,,,2];
a.filter(() => true) // => [1, 2] 
```

## Filter out NaN values from an array

```js
let a = [1,NaN,2];
a.filter((element) => !isNaN(element) ) // => [1, 2]
```

## Get max/min value from a list of arguments

```js
let a = [1, 2, 3];
Math.max(...a); // => 3
Math.min(...a); // => 1
```

## Get all possible permutations (same elements, different order) from an array:

```js
function permutations(array) {
  function permute(array, memo = []) {
    if (array.length === 0) {
      output.push(memo)
    } else {
      for (let i = 0; i < array.length; i++) {
        let current = array.slice();
        let next = current.splice(i, 1);
        permute(current.slice(), memo.concat(next));
     }
   } 
  }

  let output = [];

  permute(array);

  return output;
}

let a = ['a', 'b', 'c'];
permutations(a); // =>
//                 [
//                   [ 'a', 'b', 'c' ],
//                   [ 'a', 'c', 'b' ],
//                   [ 'b', 'a', 'c' ],
//                   [ 'b', 'c', 'a' ],
//                   [ 'c', 'a', 'b' ],
//                   [ 'c', 'b', 'a' ]
//                 ]
```

## Sort list of strings, case insensitively

```js
let list = ['ZZZ', 'bbb', 'AaA'];

list.sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a < b) return - 1;
  else if (b < a) return 1;
  else return 0;
})

list // => [ 'AaA', 'bbb', 'ZZZ' ]
```

## Create an empty matrix (square) 

```js
function createMatrix(order) {
  let output = [];

  for (let i = 0; i < order; i += 1) {
    output.push([]);
  }

  return output;
}
```

## Copy an array populated by primitive values

```js
let a = [1, 2]

let copy = [...a];
```

## Swap values in an array

## Delete only certain elements from an array, in place

```js
let a = [0, 1, 2, 3]

let i = 0
while (i < a.length) {
  if (a[i] % 2 !== 0) a.splice(i, 1);
  else i += 1;
}
```

## How to get recursively the depth of an array:

```js
function depth(value) {
  return Array.isArray(value) ? 1 + Math.max(0, ...value.map(depth)) : 0;
}
```
