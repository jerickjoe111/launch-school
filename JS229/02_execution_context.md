# Determining and Setting Function Execution Context

## The Global Object

Before the program's code is executed, the JavaScript interpreter creates a regular object - the _global object_ - available throughout the program. This object will be given a series of properties that will define the globally available identifiers, including:

- global constants (like `undefined`, `Infinity` or `NaN`),
- global functions (like `isNaN()` or `parseInt()`),
- built-in constructor functions (like `Date()`, `RegExp()` or `Set()`)
- global objects (like `Math` or `JSON`)

In the web browser, the Window object serves as the global object, that, besides the code JavaScript properties, includes some browser and client-side specific properties.

In Node, the code is wrapped inside a function, which means that, all our variables and functions are function-scoped, but the implicit execution context in the top level is not the global object, but an empty object `{}`.

We can access this object by different ways:

- On the top level scope, by the keyword `this` **in non-strict mode**.
- In the web browser, the Window global object has a self-referential `window` property by which we can refer to it.
- In Node, the global object has also a self-referential `global` property we can use to access it.
- ES2020 defined the standard way to refer to this global object in any context: `globalThis`.

It is important to note that, in strict mode, the global object does not work as the implicit evaluation/execution context, and the keyword `this` is set to `undefined`. As a consequence, we can't access undeclared variables (this is a security measure against possible misspellings)

### Global Variables and the Global Object

- When we declare `var` variables on the top-level scope, JavaScript includes them in the global object as properties, although we can't use the `delete` operator to delete them.
- In non-strict mode, when we initialize undeclared variables on the top level scope, JavaScript also adds them as properties of the global object, but, in this case, we can delete them via the `delete` operator.
- `let` and `const` variables are not added as properties of any object.

## `this` and the Execution Context

In addition to its arguments, each function (and method) invocation implies another value: the _execution_ or _invocation context_. This value is the execution context. We can access to this execution context object by `this`. 

There are two types of execution contexts:

- _Implicit_: the execution context set automatically by JavaScript
- _Explicit_: the execution context set manually by the programmer.

The execution context is set dynamically upon invocation, not definition, and `this` is not a variable, but a keyword: this implies that `this` is not ruled by the regular variable scope rules, and its value is not dependent on the lexical structure. In other words, the value of `this` depends on _how_ you invoked the function, not on _where_ you defined it. 

Arrow functions are special in the sense that they _inherit_ their `this` value from the environment in which they were defined (but not lexically, as they depend on the execution state at the time of definition, and not just the code structure)

### Implicit Execution Context

#### Functions

The implicit function execution context is the context of functions called without an explicit context, not as methods. The binding of a function to its context occurs _when it is called, not when it is defined_; if we, for instance, copy a reference to a method and we then invoke it _as a function_, without the original owner object as a receiver, its context won't be that object, but the global object.

In strict mode, however, `this` in the global scope is set to `undefined`.

#### Methods

Methods are functions that happen to be the value of an object's property, called with the object as a receiver, and without an explicit context. In this case, the execution context is the calling object. But, again, this context is assigned upon invocation, not definition; if we call the original method as a function, outside the parent object, its context won't be the parent object, but the global object.

One proof that `this` and the execution context don't work by regular variable rules is that, for example, when we refer to `this` within a nested function inside a method, and we call that nested functions _as a function_ inside the method, `this` does not refer to the parent object, as it would be expected. When this happens it's called a _context loss_, and there are a few ways around it.

### Explicit Execution Context

There are three main ways to invoke a function with an explicit context, by binding it to a specific object:

- Calling the function with the `call` method.
- Calling the function with the `apply` method.
- Creating a new function from other function, permanently bound to an explicit context.


#### `call()` and `apply()`

These methods invoke the caller function as it was a method of the first argument provided (an object), thus making this object argument the explicit context of the function invocation, and, consequently, the value of `this` within the caller function. This is set on invocation time, and does not change the function in any way.

We can pass extra arguments after the first one as if we were passing them to the function in a regular invocation; the only difference between `call()` and `apply()` is that `call()` accepts the extra arguments as a list of values, and `apply()` accepts them as a single array of values.

#### `bind()`

The `bind()` method permanently binds a function to an object, thus making this object the explicit execution context of that function. When we invoke this method on a function and pass an object as argument, it returns a new function, without performing any modifications to the original, caller function; in every future invocation of the new function, it will be invoked as if it was a method of the object we passed as argument to `bind()`. Any other arguments we pass to the new function will work as if we passed them to the original function. In addition, calling `bind()` does not invoke the original function.

`bind` also has a special characteristic: it can also perform partial application; any extra arguments passed to `bind()` after the first one (the explicit context) will be bound to the new function as well.

Arrow function _inherit_ the value of `this` from the environment in which they were defined, and this value can't be altered by `bind()`. 

It's important to note that if we try to use `call()` or `apply()` on the new function returned by `bind()`, it will still have the context set by `bind()`, and these methods will not work.

## Dealing With Context Loss

### Method Losing Context when Taken Out of Object

If for example we copy a method into a new variable, and we call it outside the original containing object, as a function, we say that the method has _lost its context_, and any `this` within that method no longer will refer to the parent object. These are three ways we can use to preserve the original intended context:

- If the object is still in scope, we can call that method outside the object via `call()` or `apply()`.
- If the object is not in scope, we could alter the code in some way that we call the method from outside the parent object from within an intermediary or receiving function that defines an extra parameter, passing the intended object as the context.
- If we can alter the function or supply an extra context object, we can use `bind()` to create a new function bound to the context we want.

### Internal Function Losing Method Context

Within methods, the context does not propagate into nested functions: when we refer to `this` within a nested function inside a method, and we call that nested function inside the method, `this` does not refer to the parent object, as it would be expected. Instead, `this` refers to the global object in non-strict mode, and to `undefined` in strict mode.

 There are four basic solutions to this problem:

1. Preserve Context with a Local Variable:

    We can store the value of `this` within the method in a variable (usually called `self`), and use that variable instead of `this` within the nested functions.

2. Pass the Context to the Nested Function:
  
    We can pass the value of `this` to the nested function's invocation, via `call()` or `apply()`. Also, all the classic iterators (`forEach()`, `map()`, `find()`, etc.) accept an optional context argument.

3. Hard bind the nested function to the method's context:

    We can create a new function bound to method's context, and call that nested function whenever we want within that method.

4. Use an arrow function:

    Finally, we can use arrow functions, which _inherit_ the value of `this` from the environment in which they are defined, solving our problem.

### Function as Argument Losing Surrounding Context

We can use the same solutions as the previous problem