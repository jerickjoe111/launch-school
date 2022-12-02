# Exercise 03

# Write a method called map that behaves similarly for Arrays. 
# It should take an Array as an argument, and a block. 
# It should return a new Array that contains the return 
# values produced by the block for each element of the original Array.

def map(input_array)
  input_array.each_with_object([]) do |element, output_array|
    output_array << yield(element)
  end
end

p map([1, 3, 6]) { |value| value**2 } == [1, 9, 36]
p map([]) { |value| true } == []
p map(['a', 'b', 'c', 'd']) { |value| false } == [false, false, false, false]
p map(['a', 'b', 'c', 'd']) { |value| value.upcase } == ['A', 'B', 'C', 'D']
p map([1, 3, 4]) { |value| (1..value).to_a } == [[1], [1, 2, 3], [1, 2, 3, 4]]