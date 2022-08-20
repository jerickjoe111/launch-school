# 01

# Write a method that determines and returns the ASCII string value of a 
# string that is passed in as an argument. The ASCII string value is the 
# sum of the ASCII values of every character in the string. (You may use 
# String#ord to determine the ASCII value of a character.)

def ascii_value(string)
  string.chars.reduce(0) { |acc, character| acc += character.ord }
end

# 02

# The time of day can be represented as the number of minutes before 
# or after midnight. If the number of minutes is positive, the time is 
# after midnight. If the number of minutes is negative, the time is 
# before midnight.

# Write a method that takes a time using this minute-based format and 
# returns the time of day in 24 hour format (hh:mm). Your method 
# should work with any integer input.

# You may not use ruby's Date and Time classes.

HOURS_PER_DAY = 24
MINUTES_PER_HOUR = 60

def time_of_day(minutes)
  hours, minutes = minutes.divmod(MINUTES_PER_HOUR)
  hours = hours % HOURS_PER_DAY

  format("%02i:%02i", hours, minutes)
end

# 03

# As seen in the previous exercise, the time of day can be represented 
# as the number of minutes before or after midnight. If the number of 
# minutes is positive, the time is after midnight. If the number of 
# minutes is negative, the time is before midnight.

# Write two methods that each take a time of day in 24 hour format, 
# and return the number of minutes before and after midnight, 
# respectively. Both methods should return a value in the range 0..1439.

# 04 

# Given a string of words separated by spaces, write a method that takes 
# this string of words and returns a string in which the first and last 
# letters of every word are swapped.

# You may assume that every word contains at least one letter, and that 
# the string will always contain at least one word. You may also assume 
# that each string contains nothing but words and spaces

def swap(string)
  string.split.each { |word| word[0], word[-1] = word[-1], word[0] }.join(' ')
end

# 05

# Given a string that consists of some words (all lowercased) and an 
# assortment of non-alphabetic characters, write a method that returns 
# that string with all of the non-alphabetic characters replaced by spaces. 
# If one or more non-alphabetic characters occur in a row, you should only 
# have one space in the result (the result should never have consecutive spaces).

def cleanup(string)
  string = string.gsub(/[^A-Za-z]/, ' ').squeeze(' ')
end

# 06

# Write a method that takes a string with one or more space separated words 
# and returns a hash that shows the number of words of different sizes.

# Words consist of any string of characters that do not include a space.

def word_sizes(string)
  word_sizes = string.delete("^A-Za-z ").split.map(&:size)

  word_sizes.each_with_object({}) do |word_size, output_hash|
    output_hash[word_size] = word_sizes.count(word_size)
  end
end

# 07 

# Modify the word_sizes method from the previous exercise to exclude non-letters 
# when determining word size. For instance, the length of "it's" is 3, not 4.

# 08

# Write a method that takes an Array of Integers between 0 and 19, and returns an 
# Array of those Integers sorted based on the English words for each number:

NUMBERS = %w(zero one two three four five six seven eight nine ten 
eleven twelve thirteen fourteen fifteen sixteen seventeen 
eighteen nineteen)

def alphabetic_number_sort(array)
  array.sort_by { |number| NUMBERS[number] } 
end

# 09

# Write a method that takes a string argument and returns a new string that contains 
# the value of the original string with all consecutive duplicate characters collapsed
# into a single character. You may not use String#squeeze or String#squeeze!.

def crunch(string)
  string.split.map do |word|
    word.chars.each_with_object('') do |character, output_string|
      output_string << character unless output_string[-1] == character
    end
  end.join(' ')
end

