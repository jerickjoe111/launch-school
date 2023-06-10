// You are given a table, in which every key is a stringified number, and the
//  value is an array of characters, e.g.

// {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }

// Create a function that returns a table (object) with the same keys, but each
// character should appear only once among the value-arrays, e.g.

// {
//   "1": ["C"],
//   "2": ["A", "B", "D"],
// }

// Rules
// Whenever two keys share the same character, they should be compared numerically,
// and the larger key will keep that character. That's why in the example above the
// array under the key "2" contains "A" and "B", as 2 > 1.
// If duplicate characters are found in the same array, the first occurance should be kept.

// Example 1
// input = {
//   "1": ["C", "F", "G"],
//   "2": ["A", "B", "C"],
//   "3": ["A", "B", "D"],
// }

// output = {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["A", "B", "D"],
// }

// Example 2
// input = {
//   "1": ["A"],
//   "2": ["A"],
//   "3": ["A"],
// }

// output = {
//   "1": [],
//   "2": [],
//   "3": ["A"],
// }

// Example 3
// input = {
  //   "11": ["P", "R", "S", "D"],
  //   "53": ["L", "G", "B", "C"],
  //   "236": ["L", "A", "X", "G", "H", "X"],
  //   "432": ["A", "A", "B", "D"],
// }

// output = {
//   "11": ["P", "R", "S"],
//   "53": ["C"],
//   "236": ["L", "X", "G", "H"],
//   "432": ["A", "B", "D"],
// }

// input: a table object with

//   property names: numbers (as strings)
//            values: array of letters

// output: a table object with,

//           names: numbers (as strings)
//           values: array of unique letters but,
//                       for each letter in array,
//                           if the letter appears in other property value,
//                             if that property name is greater than current name,
//                             don't include in this property value.

// Caveats:

// only uniques in output

// case insensitive,

// key order does not matter

// Bad inputs ???

// empty arrays as values ??? does not matter


// Example:

// 2: B C D
// 1: A B C
// 3: B Z Z

// 1:
// 2: D
// 3: BZZ

// Stregies:

// helpers: remove, uniques

// nested iteration:

// for every property in object,

//   for every letter in property array:

//       if the letter appears in other property array: (compare to every other property but this one)

//           get that propety key

//           compare that property key with current key

//           if current key is < that other key, dont add letter to array

//       remove uniques from array


function duplicates(tableObject) {
  function uniques(array) {
    return [...new Set(Array.from(array))];
  }

  if (!tableObject || typeof tableObject !== 'object') return null;

  let output = {};

  for (let currentKey in tableObject) {
    output[currentKey] = [];

    // For every letter in input object
    for(let i = 0; i < tableObject[currentKey].length; i += 1) {
      let letter = tableObject[currentKey][i];
      let toInclude = true;

      // Compares to other keys
      for (let otherKey in tableObject) {
        if (otherKey === currentKey) continue;

        if (tableObject[otherKey].includes(letter) && (Number(otherKey) > Number(currentKey))) {
          toInclude = false
        }
      }

      if (toInclude) output[currentKey].push(letter)
    }

    output[currentKey] = uniques(output[currentKey]);
  }
  

  return output;
}

console.log(
  // duplicates({
  //   "1": ["C", "F", "G"],
  //   "2": ["A", "B", "C"],
  //   "3": ["A", "B", "D"],
  // }),

  // duplicates({
  //   "1": ["A"],
  //   "2": ["A"],
  //   "3": ["A"],
  // }),
  duplicates({
      "11": ["P", "R", "S", "D"],
      "53": ["L", "G", "B", "C"],
      "236": ["L", "A", "X", "G", "H", "X"],
      "432": ["A", "A", "B", "D"],
  }),
)

// Example 1
// input = 
// {
//   "1": ["C", "F", "G"],
//   "2": ["A", "B", "C"],
//   "3": ["A", "B", "D"],
// }

// output = 
// {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["A", "B", "D"],
// }

// // Example 2
// // input = 
// {
//   "1": ["A"],
//   "2": ["A"],
//   "3": ["A"],
// }

// // output = 
// {
//   "1": [],
//   "2": [],
//   "3": ["A"],
// }
