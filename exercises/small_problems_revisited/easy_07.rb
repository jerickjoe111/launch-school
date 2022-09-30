# 01

# Write a method that combines two Arrays passed in as arguments, 
# and returns a new Array that contains all elements from both Array 
# arguments, with the elements taken in alternation.

# You may assume that both input Arrays are non-empty, 
# and that they have the same number of elements.

def interleave(array_a, array_b)
  output_array = []

  array_a.each_with_index do |_, index|
    output_array << array_a[index] << array_b[index]
  end

  output_array
end

# 02

# Write a method that takes a string, and then returns a hash that contains 
# 3 entries: one represents the number of characters in the string that are 
# lowercase letters, one the number of characters that are uppercase letters, 
# and one the number of characters that are neither.

def letter_case_count(string)
  output_hash = {}

  output_hash[:lowercase] = string.count("a-z")
  output_hash[:uppercase] = string.count("A-Z")
  output_hash[:neither] = string.count("^A-Za-z")

  output_hash
end

# 03

# Write a method that takes a single String argument and returns 
# a new string that contains the original value of the argument with 
# the first character of every word capitalized and all other letters lowercase.

# You may assume that words are any sequence of non-blank characters.

def word_cap(string)
  string.split.map { |word| word.capitalize }.join(' ')
end


# 04 

# Write a method that takes a string as an argument and returns a 
# new string in which every uppercase letter is replaced by its lowercase version, 
# and every lowercase letter by its uppercase version. 
# All other characters should be unchanged.

# You may not use String#swapcase; write your own version of this method.

def swapcase(string)
  string.chars.map do |character|
    character.match?(/[A-Z]/) ? character.downcase : character.upcase
  end.join
end

# 05 - 06

# Write a method that takes a String as an argument, and returns a 
# new String that contains the original value using a staggered 
# capitalization scheme in which every other character is capitalized, 
# and the remaining characters are lowercase. Characters that are not 
# letters should not be changed, but count as characters when switching 
# between upper and lowercase.

def staggered_case(string)
  counter = -1
  string.chars.map do |character|
    if character.match?(/[A-Za-z]/)
      counter += 1
      counter.even? ? character.upcase : character.downcase
    else
      character
    end
  end.join
end

# 07

# Write a method that takes an Array of integers as input, 
# multiplies all the numbers together, divides the result by 
# the number of entries in the Array, and then prints the result 
# rounded to 3 decimal places. Assume the array is non-empty.

def show_multiplicative_average(array)
  format('%.3f', array.reduce(&:*) / array.size.to_f)
end

# 08

# Write a method that takes two Array arguments in which each Array contains 
# a list of numbers, and returns a new Array that contains the product of 
# each pair of numbers from the arguments that have the same index. 
# You may assume that the arguments contain the same number of elements.

def multiply_list(array_a, array_b)
  output_array = []

  array_a.each_with_index do |_, index| 
    output_array << array_a[index] * array_b[index]
  end

  output_array
end

# 09

def multiply_all_pairs(array_a, array_b)
  output_array = []

  array_a.each do |integer_a|
    array_b.each do |integer_b|
      output_array << integer_a * integer_b
    end
  end

  output_array.sort
end

# 10

# Write a method that returns the next to last word in the String passed to it as an argument.

# Words are any sequence of non-blank characters.

# You may assume that the input String will always contain at least two words.

def penultimate(string)
  string.split[-2]
end