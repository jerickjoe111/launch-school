# https://launchschool.com/exercises/ce453287

# >>>>>> Problem

# Write a method that computes the difference between the square 
# of the sum of the first n positive integers and the sum of the 
# squares of the first n positive integers.

# input: an integer

# output: an integer

# >>>>>> Caveats



# >>>>>> Examples and test cases

# sum_square_difference(3) == 22
#    # -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
# sum_square_difference(10) == 2640
# sum_square_difference(1) == 0
# sum_square_difference(100) == 25164150

# >>>>>> Data Structures + Methods

# we will use an array with all integes between 1 and input integer


# >>>>>> Algorithm

# 1. init. array with all integes between 1 and input integer

# 2. calculate the sum of all numbers in that array

# 3. calculate the sum of the squares of all numbers in the array

# 4. return result of the substraction of step 2 and step 3


# >>>>>> Code

def sum_square_difference(integer)
  range = [*(1..integer)]

  (range.sum**2) - (range.map { |n| n**2 }.sum)
end
