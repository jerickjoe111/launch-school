# 01: Basics

## Primitive values, types and type conversions

There are two types of values: primitives (numbers, strings, booleans, `null`, `undefined`, etc.) and objects.

Primitives are _immutable_ and manipulated by value in JavaScrtipt. When a function/method _modifies_ a primitive, like a string, it just returns a new string with the modifications. Objects are _mutable_ and manipulated by reference: you can modify them without changing their identity. Objects contain data themselves: it's this inner data (the object's state) that you can change. Some operations return a new object, some modify the object in place.

JavaScript operators and statements expect values of different types, and it performs conversions to those types without a warning (implicit conversion) 

(see `./conversions_table.md` and `./arithmetic_comparison_table.md`)

## Truthiness: `false` and `true` vs. falsy and truthy

`true` and `false` are primitive values that represent truth or falsehood, yes or no; these two keywords evaluate to these two values, usually used in control structures (like `if` statements) or as the result of the comparison of two values' identities. However, in a boolean context (i.e. when an operator or statement expect a boolean value), all other types, including objects and arrays, can be converted and behave like `true` or `false`. When this happens, we say that some values are _truthy_ and others _falsy_. 

In JavaScript, _falsy_ values are: 
- `undefined`
- `null`
- `0`
- `-0`
- `NaN`
- `''` (an empty string)

All other values are _truthy_.

## Understand the differences between loose and strict equality

Primitives are compared _by value_ and objects are compared _by reference_, however, JavaScript works with two kinds of equality, strict and loose, represented by the `===` and the `==` operators, respectively. It's important to note that the strict equality operator `===` does not convert its operand automatically: if two values are from different types, they are not equal, and the operator will return `false`; but `==` (sometimes called the _equality operator with type conversion_ ) will convert values of different types, and it may consider them equal after the conversion, which is dangerous and a source of bugs. These are some other important differences between the both operators: 

When using the strict equality operator `===`:

- If two values have different types, they are not equal.                      
- `null` is not strictly equal to `undefined`                             
- `NaN` is not equal to anything, even itself                             
- Two numbers are strictly equal if they have the same value              
- Two strings are strictly equal if they contain the EXACT same characters in the same position
- Two objects are strictly equal if and only if they are the same object (Objects are compared by reference)

But, when using the `==` operator:
- If two values are the same type, they are tested with the same criteria as in the strict equality operator.
- If two values don't have the same type, they are converted according some rules:
  - When one operand is a string and the other is a number, it converts the string to a number and then strictly compares them
  - `null` is equal to `undefined` in non-strict equality comparison                                                 
  - Booleans are converted to numbers when the other operand is a number, and the comparison is tried again: `true` becomes `1`, `false` becomes `0`.
  - All other possible combinations are not equal
- Objects are still compared by reference: if they are not the same object, they are not equal.

## Assignments and comparison

In JS, primitives are immutable, and objects are mutable. It is obvious for booleans and numbers; all string methods that appear to return a modified string are, in fact, returning a new string value.

Primitives are compared **by value**: two values are the same if and only if they have the same value, but objects are compared **by reference**: two distinct objects are not equal even if they have the same properties and values, even two distinct arrays are not equal even if they have the same elements in the same order. Objects can be also understood as _reference types_: two objects values are the same if they refer to the same underlying object.

Assigning an object or array to a variable simply assigns the reference: it does not create a new copy of the object.

The value of an assignment expression, is the value of the right-side operand. As a side effect, the `=` operator assigns the value on the right to the variable or property on the left so that future references to the variables or property evaluate to that value.

## `console.log` vs `return`

`console.log()` is a function that displays the value passed in as argument on the terminal or in the browser's console, depending on if we are executing the JavaScript code via Node.js or the browser. 

The `return` statement causes the function to stop executing and to return the value of its expression, if any, to the caller. If the `return` statement does not have an associated expression, the return value of the function is `undefined`. If a function does not contain a `return` statement, it simply executes each statement in the function body until it reaches the end, and returns the `undefined` value to the caller.

# 02: Functions and Variable Scope

## Types of Variables, variable scope, function scope and block scope.

