# Exercise 05

class Person
  attr_reader :first_name, :last_name

  def initialize(first_name, last_name)
    @first_name = first_name.capitalize
    @last_name = last_name.capitalize
  end

  def first_name=(name)
    @first_name = name.capitalize
  end

  def last_name=(name)
    @last_name = name.capitalize
  end

  def to_s
    "#{first_name} #{last_name}"
  end
end

person = Person.new('john', 'doe')
puts person

person.first_name = 'jane'
person.last_name = 'smith'
puts person