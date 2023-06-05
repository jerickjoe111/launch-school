// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// This limits the words you can spell with the blocks to only those words that 
// do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument, and returns true 
// if the word can be spelled using the set of blocks, or false otherwise. 
// You can consider the letters to be case-insensitive when you apply the rules.

// isBlockWord('BATCH');      // true
// isBlockWord('BATCHB');      // false
// isBlockWord('BATCHG');      // false
// isBlockWord('BUTCH');      // false
// isBlockWord('jest');       // true
// isBlockWord('');       // true

// input: a string

// output: a boolean (string does not use two letters of a single block)

//         (a string can only use one letter per block)


// caveats:

//   case insensitive 

//   can use more than one block per string


// Strategies:

// check every letter in input string

// for every letter in input string:

//   - check if letter belongs to a block:

//       - if it does, check if the block has been used, it it was used, return false;

//       - if it does, check if the word, includes the other letter in word

//           - if it does, return false


// return true

// b a t c h

// is current letter in one of the blocks (subarrays) ?

// has the block been used? array of used blocks 

// does the input string include letters of this block that are not equal to the current letter?

// b u t c h

// b:o

// u:h

// helpers:

// string and block ==> true if string includes only one of the letters of block

// convert block to string in used blocks

function isBlockWord(string) {
  const BLOCKS = [
    ['B', 'O'],   ['X', 'K'],   ['D', 'Q'],   ['C', 'P'],   ['N', 'A'],
    ['G', 'T'],   ['R', 'E'],   ['F', 'S'],   ['J', 'W'],   ['H', 'U'],
    ['V', 'I'],   ['L', 'Y'],   ['Z', 'M'],
  ]

  function letterBlock(letter) {
    return BLOCKS.find(block => block.includes(letter));
  }

  function usesTwoLetters(letter, block, string) {
    let forbiddenLetter = block.find(blockLetter => blockLetter != letter);
    return string.includes(forbiddenLetter);
  }

  string = string.toUpperCase();

  let usedBlocks = []; 

  for (let i = 0; i < string.length; i += 1) {
    let letter = string[i];
    let usedBlock = letterBlock(letter);
    if (usedBlocks.includes(String(usedBlock))) return false;
    else if (!usedBlocks.includes(String(usedBlock))) {
      usedBlocks.push(String(usedBlock));
      if (usesTwoLetters(letter, usedBlock, string)) return false;
    }
  }

  return true;
}

console.log(
  isBlockWord('BATCH'),      // true
  isBlockWord('BATCHB'),      // false
  isBlockWord('BATCHG'),      // false
  isBlockWord('BUTCH'),      // false
  isBlockWord('jest'),       // true
  isBlockWord(''),       // true
  isBlockWord('XRLKEY'),       // false
  isBlockWord('JCNZFDXLRVGB'),       // true
  isBlockWord('JCNZFDXLRVVGB'),       // false
)
