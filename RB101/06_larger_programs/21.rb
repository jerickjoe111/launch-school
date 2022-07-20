# RB101 Lesson 6: Assignment: Twenty-One

# Lucas Sorribes, July 2022.

require "pry"

DECK_SIZE = 52

HEART = "♥"
HEARTS_RANGE = (1..13)

DIAMOND = "♦"
DIAMONDS_RANGE = (14..26)

CLUB = "♣"
CLUBS_RANGE = (27..39)

SPADE = "♠"

ACES = [13, 26, 39, 52]

JACKS = [10, 23, 36, 49]

QUEENS = [11, 24, 37, 50]

KINGS = [12, 25, 38, 51]

COURT_CARDS = JACKS + QUEENS + KINGS

BUST_NUMBER = 21

DEALER_SAFE_VALUE = 17

ROUNDS_TO_WIN = 5

CARD_TOP =    "  ╔═══════╗  "
CARD_MIDDLE = "  ║       ║  "
CARD_BOTTOM = "  ╚═══════╝  "

WELCOME_MESSAGE = <<~MSG
#{' Hello and welcome! '.center(120, '#')}

Thanks for playing my version of Tweny-One! 

This is a very old game with an interesting history. 
According to Wikipedia, 'the game is first mentioned by name in a 1611 Spanish 
dictionary where, under the entry for 'card' (carta), it mentions the game 
of ventiuno ('twenty-one'). Just two years later, the first brief description 
of the game is given in a novella by Spanish author, Miguel de Cervantes, 
most famous for writing Don Quixote. Cervantes was a gambler, and the main 
characters of his tale 'Rinconete y Cortadillo', from Novelas Ejemplares, 
are a couple of cheats working in Seville. They are proficient at cheating 
at veintiuna (sic), and state that the object of the game is to reach
21 points without going over and that the ace scores 1 or 11...'

