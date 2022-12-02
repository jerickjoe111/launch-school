# Exercise 03

# Write a minitest assertion that will fail if value is not nil.

require 'minitest/autorun'

class Test < MiniTest::Test
  def test_value
    assert_equal(nil, value)
  end
  
  def test_value_alt
    assert_nil(value)
  end
end