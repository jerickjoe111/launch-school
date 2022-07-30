# https://launchschool.com/exercises/e0500589

# >>>>>> Problem

# Write a method that takes a string, and then returns a hash that contains 
# 3 entries: one represents the percentage of characters in the string that 
# are lowercase letters, one the percentage of characters that are uppercase 
# letters, and one the percentage of characters that are neither.

# You may assume that the string will always contain at least one character.

# input: a string of words

# output: a hash (lowercase:, uppercase:, neither:)

# does neither category include whitespaces?


# >>>>>> Examples and test cases

# letter_percentages('abCdef 123') == { lowercase: 50.0, uppercase: 10.0, neither: 40.0 }
# letter_percentages('AbCd +Ef') == { lowercase: 37.5, uppercase: 37.5, neither: 25.0 }
# letter_percentages('123') == { lowercase: 0.0, uppercase: 0.0, neither: 100.0 }

# >>>>>> Algorithm

# 1. init. empty output hash

# 2. init. variables `lowercase`, `uppercase` and `neither` for character count in input string,
#    to 0

# 3. for each character in input string:
#     - add 1 to corresponding counter variable

# 4. calculate the percentage of characters in input string for every counter variable

# 5. set percentage as value for each corresponding key `lowercase`, `uppercase` or `neither`

# 6. return output hash

# >>>>>> Code

def letter_percentages(input_string)
  output_hash = {}

  lowercase_count = 0
  uppercase_count = 0
  neither_count = 0
  string_size = input_string.size

  input_string.chars.each do |character|
    case character
    when ("a".."z") then lowercase_count += 1
    when ("A".."Z") then uppercase_count += 1
    else neither_count += 1
    end
  end

  output_hash[:lowercase] = (lowercase_count * 100.0 / string_size).round(1)
  output_hash[:uppercase] = (uppercase_count * 100.0 / string_size).round(1)
  output_hash[:neither] = (neither_count * 100.0 / string_size).round(1)

  output_hash
end
