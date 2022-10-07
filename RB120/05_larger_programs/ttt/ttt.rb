# RB120 Lesson 5:

# Assignment: OOP TTT with Bonus Features

# Cowboys vs. Aliens 2.0 ("Now with Killer Robots!" Edition)

# Lucas Sorribes, October 2022.

# The program is fully automated: if you wish to change the
# board size, just reset the `SQUARE_ORDER` constant in line 288.
# But be careful! A bigger size implies more enemies...

module UserInterface
  def prompt(message)
    puts "=> #{message}"
  end

  def prompt_continue
    prompt 'Press enter to continue.'
    gets
  end

  def ask(message)
    answer = ''
    loop do
      prompt "#{message} ([y]es/[n]o)"
      answer = gets.chomp.strip.downcase
      break if %w(yes y no n).include?(answer)
      prompt 'Please, enter yes or no.'
    end

    answer[0] == 'y'
  end

  def prompt_choose_square(empty_squares)
    square = ''
    loop do
      prompt "Choose a square: (#{joinor(empty_squares)})"
      square = gets.chomp.to_i
      break if empty_squares.include?(square)
      prompt 'Please, enter a valid square.'
    end

    square
  end

  def joinor(array)
    if array.size > 1
      format('%s %s %s', array[0..-2].join(', '), 'or', array[-1])
    else
      array[0]
    end
  end
end

module Display
  def clear_screen
    system 'clear'
  end

  def newline
    puts ''
  end

  def display_welcome
    welcome_message = <<~TXT.strip
      Welcome to Tic Tac Toe 2.0! (Now with Killer Robots! Edition)
    TXT
    puts " #{welcome_message} ".center(120, "#")
  end

  def display_goodbye
    puts ' Good bye! Thanks for playing! '.center(120, '#')
  end

  def display_round(number)
    puts "=> Round #{number}! <="
  end

  def display_round_winner(round_winner)
    winner = case round_winner
             when :human then 'The Cowboys'
             when :computer01 then 'The Aliens'
             else 'The Robots'
             end

    prompt "#{winner} won this battle!"
  end

  def display_game_winner(game_winner)
    puts case game_winner
         when :human then "Yee-haw! The Cowboys saved the day!"
         when :computer01
           "Oh no! The evil aliens conquered the Earth. But don't lose hope!"
         else "Oh no! The killer robots took control! Never again!"
         end
    newline
  end
end

class TTTEngine
  include UserInterface, Display

  WINNING_ROUNDS = 3
  SIZE_FOR_ROBOTS = 5

  def initialize
    @board = Board.new
    @human = Human.new(board)
    @computer = Computer.new(board)
  end

  def play
    clear_screen
    display_welcome
    prompt_continue
    loop do
      main_game
      determine_game_winner!
      display_game_winner(game_winner)
      break unless play_again?
    end

    display_goodbye
  end

  private

  attr_reader :human, :computer, :board, :display
  attr_accessor :won_rounds, :current_player, :current_round, :round_winner,
                :game_winner

  def main_game
    reset_rounds!
    clear_screen

    loop do
      round
      break if someone_won_game?
    end
  end

  def reset_rounds!
    self.won_rounds = { human: 0, computer01: 0, computer02: 0 }
    self.current_round = 1
  end

  def round
    reset_round_winner!
    clear_screen
    determine_first_player!

    newline
    display_round(current_round)
    newline

    prompt_continue
    moves_loop

    prompt_continue

    self.current_round += 1
  end

  def reset_round_winner!
    self.round_winner = nil
  end

  def moves_loop
    loop do
      board.display

      current_player_move

      alternate_player!

      break if someone_won_round? || board.full?
    end

    round_end
  end

  def determine_first_player!
    self.current_player = human_moves_first? ? :human : :computer
  end

  def round_end
    board.display

    if someone_won_round?
      determine_round_winner!
      display_round_winner(round_winner)
      keep_score!
    else
      prompt "No one won this time!"
    end

    board.reset
  end

  def current_player_move
    current_player == :human ? human.move! : computer.move!
  end

  def alternate_player!
    self.current_player = current_player == :human ? :computer : :human
  end

  def human_moves_first?
    if ask('Would you like to move first?')
      clear_screen
      prompt "You go first!"
      true
    else computer_moves_first?
    end
  end

  def computer_moves_first?
    clear_screen
    computer_choice = [true, false].sample

    prompt(if computer_choice then "The invaders decided you go first!"
           else "The invaders go first!"
           end)

    computer_choice
  end

  def someone_won_round?
    !!determine_round_winner!
  end

  def determine_round_winner!
    board.lines.values.flatten(1).each do |line|
      line_squares = board.squares.values_at(*line)

      [:human, :computer01, :computer02].each do |mark|
        self.round_winner = mark if line_full_at?(line_squares, mark)
      end
    end

    round_winner
  end

  def line_full_at?(line_squares, mark)
    player_mark = if mark == :human then Player::HUMAN_MARK
                  elsif mark == :computer01 then Player::COMPUTER01_MARK
                  else Player::COMPUTER02_MARK
                  end

    if mark == :computer02
      line_squares.count(player_mark) == Board::SQUARE_ORDER &&
        Board::SQUARE_ORDER >= SIZE_FOR_ROBOTS
    else
      line_squares.count(player_mark) == Board::SQUARE_ORDER
    end
  end

  def determine_game_winner!
    self.game_winner = won_rounds.select do |_, score|
      score == WINNING_ROUNDS
    end.keys.first
  end

  def keep_score!
    won_rounds[round_winner] += 1
  end

  def someone_won_game?
    won_rounds.any? { |_, score| score == WINNING_ROUNDS }
  end

  def play_again?
    ask('Do you want to play again?')
  end
