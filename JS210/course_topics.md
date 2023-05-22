# 01: Basics

## Primitive values, types and type conversions

There are two types of values: primitives (numbers, strings, booleans, `null`, `undefined`, etc.) and objects (arrays, maps, date objects, sets, etc...)

Primitives are _immutable_ and manipulated _by value_ in JavaScript. In any operation with assignment performed on a variable containing a primitive value, like a string, a new primitive is produced, and the variable is reassigned to the new value:

```js
let a = 'Alo';
a += 'ha'; // a is reassigned to the string resulting from adding its previous value 'Alo' and the literal 'ha'
a // => 'Aloha'

let b = 'aloha';
b.toUpperCase(); // a new, uppercase version returns from this method
b // => 'aloha'. b wasn't affected.

b = b.toUpperCase(); // but we can reassign b to a new string
b // => 'ALOHA'
```

On the other hand, objects are _mutable_ and manipulated _by reference_: we can modify them without changing their identity. Objects are called _compound_ values, as they are collections of many values; they contain data themselves, and it is the data within them (part of the object's state) what we reassign, thus permanently changing them without altering their identity:

```js
let a = [1, 2];

a.push(3); // We add a value to the object itself, permanently modifying it.

a // => [1, 2, 3];
```

...

JavaScript operators and statements expect values of different types, and it can perform conversions to those types without a warning (_coercions_); for instance, the `+` binary operator favors strings over numbers, while comparison operators, like `<` or `>=`, favor numbers: if one of the operands is not one of the favored types, the operator will silently convert it (or _coerce_) to the favored type and try the operation again.

(see `./conversions_table.md` and `./arithmetic_comparison_table.md`)

## Truthiness: `false` and `true` vs. falsy and truthy

`true` and `false` represent truth or falsehood, yes or no, on or off; these two keywords, `true` and `false` evaluate to these two values, respectively, and they are usually used in control structures (like `if` statements) or as the result of the comparison of two values via equality or comparison operators. However, in a boolean context (i.e.: when an operator or statement expects a boolean value), all other types in JavaScript, including objects and arrays, can be converted and behave like boolean values. When this happens, we say that some values are _truthy_ and others _falsy_. 

In JavaScript, _falsy_ values are: 
- `undefined`
- `null`
- `0`
- `-0`
- `NaN`
- `''` (an empty string)

All other values are _truthy_.

EXAMPLES:

```js
let a = 'Not changed';
if (undefined) a = 'Changed';
a // => 'Not changed'

let b = 'Not changed';
if ([]) b = 'Changed';
b // => 'Changed'
```

## Logical Operators

`&&`
For boolean operands, `&&` returns `true` if both operands are `true`, `false` otherwise. When the operands are not booleans, `&&` returns the first operand if it is _falsy_ (_shortcirtuits_), and the second operand otherwise.

```js
true && false // => false
false && true // => false
0 && true // => 0
true && [] // => []
```

`||`
For boolean operands, `||` returns `true` if at least one operand is `true`, `false` otherwise. For operands that are not booleans, `||` returns the first operand if it is truthy, and the second operand otherwise.

```js
true || false // => true
false || true // => true
0 || true // => true
true || [] // => true
```


## Understand the differences between loose and strict equality

Primitives are compared _by value_ and objects are compared _by reference_, however, JavaScript works with two kinds of equality, _strict_ and _loose_, represented by the `===` and the `==` operators, respectively. It is important to notice that the strict equality operator `===` does not convert its operands automatically: if two values are from different types, they are not _strictly equal_, and the operator will return `false`; but `==` (sometimes called the _equality operator with type conversion_) will implicitly convert values of different types, and it may consider them equal after the conversion, which is dangerous and a source of bugs. 

These are some other important differences between both operators: 

When using the strict equality operator `===`:

- If two values have different types, they are not equal.                      
- `null` is not strictly equal to `undefined`.                          
- `NaN` is not equal to anything, even to itself.                             
- Two numbers are strictly equal if they have the same value.              
- Two strings are strictly equal if they contain the EXACT same characters in the exact same position.
- Two objects are strictly equal if and only if they are the same object (Objects are compared by reference, not by the data they may contain).

But, when using the `==` operator:
- If two values don't have the same type, they are converted according to some rules:
  - When one operand is a string and the other is a number, it converts the string to a number and then strictly compares them.
  - `null` is equal to `undefined` in non-strict equality comparison.                                
  - Booleans are converted to numbers when the other operand is a number, and the comparison is tried again: `true` becomes `1`, `false` becomes `0`.
  - All other possible combinations are not equal.
- If two values are the same type, they are tested with the same criteria as in the strict equality operator.
- Objects are still compared by reference: if they are not the same object, they are not equal.

## Assignments and comparison (see primitive types, types and conversion)

In JS, primitives are immutable, and objects are mutable. This is obvious for booleans and numbers (the idea of 'mutating' them would make no sense), and all string methods that appear to return the same, modified, string are, in fact, returning a new string value.

The assignment operator `=` _binds_ a variable identifier, its left operand, to the value at its right (if it is an expression it will be evaluated, and the resulting value will become the value the variable will be bound or assigned to). If the right operand is a primitive type (like a number or a string ), we can talk about the variable 'containing' (this is an oversimplification) or _behave as containing_ the value. This means that the the primitive value is stored at the memory address associated to the variable (this is an oversimplification). But if the value is an object (sometimes called a _reference type_), the variable will store a reference to a specific address on memory in which the object is located, thus making variables act as _pointers_ in JavaScript. Assigning a variable to an array or an object simply assigns _the reference_: it does not create a new copy of the object.

The value of an assignment expression, is the value of the right-side operand. As a side effect, the `=` operator assigns the value on the right to the variable or property on the left so that future references to the variables or property evaluate to that value.

Primitives are compared **by value**: two values are the same if and only if they have the same value, but objects are compared **by reference**: two distinct objects are not equal even if they have the same properties and values, even two distinct arrays are not equal even if they have the same elements in the same order. Objects can be also understood as _reference types_: two objects values are the same if they refer to the same underlying object. However, JavaScript implements two ways of comparing values, and one of them converts implicitly or _coerces_ one of the operands to the type of the other operand according some arbitrary rules.

## `console.log` vs `return`

`console.log()` is a function that displays the value passed in as argument on the terminal or in the browser's console, depending on if we are executing the JavaScript code via Node.js or the browser. 

The `return` statement causes the function to stop executing and to return the value of its expression, if any, back to the caller. If `return` has no expression associated with it, the return value of the function is `undefined`. If a function does not contain a `return` statement, it simply executes the code in its body until it reaches the end, and then it returns `undefined`.



                                                                    ...



# 02: Functions and Variable Scope

## Variable Declaration, Initialization and Assignment

Variable declarations define the structure of the program itself and are processed before the code starts running (which leads to the _hoisting_ effect), allocating memory and resources for its correct execution. Variable declarations are usually referred to as _statements_; we can use `let`, `const`, and `var`, and, although, their syntax is similar, they have important differences.

Variable initialization is the assignment of an initial value to that variable, by associating an assignment expression (i.e.: `= 1`) to a variable declaration; it is a good programming practice to always initialize declared variables when possible. Variables declared with `const` have to be initialized at the time of their declaration.

(see 01::Assignments and Comparison)

## Types of Variables, variable scope, function scope and block scope.

We have three ways of declaring variables directly in JavaScript: `var`, `let`, and `const`. The `var` syntax is deprecated, and it should be avoided, but its use is still perfectly legal. There are some important differences between them.

- Variables and constants declared with `let` and `const` are _block scoped_. This means that they are only defined within the block of code in which their variable declarations appears (and thus in all subsequent nested blocks within that block). _Variables in the same or surrounding (outer) scopes are visible inside blocks and functions._

- Variables declared with `var` are not block-scoped. Instead, they are _function-scoped_: they'll be available (in scope) throughout the function's body, no matter how deeply nested they are within the function.

- All variables declared outside any function or block, in the topmost level, belong to the _global scope_. But global variables declared with `var` are implemented as _properties of the global object_ (we can refer to it via `globalThis`), while `let` and `const` global variables don't become properties of the global object.

- Unlike variables declared with `let` (and `const`, by definition), we can declare the same variable multiple times with `var`. 

### Scope, Lexical Scope and Scope Rules

The scope of a variable refers to the region of the code in which a variable is _defined_, within reach of the program.

JavaScript uses lexical scoping rules. This means that the program's textual (_lexical_) structure determines the variable's scope. In other words: _the code itself defines the scope_; a scope is created by a function even if the function never gets executed and has no set of own variables. The lexical scoping rules also have some important implications relative to _closures_. (see next topic)

Code outside any function or block belongs to the _global scope_, and _local scope_ refers to the code within a function or block, relative to an outer scope. Thus, a _hierarchy_ of scopes is defined at any given point in the program; when JavaScript tries to find a variable, it searches throughout this hierarchy _from the bottom to the top_. This means that it looks first in the reference local scope, and then up in the surrounding, outer scopes until it reaches the topmost level outside any function or block. This process stops the moment it finds the first variable with a matching name. A `ReferenceError` exception is thrown if the program can't find the variable anywhere in the scope hierarchy.

This hierarchy also implies that that variables in an inner scope can _shadow_, or hide, variables of the same name in an outer scope: this is legal, but a bad practice.

In non-strict mode, if JavaScript finds assignments of previously undeclared variables it converts them into global variables automatically. In strict mode, it throws an exception.

JavaScript class and function definitions are blocks, and so are the bodies of conditionals, loops, etc. Roughly speaking, if a variable was declared within a set of curly braces, then those curly braces delimit the region of code in which the variable or constant is defined. We cannot refer to that variable or constant before its declaration (however, their declaration are _hoisted_) For variables that are part of `for`, `for...of` and `for...in` loop, their scope is the loop body.

In Node and client-side JS modules, the scope of a global variable is the file that it is defined in. In traditional client-side JS, the scope of a global variable is the HTML document in which it is defined. That is: if one `<script>` declares a global variable or constant, that variable is defined in all the `<script>` elements in that document (that execute, after the `let` or `const` statement executes).

> Function definitions can be nested within other functions, and _they have access to any variables that are in scope where they are defined_.

## Lexical Scoping and Closures

Lexical scoping rules imply that functions are executed using the scope in effect _when they were defined_, not the scope in which they are executed. This is implemented by making the internal state of a function to contain, not only its code body, but also a reference to the scope in which the function's definition appears. This combination of the function object plus scope (the set of variable bindings, its _context_) is called a _closure_. In consequence, all functions are technically closures in JavaScript (although, because most functions are called in the same scope in which they are defined, it doesn't matter that they are, in fact, closures)

