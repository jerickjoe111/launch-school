// Exercise 08

// Write a function that takes a string of digits and returns the appropriate number as an integer. 
// The string may have a leading + or - sign; 
// if the first character is a +, your function should return a positive number; 
// if it is a -, your function should return a negative number. 
// If there is no sign, return a positive number.

const numericBase = 10;

function isSigned(string) {
  let firstCharacter = string[0]
  return (firstCharacter === '+' || firstCharacter === '-')
}

function stringToInteger(input_string) {
  let string = isSigned(input_string) ? input_string.slice(1) : input_string;
  let maxPower = string.length - 1;
  let number = 0;

  for (let character of string) {
    number += character * (numericBase ** maxPower);
    maxPower--;
  }
  number = input_string.includes('-') ? number * -1 : number;

  return number;
}

console.log(stringToInteger('1234'))