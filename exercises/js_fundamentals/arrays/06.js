// Exercise 06

// In this exercise, you will implement your own version of the Array.prototype.reverse method. Your implementation should differ from the built-in method in the following two ways:

// It should accept either a string or an array as an argument.
// It should return a new string or array.

function reverse(input) {
  return Array.isArray(input) ? reverseArray(input): reverseString(input);
}

function reverseArray(input) {
  let reversed = [];
  let length = input.length;
  for (let i = 0; i < length; i += 1) reversed[length - 1 - i] = input[i];
  return reversed;
}

function reverseString(input) {
  let stringArray = input.split('');
  return reverseArray(stringArray).join('');
}