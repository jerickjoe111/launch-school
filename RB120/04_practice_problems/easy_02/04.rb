# Exercise 04

# What could you add to this class to simplify it and remove two methods 
# from the class definition while still maintaining the same functionality?

class BeesWax
  attr_accessor :type # This implements automatically the same funcionality

  def initialize(type)
    @type = type
  end

  # def type
  #   @type
  # end

  # def type=(t)
  #   @type = t
  # end

  def describe_type
    puts "I am a #{type} of Bees Wax" # We also can remove the @ if we already have a method to access the var.
  end
end
