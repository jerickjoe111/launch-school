// Exercise 02

// Read through the following code. Currently, it does not log the expected result. 
// Explain why this happens, then refactor the code so that it works as expected.

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

// console.log(person === otherPerson);    // false -- expected: true

// The strict comparison operator, when both operands are objects, only return true when
// both operands are the same object, even when the objects have the same properties.

function equalProperties(object1, object2) {
  let properties1 = Object.keys(object1);
  for (i = 0; i < properties1.length; i += 1) {
    let property = properties1[i];
    if (object1[property] !== object2[property]) return false;
  }
  return true;
}

console.log(equalProperties(person, otherPerson)); // true