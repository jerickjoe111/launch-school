// Write a function that moves all the zeroes to the end of an array. 
// Do this without returning a copy of the input array.

// Examples
// zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) ➞ [1, 2, 4, 5, 0, 0, 0]

// zeroesToEnd([0, 0, 2, 0, 5]) ➞ [2, 5, 0, 0, 0]

// zeroesToEnd([4, 4, 5]) ➞ [4, 4, 5]

/*

input: an array of elements

output: the same array, mutated,
        with all zeroes at the end of the array


------------ **Types Involved** -------------

any value, but 0 numbers have to be moved

also 0 as strings ????


------------ **Caveats & Questions** -------------

empty inputs ???

arrays with no zeroes ???

------------ Examples/Test Cases/Edge's ------------

[1,0,2,0,3] => [1,2,3,0,0]
[] => []

------------------ Strategies ------------------

HUNCH ???
{
use while loop ??
}

-------------------- Algorithm ---------------------

1. find number of zeroes in array

2. remove all zeroes from array

3. add as many zeroes to the back of the array as needed

4. return original array, mutated

*/

function zeroesToEnd(array) {
  let zeroes = 0
  let i = 0;
  while (i < array.length) {
    if (array[i] === 0) {
      zeroes += 1;
      array.splice(i, 1);
    } else i += 1;
  }

  for (let i = 0; i < zeroes; i += 1) {
    array.push(0);
  }

  return array;
}