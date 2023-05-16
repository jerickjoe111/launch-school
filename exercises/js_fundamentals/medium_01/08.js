// Exercise 08

// The productOfSums function shown below is expected to return the 
// product of the sums of two arrays of numbers. 
// Read through the following code. 
// Will it produce the expected result? Why or why not?

function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum = 0; // missing variable initialization (assignment upon declaration)

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum; // missing return keyword
}

console.log(productOfSums([2, 2], [2, 2]));