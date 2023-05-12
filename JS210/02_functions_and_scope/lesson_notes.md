# Functions

| If you are | Then you should |
| --- | --- |
| **Defining** a function | _parameters_ |
| **Invoking** a function | _arguments_ |


Notes:

1. Calling a function with too few arguments does not raise an error.
2. Calling a function with more arguments than the function expects does not raise an error.
3. Within a function, an argument that wasn't provided in the call (unassigned parameter) will have the value of `undefined`.

# Functional Scopes and Lexical Scoping

## The Global Scope

Code outside any function or block belongs to the _global scope_.

## Local Scopes

Inside a function or a block, the code is in a _local scope_, relative to the containing function or block. (function or block scope)

## Lexical Scoping

JavaScript uses lexical scoping to determine where it looks for variables: the program's textual (_lexical_) structure determines the variable's scope. In other words: **the source code defines the scope**. When you write a function in your code, it creates a scope even if the function never gets executed and has no variables of its own. At any point in the program, there is a hierarchy of scopes from the local scopes up to the global scope.

When JavaScript tries to find a variable, it searches this hierarchy from the bottom to the top. It stops and returns the first variable it finds with a matching name. This means that variables in a lower scope can _shadow_, or hide, variables of the same name in a higher scope.

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

# Function Declarations and Function Expressions

## Function Declarations

A function declaration or function statement defines a variable, and the value of this variable is the function object itself. This function variable obeys general scoping rules like any other variable.

Function declarations must start with the `function` keyword, and has a name. A function declaration creates a function object and a variable; for every function declaration, a variable is initialized.

## Function Expressions

A function expression defines a function as a part of a larger expression syntax, usually a variable assignment, and may not have a name. 

When talking about functions assigned to variables, we say "the anonymous functions assigned to `foo` returns..."

Function expressions can have names, but the function's name is only available as a local variable within the function: this is useful for recursive functions and for debugging.

> If a statement begins with a `function` keyword, it is a function declaration; otherwise, it is a function expression.

## Arrow Functions

We can use the arrow shorthand to define anonymous functions in a simpler expression:

```js
(parameters) => body // the return and the ; are optional if the body spans just a single line
```
This syntax is ideal for _callback functions_ (functions passed to another functions as arguments).

Arrow functions inherit the _execution context_ (the value of the `this` keyword) from their surrounding code.

# Hoisting

## `let`, `const` and `var`

- Variables declared with `let` and `const` are _block-scoped_
- Variables declared with `var` are _function-scoped_
- Both types of variables' declarations are hoisted, but referencing a `var` variable before the code that initializes it does not raise an error.

## What is Hoisting?

JavaScript engines operate in two main phases: the creation phase and the execution phase. Before the execution phase begins, the creation phase does some preliminary work. One of those work items is to find all the variable, function and class _declarations_: this action seems to 'move' the declarations to the top of their respective function or block; function-scoped declarations get moved to the top of the function, and block-scoped declarations get moved to the top of the block. This process is called _hoisting_.

## The Temporal Dead Zone

`let`, `const` and `var` declarations are hoisted, but:

- When a `var` variable is hoisted, JavaScript gives it an initial provisional value of `undefined`
- When `let` or `const` variables are hoisted, they are not given an initial value at all, but the program is aware of their presence anyway: they are left in an 'unset' state (Temporal Dead Zone)

## Hoisting for Function Declarations

JavaScript also hoists function declarations to the top of the scope: it hoists the entire function declaration, including its body. This means that we can invoke a function before its declaration.

Function declaration have function scope: hoisting also occurs with nested functions.

The precises hoisting behavior you'll see if you nest a function inside a block is inconsistent.

## Hoisting for Function Expressions

If the function object is assigned to a variable, the variables obeys the general hoisting rules for variable declarations; however, if they are not assigned to any variable, these functions do not exist until the expression that defines them is actually evaluated: functions defined with expressions cannot be invoked before they are defined.

## Hoisting Variable and Function Declarations

When both a variable and a function declaration exist, you can assume that the function declaration is hoisted first; that is, the function declarations are hoisted above the variable declarations.

