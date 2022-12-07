## Ingredients of iteration:

When you call a method on an object, control is passed to the body of the method (a different scope): and when the methiod has finished executing, control returns to the point right after the point where the method call took place.

## Iterator:

An iterator is a Ruby method that has an extra ingredient in tis calling syntax: it expects you to provide it with a _code block_. Curly braces or `do`..`end` key words delimit the block.

The code block is part of the method call, that is, part of its syntax. A code block is not an argument. 

## Curly braces and do/end syntax:

The difference between the two ways of delimiting a code block is a difference in precedence.

## Yielding/returning:

Yielding to a block and returning from a method are two different things. A method may yield to its block any number of times, but every method returns exactly one, assuming no fatal errors. It's like a jump in figure skating. You take off, execute some rotations in the air, and land. No matter how many rotations you execute, you only take off once and land once. A method call causes the method to run once and execute once.

Code blocks, loke methods, can take arguments. When a method yields, it can yield one or more values. The block pick ups the argument through its parameters, and the parameters get bound to whatever value gets yielded from the method to the block.

Code blocks always return a value: its last evaluated expression. The return value comes back from the block to the method as the return value from `yield`.

## Blocks and scope

Blocks have direct access to variables that already exist. However, block parameters behave differently from non-parameter variables. If you have a variable of a given name in scope and also use that name as one of your block parameters, then the two variables, the one that exists and the one in the parameter list, are not the same as each other (_shadowing_, as the parameter _shadows_ the outer variable).

Blocks share local scope with the code that preceds them. Blocks can serve as the bodies of anonymous function objects, and those objects preserve the local variables that are in the scope at the time of their creation, even if the function objects get handed around other local scopes.

## Closures

Anonymous methods or functions (a more abstract term) that preserve the local variable and other artifacts bindings that are in effect when the closure is created. 

Ruby implements closures in three ways: blocks, procs and lambdas.

A piece of code that carries its creation context around with it it's called a _closure_. Creating a closure is like packing a suitcase: wherever you open the suitcase, it contains what you put into it when you packed it. When you open a closure (by calling it), it contains what you put into it when it was created. 

Closures are important because they preserve the partial running state of a program. A variable that goes out of scope when a method returns may have something interesting to say later on. And with a closure, you can preserve that variable so it can continue to provide information of calculation results

## Callable objects in Ruby

The idea of a _callable object_ is embodied via objext on which you can call the `call` method with the expectation that some code associated with the objects will be executed.

The main callable objects in Ruby are: `Proc` objects, lambdas and method objects.

`Proc` objects are self-contained code sequences that you can create, store, pass around as method arguments and be called via the `call` method.

Lambdas are similar to `Proc` objects (are also instances of `Proc`), with some specific syntax and behavior (like strict arity and the effect of the keyword `return`).

Method objects represent methods extracted into objects that you can, similarly, store, pass around and execute.

## Procs

Important topics about `Proc` objects (or _procs_):

- Basics of creating and using procs

  - call to `Proc.new` plus a code block: `pr = Proc.new { puts "I'm a proc" }

  - via the `Kernel#proc` method: `pr = proc { puts "I'm also a proc" }

- the relationship between procs and code blocks.

  - every proc requires a block to be created, but not every block serves as a proc objec
      ( `[1, 2, 3].each { |i| puts i }` ) Here the block does not create a proc.

  - A method can capture a block, objectify it into a proc, 
      using the special operator `&` at the left of its parameter at the method definition level.

  - But a proc object can serve as a block at the method invocation level, using a similar syntax
      `&` on the argument passed in to the method.

