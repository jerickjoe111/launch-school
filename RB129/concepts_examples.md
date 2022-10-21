## Classes and objects

```ruby
class Piece
  def initialize(type)
    @type = type
  end
end

piece_1 = Piece.new('pawn')
piece_2 = Piece.new('knight')

p piece_1 # == #<Piece:0x000055fb0f759f08 @type="pawn">, the intance's class name, a location in memory, its instance variables.
```

## Instance variables

```ruby
class Piece
  attr_reader :type, :color, :removed

  def initialize(type, color)
    @type = type
    @color = color
  end

  def remove_from_board
    @removed = true # This variable will be treated as referencing `nil` unless this method is executed
  end
end

piece = Piece.new('pawn', :black)


p piece.instance_variables # == [:@type, :@color]
p piece.removed # == nil
piece.remove_from_board 
p piece.instance_variables # == [:@type, :@color, @removed]
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

class King < Piece
end

piece_1 = Piece.new('pawn', :black)
piece_2 = Piece.new('knight', :white)
piece_3 = King.new('king', :white)

puts piece_1.total_pieces # == 3
puts piece_2.total_pieces # == 3
puts piece_3.total_pieces # == 3
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

  def order
    BOARD_ORDER
  end

  def max_king_steps
    MAX_KING_STEPS
  end

  def max_time
    TURN_MAX_TIME
  end
end

b = Board.new

puts b.order # == 8
puts b.max_king_steps # == 1
puts b.max_time # == 10

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

Board.total_squares # we call class method on the class object
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
    self # An instance of the class that includes `KingMovement`, on which we will call this method
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

king = King.new # this instance will have access to the three method defined in the module.
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
  BasicMovement, # module  |
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
  def initialize(score)
    @score = score
  end

  def move!
    # normal king movement
  end

  def status
    puts 'DANGER!' if in_check?
  end

  protected

  attr_reader :score

  def compare_to_enemy(enemy)
    # compares own score with the enemy's
  end

  private

  def in_check?
    # is the king in check?
  end
end
```

## Inheritance

```ruby
# class inheritance:
class Piece
  attr_reader :type, :color

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

black_king = King.new('king', :black) # this object will have access to the `basic_move!` and `king_move!` methods, and access to the instance variables `@type` and `@color` via the inherited attribute getters from `Piece`.

# interface inheritance:
module BasicMovement
end

module KingMovement
end

class Piece
  include BasicMovement
end

class King < Piece
  include KingMovement
end

black_king = King.new('king', :black) # this object will have access to the functionality provided by the `BasicMovement`, mixed-in in superclass `Piece`, and that from `KingMovement`, included in its own class.
```

## Polymorphism:

```ruby
# with inheritance:
module SlideMovement
end

class Piece
  def basic_movement
  end
end

class Rook < Piece
  include SlideMovement
end

class Bishop < Piece
  include SlideMovement
end

rook = Rook.new
bishop = Bishop.new
# the rook and the bishop will have access to the `basic_movement` method defined in the common superclass `Piece`,
# and the functionality provided by the inclusion of the same module `SlideMovement` in the two different classes `Rook` and `Piece`.

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
# that would continuously display each game element, each with their own independent implementation of a method `display`
```
## Encapsulation

```ruby
class PizzaPlace

  def order_pizza
    ask_other_restaurants if !enough_ingredients?
    make_dough
    prepare_ingredients
    check_oven_temperature
    output_cooked_pizza
  end

  protected

  def ask_other_restaurants
  end

  private
  
  def enough_ingredients?
  end

  def make_dough
  end

  def prepare_ingredients
  end

  def check_oven_temperature
  end

  def output_cooked_pizza
  end
end

restaurant = PizzaPlace.new

restaurant.order_pizza # this is the only public method we need; the rest can and should be private, with only one protected method.
```

## Collaborator objects

```ruby
class Board
end

class Player
end

class ChessEngine
  def initialize
    @board = Board.new # Collaborator
    @player_1 = Player.new # Collaborator
    @player_2 = Player.new # Collaborator
  end
end
```

## Fake operators

```ruby
class Piece
  include Comparable

  def initialize(score)
    @score = score
  end

  protected

  attr_reader :score

  def <=>(other_piece)
    score <=> other_piece.score
  end
```