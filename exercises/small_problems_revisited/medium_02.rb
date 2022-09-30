# 01

def longest(text)
  text.split(/\.|\?|\!/).max_by { |sentence| sentence.split.size }.split.size
end

# 08

def featured(number)
  loop do
    break if number >= 9_999_999_999
    number += 1
    return number if featured?(number)
  end

  nil 
end

def featured?(number)
  number.odd? &&
  number % 7 == 0 &&
  number.digits.uniq == number.digits
end

# 09

# Bubble sort:

# 1. for every integer in input array
#     - set swap counter to 0
#         - compare each integer a with every other integer b
#         - if integer a is greater than integer b:
#             - swap places
#             - add one to swap counter
#     - stop iterating when swap counter is equal to 0


def bubble_sort!(array)
  last_index = array.size

  loop do
    counter_a = 0
    counter_b = 1
    swap_counter = 0

    loop do
      break if counter_b == last_index

      if array[counter_a] > array[counter_b]
        array[counter_a], array[counter_b] = array[counter_b], array[counter_a]
        swap_counter += 1
      end

      counter_a += 1
      counter_b += 1
    end

    break if swap_counter.zero?
  end

  array
end

# 10

def sum_square_difference(n)
  range = [*(1..n)]
  
  (range.sum ** 2) - (range.map { |i| i ** 2 }.sum)
end


