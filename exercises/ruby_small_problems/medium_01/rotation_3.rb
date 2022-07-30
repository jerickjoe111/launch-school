# If you take a number like 735291, and rotate it to the left, you get 352917. 
# If you now keep the first digit fixed in place, and rotate the remaining digits, 
# you get 329175. Keep the first 2 digits fixed in place and rotate again to 321759. 
# Keep the first 3 digits fixed in place and rotate again to get 321597. 
# Finally, keep the first 4 digits fixed in place and rotate the final 2 digits to get 321579. 
# The resulting number is called the maximum rotation of the original number.

# Write a method that takes an integer as argument, and returns the maximum rotation 
# of that argument. You can (and probably should) use the rotate_rightmost_digits method 
# from the previous exercise.

# Note that you do not have to handle multiple 0s.

# Example:

# max_rotation(735291) == 321579
# max_rotation(3) == 3
# max_rotation(35) == 53
# max_rotation(105) == 15 # the leading zero gets dropped
# max_rotation(8_703_529_146) == 7_321_609_845

require "pry"

def rotate_array(input_array)
  input_array[1..-1] + [input_array[0]]
end

def rotate_rightmost_digits(digit, last_digits)
  return "You can't rotate so many digits!" if last_digits > digit.digits.size

  digits_array = digit.digits.reverse

  (digits_array + rotate_array(digits_array.pop(last_digits))).join.to_i
end

def max_rotation(digit)
  max_rotation = digit
  (digit.size..2).each do |digits| 
    p digits
    binding.pry
    max_rotation = rotate_rightmost_digits(max_rotation, digits)
  end
  max_rotation
end