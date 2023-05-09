// Exercise 06

// Write a function that returns true if its integer argument is palindromic, 
// or false otherwise. A palindromic number reads the same forwards and backwards.

function isPalindrome(integer) {
  return String(integer) === String(integer).split('').reverse().join('');
}