
def leading_substrings(string)
  array = []
  string.size.times do |index|
    array << string[0..index]
  end

  array.sort
end
