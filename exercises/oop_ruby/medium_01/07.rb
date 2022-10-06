# Exercise 07

# In the previous exercise, you wrote a number guessing game that determines 
# a secret number between 1 and 100, and gives the user 7 opportunities to 
# guess the number.

# Update your solution to accept a low and high value when you create a 
# GuessingGame object, and use those values to compute a secret number 
# for the game. You should also change the number of guesses allowed so 
# the user can always win if she uses a good strategy. You can compute 
# the number of guesses with:

# Math.log2(size_of_range).to_i + 1

class GuessingGame  
  def initialize(min_range, max_range)
    @min_range = min_range
    @max_range = max_range
    @guess_counter = Math.log2(max_range - min_range).to_i + 1
    @guess = nil
  end
  
  def play
    reset

    loop do
      display_guesses
      ask_input 
      break if guess == number || guess_counter.zero?
      hint
    end
    
    game_over
  end

  private

  attr_reader :min_range, :max_range

  attr_accessor :guess_counter, :guess, :number

  def reset
    self.number = Random.new.rand(min_range..max_range)
  end

  def display_guesses
    puts "You have #{guess_counter} guesses remaining."
    self.guess_counter -= 1
  end

  def ask_input
    input = nil
    loop do
      print "Enter a number beetween #{min_range} and #{max_range}: "
      input = gets.chomp.to_i
      break if input > min_range && input < max_range
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

game = GuessingGame.new(500, 1500)
game.play