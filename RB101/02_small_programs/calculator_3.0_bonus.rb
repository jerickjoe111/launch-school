# 15. Assignment: Calculator: Bonus Features

# Calculator 3.0

# Available languages: English (en), Spanish (es)
# To change language, assign LANGUAGE to desired language.

# Lucas Sorribes, June 2022.

require "yaml"

MESSAGES = YAML.load_file('calculator_messages.yml')
LANGUAGE = "en"

def messages(message, lang='en')
  MESSAGES[lang][message]
end

def prompt(key)
  message = messages(key, LANGUAGE)
  puts "=> #{message}"
end

def valid_number?(number)
  number.match?(/^\-*\d+(\.\d+)*$/) && !number.empty?
end

def float_or_int(number)
  number.match?(/\./) ? number.to_f : number.to_i
end

system("clear")
puts MESSAGES[LANGUAGE]["welcome"].center(120, "#")
puts "\n"

name = ""
loop do
  prompt "prompt_name"
  name = gets.chomp.strip
  break unless name.empty?
end

puts MESSAGES[LANGUAGE]["greet"] + name + "!"

loop do # Main loop (see lines 102-108)
  number01 = ""
  loop do
    prompt "prompt_number01"
    number01 = gets.chomp.strip
    if valid_number?(number01)
      number01 = float_or_int(number01)
      break
    else
      prompt "valid_number"
    end
  end

  number02 = ""
  loop do
    prompt "prompt_number02"
    number02 = gets.chomp.strip
    if valid_number?(number02)
      number02 = float_or_int(number02)
      break
    else
      prompt "valid_number"
    end
  end

  prompt "prompt_operation"

  operator = ""
  loop do
    operator = gets.chomp.strip
    break if !operator.match?(/[^1-4]/) && !operator.empty?
    prompt "valid_operation"
  end

  result = case operator
           when "1"
             number01 + number02
           when "2"
             number01 - number02
           when "3"
             number01 * number02
           when "4"
             if number02.abs == 0
               prompt "zero_division"
             else
               number01.to_f / number02
             end
           end

  operation = {
    "1" => MESSAGES[LANGUAGE]["addition"],
    "2" => MESSAGES[LANGUAGE]["subtraction"],
    "3" => MESSAGES[LANGUAGE]["multiplication"],
    "4" => MESSAGES[LANGUAGE]["division"]
  }
  if result
    puts MESSAGES[LANGUAGE]["performing"] + " " + operation[operator] + "... "
    puts MESSAGES[LANGUAGE]["result"] + " #{format('%.2f', result)}"
  end

  answer = ""
  loop do
    prompt "prompt_another_calc"
    answer = gets.chomp.strip.downcase[0]
    break if answer == "y" || answer == "n"
  end
  break if answer == "n"

  system("clear")
end

puts MESSAGES[LANGUAGE]["goodbye"].center(120, "#")
