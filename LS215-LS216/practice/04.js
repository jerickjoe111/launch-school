// A format for expressing an ordered list of integers is to use a comma separated list of either

// - individual integers

// - or a range of integers denoted by the starting integer separated from the end 
//   integer in the range by a dash, '-'. The range includes all integers in the interval 
//   including both endpoints. It is not considered a range unless it spans at least 3 numbers. 
//   For example "12,13,15-17" 

// Complete the solution so that it takes a list of integers in increasing order and returns 
// a correctly formatted string in the range format.

// input: an array of ordered natural numbers (all valid integers??? possible empty? possible strings?)
                            
// output: a string composed by comma-separated:

//         - individual integers
//         - ranges of integers

// what is a valid range: ??

//   all integers (no gaps) of at least 3 consecutive integers


//   for example, the list

//   [12, 14, 15, 16]
//   becomes
//   '12,14-16' <-- the range includes 3 numbers


//   another example: 
//   [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5]
//   becomes
//   "-10--8,-6,-3-1,3-5"

// [1, 3, 4, 5, 6] should become '1,3-6'


// Strategies

// init output string

// iterate through input array:
// - for every number, current integer, in input array:

//   if last integer in string is greater than current integer: skip

//   if next integer in array is not consecutive or this is the last integer in input array:

//     - add integer to output string
  
//   else if next integer in array is consecutive:

//     - count number of consecutives:

//       - if there are 3 or more consecutives:

//           - add current integer to output string
//           - add dash to output string
//           - add last consecutive integer (HOW TO FIND?)
//           - skip main iteration to next to last integer in range (HOW?)


// [1, 3, 4, 5, 6] should become '1,3-6'

// input array =  [1, 3, 4, 5, 6, 10] 
// output string = '1,3,4-6,'

function solution(list) {
  const minRangeSize = 3;

  function nextIsConsecutive(index) {
    return (list[index] === list[index - 1] + 1);
  }

  let outputString = '';
  let lastInString;
  for (let i = 0; i < list.length; i += 1) {
    let currentInteger = list[i]
    if (currentInteger <= lastInString) continue;

    let counter = 0;
    while (currentInteger + counter === list[i + counter]) counter += 1;

    let lastInRange;
    if (counter >= minRangeSize) {
      lastInRange = list[i + (counter - 1)];
      outputString += `${currentInteger}-${lastInRange},`;
    } else {
      outputString += `${currentInteger},`;
    }

    lastInString = lastInRange || currentInteger
  }

  return outputString.slice(0, -1);
}

// let array = [1, 3, 4, 5, 6, 7, 8, 9]; 
// let array2 = [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5];
// let test = solution(array);
// let test2 = solution(array2);

// console.log(test); // [1, 3, 9]
// console.log(test2); //  "-10--8, -6, -3-1, 3-5"

let test = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]

console.log(solution(test)) // -6,- 3-1, 3-5, 7-11, 14, 15 , 17-20