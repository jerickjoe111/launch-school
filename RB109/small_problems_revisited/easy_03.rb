# 01 

# Write a program that solicits 6 numbers from the user, 
# then prints a message that describes whether or not the 
# 6th number appears amongst the first 5 numbers.

def searching
  array = []
  5.times do |i|
    puts "Enter the ##{i + 1} number:"
    array << gets.chomp.to_i
  end
  
  puts "Enter the last number:"
  number = gets.chomp.to_i

  if array.include?(number)
    puts "The number #{number} appears in #{array}."
  else
    puts "The number #{number} does not appear in #{array}."
  end
end

# 02

# Write a program that prompts the user for two positive integers, 
# and then prints the results of the following operations on those two numbers: 
# addition, subtraction, product, quotient, remainder, and power. 
# Do not worry about validating the input.

def arithmetic
  puts "==> Enter a number:"
  integer_a = gets.to_i
  
  puts "==> Enter another number:"
  integer_b = gets.to_i

  puts "==> #{integer_a} + #{integer_b} = #{integer_a + integer_b}"
  puts "==> #{integer_a} - #{integer_b} = #{integer_a - integer_b}"
  puts "==> #{integer_a} * #{integer_b} = #{integer_a * integer_b}"
  puts "==> #{integer_a} / #{integer_b} = #{integer_a / integer_b.to_f}"
  puts "==> #{integer_a} % #{integer_b} = #{integer_a % integer_b}"
  puts "==> #{integer_a} ** #{integer_b} = #{integer_a ** integer_b}"
end

# 03

# Write a program that will ask a user for an input of a word or multiple words 
# and give back the number of characters. Spaces should not be counted as a character.

def counting
  puts "Enter a string:"
  string = gets.chomp.strip

  size = string.delete(' ').size
  puts "There are #{size} characters in \"#{string}\""
end

# 04

# Create a method that takes two arguments, multiplies them together, and returns the result.

def multiply(int_a, int_b)
  int_a * int_b
end

# 05

# Using the multiply method from the "Multiplying Two Numbers" problem, write a 
# method that computes the square of its argument (the square is the result of multiplying a number by itself).

def square(int, power)
  multiply(int, int)
end

def power_to_the_nth(int, power)
  return 1 if power == 0
  orig = int
  
  (power - 1).times do
    int = multiply(int, orig)
  end

  int
end

# 06

# In this exercise, you will write a function named xor that takes two arguments, 
# and returns true if exactly one of its arguments is truthy, false otherwise. 
# Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

def xor?(a, b)
  (a && !b) || (!a && b)
end

# 07 

# Write a method that returns an Array that contains every other element of an Array that is passed 
# in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, 
# and so on elements of the argument Array.

def oddities(input_array)
  output_array = []

  input_array.each_with_index { |element, index| output_array << element if index.even? }

  output_array
end

def evenities(input_array)
  output_array = []

  input_array.each_with_index { |element, index| output_array << element if index.odd? }

  output_array
end

def oddities_2(input_array)
  input_array.select.with_index { |_, index| index.even? }
end

# 08

# Write a method that returns true if the string passed as an argument is a palindrome, 
# false otherwise. A palindrome reads the same forward and backward. For this exercise, 
# case matters as does punctuation and spaces.

def palindrome?(string)
  string == string.reverse
end

# 09

# Write another method that returns true if the string passed as an argument is a palindrome, 
# false otherwise. This time, however, your method should be case-insensitive, and it should ignore 
# all non-alphanumeric characters. If you wish, you may simplify things by calling the palindrome? 
# method you wrote in the previous exercise.

def real_palindrome?(string)
  palindrome?(string.downcase.delete("^A-Za-z"))
end

# 10

# Write a method that returns true if its integer argument is palindromic, false otherwise. 
# A palindromic number reads the same forwards and backwards.

def palindromic_number?(integer)
  palindrome?(integer.to_s)
end
