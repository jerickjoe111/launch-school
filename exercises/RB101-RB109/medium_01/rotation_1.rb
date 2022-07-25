# Write a method that rotates an array by moving the first element 
# to the end of the array. The original array should not be modified.

# Do not use the method Array#rotate or Array#rotate! for your implementation.

def rotate_array(input_array)
  input_array[1..-1] + [input_array[0]]
end

def multi_rotate(input)
  if input.is_a?(Integer)
    rotate_array(input.digits.reverse).join
  elsif input.is_a?(String)
    rotate_array(input.chars).join.to_i
  else
    rotate_array(input)
  end
end