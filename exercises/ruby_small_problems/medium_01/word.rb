# https://launchschool.com/exercises/753d4461

# >>>>>> Problem

# Write a method that takes a sentence string as input, 
# and returns the same string with any sequence of the words 
# 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' 
# converted to a string of digits.

# input: a string

# output: a string (same as input) with number names replaced with numbers characters

# >>>>>> Caveats

# empty string?

# >>>>>> Examples and test cases

# word_to_digit(
#   'Please call me at five five five one two three four. Thanks.') 
#   == 'Please call me at 5 5 5 1 2 3 4. Thanks.'

# >>>>>> Data Structures + Possible methods/strategies to use

# hash with pairs where v is an integer and k is the number name string

# array of words in sentence

# gsub! ??

# map!

# >>>>>> Algorithm

# 1. split sentence in an array of words

# 2. for each word in array of words:
#     - if word is a number name: change it for the corresponding digit character

# 3.return array of words joined in a single string

# >>>>>> Code

NUMBERS = {
  'zero'  => 0, 
  'one'   => 1,
  'two'   => 2,
  'three' => 3,
  'four'  => 4,
  'five'  => 5,
  'six'   => 6,
  'seven' => 7,
  'eight' => 8,
  'nine'  => 9  
}

def word_to_digit(input_string)
  input_string.split.each do |word|
    input_string.gsub!(/#{word}/) do |gsub_pattern| 
      NUMBERS.fetch(gsub_pattern.delete('^A-Za-z'), gsub_pattern)
    end
  end

  input_string
end

def display_phone_number(string)
  phone_number = /(\d{10})/.match(string.delete(' '))
  if phone_number
    puts format('(%s) %s-%s', 
                phone_number[0][0, 3], 
                phone_number[0][3, 3],
                phone_number[0][5, 4]
               )
  else
    puts 'Sorry, I could not find a ten digits phone number in this text.'
  end
end
