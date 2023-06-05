// The Luhn formula is a simple checksum formula used to validate a variety of 
// identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

// The formula verifies a number against its included check digit, which is usually 
// appended to a partial number to generate the full number. 
// This number must pass the following test:

// Counting from the rightmost digit and moving left, double the value of every second digit

// For any digit that thus become 10 or more, subtract 9 from the result

// 1111 becomes 2121
// 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
// Add all these digits together
// 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
// 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

// If the total (the checksum) ends in 0 
// (put another way, if the total modulo 10 is congruent to 0), 
// then the number is valid according to the Luhn Formula; else it is not valid. 
// Thus, 1111 is not valid (as shown above, it comes out to 6), 
// while 8763 is valid (as shown above, it comes out to 20).

// Write a program that, given a number in string format, check 
// if it is valid per the Luhn formula. 
// This should treat, for example, "2323 2005 7766 3554" as valid. 
// You can ignore all non-numeric characters in the input string.

// input: a number

// output: boolean (if number is valid according Luhn's formula)

// Luhn's Test:


// for every other digit starting from the right:

//     - double

//     - if result is >= 10, subs. 9

//     - add result to checksum

// if checksum modulo 10 is congruent to 0, return true, false otherwise

function luhn(number) {
  function isEven(number) { return number % 2 === 0; }

  let digits = String(number).match(/\d/g)?.reverse();
  if (!digits) return false;

  let checksum = 0;
  for (let i = 0; i < digits.length; i += 1) {
    let digit = digits[i]
    let result = isEven(i) ? Number(digit) : Number(digit) * 2;
    if (result >= 10) result -= 9;

    checksum += result;
  }

  return checksum % 10 === 0;
}


console.log(
  luhn(1111),
  luhn('2323 2005 7766 3554'),
  luhn('8763'),
  luhn(''),
)