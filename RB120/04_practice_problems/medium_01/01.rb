# Exercise 01

class BankAccount
  attr_reader :balance

  def initialize(starting_balance)
    @balance = starting_balance
  end

  def positive_balance?
    balance >= 0
  end
end

# Alyssa glanced over the code quickly and said - 
# "It looks fine, except that you forgot to put the @ before balance 
# when you refer to the balance instance variable in the body of the positive_balance? method."

# "Not so fast", Ben replied. "What I'm doing here is valid - I'm not missing an @!"

# Who is right, Ben or Alyssa, and why?

# Ben is right. line 11 is composed of the call to a `balance` getter method (courtesy of the 
# line 4 `attr_reader`), on which we call the `>=` method passing the integer `0` as an argument,
# that will return true if the `@balance` instance variable contains a positive integer.