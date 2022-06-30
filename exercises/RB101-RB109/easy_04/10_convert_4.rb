ASCII_ZERO = 48

def integer_to_string(number)
  number.digits.reverse.join
end

def integer_to_string_v2(number)
  number.digits.reverse.map { |number| (number + ASCII_ZERO).chr }.join
end

def integer_to_string_v3(number)
  string = ""
  number.digits.reverse.each { |digit| string << (digit + ASCII_ZERO).chr }
  string
end

def signed_integer_to_string(number)
  if number < 0
    "-" + integer_to_string(number.abs)
  elsif number > 0
    "+" + integer_to_string(number)
  else
    "0"
  end
end
