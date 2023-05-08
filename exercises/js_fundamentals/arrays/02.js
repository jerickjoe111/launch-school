// Exercise 02

// In the previous exercise, the value of the reference gets copied. 
// For this exercise, only the values of the array should be copied, 
// but not the reference. Implement two alternative ways of doing this.

// Code of the previous exercise:
let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

function shallowCopy(array) {
  return [...array];
}

function shallowCopy2(array) {
  return array.slice();
}

