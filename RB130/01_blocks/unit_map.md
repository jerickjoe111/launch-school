## Lesson 01: Blocks
___
Closures in Ruby:

  - proc objects: Instances of the `Proc` class
  - lambdas
  - blocks

A **closure** is a concept in general programming that many languages implement in different ways. Closures allow to save code snippets for a later use and execute them when needed. Closures bind their enviroment: they capture values from the surrounding artifacts (like variables or methods) that are in scope when the closures are defined, creating an envelopment or _enclosure_ around everything so they can be referenced when the closure is executed. They can be understood as a special kind of anonymous methods or functions that can be passed around and executed, but with the extra convenience of capturing the state of their environment.

The set of references to the closure's environment (the surrounding artifacts in scope at the time of the closure's definition) that a closure retains is called its **binding**
___

### a. Anatomy of a method

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

In Ruby, every method accepts an optional block provided to its invocation. How the block affects to the method's return value depends on the method's implementation.

### b. Yield

With the `yield` keyword we can execute the code inside the block (a.k.a. _calling_ the block) provided to the method from within the method's definition.

When the method _yields_ to the block, the code in the block runs, and then control returns to the method. Yielding isn’t the same as returning from a method. Yielding takes place while the method is still running. After the code block is executed, control returns to the method at the statement immediately following the call to `yield`.

If a method's implementation contains a `yield`, a developer using the method can inject aditional code in the middle of the method execution without altering the method's definition. This provides a very handy extra flexibility to the method, hence one of the great advantages of using code blocks in Ruby.

The `LocalJumpError` exception:

It is raised when the method includes a `yield` and expects a block that was not provided in the method invocation. This error can be avoided wrapping the `yield` call in a conditional, taking leverage of the `Kernel#block_given?` method. 


### c. Arity

### d. When and why use blocks in your own methods

### e. Using closures

### f. Blocks and variable scope

### g. Symbol to proc

