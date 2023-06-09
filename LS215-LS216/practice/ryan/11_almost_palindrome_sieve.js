// Write a function that takes in an array of integers and returns 
// the integers that are either palindromes or almost-palindromes. 
// An almost-palindrome is any integer that can be rearranged to form a palindrome.

// For example, the numbers 677 and 338 are both almost-palindromes, 
// since they can be rearranged to form 767 and 383, respectively.


// palindromeSieve([443, 12, 639, 121, 3232]) ➞ [443, 121, 3232]
// // Since 443 => 434; 121 is a palindrome; 3232 => 2332 or 3223

// palindromeSieve([5, 55, 6655, 8787]) ➞ [5, 55, 6655, 8787]
// // Single-digit numbers are automatically palindromes.

// palindromeSieve([897, 89, 23, 54, 6197, 53342]) ➞ []

// input: list of numbers

// output: list of numbers that are:

//         palindromes

//         almost palindromes (digits can be rearranged to form a palindrome)

// Palindrome: can be read from both sides (symmetrical)
//             one digit numbers are palindromes

// Examples:

// [1, 44, 443, 78] => [1, 44, 443]

// Strategy:

// helpers;

// isPalindrome

// rearrange to find palindromes


// function

// is palindrome

//   reverse is equal to current (string, array, reverse, string(join))

// is almost palindrome

//   rearrange digits, find palindrome

function palindromeSieve(numbers) {
  function isPalindrome(number) {
    return [...String(number)].reverse().join('') === String(number);
  }
  function isAlmostPalindrome(number) {
    let digits = [...String(number)];
    let result = [];
  
    const permute = (digits, m = []) => {
      if (digits.length === 0) {
        result.push(m.join(''))
      } else {
        for (let i = 0; i < digits.length; i++) {
          let current = digits.slice();
          let next = current.splice(i, 1);
          permute(current.slice(), m.concat(next))
       }
     }
   }
  
   permute(digits)
  
   return result.some(n => isPalindrome(n));
  }

  return numbers.filter(number => isPalindrome(number) || isAlmostPalindrome(number))
}


console.log(
  
  palindromeSieve([443, 12, 639, 121, 3232]),// [443, 121, 3232]
// Since 443 => 434; 121 is a palindrome; 3232 => 2332 or 3223

palindromeSieve([5, 55, 6655, 8787]), // [5, 55, 6655, 8787]
// Single-digit numbers are automatically palindromes.

palindromeSieve([897, 89, 23, 54, 6197, 53342])// []
)