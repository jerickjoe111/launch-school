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

# No `combination` method:
def closest_numbers_nocomb(input_array)
  output_array = [input_array[0], input_array[1]]
  smallest_difference = output_array.max - output_array.min

  array_size = input_array.size

  counter_a = 0
  loop do

    counter_b = 0
    loop do
      unless counter_a == counter_b
        current_pair = [input_array[counter_a], input_array[counter_b]]
        difference = current_pair.max - current_pair.min

        if difference < smallest_difference
          output_array = current_pair 
          smallest_difference = difference
        end
      end

      counter_b += 1
      break if counter_b == array_size
    end
  
    counter_a += 1
    break if counter_a > array_size - 2
  end

  output_array
end