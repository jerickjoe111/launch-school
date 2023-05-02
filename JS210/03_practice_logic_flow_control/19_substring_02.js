// // This practice problem is similar to the previous one. 
// This time though, both arguments are indices of the provided string. 
// The following rules apply:

// If both start and end are positive integers, start is less than end, 
// and both are within the boundary of the string, return the substring from the 
  // start index (inclusive), to the end index (NOT inclusive).

// If the value of start is greater than end, swap the values of the two, 
  // then return the substring as described above.

// If start is equal to end, return an empty string.

// If end is omitted, the end variable inside the function is undefined
  // Return the substring starting at position start up through (and including) the end of the string.

// If either start or end is less than 0 or NaN, treat it as 0.

// If either start or end is greater than the length of the string, treat it as equal 
  // to the string length.

function substring(string, start, end) {
  let stringLength = string.length;
  let startIndex = (start <= stringLength && start >= 0) ? start : stringLength;
  let endIndex = (end <= stringLength && end !== undefined) ? end : stringLength;
  
  if (isNaN(start)) startIndex = 0;
  if (endIndex < 0 || isNaN(endIndex)) endIndex = 0;
  if (startIndex > endIndex) [startIndex, endIndex] = [endIndex, startIndex];

  let output= '';
  for (let i = startIndex; i < endIndex; i += 1) output += string[i]; 
  return output;
}

let string = 'hello world';
  
console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"