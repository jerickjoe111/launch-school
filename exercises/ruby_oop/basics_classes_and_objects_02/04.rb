# Exercise 04

class Cat
  attr_reader :name

  def self.generic_greeting
    puts "Hello! I am the #{self} class!"
  end

  def initialize(name)
    @name = name
  end

  def personal_greeting
    puts "Hello! I am the instance #{name}!"
  end
end

kitty = Cat.new('Sophie')

Cat.generic_greeting
kitty.personal_greeting