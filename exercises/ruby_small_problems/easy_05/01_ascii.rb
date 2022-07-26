
def ascii_value(string)
  string.chars.reduce(0) { |acc, char| acc += char.ord }
end

