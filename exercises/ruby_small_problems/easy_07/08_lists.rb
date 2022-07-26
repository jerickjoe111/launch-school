def multiply_list(array_a, array_b)
  index = 0
  array_a.each_with_object([]) do |integer, new_array|
    new_array << array_a[index] * array_b[index]
    index += 1
  end
end

def multi_zip(array_a, array_b)
  array_a.zip(array_b).map { |sub_array| sub_array.reduce(&:*) }
end
