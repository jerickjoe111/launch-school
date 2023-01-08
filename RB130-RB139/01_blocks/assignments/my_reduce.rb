# Assignment 02: Build your own version of `Enumerable#reduce`

# Documentation definition:

# If you specify a block, then, for each element in the caller/receiver object, the block 
# is passed an accumulator value (memo) and the element.
# (...) the result becomes the new value for memo. 
# At the end of the iteration, the final value of memo is the 
# return value for the method.

# If you do not explicitly specify an initial value for memo, 
# then the first element of collection is used as the initial value of memo.

# Option A:
module Enumerable
  def my_reduce(accumulator_argument=nil)
    if accumulator_input
      accumulator = accumulator_input
      range = (0..-1)
    else
      accumulator = self[0]
      range = (1..-1)
    end
      
    self[range].each { |element| accumulator = yield(accumulator, element) }
    
    accumulator
  end
end


# Option B:
def my_reduce(array, accumulator_argument=nil)
  if accumulator_argument
    accumulator = accumulator_argument
    range = (0..-1)
  else
    accumulator = array[0]
    range = (1..-1)
  end
  
  array[range].each { |element| accumulator = yield(accumulator, element) }

  accumulator
end