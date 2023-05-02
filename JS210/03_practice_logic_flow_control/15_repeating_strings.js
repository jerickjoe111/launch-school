// Implement a function that takes a string and a number times as arguments.
// The function should return the string repeated times number of times.
// If times is not a number, return undefined. If it is a negative number,
// return undefined also. If times is 0, return an empty string.
// You may ignore the possibility that times is a number that isn't an integer.

function repeat(string, times) {
  if (times < 0 || typeof times !== 'number') return undefined;

  let output = '';
  for (let i = 0; i < times; i += 1) output += string;
  return output;
}
console.log(repeat('abc', 0));
repeat('abc', 2); 
