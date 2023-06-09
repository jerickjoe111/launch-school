// Write a function that returns the longest non-repeating substring 
// for a string input.

// // longestNonrepeatingSubstring("abcabcbb") ➞ "abc"

// longestNonrepeatingSubstring("aaaaaa") ➞ "a"

// longestNonrepeatingSubstring("abcde") ➞ "abcde"

// longestNonrepeatingSubstring("abcda") ➞ "abcd"

// If multiple substrings tie in length, return the one which occurs first.


// input: a string

// output: a string (longest substring with no repeated chars.)

// Caveats!

// if two substrings have the same length, return the one that occurs first

// any characters??

// case sensitive??

// Example:

// '12345111' => '12345'

// Strategies:

// nested iteration

// array for seen letters

// variable for longest non-repeated substring found

// for every i between 0 and the string length

//   - init substring to input string char at i

//   - add char to seen letters

//   - for every j between i + 1 and string length

//       if string[j] is not seen:

//           - add char to substring

//           - add char to seen
      
//       if string[j] is seen

//           - clean array of seen
          
//           - if the current substring longer than saved substring (longest found)

//               - save substring as longest seen

//           - continue to next i


// abcdd  i: 1 j; 2 

// seen []

// longest found 'abcd'

// current subst abcd
          

function solution(string) {
  let longestSubstring = '';
  
  for (let i = 0; i < string.length; i += 1) {
    let seenCharacters = [];
    let currentSubstring = string[i];
    seenCharacters.push(string[i]);

    for (let j = i + 1; j < string.length; j += 1) {
      let nextCharacter = string[j];
      if (!seenCharacters.includes(nextCharacter)) {
        currentSubstring += nextCharacter;
        seenCharacters.push(nextCharacter);
      } else break;
    }

    if (currentSubstring.length > longestSubstring.length) {
      longestSubstring = currentSubstring;
    }
  }

  return longestSubstring;
}

console.log(
  solution('abcd'), // abcd
  solution('abaaaaaaaaaa'), // abcd
)