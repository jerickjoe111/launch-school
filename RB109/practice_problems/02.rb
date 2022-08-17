# # Write a method that takes one argument: an array of integers.
# # The method should return the minimum sum of 5 consecutive
# # numbers in the array. If the array contains fewer than 5
# # elements, the method should return nil.

# # Examples:

# # p minimum_sum([1, 2, 3, 4]) == nil
# # p minimum_sum([1, 2, 3, 4, 5, 6]) == 15
# # p minimum_sum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) == 16
# # p minimum_sum([-1, -5, -3, 0, -1, 2, -4]) == -10

# input: an array of integers

# output: an integer (minimum sum of five consecutive integers in the array)

# >>>> Caveats

# consecutive in the array! (can't sort them)

# >>>> Ds, strategies, methods

# < ? 

# loop ?

# >>>> Algorithm

# 1. return nil if the size of the array is < five 

# 2. init. minimum_sum to the sum of first five elements in the array
#   2b. return minumum_sum if the size of the array is exactly five 

# 3. set a counter to 0

# 4. for every integer in input array from counter index position to size of the array - 5
#     - if sum of all elements from integer at counter index position to counter + 4 index pos.
#       is smaller than minimum_sum:
#           - reset minimum_sum
  
# 5. return minimum_sum

# >>>> Code

def minimum_sum(input_array)
  array_size = input_array.size

  return nil if array_size < 5

  minimum_sum = input_array[0..4].sum
  return mininum_sum if array_size == 5

  counter = 0
  loop do
    sum = input_array[counter..counter + 4].sum
    minimum_sum = sum if sum < minimum_sum

    counter += 1
    break if counter > array_size - 5
  end

  minimum_sum
end
