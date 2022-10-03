# Exercise 02

# If we call Hello.hi we get an error message. How would you fix this?

class Greeting
  def greet(message)
    puts message
  end
end

class Hello < Greeting
  def self.hi            # We can define a class method `hi`
    puts "Hello"
  end

  def hi
    greet("Hello")
  end
end

class Goodbye < Greeting
  def bye
    greet("Goodbye")
  end
end