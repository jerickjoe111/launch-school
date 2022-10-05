# RB120
# Lesson 2
# OO Rock Paper Scissors

# Rock - Paper - Scissors + Bonus Features

# Lucas Sorribes, 2022.

require 'yaml'

LONG_TEXT = YAML.load_file('rps.yml')

module UserInterface
  def prompt(message)
    puts "=> #{message}"
  end

  def continue
    prompt 'Press \'enter\' to continue'
    gets
  end

  def ask(message)
    answer = nil
    loop do
      prompt "#{message}\n( [y]es / [n]o )"

      answer = gets.chomp.strip.downcase

      break if %w(yes y no n).include?(answer)
      prompt 'Please, enter a valid input.'
    end

    answer[0] == 'y'
  end

  def ask_name
    name = nil
    loop do
      prompt 'What is your name?'
      name = gets.chomp.strip.capitalize

      break unless name.empty?
      prompt 'Name can\'t be empty. I need some way to call you!'
    end

    name
  end

  def ask_weapon
    abbreviations_hash = RPSGame::WEAPONS.transform_values(&:first).invert
    allowed_input = RPSGame::WEAPONS.keys + abbreviations_hash.keys

    weapon = nil
    prompt(LONG_TEXT['weapons_prompt'])
    loop do
      weapon = gets.chomp.strip.downcase

      break if allowed_input.include?(weapon)
      prompt 'Please, enter a valid weapon.'
    end

    weapon.size > 1 ? weapon : abbreviations_hash[weapon]
  end
end

class RPSGame
  WIN_ROUNDS = 3

  WEAPONS = {
    'rock' => ['r', 'scissors', 'lizard'],
    'paper' => ['p', 'spock', 'rock'],
    'scissors' => ['s', 'paper', 'lizard'],
    'lizard' => ['l', 'spock', 'paper'],
    'spock' => ['o', 'scissors', 'rock']
  }

  include UserInterface

  def initialize
    @human = Human.new
    @computer = Computer.new
    @display = Display.new
    @history = History.new(human, computer)
    @game_counter = 1
  end

  def play
    system 'clear'
    display.welcome(human.name)
    display.rules if rules?

    loop do
      each_player(:reset_score)
      game
      break unless play_again?
    end

    history.display if history?
    display.goodbye
  end

  private

  attr_reader :human, :computer, :display, :history
  attr_accessor :round_number, :game_counter

  def each_player(method)
    puts ''
    [human, computer].each { |player| player.send(method) }
    puts ''
  end

  def game
    self.round_number = 1

    loop do
      system 'clear'
      round
      each_player(:display_score)

      continue unless rounds_end?
      break if rounds_end?
    end

    display.game_winner(game_winner)
    self.game_counter += 1
  end

  def round
    display.round(round_number)

    each_player(:choose!)
    system 'clear'
    display.round(round_number)
    each_player(:display_move)
    winner = round_winner
    display.round_winner(winner)
    history.keep!(winner, game_counter)

    self.round_number += 1
  end

  def round_winner
    human_move = human.move
    computer_move = computer.move

    if RPSGame::WEAPONS[human_move].include?(computer_move)
      human.score += 1
      :human
    elsif human_move == computer_move then :tie
    else
      computer.score += 1
      :computer
    end
  end

  def game_winner
    human > computer ? :human : :computer
  end

  def rounds_end?
    (round_number > WIN_ROUNDS) && (human.score != computer.score)
  end

  def rules?
    ask('Do you want to see the rules?')
  end

  def history?
    ask('Do you want to see the game history?')
  end

  def play_again?
    puts ''
    ask('Do you want to play again?')
  end
end

class History < RPSGame
  require 'time'

  def initialize(human, computer)
    @human = human
    @computer = computer
    @rounds = []
    @total_round_number = 1
  end

  def keep!(player, game_counter)
    round = format_round(player, game_counter)

    self.total_round_number += 1

    rounds << round
  end

  def display
    rounds.each do |round|
      puts(
        "
        Date: #{round[:date]}
        Round: #{round[:round]}
        Game: #{round[:game]}
        #{human.name} move: #{round[:human_move]}
        Computer move: #{round[:computer_move]}
        #{round[:winner]}
        "
      )
    end
  end

  private

  attr_accessor :total_round_number
  attr_reader :rounds

  def tie?
    human.move == computer.move
  end

  def format_round(player, game_counter)
    round = {
      date: Time.now.strftime('%H:%M:%S %m-%d-%Y'),
      round: total_round_number,
      game: game_counter,
      human_move: human.move.capitalize,
      computer_move: computer.move.capitalize,
      winner: player.to_s.capitalize
    }
    round[:winner].prepend("Winner: ") unless tie?

    round
  end
end

class Player
  attr_accessor :move, :score
  attr_reader :name

  def display_move
    emoji = move_emoji
    puts "#{emoji} #{name} chose #{move}! #{emoji}"
  end

  def display_score
    puts "#{name} score: #{score}"
  end

  def reset_score
    self.score = 0
  end

  private

  def move_emoji
    case move
    when 'rock' then '✊'
    when 'paper' then '✋'
    when 'scissors' then '✌'
    when 'lizard' then '🤏'
    else '🖖'
    end
  end
end

class Human < Player
  include UserInterface

  def initialize
    @name = ask_name
  end

  def choose!
    self.move = ask_weapon
  end

  def >(computer)
    score > computer.score
  end
end

class Computer < Player
  def initialize
    @name = "The Machine"
  end

  def choose!
    self.move = RPSGame::WEAPONS.keys.sample
  end
end


class Display
  include UserInterface

  def welcome(name)
    puts "#{LONG_TEXT['welcome']}, #{name}!"
    puts ''
  end

  def rules
    system 'clear'
    puts LONG_TEXT['rules']
    continue
  end

  def goodbye
    puts LONG_TEXT['goodbye']
  end

  def round(number)
    puts "🏁 ROUND #{number}! 🏁"
    puts ''
  end

  def round_winner(player)
    prompt(
      case player
      when :human then 'You won the round!'
      when :computer then 'The Machine won the round!'
      else 'It\'s a tie!'
      end
    )
  end

  def game_winner(player)
    prompt(
      case player
      when :human then "🏆 You won the game! 🏆"
      else "🤖 The Machine won the game! 🤖"
      end
    )
  end
end

system 'clear'
RPSGame.new.play
