# Exercise 09

# Write a test that will fail if list and the return value of list.process are 
# different objects.

require 'minitest/autorun'

class Test < MiniTest::Test
  def test_equality
    assert_same(list, list.process)
  end
end