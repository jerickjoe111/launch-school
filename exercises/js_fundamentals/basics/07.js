// Exercise 07

// The function takes a string of digits as an argument, and returns the appropriate number. 
// Do not use any of the built-in functions for converting a string to a number type.

const numericBase = 10;

function stringToInteger(string) {
  let maxPower = string.length - 1;
  let number = 0;

  for (let character of string) {
    number += character * (numericBase ** maxPower);
    maxPower--;
  }

  return number;
}
