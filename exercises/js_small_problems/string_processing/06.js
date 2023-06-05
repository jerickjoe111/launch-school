// Exercise 06

// Write a function that takes a string as an argument and returns that 
// string with a staggered capitalization scheme. 
// Every other character, starting from the first, 
// should be capitalized and should be followed by a 
// lowercase or non-alphabetic character. 
// Non-alphabetic characters should not be changed, 
// but should be counted as characters for determining when to switch between upper and lower case.

function staggeredCase(string) {
  function isEven(index) { return index % 2 === 0 }
  return string
         .split('')
         .map((char, index) => {
          let output = isEven(index) ? char.toUpperCase() : char.toLowerCase();
          return output;
         })
         .join('');
}
