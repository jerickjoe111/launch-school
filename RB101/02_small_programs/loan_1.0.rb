# 16. Assignment Mortgage/Car Loan Calculator

# Loan calculator 1.0

# Lucas Sorribes, June 2022.

require "date"

# Helper methods:

def greet_valid_name(message)
  name = ""
  loop do
    puts message
    name = gets.chomp.strip
    break unless name.empty?
  end

  puts "\n"
  puts "Hello, Mr./Ms. #{name.capitalize}."
  puts "\n"

  name
end

def valid_integer?(amount)
  return false if amount.to_i == 0

  !amount.match?(/\D/) && !amount.empty?
end

def valid_apr?(apr)
  false if apr.to_i == 0

  apr.match?(/^\d+(\.\d+)*$/) && !apr.empty?
end

def validate_input_integer(prompt_message, invalid_message)
  valid_integer = ""
  loop do
    puts prompt_message
    valid_integer = gets.chomp.delete("$%").strip
    if valid_integer?(valid_integer)
      valid_integer = valid_integer.to_i
      break
    else
      puts invalid_message
    end
  end
  valid_integer
end

def validate_input_apr(prompt_message, invalid_message)
  valid_apr = ""
  loop do
    puts prompt_message
    valid_apr = gets.chomp.delete("$%").strip
    if valid_apr?(valid_apr)
      valid_apr = valid_apr.to_f
      break
    else
      puts invalid_message
    end
  end
  valid_apr
end

def ask(message)
  answer = ""

  loop do
    puts message
    answer = gets.chomp.downcase.strip[0]
    break if %w{y n}.include?(answer)
  end

  answer == "y"
end

def wait_output(message, data="")
  puts "\n"

  puts message
  sleep(1)
  puts data

  puts "\n"
end

def format_number(number)
  whole, decimal = number.to_s.split(".")

  if whole.to_i < -999 || whole.to_i > 999
    whole.reverse!.gsub!(/(\d{3})(?=\d)/, "\\1,").reverse!
  end

  [whole, decimal].compact.join(".")
end

# Main program

system("clear")
puts " Welcome to Mortgage / Car Loan Calculator 1.0 ".center(120, "#")
puts "\n"

# maybe use a hash {username: hash{variable: data}} ?????????????????????????????

username = ""
loan_amount = ""
monthly_interest_rate = ""
apr = ""
loan_term_months = ""
user_info = ""

loop do # User data input loop. It iterates again if user wants to modify data (see line 142) !!!!!!!!!!!!!!!!!!!
  username = greet_valid_name("Please, enter your name:")

  loan_amount = validate_input_integer("Please, enter the loan amount in dollars:",
                                       "Please, enter a valid loan amount. Decimals are not allowed.")

  apr = validate_input_apr("Please, enter the Annual Percentage Rate (APR):",
                           "Please, enter a valid Annual Percentage Rate.")
  monthly_interest_rate = apr / 12 / 100

  loan_term_months = if ask("Will you enter the loan term in years? (y/n)")
                       validate_input_integer("How many years do you need to pay back the loan?",
                                              "Please, enter a valid number of years.") * 12
                     else
                       validate_input_integer("How many months do you need to pay back the loan?",
                                              "Please, enter a valid number of months.")
                     end

  user_info = "
    Name: #{username}
    Loan amount: $#{format_number(loan_amount)}
    Annual Percentage Rate: #{apr} % (Monthly interest rate: #{format('%.3f', monthly_interest_rate)} %)
    Loan term: #{loan_term_months} months (#{loan_term_months / 12} years)
  "

  wait_output("Saving information...", user_info)

  break if ask("Is this information correct? (y/n)")

  system("clear")
end # This is the end of the user data input loop

# Interest rate calculation formula:
monthly_payment = loan_amount * (monthly_interest_rate / (1 - (1 + monthly_interest_rate)**(-loan_term_months)))

total_payment = monthly_payment * loan_term_months
total_interest = total_payment - loan_amount

calculation_output = "
    Monthly payment: $#{format_number(format('%.2f', monthly_payment))}
    Number of payments: #{loan_term_months}
    Total of #{loan_term_months} payments: $#{format_number(format('%.2f', total_payment))}
    Total interest: $#{format_number(format('%.2f', total_interest))}
    Current date: #{Date.today}
    Date of final payment: #{Date.today.next_month(loan_term_months)}
"

wait_output("Calculating loan...", calculation_output)

if ask("Would you like to export loan information to a .txt file? (y/n)")

  wait_output("Exporting data...")

  txt_file = File.new("loan_#{username.delete(' ').downcase}_#{Date.today.strftime('%m%d%Y')}.txt", "w")
  txt_file.puts "Mortgage / Car Loan Calculator 1.0"
  txt_file.puts "\n"
  txt_file.puts "Amortized loan information:"
  txt_file.puts "\n"
  txt_file.puts user_info
  txt_file.puts calculation_output
  txt_file.close
end

puts "\n"
puts "Good bye Mr./Ms. #{username.capitalize}!"
puts "\n"

puts " Thanks for using Mortgage/Loan Calculator 1.0 ".center(120, "#")
