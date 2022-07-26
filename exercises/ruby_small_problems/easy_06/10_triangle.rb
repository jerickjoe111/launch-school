
def triangle(height)
  print "\n"
  
  counter = 1
  loop do
    puts " " * (height - counter) + "*" * counter
    counter += 1
    break if counter > height
  end

end

triangle2(5)