
# loop

def my_loop
  yield while true
end


# times

# Version 1

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

# Version 2

def my_times(number)
  counter = 0
  until counter == number
    yield(counter)
    counter += 1
  end
  number
end

# each 

# Version 1

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

# Version 2

def my_each(array)
  last_index = array.size - 1
  counter = 0
  while counter <= last_index
    yield array[counter]
    counter += 1
  end
  array
end


# map

# Version 1

module Enumerable
  def my_map
    output_array = []
    self.my_each { |element| output_array << yield(element) }
    output_array
  end
end

# Version 2

def my_map(input_array)
  output_array = []
  my_each(input_array) { |element| output_array << yield(element) }
  output_array
end


# select

# Version 1

module Enumerable
  def my_select
    output_array = []
    self.my_each { |element| output_array << element if yield(element) }
    output_array
  end
end

# Version 2

def my_select(collection)
  output_array = []
  collection.my_each { |element| output_array << element if yield(element) }
  output_array
end


# reduce 

# Version 1

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


# Version 1

module Enumerable
  def my_find
    self.each { |element| return element if yield(element) }
  end
end

# Version 2

def my_find(collection)
  collection.each { |element| return element if yield(element) }
end


# reject

# Version 1

module Enumerable
  def my_reject
    output_array = []
    self.my_each { |element| output_array << element unless yield(element) }
    output_array
  end
end

# Version 2

def my_reject(collection)
  output_array = []
  collection.my_each { |element| output_array << element unless yield(element) }
  output_array
end


# reverse_each

# Version 1

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

# Version 2

def my_reverse_each(collection)
  last_index = collection.size - 1
  counter = last_index
  while counter >= 0
    yield collection[counter]
    counter -= 1
  end
  collection
end