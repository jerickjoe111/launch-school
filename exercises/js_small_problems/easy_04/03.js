// Exercise 03

// Write a function that takes an array as an argument and returns an array that 
// contains two elements, each of which is an array. Put the first half of the 
// original array elements in the first element of the return value, 
// and put the second half in the second element. 
// If the original array contains an odd number of elements, 
// place the middle element in the first half array.


function halvsies(array) {
  let middleIndex = array.length % 2 == 0 ? array.length / 2 : Math.floor(array.length / 2) + 1;
  // return middleIndex;
  return [array.slice(0, middleIndex), array.slice(middleIndex)];
}

console.log(halvsies([]))