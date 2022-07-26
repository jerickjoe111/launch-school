# Write a method that can rotate the last n digits of a number. For example:

# rotate_rightmost_digits(735291, 1) == 735291
# rotate_rightmost_digits(735291, 2) == 735219
# rotate_rightmost_digits(735291, 3) == 735912
# rotate_rightmost_digits(735291, 4) == 732915
# rotate_rightmost_digits(735291, 5) == 752913
# rotate_rightmost_digits(735291, 6) == 352917

def rotate_array(input_array)
  input_array[1..-1] + [input_array[0]]
end

def rotate_rightmost_digits(digit, last_digits)
  return "You can't rotate so many digits!" if last_digits > digit.digits.size

  digits_array = digit.digits.reverse

  (digits_array + rotate_array(digits_array.pop(last_digits))).join.to_i
end
