// Exercise 04

// Write a function that takes a non-empty string argument and 
// returns the middle character(s) of the string. 
// If the string has an odd length, you should return 
// exactly one character. If the string has an even length, 
// you should return exactly two characters.

function centerOf(string) {
  let stringLength = string.length;
  let middleIndex = Math.floor(stringLength / 2);

  if (stringLength % 2 == 0) return string.slice(middleIndex - 1, middleIndex + 1);
  else return string[middleIndex];
}
