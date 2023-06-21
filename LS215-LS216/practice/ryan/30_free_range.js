// Create a function which converts an ordered number array into a array of ranges 
// (represented as strings). 

// Note how some arrays have some numbers missing.

// Examples
// numbersToRanges([1, 2, 3, 4, 5]) ➞ ["1-5"]

// numbersToRanges([3, 4, 5, 10, 11, 12]) ➞ ["3-5", "10-12"]

// numbersToRanges([1, 2, 3, 4, 99, 100]) ➞ ["1-4", "99-100"]

// numbersToRanges([1, 3, 4, 5, 6, 7, 8]) ➞ ["1", "3-8"]
/*

input: an array of numbers (consecutive or not)

output: an array of ranges

      range: a string that represents a range with the format (a-b)
                a: first num. in range
                b: last num. in range

                or 

                just (a) for single, isolated numbers

            represents a series of consecutive number
      

------------ **Types Involved** -------------

input: an array (default val. [])
       numbers
                - special numbers ??
                - negatives ??
                - zero ??
                - repeated numbers

output: array of strings

------------ **Caveats & Questions** -------------



------------ Examples/Test Cases/Edge's ------------

[1, 3, 5, 7] => [1, 3, 5, 7]
[4, 3, 2, 1] => []
[] => []
[-1, -2, -3] => [-1--3]
[1, 1, 1] => [1, 1, 1]
[1, 2, 3, 1, 2, 3] => [1-3, 1-3]


------------------ Strategies ------------------
init. skip to index to 0
for every number in input list  i 

  if i is smaller than skip to index, continue

  init. range string to current number
  init. last in range to null

  for every next number         j

      if it is consecutive, 

        set last in range to next number

      if it is not consecutive

        set skip to index to index of next number  

        if there is last in range,
            add number to range string in range format (a-b)
        
        break

  add range string to output array

  helper: are consecutive(a, b)

    b === a + 1
*/

const p = console.log
function numbersToRanges(numbers = []) {
  function areConsecutive(a, b) {
    return b === a + 1;
  }

  let output = [];
  let skipToIndex = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (i < skipToIndex) continue;

    let currentNumber = numbers[i];
    let range = String(currentNumber);
    let lastInRange = currentNumber;
    for (let j = i + 1; j < numbers.length; j += 1) {
      let nextNumber = numbers[j];
      if (areConsecutive(lastInRange, nextNumber)) {
        lastInRange = nextNumber;
        skipToIndex = j + 1;
      } else break;
    }
    if (lastInRange !== currentNumber) range += `-${lastInRange}`;
    output.push(range);
  }

  return output;
}

p(numbersToRanges([1, 2, 3, 4, 7]))