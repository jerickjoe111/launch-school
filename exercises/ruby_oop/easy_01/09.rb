# Exercise 09

class Pet
  attr_accessor :name
  attr_reader :age, :color

  def initialize(name, age, color)
    @name = name
    @age = age
    @color = color
  end
end

class Cat < Pet
  def to_s
    "My cat #{name} is #{age} years old and has #{color} fur."
  end
end

pudding = Cat.new('Pudding', 7, 'black and white')
butterscotch = Cat.new('Butterscotch', 10, 'tan and white')
puts pudding, butterscotch

# My cat Pudding is 7 years old and has black and white fur.
# My cat Butterscotch is 10 years old and has tan and white fur.