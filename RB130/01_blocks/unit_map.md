## Lesson 01: Blocks
___
Closures in Ruby:

  - `proc` objects, instances of the `Proc` class
  - lambdas
  - blocks

A **closure** is a concept in general programming that many languages implement in different ways. Closures allow to save chunks of code for a later use and execute them when needed. Closures bind their enviroment: they capture references to the surrounding artifacts (like variables or methods) that are in scope when the closures are created, defining an encapsulation or _enclosure_ around everything so they still can be referenced when the closure is executed. They can be understood as a special kind of anonymous methods or functions that can be passed around and executed, but with the extra convenience of remembering the entire context in which they were created.

The set of references to the closure's environment (the surrounding artifacts in scope at the time of the closure's definition) that a closure retains is called its **binding**
___

### a. How methods interact with blocks

Every method call in Ruby has the following syntax:

  - A receiver object or variable (defaulting to self if absent)
  - A dot (required if there’s an explicit receiver; disallowed otherwise)
  - A method name (required)
  - An argument list (optional; defaults to `()`)
  - A code block (optional; no default)

Note that the argument list and the code block are separate.

(If a method seems to be ignoring a block that you expect it to yield to, look closely at the precedence rules and make sure the block really is available to the method.)

For example:
```ruby
[1, 2, 3].each do |number|
  puts number
end
```
- `[1, 2, 3]` is the receiver object on which we call the `Array#each` method.
- `.` is the _message sending operator_ through which we send the _message_ with the method name to the receiver object `[1, 2, 3]`
- `each` is the method name we send to the receiver object, that will indicate it to execute the `Array#each` method.
- `do (...) end` is the block we provide to the method call. We _pass in_ the block to the `Array#each` method _as an argument_ at method invocation time. 

(According Launch School resources, the block is an argument we pass in to the method, but this is not technically correct. The block is part of the method invocation syntax, not an argument. Here we are providing an empty list of arguments to `Array#each`. Arguments and blocks are different constructs, refer to different things, and exist independently of each other, although methods make use of both.)

In Ruby, every method accepts an optional block provided to its invocation (in other words, every method takes an implicit block regardless of its definition). How the block affects to the method's return value depends on the method's implementation.

We have to differentiate between a method implementation and a method invocation.

Defining methods with an explicit block parameter:


### b. Yield

With the `yield` keyword we can execute the code inside the block (a.k.a. _calling_ the block) provided to the method from within the method's definition.

When the method _yields_ to the block, the code in the block runs, and then control returns to the method. Yielding isn’t the same as returning from a method. Yielding takes place while the method is still running. After the code block is executed, control returns to the method at the statement immediately following the call to `yield`.

If a method's implementation contains a `yield`, a developer using the method can inject aditional code in the middle of the method execution without altering the method's definition. This provides a very handy extra flexibility to the method, hence one of the great advantages of using code blocks in Ruby.

The `LocalJumpError` exception:

It is raised when the method includes a `yield` and expects a block that was not provided in the method invocation. This error can be avoided wrapping the `yield` call in a conditional, making use of the `Kernel#block_given?` method. This provides the flexibility for a method to work with and without a block.

We can define block parameters in the block we provide to the method (between `|` after `{` or `do`). Within the block, the parameter will be a **block local variable**, a special type of local variable whose scope is limited to the block. If we name a block parameter like a variable in scope when the block is defined, that outer variable will be _shadowed_ by the parameter of the same name, and we won't be able to access that outer variable from within the block.

`yield` accepts an argument list that will be passed to the block, in which the block parameters will be assigned to the arguments passed in from the method, so they can work as block local variables within the block. These arguments can be mutated permanently by a _destructive_ method inside the block like another method.

`yield` returns the return value of the block it yields to, which which will be its last evaluated expression. 

### c. Arity

**Arity** refers to the rule regarding the number of arguments that you must pass a block, `proc` or `lambda`.

In Ruby, blocks and `procs` have **lenient arity**, so that Ruby doesn't raise an exception when less or more arguments are passed to the block than the number of block parameters.

Methods and `lambdas` have **strict arity**, which means that the same number of arguments have to be passed to them as the number of parameters the method or `lambda` defines.

If the method or block allows any kind of optional arguments, the arity rules do not apply to those arguments.

### d. When and why use blocks in your own methods

Two main use cases for using blocks in your own methods are:

1. To defer some implementation code to method invocation decision.


2. Methods that need to perform some 'before' and 'after' operations (_sandwich code_)

### e. Using closures

### f. Blocks and variable scope

### g. Symbol to proc

