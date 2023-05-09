// Exercise 07

// Write a function that takes an array of numbers and returns an array 
// with the same number of elements, but with each element's 
// value being the running total from the original array.

function runningTotal(array) {
  let total = 0;
  return array.map(element => total += element);
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []