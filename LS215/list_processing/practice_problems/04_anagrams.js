// Write a Function named anagram that takes two arguments: a word and an array of words. 
// Your function should return an array that contains all the words from the array argument 
// that are anagrams of the word argument. For example, given the word "listen" 
// and an array of candidate words like "enlist", "google", "inlets", and "banana", 
// the program should return an array that contains "enlist" and "inlets".

function anagram(word, list) {
  function isAnagram(wordA, wordB) {
    return [...wordA.toLowerCase()].sort().join('') === [...wordB.toLowerCase()].sort().join('')
  }

  return list.filter(possibleAnagram => isAnagram(word, possibleAnagram))
}

console.log(
anagram('listen', ['enlists', 'google', 'inlets', 'banana']),  // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana'])   // [ "enlist", "inlets" ]
)
