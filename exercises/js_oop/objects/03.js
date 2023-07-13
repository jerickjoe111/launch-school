// In JavaScript, comparing two objects either with == or === checks for object identity. 
// In other words, the comparison evaluates as true if it's the same object on either side of == or ===. 
// This is a limitation, in a sense, because sometimes we need to check if two objects have the same 
// key/value pairs. JavaScript doesn't give us a way to do that.

// Write a function objectsEqual that accepts two object arguments and returns 
// true or false depending on whether the objects have the same key/value pairs.

function objectsEqual(a, b) {
  if (a === b) return true;

  return (keysMatch(a, b) && valuesMatch(a, b));
}

function keysMatch(a, b) {
  let aKeys = Object.getOwnPropertyNames(a).sort();
  let bKeys = Object.getOwnPropertyNames(b).sort();
  if (aKeys.length !== bKeys.length) return false;

  return aKeys.every((key, index) => key === bKeys[index]);
}

function valuesMatch(a, b) {
  let aKeys = Object.getOwnPropertyNames(a).sort();
  return aKeys.every(key => a[key] === b[key]);
}
