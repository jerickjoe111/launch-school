// Exercise 01

// Write a function that takes a string, doubles every character in the string, 
// and returns the result as a new string.

function repeater(string) {
  return string.replace(/./g, "$&$&")
}

