// Implement a function that takes a string as an argument and returns a new string 
// that contains the original string in reverse.

function reverse(string) {
  let result = '';
  
  for (let i = string.length - 1; i >= 0; i -= 1) {
    result += string[i];
  }
  
  return result;
}

function reverseAlt(string) {
  return string.split('').reverse().join('');
}

console.log(
  reverseAlt('abc')
)