// Exercise 10

// Write a function that takes one argument, an array containing integers, 
// and returns the average of all the integers in the array, 
// rounded down to the integer component of the average. 
// The array will never be empty, and the numbers will always be positive integers.

function average(integers) {
  return Math.floor((integers.reduce((x, y) => x + y)) / integers.length)
}
