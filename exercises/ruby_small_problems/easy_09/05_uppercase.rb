def uppercase?(string)
  string.delete("^A-z").chars.all? { |character| ("A".."Z").cover?(character) } 
end
