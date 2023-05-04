// Write a function that creates and returns a new array from its array argument. 
// The new array should contain all values from the argument array whose positions 
// have an odd index:

function oddElementsOf(array) {
  return digits.filter((_, index) => index % 2 !== 0)
}

let digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits);    // returns [8, 16, 42]

// Write a function that takes an array argument and returns a new array 
// that contains all the argument's elements in their original order 
// followed by all the argument's elements in reverse order:

function mirroredArray(array) {
  return array.concat([...array].reverse());
}

mirroredArray([1, 2, 3]); // [1, 2, 3, 3, 2, 1]

// Use the array `sort` method to create a function that takes an array of numbers
// and returns a new array of the numbers sorted in descending order. 
// Do not alter the original array.

function sortDescending(arr) {
  return [...arr].sort((a, b) => b - a);
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

// Write a function that takes an array of arrays as an argument, 
// and returns a new array that contains the sums of each of the sub-arrays.

function matrixSums(arr) {
  return arr.map(subarray => (subarray.reduce((x, y) => x + y)));
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]


// Write a function that takes an array, and returns a new array with duplicate elements removed.

function uniqueElements(arr) {
  return [...new Set(arr)];
}

let a = uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]
console.log(a)