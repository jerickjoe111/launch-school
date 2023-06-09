// Given an array of numbers and a value for n, 
// split the numbers into n-sized groups. 
// If we imagine that these groups are stacked on top of each other (see below), 
// return the column number that has the greatest sum. 
// If two or more columns have the same sum, return the one with the smallest column number.

// input: an array of numbers and an integer n

// output: an integer (number of column ONE INDEXED, WITH THE greatest sum)



// Caveats:

// the list will always divide into equal-length groups

// the matrix will not always be a square !



// build a matrix


// calculate sum of columns


// return number of column with the greatest sum (ONE INDEXED)

// Examples

// nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
// n = 4


// [
//   [4, 14, 12,  7],
//   [14, 16, 5, 13],
//   [7, 16, 11, 19]
// ]

// // 1, 2, 3, 4 (column)
// // 25, 46, 28, 39 (sum)

// This would return 2


// [
//   [1, 2, 3],
//   [3, 2, 1]
// ]

// 1

// Strategies:

// 1 chalenge: build matrix

// 2 chalenge: sum columns

// 3 chalenge: find greatest sum, with the smallest column number


// chal.1

// calculate number of rows = length of nums / input integer n
// 12 / 4 = 3 rows

// number of columns == input integer n 
// 4 columns

// init a new array with const. (number of rows)
// fill array with empty arrays

// nested iteration: 

// counter 
// number of rows = i 

// number of columns j
// instert into matrix i,j, number at counter index position

// chal. 2

// sum columns

// for each column (n)

//  begin from row(0), column
//  add value to total sum
//  add + 1 to row 
//  until matrix[row] is undefined

// chal. 3

// find greatest sum

// if two columns have the same sum, return column with smaller number (index + 1)

// they are not sorted, so we have to check all columns

// sum = 0 

// if sum is greater than saved sum, save new sum (max found)

// store column data [number, sum]


// find first column in column data list with sum equal to max found

// return column number



function colWithMaxSum(numbers, n) {
  function buildMatrix() {
    let rows = numbers.length / n;
    let columns = n;
    let matrix = [];
    let indexNumbers = 0
    for (let i = 0; i < rows; i += 1) {
      matrix.push([]);
      for (let j = 0; j < columns; j += 1) {
        matrix[i].push(numbers[indexNumbers]);
        indexNumbers += 1;
      }
    }
    return matrix;
  }

  function sumColumn(matrix, columnNumber) {
    let sum = 0;
    let row = 0;
    while (matrix[row]) {
      sum += matrix[row][columnNumber];
      row += 1;
    }

    return sum;
  }

  let matrix = buildMatrix()
  let greatestSum = 0;
  let columnsData = [];
  for (let column = 0; column < n; column += 1) {
    let currentSum = sumColumn(matrix, column);
    if (currentSum >= greatestSum) greatestSum = currentSum;
    columnsData.push([column + 1, currentSum]);
  }

  return columnsData.find(([_, sum]) => sum === greatestSum)[0];
}
let nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
let n = 4
console.log(
  colWithMaxSum([1,2,3,4,5,6,7,8,9], 3),
  colWithMaxSum(nums, n)
)