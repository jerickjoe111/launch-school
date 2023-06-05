// Write an algorithm that takes an array and moves all of the zeros to the end, 
// preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // => [false,1,1,2,1,3,"a",0,0]


// input: array of values (empty??) 
// output: same ??? array, with all integer 0s to the end, preserving the order of the other elements


// possible empty arrays? 

// mutate array in place or new array ???

// integers only? also -0? also '0' ???

// possible algo.:

//   count number of zeros in array

//   remove all zeros in array

//   push 0s to the end, count of zeros n. of times

// algo 2.: (new array)

//   count number of zeros

//   push all element that are not zeros into new array

//   add zeros to the new array 

function moveZeros(array) {
  let output = array.filter(element => element !== 0);
  let numberOfZeros = array.length - output.length;
  output.push(...Array(numberOfZeros).fill(0));
  return output;
}

let a = moveZeros([0, 1, 0, 0, 2, 3,]);

console.log(a)


