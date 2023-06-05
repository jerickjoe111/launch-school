// Write a program that cleans up user-entered phone numbers so that they can be 
// sent as SMS messages. Other than digits, the number may also contain special 
// character such as spaces, dash, dot, and parentheses that should be ignored.

// The rules are as follows:

// If the phone number is less than 10 digits, assume that it is a bad number.
// If the phone number is 10 digits, assume that it is good.
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
// If the phone number is 11 digits and the first number is not 1, then it is a bad number.
// If the phone number is more than 11 digits, assume that it is a bad number.
// For bad numbers, just a return a string of 10 0s.

// input: a string with any num of digits and any num of characters

//   allowed char.: \s, -, ., (), (ignore allowed chars)

// output: a cleaned up string with only digits (the digits in input)

// RULES for valid input:

//   - must contain exactly 10 digis or 11 digits if the first digit is a 1

//   - only allowed chars. (allowed chars, digits)

// If invalid input: 

//   return '0000000000'

// valid input can be any sequence of chars and digits without specific format


// Examples

// cleanUp('1234567890') === '1234567890',
// cleanUp('1       2-3---4....56.78(90)') === '1234567890',
// cleanUp('1-1234567890') === '1234567890',
// cleanUp('0-1234567890') === '0000000000',
// cleanUp('12345678') === '0000000000',
// cleanUp('0-12345678') === '0000000000',
// cleanUp('') === '0000000000',
// cleanUp('asdf1234567890') === '0000000000',


// Strategies and DS, and protoalgo.:

// valid boolean helper

//     if not valid, return invalidString

//     if valid, process, return processed

// protoalgo for processing:

// replace allowed chars by '' (delete)

// if 11 digits, trim first one


function cleanUp(string) {
  const INVALID_INPUT = '0000000000';

  function isValid(string, digits) {
    const VALID_FORMAT = /^[\d.-\s()]+$/g;
    
    return VALID_FORMAT.test(string) 
      && (digits?.length === 10 || (digits?.length === 11 && digits[0] === '1'));
  }

  let digits = string.match(/\d/g);
  if (!isValid(string, digits)) return INVALID_INPUT;

  return digits.slice(-10,-1).join('');
} 


console.log(
cleanUp('1234567890'), //=== '1234567890',
cleanUp('1       2-3---4....56.78(90)'), //=== '1234567890',
cleanUp('1-1234567890'), //=== '1234567890',
cleanUp('0-1234567890'), // === '0000000000',
cleanUp('12345678'), // === '0000000000',
cleanUp('0-12345678'), // === '0000000000',
cleanUp(''), // === '0000000000',
cleanUp('asdf1234567890'), // === '0000000000',
cleanUp('----((()(()()(()()(      .......1234567890aaaaadfasf'), // === '0000000000',
)