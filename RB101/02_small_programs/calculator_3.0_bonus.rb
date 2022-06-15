# 15. Assignment: Calculator: Bonus Features

# Calculator 3.0

# by Lucas Sorribes, June 2022.

def prompt(message)
  puts "=> #{message}"
end

def valid_number?(number)
  number.match?(/^\-*\d+(\.\d+)*$/) && !number.empty?
end

def float_or_int(number)
  number.match?(/\./) ? number.to_f : number.to_i
end

system("clear")
puts " Welcome to Calculator 3.0!(now with bonus features) ".center(120, "#")
puts "\n"

name = ""
loop do
  prompt "Please, enter your name:"
  name = gets.chomp.strip
  break unless name.empty?
end

prompt "Hi #{name}!"

loop do # Main loop (see lines 92-98)
  number01 = ""
  loop do
    prompt "What's the first number?"
    number01 = gets.chomp.strip
    if valid_number?(number01)
      number01 = float_or_int(number01)
      break
    else
      prompt "Please, enter a valid integer or decimal."
    end
  end

  number02 = ""
  loop do
    prompt "What's the second number?"
    number02 = gets.chomp.strip
    if valid_number?(number02)
      number02 = float_or_int(number02)
      break
    else
      prompt "Please, enter a valid integer or decimal."
    end
  end

  prompt "What operation would you like to perform?
    1) add
    2) subtract
    3) multiply
    4) divide
  "

  operator = ""
  loop do
    operator = gets.chomp.strip
    break if !operator.match?(/[^1-4]/) && !operator.empty?
    prompt("Must choose 1, 2, 3 or 4.")
  end

  result = case operator
           when "1"
             number01 + number02
           when "2"
             number01 - number02
           when "3"
             number01 * number02
           when "4"
             if number02 == 0
               prompt "You can't divide a number by 0!"
             else
               number01.to_f / number02
             end
           end

  operation = { "1" => "addition", "2" => "subtraction", "3" => "multiplication", "4" => "division" }
  if result
    prompt "Performing" + " " + operation[operator] + "... "
    puts "The result is #{result}." if result
  end

  answer = ""
  loop do
    prompt("Do you want to perform another calculation? (Y/N)")
    answer = gets.chomp.strip.upcase[0]
    break if answer == "Y" || answer == "N"
  end
  break if answer == "N"

  system("clear")
end

puts " Thank you for using Calculator 3.0. Good bye! ".center(120, "#")
