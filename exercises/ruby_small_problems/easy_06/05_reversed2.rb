# Algorithm:

# 1. return a copy of the original array if the array is empty or if has just one element.
# 2. Initialize new empty array
# 2. Initialize counter: -1
# 3. populate new array loop:
#   - add element at counter index position in original array to new array
#   - reduce counter by 1
#   - check if counter has reached the negative array size (in other word, if the loop has run as many times as elements of the array)
#     - if yes: break from the loop
#     - if no: go back to step 3
# 4. return populated new array


def reverse(array)
  if array.empty? || array.size == 1
    new_array = array
    return new_array
  end

  new_array = []

  array_limit = -array.size

  index = -1
  while index >= array_limit
    new_array << array[index]
    index -= 1
  end

  new_array
end
