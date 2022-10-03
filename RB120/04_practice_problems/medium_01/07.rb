# Exercise 07

# How could you change the method name below so that the method name is more clear and less repetitive?



class Light
  attr_accessor :brightness, :color

  def initialize(brightness, color)
    @brightness = brightness
    @color = color
  end

  def light_status  # We can change it to simply `status`
    "I have a brightness level of #{brightness} and a color of #{color}"
  end
end