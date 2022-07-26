puts "What is the bill?"
bill = gets.to_f

puts "What is the tip percentage?"
percentage = gets.to_f

tip = (percentage / 100) * bill

puts "The tip is $#{format('%.2f', tip)}"
puts "The total is $#{format('%.2f', bill + tip)}"
