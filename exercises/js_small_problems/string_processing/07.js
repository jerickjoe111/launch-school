// Exercise 07

// Modify the function from the previous exercise so that it ignores 
// non-alphabetic characters when determining whether a letter 
// should be upper or lower case. Non-alphabetic characters should 
// still be included in the output string, but should not be counted 
// when determining the appropriate case

function staggeredCase(string) {
  function isLetter(char) { return /[a-z]/ig.test(char) }
  function isEven(counter) { return counter % 2 === 0 }

  let result = '';

  let counter = 0;
  for (let i = 0; i < string.length; i += 1) {
    let currentChar = string[i];
    if (isLetter(currentChar)) {
      result += isEven(counter) ? currentChar.toUpperCase() : currentChar.toLowerCase();
      counter += 1;
    } else {
      result += currentChar;
    }
  }

  return result;
}
