METERS_TO_FEET = 10.7639

puts "Enter the length of the room in meters: "
length = gets.to_f

puts "Enter the width of the room in meters: "
width = gets.to_f

area = length * width

puts "The area of the room is #{area.round(2)} square meters (#{(area * METERS_TO_FEET).round(2)} square feet)."
