# Write a method that takes a string as an argument and returns
# the character that occurs least often in the given string.
# If there are multiple characters with the equal lowest number
# of occurrences, then return the one that appears first in the
# string. When counting characters, consider the uppercase and
# lowercase version to be the same.

# Examples:

# p least_common_char("Hello World") #== "h"
# p least_common_char("Peter Piper picked a peck of pickled peppers") #== "t"
# p least_common_char("Mississippi") #== "m"
# p least_common_char("Happy birthday!") #== ' '
# p least_common_char("aaaaaAAAA") #== 'a'

# # The tests above should print "true".

# input: a string

# output: a character string (the character that appears first in the string)

# >>>> Caveats

# if there are multiple characters with the equal lowest number of occurrences,
#   then return the one that appears first in the String


# >>>> Strategies, DSs and methods

# 1st instinct ; a hash? one pair for each letter?
#                an array of subarrays, one for each character?

# >>>> Algorithm

# 1. init empty hash called `characters_hash`

# 2. for each character in input string
#     - add one pair to `characters_hash` with character(downcase version) as key
#                                              occurrences as value

# 3. find first character in hash with the smallest value

# >>> Code

def least_common_char(input_string)
  characters_hash = {}

  characters = input_string.downcase.chars

  characters.each do |character|
    characters_hash[character] = characters.count(character)
  end

  characters_hash.min_by { |_, occurrences| occurrences }[0]
end
