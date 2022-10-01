# Exercise 02

class Pet
  attr_reader :name

  def initialize(name)
    @name = name.to_s
  end

  def to_s
    "My name is #{name.upcase}."
  end
end

