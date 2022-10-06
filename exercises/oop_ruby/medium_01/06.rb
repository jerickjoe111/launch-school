# Exercise 06

# Create an object-oriented number guessing class for numbers in the 
# range 1 to 100, with a limit of 7 guesses per game. 
# The game should play like this:

class GuessingGame
  MAX_GUESSES = 7

  RANGE = 1..100
  
  def initialize
    @number = Random.new.rand(RANGE)
    @guess_counter = MAX_GUESSES
    @guess = nil
  end
  
  def play
    loop do
      display_guesses
      ask_input 
      break if guess == number || guess_counter.zero?
      hint
    end
    
    game_over
  end

  private

  attr_reader :number

  attr_accessor :guess_counter, :guess

  def display_guesses
    puts "You have #{guess_counter} guesses remaining."
    self.guess_counter -= 1
  end

  def ask_input
    input = nil
    loop do
      print 'Enter a number beetween 1 and 100: '
      input = gets.chomp.to_i
      break if input > 0 && input < 101
      print 'Invalid guess. '
    end

    self.guess = input
  end

  def hint
    where = guess > number ? 'high' : 'low'
    
    puts "Your guess is too #{where}."
  end

  def game_over
    puts case guess
         when number then "That's the number!\n\nYou won!"
         else 'You have no more guesses. You lost!'
         end   
  end
end

game = GuessingGame.new
game.play
