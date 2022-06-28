# Practice Problems: Medium 1

# Lucas Sorribes, June 2022.

# Question 1

  10.times { |times| puts (" " * times) + "The Fintstones Rock!" }

# Question 2

  # You are using the method "+" to output concatenated strings, but the second element of the expression (40 + 2) is not a string,
  # but evaluates to an integer. This method only accepts strings as arguments.
  
  # First possible solution:

  puts "the value of 40 + 2 is " + (40 + 2).to_s

  # Second possible solution:

  puts "the value of 40 + 2 is #{40 + 2}"

# Question 3

  # How can you make this work without using begin/end/until? 

  def factors(number)
    divisor = number
    factors = []
    while divisor > 0
      factors << number / divisor if number % divisor == 0
      divisor -= 1
    end
    factors
  end

  # 1. number % divisor == 0 checks if divisor is a factor of number

# Question 4

  # The first version modifies the caller using the << method, while the second version does not 
  # (+ is not a caller-mutating method)

# Question 5
  limit = 15

  def fib(first_num, second_num, limit)
    while first_num + second_num < limit
      sum = first_num + second_num
      first_num = second_num
      second_num = sum
    end
    sum
  end

  result = fib(0, 1, limit)
  puts "result is #{result}"

# Question 6

  # 34

# Question 7

  # Yes, it will modify the original hash. Having passed the reference to the hash via a variable to the method as an argument, 
  # the method resets each value with the []= setter method, modifying the hash which the argument passed is pointing to. 

# Question 8

  # "paper"

# Question 9

  # "no"

