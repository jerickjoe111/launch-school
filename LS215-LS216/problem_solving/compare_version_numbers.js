// Write a function that takes any two version numbers in this format (1.0, 1, 1.0.0.0) and compares them, 
// with the result of this comparison showing whether the first is less than, equal to, or 
// greater than the second version:

// If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, we should return 0.
// If either version number contains characters other than digits and the . character, we should return null.


// The problem:

// input: 2 version numbers (string??? number???)

// version number = number followed by any number of (. and a number)
//   ex: 
//   1.0; 
//   1.00, 
//   1, 
//   4.32.12;


// output: an integer:

// If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, we should return 0.


// Caveats!

// if any of the inputs has invalid characters or it is invalid (other than supported types)
//           RETURN null

// invalid characters = any char. that is not a digit or a dot

// valid format = digit + any number of (. + number)

// version numbers can have different numbers of (. + number) == subversions

// version ordering:

// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

// Examples:

// compareVersions('1.00', '1') === 0
// compareVersions('4.32', '1') === 1
// compareVersions('1.00', '1.00.00.01') === -1
// compareVersions('0.1', '1') === -1
// compareVersions('0.a1', '1') === null
// compareVersions('.a1', '1') === null

// Strategies:

// convert inputs to strings at first anyway

// make valid inputs helper, else return null (guard)

//  using regexp: valid format /^\d+(.\d+)*$/

// compare two subversions:

//   if one of the inputs is undefined, take it as 0

// version number 1 = 1.0.0, has 3 subversions

// subversion a = 1
// subversion b = 0
// subversion c = 0

// version number 2 = 2.0.0, has 3 subversions

// subversion a = 1
// subversion b = 0
// subversion c = 0

// proto algo.:

// divide version numbers in subversions

// compare by subversions:

// if input 1 > 2, return 1
// if input 1 < 2, return - 1

// if input 1 === input 2 and there are more subversion numbers,

//   compare next subversion

// 1.0.0.0
// = = R 
// 1.0.2.0

function compareVersions(version1, version2) {
  function isValidVersionNumber(input) {
    return  /^\d+(.\d+)*$/.test(input);
  }

  function compareSubversions(sub1, sub2) {
    sub1 ??= 0;
    sub2 ??= 0;

    if (sub1 > sub2) return 1;
    else if (sub1 < sub2) return -1;
    else return 0;
  }

  version1 = String(version1);
  version2 = String(version2);

  if (!isValidVersionNumber(version1) || !isValidVersionNumber(version2)) return null;

  let subversions1 = version1.split('.').map(Number);  
  let subversions2 = version2.split('.').map(Number);
  
  let longestVersionLength = Math.max(subversions1.length, subversions2.length);

  let result = 0;
  for (let i = 0; i < longestVersionLength; i += 1) {
    result = compareSubversions(subversions1[i], subversions2[i]);
    if (result !== 0) break;
  }

  return result;
}
  
console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1
