// Take two objects with similar key values and combine them into a new object 
// summing any values that belong to the same category.

// There's a married couple, Hank and his spouse Sheila. 
// Hank works at a power plant making $70,000 a year, 
// and Sheila is a teacher making $40,000 a year. 
// They both earn rental income from separate rental properties, 
// Hank will get $12,000 and Sheila $10,000. 
// The new object will show their separate 
// income but combine the rental income because it fits the same category.

// const user1 = {
//   powerPlant: 70000,
//   rental: 12000
// }

// const user2 = {
//   teaching: 40000,
//   rental: 10000
// }

// becomes ➞ {
//   powerPlant: 70000,
//   teaching: 40000,
//   rental: 22000   // The rental income is added together.
// }

// Arguments
// user1Income (Object) ⁠— an income object for user1
// user2Income (Object) ⁠— an income object for user2

// returns: A new object with like values combined

// input: two objects

// output: a new object, with the properties from both input objects, 
//         but the value of common properties added together

// Caveats:

// sort properties by value in returning object (ascending)

// not same number of properties

// bad input/empty input ????

// not numeric values ???? (strings, other objects???) in common properties ????

// Examples

// {a: 1, b: 2  c: 3}
// {d: 1, c: 3}

// {a: 1, d: 1:, b: 2, c: 6}

// Strategies:

// init. output object

// get the length of longest object (more properties)

// for each i (0...length) of keys arrays from longest object

//   extract name for property from object 1

//   if there is already a property in output object with that name, continue:

//   if object 2 has a property of the same name

//     add values from common property

//     add property with resulting value to the output object

//   else

//     add property from object 1 (if property) at i

//     add property from object 2 (if property) at i 

// (sort returning object by property)

// get array from object properties (Object.entries)

// sort array by second element in each subarray (entry)

// convert that array into an object (Object.fromEntries)

// // {a: 1, b: 2  c: 3}  1
// // {c: 1, d: 3}        2

// {a: 1, c: 3, d: 2}

// helpers: 

// property name in object ?? 

function combine(object1, object2) {
  function toNumber(argument) {
    if (Number.isNaN(argument)) return 0;
    else return Number(argument)

  }

  function sortObject(object) {
    let entries = Object.entries(object).sort((a, b) => a[1] - b[1])

    return Object.fromEntries(entries);
  }
  
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  let longestLength = Math.max(object1Keys.length, object2Keys.length)
  let outputObject = {};

  for (let i = 0; i < longestLength; i += 1) {
    let key1 = object1Keys[i];

    if (key1 in outputObject) continue;

    if (key1 in object2) {
      outputObject[key1] = toNumber(object1[key1]) + toNumber(object2[key1]);
    } else {
      let key2 = object2Keys[i];
      if(key1 in object1) outputObject[key1] = object1[key1];
      if(key2 in object2) outputObject[key2] = object2[key2];
    }
  }

  return sortObject(outputObject);
}

console.log(
  combine({a: NaN, c: 3, d: 2, e: undefined}, {a: 1})
)