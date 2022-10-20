## 1

Instance methods are defined within a class to be available to every instance of that class, and have access to the instance variables; methods that involve them can have different output based on the particular state of the object, but methods that don’t involve instance variables will have the same output across all the instance of the same class. 

Class methods are methods that we call directly on the class object itself, not on any of its instances. Defined with a `self.*` inside the class definition, we used them to provide functionality that belongs to the class 
object, not to its instances.

## 2

In Ruby, every object has its own state, and we can keep track of that state thanks of the instance variables. Each instance variable can be assigned to any object, not only integers or strings, but entire collections or data structures. Objects that are stored as the object state, its instance variables assigned to them, are called collaborator objects, as they 'collaborate' with the classes they work in conjunction, representing connections between various actors in the program. 
Although technically every object associated to a particular object’s instance variable is a collaborator object, usually they are custom objects we have defined in the program, not the built-in types. This allows us to modularize and coordinate better the ensemble of objects, and achieve new levels of abstraction in the language. 

```ruby
class Board
end

class Player
end

class ChessEngine
  def initialize
    @board = Board.new
    @player_1 = Player.new
    @player_2 = Player.new
  end
end
```

## 3

In Ruby, many method calls are designed to look like the use of operators, making this language more appealing and easier to read, but often more difficult to understand what is happening under the hood. One advantage of this is that we can redefine and override this fake operator methods to implement our own desired behaviors to them; however, it’s important to follow the conventions established within the Ruby standard library and tradition.

For example, we could create the classic redefinition for the `==` method in order to compare two custom object:
```ruby
class Piece
  attr_reader :type, :color

  def initialize(type, color)
    @type = type
    @color = color	
  end
  
  def ==(other_piece)
  	color == other_piece.color
  end
end
```

## 4

At every point when the program is running, there’s one and only one default or current object, accessible by the keyword `self`. Whatever object gets to be `self`, depends on the context in which we reference it. It can change with the scope, but not always, as they are different concepts:

- At the top level, outside any code block, refers to `main`, an instance of the `Object` class.
- At the class definition, refers to the class object that is being defined.
- At the module definition, refers to the module object that is being defined.
- Inside an instance method definition inside a class, refers to the instance of that class on which we will call this method.
- Inside an instance method definition inside a module, it will refer to the instance of the class that includes the module.

Local scope changes often, as so does the identity of `self`. Sometimes, but only sometimes, they vary together. When we start a definition block —method, class, module—, we start a new local scope, and we also create a block of code with a particular `self`. But local scope and `self` don’t operate entirely in parallel: they are not the same thing.

```ruby
self # `main`, the top level object, an instance of `Object`

module KingMovement
  self # the module object `KingMovement`

  def self.expose
    self # the module object `KingMovement`
  end

  def move!
    self # An instance of the class that includes `KingMovement` on which we will call this method
  end
end

class Piece
  include KingMovement
  
  self # The class object `Piece`

  def self.show
    self # The class object `Piece`
  end

  def check
    self # An instance of the class `Piece` on wich we will call this method
  end
end
```

## 5

The instance variables are defined with an `@` at the beginning of their name; they keep track of the particular object state, and are scoped at the object level. This means that, although other instances of the same class can’t access them, these variables are available to any method of their instance owner, even if they were initialized in other instance method or weren’t passed in as arguments. 

In this case, the `bob` object, an instance of `Person` class, and `joe`, also an instance of the same class, both share a set of behaviors and the name of their instance variable, but each one has their own state, represented by their own copy of the instance variable `@name`, initialized on instantiation by the assignment to the `initialize` local variable `n`, assigned to each literal string passed as argument in lines 11 and 12 to the `new` class method on `Person`. the method `inspect` confirms this, as we get each instance's class name, a location in memory, and state, represented by the instance variable `@name`.

## 6

Although other instances of the same class can’t access instance variables, these kind of variables are available to any method of their instance owner, even if they were initialized in other instance method or weren’t passed in as arguments. Besides that, contrary to local variables, if we try to retrieve the value of an uninitialized instance variable, an exception won’t be raised, but they will act as referencing a value of `nil`.