If you declare a variable with `var`, and there is a function declaration in the same scope with the same name, the function will be hoisted on top, and the variable declaration will be redundant. However, if the variable is then initialized (technically _reassigned_, as it was already initialized to the function object) to another value, that variable will lose its binding with the original function.

## Best Practices

- Use `let` and `const`, not `var`.
- If you must `var`, declare all the variables at the top of the scope
- If you use `let` and `const`, declare them as close to their first usage as possible.
- Declare functions before declaring them

## Hoisting isn't real

The behavior that we try to explain with hoisting is merely a consequence of JavaScript's two phases: the creation phase and execution phase. The creation phase prepares your code for execution. Each time it encounters a variable, function, or class declaration, it adds that identifier to the current scope. Depending on the declaration and where the declaration occurs, the identifier gets added to either the global scope or the local scope (which may be either a function or a block). Thus, _at the end of the creation phase, JavaScript knows all the identifiers in your program and what scopes each one belongs to_.

When the execution phase occurs, JavaScript no longer cares about declarations. It does care about initialization and function/class definitions, but not the declarations themselves. The identifiers are already known, and their scope is already known. JavaScript merely needs to look up the identifiers as needed.

# Variables, Functions and Blocks

## Objects vs Primitive Values

1. Every value in JavaScript is either a primitive or an object
2. Primitives are atomic values
3. Objects are 'compound' values made up of primitives or other objects
4. Primitive values are immutable. Any operation performed on a primitive value returns a new primitive value
5. Objects are mutable: certain operations on objects can change the object in place. All variables that have a reference to that object will see that change.

# Closures

## Closures

Closures use the scope in effect at a _function's definition_ point to determine what variables that function can access; what variables are in scope during a _function's execution_ depend on the closure formed by the function's definition. 

Closures are created when you define a method or function. In effect, the function definition and its scope become a single entity (abstract) called a _closure_. When the function is invoked, it can access any variables it needs from that environment. That is, the function can use variables from the lexical scope where the function was defined, _even if those variables aren't in the lexical scope where you invoke the function, it can still access them.

The closures contain pointers to the variables it needs from the context in which they were defined, so their values are not garbage collected.

Closures only close over the variables that the function needs (the function takes with it only the context it needs)

This works by keeping pointers to the original variables themselves, _not to the values these variables are pointing to_. 

When a function encounters a variable name during execution, it first looks inside its local scope for that name. If it can't find the name, it then 'looks in the closure'; if the name is there, it follows the pointer to get the current value of the original variable. 

## Fist-class values (or objects)

- They can be assigned to a variable or an element of a data structure
- They can be passed as an argument to a function
- They can be returned as the returned value of a function

In JavaScript, all primitive values and objects, including functions, meet these criteria. Functions are objects too, that can behave like any other value

Functions that return other functions are perhaps the most powerful feature of closure in JavaScript.

Important note: a closure is not a static snapshot of the program state, but it sees the current (most recent) values of the variables. (Remember, closures contain pointers to the variables, not the values those variables were pointing to). 

Each of the closures created (when, for example, a function is created and returned from another function) gets their own copy of the variable.

Closure definitions are purely lexical. Closures are based on your program's textual structure. Even if you never call a particular function, that function forms a closure with its surrounding scope.

## Partial Function Application

Partial function application refers to the creation of a function that can call a second function with fewer arguments that the second function expects. The created function supplies the remaining arguments (because it took them with it from its definition context, they form part of its closure)

Partial function application is most useful when you need to pass a function to another function that won't call the passed function with enough arguments.

## Recognizing Partial Function Application

Partial function application requires a reduction in the number of arguments you have to provide when you call a function. If the number of arguments isn't reduced, it isn't partial function application.

## What are closures good for?

-	Currying (a special form of partial function application)
-	Emulating private methods
-	Creating functions that can only be executed once
-	Memoization (avoiding repetitive resource-intensive operations)
-	Iterators and generators
-	The module pattern (putting code and data into modules)
-	Asynchronous operations

