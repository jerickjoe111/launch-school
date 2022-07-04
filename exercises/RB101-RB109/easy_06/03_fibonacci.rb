# input: integer (number of digits)
# output: integer (index position of first number to have required number of digits)

# DS: build an array of fibonacci numbers

# Algorithm:
# 1- initialize an empty array called fibonacci_numbers
# 2- calculate one fibonacci number
# 3- add the number to fibonacci_numbers
# 4- check if last number in fibonacci_numbers has required number of digits
#   - if no: go back to step 2
#   - if yes: return index of last number in fibonacci_numbers


# stratchpad

# .digits.size?

# .index

def fibonacci(number)
  return number if number <= 1

  fibonacci( number - 1) + fibonacci(number - 2)
end

def find_fibonacci_index_by_length(number_of_digits)
  fibonacci_numbers = []
  
  counter = 1
  loop do
    fibonacci_numbers << fibonacci(counter)
    break if fibonacci_numbers.last.digits.size == number_of_digits
    counter += 1
  end

  fibonacci_numbers.size
end

# Without recursion
def find_fibonacci_index_by_length(number_of_digits)
  fibonacci_numbers = [1, 1]
  
  counter = 1
  loop do
    fibonacci_numbers << fibonacci_numbers[counter] + fibonacci_numbers[counter - 1]

    break if fibonacci_numbers.last.digits.size == number_of_digits
    counter += 1
  end

  fibonacci_numbers.size
end

puts find_fibonacci_index_by_length(2) == 7          # 1 1 2 3 5 8 13
puts find_fibonacci_index_by_length(3) == 12         # 1 1 2 3 5 8 13 21 34 55 89 144
puts find_fibonacci_index_by_length(100)