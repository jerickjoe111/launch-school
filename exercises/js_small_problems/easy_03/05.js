// Exercise 05

// Write another function that returns true if the string passed as an argument 
// is a palindrome, or false otherwise. This time, however, 
// your function should be case-insensitive, and should ignore all 
// non-alphanumeric characters. If you wish, you may simplify things 
// by calling the isPalindrome function you wrote in the previous exercise.

// convert string to lower case

// filter all non alphanumeric characters

// compare string to reversed string (split, reverse, join)


function isPalindrome(string) {
  let filteredString = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  return filteredString === filteredString.split('').reverse().join('');
}



console.log(isPalindrome('madam') ===            true)
console.log(isPalindrome('Madam') ===            true) // (case does not matter)
console.log(isPalindrome("Madam, I'm Adam") ===  true) // (only alphanumerics matter)
console.log(isPalindrome('356653') ===           true)
console.log(isPalindrome('356a653') ===          true)
console.log(isPalindrome('123ab321') ===         false)