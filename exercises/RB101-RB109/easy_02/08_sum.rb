integer = ""
loop do
  print "Please enter an integer greater than 0: "
  integer = gets.chomp.strip.to_i
  break if integer > 0
end

operation = ""
loop do
  print "Enter 's' to compute the sum, 'p' to compute the product: "
  operation = gets.chomp.strip.downcase
  break if %w{s p}.include?(operation)
end

case operation
when "s"
  sum = 0
  (1..integer).each { |number| sum += number }
  puts "The sum of the integers between 1 and #{integer} is #{sum}."
when "p"
  product = 1
  (1..integer).each { |number| product *= number }
  puts "The product of the integers between 1 and #{integer} is #{product}."
end