The scope of a variable is the region of your program source code in which it is _defined_ (reachable). Variables and constants declared with `let` and `const` are **block scoped**. This means that they are only defined within the block of code in which the `let` or `const` statements (their declarations) appears (and thus in all subsequent nested blocks within that block). 

JavaScript class and function definitions are blocks, and so are the bodies of `if/else` statements, loops, and so on. Roughly speaking, if a variable or constant is declared within a set of curly braces, then those curly braces delimit the region of code in which the variable or constant is defined. Of course, we cannot refer to that variable or constant before they are declared. Variables and constants that are part of `for`, `for/of` and `for/in` loop have the loop body as their scope.

When a declaration appears at the top level, outside any code blocks, we say it is a _global_ variable or constant, and has **global scope**. In Node and client-side JS modules, the scope of a global variable is the file that it is defined in. In traditional client-side JS, the scope of a global variable is the HTML document in which it is defined. That is: if one `<script>` declares a global variable or constant, that variable is defined in all the `<script>` elements in that document (that execute, after the `let` or `const` statement executes).

Pre ES6, the only way to declare variables was `var`, and there was no way to declare constants.

They have the same syntax, but important differences:

- Variables declared with `var` are not block-scoped. Instead, _they are scoped to the body of the containing function, no matter how deeply nested they are inside that function_.

- If we use `var` outside a function body, it declares a global variable. But global variables declared with `var` differ from global variables declared with `let`:
  Globals declared with `var` are implemented as properties of the global object (we can refer via `globalThis`) But the properties created with global `var` declaration cannot be deleted with the `delete` operator. Global variables and constants declared with `let` and `const` are not properties of the global object.

- Unlike variables declared with `let`, it is legal to declare the same variable multiple times with `var`.

## Lexical Scope

JavaScript uses lexical scoping to determine where it looks for variables: the program's textual (_lexical_) structure determines the variable's scope. In other words: **the source code defines the scope**. When you write a function in your code, it creates a scope even if the function never gets executed and has no variables of its own. At any point in the program, there is a hierarchy of scopes from the local scopes up to the global scope.

When JavaScript tries to find a variable, it searches this hierarchy _from the bottom to the top_. It stops and returns the first variable it finds with a matching name. This means that variables in a lower scope can _shadow_, or hide, variables of the same name in a higher scope: this is legal, but a bad practice. 

## The Global Scope

Code outside any function or block belongs to the _global scope_.

## Local Scopes

Inside a function or a block, the code is in a _local scope_, relative to the containing function or block. (function or block scope)

## Adding variables to the current scope

There are a number of ways to create a variable in the current scope:

1. Declaring it with the `let` or `const` keyword
2. Declaring it with the `var` keyword
3. A function declaration creates a variable with the same name as the function
4. Defining parameters, which work as local variables within the function's body
5. A class declaration also creates a variable with the same name as the function

## Variable Assignment

Variable scoping rules apply to both assignment and referencing equally.

If JavaScript can't find a matching variable when assigning it a value, **it creates a new global variable instead**. This is dangerous and a source of bugs.

## Variable Shadowing

If a function definition has a parameter with the same name as a variable from an outer scope, the parameter shadows the outer variable.

## Variable referencing

JavaScript throws a `ReferenceError` exception if it can't find a variable anywhere in the scope hierarchy.

Variable Scoping Rules:

1. Every function definition creates a new local scope.
2. Every block creates a new scope
3. Lexical uses the textual structure of the program (its source code) to determine the variable's scope. This means that the code does not have to be executed for the scope to exist.
4. All variables in the same or surrounding (outer) scopes are visible inside functions and blocks.

## Hoisting

JavaScript engines operate in two main phases: the creation phase and the execution phase. Before the execution phase begins, the creation phase does some preliminary work. One of those work items is to find all the variable, function and class _declarations_: this action seems to 'move' the declarations to the top of their respective function or block; function-scoped declarations get moved to the top of the function, and block-scoped declarations get moved to the top of the block. This process is called _hoisting_.

Function declaration statements are _hoisted_ to the top of the enclosing script, block, or function so that functions defined in this way may be invoked from code that appears before the definition; they will be defined before the JavaScript interpreter begins to execute any of the code in that block.

