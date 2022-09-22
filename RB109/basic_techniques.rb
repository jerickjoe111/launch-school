# Get all possible substrings/subarrays (in order) of a string/array:

def get_subs(input)
  last_index = input.size - 1

  (0..last_index).each_with_object([]) do |index_a, output|
    (index_a + 1..last_index).each do |index_b|
      output << input[index_a..index_b]
    end
  end
end



# Get substrings/subarrays that satisfy x condition:

def get_subs(input)
  last_index = input.size - 1

  (0..last_index).each_with_object([]) do |index_a, output|
    (index_a + 1..last_index).each do |index_b|
      subsequence = input[index_a..index_b]

      output << input[index_a..index_b] # if x_condition?(subsequence)
    end
  end
end

def x_condition?(subsequence)
  subsequence 
end



# Get sized substrings/subsequence:

def get_sized(input, size)
  last_index = input.size - 1

  output = []

  i = 0
  while i <= last_index
    output << input[i, size]
    i += size
  end

  output
end



# Reverse/sort only certain elements from an array/substring:

def sort_only(input)
  vowels = input.scan(/[aeiouAEIOU]/) # or select for an array
  consonants = input.scan(/[a-zA-Z&&[^aeiouAEIOU]]/) # or select for an array

  indices = []
  input.chars.each_with_index { |letter, index| indices << index if letter.match?(/[aeiou]/) }

  vowels.sort! # / reverse!

  vowels.each_with_index { |vowel, index| consonants.insert(indices[index], vowel) }

  consonants.join
end



# Delete digits in a number:

def delete_digits(input_integer)
  input_integer.digits.each_index do |index|
    string_integer = input_integer.to_s
    string_integer.slice!(index)
    
    string_integer.to_i
    # do x with resulting string_integer
  end
end



# Get all possible combinations of elements in an array

def get_combinations(input_array)
  input_array.permutation.to_a
end



# to keep track of visited elements: (you can)
#          - delete elements
#          - store visited indices or elements in DS



# Get the last digit of certain character in a string or array

def last_index(input_string, element)
  indices = []
  input_string.chars.each_with_index { |char, index| indices << index if char == element }
  indices.max 
end
ALT
def last_index(input_string, element)
  last_index = 0
  input_string.chars.each_with_index do |char, index| 
    last_index = index if index > last_index && char == element
  end
  last_index
end



# Array of instances of substring x: 

def get_substring(input_string, substring)
  input_string.scan(/#{substring}/)
end


# number of occurrences of x substring in string

def get_substring(input_string, substring)
  input_string.scan(/#{substring}/).size
end

# prime?

def prime?(number)
  (2...number).all? { |divisor| number % divisor != 0 }
end

# Method to know if two words are anagrams (anagram: words with the same letters in diff. order)

def anagrams?(word_a, word_b)
  word_a.chars.sort == word_b.chars.sort
end

# Method to know if a words is a palindrome (palindrome: same words read from both sides)

def palindrome?(input_string)
  input_string == input_string.reverse
end

# Get vowels and consonants from a string in different arrays:

def get_vowels_consonants(input_string)
  vowels = input_string.scan(/[aeiouAEIOU]/)
  consonants = input_string.scan(/[a-zA-Z&&[^aeiouAEIOU]]/)

  # [vowels, consonants]
end

# each on negative ranges

(-5..-1).reverse_each { |i| i }

# reverse each

(1..10).reverse_each { |i| i }


# Get array of substrings of at least size x

def get_sized(input_string, size)
  input_string.scan(/[a-zA-Z]{1,#{size}}/)
end


# Get instances of x consecutive char in strings

def get_consecutives(input_string, size)
  consecutives = []
  input_string.chars.each_with_index do |letter, index|
    substring = input_string[index, size]

    consecutives << substring if single_char?(substring)
  end

  consecutives
end

def single_char?(substring)
  substring.chars.uniq.size == 1
end

# Make copies of objects inside a DS:

def copy(input)
  input.each_with_object([]) { |element, output| output << element }
end

# Check performance:

require 'benchmark'

def foo
 time = Benchmark.measure {
  # code to test
 }
 puts time.real
end

# Scalable way to get all possible substrings of SIZE size
SIZE = 3

def solve(string)
  last_index = string.size - SIZE

  (0..last_index).each_with_object([]) do |index_a, output|
    output << string[index_a, SIZE]
  end
end

# Letter shifter

A_VALUE = "A".ord
A_D_VALUE = "a".ord
ALPH_LETTERS = 26

def shifter(letter, shift_value)
  reset_value = letter.match?(/[A-Z]/) ? A_VALUE : A_D_VALUE

  new_value = ((letter.ord - reset_value) + shift_value) % ALPH_LETTERS
  new_value += reset_value
  new_value.chr
end

# Get nth Fibonacci number

def fibonacci(n)
  return 1 if n < 2

  fibonacci(n - 1) + fibonacci(n - 2)
end
