// Write a function that takes a positive integer as an argument, 
// and logs all the odd numbers from 1 to the passed in number (inclusive). 
// All numbers should be logged on separate lines.

// all num from 1 to input int

//   - if num is odd ( num % 2 !== 0), log num

function logOddNumbers(input_integer) {  
  for(let i = 1; i <= input_integer; i++) {
    if (i % 2 !== 0) console.log(i);
  }
}

logOddNumbers(19);

// You can remove the conditional inside the loop and increment currentNumber by 2 with each step, 
// instead of 1. How would you write code to do that?

function logOddNumbers2(input_integer) {  
  for(let i = 1; i <= input_integer; i += 2) console.log(i); 
}

logOddNumbers2(19);

// Instead of a conditional that checks for odd numbers, you can write a conditional 
// that checks for even numbers, but skips them with the continue statement. 
// How would you write your code?

function logOddNumbers3(input_integer) {  
  for(let i = 1; i <= input_integer; i++) {
    if (i % 2 === 0) continue;
    
    console.log(i);
  }
}

logOddNumbers3(19)