// Write a function that takes a sorted array of integers as an argument, 
// and returns an array that includes all the missing integers (in order) 
// between the first and last elements of the argument.

// missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
// missing([1, 2, 3, 4]);                    // []
// missing([1, 5]);                          // [2, 3, 4]
// missing([6]);                             // []

// an array of integers, positive or negative of size > 0

// return:

// all missing numbers between integers from input array, sorted in ascending order

// if no numbers are missing, return empty array
// if input array is size === 1, return empty array

// [1, 3, 5]

// iteration 0 
//   current int. = 1
//   next int. in the array = 3

//   loop: sum = 2
// iteration 1
//   current int. 3
//   next int. in the array = 5

//   loop: sum = 4

// output array = [2, 4]

// for every integer in input array, from [0.. -2]

//   - initialize variable next integer

//   - if next integer in the array is the natural next integer, continue  

//   - else: 
//       - create a loop that:

//           - adds one to current integer
//           - pushes result of sum to output array
//           - if result + 1 === next integer, break from loop

// return sorted output array

function missing(array) {
  let output = [];
  for (i = array[0] + 1; i < array[array.length - 1]; i += 1) {
    if (!array.includes(i)) output.push(i);
  }

  return output.sort()
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []