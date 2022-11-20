# 01. Define your own version of `loop`

def my_loop
  yield while true
end

# my_loop { puts "!" }

# When the method yields to the block, the code in the block runs, and then
# control returns to the method. Yielding isn't the same as returning from
# a method. Yielding takes place while the method is still running. After
# the code block executes, control returns to the method at the statement
# immediately following the call to `yield`


# 02. Define your own version of `times`
class Integer
  def my_times
    c = 0
    while c < self
      yield c
      c += 1
    end
    self
  end
end

# 3.my_times { |i| puts "I'm on iteration ##{i}" }

# Notice we can pass arguments to `yield`, and those arguments are bound to the
# block parameter on each iteration.


# 03. Define your own version of `each`

class Array
  def my_each
    c = 0
    array_size = size
    while c < array_size
      yield self[c]
      c += 1
    end
    self
  end
end

# [1, 2, 3].my_each { |element| puts "Hi, this is the element ##{element}" }


# 04. Define your own version of `map`

class Array
  def my_map
    c = 0
    array_size = size
    accumulator = []
    while c < array_size
      accumulator << yield(self[c])
      c += 1
    end
    accumulator
  end
end

# p [1, 2, 3].my_map { |element| element * 3}


# 05. Build your own version of `map` on top of your own version of `each`

class Array
  def my_each
    c = 0
    array_size = size
    while c < array_size
      yield self[c]
      c += 1
    end
    self
  end

  def my_map
    accumulator = []
    my_each { |element| accumulator << yield(element) }
    accumulator
  end
end

p [1, 2, 3].map { |element| element * 3 }