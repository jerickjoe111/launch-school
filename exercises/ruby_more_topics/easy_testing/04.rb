# Exercise 04

# Write a minitest assertion that will fail if the Array list is not empty.

require 'minitest/autorun'

class Test < MiniTest::Test
  def test_list
    assert_empty(list)
  end
end