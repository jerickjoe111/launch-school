# 01 

# Write a method that takes two strings as arguments, determines the longest of the two strings, 
# and then returns the result of concatenating the shorter string, the longer string, 
# and the shorter string once again. 
# You may assume that the strings are of different lengths.

def short_long_short(string_a, string_b)
  short, long = [string_a, string_b].sort_by { |string| string.size }
  short + long + short
end

# 02

# Write a method that takes a year as input and returns the century. 
# The return value should be a string that begins with the century number, 
# and ends with st, nd, rd, or th as appropriate for that number.

# New centuries begin in years that end with 01. So, the years 1901-2000 comprise the 20th century.

def century(year)
  century = (year % 100 == 0 ? year / 100 : (year / 100) + 1)

  add_suffix(century)
end

def add_suffix(century)
  suffixes = Array.new (10) do |index|
                case index
                when 1 then 'st'
                when 2 then 'nd'
                when 3 then 'rd'
                else 'th'
                end
              end

  suffix = (century.to_s.end_with?('11', '12', '13') ? 
           'th' : 
           suffixes[century % 10])

  century.to_s + suffix
end

# 03

# In the modern era under the Gregorian Calendar, leap years occur in every year that 
# is evenly divisible by 4, unless the year is also divisible by 100. If the year is 
# evenly divisible by 100, then it is not a leap year unless the year is evenly divisible by 400.
# Assume this rule is good for any year greater than year 0. Write a method that takes any year 
# greater than 0 as input, and returns true if the year is a leap year, or false if it is not a leap year.

def leap_year?(year)
  (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
end

# 04

# The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. 
# Prior to 1752, the Julian Calendar was used. Under the Julian Calendar, leap years occur 
# in any year that is evenly divisible by 4.

# Using this information, update the method from the previous exercise to determine leap 
# years both before and after 1752.

def leap_year?(year)
  year < 1752 ? 
  year % 4 == 0 :
  (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
end

# 05 

def multisum(n)
  sum = 0
  [*(1..n)].each do |integer|
    sum += integer if integer % 3 == 0 || integer % 5 == 0
  end

  sum
end

# 06

# Write a method that takes an Array of numbers, and returns an Array with the same number 
# of elements, and each element has the running total from the original Array.

def running_total(array)
  running_total = 0
  array.each_with_object([]) do |number, output_array|
    running_total += number
    output_array << running_total
  end
end

def running_total(array)
  running_total = 0
  array.map { |number| running_total += number}
end

# 07

ASCII_ZERO = 48

def string_to_integer(string)
  digits_array = []

  string.chars.each do |digit_character| 
    digits_array << digit_character.ord - ASCII_ZERO
  end

  integer = 0
  max_positional = digits_array.size - 1

  digits_array.each_with_index do |digit, index|
    integer += digit * (10**(max_positional - index))
  end

  integer
end

# 08

def string_to_signed_integer(string)
  integer = string_to_integer(string.delete("^0-9"))
  string.start_with?('-') ? 
  -integer :
  integer
end

# 09

def integer_to_string(integer)
  integer.digits.reverse.each_with_object('') do |digit, output_string|
    digit_character = (digit + ASCII_ZERO).chr
    output_string << digit_character
  end
end

# 10

def signed_integer_to_string(integer)
  sign = if integer < 0 then '-'
         elsif integer > 0 then '+'
         else ''
         end

  sign + integer_to_string(integer.abs)
end
