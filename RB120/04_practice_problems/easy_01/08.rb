# Exercise 08

class Cat
  attr_accessor :type, :age

  def initialize(type)
    @type = type
    @age  = 0
  end

  def make_one_year_older
    self.age += 1
  end
end

# You can see in the `make_one_year_older` method we have used `self`. What does `self` refer to here?

# `self` inside an instance method definition refers to the object on which we called the method containing
# the reference to `self`, in this case, it would be an instance of the class `Cat`.