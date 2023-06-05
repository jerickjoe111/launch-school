// Exercise 05

// Write a function that takes a sentence string as an argument 
// and returns that string with every occurrence of a 
// "number word" — 'zero', 'one', 'two', 'three', 'four', 
// 'five', 'six', 'seven', 'eight', 'nine' 
// — converted to its corresponding digit character.

// Example:

// wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."


// get array of words

// helper word to number

// return new, modified version of words.
function wordToDigit(string) {
  function toDigit(word) {
    const NUMBER_WORDS = [
      'zero', 'one', 'two', 'three', 'four', 'five', 
      'six', 'seven', 'eight', 'nine'
    ];

    let wordWithoutPunctuation = word.toLowerCase().replace(/[^a-z]/, '');
    let digit = NUMBER_WORDS.indexOf(wordWithoutPunctuation);
    if (digit === - 1) return word 
    else {
      let replacementRegExp = new RegExp(`${wordWithoutPunctuation}`, 'i');
      return word.replace(replacementRegExp, digit);
    }
  }

  return string.split(' ').map(word => toDigit(word)).join(' ')
}

console.log(
wordToDigit('Please call me at five five five one two three four. Thanks.')
// "Please call me at 5 5 5 1 2 3 4. Thanks."
)