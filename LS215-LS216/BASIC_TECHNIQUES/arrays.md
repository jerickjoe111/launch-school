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

