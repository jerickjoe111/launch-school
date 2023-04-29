## Functions

A function is a block of JavaScript code that is defined once but may be executed, or _invoked_, any number of times. JavaScript functions are parameterized: 
- a _function definition_ may include a list of identifiers or _parameters_ that work as local variables within the body of the function. 
- _Function invocations_ provide values or _arguments_ for the function's parameters.

Functions often use their argument values to compute a _return value_ that becomes the value of the function invocation expression.

In addition to the arguments, each invocation has another value: the _invocation context_, that is the value of the `this` keyword.

If a function is assigned to a property of an object, it is known as a method of that object. When a function is invoked on or through an object, that object is the invocation context or `this` value for the function.

Functions are objects, and they can be manipulated; JavaScript can assign functions to variables, pass them as arguments to another functions, etc. Since functions are objects, you can set properties on them and even invoke methods on them.

Functions definitions can be nested within other functions, and they have access to any variables that are in scope _where they are defined_. This means that in JavaScript functions are _closures_, which enables important and powerful programming techniques.

### Defining Functions

There are three ways to define functions:

  - with the `function` keyword:

    - function declarations

    - function expressions

  - without the `function` keyword:

    - _arrow functions_

#### Function Declarations

Function declarations consist of:

1. The `function` keyword
2. An identifier that names the function. The name is a required par of function declarations: it uses the name of a variable, and the newly defined function object is assigned to the variable.
3. A pair of parentheses around a comma-separated list of zero or more identifiers. These identifiers are the parameter names for the function, and they behave like local variables within the body of the function.
4. A pair of curly braces with zero or more statements inside. These statements are the body of the function: they are executed _whenever the function is invoked_.

```js
function printprops(object) {
  for (let p in object) {
    console.log(`${p}`);
  }
}
```

In function declarations, the name of the function becomes a variable whose value is the function itself.

Function declaration statements are _hoisted_ to the top of the enclosing script, block, or function so that functions defined in this way may be invoked from code that appears before the definition; they will be defined before the JavaScript interpreter begins to execute any of the code in that block.

The `return` statement causes the function to stop executing and to return the value of its expression, if any, to the caller. If the `return` statement does not have an associated expression, the return value of the function is `undefined`. If a function does not contain a `return` statement, it simply executes each statement in the function body until it reaches the end, and returns the `undefined` value to the caller.

A function defined within a block only exists within that block, and it is not visible outside the block.

#### Function expressions

Function expression look a lot like function declarations, but:
- they appear within the context of a larger expression or statement, 
- and the name is optional. 

Some examples:

```js
const square = function(x) { return x*x; };

// Function expressions can include names, which is useful for recursion.
const f = function fact(x) { 
  if (x <= 1)  {
    return 1;
  } else {
    return x * fact(x - 1);
  }
};

// Function expressions can also be used as arguments to other functions:
[3, 2, 1].sort(function(a, b) { return a-b; });

// Function expressions are sometimes defined and immediately invoked (note the argument list (10) at the end of the definition, which indicates that we are invoking the function)
let tensquared = (function(x) { return x*x;}(10));
```

A function declaration actually declares a variable (the name of the function) and assigns a function object to it. 
A function expression, on the other hand, does not declare a variable: it is up to us to assign the newly defined function object to a constant or variable if you are going to need to refer to it multiple times. (It is an expression that evaluates to the function defined)

It is a good practice to use `const` with function expressions, so you don't accidentally overwrite your functions by assigning new values.

A name is allowed in function declarations if the function needs to refer to itself: if it does include a name, the local function scope for that function will include a binding of that name to the function object (the function name becomes a local variable within the function) Most of the function expressions do not need names.

When we use the function declaration form, the function objects are created before the code that contains them starts to run, and the definitions are hoisted, so we can call them from code above their definition statement. (Functions declaration are hoisted)