### Adding variables to the current scope

There are a number of ways to create a variable in the current scope:

Explicit ways:
- Declaring it with the `let` or `const` keyword
- Declaring it with the `var` keyword

Implicit ways:
- A function declaration creates a variable with the same name as the function
- Defining parameters, which work as local variables within the function's body
- A class declaration also creates a variable with the same name as the function

## Variable Assignment

(see 01::Assignment and Comparison)

Variable scoping rules apply to both assignment and referencing equally.

In non-strict mode, if JavaScript can't find a matching variable when assigning it a value, **it creates a new global variable instead**. This is dangerous and a source of bugs.

## Hoisting

Before the JavaScript interpreter starts executing the code, the JavaScript engines preprocess variable and function _declarations_ in order to reserve resources and memory for the correct execution of the program. In practice, we can talk about how these declarations seem to be _hoisted_, or moved up, to the top of the enclosing block or function, so that functions defined in this way may be invoked from code that appears _before their definition_. Note that this is not the case with functions defined as expressions: they don't _exist_ until their code is executed.

Something similar also happens with `var`, `let`, and `const` variables, however, there are some differences between the hoisting of functions and the hoisting of variables, and between the types of variable declarations:

- When a variable is declared with `var`, its _initialization_ remains when it was written, but the _declaration_ of the variables is hoisted to the top of the enclosing function, and we may refer to them before its initialization without raising an exception: the value, nevertheless, will be `undefined`. This is a source of bugs and one of the JavaScript aspects that the `let` and `const` variables sought to correct.

