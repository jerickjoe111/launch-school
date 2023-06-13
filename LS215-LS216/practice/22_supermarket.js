// // There is a queue for the self-checkout tills at the supermarket. Your task is
// // write a function to calculate the total time required for all the customers to check out!

// // input
// // customers: an array of positive integers representing the queue. Each integer
// // represents a customer, and its value is the amount of time they require to check out.

// // n: a positive integer, the number of checkout tills.

// // output
// // The function should return an integer, the total time required.

// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12

// // Clarifications
// // There is only ONE queue serving many tills, and
// // The order of the queue NEVER changes, and
// // The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// // N.B. You should assume that all the test input will be valid, as specified above.

// input: a list of customers (array of integers)
//        the number of tills (checkout counters)

// output: total time required for all the customers to check out (an integer)


// Caveats;

// order of customes never changes

// first person in the queue is the first element in the array

// all input will be valid

// 0 ???

// negative integers ???

// number of tills could be any number

// Examples:

// [5,3,4], 1 => 12 total time

// [10, 2, 3, 3], 2 => 10

// till a 10 (10 minutes)

// till b 2, 3, 3 (8 minutes)

// but the total is 10

// [2,3,10], 2 => 12

// till a 2, 10  

// till b 3,

// Strategies:

// init. an array of tills (subarrays) 

//   for each till, push a new literal array into the tills array

// for each customer

//   if every till is occupied;

//     add the customer to the smaller value till

//   else

//     calculate which till add the customer add to with index % number of tills

//   add customer to corresponding till

// find till with longest time, add integers, return

// sort the tills array by the total value of each till, and return the last (max)

// helper

// init. tills array

// sum array

// all tills occupied

// find index of till with lesser value

// [5,3,4], 1 => 12 total time

// till a [5]

// [10, 2, 3, 8, 3], 2 => 13

// till a [10, 3]

// till b [2, 3, 8]

// [2,3,10], 2 => 12

// till a [2, 10]
// till b [3]

function queueTime(customers, numberOfTills) {
  function initializeTills(numberOfTills) {
    let output = [];
  
    for (let i = 0; i < numberOfTills; i += 1) {
      output.push([]);
    }
  
    return output
  }
  
  function sumTill(till) {
    if (till.length === 0) return 0;
    return till.reduce((acc, customer) => acc + customer );
  }
  
  function allTillsOccupied() {
    return tills.filter(till => till.length === 0).length === 0;
  }
  
  function shortestTill() {
    let minValue = Infinity;
    let shortestTillIndex = 0;
    tills.forEach((till, index) => {
      let currentTillValue = sumTill(till);
      if(currentTillValue < minValue) {
        minValue = currentTillValue;
        shortestTillIndex = index;
      }
    })
  
    return shortestTillIndex;
  }

  function whichTill(customerIndex) {
    return customerIndex % numberOfTills;
  }

  let tills = initializeTills(numberOfTills);

  for (let i = 0; i < customers.length; i += 1) {
    let customerTime = customers[i];
    if (allTillsOccupied()) {
      tills[shortestTill()].push(customerTime);
    } else {
      tills[whichTill(i)].push(customerTime);
    }
  }

  let longestTill = tills.sort((a, b) => sumTill(b) - sumTill(a))[0];
  return sumTill(longestTill);
}

console.log(
  queueTime([5,3,4], 1),
  queueTime([10,2,3,3], 2),
  queueTime([2,3,10], 2),

)