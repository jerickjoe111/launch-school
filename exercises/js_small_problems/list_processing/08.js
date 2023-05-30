// Exercise 08

// Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. 
// Each element in the grocery list contains a fruit name and a number that represents the desired quantity of 
// that fruit. The output array is such that each fruit name appears the number of times equal to its desired 
// quantity.

function buyFruit(fruits) {
  return fruits.reduce((output, [fruit, quantity]) => {
      for (let i = 0; i < quantity; i += 1) output.push(fruit);
      return output;
    },
    []
  );
}