- Block-proc conversions:

  - The purpose of a code block is to be executed
  - The purpose of a proc object is to provide execution access to a previously defined code block.

  - Capturing a code block as a proc: (method definition level)

    ```ruby
      def capture_block(&block)
        puts 'Got block as prock'
        block.call
      end

      capture_block { puts 'Inside the block' }
    ``` 
    What happens is a kind of implicit call to `Proc.new`, using the same block. The proc thus created is assigned to the parameter `block` to be used inside the method definition.
    There are three events of importance here:

    1. The method `capture_block` is invoked providing a code block.
    2. Along the way, a new `Proc` object is created using that same code block provided to the method.
    3. The variable `block` is assigned to this `Proc` object inside the method body.

    This special syntax is necessary because to a method invocation you can provide an argument list and a code block: without the special operator `&`, a Ruby has no way of knowing that you want to assigning parameters to regular arguments and instead perform a block-to-proc conversion and save the results.

  - Using procs as blocks: (method invocation level) 

    ```ruby
      p = Proc.new { puts "This proc argument will serve as a code block." }

      capture_block(&p)
    ```

    Here you're using the the `Proc` object `p` instead of a block: you send the proc as an argument to the method you're calling. Here, at the method invocation level, we use the `&` operator to indicate that the proc should work as the code block provided to the method invocation. And, because `p` is serving as the code block, we can't send a code block in the same method invocation.
    (Here the `&` operator is a wrapper around the `Proc` object itself: namely, the method `to_proc`. Calling the method `to_proc` on a `Proc` object returns the `Proc` object itself, rather like calling `to_s` on a `String` object) If we wouldn't use the `&`, we wouldn't be differentiating the proc of a regular argument, and we wouldn't be making the proc to serve as the code block to the method invocation.

    At the method invocation, `&` at the left of an argument does two things:
      - it triggers a call to the argument's `to_proc` method,
      - and it tells Ruby that the resulting `Proc` object is serving as a code block stand-in.

  - `Symbol#to_proc`

    This is a nice shortcut to situations like this:

    ```ruby
      %w( lucas sorribes ).map (&:capitalize)
      # => ['Lucas', 'Sorribes']
    ```
    The symbol `:capitalize` is interpreted as a 'message' to be sent to (or method to be called on) each of the elements in the array.
    What is happening here is that, first, Ruby tries to convert the object to a block. In this case, the object is a symbol, so, in order to convert it to a block, first it converts it to a `Proc` object by calling on it the `Symbol#to_proc` method. Then, converts the `Proc` object to a block, a thing that Ruby can do naturally. The `&` operator is a flag that indicates the method to use this as the stand-in code block that would've been passed in; this operation is equivalent to this:
    ```ruby
      %( lucas sorribes ).map { |name| name.capitalize }
      # => ['Lucas', 'Sorribes']
    ```

- the role of procs as closures

  - We've seen that code blocks preserve the variables that were in existence at the time they were created (code blocks also work as closures in Ruby)

  - When you construct the code block for a call to `Proc.new`, the local variables you've created are still in scope (as with any code block). And those variables remain in scope inside the proc, no matter where or when you call it. (call here means to execute the code inside the block associated to the proc object)

- the way procs handle arguments and variable bindings

  - Like any code block, the code block you provide when you create a `Proc` object can take arguments.

  Procs have _lenient arity_ (they don't care whether they get the right number of arguments):

  A one-argument proc like this:
  ```ruby
    pr = Proc.new { |x| p x }
    # => #<Proc:0x000055f75d70f760 (irb):1>
  ```
  Can be called with any number of arguments, including none:

  - If it's called with no arguments, its single parameter gets set to `nil`.

  - If it's called with more than one argument, the single parameter is assigned to the first argument, and the remaining are discarded.

  - You can use sponge (*arg) arguments, though, and alter this behavior.

### Methods as objects

  - We can treat methods as objects (_objectifying_ the method)

  - Capturing `Method` objects:

    - You can get hold of a `Method` object by using the `method` method with the name of the method as an argument in string or symbol form:

    ```ruby
      class Classy
        def talk
          puts "Method-grabbing test: self is #{self}"
        end
      end
      classy_instance = Classy.new

      objectified_method = classy_instance.method(:talk)
    ```
    - The `objectified_method` `Method` object is bound specifically to the instance `classy_instance`, it's not the `talk` method in abstract, or a class method. When you invoke `call` on `objectified_method`, it will call itself on the `classy_instance` object:

    ```ruby
    objectified_method.call
    # => Method-grabbing test: self is #<Classy:0x000055f75d3fa638>
    ```