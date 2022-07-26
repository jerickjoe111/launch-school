def penultimate(string)
  string.split[-2]
end

def super_penultimate(string)
  return string if string.empty? || string.size == 1

  words = string.split

  middle = words.size / 2 - 1

  words.size.even? ? words[middle] : words[middle + 1]
  
end
