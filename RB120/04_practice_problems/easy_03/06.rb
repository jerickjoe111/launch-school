# Exercise 06

class Cat
  attr_accessor :type, :age

  def initialize(type)
    @type = type
    @age  = 0
  end

  def make_one_year_older
    @age += 1               # We can replace `self.age` with the instance variable `@age`
  end
end

# In the make_one_year_older method we have used self. 
# What is another way we could write this method so we don't have to use the self prefix?

cat_01 = Cat.new('tabby')

