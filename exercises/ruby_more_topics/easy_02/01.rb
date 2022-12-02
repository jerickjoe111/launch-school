# Exercise 01

# Write a method that does the same thing as Range#step, 
# but does not operate on a range. 
# Instead, your method should take 3 arguments: the starting value, 
# the ending value, and the step value to be applied to each iteration. 
# Your method should also take a block to which it will yield (or call) 
# successive iteration values.

def step(starting_val, ending_val, step_val)
  counter = starting_val

  while counter <= ending_val
    yield counter
    counter += step_val
  end

  counter
end

step(1, 10, 3) { |value| puts "value = #{value}" }