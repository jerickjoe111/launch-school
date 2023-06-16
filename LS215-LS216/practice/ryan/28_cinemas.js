// Given an array of seats, return the maximum number of new people which can be seated, 
// as long as there is at least a gap of 2 seats between people.

// Empty seats are given as 0.
// Occupied seats are given as 1.
// Don't move any seats which are already occupied, 
// even if they are less than 2 seats apart. 

// Consider only the gaps between new seats and existing seats.

// Examples
// maximumSeating([0, 0, 0, 1, 0, 0, 1, 0, 0, 0]) ➞ 2
// // [1, 0, 0, 1, 0, 0, 1, 0, 0, 1]

// maximumSeating([0, 0, 0, 0]) ➞ 2
// // [1, 0, 0, 1]

// maximumSeating([1, 0, 0, 0, 0, 1]) ➞ 0
// // There is no way to have a gap of at least 2 chairs when adding someone else.

/*

input: an array of seats (an array of zeroes and ones):

        zero: empty seat
        one: occupied seat

output: the number of new people that can be seated

        (new people can be seated only if they are two seats apart from other occupied seat)

------------ **Types Involved** -------------

NUMBERS: just 0 and 1

------------ **Caveats & Questions** -------------

bad inputs /empty inputs ??? return value ???
only zeroes and ones ???
also strings ??? 
VALIDATE INPUT ?????

can't move already seated people !!!!

------------ Examples/Test Cases/Edge's ------------

[1, 0, 0, 0] => 1

[0,0,0,0] => 2

[] => 0
[0] => 1
[0, 0] => 0 or 1
[0, 0, 0] => 1

[1, 0, 0, 0, 0, 1] => 0

------------------ Strategies ------------------
helper

can be seated ??? with number as argument (index)

  [0,0,0,0] => 2
   ^     ^
   0 
make copy of input array 

add a one to that index

  for every number from index - 2 to index + 2

      if there is a one (in the copy) in anyone of these indeces, 
          return false

add one to array copy into that index

add one to counter


-------------------- Algorithm ---------------------

make copy of input array 

for every index i in copy

  if number in copy at that i.pos is a 0, skip

  add a one to that index

    for every number from index - 2 to index + 2

        if there is a one (in the copy) in anyone of these indeces,
            delete that one from that index (reassign to 0)
            return false

add one to array copy into that index

add one to counter

return counter

...

[1, 0, 0, 0] => 1

copy: [1, 0, 0, 1]


[1,0,0,1] => 2


*/

function solution(seats) {
  function canBeSeated(possibleSeat) {
    seatsCopy[possibleSeat] = 1;
    for (let i = possibleSeat - 2; i <= possibleSeat + 2; i += 1) {
      if (i === possibleSeat) continue;
      if (seatsCopy[i] === 1) {
        seatsCopy[possibleSeat] = 0;
        return false
      }
    }
  
    seats[possibleSeat] = 0;
    return true;
  }

  if (!seats || !Array.isArray(seats)) return 0;

  let availableSeats = 0;
  let seatsCopy = [...seats];

  for (let i = 0; i < seats.length; i += 1) {
    if (seatsCopy[i] === 1) continue;

    if (canBeSeated(i)) {
      seatsCopy[i] = 1;
      availableSeats += 1;
    }
  }

  return availableSeats;
}

console.log(
  solution([]),
  solution([1, 0, 0, 0, 0, 1]),
  solution([0]),
  solution([0, 0]),
  solution([0, 0, 0]),
  solution([0, 0, 0, 0]),
  solution([0, 0, 0, 1, 0, 0, 1, 0, 0, 0]),

)