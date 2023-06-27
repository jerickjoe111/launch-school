// Create a function that takes an object and returns an object 
// of all entries having unique marks. If the marks are the same, take who is eldest.

// Examples
// getObject({
//   "0": { age: 18, name: "john", marks: "400" },
//   "1": { age: 17, name: "julie", marks: "400" },
//   "2": { age: 16, name: "Robin", marks: "200" },
//   "3": { age: 16, name: "Bella", marks: "300" }
// }) ➞ {
//   "0": { age: 18, name: "john", marks: "400" },
//   "1": { age: 16, name: "Robin", marks: "200" },
//   "2": { age: 16, name: "Bella", marks: "300" }
// }

// getObject({
//   0: {age: 18, name: 'john', marks: '400'},
//   1: {age: 17, name: 'julie', marks: '400'},
//   2: {age: 16, name: 'Robin', marks: '200'},
//   3: {age: 16, name: 'Bella', marks: '300'},
//   4: {age: 16, name: 'john', marks: '250'},
//   5: {age: 15, name: 'julie', marks: '250'}
// }) ➞    {
//   0: {age: 18, name: 'john', marks: '400'},
//   1: {age: 16, name: 'Robin', marks: '200'},
//   2: {age: 16, name: 'Bella', marks: '300'},
//   3: {age: 16, name: 'john', marks: '250'}
  /*

  input: object as:

      number: {age: number, name: string, marks: string (number)},
      number: {age: number, name: string, marks: string (number)},
      number: {age: number, name: string, marks: string (number)},

  ouput: 
      object with the same characteristics, but only those properties whose values contain unique marks
        (same object, without repeated marks)

------------ **Types Involved** -------------

object,
numbers,
strings

------------ **Caveats & Questions** -------------

different names can have the same mark!

always same type of arguments?
always an argument?
validation of arguments?

all input object properties will have the correct format age, name, marks ???

same name, different marks???

always numeric marks strings??? always integers??



------------ Examples/Test Cases/Edge's ------------

// getObject({
//   "0": { age: 18, name: "john", marks: "400" },
//   "1": { age: 17, name: "julie", marks: "400" },
//   "2": { age: 16, name: "Robin", marks: "200" },
//   "3": { age: 16, name: "Bella", marks: "300" }
// }) ➞ {
//   "0": { age: 18, name: "john", marks: "400" },
//   "1": { age: 16, name: "Robin", marks: "200" },
//   "2": { age: 16, name: "Bella", marks: "300" }
// }

0, john, 1: robin, 2: bella

------------------ Strategies ------------------

first, sort object arguments by age:

helper same marks in output object || array used marks !!

  valid person:

    for each property in input object

      - for each property in person object,

        - there is no other person in input object with that same marks (helper uniqueMarks(mark) OR

        - there is other person with the same marks, but current person is the oldest (helperOldest(age, mark))

    return true


helperOldest(age, name, marks)

  set flag Oldest to true;
  for every property in input object

    - get person object

    - if person name is equal to name, continue

    - if person marks is equal to marks and age is greater than provided age, set flag to false

  return false


//   "0": { age: 18, name: "john", marks: "400" },
//   "1": { age: 17, name: "julie", marks: "400" },
//   "2": { age: 16, name: "Robin", marks: "300" },
//   "3": { age: 17, name: "Bella", marks: "300" }

{
  "0": { age: 18, name: "john", marks: "400" },

}

-------------------- Algorithm ---------------------

1.

2.

3.

4.

5.

*/

function getObject(persons = {}) {
  function uniqueMarks(findMarks) {
    let counter = 0;
    for (let person in persons) {
      if (persons[person].marks === findMarks) counter += 1;
    }
  
    return counter < 2;
  }
  
  function isOldest(name, age, marks) {
    for (let person in persons) {
      if (persons[person].marks === marks && 
          persons[person].name !== name &&
          persons[person].age > age) return false;
    }
    return true
  }

  let output = {}
  let counter = 0;
  for (let person in persons) {
    let personData = persons[person];
    if (uniqueMarks(personData.marks) || isOldest(personData.name, personData.age, personData.marks)) {
      output[counter] = personData;
      counter += 1;
    }
  }


  return output;
}

const p = console.log

p(
  getObject(
    {
        "0": { age: 18, name: "john", marks: "400" },
        "1": { age: 17, name: "julie", marks: "400" },
        "2": { age: 16, name: "Robin", marks: "200" },
        "3": { age: 16, name: "Bella", marks: "300" }
      }
  )
)