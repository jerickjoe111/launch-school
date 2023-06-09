// Given an array of integers, nums, 
// return the third largest number in the array. 
// If the third largest number does not exist, return the greatest number.

// You are not allowed to sort the array.

// thirdMax([3, 2, 1]); // 1

// input: an array of integers

// output: the third greatest integer

// Cases:


// remove duplicates, 

// then cases

// array of 3 elements: return min

// array of 0 elements: return undefined

// array of 2 elements: return max

// array of 1 element; return max

// then


// make copy of original array

// delete max from that array, and store in not allowed integers
// delete max from that array, and store in not allowed integers

// return max from copy of that array

// Examples:


// [0,0,0] => 0
// [1, 3, 2] => 1
// [] => undefined
// [4, 3, 2, 1] => 2

function thirdMax(array) {
  function filterInvalidNumbers(array) {
    return array.filter(element => {
      return (element !== undefined && element !== null && !isNaN(element) && element !== Infinity)
    })
  }

  array = filterInvalidNumbers([...new Set(array)]);

  if (!Array.isArray(array) || array.length === 0) return undefined;
  else if (array.length === 2 || array.length === 1) return Math.max(...array);
  else if (array.length === 3) return Math.min(...array);
  else {
    for (let i = 0; i < 2; i += 1) {
      let indexToDelete = array.indexOf(Math.max(...array));
      array.splice(indexToDelete, 1);
    }
  }

  return Math.max(...array);
}

console.log(
  thirdMax([0, 0, 0]),
  thirdMax([1, 1, 1]),
  thirdMax([1, 3, 1]),
  thirdMax([1, 3, 2]),
  thirdMax([2, 3, 4, 1]),
)