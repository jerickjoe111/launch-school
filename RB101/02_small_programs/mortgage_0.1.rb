# 16. Assignment Mortgage/Car Loan Calculator

# Lucas Sorribes, June 2022.

require "date"

# Helper methods:

def valid_integer?(amount)
  return false if amount.to_i == 0

  !amount.match?(/\D/) && !amount.empty?
end

def valid_apr?(apr)
  false if apr.to_i == 0

  apr.match?(/^\d+(\.\d+)*$/) && !apr.empty?
end

def ask(message)
  answer = ""

  loop do
    puts message

    answer = gets.chomp.downcase.strip[0]

    break if %w{y m}.include?(answer)
  end

  answer
end

def wait_output(message, data)
  puts "\n"

  puts message

  sleep(1)

  puts data

  puts "\n"
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

loop do # User data input loop. It iterates again if user wants to modify data (see lines ###-###)
  loop do
    puts "Please, enter your name:"
    username = gets.chomp.strip
    break unless username.empty?
  end
  puts "\n"
  puts "Hello, #{username}."
  puts "\n"

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

  # TODO: code helper methods !!!!!!!!!!

  loan_term_months =
    case ask("Will you enter the loan term in years? (y/n)")
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
    Annual Percentage Rate: #{apr} % (Monthly interest rate: #{format('%.3f', monthly_interest_rate)} %)
    Loan term: #{loan_term_months} months (#{loan_term_months / 12} years)
  "

  wait_output("Saving information...", user_info)

  break if ask("Is this information correct? 'y' to continue / 'n' to enter data again") == "y"

  system("clear")
end # This is the end of the user data input loop

monthly_payment = loan_amount * (monthly_interest_rate / (1 - (1 + monthly_interest_rate)**(-loan_term_months)))

total_payment = monthly_payment * loan_term_months
total_interest = total_payment - loan_amount

# TODO keep data in hash???????
calculation_output = "
    Monthly payment: $#{format_number(format('%.2f', monthly_payment))}
    Number of payments: #{loan_term_months}
    Total of #{loan_term_months} payments: $#{format_number(format('%.2f', total_payment))}
    Total interest: $#{format_number(format('%.2f', total_interest))}
    Current date: #{Date.today}
    Date of final payment: #{Date.today.next_month(loan_term_months)}
"

wait_output("Calculating loan...", calculation_output)

if ask("Do you want to export this data to
       'loan_#{username.delete(' ').downcase}_#{Date.today.strftime('%m%d%Y')}.txt' file? (y/n)")
  puts "Exporting data..."
  sleep(1)
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
puts "Good bye #{username}!"
puts "\n"

puts " Thanks for using Mortgage/Loan Calculator 1.0 ".center(120, "#")
