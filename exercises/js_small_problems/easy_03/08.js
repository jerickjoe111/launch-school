// Exercise 08

// Given a string of words separated by spaces, write a function that swaps 
// the first and last letters of every word.

// You may assume that every word contains at least one letter, 
// and that the string will always contain at least one word. 
// You may also assume that each string contains nothing but words and spaces, 
// and that there are no leading, trailing, or repeated spaces.

// convert string of words into array of words

// for every word (element) in the array:

//   - swap (destructuring assingment) first and last characters of word

// convert array of swapped words into a string

function swap(string) {
  function wordSwapper(word) {
    let chars = word.split('');
    [chars[0], chars[chars.length - 1]] = [chars[chars.length - 1], chars[0]];
    return chars.join('');
  }

  let swappedWords = string.split(' ').map( word => wordSwapper(word))
  return swappedWords.join(' ');
}
