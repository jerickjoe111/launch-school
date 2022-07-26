def oddities(array)
  (0...array.size).step(2).map { |i| array[i] }
end

def evenities(array)
  (1...array.size).step(2).map { |i| array[i] }
end

def oddities_2(array)
  output_array = []

  array.each_index { |i| output_array << array[i] if i.even? }

  output_array
end

def oddities_3(array)
  output_array = []
  counter = 0

  while counter < array.size
    output_array << array[counter]
    counter += 2
  end

  output_array
end


puts oddities_3([2, 3, 4, 5, 6]) == [2, 4, 6]
puts oddities_3([1, 2, 3, 4, 5, 6]) == [1, 3, 5]
puts oddities_3(['abc', 'def']) == ['abc']
puts oddities_3([123]) == [123]
puts oddities_3([]) == []

