# https://launchschool.com/exercises/f3d7f26e


# >>>>>> Problem

# Write a method that takes a string as an argument, 
# and returns true if all parentheses in the string 
# are properly balanced, false otherwise.

# input: a string
 
# output: a boolean

# >>>>>> Caveats

# all parentheses must be closed ( each ( has to have a ) counterpart)

# if input string starts with ) it is automatically false

# if input string ends with ( it is automatically false

# >>>>>> Examples and test cases

# balanced?('What (is) this?') == true
# balanced?('What is) this?') == false
# balanced?('What (is this?') == false
# balanced?('((What) (is this))?') == true
# balanced?('((What)) (is this))?') == false
# balanced?('Hey!') == true
# balanced?(')Hey!(') == false
# balanced?('What ((is))) up(') == false

# >>>>>> Data Structures

# we will have to split the string in an array of characters

# >>>>>> Algorithm

# 1. init. variable `parentheses` with only parentheses characters
#    from input string, in the same order

# 2. check `parentheses` characters:
#     a. if `parentheses` starts with ")", return false
#     b. if `parentheses` ends with "(", return false
#     c. if number of "(" and ")" characers are not equal, return false
#     d. return true if none of the above conditions occur

# >>>>>> Code

def balanced?(input_string)
  parentheses = input_string.delete("^()[]{}\'\"")

  return false if parentheses.start_with?(")", "]", "}")
  return false if parentheses.end_with?("(", "[", "{")
  return false if parentheses.count("([{\'\"") != parentheses.count(")]}\'\"")

  true
end
