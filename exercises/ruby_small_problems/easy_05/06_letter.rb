def word_sizes(string)
  string.split.group_by do |word| 
    word.size
  end.transform_values do |word|
    word.size
  end
end
