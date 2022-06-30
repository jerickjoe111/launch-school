ASCII_ZERO = 48

def integer_to_string(number)
  number.digits.reverse.join
end

def integer_to_string_v2(number)
  number.digits.reverse.map { |number| (number + ASCII_ZERO).chr }.join
end

