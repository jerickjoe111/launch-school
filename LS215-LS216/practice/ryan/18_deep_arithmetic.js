// Write a function that takes an array of strings of arbitrary dimensionality ([], [][], [][][], etc.) 
// and returns the sum of every separate number in each string in the array.

// Examples
// sum(["1", "five", "2wenty", "thr33"]) ➞ 36

// sum([["1X2", "t3n"],["1024", "5", "64"]]) ➞ 1099

// sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]) ➞ 759

// input: a n-depth array, with strings

// output: an integer (the sum of the numbers found in the strings)

// Caveats:

// all valid inputs ???? (return value if invalid ???)

// Edge Cases:

// more than one number per string ???

// strings with no numbers

// negative numbers ???

// negative numbers may follow another number

// Examples:

// sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]) ➞ 759
//         1      13        738              8           -1

// Strategies:

// helper (
//   extract number(s) from string (test num + negativenum), use regular expression

// )

// infinitely flatten the array (flat(Infinity))

// for every string in resulting array

//   extract numbers from string

//   add them

//   add result to total

// return total

function sum(array) {
  function extractNumbers(string) {
    let numbers = string.match(/-?\d+/g);
    return numbers ? numbers.map(n => Number(n)) : [0];
  }

  let flattened = array.flat(Infinity);
  let total = 0;

  flattened.forEach(string => {
    let numbers = extractNumbers(string);
    total += numbers.reduce((acc, value) => acc + value);
  })

  return total;
}

console.log(
  sum(['a1', 'b2', 'c2-2'])
)