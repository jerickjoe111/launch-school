// Given an object literal of student names and an array of their test scores over the semester, 
// return a list of all the students who passed the course (in alphabetical order). 
// However, there is one more thing to mention: the pass mark is 100% in everything!

// Examples
// whoPassed({
//   "John" : ["5/5", "50/50", "10/10", "10/10"],
//   "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
//   "Adam" : ["8/10", "22/25", "3/5", "5/5"],
//   "Barry" : ["3/3", "20/20"]
// }) ➞ ["Barry", "John"]

// whoPassed({
//   "Zara" : ["10/10"],
//   "Kris" : ["30/30"],
//   "Charlie" : ["100/100"],
//   "Alex" : ["1/1"]
// }) ➞ ["Alex", "Charlie", "Kris", "Zara"]

// whoPassed({
//   "Zach" : ["10/10", "2/4"],
//   "Fred" : ["7/9", "2/3"]
// }) ➞ []


// input: a students object: (each student is a property)

//       {
//         name: an array of grades in fraction format
//       }

// output: an array of strings (names of the students that have passed everything)
        
//         the strings must be sorted alphabetically (case insensitively????)


// Caveats:

// passed mark is 100%

// to be in the output array, the student must pass every grade (100% in everything)

// Cases:

// empty arrays?

// invalid grades in grades array???

// Strategies:

// helpers

//       find out if grade is passing or not (regular exp.)

//         extract two numbers, if both are equal, return true;

//       student has passed everything (array as argument)

//         (use every) for every grade in the array, the student passes

//       sort alphabetically ??

//         convert both strings to lowercase, and compare them in that form

// init. output array

// for each property in students object

//   store property name (that comes with the for in loop)

//   get array of grades

//   if student passes ?
//     add student name to output array

// sort output array

// return output array




function whoPassed(studentsObject) {
  function passingGrade(grade) {
    let numbers = grade.match(/\d+/g);
    return numbers[0] === numbers[1];
  }
  
  function studentPasses(grades) {
    return grades.every(grade => passingGrade(grade));
  }

  let passingStudents = [];

  for (let name in studentsObject) {
    let grades = studentsObject[name];

    if (studentPasses(grades)) passingStudents.push(name)
  }

  passingStudents.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();

    if (a < b) return -1;
    else if (b < a) return 1;
    else return 0;
  });

  return passingStudents
}

console.log(
whoPassed({
  "John" : ["5/5", "50/50", "10/10", "10/10"],
  "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
  "Adam" : ["8/10", "22/25", "3/5", "5/5"],
  "Barry" : ["3/3", "20/20"]
}),
whoPassed({
  "Zara" : ["10/10"],
  "Kris" : ["30/30"],
  "Charlie" : ["100/100"],
  "Alex" : ["1/1"]
})
)