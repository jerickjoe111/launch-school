# Exercise 06

class Flight
  attr_reader :flight_number

  def initialize(database=true, flight_number)
    @database_handle = database ? Database.init : nil
    @flight_number = flight_number
  end

  def database_handle
    @database_handle ? @database_handle : "No database available"
  end
end