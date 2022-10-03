# Exercise 07

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

# Explain what the @@cats_count variable does and how it works. 
# What code would you need to write to test your theory?

# It is a class variable. Its only copy is also shared by the instances from the
# `Cat` class that contains it. In this case, it is initialized on compiling
# time (when Ruby reads the class definition) and we add 1 to its value whenever
# we create an instance of the `Cat` class. This way we can keep track of how many `Cat`
# instance we have created:

cat_01 = Cat.new("x")
cat_02 = Cat.new("x")

Cat.cats_count == 2
