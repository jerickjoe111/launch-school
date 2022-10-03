# Exercise 03

# In the last question we had a module called Speed which contained a go_fast method. 
# We included this module in the Car class as shown below.

module Speed
  def go_fast
    puts "I am a #{self.class} and going super fast!"
  end
end

class Car
  include Speed
  def go_slow
    puts "I am safe and driving slow."
  end
end

# When we called the go_fast method from an instance of the Car class (as shown below) 
# you might have noticed that the string printed when we go fast includes the name of the 
# type of vehicle we are using. How is this done?

# We call the `class` method on `self` using string interpolation, which will call `to_s`
# on the resulting expression from the code inside the brackets; at the moment of the 
# `method` invocation, `self` is refering to the object on which we called the `go_fast`,
# an instance of the `Car` class (because we have mixed in the module on the `Car` definition,
# thus making the method `go_fast` accessible to an instance of `Car`). And as we've seen, calling
# `class` on an object returns the class object from it was instantiated.