# The Object Model

# Exercise 1
# How do we create an object in Ruby? Give an example of the creation of an object.

# We create an object by a process called 'instantiation': we call the method `new` on a class object, which will
# return a reference to the newly created instance of the class.

class Star
  attr_reader :name, :distance_to_earth

  def initialize(name, distance_to_earth)
    @name = name
    @distance_to_earth = distance_to_earth
  end
end

sun = Star.new("Sun", 149_860_000)
  
# Exercise 2
# What is a module? What is its purpose? How do we use them with our classes? Create a module for the 
# class created in exercise 1 and include it properly.

# Modules are collections of behaviors that can be included or 'mixed in' in classes, so every instance
# of that class, and subclasses that inherit from it, can share those same behaviors (methods defined in 
# the module). Modules add extra functionality to objects, another way to implement polymorphism.


module Astronomical
  def shine
    puts "#{name} is shining!"
  end

  def explode
    puts "#{name} is exploding!"
  end
end

class Star
  attr_reader :name, :distance_to_earth

  include Astronomical

  def initialize(name, distance_to_earth)
    @name = name
    @distance_to_earth = distance_to_earth
  end
end


# Classes and Objects I

# Exercise 1
# Create a class called MyCar. When you initialize a new instance or object of the class, 
# allow the user to define some instance variables that tell us the year, color, and model of the car. 
# Create an instance variable that is set to 0 during instantiation of the object to track the current 
# speed of the car as well. Create instance methods that allow the car to speed up, brake, 
# and shut the car off.

class MyCar

  def initialize(year, color, model)
    @year = year
    @color = color
    @model = model
    @speed = 0
  end

  def speed_up
    puts "The car is speeding!"
    self.speed += 10
  end

  def brake
    puts "The car is going slower!"
    self.speed -= 10
  end

  def shut_down
    puts "The car shuts down!"
    self.speed = 0
  end
end

# Exercise 2
# Add an accessor method to your MyCar class to change and view the color of your car. 
# Then add an accessor method that allows you to view, but not modify, the year of your car.

class MyCar
  attr_accessor :color, :speed
  attr_reader :year, :model

  def initialize(year, color, model)
    @year = year
    @color = color
    @model = model
    @speed = 0
  end

  def speed_up
    puts "The car is speeding!"
    self.speed += 10
  end

  def brake
    puts "The car is going slower!"
    self.speed -= 10
  end

  def shut_down
    puts "The car shuts down!"
    self.speed = 0
  end
end

# Exercise 3
# You want to create a nice interface that allows you to accurately describe the action you 
# want your program to perform. Create a method called `spray_paint` that can be called on 
# an object and will modify the color of the car.

class MyCar
  attr_accessor :color, :speed
  attr_reader :year, :model

  def initialize(year, color, model)
    @year = year
    @color = color
    @model = model
    @speed = 0
  end

  def speed_up
    puts "The car is speeding!"
    self.speed += 10
  end

  def brake
    puts "The car is going slower!"
    self.speed -= 10
  end

  def shut_down
    puts "The car shuts down!"
    self.speed = 0
  end

  def spray_paint(color)
    self.color = color
  end
end


# Classes and Objects II

# Exercise 1
# Add a class method to your MyCar class that calculates the mileage of any car

class MyCar
  CURRENT_YEAR = 2022

  attr_accessor :color, :speed
  attr_reader :year, :model

  def self.mileage(car)
    (CURRENT_YEAR - car.year) * 5000
  end

  def initialize(year, color, model)
    @year = year
    @color = color
    @model = model.upcase
    @speed = 0
  end

  def speed_up
    puts "The car is speeding!"
    self.speed += 10
  end

  def brake
    puts "The car is going slower!"
    self.speed -= 10
  end

  def shut_down
    puts "The car shuts down!"
    self.speed = 0
  end

  def spray_paint(color)
    self.color = color
  end
end

Exercise 2
Override the `to_s` method to create a user friendly print out of your object

class MyCar
  # Rest of the code

  def to_s
    "This car is model #{model}, from the year #{year}, color #{color}"
  end
end

# Exercise 3
# When running the following code...

class Person
  attr_reader :name
  def initialize(name)
    @name = name
  end
end

bob = Person.new("Steve")
bob.name = "Bob"

# We get the following error...

# test.rb:9:in `<main>': undefined method `name=' for 
#   #<Person:0x007fef41838a28 @name="Steve"> (NoMethodError)

# Why do we get this error and how do we fix it?

# We've only implemented a 'getter' to read the instance variable `name` via `attr_reader`;
# we have to use an `attr_accessor` to have a 'setter' too, or to manually write a 'setter' instance
# method.

class Person
  attr_accessor :name

  def initialize(name)
    @name = name
  end
end

bob = Person.new("Steve")
bob.name = "Bob"


# Inheritance