end

class Board
  include Display

  EMPTY_MARK = "  "

  EMPTY_ROW = "          |"
  FLOOR =     "----------+"

  SQUARE_ORDER = 3
  CENTER_SQUARE = (SQUARE_ORDER**2 / 2.0).round

  attr_reader :squares, :lines

  def initialize
    @constructor = BoardConstructor.new(SQUARE_ORDER)
    @squares = constructor.build(:squares)
    @lines = constructor.build(:lines)
  end

  def display
    system("clear")
    newline

    (1..SQUARE_ORDER).each do |number|
      puts EMPTY_ROW * (SQUARE_ORDER - 1)
      print_frame_rows(number)
      puts EMPTY_ROW * (SQUARE_ORDER - 1)
      puts FLOOR * SQUARE_ORDER unless number == SQUARE_ORDER
    end

    newline
  end

  def empty_squares
    squares.keys.select do |square|
      squares[square] == EMPTY_MARK
    end
  end

  def one_to_win?(line_numbers, mark)
    squares.values_at(*line_numbers).count(mark) == SQUARE_ORDER - 1
  end

  def line_full?(line_numbers)
    line_numbers.all? { |square| squares[square] != EMPTY_MARK }
  end

  def full?
    empty_squares.empty?
  end

  def reset
    squares.transform_values! { |_| EMPTY_MARK }
  end

  private

  attr_reader :constructor

  def print_frame_rows(number)
    lines[:rows][number - 1].each do |square|
      if square % SQUARE_ORDER != 0
        print "   #{squares[square]}     |"
      else
        puts  "   #{squares[square]}      "
      end
    end
  end
end

class BoardConstructor
  def initialize(square_order)
    @square_order = square_order
    @board_squares = (1..square_order**2)
  end

  def build(method)
    send(method)
  end

  private

  attr_reader :square_order, :board_squares

  def squares
    board_squares.each_with_object({}) do |number, squares|
      squares[number] = Board::EMPTY_MARK
    end
  end

  # This method will automatically fill each value with an array of
  # arrays, each one containing all SQUARE NUMBERS for each corresponding
  # line. This is used by the program to build the board and to check all
  # possible win conditions (see lines 443-482)
  def lines
    {
      rows: initialize_rows,
      columns: initialize_columns,
      diagonals: initialize_diagonals
    }
  end

  def initialize_rows
    1.step(by: square_order).take(square_order).each_with_object([]) do
      |row, output_array|
      output_array << row.step.take(square_order)
    end
  end

  def initialize_columns
    (1..square_order).each_with_object([]) do |column, output_array|
      output_array << column.step(by: square_order).take(square_order)
    end
  end

  def initialize_diagonals
    [1, square_order].each_with_object([]) do |diagonal, output_array|
      step = diagonal == 1 ? square_order + 1 : square_order - 1

      output_array << diagonal.step(by: step).take(square_order)
    end
  end
end

class Player
  HUMAN_MARK = "🤠"
  COMPUTER01_MARK = "👽"
  COMPUTER02_MARK = "🤖"

  private

  attr_reader :board

  def initialize(board)
    @board = board
  end
end

class Human < Player
  include UserInterface

  def move!
    square = prompt_choose_square(board.empty_squares)

    board.squares[square] = HUMAN_MARK
  end
end

class Computer < Player
  def move!
    if Board::SQUARE_ORDER < TTTEngine::SIZE_FOR_ROBOTS
      square = choose_square(COMPUTER01_MARK)

      board.squares[square] = COMPUTER01_MARK
    else
      [COMPUTER01_MARK, COMPUTER02_MARK].each do |computer_mark|
        square = choose_square(computer_mark)

        board.squares[square] = computer_mark
      end
    end
  end

  private

  # AI movement priorities:
  def choose_square(enemy)
    # Goes for the winning move or defends from player advances:
    square = offensive_deffensive_move(enemy)

    # If not able, tries to capture the center of the board:
    center_square_index = board.empty_squares.index(Board::CENTER_SQUARE)

    if square.nil? && !(center_square_index.nil?)
      square = board.empty_squares[center_square_index]
    end

    # If not able, choses a random square:
    square = board.empty_squares.sample if square.nil?

    square
  end

  def offensive_deffensive_move(enemy_mark)
    board.lines.values.flatten(1).each do |line|
      # Winning move
      return square_choice(line) if move_available?(line, enemy_mark)

      # Defensive move
      return square_choice(line) if move_available?(line, HUMAN_MARK)
    end

    # No winning/defensive moves available
    nil
  end

  def square_choice(line)
    line.select do |square|
      board.squares[square] == Board::EMPTY_MARK
    end.first
  end

  def move_available?(line_numbers, mark)
    board.one_to_win?(line_numbers, mark) && !board.line_full?(line_numbers)
  end
end

TTTEngine.new.play
