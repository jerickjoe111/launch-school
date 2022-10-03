# Exercise 05

class Television
  def self.manufacturer
    # method logic
  end

  def model
    # method logic
  end
end

# What would happen if I called the methods like shown below?

tv = Television.new
tv.manufacturer         # This call raises an exception. There is no instance method `manufacturer`
tv.model

Television.manufacturer  
Television.model        # This call raises an exception. There is no class method `model`