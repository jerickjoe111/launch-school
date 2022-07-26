# input: an Array
# output: the same array after being mutated (reversed elements)
# rules: reverse methods not allowed


# DS: buffer variable that will keep one of the elements while being position swapped in original Array

# Algorithm: 
# 1. return empty array if the array is empty
# 2. store middle index position of array ( size of the array / 2)
# 3. initialize counter of the firt element to be swapped (0)
# 4. initialize counter of the second element to be swapped (-1)
# 5. swap position loop:
#   - store second element in buffer variable
#   - copy first element to second element position
#   - copy buffer element to first element position
#   - augment first element counter by 1
#   - reduce second element counter by 1
#   - check if first element is more than the middle position:
#     - if yes: break from the loop
#     - if no: go back to step 5
# 6. return array


def reverse!(array)
  return array if array.empty? || array.size == 1

  array_middle = array.size / 2

  index_a = 0
  index_b = -1
  loop do
    buffer = array[index_b]
    array[index_b] = array[index_a]
    array[index_a] = buffer

    index_a += 1
    index_b -= 1

    break if index_a == array_middle
  end

  array
end
