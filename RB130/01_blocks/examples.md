## Concept examples


### Closures, scope and binding

```ruby
def will_return_proc
  var_a = 1
  var_b = 2

  Proc.new do
    puts "I come from a different scope: "
    puts var_a
    puts var_b
  end
end

my_proc = will_return_proc

my_proc.call
# => "I come from a different scope: "
# => 1
# => 2
```

The `Proc` returned from the method has created a closure around `var_a` and `var_b`, part of the binding at the time of the closure's creation; when we call it outside the method definition, from a different scope, we see that the `Proc` still has access to them, apparently breaking the rules for local variables: this is one of the most important things about closures.

```ruby
def count_letters
  counter = -1
  letters = [*('A'..'Z')]

  Proc.new do
    counter += 1
    puts letters[counter]
  end
end

my_proc = count_letters
my_proc.call # => 'A'
my_proc.call # => 'B'

my_proc2 = count_letters
my_proc2.call # => 'A'
```

Here we see that `my_proc` and `my_proc2` can have different outputs: each one retains unique copies of the variables `counter` and `letters` they drag for their corresponding closure creation.

```ruby
  def say_name(proc)
    proc.call
  end

  name = 'Luke'
  a_proc = Proc.new { puts "My name is #{name}" }

  name = 'Lucas'

  say_name(a_proc)
  # => My name is Lucas
```

Here we see that that the closure formed by the `Proc` keeps track of the variables's new value, even if we reassigned it after the closure's creation.

## Writing methods that take blocks

```ruby
def my_each(array)
  last_index = array.size - 1
  counter = 0
  while counter <= last_index
    yield array[counter]
    counter += 1
  end
  array
end
```
This method doesn't use the return value from `yield`. It just passes each element of the collection object `array` to the block, and ignores the return value from the block.

```ruby
def my_map(input_array)
  output_array = []
  my_each(input_array) { |element| output_array << yield(element) }
  output_array
end
```
This is an example that uses the return value from the block via `yield` to populate a new array.


## Why use blocks in our own methods:

The wo main use cases for using blocks in your own methods are:

1. To defer some implementation code to method invocation decision.

   Blocks allow the method user to fine tune the behavior of a method at invocation time, extending its capabilities without altering the method implementation. This gives the method great flexibility, as we can adapt its generic behavior with a code block appropiate to each situation. (Here lies the power of methods like `each`, `map`, etc.)

```ruby
def compare(string)
  before = string
  after = yield string
      
   puts "Comparing the argument before and after being process by the block: "
   puts "Before: #{before}"
   puts "After: #{after}"
end
      
compare('aloha', &:capitalize)
```

2. Methods that need to perform some 'before' and 'after' operations (_sandwich code_)

   We can implement methods designed to perform a task between two other operations. We can implement the 'before' and 'after' operations, and let the method user to decide what task should be performed between them via a block: that task will be the execution of the code block we provided at invocation time.

```ruby
File.open('some_file.txt') do |file|
  # This method will open the file, pass it to the block as argument,
  # execute the code inside the block, and then
  # close the file for us, instead of having to close it explicitly.
end
```

## Explicit block parameters

```ruby
def a_method(&block)
  block.call # The block is now a Proc object that can be called and passed around
end

var_a = "Hello I am var_a"

p a_method { puts var_a }
```

