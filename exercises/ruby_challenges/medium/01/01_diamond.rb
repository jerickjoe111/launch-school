class Diamond
  ALPHABET_LETTERS = 26
  INNERSPACES = [*(0..ALPHABET_LETTERS * 2)].select { |i| i.zero? || i.odd? }
  ASCI_LETTER_OFFSET = 64

  def self.make_diamond(letter)
    system 'clear'
    raise ArgumentError, 'Must be a letter.' unless letter.match?(/[A-Za-z]{1}/)
    number = letter_to_number(letter)
    top_diamond(0, number)
    bottom_diamond(1, number - 1)
  end

  class << self
    private
  
    def top_diamond(row, number)
      return if number < 1
    
      top_diamond(row + 1, number - 1)
    
      print ' ' * row
      if number == 1
        puts number_to_letter(number)
      else
        print number_to_letter(number)
        print ' ' * INNERSPACES[number - 1]
        puts number_to_letter(number)
      end
    end

    def bottom_diamond(row, number)
      return if number < 1
     
      print ' ' * row
      if number == 1
        puts number_to_letter(number)
      else
        print number_to_letter(number)
        print ' ' * INNERSPACES[number - 1]
        puts number_to_letter(number)
      end

      bottom_diamond(row + 1, number - 1)
    end
    
    def letter_to_number(letter)
      letter.upcase.ord - ASCI_LETTER_OFFSET
    end
    
    def number_to_letter(number)
      (number + ASCI_LETTER_OFFSET).chr
    end
  end
end
