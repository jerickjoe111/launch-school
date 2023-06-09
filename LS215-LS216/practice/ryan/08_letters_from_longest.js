// Write a function that returns true if all the strings in an 
// array can be formed by using only the characters from the longest string.


// input: an array of strings

// output: a boolean

//         all the strings in the array can be formed using only the 
//         characters from the longest string


// Caveats:

// only one unique longest

// case sensitive??

// bad inputs??

// Examples:

// canForm(["mast", "manifest", "met", "fan"]) ➞ true

// canForm(["may", "master", "same", "reams"]) ➞ false

// canForm(["may", "same", "reams", "mastery"]) ➞ true

// Strategy:

// find longest word

// for every string in input array

//   - if string is equal to longest, skip

//   - for every char. in string:

//       - if there is a character that is not in longest word: RETURN FALSE
//         (longest.includes(char.))

// return true


// 1. find longest word

//   sort by length, get first

function canForm(list) {
  function occurrences(word, character) {
    let result = word.match(new RegExp(`${character}`, 'ig'));

    return result ? result.length : 0;
  }


  let sortedList = [...list].sort((a, b) => b.length - a.length);
  let longestWord = sortedList[0];
  for (let i = 1; i < sortedList.length; i += 1) {
    let currentWord = sortedList[i];
   
    for (let j = 0; j < currentWord.length; j += 1) {
      let character = currentWord[j];

      if (occurrences(longestWord, character) < occurrences(currentWord, character)) {
        return false;
      }
        
    }
  }

  return true;
}

console.log(
  canForm(["mast", "manifest", "met", "fan"]),
  canForm(["monument", "momento", "moment", "tome"]),
)

