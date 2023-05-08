// Exercise 09

// The oddities function takes an array as an argument and returns a new array 
// containing every other element from the input array. 
// The values in the returned array are the first (index 0), 
// third, fifth, and so on, elements of the input array. 
// The program below uses the array returned by oddities as 
// part of a comparison. 
// Can you explain the results of these comparisons?

function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
oddities(['abc', 'def']) === ['abc'];         // false

// This is the case because the arrays being compared are two different objects, despite the fact
// that both have elements with the same values; when comparing objects, the `===` operator returns `true` 
// only if both operands refer to/are the same object. We get `false` in both cases because we are comparing
// different arrays, different objects.