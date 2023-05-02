// Write a function that takes a number of rows as the argument nStars 
// and logs a square of numbers and asterisks. 
// For example, if nStars is 7, log the following pattern:
  
  // 1******
  // 12*****
  // 123****
  // 1234***
  // 12345**
  // 123456*
  // 1234567

function generatePattern(pattern_size) {
  for(let i = 1; i <= pattern_size; i += 1) {
    let pattern = '';
    for(let number = 1; number <= i; number += 1) pattern += String(number);
    for(let stars = pattern_size - i; stars > 0; stars -= 1) pattern += '*';
    console.log(pattern)
  }
}

generatePattern(3);