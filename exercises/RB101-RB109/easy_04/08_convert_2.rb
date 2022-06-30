ASCII_ZERO = 48

def string_to_integer(string)
  digits_array = []

  string.chars.map { |digit| digits_array << digit.ord - ASCII_ZERO }
  
  digits_array.inject { |accumulator, digit| accumulator * 10 + digit }
end

def string_to_signed_integer(string)
  negative = true if string.start_with?("-")
  string.delete!("+-")

  negative ? -string_to_integer(string) : string_to_integer(string)
end

puts string_to_signed_integer('4321') == 4321
puts string_to_signed_integer('-570') == -570
puts string_to_signed_integer('+100') == 100