// Write two functions:

// One that returns the maximum product of three numbers in an array.
// One that returns the minimum product of three numbers in an array.
// Examples

// maxProduct([-8, -9, 1, 2, 7]) ➞ 504

// maxProduct([-8, 1, 2, 7, 9]) ➞ 126

// minProduct([1, -1, 1, 1]) ➞ -1

// minProduct([-5, -3, -1, 0, 4]) ➞ -15

// find all possible combinations from array of size 3

// map these combinations to the product of their 3 numbers

// find max value
// find with min value

// return both in an array


function maxProduct(numbers) {
  let products = [];

  for(let i = 0; i < numbers.length -2; i++){
    for(let j = i + 1; j < numbers.length -1; j++){
      for(let k = j + 1; k < numbers.length; k++){
         products.push([numbers[i] * numbers[j] * numbers[k]]);
      }
    }
  }
  
  return Math.max(...products.map(product => product[0]));
}

function minProduct(numbers) {
  let products = [];

  for(let i = 0; i < numbers.length -2; i++){
    for(let j = i + 1; j < numbers.length -1; j++){
      for(let k = j + 1; k < numbers.length; k++){
         products.push([numbers[i] * numbers[j] * numbers[k]]);
      }
    }
  }
  
  return Math.min(...products.map(product => product[0]));
}

console.log(
  maxProduct([-8, -9, 1, 2, 7]), // ➞ 504
  maxProduct([-8, 1, 2, 7, 9]), // ➞ 126
  minProduct([1, -1, 1, 1]), // ➞ -1

  minProduct([-5, -3, -1, 0, 4]), // ➞ -15
)