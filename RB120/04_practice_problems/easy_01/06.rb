# Exercise 06

# What could we add to the class below to access the instance variable @volume?

class Cube
  attr_accessor :volume # We automatically add a getter and a setter method this way

  def initialize(volume)
    @volume = volume
  end
end

