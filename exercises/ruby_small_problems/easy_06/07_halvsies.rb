
def halvsies(array)
  array.size.odd? ? middle = array.size / 2 + 1 : middle = array.size / 2

  [array[0...middle]] + [array[middle..-1]]
end
