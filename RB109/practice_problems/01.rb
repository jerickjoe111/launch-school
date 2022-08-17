# Given an array of numbers, for each number find out how many numbers
# in the array are smaller than it. When counting numbers, only count
# unique values. That is, if a given number occurs multiple times in
# the array, it should only be counted once.

# >>>> Examples:

# p smaller_numbers_than_current([8,1,2,2,3]) == [3, 0, 1, 1, 2]
# p smaller_numbers_than_current([1,4,6,8,13,2,4,5,4]) == [0, 2, 4, 5, 6, 1, 2, 3, 2]
# p smaller_numbers_than_current([7,7,7,7]) == [0,0,0,0]
# p smaller_numbers_than_current([6,5,4,8]) == [2, 1, 0, 3]
# p smaller_numbers_than_current([1]) == [0]

# input: array of integers

# output: new array of integers (one for each corresponding int. in input array)

# >>>> Caveats:
# only count unique numbers

# >>>> DS and strategies:

# init. output_array

# count ?

# < ?

# each * 2

# include?

# >>> Algorithm

# 1. init output array

# 2. for each integer `a` in input array of integers:
#     - init counter to 0
#     - for each integer `b` between 0 and current integer `a` - 1
#         if integer `b` is included in input array:
#             - add one to counter
#     - store counter into output array

# 3. return output array

# >>> Code

def smaller_numbers_than_current(input_array)
  output_array = []

  input_array.each do |integer_a|
    counter = 0

    (0..integer_a - 1).each do |integer_b| 
      counter += 1 if input_array.include?(integer_b)
    end
    
    output_array << counter
  end

  output_array
end