In functions defined as expressions, this is not the case. These functions do not exist until the expression that defines them are actually evaluated: functions defined with expressions cannot be invoked before they are defined.

#### Arrow functions

We can define functions using a compact syntax: a `=>` to separate the function parameters from the function body. The `function` keyword is not used, and, since arrow functions are expressions instead of statements, there is no need for a function name.

The general form of an arrow function is:

1. a comma separated list of parameters in parentheses
2. the arrow symbol: `=>`
3. the body of the function in curly braces.

```js
const sum = (x, y) => { return x + y; };
```

If the body of the function is a single `return` statement, we can omit the `return` keyword, the semicolon that goes with it, and the curly braces, and write the body as the expression whose value is to return:

```js
const sum = (x, y) => x + y;
```

If the arrow function has exactly one parameter, we can omit the parentheses around the parameter list:

```js
const polynomial = x => x*x + 2*x + 3;
```

If the arrow function has no parameters, it must be written with an empty pair of parentheses:

```js
const constantFunc = () => 42;
```

If the body of the arrow function is a single `return` statement but the expression to be returned is an object literal, then you have to put the object literal inside parentheses to avoid syntactic ambiguity.

Remember not to put a new line between the parameters and the `=>` to avoid ambiguity.

The arrow function syntax makes them ideal when you need to pass one function to anoher function, which is a common thing to do with array methods like `map()`, `filter()`, and `reduce()`, for example:

```js
// Make a copy of the array with null elements removed:
let filtered = [1, null, 2, 3].filter(x => x !== null);

// Square some numbers:
let squares = [1, 2, 3, 4].map(x => x*x);
squares // [ 1, 4, 9, 16 ]
```

Arrow functions inherit the value of the `this` keyword from the environment in which they are defined _rather than defining their own invocation context_ as functions defined in other ways do.

#### Nested functions

Function definitions may be nested within other functions:

```js
function hypotenuse(a, b) {
  function square(x) { return x*x; }
  return Math.sqrt(square(a) + square(b));
}
```

Nested functions can access the parameters and variables of the function or functions they are nested within. The scope rules for nested functions are very important.

### Invoking functions

The code that makes up the body of a function is not execute when the function is defined, but rather when the function is invoked.

JavaScript functions can be invoked in five ways:

- as functions

- as methods

- as constructors

- Indirectly through their `call()` and `apply()` methods

- Implicitly, via JavaScript language features that do not appear like normal function invocations

#### Function invocation

Functions are invoked _as functions_ or _as methods_ with _an invocation expression_

An invocation expression consists of 

- a function expression that evaluates to a function object

- a list of comma-separated zero or more argument expressions between parentheses.

```js
printprops({ x + 1});
let total = distance(0, 2, 1) + distance(2, 1, 0);
```

In an invocation, each argument expression is evaluated, and the resulting values become the arguments to the function. These values are assigned to the parameters named in the function definition. In the body of the function, a reference to a parameter evaluates to the corresponding argument value.

For regular function invocations, the return value of the function becomes the value of the function invocation expression.

After ES2020, you can insert `?.` after the function expression and before the open parenthesis in a function invocation in order to invoke the function, only if the function is not `null` or `undefined`. That is, the expression:

```js
f?.(x)
```

is equivalent to:

```js
(f !== null && f !== undefined) ? f(x) : undefined
```

For function invocation in non-strict mode, the invocation context (the `this` value) is the global object. In strict mode, the invocation context is `undefined`. Note that arrow functions always inherit the `this` value that is in effect when they are defined. 

Functions written to be invoked as functions (not as methods) do not typically use the `this` keyword at all. This keyword can be used, however, to determine whether strict mode is in effect:

```js
const strict = (function() { return !this }());
```

#### Method invocation

A _method_ is nothing more than a JavaScript function that is stored in a property of an object:

We define them with:
```js
object.method = function;
```
And invoke them with:
```js
object.method()
```

#### Constructor Invocation

#### Indirect Invocation

