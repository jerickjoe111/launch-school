# 16. Assignment Mortgage/Car Loan Calculator

# Loan Calculator 1.0

# Lucas Sorribes, June 2022.

# Available languages: English (en), Spanish (sp)
# To change language, set LANGUAGE constant.

require "date"
require "yaml"

MESSAGES = YAML.load_file("loan_messages.yml")
LANGUAGE = "en"

# Helper methods:

# messages
# prompt
# greet_valid_name
# valid_integer?
# valid_apr?
# validate_input_integer
# validate_input_apr
# ask
# wait_output
# format_number

def messages(message, lang="en")
  MESSAGES[lang][message]
end

def prompt(key)
  message = messages(key, LANGUAGE)
  "=> #{message}"
end

def greet_valid_name(message)
  name = ""

  loop do
    puts message
    name = gets.chomp.strip
    break unless name.empty?
  end

  puts "\n"
  puts MESSAGES[LANGUAGE]["greet"] + name.capitalize + "."
  puts "\n"

  name
end

def valid_integer?(amount)
  return false if amount.to_i == 0
  !amount.match?(/\D/) && !amount.empty?
end

def valid_apr?(apr)
  return false if apr.to_i == 0
  return false if apr.to_i >= 101

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
puts MESSAGES[LANGUAGE]["welcome"].center(120, "#")
puts "\n"

username = ""
loan_amount = ""
monthly_interest_rate = ""
apr = ""
loan_term_months = ""
user_info = ""

loop do # User data input loop. It iterates again if user wants to modify data (see line 176)
  username = greet_valid_name(prompt("prompt_name"))

  loan_amount = validate_input_integer(prompt("prompt_loan_amount"),
                                       prompt("invalid_loan_amount"))

  apr = validate_input_apr(prompt("prompt_apr"),
                           prompt("invalid_apr"))
  monthly_interest_rate = apr / 12 / 100

  loan_term_months = if ask(prompt("prompt_term_in_years"))
                       validate_input_integer(prompt("prompt_years"),
                                              prompt("invalid_years")) * 12
                     else
                       validate_input_integer(prompt("prompt_months"),
                                              prompt("invalid_months"))
                     end

  user_info = "
    #{MESSAGES[LANGUAGE]['output_name']}                      #{username.capitalize}
    #{MESSAGES[LANGUAGE]['output_loan']}              $#{format_number(loan_amount)}
    #{MESSAGES[LANGUAGE]['output_apr']}    #{apr} %
    #{MESSAGES[LANGUAGE]['output_monthly_rate']}    #{format('%.3f', monthly_interest_rate * 100)} %
    #{MESSAGES[LANGUAGE]['output_term']}             #{loan_term_months} #{MESSAGES[LANGUAGE]['output_months']}
                           (#{format('%.1f', loan_term_months / 12.0)} #{MESSAGES[LANGUAGE]['output_years']})
  "

  wait_output(MESSAGES[LANGUAGE]['output_saving'], user_info)

  break if ask(prompt("prompt_correct_info"))

  system("clear")
end # This is the end of the user data input loop

# Interest rate calculation formula:
monthly_payment = loan_amount * (monthly_interest_rate / (1 - (1 + monthly_interest_rate)**(-loan_term_months)))

total_payment = monthly_payment * loan_term_months
total_interest = total_payment - loan_amount

calculation_output = "
    #{MESSAGES[LANGUAGE]['output_monthly_payment']}          $#{format_number(format('%.2f', monthly_payment))}
    #{MESSAGES[LANGUAGE]['output_payments']}           #{loan_term_months}
    #{MESSAGES[LANGUAGE]['output_total']}     $#{format_number(format('%.2f', total_payment))}
    #{MESSAGES[LANGUAGE]['output_interest']}        $#{format_number(format('%.2f', total_interest))}
    #{MESSAGES[LANGUAGE]['output_date']}          #{Date.today.strftime('%d/%m/%Y')}
    #{MESSAGES[LANGUAGE]['output_end_date']} #{Date.today.next_month(loan_term_months).strftime('%d/%m/%Y')}
"

wait_output(MESSAGES[LANGUAGE]['output_calculating'], calculation_output)

if ask(prompt("prompt_export"))

  wait_output(MESSAGES[LANGUAGE]["output_exporting"])

  txt_file = File.new("loan_#{username.delete(' ').downcase}_#{Date.today.strftime('%m%d%Y')}.txt", "w")
  txt_file.puts MESSAGES[LANGUAGE]['file_program_name']
  txt_file.puts "\n"
  txt_file.puts MESSAGES[LANGUAGE]['file_info']
  txt_file.puts "\n"
  txt_file.puts user_info
  txt_file.puts calculation_output
  txt_file.close
end

puts MESSAGES[LANGUAGE]['bye'] + username.capitalize + "!"
puts "\n"

puts MESSAGES[LANGUAGE]['thanks'].center(120, "#")
