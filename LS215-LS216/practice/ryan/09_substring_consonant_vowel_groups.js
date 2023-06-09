// // Write two functions:

// // One to retrieve all unique substrings that start and end with a vowel.
// // One to retrieve all unique substrings that start and end with a consonant.
// // The resulting array should be sorted in lexicographic ascending order 
// // (same order as a dictionary).

// // Remember the output array should have unique values.
// // The word itself counts as a potential substring.
// // Exclude the empty string when outputting the array.

// getVowelSubstrings("apple")
// ➞ ["a", "apple", "e"]

// getVowelSubstrings("hmm") ➞ []

// getConsonantSubstrings("aviation")
// ➞ ["n", "t", "tion", "v", "viat", "viation"]

// getConsonantSubstrings("motor")
// ➞ ["m", "mot", "motor", "r", "t", "tor"]

// input: a string

// output: a list of substrings

//         a list of substrings that begin and end with a vowel

//         a list of substrings that begin and end with a consonant


// Caveats!


// size 1 strings allowed

// if not substring found return empty list

// the word itself counts as potential substring

// sort words lexicographically ascending order

// not repeated substrings


// Examples

// apple => 

// vowelSubstrings: a, e, apple
// consonantSubstrings: p, pp, ppl, pl, l

// Strategies:

// isVowelSubstring()
// is 0 vowel ??
// is last index vowel ??

// isConsonantSubstring()
// is 0 consonant ??
// is last index consonant ??


// getting substrings:

// nested iteration:

// i , 0 to last

//   init current substring to char at i position of input string

//   if it is consonant/ vowel substring and not included in output list? add to list

//   j , i + 1 to last

//     add one char to current

//     is consonant/vowel subs. and substring not in output list? add to list


// end, sort substrings

// apple  i 1 j 2

// current ap

// list [a, apple, e]

function getVowelSubstrings(string) {
  function isVowelSubstring(string) {
    return /[aeiou]/i.test(string[0]) && /[aeiou]/i.test(string[string.length - 1]);
  }

  let output = [];

  for (let i = 0; i < string.length; i += 1) {
    let currentSubstring = ''
    for (let j = i; j < string.length; j += 1) {
      currentSubstring += string[j];
      if (isVowelSubstring(currentSubstring) && !output.includes(currentSubstring)) {
        output.push(currentSubstring)
      }
    }
  }

  return output.sort();
}

function getConsonantSubstrings(string) {
  function isConsonantSubstring(string) {
    return /(?:(?![aeiou])[a-z])/gi.test(string[0]) && 
      /(?:(?![aeiou])[a-z])/gi.test(string[string.length - 1]);
  }

  let output = [];

  for (let i = 0; i < string.length; i += 1) {
    let currentSubstring = ''
    for (let j = i; j < string.length; j += 1) {
      currentSubstring += string[j];
      if (isConsonantSubstring(currentSubstring) && !output.includes(currentSubstring)) {
        output.push(currentSubstring)
      }
    }
  }

  return output.sort();
}

console.log(
  getVowelSubstrings('apple'),
  getConsonantSubstrings('apppa'),
  getVowelSubstrings("hmm"),
  getConsonantSubstrings("aviation"),
  getConsonantSubstrings("motor"),
)

// getVowelSubstrings("apple")
// ➞ ["a", "apple", "e"]

// getVowelSubstrings("hmm") ➞ []

// getConsonantSubstrings("aviation")
// ➞ ["n", "t", "tion", "v", "viat", "viation"]

// getConsonantSubstrings("motor")
// ➞ ["m", "mot", "motor", "r", "t", "tor"]