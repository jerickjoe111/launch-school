// Create a function that takes three arrays and returns one array where 
// all passed arrays are combined into nested arrays.

// These arrays should be combined based on indexes: the first 
// nested array should contain only the items on index 0, the second array on index 1, and so on.

// If any array contains fewer items than necessary, supplement the missing item with "*".

// combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"]) ➞ 
    
//              [[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

// combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]) ➞ 
//              [[1, 4, 7], [2, 5,  8], [3, 6, 9]]

// combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"]) 
//           ➞ [["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]


// input: three arrays (always???)

// output: 2d array: array of subarrays, resulting from combining all input arrays:

// how to combine:

//   first, all elements on index 0 of all input arrays

//   second, all elements on index 1 of all input arrays

//   third, all elements on index 2 of all input arrays

// Caveats!

// if no element, fill with '*'

// every time, output array, contains 3 subarrays, of length 3,

// Examples:

// combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"]) ➞ 
//              [[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

// combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]) ➞ 
//              [[1, 4, 7], [2, 5,  8], [3, 6, 9]]

// combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"]) 
//           ➞ [["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]


// ([1, 2, 3],[4],[4, 6]) => [1, ]

// index 0 [1, 4, 4]

// index 1 [2, *, 6]

// index 2 [3, *, *]

// Strategies: 

// proto algo.:

// init 2d arrays with empty subarrays

// nested interation i, j (from 0 to 2) (index position)

// i = subarray in output array (000, 111, 222)

// j = index position of elements i from input array j (012, 012, 012)

// get data from suba array j

// if no data, reassign to '*' (default value)

// add it to subarray i

// ([1, 2, 3],[4],[4, 6]) => [1, ]

// index 0 [1, 4, 4]

// index 1 [2, *, 6]

// index 2 [3, *, *]

//    0   1   2
// [ [1, 4, 4] [ ] [ ] ]

// i 0 (output subarray position, also, index of elements to be pushed onto subarrays of output array)

//  j ( subarrays from input arrays, from which elements will be pushed onto output arrays)

  

//  i 0
//  j 0

//  i 0
//  j 1

//  i 0
//  j 2


function combineArrays(array1, array2, array3) {
  function extractElement(array, indexPosition) {
    const DEFAULT_VALUE = '*'
    return array[indexPosition] ?? DEFAULT_VALUE
  }

  let inputArray = [array1, array2, array3];

  let outputArray = [[], [], []];
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      let element = extractElement(inputArray[j], i)
      outputArray[i].push(element);
    }
  }

  return outputArray;
}


// combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"]) ➞ 
//              [[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

// combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]) ➞ 
//              [[1, 4, 7], [2, 5,  8], [3, 6, 9]]

// combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"]) 
//           ➞ [["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]

console.log(
  combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"]),
  // combineArrays([1, 2, 3],[4],[4, 6]),
  // combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]),
  // combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"]),
)