JavaScript functions are objects, and like all JavaScript objects, they have methods. Two of these methods, `call()` and `apply()`, invoke the function indirectly. Both methods allow you to explicitly specify the `this` value for the invocation, which means you can invoke any function as a method of any object, even if it is not actually a method of that object. Both methods also allow you to specify the arguments for the invocation. The `call()` method uses its own argument list as arguments to the function, and the `apply()` method expects an array of values to be used as arguments. 

#### Implicit Invocation

There are various JavaScript language features that do not look like function invocations but that cause functions to be invoked. Be extra careful when writing functions that may be implicitly invoked, because bugs, side effects, and performance issues in these functions are harder to diagnose and fix than in regular functions.

The language features that can cause implicit function invocation
include:

- When an object is used in _a string context_ (such as when it is concatenated with a string), its `toString()` method is called. Similarly, when an object is used in a numeric context, its `valueOf()` method is invoked.

- A tagged template literal is a function invocation in disguise.

- When you loop over the elements of an iterable object, there are a number of method calls that occur. 

- Proxy objects have their behavior completely controlled by functions. Just about any operation on one of these objects will cause a function to be invoked.

- If an object has getters or setters defined, then querying or setting the value of its properties may invoke those methods.

### Function Arguments and Parameters

JavaScript function definitions do not specify an expected type for the function parameters, and function invocations do not do any type checking on the argument values you pass. In fact, JavaScript function invocations do not even check the number of arguments being passed.

#### Optional Parameters and Defaults

When a function is invoked with fewer arguments than declared parameters, the addition parameters are set to their default value, which is normally `undefined`. It is often useful to write functions so that some arguments are optional.

When designing functions with optional arguments, you should ve surer to put the optional ones at the end of the argument list so they can be omitted. From ES6, you can define a default value for each of your function parameters directly in the parameter list of the function by following the parameter name with a `=` and a default value.

For functions with multiple parameters, you can use the value of a previous parameter to define the default value of the parameters that follow it:

```js
const rectangle = (width, height=width*2) => ({width, height});
rectangle(1) // => {width: 1, height: 2 }
```

#### Rest Parameters and Variable-Length Argument List

Rest parameters enable the opposite case: they allow us to write functions that can be invoked with arbitrarily more arguments than parameters:

```js
function max(first=-Infinity, ...rest) {
  let maxValue = first; // start by assuming the first argument is the biggest
  // Then loop through the rest of the arguments, looking for the bigger number

  for(let number of rest) {
    if (number > maxValue) maxValue = number;
  }

  return maxValue
}
```

A rest parameter is preceded by three periods, and it must be the last parameter in a function declaration. When you invoke a function with a rest parameter, there arguments you pass are first assigned to the non-rest parameters, and then any remaining arguments are stored in an array that becomes the value of the rest parameters. Within the body of the function, the value of a rest parameter will always be an array.

These kinds of functions are called _variadic functions_, _variable arity functions_ or _vararg functions_.

#### The Spread Operator for Function Calls

The spread operator `...` is used to unpack the elements of an array (or other iterable object, like strings) in a context where individual values are expected.

`...` is not a true operator in the sense that it cannot be evaluated to produce a value; it's special JavaScript syntax to be used in array literals and function invocations.

When we use the same `...` syntax in a function definition rather than a function invocation, it has the opposite effect to the spread operator: in a function definition it gathers multiple arguments into an array.

#### The `Arguments` Object

Rest parameters were introduced into JavaScript in ES6. Before that version of the language, _varargs_ functions were written using the `Arguments` object: within the body of any function, the identifier `arguments` refer to the Arguments object for that invocation. The `Arguments` object is an array-like object that allows the argument values passed to the function to be retrieved by number, rather than by name.

#### Destructuring Function Arguments into Parameters

When you invoke a function with a list of argument value, those values end up being assigned to the parameters declared in the function definition. This is initial phase of function invocation is a lot like variable assignment, which means that we can use the techniques of destructuring assignment with functions.

