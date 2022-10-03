# Exercise 09

class Game
  def play
    "Start the game!"
  end
end

class Bingo < Game
  def rules_of_play
    #rules of play
  end
end

# What would happen if we added a `play` method to the `Bingo` class, 
# keeping in mind that there is already a method of this name in 
# the `Game` class that the `Bingo` class inherits from.

# the method would be overriden, and it would be the one executed, and not the one 
# from the `Game` parent class (early up in the method look up path).

