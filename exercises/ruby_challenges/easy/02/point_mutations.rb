# Write a program that can calculate the Hamming distance between two DNA strands.

# A mutation is simply a mistake that occurs during the creation or copying of 
# a nucleic acid, in particular DNA. Because nucleic acids are vital to cellular 
# functions, mutations tend to cause a ripple effect throughout the cell. 
# Although mutations are technically mistakes, a very rare mutation may equip 
# the cell with a beneficial attribute. In fact, the macro effects of evolution 
# are attributable to the accumulated result of beneficial microscopic mutations 
# over many generations.

# The simplest and most common type of nucleic acid mutation is a point mutation, 
# which replaces one base with another at a single nucleotide.

# By counting the number of differences between two homologous DNA strands taken 
# from different genomes with a common ancestor, we get a measure of the minimum 
# number of point mutations that could have occurred on the evolutionary path 
# between the two strands.

# This is called the Hamming distance.

# GAGCCTACTAACGGGAT
# D=D=D==D=D====DD= 
# CATCGTAATGACGGCCT
# ^ ^ ^  ^ ^    ^^

# we compare two strings: 
    # D, different symbols,
    # =, equal symbols 


# The Hamming distance between these two DNA strands is 7.
# (Because the different points of divergence are 7 - 7 different symbols)

# The Hamming distance is only defined for sequences of equal length. 
# If you have two sequences of unequal length, you should compute the 
# Hamming distance over the shorter length.

# In information theory, the Hamming distance between two strings of equal length 
# is the number of positions at which the corresponding symbols are different. 
# In other words, it measures the minimum number of substitutions required to 
# change one string into the other, or the minimum number of errors that could 
# have transformed one string into the other.

# Strategy:

# find shortest string of the two

# iterate through the shortest length string:

# for every char. in shortest string
#   - if char in shortest string is equal to char in longest string at this position.
#       next
#     if not,
#       add 1 to hamming_distance counter


class DNA
  attr_reader :sequence

  def initialize(sequence)
    @sequence = sequence
  end

  def hamming_distance(other_sequence)
    shortest_sequence, longest_sequence = find_shortest(sequence, other_sequence)

    hamming_distance = 0
    shortest_sequence.chars.each_with_index do |char, index|
      hamming_distance += 1 if char != longest_sequence[index]
    end

    hamming_distance
  end

  private

  def find_shortest(sequence_a, sequence_b)
    [sequence_a, sequence_b].sort_by(&:size)
  end
end
