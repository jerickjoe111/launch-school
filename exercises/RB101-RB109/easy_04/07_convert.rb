ASCII_ZERO = 48

def string_to_integer(string)
  digits_array = []
  string.chars.map { |digit| digits_array << digit.ord - ASCII_ZERO }
  digits_array.inject { |accumulator, digit| accumulator * 10 + digit }
end