### Functions as Values

In JavaScript, functions can be also values, so they can be assigned to variables, stored in the properties of objects or the elements of arrays, passed by as arguments to other functions, etc. Functions can be JavaScript data as well as syntax;

```js
function square(x) { return x**2; }
```
The name of a function is really immaterial; it is simply the name of a variable that refers to the function object. The function can be assigned to another variable and still work the same way:

```js
let s = square;
square(4) // => 16
s(4) // => 16
```

Functions can also be assigned to object properties rather than variables

```js
let o = {square; function(x) { return x**2; }};
let y = o.square(16); // => 256
```

Functions don't even require names at all, as when they're assigned to array elements:

```js
let a = [x => x ** 2, 20];
a[0](a[1]) // => 400
```

As an example of how useful it is to treat functions as values, consider the `Array.sort()`. This method optionally takes a function argument to tell it how to perform the sort. This function has a simple job: for any two values it is passed, it returns a value that specifies which element would come first in a sorted array. This makes `Array.sort()` perfectly general and infinitely flexible, as it can sort any type of data into any conceivable order.

#### Defining your Own Function Properties

Functions are not primitive values in JavaScript, but a specialized kind of objects, which means that they can have properties. When a function needs a _static_ variable whose value persists across invocations, it is often convenient to use a property of the function itself. For example, when you need a function that returns a unique integer when it is invoked, so it needs to keep track of the values it has already returned in a persistent way. You could store this information in a global variable, but that's unnecessary, because the information is used only by the function itself. It is better to store the information in a property of the function object itself:

```js
// Initialize the counter propery of the function object.
// Function declarations are hoisted so we really can do this assignment before the function declaration code:
uniqueInteger.counter = 0;

function uniqueInteger() {
  return uniqueInteger.counter++; // return current value, then increment value (post increment operator)
}

uniqueInteger() // => 0
uniqueInteger() // => 1
uniqueInteger() // => 2
```

### Functions as Namespaces

Variables declared within a function are not visible outside the function. For this reason, it is sometimes useful to define a function simply to act as a temporary namespace in which you can define variables without cluttering the global namespace.

Suppose, for example, you have a chunk of JavaScript code that you want to use in a number of different JavaScript programs (or, for client- side JavaScript, on a number of different web pages). Assume that this code, like most code, defines variables to store the intermediate results of its computation. The problem is that since this chunk of code will be used in many programs, you don’t know whether the variables it creates will conflict with variables created by the programs that use it. The solution is to put the chunk of code into a function and then invoke the function. This way, variables that would have been global become local to the function:

```js
function chunkNamespace() {
  // Chunk of code goes here
  // Any variables defined in the chyunk are local to this function
  // instead of cluttering the global namespace
}

chunkNamespace(); // But don't forget to invoke the function!
```

You can even define and invoke an anonymous function in a single function expression:

```js
(function() { // chunkNamespace() function rewritten as an anonymous function expression

  // Chunk of code goes here

}()); // End of the function literal and invoke it now.
```

This technique of defining and invoking a function in a single expression is used frequently enough that it has become idiomatic and has been given the name _immediately invoked function expression_. Note the necessary enclosing parentheses: with the parenthesis, the interpreter correctly recognizes this as a function definition expression.

This use of function as namespaces becomes really useful when we define one or more functions inside the namespace function using variables within that namespace, but then pass them back out as the return value of the namespace function. Function like this are known as _closures_.

### Closures

Like most programming languages, JavaScript uses _lexical scoping_. This means that functions are executed using the variable scope that is in effect _when they were **defined**_, not the scope in effect when they are invoked.

In order to implement lexical scoping, the internal state of a JavaScript function object must include, not only the code of the function but also a reference to the scope in which the function definition appears. This combination of a function object and a scope (a set of variable bindings, its context) in which the function's variables are resolved is called a _closure_.

