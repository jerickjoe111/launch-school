# prime:

# only divisible between 1 and itself

class Prime
  FIRST_PRIME = 2

  def self.nth(nth_prime)
    raise ArgumentError if nth_prime.zero?
    
    prime = FIRST_PRIME
    counter = 1
    loop do
      return prime if counter == nth_prime
      prime += 1
      prime += 1 until prime?(prime)
      counter += 1
    end
  end

  class << self
    private

    def prime?(number)
      (2..number - 1).none? { |divisor| (number % divisor).zero? }
    end
  end
end


p Prime.nth(6)