// Write a function that returns a string converted to lowercase.

// To convert a single uppercase character to a lowercase character,
// get its ASCII numeric representation from the ASCII table,
// add 32 to that number, then convert the number back to a character
// using the same ASCII table. You can use the String.fromCharCode
// and the String.charCodeAt methods for these operations.

function toLowerCase(string) {
  const OFFSET = 32;
  function isUpper(char) {
    let charCode = char.charCodeAt(0);
    return charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0);
  }

  let output = '';
  for (let i = 0; i < string.length; i += 1) {
    let currentChar = string[i];
    if (isUpper(currentChar)) {
      output += String.fromCharCode(currentChar.charCodeAt(0) + OFFSET);
    } else {
      output += currentChar;
    }
  }
  return output;
}

console.log(toLowerCase('ALPHABET'));
console.log(toLowerCase('123'));
console.log(toLowerCase('abcDEF'));