- `let` and `const` variables' declarations are hoisted too, but they are not given an initial provisional value like `undefined`, and an exception is thrown if we try to refer to them. However, the program is aware of their presence: they are left in an 'unset' state sometimes referred as the _Temporal Dead Zone_.

Hoisting has certain order, which becomes important when declaring functions and variables with the same name.

1. Functions declarations
2. Variables

EXAMPLES:

```js
calling() // logs 'London Calling!'

function calling() { // this function declaration is hoisted
  console.log('London Calling!');
}
```

```js
hoistedVariable // => undefined

var hoistedVariable = 'My declaration will be hoisted';
```

```js
anotherHoistedVariable // Throws an exception, but JavaScript is aware of this identifier:
                       // ReferenceError: Cannot access 'myVar' before initialization

let anotherHoistedVariable = 'My declaration will be hoisted too';                       
```

## How passing an argument into a function may or may not permanently change the value that a variable points to

Upon the function's invocation, when we pass an argument to the function, what actually happens is that the expression that we place between parentheses (usually a variable, sometimes a literal value or object) is evaluated, and the result of that evaluation is assigned to the corresponding parameter in the function's definition. This means that, if we pass a primitive value to a function, the parameter is assigned to the value, and _no operation performed on the variable within the function will alter it_, as we would be working on a different variable, the parameter. So, any apparent 'mutation' is actually a _reassignment_ of the local variable, without external effect, like this:

```js
function addOne(x) { // x is assigned to the number 1 which a is pointing to.
  x += 1; // x is reassigned to the result of adding 1 to its previous value. a is unaffected, as it remains pointing to the number 1.
}
let a = 1;
addOne(a);
a // => still 1. 
```

However, when we pass an object as an argument to the function, the parameter is assigned _to the same object (a reference to), not to a copy of that object_: any modification made to the object via the local variable within the function will have a permanent effect on the object, because both variables contain a reference to the same location in memory, where the object in question is stored:

```js
function addTwo(array) { // the parameter array is assigned to the same object we passed in on line 5
  array.push(1); // we permanently mutate the object via the local variable array
}
let a = [1];
addTwo(a);
a // => [1,2] // we have permanently mutated the object
```

If a function or method mutates its arguments or caller depends on the particular implementation, and we will have to find out by reading the documentation or by practice.

## Variables as pointers

