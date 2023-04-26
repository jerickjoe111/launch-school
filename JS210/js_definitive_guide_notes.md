## Chapter 3: Types, Values and Variables.

Computer programs work by manipulating values. (a number, a string, an object)

Types: the kind of values that can be represented and manipulated in a programming language. When a program needs to retain a value for future use, it assigns the value to a variable. Variables have names, and they allow use of those names in our programs to refer to values.

JavaScript Types:

  - Primitive Types:
    - Numbers
    - Strings
    - Booleans
    - Symbols
    - Big Integers
    - `null`
    - `undefined`


  - Object or _Compound_ Types:
    - Object
    - Function
    - Class
    - Array
    - Set
    - Map
    - Regular Expression
    - Date
  
### Primitive Types

Primitives are immutable in JS. When a function/method _modifies_ a primitive, like a string, it just returns a new string with the modifications.

#### Numbers

JavaScript uses the floating point system to represent all numbers.

JS primary numeric type, `Number`, is used to represent integers and to approximate real numbers using the 64-bit floating-point format defined by the IEEE 754 standard. LS: "The largest number that can be precisely stored is 9,007,199,254,740,991 (`Number.MAX_SAFE_INTEGER`). However, the maximum numeric value that can be represented is 1.7976931348623157e+308 (`Number.MAX_VALUE`). Any number greater than this is represented as Infinity."

JavaScript uses a floating point system to represent all numbers. 

Supported numeric literals:
  - Integers:
    - Base 10: `255`
    - Base 16: `0xff`
    - Base 2: `0b11111111`
    - Base 8: `0xff`
  - Floating-point Literals:
    - Traditional: `3.14`
    - Exponential: `6.02e23`, `6.02e-23`

We can use underscores within numeric literals to break long literals into chunks:

```javascript
const billion = 1_000_000_000;
```

JS includes the traditional operators to perform basic arithmetic (`+`, `-`, `*`, `/`, `%`, `**`). It also supporst more complex mathematical operations via a set functions and constants defined as properties of the `Math` object:

```javascript
Math.pow(2,53)           // => 9007199254740992: 2 to the power 53
Math.round(.6)           // => 1.0: round to the nearest integer
Math.ceil(.6)            // => 1.0: round up to an integer
Math.floor(.6)           // => 0.0: round down to an integer
Math.abs(-5)             // => 5: absolute value
Math.max(x,y,z)          // Return the largest argument
Math.min(x,y,z)          // Return the smallest argument
Math.random()            // Pseudo-random number x where 0 <= x < 1.0
Math.PI                  // π: circumference of a circle / diameter
Math.E                   // e: The base of the natural logarithm
Math.sqrt(3)             // => 3**0.5: the square root of 3
Math.pow(3, 1/3)         // => 3**(1/3): the cube root of 3
Math.sin(0)              // Trigonometry: also Math.cos, 
Math.atan, etc.
Math.log(10)             // Natural logarithm of 10
Math.log(100)/Math.LN10  // Base 10 logarithm of 100
Math.log(512)/Math.LN2   // Base 2 logarithm of 512
Math.exp(3)              // Math.E cubed
```

Arithmetic in JS does not raise errors in cases of overflow, underflow, or division by zero, etc.:

  - Overflow (when the result of an operation is larger/smaller than the largest/smallest representable number):
    - Larger: `Infinity`
    - Smaller: `-Infinity`
  - Underflow (when the result of a numeric operation is closer to zero than the smallest representable number):
    - From positive number: `0`
    - From negative number: `-0`
  - Others:
    ```javascript
      2 / 0; // => Infinity
      Math.sqrt(-1); // => NaN (Not a Number)
    ```

`NaN` does not compare equal to any other value, including itself. In order to do this, we need to use `isNan()` or `Number.isNaN`.

In order to avoid binary floating-point and rounding errors, use scaled integers, like integers of the smallest relevant units, for example when manipulating monetary values (representing amounts in cents, not fractional dollars.), or time durations (using seconds, not hours).

#### Strings

A string is an ordered sequence of 16-bit values, each of them usually a UNICODE character. Strings use zero-based index. The length of a string is the number of characters that contains.

String literals:
  - Single quotes: `'al""oha'`
  - Double quotes: `"al''oha"`
  - Backticks: ``al""o''ha``

Some characters can be escaped: `'It\'s there'`

