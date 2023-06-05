// Exercise 02

// Write a function that takes an array of strings and returns an array of the same string values, 
// but with all vowels (a, e, i, o, u) removed.

function removeVowels(strings) {
  return strings.map(word => {
      return word.split('')
                 .filter(letter => !letter.match(/[aeiou]/ig))
                 .join('');
    }
  )
}
