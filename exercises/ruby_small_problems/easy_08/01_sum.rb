# Write a method that takes an Array of numbers and then returns the sum of the sums 
# of each leading subsequence for that Array. You may assume that the Array always 
# contains at least one number.

=begin

input: array
output: integer (sum of the sums of each leading subsequence for input array)


Recursive structure: 

integer at index position (IP) 0
+
integer at IP 0 + integer at IP 1
+
integer at IP 0 + integer at IP 1 + integer at IP 2
+
integer at IP 0 + integer at IP 1 + integer at IP 2 + integer at IP 3
(...)

Examples: 

sum_of_sums([3, 5, 2]) == (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
sum_of_sums([1, 5, 7, 3]) == (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
sum_of_sums([4]) == 4
sum_of_sums([1, 2, 3, 4, 5]) == 35

! Input array will always contain at least one integer !

Algorithm:
(I want to write a recursive method)

Non recursive algorithm:

1. Return sum of the array if the array size is 1
2. initialize accumulator sum to 0
3. initiallze counter to 0
4. define a loop to iterate n number of times, where n is the size of the input array
    - on each iteration, reset accumulator to the sum of all integers from 0 to index position equal to counter (range 0 to counter)
5. return accumulator

=end

def sum_of_sums(array)
  return array[0] if array.size == 1

  sum = 0
  counter = 0
  loop do
    break if counter == array.size

    sum += array[0..counter].sum

    counter += 1
  end

  sum
end