// Exercise 05

// We are assigned the task to implement a range 
// function that returns an array of integers beginning and ending with 
// specified start and end numbers. When only a single argument is provided, 
// that argument should be used as the ending number and the starting number should be 0.

// Check our code below. Why do the example invocations fail with 
// an error saying Maximum call stack size exceeded? 

// Can you fix the code, so it runs without error and satisfies the requirements?

function range(start, end) {
  let range = [];
  if (end === undefined) {
    end = start;
    start = 0;
  } 
  
  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}


// Examples

console.log(range(10, 20));
console.log(range(5));