require 'time'

puts "What is your age?"
age = gets.to_i

puts "At what age would you like to retire?"
retire_age = gets.to_i

work_years = retire_age - age

current_year = DateTime.now.year

puts "It's #{current_year}. You will retire in #{current_year + work_years}.
You have only #{work_years} years of work to go!"
