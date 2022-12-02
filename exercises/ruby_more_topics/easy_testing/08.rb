# Exercise 08

# Write a minitest assertion that will fail if the class of value is not 
# Numeric or one of Numeric's subclasses (e.g., Integer, Float, etc).

require 'minitest/autorun'

class Test < MiniTest::Test
  def test_kind
    assert_kind_of(Numeric, value)
  end
end