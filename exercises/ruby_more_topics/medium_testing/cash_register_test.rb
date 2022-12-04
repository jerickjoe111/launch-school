require 'minitest/autorun'
# require 'minitest/reporters'
# Minitest::Reporters.use!

require_relative 'cash_register'
require_relative 'transaction'

class CashRegisterTest < MiniTest::Test
  TEST_AMOUNT = 100

  def setup
    @cash_register = CashRegister.new(TEST_AMOUNT)
    @transaction = Transaction.new(TEST_AMOUNT)
  end

  def test_accept_money
    paid = TEST_AMOUNT / 2
    @transaction.amount_paid = paid

    previous_money = @cash_register.total_money
    @cash_register.accept_money(@transaction)

    assert_equal(previous_money + paid, @cash_register.total_money)
  end

  def test_change
    paid = TEST_AMOUNT * 2
    @transaction.amount_paid = paid

    assert_equal(
      paid - @transaction.item_cost,
      @cash_register.change(@transaction)
    )
  end

  def test_give_receipt
    assert_output("You've paid $#{TEST_AMOUNT}.\n") do
      @cash_register.give_receipt(@transaction)
    end
  end
end
