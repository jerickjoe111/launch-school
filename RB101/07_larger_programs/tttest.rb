# RB101 Lesson 6: Assignment: TTT Bonus Features

# Cowboys vs. Aliens 2.0 ("Now with Killer Robots!" Edition)

# Lucas Sorribes, July 2022.

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
    if diagonal == 1
      array << diagonal.step(by: SQUARE_ORDER + 1).take(SQUARE_ORDER)
    else
      array << diagonal.step(by: SQUARE_ORDER - 1).take(SQUARE_ORDER)
    end
  end
end

EMPTY_MARK = "  "
PLAYER_MARK = "🤠"
COMPUTER01_MARK = "👽"
COMPUTER02_MARK = "🤖"

EMPTY_ROW = "          |"
FLOOR =     "----------+"


# Number of squares in row:
SQUARE_ORDER = 3

BOARD_SQUARES = (1..SQUARE_ORDER**2)

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
      print "   #{board[square][:mark]}     |"
    else
      puts  "   #{board[square][:mark]}      "
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
    board[number] = { mark: EMPTY_MARK, points: 0 }
  end
end

def empty_squares(board)
  board.keys.select { |square| board[square][:mark] == EMPTY_MARK }
end

def joinor(array, separator=", ", last="or")
  format("%s %s %s", array[0..-2].join(separator), last, array[-1])
end 

def player_moves!(board)
  square = ""
  loop do
    prompt "Choose a square: (#{joinor(empty_squares(board))}"
    square = gets.chomp.to_i
    break if empty_squares(board).include?(square)
    prompt "Please, enter a valid square."
  end

  board[square][:mark] = PLAYER_MARK
end

def computer_moves!(board)
  square01 = empty_squares(board).sample
  square02 = empty_squares(board).sample
  board[square01][:mark] = COMPUTER01_MARK
  sleep(0.3)
  board[square02][:mark] = COMPUTER02_MARK
end

def board_full?(board)
  empty_squares(board).empty?
end

def someone_won?(board)
  # !!determine_winner(board)
  false
end

# TODO: Change logic. Implement magic square point system
# def determine_winner(board)
#   WIN_CONDITIONS.each do |line|
#     if board.values_at(*line).count(PLAYER_MARK) == 3
#       return "Player"
#     elsif board.values_at(*line).count(COMPUTER_MARK) == 3
#       return "The Machine"
#     elsif

#     end
#   end

#   nil
# end

# This is the beginning of the main loop
loop do
  system "clear"
  board = initialize_board

  # Round loop
  loop do
    display_board(board)

    player_moves!(board)
    break if someone_won?(board) || board_full?(board)

    computer_moves!(board)
    break if someone_won?(board) || board_full?(board)
  end

  display_board(board)

  # if someone_won?(board)
  #   prompt "#{determine_winner(board)} won!"
  # else
  #   prompt "It's a tie!"
  # end

  # Extract to a method
  answer = ""
  loop do
    prompt "Do you want to play again? (yes/no)"
    answer = gets.chomp.strip
    break if %w(yes y no n).include?(answer.downcase)
    prompt "Please, enter yes or no."
  end

  break if %w(no n).include?(answer)
  # This is the end of the main loop
end

prompt "Good bye!"

