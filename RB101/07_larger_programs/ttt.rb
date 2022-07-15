# RB101 Lesson 6: Assignment: TTT Bonus Features

# Cowboys vs. Aliens 2.0 ("Now with Killer Robots!" Edition)

# Lucas Sorribes, July 2022.

# The program is fully automated: if you wish to change the 
# board's size, just reset the `SQUARE_ORDER` constant in line 25.
# But be careful! A bigger size implies more enemies...

require "pry"

EMPTY_MARK = "  "
PLAYER_MARK = "🤠"
COMPUTER01_MARK = "👽"
COMPUTER02_MARK = "🤖"

EMPTY_ROW = "          |"
FLOOR =     "----------+"

WINNING_ROUNDS = 5

SIZE_FOR_ROBOTS = 5

# Number of squares in one row (see https://en.wikipedia.org/wiki/Magic_square):
SQUARE_ORDER = 5

BOARD_SQUARES = (1..SQUARE_ORDER**2)

def populate_rows
  1.step(by: SQUARE_ORDER).take(SQUARE_ORDER).each_with_object([]) do
    |row, array|
    array << row.step.take(SQUARE_ORDER)
  end
end

def populate_columns
  (1..SQUARE_ORDER).each_with_object([]) do |column, array|
    array << column.step(by: SQUARE_ORDER).take(SQUARE_ORDER)
  end
end

def populate_diagonals
  [1, SQUARE_ORDER].each_with_object([]) do |diagonal, array|
    array << if diagonal == 1
               diagonal.step(by: SQUARE_ORDER + 1).take(SQUARE_ORDER)
             else
               diagonal.step(by: SQUARE_ORDER - 1).take(SQUARE_ORDER)
             end
  end
end

# This constant's hash will automatically fill each key with an array of
# arrays, each one containing all square numbers for each corresponding
# line. This is used by the program to build the board and to check all
# possible win conditions (see lines 64 and 137)
LINES = {
  rows: populate_rows,
  columns: populate_columns,
  diagonals: populate_diagonals
}

def prompt(message)
  puts "=> #{message}"
end

def print_mark_rows(number, board)
  LINES[:rows][number - 1].each do |square|
    if square % SQUARE_ORDER != 0
      print "   #{board[square]}     |"
    else
      puts  "   #{board[square]}      "
    end
  end
end

def display_board(board)
  system("clear")
  puts ""

  (1..SQUARE_ORDER).each do |number|
    puts EMPTY_ROW * (SQUARE_ORDER - 1)
    print_mark_rows(number, board)
    puts EMPTY_ROW * (SQUARE_ORDER - 1)
    puts FLOOR * SQUARE_ORDER unless number == SQUARE_ORDER
  end

  puts ""
end

def initialize_board
  BOARD_SQUARES.each_with_object({}) do |number, board|
    board[number] = EMPTY_MARK
  end
end

def empty_squares(board)
  board.keys.select { |square| board[square] == EMPTY_MARK }
end

def joinor(array, separator=", ", last_sep="or")
  if array.size > 1
    format("%s %s %s", array[0..-2].join(separator), last_sep, array[-1])
  else
    array[0]
  end
end

def player_moves!(board)
  square = ""
  loop do
    prompt "Choose a square: (#{joinor(empty_squares(board))})"
    square = gets.chomp.to_i
    break if empty_squares(board).include?(square)
    prompt "Please, enter a valid square."
  end

  board[square] = PLAYER_MARK
end

# TODO: Implement AI
def computer_moves!(board)
  square01 = empty_squares(board).sample
  board[square01] = COMPUTER01_MARK
  sleep(0.3)
  if SQUARE_ORDER >= SIZE_FOR_ROBOTS
    square02 = empty_squares(board).sample
    board[square02] = COMPUTER02_MARK
  end
end

def board_full?(board)
  empty_squares(board).empty?
end

def someone_won_round?(board)
  !!determine_round_winner(board)
end

# TODO: Refactor ??
def determine_round_winner(board)
  LINES.values.flatten(1).each do |line|
    if board.values_at(*line).count(PLAYER_MARK) == SQUARE_ORDER
      return "The Cowboys"
    elsif board.values_at(*line).count(COMPUTER01_MARK) == SQUARE_ORDER
      return "The Aliens"
    elsif SQUARE_ORDER >= SIZE_FOR_ROBOTS
      if board.values_at(*line).count(COMPUTER02_MARK) == SQUARE_ORDER
        return "The Robots"
      end
    end
  end

  nil
end

def keep_score(won_rounds, round_winner)
  case round_winner
  when "The Cowboys" then won_rounds[:player] += 1
  when "The Aliens" then won_rounds[:computer01] += 1
  when "The Robots" then won_rounds[:computer02] += 1
  end
end

def game_winner?(won_rounds)
  won_rounds.any? { |_, score| score == WINNING_ROUNDS }
end

def display_winner(won_rounds)
  case won_rounds.select { |_, score| score == WINNING_ROUNDS }.keys[0]
  when :player
    puts "Yee-haw! The Cowboys saved the day!"
  when :computer01
    puts "Oh no! The evil aliens conquered the Earth. But don't lose hope!"
  when :computer02
    puts "Oh no! The killer robots took control! Never again!"
  end
end

def prompt_continue
  loop do
    prompt "Enter 'c' to continue"
    answer = gets.chomp
    break if answer == "c"
    prompt "Please, enter 'c'"
  end
end

def exit_game?
  answer = ""
  loop do
    prompt "Do you want to play again? (yes/no)"
    answer = gets.chomp.strip.downcase
    break if %w(yes y no n).include?(answer)
    prompt "Please, enter yes or no."
  end

  answer[0] == "n"
end


# Main loop
loop do
  system "clear"
  
  won_rounds = {
    player: 0,
    computer01: 0,
    computer02: 0
  }

  # Rounds loop
  loop do
    board = initialize_board

    # Movements loop
    loop do
      display_board(board)

      player_moves!(board)
      break if someone_won_round?(board) || board_full?(board)

      computer_moves!(board)
      break if someone_won_round?(board) || board_full?(board)
    end

    display_board(board)

    if someone_won_round?(board)
      round_winner = determine_round_winner(board)
      prompt "#{round_winner} won this battle!"

      keep_score(won_rounds, round_winner)
    else
      prompt "No one won this time!"
    end

    prompt_continue

    break if game_winner?(won_rounds)

    # End of the rounds loop
  end

  display_winner(won_rounds)

  break if exit_game?

  # End of the main loop
end

prompt "Good bye!"
