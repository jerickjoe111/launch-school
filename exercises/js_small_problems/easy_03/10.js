// Exercise 10

// Modify the wordSizes function from the previous exercise 
// to exclude non-letters when determining word size. 
// For instance, the word size of "it's" is 3, not 4.

function wordSizes(string) {
  let wordsArray = string.replace(/[^A-Za-z ]/g, '').split(' ');
  let count = {};
  if (string.length === 0) return count;

  for (let i = 0; i < wordsArray.length; i += 1) {
    let wordSize = wordsArray[i].length;
    count[wordSize] |= 0;
    count[wordSize] += 1;
  }
  return count;
}