Variables are handlers for values: they are names that contain references (_pointers_) to specific locations in memory, where the object referred is stored. When talking about primitive values (like numbers), we can say that the variables themselves _contain_ their value (this is an oversimplification, specially with strings), but in JavaScript all variables that are assigned to objects contain references (thus acting as pointers) to them. This implies that two different variables can point to (can contain the same reference) the same location in memory: any mutating operation on the object that these variables refer to will be seen when we refer any of these variables, as it is the same object what was mutated.

If the variable `a` refers to a primitive value `1`, and the code `let b = a;` is executed, we are making the variable `b` to hold the same value as `a`, but the reassignment of anyone of these values will not affect the other, as variables containing primitives are independent of each other:

```js
let a = 1;
let b = a;
a += 1; //
a // => 2 We've modified the value that a contains
b // => 1 Still points to this value
```

If the variable `x` refers to an object and the code `let y = x;` is executed, the variable `y` then is holding a reference to the same object, not a copy of that object. Any modifications made to the object through the variable `y` are also visible through the variable `x`:

```js
let array = [1];
let array2 = array;
array.push(2);
array1 // => [1, 2]
array2 // => [1, 2]
```

## Function definition and function invocation

Function definitions create function objects in order to assign them to variables or pass them as arguments to other functions, and they may include a list of _parameters_ that will work as local variables within the body of the function.

Function invocations provide values or _arguments_ for the function's parameters; every function invocation has to have a function identifier (a variable with the name of the function or a variable assigned to a function object) and a list of arguments between parentheses that may be empty. 

Function definitions can be nested within other functions, and they have access to any variables that are in scope _where they are defined_. This means that in JavaScript functions are _closures_, which enables important and powerful programming techniques.

## Function declarations, function expressions, and arrow functions

In JavaScript, there are three ways to define functions:

  - with the `function` keyword:

    - function declarations

    - function expressions

  - without the `function` keyword:

    - _arrow functions_

## Function Declarations

Function declarations consist of:

1. The `function` keyword
2. An identifier that names the function. The name is a required part of function declarations: the name of the function becomes a variable whose value is the function itself (A new local variable is created and is assigned to the function object)
3. A pair of parentheses around a comma-separated list of zero or more identifiers. These identifiers are the parameter names for the function: they will be assigned to the arguments upon the function's invocation and behave like local variables within the body of the function.
4. A pair of curly braces with zero or more statements inside. These statements are the body of the function: they are executed _whenever the function is invoked_.

Function declaration statements are _hoisted_ to the top of the enclosing script, block, or function so that functions defined in this way may be invoked from code that appears before the definition; they will be defined before the JavaScript interpreter begins to execute any of the code in that block.

The `return` statement causes the function to stop executing and to return the value of its expression, if any, to the caller. If the `return` statement does not have an associated expression, the return value of the function is `undefined`. If a function does not contain a `return` statement, it simply executes each statement in the function body until it reaches the end, and returns the `undefined` value to the caller.

EXAMPLES:
```JS
function myFunction() {
  console.log('I am defined by a declaration');
}
```

## Function expressions

Function expression look a lot like function declarations, but they appear within the context of a larger expression or statement, and the name is optional. 

Contrary to a function declaration, a function _expression_, does not declare a variable by itself: it depends on the user to assign the newly defined function object to a variable if there is the need. (It is an expression that evaluates to the function defined)

It is a good practice to use `const` with function expressions, so we don't accidentally overwrite our functions by assigning them to new values.

While most of the function expressions do not need names, If the function expression does include a name, that name will become a local variable within a function assigned to the function itself, necessary for recursive functions that need to refer to themselves or for debugging purposes.

Functions defined as expressions are not hoisted. These functions do not exist until the expression that defines them is actually evaluated: functions defined as expressions cannot be invoked before they are defined.

EXAMPLES:
```JS
const myFunction = function() {
  console.log('I am defined by an expression');
}
```

## Arrow functions

We can define functions using a compact syntax without a name, formed by: a comma-separated list of parameters, an arrow `=>`, and the body of the function in curly braces. The arrow function syntax makes them ideal when we need to pass one function to another function (_callbacks_), which is a common thing to do with array methods like `map()`, `filter()`, and `reduce()`.

This type of syntax also provides some syntactic sugar:

If the arrow function has exactly one parameter, we can omit the parentheses around the parameter list (but with no parameter an empty list `()` must be included). We also can omit the `return` keywords, the semicolon and the curly braces in the function's body if the body of the function is a single `return` statement.

If the body of the arrow function is a single `return` statement but the expression to be returned is an object literal, then we have to put the object literal inside parentheses to avoid syntactic ambiguity.

EXAMPLES:
```JS
[1, 2, 3].reduce((x, y) => x + y) // 6
```


## Implicit return value of function invocations

The `return` statement causes the function to stop executing and to return the value of its expression, if any, back to the caller. If `return` has no expression associated with it, the return value of the function is `undefined`. If a function does not contain a `return` statement, it simply executes the code in its body until it reaches the end, and then it returns `undefined`.

## First-class functions

