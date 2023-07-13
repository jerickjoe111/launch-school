// Create an object factory for a student object. 
// The student object should have the following 
// methods and it should produce the expected results demonstrated in the sample code:

// info: Logs the name and year of the student.
// addCourse: Enrolls student in a course. A course is an object literal that has properties for its name and code.
// listCourses: Returns a list of the courses student has enrolled in.
// addNote: Adds a note property to a course. Takes a code and a note as an argument. 
//           If a note already exists, the note is appended to the existing one.
// updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
// viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.

function createStudent(name, year) {
  let courses = [];
  return {
    info() {
      return `${name} is a ${year} year student.`;
    },
    listCourses() {
      if (courses.length === 0) return courses;
      else {
        courses.forEach(c => console.log(c));
      }
    },
    addCourse(course) {
      courses.push(course);
    },
    addNote(courseCode, note) {
      for (let i = 0; i < courses.length; i += 1) {
        let course = courses[i];
        if (course.code === courseCode) {
          course.notes ? course.notes.push(note) : course.notes = [note];
          return;
        }
      }
    },
    updateNote(courseCode, note) {
      for (let i = 0; i < courses.length; i += 1) {
        let course = courses[i];
        if (course.code === courseCode) {
          course.notes ? course.notes = [note] : null ;
          return;
        }
      }
    },
    viewNotes() {
      courses.forEach(course => {
        if (course.notes) console.log(`${course.name}: ${course.notes.join('; ')}`);
      })
    },
  };
}
