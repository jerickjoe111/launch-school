// Write a Function named myForEach that is similar to the built-in 
// Array.prototype.forEach method. 
// Your Function should take an array and another Function as arguments. 
// The Function passed to myForEach should reassign a variable in the outer scope.

function myForEach(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    func(array[i], i, array);
  }
}