// Write a Function named myMap that is similar to the built-in Array.prototype.map method. 
// Your Function should take an array and another Function (the callback) as arguments, 
// and return a new Array. 
// The new Array's values should be the return values of the callback Function.

function myMap(array, func) {
  let outputArray = [];
  
  for (let i = 0; i < array.length; i += 1) {
    outputArray.push(func(array[i], i, array));
  }
  
  return outputArray;
}