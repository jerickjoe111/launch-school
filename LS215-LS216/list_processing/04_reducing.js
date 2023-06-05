// Write a function named myReduce that's similar to the Array.prototype.reduce method. 
// It takes an array and a function as arguments, and optionally, a third argument that 
// serves as an initial value. If the caller omits the initial value, myReduce should 
// use the first element of the Array as the initial value. myReduce should return the 
// value returned by the last invocation of the callback function.

function myReduce(array, func, initialValue) {
  let accumulator = initialValue === undefined ? array[0] : initialValue;
  
  for (let i = initialValue === undefined ? 1 : 0; i < array.length; i += 1) {
    accumulator = func(accumulator, array[i], i, array)
  }

  return accumulator;
}

let a = [2, 2, 3];


console.log(
  myReduce(a, 
    (acc, n) => acc * n,
    )
)

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49