// Exercise 03

// Take the number 735291 and rotate it by one digit to the left, 
// getting 352917. Next, keep the first digit fixed in place 
// and rotate the remaining digits to get 329175. 
// Keep the first two digits fixed in place and rotate again to get 321759. 
// Keep the first three digits fixed in place and rotate again to get 321597. 
// Finally, keep the first four digits fixed in place and rotate the final 
// two digits to get 321579. The resulting number is called the maximum 
// rotation of the original number.

// Write a function that takes an integer as an argument and 
// returns the maximum rotation of that integer. 
// You can (and probably should) use the rotateRightmostDigits 
// function from the previous exercise.

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined; 
  else if (array.length === 0) return [];

  let copy = [...array];
  let buffer = copy.shift();
  copy.push(buffer);

  return copy;
}

function rotateRightmostDigits(number, digits) {
  let array = [...String(number)];
  let rotatedPart = rotateArray(array.slice(-digits));

  return Number(
    array.slice(0, array.length - rotatedPart.length)
         .concat(rotatedPart)
         .join('')
    );
}

function maxRotation(number) {
  let rotationsCounter = String(number).length;

  for (let i = rotationsCounter; i > 1; i -= 1) {
    number = rotateRightmostDigits(number, i);
  }

  return number;
}

console.log(
  maxRotation(8703529146)
)
