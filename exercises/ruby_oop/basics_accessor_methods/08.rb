# Exercise 08

class Person
  def initialize(name)
    @name = name
  end
  
  def name
    @name.dup
  end
end

person1 = Person.new('James')
person1.name.reverse!
puts person1.name