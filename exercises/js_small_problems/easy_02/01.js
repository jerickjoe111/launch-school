// Exercise 01

// Write a function that takes a string argument and returns 
// a new string that contains the value of the original string with all 
// consecutive duplicate characters collapsed into a single character.

// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""


// - for every character in input String:

//     - copy current character into output string
//     - if next character (current index + 1) = last character in output string:
//         - skip to the next character

// - return output string

function cruch(string) {
  let output = '';
  if (string.length == 0) return output;

  for (let i = 0; i < string.length; i += 1) {
    if (output[output.length - 1] == string[i]) continue;

    output += string[i];
  }

  return output;
}

function crunchRegExp(string) {
  return string.replace(/(.)\1+/g, '$1');
}



console.log(crunchRegExp('aaaaaaaaaffffffffffffffffbnbbbbbbbbbbbbbbbbbbb'));