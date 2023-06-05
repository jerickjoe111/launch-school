// Exercise 01

// Write a function that takes a string argument and returns true if all of 
// the alphabetic characters inside the string are uppercase; 
// otherwise, return false. Ignore characters that are not alphabetic.

// for every char in input string

//   if char is a letter

//       convert to ascii code

//       if it is in lowercase range

//             return false

// return true

function isUppercase(string) {
  return !string.match(/[a-z]/g)
}
