// Write two functions that each take two strings as arguments. 
// Their expected behaviors are as follows:

// The indexOf function searches for the first instance of a substring in firstString 
// that matches the string secondString, 
// and returns the index of the character where that substring begins.

// The lastIndexOf function searches for the last instance of a substring in firstString 
// that matches the string secondString, and returns the index of the character 
// where that substring begins.

// Both functions return -1 if firstString does not contain the substring 
// specified by secondString.

function indexOf(firstString, secondString) {
  let secondString_size = secondString.length;
  let lastFirstStringIndex = firstString.length - secondString_size;

  for(let startIndex = 0; startIndex <= lastFirstStringIndex; startIndex += 1) {
    let lastIndex = startIndex + secondString_size
    let substring = firstString.substring(startIndex, lastIndex);
    if (substring === secondString) return startIndex;
  }

  return -1;
}

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

function lastIndexOf(firstString, secondString) {
  let secondStringSize = secondString.length;

  for(let lastIndex = firstString.length; lastIndex >= 0; lastIndex -= 1) {
    let startIndex = lastIndex - secondStringSize
    let substring = firstString.substring(startIndex, lastIndex);
    if (substring === secondString) return startIndex;
  }

  return -1;

}

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1