def reverse_words(string)
  string.split.map { |word| word.size >= 5 ? word.split("").reverse.join : word }.join(" ")
end
  
