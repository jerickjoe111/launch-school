VALUES = [
  ["M", 1000], 
  ["D", 500], 
  ["C", 100], 
  ["L", 50], 
  ["X", 10], 
  ["V", 5], 
  ["I", 1], 
]

def to_roman(number)
  roman = ''
  VALUES.each do |pair|
    letter = pair[0]
    value = pair[1]
    roman += letter*(number / value)
    number = number % value
  end
  roman
end