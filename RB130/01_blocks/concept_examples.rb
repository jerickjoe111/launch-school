## Blocks

# 0. Use cases for blocks in your own methods:

    # a. Add some extra flexibility to generic methods designed to be used with a block:
      # (select, map, each...) the classic iterators.

      def compare(string)
        before = string
        after = yield string
      
        puts "Comparing the argument before and after being process by the block: "
        puts "Before: #{before}"
        puts "After: #{after}"
      end
      
      compare('aloha', &:capitalize)

    # b. To write a kind of 'sandwich' method in which a before and after actions take place,
      # but allowing the method user to choose via a block what to perform in between those actions:
      # the classic example is the `File::open` method:

      File.open('some_file.txt') do |file|
        # This method will open the file, pass it to the block as argument,
        # execute the code inside the block, and then
        # close the file for us, instead of having to close it explicitly.
      end


# 1. Closures, binding, and scope

# 2. How blocks work, and when we want to use them

# 3. Blocks and variable scope

# Blocks have access to local variables that precede them because they are part of the binding when the
# closure is created; the closure drags the artifacts in scope at the time of its creation

# 4. Write methods that use blocks and procs

# Method that use a block:


def my_each(array)
  last_index = array.size - 1
  counter = 0
  while counter <= last_index
    yield array[counter]
    counter += 1
  end
  array
end

# Method that uses a proc

def will_use_proc(proc_object)
  puts "I am calling the proc #{proc_object} from within the method!"
  proc_object.call
end

var_a = 'A'
var_b = 'B'

proc_object = Proc.new do
  puts var_a
  puts var_b
end

will_use_proc(proc_object)


# 5. Understand that methods and blocks can return chunks of code (closures)

# "Where closures really shine, though, 
# is when a method or block returns a closure. 
# We can't return blocks, but we can return Proc objects."

def will_return_proc
  var_a = 'A from within the method'
  var_b = 'B from within the method'

  Proc.new do
    puts "This proc's closure takes its binding with it: "
    puts var_a
    puts var_b
  end
end

a_proc = will_return_proc 
# Each proc creates its own closure, its own set of independent copies from the binding at the
# moment of its creation, then the `Proc` class is instantiated.
 
a = a_proc.call
# `call`, like `yield`, returns the last evaluated expression's return value from the executed code

begin
  puts var_a
rescue NameError
  puts "var_a is not in scope! a_proc took it with it when its closure was created inside the method"
end


# 6. Methods with an explicit block parameter

# This method takes an explicit block as a parameter, which will be converted to a Proc object
# in order to be assigned to a variable and used within the method definition. 

def a_method(&an_explicit_block) # At the method definition level the & converts a block into a proc
  puts "I am calling the explicit block (now a Proc) from within the method:"
  an_explicit_block.call
end

var_a = 'A'

a_method { puts var_a }

# This method will pass around a block in the form of a Proc that can be called

def another_method(&a_block)
  a_block # Now a Proc object
end

var_b = 'B'
a_proc = another_method { puts var_b }

a_method(&a_proc) # At the method invocation level the & operator converts a proc into a block
# Remember this method takes an explicit block, not an argument inside the argument list

# This is why it's so useful to be able to pass closures around: 
# Closures are important because they preserve the partial running 
# state of a program. For example, a variable that goes out of scope when a method 
# returns may have something interesting to say later on. 
# And with a closure, you can preserve that variable so it can 
# continue to provide information of calculation results.

# 7. Arguments and return values with blocks

def a_method(argument)
  yield argument
end
# Cases:

# Passing exactly the number of arguments that the block expects as block parameters:

a_method(1) { |i| puts i }
# Nothing extraordinary, the block parameter is assigned to the argument passed in from `yield`

# Passing less arguments than block parameters

a_method(1) { |i, j| puts i; puts j }
# The block parameters that don't get assigned to arguments refer to `nil`

# Passing more arguments than block parameters
def another_method(arg1, arg2)
  yield arg1, arg2
end

another_method(1, 2) { |i| puts i }
# The second argument is ignored by the block.

# Passing 0 arguments to a block that defines parameters
def another_method
  yield
end

another_method { |i, j| puts i; puts j }
# No arguments are passed, and the block parameters refer to `nil`

# Passing arguments to a block without parameters
def another_method
  yield 1, 2
end

another_method { puts "a block" }
# The block ignores the arguments passed from `yield`

# This demonstrates that blocks (and `Proc` objects have LENIENT ARITY)

# Methods and lambdas, on the other hand, have STRICT ARITY)


# 8. When can you pass a block to a method



# 9. &:symbol

[1, 2, 3].map(&:to_s)
# This method is equivalent to this:

[1, 2, 3].map { |n| n.to_s }

# When we use this syntax, what we are doing is basically passing a block into a method, but with a
# nice shortcut. The & operator at the method invocation level indicates the method that we will pass
# a block; so, in order to do that, Ruby checks if we are passing a Proc object, so it can convert it
# naturally into a block; if it's not a Proc object, Ruby first converts it into a Proc by calling 
# the `Symbol#to_proc` method on it, and then converts the Proc into a block, and then is passed 
# to the method.

# This shortcut works when we use symbols of methods' names that can be called on the type of objects that
# will be yielded from the method. This way, the method will be called on each element passed to the block.

# Unfortunately, this shortcut does not work with methods that have to take arguments. We can't use syntax
# like this:

['1', '2', '3'].map(&:to_i(2))



# 10. Arity of blocks and methods