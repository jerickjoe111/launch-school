# https://launchschool.com/exercises/2a5d5a4e

# >>>>>> Problem

# Write a method that takes an Array as an argument, 
# and sorts that Array using the bubble sort algorithm 
# as just described. Note that your sort will be "in-place"; 
# that is, you will mutate the Array passed as an argument. 

# input: an array

# output: that same array with sorted elements

# >>>>>> Caveats

# You may assume that the Array contains at least 2 elements.


# >>>>>> Examples and test cases

# array = [5, 3]
# bubble_sort!(array)
# array == [3, 5]

# array = [6, 2, 7, 1, 4]
# bubble_sort!(array)
# array == [1, 2, 4, 6, 7]

# array = %w(Sue Pete Alice Tyler Rachel Kim Bonnie)
# bubble_sort!(array)
# array == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)


# >>>>>> Data Structures + Methods

# we will modify the original array

# >>>>>> Algorithm

# 1. for all integers in input array minus the last one:
#     - set swap_count to 0
#     - compare current integer with next integer:
#       - if current integer is greater than the next: 
#           - add 1 to swap count
#           - swap places
#       - else: skip to next integer

# 2. if swap count is 0, return array. Else, go back to step 1

# >>>>>> Code

def bubble_sort!(array)

  loop do
    counter = 0
    swap_count = 0

    loop do
      if array[counter] > array[counter + 1]
        swap_count += 1
        array[counter], array[counter + 1] = array[counter + 1], array[counter]
      end
      
      break if counter == array.size - 2
      
      counter += 1
    end    

    break if swap_count == 0
  end

  array
end
