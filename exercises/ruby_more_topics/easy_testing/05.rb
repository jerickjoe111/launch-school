# Exercise 05

# Write a minitest assertion that will fail if the 'xyz' is not in the 
# Array list.

require 'minitest/autorun'

class Test < MiniTest::Test
  def test_list
    assert_includes(list, 'xyz')
  end
end
