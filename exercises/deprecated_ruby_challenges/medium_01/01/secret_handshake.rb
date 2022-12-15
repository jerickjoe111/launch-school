
class SecretHandshake
  CODES = {
    16 => 'reverse',
    8 => 'jump',
    4 => 'close your eyes',
    2 => 'double blink',
    1 => 'wink'
  }.freeze

  attr_accessor :integer

  def initialize(integer)
    @integer = integer.to_i
  end

  def commands
    output_array = []

    reverse_counter = integer == 3 ? 1 : 0
    until integer.zero?
      CODES.each do |code, action|
        if (integer - code) >= 0
          action != 'reverse' ? output_array << action : reverse_counter + 1
          self.integer -= code
        end
      end
    end

    reverse_counter.times do
      output_array.reverse!
    end
    
    output_array
  end
end

