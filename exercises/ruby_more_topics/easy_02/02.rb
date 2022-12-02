# Exercise 02

# Write your own version of zip that does the same type of operation. 
# It should take two Arrays as arguments, and return a new Array 
# (the original Arrays should not be changed). Do not use the built-in 
# Array#zip method. You may assume that both input arrays have the 
# same number of elements.

def zip(array_a, array_b)
  output_array = []

  (0...array_a.size).each do |index|
    output_array << [array_a[index], array_b[index]]
  end

  output_array
end
