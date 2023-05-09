// Exercise 02

// Write a function that takes two arrays as arguments and returns 
// an array containing the union of the values from the two. 
// There should be no duplication of values in the returned array, 
// even if there are duplicates in the original arrays. 
// You may assume that both arguments will always be arrays.



function union(array1, array2) {
  return [...new Set([...array1, ...array2])];
}


console.log(union([1, 3], [1]));