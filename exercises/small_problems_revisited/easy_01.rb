# RB109 Preparation - Small problems - Easy 01

# 01

# Write a method that takes two arguments, a string and a positive integer, 
# and prints the string as many times as the integer indicates.

def repeat(string, n)
  n.times { puts string } 
end

# 02

# Write a method that takes one integer argument, which may be positive, 
# negative, or zero. This method returns true if the number's absolute value is odd. 
# You may assume that the argument is a valid integer value.

def is_odd?(integer)
  integer % 2 != 0
end

# The Integer#remainder method performs a remainder operation in Ruby. Rewrite #is_odd? to use 
# Integer remainder instead of %. Note: before version 2.4, Ruby used the Numeric#remainder method instead.

def is_odd?(integer)
  integer.remainder(2) != 0
end

# 03

# Write a method that takes one argument, a positive integer, and returns a list of the digits in the number.

def digit_list(integer)
  integer.digits.reverse
end

def digit_list_2(integer)
  integer.to_s.chars.map(&:to_i)
end

# Manual mode:

def digit_list(integer)
  output_array = []

  counter = 0
  loop do
    output_array << integer.to_s[counter].to_i

    counter += 1
    break if counter == integer.to_s.size
  end
  
  output_array
end

# 04

def count_occurrences(array)
  array = array.map { |element| element.downcase }

  binding.irb

  array.each_with_object({}) do |element, output_hash|
    output_hash[element] = array.count(element)
  end
end

# 05 

# Write a method that takes one argument, a string, and returns a new string with the words in reverse order.

def reverse_sentence(string)
  string.split.reverse.join(" ")
end

# 06

# Write a method that takes an argument, a string containing one or more words, and returns the given string with words
# that contain five or more characters reversed. Each string will consist of only letters and spaces. Spaces should be 
# included only when more than one word is present.

def reverse_words(string)
  string.split.map { |word| word.size >= 5 ? word.chars.reverse.join : word }.join(" ")
end

# 07

def stringy(integer, initial_bit=1) 
  output_string = ''

  integer.times do |i|
    output_string << if initial_bit == 1
                       i.even? ? '1' : '0'
                     else
                       i.odd? ? '1' : '0'
                     end
  end

  output_string
end

# 08

# Write a method that takes one argument, an array containing integers, 
# and returns the average of all numbers in the array. The array will never 
# be empty and the numbers will always be positive integers. Your result 
# should also be an integer.

def average(array)
  array.sum / array.size.to_f
end

# 09

# Write a method that takes one argument, a positive integer, and returns the sum of its digits.

def sum(integer)
  integer.digits.sum
end

def sum_2(integer)
  integer.to_s.chars.map(&:to_i).reduce(:+)
end

# 10

# Write a method that takes two arguments, a positive integer and a boolean, 
# and calculates the bonus for a given salary. If the boolean is true, the bonus 
# should be half of the salary. If the boolean is false, the bonus should be 0.

def calculate_bonus(integer, bonus)
  bonus ? (integer / 2) : 0
end

