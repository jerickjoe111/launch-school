// Exercise 08
// Write a function that takes one argument, a positive integer, 
// and returns a list of the digits in the number.

function digitList(number) {
  return String(number).split('').map(x => Number(x));
}