// Given two arrays smarr and bigarr, 
// we say smlst is an ordered subarray of bigarr 
// if all the elements of smarr can be found in bigarr, 
// and in the same order.

// Examples:

// [4, 3, 2] is an ordered subarray of [5, 4, 3, 2, 1].
// [5, 3, 1] is an ordered subarray of [5, 4, 3, 2, 1].
// [5, 3, 1] is not and ordered subarray of [1, 2, 3, 4, 5] 
//   since elements are not in the same order

// [1, 2, 3] is an ordered subarray of [3, 2, 1, 2, 3].

// Write a function that, given arrays smarr and bigarr, decides if smarr is an ordered subarray of bigarr.

// input: two arrays,

//         small array (subarray),

//         main array 

// output: a boolean

//         true if the small array is a subarray of the main array,
//               and the numbers are in the same order

// Caveats!!

// the numbers don't have to be consecutive in the main array  !!!!

// badinputs/empty inputs???

// validate inputs ???

// Examples:

// [4, 3, 2] is an ordered subarray of [5, 4, 3, 2, 1].

// [1, 2, 3] => [1, 3, 2, 4, 3] ????

// [5, 3, 1] [5, 4, 3, 2, 1].
//            ^     ^     ^


// Strategies:

// the subarray has to have two conditions:

//   - all the numbers in the subarray have to be present in main array

//       helper, main array includes all numbers in subarray 

//   - the numbers have to be in the same order

//       find the index 

// possible approach:

// init last seen index to 0

// for each number in subarray

//   set found number to false

//   (set loop dynamically with last seen index) 
//   for each index position in main array from last seen index 

//       if the number is not equal to the number in subarray, continue

//       else

//         set found number to true

//         set last seen index to index of found number

//         break

//   if number is not found (after inner loop), return false

// return true

// [1, 2, 3] 
      //  ^
// [3, 2, 1, 2, 3]
             
// j = 3


function isOrdSub(subarray, mainArray) {
  let lastSeenIndex = -1;
  for (let i = 0; i < subarray.length; i += 1) {
    let numberToFind = subarray[i];
    let numberSeen = false;
    for (let j = lastSeenIndex + 1; j < mainArray.length; j += 1 ) {
      let nextNumber = mainArray[j];
      if (nextNumber === numberToFind) {
        numberSeen = true;
        lastSeenIndex = j;
        break;
      }
    }
    if (!numberSeen) return false;
  }

  return true;
}

console.log(
  isOrdSub([4, 3], [3, 4]) === false,
  isOrdSub([4, 3, 2], [5, 4, 3, 2, 1]) === true,
  isOrdSub([5, 3, 1], [5, 4, 3, 2, 1]) === true,
  isOrdSub([5, 3, 1], [1, 2, 3, 4, 5]) === false,
  isOrdSub([1, 2, 3], [3, 2, 1, 2, 3]) === true,
  isOrdSub([0, 1, 0, 1], [1, 0, 1, 0, 1]) === true,
  isOrdSub([0, 1, 0, 1], [1, 1, 1, 1, 0, 0, 0, 1, 1, 0]) === false,
  isOrdSub([0, 1, 0, 1, 1, 0, 1], [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0]) === false,
  isOrdSub([1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1], [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1]) === false,
  isOrdSub([1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1], [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1]) === true,
)