# Exercise 10

# In the previous two exercises, you developed a Card class and a Deck class. 
# You are now going to use those classes to create and evaluate poker hands. 
# Create a class, PokerHand, that takes 5 cards from a Deck of Cards and 
# evaluates those cards as a Poker hand. 

class Deck
  RANKS = ((2..10).to_a + %w(Jack Queen King Ace)).freeze

  SUITS = %w(Hearts Clubs Diamonds Spades).freeze

  def initialize
    reset
  end

  def draw
    reset if deck.empty?

    deck.pop
  end

  private

  attr_accessor :deck

  def reset
    self.deck = SUITS.each_with_object([]) do |suit, deck|
                  (0...RANKS.size).each do |rank|
                    deck << Card.new(RANKS[rank], suit)
                  end
                end.shuffle
  end
end

class Card
  include Comparable

  attr_reader :rank, :suit
  
  RANK_VALUES = { 'Jack' => 11, 'Queen' => 12, 'King' => 13, 'Ace' => 14 }

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end
  
  def to_s
    "#{rank} of #{suit}"
  end
  
  def value
    RANK_VALUES.fetch(rank, rank)
  end  

  protected

  def <=>(other_card)
    value <=> other_card.value
  end
end

class PokerHand
  HAND_SIZE = 5

  def initialize(deck)
    @hand = (0...HAND_SIZE).each_with_object([]) do |_, hand|
              hand << deck.draw
            end
    @ranks = get_ranks
  end

  def print
    puts hand
  end

  def evaluate
    case
    when royal_flush?     then 'Royal flush'
    when straight_flush?  then 'Straight flush'
    when four_of_a_kind?  then 'Four of a kind'
    when full_house?      then 'Full house'
    when flush?           then 'Flush'
    when straight?        then 'Straight'
    when three_of_a_kind? then 'Three of a kind'
    when two_pair?        then 'Two pair'
    when pair?            then 'Pair'
    else                       'High card'
    end
  end

  private

  attr_reader :hand, :ranks

  def royal_flush?
    get_suits.uniq.size == 1 &&
    ['Jack', 'Queen', 'King', 'Ace', 10].all? { |rank| ranks.include?(rank) }
  end

  def straight_flush?
    values = get_values.sort

    get_suits.uniq.size == 1 &&
    values[0..-2].each_index.all? do |i| 
      (values[i] - values[i + 1]).abs == 1
    end
  end

  def four_of_a_kind?
    ranks.uniq.any? { |rank| ranks.count(rank) == 4 }
  end

  def full_house?
    ranks.uniq.any? { |rank| ranks.count(rank) == 3} &&
    ranks.uniq.any? { |rank| ranks.count(rank) == 2}
  end

  def flush?
    get_suits.uniq.size == 1
  end

  def straight?
    values = get_values.sort

    values[0..-2].each_index.all? do |i| 
      (values[i] - values[i + 1]).abs == 1
    end
  end

  def three_of_a_kind?
    ranks.uniq.any? { |rank| ranks.count(rank) == 3}
  end

  def two_pair?
    ranks.uniq.select { |rank| ranks.count(rank) == 2}.size == 2
  end

  def pair?
    ranks.uniq.any? { |rank| ranks.count(rank) == 2}
  end

  def get_ranks
    hand.map(&:rank)
  end

  def get_values
    hand.map(&:value)
  end

  def get_suits
    hand.map(&:suit)
  end
end

hand = PokerHand.new(Deck.new)
hand.print
puts hand.evaluate

# Danger danger danger: monkey
# patching for testing purposes.
class Array
  alias_method :draw, :pop
end

# Test that we can identify each PokerHand type.
hand = PokerHand.new([
  Card.new(10,      'Hearts'),
  Card.new('Ace',   'Hearts'),
  Card.new('Queen', 'Hearts'),
  Card.new('King',  'Hearts'),
  Card.new('Jack',  'Hearts')
])
puts hand.evaluate == 'Royal flush'

hand = PokerHand.new([
  Card.new(8,       'Clubs'),
  Card.new(9,       'Clubs'),
  Card.new('Queen', 'Clubs'),
  Card.new(10,      'Clubs'),
  Card.new('Jack',  'Clubs')
])
puts hand.evaluate == 'Straight flush'

hand = PokerHand.new([
  Card.new(3, 'Hearts'),
  Card.new(3, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(3, 'Spades'),
  Card.new(3, 'Diamonds')
])
puts hand.evaluate == 'Four of a kind'

hand = PokerHand.new([
  Card.new(3, 'Hearts'),
  Card.new(3, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(3, 'Spades'),
  Card.new(5, 'Hearts')
])
puts hand.evaluate == 'Full house'

hand = PokerHand.new([
  Card.new(10, 'Hearts'),
  Card.new('Ace', 'Hearts'),
  Card.new(2, 'Hearts'),
  Card.new('King', 'Hearts'),
  Card.new(3, 'Hearts')
])
puts hand.evaluate == 'Flush'

hand = PokerHand.new([
  Card.new(8,      'Clubs'),
  Card.new(9,      'Diamonds'),
  Card.new(10,     'Clubs'),
  Card.new(7,      'Hearts'),
  Card.new('Jack', 'Clubs')
])
puts hand.evaluate == 'Straight'

hand = PokerHand.new([
  Card.new('Queen', 'Clubs'),
  Card.new('King',  'Diamonds'),
  Card.new(10,      'Clubs'),
  Card.new('Ace',   'Hearts'),
  Card.new('Jack',  'Clubs')
])
puts hand.evaluate == 'Straight'

hand = PokerHand.new([
  Card.new(3, 'Hearts'),
  Card.new(3, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(3, 'Spades'),
  Card.new(6, 'Diamonds')
])
puts hand.evaluate == 'Three of a kind'

hand = PokerHand.new([
  Card.new(9, 'Hearts'),
  Card.new(9, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(8, 'Spades'),
  Card.new(5, 'Hearts')
])
puts hand.evaluate == 'Two pair'

hand = PokerHand.new([
  Card.new(2, 'Hearts'),
  Card.new(9, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(9, 'Spades'),
  Card.new(3, 'Diamonds')
])
puts hand.evaluate == 'Pair'

hand = PokerHand.new([
  Card.new(2,      'Hearts'),
  Card.new('King', 'Clubs'),
  Card.new(5,      'Diamonds'),
  Card.new(9,      'Spades'),
  Card.new(3,      'Diamonds')
])
puts hand.evaluate == 'High card'