However, this means that, first, in order to initialize them, we have to call the method in which this happens —usually the `initialize` instance method, called on instantiation—; and, second, that instance variables and their values are not inherited: we have to initialize them first at the instance level. So, in order to initialize instance variables, the object needs access to the methods that do so, thanks to class inheritance or interface inheritance. If the object can't access the method, or if the method is overridden in the subclass, the instance variable will never be initialized, and will act as referring to the `nil` value.

```ruby
module KingFuncionality
  def is_king
    @is_king = true
  end
  
  def is_king?
  	@is_king
  end
end

class Piece
  attr_reader :color
  
  def initialize(color)
    @color = color
  end
end

class King < Piece
  include KingFuncionality
end

king = King.new(:black)

king.is_king? # == nil

king.is_king

king.is_king # == true

king.color # == :black
```

## 7

The set of a class public methods comprises the class public interface—how other classes and objects interact with this class and its instances. And encapsulation refers to the compartmentalization of object behavior; hiding and exposing functionality, differentiating between what will be the public interface of an object and its internal implementation. 

It is a good practice to keep as fewer public methods as possible, only those necessary properties and methods to the well-functioning of the program; this allows makes it less prone to errors and allows us to think in a higher level of abstraction.


## 8

```
#<GoodDog:0x00005620365b5b60>
```

In the first case, we are calling a string version (the return value of the `to_s` method of the instance `sparsky`) comprised of the instance class name and a location in memory. We could override the `to_s` method by providing our own version, defining an instance method inside the `GoodDog` class called `to_s`. Then this method would be called when calling the method `puts` (put string), thus having our own desired string representation of the object:

```ruby
class GoodDog
# other code omitted
  def to_s
    "I am a dog called #{name} and I am #{age} years old"
  end
end
```

In the second case what we are seeing on our screens is the result of calling the method `inspect` on the instance `sparsky`, method that will display, not just the class name and the location in memory, but also the object state, represented by its own set of instance variables, `@name` and `@age`, with their corresponding values.

## 9

Accidental method overriding means that we define a method with the same name as other method inherited from a superclass or a module included by a superclass. For example, if we override the `Object#send` in a subclass, as any object inherits from `Object`, we would be losing that method functionality, replacing with that of our custom newly defined `send`. This can have a far-reaching effect in our code, so it is very recommended to familiarize ourselves with the most important methods in `Object` so we don't accidentally override them.

## 10

Ruby provides a way to restrict or allow access to certain methods defined in a class thanks to the access modifiers `public`, `private`, and `protected`, implementing what is called the method access control:

- `public` is the option by default (all methods are public by default). This means that any object throughout the program can call these methods as long as they know the method name. The set of a class public methods comprises the class interface—how other classes and objects interact with this class and its instances.
- To make methods 'private' we have to explicitly declare so, defining them after the `private` keyword. Private means that the methods are only accessible from other methods within the class, and not from outside the class definition by other objects. (private setter methods can and have to be called with the explicit `self`).
- Methods defined after `protected` cannot be invoked outside the class, being only accessible to other instances of the same class that defines them, or descendant classes of that class. They are usually used to compare objects of a particular class.

Subclasses inherit the method access rules of their superclasses, unless they set up new rules, which will take precedence.

```ruby
class PizzaPlace

  def order_pizza
    make_dough
    ask_other_restaurants(restaurant) if not_enough_ingredients?
    prepare_ingredients
    check_oven_temperature
    wait_minutes
    output_made_pizza
  end

  protected

  def ask_other_restaurants(other)
  end

  private
  
  def prepare_ingredients
  end

  def not_enough_ingredients?
  end

  def make_dough
  end

  def prepare_ingredients
  end

  def check_oven_temperature
  end

  def wait_minutes
  end

  def output_made_pizza
  end
end

restaurant = PizzaPlace.new

restaurant.order_pizza 
# this is the only public method we need; the rest can and should be private. 
# The protected method is needed to compare with other objects of this same class.
```

