# Exercise 09

# Write a method called each_cons that behaves similarly for Arrays, 
# taking the elements 2 at a time. 
# The method should take an Array as an argument, and a block. 
# It should yield each consecutive pair of elements to the block, 
# and return nil.

def each_cons(input_array)
  (0..input_array.size - 2).each do |index|
    yield(input_array[index], input_array[index + 1])
  end

  nil
end
