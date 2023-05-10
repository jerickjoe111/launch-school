// Exercise 03

// Write a function that takes a positive integer as an argument and 
// returns that number with its digits reversed.

function reverseNumber(integer) {
  return Number(integer.toString().split('').reverse().join(''));
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1