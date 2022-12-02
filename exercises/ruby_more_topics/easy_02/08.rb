# Exercise 08

# Write a method called max_by that behaves similarly for Arrays. 
# It should take an Array and a block, and return the element that 
# contains the largest value.

def max_by(input_array)
  max = nil
  candidate = input_array.first

  input_array.each_with_index do |element, index|
    if index.zero?
      max = yield(element)
      next
    end

    if yield(element) > max
      max = yield(element)
      candidate = element
    end
  end

  candidate
end
