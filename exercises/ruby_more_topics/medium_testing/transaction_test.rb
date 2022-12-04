require 'minitest/autorun'
# require 'minitest/reporters'
# Minitest::Reporters.use!

require_relative 'cash_register'
require_relative 'transaction'

class TransactionTest < MiniTest::Test
  TEST_AMOUNT = 100

  def setup
    @transaction = Transaction.new(TEST_AMOUNT)
  end

  def test_prompt_for_payment
    amount_paid_input = StringIO.new("#{TEST_AMOUNT}\n")

    assert_output("You owe $#{@transaction.item_cost}.\nHow much are you paying?\n") do
      @transaction.prompt_for_payment(input: amount_paid_input)
    end

    assert_equal(
      amount_paid_input.string.to_i,
      @transaction.amount_paid
    )
  end
end