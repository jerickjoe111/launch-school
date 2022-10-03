# Exercise 09

class Cat
  @@cats_count = 0

  def initialize(type)
    @type = type
    @age  = 0
    @@cats_count += 1
  end

  def self.cats_count
    @@cats_count
  end
end

# In the name of the `cats_count` method we have used `self`. What does `self` refer to in this context?

# Here, `cats_count` is a class method, not an instance method: it is called not on instances of 
# the class `Cat`, but on the class object itself; so, here `self` refers to the `Cat` class object. 
# We could even have defined a `Cat.cats_count` with the same effect.
