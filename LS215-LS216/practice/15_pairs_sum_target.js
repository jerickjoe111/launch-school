// Create a function that returns all pairs of numbers in an array that sum to a target. 

// Sort the pairs in ascending order with respect to the smaller number, 
// then order each pair in this order: [smaller, larger].

// allPairs([2, 4, 5, 3], 7) ➞ [[2, 5], [3, 4]]
// // 2 + 5 = 7, 3 + 4 = 7

// allPairs([5, 3, 9, 2, 1], 3) ➞ [[1, 2]]

// allPairs([4, 5, 1, 3, 6, 8], 9) ➞ [[1, 8], [3, 6], [4, 5]]
// // Sorted: 1 < 3 < 4; each pair is ordered [smaller, larger]

// If no pairs are found, return an empty array [].
// You are only allowed to use each number once in a pair.
// See Comments for a hint.

// input: an array of numbers and a target integer


// output: an array of pairs of numbers that sum to the target integer


// Caveats:

// no pairs found: empty array

// only allowed to use numbers once

// sort each pair

// sort output array per first number in each pair

// Examples:

// [4, 4, 3, 2]

// Strategies:

// helpers 

// sumsToTarget(numbers)

// indecesUsed(indeces)

// ds

// used indeces array

// output array

// algo;


// for every number in list at i position

//   for every number in list at j position

//     if i == j skip

//     add numbers at i and j

//     if result gives target and i and j are not in used indices

//     sort pair

//     add pair to output array

//     add each number to the used numbers array




// allPairs([5, 3, 9, 2, 1], 3) ➞ [[1, 2]]
// used 3, 4

// [2, 1]

function allPairs(list, target) {
  function sumsToTarget(a, b) {
    return a + b === target;
  }
  
  function indexUsed(a) {
    return usedIndeces.includes(a);
  }

  let output = [];
  let usedIndeces = [];

  for (let i = 0; i < list.length; i += 1) {
    for (let j = 0; j < list.length; j += 1) {
      if (i === j) continue;

      let a = list[i];
      let b = list[j];
      if (sumsToTarget(a, b) && !indexUsed(i) && !indexUsed(j)) {
        output.push([a,b].sort((a, b) => a - b));
        usedIndeces.push(i, j)
      }
    }
  }

  return output.sort((a, b) => a[0] - b[0]);
}

console.log(
)