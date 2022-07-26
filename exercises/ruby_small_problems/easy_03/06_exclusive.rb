def xor?(expression_1, expression_2)
  return true if expression_1 && !expression_2
  return true if expression_2 && !expression_1
  false
end

puts xor?(5.even?, 4.even?) == true
puts xor?(5.odd?, 4.odd?) == true
puts xor?(5.odd?, 4.even?) == false
puts xor?(5.even?, 4.odd?) == false