require 'minitest/autorun'
require_relative 'boomerang'

class BoomerangTest < MiniTest::Test
  def test_boomerang
    # 
    assert_equal true, Boomerang.boomerang?([0, 1, 2, 3, 2, 1, 0])
  end

  def test_reverse_boomerang
    
    assert_equal true, Boomerang.boomerang?([4, 2, 0, 2, 4])
  end

  def test_no_plateau
    
    assert_equal false, Boomerang.boomerang?([0, 2, 2, 3, 2, 1, 0])
  end

  def test_no_plateau_elbow
    
    assert_equal false, Boomerang.boomerang?([4, 2, 0, 0, 2, 4])
  end

  def test_asymmetric_shape
    
    assert_equal true, Boomerang.boomerang?([0, 1, 2, 3, 4, 1, 0])
  end

  def test_asymmetric_edges
    
    assert_equal true, Boomerang.boomerang?([4, 2, 1, 0, 3])
  end

  def test_multiple_elbows
    
    assert_equal false, Boomerang.boomerang?([1, 2, 4, 2, 1, 2, 4])
  end

  def test_missing_elbow
    
    assert_equal false, Boomerang.boomerang?([1, 2, 3, 4])
  end

  def test_missing_elbow_reverse
    
    assert_equal false, Boomerang.boomerang?([4, 3, 2, 1])
  end

  def test_shortest_boomerang
    
    assert_equal true, Boomerang.boomerang?([1, 10, 1])
  end

  def test_boomerang_too_short
    
    assert_equal false, Boomerang.boomerang?([1])
  end
end