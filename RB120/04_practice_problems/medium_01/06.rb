# Exercise 06

# If we have these two methods in the Computer class:

class Computer
  attr_accessor :template

  def create_template
    @template = "template 14231"
  end

  def show_template
    template
  end
end

# and

class Computer
  attr_accessor :template

  def create_template
    self.template = "template 14231"
  end

  def show_template
    self.template
  end
end

# What is the difference in the way the code works?

# In the first example we set the `@template` instance variable directly,
# despite we already have a setter method courtesy of the `attr_accessor`, 
# in the `create_template` instance method.

# In the second example we make use of both getter and setter methods for 
# `@template`, but we don't need to write the explicit `self` for the 
# getter method called on line 27.

