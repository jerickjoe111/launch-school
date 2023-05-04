// Write a function that returns the first element of an array passed in as an argument.

function firstElementOf(arr) {
  return arr[0];
}

// Write a function that returns the last element of an array passed in as an argument.

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

// Write a function that accepts two arguments, an array and an integer index position, 
// and returns the element at the given index. 
// What happens if the index is greater than the length of the array? 
// What happens if it is a negative integer?

function nthElementOf(arr, index) {
  return arr[index];
}

let digits = [4, 8, 15, 16, 23, 42];

nthElementOf(digits, 3);   // returns 16
nthElementOf(digits, 8);   // returns undefined
nthElementOf(digits, -1);  // returns undefined

// Can we insert data into an array at a negative index? If so, why is this possible?

// No; it creates a property in the array object with the name as the string equivalent of the
// negative integer.

// Write a function that accepts an array as the first argument and an integer value, 
// count, as the second. It should return a new array that contains the first 
// count elements of the array.

function firstNOf(arr, count) {
  return arr.slice(0, count);
}

// Write a function like the previous one, 
// except this time return the last count elements as a new array.

function lastNOf(arr, count) {
  return arr.slice(arr.length - count);
}

// Using the function from the previous problem, 
// What happens if you pass a count greater than the length of the array? 
// How can you fix the function so it returns a new instance of the entire 
// array when count is greater than the array length?

function lastNOf(arr, length) {
  let index = length < arr.length ? length : 0;
  return arr.slice(index);
}

// Write a function that accepts two arrays as arguments and returns an array 
// with the first element from the first array and the last element from the second array.

function endsOf(beginningArr, endingArr) {
  return [
    beginningArr[0],
    endingArr[endingArr.length - 1]
  ];
}
