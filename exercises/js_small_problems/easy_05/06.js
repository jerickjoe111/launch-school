// Exercise 06

// Write a function that takes an integer argument 
// and returns an array containing all integers between 
// 1 and the argument (inclusive), in ascending order.

// You may assume that the argument will always be a positive integer.

function sequence(limit) {
  let output = [];
  for (let i = 1; i <= limit; i += 1) output.push(i);
  return output;
}