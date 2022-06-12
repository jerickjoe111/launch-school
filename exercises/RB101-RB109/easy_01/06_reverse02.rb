def reverse_words(string)
  string.split.map { |word| word.size >= 5 ? word.reverse : word }.join(" ")
end
  
puts reverse_words('Professional')          # => lanoisseforP
puts reverse_words('Walk around the block') # => Walk dnuora the kcolb
puts reverse_words('Launch School')         # => hcnuaL loohcS