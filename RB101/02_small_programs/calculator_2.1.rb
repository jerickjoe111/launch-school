# This is my own version of Assignment "11. Walk-through: Refactoring Calculator"
# in "RRB101/02_small_programs/calculator_2.0.rb".

# To see "15. Assignment: Calculator: Bonus Features", please go to "calculator_3.0_bonus.rb" in this same folder.

# Thank you

def prompt(message)
  puts "=> #{message}"
end

def valid_number?(number)
  !number.match?(/\D/) && !number.empty?
end

prompt "Welcome to Calculator!"

name = ""
loop do
  prompt "Please, enter your name:"
  name = gets.chomp
  break unless name.empty?
end

prompt "Hi #{name}!"

loop do # Main loop (see line 81)
  number01 = ""
  loop do
    prompt "What's the first number?"
    number01 = gets.chomp
    if valid_number?(number01)
      number01 = number01.to_i
      break
    end
  end

  number02 = ""
  loop do
    prompt "What's the second number?"
    number02 = gets.chomp
    if valid_number?(number02)
      number02 = number02.to_i
      break
    end
  end

  prompt <<-MSG
  What operation would you like to perform? 
    1) add 
    2) subtract 
    3) multiply 
    4) divide
  MSG

  operator = ""
  loop do
    operator = gets.chomp
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
               break
             end
             number01.to_f / number02
           end

  puts "The result is #{result}."
  prompt("Do you want to perform another calculation? (Y to calculate again)")
  answer = gets.chomp
  break if answer.downcase.start_with?("n")
end

prompt("Thank you for using the calculator. Good bye!")
