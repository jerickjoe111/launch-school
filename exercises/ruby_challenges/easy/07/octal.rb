# https://launchschool.com/exercises/fb0821cc

# Implement octal to decimal conversion. 
# Given an octal input string, your program 
# should produce a decimal output. 
# Treat invalid input as octal 0.

# Note: Implement the conversion yourself. 
# Don't use any built-in or library methods 
# that perform the necessary conversions for 
# you. In this exercise, the code necessary to 
# perform the conversion is what we're looking for.

# A number in base 8 can be understood as a linear combination of powers of 8:

# The rightmost digit gets multiplied by 8^8 = 1
# The next digit gets multiplied by 8^1 = 8
# The digit after that gets multiplied by 8^2 = 64
# The digit after that gets multiplied by 8^3 = 512
# ...
# The n*th* digit gets multiplied by 8^n-1.
# All of these values are then summed.


class Octal
  attr_reader :octal_string

  def initialize(octal_string)
    @octal_string = octal_string
  end

  def to_decimal
    return 0 unless valid?

    decimal = 0
    octal_string.chars.reverse.each_with_index do |octal_char, index|
      decimal += octal_char.to_i * (8**index)
    end
    decimal
  end

  private
  def valid?
    !octal_string.match?(/[\D89]/)
  end
end

p Octal.new('233').to_decimal