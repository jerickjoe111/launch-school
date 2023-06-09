// Write a function that groups words by the number of capital 
// letters and returns an array of object entries whose keys 
// are the number of capital letters and the values are the groups.

// grouping(["HaPPy", "mOOdy", "yummy", "mayBE"]) ➞ [
//   [0, ["yummy"]],
//   [2, ["mayBE", "mOOdy"]],
//   [3, ["HaPPy"]]
// ]

// grouping(["eeny", "meeny", "miny", "moe"]) ➞ [
//   [0, ["eeny", "meeny", "miny", "moe"]]
// ]

// grouping(["FORe", "MoR", "bOR", "tOR", "sOr", "lor"]) ➞ [
//   [0, ["lor"]],
//   [1, ["sOr"]],
//   [2, ["bOR", "MoR", "tOR"]],
//   [3, ["FORe"]]
// ]

// input: an array of words

// output: an array of subarrays: [number of capital letters, [list of words that have that number of capital letters]]


// Caveats:

// The object entries have to be sorted by the number of capital letters.
// The groups will be arrays of all words sharing the same number of capital letters.
// The groups have to be sorted alphabetically (ignoring case).
// Words will be unique.

// Strategies:

// init an object called groups

// for every word in input list

//     - count capital letters

//     - if there's no property of object groups with a property equal to the count:

//           - create property with an empty array as value

//     - add word to the correspondent array in groups object if theres not an equal word there already

//     - sort that array case-insensitively

// convert object into an array of entries [subarrays]

// sort array of entries by the array first element (the capital letters count)

// return that array

// helpers:

// count capital letters

// sort (case insensitively)

// sort by group (ascending)

function grouping(words) {
  function capitalLetters(word) {
    let result = word.match(/[A-Z]/g)?.length;

    return result || 0;
  }

  function sortCaseInsensitive(array) {
    return array.sort((a, b) => {
      a = a.toLowerCase();
      b = b.toLowerCase();
  
      if (a < b) return - 1;
      else if (a > b) return 1;
      else return 0;
    });
  }

  let groups = {};

  for (let i = 0; i < words.length; i += 1) {
    let word = words[i];
    let capitalsCount = capitalLetters(word);
    if (!groups[capitalsCount]) groups[capitalsCount] = [];
    
    if (!groups[capitalsCount].includes(word)) groups[capitalsCount].push(word);

    sortCaseInsensitive(groups[capitalsCount]);
  }

  return Object.entries(groups).map(group => [Number(group[0]), group[1]]);
}

console.log(
// grouping(["HaPPy", "mOOdy", "yummy", "mayBE"]), // ➞ [
//   [0, ["yummy"]],
//   [2, ["mayBE", "mOOdy"]],
//   [3, ["HaPPy"]]
// ]

// grouping(["eeny", "meeny", "miny", "moe"]), // ➞ [
//   [0, ["eeny", "meeny", "miny", "moe"]]
// ]

grouping(["FORe", "MoR", "bOR", "tOR", "sOr", "lor"]), // ➞ [
//   [0, ["lor"]],
//   [1, ["sOr"]],
//   [2, ["bOR", "MoR", "tOR"]],
//   [3, ["FORe"]]
// ]
)