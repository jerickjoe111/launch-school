# Exercise 04

# https://launchschool.com/exercises/8621919c

def birds(birds_array)
  yield(birds_array)
end

list = %w(raven finch hawk eagle)

birds(list) { |_, _, *raptors| puts raptors }