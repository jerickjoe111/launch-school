# Exercise 06

# Write a minitest assertion that will fail unless employee.hire raises 
# a NoExperienceError exception.

require 'minitest/autorun'

class Test < MiniTest::Test
  def test_no_experience
    assert_raises(NoExperienceErrror) do
      employee.hire
    end
  end
end