# Write a program that takes a word and a list of possible anagrams and 
# selects the correct sublist that contains the anagrams of the word.

# For example, given the word "listen" and a list of candidates like 
# "enlists", "google", "inlets", and "banana", the program should return 
# a list containing "inlets". Please read the test suite for the exact 
# rules of anagrams.

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