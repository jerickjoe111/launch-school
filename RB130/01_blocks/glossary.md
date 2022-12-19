## Closure

A closure is a concept in general programming that many languages implement in different ways. Closures allow to save 'chunks of code' for a later use and execute them when needed. Closures bind their enviroment: they preserve the local variable and other artifacts bindings that are in effect when the closure is created, defining an _encapsulation_ or _enclosure_ around everything, so they still can be referenced and even reassigned when the closure is executed. Closures can be understood as a special kind of anonymous methods or functions that can be passed around and executed, but with the extra convenience of remembering the entire context in which they were created.

Ruby implements closures in three ways:

- _proc_ objects, instances of the `Proc` class
- _lambdas_
- blocks

Blocks create a closure when they are passed to a method, but `Proc` objects and _lambdas_ create a closure when they are created (when the `Proc` class is instantiated), and each new `Proc` object or `lambda` created in the same environment will have its own closure.

Creating a closure is like packing a suitcase: wherever you open the suitcase, it contains what you put into it when you packed it. When you 'open' a closure (by calling it), it contains what you put into it when it was created.

Closures are important because they preserve the partial running state of a program. A variable that goes out of scope when a method returns may have something interesting to say later on. And with a closure, you can preserve that variable so it can continue to provide information to the program; methods and blocks can return closures themselves.

## Binding

The set of surrounding artifacts in scope at the time of the closure's creation is called its **binding**. The binding is comprised by local variables, method references, constants and other artifacts, defined BEFORE the the closure is created. If not, the variable will have to be explicitly passed to the closure if we want to use it inside it. 
When the closure is created, it 'binds' and drags around its envinonment with it: The closure will keep track of all the artifacts, retaining references to them. So, if, for example, a variable in a closure's binding it's reassigned to another object after the closure is created, the closure will keep track of that change, and the variable will refer to the newly assigned value. Each closure has its own set of variable copies.

## Scope

The scope refers to the 'visibility' or 'accessibility' of an artifact (local variable, constant, method...) at a determined point of the program. If an artifact is accessible, we say it is 'in scope'.

Blocks share local scope with the code that preceds them. 

In Ruby, blocks serve as closures: they can serve as the bodies of anonymous function objects, and those objects preserve the local variables and other artifacts that are in scope at the time of their creation, even if the function objects get handed around other local scopes.

Bindings and closures determine the variable scope rules in Ruby. 'Inner scopes' can access 'outer scopes' because, at the time of the code execution in the 'inner scope', variables from the 'outer scope' are in effect, they are part of the binding, so they are retained by the 'inner scope' closures, but not viceversa, because they are not in scope (not part of the binding when the closure is formed) at the moment of the 'outer scope' code execution.

## Block

Every Ruby method can take an implicit block, however, how the method makes use of the block depends on the method's implementation.

By providing a code block, you're giving a method a chunk of code to which it can _yield_ or pass control. When the method yields to the block, the code in the block is executed, and then control returns to the method, to the immediate expression after the `yield` invocation.

In Ruby, code blocks work as closures (the closure is created when the block is passed to the method)

Curly braces or `do`..`end` key words delimit the block. The difference between the two ways of delimiting a code block is a difference in precedence.

Blocks have direct access to variables that already exist. However, block parameters behave differently from non-parameter variables. They work as _block local variables_, a special type of local variable in which the scope is constrained to the block.  If you have a variable of a given name in scope and also use that name for one of the block parameters, then the two variables, the one that exists and the one in the parameter list, are not the same as each other (this is called _shadowing_, as the parameter shadows the outer variable).

Code blocks always return a value: its last evaluated expression. The return value comes back from the block to the method as the return value from `yield`.

We can use the `Kernel#block_given?` method, that will return `true` if a block is provided, thus making methods that include the `yield` keyword more flexible and safe, allowing us to wrap it in a conditional, for example.

## Yield

With the `yield` keyword we can execute the code inside the block (a.k.a. calling the block) provided to the method from within the method's definition.

When the method yields to the block, the code in the block runs, and then control returns to the method. Yielding isn’t the same as returning from a method. Yielding takes place while the method is still running. After the code block is executed, control returns to the method at the expression immediately following the call to yield.

If a method's implementation contains a yield, the method user can inject aditional code in the middle of the method execution without altering the method's definition. This provides a very handy extra flexibility to the method, hence one of the great advantages of using code blocks in Ruby.

