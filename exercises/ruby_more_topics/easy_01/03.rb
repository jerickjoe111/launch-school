# Exercise 03

# Write a method that takes a sorted array of integers as an argument, 
# and returns an array that includes all of the missing integers (in order) 
# between the first and last elements of the argument.

# get every integer from the first to the last in input array

# delete integer in output array if it is in input array



def missing(input_array)
  output_array = [*(input_array.first..input_array.last)]

  output_array.each_with_object([]) do |integer, output_array|
    output_array << integer unless input_array.include?(integer)
  end
end

p missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
p missing([1, 2, 3, 4]) == []
p missing([1, 5]) == [2, 3, 4]
p missing([6]) == []