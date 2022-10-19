## Practice test 1

#### Based on https://medium.com/@marwan.zaarab/rb129-interview-assessment-prep-e2f120330240

___

# 1 
## What will the following code output? Why?

```ruby
class Student
  attr_reader :id

  def initialize(name)
    @name = name
    @id
  end

  def id=(value)
    self.id = value
  end
end

tom = Student.new("Tom")
tom.id = 45
```

On line 2 we defined an instance getter method to retrieve the `@id` instance variable, not initialized yet, with the `attr_reader` method. However, the method defined on lines 9-11 falls into a recursive trap, as it calls the method that is being defined, meaning that tries to call a setter method `id=` not yet defined outside of it, passing `value` as an argument, and the program output is an exception (the stack is too deep). We could fix it removing this definition entirely, and change `attr_reader` for `attr_accessor` on line 2.

# 2
## Define a class of your choice with the following:

- Constructor method that initializes 2 instance variables.
- Instance method that outputs an interpolated string of those variables.
- Getter methods for both (you can use the shorthand notation if you want).
- Prevent instances from accessing these methods outside of the class.
- Finally, explain what concept(s) you’ve just demonstrated with your code.

```ruby
class Animal
  private

  attr_reader :common_name, :scientific_name

  def initialize(common_name, scientific_name)
    @common_name = common_name
    @scientific_name = scientific_name
  end

  def name
    puts "I am a #{scientific_name}, commonly known as #{common_name}"
  end
end
```

This code demonstrates the concept of class, instance variables initialization via `initialiaze` instance constructor methods, automatic getter/setter instance methods definition, and method access control. 

An object is an instance of a class, with a shared set of behaviors defined by the class, but each one with its own storage of data, called the object state, of which we keep track with instance variables. On each object instantiation, each instance will have its own state, represented by the instance variables, assigning them to the objects inside the `initialize` constructor, possibly strings, passed as arguments to the `new` class method called on the class object `Animal`. 

We define instance methods to retrieve the value of this variables (getter), or to modify it (setter). However, we can set rules of access to these methods, in this case, we set them as 'private', after the keyword `private`, which means that the methods are only accessible from other methods within the class, and not from outside the class definition by other objects. (private setter methods can and have to be called with the explicit `self`).

# 3
## What concept does the following code aim to demonstrate?

```ruby
module Greet
  def greet(message)
    puts message
  end
end

class Teacher
  include Greet
end

class Student
  include Greet
end

tom = Teacher.new
rob = Student.new

tom.greet "Bonjour!"
rob.greet "Hello!"
```

This is an example of polymorphism via interface inheritance: the ability of different objects of different types, related or not by inheritance, to respond to a common interface, which means methods with the same name and number of arguments. This can be achieved with or without inheritance. In this case, this is achieved by mixing the same module in two different classes , thus making instance of these both classes be able to respond to the same functionality added by this module (the module will be part of the method lookup path).

# 4
## What will the last line of this code return?

```ruby
class Student
  def initialize(id, name)
    @id = id
    @name = name
  end
  
  def ==(other)
    self.id == other.id
  end

  private
  
  attr_reader :id, :name
end

rob = Student.new(123, "Rob")
tom = Student.new(456, "Tom")

rob == tom
```

This code will output an exception, as we are trying to call private getter method `id` inside the `==` method definition body. Marking a method private means making it unavailable to other instances; we should change `private` for `protected`, to allow other instances of the same class access this method (will return the desired boolean `false`)

# 5
## What will the last 2 lines of code return?

```ruby
class Foo
  def self.method_a
    "Justice" + all
  end

  def self.method_b(other)
    "Justice" + other.exclamate
  end

  private

  def self.all
    " for all"
  end

  def self.exclamate
    all + "!!!"
  end
end

foo = Foo.new
puts Foo.method_a
puts Foo.method_b(Foo)
```
Line 22 will output the string object `"Justice of all", and line 23 will output `"Justice for all!!!`. 
- The first line displays on the screen the return value of the class method `Foo::method_a`, composed by the string "Justice" concatenated (via a call to `+`) with the return value from the private class method `all`, the string " for all".
- The second line displays on the screen the return value of the class method 'Foo::method_b', passing the class name 'Foo' as argument. This `method_b` will return the concatenation of the string "Justice" with the return value of the private class method `Foo::exclamate` on the class name `Foo` to which the method parameter `other` was assigned to, which itself will return the concatenation of the string returned by the method `all` plus the literal string "!!!"

# 6
## What will the following code execute? What will be the output?

```ruby
class Person
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def greet
     "Hello! they call me #{name}"
  end
end

class Puppet < Person
  def initialize(name)
    super
  end

  def greet(message)
    puts super + message
  end
end

puppet = Puppet.new("Cookie Monster")
puppet.greet(" and I love cookies!")
```

On line 24 we create a new instance `puppet` of the `Puppet` class via the `new` class method, passing the string "Cookie Monster" as argument. Upon instantiation the instance constructor method `initialize` in the class `Puppet`, will be triggered, receiving as argument that string passed to `new`. The parameter `name` will be assigned to it, and it will be forwarded, via the `super` keyword, to the next `initialize` instance method up in the look up path, the `initialize` defined in the `Person` class. This method will assign the instance variable `@name` to `name` received from the previous `initialize`, via `super`.
On line 25 we call the `greet` instance method on `puppet`, passing a string as an argument. The method defined on lines 19-21 will assign that string to the local variable message, and then will output to the screen the result of concatenating the return value from `super` plus `message`. However, as we are forwarding via `super` the arguments received to a method `greet`, on lines 9-11, that does not accept arguments, this code will output an exception. This can be fixed by adding `()` to the end of the `super` on line 20.

