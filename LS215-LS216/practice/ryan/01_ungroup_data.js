// You volunteered to help out teaching a preschool in your area! 
// You were given an array of all students and some important data about them, grouped by their teacher. 

// Create a function that will ungroup every student so you can look at their details individually.

// ungroupStudents([
//   {
//   teacher: "Ms. Car",
//   data: [{
//      name: "James",
//      emergenceNumber: "617-771-1082",
//   }, {
//      name: "Alice",
//      alergies: ["nuts", "carrots"],
//   }],
// }, 

// {
//   teacher: "Mr. Lamb",
//   data: [{
//     name: "Aaron",
//     age: 3
//   }]
// }
// ]) ➞ 
        
// [
//   {
//     teacher: "Ms. Car",
//     name: "James",
//     emergencyNumber: "617-771-1082",
//   }, 
//   {
//     teacher: "Ms. Car",
//     name: "Alice",
//     alergies: ["nuts", "carrots"],
//   }, 
//   {
//     teacher: "Mr. Lamb",
//     name: "Aaron",
//     age: 3,
//   }
// ]

// input: an array of teacher objects 

//         input teacher objects: {teacher's name, data: [{one object per student}] }

// output: an array of student objects

//         output student objects: {teacher:, name:, other data (other properties per student)}


// caveats;

// one object per student

// Strategies:

// methods:

// Object.keys()

// for/in loops

// forEach loops


// proto algo.:

// for every teacher in input,

//     for every data object in teacher:

//         create student object

//         teacher: current teacher name

//         name: current student name

//         add all other student properties to student

//         sture student object in output array

// return output array

//   {
//     teacher: "Ms. Car",
//     name: "James",
//     emergencyNumber: "617-771-1082",
//   }, 

function ungroupStudents(teachers) {
  let students = [];
  teachers.forEach(teacherObject => {
    teacherObject.data.forEach(studentData => {
      let student = {
        teacher: teacherObject.teacher,
      }
      for (let property in studentData) {
        student[property] = studentData[property];
      }
      students.push(student);
    })
  })

  return students;
}

console.log(
  ungroupStudents([
    {
    teacher: "Ms. Car",
    data: [{
      name: "James",
      emergenceNumber: "617-771-1082",
    }, {
      name: "Alice",
      alergies: ["nuts", "carrots"],
    }],
  }, 

  {
    teacher: "Mr. Lamb",
    data: [{
      name: "Aaron",
      age: 3
    }]
  }
  ])
)