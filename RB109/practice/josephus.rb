
# >>>>>> Problem

# You are now to create a function that returns a Josephus permutation, 
# taking as parameters:

# the initial array/list of items to be permuted *as if they were in a circle* 

# k: items will be counted out every k places until none remained.

# Task is to return an array where the elements from an input array are collected 
# as they are removed every (n) element until the input array is empty.


# input: an array of integers, an integer k

# output: an array of integers


# >>>>>> Caveats

# Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0..n-1; k will always be >=1.

# >>>>>> Examples and test cases

# For example, with n=7 and k=3 josephus(7, 3) should act this way.

# [1, 2, 3, 4, 5, 6, 7] - initial sequence
# [1, 2, 4, 5, 6, 7] => 3 is counted out and goes into the result [3]
# [1, 2, 4, 5, 7] => 6 is counted out and goes into the result [3, 6]
# [1, 4, 5, 7] => 2 is counted out and goes into the result [3, 6, 2]
# [1, 4, 5] => 7 is counted out and goes into the result [3, 6, 2, 7]
# [1, 4] => 5 is counted out and goes into the result [3, 6, 2, 7, 5]
# [4] => 1 is counted out and goes into the result [3, 6, 2, 7, 5, 1]
# [] => 4 is counted out and goes into the result [3, 6, 2, 7, 5, 1, 4]
# So our final result is:

# josephus([1, 2, 3, 4, 5, 6, 7], 3) == [3, 6, 2, 7, 5, 1, 4]

# >>>>>> Data Structures + Possible methods/ to use

# we will modify the array while we are mutating it (removing items)

# % array.size

# until

# >>>>>> Algorithm

# 1. init. output array

# 2. set `index` to k - 1

# 2. until the input array is empty:
#     - remove character at `index` index position and store it in ouput array
#     - add k to `index` modulo current array size:
#         if `index` >= current array size: index = index % current array size

# 3. return output array

# >>>>>> Code

def josephus(array, k)
  array = array.dup
  output_array = []

  index = k - 1
  until array.empty?
    current_array_size = array.size
    index %= current_array_size if index >= current_array_size
    
    output_array << array.slice!(index)
    
    index += k - 1
  end

  output_array
end
