# Practice Problems: Sorting, Nested Collections and Working with Blocks.

# Lucas Sorribes, July 2022.

# 11. Given the following data structure use a combination of methods, including either the select or reject method, 
#     to return a new array identical in structure to the original but containing only the integers that are multiples of 3.

original_array = [[2], [3, 5, 7], [9], [11, 13, 15]]

new_array = original_array.map do |sub_array|
              sub_array.select do |integer|
                integer % 3 == 0
              end
            end
