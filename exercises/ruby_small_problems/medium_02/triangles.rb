# https://launchschool.com/exercises/7fe5eaf8


# >>>>>> Problem

# Write a method that takes the lengths of the 3 sides of a triangle 
# as arguments, and returns a symbol :equilateral, :isosceles, :scalene, 
# or :invalid depending on whether the triangle is equilateral, isosceles, 
# scalene, or invalid.

# input: three numbers

# output: a symbol (:equilateral, :isosceles, :scalene, or :invalid)

# >>>>>> Caveats

# equilateral All 3 sides are of equal length
# isosceles 2 sides are of equal length, while the 3rd is different
# scalene All 3 sides are of different length

# To be a valid triangle, 
# -the sum of the lengths of the two shortest 
#  sides must be greater than the length of the longest side, 
# - all sides must have lengths greater than 0: 

# if either of these conditions is not satisfied, the triangle is invalid.

# >>>>>> Examples and test cases

# triangle(3, 3, 3) == :equilateral
# triangle(3, 3, 1.5) == :isosceles
# triangle(3, 4, 5) == :scalene
# triangle(0, 3, 3) == :invalid
# triangle(3, 1, 1) == :invalid

# >>>>>> Data Structures

# keep sides in an array?


# >>>>>> Algorithm

# 1. check validity of the input:
#     - invalid if any side is 0
#     - invalid if the sum of the lenghts of the two shortest sides 
#       is not greater than the lenght of the longest side

# 2. check triangle type:
#     - if all sides equal: equilateral
#     - if two sides are equal: isosceles
#     - else: escalene

# >>>>>> Code

def triangle(side_a, side_b, side_c)
  sides = [side_a, side_b, side_c].sort

  return :invalid if sides.any? { |side| side == 0 } 
  return :invalid if sides[0..1].sum < sides[2]

  case
  when sides[0] == sides[1] && sides[1] == sides[2] then :equilateral
  when sides[0] == sides[1] || sides[1] == sides[2] then :isosceles
  else :scalene
  end

end