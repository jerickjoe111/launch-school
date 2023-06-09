// Write a function that connects each previous word to the next word by the shared letters. 
// Return the resulting string (removing duplicate characters in the overlap) 
// and the minimum number of shared letters across all pairs of strings.

// More specifically, look at the overlap between the previous words ending letters and the
//  next word's beginning letters.

// join(["oven", "envier", "erase", "serious"]) ➞ ["ovenvieraserious", 2]

// join(["move", "over", "very"]) ➞ ["movery", 3]

// join(["to", "ops", "psy", "syllable"]) ➞ ["topsyllable", 1]

// // "to" and "ops" share "o" (1)
// // "ops" and "psy" share "ps" (2)
// // "psy" and "syllable" share "sy" (2)
// // the minimum overlap is 1

// join(["aaa", "bbb", "ccc", "ddd"]) ➞ ["aaabbbcccddd", 0]

// input: a list of strings


// output: a single string resulting of:

//             connecting each string to the next one by the shared letters (at the end),


//         and the minimum number of shared letters across all pairs of strings


// (["oven", "envier", "erase", "serious"]) ➞ ["ovenvieraserious", 2]

// ov[en]
//   [en]vier => ov[en]vier => ovi[er]
//                                [er]ase => oviera[se] 
//                                                 [se]rious => ovieraserious


// Strategies:

// find overlapping ending / overlapping beginning

// join using overlapping

// remove duplicate letters in overlapping

// store size of overlapping (size after or before removing repeated words????)



// init min. overlap size to Infinity

// init output string to first word in list

// for each word in list (current word) after the first

//     get next word

//     init overlap to ''

//     look for overlap in current word from the end
//     look for overlap in next word from the beginning :

//         from 1 to size of next word, i

//             if char at i from the end of current word
//             and char at i - 1 from the beginning is the same
            
//              add char at overlap

//             else (not the same chars)

//              break

//     remove repeated chars of the overlap

//     calculate size of the overlap and store size if size is smaller than stored size

//     add the next word - overlap size from the beginning to output string

function join(list) {
  function beginningSubstring(word, size) {
    return word.split('').slice(0, size).join('');
  }
  function endingSubstring(word, size) {
    return word.split('').slice(-size).join('');
  }

  let smallerOverlapSize = Infinity;
  let outputString = list[0];

  for (let i = 0; i < list.length - 1; i += 1) {
    let nextWord = list[i + 1];
    let overlap = '';
    let addToOutput = '';

    // Find overlap
    for (let overlapSize = nextWord.length; overlapSize > 0 ; overlapSize -= 1) {
      let finalSubstring = endingSubstring(outputString, overlapSize);
      let nextSubstring = beginningSubstring(nextWord, overlapSize);

      if (finalSubstring === nextSubstring ) {
        overlap = finalSubstring;
        addToOutput = nextWord.replace(overlap, '')
        break;
      }
    }
    if (!overlap) addToOutput = nextWord

    if (overlap.length < smallerOverlapSize) smallerOverlapSize = overlap.length;

    outputString += addToOutput;
  }

  return [outputString, smallerOverlapSize];
}


console.log(
  join(["aaa", "bbb", "ccc", "ddd"]), // ["aaabbbcccddd", 0])
  join(["to", "ops", "psy", "syllable"]), // ["topsyllable", 1])
  join(["happy", "python", "honey", "yelp", "plank", "lanky"]), // ["happythoneyelplanky", 1])
  join(["aab", "abcccd", "cdeeef", "effff"]), // ["aabcccdeeeffff", 2])
  join(["oven", "envier", "erase", "serious"]), // ["ovenvieraserious", 2])
  join(["move", "over", "very"]), // ["movery", 3])
  join(["abcde", "bcdefghi", "efghi", "fghij", "ghijklmnop"]), // ["a[bcde]fghijklmnop",      4]
)                                                       

// expected ["a[bcde]fghijklmnop",      4]

// got      ['abcdefghiefghijklmnop', 0 ]

// abcdefghi 
//     [efghi]
