# Exercise 06

# Write a method called any? that behaves similarly for Arrays. 
# It should take an Array as an argument, and a block. 
# It should return true if the block returns true for any of the element values. 
# Otherwise, it should return false.

def any?(input_array)
  input_array.each { |element| return true if yield(element) }

  false
end
