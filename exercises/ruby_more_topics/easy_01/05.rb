# Exercise 05

class Rot13Decipher
  A_UPPER_VALUE = 'A'.ord
  A_DOWN_VALUE = 'a'.ord
  ALPHABET_LETTERS = [*('a'..'z')].size
  ROTATION = 13

  def decipher_file(input_file)
    encrypted_names = input_file.readlines.map(&:chomp)
    unencrypted_names = encrypted_names.map { |name| decipher(name) }

    output_file = File.new('05_unencrypted_pyoneers.txt', 'w')

    unencrypted_names.each do |name|
      output_file.puts name
    end

    output_file.close
    input_file.close
  end

  def decipher(input_string)
    input_string.chars.map do |character|
      character.match?(/[a-z]/i) ? unrotate(character) : character
    end.join
  end

  def unrotate(input_letter)
    reset_value = input_letter.match?(/[A-Z]/) ? A_UPPER_VALUE : A_DOWN_VALUE

    rotated_letter_code = input_letter.ord - reset_value
    new_letter_code = (rotated_letter_code - ROTATION) % ALPHABET_LETTERS
    unrotated_letter_code = new_letter_code + reset_value

    unrotated_letter_code.chr
  end
end

Rot13Decipher.new.decipher_file(File.open('05_encrypted_pyoneers.txt'))
