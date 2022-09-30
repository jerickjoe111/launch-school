# 1. Given the usage of Person class, code the class definition
# 2. Modify the class definition to include the given methods
# 3. Create a smart #name= method that takes either a first or full name
#   - Should set first_name and last_name appropriately
# 4. Create some more person objects, compare their names for equality
# 5. What does the given code print?

class Person
  attr_accessor :first_name, :last_name

  def initialize(full_name)
    full_name = full_name.split
    @first_name = full_name.first
    @last_name = full_name.size > 1 ? full_name.last : ''
  end

  def name
    (first_name + ' ' + last_name).strip
  end

  def name=(name)
    name = name.split
    self.first_name = name.first

    self.last_name = name.size > 1 ? name.last : ''
  end

  def to_s
    name
  end
end

bob = Person.new('Robert')
puts bob.name                  # => 'Robert'
puts bob.first_name            # => 'Robert'
puts bob.last_name             # => ''
bob.last_name = 'Smith'
puts bob.name                  # => 'Robert Smith'

bob.name = "John Adams"
puts bob.first_name            # => 'John'
puts bob.last_name             # => 'Adams'

bob = Person.new('Robert Smith')
rob = Person.new('Robert Smith')

puts bob.name == rob.name      # -> true
