# https://launchschool.com/exercises/0f677535

# PEDAC

# >>>>>> Problem
# input:

# output:

# >>>>>> Examples and test cases

# >>>>>> Data Structures


# >>>>>> Algorithm

# 1. init. `stack` to []

# 2. init. `register` to 0

# 3. split input string in "words" (`instructions`)

# 4. for each instruction in input string:
#     perform operation according to instruction content:
#         if it is an integer: set `register` to integer
#         if it is a word: perform operation

# >>>>>> Code

require "pry"

def minilang(input_string)

  stack = []

  register = 0

  instructions = input_string.split(" ")

  instructions.each do |instruction|

    case instruction
    when /^\-*\d+(\.\d+)*$/ then register = instruction.to_i
    when "PUSH" then stack.push(register)
    when "ADD" then register += stack.pop
    when "SUB" then register -= stack.pop
    when "MULT" then register *= stack.pop
    when "DIV" then register /= stack.pop
    when "MOD" then register %= stack.pop
    when "POP" then register = stack.pop
    when "PRINT" then puts register
    end
  end

end

minilang("123 PUSH ADD")


# PUSH Push the register value on to the stack. Leave the value in the register.
# ADD Pops a value from the stack and adds it to the register value, storing the result in the register.
# SUB Pops a value from the stack and subtracts it from the register value, storing the result in the register.
# MULT Pops a value from the stack and multiplies it by the register value, storing the result in the register.
# DIV Pops a value from the stack and divides it into the register value, storing the integer result in the register.
# MOD Pops a value from the stack and divides it into the register value, storing the integer remainder of the division in the register.
# POP Remove the topmost item from the stack and place in register
# PRINT Print the register value

minilang('5 PUSH 3 MULT PRINT')
# 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT')
# 5
# 3
# 8

minilang('5 PUSH POP PRINT')
# 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')
# 5
# 10
# 4
# 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT ')
# 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT ')
# 12

minilang('-3 PUSH 5 SUB PRINT')
# 8

minilang('6 PUSH')
# (nothing printed; no PRINT commands)