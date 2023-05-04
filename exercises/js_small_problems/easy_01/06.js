// Exercise 06

// Write a function that takes two strings as arguments, determines the length of the two strings, 
// and then returns the result of concatenating the shorter string, the longer string, 
// and the shorter string once again. 
// You may assume that the strings are of different lengths.

// - sort strings by length
// - return string made by strings.first, .last, .first

function shortLongShort(string1, string2) {
  let strings = [string1, string2].sort((a, b) => a.length - b.length);
  return `${strings[0]}${strings[1]}${strings[0]}`;
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"