In this case, the execution starts on line 104, after we've initialized the local variable `var_a` to a string object on line 102. We invoke the `a_method`, passing a block implicitly; however, thanks to the leading `&` on the `block` method parameter, we are indicating ruby to convert the passed in block to a `Proc` object, and assigning the local variable `block` to this object. This way, we can handle, use, pass around and return this `proc` as any other object.
When the block was passed to `a_method_` a closure was created, dragging around with it a copy of the variable `var_a`, part of the binding at that point of the program. When, inside the method definition, we invoke `call` on the `Proc` `block` (we don't need the leading `&` anymore as it is already converted to a `proc`), the code associated with this `Proc` is executed, proving that, from another different scope we still can execute the code properly, as the `var_a` variable was retained by the closure, and we still can access it from within the method definition.

As `nil` is the return value from `call` inside the method (the call to `puts` being the last evaluated expression in the code block that was executed),  `nil`  becomes the `a_method` return value.


## Blocks and methods can return closures too

```ruby
def a_method
  puts "This will return a proc object from the block"
  proc_from_block = yield('passed to yield')
  proc_from_block
end

a_proc = a_method { |string| Proc.new { puts string } }

a_proc.call
# => 'passed to yield'
```

The execution starts on line 108: `a_method` is called implicitly on `self` (`main`), passing a block implicitly to it, and then execution jumps into the method definition (lines 102-106); first, the method `puts` is called passing a string as argument that gets printed on the screen; then the line 104 is executed: `yield`, invoked with a string argument, yields control to the block on line 108, in which the parameter `string` will be assigned to the string passed from `yield` (`'passed to yield'`). 

Inside the block, a `Proc` object is instantiated, creating a closure that retains a copy of the block local variable `string`, part of the binding at that point, and saving the block passed as argument to `Proc#new` as the code associated to that `Proc` object. Aftter the code inside the block on line 108 is executed, control returns to the method definition, where the `Proc` object is returned from `yield` (as the block's return value), and stored in the local variable `proc_from_block`. On the next line 105, this variable, as the last expression in the definition, will become the method's return value: back on the line 108, the `Proc` object returned from `a_method` is stored in the `a_proc` local variable. To execute the `Proc` object code, we will have to invoke `call` on this variable. If we do, we will see that its closure retained the block local variable `string`, and that we can access the value of that variable 'outside' the method definition, apparently violating the local variables scope rules. This is one of the main advantages of using closures.

"Where closures really shine, though, is when a method or block returns a closure. We can't return blocks, but we can return Proc objects."

```ruby
def will_return_proc
  var_a = 'A from within the method'
  var_b = 'B from within the method'

  Proc.new do
    puts "This proc's closure takes the binding with it: "
    puts var_a
    puts var_b
  end
end

a_proc = will_return_proc 
# Each proc creates its own closure, its own set of independent copies from the binding at the
# moment of its creation, then the `Proc` class is instantiated.
 
a_proc.call
# => "This proc's closure takes the binding with it: "
# => 'A from within the method'
# => 'B from within the method'

begin
  puts var_a
rescue NameError
  puts "var_a is not in scope! a_proc took it with it when its closure was created inside the method"
end
```


## Method that uses a proc

```ruby
def will_call_proc(proc_object)
  puts "I am calling the proc #{proc_object} from within the method!"
  proc_object.call
end

var_a = 'A'
var_b = 'B'

proc_object = Proc.new do
  puts var_a
  puts var_b
end

will_call_proc(proc_object)
```
The `Proc` object still has access to `var_a` and `var_b` within the method definition scope because it dragged them around with it when the closure was created: they were part of the binding at the time of its creation.


## Arguments passed to blocks from methods

```ruby
def a_method(argument)
  yield argument
end

# Cases:

# Blocks (and `Proc`s) have lenient arity:
# Passing exactly the number of arguments that the block expects as block parameters:

a_method(1) { |i| puts i }
# => 1
```
Nothing extraordinary, the block parameter is assigned to the argument passed in from `yield`

```ruby
# Passing less arguments than block parameters
def a_method(argument)
  yield argument
end

a_method(1) { |i, j| puts i; puts j }
# => 1
# =>   (actually a `nil`)
```
The block parameters that don't get assigned to arguments refer to `nil`

```ruby
# Passing more arguments than block parameters
def another_method(arg1, arg2)
  yield arg1, arg2
end

another_method(1, 2) { |i| puts i }
# => 1
```
The second argument is ignored by the block.

```ruby
# Passing 0 arguments to a block that defines parameters
def another_method
  yield
end

another_method { |i, j| puts i; puts j }
# =>   (actually a `nil`)
# =>   (actually a `nil`)
```
No arguments are passed, and the block parameters refer to `nil`

```ruby
# Passing arguments to a block without parameters
def another_method
  yield 1, 2
end

another_method { puts "I am a block" }
# =? "I am a block"
```
The block ignores the arguments passed from `yield`

```ruby
# Passing the wrong number of arguments to a method:
def a_method(arg1, arg2)
end

a_method(1)
```
This code will raise an exception, as we can't provide less arguments that parameters defined for a method. (Example of strict arity)

This demonstrates that blocks and `Proc` objects have _lenient arity_, and that methods (and `lambda`s), on the other hand, have _strict arity_.


## Return values from blocks

```ruby
def multiply(multiplier)
  returned_from_block = yield(multiplier)
  returned_from_block
end

returned_from_block = multiply(2) { |multiplier| 5 * multiplier }

p returned_from_block
# => 10
```
The block's last evaluated expression becomes its return value, that comes into the method as the `yield` return value; this value can be stored in a variable as any other object.


## Symbol#to_proc

There is a nice shortcut to situations like this:
```ruby
  %w( lucas sorribes ).map(&:capitalize)
  # => ['Lucas', 'Sorribes']
```
The symbol `:capitalize` is interpreted as a 'message' to be sent to (or method to be called on) each of the elements in the array. What is happening here is that, first, Ruby tries to convert the object to a block. In this case, the object is a symbol, so, in order to convert it to a block, first it converts it to a `Proc` object by calling on it the `Symbol#to_proc` method. Then, converts the `Proc` object to a block, a thing that Ruby can do naturally. The `&` operator is a flag that indicates the method to use this as the stand-in code block that would've been passed in: this operation is equivalent to this:
```ruby
  %( lucas sorribes ).map { |name| name.capitalize }
  # => ['Lucas', 'Sorribes']
```