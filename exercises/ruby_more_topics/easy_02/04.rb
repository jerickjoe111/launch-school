# Exercise 04

# Write a method called count that behaves similarly 
# for an arbitrarily long list of arguments. 
# It should take 0 or more arguments and a block, 
# and then return the total number of arguments for 
# which the block returns true.

def count(*arguments)
  counter = 0
  arguments.each { |i| counter += 1 if yield(i) }
  counter
end

p count(1, 3, 6) { |value| value.odd? } == 2
p count(1, 3, 6) { |value| value.even? } == 1
p count(1, 3, 6) { |value| value > 6 } == 0
p count(1, 3, 6) { |value| true } == 3
p count() { |value| true } == 0
p count(1, 3, 6) { |value| value - 6 } == 3