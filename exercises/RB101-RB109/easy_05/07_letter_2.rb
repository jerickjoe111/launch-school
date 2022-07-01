def word_sizes(string)
  string.split.group_by do |word| 
    word.delete("^a-zA-Z").size
  end.transform_values do |word|
    word.size
  end
end
