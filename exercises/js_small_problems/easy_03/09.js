// Exercise 09

// Letter Counter Part 1
// Write a function that takes a string consisting of 
// one or more space separated words and returns an 
// object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

// make an array with word sizes

// for each word size:

//   - count how many equal integers in array of sizes
//   - store as property of object: size = count

function wordSizes(string) {
  let wordsArray = string.split(' ');
  let count = {};
  if (string.length === 0) return count;

  for (let i = 0; i < wordsArray.length; i += 1) {
    let wordSize = wordsArray[i].length;
    count[wordSize] |= 0;
    count[wordSize] += 1;
  }

  return count;
}