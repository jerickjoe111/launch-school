def multiply_all_pairs(array_a, array_b)
  array_a.each_with_object([]) do |integer_a, new_array|
    array_b.each do |integer_b|
      new_array << integer_a * integer_b
    end
  end.sort
end
