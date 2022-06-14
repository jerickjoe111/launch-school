SQMETERS_TO_SQFEET = 10.7639
SQFEET_TO_SQINCHES = 144
SQFEET_TO_SQCM = 6.452

puts "Enter the length of the room in feet:"
length = gets.to_f

puts "Enter the width of the room in feet:"
width = gets.to_f

sq_feet = (length * width).round(2)

puts "The area of the room is:
#{sq_feet} square feet,
#{(sq_feet * SQFEET_TO_SQINCHES).round(2)} square inches,
and #{(sq_feet * SQFEET_TO_SQCM).round(2)} square centimeters."
