// Implement a function that determines whether a string begins with another string. 
// If it does, the function should return true, or false otherwise.

function startsWith(string, searchSubstring) {
  let substringLength = searchSubstring.length;
  
  let initialSubstring = '';
  for (let i = 0; i < substringLength; i += 1) initialSubstring += string[i];

  return searchSubstring === initialSubstring;
}