// Given an array of strings and an original string, 

// write a function to output an array of boolean values 

// - true
// if the word can be formed from the original word by swapping two letters only once 

// and false otherwise.


// validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE")
// ➞ [true, true, false, false]

// // Swap "A" and "B" from "ABCDE" to get "BACDE".
// // Swap "A" and "E" from "ABCDE" to get "EBCDA".
// // Both "BCDEA" and "ACBED" cannot be formed from "ABCDE" using only a single swap.

// validateSwaps(["32145", "12354", "15342", "12543"], "12345")
// ➞ [true, true, true, true]

// validateSwaps(["9786", "9788", "97865", "7689"], "9768")
// ➞ [true, false, false, false]

// input: an array of strings, and an original string


// output: an array of booleans, one for each string in input list, 
//         true if:
//         with just to letter swaps, the string can be rearranged into the original


// Caveats:

// only unique characters?

// bad inputs??

// case ???

// Example:

// [abcd, abdc]   bacd => true, true

// bacd

// bacd


// Strategies:

// helper, string copy

// extract common part OR

// extract common chars. inddeces OR RANGES OF INDECES????????

// and swap only letters in non-shared indeces ???? 

// ["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE"
// [ true,    true,    false,   false ]

// ORIGINAL = ABCDE
//            01
// CURRENT  = BACDE
//            01
// SHARED INDECES = 2, 3, 4

// helper = is valid word

// for each word in list

//   set counter to 0

//   for each character in word at index i

//     if counter is more than 2, return false

//     compare char at i from current word with char at i from original

//     if they are not the same

//       add one to the displaced letters counter

//   if counter is more than 2, return false

// return true

// "9768"

// "9786", true   2
// "9788", false  
// "97865, false 
// "7689", false  4

function validateSwaps(list, original) {
  function sameCharacters(word) {
    return word.split('').sort().join('') === original.split('').sort().join('');
  }
  function isValid(word) {
    if (!sameCharacters(word)) return false;

    let counter = 0;
    for (let i = 0; i < word.length; i += 1) {
      if (counter > 2) return false;
      let currentWordCharacter = word[i];
      let originalCharacter = original[i];
      if (currentWordCharacter !== originalCharacter) counter += 1;
    }
    return counter <= 2;
  }

  return list.map(word => isValid(word));
}


console.log(
  // validateSwaps(['BACDE', 'EBCDA', 'BCDEA', 'ACBED'], 'ABCDE'), // [true, true, false, false])
  // validateSwaps(['32145', '12354', '15342', '12543'], '12345'), // [true, true, true, true])
  // validateSwaps(['9786', '9788', '97865', '7689'], '9768'), // [true, false, false, false])
  // validateSwaps(['123', '321', '132', '13', '12'], '213'), //  [true, false, false, false, false])
  validateSwaps(['123', '1234', '1235'], '12'), // [false, false, false])
  validateSwaps(['123', '123', '123'], '133'), // [false, false, false])
  validateSwaps(['132', '321', '213'], '123'), // [true, true, true])
)

// validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE")
// ➞ [true, true, false, false]

// // Swap "A" and "B" from "ABCDE" to get "BACDE".
// // Swap "A" and "E" from "ABCDE" to get "EBCDA".
// // Both "BCDEA" and "ACBED" cannot be formed from "ABCDE" using only a single swap.

// validateSwaps(["32145", "12354", "15342", "12543"], "12345")
// ➞ [true, true, true, true]

// validateSwaps(["9786", "9788", "97865", "7689"], "9768")
// ➞ [true, false, false, false]