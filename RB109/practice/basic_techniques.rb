# >>>> Reverse an array without using the `reverse` method


# Non-mutating version

array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

output_array = []

array.reverse_each { |int| output_array << int }

# Mutating version

array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

counter_a = 0
counter_b = -1
loop do
  array[counter_a], array[counter_b] = array[counter_b], array[counter_a]
  
  counter_a += 1
  counter_b -= 1

  break if counter_a == array.size / 2
end

# >>>> Select the element out of the array if its index is a fibonacci number

# input = an array

# output = an array of integer from input array whose indeces are fibonacci numbers

# 1. calculate all fibonacci numbers between 0 and n, where n is the size of the array - 1
#    store those numbers in an array

# 2. interate through the input array
#    check if the index position of current integer is in the fibonacci numbers array
#       - if yes: store number in output_array

# 3. return output_array

array = [*(1..14)]

def fibonacci(n)
  return 1 if n <= 2

  fibonacci(n - 1) + fibonacci(n - 2)
end

fibonacci_list = []

(1..array.size).each { |number| fibonacci_list << fibonacci(number) }

output_array = []

array.each_with_index do |number, index|
  output_array << number if fibonacci_list.include?(index)
end

# >>>> Write a method to determine if a word is a palindrome without using the reverse method:

# input: a String

# output: a boolean (true if the string is a palindrome)

# palindrome: the word can be read the same backwards as forward

# 1. set counter_a to 0
# 2. set counter_b to -1
# 3. for every character in string from 0 to string size/2 index position:
#     return false unless characters at both counters index position are equal
#     return true

def palindrome?(string)
  string = string.delete(" ")

  counter_a = 0
  counter_b = -1
  loop do 
    return false unless string[counter_a] == string[counter_b]

    counter_a += 1
    counter_b -= 1
    break if counter_a == string.size / 2
  end

  true
end

