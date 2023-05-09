// Exercise 06

// Write a function that takes an array of integers as input, 
// multiplies all of the integers together, divides the result by the number 
// of entries in the array, and returns the result as a string 
// with the value rounded to three decimal places.

function showMultiplicativeAverage(integers) {
  let result = integers.reduce((x, y) => x * y) / integers.length;
  return result.toFixed(3);
}
