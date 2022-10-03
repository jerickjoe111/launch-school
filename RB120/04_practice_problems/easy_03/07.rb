# Exercise 07

class Light
  attr_accessor :brightness, :color

  def initialize(brightness, color)
    @brightness = brightness
    @color = color
  end

  def self.information
    return "I want to turn on the light with a brightness level of super high and a color of green"
  end
end

# What is used in this class but doesn't add any value?

# The return keyword on line 18 and the `attr_accessors` on line 4 (we never need them)