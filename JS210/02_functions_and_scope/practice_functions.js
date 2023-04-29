// We need a piece of reusable code that returns the average of three numbers. 
// Define a function named average that takes three parameters, a, b, and c, 
// and returns their average. 
// Call the function with three numbers and log the result.

function average(a, b, c) {
  return (a + b + c) / 3;
}

console.log(average(1, 2, 3));

// Create a function named sum that takes the same three arguments as average, 
// and returns the sum of the three arguments. 
// Now modify average to call the sum function with 
// those three arguments and use the return value to calculate the average.

function sum(a, b, c) {
  return a + b + c;
}

function average2(a, b, c) {
  return sum(a, b, c) / 3;
}

console.log(average2(1, 3, 3));

// Suppose we have a bunch of values for which we want to calculate an average. 
// Our current average function only takes three numbers; we might need to write additional functions 
// if we want to work with different numbers of data points. A better solution, though, 
// is to change the function to accept an array of arbitrary length. We can calculate the 
// average by looping over the array elements to calculate the total, then divide by the array length.

// Create a variable named total with an initial value of 0 at the start of the average function. 
// Use a for loop to iterate over all the elements in the array. 
// With each iteration, add the element's value to the total. 
// When the loop finishes, return the total divided by the array's length. 

// Call average with an array of five numbers and log the result.

function sumArray(array) {
  let total = 0;
  let arrayLength = array.length;
  for(let i = 0; i < arrayLength; i++) total += array[i];

  return total / arrayLength;
}

console.log(sumArray([1, 3, 3, 4, 3]))

// Move everything from average into sum, except for the final return statement. 
// The sum function should return the total, 
// and average should call the sum function with the same values, 
// then divide the return value by the array length, and return it.

// As before, call average with an array of five numbers and log the result.

function average(values) {
  return sum(values) / values.length;
}

function sum(array) {
  let total = 0;
  let arrayLength = array.length;
  for (let i = 0; i < arrayLength; i += 1) {
    total += array[i];
  }

  return total;
}

console.log(average([1, 3, 3, 4, 3]));

let temperatures = [1, 2, 3, 4, 5];

console.log(average(temperatures));