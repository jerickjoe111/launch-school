# Exercise 03

# When objects are created they are a separate realization of a particular class.

# Given the class below, how do we create two different instances of this class with separate names and ages?

class AngryCat
  def initialize(age, name)
    @age  = age
    @name = name
  end

  def age
    puts @age
  end

  def name
    puts @name
  end

  def hiss
    puts "Hisssss!!!"
  end
end

angrycat_01 = AngryCat.new(3, "Cat 1")
angrycat_02 = AngryCat.new(5, "Cat 2")