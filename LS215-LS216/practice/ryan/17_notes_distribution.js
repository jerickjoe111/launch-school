// Create a function that takes an array of students 
// and returns an object representing their notes distribution. 

// Keep in mind that all invalid notes should not be counted in the distribution. 

// Valid notes are: 1, 2, 3, 4, 5

// Example
// getNotesDistribution([
//   {
//     "name": "Steve",
//     "notes": [5, 5, 3, -1, 6]
//   },
//   {
//     "name": "John",
//     "notes": [3, 2, 5, 0, -3]
//   }
// ] ➞ {
//   5: 3,
//   3: 2,
//   2: 1
// })

// input: an array of student objects:

//       {
//         Name: string,
//         notes: an array of numbers,
//       }

// output: a notes distribution object:

//         {
//           for each (VALID) note, 
//           one property, and the number of notes of that number in all student objects
//         }

// Caveats!

// bad inputs???
// empty inputs ???
// needs validation ???

// all types are correct ??

// non string numbers???

// not every note number is valid !!!

// only valid are numbers between 1 and 5, both inclusive (helper??)

// Does the output order matter ???

// Examples;

// {jack, [1, 0, 2, NaN]}

// {john, [1, 0, 2, 2, 3, Infinity]}

// {
//   1: 2,
//   2: 3,
//   3: 1,
// }

// Strategies:

// helper (number validator) if number is between 1 and 5 (number >= 1 AND number <= 6)

// init. output object

// for each student:

//     for each number in the notes array:

//         if number is not valid, continue,

//         else,

//           if there is a property name with that number in the output object

//             add one to its value

//           else

//             add property to the output object, with a value of one

// return output object

function getNotesDistribution(students) {
  function validNote(number) {
    return number >= 1 && number <= 5;
  }

  let output = {};
  students.forEach(student => {
    let notes = student.notes;
    for (let i = 0; i < notes.length; i += 1) {
      let noteNumber = notes[i];
      if (validNote(noteNumber)) {
        if (noteNumber in output) {
          output[noteNumber] += 1;
        } else {
          output[noteNumber] = 1;
        }
      }
    }
  });

  return output;
}

let a = 2
let o = {'1': 'test'}

console.log(
getNotesDistribution([
  {
    "name": "Steve",
    "notes": [5, 5, 3, -1, 6]
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }])
)

// ] ➞ {
//   5: 3,
//   3: 2,
//   2: 1
// })