// Exercise 04

// Given an unordered array and the information that exactly one value in the array occurs twice 
// (every other value occurs exactly once), determine which value occurs twice. 
// Write a function that will find and return the duplicate value that is in the array.

function findDup(array) {
  function count(array, element) {
    return array.filter(x => x == element).length;
  }

  for (let i = 0; i < array.length; i += 1) {
    let element = array[i]
    if (count(array, element) > 1) return element;
  }

  return null;
}

let a = findDup([1, 5, 3, 1]);                                // 1

console.log(a);