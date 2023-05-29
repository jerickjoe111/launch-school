// For this practice problem, 
// we'll represent rectangles as Arrays with two elements: a height and a width.

// Write a Function named totalArea that takes an Array of rectangles as an argument. 

// The Function should return the total area covered by all the rectangles.


function totalArea(rectangles) {
  return rectangles.reduce(
    (total, rectangle) => total + (rectangle[0] * rectangle[1]),
    0
  );
}


// Now, write a second Function named totalSquareArea. 
// This Function should calculate the total area of a set of rectangles, 
// just like totalArea. However, it should only include squares in its calculations: 
// it should ignore rectangles that aren't square.

function totalSquareArea(rectangles) {
  return rectangles.filter(rectangle => rectangle[0] === rectangle[1])
                   .reduce(
                      (total, rectangle) => total + (rectangle[0] * rectangle[1]),
                      0
                    );
}

