# Exercise 07

class Car
  attr_reader :mileage

  def initialize
    @mileage = 0
  end

  def mileage=(miles)
    @mileage = miles.to_i
  end

  def increment_mileage(miles)
    total = mileage + miles
    self.mileage = total
  end

  def print_mileage
    puts mileage
  end
end

car = Car.new
car.mileage = 5000
car.increment_mileage(678)

car.print_mileage  # should print 5678