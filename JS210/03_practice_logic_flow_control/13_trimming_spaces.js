// Write a function that takes a string as an argument, 
// and returns the string stripped of spaces from both ends. 
// Do not remove or alter internal spaces.

function trim(string) {
  function leftTrim(string) {
    let leftTrimmed = '';
    let letterReached = false
    let stringLength = string.length;  
    for(let i = 0; i < stringLength; i += 1) {
      if (!letterReached && string[i] !== ' ') letterReached = true;
      if (letterReached) leftTrimmed += string[i];
    }
    return leftTrimmed;
  }

  function rightTrim(string) {
    if (string === '') return '';
    
    let stringLength = string.length
    let lastChar = stringLength;
    for(let i = stringLength - 1; i >= 0; i -= 1) {
      if (string[i] !== ' ') {
        lastChar = i;
        break;
      }
    }
    let rightTrimmed = '';
    for (let i = 0; i <= lastChar; i += 1) rightTrimmed += string[i];
  
    return rightTrimmed;
  }

  
  return (rightTrim(leftTrim(string)));
}

let a = trim('        ');

console.log(a);