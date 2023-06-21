// The function is given a list of lists of certain length n. 
// Each element in the list is a cell marked by the list index from 
// 0 to n - 1. Each cell contains keys - as list of integers - to other cells in the list. 
// The cell 0 is open; that is where you find first keys to other cells. 

// Open those cells and find new keys again.

// Go open other cells with new keys. 

// Keep on repeating opening new cells while you discover new keys. 

// Given the keys placement in different cells, 

// determine if it is possible to open all cells, return true / false.

// Examples
// openAll([[1], [0]]) ➞ true
// // Cell_0 has a key to cell_1. It is possible to open all two cells.

// openAll([[1], [2], [3], []]) ➞ true
// // The placement allows to open all cells in a row.

// openAll([[1, 3], [3, 0, 1], [2], [0]]) ➞ false
// // It is not possible to open cell_2.

// openAll([[2, 1], [1], [2], [4], [0, 1]]) ➞ false, "open only 0, 1, 2"
// // It is possible to open only cells 0, 1, 2. Cells 3, 4 stay closed.
/*

input; an array of cells

      each cell: 

            - contains integers
            - each integer represents a key for the cell in the array position of input array

output: a boolean

        - true if it's possible to open all cells

------------ **Types Involved** -------------

arrays,
integers

------------ **Caveats & Questions** -------------

you start with the key 0 already (the first element (cell) in the input array is opened) !!

you can go to any cell in the row (input array)
we can perform multiple passthroughs

special numbers

empty inputs ??
no arguments ???

input validation/ default values ???

------------ Examples/Test Cases/Edge's ------------

// openAll([[1], [0]]) ➞ true

// openAll([[1], [2], [3], []]) ➞ true

keys [0, 1, 2]
[[1], [2], [3], []]
  0    1     2   3
// // The placement allows to open all cells in a row.

// openAll([[1, 3], [3, 0, 1], [2], [0]]) ➞ false

  0       1          2    3
[[1, 3], [3, 0, 1], [2], [0]]

keys [0, 1, 3]

// openAll([[2, 1], [1], [2], [4], [0, 1]]) ➞ false, "open only 0, 1, 2"
 
0        1    2    3    4
[[2, 1], [1], [2], [4], [0, 1]]

keys [0, 1, 2], 

------------------ Strategies ------------------

keep an array of the keys you've found
keep an array of the already opened keys

(if you don't have the key for the next array ???)

if current index (cell) is not included in the keys arrays, return false

we just need 2 passthroughs:

one to get keys, the other one to make sure we already find all the necessary keys

-------------------- Algorithm ---------------------

1. init keys to [0]

2. init opened cells

3. for each cell, keys + index i

      - if keys include i:
          - add cell number to opened cells (set opened cells at i to a 1)
          - add all numbers in array to keys (if they are not already there)

4. for each cell (for loop) and index i,

      - if i is in opened cell (if opened cell at i) continue;
      
      - if we don't have the key to the cell (i is not in keys)
          - return false

5. return true

*/

const p = console.log

function openAll(cells) {
  function addKeys(keysFound) {
    keysFound.forEach( key => {
      if (!keys.includes(key)) keys.push(key);
    });
  }

  let keys = [0];
  let openCells = [];

  cells.forEach((cell, index) => {
    if (keys.includes(index)) {
      openCells[index] = 1;
      addKeys(cell);
    }
  })

  for (let i = 0; i < cells.length; i += 1) {
    if (openCells[i]) continue;
    
    if (!keys.includes(i)) return false;
  }

  return true;
}

p(
openAll([[1], [0]]),
openAll([[1], [2], [3], []]),
openAll([[1, 3], [3, 0, 1], [2], [0]]),
openAll([[2, 1], [1], [2], [4], [0, 1]]),
)

// openAll([[1], [0]]) ➞ true

// openAll([[1], [2], [3], []]) ➞ true

// keys [0, 1, 2]
// [[1], [2], [3], []]
//   0    1     2   3
// // The placement allows to open all cells in a row.

// openAll([[1, 3], [3, 0, 1], [2], [0]]) ➞ false