# https://launchschool.com/exercises/143443fd

# Find and fix the bug, then explain why the buggy program printed the results it did.

def my_method(array)
  if array.empty?
    []
  elsif array.size > 1
    array.map do |value|
      value * value
    end
  else
    [7 * array.first]
  end
end

p my_method([])
p my_method([3])
p my_method([3, 4])
p my_method([5, 6, 7])

# expected output:
# []
# [21]
# [9, 16]
# [25, 36, 49]