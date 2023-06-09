// A distinct string is a string that is present only once in an array.

// Given an array of strings, arr, and an integer, k, 
// return the kth distinct string present in arr. 
// If there are fewer than k distinct strings, return an empty string "".

// Note that the result string is the one encountered earliest in the array.

// distinctString(["d","b","c","b","c","a"], 2); // "a"

// input: an array of strings (input array), and an integer k


// output: a string (the kth distinct string in input array)


// distinct string: a string that is present only once


// Caveats:

// case is not important (but the string should return as it is in the input array)
//                        -- original case --

// Example:

// distinctString(["d","b","c","b","c","a"], 2); // "a"
//                  D                   D
//                  1                   2


// Strategies:

// helper isDistinct(list, the string)

//   for every string in list,

//       (compare lowec. to lowerc.)
//       return false if  string(lowercase) is equal to string in list(lowecase)

// proto algo.:

//   is string distinct?

//   if yes, add one to counter

//     and if counter is equal to integer k, return string

//   if no, continue

function distinctString(list, k = 1) {
  function isDistinct(list, string) {
    let counter = 0
    for(let i = 0; i < list.length; i += 1) {
      if (list[i].toLowerCase() === string.toLowerCase()) counter += 1;
    }

    return counter === 1;
  }

  let distinctCounter = 0;
  for (let i = 0; i < list.length; i += 1) {
    let string = list[i];
    if (typeof string !== 'string' || !string) continue;

    if (isDistinct(list, string)) {
      distinctCounter += 1;
      if (distinctCounter === k) return string;
    }
  }

  return '';
}

// distinctString(["d","b","c","b","c","a"], 2); // "a"

let list = ["d","b", 1, "c","b","c","a"]

console.log(
  distinctString(list, 2)
)