Technically, all JavaScript functions are closures, but because most functions are invoked from the same scope that they were defined in, it normally doesn't really matter that there is a closure involved. 

Closures become interesting when they are invoked from a different scope than the one they were defined in. This happens most commonly _when a nested function object is returned from the function within which it was defined_. There are a number of powerful programming techniques that involve this kind of nested function closures, and their use has become relatively common in JavaScript programming.

The first step to understanding closures is to review the lexical scoping rules for nested functions:

> Function definitions can be nested within other functions, and _they have access to any variables that are in scope where they are defined_.

Consider the following code:
```js
let scope = 'global scope'; // A global variable
function checkScope() { 
  let scope = 'local scope'; // A local variable within the function body
  function f() { return scope; } // A function defintion; return the value of `scope` that is in scope here

  return f();
}
checkScope() // => 'local scope'
```

The `checkscope()` function declares a local variable `scope`, defines a function that returns the value of that variable, to then return the value returning from that function `f()` invocation. Let's change the code a little:

```js
let scope = 'global scope';
function checkScope() {
  let scope = 'local scope';
  function f() { return scope; }

  return f; // checkScope now returns the function object itself, not the value returning from the function `f()`
}
let s = checkScope()(); // we invoke the function object that returns from the `checkScope()` invocation, from the outermost scope.
console.log(s) // => 'local scope'
```

Remember the fundamental rule of lexical scoping: JavaScript functions are executed using the scope in which they were _defined_. The nested function `f()` was defined in a scope where the variable `scope` was bound to the value `'local scope'`. That binding is still in effect when `f` is executed, no matter where it is executed from (in this case, from outside the function that contains it, `checkScope()`).

This is the surprising and powerful nature of closures: they capture the local variables (and parameter) bindings of the outer function from within which they are defined; they take their context with them.

#### How to keep variables as a function's private state

Closures capture the local variables of a single function invocation and can use those variables as private state.

This is how we could rewrite the `uniqueInteger()` using an immediately invoked function expression to define a namespace and a closure that uses that namespace to keep its state private:

```js
let uniqueInteger = (function() {
  let counter = 0;
  return function() { return counter++; };
}());
uniqueInteger() // => 0
uniqueInteger() // => 1
```

This code is defining and invoking a function (via a function expression), and this function's return value is assigned to the variable `uniqueInteger`. But the return value of this function is another function: it is this nested function object that gets assigned to `uniqueInteger`. This function, that we are invoking from a different, outermost scope, still has access to the `counter` variable because it is in scope when it is defined: the `counter` variable is part of the context that the function takes with it each time it is invoked. Also, no other code has access to this variable (contrary to the first implementation of `uniqueInteger`), the inner, returning function has exclusive access to it.

It is perfectly possible for two or more nested functions to be defined within the same outer function as share the same scope:

```js
function counter() {
  let n = 0;
  return { // We are returning a literal object with two properties, whose value is a function
    count: function() { return n++; }, // Returns value of state
    reset: function() { n = 0; }  // Resets state
  };
}
let c = counter(), d = counter();
c.count() // => 0
d.count() // => 0. They count independently
c.reset(); // reset() and count() share state
c.count() // => 0. Because we reset c
d.count() // => 1: d was not reset
```
The most important things to understand here is that:
1. The two methods share access to the private variable `n`
2. Each invocation of `counter()` (the outer, containing function) _creates a new scope, independent of the scopes used by previous invocations, and a new private variable within that scope_. So, if you call `counter()` twice, you get two counter objects _with different private variables_: Each closure has its own set of variable copies.

It is also very important to recognize when closures inadvertently share access to a variable that they should not share:

```js
// This function returns a function that always retuns v
function constantFunction(v) { return () => v; } // The returning function takes the parameter v with it.

// Create an array of constant functions:
let functions = [];
for (var i = 0; i < 10; i++) functions[i] = constantFunction(i); // The returned function, () => v

// The function at array element 5 returns the value 5.
functions[5]() // => 5
```

