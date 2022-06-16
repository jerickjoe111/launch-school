# 16. Assingment Mortgage / Car Loan Calculator

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

def valid_integer?(amount)
  return false if amount.to_i == 0
  !amount.match?(/\D/) && !amount.empty?
end

def valid_apr?(apr)
  false if apr.to_i == 0
  apr.match?(/^\d+(\.\d+)*$/) && !apr.empty?
end

system("clear")
puts " Welcome to Mortgage / Car Loan Calculator 1.0 ".center(120, "#")
puts "\n"

loop do # User data input loop. It iterates again if user wants to modify data (see lines ###-###)
  username = ""
  loop do
    puts "Please, enter your full name:"
    username = gets.chomp.strip
    break unless username.empty?
  end

  puts "Hi #{username}."

  loan_amount = ""
  loop do
    puts "Please, enter the loan amount in dollars ($ is not necessary):"
    loan_amount = gets.chomp.delete("$").strip
    if valid_integer?(loan_amount)
      loan_amount = loan_amount.to_i
      break
    else
      puts "Please, enter a valid loan amount. Decimals are not allowed."
    end
  end

  monthly_interest_rate = ""
  apr = ""
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

  answer = ""
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

  puts "\n"
  puts "Processing information..."
  sleep(1)
  user_info = "Name: #{username}
  Loan amount: $#{loan_amount}
  Annual Percentage Rate: #{apr}%
  Monthly interest rate: #{format("%.2f", monthly_interest_rate)}
  Loan term: #{loan_term_months} months (#{loan_term_months / 12} years)
  "
  puts "\n"
  puts user_info
  puts "\n"
  puts "Is this information correct? 'y' to continue / 'n' to enter data again"
end

# TODO input loop
puts "\n"
puts "Performing calculations..."
sleep(1)
puts "\n"

monthly_payment = loan_amount.to_f * (monthly_interest_rate / (1 - (1 + monthly_interest_rate)**(-loan_term_months)))

# TODO keep data in hash???????
data_output = "Monthly payment: #{format("%.2f", monthly_payment)}
Number of payments: #{loan_term_months}
Current date: #{Date.today}
Date of final payment: #{Date.today.next_month(loan_term_months)}
"
puts data_output
puts "Do you want to export this data to 'mortgage_#{username.delete(" ").downcase}.txt' file? (y/n)"

txt_file = File.new("mortgage_#{username.delete(" ").downcase}.txt", "w")
txt_file.puts "Mortgage / Car Loan Calculator 1.0"
txt_file.puts "\n"
txt_file.puts "Amortized loan information:"
txt_file.puts "\n"
txt_file.puts user_info
txt_file.puts "\n"
txt_file.puts data_output
txt_file.close

puts "Good bye #{username}!"

puts " Thanks for using Mortgage / Loan Calculator 1.0 ".center(120, "#")
