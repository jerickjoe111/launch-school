# Exercise 10

# Write a test that will fail if 'xyz' is one of the elements in the Array list:

require 'minitest/autorun'

class Test < MiniTest::Test
  def test_refute
    refute_includes(list, 'xyz')
  end
end