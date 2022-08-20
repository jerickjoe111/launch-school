# 01

# 02

# Write a method that takes an array of strings, and returns an array 
# of the same string values, except with the vowels (a, e, i, o, u) removed.

def remove_vowels(array)
  array.map { |string| string.delete("aeiouAEIOU") }
end

# 03

# The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) 
# such that the first 2 numbers are 1 by definition, and each subsequent number 
# is the sum of the two previous numbers. This series appears throughout the natural world.

# Computationally, the Fibonacci series is a very simple series, but the results 
# grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 
# 354,224,848,179,261,915,075 -- that's enormous, especially considering that it 
# takes 6 iterations before it generates the first 2 digit number.

# Write a method that calculates and returns the index of the first Fibonacci 
# number that has the number of digits specified as an argument. 
# (The first Fibonacci number has index 1.)

def find_fibonacci_index_by_length(n)
end

# 04

# Write a method that takes an Array as an argument, 
# and reverses its elements in place; that is, mutate the 
# Array passed into this method. The return value should be the same Array object.

# You may not use Array#reverse or Array#reverse!

def reverse!(array)
  counter_a = 0
  counter_b = -1
  loop do
    break if counter_a == array.size / 2
    array[counter_a], array[counter_b] = array[counter_b], array[counter_a]
    counter_a += 1
    counter_b -= 1
  end

  array
end

# 05

# Write a method that takes an Array, and returns a new 
# Array with the elements of the original list in reverse order. 
# Do not modify the original list.

def reverse(array)
  array = array.dup

  counter_a = 0
  counter_b = -1
  loop do
    break if counter_a == array.size / 2
    array[counter_a], array[counter_b] = array[counter_b], array[counter_a]
    counter_a += 1
    counter_b -= 1
  end

  array
end

# 06

# Write a method that takes two Arrays as arguments, and returns an 
# Array that contains all of the values from the argument Arrays. There 
# should be no duplication of values in the returned Array, even if 
# there are duplicates in the original Arrays.

def merge(array_a, array_b)
  array_a | array_b
end

# 07

# Write a method that takes an Array as an argument, 
# and returns two Arrays (as a pair of nested Arrays) 
# that contain the first half and second half of the original Array, 
# respectively. If the original array contains an odd number of elements, 
# the middle element should be placed in the first half Array.

def halvsies(input_array)
  half_index = (input_array.size / 2.0).ceil - 1

  [input_array[0..half_index], input_array[half_index + 1..-1]]
end

# 08

# Given an unordered array and the information that exactly one value 
# in the array occurs twice (every other value occurs exactly once), 
# how would you determine which value occurs twice? Write a method that 
# will find and return the duplicate value that is known to be in the array.

def find_dup(array)
  array.find { |integer| array.count(integer) == 2 }
end

# 09

# Write a method named include? that takes an Array and 
# a search value as arguments. This method should return 
# true if the search value is in the array, false if it is not. 
# You may not use the Array#include? method in your solution.

def include?(array, number)
  array.each { |element| return true if element == number }
  false
end

# 10

# Write a method that takes a positive integer, n, as an argument, 
# and displays a right triangle whose sides each have n stars. 
# The hypotenuse of the triangle (the diagonal side in the images below) 
# should have one end at the lower-left of the triangle, and the other 
# end at the upper-right.

def triangle(stars, spaces=0)
  return if stars == 0

  triangle(stars - 1, spaces + 1)

  puts "#{' ' * spaces}#{'*' * stars}"
end

