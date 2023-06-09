// Create a function that returns which chapter is NEAREST to the page you're on. 
// If two chapters are equidistant, return the chapter with the higher page number.

// All page numbers in the dictionary will be valid integers.
// Return the higher page number if ever two pages are equidistant (see last test case).

Examples: 

// nearestChapter({
//   "Chapter 1" : 1,
//   "Chapter 2" : 15,
//   "Chapter 3" : 37
// }, 10) ➞ "Chapter 2"


// nearestChapter({
//   "New Beginnings" : 1,
//   "Strange Developments" : 62,
//   "The End?" : 194,
//   "The True Ending" : 460
// }, 200) ➞ "The End?"


// nearestChapter({
//   "Chapter 1a" : 1,
//   "Chapter 1b" : 5
// }, 3) ➞ "Chapter 1b"


// input: a book Object, and a chapter integer

// output: the book title of the nearest page to the input chapter integer

// book object

// chapter          page
// property name_    property value


// Examples:

// nearestChapter({
//   "Chapter 1" : 1,
//   "Chapter 2" : 15,
//   "Chapter 3" : 37
// }, 10) ➞ "Chapter 2"


// compute page difference:

// chapter 1: 9

// chapter 2: 4

// chapter 3: 27


// Strategies:


// compute page difference of first chapter

// store chapter name, and difference

// for every chapter in book after the first:

//   - compute page difference

//   - if difference is less or equal than stored chapter:

//       store chapter and page difference

//       continue to the new chapter

//   - if difference is greater than stored chapter:

//       stop iteration

// return name of the stored chapter

// nearestChapter({
//   "Chapter 1" : 1,
//   "Chapter 2" : 15,
//   "Chapter 3" : 37
// }, 10) ➞ "Chapter 2"

// saved: ch. 2, 5

// difference; 27


// nearestChapter({
//   "Chapter 1a" : 1,
//   "Chapter 1b" : 5
// }, 3) ➞ "Chapter 1b"

// saved 1b, 2,

// methods:

// save first chapter

// calc. diff. 
// input integer - page number of chapter

// object.keys[0], and calculate differnce:

// for in 

function nearestChapter(book, currentPage) {
  let chapterNames = Object.keys(book);
  let firstChapter = chapterNames[0];
  let savedChapter = [firstChapter, Math.abs(currentPage - book[firstChapter])];

  for (let i = 1; i < chapterNames.length; i += 1 ) {
    let currentChapterName = chapterNames[i];
    let currentChapterPageDifference = Math.abs(currentPage - book[currentChapterName]);

    if (currentChapterPageDifference <= savedChapter[1]) {
      savedChapter = [currentChapterName, currentChapterPageDifference];
    } else {
      break;
    }
  }

  return savedChapter[0];
}

console.log(
  nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3),

nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10),
nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200)
)
// cu  chap 
// 10 - 1 = 9
// 10 - 15 = 5
// 10 - 37 = 27



// 62 - 199