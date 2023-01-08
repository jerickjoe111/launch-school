# Assignment 01: build your own version of `Array#select`

# Option A:
class Array
  def my_select
    accumulator = []

    each { |element| accumulator << element if yield(element) }

    accumulator
  end
end

array = [1, 2, 3, 4, 5]

array.select { |num| num.odd? }      # => [1, 3, 5]
array.select { |num| puts num }      # => [], because "puts num" returns nil and evaluates to false
array.select { |num| num + 1 }       # => [1, 2, 3, 4, 5], because "num + 1" evaluates to true

# Option B:
def my_select(array)
  accumulator = []

  array.each { |element| accumulator << element if yield(element) }

  accumulator
end

my_select(array) { |num| num.odd? }      # => [1, 3, 5]
my_select(array) { |num| puts num }      # => []
my_select(array) { |num| num + 1 }       # => [1, 2, 3, 4, 5],