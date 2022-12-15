class Luhn
  def self.create(number)
    counter = 0
    loop do
      number = (number.to_s << counter.to_s).to_i
      break if self.new(number).valid?    

      number = number.to_s[0..-2].to_i
      counter += 1
    end

    number
  end

  attr_reader :number
  
  def initialize(number)
    @number = number.to_i
  end

  def addends
    double_counter = 0
    number.digits.each_with_object([]) do |digit, output_array|
      output_array.unshift(
        if double_counter.odd?
          digit *= 2
          digit >= 10 ? digit - 9 : digit
        else
          digit
        end
      )

      double_counter += 1
    end
  end

  def checksum
    addends.join.to_i.digits.sum
  end

  def valid?
    (checksum % 10).zero?
  end
end
