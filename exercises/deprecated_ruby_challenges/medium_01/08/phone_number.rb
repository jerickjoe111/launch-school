# frozen_string_literal: true

# Cleans up user-entered phone numbers
class PhoneNumber
  attr_reader :number

  def initialize(number)
    @number = filter(number)
  end

  def area_code
    number[0, 3]
  end

  def to_s
    "(#{number[0, 3]}) #{number[3, 3]}-#{number[6, 4]}"
  end

  private

  def filter(number_string)
    if invalid?(number_string) then '0000000000'
    else extract(number_string)
    end
  end

  def invalid?(number_string)
    number_of_digits = number_string.scan(/\d/).size

    number_of_digits < 10 ||
      number_of_digits > 11 ||
      number_string.match?(/[^\d. ()-]/) ||
      (number_of_digits == 11 && number_string[0] != '1')
  end

  def extract(number_string)
    digits = number_string.scan(/\d/).join

    digits.size == 11 ? digits[1..-1] : digits
  end
end
