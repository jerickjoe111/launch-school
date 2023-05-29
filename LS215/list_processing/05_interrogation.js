// Write a function named myOwnEvery that's similar to the 
// Array.prototype.every method. It should take an array and a function as arguments, 
// and return true if every element passed to the function evaluates as truthy.

function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    if (!func(array[i], i, array)) return false;
  }

  return true;
}