When we use the function declaration form, the function objects are created before the code that contains them starts to run, and the definitions are hoisted, so we can call them from code above their definition statement. Note that this is not the case with functions defined as expressions: they don't _exist_ until their code is executed.

This also happens with `var`, `let`, and `const` variables:

- When a variable is declared with `var`, the declaration is lifted-up or _hoisted_ to the top of the enclosing function. The _initialization_ remains when it was written, but the _declaration_ of the variables moves to the top of the function, so variables declared with `var` can be used, without error, anywhere in the enclosing function. (If the initialization code has not run yet, then the value of the variable may be `undefined`, but we won't get an error if we use the variable before it is initialized. This is a source of bugs)

- When `let` or `const` variables are hoisted, they are not given an initial value at all, but the program is aware of their presence anyway: they are left in an 'unset' state (_Temporal Dead Zone_)

Hoisting order:

1. Functions declarations
2. Variables

## How passing an argument into a function may or may not permanently change the value that a variable points to

Upon the function's invocation, when we pass an argument to the function, what actually happens is that the expression that we place between parentheses (usually a variable, sometimes a literal value or object) is evaluated, and the result of that evaluation is assigned to the corresponding parameter in the function's definition. This means that, if we pass a primitive value to a function, the parameter is assigned to the value, and _no operation performed on the variable will alter it_, so, any apparent 'mutation' is actually a _reassignment_ of the local variable, like this:

```js
function addOne(x) { // x is assigned to the number 1 which a is pointing to.
  x += 1; // x is reassigned to the result of adding 1 to its previous value. a is unaffected, as it remains pointing to the number 1.
}
let a = 1;
addOne(a);
a // => still 1. 
```

However, when we pass an object as an argument to the function, the parameter is assigned _to the same object, not a copy of that object_: any modification made to the object through the local variable within the function will have a permanent effect on the object:

```js
function addOne(array) { // the parameter is assigned to the same object we passed in
  array.push(1); // we permanently mutate the object via the local variable array
}
let a = [1];
addOne(a);
a // => [1,2] // we have permanently mutated the object
```

If a function or method mutates its arguments or caller depends on the particular implementation, and we will have to find out by reading the documentation or by practice.

## Variables as pointers

Variables are handlers for values: they are names that contain references (_pointers_) to specific locations in memory. 

If the variable `a` refers to a primitive value `1`, and the code `let b = a;` is executed, the variable `b` holds a reference to the same value as `a`, but the reassignment of anyone of these values will not affect the other:

```js
let a = 1;
let b = 1;
a += 1; // we are reassigning a to a new value, not modifying the value in any way.
a // => 2
b // => 1
```

If the variable `x` refers to an object and the code `let y = x;` is executed, the variable `y` holds a reference to the same
object, not a copy of that object. Any modifications made to the object through the variable `y` are also visible through the variable `x`.

## Function definition and function invocation

Function definitions create function objects in order to assign them to variables or pass them as arguments to other functions, and they may include a list of _parameters_ that will work as local variables within the body of the function.

Function invocations provide values or _arguments_ for the function's parameters; every function invocation has to have a function identifier, a variable with the name of the function, and a list of arguments that may be empty. 

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

## Function expressions

Function expression look a lot like function declarations, but:
- they appear within the context of a larger expression or statement, 
- and the name is optional. 

A function _declaration_ actually declares a variable (the name of the function) and assigns a function object to it, but a function _expression_, on the other hand, does not declare a variable: it is up to us to assign the newly defined function object to a constant or variable if you are going to need to refer to it multiple times. (It is an expression that evaluates to the function defined)

It is a good practice to use `const` with function expressions, so you don't accidentally overwrite your functions by assigning new values.

A name is allowed in function declarations if the function needs to refer to itself: if it does include a name, the local function scope for that function will include a binding of that name to the function object (the function name becomes a local variable within the function) Most of the function expressions do not need names.

Functions defined as expressions are not hoisted. These functions do not exist until the expression that defines them is actually evaluated: functions defined with expressions cannot be invoked before they are defined.

## Arrow functions

We can define functions using a compact syntax: a `=>` to separate the function parameters from the function body. The `function` keyword is not used, and, since arrow functions are expressions instead of statements, there is no need for a function name.

The general form of an arrow function is:

1. A comma separated list of parameters in parentheses
2. the arrow symbol: `=>`
3. the body of the function in curly braces.

If the body of the function is a single `return` statement, we can omit the `return` keyword, the semicolon that goes with it, and the curly braces, and write the body as the expression whose value is to return:

If the arrow function has exactly one parameter, we can omit the parentheses around the parameter list:

If the arrow function has no parameters, it must be written with an empty pair of parentheses:

If the body of the arrow function is a single `return` statement but the expression to be returned is an object literal, then you have to put the object literal inside parentheses to avoid syntactic ambiguity.

The arrow function syntax makes them ideal when you need to pass one function to another function (_callbacks_), which is a common thing to do with array methods like `map()`, `filter()`, and `reduce()`.

## Implicit return value of function invocations

The `return` statement causes the function to stop executing and to return the value of its expression, if any, to the caller. If the `return` statement does not have an associated expression, the return value of the function is `undefined`. If a function does not contain a `return` statement, it simply executes each statement in the function body until it reaches the end, and returns the `undefined` value to the caller (this is called the implicit return value)

## First-class functions

In JavaScript, functions are objects, and they can be manipulated; JavaScript can assign functions to variables, pass them as arguments to another functions, etc. Since functions are objects, you can set properties on them and even invoke methods on them. This means that we can have first-class functions, which is a powerful feature. And, having this in mind, we can see that this fact implies that we also can enjoy higher order functions: we use this specific term for functions that can accept other functions as arguments, and return other functions: the combination of higher order functions and the fact that functions form closures in JavaScript is one of its more useful tools.

## Partial function application

Partial function application refers to the creation of a function that can call a second function with fewer arguments that the second function expects. The created function supplies the remaining arguments (because it took them with it from its definition context, they form part of its closure)

Partial function application is most useful when you need to pass a function to another function that won't call the passed function with enough arguments.

### Recognizing Partial Function Application

Partial function application requires a reduction in the number of arguments you have to provide when you call a function. If the number of arguments isn't reduced, it isn't partial function application.

# Pure Functions and Side Effects

A function invocation that performs any of the following action is said to have _side effects_.

1. It reassigns any non-local variable.
2. It mutates the value of any object referenced by a non-local variable.
3. It reads from or writes to any data entity (files, network connections, etc.) that is non-local to your program.
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

Pure functions are functions that:

1. Have no side effects
2. Given the same set of arguments, the function always returns the same value during the function's lifetime. This implies that the return value of a pure function _depends solely on its arguments_.

# 03: Arrays

## Working with Strings, Arrays, and Objects. In particular, you should be thoroughly familiar with the basic Array iteration methods (`forEach`, `map`, `filter`, and `find`) and how to use Object methods to access the keys and values in an Object as an Array.

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

- The `for/in` loop runs the body of the loop once of each enumerable property, own or inherited, of the specified object, assigning the name of the property to the loop variable. Built-in methods that objects inherit are not enumerable.

- Getting an array of property names for an object and then looping through that array with a `for/of` or a `for` loop. There are four functions to get an array of property names:

    1. `Object.keys` returns an array of the names of the enumerable own properties; it does not include non-enumerable properties, inherited properties, or properties with a symbol as name.

    2. `Object.getOwnPropertyNames()` like `Object.keys()`, but returns an array of the names of non-enumerable own properties as well.

    3. `Object.getOwnPropertySymbols()` returns own properties whose names are Symbols, whether or not they are enumerable.

    4. `Reflect.ownKeys()` returns all own property names, both enumerable and non-enumerable, and both string and Symbol.

## Understand that arrays are objects, and be able to determine whether you have an Array

JS arrays are a specialized form of JS object, and array indexes are really little more than property names that happen to be integers. Implementations typically optimize arrays so that access to numerically indexed array elements is generally significantly faster than access to regular object properties. 

Arrays inherit properties from `Array.prototype`, which defines a rich set of array manipulation methods. Most of these methods are _generic_, which means that they work correctly not only for true arrays, but for any array-like object. JS strings behave like arrays of characters.

Every JS array has a `length` property. For nonsparse arrays (_dense_), this property specifies the number of elements in the array. For sparse arrays, `length` is always larger than the highest index of any element.

You access an element of an array using the `[]` operator (it's not a method in JS). A reference to the array should appear to the left of the brackets. An arbitrary expression that has a non-negative integer value should be inside the brackets. You can use this syntax to both read and write the value of an element of an array.

When you use property names that are non-negative integers less than 2<sup>32</sup> - 1, the array automatically maintains the value of the `length` property. 

The square brackets' operator works like the square brackets used to access object properties; JS converts the numeric array index you specify to a string, and then uses that string as a property name. Numeric and string property names are the same.

_All indexes are property names, but only property names that are integers between 0 and 2<sup>32</sup> - 1 are indexes._ If you use properties that are array indexes, however, arrays have the special behavior of updating their `length` property as needed.

You can index an array using numbers that are negative or that are not integers. When you do this, the numbers is converted to a string, and that string is used as the property name. Since the name is not a non-negative integer, it is treated as a regular object property, not an array index. Also, if you index an array with a string that happens to be a non-negative integer, it behaves as an array index. The same is true if you use a floating-point number that is the same as an integer.

JavaScript arrays have no notion of an 'out of bounds' error. When you try to query a nonexistent property of any object, you don't get an error; you simply get `undefined`.

### Array Length

Every array has a `length` property:
- for dense arrays, it specifies the number of elements in the array (one more the last index in the array);
- for sparse arrays, it is always greater that the number of elements.

If you set the `length` property to a non-negative integer `n` smaller than its current value, any array elements whose index is greater or equal to `n` are deleted from the array

If you set the `length` property to a higher value than its current value, it will create a sparse area at the end of the array, without adding new elements.

#### `isArrray()`

Returns `true` if the argument is an array, `false` otherwise.

##### Array-Like Objects

It is often perfectly reasonable to treat any object with a numeric `length` property and corresponding non-negative integer properties as array-like objects.

You can still iterate through them with the same code you'd use for a true array; many algorithms work just as well with array-like objects as they do with real arrays. This is specially true for algorithms that treat the array as read-only of if they at least leave the array length unchanged.

In client-side JS, a number of methods for working with HTML documents (such as `document.querySelectorAll()`) return array-like objects.

Most of the array methods are purposely defined to be generic so that they work correctly when applied to array-like objects in addition to true arrays. Since array-like objects do not inherit from `Array.prototype`, you cannot invoke array methods on them directly, but you can do it _indirectly_ using the `Function.call` method.

# 04: Objects

#### Object properties and mutation

## Querying and Setting Properties

To obtain the value of a property, use the `.` or the square brackets `[]` operators. The left hand side should be an expression whose value is an object. If using the dot operator, the right hand side must be a simple identifier that names the property. If using square brackets, the value must be an expression that evaluates to a string that contains the desired property name.

To create or set a property, use a dot or square brackets but them on the left hand of an assignment expression.

Identifiers must be typed literally into your JavaScript program; they are not a datatype, so they cannot be manipulated by the program. On the other hand, when you access a property of an object with the `[]` array notation the name of the property is expressed as a string. Strings are JavaScript datatypes, so they can be manipulated and created while a program is running. This demonstrates the flexibility of using array notation to access properties of an object with string expressions.

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

# Mutability of Values and Objects

- Primitive values (strings, numbers, booleans, `null`, `undefined`...) are immutable: operations on these values return a new value of the same type:

```js
let a = 10;
a += 5; // a is reassigned to the resulting value of adding 5 to the previous value of a, 10.
a // 15 (a now points to 15)
```

- Objects are mutable: you can modify them without changing their identity. Objects contain data themselves: it's this inner data (the object's state) that you can change. Some operations return a new object, some modify the object in place.

## Nested Data Structures (structures within structures)

It's important when we are dealing with shallow copies or deep copies of an object. 

### Shallow Copies

A shallow copy constructs a new compound object and then inserts references into it to the objects found in the original. So, when the array contains other objects and we make a shallow copy, the objects in both arrays are shared (both contain references to the same objects), not copied.

When you mutate a shared object in an array or other collection, it's the shared object you are mutating rather than the collection. You will see the change in both.

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
## Naming conventions (legal vs idiomatic)
## Strict mode vs. non-strict mode
## JavaScript syntactic sugar