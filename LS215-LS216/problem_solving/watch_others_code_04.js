// You are given a list of numbers in a "short-hand" range where 
// only the significant part of the next number is written 
// because we know the numbers are always increasing 
// (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). 

// Some people use different separators for their ranges 
// (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers 
// [1, 2, 3, 11, 12]). Range limits are always inclusive.

// Your job is to return a list of complete numbers.

// The possible separators are: ["-", ":", ".."]

// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// "1-3, 1-2" --> 1, 2, 3, 11, 12

// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545,    564, 565, .. 611

// input: a string of digits(only the significant part),
//        and ranges of digits


// output: an array of complete numbers


// Caveats

// Strategies:

// The initial number in the series determines the initial number of digits: ???

// number multiplied by 10 to the power of the number of digits (length of number) - 1

// 1, 3, 7 = 
// (1 * 10 ** 1 - 1) => 1
// (3 * 10 ** 1 - 1) => 3
// (7 * 10 ** 1 - 1) => 7

// the input is composed by TOKENS

// single numbers

//   represent a single number

// ranges

//   represent a series of numbers between those numbers, both included


// the numbers are sorted:

//  if a number is found that is the last number, add to that number a 10 multiplier


// we need a 10 multiplier (based on what ???) this is the pattern


// split input into an array of TOKENS (single numbers or ranges)

// proto-algo:

// set initial 10 multiplier (initial, 0 = 10 ** 0)
//  to the length in digits of first number (or first number in first range) - 1, 
//  plus the first digit in that number:

//  i.e.: 
//   1, set initial multiplier to 0, add (1 * 10 ** 0)
//   10, set initial multiplier to 1 (num of digits - 1), add (1 * 10 ** 1)
//   20, set initial multiplier to 1 (num of digits - 1), add (2 * 10 ** 1)

//   this is what we will add to the subsequent numbers

// for every token in input array:

//     if it is a single number:

//         if the number is smaller than last number in output array:
//             set the adder/multiplier

//         if the multiplier is 0, just add the number as it is (single digit)
//         if the multiplier is > 0, add the number to the multiplier, and add the result to output array
        
    
function expand(tokens) {
  function isRange(substring) { return /^\d+([-:]|\.\.)\d+$/g.test(substring); }
  function lastIn(array) { return array[array.length - 1]; }
  function expand(number, list) {
    if (list.length === 0) return number;
    else {
      let counter = Number(lastIn(list)) + 1; 
      while(!String(counter).endsWith(number)) { counter += 1; }
      return counter;
    }
  }
  function expandRange(range, list) {
    let output = [];
    let [start, end] = range.split(/\-|\:|\.\./);
    let counter = Number(expand(start, list));
    output.push(String(counter))

    while(!String(counter).endsWith(end)) {
      counter += 1;
      output.push(String(counter));
    }
    return output;
  }

  tokens = tokens.split(/,\s*/);
  let outputList = [];

  for (let i = 0; i < tokens.length; i += 1) {
    let token = tokens[i];
    if (isRange(token)) {
      let numbersInRange = expandRange(token, outputList)
      outputList.push(...numbersInRange);
    } else {
      let expandedNumber = expand(token, outputList)
      outputList.push(expandedNumber);
    }
  }

  return outputList.join();
}
