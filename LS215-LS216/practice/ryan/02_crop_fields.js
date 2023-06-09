// You're given a 2D array / matrix of a crop field. 
// Each crop needs to be hydrated. 
// Each water source hydrates the 8 tiles around it. 
// With "w" representing a water source, and "c" representing a crop, 
// is every crop hydrated?

// input: a 2d array (a matrix)

// output: a boolean ( if every c is in contact with a w in any of the 8 possible directions)

// // The matrix won't be always a square, 
// but each row will have the same length

// Examples:

// cropHydrated([
//   [ "w", "c" ],
//   [ "w", "c" ],
//   [ "c", "c" ]
// ]) ➞ true

// cropHydrated([
//   [ "c", "c", "c" ]
// ]) ➞ false
// // There isn"t even a water source.

// cropHydrated([
//   [ "c", "c", "c", "c" ],
//   [ "w", "c", "c", "c" ],
//   [ "c", "c", "c", "c" ],
//   [ "c", "w", "c", "c" ]
// ]) ➞ false


// Directions:
//    x      y
// up -1    0
  
// right 0 1

// down 1 0

// left 0 -1

// top right -1 1

// top left -1 -1 

// bot right 1 1

// bot left 1 -1

// Strategies:

// iterate through every  coordinate 

//   get i => number of rows (main array length)

//   get j => number of columns (first subarray length)

// if it is a 'w', skip

// if it is a 'c':     

//     for every  direction (8)

//       get current coordinates (i, j)

//       add direction increment value (i to x, j to y) to current coordinates

//       if value in resulting coordinates is a 'w': 
              
//               skip to new square

//       else, calculate other direction

//       if the code reaches this point (no w found for this crop,); RETURN FALSE

// return true
//                     array of subarrays, one for each direction
// const for directions [[-1, 0],[0, 1],[1,0],[0, -1],[-1, 1][-1, -1],[1, 1],[1, -1]]


function cropHydrated(matrix) {
  function isCrop(square) {
    let row = square[0];
    let column = square[1];
    if (!matrix[row] || !matrix[row][column]) return false;
    return matrix[row][column] === 'c'; 
  }
  function isWater(square) { 
    let row = square[0];
    let column = square[1];
    if (!matrix[row] || !matrix[row][column]) return false;
    return matrix[row][column] === 'w'; 
  }

  const DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1,0],
    [0, -1],
    [-1, 1],
    [-1, -1],
    [1, 1],
    [1, -1]
  ];

  let rows = matrix.length;
  let columns = matrix[0].length;

  for (let row = 0; row < rows; row += 1) {
    nextSquare: 
    for (let column = 0; column < columns; column += 1) {
      let currentSquare = [row, column];
      if (isCrop(currentSquare)) {
        for (let direction = 0; direction < DIRECTIONS.length; direction += 1) {
          let coordinatesIncrement = DIRECTIONS[direction];
          let surroundingSquareX = currentSquare[0] + coordinatesIncrement[0];
          let surroundingSquareY = currentSquare[1] + coordinatesIncrement[1];
          
          if (isWater([surroundingSquareX, surroundingSquareY])) continue nextSquare;
        }
        
        return false;
      }
    }
  }

  return true;
}

console.log(
  cropHydrated([
  [ "w", "c" ],
  [ "w", "c" ],
  [ "c", "c" ]
]),
cropHydrated([
  [ "c", "c", "c", "c" ],
  [ "w", "c", "c", "c" ],
  [ "c", "c", "c", "c" ],
  [ "c", "w", "c", "c" ]
]),
cropHydrated([
  [ "c", "c", "c" ]
])
)