SQMETERS_TO_SQFEET = 10.7639

puts "Enter the length of the room in meters: "
length = gets.to_f

puts "Enter the width of the room in meters: "
width = gets.to_f

sq_meters = length * width

puts "The area of the room is:
#{sq_meters.round(2)} square meters
#{(sq_meters * SQMETERS_TO_SQFEET).round(2)} square feet."
