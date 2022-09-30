# 01

# Write a method that takes an Array of numbers and then returns 
# the sum of the sums of each leading subsequence for that Array. 
# You may assume that the Array always contains at least one number.

def sum_of_sums(array)
  array_size = array.size
  sum = 0

  counter = 0
  loop do
    break if counter == array_size
    sum += array[0..counter].sum
    counter += 1
  end

  sum
end

# 02

# Mad libs are a simple game where you create a story template 
# with blanks for words. You, or another player, then construct a 
# list of words and place them into the story, creating an often 
# silly or funny story as a result.

# Create a simple mad-lib program that prompts for a noun, a verb,
# an adverb, and an adjective and injects those into a story that you create.

def mad_libs
  puts "Enter a noun:"
  noun = gets.chomp.strip
  # Etc.

  puts "Nice #{noun}!"
end


# 03

# Write a method that returns a list of all substrings of a string 
# that start at the beginning of the original string. The return value 
# should be arranged in order from shortest to longest substring.

def leading_substrings(string)
  output_array = []
  string_size = string.size
  
  counter = 0
  loop do
    break if counter == string_size
    output_array << string[0..counter]
    counter += 1
  end

  output_array
end

# 04

# Write a method that returns a list of all substrings of a string. 
# The returned list should be ordered by where in the string the substring begins. 
# This means that all substrings that start at position 0 should come first, 
# then all substrings that start at position 1, and so on. 
# Since multiple substrings will occur at each position, the substrings at a 
# given position should be returned in order from shortest to longest.

# You may (and should) use the leading_substrings method you wrote in the previous exercise:

def substrings(string)
  output_array = []
  string_size = string.size

  counter = 0
  loop do
    break if counter == string_size

    output_array << leading_substrings(string[counter..-1])

    counter += 1
  end

  output_array.flatten
end

# 05

# Write a method that returns a list of all substrings of a string that are palindromic. 
# That is, each substring must consist of the same sequence of characters forwards as it
# does backwards. The return value should be arranged in the same sequence as the substrings
# appear in the string. Duplicate palindromes should be included multiple times.

# You may (and should) use the substrings method you wrote in the previous exercise.

# For the purposes of this exercise, you should consider all characters and pay attention to case; 
# that is, "AbcbA" is a palindrome, but neither "Abcba" nor "Abc-bA" are. In addition, assume 
# that single characters are not palindromes.

def palindromes(string)
  substrings(string).select do |substring| 
    substring == substring.reverse &&
    substring.size > 1
  end
end


# 06

# Write a method that takes two arguments: the first is the starting number, 
# and the second is the ending number. Print out all numbers between the two 
# numbers, except if a number is divisible by 3, print "Fizz", if a number is 
# divisible by 5, print "Buzz", and finally if a number is divisible by 3 and 5, 
# print "FizzBuzz".

def fizzbuzz(a, b)
  [*(a..b)].each do |number|
    message = case
              when number % 3 == 0 && number % 5 == 0 then "FizzBuz"
              when number % 3 == 0 then "Fizz"
              when number % 5 == 0 then "Buzz"
              else number.to_s
              end

    puts message
  end
end

# 06

# Write a method that takes a string, and returns a new string in which every character is doubled.

def repeater(string)
  string.chars.each_with_object('')do |character, output_string|
    output_string << character << character
  end
end

# 07

# Write a method that takes a string, and returns a new string in which every consonant 
# character is doubled. Vowels (a,e,i,o,u), digits, punctuation, 
# and whitespace should not be doubled.

CONSONANTS = %r{[A-Za-z&&[^aeiouAEIOU]]}

def double_consonants(string)
  string.chars.each_with_object('')do |character, output_string|
    output_string << (character.match?(CONSONANTS) ? character * 2 : character)
   end
end

# 08

# Write a method that takes a positive integer as an argument and 
# returns that number with its digits reversed.

def reversed_number(number)
  number.digits.join.to_i
end

# 09

# Write a method that takes a non-empty string argument, and returns 
# the middle character or characters of the argument. If the argument 
# has an odd length, you should return exactly one character. If the 
# argument has an even length, you should return exactly two characters.

def center_of(string)
  string_size = string.size
  middle = string_size / 2

  if string_size % 2 == 0 then string[middle - 1..middle]
  else string[middle]
  end
end

