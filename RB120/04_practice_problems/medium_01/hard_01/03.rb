# Exercise 03

# The designers of the vehicle management system now want to make an adjustment 
# for how the range of vehicles is calculated. For the seaborne vehicles, due 
# to prevailing ocean currents, they want to add an additional 10km of range even 
# if the vehicle is out of fuel.

# Alter the code related to vehicles so that the range for autos and motorcycles 
# is still calculated as before, but for catamarans and motorboats, the range method
# will return an additional 10km.

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

  def range
    super + 10
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