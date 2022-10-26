# You are coding an OO coffee simulator!

# nouns: person, coffe maker, coffee, water, temperature, mug
# verbs: make coffe, heat, add, pour, drink

module Heatable
  def heat
    self.temperature = 100
  end

  def ready?
    temperature <= 85
  end
end

class Person
  attr_reader :name
  attr_accessor :sleepy

  def initialize(name)
    @name = name
    @sleepy = true
  end

  def make_coffe
  end

  def drink_coffee(mug)
    self.sleepy = false if mug.filled_with_great_coffee?
  end
end

class CoffeeMaker
  attr_accessor :ready
  attr_reader :comparment

  def initialize
    @ready = false
    @compartment = []
  end

  def add(coffee, water)
    compartment << coffe << water
  end

  def turn_on
    [coffe, water].each(&:heat)

    self.ready = true
  end

  def pour(mug)
    mug.filled = true if ready
  end
end

class Ingredient
  include Heatable

  attr_accessor :temperature

  def initialize
    @temperature = 20
  end
end

class Coffee < Ingredient
end

class Water < Ingredient
end

class Mug
  attr_accessor :filled

  def initialize
    @filled = false
  end

  def filled_with_great_coffee?
    filled
  end
end

