# Exercise 01

# Write a minitest assertion that will fail if the value.odd? is not true.
require 'minitest/autorun'

class Test < MiniTest::Test
  def test_odd
    assert(value.odd?, 'value is not odd')
  end

  def test_odd_alt
    assert_equal(true, value.odd?)
  end
end

