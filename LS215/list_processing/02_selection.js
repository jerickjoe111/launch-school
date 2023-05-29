// Write a function that's similar to Array.prototype.filter. 
// It takes an array and a function as arguments, 
// and returns an array whose values are only those that the function passed returns as true.

function myFilter(array, func) {
  let outputArray = [];

  for (let i = 0; i < array.length; i += 1) {
    if (func(array[i], i, array)) outputArray.push(array[i]);
  }

  return outputArray;
}
