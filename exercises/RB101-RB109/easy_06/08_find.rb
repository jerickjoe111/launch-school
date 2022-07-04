
def find_dup(array)
  array.find {|number| array.count(number) == 2 }
end
