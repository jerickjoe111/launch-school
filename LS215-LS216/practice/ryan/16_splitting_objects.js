// You bought a few bunches of fruit over the weekend. 
// Create a function that splits a bunch into singular objects inside an array.

// splitBunches([
//   { name: "grapes", quantity: 2 }
// ]) ➞ [
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 }
// ]


// splitBunches([
//   { name: "currants", quantity: 1 },
//   { name: "grapes", quantity: 2 },
//   { name: "bananas", quantity: 2 }
// ]) ➞ [
//   { name: "currants", quantity: 1},
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 },
//   { name: "bananas", quantity: 1 },
//   { name: "bananas", quantity: 1 }
// ]

// input: an array of fruit objects
//           (Name: a simple string
//             quantitiy: an integer
//             )

// output: an array of fruit objects (one fruit per quantity number of object!)


// Caveats:

// fruits have to be in the same order

// all input arrays will have fruits

// validate fruit object ?????

// (all valid numbers ?? ( negatives, 0, nan, infinity...))

// any repeated fruits???

// fruit name cases ??? non strings???

// Example:

// {banana, 2}

// output

// {banana, 1}
// {banana, 1}

// Strategies:

// init. output array

// nested iteration

//     forEach + classic for


// Algo:

// for each fruit:

//       get name of fruit
//       get quantity of fruit

//       quantitiy times do (for loop)

//           add one item to the output list

//           {name, quantitiy: 1}

// return output list

function splitBunches(fruits) {
  let output = [];

  fruits.forEach(fruit => {
    let fruitName = fruit.name;
    let fruitQuantity = fruit.quantity;

    for (i = 0; i < fruitQuantity; i += 1) {
      output.push(
        {
          name: fruitName,
          quantity: 1,
        }
      )
    }
  })

  return output;
}

console.log(
  // splitBunches([{ name: 'bananas', quantity: 1 }]), // [{ name: 'bananas', quantity: 1 }])
  // splitBunches([{ name: 'bananas', quantity: 2 }]), // [{ name: 'bananas', quantity: 1 }, { name: 'bananas', quantity: 1 }])
  // splitBunches([{ name: 'bananas', quantity: 2 }, { name: 'grapes', quantity: 2 }]), // [{ name: 'bananas', quantity: 1 }, { name: 'bananas', quantity: 1 }, { name: 'grapes', quantity: 1 }, { name: 'grapes', quantity: 1 }])
  splitBunches([{ name: 'cherry tomatoes', quantity: 3}, { name: 'bananas', quantity: 1 }, { name: 'grapes', quantity: 2 }, { name: 'cherry tomatoes', quantity: 3}]), // [{ name: 'cherry tomatoes', quantity: 1}, { name: 'cherry tomatoes', quantity: 1}, { name: 'cherry tomatoes', quantity: 1}, { name: 'bananas', quantity: 1 }, { name: 'grapes', quantity: 1 }, { name: 'grapes', quantity: 1 }, { name: 'cherry tomatoes', quantity: 1}, { name: 'cherry tomatoes', quantity: 1}, { name: 'cherry tomatoes', quantity: 1}])
)



