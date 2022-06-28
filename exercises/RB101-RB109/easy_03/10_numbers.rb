def palindromic_number?(number)
  number.digits == number.digits.reverse
end
