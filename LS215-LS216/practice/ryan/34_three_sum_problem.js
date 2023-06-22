// Write a function that returns all sets of three elements that sum to 0.

// Examples
// threeSum([0, 1, -1, -1, 2]) ➞ [[0, 1, -1], [-1, -1, 2]]

// threeSum([0, 0, 0, 5, -5]) ➞ [[0, 0, 0], [0, 5, -5]]

// threeSum([1, 2, 3]) ➞ []

// threeSum([1]) ➞ []
/*

input: an array of numbers

output: an array of triplets

  triplet: three elements from input array that sum to 0

rules:


------------ **Types Involved** -------------

numbers

------------ **Caveats & Questions** -------------


special numbers??

if less than 3 numbers input list, return []

------------ Examples/Test Cases/Edge's ------------

[] => []

[1, -1, 2, -2, 4] => []

------------------ Strategies ------------------

helper 

sumsThree(array)

triple nested iteration vs. recursion

get every possible combination of 3 nnumbes from array

  if combination sums to 0, add to output 

return output

-------------------- Algorithm ---------------------

*/

const p = console.log

function threeSum(numbers) {
  function sumsZero(array) {
    return array.reduce((acc, value) => acc + value) === 0;
  }

  let output = [];
  if (!numbers || !Array.isArray(numbers) || numbers.length === 0) {
    return output;
  }

  let usedTriplets = []
  for (let i = 0; i < numbers.length - 2; i += 1) {
    for (let j = i + 1; j < numbers.length - 1; j += 1) {
      for (let k = j + 1; k < numbers.length; k += 1) {
        let triplet = [numbers[i], numbers[j], numbers[k]];
        if (sumsZero(triplet) && !usedTriplets.includes(triplet.join())) {
          output.push(triplet);
          usedTriplets.push(triplet.join());
        }
      } 
    }
  }
  
  return output;
}


p(threeSum([0, 1, -1, -1, 2])); // ➞ [[0, 1, -1], [-1, -1, 2]]
p(threeSum([0, 0, 0, 5, -5])); // ➞ [[0, 0, 0], [0, 5, -5]]
p(threeSum([1, 2, 3])); // ➞ []
p(threeSum([1])); // ➞ []

