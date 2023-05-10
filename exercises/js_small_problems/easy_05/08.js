// Exercise 08

// Create a function that takes two integers as arguments. 
// The first argument is a count, and the second is the starting number 
// of a sequence that your function will create. 
// The function should return an array containing 
// the same number of elements as the count argument. 
// The value of each element should be a multiple of the starting number.

// You may assume that the count argument will always 
// be an integer greater than or equal to 0. 
// The starting number can be any integer. 
// If the count is 0, the function should return an empty array.

function sequence(count, start) {
  let output = [];

  for (let i = start, n = 0; n < count; i += start, n += 1) {
    output.push(i);
  } 
  return output;
}
