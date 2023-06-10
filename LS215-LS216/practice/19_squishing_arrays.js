// Write a function that squishes an array from the left or the right.

// Examples
// squish([1, 2, 3, 4, 5], "left")
// ➞ [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]

// squish([1, 2, 3, 4, 5], "right")
// ➞ [[1, 2, 3, 4, 5], [1, 2, 3, 9], [1, 2, 12], [1, 14], [15]]

// squish([1, 0, 2, -3], "left")
// ➞ [[1, 0, 2, -3], [1, 2, -3], [3, -3], [0]]

// squish([1, 0, 2, -3], "right")
// ➞ [[1, 0, 2, -3], [1, 0, -1], [1, -1], [0]]

// input: an array of numbers, a string (direction)

// output: an array of subarrays, each resulting from the squishing process.


// squished array;

//   - an array with one less element
//   - if direction is left:
//     - the first element disappears, and it is added to the value of the second element
//   - if direction is right:
//     - the last element disappears, and it is added to the value of the one before the last

// Caveats:

// We should include the original

// empty/bad inputs: return empty array

// Examples:

// [1, 2, 3, 3, 2], left
// [3, 3, 3, 2]
// [6, 3, 2]
// [9, 2]
// [11]

// [1, 2, 3, 3, 2], right
// [1, 2, 3, 5]
// [1, 2, 8]
// [1, 10]
// [11]

// Strategies:

// helper
// squisher(array, direction), returns squished array

// for each element in the array 

//   add squished array from the last array in output list to output list

// return output list


// squisher:

// left:

// [1, 2, 3]

// save first element of the array

// save the array after the first from 1 to -1 indeces (splice)

// add the saved element to the first element of the sliced array

// 1,

// [3, 3]

// right:

// [1, 2, 3]

// save last element

// save the array from the first element up to the one before the last (-2)

// add the saved element to the last element in the sliced array

// 3

// [1, 5]

// main algorithm :

// init. output list

// save first element from input list to output list

// do length of the input array - 1 times:

//   - squish the last array from the output list

//   - add the squished array to the output list

// return the output list

function solution(array, direction = 'left') {
  function validDirection(direction) {
    return direction === 'left' || direction === 'right';
  }

  function squish(array, direction) {
    let bufferIndex = direction === 'left' ? 0 : array.length - 1;
    let buffer = array[bufferIndex];
    let sliced = direction === 'left' ? array.slice(1) : array.slice(0, -1);
    let slicedIndex = direction === 'left' ? 0 : sliced.length - 1;
    sliced[slicedIndex] += buffer;
    return sliced;
  }

  direction = direction.toLowerCase();

  let output = [];

  if (array.length === 0 || !array || !validDirection(direction)) return output;

  output.push(array);

  for (let i = 0; i < array.length - 1; i += 1) {
    output.push(squish(output[output.length - 1], direction));
  }

  return output;
}


console.log(
  // solution([1, 2, 3, 4, 5], "right"),
  solution([1, 0, 2, -3], "ljil"),
)