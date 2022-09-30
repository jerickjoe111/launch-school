# Exercise 05

class Cat
  attr_reader :name

  def self.total
    @cats_created ||= 0
  end

  def self.total=(cats)
    @cats_created = cats
  end

  def initialize
    self.class.total += 1
  end
end


kitty1 = Cat.new
kitty2 = Cat.new

p Cat.total