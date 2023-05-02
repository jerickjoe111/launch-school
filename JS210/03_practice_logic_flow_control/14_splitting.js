// Write a function that takes two arguments:

// a string to be split
// a delimiter character

// The function logs the split strings to the console, as shown below:

function splitString(string, delimiter) {
  const substrings = [];
  let bufferString = '';
  const stringLength = string.length;
  for (let i = 0; i < stringLength; i += 1) {
    const currentChar = string[i];
    if (currentChar !== delimiter) {
      bufferString += currentChar;
      if (i === stringLength - 1) substrings.push(bufferString);
    } else {
      substrings.push(bufferString);
      bufferString = '';
    }
  }

  substrings.forEach((substring) => console.log(substring));
}

splitString('abc,123,hello world', ',');
