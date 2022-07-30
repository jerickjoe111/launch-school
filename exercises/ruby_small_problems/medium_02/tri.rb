# https://launchschool.com/exercises/1d04b607

# >>>>>> Problem

# Write a method that takes the 3 angles of a triangle as arguments, 
# and returns a symbol :right, :acute, :obtuse, or :invalid depending 
# on whether the triangle is a right, acute, obtuse, or invalid triangle.

# input: three integers that represent each triangle side in degrees

# output: a symbol: (right, acute, obtuse, invalid)

# >>>>>> Caveats

# right One angle of the triangle is a right angle (90 degrees)

# acute All 3 angles of the triangle are less than 90 degrees

# obtuse One angle is greater than 90 degrees.

# To be a valid triangle:

#  - the sum of the angles must be exactly 180 degrees, 

#  - all angles must be greater than 0

# You may assume integer valued angles so you don't have 
# to worry about floating point errors. 
 
# You may also assume that the arguments are specified in degrees.

# >>>>>> Examples and test cases

# triangle(60, 70, 50) == :acute
# triangle(30, 90, 60) == :right
# triangle(120, 50, 10) == :obtuse
# triangle(0, 90, 90) == :invalid
# triangle(50, 50, 50) == :invalid


# >>>>>> Data Structures

# we will keep the angles in an array `angles`


# >>>>>> Algorithm

# 1. check validity of the triangle
#     return invalid if:
#       - sum of the degrees is not 180
#       - any angle is equal to 0

# 2. check triangle:
#       - if one angle is 90: return right
#       - if all angles are less than 90: return acute
#       - else: return obtuse
   
# >>>>>> Code

def triangle(angle_a, angle_b, angle_c)
  angles = [angle_a, angle_b, angle_c]

  return :invalid if angles.any? { |angle| angle == 0}
  return :invalid if angles.sum != 180

  case
  when angles.any? { |angle| angle == 90 } then :right
  when angles.all? { |angle| angle < 90 }  then :acute
  else :obtuse
  end
end

p triangle(60, 70, 50) == :acute
p triangle(30, 90, 60) == :right
p triangle(120, 50, 10) == :obtuse
p triangle(0, 90, 90) == :invalid
p triangle(50, 50, 50) == :invalid