# Exercise 02

# Write a minitest assertion that will fail if value.downcase 
# does not return 'xyz'.

require 'minitest/autorun'

class Test < MiniTest::Test
  def test_downcase
    assert_equal('xyz', value.downcase)
  end
end