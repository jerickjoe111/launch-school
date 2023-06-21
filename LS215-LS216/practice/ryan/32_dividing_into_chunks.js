// Write a function that divides an array into chunks 
// such that the sum of each chunk is <= n. 

// Start from the left side of the array and move to the right.

// Examples
// divide([1, 2, 3, 4, 1, 0, 2, 2], 5)
// ➞ [[1, 2], [3], [4, 1, 0], [2, 2]]

// divide([1, 0, 1, 1, -1, 0, 0], 1)
// ➞ [[1, 0], [1], [1, -1, 0, 0]]

// divide([2, 1, 0, -1, 0, 0, 2, 1, 3], 3)
// ➞ [[2, 1, 0, -1, 0, 0], [2, 1], [3]]
/*

Input: an array of numbers and a number n

output: an array of chunks, 

          - each must sum a total of n or less than n

USE GREEDY APPROACH (ADD AS MANY NUMBERS TO EACH CHUNK AS POSSIBLE WITHOUT GETTING BIGGER THAN N)          

------------ **Types Involved** -------------

arrays, numbers

------------ **Caveats & Questions** -------------

special numbers? negatives? zero? 

invalid arguments, just one or less arguments ? ( default values)

order does not matter (sum)

------------ Examples/Test Cases/Edge's ------------

[1, 2, 3, 4, 5, 6], 6 => [[1, 2, 3], [4], [5], [6]]


------------------ Strategies ------------------

helper sum 
helper last chunk
...
init. output to [[]]
init. lastChunk to last chunk
for every number in numbers at i
    if total in last chunk in output plus current number is less or equal than n:

        add number to last chunk

    else

        add [number at i ] to output
        set last chunk
      
1,2,3,4,5, 6
      
[[1, 2, 3], [4], [5], [6]]

// divide([1, 2, 3, 4, 1, 0, 2, 2], 5)
// ➞ [[1, 2], [3], [4, 1, 0], [2, 2]]

*/
const p = console.log

function divide(numbers, limit) {
  function sum(chunk) {
    return chunk.reduce((a, b) => a + b, 0);
  }

  function getLastChunk() {
    return output[output.length - 1];
  }
  
  let output = [[]];
  let lastChunk = getLastChunk();
  numbers.forEach(number => {
    let chunkSum = sum(lastChunk) + number;

    if (chunkSum <= limit) lastChunk.push(number);
    else {
      output.push([number]);
      lastChunk = getLastChunk();
    }
  })

  return output;
}

p(
  divide([1,2,3,4,5], 5)
)