String interpolation:
  The final value of a string literal in backticks is computed by evaluating any included expressions, converting the values of those expression to strings and combining those computed strings with the literal characters within the backticks.
  ```javascript
  let name = "Bill";
  let greeting = `Hello ${ name }.`;  // greeting == "Hello Bill."
  ```

The `+` operator concatenates strings, producing a new string.

Strings can be compared to each other using the traditional operators, by character ASCII code.
A string is strictly equal (`===`) to other if both have the exact same characters, in the same order.

JavaScript provides a rich API to work with strings:
```javascript
let s = "Hello, world"; // Start with some text.

// Obtaining portions of a string
s.substring(1,4)        // => "ell": the 2nd, 3rd, and 4th characters.
s.slice(1,4)            // => "ell": same thing
s.slice(-3)             // => "rld": last 3 characters
s.split(", ")           // => ["Hello", "world"]: split at delimiter string

// Searching a string
s.indexOf("l")          // => 2: position of first letter l
s.indexOf("l", 3)       // => 3: position of first "l" at or after 3
s.indexOf("zz")         // => -1: s does not include the substring "zz"
s.lastIndexOf("l")      // => 10: position of last letter l

// Boolean searching functions in ES6 and later
s.startsWith("Hell")    // => true: the string starts with these
s.endsWith("!")         // => false: s does not end with that
s.includes("or")        // => true: s includes substring "or"

// Creating modified versions of a string
s.replace("llo", "ya")  // => "Heya, world"
s.toLowerCase()         // => "hello, world"
s.toUpperCase()         // => "HELLO, WORLD"
s.normalize()           // Unicode NFC normalization: ES6
s.normalize("NFD")      // NFD normalization. Also "NFKC", 
"NFKD"

// Inspecting individual (16-bit) characters of a string
s.charAt(0)             // => "H": the first character
s.charAt(s.length-1)    // => "d": the last character
s.charCodeAt(0)         // => 72: 16-bit number at the specified position
s.codePointAt(0)        // => 72: ES6, works for codepoints > 16 bits

// String padding functions in ES2017
"x".padStart(3)         // => "  x": add spaces on the left to a length of 3
"x".padEnd(3)           // => "x  ": add spaces on the right to a length of 3
"x".padStart(3, "*")    // => "**x": add stars on the left to a length of 3
"x".padEnd(3, "-")      // => "x--": add dashes on the right to a length of 3

// Space trimming functions. trim() is ES5; others ES2019
" test ".trim()         // => "test": remove spaces at start and end
" test ".trimStart()    // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd()      // => " test": remove spaces at right. Also trimRight

// Miscellaneous string methods
s.concat("!")           // => "Hello, world!": just use + operator instead
"<>".repeat(5)          // => "<><><><><>": concatenate n copies. ES6
```


JavaScript supports the use of Regular Expressions (which are a data type by themselves), via a literal syntax: `/regexp/`

`RegExp` objects define a number of useful methods:
```javascript
let text = "testing: 1, 2, 3";   // Sample text
let pattern = /\d+/g;            // Matches all instances of one or more digits

pattern.test(text)               // => true: a match exists
text.search(pattern)             // => 9: position of first match
text.match(pattern)              // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#")       // => "testing: #, #, #"
text.split(/\D+/)                // => ["","1","2","3"]: split on nondigits
```
  
#### Boolean

Any JavaScript can be converted to a boolean:

_Falsy_ values in JS:

  - `undefined`
  - `null`
  - `0`
  - `-0`
  - `NaN`
  - `""` (empty strings)

All other values, including all objects (even empty arrays) are _truthy_.

#### `null`

