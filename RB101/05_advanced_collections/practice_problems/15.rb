# Practice Problems: Sorting, Nested Collections and Working with Blocks.

# Lucas Sorribes, July 2022.

# 15. Given this data structure write some code to return an array which contains only 
#     the hashes where all the integers are even.

arr = [{a: [1, 2, 3]}, {b: [2, 4, 6], c: [3, 6], d: [4]}, {e: [8], f: [6, 10]}]

selected_array = arr.select do |hash|
                   hash.all? do |_, hash_array|
                     hash_array.all? do |integer|
                       integer.even?
                     end                    
                   end
                 end

                 