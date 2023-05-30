// Exercise 03

// Write a function that takes two array arguments, each containing a list of numbers, 
// and returns a new array containing the products of all combinations of number 
// pairs that exist between the two arrays. 
// The returned array should be sorted in ascending numerical order.

function multiplyAllPairs(arrayA, arrayB) {
  let result = [];

  for (let i = 0; i < arrayA.length; i += 1) {
    for (let j = 0; j < arrayB.length; j += 1) {
      result.push(arrayA[i] * arrayB[j]);
    }
  }

  return result.sort((a, b) => a - b);
}
