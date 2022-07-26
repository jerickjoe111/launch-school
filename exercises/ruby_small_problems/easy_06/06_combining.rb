
def merge(array_a, array_b)
  array_a | array_b
end

# Alternatives without the | method

def merge_2(array_a, array_b)
  (array_a + array_b).uniq
end

def merge_3(array_a, array_b)
  new_array = []

  array_a.each { |item| new_array << item unless new_array.include?(item) }
  array_b.each { |item| new_array << item unless new_array.include?(item) }

  new_array
end