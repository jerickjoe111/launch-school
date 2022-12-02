# Exercise 06

# Write a method called each_with_index that behaves similarly 
# for Arrays. It should take an Array as an argument, 
# and a block. It should yield each element and an index number 
# to the block. each_with_index should return a reference to the 
# original Array.

def each_with_index(input_array)
  i = 0
  input_array.each do |element| 
    yield(element, i)
    i += 1
  end
  
  input_array
end

result = each_with_index([1, 3, 6]) do |value, index|
  puts "#{index} -> #{value**index}"
end

puts result == [1, 3, 6]