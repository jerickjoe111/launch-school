
def interleave(array_a, array_b)
  new_array = []

  array_a.size.times { |counter| new_array.push(array_a[counter], array_b[counter]) }

  new_array
end

def interleave_2(array_a, array_b)
  new_array = []
  
  counter = 0
  while counter < array_a.size
    new_array << array_a[counter] 
    new_array << array_b[counter]
    counter += 1
  end

  new_array
end

def interleave_zip(array_a, array_b)
  array_a.zip(array_b).flatten
end
