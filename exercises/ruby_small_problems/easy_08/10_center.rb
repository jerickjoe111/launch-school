
def center_of(string)
  center = string.size / 2
  string.size.even? ? string[center - 1..center] : string[center]
end
