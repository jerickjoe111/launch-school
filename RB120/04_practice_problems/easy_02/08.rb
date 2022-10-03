# Exercise 08

class Game
  def play
    "Start the game!"
  end
end

class Bingo < Game # We make `Bingo` a sub-class of `Game` using the `<` syntax.
  def rules_of_play
    #rules of play
  end
end

# What can we add to the Bingo class to allow it to inherit the play method from the Game class?
