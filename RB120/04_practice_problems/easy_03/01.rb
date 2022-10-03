# Exercise 01

class Greeting
  def greet(message)
    puts message
  end
end

class Hello < Greeting
  def hi
    greet("Hello")
  end
end

class Goodbye < Greeting
  def bye
    greet("Goodbye")
  end
end

# What happens in each of the following cases:

hello = Hello.new
hello.hi

# We create a new instance of the `Hello` class via the `new` method, and then
# we call the method `hi` on that instance. The method `hi`, defined in the `Hello` class
# definition, calls in it body definition the method `greet` on the instance object, passing
# the literal string `"Hello"` as argument. The method `greet`, defined in the `Greeting` class,
# `Hello`'s superclass, defines one parameter, `message`. Thus, the local variable `message` is assigned
# to the string `"Hello"`, and it is printed on the screen, plus a new line character, when passed as an
# argument to the `puts` method in the `greet` body definition.


hello = Hello.new
hello.bye

# It raises an exception because the method `bye` is not found on the the look up path (there is no `bye`
# method defined in any of the classes or modules of the `Hello` class hierarchy tree)


hello = Hello.new
hello.greet

# Ruby raises an exception because we are not providing any argument to the method `greet` (we have to provide
# exactly one argument, in order to the parameter `message` can be assigned to it inside `greet` definition)

hello = Hello.new
hello.greet("Goodbye")

# We call the method `greet` on an instance of the `Hello` class, passing a literal string `"Goodbye"`
# as an argument. The method `greet`, defined in the `Greeting` class, `Hello`'s superclass, 
# defines one parameter, `message`. Thus, the local variable `message` is assigned
# to the string `"Goodbye"`, and it is printed on the screen, plus a new line character, when passed as an
# argument to the `puts` method in the `greet` body definition.

Hello.hi

# An exception is raised because we have not defined any class method `hi` that we can call on the 
# class `Hello` object.