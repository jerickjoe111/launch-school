# Objects

## Standard Built-in Objects

JavaScript temporarily converts primitives to their object counterpart when necessary, which means that we typically don't need to worry about whether we're working with a primitive or an object:

```js
let a = 'hi';                        // Create a primitive string with value "hi"
typeof a;                            // "string"; This is a primitive string value

let stringObject = new String('hi'); // Create a string object
typeof stringObject;                 // "object"; This is a String object

a.toUpperCase();                     // "HI"
stringObject.toUpperCase();          // "HI"

typeof a;                            // "string"; The coercion is only temporary
typeof stringObject;                 // "object"

// The same is true for other primitive types (except null and undefined):

42.5639.toFixed(2);                  // "42.56"
true.toString();                     // "true"
```

## Creating Custom Objects:

You can create an object with:

- Object literal notation
- `new` and a constructor function (like `new String()`)
- `Object.create()`

## Properties:

Objects are containers of data and behavior: the data consists of name:value pairs called _properties_. To get the value of a property, we can use the `.` or `[]` operators on an object. We can set new values for a property adding an assignment expression.

## Methods

Functions define the behavior of an object; when they are part of an object are called methods. To call a method on an object, you access the method as though it is a property (it is a property) and adding an argument list `()`. 

It is not a good idea to use arrow functions to define methods.

## Capitalization

When talking about primitives, use the lower case name (string, number, boolean); when talking about the object form of a primitive type, use the capitalized name: String, Number, Boolean, etc.

Use 'object' to refer to objects in general. Use 'Object' when referring to methods and properties from the `Object` class.

# Object Properties

## Property Names and Values

A property name for an object can be any valid string, and a property value can be any valid expression

## Accessing Property Values

Via the `.` or the `[]` operators.

It is usually recommended to use the `.` notation, but the brackets allow the use of strings, which can be manipulated dynamically by the program.

## Adding and Updating Properties

To add a new property to an object, use `.` or `[]` with an assignment expression. If the named property exists, the assignment updates the property's value.

You can use the `delete` operator to delete properties form objects: `delete object.property`

# Iterating through Object Properties

You can use a `for...in` loop (the name of the property will be assigned to the loop variable each iteration)

You can retrieve the names of all the enumerable own properties as strings in an array with the `Object.keys()` function and use a classic `for` loop.

# Arrays are Objects

## Arrays

Arrays are ordered collection of elements (values), each associated with a non-negative integer index.

## Objects

Objects are unordered collections of properties (name:value pairs) (we sometimes use the term associative arrays, because objects basically map strings or symbols (keys) to values)

## Arrays and the Length Property

It is a property that array objects have (arrays are objects):

- Initially set to `0`
- Its value is always a non-negative integer less than 2 to the power of 32.
- The value of the `length` property is numerically one greater than the largest array index in the array.
- You can set the `length` value explicitly:
    - If set to a number less or equal than the current largest index, all elements after that index will be removed
    - If set to a number higher, it will create a sparse area at the end of the array

Important points:

- A property name is an array index when it is a non-negative integer a non-negative integer string equivalent. Values that have been assigned to that index are called _elements_. All other properties, own or inherited, are not considered elements of the array.
- The value of `length` is entirely dependent on the largest array index.
- Logging an array logs only the value if it is an element; otherwise, it logs the name:value pair.
- To count all the _properties_ in an array object, use `Object.keys(array).length`, not `array.length`.

Note that the `length` property does not only count element, but also the number of 'empty slots' or gaps in the sparse areas of the array.

## Using Object Operations with Arrays

If you want to check whether an array has a certain index, compare it directly to the array's `length`.

If you need to remove a value from an array, use `Array.prototype.splice()` instead of `delete`.

The arithmetic and comparison operators are not very useful with objects; when one operand is an object and the other is not, JavaScript typically coerces the object to the string `[object Object]`

However, if an object literal is used in certain contexts, like the beginning of a line, JS interprets it as a block of code instead of as an object:

```js
{} + []; // => 0 (this becomes +[])
{}[0]; // => [0]
{ foo: 'bar' }['foo'] // => ['foo']
{} == '[object Object]' // => SyntaxError: Unexpected token == 
```

Remember that the properties that are not array indices will not be processed by the built-in Array methods. Gaps also will not be processed (but classic `for` loops will)

# Arrays: What is an Element?

## Array Keys

We can add properties to an array object that are not elements of the array by adding non-index properties as to any other object, but `length` will non include in the count those, as they will not be elements of the array. `Object.keys()` will show the new property.

Remember that all built-in Array methods ignore properties that are not elements

## Sparse Arrays:

Sparse arrays are array with gaps or empty slots without a value within the array. These gaps will be counted by `length`, though.

Trying to access them will result in a `undefinded` value: this is not their actual value, this means that a value does not exist there. 

If we need to ignore the gaps, we must look at the object keys or return a simple filtered new array:

```js
array.filter(() => true)
```

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

# Pure Functions and Side Effects

A function invocation that performs any of the following action is said to have _side effects_.

1. It reassigns any non-local variable.
2. It mutates the value of any object referenced by a non-local variable.
3. It reads from or writes to any data entity (files, network connections, etc.) that is non-local to your program.
4. It raises an exception.
5. It calls another function that has side effects.

Functions that have unexpected side effects are a major source of bugs.

## Side Effects through Reassignment

If the function reassigns any variable that is not declared inside the function, the function has a side effect.

## Side Effects through Mutation

If the function mutates an array or an object referenced by a variable in the outer scope, the function has a side effect.

## Side Effects Through Input/Output

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

## Side Effects through Exceptions

If a function raises an exception and doesn't catch and handles it, it has a side effect.

## Side Effects through Other Functions

- `console.log()` has a side effect
- `readline.question()` has multiple side effects
- `new Date()` has a side effect (it accesses the system clock)
- `Math.random()` has a side effect (it accesses the random number generator)

## Mixing Side Effects and Return Values

Most functions should return a useful value, or they should have a side effect, but not both.

## Pure Functions

Pure functions are functions that:

1. Have no side effects
2. Given the same set of arguments, the function always returns the same value during the function's lifetime. This implies that the return value of a pure function _depends solely on its arguments_.

# Working with Function Arguments

## The Traditional Approach

The arguments object is an **Array-like** local variable that is available inside all Functions. It contains all the arguments passed to the Function, no matter how many arguments you provided, and no matter how many arguments the Function's definition includes.

## The Modern Approach

By using the spread operator in the parameters list, allowing the method to expect an arbitrary number of arguments, which they will be stored in an array with the name of the parameter name after `...` within the function's body.