## 11

Classes are the outlines or blueprints for objects—instances of classes—, that define their attributes and behaviors. We can define our own custom classes with the syntax `class…end`, and we name them using constants in CamelCase. Inside it, we can define class variables, class methods, instance variables, instance methods, class instance variables, and constants; we also can mix in modules—extra collections of functionality—, and control the access to methods. 

Like classes, modules are collections of methods and constants, but unlike them, modules don’t have instances. Instead, we specify that we want to add the functionality of a particular module to that of a class, by using `include` keyword in the class. A module included in this manner is sometimes referred to as a 'mix-in', and the result is that instances of the class have access to the instance methods defined in the module. A class can only inherits from a single superclass, but it can include as many modules as needed.

Classes are usually named with nouns, but modules are with adjectives to reinforce the notion that the module defines a behavior.

## 12

Polymorphism refers to the ability of different objects of different types, related or not by inheritance, to respond to a common interface, which means methods with the same name. This can be achieved with or without inheritance:
- Polymorphism with inheritance, for example, when a subclass inherits a more generic method from a superclass, or when a subclass overrides a method inherited from the superclass, to implement a more specific behavior. Also, when two different classes mix in the same module, thus making them to respond to the same functionality added by the module.
- Polymorphism without inheritance or duck-typing: when different unrelated types of objects respond to the same method name and number of arguments—a common interface—, but the implementation of each of these methods is different, with no relation of inheritance among them, but designed to work polymorphically.

```ruby
# with inheritance:
module BasicMovement
end

module SlideMovement
end

class Piece
  include BasicMovement
end

class Rook < Piece
  include SlideMovement
end

class Bishop < Piece
  include SlideMovement
end

rook = Rook.new
bishop = Bishop.new
# the rook and the bishop will have access to the same functionality provided by: the `BasicMovement` included in the common superclass `Piece`,
# and the inclusion of the same module `SlideMovement` in the two different classes `Rook` and `Bishop`, thus making them to respond to the 
# same functionality added by the module.

# without inheritance (duck-typing):
class Board
  def display
    # displays an ASCII representation of the board
  end
end

class Piece
  def display
    # displays a representation of the piece
  end
end

class Score
  def display
    # displays a numerical representation of the score of the two players
  end
end

# during the game, we could have a loop like:
board = Board.new
piece_01 = Piece.new
score = Score.new
[board, piece_01, score].each(&:display)
# that would continuously display each game element, each with their own independent implementations of a method `display`
```


## 13

Encapsulation refers to the compartmentalization of object behavior; hiding and exposing functionality, differentiating between what will be the public interface of an object and its internal implementation. It is at essence a form of data protection, defining boundaries within a given application in order to protect unwanted access or modification of the data. 

In Ruby, this is achieved with the method access control, differentiating between the 'public', 'private' and 'protected' categories. It is a good practice to keep as fewer public methods as possible, only those necessary properties and methods to the well-functioning of the program; this allows makes it less prone to errors and allows us to think in a higher level of abstraction.

```ruby
class Person
  attr_reader :name

  def initialize(name, id_number)
  	@name = name
  	@id_number = id_number
  end
  
  def id_number
  	"***" + id_number.to_s[-4..-1]
  end
  
  private
  
  attr_writer :id_number
end
```

## 14

The output is:
```
"Mike strolls forward"
"Kitty saunters forward"
```

