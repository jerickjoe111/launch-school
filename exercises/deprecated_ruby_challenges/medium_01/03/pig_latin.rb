# frozen_string_literal: true

# Translates words and phrases into pig latin.
class PigLatin
  VOWEL = /\A[aeiou]|xr|yt/i.freeze
  TWO_LETTER_CONSONANTS = /\A(qu|th|yt|ch)/.freeze
  THREE_LETTER_CONSONANTS = /\A(thr|sch|squ)/.freeze

  def self.translate(string)
    string.split.map { |word| to_pig_latin(word) }.join(' ')
  end

  class << self
    private

    def to_pig_latin(word)
      pre_word =
        if word.match?(VOWEL) then word
        elsif word.match?(THREE_LETTER_CONSONANTS)
          word[3..-1] + word[0..2]
        elsif word.match?(TWO_LETTER_CONSONANTS)
          word[2..-1] + word[0..1]
        else
          word[1..-1] + word[0]
        end

      pre_word + 'ay'
    end
  end
end
