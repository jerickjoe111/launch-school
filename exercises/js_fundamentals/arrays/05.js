// Exercise 05

// In this exercise, you will implement your own version of two Array methods: 
// Array.prototype.pop and Array.prototype.push. 
// The pop method removes the last element from an array and returns that element. 
// If pop is called on an empty array, it returns undefined. 
// The push method, on the other hand, adds one or more elements to the end 
// of an array and returns the new length of the array.

function pop(array) {
  let poppedElement = array[array.length - 1];
  array.splice(array.length - 1);
  return poppedElement;
}

function push(array, ...args) {
  let length = args.length;
  for (let i = 0; i < length; i += 1) array[array.length] = args[i];
  return array.length;
}