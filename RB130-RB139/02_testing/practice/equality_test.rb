require 'minitest/autorun'

class Car
  attr_accessor :wheels, :name

  def initialize
    @wheels = 4
  end

  def ==(other_car)
    other_car.is_a?(Car) && name == other_car.name
  end
end

class CarTest < Minitest::Test
  def test_value_equality
    car1 = Car.new
    car2 = Car.new

    car1.name = 'Kim'
    car2.name = 'Kim'

    assert_equal(car1, car2)
    assert_same(car1, car2)
  end
end