This code, first, demonstrates polymorphism, as we provide two different classes with a common functionality thanks to the inclusion of the module `Walkable` in them; second, also demonstrates that is usually a good idea to abstract is-a kind of relationships and natural hierarchies as classes in our program, and behavior and functionalities as modules that would be included in the classes. In fact, classes are usually named with nouns, but modules are with adjectives to reinforce the notion that the module defines a behavior. This help us write more concise and efficient code (we don't have to repeat the same functionality in different classes, and we avoid writing artificial and clunky superclasses).

## 15

Object Oriented Programming is a paradigm that organizes a program in classes and instances of that classes. Each instance inherits behaviors and encapsulates a state, and the programmer orchestrates the ensemble of actors in the program, objects, to interact with each other in order to achieve the desired results.

OOP allows us to modularize parts of the program, encapsulating behaviors, to avoid the ripple effect of pure functional approaches. Provides a higher level of abstraction and a new way of thinking about design, and to create more complex and sophisticated programs. Besides that, this makes for a  more easily maintainable code, and a chance to apply different philosophies, values and priorities.

## 16

Classes are the outlines or blueprints for objects—instances of classes—, that define their attributes and behaviors, and are destined most often (but not always), to be instantiated. 

In Ruby, we can say that everything that has a value can be considered an object, and every object is an instance of a class. Each instance of the same class has a set of shared behaviors, defined by the class, but also has its own stash of data and information called the object state. We define instance variables in order to keep track of the state, and we define instance methods to access and/or modify the object state, meaning, access to its instance variables. 

Objects can be created from classes calling the `new` class constructor method on the class, a process called instantiation, which will trigger an instance constructor method `initialize`, called upon the newly created instance.

## 17

Is usually a good idea to abstract is-a kind of relationships and natural hierarchies as classes in our program, and behavior and functionalities as modules that would be included in the classes. In fact, classes are usually named with nouns, but modules are with adjectives to reinforce the notion that the module defines a behavior. This help us write more concise and efficient code (we don't have to repeat the same functionality in different classes, and we avoid writing artificial and clunky superclasses).

## 18

In this case, if we compare each of those three instance witch each other using the `==` operator-like method, we will never get a `true` value. This is the case because, ultimately, every object in Ruby inherits from the big class in the sky `BasicObjects`. The original version of the `==` method is defined in precisely this class; with the same implementation by default as `equal?`, it returns `true` if both operands are in fact the same object. As this method is not overridden, the only `==`method the instances of `Cat` have access to is the default version from `BasicObject`

However, this method is normally overridden in the basic built-in classes like `String`, `Integer` or `Array`, to check for their own version of equivalence. Also, we will need to redefine it inside the `Cat` custom class if we need to compare some values in two custom objects.

## 19

We can easily call the `ancestors` class method on the `SomethingElse` class object to see an array with the complete hierarchy tree:
```
[SomethingElse, AnotherThing, Thing, Object, Kernel, BasicObject]
```

`SomethingElse` is a subclass of `AnotherThing`, and `AnotherThing` is the superclass of `SomethingElse`. Following this same pattern, `Thing` is the superclass of `AnotherThing`, `Object` is the superclass of `Thing`, `Kernel` is a module that `Object` mixes in, and `BasicObject` is the topmost class, from which every other object descend.

## 20

```ruby
module Flight
  def fly; end
end

module Aquatic
  def swim; end
end

module Migratory
  def migrate; end
end

class Animal
end

class Bird < Animal
end

class Penguin < Bird
  include Aquatic
  include Migratory
end

pingu = Penguin.new
pingu.fly
```

We can understand a method call on an object as a process in which a 'message' is sent to an object via the dot operator. When an object receives the message, the intended result is the execution of a method with the same name as the message. In order to resolve the message into a method, an object will look for the method in a certain order, called the method lookup path:

1.	Its class
2.	Modules included in its class, in reverse order of inclusion
3.	Its class’s superclass
4.	Modules included in its superclass.

So, in this case, we can say that the object will look for a `fly` method, in this order:

the `Penguin` class, the `Migratory` and then the `Aquatic` modules, then the `Bird` class, the `Animal` class, the`Object` class, the `Kernel` module and `BasicObject` class. As there is no method with that name, the program will raise an exception:
```
test.rb:25:in `<main>': undefined method `fly' for #<Penguin:0x000055b9ed1ed3c0> (NoMethodError)
```
The module `Flight` is not included by any of the classes that belong to `Penguin` hierarchy tree. We can confirm this by calling the `ancestors` class methods on the `Penguin` class object:
```
[Penguin, Migratory, Aquatic, Bird, Animal, Object, Kernel, BasicObject]
```
