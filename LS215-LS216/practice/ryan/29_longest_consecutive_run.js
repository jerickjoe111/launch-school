// A consecutive-run is a list of adjacent, consecutive integers. 
// This list can be either increasing or decreasing. 

// Create a function that takes an array of numbers and returns the length of the longest consecutive-run.

// To illustrate:

// longestRun([1, 2, 3, 5, 6, 7, 8, 9]) ➞ 5
// // Two consecutive runs: [1, 2, 3] and [5, 6, 7, 8, 9] (longest).
// Examples
// longestRun([1, 2, 3, 10, 11, 15]) ➞ 3
// // Longest consecutive-run: [1, 2, 3].

// longestRun([5, 4, 2, 1]) ➞ 2
// // Longest consecutive-run: [5, 4] and [2, 1].

// longestRun([3, 5, 7, 10, 15]) ➞ 1
// // No consecutive runs, so we return 1.

/*

Input: a list of numbers

output: a number (length of longest consecutive run from input list)

consecutive run: ascending or descending adjacent numbers, of at least size 2

------------ **Types Involved** -------------

positives, negatives and zero

special numbers ????

------------ **Caveats & Questions** -------------

empty inputs ??? => 0

we can't rearrange numbers ???

------------ Examples/Test Cases/Edge's ------------

[] => 0
[1,4,8,10] => 1
[1,2,3,9] => 3
[-2,-3,-4] => 3

------------------ Strategies ------------------

filter out invalid/bad/empty inputs

init longest run seen to 1

for every possible subarray of size 2 or more from input array

    - check if it is a run (asc. or desc.)
    - if it is, check size
    - if its length is greater than longest run length seen, update longest run length seen

return longest run length seen

helper: isRun

for every number but the last one, it is the case that

  it's one less to the next one,
  it's one more to the previous one,

*/



function solution(numbers) {
  function isRun(array) {
    return array.slice(0, array.length -1).every((number, index) => {
      return array[index + 1] === number + 1;
    }) || array.slice(0, array.length -1).every((number, index) => {
      return array[index + 1] === number - 1;
    })
  }

  if (!numbers || !Array.isArray(numbers) || numbers.length === 0) return 0;

  let longestRunSeen = 1;
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i + 2; j <= numbers.length; j += 1) {
      let subarray = numbers.slice(i, j)
      if (isRun(subarray)) {
        let subarrayLength = subarray.length;
        if (subarrayLength > longestRunSeen) longestRunSeen = subarrayLength;
      }
    }
  }

  return longestRunSeen;
}


console.log(
  solution([1,2,3,4])
)