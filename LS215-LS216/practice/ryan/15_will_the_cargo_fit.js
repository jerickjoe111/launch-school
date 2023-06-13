// A ship has to transport cargo from one place to another, while picking up cargo along the way. 

// Given the total amount of cargo (second array)

// and the types of cargo holds in the ship (first array)

// as arrays, 

// create a function that returns true if each weight of cargo can fit in one hold, and false if it can't.

// "S" means 50 cargo space.
// "M" means 100 cargo space.
// "L" means 200 cargo space.

// Examples
// willFit(["M", "L", "L", "M"], [56, 62, 84, 90]) ➞ true

// willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70 , 80, 90, 200]) ➞ false

// willFit(["L", "L", "M"], [56, 62, 84, 90]) ➞ true

function willFit(letters, weights) {
  const letterValues = {
    S: 50,
    M: 100,
    L: 200,
  }

  if (letters.length === 0) return 0;

  let totalWeight = weights.reduce((acc, value) => acc + value);
  let availableSpaces = letters.map(letter => letterValues[letter]);
  
  for (let i = 0; i < weights.length; i += 1) {
    let currentWeight = weights[i];
    if (availableSpaces.every(space => currentWeight > space )) {
      return false
    }
  }

  let totalSpace = availableSpaces.reduce((acc, value) => acc + value);
  return totalSpace >= totalWeight;
}

console.log(
willFit(["M", "L", "L", "M"], [56, 62, 84, 90]), // ➞ true

willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70 , 80, 90, 200]), // ➞ false

willFit(["L", "L", "M"], [56, 62, 84, 90]), // ➞ true
willFit(['S', 'S', 'S'], [100]), // => false
)