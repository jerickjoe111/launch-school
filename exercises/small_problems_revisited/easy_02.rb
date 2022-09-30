# 01

# Build a program that randomly generates and prints Teddy's age. 
# To get the age, you should generate a random number between 20 and 200.

# "What is the name?"
# name = gets.chomp.strip
# name = "Teddy" if name.empty?

# "#{name} is #{rand(20..200)} years old!"

# 02

# Build a program that asks a user for the length and width of a room in meters 
# and then displays the area of the room in both square meters and square feet.

# Note: 1 square meter == 10.7639 square feet

# SQMETERS_T0_SQFEET = 10.7639
# SQFEET_TO_SQINCHES = 144
# SQFEET_TO_SQMETERS = 0.092903

# puts "Insert length: "
# length = gets.chomp.strip.to_i

# puts "Insert width: "
# width = gets.chomp.strip.to_i

# area = length * width

# inches_area = area * SQFEET_TO_SQINCHES

# cm_area = (area * SQFEET_TO_SQMETERS) * 100

# puts "Room area in square feet: #{area}"
# puts "Room area in square inches: #{inches_area.round(2)}"
# puts "Room area in square centimeters: #{cm_area.round(2)}"

# 03 

# Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
# The program must compute the tip and then display both the tip and the total amount of the bill.

# puts "What's the bill? "
# bill = gets.chomp.strip.to_i

# puts "What's the tip percentage? "
# tip_percentage = gets.chomp.strip.to_i

# tip = ((tip_percentage * bill) / 100).to_f

# total = bill + tip

# puts format("The tip is $%.2f \nThe total is $%.2f", tip, total)

# 04

# puts "What is your age?"
# age = gets.chomp.strip.to_i

# puts "At what age would you like to retire?"
# retirement_age = gets.chomp.strip.to_i

# current_year = Time.now.year

# years_left = retirement_age - age

# retirement_year = current_year + years_left

# puts format("It's %i. You will retire in %i. \nYou have only %i years of work to go!",
#             current_year, retirement_year, years_left)

# 05

# puts "What's your name?"
# name = gets.chomp.strip.capitalize

# greet = name.match?("!") ? 
#         "HELLO #{name.upcase}. WHY ARE WE SCREAMING?" : 
#         "Hello #{name}"

# puts greet

# 06

# (1..99).each { |i| puts i if i.odd? }

# counter = 1
# while counter < 100
#   puts counter if counter.odd?

#   counter += 1
# end

# 07

# (1..99).each { |i| puts i if i.even? }

# counter = 1
# while counter < 100
#   puts counter if counter.even?

#   counter += 1
# end

# 08 

# Write a program that asks the user to enter an integer greater than 0, then asks if the 
# user wants to determine the sum or product of all numbers between 1 and the entered integer.

# puts "Enter an integer greater than 0:"
# input = gets.chomp.strip.to_i

# puts "Enter 's' to compute the sum, 'p' to compute the product:"
# calculation = gets.chomp.strip

# calculation = calculation == 's' ? 'sum' : 'product'

# result = case calculation
#          when 'sum' then [*(1..input)].sum
#          else [*(1..input)].reduce(&:*)
#          end

# puts format("The %s of the integers between 1 and %i is %i.", calculation, input, result)
