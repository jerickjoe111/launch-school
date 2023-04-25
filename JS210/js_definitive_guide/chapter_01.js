// This is a comment

// A variable is a symbolic name for a value.
// Variables are declared with the let keyword:
let x;

// Values are assigned to values with an = sign:
x = 0;
// A variable evaluates to its value

// JavaScript's most important datatype is the object/
// An object is a collection of name/value pairs, or string-to-value map.

let book = {
  topic: 'JavaScript',
  edition: 7
};

// Access the properties of an object with . or []:

book.topic
book['edition']

// Create new properties by assignment.

book.author = 'Flanagan';

// Conditionally access properties with ?. (safe navigation) (ES2020)

book?.contents?.ch01?.sect1

// JS also supports arrays

let primes = [2, 3, 5, 7];
primes[0]

primes.length
primes[primes.length - 1 ]

// Add a new element by assignment
primes[4] = 9;

// Operators

// Arithmetic:

1 + 1 
1 - 1 
1 * 1 
1 / 1 

'1' + '1' // => '11' On strings, + concatenates them.

// Shorthands:

let count = 0;

count++
count--
count += 1
count -= 1
count *= 1
count * 3

// Equality and relational operators test wether two values are equal, unequal, less than, greater than...
let x_ = 1, y = 3;

x_ === y // Strict equality
x_ !== y
x_ < 7
x_ > 7
x_ <= 7
x_ >= 7
'two' === 'three' // False
'two' > 'three' // True (tw comes after th in ASCII)
false === (x_ > y) // True

// Logical operators:

(x_ === y) && (x_ > y)
(x_ !== y) || (x_ > y)


// Functions are parameterized blocks of JS code that we can invoke.
// This is a function definition called plus1:
function plus1(x) {
  return x + 1
}

plus1(3) // => 4

// Functions are values and can be assignes to variables.
let square_ = function(x) {
  return x * x;
}

square(plus1(3))

// Shorthand for function definitions:
// (used when we want to pass an anonymous function as an argument to another function)
const plus1 = x => x + 1; // x is assigned to the return value from the anonymous function after =>
const square = x => x * x;
plus1(x)
square(plus1(3))

// A function to compute the absolute value of a number

function abs(x) {
  if (x >= 0) {
    return x;
  }
  else {
    return -x;
  }
}

abs(-10) === abs(10) // => True