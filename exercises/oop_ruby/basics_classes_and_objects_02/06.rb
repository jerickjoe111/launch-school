# Exercise 06

class Cat
  COLOR = 'purple'

  attr_accessor :name
  attr_reader :color

  def initialize(name)
    @name = name
    @color = COLOR
  end

  def greet
    puts "Hello! My name is #{name} and I'm a #{color} cat!"
  end
end


kitty = Cat.new('Sophie')
kitty.greet