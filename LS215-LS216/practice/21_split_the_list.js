// The function is given two parameters: an array of integers and the group's length. 

// Determine if it is possible to split all numbers from the array into 
// groups of the specified length such that there are consecutive numbers in each group, return true / false.

// Examples
// consecutiveNums([1, 3, 5], 1) ➞ true
// // It is always possible to create groups of length 1.

// consecutiveNums([5, 6, 3, 4], 2) ➞ true
// // Two groups of length 2: [3, 4], [5, 6]

// consecutiveNums([1, 3, 4, 5], 2) ➞ false
// // It is possible to make one group of length 2, but not a second one.

// consecutiveNums([1, 2, 3, 6, 2, 3, 4, 7, 8], 3) ➞ true
// // [1, 2, 3], [2, 3, 4], [6, 7, 8]

// consecutiveNums([1, 2, 3, 4, 5], 4) ➞ false
// // The list length is not divisible by the group’s length.

// input: an array of numbers, a number N (the length of the groups)

// output: a boolean (if it is possible to split all numbers from the array into groups
//                    of specified length, 
                   
//                    valid group: size N, 
//                                 consecutive numbers)


// make groups with numbers of size N

// all groups must be valid groups (size N, consecutive numbers)


// Caveats!!

// If list length is not divisible by the group's length, return false

// Bad/emptyi inputs ???

// always numbers ???

// empty arrays ???

// 0 ??? 

// order of the numbers does not matter ???

// Examples:

// 124568 -> false

// 12
// 45
// 68 (not valid)

// Strategy

// helpers

// group validator
// size one condition needed ???
// non consecutive numbers (sort numbers, every number after the first one is equal to the previous one + 1)

// input validator (list length is not divisible by the group length)
// list length % group length must be 0


// ds
// array for groups

// algo

// 123456

// [12][24][56]

// nested iteration

// array of used indeces

// validate input, IF NOT, RETURN FALSE

// for every number in list, i

//   init group to i

//   for every number in list, j (from 0)

//     if i === j, skip

//     if j is consecutive to i (i + 1) and (i was not used) and (j was not used) 
//         and group size is less than group limit

//         add number to group

//         add i to used

//         add j to used

//   if group is not valid, return false

// return true

// RETURN 



function consecutiveNums(list, groupSize) {
  function validInput(array) {
    return Array.isArray(array) 
      && array.length !== 0 
      && array.length % groupSize === 0;
  }
  
  function validGroup(group) {
    if (group.length !== groupSize) return false;
    for (let i = 1; i < group.length; i += 1) {
      if (group[i - 1] !== group[i] - 1) return false;
    }

    return true
  }

  if (!validInput(list)) return false;

  list.sort((a, b) => Number(a) - Number(b));

  let usedIndeces = [];
  let groups = []
  for (let i = 0; i < list.length; i += 1) {
    let group = [list[i]];

    for (let j = 0; j < list.length; j += 1) {
      if (i === j) continue;
      let isConsecutive = list[j] === group[group.length - 1] + 1;
      if (isConsecutive && !usedIndeces[i] && !usedIndeces[j] && group.length < groupSize) {
        group.push(list[j]);
        usedIndeces[j] = 1;
      }      
    }
    
    if (validGroup(group)) {
      usedIndeces[i] = 1;
      groups.push(group);
    }
  }

  return groups.every(g => validGroup(g)) && groups.length === list.length / groupSize;
}

console.log(
  consecutiveNums([1, 3, 5], 1),
  consecutiveNums([5, 6, 3, 4], 2),
  consecutiveNums([1, 3, 4, 5], 2),
  consecutiveNums([1, 2, 3, 7, 2, 3, 4, 6, 8], 3),
  consecutiveNums([1, 2, 3, 4, 5], 4)
)


// consecutiveNums([1, 3, 5], 1) ➞ true
// // It is always possible to create groups of length 1.

// consecutiveNums([5, 6, 3, 4], 2) ➞ true
// // Two groups of length 2: [3, 4], [5, 6]

// consecutiveNums([1, 3, 4, 5], 2) ➞ false
// // It is possible to make one group of length 2, but not a second one.

// consecutiveNums([1, 2, 3, 6, 2, 3, 4, 7, 8], 3) ➞ true
// // [1, 2, 3], [2, 3, 4], [6, 7, 8]

// consecutiveNums([1, 2, 3, 4, 5], 4) ➞ false