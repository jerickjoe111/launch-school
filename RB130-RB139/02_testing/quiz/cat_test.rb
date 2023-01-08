require 'minitest/autorun'
# require 'minitest/reporters'
# Minitest::Reporters.use!

require_relative 'cat'

class CatTest < MiniTest::Test
  def setup
    @kitty = Cat.new('Kitty', 3)
  end

  def test_is_cat
    assert(@kitty.is_a?(Cat))
  end

  def test_name
    assert_equal('Kitty', @kitty.name)
  end

  def test_miaow
    assert_match(/ is miaowing\./, @kitty.miaow)
  end
end