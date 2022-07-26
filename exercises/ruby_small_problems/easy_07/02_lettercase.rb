# PEDAC

# input: string
# output: a hash with three key-value pairs: - lowercase: number of l.case letters in input string
#                                            - uppercase: ""        u.case ""
#                                            - neither:   ""        not l.case not d.case ""  (numbers, symbols, whitespace)

# case empty strings: return a { lowercase: 0, uppercase: 0, neither: 0 } hash, (avoids going through main function process in vain) ?


# DS:
# - convert string to array of characters ?
# - analize each character at a time looping with a counter ?
# - initialize a hash with three{ lowercase: 0, uppercase: 0, neither: 0 } pairs, all with 0 values, and add one to the corresponding value 
#   with each iteration through the string characters


# Algorithm:
# 1. Initialize hash with three keys (lowercase, uppercase, neither), all with 0 as value.
# 2. Return hash if input string is empty of any character (including whitespace)
# 3. iterate through each characer in string:
#   - add 1 to corresponding value in hash if it is a lowercase character
#   -      ""                                         uppercase ""
#   -      ""                                         neither   ""
# 4. return hash

def letter_case_count(string)
  hash = {lowercase: 0, uppercase: 0, neither: 0}
  
  return hash if string.empty?

  string.chars.each do |character|
    case character
    when ("a".."z") then hash[:lowercase] += 1
    when ("A".."Z") then hash[:uppercase] += 1
    else hash[:neither] += 1
    end 
  end

  hash
end
