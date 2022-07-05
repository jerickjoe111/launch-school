def word_cap(string)
  string.split.map(&:capitalize).join(" ")
end

def word_cap_2(string)

  string.split.each_with_object("") do |word, empty_string| 
    empty_string << word[0].upcase + word[1..-1].downcase = + " "
  end.strip
end
