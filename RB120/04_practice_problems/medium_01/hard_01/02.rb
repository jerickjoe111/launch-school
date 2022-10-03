# Exercise 02

# Building on the prior vehicles question, we now must also track a basic motorboat. 
# A motorboat has a single propeller and hull, but otherwise behaves similar to a 
# catamaran. Therefore, creators of Motorboat instances don't need to specify 
# number of hulls or propellers. How would you modify the vehicles code to incorporate 
# a new Motorboat class?

module FuelManagement
  def initialize(km_traveled_per_liter, liters_of_fuel_capacity)
    @fuel_efficiency = km_traveled_per_liter
    @fuel_capacity = liters_of_fuel_capacity
  end

  def range
    @fuel_capacity * @fuel_efficiency
  end
end

class Vehicle
  attr_accessor :speed, :heading

  include FuelManagement
end

class Wheeled < Vehicle

  def initialize(tire_array, km_traveled_per_liter, liters_of_fuel_capacity)
    @tires = tire_array
    super(km_traveled_per_liter, liters_of_fuel_capacity)
  end

  def tire_pressure(tire_index)
    @tires[tire_index]
  end

  def inflate_tire(tire_index, pressure)
    @tires[tire_index] = pressure
  end
end

class Sea < Vehicle
  attr_reader :propeller_count

  def initialize(num_propellers, km_traveled_per_liter, liters_of_fuel_capacity)
    @propeller_count = num_propellers
    super(km_traveled_per_liter, liters_of_fuel_capacity)
  end
end

class Auto < Wheeled
  def initialize
    # 4 tires are various tire pressures
    super([30,30,32,32], 50, 25.0)
  end
end

class Motorcycle < Wheeled
  def initialize
    # 2 tires are various tire pressures
    super([20,20], 80, 8.0)
  end
end

class Catamaran < Sea
  attr_reader :hull_count

  def initialize(num_propellers, num_hulls, km_traveled_per_liter, liters_of_fuel_capacity)
    @hull_count = num_hulls
    super(num_propellers, km_traveled_per_liter, liters_of_fuel_capacity)
  end
end

class Motorboat < Sea
  def initialize(km_traveled_per_liter, liters_of_fuel_capacity)
    super(1, km_traveled_per_liter, liters_of_fuel_capacity)
  end
end

auto = Auto.new
bike = Motorcycle.new

cata = Catamaran.new(2, 3, 250, 92)

boat = Motorboat.new(130, 55)