In JavaScript, functions are objects, and they can be manipulated; JavaScript can assign functions to variables, pass them as arguments to another functions, etc. Since functions are objects, we can set properties on them and even invoke methods on them. This means that functions are first-class objects in JavaScript, which is a powerful feature. And, having this in mind, we see that we can enjoy having higher order functions. This specific term is used for functions that can accept other functions as arguments, and return other functions: the combination of higher order functions and the fact that functions form closures in JavaScript is one of its more useful tools.

## Partial function application

```js
function applyTitle(title, name) {
  return `${title} ${name}` 
}

function formalTreatment(title) {
  return function(name) { 
    return applyTitle(title, name);
  };
}

const addLordTitle = formalTreatment('Lord');
let name = 'Luke';
let formalName = addLordTitle(name);
formalName // => Lord Luke
```

Partial function application is an interesting technique allowed by the fact that functions are closures in JavaScript. With this technique, we can call a function `a` that, in turn, calls another function `b` that uses the arguments provided to `a`. While `b` expects two or more arguments, we can call `a` with just one argument: this is made possible because, at the moment of the _creation_ of `a` (not its invocation), the remaining, needed arguments for `b` were in scope, so this function `a` took them with it, thus forming a closure. In consequence, although we just provided a single argument to `a` upon invocation, `b` is able to 'find' the remaining arguments because they are part of the function `a`'s closure.

In the example, `a` would be the anonymous function returned by `formalTreatment()`; when this function object is created and returned, `title` formed part of its context, and, being needed by it (because it calls `applyTitle()` passing this argument), this anonymous function takes a copy of this variable, thus _forming a closure_ around it, saving it in its internal state. `b` would be `applyTitle()`. So, when we call the anonymous function that we assigned to the constant `addLordTitle()` from another, outer scope, we can supply just the `name` argument: this function kept a copy of `title` in its state, so `applyTitle()` is able to find it, and is correctly called from within the anonymous function assigned to `addLordTitle()` with the two arguments: `title` and `name`.

Partial function application is most useful when we need to pass a function to another function that won't call the passed function with enough arguments from a different scope.

Partial function application requires a reduction in the number of arguments we have to provide when we call a function. If the number of arguments isn't reduced, it isn't partial function application.

# Pure Functions and Side Effects

A function invocation that performs any of the following action is said to have _side effects_.

1. It reassigns any non-local variable.
2. It mutates the value of any object referenced by a non-local variable.
3. It reads from or writes to any data entity (files, network connections, etc.) that is non-local to our program.
4. It raises an exception.
5. It calls another function that has side effects.

Functions that have unexpected side effects are a major source of bugs.

### Side Effects through Reassignment

If the function reassigns any variable that is not declared inside the function, the function has a side effect.

### Side Effects through Mutation

If the function mutates an array or an object referenced by a variable in the outer scope, the function has a side effect.

### Side Effects Through Input/Output

These are all side effects: 
- 	Reading from a file on the system's disk
- 	Writing to a file on the system's disk
- 	Reading input from the keyboard
- 	Writing to the console
- 	Accessing a database
- 	Updating the display on a web page
- 	Reading data from a form on a web page
- 	Sending data to a remote website
- 	Receiving data from a remote website
- 	Accessing system hardware such as:
     -	The mouse, trackpad, or other pointing devices
     -	The clock
     -	The random number generator
     -	The audio speakers
     -	The camera

Accessing the system date or time and generating random numbers are also side effects!

### Side Effects through Exceptions

If a function raises an exception and doesn't catch and handles it, it has a side effect.

### Side Effects through Other Functions

- `console.log()` has a side effect
- `readline.question()` has multiple side effects
- `new Date()` has a side effect (it accesses the system clock)
- `Math.random()` has a side effect (it accesses the random number generator)

### Mixing Side Effects and Return Values

Most functions should return a useful value, or they should have a side effect, but not both.

### Pure Functions

A pure function is a function that does not have _side effects_ and it is completely _deterministic_. In other words, a pure function's return value depends only on its arguments; invoked with the same arguments, it will always return the same value.



                                                ...




# 03: Arrays

## Arrays and Operators

Arithmetic operators convert the array into a string before performing the operation. (see conversion table)

Relational comparison operators return `true` or `false` in unexpected ways, and shouldn't be used.

## Working with Strings, Arrays, and Objects. In particular, we should be thoroughly familiar with the basic Array iteration methods (`forEach`, `map`, `filter`, and `find`) and how to use Object methods to access the keys and values in an Object as an Array.

### Iterators

- All of these methods accept a function as their first argument, and invoke that function once for each element (or some elements) of the array. If the array is sparse, the function will not be invoked for nonexistent elements. In most cases, this function is supplied three arguments:
  1. The value of the array element
  2. The index of the array element
  3. The array itself

- None of these methods modify the array on which they are called.

- It is very common to use arrow syntax for function expressions for the iterator's first argument.

#### `forEach`

