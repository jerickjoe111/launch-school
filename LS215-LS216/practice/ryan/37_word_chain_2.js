// Let's update our previous word-chain definition. In this 2.0 version, 
// a word-chain is an array of words, where the next word is formed by either:

// Changing exactly one letter from the previous word.
// Adding or subtracting one letter.

// Examples
// isWordChain(["row", "crow", "crown", "brown", "brawn"]) ➞ true
// // add "c" to "row" to get "crow", "n" to get "crown", etc.

// isWordChain(["flew", "flaw", "flan", "flat", "fat", "rat", "rot", "tot"]) ➞ true

// isWordChain(["meek", "meet", "meat", "teal"]) ➞ false
// // "meat" => "teal" changes 2 letters (can only change 1).

// isWordChain(["run", "runny", "bunny"]) ➞ false
// // "run" => "runny" adds 2 letters (can only add 1).
/*

input: an array of words ( strings)

output: a boolean:

      true if this is a chain of words
      
chain of words: for every word in list, the next word can be formed by either:
                      - changing one letter from the previous word
                      - adding or substracting one letter


------------ **Types Involved** -------------

array

strings

------------ **Caveats & Questions** -------------

all strings non-empty ???

empty array => false

what about digits and other characters ???

single word array ???? => true

------------ Examples/Test Cases/Edge's ------------

// isWordChain(["row", "crow", "crown", "brown", "brawn"]) ➞ true
                        +           +    S          S  
// // add "c" to "row" to get "crow", "n" to get "crown", etc.

// isWordChain(["flew", "flaw", "flan", "flat", "fat", "rat", "rot", "tot"]) ➞ true
                           S        S       S     -     S       S     S
// isWordChain(["meek", "meet", "meat", "teal"]) ➞ false
                            S      S     S  S

// // "meat" => "teal" changes 2 letters (can only change 1).

// isWordChain(["run", "runny", "bunny"]) ➞ false
// // "run" => "runny" adds 2 letters (can only add 1).

[abc, ebc, nbc, anbc, anb] => true
S    S    +        -

[abc, ebc, bec] => true

[b, c, e, a] => true

[a, ab, abc, abcd] => true

[abc, abc, abc] => false


------------------ Strategies ------------------

two possibilites:

    - adding or substracting a letter 
          (difference in length by 1)
          (only 1 character different)
          (the rest of the characters are in the same order)

            check the difference is just 1 in length

            find smaller word,

            check if substring smaller word is present in greater word

    - changing a letter
          (words have the same length)
          (all characters are in the same place, but one):

              for every index pos. i

                if chars. at i in the two words are different,
                    add one to difference counter

              return counter <= 1

              helper:

for every word but the first one

    check if there is only one character difference

-------------------- Algorithm ---------------------

1. filter out inputs: empty array or a single non-string, return false
                      arrays of length 1, return true

2. for every word except the last one

        compare lenghts of current word with next one

        if same length ? :

              compare in mode B, return false if negative
        
        else ? :

              compare in mode A, return false if negative

3. return true

*/

const p = console.log

function isWordChain(wordChain) {
  // When words don't have the same length
  function formChainModeA(word1, word2) {
    if (Math.abs(word1.length - word2.length) > 1) return false;
    
    let [shortestWord, longestWord] = [word1, word2].sort((a, b) => Number(a.length) - Number(b.length));
    let replacement = longestWord.replace(new RegExp(`[^${shortestWord}]`), '')
    return replacement === shortestWord;
  }

  // When words have the same length
  function formChainModeB(word1, word2) {
    let differenceCounter = 0;

    [...word1].forEach((_, index) => {
      if (word1[index] !== word2[index]) differenceCounter += 1;
    })

    return differenceCounter === 1;
  }

  if (wordChain.length === 0 || wordChain.some(w => typeof w !== 'string')) return false;
  else if (wordChain.length === 1) return true;

  for (let i = 0; i < wordChain.length - 1; i += 1) {
    let currentWord = wordChain[i];
    let nextWord = wordChain[i + 1];
    if (currentWord.length !== nextWord.length) {
      if (!formChainModeA(currentWord, nextWord)) return false;
    } else {
      if (!formChainModeB(currentWord, nextWord)) return false;
    }
  }

  return true;
}


p(isWordChain(["row", "crow", "crown", "brown", "brawn"])); // true

// // add "c" to "row" to get "crow", "n" to get "crown", etc.

p(isWordChain(["flew", "flaw", "flan", "flat", "fat", "rat", "rot", "tot"])); // true

p(isWordChain(["meek", "meet", "meat", "teal"])); // false

// // "meat" => "teal" changes 2 letters (can only change 1).

p(isWordChain(["run", "runny", "bunny"])); // false
// // "run" => "runny" adds 2 letters (can only add 1).
