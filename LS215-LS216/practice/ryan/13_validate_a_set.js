// In the game Set, three cards form a set 
// if each of the cards are identical or completely different for each of the four properties. 

// All three cards must:

// Have the same color or different colors.
// Have the same number or different numbers.
// Have the same shades or different shades.
// Have the same shape or different shapes.

// The four properties are:

// Colors: red, purple, green
// Numbers: 1, 2, 3
// Shades: empty, lined, full
// Shapes: squiggle, oval, diamond

// Here, a set is represented by an array containing three cards. 

// Each card is represented by an object of properties and values.

// Write a function that determines whether three cards constitute a valid set.

// Here is an example of a set:

// [
//   { color: "red", number: 1, shade: "empty", shape: "squiggle" },
//   { color: "red", number: 2, shade: "lined", shape: "diamond" },
//   { color: "red", number: 3, shade: "full", shape: "oval" }
// ]

// // "Same" properties: color
// // "Different" properties: numbers, shading and shapes
// The following is not a set:

// [
//   { color: "red", number: 1, shade: "empty", shape: "squiggle" },
//   { color: "red", number: 2, shade: "lined", shape: "diamond" },
//   { color: "purple", number: 3, shade: "full", shape: "oval" }
// ]

// // Colors are not all identical, but not all different.
// Examples


// input: a cards object (three cards)

//         a card: an object with properties:
//                                          color, number, shade, shape

// output: a boolean (if cards form a set)


//         a set: 
//               all same color or completely different color
//               all same number or completely different number
//               all same shade or completely different shade
//               all same shape or completely different shape


// what if cards have all same property values expect in one property??? 
// example 1, true

// is there a hierarchy of properties???


// FOR EVERY PROPERTY:

//   IT MUST BE ALL EQUAL OR ALL DIFFERENT IN EACH CARD


// Caveats:

// bad input/empty input/invalid input ????


// Examples:

// isSet([
//   { color: "green", number: 1, shade: "empty", shape: "squiggle" },
//   { color: "green", number: 2, shade: "empty", shape: "diamond" },
//   { color: "green", number: 3, shade: "empty", shape: "oval" }
// ]) ➞ true

// isSet([
//   { color: "purple", number: 1, shade: "full", shape: "oval" },
//   { color: "green", number: 1, shade: "full", shape: "oval" },
//   { color: "red", number: 1, shade: "full", shape: "oval" }
// ]) ➞ true

// isSet([
//   { color: "purple", number: 3, shade: "full", shape: "oval" },
//   { color: "green", number: 1, shade: "full", shape: "oval" },
//   { color: "red", number: 3, shade: "full", shape: "oval" }
// ]) ➞ false

// Strategies:

// helper 

// forms set ???

//   remove duplicates, check size is 1 or 3


// extract all three values from each property in each card in an array

// remove duplicate values in that array

// if the length of that array is then either 1 or 3, it forms a set


// algo;

// for each property (in constant)

//     extract value into an array from each card

//     remove duplicates from that array

//     if the length of resulting array is 1 or 3, is valid,
//     else, return false


// return true

function formsSet(values) {
  let uniques = [...new Set(values)];
  let length = uniques.length;
  return length === 1 || length == 3;
}

function isSet(cards) {
  const PROPERTIES = ['color', 'number', 'shade', 'shape'];

  function formsSet(values) {
    let uniques = [...new Set(values)];
    let length = uniques.length;
    return length === 1 || length == 3;
  }

  for (let i = 0; i < PROPERTIES.length; i += 1) {
    let property = PROPERTIES[i];

    let values = [];
    for(let j = 0; j < cards.length; j += 1 ) {
      values.push(cards[j][property])
    }
   
    if(!formsSet(values)) return false;
  }

  return true;
}

console.log(
  isSet([
    { color: "green", number: 1, shade: "empty", shape: "squiggle" },
    { color: "green", number: 2, shade: "empty", shape: "diamond" },
    { color: "green", number: 3, shade: "empty", shape: "oval" }
  ]),
  isSet([
      { color: "purple", number: 3, shade: "full", shape: "oval" },
      { color: "green", number: 1, shade: "full", shape: "oval" },
      { color: "red", number: 3, shade: "full", shape: "oval" }
    ]),
    isSet([
        { color: "purple", number: 1, shade: "full", shape: "oval" },
        { color: "green", number: 1, shade: "full", shape: "oval" },
        { color: "red", number: 1, shade: "full", shape: "oval" }
      ])
)
