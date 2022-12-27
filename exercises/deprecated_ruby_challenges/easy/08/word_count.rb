class Phrase
  attr_reader :phrase

  def initialize(phrase)
    @phrase = phrase
    @words = extract_words
  end

  def word_count
    words.uniq.each_with_object({}) do |word, output_hash|
      output_hash[word] = words.count(word)
    end
  end

  private
  attr_reader :words

  def extract_words
    phrase.scan(/\w+'?\w+|\w/).map(&:downcase)
  end
end