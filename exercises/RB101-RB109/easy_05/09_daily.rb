def crunch(string)
  return string if string.empty?

  new_string = string[0]
  string.chars.each { |char| new_string << char unless new_string[-1] == char }

  new_string
end