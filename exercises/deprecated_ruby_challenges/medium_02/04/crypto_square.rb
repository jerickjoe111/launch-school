class Crypto
  attr_reader :raw_input

  def initialize(raw_input)
    @raw_input = raw_input
  end

  def normalize_plaintext
    raw_input.downcase.delete '^a-z', '^0-9'
  end

  def size
    Math.sqrt(normalize_plaintext.size).ceil
  end

  def plaintext_segments
    normalize_plaintext.scan(/\w{1,#{size}}/)
  end

  def ciphertext
    last_index = plaintext_segments.first.size - 1
    (0..last_index).each_with_object('') do |index, output_string|
      plaintext_segments.each do |segment|
        character = segment[index]
        output_string << character if character
      end
    end
  end

  def normalize_ciphertext
    segments = plaintext_segments
    segments[-1] = segments[-1].ljust(size)
    segments.map(&:chars).transpose.map { |segment| segment.join.strip }.join(' ')
  end
end
