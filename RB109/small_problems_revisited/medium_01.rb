# 01

ROTATION = 1

def rotate_array(array)
  array = array.dup
  ROTATION.times { array.push(array.shift) }
  array
end

# 02 

def rotate_rightmost_digits(number, n)
  rotation_range = (-n..-1)

  digits = number.digits.reverse[0...-n]
  rotated_digits = rotate_array(number.digits.reverse[-n..-1])

  
  (digits + rotated_digits).join.to_i
end

# 03

def max_rotation(number)
  index = number.digits.size
  
  while index > 1
    number = rotate_rightmost_digits(number, index)
    index -= 1
  end

  number
end

# 04

def lights(n)
  lights = {}
  n.times { |i| lights[i + 1] = false }

  n.times do |i|
    lights.each do |light_number, switch|
      lights[light_number] = !switch if light_number % (i + 1) == 0
    end
  end  

  lights.keys.select { |light_number| lights[light_number] }
end

# 07

def fibonacci(n)
  return 1 if n <= 2

  fibonacci(n - 1) + fibonacci(n - 2)
end

