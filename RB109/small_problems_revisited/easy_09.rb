# 01

# Create a method that takes 2 arguments, an array and a hash. 
# The array will contain 2 or more elements that, when combined 
# with adjoining spaces, will produce a person's name. The hash 
# will contain two keys, :title and :occupation, and the 
# appropriate values. Your method should return a greeting that 
# uses the person's full name, and mentions the person's title and occupation.

def greetings(array, hash)
  format("Hello, %s!, Nice to have a %s around.", 
         array.join(' '), 
         hash.values.join(' '))
end

# 02

# A double number is a number with an even number of digits whose 
# left-side digits are exactly the same as its right-side digits. 
# For example, 44, 3333, 103103, 7676 are all double numbers. 
# 444, 334433, and 107 are not.

# Write a method that returns 2 times the number provided as an argument, 
# unless the argument is a double number; double numbers should be returned as-is.


def double?(number)
  size = number.digits.size

  return false if size % 2 != 0

  half = (size / 2) - 1

  digits = number.digits.reverse

  digits[0..half] == digits[half + 1..-1] 
end

def twice(number)
  double?(number) ? number : number * 2
end

# 03

# Write a method that takes a number as an argument. If 
# the argument is a positive number, return the negative of 
# that number. If the number is 0 or negative, return the original number.

def negative(number)
  number <= 0 ? number : -number
end

# 04

# Write a method that takes an integer argument, 
# and returns an Array of all integers, in sequence, between 1 and the argument.

# You may assume that the argument will always be a valid integer that is greater than 0.

def sequence(n)
  [*(1..n)]
end

# 05

# Write a method that takes a string argument, and returns true 
# if all of the alphabetic characters inside the string are uppercase, 
# false otherwise. Characters that are not alphabetic should be ignored.

def uppercase?(string)
  !string.match?(/[a-z]/)
end

# 06

# Write a method that takes a string as an argument, and returns an Array
# that contains every word from the string, to which you have appended a space 
# and the word length.

# You may assume that words in the string are separated by exactly one space, 
# and that any substring of non-space characters is a word.

def word_lengths(string)
  string.split.map { |word| word + " #{word.size}" }
end

# 07

# Write a method that takes a first name, a space, and a last name passed 
# as a single String argument, and returns a string that contains the last name, 
# a comma, a space, and the first name.

def swap_name(name)
  space = name =~ /\s/
  "#{name[space + 1..-1]}, #{name[0..space - 1]}"
end

# 08

# Create a method that takes two integers as arguments. The first argument 
# is a count, and the second is the first number of a sequence that your method 
# will create. The method should return an Array that contains the same number 
# of elements as the count argument, while the values of each element will be 
# multiples of the starting number.

# You may assume that the count argument will always have a value of 0 or greater, 
# while the starting number can be any integer value. If the count is 0, an empty 
# list should be returned.

def sequence(a, b)
  output_array = []
  count = b
  a.times do 
    output_array << count
    count += b
  end
  output_array
end

# 09

# Write a method that determines the mean (average) of the three scores passed to it, 
# and returns the letter value associated with that grade.

def get_grade(a, b, c)
  score = (a + b + c) / 3

  case
  when score >= 90 && score <= 100 then "A"
  when score >= 60 && score < 70 then "D"
  # etc
  end
end


# 10

# Write a method which takes a grocery list (array) of fruits with quantities 
# and converts it into an array of the correct number of each fruit.

def buy_fruit(list)
  list.each_with_object([]) do |fruit, output_array|
    fruit[1].times { output_array << fruit[0] }
  end
end

# 11

# Write a program that prints out groups of words that are anagrams. 
# Anagrams are words that have the same exact letters in them but in a 
# different order. Your output should look something like this:

def anagrams(words)
  hash = words.each_with_object({}) do |word, hash|
    hash[word.chars.sort.join] = []
  end

  words.each_with_object(hash) do |word, hash|
    hash[word.chars.sort.join] << word
  end.values
end



