// Write a function that returns a substring of a string
// based on a starting index and length.

// The start argument is the starting index.
// If negative, treat it as strLength + start
// where strLength is the length of the string.
// For example, if start is -3, treat it as strLength - 3.
// The length argument is the maximum length of the desired substring.
// If length exceeds the number of characters available,
// just use the available characters.

function substring(string, start, substringLength) {
  let output = '';
  let index = (start < 0) ? string.length + start : start;
  for (let i = 0; i < substringLength; i += 1) {
    output += string[index];
    index += 1;
    if (index > string.length - 1) break;
  }
  return output;
}

let string = 'hello world';
console.log(substring(string, 2, 4)); // "llo "
console.log(substring(string, -3, 2)); // "rl"
console.log(substring(string, 8, 20)); // "rld"
console.log(substring(string, 0, -20)); // ""
console.log(substring(string, 0, 0)); // ""
