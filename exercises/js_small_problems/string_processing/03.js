// Exercise 03

// Write a function that takes a string and returns an object containing three properties: 
// one representing the number of characters in the string that are lowercase letters, 
// one representing the number of characters that are uppercase letters, 
// and one representing the number of characters that are neither.

function letterCaseCount(string) {
  return {
    lowercase: string.match(/[a-z]/g)?.length ?? 0,
    uppercase: string.match(/[A-Z]/g)?.length ?? 0,
    neither: string.match(/[^a-z]/ig)?.length ?? 0,
  };
}
