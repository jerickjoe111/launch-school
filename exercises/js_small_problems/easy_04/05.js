// Exercise 05

// Write a function that combines two arrays passed as arguments, 
// and returns a new array that contains all elements from both array arguments, 
// with each element taken in alternation.

function interleave(array1, array2) {
  let output = [];

  for (let i = 0; i < array1.length; i += 1) {
    output.push(array1[i], array2[i]);
  }

  return output;
}