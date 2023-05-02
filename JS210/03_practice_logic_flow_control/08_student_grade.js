// Write a program to determine a student’s grade based on the average of 
// three scores you get from the user. Use these rules to compute the grade:

// If the average score is greater than or equal to 90 then the grade is 'A'
// If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
// If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
// If the average score is less than 50 then the grade is 'F'
// You may assume that all input values are valid positive integers.

function getGrade() {
  const GRADES_NUMBER = 3;

  const A_GRADE = 90; 
  const B_GRADE = 70; 
  const C_GRADE = 50;  

  const PROMPT_GRADE_MESSAGE = 'Please, enter score';
  const TOTAL_GRADE_MESSAGE = `Based on the average of your ${GRADES_NUMBER} scores your letter grade is`

  function average(array) {
    return array.reduce((a, b) => a + b, 0) / array.length;
  }

  let grades = [];
  for(let i = 0; i < GRADES_NUMBER; i += 1) {
    let grade = prompt(`${PROMPT_GRADE_MESSAGE} ${i}`)
    grades.push(Number(grade))
  }
  let average = average(array);
  let letter = 'F';
  switch (true) {
  case (average >= A_GRADE): 
    letter = 'A';
    break;
  case (average >= B_GRADE):
    letter = 'B';
    break;
  case (average >= C_GRADE):
    letter = 'C';
    break;
  }
  console.log(`${TOTAL_GRADE_MESSAGE} "${letter}"`);
}

getGrade();