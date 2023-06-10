// "Write a function called doubler that doubles every value in an array"

// input: an array

// output: a new array??? with all values from input array, doubled


// Caveats:

// bad input, (empty arrays, non arrays?????)

// any type as element (primitive, just cropy; Object, clone)

// specials like null/false/undefined ????

// Examples:

// doubler([1,'a', true, false, null, undefined, NaN, {'a': 1}, [1], Infinity, 0, '0', ''])
//         [
//           1,1, 
//           'a', 'a', 
//           true, true,
//           null, null,
//           undefined, undefined,
//           etc,...
//       ]

// doubler([]) => []

// doubler() => []

// doubler('array') []

// Strategies:

// defense clause (non arrays, or non argument)

// defense remove sparse areas ????

// init. empty output array

// for every element in input array, 
//       if it is a primitive

        //     push twice

        //  if it an object (including array)

        //     clone twice, push twice

// return the output array

// helpers

// clone: (universal)

//   array/object

function doubler(inputArray) {
  function clone(object) {
    if (Array.isArray(object)) {
      return [...object];
    } else {
      return {...object};
    }
  }

  let output = [];
  if (!inputArray || !Array.isArray(inputArray)) return output;

  let filteredArray = inputArray.filter(() => true);

  filteredArray.forEach( element => {
    if (typeof element === 'object' && element !== null) {
      for (let i = 0; i < 2; i += 1) output.push(clone(element));
    } else {
      for (let i = 0; i < 2; i += 1) output.push(element);
    }
  })

  return output;
}


console.log(
  // doubler([[1,2], {'a': 1}]),
  // doubler(),
  // doubler([]),
  // doubler([1,,,,,,2]),
  doubler([1,'a', true, false, null, undefined, NaN, {'a': 1}, [1], Infinity, 0, '0', '']),
)