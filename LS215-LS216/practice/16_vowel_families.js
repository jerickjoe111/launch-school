// Write a function that selects all words that have all the same vowels (in any order and/or number) 
// as the first word, including the first word.

// sameVowelGroup(["toe", "ocelot", "maniac"]) ➞ ["toe", "ocelot"]

// sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]) ➞ ["many"]

// sameVowelGroup(["hoops", "chuff", "bot", "bottom"]) ➞ ["hoops", "bot", "bottom"]

// input: a list of words

// output: a list of words that have the exact same vowels as the first word, but in any order or number

// Caveats;

// any order

// any number

// empty strings???

// empty input???

// case sensitive???

// what if the first word does not have any vowel???

// add first word in any case


// Strategy:


// extract needed vowels

// convert needed vowels in regexp

// test each char against that vowel


// for every word in list

//   for every character in word

//       skip if it's not a vowel

//       if it's a vowel that is not in needed vowels, break (continue to next word)

//       add word to output list


// return output list

function sameVowelGroup(list) {
  function extractNeededVowels(word) {
    let vowels = word.match(/[aeiou]/ig).join('');
    return new RegExp(`[${vowels}]`, 'i');
  }

  let output = [list[0]];
  let neededVowels = extractNeededVowels(list[0]);
  for (let i = 1; i < list.length; i += 1) {
    let word = list[i];
    let toOutput = true
    for (let j = 0; j < word.length; j += 1) {
      let character = word[j];
      if (!/[aeiou]/i.test(character)) continue;

      if (!neededVowels.test(character)) {
        toOutput = false;
        break;
      }
    }

    if (toOutput) output.push(word)
  }

  return output;
}

console.log(
sameVowelGroup(["a", "aa", "ab", "abc", "aaac", "abe"]), // ["a", "aa", "ab", "abc", "aaac"])
)