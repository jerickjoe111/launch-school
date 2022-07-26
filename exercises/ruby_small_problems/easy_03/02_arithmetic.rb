
puts "Enter the first number: "
number_01 = gets.chomp.strip.to_i

number_02 = ""
loop do
  puts "Enter the second number: "
  number_02 = gets.chomp.strip.to_i
  break if number_02 != 0
  puts "The second number can't be 0." 
end

puts "#{number_01} + #{number_02} = #{number_01 + number_02}"
puts "#{number_01} - #{number_02} = #{number_01 - number_02}"
puts "#{number_01} * #{number_02} = #{number_01 * number_02}"
puts "#{number_01} / #{number_02} = #{format("%.4f", number_01 / number_02)}"
puts "#{number_01} % #{number_02} = #{number_01 % number_02}"
puts "#{number_01} ** #{number_02} = #{number_01**number_02}"