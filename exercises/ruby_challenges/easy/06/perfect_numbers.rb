# https://launchschool.com/exercises/48ffdb7b

class PerfectNumber
  def self.classify(number)
    raise StandardError, 'The number must be positive.' if number < 1

    aliquot_sum = divisors(number).sum
    if aliquot_sum > number then 'abundant'
    elsif aliquot_sum < number then 'deficient'
    else 'perfect'
    end
  end

  # This idiom creates a private class method:
  class << self
    private

    def divisors(number)
      (1...number).each_with_object([]) do |divisor, divisors|
        divisors << divisor if (number % divisor).zero?
      end
    end
  end  
end

