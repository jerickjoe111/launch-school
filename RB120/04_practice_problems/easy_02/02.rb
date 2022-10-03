# Exercise 02

class Oracle
  def predict_the_future
    "You will " + choices.sample
  end

  def choices
    ["eat a nice lunch", "take a nap soon", "stay at work late"]
  end
end

class RoadTrip < Oracle
  def choices
    ["visit Vegas", "fly to Fiji", "romp in Rome"]
  end
end

# What is the result of the following:

trip = RoadTrip.new
p trip.predict_the_future

# We will se returned a string object composed by the concatenation of the string object
# `"You will"` and a random string object from the array on line 15, because the `choices`
# method is overriden by the method definition on lines 14-16.