It iterates through an array, invoking the function argument for each existent (avoids gaps in sparse arrays) element. It does not provide a way to terminate iteration: there is no `break` statement. 

#### `map`

It invokes the function for each element on the array, and returns a new array containing the return values returned by each function invocation. If that array is sparse, the function will not be invoked for non-existent elements, but the returned new array will have the same length and the same missing elements (sparse areas)

#### `filter`

It returns a new array containing the elements of the array on which is invoked for which the passed in function returns `true`. It skips the missing elements, and the returned new array is always dense.

To easily close the gaps in a sparse array, do this:

```js
let dense = sparse.filter(() => true);
```

To close the gaps and remove `undefined` and `null` elements, to this:

```js
let cleaned = uncleaned.filter(x => x !== undefined && x !== null);
```
#### `find`

This method looks for elements in the array for which the passed-in function returns a truthy value. It stops the iteration as soon as it has found such an element. `find()` returns the matching element, and `undefined` if no matching element is found.

### How to use Object methods to access the keys and values in an Object as an Array

#### Enumerating Properties

- The `for/in` loop runs the body of the loop once of each enumerable property of the specified object, assigning the name of the property to the loop variable. Inherited built-in methods are not enumerable.

- We can get an array of property names for an object and then looping through that array normally with a `for/of` or a classic `for` loop. There are different functions to get an array of an object's property names:

    1. `Object.keys()` returns an array of the names of the enumerable own properties; it does not include non-enumerable properties, inherited properties, or properties with a symbol as name. It includes array indices as strings.

    2. `Object.getOwnPropertyNames()` is like `Object.keys()`, but returns an array of the names of non-enumerable own properties as well.

    3. `Reflect.ownKeys()` returns all own property names, both enumerable and non-enumerable, and both string and Symbol property names.

EXAMPLES:
```js
let myObject = { one: 1, two: 2, three: 3 };

for (let property in properties) {
  console.log(`Name: ${property}, Value: ${myObject[property]}`);
}

let properties = Object.keys(myObject);
for (let property of properties) {
  console.log(`Name: ${property}, Value: ${myObject[property]}`);
}
```

## Understand that arrays are objects, and be able to determine whether you have an Array

JS arrays are a particular kind of JS object (`typeof [] //=> true`), and array indexes are actually just property names with integer values added to them. Access to indexed array elements is frequently much faster than access to ordinary object properties thanks to the optimization of an array's implementation. 

`Array.prototype`, which includes a wide range of array manipulation functions, defines the properties that arrays inherit. The majority of these methods are _generic_, which means they are compatible with any _array-like_ object and true arrays. Strings in JS behave like character arrays too.

A `length` property is present in each JavaScript array (and objects. In functions it expresses its arity). This attribute describes the number of array elements in nonsparse arrays (_dense_). `length` for sparse arrays is always greater than the highest index of any element. Properties with non-index names are not included in the `length` count.

The `[]` operator is used to access an element of an array. To the left of the brackets must be a reference to the array. The expression should be any arbitrary expression with a non-negative integer value. This syntax can be used to read and write an array element's value.

The array always keeps the value of the `length` property when property names are non-negative integers less than 232 - 1. 

Similar to how square brackets are used to access object properties, the `[]` operator in JavaScript turns the numeric array index we specify into a string, and uses that string as the property name.

_All indexes are property names, but only property names that are integers between 0 and 2<sup>32</sup> - 1 are indexes._ If we use properties that are array indexes, however, arrays will automatically update their `length` property as needed.

It is possible to index an array using negative integers or numbers that are not integers. This results in the conversion of the integer into a string, which is then utilized as the property name. The name is handled as a regular object property name, rather than a proper index. However, a string that just so happens to be a non-negative integer can also be used to index an array and function like an array index. If we use a floating-point number that is equivalent to an integer, the same is true.

EXAMPLE

```js
let a = [1, 2];

a[-1] = 3;
a // => [1, 2, '-1': 3]
a.length // => 2

a['0'] //=> 1
a[1.0] //=> 2
```

'Out of limits' errors are not recognized by JavaScript arrays. Any try to query nonexistent properties won't throw an exception, but rather return `undefined`.

### Array Length

Every array has a `length` property:
- for dense arrays, it specifies the number of elements in the array (one more the last index in the array);
- for sparse arrays, it is always greater that the number of elements.

If we set the `length` property to a non-negative integer `n` smaller than its current value, any array elements whose index is greater or equal to `n` are deleted from the array

If we set the `length` property to a higher value than its current value, it will create a sparse area at the end of the array, without adding new elements.

#### `isArrray()`

Returns `true` if the argument is an array, `false` otherwise.

##### Array-Like Objects

It is often perfectly reasonable to treat any object with a numeric `length` property and corresponding non-negative integer properties as array-like objects.

We can still iterate through them with the same code we would use for a true array; many algorithms work just as well with array-like objects as they do with real arrays. This is specially true for algorithms that treat the array as read-only of if they at least leave the array length unchanged.