(source: https://en.wikipedia.org/wiki/Twenty-One_(banking_game)#History)

Please, press 'enter' to continue.
MSG

RULES = <<~MSG
The goal of the game is to try to get as close to a hand value of 21
as possible, without going over. If you go over 21, it's a 'bust' and you lose.
There is  a Dealer and a player: you. Both opponents are initially dealt 2
cards. The player sees his/her hand, but can only see one of the dealer's
cards. Every time in your turn you can 'hit' (have another card) or 'stay' 
(keep the hand and skip to the dealer's turn). When both stay, the hand values
are compared, and wins who has the greater one.
Good luck!

Remember!

The numbers 2 through 10 (numeral cards or 'pips') are worth their face value.
The jack, queen, and king (court cards) are each worth 10.
The ace can be worth 1 or 11: it is basically an 11 everytime it does not
'bust' you.

Please, press 'enter' to continue.
MSG

def prompt(message)
  puts "=> #{message}"
end

def ask(message, option_a="yes", option_b="no")
  answer = ""
  loop do
    prompt "#{message} "\
    "([#{option_a[0]}]#{option_a[1..-1]}/[#{option_b[0]}]#{option_b[1..-1]})"

    answer = gets.chomp.strip.downcase

    break if [option_a, option_a[0], option_b, option_b[0]].include?(answer)
    prompt "Please, enter a valid input."
  end

  answer[0] == option_a[0] ? option_a : option_b
end

def ask_name
  name = ""
  loop do
    prompt "What is your name?"
    name = gets.chomp.strip.capitalize

    if name.empty?
      prompt "Name can't be empty. I need some way to call you!"
    elsif name.include?("Dealer") || name.include?("dealer")
      prompt "You can't be the Dealer!"
    else
      break
    end
  end

  name
end

def initialize_deck
  (1..DECK_SIZE).each_with_object({}) do |number, hash|
    suit = assign_card_suit(number)

    value = assign_card_value(number, suit)

    value_symbol = assign_card_symbol(number, value)

    hash[number] = { value: value, symbol: value_symbol + suit, dealt: false }
  end
end

def assign_card_suit(number)
  case number
  when HEARTS_RANGE then HEART
  when DIAMONDS_RANGE then DIAMOND
  when CLUBS_RANGE then CLUB
  else SPADE
  end
end

def assign_card_value(number, card_suit)
  if ACES.include?(number) then 11
  elsif COURT_CARDS.include?(number) then 10
  else apply_pip_value(number, card_suit)
  end
end

def assign_card_symbol(number, card_value)
  if ACES.include?(number) then "A"
  elsif JACKS.include?(number) then "J"
  elsif QUEENS.include?(number) then "Q"
  elsif KINGS.include?(number) then "K"
  else card_value.to_s
  end
end

def apply_pip_value(number, card_suit)
  case card_suit
  when HEART then number + 1
  when DIAMOND then (number - 12)
  when CLUB then (number - 25)
  else (number - 38)
  end
end

def display_art(hand, deck)
  cards_in_hand = hand.is_a?(Integer) ? 1 : hand.size

  print_margin(cards_in_hand, "top")

  print_value_line(hand, cards_in_hand, deck)

  print_margin(cards_in_hand)

  print_suit_line(hand, cards_in_hand, deck)

  print_margin(cards_in_hand)

  print_value_line(hand, cards_in_hand, deck, false)

  print_margin(cards_in_hand, "bottom")
end

def print_margin(hand_size, margin="middle")
  case margin
  when "top" then hand_size.times { print CARD_TOP }
  when "bottom" then hand_size.times { print CARD_BOTTOM }
  else hand_size.times { print CARD_MIDDLE }
  end

  puts ""
end

def print_value_line(hand, cards_in_hand, deck, top=true)
  cards_in_hand.times do |card|
    if a_ten?(hand[card], deck)
      ten = true
      value = deck[hand[card]][:symbol][0..1]
    else
      value = deck[hand[card]][:symbol][0]
    end

    if top
      print ten ? ("  ║#{value}     ║  ") : ("  ║#{value}      ║  ")
    else
      print ten ? ("  ║    #{value} ║  ") : ("  ║     #{value} ║  ")
    end
  end

  puts ""
end

def print_suit_line(hand, hand_size, deck)
  hand_size.times do |card|
    symbol = deck[hand[card]][:symbol][-1]

    print "  ║   #{symbol}   ║  "
  end

  puts ""
end

def print_empty_line(hand_size)
  hand_size.times { print CARD_MID + " " }

  puts ""
end

def a_ten?(card, deck)
  deck[card][:symbol].include?("10")
end

def hand_value(player, deck)
  sum = 0

  player[:hand].each { |card| sum += deck[card][:value] }

  sum > BUST_NUMBER ? check_aces(player[:hand], sum) : sum
end

def check_aces(hand, sum)
  aces = 0
  ACES.each do |ace|
    aces += 1 if hand.include?(ace)
  end

  # Ace's value becomes 1 if the hand sum is more than 21,
  # hence the 10 (11 - 10 = 1)
  if aces == 1
    sum - 10
  elsif aces >= 2
    extra_aces = aces - 1
    sum - 10 * (extra_aces)
  else
    sum
  end
end

def deal_cards!(deck, number_of_cards=2)
  hand = deck.keys.select do |card|
    deck[card][:dealt] == false
  end.sample(number_of_cards)

  hand.each { |card| deck[card][:dealt] = true }
end

# The AI will show the card with less value in order to trick the player
def show_card(dealer, deck)
  prompt "The Dealer shows:"
  
  card_shown = [dealer[:hand].min do |card_a, card_b| 
    deck[card_a][:value] <=> deck[card_b][:value]
  end]
  
  
  display_art(card_shown, deck)
  puts ""
end

def show_hand(opponent, deck)
  puts ""

  puts "#{opponent[:name]}'s hand:"
  display_art(opponent[:hand], deck)

  puts ""
  puts "Value:"
  puts hand_value(opponent, deck)

  puts ""
end

def turn(opponent, deck, round, dealer=false)
  answer = nil
  loop do
    system "clear"

    prompt "ROUND: #{round}"
    prompt "⭐ It's #{opponent[:name]}'s turn! ⭐"

    prompt "🍀 #{opponent[:name]} hits! 🍀" if answer

    break if check_bust?(opponent, deck)

    answer = choose(opponent, deck, dealer)

    break if answer == "stay"

    hit(opponent, deck)
  end
end

def choose(opponent, deck, dealer)
  if opponent[:name] != "The Dealer"
    show_hand(opponent, deck)
    show_card(dealer, deck)
    ask("Hit or Stay?", "hit", "stay")
  else
    hand_value(opponent, deck) <= DEALER_SAFE_VALUE ? "hit" : "stay"
  end
end

def hit(opponent, deck)
  card = deal_cards!(deck, 1)[0]

  opponent[:hand] << card
end

def check_bust?(opponent, deck)
  if hand_value(opponent, deck) > BUST_NUMBER
    prompt "💥 BOOM! 💥"
    prompt "👻  #{opponent[:name]} is busted! 👻"

    opponent[:busted] = true
    true
  else
    false
  end
end

def busted?(opponent)
  opponent[:busted] == true
end

def compare(player, dealer, deck)
  prompt "🃏 Let's see who has the bigger hand! 🃏"

  player_hand = hand_value(player, deck)
  dealer_hand = hand_value(dealer, deck)

  if player_hand > dealer_hand
    "player"
  elsif dealer_hand > player_hand
    "dealer"
  else
    "tie"
  end
end

def who_busted(player)
  if player[:busted]
    "dealer"
  else
    "player"
  end
end

def declare(round_winner)
  case round_winner
  when "player" then prompt "🎉 Yeah! You win the round! 🎉"
  when "dealer" then prompt "👺 The Dealer wins the round! 👺"
  else prompt " 🤜 It's a tie! 🤛 "
  end
end

def keep_score!(won_rounds, winner)
  # Notice there is no else condition: if it's a tie, no one scores.
  case winner
  when "dealer" then won_rounds[:dealer] += 1
  when "player" then won_rounds[:player] += 1
  end
end

def game_tie?(won_rounds)
  won_rounds[:player] == won_rounds[:dealer]
end

def display_score(won_rounds, round)
  rounds_left = ROUNDS_TO_WIN - round
  plural_s = rounds_left == 1 ? "" : "s"

  puts <<~MSG

  Score:

  You have won #{won_rounds[:player]} rounds.

  The Dealer has won #{won_rounds[:dealer]} rounds.

  #{ROUNDS_TO_WIN - round} round#{plural_s} left!

  Press 'enter' to continue

  MSG

  gets
end

def declare_game_winner(won_rounds)
  case won_rounds.key(won_rounds.values.max)
  when :player then prompt "🎉 You won the game! Congratulations! 🎉"
  else prompt "👺 Oh no! The Dealer won the game!"\
                           " Good luck next time! 👺"
  end

  puts ""
end

system "clear"
puts WELCOME_MESSAGE
gets

if ask("Do you want to read the rules?") == "yes"
  puts RULES
  gets
end

system "clear"

player_name = ask_name

# Game loop
loop do
  won_rounds = { player: 0, dealer: 0 }
  round = 1

  # Rund loop
  loop do
    deck = initialize_deck
    binding.pry

    player = { name: player_name, hand: deal_cards!(deck), busted: false }
    dealer = { name: "The Dealer", hand: deal_cards!(deck), busted: false }

    round_winner = nil
    loop do
      turn(player, deck, round, dealer)
      break if busted?(player)

      turn(dealer, deck, round)
      break if busted?(dealer)

      # Both players have 'stayed':
      round_winner = compare(player, dealer, deck)
      break
    end

    round_winner ||= who_busted(player)

    [player, dealer].each { |one| show_hand(one, deck) }

    keep_score!(won_rounds, round_winner)

    declare(round_winner)

    display_score(won_rounds, round)

    round += 1

    break if round > ROUNDS_TO_WIN && !game_tie?(won_rounds)
    # End of the round loop
  end

  declare_game_winner(won_rounds)

  break if ask("Do you want to play again?") == "no"
  # End of the game loop
end

puts " Thanks for playing Twenty-One! Good bye! ".center(120, "#")
