// Exercise 09

// Write a function that takes a string argument and 
// returns a new string containing the words from the string argument in reverse order.

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}
