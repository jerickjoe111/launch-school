# Exercise 07

# Write a method called each_with_object that behaves similarly for Arrays. 
# It should take an Array and an object of some sort as an argument, 
# and a block. It should yield each element and the object to the block. 
# each_with_object should return the final value of the object.

def each_with_object(input_array, output_object)
  input_array.each do |element|
    yield(element, output_object)
  end

  output_object
end
