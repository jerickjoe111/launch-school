// Given a number n, return an array containing several arrays. 
// Each array increments in size, from range 1 to n inclusive, contaning its length as the elements.

// Examples
// pyramidArrays(1) ➞ [[1]]

// pyramidArrays(3) ➞ [[1], [2, 2], [3, 3, 3]]

// pyramidArrays(5) ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]

// Notes
// n will be a positive integer.

// input: a positive integer (not zero???, can be a string???)

// output: a 2d array that:

// for each number between 1 and input integer, 

//   - the output array contains a subarray,

//         that subarray size is equal to the number,

//         that subarray is filled with that number,

Strategies:

// helper, create subarray:
  // fill(), fills an array with argument

  // new Array(), creates an array of argument length,

// 2. set i to 1, while i <= input integer, add 1 every iteration

// proto algo:

// 1. set counter to 1,

// 2. for 1 to n number of times, current integer i

//     -  init. subarray of i length, fill it with integers i
//     - add subarray to output array

// 3. return output array

function pyramidArrays(n) {
  function subarray(n) {
    return new Array(n).fill(n);
  }

  let pyramid = [];

  for (let i = 1; i <= n; i += 1) {
    pyramid.push(subarray(i));
  }

  return pyramid;
}


console.log(
  pyramidArrays(1),
  pyramidArrays(2),
  pyramidArrays(3),
  pyramidArrays(4),
)