## Closure

A closure is a concept in general programming that many languages implement in different ways. Closures allow to save chunks of code for a later use and execute them when needed. Closures bind their enviroment: they capture references to the surrounding artifacts (like variables or methods) that are in scope when the closures are created, defining an encapsulation or enclosure around everything, so they still can be referenced and even reassigned when the closure is executed. They can be understood as a special kind of anonymous methods or functions that can be passed around and executed, but with the extra convenience of remembering the entire context in which they were created.

Closures in Ruby:

- proc objects, instances of the `Proc` class
- lambdas
- blocks

...

Anonymous methods or functions (a more abstract term) that preserve the local variable and other artifacts bindings that are in effect when the closure is created.

Ruby implements closures in three ways: blocks, procs and lambdas.

A piece of code that carries its creation context around with it it's called a closure. Creating a closure is like packing a suitcase: wherever you open the suitcase, it contains what you put into it when you packed it. When you open a closure (by calling it), it contains what you put into it when it was created.

Closures are important because they preserve the partial running state of a program. A variable that goes out of scope when a method returns may have something interesting to say later on. And with a closure, you can preserve that variable so it can continue to provide information to the program.

...

However, local variables must be defined before the closure's creation so it can access them; if not, we will need to explicitly pass the local variables to the closure at the time of its invocation.

This can be very useful when methods or blocks return a closure via, for instance, a `Proc` object: the `Proc` object will form a closure with its environment at the time of its creation. Each new `Proc` object created in the same environment will have its own closure.

...

- Blocks create a closure when they are passed to a method
- Proc objects and lambdas create a closure when they are created (whent the Proc class is instantiated)

Bindings and closure determine the variable scope rules in Ruby. 'Inner scopes' can access 'outer scopes' because, at the time of the code execution in the 'inner scope', variables from the 'outer scope' are variables that are already in scope: they form part of the environment, are part of the binding, so they are retained by the 'inner scope' closures, but not viceversa, because they were not variables that were in scope at the moment of the execution of the code in the 'outer scope'.

## Binding

The surrounding artifacts in scope at the time of the closure's creation is called its **binding**. The binding is comprised by local variables, method references, constants and other artifacts, defined BEFORE the the closure is created. If not, the variable will have to be explicitly passed to the closure if we want to use it inside it. The closure will keep track of all the artifacts, retaining references to them. So, if, for example, a variable in a closure's binding it's reassigned to another object after the closure is created, the closure will keep track of that change, and the variable will refer to the newly assigned value.

## Scope

Bindings and closure determine the variable scope rules in Ruby. 'Inner scopes' can access 'outer scopes' because, at the time of the code execution in the 'inner scope', variables from the 'outer scope' are variables that already exist : they form part of the environment, are part of the binding, so they are retained by the 'inner scope' closures, but not viceversa, because they are not in scope at the moment of the 'outer scope' code execution.

## Block

By providing a code block, you're giving a method a chunk of code to which it can _yield_ control. When the methods yields to the block, the code in the block is executed, and then control returns to the method. In Ruby, code blocks work as closures (the closure is created when the block is passed to the method)

Curly braces or `do`..`end` key words delimit the block. The difference between the two ways of delimiting a code block is a difference in precedence.

Blocks have direct access to variables that already exist. However, block parameters behave differently from non-parameter variables. If you have a variable of a given name in scope and also use that name for one of the block parameters, then the two variables, the one that exists and the one in the parameter list, are not the same as each other (shadowing, as the parameter shadows the outer variable).

Blocks share local scope with the code that preceds them. In Ruby, blocks serve as closures: they can serve as the bodies of anonymous function objects, and those objects preserve the local variables and other artifacts that are in scope at the time of their creation, even if the function objects get handed around other local scopes.

Code blocks always return a value: its last evaluated expression. The return value comes back from the block to the method as the return value from `yield`.

## Yield

With the `yield` keyword we can execute the code inside the block (a.k.a. calling the block) provided to the method from within the method's definition.

When the method yields to the block, the code in the block runs, and then control returns to the method. Yielding isn’t the same as returning from a method. Yielding takes place while the method is still running. After the code block is executed, control returns to the method at the expression immediately following the call to yield.

If a method's implementation contains a yield, the method user can inject aditional code in the middle of the method execution without altering the method's definition. This provides a very handy extra flexibility to the method, hence one of the great advantages of using code blocks in Ruby.

The LocalJumpError exception:

It is raised when the method includes a `yield` and expects a block that was not provided in the method invocation. This error can be avoided wrapping the `yield` call in a conditional, making use of the `Kernel#block_given?` method. This provides the flexibility for a method to work with and without a block.