It indicates the absence of a value (like Ruby's `nil`).

It can be thought as representing a program-level, normal, or expected absence of value.

No methods can be called on `null` (It cannot have properties)

#### `undefined`

It represents a deeper kind of absence: it is the value of variables that have not been initialized and the value you get when you query the value of an object property or array element that does not exist; it is also the return value of functions that do not explicitly return a value and the value of function parameters for which no argument is passed.

It is a predefined global constant (not a reserved keyword like `null`)

It can be thought as representing a system-level, unexpected, or error-like absence of value.

No methods can be called on `undefined` (It cannot have properties)

#### Symbol

They serve as non-string property names.

#### The Global Object

The global object is a regular JS object that serves a very important purpose: the properties of this object are the globally defined identifiers that are available to a JavaScript program.
When the JavaScript interpreter starts (or whenever a web browser loads a new page), it creates a new global object and gives it an initial set of properties that define:

- Global constants like undefined, Infinity, and NaN
- Global functions like isNaN(), parseInt() (§3.9.2), and eval() (§4.12)
- Constructor functions like Date(), RegExp(), String(), Object(), and Array() (§3.9.2)
- Global objects like Math and JSON (§6.8)

In Node, the global object has a property named `global` whose value is the global object itself.

In web browsers, the `Window` object serves as the global obnject fo all JS code contained in the browser window it represents. This global `Window` object has a self-referential `Window` property that can be used to refer to the global object.

ES2020 defined a `globalThis` as the standard way to refer to the global object in any context. 

### Immutable Primitive **Values*** vs. Mutable Object **References**

In JS, primitives are immutable, and objects are mutable. It is obvious for booleans and numbers; all string methods that appear to return a modified string are, in fact, returning a new string value.

Primitives are compared **by value**: two values are the same only if they have the same value.

Objects are compared **by reference**: two distinct objects are not equal even if they have the same properties and values, even two distinct arrays are not equal even if they have the same elements in the same order. Objects can be also understood as _reference types_: two objects values are the same if they refer to the same underlying object.

Assigning an object or array to a variable simply assigns the reference: it does not create a new copy of the object.


## Chapter 4: Expressions and Operators

An expression is a phrase of JavaScript that can be evaluated to produce a value.

Complex expressions are built from simpler expression **called primary expressions**. For example:

```javascript
let array = [1, 2, 3]

array[0]
```
The second line is an array access expression consisting of:
  - one simple expression that evaluates to an array: `array`
  - one simple expression that evaluates to an integer: `0`

The new complex expresison evaluates to the value stored at the specified index of the specified array.

### Primary Expressions:

Primary expressions are those that stand alone (they do not include any other simpler expression).

Primary expressions in JS are:
  - constant or literal values: ( like `1`, `'aloha'`, etc.)
  - certain keywords: `true`, `false`, `null`, `this`
  - references to variables, constants or properties of the global object: (like `i`, or `undefined`)

### Object and Array Initializers

Object and array initializers are expressions whose value is a newly created object or array, sometimes called object literals or array literals, although they are not truly literals.

They are not primary expressions because they include a number of subexpressions that specify property and element values.

An array initializer is a comma-separated list of expressions contained within square brackets:

```javascript
[1, 2, 3]

[1 + 1, 2 + 2] // => [2, 4]
```

Object initializer expressions are like array initializers expressions, but the square are replaced by curly braces, and each subexpression is prefixed with a property name and a colon.

```javascript
let p = {
  x: 1, 
  y: 2, 
  z: 3
};
```

Object literals can be nested;

```javascript
let p = {
  top: {x: 1, y: 2},
  bottom: {x: 3, y: 4},
};
```

### Function Definition Expressions

A function definition expression defines a JS function, and the value of such an expression is the newly defined function.

A function definition expression typically consists of the keyword `function` followed by a comma-separated list of zero or more identifiers (the parameter names) in parentheses and a block of JS code, the function body in curly braces:

```javascript
let square = function(x) { return x ** x; };
```

A function definition expression can also include a name for the function. Functions can also be defined using a function statement.

There is a compact function expression called arrow function.

### Property Access Expressions

A property access expression evaluates to the value of an object property or an array element. There are two syntaxes:

```javascript
expression . identifier

expression [ expression ]
```

In the first style the indentifier specifies the name of the desired property; in the second style the expression within square brackets specifies the name of the desired property of the object or the index of the desired array element. 

With either type of property access expression, the expression before the `.` or `[` is first evaluated. If the value is null or undefined, the
expression throws a `TypeError`, since these are the two JavaScript values that cannot have properties. 

If the object expression is followed by a dot and an identifier, the value of the property named by that identifier is looked up and becomes the overall value of the expression.

If the object expression is followed by another expression in square brackets, that second expression is evaluated and converted to a string.
The overall value of the expression is then the value of the property named by that string. 

In either case, if the named property does not exist, then the value of the property access expression is undefined. 

The `.identifier` syntax is the simpler of the two property access options, but notice that it can only be used when the property you want to
access has a name that is a legal identifier, and when you know the name when you write the program. If the property name includes
spaces or punctuation characters, or when it is a number (for arrays), you must use the square bracket notation. Square brackets are also used
when the property name is not static but is itself the result of a computation.


### Conditional Property Access and Invocation Expressions

Consider the use of the safe navigation operator (in JS called conditional invocation): `?.`

```javascript
o.m()     // Regular property access, regular invocation
o?.m()    // Conditional property access, regular invocation
o.m?.()   // Regular property access, conditional invocation
```
In the first expression, o must be an object with a property m and the value of that property must be a function. In the second expression, if o
is null or undefined, then the expression evaluates to undefined. But if o has any other value, then it must have a property m whose value is a function. And in the third expression, o must not be null or undefined. If it does not have a property m, or if the value of that property is null, then the entire expression evaluates to undefined.

### Evaluation Expressions


## Chapter 5: Statements

If JS expressions are evaluated to produce a value, statements are _executed_ to make something happen.

- Expressions with side effects, like assignments and function invocations, can stand alone as statements, and when used this way are known as - _expression statements_

- Declaration of variables and functions are called _declaration statements_.
 
- JS programs are nothing more than a sequence of statements to execute. We can control the order on which the statements are executed thanks to _control structures_. These are also statements:

  - Conditionals
  - Loops
  - Jumps

Statements in JS end with a semicolon `;`.

### Expression Statements

The simplest kinds of statements in JS are expressions that have side effects.

Assignments statements are a major category of expression statements:
```js
greeting = 'Hello ' + 'name';
i *= 3;
i++
```

Function calls are another major category of expression statements:
```js
console.log(debugMessage);
displaySpinner(); // A hypothetical function to display a spinner in a web app
```
These functions calls are expressions, but they have side effects that affect the host environment or program state, and they are used here as statements.

### Declarations

Declarations are used to define constants, variables, functions, classes and for importing and exporting values between modules.

Informally called statements, but technically they are not.

Declarations serve to define new values and give them names that we can use to refer to those values.

Declarations define the structure of the program itself; we can think about them as the parts of the program that are processed before the code starts running.

### Compound and Empty Statements

A compound statement allows you to use multiple statements where JS syntax expects a single statement:
```js
{
  x = Math.PI;
  cx = Math.cos(x);
  console.log('cos(π) = ' + cx);
}
```

The empty statement is the opposite: it allows you to include no statement where one is expected:

```js
;
```

### Control Structures

#### Conditionals

```js
if (expression) statement;
```

```js
if (expression) {
  // code
} else {
  // other code
}
```

```js
if (expression) {
  // code
} else if {
  // other code
} else {
  // other code
}
```

```js
switch(expression_1) {
case (to_compare): // each case will execute expression_1 === to_compare
  // code here
  break;
case (to_compare): 
  // code here
  break;
case (to_compare):
  // code here
  break;
default: // this block will be executed if none of the cases returned a truthy value
  //code
  break;
}
```

#### Loops

```js
while (expression) {
  // code
}
```

```js
do {
  // code
} while (expression);
```

```js
for(initialization_expression; test_expression; increment_expression) {
  // code
}
```

This loop is best explained with the `while` equivalent:

```js
initialization_expression;
while(test_expression) {
  // code
  increment_expression;
}
```
1. The initialization expression is evaluated once, before the loop begins; 
2. the test expression is evaluated before each iteration and controls whether the body of the loop is executed (if it evaluates to a truthy value, the body of the loop is executed)
3. The body of the loop is executed
4. The increment expression is evaluated. This has to be an expression with side effects in order to be useful.

Good idea to traverse a linked list and return the last node of the list:

```js
function tail(list) { // It returs the tail of the linked list 
  for(; list.next; list = list.next); // empty body; Traverses while list.next is truthy (the node has a pointer to the next node)
  return list;
}
```
Any of the three expression may be omitted, but the two `;` are required.

```js
for(let element of iterable_object) {
  // it passes each element to the block, one at a time
  // code
}
```
Avoid mutating the object on which we are iterating through.

```js
for(let property in object) {
  //
}
```
`for/in` loops through the property names of a specified object, passing each name to the block. This loop only enumerates properties whose names are not symbols, and of the properties whose names are strings, it only loops over the _enumerable_ properties. (Some properties are not enumerable by this loop, like JS built-in methods defined by core JavaScript)

#### Jumps

- `continue`: This statement makes the interpreter skip the rest of the body of a loop and jump back to the top of a loop to begin a new iteration.
- `break`: This statement makes the interpreter jump to the end of a loop of other statement.
- `return`: This statement makes the interpreter jump from a function invocation back to the code that invoked it and also supplies the value for that function invocation.

JavaScript allows statements to be named, or _labeled_, and `break` and `continue` can identify the specific loop or other statement label.

