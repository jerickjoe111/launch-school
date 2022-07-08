# Practice Problems: Sorting, Nested Collections and Working with Blocks.

# Lucas Sorribes, July 2022.

# 10. Given the following data structure and without modifying the original array, use the map method to return 
#     a new array identical in structure to the original but where the value of each integer is incremented by 1.

original_array = [{a: 1}, {b: 2, c: 3}, {d: 4, e: 5, f: 6}]

new_array = original_array.map do |hash|
              hash.map do |key, value|
                [key, value += 1]
              end.to_h
            end
