// Exercise 02

// Write a function that takes a string, 
// doubles every consonant character in the string, 
// and returns the result as a new string. 
// The function should not double vowels ('a','e','i','o','u'), 
// digits, punctuation, or whitespace.

const CONSONANTS = 'BCDFGHJKLMNPQRSTVWXYZ'

function doubleConsonants(string) {
  let match = new RegExp(`[${CONSONANTS}]`, `gi`)
  return string.replace(match, "$&$&")
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""