# Write a method that takes an array of integers and returns the
# two numbers that are closest together in value.

# Examples:

# p closest_numbers([5, 25, 15, 11, 20]) == [15, 11]
# p closest_numbers([19, 25, 32, 4, 27, 16]) == [25, 27]
# p closest_numbers([12, 7, 17]) == [12, 7]

# # The tests above should print "true".

# input: an array of integers

# output: an array of two integers (the closest together in value)

# >>>> Caveats

# keep original order

# calculate the smallest difference between two integers from the array

# they don't have to be consecutive

# do i have to sort the integers in each pair to calculate the smallest difference?

# >>>> Algorithm (combinations approach)

# 1. find all possible pair combinations with integers from input Array
#     - store every possible pair in an array called possible combinations

# 2. find pair in possible combinations array with smallest difference

# >>>> Code:

def closest_numbers(input_array)
  possible_combinations = input_array.combination(2).to_a
  
  possible_combinations.min_by do |combination|
    combination.max - combination.min
  end
end
