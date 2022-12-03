# Exercise 03

# https://launchschool.com/exercises/c7f39d55

def gather(list)
  puts "Let's start gathering food."
  yield(list)
  puts "Nice selection of food we have gathered!"
end

items = ['apples', 'corn', 'cabbage', 'wheat']

gather(items) { |vegetables| puts vegetables }