We can define block parameters in the block we provide to the method (between `|` after `{ `or `do`). Within the block, the parameter will be a _block local variable_, a special type of local variable whose scope is limited to the block. If we name a block parameter like a variable in scope when the block is defined, that outer variable will be _shadowed_ by the parameter of the same name, and we won't be able to access that outer variable from within the block.

`yield` accepts an argument list that will be passed to the block, in which the block parameters will be assigned to the arguments passed in from the method, so they can work as block local variables within the block. These arguments can be mutated permanently by a destructive method inside the block like any other method.

`yield` returns the return value of the block it yields to, which which will be its last evaluated expression.

...

Yielding to a block and returning from a method are two different things. A method may yield to its block any number of times, but every method returns exactly one, assuming no fatal errors. It's like a jump in figure skating. You take off, execute some rotations in the air, and land. No matter how many rotations you execute, you only take off once and land once. A method call causes the method to run once and execute once.

The code block, like methods, can take arguments. When a method yields, it can yield one or more values. The block pick ups the argument through its parameters, and the parameters get bound to whatever value gets yielded from the method to the block.

## Proc

The idea of a callable object is embodied as an object on which you can call the `call` method with the expectation that some code associated with the object will be executed.

The main callable objects in Ruby are: `Proc` objects, lambdas and method objects.

`Proc` objects are self-contained code sequences that you can create, store, pass around as  arguments and be called via the call method.

Important topics about `Proc` objects (or procs):

Basics of creating and using procs

- call to Proc.new plus a code block: `pr = Proc.new { puts "I'm a proc" }`

- via the Kernel#proc method: `pr = proc { puts "I'm also a proc" }`

the relationship between procs and code blocks.

- every proc requires a block to be created, but not every block serves as a proc objec (like `[1, 2, 3].each { |i| puts i }` Here the block does not create a proc.)

- A method can capture a block, objectify it into a proc, using the special operator `&` at the left of the parameter at the method definition level.

- But a proc object can serve as a block stand-in at the method invocation level, using a similar syntax leading `&` on the argument passed in to the method.

## Lambda

Lambdas are similar to `Proc` objects (are also instances of `Proc`), with some specific syntax and behavior (like strict arity and the effect of the keyword `return`).

## Arity

Arity refers to the rule regarding the number of arguments that you must pass a block, proc or lambda.

In Ruby, blocks and procs have _lenient arity_, so that Ruby doesn't raise an exception when less or more arguments are passed to the block than the number of block parameters.

Methods and lambdas have _strict arity_, which means that the same number of arguments have to be passed to them as the number of parameters the method or lambda defines.

If the method or block allows any kind of optional arguments (like *sponge arguments), the arity rules do not apply to those arguments.

## leading &

Note that `&`, when applied to an argument object is not the same as an `&` applied to a method parameter, as in this code:

```ruby
def foo(&block)
  block.call
end
```
- While `&` applied to an argument object causes the object to be converted to a block,

- `&` applied to a method parameter causes the associated object to be converted to a proc.


## &:symbol

When applied to an argument for a method, a lone `&` causes ruby to try to convert that object to a block. If that object is already proc, the conversion happens automatically. If the object is not a proc, then `&` attempts to call the `#to_proc` method on the object first. Used with symbols, e.g., `&:to_s`, Ruby creates a proc that calls the `#to_s` method on a passed object, and then converts that proc to a block. This is the "symbol to proc" operation (though perhaps it should be called "symbol to block").

If we want to invoke a method on each element in a collection, we can use the shortcut:

`collection_object.iterator_method(&:symbol_name_for_method_to_be_invoked_on_each_element)`
Unfortunately, we can't use this shortcut for methods that take arguments.

The mechanism at work is:

- We apply the `&` operator to an object (usually referenced by a variable)
- Ruby converts the object to a `Proc` if not already one. (calling `Symbol#to_proc` in the example)
- Ruby then converts the Proc into a block

...

This is a nice shortcut to situations like this:
```ruby
  %w( lucas sorribes ).map(&:capitalize)
  # => ['Lucas', 'Sorribes']
```
The symbol `:capitalize` is interpreted as a 'message' to be sent to (or method to be called on) each of the elements in the array. What is happening here is that, first, Ruby tries to convert the object to a block. In this case, the object is a symbol, so, in order to convert it to a block, first it converts it to a `Proc` object by calling on it the `Symbol#to_proc` method. Then, converts the `Proc` object to a block, a thing that Ruby can do naturally. The `&` operator is a flag that indicates the method to use this as the stand-in code block that would've been passed in: this operation is equivalent to this:
```ruby
  %( lucas sorribes ).map { |name| name.capitalize }
  # => ['Lucas', 'Sorribes']
```
However, this shourtcut doesn't work with methods that require arguments.
