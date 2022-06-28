
numbers_array = []
last_number = ""

6.times do |times|
  if times < 5
    puts "Enter the number ##{times + 1}: "
    numbers_array << gets.chomp.strip.to_i
  else
    puts "Enter the last number: "
    last_number = gets.chomp.strip.to_i
  end
end

if numbers_array.include?(last_number)
  puts "The number #{last_number} appears in #{numbers_array.inspect}."
else
  puts "The number #{last_number} does not appear in #{numbers_array.inspect}."
end