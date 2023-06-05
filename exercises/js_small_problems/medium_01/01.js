// Exercise 01

// Write a function that rotates an array by moving the first 
// element to the end of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.
// Review the test cases below, then implement the solution accordingly.

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined; 
  else if (array.length === 0) return [];

  let copy = [...array];
  let buffer = copy.shift();
  copy.push(buffer);

  return copy;
}

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined; 
  else if (array.length === 0) return [];

  let output = [];
  let buffer = array[0];

  for (let i = 1; i < array.length; i += 1) {
    output.push(array[i]);
  }

  output.push(buffer);

  return output;
}


// [1, 2, 3]

// (1)

// [2, 3, 1]

// make copy of the array,
// shift element of the copyy and store it
// push stored element onto the copy

// return copy


// save first element of input array

// copy every element of the input array after the first into an empty array

// push saved value onto the output array

// return output array
console.log(
  rotateArray([7, 3, 5, 2, 9, 1]),      // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']),         // ["b", "c", "a"]
rotateArray(['a']),                   // ["a"]
rotateArray([1, 'a', 3, 'c']),        // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]),   // [[1, 2], 3, { a: 2 }]
rotateArray([]),                      // []

// return `undefined` if the argument is not an array
rotateArray(),                        // undefined
rotateArray(1),                       // undefined
)