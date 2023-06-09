// Given two strings, that may or may not be of the same length, 
// determine the minimum number of character deletions required 
// to make an anagram. Any characters can be deleted from either of the strings.

// makeAnagram("cde", "abc") ➞ 4
// Remove d and e from cde to get c.
// Remove a and b from abc to get c.
// It takes 4 deletions to make both strings anagrams.

// makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke") ➞ 30

// makeAnagram("showman", "woman") ➞ 2

// input: two strings (can be from different size)

// output: an integer: 
//             number of deletion that takes for BOTH strings to be anagrams

// anagrams:

// two words with the exact same characters, but in different order
  
// Caveats

// only letters??

// case insensitive??

// are two empty strings anagrams???


// Example:

// makeAnagram('carede', 'racerg') => 4
// makeAnagram('carede', 'racer') => 3
// makeAnagram('carede', 'race') => 2
// makeAnagram('cared', 'race') => 1
// makeAnagram('care', 'race') => 0

// Strategies:

// helper areAnagrams(word1, word2)

// convert into an Array,
// sort,
// back into a string

// compare

// azzcbed, yybdcea

// sort them

// abcdezz, abcdeyy

// compare char. by char.???????

// abcdezz, abcdeyy
// 0123456  0123456

// iterate through every char. from original string (longest)
// (compute longest with Math.max(both lengths))

// if equal, continue,
// if not equal, delete from word 1, check, then delete from word2, check..., 
//     add one to deletion counter per deletion

// original abzz abyyy

// copy     ab aby

// current i.: 4 (if it's greatest than copy length, convert to last index)
//            (1 )
// 0 a, a 
// 1 b, b
// 2 z, y,  
// 3 z, y




// Algorithm:

// get size of longest string

// longest string is a,

// short string is b,

// make copies of strings

// sort copies (helper)

// while both strings  are not the same:
      
//         if word a at i is not undefined:

//             delete char at i
//             add 1 to counter

//         if word b at i is not undefined

//             delete char at i
//             add 1 to counter

// to delete and compare =

// convert string to array
// delete char. at index position (using splice)
// convert array to string

function areAnagrams(word1, word2) {
  return word1.split('').sort().join('') === word2.split('').sort().join('');
}

function makeAnagram(word1, word2) {
  function occurrencesIn(word, character) {
    let result = word.match(new RegExp(`${character}`, 'ig'))
    return result ? result.length : 0;
  }

  function calculateDifference(word) {
    let uniques = [...new Set(Array.from(word))];
    let differenceCharacters = 0;
    for (let i = 0; i < uniques.length; i += 1) {
      let character = uniques[i];
      if (countedCharacters.includes(character)) continue;
      countedCharacters.push(character);
      let occurrencesInWord1 = occurrencesIn(word1, character);
      let occurrencesInWord2 = occurrencesIn(word2, character);
  
      if (occurrencesInWord1 !== occurrencesInWord2) {
        let difference = Math.abs(occurrencesInWord1 - occurrencesInWord2);
        differenceCharacters += difference;
      }
    }

    return differenceCharacters;
  }

  let countedCharacters = [];
  let deletions = calculateDifference(word1) + calculateDifference(word2);

  return deletions;

}

console.log(
  makeAnagram('arar', 'ari'), // 3
  makeAnagram('carede', 'racerg'), // => 4
makeAnagram('carede', 'racer'), // => 3
makeAnagram('carede', 'race'), // => 2
makeAnagram('cared', 'race'), // => 1
makeAnagram('care', 'race'), // => 0
)