In client-side JS, a number of methods for working with HTML documents (such as `document.querySelectorAll()`) return array-like objects.

Most of the array methods are purposely defined to be generic so that they work correctly when applied to array-like objects in addition to true arrays. Since array-like objects do not inherit from `Array.prototype`, you cannot invoke array methods on them directly, but we can do it _indirectly_ using the `Function.call` method.



                                                  ...



# 04: Objects

#### Object properties and mutation

## Querying and Setting Properties

We can use the `.` or the square brackets `[]` operators to access object properties. The left hand side should be an expression whose value is an object. If using the dot operator, the right hand side must be a simple identifier that names the property. If using square brackets, the value must be an expression that evaluates to a string that contains the desired property name.

To create or set a property, use a dot or square brackets but them on the left hand of an assignment expression.

Identifiers cannot be changed by the program since they are not a datatype; they must be entered explicitly into our  program. However, the name of the property is expressed as a string when we access an object's property using the `[]` array notation. And, given that strings are a data type in JavaScript, they can be manipulated on runtime. This exemplifies how flexible array notation is when it comes to using text expressions to access object properties.

## Property Access Errors

Property access expressions do not always return or set a value.

It is not an error to query a property that does not exist. If the property `x` is not found as an own property or an inherited property of `o`, the property access expression evaluates to `undefined`.

It is an error, however, to attempt to query a property of an object that does not exist (we would be trying to query to the `null` or the `undefined` primitives)

Remember that ES2020 supports conditional property access (safe navigation) with `?.`

## Deleting Properties

The `delete` operator removes a property from an object. Its single operand should be a property access expression.

This operator only deletes own properties, but not inherited ones. (To do this, you must delete it from its prototype, affecting every other object that inherits from that object)

A `delete` expression evaluates to `true` if the `delete` succeeded or if the `delete` had no effect (such as deleting a nonexistent property). It also evaluates to `true` when used with a non-property access expression.

`delete` does not remove properties that have a _configurable_ attribute of `false`.

## Testing Properties

To check whether an object has a property with a given name, we can use the `in` operator, the `hasOwnProperty()` or `propertyIsEnumerable()` methods, or simply querying the property:

  - The `in` operator expects a property name on its left side and an object on its right. It returns `true` if that object has an inherited or own property with that name, `false` otherwise. It distinguishes between properties that do not exist and properties that exist but have been set to `undefined`

  - The `hasOwnProperty()` method tests whether that object has an own property with a name equal to the passed-in string.

  - The `isEnumerable()` method returns `true` only if the named property is an own property and its _enumerable_ attribute is `true`.

Instead of using the `in` operator, it is often sufficient to simply query the property and use `!==` to make sure is not undefined: `o.x !== undefined`

# Mutability of Values and Objects (see variables as pointers)

- Primitive values (strings, numbers, booleans, `null`, `undefined`...) are immutable: operations on these values return a new value of the same type. For instance, as characters within a string (a primitive) cannot be changed, in order to change a character within a string, we need to create a new string with the modified character.

```js
let a = 10;
a += 5; // a is reassigned to the resulting value of adding 5 to the previous value of a, 10.
a // 15 (a now contains 15)
```

- Objects are mutable: we can modify them without changing their identity. Objects (_compound types_) contain data themselves: it's this data (the object's state) what we can mutate. Some operations permanently mutate the object, while others return a new object.

```js
let a = [1, 2];
a[0] = 0;

a // [0, 2]
```

## Nested Data Structures (structures within structures)

It's important when we are dealing with shallow copies or deep copies of an object. 

### Shallow Copies

A shallow copy constructs a new compound object and then inserts references into it to the objects found in the original. So, when the array contains other objects and we make a shallow copy, the objects in both arrays are shared (both contain references to the same objects), not copied.

When we mutate a shared object in an array or other collection, it's the shared object we are mutating rather than the collection. We will see the change in both.

We can create shallow copies of arrays with:

```js
original.slice() // Returns a new array, a shallow copy of the original 
```

or with

```js
[...original] // This syntax initializes a new array with the elements in original
```

We can make shallow copies of objects with:

```js
let original = {a: 1, b: 2};
let copy = {};
Object.assign(copy, original)
copy // => {a: 1, b: 2}
```

or 

```js
let original = {a: 1, b: 2};
let copy = {...original};
```

### Deep Copies

A deep copy constructs a new compound object and then, recursively, inserts copies into it of the objects found in the original. So the inner objects are not shared by both array, but each has its own independent copies.

We can make copies of arrays and pain objects by serialization: this means converting an object to a string form that can be subsequently parsed and converted back into an identical object:

```js
let array = [{b: 'foo'}, ['bar']];
let serializedArray = JSON.stringigy(array);
let deepCopiedArray = JSON.parse(serializedArray);
deepCopiedArray[1].push('baz');
deepCopiedArr // => [ { b: 'foo' }, [ 'bar', 'baz' ] ]
array // => [ { b: 'foo' }, [ 'bar' ] ]
```

