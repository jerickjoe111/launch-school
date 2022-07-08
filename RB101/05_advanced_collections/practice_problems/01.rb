# Practice Problems: Sorting, Nested Collections and Working with Blocks.

# Lucas Sorribes, July 2022.

# 1. How would you order this array of number strings by descending numeric value?

arr = ['10', '11', '9', '7', '8']

arr.sort! {|num_1, num_2| num_2.to_i<=> num_1.to_i }