# Exercise 1
# Create a superclass called Vehicle for your MyCar class to inherit from, and move the behavior that 
# isn't specific to the MyCar class to the superclass.

# Create a constant in your MyCar class that stores information about the vehicle that makes it 
# different from other types of Vehicles.

# Then create a new class called MyTruck that inherits from your superclass that also has a constant 
# defined that separates it from the MyCar class in some way.

class Vehicle
  CURRENT_YEAR = 2022

  attr_accessor :color, :speed
  attr_reader :year, :model, :cargo

  def self.mileage(car)
    (CURRENT_YEAR - car.year) * 5000
  end

  def initialize(model, year, color)
    @year = year.to_i
    @color = color.capitalize
    @model = model.upcase
    @speed = 0
    @cargo = []
  end

  def speed_up
    puts "The car is speeding!"
    self.speed += 10
  end

  def brake
    puts "The car is going slower!"
    self.speed -= 10
  end

  def shut_down
    puts "The car shuts down!"
    self.speed = 0
  end

  def spray_paint(color)
    self.color = color
  end

  def load(item)
    cargo.size < self.class::CARGO_MAX_SIZE ? 
      cargo << item : 
      puts("Can't load anything more!")
  end
end

class MyCar < Vehicle
  CARGO_MAX_SIZE = 4
  FUEL_CONSUMPTION = 9
end

class MyTruck < Vehicle
  CARGO_MAX_SIZE = 10
  FUEL_CONSUMPTION = 22
end

# Exercise 2
# Add a class variable to your superclass that can keep track of the number of 
# objects created that inherit from the superclass. 
# Create a method to print out the value of this class variable as well.

class Vehicle
  CURRENT_YEAR = 2022

  @@vehicles = 0

  attr_accessor :color, :speed
  attr_reader :year, :model, :cargo

  def self.mileage(car)
    (CURRENT_YEAR - car.year) * 5000
  end

  def self.vehicles
    @@vehicles
  end

  def initialize(model, year, color)
    @year = year.to_i
    @color = color.capitalize
    @model = model.upcase
    @speed = 0
    @cargo = []

    @@vehicles += 1
  end

  def speed_up
    puts "The car is speeding!"
    self.speed += 10
  end

  def brake
    puts "The car is going slower!"
    self.speed -= 10
  end

  def shut_down
    puts "The car shuts down!"
    self.speed = 0
  end

  def spray_paint(color)
    self.color = color
  end

  def load(item)
    cargo.size < self.class::CARGO_MAX_SIZE ? 
      cargo << item : 
      puts("Can't load anything more!")
  end
end

class MyCar < Vehicle
  CARGO_MAX_SIZE = 4
  FUEL_CONSUMPTION = 9
end

class MyTruck < Vehicle
  CARGO_MAX_SIZE = 10
  FUEL_CONSUMPTION = 22
end

car = MyCar.new('a', 2000, 'black')
truck = MyTruck.new('CDC250', 2013, 'red')

# Exercise 3
# Create a module that you can mix in to ONE of your subclasses that describes a 
# behavior unique to that subclass.

module CityParkable
  def park
    self.shut_down
    puts "This car can be parked anywhere in the city!"
  end
end

class MyCar
  CARGO_MAX_SIZE = 4
  FUEL_CONSUMPTION = 9

  include CitiyParkable
end

# Exercise 4
# Print to the screen your method lookup for the classes you have created.

puts Vehicle.ancestors
puts MyCar.ancestors
puts MyTruck.ancestors

# Exercise 6
# Write a method called age that calls a private method to calculate the age of the vehicle. 
# Make sure the private method is not available from outside of the class. You'll need to use Ruby's 
# built-in Time class to help.

require 'Time'

class Vehicle
  CURRENT_YEAR = Time.now.year

  # Other code

  def age
    calculate_age
  end

  private 

  def calculate_age
    CURRENT_YEAR - year
  end
end

# Exercise 7
# Create a class 'Student' with attributes name and grade. Do NOT make the grade getter public, 
# so joe.grade will raise an error. Create a better_grade_than? method, that you can call like so...

class Student
  attr_writer :grade

  def better_grade_than?(student)
    puts(
      if grade > student.grade then "Well done!"
      else "Sorry!"
      end
    )
  end

  protected

  attr_reader :grade
end

joe = Student.new
bob = Student.new

joe.grade = 10 
bob.grade = 8

# Exercise 8
# Given the following code...

bob = Person.new
bob.hi

# And the corresponding error message...

# NoMethodError: private method `hi' called for #<Person:0x007ff61dbb79f0>
# from (irb):8
# from /usr/local/rvm/rubies/ruby-2.0.0-rc2/bin/irb:16:in `<main>'

# What is the problem and how would you go about fixing it?

# `hi` is a private method: we have to make it public by removing the `private` keyword or moving
# the method's definition above it.

