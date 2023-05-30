// Exercise 07

// Write a function that returns a list of all substrings of a string that are palindromic. 
// That is, each substring must consist of the same sequence of characters forwards as backwards. 
// The substrings in the returned list should be sorted by their order of appearance in the input string. 
// Duplicate substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous exercise.

// For the purpose of this exercise, you should consider all characters and pay attention to case; 
// that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. 
// In addition, assume that single characters are not palindromes.

function palindromes(string) {
  function substrings(string) {
    function leadingSubstrings(startingIndex = 0, string) {
      return string.split('').map((_, i) => {
          return string.slice(startingIndex, i + 1);
        }
      );
    }
  
    let output = []
    for (let i = 0; i < string.length; i += 1) {
      output.push(leadingSubstrings(i, string).filter(s => s.length !== 0));
    }
  
    return output.flat();
  }

  function isPalindrome(string) {
    return string.length > 1 && string === string.split('').reverse().join('')
  }

  return substrings(string).filter(substring => isPalindrome(substring));
}