# 05: Extras

## Error Handling

```js
try {
    // Normally, this code runs from the top of the block to the bottom
    // without problems. But it can sometimes throw an exception,
    // either directly, with a throw statement, or indirectly, by calling
    // a method that throws an exception.
}
catch(e) {
    // The statements in this block are executed if, and only if, the try
    // block throws an exception. These statements can use the local variable
    // e to refer to the Error object or other value that was thrown.
    // This block may handle the exception somehow, may ignore the
    // exception by doing nothing, or may rethrow the exception with throw.
}
finally {
    // This block contains statements that are always executed, regardless of
    // what happens in the try block. They are executed whether the try
    // block terminates:
    //   1) normally, after reaching the bottom of the block
    //   2) because of a break, continue, or return statement
    //   3) with an exception that is handled by a catch clause above
    //   4) with an uncaught exception that is still propagating
}
```

## Naming conventions (legal vs idiomatic)

Identifiers are used to name variables, constants, properties, functions, classes and to provide labels to loops. A JavaScript identifier must begin with a letter, an underscore `_` or a dollar sign `$`. Subsequent characters can be letters, digits, underscores or dollar signs.

There are some 'reserved words' that can't be used as regular identifiers (`let`, `const`, `for`, etc.)

There are some naming conventions, however, and these should be followed:

- `camelCase` formatting for most variable and function names
- `PascalCase` for constructor functions
- `SCREAMING_SNAKE_CASE` for constants as magic numbers and unchanging configuration values

## Strict mode vs. non-strict mode

`"use strict"` is a _directive_ or _pragma_ that indicates the JavaScript interpreter to process the code (in a file, script or function) that follows in _strict mode_. This directive has to be at the topmost of the file or function: the top level code of a file is strict if it has this directive; a function body contains strict code if it is defined within strict code or if it has this directive; every code in a `class` or module is automatically strict without the need of the directive.

This mode was invented to fix important deficiencies in JavaScript, and it differs from non-strict code in that, among others:

- Disables the use of the `within` keyword
- All variables must be declared (in non-strict mode assignments on undeclared variables implicitly create global variables.) 
- Trying to define two or more properties by the same name in an object literal is a syntax error. (In non-strict mode, no error occurs.), and also trying to declare a function with two parameters with the same name
- Octal literals (integer literals that begin with a `0`) are not allowed
- Functions invoked as functions (rather than as methods) have the value of `this` as `undefined`. (In non-strict mode, `this` has the value of the `global` object)
- Assignments to non-writable properties and attempts to create new properties on non-extensible objects throw a `TypeError`.
- The access to some properties of the `Arguments` object is not allowed, and it just holds a static copy of the passed in values.
- A `SyntaxError` is thrown if the `delete` operator is used with variables, functions, or function parameters.
- Trying to delete a non-configurable property throws a `TypeError`.

## JavaScript syntactic sugar

### Concise Property Initializers

We can omit having to repeat the property name and the property value in object literals:

```js
function xyzzy(foo, bar, qux) {
  return {
    foo: foo,
    bar: bar,
    qux: qux,
  };
}

// Sugar:
function xyzzy(foo, bar, qux) {
  return {
    foo,
    bar,
    qux,
  };
}
```

### Concise Methods

We can omit the `function` keywords and the `:` when defining methods in objects:

```js
let obj = {
  foo: function() {
    // do something
  },

  bar: function(arg1, arg2) {
    // do something else with arg1 and arg2
  },
}

// Sugar:
let obj = {
  foo() {
    // do something
  },

  bar(arg1, arg2) {
    // do something else with arg1 and arg2
  },
}
```

### Object Destructuring

```js
let obj = {
  foo: "foo",
  bar: "bar",
  qux: 42,
};

let foo = obj.foo;
let bar = obj.bar;
let qux = obj.qux;
// Sugar:
let { foo, bar, qux } = obj; // the last 3 lines in 1 line
```

It also works with function parameters:

```js
function xyzzy({ foo, bar, qux }) {
  console.log(qux); // 3
  console.log(bar); // 2
  console.log(foo); // 1
}

let obj = {
  foo: 1,
  bar: 2,
  qux: 3,
};

xyzzy(obj);
```

### Array Destructuring

Destructuring also works with arrays:

```js
let foo = [1, 2, 3];
let [ first, second, third ] = foo;
```

This code is equivalent to:

```js
let foo = [1, 2, 3];
let first = foo[0];
let second = foo[1];
let third = foo[2];
```

we can swap two values without a buffer: 

```js
let one = 1;
let two = 2;

[ one, two ] =  [two, one];

console.log(one);   // 2
console.log(two);   // 1
```
### Spread Syntax

The spread syntax uses `...` to "spread" the elements of an array or object into separate items; used in function invocations when passing arrays, or to insert separate elements or properties from array or object in literals.

### Rest Syntax

It uses `...` to collect multiples items into an array or object; used in function parameters.