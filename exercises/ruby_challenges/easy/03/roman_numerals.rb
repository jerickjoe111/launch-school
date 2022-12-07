# Write some code that converts modern decimal numbers into their 
# Roman number equivalents.

class RomanNumeral
  ROMANS = {
    "M" => 1000, "CM" => 900, "D" => 500, "CD" => 400, "C" => 100,
    "XC" => 90,  "L" => 50,  "XL" => 40,  "X" => 10,
    "IX" => 9,   "V" => 5,   "IV" => 4,   "I" => 1
  }.to_a.freeze

  attr_reader :arabic

  def initialize(arabic)
    @arabic = arabic
  end
  
  def to_roman
    number = arabic
    
    ROMANS.each_with_object('') do |(roman_symbol, arabic_value), output_string|
      quotient, number = number.divmod(arabic_value)
      
      output_string << roman_symbol * quotient
    end
  end
end


