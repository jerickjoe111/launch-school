// Create a function that returns an array that 
// expands by 1 from 1 to the value of the input, 
// and then reduces back to 1. 

// Items in the arrays will be the same as the length of the arrays.

// diamondArrays(1) ➞ [[1]]

// diamondArrays(2) ➞ [[1], [2, 2], [1]]

// diamondArrays(5) ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]
/*


------------ **Types Involved** -------------

arrays (only output)

numbers 


------------ **Caveats & Questions** -------------

bad input ???

  only equal or greater than 1

  non numbers or less than 1, Infinity or NaN, return []

------------ Examples/Test Cases/Edge's ------------

diamond(1) > [[1]]
diamond(2) > [[1], [2, 2,] [1]]
diamond(3) > [[1], [2, 2], [3,3,3], [2,2] [1]]

------------------ Strategies ------------------
two loops ???

helper, add array with just one number (size and content)
HUNCH ???
{

}

-------------------- Algorithm ---------------------

1. for each number i from 0 to input number,

    - add subarray with helper, to output array

2. for each number i from input number - 1 to 1, 

    - add subarray with helper, to output array

3.

4.

5.

*/

function createArray(number) {
  return new Array(number).fill(number);
}

function diamondArrays(number) {
  function validInput() {
    if (!number || typeof number !== 'number' || number < 1 || Number.isNaN(number)) {
      return false;
    } else 
    return true;
  }

  function createArray(number) {
    return new Array(number).fill(number);
  }
  let output = [];
  if (!validInput()) return output;

  for (let i = 1; i <= number; i += 1) {
    output.push(createArray(i));
  }
  for (let i = number - 1; i >= 1; i -= 1) {
    output.push(createArray(i))
  }

  return output;
}

console.log(
  diamondArrays('')
)