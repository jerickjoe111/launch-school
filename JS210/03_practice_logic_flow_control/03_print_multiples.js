// Write a function logMultiples that takes one argument number. 
// It should log all multiples of the argument between 0 and 100 (inclusive) 
// that are also odd numbers. 
// Log the values in descending order.

// You may assume that number is an integer between 0 and 100.

function logMultiples(multiple) {
  const maxNumber = 100;
  for(let n = maxNumber; n >= 0; n--) {
    if ((n % multiple === 0) && (n % 2 !== 0)) {
      console.log(n);
    }
  }
}

logMultiples(21);

// This solution must step through every number between 100 and 0. 
// Alternatively, you can determine the number's largest multiple 
// that is less than 100, then start the loop with that multiple. 
// With each iteration of the loop, you can decrement the number 
// by the argument; when the result is negative, you can quit.

// As above, we must check each multiple to determine whether it is odd. 
// If it is odd, we log it.

function logMultiples2(multiple) {
  const MAXNUMBER = 100
  const maxMultiple = Math.floor(MAXNUMBER / multiple) * multiple;
  for(let n = maxMultiple; n >= 0; n--) {
    if ((n % multiple === 0) && (n % 2 !== 0)) {
      console.log(n);
    }
  }
}

logMultiples2(21)