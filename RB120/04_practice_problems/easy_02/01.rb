# Exercise 01

class Oracle
  def predict_the_future
    "You will " + choices.sample
  end

  def choices
    ["eat a nice lunch", "take a nap soon", "stay at work late"]
  end
end

# What is the result of executing the following code:

oracle = Oracle.new
p oracle.predict_the_future

# We will se returned a string object composed by the concatenation of the string object
# `"You will"` and a random string object from the array on line 9.