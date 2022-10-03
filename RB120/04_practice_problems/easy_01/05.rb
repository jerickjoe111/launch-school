# Exercise 05

# Which of these two classes has an instance variable and how do you know?

class Fruit
  def initialize(name)
    name = name
  end
end

class Pizza
  def initialize(name)
    @name = name
  end
end

# The class `Pizza`: we initialize the instance variable `@name` on instantiation,
# inside `initialize` definition, to the local variable `name`, refering to an object
# passed to the `new` method as argument.