The `LocalJumpError` exception is raised when the method includes a `yield` and expects a block that was not provided in the method invocation. This error can be avoided wrapping the `yield` call in a conditional, making use of the `Kernel#block_given?` method. This provides the flexibility for a method to work with and without a block.

We can define block parameters in the block we provide to the method (between `|` after `{ `or `do`). Within the block, the parameter will be a _block local variable_, a special type of local variable whose scope is limited to the block. If we name a block parameter like a variable in scope when the block is defined, that outer variable will be _shadowed_ by the parameter of the same name, and we won't be able to access that outer variable from within the block.

`yield` accepts an argument list that will be passed to the block, in which the block parameters will be assigned to the arguments passed in from the method, so they can work as block local variables within the block. These arguments can be mutated permanently by a destructive method inside the block like any other method.

`yield` returns the return value of the block it yields to, which which will be its last evaluated expression.

...

Yielding to a block and returning from a method are two different things. A method may yield to its block any number of times, but every method returns exactly one, assuming no fatal errors.

The code block, like methods, can take arguments. When a method yields, it can yield one or more values. The block pick ups the argument through its parameters, and the parameters get bound to whatever value gets yielded from the method to the block.

## Explicit block parameters

Being anonymous, the only way we can handle or execute a block within the method is with a call to `yield`, passing  any arguments it may require. We can save its return value into a local variable but not the block itself. However, we can define explicit block parameters so we can capture a block, execute it, and pass it around as any other object, by converting it into a `Proc` object, that embodies the idea of a _callable object_. This way, we it can be manipulated in a way that a block cannot.

As with `yield`, the `call` method returns the value returned from the code executed, and can take arguments.

## Proc

The idea of a callable object is embodied as an object on which you can call the `call` method with the expectation that some code associated with the object will be executed.

The main callable objects in Ruby are: `Proc` objects, _lambdas_ and method objects.

`Proc` objects are self-contained code sequences that you can create, store, pass around as arguments and be called via the `call` method.

Important topics about `Proc` objects (or procs):

Basics of creating and using procs

- call to Proc.new plus a code block: `pr = Proc.new { puts "I'm a proc" }`

- via the Kernel#proc method: `pr = proc { puts "I'm also a proc" }`

the relationship between procs and code blocks.

Every proc requires a block to be created, but not every block serves as a proc objec (like `[1, 2, 3].each { |i| puts i }` Here the block does not create a `Proc`) A method can capture a block, objectify it into a `Proc`, using the special operator `&` at the left of the parameter at the method definition level. 

But also a `Proc` object can serve as a block stand-in at the method invocation level, using a leading `&` on the argument passed in to the method.

## Lambda

_Lambdas_ are similar to `Proc` objects (are also instances of `Proc`), with some specific syntax and behavior (like strict arity and the effect of the keyword `return`).

## Arity

Arity refers to the rule regarding the number of arguments that you must pass a block, proc or `lambda`.

In Ruby, blocks and procs have _lenient arity_, meaning that Ruby doesn't raise an exception when less or more arguments are passed to the block than the number of defined parameters.

Methods and _lambdas_ have _strict arity_, which means that the same number of arguments have to be passed to them as the number of parameters the method or `lambda` defines.

If the method or block allows any kind of optional arguments (like *sponge arguments), the arity rules do not apply to those arguments.

## leading &

Note that `&`, when applied to an argument object is not the same as an `&` applied to a method parameter, as in this code:

```ruby
def foo(&block)
  block.call
end
```
- `&` applied to a method parameter causes the associated object to be converted to a `Proc`. (at method definition time)
Now the block has been converted into an object that can be referenced and passed around. 

- While `&` applied to an argument object causes the object to be converted to a block (at method invocation time), to serve as a block stand-in, like in '`Symbol` to `Proc` to block' operations.


## &:symbol

When applied to an argument for a method, a lone `&` causes ruby to try to convert that object to a block. If that object is already proc, the conversion happens automatically. If the object is not a proc, then `&` attempts to call the `#to_proc` method on the object first. Used with symbols, e.g., `&:to_s`, Ruby creates a proc that calls the `#to_s` method on a passed object, and then converts that proc to a block. This is the "symbol to proc" operation (though perhaps it should be called "symbol to block").

If we want to invoke a method on each element in a collection, we can use the shortcut:

`collection_object.method(&:symbol_name_for_method_to_be_invoked_on_each_element)`
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
