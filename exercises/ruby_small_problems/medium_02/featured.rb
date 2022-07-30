# https://launchschool.com/exercises/a1afc619

# >>>>>> Problem

# Write a method that takes a single integer as an argument, 
# and returns the next featured number that is greater than 
# the argument. Return an error message if there is no next 
# featured number.

# input: an integer

# output: an integer (the next feature number after input integer)

# featured number:
#   - odd
#   - multiple of 7
#   - whose digits occur exactly once (no repeated digits)

# >>>>>> Caveats


# >>>>>> Examples and test cases

# featured(12) == 21
# featured(20) == 21
# featured(21) == 35
# featured(997) == 1029
# featured(1029) == 1043
# featured(999_999) == 1_023_547
# featured(999_999_987) == 1_023_456_987

# featured(9_999_999_999) # -> There is no possible number that fulfills those requirements

# >>>>>> Data Structures + Methods

# we will use a custom method that will return a
# boolean to check if a number is a featured number


# >>>>>> Algorithm

# 1. set counter to input integer + 1

# 2. check if counter is a featured number
#     - if yes: return counter
#     - if no: counter + 1
#              next iteration

#  3. if counter reaches a number of 10 digits return error message
  
# Featured number check:

# return true if number:
#     - odd
#     - mod 7 is 0
#     - number of digis after removing repeated digits is the same as original number

# >>>>>> Code

ERROR_MESSAGE = "There is no possible number that fulfills those requirements"

MAX_POSSIBLE = 9_876_543_210

def featured(input_integer)
  counter = input_integer + 1

  feature_found = false
  loop do
    if featured?(counter)
      feature_found = counter
      break
    elsif counter == MAX_POSSIBLE
      break
    end

    counter += 1
  end

  feature_found ? feature_found : ERROR_MESSAGE
end

def featured?(integer)
  integer.digits.size == integer.digits.uniq.size && integer % 7 == 0 && integer.odd?
end
