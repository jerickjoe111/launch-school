// Write a function, primeNumberPrinter, that prints all 
// prime numbers present as substrings in a given string.

// input: string

// output: an array of prime integers contained in the input string


// string just letters and numbers??? YES

// per digit or per number token ???? PER TOKEN

// (token: series of digits between letters)

// negative numbers ??? 

// order of the result ??? (same as input string or sorted)

// empty inputs?? EMPTY ARRAY

// non digits in input string??? EMPTY ARRAY

// non-string inputs?? EMPTY ARRAY

// primeNumberPrinter("a4bc2k13d"), // [2, 13]
// primeNumberPrinter("1asdf11asdf9"), // [1, 11]
// primeNumberPrinter("4asdf4asdf44"), // []
// primeNumberPrinter("19"), // [19]
// primeNumberPrinter(""), // []
// primeNumberPrinter("0"), // []
// primeNumberPrinter(12312), // []

// Strategies:

// need
// numberExtractor( using regexp)

// isPrime helper

// extract all numbers into an array,

// filter out prime numbers

// function primeNumberPrinter(string) {
//   function extractNumbers(string) {
//     return String(string).match(/\-?\d+/g)?.map(Number);
//   }

//   function isPrime(number) {
//     if (number === 1) return true;
//     else if (number === 0) return false;
//     else if (number < 0) number = Math.abs(number);

//     for (let divisor = 2; divisor < number; divisor += 1) {
//       if (number % divisor === 0) return false;
//     }

//     return true
//   }

//   let numbers = extractNumbers(string);
//   if (!numbers || numbers.length === 0) return [];

//   return numbers.filter(number => isPrime(number));
// }

console.log(
  primeNumberPrinter("a4bc-2k-13d"), // [2, 13]
primeNumberPrinter("1asdf-11asdf-9"), // [1, 11]
primeNumberPrinter("19"), // [19]
primeNumberPrinter("4asdf4asdf44"), // []
primeNumberPrinter(""), // []
primeNumberPrinter("0"), // []
primeNumberPrinter(12312), // []
)

// Solution with digits and numbers

function primeNumberPrinter(string) {
  function extractDigits(string) {
    return String(string).match(/\-?\d/g)?.map(Number);
  }

  function extractNumbers(string) {
    return String(string).match(/\-?\d+/g)?.map(Number);
  }

  function isPrime(number) {
    if (number === 1) return true;
    else if (number === 0) return false;
    else if (number < 0) number = Math.abs(number);

    for (let divisor = 2; divisor < number; divisor += 1) {
      if (number % divisor === 0) return false;
    }

    return true
  }

  let digits = extractDigits(string) ?? [];
  let numbers = extractNumbers(string) ?? [];

  digits = digits.filter(number => isPrime(number));
  numbers = numbers.filter(number => isPrime(number));

  return digits.concat(numbers);
}