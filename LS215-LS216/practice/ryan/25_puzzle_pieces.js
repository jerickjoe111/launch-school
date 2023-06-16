// Write a function that takes two arrays and adds the 
// first element in the first array with the first element in the second array, 
// the second element in the first array with the second element in the second array, 
// etc, etc. 

// Return true if all element combinations add up to the same number. 

// Otherwise, return false.

// Examples
// puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]) ➞ true
// // 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// // Both arrays sum to [5, 5, 5, 5]

// puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]) ➞ true

// puzzlePieces([1, 2], [-1, -1]) ➞ false

// puzzlePieces([9, 8, 7], [7, 8, 9, 10]) ➞ false

/*

input: two arrays (array a, array b) with numbers (only valid numbers ???)

output: a boolean:

        true: if all elements combinations add up to the same number

meaning:

add the first element from array a and the first element from array b,
add the second element from array a and the second element from array b,
etc,

if all the sums add up to the same number, RETURN TRUE

return true IF all element combinations add up to the same number

------------ **Types Involved** -------------

numbers, 

can be zero, negative, duplicates...

------------ **Caveats & Questions** -------------

arrays with different lengths will automatically return false right ????

------------ Examples/Test Cases/Edge's ------------

[1, 1] [-1, -1] => true (0, 0)

[1, 2] [2, 1] => true (3, 3)

[1, 1, 1] [2, 1] => false (different lengths)

[] => false

------------------ Strategies ------------------
helper to remove duplicates, 
      to validate input

sums array

single iteration, sums from boths array, number at i index position

-------------------- Algorithm ---------------------

1. validate inputs (empty inputs or arrays of different lengths,) RETURN FALSE

2. for every index i from 0 to array length:

    add numbers from both arrays at i i.p.
    push result to sums array

3. check if all numbers are equal in the sums array

*/

function puzzlePieces(arrayA, arrayB) {
  function validInput() {
    return arrayA.length === arrayB.length && arrayA.length !== 0;
  }

  function allSameNumber(sums) {
    return sums.every(n => n === sums[0]);
  } 

  if (!validInput()) return false;
  let sums = [];
  for (let i = 0; i < arrayA.length; i += 1) {
    sums.push(arrayA[i] + arrayB[i]);
  }

  return allSameNumber(sums);
}

console.log(
  puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1])
)