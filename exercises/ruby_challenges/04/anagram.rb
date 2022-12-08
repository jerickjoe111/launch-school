class Anagram
  attr_reader :word
  
  def initialize(word)
    @word = word
  end

  def match(anagram_candidates)
    anagram_candidates.select do |candidate|
      anagram?(candidate) && !same?(candidate)
    end
  end

  private
  
  def anagram?(other_word)
    word.chars.map(&:downcase).sort == other_word.chars.map(&:downcase).sort
  end

  def same?(other_word)
    word.downcase == other_word.downcase
  end
end