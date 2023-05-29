// input: array of student objects

//     each student:
//           id,
//           scores,
//               exams: array of integers
//               exercises: array of integers


// output: summary object:

//           studentgrades: array of strings (num + letter), one for student
//           exams: array of exam objects:
//                   average:
//                   min: 
//                   max:

// TODO

// for each student:
//   - compute exams average 
//   - compute total (sum) of exercises
//   - apply weight to exams average
//   - apply weight to exercises sum
//   - round up result 
//   - get letter grade
//   - create string: num. grade + letter grade

// general:
//   - output summary object:
//     -  studentGrades: array of all strings
//     - for each exam:
//         - calculate average:
//         - calculate min:
//         - calculate max:

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};


function generateClassRecordSummary(scores) {
  const EXAMS_WEIGHT = 0.65;
  const EXERCISES_WEIGHT = 0.35;

  function letterGrade(percentageGrade) {
    if (percentageGrade >= 93) return 'A';
    else if (percentageGrade >= 85 && percentageGrade < 93) return 'B';
    else if (percentageGrade >= 77 && percentageGrade < 85) return 'C';
    else if (percentageGrade >= 69 && percentageGrade < 77) return 'D';
    else if (percentageGrade >= 60 && percentageGrade < 69) return 'E';
    else return 'F';
  }

  function average(array) {
    return array.reduce((acc, grade) => acc += grade) / array.length;
  }

  function fullGradeString(grade) {
    return `${grade} (${letterGrade(grade)})`;
  }

  let summary = { studentGrades: [] };
  let examsAllGrades = scores[Object.keys(scores)[0]].scores.exams.map(() => []);

  for (let student in scores) {
    let studentScores = scores[student].scores;

    studentScores.exams.forEach((grade, i) => examsAllGrades[i].push(grade))

    let examsGrade = average(studentScores.exams) * EXAMS_WEIGHT;
    let exercisesGrade = studentScores
                         .exercises.reduce((sum, grade) => sum += grade) * EXERCISES_WEIGHT;
    let studentGrade = Math.round(examsGrade + exercisesGrade)

    summary.studentGrades.push(fullGradeString(studentGrade));
  }

  summary.exams = examsAllGrades.map( exam => {
    return {
             average: average(exam),
             minimum: Math.min(...exam),
             maximum: Math.max(...exam),
           }
    }
  );

  return summary;
}

