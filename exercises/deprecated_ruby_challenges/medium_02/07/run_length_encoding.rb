class RunLengthEncoding
  def self.encode(input)
    character_groups = input.gsub(/(.)\1*/).to_a

    character_groups.each_with_object('') do |group, output_string|
      compressed_sequence = 
      if group.size == 1 then group[0]
      else group.size.to_s + group[0]
      end
      
      output_string << compressed_sequence
    end
  end

  def self.decode(input)
    sequences = input.scan(/\d*.{1}/)

    sequences.each_with_object('') do |sequence, output_string|
      multiplier = sequence.match?(/\d/) ? sequence.scan(/\d+/).first.to_i : 1
      character = sequence.scan(/[^\d]/).first

      output_string << character * multiplier
    end
  end
end
