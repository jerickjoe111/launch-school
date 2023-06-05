// Exercise 04

// Write a function that takes a string as an argument and returns that string 
// with the first character of every word capitalized and all subsequent characters in lowercase.

// You may assume that a word is any sequence of non-whitespace characters.

function wordCap(string) {
  let result = string[0].toUpperCase();

  for (let i = 1; i < string.length; i += 1) {
    let output = string[i - 1] === ' ' ? string[i].toUpperCase() : string[i];
    result += output;
  }

  return result;
}
