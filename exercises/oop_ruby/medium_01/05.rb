# Exercise 05

# Write a class that implements a miniature stack-and-register-based 
# programming language that has the following commands:

# n Place a value n in the "register". Do not modify the stack.

# PUSH Push the register value on to the stack. Leave the value in the register.

# ADD Pops a value from the stack and adds it to the register value, 
#     storing the result in the register.
# SUB Pops a value from the stack and subtracts it from the register value, 
#     storing the result in the register.

# MULT Pops a value from the stack and multiplies it by the register value, 
#     storing the result in the register.

# DIV Pops a value from the stack and divides it into the register value, 
#     storing the integer result in the register.

# MOD Pops a value from the stack and divides it into the register value, 
#     storing the integer remainder of the division in the register.

# POP Remove the topmost item from the stack and place in register

# PRINT Print the register value

# All operations are integer operations (which is only important with DIV and MOD).

# Programs will be supplied to your language method via a string passed in as an argument. 
# Your program should produce an error if an unexpected item is present in the string, 
# or if a required stack value is not on the stack when it should be (the stack is empty). 
# In all error cases, no further processing should be performed on the program.

# You should initialize the register to 0.

class Minilang
  def initialize(program)
    @stack = []
    @register = 0
    @program = program.split
  end

  def eval
    program.each do |token|
      validate(token.downcase)
    end
  end

  private

  attr_reader :stack, :instructions
  attr_accessor :register

  def validate(token)
    if token =~ /\A[-+]?\d+\z/ then self.register = token.to_i
    elsif respond_to?(token, true) then execute(token.to_sym)
    else raise TypeError, "Invalid token: #{token}"
    end
  end

  def execute(instruction)
    if [:push, :print].include?(instruction) then send(instruction)
    elsif !stack.empty? then send(instruction)
    else raise TypeError, 'Stack empty!'
    end
  end

  def push
    stack.push(register)
  end

  def add
    self.register += stack.pop
  end

  def sub
    self.register -= stack.pop
  end

  def mult
    self.register *= stack.pop
  end

  def div
    self.register /= stack.pop
  end

  def mod
    self.register %= stack.pop
  end

  def pop
    self.register = stack.pop
  end

  def print
    puts register
  end
end
