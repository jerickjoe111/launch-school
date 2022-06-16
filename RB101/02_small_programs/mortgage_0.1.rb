# 16. Assignment Mortgage/Car Loan Calculator

# Lucas Sorribes, June 2022.


# INPUT: Prompt user:

  # Ask name //
    # Check not empty name
    # SET username = name

  # loan amount in dollars. //
    # validate input (int or float). 
    # SET loan_amount

  # APR. validate input  //
    # validate(remove \% if any, int or float). 
    # convert into monthly interest rate. 
    # SET monthly_interest_rate

  # loan duration
    # ask years
      # SET years
    # ask months
      # SET months
    # SET loan_term_months = years * 12 + months //
  
  # display all information //
    # show years
    # show months
    # show APR

  # ask for user confirmation: 
    # IF yes, go to OUTPUT: calculations
    # IF no, go to INPUT: prompt user

# OUTPUT: Calculations:
  
  # Perform calculations //

  # Display calculations result
    # Monthly payment
    # Current date
    # Date of final payment

  # Option to save txt file with all the info???

require "date"

# Helpers:

def valid_integer?(amount)
  return false if amount.to_i == 0
  !amount.match?(/\D/) && !amount.empty?
end

def valid_apr?(apr)
  false if apr.to_i == 0
  apr.match?(/^\d+(\.\d+)*$/) && !apr.empty?
end

def format_number(number)
  whole, decimal = number.to_s.split('.')
  if whole.to_i < -999 || whole.to_i > 999
    whole.reverse!.gsub!(/(\d{3})(?=\d)/, '\\1,').reverse!
  end
  [whole, decimal].compact.join('.')
end

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
calculation_output = ""

loop do # User data input loop. It iterates again if user wants to modify data (see lines ###-###)

  loop do
    puts "Please, enter your full name:"
    username = gets.chomp.strip
    break unless username.empty?
  end

  puts "Hello #{username}."


  loop do
    puts "Please, enter the loan amount in dollars:"
    loan_amount = gets.chomp.delete("$").strip
    if valid_integer?(loan_amount)
      loan_amount = loan_amount.to_i
      break
    else
      puts "Please, enter a valid loan amount. Decimals are not allowed."
    end
  end

  loop do
    puts "Please, enter the Annual Percentage Rate (APR):"
    apr = gets.chomp.delete("%").strip
    if valid_apr?(apr)
      apr = apr.to_f
      monthly_interest_rate = apr / 12 / 100
      break
    else
      puts "Please, enter a valid Annual Percentage Rate."
    end
  end

  loop do 
    puts "Please, press 'y' to introduce the loan term in years or 'm' to do it in months:"
    answer = gets.chomp.downcase.strip[0]
    break if %W{y m}.include?(answer)
  end

  # TODO: code helper methods !!!!!!!!!!

  loan_term_months = case answer
                     when "y"
                       years = ""
                       loop do
                         puts "How many years do you need to pay back the loan?"
                         years = gets.chomp.strip
                         if valid_integer?(years)
                           years = years.to_i
                           break
                         end
                         puts "Please, enter a valid number of years."
                       end
                       years * 12
                     when "m"
                       months = ""
                       loop do
                         puts "How many months do you need to pay back the loan?"
                         months = gets.chomp.strip
                         if valid_integer?(months)
                           months = months.to_i
                           break
                         end
                         puts "Please, enter a valid number of months."
                       end
                       months
                     end

  user_info = "
    Name: #{username}
    Loan amount: $#{format_number(loan_amount)}
    Annual Percentage Rate: #{apr}% (Monthly interest rate: #{format("%.3f", monthly_interest_rate)}%)
    Loan term: #{loan_term_months} months (#{loan_term_months / 12} years)
  "

  puts "Processing information..."
  sleep(1)
  puts user_info
  puts "\n"

  loop do
    puts "Is this information correct? 'y' to continue / 'n' to enter data again"
    answer = gets.chomp.strip.downcase[0]
    break if %W{y n}.include?(answer)
  end
  break if answer == "y"

  system("clear")
end

# TODO input loop
puts "\n"
puts "Performing calculations..."
sleep(1)
puts "\n"

monthly_payment = loan_amount.to_f * (monthly_interest_rate / (1 - (1 + monthly_interest_rate)**(-loan_term_months)))

total_payment = monthly_payment * loan_term_months
total_interest = total_payment - loan_amount

# TODO keep data in hash???????
calculation_output = "
    Monthly payment: $#{format_number(format("%.2f", monthly_payment))}
    Number of payments: #{loan_term_months}
    Total of #{loan_term_months} payments: $#{format_number(format("%.2f", total_payment))}
    Total interest: $#{format_number(format("%.2f", total_interest))}
    Current date: #{Date.today}
    Date of final payment: #{Date.today.next_month(loan_term_months)}
"
puts calculation_output
puts "\n"

puts "Do you want to export this data to 'mortgage_#{username.delete(" ").downcase}.txt' file? (y/n)"

txt_file = File.new("mortgage_#{username.delete(" ").downcase}.txt", "w")
txt_file.puts "Mortgage / Car Loan Calculator 1.0"
txt_file.puts "\n"
txt_file.puts "Amortized loan information:"
txt_file.puts "\n"
txt_file.puts user_info
txt_file.puts calculation_output
txt_file.close

puts "\n"
puts "Good bye #{username}!"
puts "\n"

puts " Thanks for using Mortgage/Loan Calculator 1.0 ".center(120, "#")
