// Exercise 10

// The array comparison function that we implemented in the Arrays lesson 
// (Alternate link if the previous link doesn't work) 
// implicitly assumed that when comparing two arrays, 
// any matching values must also have matching index positions. 
// The objective of this exercise is to reimplement the function 
// so that two arrays containing the same values—but in a different 
// order—are considered equal. For example, [1, 2, 3] === [3, 2, 1] should return true.

// function areArraysEqual(array1, array2) {
//   function sortByType(array) {
//     if (allSameType(array)) return array.slice().sort();
//     else return array.map(x => String(x)).sort();
//   }

//   function allSameType(array) {
//     return array.every(x => typeof x === typeof array[0])
//   }

//   if (array1.length !== array2.length) return false;

//   let sortedArray1 = sortByType(array1);
//   let sortedArray2 = sortByType(array2);

//   for (let i = 0; i < array1.length; i+= 1) {
//    if (sortedArray1[i] !== sortedArray2[i]) return false;
//   }

//   return true;
// }

function areArraysEqual(array1, array2) {
  return array1.length === array2.length &&
    array1.every( // compares ocurrences of each element in both arrays
      x => array1.filter(y => x === y).length === array2.filter(z => x === z ).length
    )

}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]) ===             true);
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]) ===             true);
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']) === true);
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]) ===       true);
console.log(areArraysEqual([1, 1, 1], [1, 1]) ===                false);
console.log(areArraysEqual([1, 1], [1, 1]) ===                   true);
console.log(areArraysEqual([1, '1'], ['1', 1]) ===               true);
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]) ===       false);
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]) ===           false);
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]) ===       false);
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]) ===             false);