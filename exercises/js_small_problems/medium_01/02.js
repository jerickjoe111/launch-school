// Exercise 02

// Write a function that rotates the last n digits of a number. 
// For the rotation, rotate by one digit to the left, 
// moving the first digit to the end.

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

console.log(
  rotateRightmostDigits(735291, 1),      // 735291
  rotateRightmostDigits(735291, 2),      // 735219
  rotateRightmostDigits(735291, 3),      // 735912
  rotateRightmostDigits(735291, 4),      // 732915
  rotateRightmostDigits(735291, 5),      // 752913
  rotateRightmostDigits(735291, 6),      // 352917
)