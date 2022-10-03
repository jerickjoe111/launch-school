# Exercise 01

# Ben and Alyssa are working on a vehicle management system. 

# So far, they have created classes called Auto and Motorcycle 
# to represent automobiles and motorcycles. After having noticed 
# common information and calculations they were performing for each 
# type of vehicle, they decided to break out the commonality into a 
# separate class called WheeledVehicle. 

# This is what their code looks like so far:

class WheeledVehicle
  attr_accessor :speed, :heading

  def initialize(tire_array, km_traveled_per_liter, liters_of_fuel_capacity)
    @tires = tire_array
    @fuel_efficiency = km_traveled_per_liter
    @fuel_capacity = liters_of_fuel_capacity
  end

  def tire_pressure(tire_index)
    @tires[tire_index]
  end

  def inflate_tire(tire_index, pressure)
    @tires[tire_index] = pressure
  end

  def range
    @fuel_capacity * @fuel_efficiency
  end
end

class Auto < WheeledVehicle
  def initialize
    # 4 tires are various tire pressures
    super([30,30,32,32], 50, 25.0)
  end
end

class Motorcycle < WheeledVehicle
  def initialize
    # 2 tires are various tire pressures
    super([20,20], 80, 8.0)
  end
end

# # Now Alan has asked them to incorporate a new type of vehicle into their system - a Catamaran defined as follows:

class Catamaran
  attr_reader :propeller_count, :hull_count
  attr_accessor :speed, :heading

  def initialize(num_propellers, num_hulls, km_traveled_per_liter, liters_of_fuel_capacity)
    # ... code omitted ...
  end
end

# This new class does not fit well with the object hierarchy defined so far. 
# Catamarans don't have tires. But we still want common code to track fuel efficiency and range. 

# Modify the class definitions and move code into a Module, as necessary, to share code among 
# the Catamaran and the wheeled vehicles.


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

auto = Auto.new
bike = Motorcycle.new

cata = Catamaran.new(2, 3, 250, 92)

