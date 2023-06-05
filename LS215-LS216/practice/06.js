// Write a function called sumIntervals/sum_intervals that accepts an array of intervals, 
// and returns the sum of all the interval lengths. 
// Overlapping intervals should only be counted once.

// Intervals are represented by a pair of integers in the form of an array. 
// The first value of the interval will always be less than the second value. 

// Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals

// List containing overlapping intervals:

// [
//    [1, 4], LENGTH = 3
//    [7, 10], LENGTH = 3
//    [3, 5]  LENGTH = 2
// ] intervals 1 and 2 overlap, so we count interval 1, and we set the [0] of overlapping interval to [1] of overlapped interval

// The sum of the lengths of these intervals is 7. 
// Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

// input: an array of INTERVALS

//       INTERVAL: 2-elements array (always [0] is less than [1] == valid interval)
                
//                 has a length property equal to [1] - [0]

// output: an integer: THE SUM OF THE LENGTHS OF ALL RECEIVED INTERVALS


// Caveat!

// OVERLAPPING intervals should always be counted once !

//             OVERLAPPING INTERVAL:  when one or more interval[0] lays within the range of another interval,
//                                    it is an OVERLAPPING INTERVAL
//                                     (
//                                       [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], 
//                                       which has a length of 4.
//                                     )                      
//                                     (maybe we can pre-process input, converting overlapping intevals in single interval?)


// Examples: 

// sumIntervals( [
//    [1, 2], l 1
//    [6, 10], l 4
//    [11, 15] l 4
// ] ) => 9

// sumIntervals( [
//    [1, 4], 3
//    [7, 10], 3
//    [3(4), 5] 2 (1)
// ] ) => 8(7)

// sumIntervals( [
//    [1, 5],
//    [10, 20],
//    [1, 6],
//    [16, 19],
//    [5, 11]
// ] ) => 19

// sumIntervals( [
//    [0, 20],
//    [-100000000, 10],
//    [30, 40]
// ] ) => 100000030

// Strategies:

// pre process input HELPER: transform intervals,

// for example:

// sumIntervals( [
//    [1, 4], 3
//    [7, 10], 3
//    [3(4), 5] 2 (1)
// ] ) => 8(7)

// order by [0]

// store [1] of first interval

// for every interval from 1 to -1...

//   if [0] is less than stored value:

//       convert [0] to stored value

//   store [1] of current interval

function sumIntervals(intervals) {
  function intervalLength(interval) {
    return interval[1] - interval[0]
  }

  intervals.sort((interval1, interval2) => interval1[0] - interval2[0] );

  let validIntervals = [intervals[0]];
  let lastIntervalEnd = intervals[0][1];
  let sum = intervalLength(intervals[0]);
  for (let i = 1; i < intervals.length; i += 1) {
    let currentInterval = intervals[i];
    if (currentInterval[0] < lastIntervalEnd) currentInterval[0] = lastIntervalEnd;
    
    if (currentInterval[1] > lastIntervalEnd) lastIntervalEnd = currentInterval[1];
      
    if (currentInterval[0] < currentInterval[1]) sum += intervalLength(currentInterval);
    
  }

  return sum;
}


let testy5 =  [ [ 2, 3 ], [ 2, 6 ], [ 2, 4 ], [ 2, 9 ], [ 2, 5 ] ] // ==> 7

// let testy6 = [[1, 5],[10, 20],[1, 6],[16, 19],[5, 11]] 

// let testy3 = [ 
//   [ 1, 4 ], 
//   [ 4, 6 ], 
//   [ 6, 8 ], 
//   [ 8, 10 ], 
//   [ 10, 12 ],
// ]


// console.log(sumIntervals(testy));
// console.log(sumIntervals(testy2));
// console.log(sumIntervals(testy3));
// console.log(sumIntervals(testy4));
console.log(sumIntervals(testy5));
// console.log(sumIntervals(testy6));