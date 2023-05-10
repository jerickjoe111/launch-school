// Exercise 10

// Write a function that takes a string argument containing 
// one or more words and returns a new string containing 
// the words from the string argument. 
// All five-or-more letter words should have their letters in reverse order. 
// The string argument will consist of only letters and spaces. 
// Words will be separated by a single space.

// split string in words

// for each word in words

//   - split characters in word

//   - reverse characters

//   - convert characters into a single string

// convert words into a single string

function reverseWords(string) {
  let words = string.split(' ');
  words = words.map(word => word.split('').reverse('').join(''));
  return words.join(' ');
}