When working with code like this that creates multiple closures using a loop, it is a common error to try to move the loop within the function that creates the closure. For example:

```js
// Return an array of functions that return the values 0-9
function constantFunctions() {
  let functions = [];
  for (var i = 0; i < 10; i++) functions[i] = () => i;

  return functions;
}

let functions = constantFunctions();
functions[5] // => 10. Why does not returns 5?
```

This code creates 10 closures and stores them in an array. The closures are all defined within the same invocation of the function, so they share access to the variable `i`. When `constantFunctions()` returns, the value of the variable `i` is 10, and all closures share this value. It is important to remember that the scope associated with a closure is _live_. Nested functions do not make private copies of the scope or make static snapshots of the variable bindings. Fundamentally, the problem here is that variables declared with `var` are defined _throughout the function_. Our `for` loop declares the loop variable with `var i`, so the variable `i` is defined, in scope, throughout the `constantFunctions()` function, rather than being more narrowly scoped to the body of the loop. If we just replace the `var` with a `let` or `const`, then the problem goes away: because `let` and `const` are block scoped, each iteration of the loop defines a new scope that is independent of the scopes of all other iterations, and each of these scopes has its own independent copy (binding) of `i`.

Another thing to remember is that `this` is a JavaScript keyword, not a variable. Arrow functions inherit the `this` value of the function that contains them, but functions defined with the `function` keyword do not. So, if you're writing a closure that need to use the `this` value of its containing function, you should:
- use an arrow function, or call `bind()`, on the closure before returning it, 
- or assign the outer `this` value to a variable that your closure (the returning function) will inherit

```js
const self = this; // Make this value available to nested functions
```

### Function Properties, Methods, and Constructor

Functions are really a specialized kind of JavaScript object, and, since function are objects, they can have properties and methods, just like any other object:

#### Function properties:

##### `length`

The read-only `length` property of a function specifies the arity of the function

##### `name`

The read-only `name` property of a function specifies the name that was used when the function was defined, if it was defined with a name, or the name of the variable or property that an unnamed function expression was assigned to when it was first created.

##### `prototype`

All functions, except arrow functions, have a prototype property that refers to an object known as the prototype object. 

#### Function methods

##### `call()` and `apply()`

`call()` and `apply()` allow you to indirectly invoke a function as if it were a method of some other object. The first argument to both methods is the object on which the function is to be invoked; this argument is the invocation context and becomes the value of the `this` keyword within the body of the function:

```js
function.call(object);
function.apply(object);
```
Is equivalent to;

```js
object.method = function; // Make function a temporary method of object
object.method(); // Invoke it, passing no arguments
delete object.method; // Remove the temporary methods
```

Arrow function inherit the `this` value of the context where they are defined. This cannot be overriden with the `call()` and `apply()` methods. If you call any of those methods on an arrow function, the first argument will be ignored.

Any arguments to `call()` after the first invocation context argument are the values that are passed to the function that is invoked.

The `apply()` method is like the `call` method, except that the arguments to be passed to the function are specified as an array.

##### The `bind()` methods

The primary purpose of `bind()` is to _bind_ a function to an object. When you invoke the `bind()` method on a function `f` and pass an object `o`, the method returns a new function. Invoking the new function (as a function) invokes the original function `f` as a method of `o`. Any arguments you pass to the new function are passed to the original function.

Arrow functions inherir their `this` value from the environment in which they are defined, ant that value cannot be overridden with `bind()`.

The most common use case for calling `bind()` is to make non-arrow functions behave like arrow functions.

`bind()` can also perform partial application: any arguments you pass to `bind()` after the first (the object to bind the function to) are bound along with the `this` value. This partial application feature of `bind()` does work with arrow functions. Partial application is a common technique in functional programming and is sometimes called _currying_.