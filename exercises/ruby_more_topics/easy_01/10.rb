# Exercise 10

# Write a method that takes an array as an argument, 
# and a block that returns true or false depending on 
# the value of the array element passed to it. 
# The method should return a count of the number of times 
# the block returns true.

# You may not use Array#count or Enumerable#count in your solution.

def count(input_array)
  counter = 0
  i = 0
  input_array.each do |element|
    counter += 1 if yield(element)
  end

  counter
end

# Further exploration:

def count_alt(input_array)
  counter = 0
  i = 0
  (input_array.size).times do |index|
    counter += 1 if yield(input_array[index])
  end

  counter
end

p count_alt([1,2,3,4,5]) { |value| value.odd? } == 3
p count_alt([1,2,3,4,5]) { |value| value % 3 == 1 } == 2
p count_alt([1,2,3,4,5]) { |value| true } == 5
p count_alt([1,2,3,4,5]) { |value| false } == 0
p count_alt([]) { |value| value.even? } == 0
p count_alt(%w(Four score and seven)) { |value| value.size == 5 } == 2

