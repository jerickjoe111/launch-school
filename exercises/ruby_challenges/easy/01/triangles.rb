# Exercise 01

# Write a program to determine whether a triangle is 
# equilateral, isosceles, or scalene.

# An equilateral triangle has all three sides the same length.

# An isosceles triangle has exactly two sides of the same length.

# A scalene triangle has all sides of different lengths.

# Note: For a shape to be a triangle at all, all sides must be of length > 0, 
# and the sum of the lengths of any two sides must be greater than the length 
# of the third side.

class Triangle
  attr_reader :side_a, :side_b, :side_c, :sides

  def initialize(side_a, side_b, side_c)
    @side_a = side_a
    @side_b = side_b
    @side_c = side_c
    @sides = [side_a, side_b, side_c]
    raise ArgumentError.new('Invalid triangle sides') unless legal?
  end
  
  def kind
    if sides.uniq.size == 1 then 'equilateral'
    elsif sides.uniq.size == 2 then 'isosceles'
    else 'scalene'
    end
  end

  private

  def legal?
    sides.all?(&:positive?) &&
      (side_a + side_b) > side_c &&
      (side_b + side_c) > side_a
  end
end
