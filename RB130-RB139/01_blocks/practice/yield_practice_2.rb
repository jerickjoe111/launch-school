# Write your own versions of this methods:
# loop, times, each, map, select, reduce.

# loop

def my_loop
  yield while true
end

# my_loop { puts '!' }

# Here we invoke the `my_loop` method on `main`, passing an implicit
# block. Then, execution passes to the `my_loop` definition on lines 8-10,
# in which the `while` condition, being `true`, will be satisfied an infinite number of times,
# so `yield` is invoked continuosly. 

# When `yield` is invoked from within the method definition,
# control passes to the block, the code inside it is executed, and then controls returns
# to the method definition, to the immediate expression after the `yield` invocation,
# after `yield` itself has returned the block return value (`nil`, from the call to `puts`),
# here ignored by the method.

# Because the `while` condition will be permanently satisfied, this cycle will be repeated
# ad infinitum, and we will see infinite lines of the string `!` until we stop the program

# times

# version 1

class Integer
  def my_times
    counter = 0
    until counter == self
      yield(counter)
      counter += 1
    end
    self
  end
end

# p 3.my_times { |i| puts i }

# version 2

def my_times(number)
  counter = 0
  until counter == number
    yield(counter)
    counter += 1
  end
  number
end

# p my_times(3) { |i| puts i }

# each 

# yield each element to the block, one at a time
# ignores the block's return value
# returns self (collection object)

# version 1

module Enumerable
  def my_each
    last_index = self.size - 1
    counter = 0
    while counter <= last_index
      yield self[counter]
      counter += 1
    end
    self
  end
end

# p [1, 2, 3].my_each { |i| puts i }

# version 2

def my_each(array)
  last_index = array.size - 1
  counter = 0
  while counter <= last_index
    yield array[counter]
    counter += 1
  end
  array
end

# p my_each([1, 2, 3]) { |i| puts i}

# map

# yields every element in collection object, one at a time
# populates a new array with corresponding returned value from yield (the block's return value)
# returns new array

module Enumerable
  def my_map
    output_array = []
    self.my_each { |element| output_array << yield(element) }
    output_array
  end
end

# p [1, 2, 3].my_map { |i| i * 10}

def my_map(input_array)
  output_array = []
  my_each(input_array) { |element| output_array << yield(element) }
  output_array
end

# p my_map([1, 2, 3]) { |i| i * 10 }

# select

module Enumerable
  def my_select
    output_array = []
    self.my_each { |element| output_array << element if yield(element) }
    output_array
  end
end


# p [1, 2, '3', 4].my_select { |i| i.is_a?(Integer) }

def my_select(collection)
  output_array = []
  collection.my_each { |element| output_array << element if yield(element) }
  output_array
end

# p my_select([1, 2, '3', 4]) { |i| i.is_a?(Integer) }

# reduce 

# Documentation definition:

# If you specify a block, then, for each element in the caller/receiver object, the block 
# is passed an accumulator value (memo) and the element.
# (...) the result becomes the new value for memo. 
# At the end of the iteration, the final value of memo is the 
# return value for the method.

# If you do not explicitly specify an initial value for memo, 
# then the first element of collection is used as the initial value of memo.

# version 1

module Enumerable
  def my_reduce(initial_value=nil)
    if initial_value
      memo = initial_value
      range = (0..-1)
    else
      memo = self[0]
      range = (1..-1)
    end

    self[range].each { |element| memo = yield(memo, element) } if block_given?

    memo
  end
end

# p [1, 2, 3].my_reduce {|sum, n| sum + n }

# Version 2

def my_reduce(collection, initial_value=nil)
  if initial_value
    memo = initial_value
    range = (0..-1)
  else
    memo = collection[0]
    range = (1..-1)
  end

  collection[range].each { |element| memo = yield(memo, element) } if block_given?

  memo
end

# p my_reduce([1, 2, 3]) { |memo, n| memo + n }

# write custom versions of iterators find, reject, reverse_each, each_with_index, each_with_object

# Version 1

module Enumerable
  def my_find
    self.each { |element| return element if yield(element) }
  end
end

# p [1, 3, '9'].my_find { |e| e.is_a?(String) }

# Version 2

def my_find(collection)
  collection.each { |element| return element if yield(element) }
end

# p my_find([1, 3, '9']) { |i| i.is_a?(String) }

# reject

module Enumerable
  def my_reject
    output_array = []
    self.my_each { |element| output_array << element unless yield(element) }
    output_array
  end
end


# p [1, 2, '3', 4].my_reject { |i| i.is_a?(Integer) }

def my_reject(collection)
  output_array = []
  collection.my_each { |element| output_array << element unless yield(element) }
  output_array
end

# reverse_each

module Enumerable
  def my_reverse_each
    last_index = self.size - 1
    counter = last_index
    while counter >= 0
      yield self[counter]
      counter -= 1
    end
    self
  end
end

p [1, 2, 3].my_reverse_each { |e| puts e }



