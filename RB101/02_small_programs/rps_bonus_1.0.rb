# Assignment 24. Rock Paper Scissors Bonus features

# RPS 1986 Edition 1.0

# Lucas Sorribes, June 2022.

require "./rps_animations"
require "yaml"

MESSAGES = YAML.load_file("rps_messages.yml")

WEAPONS_RULES = {
  "s" => ["p", "l"],
  "o" => ["s", "r"],
  "l" => ["o", "p"],
  "p" => ["r", "o"],
  "r" => ["s", "l"]
}

ABBREVIATIONS = {
  "scissors" => "s",
  "spock" => "o",
  "lizard" => "l",
  "paper" => "p",
  "rock" => "r"
}

GAMES_TO_WIN = 3

# Methods

def ask(message, skynet=true, answers=%w{y yes n no})
  answer = ""

  if skynet
    invalid_input_message = MESSAGES["skynet_invalid_input"]
  else
    invalid_input_message = MESSAGES["invalid_input"]
  end

  loop do
    retro_display(message)
    answer = abbreviated_weapon?(gets.chomp.downcase.strip)
    break if answers.include?(answer)
    retro_display(invalid_input_message)
  end
  answer
end

def abbreviated_weapon?(weapon)
  return weapon if weapon.size <= 3

  weapon = ABBREVIATIONS[weapon]
  weapon
end

def retro_display(string, slow=false)
  slow ? speed = (0.1..0.3) : speed = (0.01..0.1)

  string.chars.each do |char|
    sleep(rand(speed))
    print char
  end

  puts "\n"
  sleep(1.5)
end

def animation(array, title=false)
  title ? delay = 1 : delay = 0.15

  array.each do |line|
    system("clear")
    puts line
    sleep(delay)
  end
  puts "\n"
end

def ending_animation(score)
  if score == 3
    animation(FLAG_ART)
    sleep(0.5)
    puts PLAYER_WINS
  else
    animation(SKYNET_ART)
    sleep(0.5)
    puts SKYNET_WINS
  end
end

# Main program

system("clear")

retro_display(MESSAGES["story1"], true)
retro_display(MESSAGES["story2"])
retro_display(MESSAGES["story3"])

animation(TITLE_ART, true)
system("clear")

puts MESSAGES["welcome"].center(80)
sleep(1.5)

system("clear")
retro_display(MESSAGES["connection"])
system("clear")

retro_display(MESSAGES["instructions"])

loop do
  answer = ask(MESSAGES["confirm_instructions"])
  break if answer == "y" || answer == "yes"
end

loop do # Game loop (See lines 169-175)
  score_player = 0
  score_skynet = 0
  round = 1

  loop do # Set of rounds loop (See line 159)
    system("clear")

    retro_display((MESSAGES["loading_round"] + "#{round} ").ljust(40, "#"))
    puts "\n"

    puts MESSAGES["abbreviations"]
    puts "\n"

    player_weapon = ask(MESSAGES["ask_weapon"], true, WEAPONS_RULES.keys)

    skynet_weapon = WEAPONS_RULES.keys.sample

    player_wins_round = if WEAPONS_RULES[player_weapon].include?(skynet_weapon)
                          true
                        else
                          false
                        end

    if player_weapon == skynet_weapon
      retro_display(MESSAGES["tie_check"])
      retro_display(MESSAGES["result_tie"])

      retro_display(MESSAGES["resetting"])
    elsif player_wins_round
      retro_display(MESSAGES["not_tie"])
      retro_display(MESSAGES["player_wins"])

      score_player += 1
      retro_display(MESSAGES["player_winning"]) if score_player == 2
    else
      retro_display(MESSAGES["not_tie"])
      retro_display(MESSAGES["skynet_wins"])

      score_skynet += 1
      retro_display(MESSAGES["skynet_winning"]) if score_skynet == 2
    end

    round += 1

    break if score_player == GAMES_TO_WIN || score_skynet == GAMES_TO_WIN
  end # This is the end of the rounds loop

  sleep(0.5)
  system("clear")

  ending_animation(score_player)

  puts "\n" * 2

  answer = ""
  loop do
    answer = ask(MESSAGES["play_again"], false)
    break if answer[0] == "y" || answer[0] == "n"
  end

  break if answer[0] == "n"
end # This is the end of the game loop

system("clear")

puts MESSAGES["thanks"].center(120)
puts "\n"
