// Write a function that removes the last vowel in each word in a sentence.

// Examples
// removeLastVowel("Those who dare to fail miserably can achieve greatly.")
// ➞ "Thos wh dar t fal miserbly cn achiev gretly."

// removeLastVowel("Love is a serious mental disease.")
// ➞ "Lov s  serios mentl diseas"

// removeLastVowel("Get busy living or get busy dying.")
// ➞ "Gt bsy livng r gt bsy dyng"

/*
input: a string (any type of character)

output: an equal string, but from each word it has been removed the last vowel

each word (series of 1+ chars. separated by whitespace)

------------ **Types Involved** -------------

strings

indeces (numbers)

array of words


------------ **Caveats & Questions** -------------

case insensitive

words of just one vowel ???

'' => ''

------------ Examples/Test Cases/Edge's ------------

helper removecharat (index)

------------------ Strategies ------------------
remove last vowel
  get last vowel index 

  get arrray of chars. 

  delete element at that index (splice(index, 1))

  convert array of chars. into string


get array of words

  for each word

    find index of last vowel

    remove char from word at that index

    replace old word by new word (last vowel removed)

join back the words

return words

-------------------- Algorithm ---------------------

*/

const p = console.log


function removeLastVowel(string) {
  function findLastVowelIndex(word) {
    let vowels = word.match(/[aeiou]/gi);
    return word.lastIndexOf(vowels[vowels.length - 1]);
  }

  function removeLastVowelFromWord(word) {
    let lastVowelIndex = findLastVowelIndex(word);
    let characters = word.split('');
    if (lastVowelIndex !== -1) characters.splice(lastVowelIndex, 1);
    return characters.join('');
  }

  return string.split(' ').map(removeLastVowelFromWord).join(' ');
}

p(
  removeLastVowel("Love is a serious mental disease.")
)