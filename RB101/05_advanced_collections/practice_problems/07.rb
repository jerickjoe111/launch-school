# Practice Problems: Sorting, Nested Collections and Working with Blocks.

# Lucas Sorribes, July 2022.

# 7. Given this code, what would be the final values of a and b? Try to work this out without running the code.

a = 2
b = [5, 8]
arr = [a, b]

arr[0] += 2 # a is still 2. the += means a reassigning operation, we are not resetting a, but the array: we set the value of a + 2, 4, as the array's first element, not a.
            # now the array arr is [4, (b)[5,8]]
arr[1][0] -= a # -= is also a reassigning operation, but in this case, b pointing to an array, we are modifying the array object itself that the variable points to, and not reassigning the
               # variable to an integer or a new array as we did with a (arr[0] was an alternative way to refer to a)

               # The final result is: 
               # a = 2
               # b = [3, 8]
               # arr = [4, [3, 8]]
                    
