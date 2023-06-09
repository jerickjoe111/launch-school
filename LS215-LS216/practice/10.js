// ​Write a function that takes a two-dimensional array as 
// the argument and turns it into a flat array with all 
// duplicated elements removed. 

// Treat numbers and number strings (e.g., 1 and '1') as duplicates, 
// and keep the one that comes first in the result.

// input: a 2d array (array of subarrays)

// output: a 1d array without duplicates 


// Caveats:

// number and number strings are equivalent

// keep the original order (if number came first, only keep number if equivalent
//                           number string found, and viceversa)


// Examples:

// flattenAndUnique([]), // []
// flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]), // [1, 2, 3, 4, 5, 'a']
// flattenAndUnique([['1', 2, '3'], [1, '2', 3]]), // ['1', 2, '3']


// Strategies:


// 1. make copy of array

// 2. flatten copy

// 3. for every element in copy:

//       - if output array does not include element, (USE SPECIAL COMPARATOR)

//           - add element to output array

// 4. return output array

// helper 

// specialIncludes(array, element)

//   - compare each array element as String with element as String

//       - if some comparison turns up to be true, return true

//   - return false

function flattenAndUnique(array) {
  function objectsEqual(objectA, objectB) {
    let aEntries = Object.entries(objectA);
    let bEntries = Object.entries(objectB);
  
    if (aEntries.length !== bEntries.length) return false;
  
    for (let property in objectB) {
      if (objectA[property] !== objectB[property]) return false;
    }
  
    return true;
  }

  function specialIncludes(array, element) {
    for (let i = 0; i < array.length; i += 1) {
      let arrayElement = array[i];
      if (Array.isArray(arrayElement) || typeof arrayElement !== 'object') {
        if (String(arrayElement) === String(element)) return true;
      } else {
        if (objectsEqual(arrayElement, element)) return true;
      }
    }

    return false;
  }

  let copy = array.flat();
  let output = [];

  for (let i = 0; i < copy.length; i += 1) {
    let element = copy[i];
    if (!specialIncludes(output, element)) output.push(element);
  }

  return output;
}

console.log(
flattenAndUnique([]), // []
flattenAndUnique([[1, 2, 3],[['asdf'],['asdf'] ],[['asdf'],['asdf'] ], ['3', 4, 5, 'a']]), // [1, 2, 3, 4, 5, 'a']
flattenAndUnique([['1', 2, '3'], [1, '2', 3]]), // ['1', 2, '3']
flattenAndUnique([{'a': '1'}, {'a': '1'}]), // ['1', 2, '3']
)

function objectsEqual(objectA, objectB) {
  let aEntries = Object.entries(objectA);
  let bEntries = Object.entries(objectB);

  if (aEntries.length !== bEntries.length) return false;

  for (let property in objectB) {
    if (objectA[property] !== objectB[property]) return false;
  }

  return true;
}

let a = {'a': 1};

let b = {'a': '1'};

// console.log(objectsEqual(a, b)