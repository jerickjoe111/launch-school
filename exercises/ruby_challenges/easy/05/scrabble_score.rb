# Write a program that, given a word, computes the Scrabble score for that word.

# Letter Values

# You'll need the following tile scores:

# Letter	                    Value
# A, E, I, O, U, L, N, R, S, T	1
# D, G	                        2
# B, C, M, P	                  3
# F, H, V, W, Y	                4
# K	                            5
# J, X	                        8
# Q, Z	                        10

# How to Score

# Sum the values of all the tiles used in each word. 
# For instance, lets consider the word CABBAGE which has the 
# following letters and point values:

# 3 points for C
# 1 point for each A (there are two)
# 3 points for B (there are two)
# 2 points for G
# 1 point for E

# Thus, to compute the final total (14 points), we count:
# 3 + 2*1 + 2*3 + 2 + 1
# => 3 + 2 + 6 + 3
# => 5 + 9
# => 14

class Scrabble
  AEIOULNRST_VALUE = 1
  DG_VALUE = 2
  BCMP_VALUE = 3
  FHVWY_VALUE = 4
  K_VALUE = 5
  JX_VALUE = 8
  QZ_VALUE = 10

  def self.score(word)
    self.new(word).score
  end

  attr_reader :word

  def initialize(word)
    @word = word
  end

  def score
    return 0 if word.nil?
    word.chars.map { |letter| value(letter.upcase) }.sum
  end

  private

  def value(letter)
    if letter.match?(/[AEIOULNRST]/) then AEIOULNRST_VALUE
    elsif letter.match?(/[DG]/) then DG_VALUE
    elsif letter.match?(/[BCMP]/) then BCMP_VALUE
    elsif letter.match?(/[FHVWY]/) then FHVWY_VALUE
    elsif letter.match?(/[K]/) then K_VALUE
    elsif letter.match?(/[JX]/) then JX_VALUE
    elsif letter.match?(/[QZ]/) then QZ_VALUE
    else 0
    end
  end
end
