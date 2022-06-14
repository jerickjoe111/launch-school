# This is the Calculator program corresponding to Assignment "11. Walk-through: Refactoring Calculator". 

# To see my own version of this program, please go to "calculator_2.1.rb" in this same folder.

# To see "15. Assignment: Calculator: Bonus Features", please go to "calculator_3.0_bonus.rb" in this same folder.

# Thank you.

def prompt(message)
  Kernel.puts("=> #{message}")
end

def valid_number?(num)
  num.to_i != 0
end

def operation_to_message(op)
  case op
  when "1"
    "Adding"
  when "2"
    "Subtracting"
  when "3"
    "Multiplying"
  when "4"
    "Dividing"
  end
end

prompt("Welcome to Calculator! Enter your name: ")

name = ""
loop do
  name = Kernel.gets.chomp
  if name.empty?
    prompt("Make sure to use a valid name.")
  else
    break
  end
end

prompt("Hi #{name}")

loop do # Main loop:
  number1 = ""
  loop do
    prompt("What's the first number")
    number1 = Kernel.gets.chomp.to_i
    if valid_number?(number1)
      break
    else
      prompt("Hmm... that doesn't look like a valid number.")
    end
  end

  number2 = ""
  loop do
    prompt("What's the first number")
    number2 = Kernel.gets.chomp.to_i
    if valid_number?(number2)
      break
    else
      prompt("Hmm... that doesn't look like a valid number.")
    end
  end

  operator_prompt = <<-MSG
What operation would you like to perform? 
    1) add 
    2) subtract 
    3) multiply 
    4) divide
  MSG
  
  prompt(operator_prompt)

  operator = ""

  loop do
    operator = Kernel.gets.chomp
    
    if %w(1 2 3 4).include?(operator)
      break
    else
      prompt("Must choose 1, 2, 3 or 4.")
    end
  end

  prompt("#{operation_to_message(operator)} the two numbers...")

  result = case operator
           when "1"
            number1 + number2
           when "2"
            number1 - number2
           when "3"
            number1 * number2
           when "4"
            number1.to_f / number2
  end
    
  Kernel.puts("The result is #{result}.")
  prompt("Do you want to perform another calculation? (Y to calculate again)")
  answer = Kernel.gets.chomp
  break unless answer.downcase.start_with?("y")
end

prompt("Thank you for using the calculator. Good bye!")
