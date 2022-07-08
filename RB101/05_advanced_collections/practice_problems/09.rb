# Practice Problems: Sorting, Nested Collections and Working with Blocks.

# Lucas Sorribes, July 2022.

# 9. Given this data structure, return a new array of the same structure but with the sub arrays being ordered 
#    (alphabetically or numerically as appropriate) in descending order.

arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']]

sorted_array = arr.map do |sub_array|
              sub_array.sort do |item_a, item_b|
                item_b <=> item_a
              end
            end