# 7
## What concept does this code demonstrate? What will be the output?

```ruby
class Bird
  def fly
    p "#{self.class} is flying!"
  end
end

class Pigeon < Bird; end
class Duck < Bird; end

birds = [Bird.new, Pigeon.new, Duck.new].each(&:fly)
```

This code is an example of polymorphism, which refers to the ability of different objects of different types, related or not by inheritance, to respond to a common interface, which means methods with the same name. This can be achieved with or without inheritance. In this case, this is achieved via class inheritance: the two subclasses `Pigeon` and `Duck` inherit the instance generic method `fly` from the superclass `Bird`. The output will be:
```
"Bird is flying!"
"Pigeon is flying!"
"Duck is flying!"
```

as we are calling `fly` on each of the instances of these three classes created inside the literal array on line 10 (each instance is outputting its own class thanks to the `class` method on `self` inside the string interpolation of line 3)

# 8
## What does the `self` keyword refer to in the `good` method?

```ruby
class Dog
  attr_accessor :name

  def good
    self.name + " is a good dog"
  end
end

bandit = Dog.new
bandit.name = "Bandit"
p bandit.good
```

Inside an instance method `good` definition inside a class, `self` refers to the instance of that class on which we will call `good`, in this case, `bandit`, the instance of the `Dog` class on which we call `good`. It's important to remember that it is not necessary to add the explicit `self` on getter methods like `name`.

# 9
## What will the last three lines of code print to the console? After `song.artist` is called, what would be returned if we inspect the `song` object?

```ruby
class Song
  attr_reader :title, :artist

  def initialize(title)
    @title = title
    @artist
  end

  def artist=(name)
    @artist = name.upcase
  end
end

p song = Song.new("Superstition")
p song.artist = "Stevie Wonder"
p song.artist
```
We will see:
```
#<Song:0x000056122e121ee8 @title="Superstition">
"Stevie Wonder"
"STEVIE WONDER"
```
The first line corresponds to the newly created instance `song` of the `Song` class, in which we see the class name, a memory location, and the instance variables, in this case `@title`, with its value. 
The second line is the string argument passed to the setter method `artist=` on line 15, as setter methods always return the argument that was passed to them.
The third line is the return value from the `artist` getter method, the upper case version of the string passed to the corresponding setter method, to which the instance variable `@artist` was assigned to.

# 10
## What will the last 2 lines output in this case?

```ruby
class Song
  attr_reader :title, :artist

  def initialize(title)
    @title = title
  end

  def artist=(name)
    @artist = name
    name.upcase!
  end
end

song = Song.new("Superstition")
p song.artist = "Stevie Wonder"
p song.artist
```

In this case, the output is: 
```
"STEVIE WONDER"
"STEVIE WONDER"
```

This happens because although setter methods always return the argument that was passed to them, in this case the string object passed was permanently mutated by the `upcase!` method; and in the second line, since the instance variable `@artist` is pointing to the same object, it returns it as it is after calling on it the destructive `upcase!`.

# 11
## What would `cat.name` return after the last line of code is executed?

```ruby

class Cat
  attr_accessor :name

  def set_name
    name = "Cheetos"
  end
end

cat = Cat.new
cat.set_name
```
We will see `nil` as the output, because we have not initialized the instance variable `@name`. The line 5 corresponds to a local variable inside the method definition: we have to use the explicit `self` to call setter methods to avoid this ambiguity.

# 12
## What will the last two lines of code output?

```ruby
module Walk
  STR = "Walking"
end

module Run
  STR = "Running"
end

module Jump
  STR = "Jumping"
end

class Bunny
  include Jump
  include Walk
  include Run
end

class Bugs < Bunny; end

p Bugs.ancestors
p Bugs::STR
```

The output we get is:
```
[Bugs, Bunny, Run, Walk, Jump, Object, Kernel, BasicObject]
"Running"
```

The first line corresponds to the return value of the `ancestors` class method called on the `Bugs` class object: an array with the names of all the classes and modules, in order, of the class `Bugs` inheritance tree (modules in reverse order of inclusion). This is path that will be used to traverse the tree looking for the resolution of methods, also known as the method lookup path.
The second line corresponds to the value of the constant `STR` defined on line 6, inside the module `Run` definition. This is the case because this constant is the first STR that is found in the constant lookup path from the `Bugs` class, as the modules are traversed looking for the constant in reverse order of inclusion. `Run` being the last module included, it is the first to be looked in, where a constant `STR` is defined.

# 13 
## What will be returned by the `value1` and `value2` method calls?

```ruby
VAL = 'Global'

module Foo
  VAL = 'Local'

  class Bar
    def value1
      VAL
    end
  end
end

class Foo::Bar
  def value2
    VAL
  end
end

p Foo::Bar.new.value1
p Foo::Bar.new.value2
```

We will see the output:
```
"Local"
"Global"
```

The first case corresponds to the return value from the instance method `value1`, which is the value of the constant `VAL` defined on line 4. Constants have lexical scope, which means that when Ruby tries to resolve them, it searches 'lexically': it searches the surrounding structure—lexical scope— of the constant reference. If it fails, Ruby then traverses up the inheritance hierarchy of that surrounding structure. In this case the module that contains the class `Bar` definition, `Foo`.
The second line corresponds to the return value of the method `value2`; this time, as there is no `VAL` constant definied inside the lexical scope of the constant, nor in the inheritance hierarchy, the look up path reaches the top or `main` scope, where it finds a constant `VAL` defined on line 1.
