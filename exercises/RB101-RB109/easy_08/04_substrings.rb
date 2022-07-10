def leading_substrings(string)
  array = []
  string.size.times do |index|
    array << string[0..index]
  end

  array.sort
end

def substrings(string)
  characters = string.chars

  array = []

  string.size.times do 
    array << leading_substrings(characters.join)

    characters.shift
  end

  array.flatten
end
