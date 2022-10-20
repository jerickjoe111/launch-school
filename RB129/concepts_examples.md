## Classes and objects

```ruby
class Piece
  def initialize(type)
    @type = type
  end
end

piece_1 = Piece.new('pawn')
piece_2 = Piece.new('knight')
```

## Instance variables

```ruby
class Piece
  def initialize(type, color)
    @type = type
    @color = color
  end

  def remove_from_board
    @removed = true # This variable will be treated as referencing `nil` unless this method is executed
  end
end

piece_1 = Piece.new('pawn', :black)
piece_2 = Piece.new('knight', :white)

piece_1.instance_variables
piece_2.instance_variables
```

## Class variables

```ruby
class Piece
  @@total_pieces = 0

  def initialize(type, color)
    @type = type
    @color = color
    @@total_pieces += 1
  end

  def total_pieces
    @@total_pieces
  end
end

piece_1 = Piece.new('pawn', :black)
piece_2 = Piece.new('knight', :white)

piece_1.total_pieces # returns 2
piece_2.total_pieces # returns 2
```

## Constants

```ruby
TURN_MAX_TIME = 10 # In minutes

module KingMovement
  MAX_KING_STEPS = 1
end

class Board
  BOARD_ORDER = 8

  include KingMovement
  
  def initialize
    @total_squares = BOARD_ORDER ** 2
  end
end

# All this constants are accessible if we reference them inside the `Board` class
```

## Instance methods (getters/setters)

```ruby
# Manual accessors writing:
class Piece
  def initialize(type, color)
    @type = type
    @color = color
  end

  def type
    @type
  end

  def type=(new_type)
    @type = new_type
  end

  def color
    @color
  end
end

# Automatic accessors writing:
class Piece
  attr_accessor :type
  attr_reader :color

  def initialize(type, color)
    @type = type
    @color = color
  end
end
```

## Class methods:

```ruby
class Board
  BOARD_ORDER = 8
  
  def self.total_squares
    BOARD_ORDER ** 2
  end
end
```

## `self`:

```ruby
self # `main`, the top level object, an instance of `Object`

module KingMovement
  self # the module object `KingMovement`

  def self.expose
    self # the module object `KingMovement`
  end

  def move!
    self # An instance of the class that includes `KingMovement` on which we will call this method
  end
end

class Piece
  include KingMovement
  
  self # The class object `Piece`

  def self.show
    self # The class object `Piece`
  end

  def check
    self # An instance of the class `Piece` on wich we will call this method
  end
end
```

## Module

```ruby
module KingMovement
  def one_step_movement
  end

  def check
  end

  def checkmate
  end
end

class King < Piece
  include KingMovement
end
```

## Namespacing

```ruby
module Instruments
  class Hammer # A pianos brand
  end
end

module Tools
  class Hammer # The hammer tool
  end
end


hammer_1 = Instruments::Hammer.new
hammer_2 = Tools::Hammer.new
```

## Method lookup path

```ruby
module BasicMovement
end

module KingMovement
end

class Piece
end

class King < Piece
  include BasicMovement
  include KingMovement
end

King.ancestors == [
  King, # class            |
  KingMovement, # module   |
  BasicMovement # module   |
  Piece, # class           |
  Object, # class          |
  Kernel, # module         |
  BasicObject # class     \_/
]
```

## `super`

```ruby
# super by default:

class Piece 
  def initialize(type, color)
    @type = type
    @color = color
  end
end

class King < Piece
  def initialize(type, color)
    super
  end
end

# `super` with only specific arguments

class Piece 
  def initialize(type, color)
    @type = type
    @color = color
  end
end

class King < Piece
  def initialize(type, color, is_king=true)
    super(type, color)
    @is_king = is_king 
  end
end

# `super` with no arguments

class Piece 
  def initialize
    @type = 'king'
    @color = 'color'
  end
end

class King < Piece
  def initialize(is_king=true)
    super()
    @is_king = is_king 
  end
end
```

## Method access control

```ruby
class King < Piece
  def move!
    # normal king movement
  end

  def display_danger_sign
    puts '!' if in_check?
  end

  private

  def in_check?
    # is the king in check?
  end

  protected

  def compare_to_enemy(enemy)
    # compares own score with the enemy's
  end
end
```

## Inheritance

```ruby
# class inheritance:
class Piece
  def initialize(type, color)
    @type = type
    @color = color
  end

  def basic_move!
    # some generic movement
  end
end

class King < Piece 
  def king_move! 
    # specific king movement
  end
end

black_king = King.new('king', :black) # this object will have access to the `basic_move!` and `king_move!` methods

# interface inheritance:
module BasicMovement
end

module KingMovement
end

class Piece
  include BasicMovement

  def initialize(type, color)
    @type = type
    @color = color
  end
end

class King < Piece
  include KingMovement
end

black_king = King.new('king', :black) # this object will have access to the functionality provided by the `BasicMovement`, mixed-in in superclass `Piece`
```

## Polymorphism:
-
```ruby
# with inheritance:
module BasicMovement
end

module SlideMovement
end

class Piece
  include BasicMovement
end

class Rook < Piece
  include SlideMovement
end

class Bishop < Piece
  include SlideMovement
end

rook = Rook.new
bishop = Bishop.new
# the rokk and the bishop will have access to the same funcionality provided by: the `BasicMovement` included in the common superclass `Piece`,
# and the inclusion of the same module `SlideMovement` in the two different classes `Rook` and `Piece`, thus making them to respond to the 
# same functionality added by the module.

# without inheritance (duck-typing):
class Board
  def display
    # displays an ASCII representation of the board
  end
end

class Piece
  def display
    # displays representation of the piece
  end
end

class Score
  def display
    # displays a numerical representation of the score of the two players
  end
end

# during the game, we could have a loop like:
board = Board.new
piece_01 = Piece.new
score = Score.new
[board, piece_01, score].each(&:display)
# that would continuously display each game element, each with their own independent implementations of a method `display`
```
## Encapsulation

```ruby
class PizzaPlace

  def order_pizza
    make_dough
    ask_other_restaurants(restaurant) if not_enough_ingredients?
    prepare_ingredients
    check_oven_temperature
    wait_minutes
    output_made_pizza
  end

  protected

  def ask_other_restaurants(other)
  end

  privateprepare_ingredients

  def not_enough_ingredients?
  end

  def make_dough
  end

  def prepare_ingredients
  end

  def check_oven_temperature
  end

  def wait_minutes
  end

  def output_made_pizza
  end
end

restaurant = PizzaPlace.new

restaurant.order_pizza # this is the only public method we need; the rest can and should be private.
```

## Collaborator objects

```ruby
class Board
end

class Player
end

class ChessEngine
  def initialize
    @board = Board.new
    @player_1 = Player.new
    @player_2 = Player.new
  end
end
```
